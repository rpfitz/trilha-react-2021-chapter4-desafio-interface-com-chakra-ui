import { Divider, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { HomeBanner as Banner } from "../components/HomeBanner";
import { GetStaticProps } from "next";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import api from "../services/api";

interface Continent {
  slug: string;
  name: string;
  subtitle: string;
  carouselImage: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
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
        <Banner />
        <TravelTypes />
        <Divider mt={["36px","80px"]} mb={["24px","52px"]} w="90px" h="2px" alignSelf="center" bgColor="gray.800" />
        <Text fontSize={["20px", "36px"]}  fontWeight="medium" alignSelf="center">
          Vamos nessa?
        </Text>
        <Text mb={["20px", "52px"]} fontSize={["20px", "36px"]} fontWeight="medium" alignSelf="center">
          Então escolha seu continente.
        </Text>
        <Carousel continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("continents");

  return {
    props: { continents: response.data },
  };
};
