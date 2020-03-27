import React from "react"
import { useStaticQuery, graphql, grap } from "gatsby"
import Posts from "./posts"
import Certificate from "./certificate"
import Course from "./course"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allCodigofacilitoJson {
        nodes {
          data {
            courses {
              title
              url
              progress
            }
            email
            username
            certificates {
              title
              code
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Posts
            data={data.allCodigofacilitoJson.nodes[0].data.certificates}
            key={data.allCodigofacilitoJson.nodes[0].data.certificates}
            card={Certificate}

            title="My online CodigoFacilito certificates"
          />

          <Posts
            data={data.allCodigofacilitoJson.nodes[0].data.courses}
            key={data.allCodigofacilitoJson.nodes[0].data.courses}
            card={Course}
            title="My Courses"
          />
        </div>
      </div>
    </section>
  )
}
