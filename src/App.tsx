import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
    Heading,
    WrapItem,
    Wrap
} from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';
import {useState} from "react";
import Card from "./components/Card";
import SideNavigation from "./components/SideNavigation";
import NavigationLink from "./components/NavigationLink";
import InfoPanel from "./components/InfoPanel";
import theme from "./appTheme";
import {infoFeedItems, lastVisitedPatientsMock} from "./prototypes/App.prototype";

const navigationLinks = [
    {
        name: "Dashboard",
        icon: <StarIcon/>
    },
    {
        name: "Patients",
        icon: <StarIcon/>
    }
]
/* Cards */
const Cards = lastVisitedPatientsMock && lastVisitedPatientsMock.map(({date_of_birth, gender, name, nhsNumber}) =>
    <WrapItem><Card gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></Card></WrapItem>)

export const App = () => {
    const [activeItem, setActiveItem] = useState(0);
    const NavigationLinks = navigationLinks && navigationLinks.map((data, index) => <NavigationLink  onClick={() => setActiveItem(index)} activeItem={activeItem} index={index} name={data.name} icon={data.icon}/>)

    return (
        <ChakraProvider theme={theme}>
            <Flex spacing={16} justifyContent="space-between" flexDirection="row">
                <Box position={"relative"} zIndex={3} height="100vh">
                  <SideNavigation activeItem={activeItem} navigationLinks={NavigationLinks} />
                </Box>
                <Box position={"relative"} zIndex={2} sm={12} boxShadow={"lg"} flexGrow={2} height="100vh" background={"gray.10"}>
                    <Heading padding={8}>Dashboard</Heading>
                    <Grid spacing={16}>
                        <Heading paddingLeft={8} paddingTop={8} margin={0} color={"gray.0"} fontSize={"18px"}>Last visited patients</Heading>
                        <Wrap color="white" textAlign="left" justifyContent="flex-start" flexDirection="row">
                            {Cards}
                        </Wrap>
                    </Grid>
                </Box>
                <Box position={"relative"} zIndex={1} width={"20vw"} height="100vh">
                <InfoPanel data={infoFeedItems}/>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
