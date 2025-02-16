import type { Metadata } from "next";
import localFont from "next/font/local";
import ".././globals.css";
import LeftSideBar from "@/component/LeftSideBar";
import RightSideBar from "@/component/RightSideBar";
import { ReactNode } from "react";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loader from "@/component/Loader";

const geistSans = localFont({
  src: ".././fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: ".././fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <div className="flex justify-between max-w-6xl mx-auto">
              <div className="hidden sm:inline border-r h-screen sticky top-0">
                <LeftSideBar />
              </div>
              <div className="w-2xl flex-1">{children}</div>
              <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
                <RightSideBar />
              </div>
            </div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
