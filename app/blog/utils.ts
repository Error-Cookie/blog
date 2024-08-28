import { readdirSync, readFileSync } from "node:fs";
import matter from "gray-matter";
import path from "node:path";

export type Post = {
	slug: string;
	title: string;
	date: string;
	content: string;
};

const dir = path.join(process.cwd(), "app", "blog", "posts");
const files = readdirSync(dir, { withFileTypes: true }).filter((f) => path.extname(f.name) === ".mdx");

export const posts = files.map((f) => {
	const post = matter(readFileSync(path.join(f.parentPath, f.name)));
	return { slug: f.name.slice(0, -4), title: post.data.title, date: post.data.date, content: post.content };
});
