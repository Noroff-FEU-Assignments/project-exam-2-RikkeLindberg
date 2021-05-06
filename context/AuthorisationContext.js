import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthorisationContext = createContext([null, () => {}]);

export const AuthorisationProvider = (props) => {
    const [auth, setAuth] = useLocalStorage("auth", null);
    return <AuthorisationContext.Provider value={[auth, setAuth]}>
                {props.children}
            </AuthorisationContext.Provider>;
}

export default AuthorisationContext;