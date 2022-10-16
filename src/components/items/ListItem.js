import React from 'react'
import {Link} from 'react-router-dom'

let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note) =>{
    let title = note.body.split('\n')[0]
    if (title.length > 45){
        return title.slice(0, 45)
    }
    return title
}

let getContent = (note) =>{
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 45){
        return content.slice(0,45)+'...'
    }else{
        return content
    }
}


const ListItem = ({note}) => {
    return (
        <ul className="list-group list-group-flush">   
            <Link to={`/note/${note.id}`} className="link">
                <li className="list-group-item list-group-item-action">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{getTitle(note)}</div>
                    <span>{getTime(note)}</span>{getContent(note)}
                </div>               
                </li>           
            </Link>
        </ul>  
    )
}

export default ListItem
