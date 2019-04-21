import React from 'react'

import firebase, { provider } from '../../Firebase'

export default function Login(props){
    React.useEffect(() => { 
        const logIn = async (props) => {
            try {
                await firebase
                .auth()
                .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(function() { return firebase.auth().signInWithPopup(provider) })
                props.history.push('/dashboard')
            } catch (err) {
                alert(err)
            }
        }

        logIn(props)
    }, [])

    return (
        <div></div>
    )
}