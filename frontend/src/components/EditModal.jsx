import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useStore } from '../store/store'
const EditModal = ({ product, isOpen, onClose }) => {
  const [productUpdate, setProductUpdate] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  })
  const { updateProduct } = useStore()
  const handleInputState = (e) =>
    setProductUpdate({ ...productUpdate, [e.target.name]: e.target.value })
  const toast = useToast()
  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(product._id, productUpdate)
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    } else {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      })
    }
    onClose()
  }
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="#63b3ed3b"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={'4'}>
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={productUpdate.name}
              onChange={handleInputState}
            />
            <Input
              type="number"
              placeholder="Price"
              name="price"
              value={productUpdate.price}
              onChange={handleInputState}
            />
            <Input
              type="text"
              placeholder="Image URL"
              name="image"
              value={productUpdate.image}
              onChange={handleInputState}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={handleUpdateProduct}>
            Save Changes
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default EditModal
