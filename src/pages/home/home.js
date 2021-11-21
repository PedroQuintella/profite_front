import { Component } from "react";
import Carrossel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
import Header from "../../components/navbar/navbar";
import ContainerProdutos from "../../components/container/container";

export default class Home extends Component {
  render() {
    return (
      <article>
        <Header />
        <Carrossel />
        <ContainerProdutos />
        <Footer />
      </article>
    );
  }
}