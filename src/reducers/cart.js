import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone X',
            image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
            description: 'Sản phẩm do Apple sản xuất',
            price: 500,
            inventory: 10,
            rating: 4,
        },
        quantity: 5,
    },
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default:
            return [...state];
    }
}

export default cart;