import { useState} from 'react';
import { UserContext } from './UserContext';

const user={
  id:123,
  name:"jhonny stiven agudelo",
  correo:"jhonny@gmail.com"
} 

export const UserProvider = ({ children }) => {
  const [user, setUSer] = useState()
  
  return (
    // <UserContext.Provider value ={{ hola:'mundo', user:user }}>
    <UserContext.Provider value ={{ user, setUSer }}>
      { children }
    </UserContext.Provider>
  )
}
