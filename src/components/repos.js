import React, { useEffect, useState } from "react"
// import repos from "../data/repos"
import Repo from "../components/repo"
// import fetchRepos from "../libs/fetchRepos"

export default () => {
  const [repos, setRepos] = useState([])
  const [reposCount, setReposCount] = useState(0)

  useEffect(() => {
    const data = sessionStorage.getItem("repos")
    let myRepos
    if (data) {
      myRepos = JSON.parse(data)

      setReposCount(myRepos.length)
      myRepos = myRepos.slice(1, 16)
      return setRepos(myRepos)
    }

    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/burningal15/repos"
      )
      myRepos = await response.json()
      setReposCount(myRepos.length)

      sessionStorage.setItem("repos", JSON.stringify(myRepos))

      setRepos(myRepos)
    }
    fetchRepos()
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Mi Open Source projects</h2>
        <p>Collaborations and contributions</p>
      </header>
      <ul className="repos-list">
        {repos.map(repo => {
          return <Repo repo={repo} key={repo.id} />
        })}
      </ul>
      <div className="mt-8 text-center">
          <a className="masbtn" target="_blank" rel="noopener noreferrer" href="https://github.com/burningal15">
              More of my github repos ({reposCount})
          </a>
      </div>
    </div>
  )
}
