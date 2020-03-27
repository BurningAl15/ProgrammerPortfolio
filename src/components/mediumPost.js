import React from "react"

export default props => {
  const post = props.element
  return (
    <div className="max-w-xl w-xl rounded shadow-lg text-center bg-gray-300 my-3 px py mx-2">
      <div className="flex flex-col justify-between max-w-full max-h-full w-full h-full">
        <header
          className="h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.thumbnail})` }}
        ></header>
        <div className="p-8">
          <h4 className="font-bold ">{post.title}</h4>
          <div className="px-8 py-4">
            {/* style={{width:"150px"}} */}
            <a className="masbtn" href={post.link}>
              Read
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
