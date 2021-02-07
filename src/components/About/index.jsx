import React from 'react';

import { Container, Card, CardImg, CardTiTle, CardBody } from './styles';
import { dataAbout } from './Data';

function Sobre() {
  return (
    <Container>
      {dataAbout?.map((item) => (
        <Card key={item?.id}>
          <CardImg src={item?.img} alt={item?.title} />
          <CardTiTle>{item?.title}</CardTiTle>
          <CardBody>{item?.description}</CardBody>
        </Card>
      ))}
    </Container>
  );
}

export default Sobre;
