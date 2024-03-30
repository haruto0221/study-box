import { ListItem, ListItemText, ListSubheader } from "@mui/material";

interface linkMap {
  name: string,
  /* link: string */
}

const linkMap: linkMap[] = [
  {
    name: "Coming Soon..."
  }
];

export const EnglishMap = () => (
  <li>
    <ul>
      <ListSubheader>英語</ListSubheader>
      {linkMap.map((item, index) => (
        <ListItem key={`english-${index}`} /* component={"a"} href={item.link} */ sx={{
          color: "#000",
          "&:hover": {
            color: "#8f8f8f"
          }
        }}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </ul>
  </li>
)