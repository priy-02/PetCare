import { Link } from "react-router-dom";
import bgImage from "../assets/image bg.jpg";

function Welcome() {
  return (
    <div
      className="welcome-page-new"
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(18, 55, 35, 0.88),
          rgba(18, 55, 35, 0.55)
        ), url(${bgImage})`,
      }}
    >

      {/* Background overlay */}
      <div className="welcome-overlay-new"></div>


      {/* NAVBAR */}

      <nav className="welcome-nav">

        <div className="welcome-logo">

          <div className="welcome-logo-icon">
            🐾
          </div>

          <div>
            <strong>PetCare</strong>
            <span>Smart Pet Wellness</span>
          </div>

        </div>


        <div className="welcome-nav-links">

          <a href="#features">
            Features
          </a>

          <a href="#about">
            About
          </a>

          <Link to="/dashboard">
            Sign In
          </Link>

        </div>

      </nav>


      {/* HERO */}

      <main className="welcome-main">

        <div className="welcome-left">

          <div className="welcome-pill">
            🐾 Trusted by Pet Parents
          </div>


          <h1>
            A Better Care
            <br />

            <span>
              For Your
            </span>

            <br />

            Best Friend
          </h1>


          <p className="welcome-description">

            PetCare helps you manage your pet's health,
            appointments, daily needs and supplies —
            all in one smart platform.

          </p>


          <div className="welcome-buttons">

            <Link
              to="/dashboard"
              className="welcome-primary-btn"
            >
              🐾 Go to Dashboard
            </Link>


            <a
              href="#features"
              className="welcome-secondary-btn"
            >
              Explore Features
            </a>

          </div>


          {/* TRUST */}

          <div className="welcome-trust">

            <div>
              <strong>500+</strong>
              <span>Happy Pet Parents</span>
            </div>

            <div>
              <strong>1000+</strong>
              <span>Appointments</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Veterinary Care</span>
            </div>

          </div>

        </div>


        {/* RIGHT CONTENT */}

        <div className="welcome-right">

          <div className="welcome-right-label">
            EVERYTHING IN ONE PLACE
          </div>

          <h2>
            Complete care for
            <br />
            your furry family.
          </h2>

          <p>
            From everyday supplies to veterinary
            appointments, PetCare keeps everything
            organized in one beautiful platform.
          </p>


          {/* FEATURES */}

          <div
            className="welcome-features"
            id="features"
          >

            <div className="welcome-feature">

              <div className="feature-icon green">
                🐾
              </div>

              <div>
                <h3>
                  Manage Your Pets
                </h3>

                <p>
                  Create pet profiles and keep important
                  information organized.
                </p>
              </div>

            </div>


            <div className="welcome-feature">

              <div className="feature-icon blue">
                🩺
              </div>

              <div>
                <h3>
                  Veterinary Care
                </h3>

                <p>
                  Find veterinary services and book
                  appointments easily.
                </p>
              </div>

            </div>


            <div className="welcome-feature">

              <div className="feature-icon orange">
                🛒
              </div>

              <div>
                <h3>
                  Pet Supplies
                </h3>

                <p>
                  Shop food, toys, grooming products
                  and healthcare essentials.
                </p>

              </div>

            </div>


            <div className="welcome-feature">

              <div className="feature-icon pink">
                ❤️
              </div>

              <div>
                <h3>
                  Health Tracking
                </h3>

                <p>
                  Monitor your pet's wellness,
                  vaccinations and activities.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>


      {/* BOTTOM CARD */}

      <div className="welcome-bottom-card">

        <div className="bottom-stat">

          <span>🐶</span>

          <div>
            <strong>
              500+
            </strong>

            <small>
              Pets cared for
            </small>
          </div>

        </div>


        <div className="bottom-stat">

          <span>❤️</span>

          <div>
            <strong>
              98%
            </strong>

            <small>
              Wellness satisfaction
            </small>
          </div>

        </div>


        <div className="bottom-stat">

          <span>🩺</span>

          <div>
            <strong>
              24/7
            </strong>

            <small>
              Care support
            </small>
          </div>

        </div>


        <Link
          to="/dashboard"
          className="bottom-enter"
        >
          Enter PetCare →
        </Link>

      </div>

    </div>
  );
}

export default Welcome;