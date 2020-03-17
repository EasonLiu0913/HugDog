import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ButtonGroup, Button, Card } from 'react-bootstrap'
import { MdPlaylistAdd, MdDelete, MdAddShoppingCart } from 'react-icons/md'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import $ from 'jquery'
const Cart = props => {
  const [total, setTotal] = useState(1)

  //取得所有購物車內的id清單
  const idList = Object.keys(props.addCart)

  useEffect(() => {
    setTotal(props.addCart[idList].qty)
  }, [])

  return (
    //   判斷式如果購物車有東西才顯示，沒有則顯示沒有東西出現選購按鈕
    <>
      <Container>
        <Row>
          <Col md={12} className="mt-5 d-flex justify-content-center">
            <Col md={7} className="border position-relative">
              <div
                className="rounded bg-primary position-absolute rounded-circle"
                style={{
                  width: 20 + 'px',
                  height: 20 + 'px',
                  left: (-10 / 647.484) * 100 + '%',
                  top: -10,
                }}
              ></div>
              <div
                className="rounded bg-dark position-absolute rounded-circle"
                style={{
                  width: 20 + 'px',
                  height: 20 + 'px',
                  left: (313.742 / 647.484) * 100 + '%',
                  top: -10,
                }}
              ></div>
              <div
                className="rounded bg-dark position-absolute rounded-circle"
                style={{
                  width: 20 + 'px',
                  height: 20 + 'px',
                  left: (637.484 / 647.484) * 100 + '%',
                  top: -10,
                }}
              ></div>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <Col md={7} className="position-relative">
              <div
                className="position-absolute "
                style={{
                  left: (-21.6015 / 647.484) * 100 + '%',
                  top: 10,
                }}
              >
                購物車
              </div>
              <div
                className="position-absolute "
                style={{
                  left: (294.9375 / 647.484) * 100 + '%',
                  top: 10,
                }}
              >
                付款資料
              </div>{' '}
              <div
                className="position-absolute "
                style={{
                  right: (-28.805 / 647.484) * 100 + '%',
                  top: 10,
                }}
              >
                訂單資料
              </div>
            </Col>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Row className="mt-5">
              <Col>
                <h3>以下是你購物車內的商品 NT$100</h3>
                <hr />
              </Col>
            </Row>
            <Row className="align-items-center">
              <img
                src="https://via.placeholder.com/150x150"
                className="col-md-4"
                alt="..."
              />
              <Col md={2}>
                <h3>{props.addCart[idList[0]].pName}</h3>
                <h4>尺寸:{props.addCart[idList[0]].size}</h4>
                <h4>顏色:{props.addCart[idList[0]].color}</h4>
              </Col>
              <Col md={2}>
                <ButtonGroup className="mb-md-2">
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={e => {
                      total <= 1 ? setTotal(1) : setTotal(total - 1)
                    }}
                  >
                    -
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    value={total}
                    type="input"
                    min="0"
                  >
                    {total}
                  </Button>
                  <Button
                    className="border-dark bg-light text-dark"
                    onClick={() => {
                      setTotal(total + 1)
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Col>
              <Col md={2}>
                <h4 className="text-center">$100</h4>
              </Col>
              <Col md={2}>
                <Button className="mb-2" variant="primary" size="lg">
                  <MdPlaylistAdd className="mb-md-1" />
                  下次再買
                </Button>{' '}
                <Button className="mb-2" variant="primary" size="lg">
                  <MdDelete className="mb-md-1" />
                  刪除商品
                </Button>
              </Col>
            </Row>
            <hr />
          </Col>
        </Row>
        <Row className="mt-1">
          <Col md={{ offset: 6 }} className="d-flex justify-content-between">
            <div>小計</div>
            <div>$100</div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ offset: 6 }} className="d-flex justify-content-between">
            <div>運費</div>
            <div>免額外運費</div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={{ offset: 6 }}>
            <Button
              className="bg-transparent border-0 text-dark p-0"
              onClick={e => {
                $('#coupon')
                  .toggle()
                  .focus()
                if ($(e.target).hasClass('text-dark')) {
                  $(e.target)
                    .removeClass('text-dark')
                    .addClass('text-primary')
                } else {
                  $(e.target)
                    .removeClass('text-primary')
                    .addClass('text-dark')
                }
              }}
            >
              促銷代碼或優惠券
            </Button>
            <input id="coupon" type="text" className="b-0" />
            <hr />
          </Col>
        </Row>
        <Row className="mt-1">
          <Col md={{ offset: 6 }} className="d-flex justify-content-between">
            <div className="font-weight-bold">你的總金額</div>
            <div className="font-weight-bold">$100</div>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col md={{ offset: 9 }}>
            <Button variant="primary" size="lg" block href="/checkout">
              前往結帳
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3>追加購買</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={3} className="mb-3">
            <Card className="shadow-sm">
              <img
                src="https://via.placeholder.com/250x150"
                className="card-img-top"
                alt="..."
              />
              <Card.Body className="text-center">
                <Card.Title>Book</Card.Title>
                <Card.Text>商品說明</Card.Text>
                <Card.Text className="d-md-flex justify-content-between">
                  <del className="cart-text">NTD 200元</del>
                  <Card.Text
                    className="text-danger"
                    style={{ textDecoration: 'underline' }}
                  >
                    NTD 1000元
                  </Card.Text>
                </Card.Text>
                <Button className="mb-md-2" variant="primary" size="md">
                  <MdAddShoppingCart className="mb-1" />
                  加入購物車
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="shadow-sm">
              <img
                src="https://via.placeholder.com/250x150"
                className="card-img-top"
                alt="..."
              />
              <Card.Body className="text-center">
                <Card.Title>Book</Card.Title>
                <Card.Text>商品說明</Card.Text>
                <Card.Text className="d-md-flex justify-content-between">
                  <del className="cart-text">NTD 200元</del>
                  <Card.Text
                    className="text-danger"
                    style={{ textDecoration: 'underline' }}
                  >
                    NTD 1000元
                  </Card.Text>
                </Card.Text>
                <Button className="mb-md-2" variant="primary" size="md">
                  <MdAddShoppingCart className="mb-1" />
                  加入購物車
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="shadow-sm">
              <img
                src="https://via.placeholder.com/250x150"
                className="card-img-top"
                alt="..."
              />
              <Card.Body className="text-center">
                <Card.Title>Book</Card.Title>
                <Card.Text>商品說明</Card.Text>
                <Card.Text className="d-md-flex justify-content-between">
                  <del className="cart-text">NTD 200元</del>
                  <Card.Text
                    className="text-danger"
                    style={{ textDecoration: 'underline' }}
                  >
                    NTD 1000元
                  </Card.Text>
                </Card.Text>
                <Button className="mb-md-2" variant="primary" size="md">
                  <MdAddShoppingCart className="mb-1" />
                  加入購物車
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-3">
            <Card className="shadow-sm">
              <img
                src="https://via.placeholder.com/250x150"
                className="card-img-top"
                alt="..."
              />
              <Card.Body className="text-center">
                <Card.Title>Book</Card.Title>
                <Card.Text>商品說明</Card.Text>
                <Card.Text className="d-md-flex justify-content-between">
                  <del className="cart-text">NTD 200元</del>
                  <Card.Text
                    className="text-danger"
                    style={{ textDecoration: 'underline' }}
                  >
                    NTD 1000元
                  </Card.Text>
                </Card.Text>
                <Button
                  className="mb-md-2"
                  variant="primary"
                  size="md"
                  onClick={() => alert('hello')}
                >
                  <MdAddShoppingCart className="mb-1" />
                  加入購物車
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h3>運貨與退貨通知</h3>
            <hr />
            <p className="px-3">
              如果你需要退貨，可以辦理免額外付費運送退貨商品，也可以將商品退回任一間
              Apple 直營店。如果是符 合退貨條件的產品，你可在收到訂單商品的 14
              天內開始辦理退貨。只須登入你的帳戶，或撥打電話聯絡我 們：
              0800-020-021。如果你需要退貨，可以辦理免額外付費運送退貨商品，也可以將商品退回任一間
              Apple 直營店。如果是符合退貨條件的產品，你可在收到訂單商品的 14
              天內開始辦理退貨。只須登入你的 帳戶，或撥打電話聯絡我們：
              0800-020-021。如果你需要退貨，可以辦理免額外付費運送退貨商品，也可
              以將商品退回任一間 Apple
              直營店。如果是符合退貨條件的產品，你可在收到訂單商品的 14
              天內開始辦理 退貨。只須登入你的帳戶，或撥打電話聯絡我們：
              0800-020-021。
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = store => {
  return {
    total: store.counter,
    detail: store.getProduct,
    addCart: store.saveProductToCart,
  }
}

export default withRouter(connect(mapStateToProps)(Cart))
