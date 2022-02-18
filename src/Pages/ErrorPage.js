import React from 'react'

const ErrorPage = () => {
    return (
        <div style={sredinaStyle.div}>
            <div style={sredinaText.div}>
                <h1>418 jaz sem Čajnik</h1>
                <h3>Napaka! strežnik ni hotel skuhati kave, ker je trajno čajnik</h3>
                
            </div>
        </div>
    )
}

const sredinaStyle = {
    div: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        overflow: "hidden",
    }
}

const sredinaText = {
    div: {
        textAlign: "center",
    }
}

export default ErrorPage
