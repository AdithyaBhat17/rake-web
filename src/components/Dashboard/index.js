import React from 'react'
import { withRouter } from 'react-router-dom'

import firebase from '../../Firebase'
import NavbarDash from './NavbarDash'

class Dashboard extends React.Component {
    logOut = () => {
        try {
            firebase
            .auth()
            .signOut()
            .then(() => this.props.history.push('/'))
        } catch (err) {
            alert(err)
        }
    }

    render() {
        const { user } = this.props
        console.log(user.displayName)
        return(
            <div>
                <NavbarDash logOut={this.logOut}/>
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
}

export default withRouter(Dashboard)