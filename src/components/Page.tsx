import {lastVisitedPatientsMock} from "../prototypes/App.prototype";
import {Box, Button, Heading, Wrap, WrapItem} from "@chakra-ui/react";
import Card from "./Card";
import {MdArrowForward} from "react-icons/all";
import * as React from "react";

interface IPage {
    subtitle: string;
    title: string;
    type: string;
    buttonText: string;
}

const Page = (props: IPage) => {

    /* Cards */
    const Cards = lastVisitedPatientsMock && lastVisitedPatientsMock.map(({date_of_birth, gender, name, nhsNumber}) =>
        <WrapItem><Card gender={gender} nhsNumber={nhsNumber} name={name} date_of_birth={date_of_birth}></Card></WrapItem>)

    return <Box>
        <Heading padding={[0, 8]} paddingTop={[8, 0]} textAlign={["center", "left"]} paddingLeft={[0]}>{props.title}</Heading>
        <Box paddingLeft={[0, 8]} gap={16}>
            <Heading paddingLeft={[0]} paddingTop={8} paddingBottom={8} margin={0} textAlign={["center", "left"]} color={"gray.0"} fontSize={"18px"}>{props.subtitle}</Heading>
            <Wrap color="white" textAlign="left" justifyContent={["space-between", "left"]} flexDirection="row">
                {props.type === "dashboard" && Cards}
            </Wrap>
            <Box padding={8} textAlign={"right"}>
                <Button rightIcon={<MdArrowForward />} width={"200px"} size={"sm"} background="green.0" color="white">{props.buttonText}</Button>
            </Box>
        </Box>
    </Box>
}

export default Page;