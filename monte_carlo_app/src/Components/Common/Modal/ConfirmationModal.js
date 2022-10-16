import React, {useState} from 'react'

import { Button,Modal,ModalHeader,ModalBody } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export const ConfirmationModal = ({openState,headerTitle,confirmationAction,confirmationMsgBtnColour,actionMessage,closeModal}) => {
  
  return (
    <div>
      {/* modal for the confirmation of the deletion of the list contents */}
      <Modal
        centered
        scrollable
        isOpen={openState}
      >
        <ModalHeader>
          {headerTitle}
        </ModalHeader>

        <ModalBody>
          <Button
            color={confirmationMsgBtnColour}
            onClick={confirmationAction}
          >
            {actionMessage}
          </Button>
          {' '}
          <br />
          <br />
          <Button 
            color="secondary" 
            onClick={closeModal}
          >
            Cancel
          </Button>
        </ModalBody>
      </Modal>
    </div>
  )
}
