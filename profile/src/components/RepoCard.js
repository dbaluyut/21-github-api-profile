import React from "react"

export default function RepoCard(props) {
  return (
    <div className="repo-card-container">
      <div>
        <a href={props.repoURL}>
          <h3 className="repo-title">{props.repoTitle}</h3>
        </a>
        <p>{props.urlTest}</p>
        <div className="repo-card-text">
          {props.licenseName}
          {props.repoLanguage}
          {/* use ternanry to determine if forks >0 if so show html if not "" */}
          {props.stargazersCount === 0 ? (
            ""
          ) : (
            <p>star {props.stargazersCount}</p>
          )}
          {props.forksCount == 0 ? "" : <p>{props.forksCount}</p>}

          {/* need function to calc how many days ago repo was updated */}
          <p>{props.updatedAt}</p>
          {/* need ternary to check if licence == null ? "" : repo.license.name */}
        </div>
      </div>
      <div>
        <button className="star-btn">Star</button>
      </div>
    </div>
  )
}
