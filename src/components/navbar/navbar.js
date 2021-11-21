import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { MdOutlineShoppingCart, MdFlag } from "react-icons/md";
import { FaSearch, FaCartPlus, FaFlag } from 'react-icons/fa';
import { ImSearch } from "react-icons/im";

export default function Header() {
  return (
    <Navbar bg="white">
      <Container fluid>
        <Navbar.Brand><img style={{ height: '70px', width: '70px'}} src="https://seeklogo.com/images/P/profite-logo-7935E69D8E-seeklogo.com.gif"/></Navbar.Brand>
        <Form className="d-flex col-md-5">
          <input
            type="Search"
            placeholder="O que está procurando?"
            className="form-control border-bottom border-0"
          />
          <ImSearch />
        </Form>
        <Nav className="d-flex">
        <Nav.Item>
          <img src="https://img.icons8.com/material/30/000000/user-male-circle--v1.png"/>
        </Nav.Item>
          <Nav.Item>
            <Nav.Link>Minha Conta</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <MdOutlineShoppingCart />
          </Nav.Item>
          <Nav.Item>
          <img src="https://img.icons8.com/color/30/000000/brazil.png"/>
          </Nav.Item>
          <Nav.Item>
          <img src="https://img.icons8.com/color/30/000000/spain-2.png"/>
          </Nav.Item>
          <Nav.Item>
          <img src="https://img.icons8.com/color/30/000000/great-britain.png"/>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}