import "./globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <header
          style={{
            backgroundColor: "teal",
            padding: "20px",
            color: "white",
            fontSize: "22px",
          }}>
          Header
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "gray",
            padding: "20px",
            color: "white",
            fontSize: "22px",
          }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
