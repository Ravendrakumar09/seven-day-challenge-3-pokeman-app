import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-custom-bg">
        {children}
      </body>
    </html>
  );
}
