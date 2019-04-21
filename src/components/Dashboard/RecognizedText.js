import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash'
import { logOut } from './index'

import { SemipolarSpinner } from 'react-epic-spinners'

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
        </div>
    )
}

export default RecognizedText