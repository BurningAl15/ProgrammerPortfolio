import React from "react"
import Header from "../components/header"
import Repos from "../components/repos"
import Medium from "../components/medium"
import CodigoFacilito from "../components/codigofacilito"
import EdNav from "../components/education-nav"

export default () => (
  <div>
    <Header />
    <EdNav />
    <Repos />
    <CodigoFacilito />
    <Medium />
  </div>
)
