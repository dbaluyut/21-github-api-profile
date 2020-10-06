import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../store/index"

export default () => {
  const dispatch = useDispatch()
  const profileData = useSelector((appState) => appState.profile)
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  return (
    <div className="Profile">
      <img src={profileData.avatar_url} className="avatar"></img>
      <h2>{profileData.name}</h2>
      <div class="vcard">{profileData.login}</div>
      <button className="follow-btn">Follow</button>
      <button className="ellipsis-btn">...</button>
      <div className="followers">
        <li>{profileData.followers} followers</li>
        <li>{profileData.following} following</li>
        <li>star</li>
      </div>
    </div>
  )
}
