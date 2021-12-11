import React from 'react'

const NotFound = () => {
    return (
        <div className="container">
            <div className="alert card red lighten-4 red-text text-darken-4">
                <div className="card-content">
                    <p><i className="material-icons">report</i><span>404 Error</span> That page was not found on the server</p>
                </div>
            </div>        
        </div>
    )
}

export default NotFound
