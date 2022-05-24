
import Routes from './components/Routes';
import { TokenContext } from './components/AppContext';
import { useEffect, useState } from 'react';
import { getAuth } from './reducers/auth.reducer';
import { useDispatch } from 'react-redux';

function App() {;

const [token, setToken] = useState(null);
const dispatch = useDispatch();


  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null) {
      setToken(localStorage.getItem('userToken'));
      dispatch(getAuth(true))
    }
  },[])
  


  return (
    <>
        <TokenContext.Provider value={token}>
          <Routes />
        </TokenContext.Provider>

    </>
  );
}

export default App;
