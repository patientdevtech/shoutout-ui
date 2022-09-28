
import './App.css';
import { useState, useEffect } from "react"
import { Routes, Route} from "react-router-dom"
import userService from "./utils/userService"
// import bootstrap from "bootstrap"




// import Header from './components/Header';
// import Footer from './components/Footer';
// import MembersColumn from './components/MembersColumn'
// import ShoutOutBoard from './components/ShoutOutBoard'
import LandingHome from './pages/LandingHome'
import Layout from './pages/Layout'
import PostEdit from './pages/PostEdit'
import PostView from './pages/PostView'
import NewPost from './pages/NewPost'
import LoginTest from './pages/Login.jsx'
import SignupTest from './pages/Signup'
// import SignUp from './pages/Signup'


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
            <LandingHome posts={posts} updatePostState={updatePostState} user={user} />
          }
        />
        <Route
          path="new-post" element={<NewPost addPost={addPost} />} />
        <Route
          path="/post/edit/:id/"
          element={<PostEdit setPosts={setPosts} />}
        />
        <Route
          path="/item/:id" element={<PostView updatePostState={updatePostState} posts={posts} />} 
        />
        <Route
          path="/login" element={<LoginTest handleSignupOrLogin={handleSignupOrLogin} setUser={setUser} />}
        />
        <Route
          path="/signup" element={<SignupTest handleSignupOrLogin={handleSignupOrLogin} />}
        />       
      </Routes>
    </Layout>
  );
}

export default App;
