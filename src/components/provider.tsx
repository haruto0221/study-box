"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export const Provider = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => (
  <AppRouterCacheProvider>
		{children}
	</AppRouterCacheProvider>
)