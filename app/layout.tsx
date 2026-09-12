import "./globals.css";

export const viewport = {
  themeColor: "#050A11",
  colorScheme: "dark",
};

export const metadata = {
  metadataBase: new URL("https://elorna.net"),
  title: {
    default: "ELORNA — AI Business Operating System",
    template: "%s | ELORNA",
  },
  description:
    "ELORNA is an AI-powered business operating system for founders and small businesses — connecting strategy, launch, sales and growth in one intelligent path.",
  keywords: [
    "ELORNA",
    "elorna.net",
    "AI business operating system",
    "AI for founders",
    "business growth AI",
    "startup business platform",
    "AI business tools",
  ],
  authors: [{ name: "ELORNA", url: "https://elorna.net" }],
  creator: "ELORNA",
  publisher: "ELORNA",
  applicationName: "ELORNA",
  category: "business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/elorna-emblem.jpg",
    shortcut: "/elorna-emblem.jpg",
    apple: "/elorna-emblem.jpg",
  },
  openGraph: {
    title: "ELORNA — AI Business Operating System",
    description:
      "ELORNA connects strategy, launch, sales and growth in one AI-assisted, founder-controlled business operating system.",
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
