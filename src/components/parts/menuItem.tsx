import { ListItem, ListItemButton, /* ListItemIcon, */ ListItemText } from "@mui/material";
import Link from "next/link";

export const MenuItem = ({ text, href /* icon  */}: {
  text: string,
  href: string
}) => (
  <ListItem disablePadding>
    <ListItemButton component={Link} href={href} rel="noopener" target="_blank">
      {/* <ListItemIcon></ListItemIcon> */}
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
)