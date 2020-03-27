import React from "react"
import Image from "../images/undraw_augmented_reality_heuy.svg"
import Form from "../components/contact-form"

export default () => (
  <header className="bg-gray-600">
    <div className="container mx-auto p-12 max-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-purple-700 text-6xl">
            Hey! I am Aldhair Vera
          </h1>
          <p className="text-xl">
            I do web apps, videogames and teach programming
          </p>
        </div>
        <img src={Image} alt="" style={{ height: "250px" }}></img>
      </div>
      <div>
        <Form />
      </div>
    </div>
  </header>
)
