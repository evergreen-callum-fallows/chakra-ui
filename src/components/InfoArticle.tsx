import {Box, Divider, Text, Wrap, WrapItem} from "@chakra-ui/react";
import * as React from "react";

const InfoArticle = (props: any): JSX.Element => {
    return <Box height={"33vh"} padding={"20px"} background={"white"}>
        <Wrap flexDirecton={"row"}>
            <WrapItem width={"100%"}>
                <Text fontSize={"20px"} fontWeight={"700"}>{props.data.name}</Text>
            </WrapItem>
            <WrapItem width={"100%"}>
                <Text>{props.data.date}</Text>
            </WrapItem>
            <WrapItem width={"100%"}>
                <Text>{props.data.message}</Text>
            </WrapItem>
            <WrapItem>
                <Divider marginTop="8px"/>
            </WrapItem>
        </Wrap>
    </Box>
}

export default InfoArticle;