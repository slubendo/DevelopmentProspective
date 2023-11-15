import GreetingHeaderTitle from "../atoms/greeting/greeting-header-title";
import GreetingHeaderSubtitle from "../atoms/greeting/greeting-header-subtitle";

export default function GreetingBlock (props: {greeting: string, user: string, subtitle: string}) {
    return (
        <div>
            <GreetingHeaderTitle text={props.greeting} name={props.user} />
            <GreetingHeaderSubtitle text={props.subtitle} />
        </div>
    )
}