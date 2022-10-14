import { useState } from "react";
import AppContext from "./AppContext";


export default function AppState(props){

  let[userloggedIn,setUserLoggedIn]=useState(false)
  const db={
    storedusername:"user1",
    storedpassword:"12345"
  }
  return(
        <AppContext.Provider value={{
          db,
          userloggedIn,
          setUserLoggedIn
        }}>
        {props.children}
        </AppContext.Provider>
  )
}