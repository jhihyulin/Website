import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_TC } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const notoSansTC = Noto_Sans_TC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jhihyu's WebSite",
  description: "jhihyu's WebSite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="jhihyu's WebSite" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${notoSans.className} ${notoSansTC.className} antialiased`}
      >
        <NextUIProvider>
          <ThemeProvider attribute="class" enableSystem={true}>
            {children}
            <footer className="flex flex-col gap-2 items-center justify-center">
              <p className="text-sm text-gray-500">Built with Next.js</p>
              <Link
                href="https://github.com/jhihyulin/Website"
                color="foreground"
                size="sm"
                underline="hover"
              >
                Repository
              </Link>
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} saget.me
              </p>
            </footer>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
