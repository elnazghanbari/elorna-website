import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://elorna.net"),
  title: {
    default: "ELORNA — AI Business Operating System",
    template: "%s | ELORNA",
  },
  description:
    "ELORNA helps founders build, sell and grow through one connected AI-powered business operating system.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/elorna-emblem.jpg",
    shortcut: "/elorna-emblem.jpg",
    apple: "/elorna-emblem.jpg",
  },
  openGraph: {
    title: "ELORNA — AI Business Operating System",
    description:
      "One connected path from idea to launch, sales and growth — with AI assistance and founder control.",
    url: "https://elorna.net",
    siteName: "ELORNA",
    type: "website",
    images: [
      {
        url: "/elorna-vision.jpg",
        width: 1200,
        height: 630,
        alt: "ELORNA — AI Business Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELORNA — AI Business Operating System",
    description:
      "Build the business. Shape the future.",
    images: ["/elorna-vision.jpg"],
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
