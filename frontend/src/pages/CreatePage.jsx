import { Container, Box, useColorModeValue, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useStore } from '../store/store.js'
import Form from '../components/Form.jsx'
const CreatePage = () => {
  const emptyObj = {
    name: '',
    price: '',
    image: '',
  }
  const [newProduct, setNewProduct] = useState(emptyObj)
  const { createProduct } = useStore()
  const handleInputState = (e) =>
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct)
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
      setNewProduct(emptyObj)
    }
  }

  const toast = useToast()

  return (
    <Container maxW={'container.sm'} mt={'50'}>
      <Box
        w={'full'}
        p={'6'}
        shadow={'lg'}
        rounded={'lg'}
        bg={useColorModeValue('#f7fafc', '#2d3748')}
      >
        <Form
          handleProductFunc={handleAddProduct}
          product={newProduct}
          handleInputState={handleInputState}
        />
      </Box>
    </Container>
  )
}
export default CreatePage
