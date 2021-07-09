import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../services/supabase'

export default function handle(request : NextApiRequest, response: NextApiResponse) {
  return supabase.auth.api.setAuthCookie(request,response)
}