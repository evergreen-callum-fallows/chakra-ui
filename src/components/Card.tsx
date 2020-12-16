import {Divider, Heading, Link, List, ListItem, Text} from "@chakra-ui/react";
import * as React from "react";

interface ICardInterface {
    name: string;
    nhsNumber: string;
    gender: string;
    date_of_birth: string
}

const Card = (props: ICardInterface): JSX.Element => {
    return <List background={"white"} spacing={8} boxShadow="lg" margin="16px" padding="16px" borderColor="gray.75" borderWidth="1px" borderRadius="16px">
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
            <Text display="block" color="black">{props.date_of_birth ? props.date_of_birth : 'UNKNOWN'}</Text>
            <Divider marginTop="8px"/>
        </ListItem>
        <ListItem>
            <Link color="green.100" fontWeight="bold" href="#">
                See details
            </Link>
        </ListItem>
    </List>
}

export default Card;