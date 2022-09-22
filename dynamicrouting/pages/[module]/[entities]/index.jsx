import { useRouter } from "next/router";
import Pathselector from "../../../components/path";
export default function Default1() {
	const router = useRouter();
	return (
		<>
			<Pathselector path={router.asPath} />
		</>
	);
}
