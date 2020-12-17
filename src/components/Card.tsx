import {Box, Button, Divider, Heading, List, ListItem, Text} from "@chakra-ui/react";
import * as React from "react";

interface ICardInterface {
    name: string;
    nhsNumber: string;
    gender: string;
    date_of_birth: string
}


const Card = (props: ICardInterface): JSX.Element => {
    return <Box justifyContent={["space-around", "left"]} alignSelf="center" margin={[2]}>
        <List background={"white"} spacing={4} boxShadow="md" margin={["0 auto", "8px"]} padding="16px" borderColor="gray.100" borderWidth="1px" borderRadius="16px">
        <ListItem>
            <Text alignText="left" fontWeight="500" display="block" fontSize="16" color="black">{props.name}</Text>
            <Text display="block" color="gray.75">NHS {props.nhsNumber}</Text>
            <Divider marginTop="8px"/>
        </ListItem>
        <ListItem>
            <Heading textTransform="uppercase" fontSize="16" fontWeight="500" color="gray.0">Gender</Heading>
            <Text textTransform="capitalize"  fontWeight="500" display="block" color="black">{props.gender}</Text>
        </ListItem>
        <ListItem>
            <Heading textTransform="uppercase" fontSize="16" fontWeight="500" color="gray.0">Born</Heading>
            <Text display="block"  fontWeight="500" color="black">{props.date_of_birth ? props.date_of_birth : 'UNKNOWN'}</Text>
            <Divider marginTop="8px"/>
        </ListItem>
        <ListItem>
            <Box textAlign={"left"}>
                <Button padding={0} size={"md"} color="green.100" fontWeight="bold" href="#" colorScheme="white"> See details</Button>
            </Box>
        </ListItem>
    </List>
    </Box>
}

export default Card;