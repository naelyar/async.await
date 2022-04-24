const getUsersBtn= document.getElementById('getUsers')

 async function getUsers(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
 }
    
getUsersBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    getUsers()
})
