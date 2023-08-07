import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '../../Reducers/ModalAction';



const PopUp = () => {
    const dispatch = useDispatch()
    const { message, isModalOpen } = useSelector((state) => state.modal)

    const handleClose = () => {
        dispatch(modalAction(false))
    }

    return (
        <>
            <Modal show={isModalOpen}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title >{message.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>{message.body}</p></Modal.Body>
            </Modal>
        </>
    )

}

export default PopUp
