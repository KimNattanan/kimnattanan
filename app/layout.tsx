import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Background from "@/components/Background";
import Startup from "@/components/Startup";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mplusRounded = localFont({
  src: [
    {
      path: '../public/fonts/mplusrounded1c/MPLUSRounded1c-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/mplusrounded1c/MPLUSRounded1c-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/mplusrounded1c/MPLUSRounded1c-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mplusrounded1c/MPLUSRounded1c-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/mplusrounded1c/MPLUSRounded1c-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/mplusrounded1c/MPLUSRounded1c-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/mplusrounded1c/MPLUSRounded1c-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: "KIM Nattanan",
  description: "kimchi?",
  openGraph: {
    images: [
      '/favicon.png',
    ]
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${mplusRounded.className} ${geistMono.variable} antialiased font-n`}
      >
        <Startup delay={1} duration={0.5}/>
        <Background width={272} height={253}/>
        {children}
      </body>
    </html>
  );
}
