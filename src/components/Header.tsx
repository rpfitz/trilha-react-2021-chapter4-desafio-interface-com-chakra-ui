import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1440px"
      h={["50px","100px"]}
      mx="auto"
      align="center"
      justify="center"
      pl={["20px", "140px"]}
      pr={["calc(20px + 16px)", "calc(140px + 32px)"]}
    >
      {asPath !== "/" && (
        <Link href="/">
          <a>
            <Icon as={IoChevronBack} fontSize={["16", "32"]} />
          </a>
        </Link>
      )}
      <Flex w="100%" justify="center" align="center">
        <Image h={["20px", "46px"]} src="/images/Logo.svg" alt="Logo da worldtrip" />
      </Flex>
    </Flex>
  );
}
