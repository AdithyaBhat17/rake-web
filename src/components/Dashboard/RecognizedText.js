import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash'
import { logOut } from './index'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { SemipolarSpinner } from 'react-epic-spinners'

const formatTimestamp = (timestamp) => {
    const date = moment(timestamp).format("dddd, MMMM Do YYYY, h:mm a")
    const formattedTimestamp = date.split(',')
    return formattedTimestamp[0] + ', ' + formattedTimestamp[1] + ' at ' + formattedTimestamp[2]
}

const RecognizedText = (props) => {
    let [data, setData] = React.useState(null)
    let [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        // refactor fetch user data function using a util fn.
        const fetchUserData = () => {
            db.collection('users').doc(props.user[1] || props.user.uid).collection('recognizedText').get()
            .then(async collection => {
                let i = collection.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                }) 
                await setData(i)
                console.log(data)
            })
        }

        fetchUserData()
        data && setLoading(false)
    }, [JSON.stringify(data)])
    
    if(loading)
        return (
            <SemipolarSpinner color='#2522a6' style={{display: 'block', margin: '45vh auto'}} />
        )
    return (
        <div>
            <NavbarDash logOut={() => logOut(props)} />
            <div className="container">
                <div className="row">
                    {data && data.map(text => (
                        <div key={text.id} className="col-md-4 col-sm-12">
                            <div className="thumbnail timestamp">
                                <Link
                                 style={{color: '#2522a6'}} 
                                 to={`/dashboard/recognize-text/${text.timestamp}`}>
                                 <small>{formatTimestamp(text.timestamp)}</small>
                                </Link>
                                <Link
                                 style={{color: '#2522a6'}} 
                                 to={`/dashboard/recognize-text/${text.timestamp}`}>
                                 ->
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecognizedText