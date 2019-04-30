import React, { Component } from "react";
import { Container, Form } from "./styles";

import logo from "../../assets/img/logo.png";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form action="">
          <input type="text" placeholder="usuario/repositorio" />
          <button type="submit">OK</button>
        </Form>
      </Container>
    );
  }
}
