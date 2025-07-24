import Row from "../ui/Row";
import Heading from "../ui/Heading";
import GuestsTable from "../features/guests/GuestsTable";
// import { getGuests } from "../services/apiGuests";

const guests = () => {
    // getGuests()


    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All Guests</Heading>
            </Row>
            <GuestsTable />
        </>
    )
};

export default guests;
