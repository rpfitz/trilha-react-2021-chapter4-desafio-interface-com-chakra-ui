import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "770px",
  md: "800px",
  lg: "960px",
  xl: "1200px",
})

export const theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      800: "#47585b",
      500: "#999999",
      50: "#f5f8fa",
    },
    yellow: {
      500: "#ffba08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});
