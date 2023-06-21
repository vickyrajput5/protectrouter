import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from './component/home/Home'
import About from "./component/aboutus/About";
import Dashboard from "./component/dashboard/Dashboard";
import Profile from "./component/profile/Profile";
import Myorder from "./component/myorder/Myorder";
import Blog from "./component/blog/Blog";
import Login from "./component/login/Login";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protectRoutes/ProtectedRoute";
function App() {
  const {isAuthenticated} = useSelector((state)=> state.root)
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} routeAdmin={true} isAdmin={true}>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        {/* <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Profile/>
          </ProtectedRoute>
        }/>
        <Route path="/myorder" element={
           <ProtectedRoute isAuthenticated={isAuthenticated}>
           <Myorder/>
         </ProtectedRoute>
        }/> */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/myorder" element={<Myorder/>} />
        </Route>
        <Route path="/blog" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Blog/>
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
