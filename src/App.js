import React, { Component } from "react";
import { Card, CardTitle, Row, Col } from "react-materialize";
import { Button } from "react-materialize";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Selamat Datang React Materialize</h1>
        <Button>Sukses</Button>
        <Row>
          <Col m="5">
            {" "}
            {/* //attribut m digunkana untuk ukuran layar */}
            <Card
              className="small"
              header={
                <CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">
                  Taman Bermain
                </CardTitle>
              }
            >
              baju
            </Card>
          </Col>

          <Col m="5">
            {" "}
            {/* //attribut m digunkana untuk ukuran layar */}
            <Card
              className="small"
              header={
                <CardTitle image="https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg">
                  Taman Bermain
                </CardTitle>
              }
            >
              baju
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
