import { useContext } from "react";
import Heading from '../components/typography/Heading'
import Enquiries from '../components/admin/Enquiries'
import Messages from '../components/admin/Messages'
import Button from '../components/ui/Button'
import AuthContext from "../context/AuthContext";

export default function Admin() {

    const [auth] = useContext(AuthContext);

    return (
        <>
            { auth ? (
                <div>
                    <Heading size="1" title="Admin"/>
                    <Button link="/createNew">Create New</Button>
                    <Messages />
                    <Enquiries />
                </div>
                ) : ( <div>NOT ALLOWED</div> )
            }
        </>
    )
}
