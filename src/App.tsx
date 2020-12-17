import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
} from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';
import {useState} from "react";
import SideNavigation from "./components/SideNavigation";
import NavigationLink from "./components/NavigationLink";
import InfoPanel from "./components/InfoPanel";
import theme from "./appTheme";
import {infoFeedItems} from "./prototypes/App.prototype";
import Page from "./components/Page";



export const App = () => {
    const [activeItem, setActiveItem] = useState(0);

    const navigationLinks = [
        {
            name: "Dashboard",
            icon: <StarIcon color={activeItem === 0 ? "green.0" : 'white'}/>
        },
        {
            name: "Patients",
            icon: <StarIcon color={activeItem === 1 ? "green.0" : 'white'}/>
        }
    ]
    const NavigationLinks = navigationLinks && navigationLinks.map((data, index) => <NavigationLink  onClick={() => setActiveItem(index)} activeItem={activeItem} index={index} name={data.name} icon={data.icon}/>)

    return (
        <ChakraProvider theme={theme}>
            <Flex spacing={16} background={"white"} height="100vh" justifyContent="space-between" flexDirection="row">
                <Box position={"relative"} zIndex={3} height="100%" background="green.0">
                  <SideNavigation activeItem={activeItem} navigationLinks={NavigationLinks} />
                </Box>
                <Box position={"relative"} zIndex={2} sm={12} boxShadow={"lg"} flexGrow={2} height="100%" background={"gray.10"}>
*                   <Page title={"Dashboard"} type={"dashboard"} subtitle={"Last visited patients"} buttonText={"See all patients"}/>
                </Box>
                <Box position={"relative"} background={"white"} zIndex={1} width={"20vw"} height="100%">
                <InfoPanel data={infoFeedItems}/>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
