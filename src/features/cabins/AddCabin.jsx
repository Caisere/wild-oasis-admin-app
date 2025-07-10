import React from 'react'
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from '../../ui/Modal';
// import CabinTable from './CabinTable';


function AddCabin () {
    return (
        <div>
            <Modal>
                <Modal.Open opens='cabin-form'>
                    <Button>Add New Cabin</Button>
                </Modal.Open>
                <Modal.Window name='cabin-form'>
                    <CreateCabinForm />
                </Modal.Window>
            </Modal>
        
            {/* <Modal>
                <Modal.Open opens='table'>
                    <Button>Show Cabin Table</Button>
                </Modal.Open>
                <Modal.Window name='table'>
                    <CabinTable />
                </Modal.Window>
            </Modal> */}
        </div>
    )
}



export default AddCabin



// function AddCabin  ()  {
//     const [isOpenModal, setIsOpenModal] = useState(false)

//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal(show => !show)}>Add new Cabin</Button>
//             {/* <CreateCabinForm /> */}
//             {isOpenModal && 
//                 <Modal onCloseModal={setIsOpenModal}>
//                     <CreateCabinForm onCloseModal={setIsOpenModal}/>
//                 </Modal> 
//             }
//         </div>
//     )
// }