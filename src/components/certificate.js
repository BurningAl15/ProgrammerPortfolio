import React from "react"

export default props => {
  const certificate = props.element
  return (
    // <div className="shadow p-8 bg-gray-300 mr-4 text-center rounded-lg">
    //   <h4 className="font-bold">{certificate.title}</h4>
    //   <div>
    //     <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 rounded-lg">
    //       Code:
    //       <br />
    //       {certificate.code}
    //     </span>
    //   </div>
    // </div>
    // <div className="max-w-xs rounded overflow-hidden shadow-lg text-center bg-gray-300 my-3 px py w-xs mx-2">
    <div className="max-w-xl w-xl rounded shadow-lg text-center bg-gray-300 my-3 px py mx-2 ">
      <div className="flex flex-col justify-between max-h-full h-full flex-shrink-0" style={{width:"220px"}}>
        <div className="px-6 py-4">
          <h4 className="font-bold">{certificate.title}</h4>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 rounded-lg" style={{width:"150px"}}>
            Code:
            <br />
            {certificate.code}
          </span>
        </div>
      </div>
    </div>
  )
}
