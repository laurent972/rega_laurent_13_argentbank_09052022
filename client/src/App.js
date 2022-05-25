
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profil from './pages/Profil';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './actions/user.actions';
import { PrivateRoute } from './components/PrivateRoute';
import { useSelector } from 'react-redux';


function App() {;

  const dispatch = useDispatch();
  const token = localStorage.getItem("userToken");
  const isLogged = useSelector((state) => state.userReducer.isLogged);

  useEffect(()=>{
    if(localStorage.getItem("userToken") !== null){
      dispatch(getUser(token))
    }
  }, [])

  return (
    <>
       
        <BrowserRouter >
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<PrivateRoute isLogged={isLogged} />} >
                      <Route path="/profil" element={<Profil />} />
                    </Route>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>

    </>
  );
}

export default App;
