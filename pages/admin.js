import Heading from "../components/typography/Heading";
import Enquiries from "../components/admin/Enquiries";
import Messages from "../components/admin/Messages";

export default function Admin() {
    return (
        <div>
            <Heading size="1" title="Admin"/>
            <Messages />
            <Enquiries />
        </div>
    )
}
