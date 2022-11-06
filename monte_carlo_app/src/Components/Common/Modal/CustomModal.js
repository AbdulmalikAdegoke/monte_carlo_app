import React from 'react'

import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export const CustomModal = ({openState,headerTitle,modalBodyContent,confirmationAction,confirmationMsgBtnColour,actionMessage,closeModal}) => {
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
                {modalBodyContent}
            </ModalBody>
            
            <ModalFooter>
                <Button
                    color={confirmationMsgBtnColour}
                    onClick={confirmationAction}
                >
                    {actionMessage}
                </Button>
                {' '}
                <Button 
                    color="danger" 
                    onClick={closeModal}
                >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
        
    </div>
  )
}
