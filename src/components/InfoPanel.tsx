import InfoArticle from "./InfoArticle";
import {Grid} from "@chakra-ui/react";
import * as React from "react";


interface IFeedItem {
    name: string;
    message: string;
    date: string;
}

interface IInfoPanel {
    data: Array<IFeedItem>
}

const InfoPanel = (props: IInfoPanel): JSX.Element => {

    const FeedItems = props.data && props.data.map(data => <InfoArticle data={data} /> )

    return  <Grid height="100vh" background="white" spacing={16}>
        {FeedItems}
    </Grid>
}

export default InfoPanel;