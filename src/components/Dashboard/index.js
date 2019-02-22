import React from 'react'
import { withRouter } from 'react-router-dom'

import firebase from '../../Firebase'

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

    retrieveUsername = (email) => {
        const end = email.indexOf('@')
        return email.substring(0, end)
    }

    render() {
        const { user } = this.props
        return(
            <div>
                Howdy doody {this.retrieveUsername(user.email)}! <br/>
                <button onClick={this.logOut}>Logout</button>
            </div>
        )
    }
}

export default withRouter(Dashboard)