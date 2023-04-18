import React from "react";

function Search(props) {
	const selectUser = (enteredUser) => {
		const newUser = enteredUser === "" ? "tab21" : enteredUser;
		props.getuser(newUser);
	};

	return (
		<div className="bg-black w-full p-2 flex px-4 space-x-3 lg:px-20">
			<input
				type="text"
				name="user"
				id="user"
				placeholder="tab21"
				className="p-1 w-4/5 rounded-md"
				required
			/>
			<button
				type="submit"
				className="p-1 w-1/5 bg-green-500 rounded-md text-white hover:bg-emerald-500"
				onClick={() =>
					selectUser(document.getElementById("user").value)
				}
			>
				Search
			</button>
		</div>
	);
}

export default Search;
