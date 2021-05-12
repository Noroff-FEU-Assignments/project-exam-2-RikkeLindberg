import { useContext } from 'react'
import AddEstablishment from '../components/admin/AddEstablishment';
import Heading from '../components/typography/Heading'
import AuthContext from '../context/AuthContext'

export default function createNew() {
    const [auth] = useContext(AuthContext);

    return (
        <div>
            { auth ? (
                <div>
                    <Heading size="1" title="Create new"/>
                    <AddEstablishment />
                </div>
                ) : ( <div>NOT ALLOWED</div> )
            }
        </div>
    )
}
