import styled from "styled-components";

import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

// ui components
import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from '../../ui/Spinner'
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Empty from "../../ui/Empty";



const HeadingGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;

const Span = styled.span`
    margin-inline-start: 5px 
`

function BookingDetail() {
    // useBooking data
    const {booking, isLoading} = useBooking()

    // useCheckout data
    const {checkout, isCheckingOut} = useCheckOut()

    // useDeletingBooking data
    const {deleteBooking, isDeletingBooking} = useDeleteBooking()

    const navigate = useNavigate()
    
    const moveBack = useMoveBack();
    
    // ui for loading state
    if(isLoading) return <Spinner />
    
    if(!booking) return <Empty resourceName='booking' />
    
    const {status, id: bookingId} = booking

    const statusToTagName = {
        unconfirmed: "blue",
        "checked-in": "green",
        "checked-out": "silver",
    };


    return (
        <>
            <Row type="horizontal">
                <HeadingGroup>
                    <Heading as="h1">Booking #{bookingId}</Heading>
                    <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
                </HeadingGroup>
                <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
            </Row>

            <BookingDataBox booking={booking} />

            <ButtonGroup>
                {status === 'unconfirmed' && 
                    <Button icon={<HiArrowDownOnSquare />} onClick={() => navigate(`/checkin/${bookingId}`)}>
                        Check In
                    </Button>
                }

                {status === 'checked-in' &&                 
                    <Button
                        onClick={() => {
                            checkout(bookingId)
                        }}
                        disabled={isCheckingOut}
                    >
                        <HiArrowUpOnSquare />
                        <Span>
                            Check-Out
                        </Span>
                    </Button>
                }

                <Modal>
                    <Modal.Open opens='delete'>
                        <Button variation='danger'>
                            Delete Booking
                        </Button>
                    </Modal.Open>
                    <Modal.Window name='delete'>
                        <ConfirmDelete resourceName='booking' onConfirm={() => {
                            deleteBooking(bookingId
                                ,{
                                    //always happen if success or error
                                    onSettled: () => {
                                        moveBack()
                                    }
                                }
                                /* Another way to achieve
                                    deleteBooking(bookingId)
                                    navigate(-1) 
                                */
                            )}} 
                            disabled={isDeletingBooking}
                        />
                    </Modal.Window>
                </Modal>
                
                <Button variation="secondary" onClick={moveBack}>
                    Back
                </Button>
            </ButtonGroup>
        </>
    );
}

export default BookingDetail;











/* {status === 'checked-out' &&                 
    <Button
        onClick={() => {
            deleteBooking(bookingId)
            navigate('/bookings')
        }}
        disabled={isDeletingBooking}
        type="danger"
    >
        <HiArrowUpOnSquare />
        <Span>
            Delete
        </Span> 
    </Button>
} */