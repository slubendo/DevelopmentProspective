import { createOrUpdateFormResultForUser } from "../action";

//this only exists to test out the createOrUpdateFormResultForUserFunction

export default async function TestPage() {

    await createOrUpdateFormResultForUser("[{Test: case}]");

    return (
        <div>
            See?
        </div>
    )
}