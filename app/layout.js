import "./globals.css";

export const metadata = {
  title: "Portfolio Of Jacob R",
  description: "This is the Guy your looking for",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cloud-background bg-cover">{children}</body>
    </html>
  );
}
