import Modal from 'react-bootstrap/Modal';


const PopUp = ({ title, message, action, onclick }) => {
    return (
        <>
            <Modal show={action}>
                <Modal.Header closeButton onClick={onclick}>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>{message}</p></Modal.Body>
            </Modal>
        </>
    )

}

export default PopUp