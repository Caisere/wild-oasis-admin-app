import Heading from "../ui/Heading";
import SignupForm from '../features/authentication/SignupForm'

function CreateUsers() {
    return (
        <>
            <Heading as="h1">Create a new user</Heading>
            <SignupForm />
        </>
    )
}

export default CreateUsers;
