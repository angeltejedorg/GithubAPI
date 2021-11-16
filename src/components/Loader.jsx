import React from "react"

import "../styles/Loader.css"

const Loader = props => {
    return (
        <>
        <div className="loader-container">
        <div className="loader"></div>
        <p>Loading...</p>
        </div>
        </>
    )
}

export default Loader;