import {
  Box,
  Flex,
	Image,
	Badge,
	Text,
	Stack,
	Icon,
	Button,
	useColorMode,
} from '@chakra-ui/core';

const Product = (props) => {
	const { colorMode } = useColorMode();
	const bgColor = { light: 'gray.200', dark: 'gray.700' };
	const textColor = { light: 'gray.500', dark: 'gray.100' };

  return (
    <Box
      // w='200px'
      // h='200px'
      rounded='10px'
      overflow='hidden'
      boxShadow='sm'
      bg={bgColor[colorMode]}
    >
      <Flex>
        <Box>This is a product # {props.id}.</Box>
        <Text>This is a product Description.</Text>
      </Flex>
    </Box>
  );
}

export default Product;
