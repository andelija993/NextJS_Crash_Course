import "./globals.css";

import Header from "./components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Traversy Media",
  description: "Web development tutorials and courses",
  keywords:
    "web development, programming, tutorials, courses, javascript, react, vue, angular, css, html, nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header></Header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
