
// login
export const handleLogin =  async (email,password, error, message) =>{
  
      let response = await fetch(`http://localhost:3001/api/v1/user/login`,{
        method:"POST",
        headers: {
          "Content-Type":"application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({email, password})
      })
      if(response.ok){
          let result = await response.json();
          localStorage.setItem('userToken', result.body.token);
          
      }
      console.log(response);
      if(response.status==400 || response.status==500){
       return (message.innerHTML = response.message, error = true);
      }
     
  } 


  

  
