import React from 'react'
import { db } from '../../Firebase'
import NavbarDash from './NavbarDash';
import { logOut } from './index';
import { SemipolarSpinner } from 'react-epic-spinners'
import { Link } from 'react-router-dom'
import Clipboard from 'react-clipboard.js'


const LabelledImages = (props) => {
    let [data, setData] = React.useState(null)
    let [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchUserData = () => {
            db.collection('users').doc(props.user[1] || props.user.uid).collection('labelledImages').get()
            .then(async collection => {
                let i = collection.docs.map(doc => doc.data()) 
                await setData(i)
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
            <NavbarDash logOut={() => logOut(props)} /> <br/>
            <div className="container" style={{margin: '-45px auto 0'}}>
                <div className="row">
                <h1 className="welcome">Here&#039;s what you&#039;ve labelled so far...</h1> <br/>
                {data.length > 0 ? data.map((img, index) => (
                    <div key={index}>
                        <div className="col-md-3 col-sm-12">
                            <img src={img.imageFile} className="labelled-image" alt="labelled image"/>
                            <textarea style={{display: 'none'}} id="text" value={img.imageFile}></textarea>
                            <div className="labels">
                                {img.labels.map((label, index) => index < 5 && (
                                    <div key={index} className="label">{label}</div>
                                ))}
                            </div>
                            <div className="flex-buttons">
                                <i className="fa fa-search"></i>
                                <Clipboard data-clipboard-text={img.imageFile}>
                                    <i className="fa fa-share-alt text"></i>
                                </Clipboard>
                                <i className="fa fa-download"></i>
                                <i className="fa fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="empty">
                        <img src="https://gph.to/2D6Yuqg" alt="Nothing to see here"/> <br/>
                        {window.screen.width < 768 && (
                            <p style={{textAlign: 'center'}} className="about-site">
                                <Link to="/dashboard" style={{color: '#2522a6'}}>&lt;- Back To Dashboard</Link>
                            </p>
                        )}
                    </div>
                )}
            </div></div>
        </div>
    )
}

export default LabelledImages