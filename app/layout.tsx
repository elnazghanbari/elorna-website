import "./globals.css";

export const metadata = {
  title: "ELORNA — AI Business Operating System",
  description:
    "ELORNA helps founders build, sell and grow through one AI-powered business operating system."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
