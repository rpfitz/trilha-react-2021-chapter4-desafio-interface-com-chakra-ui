import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ContinentBanner } from "../components/ContinentBanner";
import { Header } from "../components/Header";
import api from "../services/api";

interface City {
  name: string;
  country: string;
  image: string;
  countryFlagImage: string;
}

interface Continent {
  name: string;
  bannerImage: string;
  description: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfPlus100Cities: number;
  plus100Cities: City[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />
      <Flex
        justify="center"
        direction="column"
        w="100%"
        maxWidth="1440px"
        mx="auto"
      >
        <ContinentBanner img={continent.bannerImage} title={continent.name} />
        <Grid gap={["16px", "70px"]} templateColumns={["1fr", "repeat(2, 1fr)"]} my="80px" px={["16px", "140px"]}>
          <Text fontSize={["0.875rem", "1.5rem"]} textAlign="justify">
            {continent.description}
          </Text>
          <Flex dir="row" justify={["space-evenly", "space-between"]} align="center">
            <Stack justify="center" align="center" spacing="0">
              <Text fontSize={["1.5rem", "3rem"]} color="yellow.500" fontWeight="bold">
                {continent.numberOfCountries}
              </Text>
              <Text fontSize={["1.125rem", "1.5rem"]} fontWeight={["regular", "bold"]}>
                países
              </Text>
            </Stack>
            <Stack justify="center" align="center" spacing="0">
              <Text fontSize={["1.5rem", "3rem"]} color="yellow.500" fontWeight="bold">
                {continent.numberOfLanguages}
              </Text>
              <Text fontSize={["1.125rem", "1.5rem"]} fontWeight={["regular", "bold"]}>
                línguas
              </Text>
            </Stack>
            <Stack justify="center" align="center" spacing="0">
              <Text fontSize={["1.5rem", "3rem"]} color="yellow.500" fontWeight="bold">
                {continent.numberOfPlus100Cities}
              </Text>
              <Text fontSize={["1.125rem", "1.5rem"]} fontWeight={["regular", "bold"]}>
                cidades +100
                <Tooltip label="As 100 cidades mais visitadas por turistas.">
                  <Text
                    as="span"
                    fontSize="16px"
                    fontWeight="regular"
                    color="gray.300"
                    ml="0.5rem"
                  >
                    ⓘ
                  </Text>
                </Tooltip>
              </Text>
            </Stack>
          </Flex>
        </Grid>
        <Flex
          px={["16px", "140px"]}
          justify="center"
          direction="column"
          w="100%"
          maxWidth="1440px"
          mx="auto"
        >
          <Heading fontWeight="regular" fontSize={["24px", "36px"]}>Cidades +100</Heading>
          <Grid gap={["0", "32px"]} templateColumns={["1fr", "repeat(4, 1fr)"]} mt={["20px", "40px"]} >
            {continent.plus100Cities.map((city) => (
              <Box key={city.name} w="256px" h="280px" mx="auto">
                <Image
                  src={city.image}
                  borderRadius="5px 5px 0 0"
                  w="256px"
                  h="170px"
                />
                <Flex
                  w="100%"
                  direction="row"
                  p="4"
                  align="center"
                  justify="space-between"
                  borderRadius="0 0 5px 5px"
                  borderBottom="1px"
                  borderLeft="1px"
                  borderRight="1px"
                  borderColor="yellow.500"
                >
                  <Box>
                    <Text fontSize="20px" fontWeight="bold">
                      {city.name}
                    </Text>
                    <Text color="gray.500">{city.country}</Text>
                  </Box>
                  <Image src={city.countryFlagImage} w="30px" h="30px" />
                </Flex>
              </Box>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`continents?slug=${slug}`);

  const continent = response.data[0];

  return {
    props: {
      continent,
    },
  };
};
