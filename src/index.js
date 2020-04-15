import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";
import * as serviceWorker from "./serviceWorker";

const products = [
  { category: "Electronics ", name: "IPhone" , price: " 1500dt"},
  { category: "Clothes ", name: "Trousers" , price: " 55dt"},
  { category: "Electronics ", name: "Tablette " , price: " 400dt"},
  { category: "Clothes ", name: "Dress" , price: " 260dt"}
];
const ProductTable = props => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}>
      {props.children}
      <table
        style={{
          textAlign: "center",
          border: props.border,
          backgroundColor: props.backgroundColor,
          color: props.color,
          height: 400,
          width: 600
        }}>
        <tbody>
          <tr>
            <td style={{textAlign:"center",color:"#610314",fontSize:20}}>Name</td>
            <td style={{textAlign:"center",color:"#610314",fontSize:20}}>Category</td>
            <td style={{textAlign:"center",color:"#610314",fontSize:20}}>Price</td>
          </tr>
          {props.table.map((prod, index) => (
            <tr key={index}>
              <td>{prod.name}</td>
              <td>{prod.category}</td>
              <td>{prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  Table: PropTypes.array,
  category: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};

ReactDOM.render(
  <React.StrictMode>
    <ProductTable
      table={products}
      color="#4a23f8 "
      backgroundColor="#f3a0af"
      
    >
      <h1 style={{ color: "#f8234a", fontWeight: 300, fontSize: 40 }}>
        ProductTable
      </h1>
    </ProductTable>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
