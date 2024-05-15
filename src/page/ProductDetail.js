import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
    let{id} = useParams();
    const[product,setProduct]=useState(null)
    const [selectedSize, setSelectedSize] = useState("사이즈 선택");

    const handleSelect = (e) => {
        setSelectedSize(e);
    };

    const getProductDetail = async () => {
        let url =`https://my-json-server.typicode.com/jjanjoo/jay-test/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        setProduct(data);
    }

    useEffect(()=>{
        getProductDetail()
    },[])

  return (
    <Container>
        <Row>
            <Col className='product-img'>
            <img width="350" height={500} src={product?.img} />
            </Col>
            <Col>
            <div className='product-title'>{product?.title}</div>
            <div className='product-price'>¥{product?.price}</div>
            <div className='product-choice'>{product?.choice === true? "Conscious choice" : ""}</div>
            <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {selectedSize}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={() => handleSelect('S')}>S</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => handleSelect('M')}>M</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={() => handleSelect('L')}>L</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
            <Button className='add-btn' variant="dark">추가</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail
