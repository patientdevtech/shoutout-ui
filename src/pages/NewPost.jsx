import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const NewPost = ({ addItem }) => {
    
    const initialState = {
        image: "",
        description: "",
    }

    const navigate = useNavigate()

    const [formData, setFormData] = useState(initialState)
    const handleChange = (e) => {
        console.log(e.target)
        setFormData({...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const images = new FormData()
        images.append("images", formData.images)
        images.append("name", formData.name)
        axios.post(`${process.env.REACT_APP_SOB_API_URL}/post`, images).then((res) =>{
            setFormData(initialState)
            addItem(res.data)
            navigate("/", {replace: true})
        })
    }

    const handleFile = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.files[0]})
    }

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>New Post</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div>
            <label htmlFor="images">Image</label>
                <input
                name="images"
                id="images"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFile}
                />
            </div>
            <div className="button"><buttond id="new" type="submit">New Post</buttond></div>
        </form>
    
    )
}

export default NewPost

