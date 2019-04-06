import React from 'react'
import { withRouter } from 'react-router-dom'

import firebase, { db } from '../../Firebase'
import NavbarDash from './NavbarDash'

const logOut = (props) => {
    try {
        firebase
        .auth()
        .signOut()
        .then(() => props.history.push('/'))
    } catch (err) {
        alert(err)
    }
}

const Dashboard = (props) => {
    let [data, setData] = React.useState([])
    React.useEffect(() => {
        const fetchUserData = () => {
            // TEST FOR TEXT RECOGNITION
            db.collection('users').doc(props.user[1] || props.user.uid).collection('recognizedText').get()
            .then(async collection => {
                let i = collection.docs.map(doc => doc.data())        
                await setData(i)
                console.log(data)
            })
        }

        fetchUserData()
        console.log(data)
    }, [JSON.stringify(data)])

    const { user } = props

    console.log(user.displayName)
    return(
        <div>
            <NavbarDash logOut={() => logOut(props)}/>
            <div className="container-fluid dashboard">
                    <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="thumbnail">
                            <img src={user.photoURL} alt={user.displayName} className="userPic"/> <br/>
                            <p style={{textAlign: 'center'}}><strong>{user.displayName}</strong></p>
                            <p style={{textAlign: 'center'}}><small>{user.email}</small></p>
                        </div>
                    </div>
                    </div>                
            </div>
        </div>
    )
}

export default withRouter(Dashboard)