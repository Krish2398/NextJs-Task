import Link from "next/link";
export default function SecondPage() {
	return (
		<>
			<h1>SecondPage</h1>
			<h1>
				<Link href="/dashboard">Back</Link>
			</h1>
		</>
	);
}
