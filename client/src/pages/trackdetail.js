import React from 'react'
import { Link, useParams } from "react-router-dom";
import AppContext from '../context/AppContext';

const TrackDetail = () => {

    const { title } = useParams()
    const { loading, tracks } = React.useContext(AppContext)
    const [track, setTrack] = React.useState({})

    const convertTrackDuration = (value) => {
        return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
    }

    React.useEffect(() => {
        const filtered = tracks.filter(track => {return track.title === title})
        setTrack(filtered[0])
    }, [title, tracks]);

    return (
        <>
            {!track && !loading && 
            <h5 style={{textAlign:'center'}}>Track not found!</h5>
            }
            {track &&
                <div className="row valign-wrapper">
                    <div className="col s6 offset-s3 valign">
                    <div className="card alt-gradient darken-1">
                        <div className="card-content white-text">
                            <span className="card-title bold">
                                {track.title}
                            </span>
                                <span className="bold blue-grey-text text-lighten-4">
                                    {track.artist}
                                </span>
                                <p className="blue-grey-text text-lighten-3">
                                    {convertTrackDuration(track.duration)}
                                </p>
                        </div>
                        <div className="card-action">
                            <span className="orange-text bold">
                                {track.genre}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            }
            <div style={{textAlign: 'center'}}>
                <Link to="/">Go Back</Link>
            </div>
        </>
    )
}

export default TrackDetail
