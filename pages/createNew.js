import { useContext } from 'react'
import DefaultErrorPage from 'next/error'
import AuthContext from '../context/AuthContext'
import CreateNewEstablishment from '../components/admin/CreateNewEstablishment'

export default function createNew() {
    const [auth] = useContext(AuthContext);

    return (
        <section>
            { auth ? (
                <CreateNewEstablishment />
                ) : ( 
                <DefaultErrorPage />
                )
            }
        </section>
    )
}
