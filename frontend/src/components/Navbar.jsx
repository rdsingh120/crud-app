import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  useColorMode,
} from '@chakra-ui/react'
import { FaCircle } from 'react-icons/fa'
import { IoCreateOutline } from 'react-icons/io5'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={'1340px'} px={'4'}>
      <Flex h={'16'} alignItems={'center'} justifyContent={'space-between'}>
        <Link to={'/'}>
          <HStack gap={'1.5'}>
            <FaCircle color="#29e029" size={'20'} />
            <FaCircle color="#29e029" size={'20'} />
          </HStack>
        </Link>
        <HStack spacing={'2'} align={'center'}>
          <Link to={'/create'}>
            <Button>
              Add Product
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode == 'dark' ? (
              <MdOutlineLightMode size={25} />
            ) : (
              <MdOutlineDarkMode size={25} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}
export default Navbar
