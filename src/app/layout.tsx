import { Header } from "@/components/header";
import { Provider } from "@/components/provider";
import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from "next";
import 'katex/dist/katex.min.css'

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

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Provider>
        <body>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Header />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Typography paragraph component="div">
                {children}
              </Typography>
            </Box>
          </Box>

          <NextTopLoader />
        </body>
      </Provider>
    </html>
  );
}
