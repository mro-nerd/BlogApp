import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import PostDetails from "./Pages/PostDetails"
import CreatePost from "./Pages/CreatePost"
import EditPost from "./Pages/EditPost"
import Profile from "./Pages/Profile"
import { UserContextProvider } from "./context/UserContext"
import MyBlogs from './Pages/MyBlogs'

const App = () => {
  return (
    <UserContextProvider>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/write" element={<CreatePost/>}/>
        <Route path="/posts/post/:id" element={<PostDetails/>}/>
        <Route path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/myblogs/:id" element={<MyBlogs/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>

      </Routes>
      
      </UserContextProvider>
  )
}

export default App
