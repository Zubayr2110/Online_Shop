import "./Product.css";

export default function Productpart() {
  return (
    <div className="usercontent">
      <h1 className="userh1">Add Product</h1>
      <form className="userform">
        <label>Product Title</label>
        <input type="text" id="producttitle" placeholder="Product Title" />
        <label>Product Price</label>
        <input type="number" id="productprice" placeholder="Product Price" />
        <button className="addproductbtn">Add Product</button>
      </form>
    </div>
  );
}
