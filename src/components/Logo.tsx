import {Flex, List, ListItem} from "@chakra-ui/react";
import * as React from "react";
import logoWhite from '../res/images/Evergreen_App_Icon.png';

interface ILogo {
    name?: string;
    background: string;
    onClick?: () => void;
    color: string;
}

const Logo = (props: ILogo): JSX.Element => {

    return <List>
        <ListItem padding={4} onClick={props.onClick} background={props.background}>
            <Flex alignItems={"center"} padding={2} flexDirection={"column"}>
                <img width={80} src={logoWhite} alt={"Evergreen Life"} />
            </Flex>
        </ListItem>
    </List>;
}

export default Logo;