import { Button, Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      direction="column"
      h="100vh"
      w="90vw"
      alignItems="flex-start"
      ml={100}
    >
      {/*  Primer Contenedor */}
      <Flex h="50vh" alignItems="center" justifyContent="center">
        <Flex
          w="85vw"
          h="40vh"
          alignItems="center"
          justifyContent="center"
          bgImage="url('https://i.pinimg.com/564x/4c/a6/22/4ca622716041659e9b13fadb33fd1134.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          direction="column"
        >
          <Heading
            as="h1"
            size="xl"
            color="whiteAlpha.800"
            mb={6}
            fontWeight="1"
            fontSize="5xl"
            letterSpacing="wide"
            p={5}
          >
            DOMINA EL TERRENO
          </Heading>
          <Flex>
            <Button
              colorScheme="white"
              variant="outline"
              m={2.5}
              color="whiteAlpha.800"
              _hover={{ bg: "white", color: "black" }}
              borderRadius="none"
              letterSpacing="wide"
              p={6}
            >
              VER DETALLES
            </Button>
            <Button
              colorScheme="white"
              variant="outline"
              m={2.5}
              color="whiteAlpha.800"
              _hover={{ bg: "white", color: "black" }}
              borderRadius="none"
              letterSpacing="wide"
              p={6}
            >
              VER VIDEO
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/*  Segundo Contenedor */}

      <Flex h="50vh" alignItems="flex-start" justifyContent="flex-start">
        <Flex
          w="20vw"
          h="30vh"
          alignItems="center"
          justifyContent="center"
          bgImage="url('https://i.pinimg.com/564x/4c/a6/22/4ca622716041659e9b13fadb33fd1134.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          direction="column"
        >
          <Heading
            as="h1"
            size="xl"
            color="whiteAlpha.800"
            fontWeight="1"
            fontSize="30"
            letterSpacing="wide"
            p={5}
          >
            DOMINA EL TERRENO
          </Heading>
          <Button
            colorScheme="white"
            variant="outline"
            m={2.5}
            color="whiteAlpha.800"
            _hover={{ bg: "white", color: "black" }}
            borderRadius="none"
            letterSpacing="wide"
            w="20em"
          >
            VER DETALLES
          </Button>
          <Button
            colorScheme="white"
            variant="outline"
            m={2.5}
            color="whiteAlpha.800"
            _hover={{ bg: "white", color: "black" }}
            borderRadius="none"
            letterSpacing="wide"
            w="20em"
          >
            VER VIDEO
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
