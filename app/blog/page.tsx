import { posts } from "./utils";

export default async function Blog() {
	return posts
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.map((p) => (
			<div key={p.slug} className="mb-4">
				<a className="text-2xl font-bold w-full" href={`/blog/${p.slug}`}>
					{p.title}
				</a>
				<br />
				<time className="opacity-50">{p.date}</time>
			</div>
		));
}
