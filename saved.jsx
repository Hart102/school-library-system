import React from 'react';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';

const Forms = () => {
  return (
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4"> Sign in </p>
          </div>
          <CDBInput material hint="E-mail" type="email" />
          <CDBInput material hint="Password" type="password" />
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <CDBInput type="Checkbox" />
            <p className="m-0">Remember me</p>
            <CDBLink to="#">Forgot Password ?</CDBLink>
          </div>
          <CDBBtn color="dark" className="btn-block my-3 mx-0">
            Sign in
          </CDBBtn>
          <p className="text-center">
            Not a member?{' '}
            <CDBLink className="d-inline p-0" to="#">
              Register
            </CDBLink>
          </p>
          <p className="text-center"> or sign in with</p>
          <div className="flex-row my-3 d-flex justify-content-center">
            <CDBBtn color="white" style={{ boxShadow: 'none' }}>
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0" style={{ boxShadow: 'none' }}>
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn color="white" style={{ boxShadow: 'none' }}>
              <CDBIcon fab icon="google-plus-g" />
            </CDBBtn>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Forms;





// spinner 
import { CDBSpinner, CDBContainer } from 'cdbreact';

export const Spinner = () => {
  return (
    <CDBContainer>
      <CDBSpinner />
      <CDBSpinner danger />
      <CDBSpinner success />
      <CDBSpinner warning />
      <CDBSpinner info />
      <CDBSpinner dark />
      <CDBSpinner secondary />
    </CDBContainer>
  );
};



// Modal 
import React, { useState } from 'react';
import {
  CDBModal,
  CDBCardImage,
  CDBCardBody,
  CDBCardTitle,
  CDBCardText,
  CDBCard,
  CDBBtn,
  CDBContainer,
} from 'cdbreact-pro';

const Modal = () => {
  const [state, setState] = useState({
    modal1: false,
  });
  const toggle = nr => () => {
    let modalNumber = 'modal' + nr;
    setState({
      ...state,
      [modalNumber]: !state[modalNumber],
    });
  };
  return (
    <CDBContainer>
      <CDBBtn color="light" flat onClick={toggle(2)}>
        Medium modal
      </CDBBtn>
      <CDBModal isOpen={state.modal2} toggle={toggle(2)}>
        <CDBCard border>
          <CDBCardImage className="img-fluid" src="img/modal.jpg" />
          <CDBCardBody>
            <CDBCardTitle>Title</CDBCardTitle>
            <CDBCardText>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla orcane faucibus ex, non
              facilisis nisl. Maexenas aliquet mauris ut tempus.
            </CDBCardText>
            <div className="d-flex">
              <div className="d-flex justify-content-start" style={{ flex: ' 50%' }}>
                <CDBBtn color="light" flat>
                  Label
                </CDBBtn>
              </div>
              <div className="d-flex justify-content-end" style={{ flex: ' 50%' }}>
                <CDBBtn color="white" flat onClick={toggle(2)}>
                  Cancel
                </CDBBtn>
                <CDBBtn color="dark" flat>
                  Done
                </CDBBtn>
              </div>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBModal>
      <CDBBtn color="light" flat onClick={toggle(3)}>
        Small modal
      </CDBBtn>
      <CDBModal isOpen={state.modal3} toggle={toggle(3)} size="sm">
        <CDBCard>
          <CDBCardImage className="img-fluid" src="img/modal.jpg" />
          <CDBCardBody>
            <CDBCardTitle>Title</CDBCardTitle>
            <CDBCardText>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla orcane faucibus ex, non
              facilisis nisl. Maexenas aliquet mauris ut tempus.
            </CDBCardText>
            <div className="d-flex">
              <div className="d-flex justify-content-start" style={{ flex: ' 50%' }}>
                <CDBBtn color="light" flat>
                  Label
                </CDBBtn>
              </div>
              <div className="d-flex justify-content-end" style={{ flex: ' 50%' }}>
                <CDBBtn color="white" flat onClick={toggle(3)}>
                  Cancel
                </CDBBtn>
                <CDBBtn color="dark" flat>
                  Done
                </CDBBtn>
              </div>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBModal>
      <CDBBtn color="light" flat onClick={toggle(4)}>
        Large modal
      </CDBBtn>
      <CDBModal isOpen={state.modal4} toggle={toggle(4)} size="lg">
        <CDBCard border>
          <CDBCardBody>
            <CDBCardTitle>Title</CDBCardTitle>
            <CDBCardText>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla orcane faucibus ex, non
              facilisis nisl. Maexenas aliquet mauris ut tempus.
            </CDBCardText>
            <div className="d-flex">
              <div className="d-flex justify-content-start" style={{ flex: ' 50%' }}>
                <CDBBtn color="light" flat>
                  Label
                </CDBBtn>
              </div>
              <div className="d-flex justify-content-end" style={{ flex: ' 50%' }}>
                <CDBBtn color="white" flat onClick={toggle(4)}>
                  Cancel
                </CDBBtn>
                <CDBBtn color="dark" flat>
                  Done
                </CDBBtn>
              </div>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBModal>
      <CDBBtn color="light" flat onClick={toggle(5)}>
        Fluid modal
      </CDBBtn>
      <CDBModal isOpen={state.modal5} toggle={toggle(5)} size="fluid">
        <CDBCard border>
          <CDBCardBody>
            <CDBCardTitle>Title</CDBCardTitle>
            <CDBCardText>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla orcane faucibus ex, non
              facilisis nisl. Maexenas aliquet mauris ut tempus.
            </CDBCardText>
            <div className="d-flex">
              <div className="d-flex justify-content-start" style={{ flex: ' 50%' }}>
                <CDBBtn color="light" flat>
                  Label
                </CDBBtn>
              </div>
              <div className="d-flex justify-content-end" style={{ flex: ' 50%' }}>
                <CDBBtn color="white" flat onClick={toggle(5)}>
                  Cancel
                </CDBBtn>
                <CDBBtn color="dark" flat>
                  Done
                </CDBBtn>
              </div>
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBModal>
    </CDBContainer>
  );
};
// export default Modal;