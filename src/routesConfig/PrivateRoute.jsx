import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { selectIsLogged } from '../redux/selectors.js'

const PrivateRoute = ({children}) => {
    const isLogedIn = useSelector(selectIsLogged);
    if (isLogedIn) {
        return (
    children
  )
    } else {
        return  <Navigate to='/signin'/>
    }
  
}

export default PrivateRoute