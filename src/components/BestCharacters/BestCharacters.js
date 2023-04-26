import Container from "../Container";
import { Header, Button, Grid, Image } from "semantic-ui-react";
import marvelImagen from "../../img/marvel.png"

import './BestCharacters.scss'

export default function BestCharacters() {
  return (
    <Container>
      <div className="best-character">
        <Grid columns={2} divided="vertically">
          <Grid.Column>
            <Header as="h1">
              Los mejores personajes de marvel de los que todo mundo esta
              hablando
            </Header>
            <Header as="h3">Disfruta del mejor contenido.</Header>
            <Button>Ver todos los personajes</Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImagen} alt="Marvel APP"></Image>
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
}
