import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

interface Continent {
  slug: string;
  name: string;
  subtitle: string;
  carouselImage: string;
}

interface CarouselProps {
  continents: Continent[];
}

export function Carousel({ continents }: CarouselProps) {
  return (
    <Flex
      mx="auto"
      h={["250px", "450px"]}
      w="100%"
      maxW="1240px"
      direction="row"
      mb="40px"
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              h={["250px", "450px"]}
              _before={{
                bgImage: continent.carouselImage,
                bgSize: "100%",
                bgPosition: "center",
                bgRepeat: "no-repeat",
                content: '""',
                pos: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                filter: "brightness(0.6)",
                zIndex: -1,
              }}
            >
              <Box mx="auto" alignSelf="center">
                <Link href={continent.slug}>
                  <a>
                    <Text
                      color="gray.50"
                      fontSize={["24px", "48px"]}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {continent.name}
                    </Text>
                    <Text
                      color="gray.50"
                      fontSize={["14px", "24px"]}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      {continent.subtitle}
                    </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
