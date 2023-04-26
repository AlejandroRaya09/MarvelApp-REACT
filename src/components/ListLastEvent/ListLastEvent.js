import Container from "../Container";
import { Card, Header } from "semantic-ui-react";
import "./ListLastEvent.scss";

import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvent/LastEvents";

export default function ListLastEvent() {

  const lastEventFecth = useFetch(`${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`);
  console.log(lastEventFecth)

  return (
    <div className="container-list-last-events">
      <Header size="large">Ultimos Eventos</Header>
      <Container bg="light">
        <Card.Group itemsPerRow={5}>
          <LastEvents lastEventFecth={lastEventFecth}/>
        </Card.Group>
      </Container>
    </div>
  );
}
