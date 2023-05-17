import './UserStyle.css';
import '../../Card/Global.css'

export const UserPage = ({children}) => {
    
    return(
        <div>
            
            <nav>
                <ul>
                  <li><a href="/">Página Inicial</a></li>
                  <li><a href="/about">Sobre Nós</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="/register">Registre-se</a></li>
                  <li><a href="/user">User</a></li>
                </ul>
            </nav>
            <div id='user-profile-pic'>
                User profile pic
            </div>
        </div>
                 
    )

}