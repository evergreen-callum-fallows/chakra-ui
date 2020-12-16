import {Flex, List, ListItem, Text} from "@chakra-ui/react";
import * as React from "react";

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
                {props.color}
                <Text textTransform={"uppercase"} paddingTop={2} fontSize="sm" fontWeight={500} color={props.color}>{props.name}</Text>
            </Flex>
        </ListItem>
    </List>;
}

export default Logo;