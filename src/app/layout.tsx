import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/Style/Tailwind.css"
import "@/Style/Global.css"
import { ToastContainer } from 'react-toastify';
import Whatsapp from "@/components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neet Sarthi",
  description: "NEET Online Test Series 2022, Best NEET Coaching in KOTA. NEET Sarthi is your sarthi(Charioteer) for NEET preparation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
        <Whatsapp />
      </body>
    </html>
  );
}
