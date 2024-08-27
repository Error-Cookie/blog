export default function Header() {
	return (
		<nav className="flex justify-between border-b border-white/20 pb-2">
			<a className="font-bold" href="/">
				ErrorCookie
			</a>
			<div>
				<a href="/blog">blog</a>
			</div>
		</nav>
	);
}
