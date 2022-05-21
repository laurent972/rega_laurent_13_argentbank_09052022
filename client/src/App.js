
import Routes from './components/Routes';
import { TokenContext } from './components/AppContext';
import { getToken } from './auth/getToken';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


function App() {;

const [token, setToken] = useState(null);
const dispatch = useDispatch();

  useEffect(()=>{
    setToken(getToken())
    
  },[])

  console.log(token);
  //  if (token) dispatch(GetUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzkyMTY0M2NlYTg3MTc0NDE4ODcxYSIsImlhdCI6MTY1MzE2NDQxOSwiZXhwIjoxNjUzMjUwODE5fQ.sDqv0d0fWdp63GR4zcBdnYae3Y28yi9JbIMw33GQnkM'));
  

  return (
    <>
        <TokenContext.Provider value={token}>
          <Routes />
        </TokenContext.Provider>
      
        
    </>
  );
}

export default App;
