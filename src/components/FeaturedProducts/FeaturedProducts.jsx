import React from 'react'
import { Row, Col, Card } from 'antd'
import data from './data.json'

const FeaturedProducts = () => {
  return (
    <Row className="mb-2" type="flex">
      {data.map(product => (
        <Col xs={24} sm={12} md={12} lg={12} xl={12} key={product.name}>
          <Card className="featured-product h-full" bodyStyle={{ padding: 15 }}>
            <Row>
              <Col xs={4} sm={6} md={6} lg={5} xl={5} className="text-center">
                <img
                  src={product.logo}
                  alt={product.name}
                  height="40"
                  width="40"
                  className="mt-2"
                />
              </Col>
              <Col xs={20} sm={18} md={18} lg={19} xl={19}>
                <h3 className="mb-1 text-white">{product.name}</h3>
                <p className="mb-0">
                  {product.description}{' '}
                  <a href={product.link} className="block">
                    Acessar
                  </a>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default FeaturedProducts