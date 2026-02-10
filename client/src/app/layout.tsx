import type { Metadata } from "next";
import { Google_Sans_Flex, Caveat } from "next/font/google";
import "./scss/main.scss";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  display: "swap",
});

const meowScript = Caveat({
  variable: "--font-caveat",
  weight: "400",
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Framekit - Small details, Shared ideas",
  description:
    "Framekit is a platform where designers and developers can share UI ideas, design details, and the thinking behind them.",
  icons: {
    icon: "/images/blue_avatar_image_rounded.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${googleSansFlex.variable} ${meowScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
