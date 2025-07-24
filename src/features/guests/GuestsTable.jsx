import Table from "../../ui/Table";
// import { guests } from "../../data/data-guests";
import GuestsRow from './GuestsRow'
import { useGuests } from "./useGuests";
import Pagination from "../../ui/Pagination";
import Spinner from '../../ui/Spinner'

const GuestsTable = () => {
    const {guests, isLoadingGuests, count } = useGuests()

    if(isLoadingGuests) return <Spinner />

    return (
        <Table columns='0.2fr 1fr 0.2fr'>
            <Table.Header>
                <div>
                    S/N
                </div>
                <div>
                    Guests Full Name
                </div>
            </Table.Header>
            <Table.Body 
                data={guests}
                render={(guest, index) => (
                    <GuestsRow key={guest?.nationalID} guest={guest} index={index}/>
                )} 
            />

                <Table.Footer>
                {/* count={count}  */}
                    <Pagination count={count} params='guests' />
                </Table.Footer>
        </Table>
    )
};

export default GuestsTable;
