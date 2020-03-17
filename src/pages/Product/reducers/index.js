import { combineReducers } from 'redux'
//商品數量
const counter = (state = 1, action) => {
  switch (action.type) {
    case 'PLUS_QUANTITY':
      return state + action.quantity
    case 'MINUS_QUANTITY':
      return state === 1 ? state : state - action.quantity
    default:
      return state
  }
}
const getProduct = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_PRODUCT':
      return action.data
    default:
      return state
  }
}

const saveProductToCart = (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_SIZE':
      return {
        ...state,
        [action.size[0]]: { ...state[action.size[0]], size: action.size[1] },
      }
    case 'SAVE_COLOR':
      return {
        ...state,
        [action.color[0]]: {
          ...state[action.color[0]],
          color: action.color[1],
        },
      }
    case 'SAVE_QTY':
      return {
        ...state,
        [action.qty[0]]: { ...state[action.qty[0]], qty: action.qty[1] },
      }
    case 'SAVE_PRODUCT':
      return {
        ...state,
        [action.product[0]]: {
          ...state[action.product[0]],
          pName: action.product[1],
          qty: action.product[2],
          isAddCart: action.product[3],
        },
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ counter, getProduct, saveProductToCart })

export { rootReducer }
