
import Routes from './components/Routes';
import { TokenContext } from './components/AppContext';
import { getToken } from './auth/getToken';
import { useEffect, useState } from 'react';

function App() {;

const [token, setToken] = useState(null);

  useEffect(()=>{
    setToken(getToken())
  },[])

  console.log(token);

  return (
    <>
        <TokenContext.Provider value={token}>
          <Routes />
        </TokenContext.Provider>
      
        
    </>
  );
}

export default App;
