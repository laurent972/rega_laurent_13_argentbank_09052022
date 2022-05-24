
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
          localStorage.setItem('userToken', result.body.token)  
      }
      console.log(response);
      if(response.status==400 || response.status==500){
       return (message.innerHTML = response.message, error = true);
      }
     
  } 


  
 let userData = {}
 const token = localStorage.getItem('userToken');
 //Get  data from API
 export async function getData() {
     console.log(token);
   
       let response = await fetch('http://localhost:3001/api/v1/user/profile',{
           method:"POST",
           headers: {
               "Content-Type":"application/json",
               "Authorization": 'Bearer'+ token
           },
           })
           if(response.ok){
                let data = await response.json();
                return userData = data.body
           }
          
           if(response.status==400 || response.status==500){
           console.log(response.message);
           }
           
           return userData
 }
  
