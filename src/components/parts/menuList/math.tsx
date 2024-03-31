"use client";

/**
 * コメントアウトしてるところについて
 *  -> よくわからない課程だったので一旦保留にしてる(単元名が抽象的すぎ)
 *     それ以前に「数学活用」がわからん
 */

import { ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface unit {
  name: string,
  link: string,
  contents: {
    name: string,
    link: string
  }[]
}

const dataMap: unit[] = [
  {
    name: "I・A",
    link: "/math/1",
    contents: [
      {
        name: "数と式",
        link: "/math/1/1"
      },
      {
        name: "図形と計量",
        link: "/math/1/2"
      },
      {
        name: "二次関数",
        link: "/math/1/3"
      },
      {
        name: "データの分析",
        link: "/math/1/4"
      },
      {
        name: "図形の性質",
        link: "/math/a/1"
      },
      {
        name: "場合の数と確率",
        link: "/math/a/2"
      },
      /* {
        name: "数学と人間の活動"
      } */
    ]
  }, {
    name: "II・B",
    link: "/math/2",
    contents: [
      {
        name: "いろいろな式",
        link: "/math/2/1"
      },
      {
        name: "図形と方程式",
        link: "/math/2/2"
      },
      {
        name: "指数関数・対数関数",
        link: "/math/2/3"
      },
      {
        name: "三角関数",
        link: "/math/2/4"
      },
      {
        name: "微分・積分",
        link: "/math/2/5"
      },
      {
        name: "数列",
        link: "/math/b/1"
      },
      {
        name: "統計的な推測",
        link: "/math/b/2"
      },
      /* {
        name: "数学と社会生活"
      } */
    ]
  }, {
    name: "C",
    link: "/math/c",
    contents: [
      {
        name: "ベクトル",
        link: "/math/c/1"
      },
      {
        name: "平面上の曲線と複素数平面",
        link: "/math/c/2"
      },
      /* {
        name: "数学的な表現の工夫"
      } */
    ]
  }, {
    name: "III",
    link: "/math/3",
    contents: [
      {
        name: "極限",
        link: "/math/3/1"
      },
      {
        name: "微分法",
        link: "/math/3/2"
      },
      {
        name: "積分法",
        link: "/math/3/3"
      }
    ]
  }
];

const defaultMap = (
  <li>
    <ul>
      <ListSubheader>数学</ListSubheader>
      {dataMap.map((item, index) => (
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
);

const tags = ["1", "a", "2", "b", "c", "3"].map(x => `/math/${x}`)

export const MathMap = () => {
  const pathname = usePathname();

  // 見つからない場合、デフォルトのやつを返す
  if (!tags.some(tag => pathname.startsWith(tag))) return defaultMap;

  return (
    <>
      <li>
        <ul>

          <ListSubheader>数 {unit.name}</ListSubheader>
          {unit.contents.map((item, _index) => (
            <ListItemButton key={`math-unit${index}-${_index}`} component={Link} href={item.link} sx={{
              color: "#000",
              "&:hover": {
                color: "#8f8f8f"
              }
            }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </ul>
      </li>
    </>
  )
}