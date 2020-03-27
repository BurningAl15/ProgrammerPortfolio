import React from "react"

export default props => (
  <li className="flex items-center bg-gray-300 rounded-lg py-2 px-2 my-1">
    <div className="w-9/12 overflow-x-hidden">
      <h4 className="text-pink-600 font-bold truncate">{props.repo.name}</h4>

      <p
        className="text-sm text-gray-800 overflow-y-hidden"
        style={{ height: "1.5em" }}
      >
        {props.repo.description}
      </p>
    </div>
    <div className="flex-1 text-right font-bold">
      <a className="repoBtn" target="_blank" href={props.repo.svn_url} rel="noopener noreferrer">
        Check
      </a>
    </div>
  </li>
)
