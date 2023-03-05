import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import AirplaneImg from "../../public/images/Airplane.svg";

export function HomeBanner() {
  const isWide = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      bgImage="url('/images/Banner.png')"
      bgRepeat="no-repeat"
      w="100%"
      maxWidth="1440px"
      h={["163px", "335px"]}
      px={["16px", "140px"]}
      py={["28px", "80px"]}
      direction="row"
      justifyContent="space-between"
    >
      <Box w={["100%", "50%"]} my="auto">
        <Text
          fontSize={["1.25rem", "2.25rem"]}
          fontWeight="medium"
          color="gray.50"
        >
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text
          fontSize={["0.875rem", "1.25rem"]}
          color="gray.50"
          mt={["8px", "5"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWide && <AirplaneImg />}
    </Flex>
  );
}
