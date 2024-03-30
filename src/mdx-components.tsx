import { Typography } from '@mui/material'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    h1: ({ children }) => <Typography variant="h4" gutterBottom>{children}</Typography>,
    h2: ({ children }) => <Typography variant="h5" gutterBottom>{children}</Typography>,
    a: ({ children, href }) => href ? <Link href={href} rel="noopener" target="_blank">{children}</Link> : <Typography paragraph sx={{ lineHeight: "200%" }}>{children}</Typography>,
    p: ({ children }) => <Typography paragraph sx={{ lineHeight: "200%" }}>{children}</Typography>
  }
}