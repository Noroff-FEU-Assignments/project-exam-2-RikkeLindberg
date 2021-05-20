import { useContext } from 'react'
import { useRouter } from 'next/router'
import AuthContext from '../context/AuthContext'
import Button from '../components/ui/Button'
import Enquiries from '../components/admin/Enquiries'
import FourOhFour from './404'
import Heading from '../components/typography/Heading'
import Messages from '../components/admin/Messages'

export default function Admin() {
    const [auth, setAuth] = useContext(AuthContext)

    const router = useRouter()

    function logout() {
        setAuth(null)
        router.push('/login')
    }

    return (
        <section>
            { auth ? (
                <>
                    <Heading size="1" title="Admin dashboard" />
                    <button className="logout" onClick={logout}>Log out</button>

                    <Button link="/createNew">Create New</Button>
                    <div className="admin">
                        <Messages />
                        <Enquiries />
                    </div>
                </>
            ) : ( 
                <FourOhFour /> 
                )
            }
        </section>
    )
}
