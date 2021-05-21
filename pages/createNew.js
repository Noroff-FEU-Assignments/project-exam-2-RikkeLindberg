import { useContext } from 'react'
import AddEstablishment from '../components/admin/AddEstablishment';
import AuthContext from '../context/AuthContext'
import FourOhFour from './404';

export default function createNew() {
    const [auth] = useContext(AuthContext);

    return (
        <section>
            { auth ? (
                <AddEstablishment />
                ) : ( 
                <FourOhFour />
                )
            }
        </section>
    )
}
