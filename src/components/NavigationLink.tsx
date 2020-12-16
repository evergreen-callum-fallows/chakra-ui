import {Flex, List, ListItem, Text} from "@chakra-ui/react";
import * as React from "react";
interface INavigationLink {
    name: string;
    icon: JSX.Element;
    activeItem: number;
    index: number;
    onClick?: () => void;
}

const NavigationLink = (props: INavigationLink): JSX.Element => {

    const activeItem = props.activeItem === props.index;
    return <List>
        <ListItem padding={4} onClick={props.onClick} background={activeItem ? 'white' : 'green.0'}>
            <Flex alignItems={"center"} padding={2} flexDirection={"column"}>
                {props.icon}
                <Text textTransform={"uppercase"} paddingTop={2} fontSize="sm" fontWeight={500} color={activeItem ? 'green.0' : 'white'}>{props.name}</Text>
            </Flex>
        </ListItem>
    </List>;
}


export default NavigationLink;