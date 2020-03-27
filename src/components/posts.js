import React from "react"
// import Certificate from "./certificate"

export default props => {
  return (
    <div className="max-w-full">
      <h2 className="text-center font-bold text-2xl ">{props.title}</h2>
      <div className="flex flex-row max-w-full p-2 overflow-x-scroll">
        {props.data.map(el => (
          <props.card element={el} />
        ))}
      </div>
    </div>
  )
}
