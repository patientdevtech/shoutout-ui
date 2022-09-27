import React from "react"
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


const Post = ({ post, deletePost, user}) => {
    return (
        <Container id='cardCont' key={post._id}>
            <Card id='card'>
                <Card.Img id='cardImage' src={post.images} alt='' variant='top'/>
                <Card.Body id='cardBody'>
                    <Card.Title className="p=2">{post.name}
                    </Card.Title>
                    <Button id='cardButton' variant='secondary'>
                        <Link to={`/item/${post._id}`}>Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Post