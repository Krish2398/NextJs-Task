import Link from "next/link";
export default function Dashboard() {
	return (
		<>
			<h1>Dashboard page</h1>
			<h1>
				<Link href="/dashboard">Back</Link>
			</h1>
		</>
	);
}
