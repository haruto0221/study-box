import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "名前がないページ - Study Box",
    template: "%s - Study Box"
  },
  description: "学習目的のサイト？数学好きすぎる by localer",
  authors: [
    {
      name: "@localer",
      url: "https://github.com/localer"
    }
  ],
  applicationName: "Study Box",
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  },
  openGraph: {
    type: "website",
    countryName: "jp",
    title: {
      default: "名前がないページ - Study Box",
      template: "%s - Study Box"
    },
    siteName: "Study Box"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
