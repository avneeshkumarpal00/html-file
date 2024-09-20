import logo from './logo.svg';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Card} from "react-bootstrap";
import ProductList from './Component/ProductList';
import React,{useState} from 'react';



function App() {
  const productList = [
    {
      price:9999,
      name:"IPHONE 10S Max",
      quantity:0,
    },{
      price:999,
      name:"Redmi 10S Max",
      quantity:0,
    }
  ]
  let [productList , setProductList] = useState(products)

const incrementQuantity = (index) => {
  let newProductList = [...productList]
  newProductList[index].quantity++
setProductList(newProductList);
}

  return (
   <>
    <div className="main">
      <div className="conatiner mt-5">

      <ProductList productList={productList}
       incrementQuantity={this.incrementQuantity}/>
     
     </div>
      <header email="ws@gmail.com">
        <h1> Welcome to home page</h1>
        <Container fluid>
          <Container>
            <Row>
              <Col className="col-12 text-center py-4">
              <h1> Our Courses</h1>
              Welcome to Wscube Tech
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6"></Col>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        
        Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
              <Col lg="3" md="6"></Col>
              <Col lg="3" md="6"></Col>
              <Col lg="3" md="6"></Col>
               <Col lg="3" md="6"></Col>

            </Row>
          </Container>

        </Container>
       
      </header>
    </div>
    </>
  );
}


export default App;
