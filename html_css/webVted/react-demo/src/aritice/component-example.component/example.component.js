
import { UlComponent } from "./ul.component";

import { Cty } from "./cty";
import { ImgComponent } from "./img.component";
import { H1Component } from "./h1.component";
const h1Content = "helo world";
const h1Style = {
    color: 'blue',
    justifyContent:'center'
};
const imgSrc = "https://i.imgur.com/yXOvdOSs.jpg";
const listElements = [
    'element 1',
    'element 2',
    'element 3',
]


export function ExampleComponent() {

    // useState => return 2 giá trị biến và hàm setState
    // hàm gọi => mảng [state]
    return (
        <>
            <H1Component content={h1Content} style={h1Style}></H1Component>
            <ImgComponent src={imgSrc}></ImgComponent>
            {/* <UlComponent list={listElements}></UlComponent> */}
            <H1Component></H1Component>
            <ImgComponent></ImgComponent>
            <UlComponent ></UlComponent>
            <Cty></Cty>
        </>


    )
}

// function ProductCategoryRow({ category }) {
//     return (
//         <tr>
//             <th colSpan="2">
//                 {category}
//             </th>
//         </tr>
//     );
// }

// function ProductRow({ product }) {
//     const name = product.stocked ? product.name :
//         <span style={{ color: 'red' }}>
//             {product.name}
//         </span>;

//     return (
//         <tr>
//             <td>{name}</td>
//             <td>{product.price}</td>
//         </tr>
//     );
// }

// // function ProductTable({ products }) {
//     const rows = [];
//     let lastCategory = null;

//     products.forEach((product) => {
//         if (product.category !== lastCategory) {
//             rows.push(
//                 <ProductCategoryRow
//                     category={product.category}
//                     key={product.category} />
//             );
//         }
//         rows.push(
//             <ProductRow
//                 product={product}
//                 key={product.name} />
//         );
//         lastCategory = product.category;
//     });

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Price</th>
//                 </tr>
//             </thead>
//             <tbody>{rows}</tbody>
//         </table>
//     );
// }

// function SearchBar() {
//     return (
//         <form>
//             <input type="text" placeholder="Search..." />
//             <label>
//                 <input type="checkbox" />
//                 {' '}
//                 Only show products in stock
//             </label>
//         </form>
//     );
// }

// function FilterableProductTable({ products }) {
//     return (
//         <div>
//             <SearchBar />
//             <ProductTable products={products} />
//         </div>
//     );
// }

// const PRODUCTS = [
//     { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//     { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//     { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//     { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//     { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//     { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
// ];

// export default function App() {
//     return <FilterableProductTable products={PRODUCTS} />;
// }
