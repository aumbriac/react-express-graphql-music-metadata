import React from 'react'
import AppContext from './AppContext'

const AppState = props => {
    const [tracks, setTracks] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        fetch("/server/tracklist")
            .then(res => res.json())
            .then(json => {
                setTracks(json)
                setLoading(false)
            }).catch(() => {
                alert('A server error has occured')
                setLoading(false)
            })
    }, [])

    return (
        <AppContext.Provider value={{
            tracks, loading
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
