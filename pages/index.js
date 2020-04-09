import { Flex,
  Box,
  Grid } from "@chakra-ui/core";

import Product from '../components/Product';

const Index = props => {
  return (
    <Flex
      direction='column'
      w={{sm:'90vw', md:'90vw', lg:'90vw', xl:'70vw'}}
      {...props}
    >
      <div>
        <p>Welcome to Fashionkart</p>
      </div>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        <Product id='1'/>
        {/* <Box w="100%" h="25" bg="blue.500" />
        <Box w="100%" h="25" bg="blue.500" />
        <Box w="100%" h="25" bg="blue.500" />
        <Box w="100%" h="25" bg="blue.500" />
        <Box w="100%" h="25" bg="blue.500" />
        <Box w="100%" h="25" bg="blue.500" />
        <Box w="100%" h="25" bg="blue.500" /> */}
      </Grid>
    </Flex>
  );
};

export default Index;