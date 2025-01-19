import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MouseParticles from "./components/MouseParticles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindcraft - AI Building in Minecraft",
  description: "Explore AI-powered building in Minecraft with Mindcraft. Learn about our tools, watch demonstrations, and join our community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#1A1A1A]">
          <Navigation />
          <MouseParticles />
          <div className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
