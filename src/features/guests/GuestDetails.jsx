import styled from "styled-components";
import Row from "../../ui/Row";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getGuest } from "../../services/apiGuests";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import GuestInfoBox from './GuestInfoBox'



const Box = styled.div`
    /* Box */
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 2.4rem 4rem;
`;

function GuestDetails() {
    const {guestId}= useParams()

    // navigating back to the last or previous page
    const moveBack = useMoveBack();
    
    const {data: guest, isPending: isLoadingGuest} = useQuery({
        queryKey: ['guest', guestId],
        queryFn: () => getGuest(guestId)
    })

    if (isLoadingGuest) return <Spinner />

    console.log(guest)

    const {id} = guest

    return (
        <>
            <Row type="horizontal">
                <Heading as='h1'>Guest Id: {id}</Heading>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <GuestInfoBox guest={guest} />
        </>
    );
}

export default GuestDetails;
