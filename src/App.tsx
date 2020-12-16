import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
    Divider,
    List,
Center,
    Link,
    ListItem,
  Grid,
    Heading,
} from "@chakra-ui/react"

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"

// 2. Extend the theme to include custom colors, fonts, etc

const theme = extendTheme({ colors: {
    white: "#ffffff",
    green: {
      0: "#39b54a",
      75: "#6bc878",
      50: "#9cdaa4",
      25: "#cdecd2",
      10: "#ebf7ec",
      100: "#36ab45"
    },
    yellow: {
      0: "#ffc805",
      75: "#ffd644",
      50: "#ffe382",
      25: "#fff1c0",
      10: "#fff9e6",
      100: "#8d6e00"
    },
    gray: {
      0: "#706f6f",
      75: "#939393",
      50: "#b7b7b7",
      25: "#dbdbdb",
      5: "#f7f7f7",
      10: "#f0f0f0",
    },
    teal: {
      0: "#69c0ac",
      75: "#8fd0c1",
      50: "#afd9cf",
      25: "#d9efea"
    },
    aqua: {
      0: "#d4edfc",
      75: "#dff2fd",
      50: "#e9f6fd",
      25: "#f4fafe",
    },
    ruby: {
      0: "#d8338b",
      75: "#e474b1",
      50: "#eca4cb",
      25: "#f5d3e5",
      10: "#fae9f3",
    }
  } })

const listData = [
    {
        name: "WILLIAMS, Jonathon Simson",
        nhsNumber: "123 567 766",
        gender: "male",
        date_of_birth:"14-Jul-1956 (39y)"
    },
    {
        name: "WILLIAMS, Jonathon Simson",
        nhsNumber: "123 567 766",
        gender: "male",
        date_of_birth:"14-Jul-1956 (39y)"
    },
    {
        name: "WILLIAMS, Jonathon Simson",
        nhsNumber: "123 567 766",
        gender: "male",
        date_of_birth: ""
    },
    {
        name: "WILLIAMS, Jonathon Simson",
        nhsNumber: "123 567 766",
        gender: "male",
        date_of_birth:"14-Jul-1956 (39y)"
    }]

interface ICardInterface {
    name: string;
    nhsNumber: string;
    gender: string;
    date_of_birth: string
}

const Card = (props: ICardInterface): JSX.Element => {
    return <List spacing={8} boxShadow="1px 1px 1px black" padding="16px" borderColor="gray.75" borderWidth="1px" borderRadius="16px">
        <ListItem>
            <Text alignText="left" fontWeight="500" display="block" fontSize="16" color="black">{props.name}</Text>
            <Text display="block" color="gray.75">{props.nhsNumber}</Text>
            <Divider marginTop="8px"/>
        </ListItem>
        <ListItem>
            <Heading textTransform="uppercase" fontSize="16" fontWeight="500" color="gray.0">Gender</Heading>
            <Text textTransform="capitalize" display="block" color="black">{props.gender}</Text>
        </ListItem>
        <ListItem>
            <Heading textTransform="uppercase" fontSize="16" fontWeight="500" color="gray.0">Born</Heading>
            <Text display="block" color="black">{props.date_of_birth}</Text>
            <Divider marginTop="8px"/>
        </ListItem>
        <ListItem>
            <Link color="green.100" fontWeight="bold" href="#">
                See details
            </Link>
        </ListItem>
    </List>

}
/* Cards */
const Cards = listData && listData.map(({date_of_birth, gender, name, nhsNumber}) =>
    <Card gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></Card>)

export const App = () => (
<ChakraProvider theme={theme}>
    <Box>
        <Grid height="40vh" spacing={16}>
            <Flex color="white" textAlign="left" justifyContent="space-evenly" flexDirection="row">
                {Cards}
            </Flex>
        </Grid>
    </Box>
</ChakraProvider>
)
