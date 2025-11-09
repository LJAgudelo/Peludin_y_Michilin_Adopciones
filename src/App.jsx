import Home from "./assets/pages/Home.jsx"
import Post from "./assets/pages/Post.jsx"
import MessagePost from "./assets/pages/MessagePost.jsx"
import Profile from "./assets/pages/Profile.jsx"
import Mypets from "./assets/pages/Mypets.jsx"
import Login from "./assets/pages/Login.jsx"

import Register from "./assets/pages/Register.jsx"
import Volunteering from "./assets/pages/Volunteering.jsx"
import Donations from "./assets/pages/Donations.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donations" element={<Donations />} />
        <Route path="login" element={<Login />} />
        <Route path="messagepost" element={<MessagePost />} />
        <Route path="mypets" element={<Mypets />} />
        <Route path="notfound" element={<Notfound />} />
        <Route path="post" element={<Post />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="volunteering" element={<Volunteering />} />
      </Routes>
    </>
  )
}

export default App
