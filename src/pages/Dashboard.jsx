import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="petcare-dashboard">

      {/* HERO */}
      <section className="dashboard-hero-new">

        <div className="dashboard-hero-content">

          <span className="dashboard-eyebrow">
            GOOD MORNING, PET PARENT 👋
          </span>

          <h1>
            Make today a
            <br />
            <span>happy pet day.</span>
          </h1>

          <p>
            Keep track of your pets, health, appointments
            and everything they love — all in one place.
          </p>

          <div className="dashboard-hero-buttons">

            <Link
              to="/pets"
              className="dashboard-primary-btn"
            >
              🐾 Manage My Pets
            </Link>

            <Link
              to="/appointments"
              className="dashboard-light-btn"
            >
              📅 Book a Visit
            </Link>

          </div>

        </div>


        <div className="dashboard-hero-visual">

          <div className="dashboard-photo-ring">

            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85"
              alt="Happy Golden Retriever"
            />

          </div>

          <div className="dashboard-floating health-floating">

            <span>❤️</span>

            <div>
              <strong>86%</strong>
              <small>Wellness score</small>
            </div>

          </div>


          <div className="dashboard-floating happy-floating">

            <span>😊</span>

            <div>
              <strong>Happy & Healthy</strong>
              <small>Bruno is doing great!</small>
            </div>

          </div>

        </div>

      </section>


      {/* QUICK STATS */}

      <section className="dashboard-stats">

        <div className="dashboard-stat-card green-stat">

          <div className="dashboard-stat-icon">
            🐾
          </div>

          <div>
            <strong>3</strong>
            <span>My Pets</span>
          </div>

          <Link to="/pets">
            View →
          </Link>

        </div>


        <div className="dashboard-stat-card pink-stat">

          <div className="dashboard-stat-icon">
            ❤️
          </div>

          <div>
            <strong>86%</strong>
            <span>Wellness Score</span>
          </div>

          <Link to="/health">
            Track →
          </Link>

        </div>


        <div className="dashboard-stat-card blue-stat">

          <div className="dashboard-stat-icon">
            📅
          </div>

          <div>
            <strong>2</strong>
            <span>Upcoming Visits</span>
          </div>

          <Link to="/appointments">
            View →
          </Link>

        </div>


        <div className="dashboard-stat-card orange-stat">

          <div className="dashboard-stat-icon">
            🛍️
          </div>

          <div>
            <strong>5</strong>
            <span>Cart Items</span>
          </div>

          <Link to="/cart">
            Cart →
          </Link>

        </div>

      </section>


      {/* MAIN CONTENT */}

      <section className="dashboard-main-grid">

        {/* PET PROFILE */}

        <div className="dashboard-large-card pet-overview-card">

          <div className="dashboard-card-top">

            <div>
              <span className="dashboard-card-label">
                MY FAVORITE FRIEND
              </span>

              <h2>
                Meet Bruno 🐶
              </h2>
            </div>

            <Link to="/pets">
              View all pets →
            </Link>

          </div>


          <div className="bruno-profile">

            <div className="bruno-image">

              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=85"
                alt="Bruno"
              />

              <span>
                ✓ Healthy
              </span>

            </div>


            <div className="bruno-info">

              <h3>
                Bruno
              </h3>

              <p>
                Golden Retriever · 4 years old
              </p>


              <div className="bruno-details">

                <div>
                  <small>Weight</small>
                  <strong>28 kg</strong>
                </div>

                <div>
                  <small>Age</small>
                  <strong>4 yrs</strong>
                </div>

                <div>
                  <small>Activity</small>
                  <strong>High</strong>
                </div>

              </div>


              <div className="wellness-progress">

                <div className="wellness-heading">

                  <span>
                    Wellness
                  </span>

                  <strong>
                    86%
                  </strong>

                </div>

                <div className="wellness-bar">

                  <div style={{ width: "86%" }} />

                </div>

                <small>
                  Bruno is doing wonderfully!
                </small>

              </div>

            </div>

          </div>

        </div>


        {/* NEXT APPOINTMENT */}

        <div className="dashboard-large-card appointment-preview">

          <div className="dashboard-card-top">

            <div>
              <span className="dashboard-card-label">
                NEXT VISIT
              </span>

              <h2>
                Upcoming appointment
              </h2>
            </div>

            <span className="appointment-status">
              Confirmed
            </span>

          </div>


          <div className="appointment-date-box">

            <span>
              SEP
            </span>

            <strong>
              02
            </strong>

            <small>
              2026
            </small>

          </div>


          <div className="appointment-information">

            <h3>
              General Health Checkup
            </h3>

            <p>
              🩺 Dr. Sarah Wilson
            </p>

            <p>
              🕐 10:30 AM · PetCare Clinic
            </p>

          </div>


          <Link
            to="/appointments"
            className="appointment-view-btn"
          >
            View Appointment
          </Link>

        </div>

      </section>


      {/* LOWER GRID */}

      <section className="dashboard-lower-grid">

        {/* HEALTH */}

        <div className="dashboard-large-card health-dashboard-card">

          <div className="dashboard-card-top">

            <div>
              <span className="dashboard-card-label">
                WELLNESS
              </span>

              <h2>
                Bruno's health
              </h2>
            </div>

            <Link to="/health">
              Open tracker →
            </Link>

          </div>


          <div className="health-items">

            <div className="health-item">

              <div className="health-item-icon vaccination">
                💉
              </div>

              <div>
                <strong>
                  Vaccinations
                </strong>

                <span>
                  All up to date
                </span>
              </div>

              <b>
                ✓
              </b>

            </div>


            <div className="health-item">

              <div className="health-item-icon activity">
                🐕
              </div>

              <div>
                <strong>
                  Daily Activity
                </strong>

                <span>
                  42 minutes today
                </span>
              </div>

              <b>
                84%
              </b>

            </div>


            <div className="health-item">

              <div className="health-item-icon food">
                🥣
              </div>

              <div>
                <strong>
                  Meals
                </strong>

                <span>
                  2 of 2 completed
                </span>
              </div>

              <b>
                ✓
              </b>

            </div>


            <div className="health-item">

              <div className="health-item-icon medicine">
                💊
              </div>

              <div>
                <strong>
                  Deworming
                </strong>

                <span>
                  Due in 12 days
                </span>
              </div>

              <b>
                !
              </b>

            </div>

          </div>

        </div>


        {/* PET CARE TIPS */}

        <div className="dashboard-large-card pet-tip-card">

          <div className="tip-image">

            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=85"
              alt="Happy dogs"
            />

          </div>


          <div className="tip-content">

            <span>
              🐾 PETCARE TIP
            </span>

            <h2>
              Small walks,
              <br />
              big happiness.
            </h2>

            <p>
              Regular activity keeps pets active,
              healthy and mentally stimulated.
            </p>

            <Link to="/health">
              See Bruno's activity →
            </Link>

          </div>

        </div>

      </section>


      {/* RECOMMENDED PRODUCTS */}

      <section className="dashboard-products-section">

        <div className="dashboard-section-heading">

          <div>
            <span>
              SHOP FOR YOUR PET
            </span>

            <h2>
              Bruno might love these 🐾
            </h2>
          </div>

          <Link to="/supplies">
            View all products →
          </Link>

        </div>


        <div className="dashboard-product-row">

          <div className="dashboard-product-card">

            <div className="dashboard-product-image">

              <img
                src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=85"
                alt="Dog food"
              />

              <span>
                BEST SELLER
              </span>

            </div>

            <div className="dashboard-product-info">

              <small>
                FOOD
              </small>

              <h3>
                Premium Puppy Food
              </h3>

              <div>
                <strong>
                  ₹899
                </strong>

                <Link to="/supplies">
                  Shop →
                </Link>
              </div>

            </div>

          </div>


          <div className="dashboard-product-card">

            <div className="dashboard-product-image">

              <img
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=700&q=85"
                alt="Dog treat"
              />

              <span>
                FAVORITE
              </span>

            </div>

            <div className="dashboard-product-info">

              <small>
                TREATS
              </small>

              <h3>
                Natural Dog Treats
              </h3>

              <div>
                <strong>
                  ₹399
                </strong>

                <Link to="/supplies">
                  Shop →
                </Link>
              </div>

            </div>

          </div>


          <div className="dashboard-product-card">

            <div className="dashboard-product-image">

              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=85"
                alt="Dog toy"
              />

              <span>
                FUN PICK
              </span>

            </div>

            <div className="dashboard-product-info">

              <small>
                TOYS
              </small>

              <h3>
                Interactive Rope Toy
              </h3>

              <div>
                <strong>
                  ₹349
                </strong>

                <Link to="/supplies">
                  Shop →
                </Link>
              </div>

            </div>

          </div>


          <div className="dashboard-product-card">

            <div className="dashboard-product-image">

              <img
                src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=700&q=85"
                alt="Pet care"
              />

              <span>
                CARE PICK
              </span>

            </div>

            <div className="dashboard-product-info">

              <small>
                CARE
              </small>

              <h3>
                Pet Care Essentials
              </h3>

              <div>
                <strong>
                  ₹599
                </strong>

                <Link to="/supplies">
                  Shop →
                </Link>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="dashboard-bottom-cta">

        <div>

          <span>
            NEED SOME HELP? 🐾
          </span>

          <h2>
            We're here for every
            <br />
            wag, purr & cuddle.
          </h2>

          <p>
            Explore veterinary care, grooming,
            health tracking and more.
          </p>

        </div>


        <Link
          to="/services"
          className="dashboard-cta-button"
        >
          Explore PetCare →
        </Link>

      </section>

    </div>
  );
}

export default Dashboard;