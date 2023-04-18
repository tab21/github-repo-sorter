import React from "react";

export default function RepoCard({ data }) {
	return (
		<div className="border-2 border-black-500 p-3 rounded-md relative">
			<p className="text-red-500 float-right border border-red-500 rounded-full py-1 px-3 text-xs">
				{data.visibility}
			</p>
			<h3 className="text-sky-500 w-full text-ellipsis overflow-hidden">
				<a href={data.clone_url} target="blank">
					{data.name}
				</a>
			</h3>
			<p className="text-gray-500 mb-10 line-clamp-5">
				{data.description}
			</p>

			<div className="absolute bottom-0 leading-4 text-xs py-2">
				{data.license && <p> ⚖ {data.license.name}</p>}
				{data.language && <p> 📝 {data.language}</p>}
			</div>
		</div>
	);
}
