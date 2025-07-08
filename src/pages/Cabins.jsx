// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";




function Cabins() {
    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter/Sort</p>
                {/* <img src="https://grnkklvecttbnyybfrtg.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" alt="cabin-001" /> */}
            </Row>
            <Row>
                <CabinTable />


                <Button onClick={() => setShowForm(show => !show)}>Add new Cabin</Button>

                {showForm && <CreateCabinForm />}
            </Row>
        </>
    );
}

export default Cabins;
