import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash'
import { logOut } from './index'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { SemipolarSpinner } from 'react-epic-spinners'
import { toast, ToastContainer } from 'react-toastify'

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
            })
        }

        fetchUserData()
        data && setLoading(false)
    }, [JSON.stringify(data)])

    const delete_text = async id => {
        await db.collection('users').doc(props.user[1] || props.user.uid).collection('recognizedText').doc(id).delete()
        await toast.success('👍 Deleted successfully!', {
            position: "top-center",
            autoClose: 2000
        })
        document.getElementById(id).style.display = 'none'
    }
    
    if(loading)
        return (
            <SemipolarSpinner color='#2522a6' style={{display: 'block', margin: '45vh auto'}} />
        )
    return (
        <div>
            <NavbarDash logOut={() => logOut(props)} />
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <h1 className="welcome animated fadeIn">Here&#039;s what you&#039;ve recognized so far...</h1> <br/>
                    {data.length > 0 ? data.sort((a,b) => b.timestamp.substring(4).localeCompare(a.timestamp.substring(4))).map(text => (
                        <div id={text.id} key={text.id} className="col-md-4 col-sm-12">
                            <div className="thumbnail timestamp">
                                <Link
                                 style={{color: '#2522a6'}} 
                                 to={`/dashboard/recognized-text/${text.id}`}>
                                 <small>{formatTimestamp(text.timestamp)} -></small>
                                </Link>
                                <span>
                                    <i
                                     style={{opacity: 0.8, color: '#Bb5485', verticalAlign: 'middle', cursor: 'pointer'}} 
                                     className="fas fa-trash-alt"
                                     onClick={() => delete_text(text.id)}>
                                    </i>
                                </span>
                            </div>
                        </div>
                    )) : (
                        <div className="empty">
                            <img src="https://gph.to/2D6Yuqg" alt="Nothing to see here"/> <br/>
                        </div>
                    )}
                </div>
            </div> <br/>
            {window.screen.width < 768 && (
                <p style={{textAlign: 'center'}} className="about-site">
                    <Link to="/dashboard" style={{color: '#bb5485'}}>&lt;- Back To Dashboard</Link>
                </p>
            )} <br/>
        </div>
    )
}

export default RecognizedText