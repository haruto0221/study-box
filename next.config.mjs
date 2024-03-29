import nextMDX from '@next/mdx';
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
			remarkGfm,
      remarkMath,
      [remarkToc, { maxDepth: 3, heading: "目次" }],
      remarkBreaks,
		],
    rehypePlugins: [rehypeKatex, rehypePrism, rehypeSlug]
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
};

export default withMDX(nextConfig);