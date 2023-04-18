import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

export default function Repo(props) {
	const [user, setUser] = useState([]);
	const [repos, setRepos] = useState([]);

	// sorting repo function
	const sorted = (selected, repo) => {
		let sortedRepos = [...repo];
		if (selected === "date") {
			sortedRepos.sort((a, b) => {
				return new Date(b.created_at) - new Date(a.created_at);
			});
		} else if (selected === "stars") {
			sortedRepos.sort((a, b) => {
				return b.stargazers_count - a.stargazers_count;
			});
		} else if (selected === "forks") {
			sortedRepos.sort((a, b) => {
				return b.forks_count - a.forks_count;
			});
		}
		setRepos(sortedRepos);
	};

	// for fetching information
	useEffect(() => {
		fetch(`https://api.github.com/users/${props.user}`)
			.then(async (res) => {
				res = await res.json();
				setUser(res);
			})
			.catch((err) => console.log(err));
	}, [props.user]);

	useEffect(() => {
		fetch(`https://api.github.com/users/${props.user}/repos`)
			.then(async (res) => {
				res = await res.json();
				sorted("date", res);
				document.getElementById("sort-selected").value = "date";
			})
			.catch((err) => console.log(err));
	}, [props.user]);

	// main component
	return (
		<div className="flex flex-col items-center justify-center p-10 w-full px-20 ">
			<div className="flex md:flex-row sm:flex-col justify-center items-center">
				<img
					src={user.avatar_url}
					alt="profile/avatar"
					className="rounded-full lg:h-40 lg:w-40 md:h-30 md:w-30 m-5"
				/>
				<div className="flex flex-col">
					<h1 className="text-3xl font-bold text-gray-900">
						{user.name}
					</h1>
					<p className="text-center">{user.bio}</p>
				</div>
			</div>
			<div className="w-full p-2 bg:black">
				<label
					htmlFor="sort-select"
					className="mb-2 text-sm font-medium text-gray-900"
				>
					Sorted by :
				</label>

				<select
					name="sort"
					id="sort-selected"
					onChange={(e) => sorted(e.target.value, repos)}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  px-5"
				>
					<option value="date">Date created</option>
					<option value="stars">Number of stars</option>
					<option value="forks">Number of forks</option>
				</select>
			</div>

			<div className="grid grid-cols-2 gap-4 p-4">
				{repos.map((repo, key) => (
					<RepoCard data={repo} key={key} />
				))}
			</div>
		</div>
	);
}
