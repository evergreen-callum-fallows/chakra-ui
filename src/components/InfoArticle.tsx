import {Box, Text} from "@chakra-ui/react";
import * as React from "react";

const InfoArticle = (props: any): JSX.Element => {
    return <Box padding={"20px"} background={"white"}>
        <Text fontSize={"20px"} fontWeight={"700"}>{props.data.name}</Text>
        <p>{props.data.date}</p>
        <p>{props.data.message}</p>
    </Box>
}

export default InfoArticle;