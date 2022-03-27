import{BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";

//From components folder
import Navbar from './components/Navbar';

//From pages folder
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import SignUp from "./pages/signup/SignUp"



function App() {
  const {authIsReady, user}=useAuthContext();

  return (
    <div className="App">
      {/* To show when we have initial value, when we have true value */}
      {authIsReady && (
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={(!user && <Navigate to="/login" />)||(user && <Home/>)} />
            
            <Route  path="login" element={(user && <Navigate to="/" />) || (!user && <Login/>)} />
            
            <Route path="signup" element={(user && <Navigate to="/" />) || (!user && <SignUp/>)} />
          </Routes>
        </BrowserRouter>
      )}
     
    </div>
  );
}

export default App;
