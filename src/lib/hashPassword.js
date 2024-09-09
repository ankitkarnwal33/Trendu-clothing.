import crypto from 'node:crypto'

export function hashUserPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hashedPassword = crypto.scryptSync(password, salt, 64).toString("hex");
    return { hashedPassword, salt };
}
export function verifyUserPassword(storedPassword, userPassword, salt) {
    const hashedPasswordBuffer = Buffer.from(storedPassword, "hex");
    const hashedUserPassword = crypto.scryptSync(userPassword, salt, 64);
    return crypto.timingSafeEqual(hashedPasswordBuffer, hashedUserPassword);
}