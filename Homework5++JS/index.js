const products = [
    {id: 1, name: "Pen", price: 10, category_id: 1},
    {id: 2, name: "Pencil", price: 20, category_id: 1},
    {id: 3, name: "Ruler", price: 30, category_id: 2},
    {id: 4, name: "Rubber", price: 40, category_id: 2},
    {id: 5, name: "Cutter", price: 40, category_id: 3}
];

const category = [
    {
        id: 1,
        name: "Writing",
        products: [
            {product_id: 1, name: "Pen", price: 10},
            {product_id: 2, name: "Pencil", price: 20}
        ]
    },
    {
        id: 2,
        name: "Support Writing",
        products: [
            {product_id: 3, name: "Ruler", price: 30},
            {product_id: 4, name: "Rubber", price: 40}
        ]
    },
    {
        id: 3,
        name: "Other",
        products: [
            {product_id: 5, name: "Cutter", price: 40}
        ]
    }
];

console.log(category);