import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import "../footer/footer.css";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <h4>Localização</h4>
      <Row>
        <Col className="loc">
          <div>
            <h6>São Paulo</h6>
            <p>Rua do Sócio, 423/1801</p>
            <p>Vila Olímpia - SP</p>
            <p>04522-000</p>
          </div>
          <div>
            <h6>Rio de Janeiro</h6>
            <p>Vol. da Pátria, 301/702</p>
            <p>Botafogo - RJ</p>
            <p>22270-000</p>
          </div>
        </Col>
        <Col>
          <Stack gap={2} className="mx-5">
            <Button className="orange">ENTRE EM CONTATO</Button>
            <Button className="orange">FALE COM O NOSSO CONSULTOR ONLINE</Button>
          </Stack>
        </Col>
        <Col>
          <p></p>
        </Col>
      </Row>
    </Container>
  );
}
