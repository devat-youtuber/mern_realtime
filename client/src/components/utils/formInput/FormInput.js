import React, {useRef, useEffect} from 'react'
import './FormInput.css'
import {patchData} from '../../utils/FetchData'

function FormInput({id, socket, rating, setReply, send, name}) {
    const nameRef = useRef()
    const contentRef = useRef()

    useEffect(() => {
        if(name){
            contentRef.current.innerHTML = `
                <a href="#!"
                    style="color: crimson;
                    font-weight: 600;
                    text-transform: capitalize;"
                >${name}: </a>
            `
        }
    },[name])

    const commentSubmit = () => {
        const username = nameRef.current.value
        const content = contentRef.current.innerHTML

        if(!username.trim()) return alert('Not Empty!')
        if(contentRef.current.textContent.trim().length < 20)
            return alert('Contents too short, must be at least 20 characters')
        
        const createdAt = new Date().toISOString()

        socket.emit('createComment', {
            username, content, product_id: id, createdAt, rating, send
        })

        if(rating && rating !== 0){
            patchData(`/api/products/${id}`, {rating})
        }

        contentRef.current.innerHTML = ''

        if(setReply) setReply(false)
    }

    return (
        <div className="form_input">
            <p>Name</p>
            <input type="text" ref={nameRef} />

            <p>Content</p>
            <div ref={contentRef} 
                contentEditable="true"
                style={{
                    height: '100px',
                    border: '1px solid #ccc',
                    padding: '5px 10px',
                    outline: 'none'
                }}
            />

            <button onClick={commentSubmit}>Send</button>
        </div>
    )
}

export default FormInput
