import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={this.props.imageSrc}
          className="productImage"
        />
        <Card.Body className="cardBody">
          <Card.Title>
            <b>{this.props.title}</b>
          </Card.Title>
          <Card.Text>${this.props.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCard;
