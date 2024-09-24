import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useColorModeValue,
  HStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useStore } from '../store/store'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
const ProductCard = ({ _id, name, price, image }) => {
  const { deleteProduct } = useStore()
  const toast = useToast()
  const handleDelete = async () => {
    const { success, message } = await deleteProduct(_id)
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
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: deleteWarning,
    onOpen: openDeleteWarning,
    onClose: closeDeleteWarning,
  } = useDisclosure()
  return (
    <Box
      key={_id}
      shadow={'lg'}
      rounded={'lg'}
      overflow={'hidden'}
      bg={useColorModeValue('#f7fafc', '#2d3748')}
      p={4}
      alignSelf={'start'}
      transition={'all 0.3s'}
      _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
    >
      <EditModal
        product={{ _id, name, price, image }}
        isOpen={isOpen}
        onClose={onClose}
      />
      <DeleteModal
        isOpen={deleteWarning}
        onClose={() => closeDeleteWarning()}
        handleDelete={handleDelete}
      />
      <Image
        src={image}
        alt={name}
        h={'48'}
        width={'full'}
        objectFit={'cover'}
        rounded={'lg'}
      />
      <Stack mt="6" spacing="2">
        <Heading size="md" fontWeight={'500'}>
          {name}
        </Heading>
        <Text
          color={useColorModeValue('green.900', 'green.300')}
          fontSize="xl"
          fontWeight={'bold'}
        >
          ${price}
        </Text>
        <HStack spacing="2">
          <Button variant="solid" colorScheme="green" onClick={onOpen}>
            Edit
          </Button>
          <Button variant="solid" colorScheme="red" onClick={openDeleteWarning}>
            Delete
          </Button>
        </HStack>
      </Stack>
    </Box>
  )
}
export default ProductCard
