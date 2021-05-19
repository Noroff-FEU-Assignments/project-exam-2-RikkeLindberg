import { useContext } from "react";
import { useRouter } from 'next/router'
import Heading from '../components/typography/Heading'
import Enquiries from '../components/admin/Enquiries'
import Messages from '../components/admin/Messages'
import Button from '../components/ui/Button'
import AuthContext from "../context/AuthContext";
import FourOhFour from "./404";

export default function Admin() {
    const [auth, setAuth] = useContext(AuthContext);

    const router = useRouter();

    function logout() {
        setAuth(null);
        router.push("/login");
    }

    return (
        <>
            { auth ? (
                <div>
                    <Heading size="1" title="Admin"/>
                    <button onClick={logout}>Log out</button>
                    <Button link="/createNew">Create New</Button>
                    <Messages />
                    <Enquiries />
                </div>
            ) : ( 
                <FourOhFour /> 
                )
            }
        </>
    )
}
