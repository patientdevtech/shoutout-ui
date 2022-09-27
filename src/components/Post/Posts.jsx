import React from 'react'
import axios from 'axios'
import Post from './Post'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Posts = ({ posts, updatePostState, user }) => {
    const deletePost = (id) => {
        axios.delete(`${process.env.REACT_APP_SOB_API_URL}/post/${id}`).then((res) => {
            updatePostState(id)
        })
    }

return (
    <Container>
        <Row>
            {posts.length === 0
                ? "This post is no longer available."
                : posts.map((post) => {
                    return (
                        <Col>
                            <Post
                                key={post._id}
                                post={post}
                                deletePost={deletePost}
                                user={user}
                            />
                        </Col>
                    )
                })}
        </Row>
    </Container>
  )
}


export default Posts