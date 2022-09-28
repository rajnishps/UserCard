# UserCard
 
 Total time taken : 6 hours
 
 In this project I've used React's Hook, useState to show and update the functional componet or Loader.
 
 When the user taps in the "Get Users" button a callback function calls the getUsers() async function, which fetches the data from the api.
 
 getUsers calls seyUsers the useState to change the state of currently non-existant <UserCard/> componet, which then takes the json and passes it as props to <UserCard/>
 
Eventually returning the navbar and usercards which is re-used by all the different user datas.

