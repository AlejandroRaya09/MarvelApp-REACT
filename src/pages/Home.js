import { Header, Button, Grid, Image } from "semantic-ui-react";




import BestCharacters from "../components/BestCharacters";
import ListLastEvent from "../components/ListLastEvent/ListLastEvent";

export default function Home() {

    return(
        <div>
            <BestCharacters/>
            <ListLastEvent/>
        </div>
    )
}