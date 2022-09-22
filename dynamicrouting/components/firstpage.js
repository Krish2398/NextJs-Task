import Link from "next/link";
export default function FirstPage() {
	return (
		<>
			<h1>First page</h1>
			<h1>
				<Link href="/dashboard">Back</Link>
			</h1>
		</>
	);
}
