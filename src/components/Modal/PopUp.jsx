import Modal from 'react-bootstrap/Modal';


const PopUp = ({ isModalOpen, title, msg, onclick }) => {

    return (
        <>
            <Modal show={isModalOpen}>
                <Modal.Header closeButton onClick={onclick}>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>{msg}</p></Modal.Body>
            </Modal>
        </>
    )

}

export default PopUp