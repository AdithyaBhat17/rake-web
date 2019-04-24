import React from 'react'

const getLinkTitle = (link) => {
    return link.substring(link.indexOf('.') + 1, link.indexOf('.', link.indexOf('.') + 1))
}

const SearchResults = ({data}) => {
    return (
        <div style={{opacity: 0.9}}>
            <p>Best Guess: <strong style={{textTransform: 'capitalize'}}>{data.best_guess}</strong></p>
            <p>{data.descriptions[0].substring(0, data.descriptions[0].indexOf('.'))}.</p>
            <p style={{display: 'inline-flex'}}>
                More info: &nbsp; {data.links.map((link, index) => (
                    <span className="label" key={index}>
                        <a style={{color: '#2522a6'}} href={link} target="_blank" rel="noopener noreferrer">{getLinkTitle(link)}</a>
                    </span>
                ))}
            </p>
            <p>
                <a href={data.similar_images[0]} target="_blank" rel="noopener noreferrer" className="similar">Similar Images</a>
                <a href={data.shop[0]} target="_blank" rel="noopener noreferrer" className="similar">Shop for {data.best_guess}</a>
            </p>
        </div>
    )
}

export default SearchResults