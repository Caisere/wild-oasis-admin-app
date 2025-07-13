// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinsTableOperations from "../features/cabins/CabinsTableOperations";





function Cabins() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <CabinsTableOperations />
                {/* <p>Filter/Sort</p> */}
                {/* <img src="https://grnkklvecttbnyybfrtg.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" alt="cabin-001" /> */}
            </Row>
            <Row>
                <CabinTable />
                <AddCabin />
            </Row>
        </>
    );
}

export default Cabins;
