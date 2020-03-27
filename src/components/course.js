import React from "react"

export default props => {
  const course = props.element
  return (
    <div className="postElement w-full">
      <a
        href={course.url}
        target="_blank"
        rel="noopener noreferrer"
        alt=""
      >
        <div
          className="size flex flex-col justify-between max-h-full h-full flex-shrink-0"
          style={{ width: "180px" }}
        >
          {/* <div className="px-6 py-4 "> */}
          <h4 className="font-bold px-2 py-2 h-40 overflow-y-hidden">
            {course.title}
          </h4>
          {/* </div> */}
          <div className="px-4 py-4">
            <span
              className="inline-block bg-purple-200 text-purple-700 py-2 px-3  rounded-lg"
              style={{ width: "150px" }}
            >
              Progress:
              <br />
              {parseInt(course.progress)}%
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}
