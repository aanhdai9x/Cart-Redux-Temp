var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4,
    },
    {
        id: 2,
        name: 'Samsung S10',
        image: 'https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-600x600.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3,
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-7-300x300.jpg',
        description: 'Sản phẩm do China sản xuất',
        price: 450,
        inventory: 5,
        rating: 5,
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default:
            return [...state];
    }
}

export default products;