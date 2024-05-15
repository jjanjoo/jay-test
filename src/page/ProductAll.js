import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProduct= async() => {
        let searchQuery = query.get('q') || "";
        console.log("query value : ",searchQuery);
        let url = `https://my-json-server.typicode.com/jjanjoo/jay-test/products?q=${encodeURIComponent(searchQuery)}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    useEffect(()=>{
        getProduct()
    },[query]);

  return (
    <div>
        <Container>
            <Row>
            {productList.map((menu) => (
                <Col lg={3}>
                    <ProductCard item={menu}/>
                </Col>
            ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
