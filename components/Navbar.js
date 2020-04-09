import React from "react";
import { Box,
  Heading,
  Flex,
  Text,
  useColorMode,
  IconButton,
  Button } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navbar = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: 'purple.100', dark: 'purple.700' };
	const textColor = { light: 'purple.800', dark: 'white' };

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="5"
      // h="12vh"
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      {...props}
    >
      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill={textColor[colorMode]}
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Flex align="center" mr={5} ml={5}>
        <Heading as="h1" size="lg">
          Fashionkart
        </Heading>
      </Flex>

      <Box
        display={{ sm: show ? "block" : "none"}}
      >
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          color={textColor[colorMode]}
          bg={bgColor[colorMode]}
        >
          Change Color Mode
        </IconButton>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Buy</MenuItems>
        <MenuItems>About</MenuItems>
        {/* <MenuItems>Blog</MenuItems> */}
      </Box>
      
      <Box
        display={{ sm: show ? "none" : "block", md: "flex" }}
      >
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          color={textColor[colorMode]}
          bg={bgColor[colorMode]}
        >
          Change Color Mode
        </IconButton>
      </Box>
    </Flex>
  );
};

export default Navbar;