import './App.css';
import axios from 'axios';
import React from 'react';
import ProductCard from './ProductCard';
import onedroplogo from './one-drop-logo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }

  interval = null;

  componentDidMount = () => {
    this.interval = setInterval(this.getData, 60000);
    this.getData();
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  getData = async () => {
    const { data } = await axios.get('https://onedrop.today/products.json');
    const { products } = data;
    const refreshedInfo = products
      .map((el) => {
        let { title, variants, images } = el;
        let { price } = variants[0];
        let [image] = images;
        let imageSrc = image.src;
        return { title, price, imageSrc };
      })
      .filter((el) => {
        return el.price !== '0.00';
      })
      .sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
    this.setState({ info: refreshedInfo });
  };

  render = () => {
    return (
      <div className="App">
        <img src={onedroplogo} className="logo" />
        <header className="header">
          <b>Riley Butterfield Assignment</b>
        </header>
        <div className="productsBody">
          <div className="allProductsContainer">
            {this.state.info.map((product, idx) => {
              return (
                <ProductCard
                  key={idx}
                  imageSrc={product.imageSrc}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };
}

export default App;
