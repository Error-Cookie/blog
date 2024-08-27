import { MDXRemote } from "next-mdx-remote/rsc";
import { posts } from "../utils";

export async function generateStaticParams() {
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
	const post = posts.find((p) => p.slug === params.slug)!;

	return (
		<>
			<h1>{post.title}</h1>
			<time className="opacity-50">{post.date}</time>
			<MDXRemote source={post.content} />
		</>
	);
}
