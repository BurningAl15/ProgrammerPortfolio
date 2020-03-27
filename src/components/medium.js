//
import React, { useState, useEffect } from "react"
import Posts from "./posts"
import MediumPost from "./mediumPost"

export default props => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const data = sessionStorage.getItem("posts")
    let myPosts
    if (data) {
      setPosts(JSON.parse(data))
    }

    async function getMediumPosts() {
      const response = await fetch(
        // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40aldhairveracamacho"
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40tomaspueyo"
      )
      myPosts = await response.json()

      sessionStorage.setItem("posts", JSON.stringify(myPosts.items))

      setPosts(myPosts.items)
    }

    getMediumPosts()
  }, [])
  return (
    <div className="mt-24">
      <div className="max-w-4xl mx-auto">
        <Posts
          data={posts}
          key={posts}
          card={MediumPost}
          title="My Medium Posts"
        />
      </div>
    </div>
  )
}
