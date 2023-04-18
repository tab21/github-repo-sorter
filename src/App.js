import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Repo from "./components/Repo";

function App() {
	const [USER, setUser] = useState("tab21");
	const pull_user = (user) => {
		setUser(user);
	};

	return (
		<main>
			<Search getuser={pull_user} />
			<Repo user={USER} />
		</main>
	);
}

export default App;
