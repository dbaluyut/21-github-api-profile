import React from "react"
import { useSelector, Provider } from "react-redux"
import store from "./store"
import Profile from "./components/Profile"
import "./App.css"
import RightColumn from "./components/RightColumn"

import Header from "./components/Header"

export default function SimpleStoreDispatch() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Profile />
        <RightColumn />
      </div>
    </Provider>
  )
}
