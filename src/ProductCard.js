import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class ProductCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={this.props.imageSrc}
          className="productImage"
          alt={this.props.title}
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
