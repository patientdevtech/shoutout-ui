import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-modal'

// const Button = styled.button`
//     background: transparent
//     border-radius: 4px
//     border: 3px solid coral
//     color: coral
//     margin: 0 1em
//     padding: 0.25em 1em    
// `

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
}

const PostView = ({ posts, updatePostState}) => {
    let navigate = useNavigate()
    
    const deletePost = (id) => {
        axios.delete(`${process.env.REACT_APP_SOB_API_URL}/post/${id}`).then((res) => {
            console.log(res)
            updatePostState(id)
            return navigate("/")
        })
    }
    
    let {id} = useParams()

    const [post, setPost] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SOB_API_URL}/post/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    let subtitle
    
    const [modalIsOpen, setIsOpen] = React.useState(false)
        
    function openModal() {
        setIsOpen(true)
        }

    function afterOpenModal() {
        subtitle.style.color= 'aqua'
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div className='grid'>
            {
                post && ( <>
                <h1>(post.name)</h1>
                <img id='imgDetail' src={post.images} alt={post.description} />
                <p id='descrip'>{post.description}</p>
                <p>{post.description}</p>
                <button id ='editButt'>
                    <Link to={`/post/edit/${post._id}`} > Edit Post </Link> 
                </button>
                <>

                <div className='grid'>
                <button id='deleteButt' onClick={openModal}>Delete Post</button>    
                
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Ze Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}> Do you really want to delete this post? </h2>
                    <button onclick={closeModal} >close</button>
                    <button onClick={() => deletePost(post._id)}>Delete</button>    
                </Modal>
        </div>

    </>
            </> )
            }
        </div>
    )
}

export default PostView