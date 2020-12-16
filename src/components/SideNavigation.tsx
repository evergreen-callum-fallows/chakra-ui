import {Flex, Grid, List} from "@chakra-ui/react";
import * as React from "react";
import Logo from "./Logo";


interface ISideNavigation {
    navigationLinks: any;
    activeItem: number;
}

const SideNavigation = (props: ISideNavigation): JSX.Element => {
    return   <Grid height="100vh" background="green.0" spacing={16}>
        <List>
            <Logo background={'green.0'} color={'white'} />
        </List>
        <Flex flexDirection="column">
            {props.navigationLinks}
        </Flex>
    </Grid>
}


export default SideNavigation;