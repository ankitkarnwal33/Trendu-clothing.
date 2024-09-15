import crypto from "node:crypto";

export function hashUserPassword(password: string): {
  hashedPassword: string;
  salt: string;
} {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString("hex");
  return { hashedPassword, salt };
}

type Password = {
  storedPassword: string;
  userPassword: string;
  salt: string;
};
export function verifyUserPassword(pass: Password): boolean {
  const hashedPasswordBuffer = Buffer.from(pass.storedPassword, "hex");
  const hashedUserPassword = crypto.scryptSync(
    pass.userPassword,
    pass.salt,
    64
  );
  return crypto.timingSafeEqual(hashedPasswordBuffer, hashedUserPassword);
}
