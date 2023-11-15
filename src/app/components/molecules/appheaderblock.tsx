import AppHeaderTitle from "../atoms/app-header/app-header-title";
import AppHeaderSubtitle from "../atoms/app-header/app-header-subtitle";

export default function AppHeaderBlock (props: {title: string, subtitle: string}) {
    return (
        <div>
            <AppHeaderTitle text={props.title} />
            <AppHeaderSubtitle text={props.subtitle} />
        </div>
    )
}