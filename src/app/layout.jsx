import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header/Header";

const inter = localFont({
    src: [
        {
            path: "../../public/fonts/Inter_24pt-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Inter_24pt-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
  title: "BookNest",
  description: "Your favorite books, all in one place.",
  icons: {
    icon: "/icons/books.png",
  },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <body className={inter.className}>
                <main>
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    );
}
