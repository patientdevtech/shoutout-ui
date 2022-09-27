
import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import userService from "./utils/userService"




import Header from './components/Header';
import Footer from './components/Footer';
import MembersColumn from './components/MembersColumn'
import ShoutOutBoard from './components/ShoutOutBoard'
import ShoutoutForm from './components/ShoutOutForm'
import LandingHome from './pages/LandingHome'
import Layout from './pages/Layout'

// import postcss from 'postcss';


function App() {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({})
 
  useEffect(() => {
    fetch(process.env.REACT_APP_SOB_API_URL)
    .then(res => res.json())
    .then(posts => setPosts(posts))
  }, [])

  const handleSignupOrLogin = () => {
    setUser(userService.getUser())
  }  

  const handleLogout = () => {
    userService.logout();
    setUser(null)
  }

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  const updatePostState = (id) => {
    setPosts(posts.filter((post) => post._id !== id))
  }

  return (
    <Layout user={user} setUser={setUser} handleLogout={handleLogout}>
      <Routes>
        <Route 
          path="/" 
          element={
            <ShoutoutForm posts={posts} updatePostState={updatePostState} user={user} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
