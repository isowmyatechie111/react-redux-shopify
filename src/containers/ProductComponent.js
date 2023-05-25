import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);

  const renderProducts = products?.map(
    ({ title, id, category, image, price }) => {
      return (
        <Col key={id} style={{ margin: "10px" }}>
          <Card style={{ width: "18rem" }}>
            <Link to={`product/${id}`}>
              <Card.Img
                variant="top"
                src={image}
                style={{ height: "320px", padding: "10px" }}
              />

              <Card.Body>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="button-tooltip-2">{title}</Tooltip>}
                >
                  <Card.Title className="title" tooltip={title}>
                    {title}
                  </Card.Title>
                </OverlayTrigger>
                <Card.Text>${price}</Card.Text>
                <Card.Text>{category}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Link>
          </Card>
        </Col>
      );
    }
  );

  return <>{renderProducts}</>;
};

export default ProductComponent;
