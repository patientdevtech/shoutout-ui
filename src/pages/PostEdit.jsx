import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'


const PostEdit = ({setPosts}) => {
    let {id} = useParams()
    let navigate = useNavigate()

    const initialState = {
        image: "",
        description: "",
    }
    
    const [formData, setFormData] = useState(initialState)
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.valule})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const images = new FormData()
        images.append("images", formData.images)
        images.append("name", formData.name)
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SOB_API_URL}/post/${id}`, images).then((res) => {
            setFormData(initialState)
            setPosts(res.data)
            navigate("/", { replace: true })
        })        
    }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SOB_API_URL}/post/${id}`).then((res) => {
            setFormData(res.data)
        })
    }, [id])
    
    const handleFile = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.files[0]})
    }

    return (
        <form onSubmit = {handleSubmit} encType="multipart/form-data">
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input 
                    id="description"
                    name="description"
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>
                
            <div>
                <label htmlFor="images">Image</label>
                <input 
                    id="images"
                    name="images"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFile}
                />
            </div>

            <div classname="button">
                <button id="new" type="submit">
                    {" "}
                    Edit Post{" "}
                </button>
            </div>
        </form>
    )
}

export default PostEdit