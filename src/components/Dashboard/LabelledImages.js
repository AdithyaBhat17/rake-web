import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash';
import { logOut } from './index';

const LabelledImages = (props) => {
    let [data, setData] = React.useState([])
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
        data.length > 0 && setLoading(false)
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
            <div className="container">
                {data && data.map((img, index) => (
                    <div key={index} className="row">
                        <div className="col-md-6 col-sm-12">
                            <img src={img.imageFile} className="labelled-image" alt="labelled image"/>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div>
                                <h2 style={{fontWeight: 'bold'}}>Labels Recognized</h2>
                                {img.labels.map(label => <p key={label}>{label}</p>)}
                            </div>
                            <div className="flex-buttons">
                                <button>
                                    <i className="fa fa-search"></i>
                                </button>
                                <button>
                                    <i className="fa fa-share-alt"></i>
                                </button>
                                <button>
                                    <i className="fa fa-download"></i>
                                </button>
                                <button>
                                    <i className="fa fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LabelledImages