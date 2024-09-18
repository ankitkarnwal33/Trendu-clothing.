import { ReactNode } from "react";
import "./globals.scss";

export const metadata = {
  title: "TrendU",
  description:
    "Discover the latest fashion trends at Trendu. Shop stylish and affordable clothing for men, women, and kids. From chic outfits to everyday essentials, find your perfect look with free shipping on orders over 550. Stay trendy with Trendu!",
  icons: {
    icon: "/favicon.ico",
  },
  link: `href="https://fonts.cdnfonts.com/css/satoshi?styles=135009,135004,135005,135006,135007,135008,135002,135003,135000,135001" rel="stylesheet"`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="container">{children}</body>
    </html>
  );
}
