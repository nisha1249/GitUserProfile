import './App.css';
import UserProfileList from './userProfileList';
import ProfilePage from './profilePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (              
   <>
   <BrowserRouter>
    <Routes>   
      <Route path="/" element={<UserProfileList/>} />
      <Route path='/profilePage/:login' element={<ProfilePage/>} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
