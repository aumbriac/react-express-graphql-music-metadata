import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

const TrackList = () => {

    const { tracks } = React.useContext(AppContext)
    
    return (
        <ul className="collapsible popout text-center">
            {tracks && tracks.map((track, idx) => (
                <li key={idx}>
                    <Link to={`/trackdetail/${track.title}`}>
                        <div className="collapsible-header">
                            <div>
                                <i className="material-icons blue-grey-text">volume_up</i>
                                <b className="black-text">
                                    {track.title}
                                </b> 
                                <span className="grey-text"> - </span> 
                                <b className="blue-grey-text">
                                    {track.artist}
                                </b>
                            </div>
                            <div className="grey-text">
                                {track.genre}
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default TrackList
