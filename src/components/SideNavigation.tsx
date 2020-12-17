import {Flex, List} from "@chakra-ui/react";
import * as React from "react";
import Logo from "./Logo";


interface ISideNavigation {
    navigationLinks: any;
    activeItem: number;
}

const SideNavigation = (props: ISideNavigation): JSX.Element => {
    return  <Flex flexDirection={"column"} alignItems={"space-between"} height="100%" spacing={16}>
        <Flex flexDirection="column">
        <List display={["none", "block"]}>
            <Logo background={'green.0'} color={'white'} />
        </List>
        </Flex>
        <Flex height={["auto", "90%"]} justifyContent={"center"} flexDirection={["row", "column"]}>
            {props.navigationLinks}
        </Flex>
    </Flex>
}


export default SideNavigation;