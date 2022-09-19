import Link from "next/link";
export default function Dashboard() {
	return (
		<>
			<div className="sideBar">
				<header>Home</header>
				<details>
					<summary>
						<Link href="/dashbord/one">Dashboard</Link>
					</summary>
					<summary>
						<Link href="/dashboard/one/secondpage">second page</Link>
					</summary>
					<summary>
						<Link href="/dashboard/two/thirdpage">third page</Link>
					</summary>
					<summary>
						<Link href="/dashboard/three/fourth">fourth page</Link>
					</summary>
				</details>
			</div>
		</>
	);
}
