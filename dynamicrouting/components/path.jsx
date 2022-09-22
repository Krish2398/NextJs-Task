import Dashboard from ".";
import Sidebar from "../sidebar";
import FirstPage from "./firstpage";
import ForthPage from "./fourth";
import SecondPage from "./secondpage";
import ThirdPage from "./thirdpage";

export default function Pathselector(props) {
	let x;
	switch (props.path) {
		case "/dashboard":
			x = <Dashboard />;
			break;
		case "/dashboard/firstpage":
			x = <FirstPage />;
			break;
		case "/dashboard/secondpage":
			x = <SecondPage />;
			break;
		case "/dashboard/thirdpage":
			x = <ThirdPage />;
			break;
		case "/dashboard/fourth":
			x = <ForthPage />;
			break;
	}
	return (
		<>
			<Sidebar />
			<div>{x}</div>
		</>
	);
}
