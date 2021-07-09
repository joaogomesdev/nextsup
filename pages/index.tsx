import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { supabase } from "../services/supabase"

export default function Home() {

  const { user } = useContext(AuthContext)
  
  async function handleLogin() {
    const { error , data } = await supabase.auth.signIn({
      provider: 'github'
    })

    if(error){
      console.log(error);
      return
    }
  }
  async function handleLogout() {
    await supabase.auth.signOut()
  }

  return (
   <div>
     <button onClick={handleLogin}>Login</button>
     <button onClick={handleLogout}>Logout</button>
   </div>
  )
}
