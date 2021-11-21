import { Carousel } from "react-bootstrap";
import "../carousel/carousel.css";

export default function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://s3-alpha-sig.figma.com/img/4241/d5ae/f2e681ee5b5e945f1b019b9419874c31?Expires=1638144000&Signature=ZGuSW~p2CAsHcr3GEU1mZCbIIbiBm8vbONZH22-zJ5kBLNmpvnJPP~jal4HhUvuVdjlhDiv7Jf16IFQY9jdtPp59ijW3BRFX5CN9dbpIVDoIjwF0d1RoKUA2XTE~JSPNUA8QirSgmqWIr4RIa0l6a0msLZpMm9wGUXdT5Sd9hXUc37Dq4UDqqSEUyepne6zmDnDIdIsIdMgy2tmm1CubwtpJ7VL0ia1TQZ6qPsSCNOHFKj35-V1ZKSc-ItE5huQc4qqgmvuXAKjpUbgtiNmGCmRLp1KEIwjgqIi41N7ZCe20Krl10Ls7G74Layf8D~Uw1~QDN2vAx9O9fZxH-hP1oA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 id="titulo-carousel">Nossa especialidade:</h3>
          <p id="subtitulo-carousel">experiência de compra.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2018/12/azul-escuro14-1024x576.png?resize=696%2C392&ssl=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nossa especialidade:</h3>
          <p>experiência de compra.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}