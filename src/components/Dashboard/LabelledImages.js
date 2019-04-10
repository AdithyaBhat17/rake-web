import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash';
import { logOut } from './index';

const LabelledImages = (props) => {
    let [data, setData] = React.useState(null)
    let [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        const fetchUserData = () => {
            db.collection('users').doc(props.user[1] || props.user.uid).collection('labelledImages').get()
            .then(async collection => {
                console.log(collection)
                let i = collection.docs.map(doc => doc.data()) 
                await setData(i)
                console.log(data)
            })
        }

        fetchUserData()
        data && setLoading(false)
        console.log(data)
    }, [JSON.stringify(data)])

    if(loading)
        return (
            <div>
                loading...
            </div>
        )

    return (
        <div>
            <NavbarDash logOut={() => logOut(props)} />
            <div className="container" style={{margin: '-45px auto 0'}}>
                <div className="row">
                <h1 className="welcome">Here&#039;s what you&#039;ve labelled so far...</h1> <br/>
                {data && data.map((img, index) => (
                    <div key={index}>
                        <div className="col-md-3 col-sm-12">
                            <img src={img.imageFile} className="labelled-image" alt="labelled image"/>
                            <div className="labels">
                                {img.labels.map((label, index) => index < 5 && (
                                    <div key={index} className="label">{label}</div>
                                ))}
                            </div>
                            <div className="flex-buttons">
                                <i className="fa fa-search"></i>
                                <i className="fa fa-share-alt"></i>
                                <i className="fa fa-download"></i>
                                <i className="fa fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div></div>
        </div>
    )
}

export default LabelledImages