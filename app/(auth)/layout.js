import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Check Ease",
  description: "Feel the warmth, live the moments, cherish the memories.",
};

export default async function RootLayout({ children }) {

    await dbConnect();
    
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar sideMenu={false}/>
        <main>{children}</main>
      </body>
    </html>
  );
}
