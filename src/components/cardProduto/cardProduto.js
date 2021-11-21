import { Card, Button } from "react-bootstrap";
import "./cardProduto.css";

export default function ProductCard({ product }) {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body className="text-center">
        <Card.Subtitle>{product.name}</Card.Subtitle>
        <Card.Text className="text-muted">
          <del>
            {product.oldPrice.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </del>
        </Card.Text>
        <Card.Title className="green">
          por{" "}
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Title>
        <Card.Text>
          Ou em até {product.installments.count}X de{" "}
          {product.installments.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Text>
        <Button className="green">Comprar</Button>
      </Card.Body>
    </Card>
  );
}