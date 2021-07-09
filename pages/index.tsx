import { useEffect } from "react";
import { supabase } from "../services/supabase"

export default function Home() {

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
    })
  },[])

  async function handleLogin() {
    const { error , data } = await supabase.auth.signIn({
      provider: 'github'
    })

    if(error){
      console.log(error);
      return
    }

    console.log(data);
    
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
