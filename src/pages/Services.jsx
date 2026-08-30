import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      title: "Veterinary Consultation",
      category: "HEALTHCARE",
      description:
        "Professional veterinary consultations for checkups, concerns and preventive care.",
      price: 499,
      rating: 4.9,
      reviews: 186,
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=85",
      icon: "🩺",
      color: "service-green",
    },

    {
      id: 2,
      title: "Pet Grooming",
      category: "GROOMING",
      description:
        "Gentle grooming sessions including bath, brushing, haircut and nail care.",
      price: 799,
      rating: 4.8,
      reviews: 142,
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=85",
      icon: "✂️",
      color: "service-pink",
    },

    {
      id: 3,
      title: "Vaccination",
      category: "PREVENTIVE CARE",
      description:
        "Keep your pet protected with essential vaccinations and health guidance.",
      price: 599,
      rating: 4.9,
      reviews: 118,
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85",
      icon: "💉",
      color: "service-blue",
    },

    {
      id: 4,
      title: "Pet Dental Care",
      category: "DENTAL HEALTH",
      description:
        "Dental examination and cleaning support for healthier teeth and gums.",
      price: 699,
      rating: 4.7,
      reviews: 76,
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1000&q=85",
      icon: "🦷",
      color: "service-purple",
    },

    {
      id: 5,
      title: "Pet Boarding",
      category: "PET STAY",
      description:
        "A safe, comfortable and caring place for your pet while you're away.",
      price: 999,
      rating: 4.8,
      reviews: 93,
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=85",
      icon: "🏠",
      color: "service-orange",
    },

    {
      id: 6,
      title: "Health Checkup",
      category: "WELLNESS",
      description:
        "A complete wellness check to understand your pet's current health.",
      price: 399,
      rating: 4.9,
      reviews: 201,
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85",
      icon: "❤️",
      color: "service-red",
    },
  ];

  return (
    <div className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-hero-content">

          <div className="services-eyebrow">
            PETCARE SERVICES
          </div>

          <h1>
            Care that makes
            <br />
            <span>tails wag. 🐾</span>
          </h1>

          <p>
            From regular checkups to grooming and
            preventive care, PetCare makes it simple
            to give your furry family the care they deserve.
          </p>

          <div className="services-hero-buttons">

            <Link
              to="/appointments"
              className="services-primary-btn"
            >
              📅 Book an Appointment
            </Link>

            <a
              href="#services-list"
              className="services-secondary-btn"
            >
              Explore Services
            </a>

          </div>

          <div className="services-trust-row">

            <div>
              <strong>4.9/5</strong>
              <span>Pet parent rating</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Care support</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Care specialists</span>
            </div>

          </div>

        </div>


        <div className="services-hero-visual">

          <div className="services-hero-photo">

            <img
              src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=85"
              alt="Veterinarian caring for a pet"
            />

          </div>


          <div className="services-floating-card services-rating-card">

            <div className="floating-service-icon">
              ⭐
            </div>

            <div>
              <strong>Excellent care</strong>
              <span>4.9 average rating</span>
            </div>

          </div>


          <div className="services-floating-card services-care-card">

            <div className="floating-service-icon">
              ❤️
            </div>

            <div>
              <strong>Pet first</strong>
              <span>Gentle & caring service</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK SERVICES
      ===================================================== */}

      <section className="services-quick-section">

        <div className="services-section-heading">

          <div>
            <span>WHAT DOES YOUR PET NEED?</span>

            <h2>
              Care for every little need
            </h2>
          </div>

          <p>
            Choose a service and let our pet-care
            team take care of the rest.
          </p>

        </div>


        <div className="services-quick-grid">

          <a
            href="#services-list"
            className="quick-service-card"
          >
            <div className="quick-service-icon green">
              🩺
            </div>

            <strong>
              Veterinary
            </strong>

            <span>
              Expert health care
            </span>

            <b>
              →
            </b>
          </a>


          <a
            href="#services-list"
            className="quick-service-card"
          >
            <div className="quick-service-icon pink">
              ✂️
            </div>

            <strong>
              Grooming
            </strong>

            <span>
              Fresh & fabulous
            </span>

            <b>
              →
            </b>
          </a>


          <a
            href="#services-list"
            className="quick-service-card"
          >
            <div className="quick-service-icon blue">
              💉
            </div>

            <strong>
              Vaccination
            </strong>

            <span>
              Stay protected
            </span>

            <b>
              →
            </b>
          </a>


          <a
            href="#services-list"
            className="quick-service-card"
          >
            <div className="quick-service-icon orange">
              🏠
            </div>

            <strong>
              Boarding
            </strong>

            <span>
              Safe & comfortable
            </span>

            <b>
              →
            </b>
          </a>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="services-list-section"
        id="services-list"
      >

        <div className="services-section-heading">

          <div>
            <span>OUR SERVICES</span>

            <h2>
              Professional care,
              <br />
              made simple.
            </h2>
          </div>

          <p>
            Quality care from trusted professionals
            who genuinely love animals.
          </p>

        </div>


        <div className="professional-services-grid">

          {services.map((service) => (

            <article
              className="professional-service-card"
              key={service.id}
            >

              {/* IMAGE */}

              <div className="professional-service-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

                <span className="service-category">
                  {service.category}
                </span>

                <div
                  className={`service-image-icon ${service.color}`}
                >
                  {service.icon}
                </div>

              </div>


              {/* CONTENT */}

              <div className="professional-service-content">

                <div className="service-rating">

                  <span>★</span>

                  <strong>
                    {service.rating}
                  </strong>

                  <small>
                    ({service.reviews} reviews)
                  </small>

                </div>


                <h3>
                  {service.title}
                </h3>


                <p>
                  {service.description}
                </p>


                <div className="service-card-footer">

                  <div>

                    <small>
                      Starting from
                    </small>

                    <strong>
                      ₹{service.price}
                    </strong>

                  </div>


                  <Link
                    to="/appointments"
                    className="book-service-btn"
                  >
                    Book Now
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURE BANNER
      ===================================================== */}

      <section className="services-care-banner">

        <div className="care-banner-image">

          <img
            src="https://images.unsplash.com/photo-1558944351-c5c4b8f7f0e3?auto=format&fit=crop&w=1000&q=85"
            alt="Happy dog receiving care"
          />

        </div>


        <div className="care-banner-content">

          <span>
            🐾 THE PETCARE PROMISE
          </span>

          <h2>
            Because they're
            <br />
            family.
          </h2>

          <p>
            Every visit is designed around your pet's
            comfort, safety and happiness. Our goal is
            simple — healthier pets and happier families.
          </p>


          <div className="care-points">

            <div>
              <span>✓</span>
              <p>
                Experienced care professionals
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Pet-friendly environment
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Personalized care plans
              </p>
            </div>

          </div>


          <Link
            to="/appointments"
            className="care-banner-button"
          >
            Find the right care →
          </Link>

        </div>

      </section>


      {/* =====================================================
          WHY PETCARE
      ===================================================== */}

      <section className="why-services">

        <div className="services-section-heading centered">

          <span>
            WHY PETCARE?
          </span>

          <h2>
            A little more love
            <br />
            in every visit.
          </h2>

        </div>


        <div className="why-services-grid">

          <div className="why-service-item">

            <div>
              ❤️
            </div>

            <h3>
              Pet First
            </h3>

            <p>
              Every decision starts with
              your pet's comfort and wellbeing.
            </p>

          </div>


          <div className="why-service-item">

            <div>
              👩‍⚕️
            </div>

            <h3>
              Trusted Experts
            </h3>

            <p>
              Connect with experienced
              veterinary and care professionals.
            </p>

          </div>


          <div className="why-service-item">

            <div>
              📅
            </div>

            <h3>
              Easy Booking
            </h3>

            <p>
              Choose a service, pick a time
              and book without the hassle.
            </p>

          </div>


          <div className="why-service-item">

            <div>
              🛡️
            </div>

            <h3>
              Reliable Care
            </h3>

            <p>
              Keep your pet's care journey
              organized in one place.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="services-final-cta">

        <div>

          <span>
            READY TO GET STARTED?
          </span>

          <h2>
            Your pet deserves
            <br />
            their best day.
          </h2>

          <p>
            Book their next appointment today.
          </p>

        </div>


        <Link
          to="/appointments"
          className="final-service-button"
        >
          Book an Appointment →
        </Link>

      </section>

    </div>
  );
}

export default Services;