import { Container, Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { useStore } from '../store/store'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const { getProducts, products } = useStore()
  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <Container maxW={'1340'} py={'12'}>
      <VStack spacing={8}>
        <Heading as={'h3'} textAlign={'center'} fontWeight={'400'}>
          
        </Heading>
        {products.length == 0 && (
          <Text
            fontSize={'xl'}
            textAlign={'center'}
            fontWeight={500}
            color={'grey.500'}
          >
            No products found ⚠️{' '}
            <Link to={'/create'}>
              <Text
                as={'span'}
                color={'blue.500'}
                _hover={{ textDecoration: 'underline' }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={'full'}
        >
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
export default HomePage
