import BlockHeader2 from "../atoms/block/block-header-2";
import GreetingHeaderSubtitle from "../atoms/greeting/greeting-header-subtitle";

export default function ProfileBlock (props: {user: string, subtitle: string}) {
    return (
        <div>
            <BlockHeader2 header={props.user} />
            <GreetingHeaderSubtitle text={props.subtitle} />
        </div>
    )
}