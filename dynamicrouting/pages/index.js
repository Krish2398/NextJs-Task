import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
// import { AioutlineEye, AioutlineEyeInvisil } from "react-icons";
import styles from "../styles/Home.module.css";

export default function Home() {
	const router = useRouter();
	const [inputs, setInputs] = useState({});
	const [type, setType] = useState("password");
	const Change = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	function Eye() {
		type === "password" ? setType("text") : setType("password");
	}
	const handleClick = (event) => {
		event.preventDefault();
		console.log(inputs);
		Welcome();
	};

	function Welcome() {
		{
			inputs.username.length > 8 && inputs.password.length > 8
				? (alert(`Welcome! ${inputs.username}`), router.push("/dashboard"))
				: alert("Not valid");
		}
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>dynamic routing</title>
			</Head>

			<main className={styles.main}>
				<form onSubmit={handleClick}>
					<h1 className={styles.title}>Welcome to Loginpage</h1>
					<div className={styles.box}>
						<div className={styles.heading}>Login to Splitwise</div>
						<div className={styles.username}>Username</div>
						<input
							className={styles.textbox}
							type="text"
							placeholder="Username"
							name="username"
							value={inputs.username}
							onChange={Change}
						></input>
						<div className={styles.password}>Password</div>
						<div className={styles.fullbox}>
							<input
								className={styles.textbox1}
								onChange={Change}
								type="password"
								name="password"
								value={inputs.password}
								placeholder="Password"
							></input>
							{/* {type === "password" ? <AioutlineEye onClick={Eye} /> : <AioutlineEyeInvisil onClick={Eye} />} */}
						</div>
						<button tybe="submit" className={styles.loginbutton}>
							Login
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}
