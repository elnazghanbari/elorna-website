import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://elorna.net"),
  title: "ELORNA — AI Business Operating System",
  description:
    "ELORNA helps founders build, sell and grow through one AI-powered business operating system.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ELORNA — AI Business Operating System",
    description:
      "Build, sell and grow through one connected AI-powered business ecosystem.",
    url: "https://elorna.net",
    siteName: "ELORNA",
    type: "website",
  },
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
