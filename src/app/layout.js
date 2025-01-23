import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import KindeProviderWrapper from "@/components/KindeProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Blog Scope',
  description: 'A simple blog viewer app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <KindeProviderWrapper>
          <Header />
          <main>{children}</main>
        </KindeProviderWrapper>
      </body>
    </html>
  );
}
