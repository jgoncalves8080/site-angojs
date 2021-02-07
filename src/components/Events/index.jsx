import React, { useState } from 'react';
import { Container, Card, CardImg, CardContainer, CardFooter } from './styles';
import event1 from '../../images/event1.jpg';

function Eventos() {
  return (
    <>
      <Container>
        <Card>
          <CardImg src={event1} alt="" />
          <CardContainer>
            <h3>Lorem ipsum sit dolor amet</h3>
            <CardFooter>
              <a href="/">Lorem ipsum</a>
            </CardFooter>
          </CardContainer>
        </Card>
      </Container>
    </>
  );
}

export default Eventos;
