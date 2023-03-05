import { Flex, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import CocktailImg from "../../public/images/TravelTypes/cocktail.svg";
import BuildingImg from "../../public/images/TravelTypes/building.svg";
import EarthImg from "../../public/images/TravelTypes/earth.svg";
import MuseumImg from "../../public/images/TravelTypes/museum.svg";
import SurfImg from "../../public/images/TravelTypes/surf.svg";

export function TravelTypes() {
  const isWide = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      px={["40px", "140px"]}
      mt={["36px", "114px"]}
      justifyContent="space-evenly"
      wrap={["wrap", "nowrap"]}
    >
      <Flex direction={["row", "column"]} align="center">
        {isWide ? (
          <CocktailImg />
        ) : (
          <Text fontSize="32px" color="yellow.500" mr="8px">
            •
          </Text>
        )}

        <Text
          fontWeight="semibold"
          fontSize={["1.125rem", "1.5rem"]}
          mt={["0px", "24px"]}
        >
          vida noturna
        </Text>
      </Flex>

      <Flex direction={["row", "column"]} align="center">
        {isWide ? (
          <SurfImg />
        ) : (
          <Text fontSize="32px" color="yellow.500" mr="8px">
            •
          </Text>
        )}
        <Text
          fontWeight="semibold"
          fontSize={["1.125rem", "1.5rem"]}
          mt={["0px", "24px"]}
        >
          praia
        </Text>
      </Flex>

      <Flex direction={["row", "column"]} align="center">
        {isWide ? (
          <BuildingImg />
        ) : (
          <Text fontSize="32px" color="yellow.500" mr="8px">
            •
          </Text>
        )}
        <Text
          fontWeight="semibold"
          fontSize={["1.125rem", "1.5rem"]}
          mt={["0px", "24px"]}
        >
          moderno
        </Text>
      </Flex>

      <Flex direction={["row", "column"]} align="center">
        {isWide ? (
          <MuseumImg />
        ) : (
          <Text fontSize="32px" color="yellow.500" mr="8px">
            •
          </Text>
        )}
        <Text
          fontWeight="semibold"
          fontSize={["1.125rem", "1.5rem"]}
          mt={["0px", "24px"]}
        >
          classico
        </Text>
      </Flex>

      <Flex direction={["row", "column"]} align="center">
        {isWide ? (
          <EarthImg />
        ) : (
          <Text fontSize="32px" color="yellow.500" mr="8px">
            •
          </Text>
        )}
        <Text
          fontWeight="semibold"
          fontSize={["1.125rem", "1.5rem"]}
          mt={["0px", "24px"]}
        >
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
}
