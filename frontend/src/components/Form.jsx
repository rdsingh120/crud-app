import { VStack, Heading, Input, Button } from '@chakra-ui/react'
const Form = ({ handleProductFunc, product, handleInputState }) => {
  return (
    <VStack spacing={'4'}>
      <Heading as={'h1'} size={'2xl'} mb={'5'} fontWeight={'500'}>
        Create new product
      </Heading>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        value={product.name}
        onChange={handleInputState}
      />
      <Input
        type="number"
        placeholder="Price"
        name="price"
        value={product.price}
        onChange={handleInputState}
      />
      <Input
        type="text"
        placeholder="Image URL"
        name="image"
        value={product.image}
        onChange={handleInputState}
      />
      <Button colorScheme="green" onClick={handleProductFunc}>
        Add Product
      </Button>
    </VStack>
  )
}
export default Form
