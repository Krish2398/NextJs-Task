import { useRouter } from "next/router";
import Pathselector from "../../components/path";
export default function Defalut() {
	const router = useRouter();

	return (
		<>
			<Pathselector path={router.asPath} />
		</>
	);
}
