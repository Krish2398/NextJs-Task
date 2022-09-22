import { useRouter } from "next/router";
import styles from "../dynamicrouting/styles/Home.module.css";
export default function Sidebar() {
	const router = useRouter();
	function Defalut() {
		router.push("/dashboard");
	}
	function Firstpage() {
		router.push("/dashboard/firstpage");
	}
	function Secondpage() {
		router.push("/dashboard/secondpage");
	}
	function Thirdpage() {
		router.push("/dashboard/thirdpage");
	}
	function Fourthpage() {
		router.push("/dashboard/fourth");
	}

	return (
		<>
			<div className={styles.sidebar}>
				<header>Home</header>
				<details open>
					<summary>
						<div onClick={Defalut}>Dashboard</div>
					</summary>
					<summary className={styles.position}>
						<div onClick={Firstpage}>First Page</div>
					</summary>
					<summary className={styles.position}>
						<div onClick={Secondpage}>Second page</div>
					</summary>
					<summary className={styles.position}>
						<div onClick={Thirdpage}>Third page</div>
					</summary>
					<summary className={styles.position}>
						<div onClick={Fourthpage}>Fourth page</div>
					</summary>
				</details>
			</div>
		</>
	);
}
