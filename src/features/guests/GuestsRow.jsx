import styled from "styled-components";


// ui components
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";


const Cabin = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-600);
    font-family: "Sono";
`;

const Stacked = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & span:first-child {
        font-weight: 500;
    }

    & span:last-child {
        color: var(--color-grey-500);
        font-size: 1.2rem;
    }
`;

const Amount = styled.div`
    font-family: "Sono";
    font-weight: 500;
`;

function GuestsRow({guest, index}) {
    const navigate = useNavigate()

    console.log(guest)

    return (
        <Menus>  
            <Table.Row>
                <Cabin>{index + 1}</Cabin> 

                <Stacked>
                    <span>{guest.fullName}</span>
                </Stacked>

            <Menus.Toggle id='guests'></Menus.Toggle>
            <Menus.List id='guests'>
                <Menus.Button icon={<HiOutlineUser />} onClick={() => navigate(`/guests/${guest.id}`)}>
                    Show Guest Details
                </Menus.Button>
            </Menus.List>
            </Table.Row>
        </Menus>
    );      
}

export default GuestsRow;



{/* <Menus.Button
icon={<HiArrowUpOnSquare />} 
// onClick={() => {
//     deleteBooking(bookingId)
// }}
disabled={isDeletingBooking}
>
Delete Booking
</Menus.Button> */}


{/* {status === 'checked-out' &&                 
    <Menus.Button
    icon={<HiArrowUpOnSquare />} 
    onClick={() => {
        deleteBooking(bookingId)
    }}
    disabled={isDeletingBooking}
    >
        Delete
    </Menus.Button>
} */}