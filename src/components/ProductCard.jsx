import { useDispatch } from "react-redux";

import { addToCart } from "../redux/slices/cartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  return (
    <div className="product-card h-100">

      <div className="product-image">
        {product.emoji}
      </div>

      <div className="p-3">

        <span className="product-category">
          {product.category}
        </span>

        <h5 className="mt-2 mb-1">
          {product.name}
        </h5>

        <p className="product-description">
          {product.description}
        </p>

        <div className="d-flex justify-content-between align-items-center mb-3">

          <span className="rating">
            ⭐ {product.rating}
          </span>

          <strong className="product-price">
            ₹{product.price}
          </strong>

        </div>

        <button
          className="btn btn-petcare w-100"
          onClick={() =>
            dispatch(
              addToCart(product)
            )
          }
        >
          🛒 Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;