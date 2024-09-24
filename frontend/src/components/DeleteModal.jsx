import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
const DeleteModal = ({ isOpen, onClose, handleDelete }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Delete for all eternity?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>This will be deleted from the database.</Text>
          <br />
          <Text>
            Are you sure you want to{' '}
            <Text as={'span'} color="red.300">
              permanently delete
            </Text>{' '}
            this product?
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button mr={'5'} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            Yes, delete it
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default DeleteModal
