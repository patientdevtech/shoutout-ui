import Posts from '../components/Post/Posts';
import {Link} from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = ({ posts, updatePostState, user }) => {

 if(user){
  return (
    <div>
      <Posts posts={posts} updatePostState={updatePostState} user={user} />
    </div>
  )
}
  else {
    return (
      <Container fluid>
       <Row className='p-4'>
          <Carousel>
            {posts.map((post) => {
              return(
              <Carousel.Post>
                <img id='carouselImage' className='d-block' src={post.images} alt='slide'/>
              </Carousel.Post>)
            })}
          </Carousel>
        </Row>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row id='bottom' className='fixed-bottom'>
          <Col className='d-grid my-auto justify-content-center'>
            <Row className='p-5 '>
            <Link to='/login'>
                <Button id='login'>
                  Login
                </Button>
              </Link>
            </Row>
            <Row className='p-5 '>
              <Link to='/signup'>
                <Button id='signup'>
                  Sign Up
                </Button>
              </Link>
            </Row>
          </Col>
          <Col>
          {/* <img id='logo' src={Logo7}  alt='logo'/> */}
          </Col>
        </Row>
      </Container>
    )
  }

  

};

export default Home;


// import ShoutoutForm from './components/ShoutoutForm'
// import {Link} from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button'

// const Home = ({ posts, updatePostState, user}) => {

//     if(user){
//         return (
//             <div>
//                 <Posts posts=
//             </div>
//         )
//     }
// }