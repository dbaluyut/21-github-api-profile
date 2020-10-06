import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRepos } from "../store/index"
import RepoCard from "./RepoCard"

export default function RightColumn() {
  const dispatch = useDispatch()
  const repoData = useSelector((appState) => appState.repos)
  useEffect(() => {
    dispatch(getRepos())
  }, [])

  return (
    <div className="RightColumn">
      {console.dir(repoData)}
      <div className="rc-header">
        <h3>REPOSITORIES</h3>
        <h3>Filters</h3>
      </div>

      {repoData.map((repo) => {
        // const currentDate = new Date()

        return (
          <RepoCard
            licenseName={repo.license == null ? "" : <p>{repo.license.name}</p>}
            repoTitle={repo.name}
            repoLanguage={
              repo.language == null ? (
                ""
              ) : (
                <>
                  <div className={`language-cir ${repo.language}-cir`}></div>
                  <p>{repo.language}</p>
                </>
              )
            }
            stargazersCount={repo.stargazers_count}
            forksCount={repo.forks_count}
            updatedAt={repo.updated_at}
            repoURL={repo.html_url}
          />
        )
      })}
    </div>
  )
}
