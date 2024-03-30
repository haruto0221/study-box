"use client";

import { AppBar, Box, Drawer, Divider, Toolbar, Typography, List, Link } from '@mui/material';
import { MathMap } from './parts/menuList/math';
import { EnglishMap } from './parts/menuList/english';
import { MenuItem } from "./parts/menuItem";
import NextLink from 'next/link';
// import Link from 'next/link';

const drawerWidth = 240;

export const Header = () => (
  <>
    <AppBar position="fixed" elevation={0} color="inherit" sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      borderBottom: "1px solid #000"
    }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <Link href="/" component={NextLink} color="inherit" underline='none'>
            Study Box
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            '& ul': { padding: 0 },
          }}
          subheader={<li />}
        >
          <MathMap />
          <EnglishMap />

          <Divider />

          <MenuItem href="https://github.com/localer/study-box/issues" text="サイトの問題を報告" />
        </List>
      </Box>
    </Drawer>
  </>
)