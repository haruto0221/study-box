import { ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import Link from "next/link";

interface linkMap {
  name: string,
  link: string
}

const linkMap: linkMap[] = [
  {
    name: "I・A",
    link: "/math/1"
  }, {
    name: "II・B",
    link: "/math/2"
  }, {
    name: "C",
    link: "/math/C"
  }, {
    name: "III",
    link: "/math/3"
  }
];

export const MathMap = () => (
  <li>
    <ul>
      <ListSubheader>数学</ListSubheader>
      {linkMap.map((item, index) => (
        <ListItemButton key={`math-${index}`} component={Link} href={item.link} sx={{
          color: "#000",
          "&:hover": {
            color: "#8f8f8f"
          }
        }}>
          <ListItemText primary={`数 ${item.name}`} />
        </ListItemButton>
      ))}
    </ul>
  </li>
)