import ProfileUserName from "../atoms/profile/profile-user-name";
import ProfileUserLocation from "../atoms/profile/profile-user-location";

export default function ProfileNameBlock(props: {name: string, location: string}) {
    return (
        <div>
            <ProfileUserName name={props.name} />
            <ProfileUserLocation location={props.location} />
        </div>
    )    
}