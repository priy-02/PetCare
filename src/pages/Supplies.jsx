import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/slices/cartSlice";

import products from "../data/products";


function Supplies() {

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");


  const categories = [
    "All",
    "Food",
    "Treats",
    "Toys",
    "Grooming",
    "Healthcare",
    "Accessories",
  ];


  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;

    });


  const handleAddToCart = (product) => {

    dispatch(
      addToCart(product)
    );

  };


  return (

    <div className="supplies-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="supplies-hero">

        <div className="supplies-hero-content">

          <div className="supplies-eyebrow">
            PETCARE SHOP
          </div>

          <h1>
            Everything they
            <br />
            <span>love & need. 🐾</span>
          </h1>

          <p>
            From nutritious food to playful toys
            and everyday essentials, find everything
            your furry friend needs in one place.
          </p>

          <div className="supplies-hero-actions">

            <button
              className="supplies-primary-btn"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Shop Pet Essentials →
            </button>

            <div className="supplies-trust">

              <span>✓</span>

              Trusted by pet parents

            </div>

          </div>

        </div>


        <div className="supplies-hero-image">

          <div className="hero-image-circle"></div>

          <div className="hero-pet-emoji">
            🐶
          </div>

          <div className="floating-card floating-card-one">

            ❤️

            <div>
              <strong>
                Loved by pets
              </strong>

              <small>
                4.9 average rating
              </small>
            </div>

          </div>


          <div className="floating-card floating-card-two">

            🛍️

            <div>
              <strong>
                300+ products
              </strong>

              <small>
                Carefully selected
              </small>
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          CATEGORY NAVIGATION
      ========================================== */}

      <section className="supplies-section">

        <div className="supplies-section-heading">

          <div>

            <span>
              SHOP BY CATEGORY
            </span>

            <h2>
              Find their favorites
            </h2>

          </div>

          <p>
            Everything your pet needs,
            all in one place.
          </p>

        </div>


        <div className="supplies-categories">

          {categories.map(
            (item) => (

              <button
                key={item}
                className={
                  category === item
                    ? "supply-category active"
                    : "supply-category"
                }
                onClick={() =>
                  setCategory(item)
                }
              >

                <span>

                  {item === "All" && "✨"}

                  {item === "Food" && "🥣"}

                  {item === "Treats" && "🦴"}

                  {item === "Toys" && "🎾"}

                  {item === "Grooming" && "✂️"}

                  {item === "Healthcare" && "💗"}

                  {item === "Accessories" && "🎀"}

                </span>

                {item}

              </button>

            )
          )}

        </div>

      </section>


      {/* ==========================================
          PRODUCTS
      ========================================== */}

      <section
        className="supplies-section"
        id="products"
      >

        <div className="products-heading">

          <div>

            <span>
              OUR COLLECTION
            </span>

            <h2>
              Shop pet essentials
            </h2>

          </div>


          <div className="products-search">

            🔍

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>


        {filteredProducts.length === 0 ? (

          <div className="products-empty">

            <div>
              🔎
            </div>

            <h3>
              No products found
            </h3>

            <p>
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="professional-products-grid">

            {filteredProducts.map(
              (product) => (

                <article
                  className="professional-product-card"
                  key={product.id}
                >

                  {/* IMAGE */}

                  <div className="professional-product-image">

                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />

                    <span className="product-badge">
                      {product.badge}
                    </span>


                    <button
                      className="product-heart"
                      aria-label="Add to wishlist"
                    >
                      ♡
                    </button>

                  </div>


                  {/* INFORMATION */}

                  <div className="professional-product-content">

                    <div className="product-category-label">
                      {product.category}
                    </div>


                    <h3>
                      {product.name}
                    </h3>


                    <p>
                      {product.description}
                    </p>


                    <div className="product-review">

                      <span>
                        ★
                      </span>

                      <strong>
                        {product.rating}
                      </strong>

                      <small>
                        ({product.reviews})
                      </small>

                    </div>


                    <div className="professional-product-footer">

                      <div>

                        <span className="product-from">
                          Starting from
                        </span>

                        <strong className="professional-price">
                          ₹{product.price}
                        </strong>

                      </div>


                      <button
                        className="professional-cart-button"
                        onClick={() =>
                          handleAddToCart(
                            product
                          )
                        }
                      >
                        + Add
                      </button>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        )}

      </section>


      {/* ==========================================
          PROMOTIONAL BANNER
      ========================================== */}

      <section className="supplies-promo">

        <div className="promo-content">

          <span>
            🐾 PETCARE PICK
          </span>

          <h2>
            Good food.
            <br />
            Happy pets.
          </h2>

          <p>
            Give your furry friend the nutrition
            they deserve with our carefully selected
            collection of pet foods.
          </p>

          <button
            onClick={() => {
              setCategory("Food");

              document
                .getElementById("products")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Explore Food →
          </button>

        </div>


        <div className="promo-pets">

          <div className="promo-circle">
            🐕
          </div>

          <div className="promo-small-circle">
            🐱
          </div>

        </div>

      </section>


      {/* ==========================================
          BENEFITS
      ========================================== */}

      <section className="supplies-benefits">

        <div className="benefit">

          <div>
            🚚
          </div>

          <section>
            <strong>
              Fast Delivery
            </strong>

            <span>
              Delivered to your doorstep
            </span>
          </section>

        </div>


        <div className="benefit">

          <div>
            💚
          </div>

          <section>
            <strong>
              Pet Approved
            </strong>

            <span>
              Carefully selected products
            </span>
          </section>

        </div>


        <div className="benefit">

          <div>
            🔒
          </div>

          <section>
            <strong>
              Secure Checkout
            </strong>

            <span>
              Safe & simple payments
            </span>
          </section>

        </div>


        <div className="benefit">

          <div>
            💬
          </div>

          <section>
            <strong>
              Pet Support
            </strong>

            <span>
              We're here when you need us
            </span>
          </section>

        </div>

      </section>

    </div>

  );
}


export default Supplies;