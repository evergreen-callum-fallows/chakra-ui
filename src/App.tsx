import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  IconButton,
} from "@chakra-ui/react"
import { StarIcon, BellIcon } from '@chakra-ui/icons';
import {useState} from "react";
import SideNavigation from "./components/SideNavigation";
import NavigationLink from "./components/NavigationLink";
import InfoPanel from "./components/InfoPanel";
import theme from "./appTheme";
import {infoFeedItems} from "./prototypes/App.prototype";
import Page from "./components/Page";

export const App = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [displayFeed, setDisplayFeed] = useState(false);

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

    /* size for bottom nav */
    const notchSize = 20;

    return (
        <ChakraProvider theme={theme}>
            <Flex spacing={16} background={"white"} height="100vh" overflow={"hidden"} flexDirection={["row-reverse", "row-reverse"]}>
                {displayFeed && <Box position={["relative"]} background={"white"} paddingBottom={notchSize} flexGrow={1} overflowX="hidden" overflowY="scroll" zIndex={displayFeed ? 4 : 1} width={["50%", "50%"]} height="100%">
                    <InfoPanel data={infoFeedItems}/>
                </Box>}
                <Box position={"relative"} zIndex={2} paddingTop={8} paddingBottom={notchSize} boxShadow={"md"} overflowX="hidden" overflowY="scroll" height="100%"  width={[!displayFeed ? "100%" : "0%", displayFeed ? "60%" : "100%"]} background={"gray.10"}>
                   <Page title={"Dashboard"} type={"dashboard"}  subtitle={"Last visited patients"} buttonText={"See all patients"}/>
                </Box>
                <Box position={["fixed", "relative"]} bottom={['0']} zIndex={3} flexGrow={1} height={["auto","100%"]}  minWidth="100px" width={["100%",  "10%"]}  background="green.0">
                    <SideNavigation activeItem={activeItem} navigationLinks={NavigationLinks} />
                </Box>
                <Box position={["fixed"]} zIndex={4} top={[0]} right={[0]}>
                    <IconButton
                        aria-label="Display Information Feed"
                        size="lg"
                        onClick={() => setDisplayFeed(!displayFeed)}
                        icon={<BellIcon />}
                    />
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
