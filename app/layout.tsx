import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel Universe - Home Page",
  description: "This is the home page of the Marvel Universe app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lora.className}>
        <Nav />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
