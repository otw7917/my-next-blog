import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "next blog",
  description: "ok follow 13 history.. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header></Header>
        <div className='absolute top-14 px-4 w-full'>{children}</div>
      </body>
    </html>
  );
}
