import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  plusQuantity,
  minusQuantity,
  getProductDetail,
  saveProductSizeToCart,
  saveProductColorToCart,
  saveProductQTYToCart,
  saveProductToCart,
} from './actions/index'
import {
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  Form,
  Accordion,
  Card,
} from 'react-bootstrap'
import {
  MdAddShoppingCart,
  MdShoppingCart,
  MdPlaylistAdd,
} from 'react-icons/md'
import Breadcrumb from '../../components/Breadcrumbs'
import ProductSidebar from './components/ProductSidebar'
import ProductCard from './components/ProductCard'

const ProductDetail = props => {
  const pId = props.match.params.pId ? props.match.params.pId : ''
  useEffect(() => {
    props.getProductDetail(pId)
  }, [])
  console.log(props.detail)
  return (
    <Container>
      <Row className="my-5">
        <ProductSidebar />
        <Col md={10}>
          <Row className="m-2">
            <Breadcrumb />
          </Row>
          <Row className="mb-5">
            <Col md={5}>
              <Image src="https://via.placeholder.com/370" thumbnail />
            </Col>
            <Col md={4}>
              <h3>{props.detail.pName}</h3>
              <h4>${props.detail.pPrice}</h4>
              <Form.Label>--尺寸</Form.Label>
              <br />
              <ButtonGroup>
                <Button
                  className="rounded border-dark bg-light text-dark mx-2"
                  type="radio"
                  name="radio"
                  defaultValue="sm"
                  onClick={() => {
                    const data = [props.detail.pId, 'sm']
                    props.saveProductSizeToCart(data)
                  }}
                >
                  小
                </Button>
                <Button
                  className="rounded border-dark bg-light text-dark mx-2"
                  type="radio"
                  name="radio"
                  defaultValue="md"
                  onClick={() => {
                    const data = [props.detail.pId, 'md']
                    props.saveProductSizeToCart(data)
                  }}
                >
                  中
                </Button>
                <Button
                  className="rounded border-dark bg-light text-dark mx-2"
                  type="radio"
                  name="radio"
                  defaultValue="lg"
                  onClick={() => {
                    const data = [props.detail.pId, 'lg']
                    props.saveProductSizeToCart(data)
                  }}
                >
                  大
                </Button>
              </ButtonGroup>
              <br />
              <Form.Label className="mt-2">--顏色</Form.Label>
              <br />
              <ButtonGroup>
                <Button
                  className="rounded btn-primary mx-2"
                  type="radio"
                  name="radio"
                  value="blue"
                  onClick={() => {
                    const data = [props.detail.pId, 'blue']
                    props.saveProductColorToCart(data)
                  }}
                />
                <Button
                  className="rounded btn-danger mx-2"
                  type="radio"
                  name="radio"
                  value="red"
                  onClick={() => {
                    const data = [props.detail.pId, 'red']
                    props.saveProductColorToCart(data)
                  }}
                />
                <Button
                  className="rounded btn-info mx-2"
                  type="radio"
                  name="radio"
                  value="green"
                  onClick={() => {
                    const data = [props.detail.pId, 'green']
                    props.saveProductColorToCart(data)
                  }}
                />
              </ButtonGroup>
              <br />
              <div className="mt-3 d-flex justify-content-between">
                <Button
                  className="mb-md-2 "
                  variant="primary "
                  size="lg"
                  onClick={() => {
                    const data = [
                      props.detail.pId,
                      props.detail.pName,
                      props.total,
                      true,
                    ]
                    props.saveProductToCart(data)
                  }}
                >
                  <MdAddShoppingCart className="mb-1" />
                  加入購物車
                </Button>

                <ButtonGroup className="mb-md-2" size="md">
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={() => {
                      props.minusQuantity(1)
                    }}
                  >
                    -
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    value={props.total}
                    type="input"
                    min="1"
                  >
                    {props.total}
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={() => {
                      props.plusQuantity(1)
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </div>
              <div className="my-3 d-flex justify-content-between">
                <Button
                  className="mb-md-2 btn-padding-x btn-padding-y"
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    const data = [
                      props.detail.pId,
                      props.detail.pName,
                      props.total,
                      true,
                    ]
                    props.saveProductToCart(data)
                  }}
                >
                  <MdPlaylistAdd className="mb-md-1" />
                  加入清單
                </Button>
                <Link to="/Cart">
                  <Button
                    className="mb-md-2 btn-padding-x btn-padding-y"
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      const data = [
                        props.detail.pId,
                        props.detail.pName,
                        props.total,
                        true,
                      ]
                      props.saveProductToCart(data)
                    }}
                  >
                    <MdShoppingCart className="mb-md-1" />
                    快速結帳
                  </Button>
                </Link>
              </div>
            </Col>
            <Col className="d-md-flex flex-column justify-content-around ">
              <div
                className="mb-3 border p-3"
                style={{
                  width: 100 + '%',
                  height: 100 + 'px',
                  overflow: 'hidden',
                }}
              >
                <h6 className="text-center border-bottom">為何選擇我們?</h6>
                <div>為何是我為何是我為何是我為何是我為何是我為何是我</div>
              </div>
              <div
                className="mb-3 border p-3"
                style={{
                  width: 100 + '%',
                  height: 100 + 'px',
                  overflow: 'hidden',
                }}
              >
                <h6 className="text-center border-bottom">為何選擇我們?</h6>
                <div>為何是我為何是我為何是我為何是我為何是我為何是我</div>
              </div>
              <div
                className="mb-3 border p-3"
                style={{
                  width: 100 + '%',
                  height: 100 + 'px',
                  overflow: 'hidden',
                }}
              >
                <h6 className="text-center border-bottom">為何選擇我們?</h6>
                <div>為何是我為何是我為何是我為何是我為何是我為何是我</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-md-3" md={12}>
              <Accordion className="mb-5" defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" type="button">
                    商品說明
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col className="mt-md-3" md={12}>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1" type="button">
                    商品評論
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mt-5 d-md-flex justify-content-between">
                <p>猜你喜歡</p>
                <a href="#product">查看更多></a>
              </div>
            </Col>
          </Row>
          <Row>
            {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = store => {
  return {
    total: store.counter,
    detail: store.getProduct,
    addCart: store.saveProductToCart,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      plusQuantity,
      minusQuantity,
      getProductDetail,
      saveProductSizeToCart,
      saveProductColorToCart,
      saveProductQTYToCart,
      saveProductToCart,
    },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
)
