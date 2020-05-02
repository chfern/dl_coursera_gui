import './NormalPrimaryColoredText.css'
import React from "react"

const NormalPrimaryColoredText = (props) => {
  return (
    <span className="normal-primary-colored-text">{props.children}</span>
  )
}

export default NormalPrimaryColoredText