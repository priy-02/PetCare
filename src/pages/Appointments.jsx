import { useState } from "react";
import EmptyState from "../components/EmptyState";

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      pet: "Max",
      petType: "Golden Retriever",
      service: "General Checkup",
      doctor: "Dr. Sarah Wilson",
      date: "02",
      month: "Sep",
      year: "2026",
      time: "10:30 AM",
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=85",
    },
    {
      id: 2,
      pet: "Luna",
      petType: "Persian Cat",
      service: "Vaccination",
      doctor: "Dr. Michael Thomas",
      date: "08",
      month: "Sep",
      year: "2026",
      time: "04:00 PM",
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=85",
    },
  ]);

  const [showBooking, setShowBooking] = useState(false);

  const [formData, setFormData] = useState({
    pet: "Max",
    service: "General Checkup",
    date: "",
    time: "10:00 AM",
    doctor: "Dr. Sarah Wilson",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleBookAppointment = (event) => {
    event.preventDefault();

    if (!formData.date) {
      alert("Please select an appointment date.");
      return;
    }

    const selectedDate = new Date(formData.date);

    const newAppointment = {
      id: Date.now(),

      pet: formData.pet,

      petType:
        formData.pet === "Max"
          ? "Golden Retriever"
          : "Persian Cat",

      service: formData.service,

      doctor: formData.doctor,

      date: String(selectedDate.getDate()).padStart(2, "0"),

      month: selectedDate.toLocaleString("en-US", {
        month: "short",
      }),

      year: selectedDate.getFullYear(),

      time: formData.time,

      status: "Confirmed",

      image:
        formData.pet === "Max"
          ? "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=85"
          : "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=85",
    };

    setAppointments((previous) => [
      ...previous,
      newAppointment,
    ]);

    setShowBooking(false);

    setFormData({
      pet: "Max",
      service: "General Checkup",
      date: "",
      time: "10:00 AM",
      doctor: "Dr. Sarah Wilson",
    });
  };

  const cancelAppointment = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmed) {
      return;
    }

    setAppointments((previous) =>
      previous.filter(
        (appointment) => appointment.id !== id
      )
    );
  };

  const confirmedCount = appointments.filter(
    (appointment) =>
      appointment.status === "Confirmed"
  ).length;

  return (
    <div className="appointments-page">

      {/* =====================================================
          PAGE HEADER
          ===================================================== */}

      <section className="appointments-hero">

        <div className="appointments-hero-content">

          <span className="appointments-eyebrow">
            VETERINARY CARE
          </span>

          <h1>
            Appointments
            <span>📅</span>
          </h1>

          <p>
            Keep your pet's health on track with
            trusted veterinary care and wellness
            appointments.
          </p>

          <button
            type="button"
            className="appointment-book-button"
            onClick={() => setShowBooking(true)}
          >
            + Book Appointment
          </button>

        </div>


        <div className="appointments-hero-image">

          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
            alt="Veterinary care"
          />

          <div className="appointments-hero-badge">
            🐾 Trusted pet care
          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
          ===================================================== */}

      <section className="appointment-stat-grid">

        <div className="appointment-stat-card">

          <div className="appointment-stat-icon">
            📅
          </div>

          <div>

            <span>
              UPCOMING
            </span>

            <strong>
              {appointments.length}
            </strong>

            <small>
              scheduled visits
            </small>

          </div>

        </div>


        <div className="appointment-stat-card">

          <div className="appointment-stat-icon confirmed">
            ✓
          </div>

          <div>

            <span>
              CONFIRMED
            </span>

            <strong>
              {confirmedCount}
            </strong>

            <small>
              confirmed appointments
            </small>

          </div>

        </div>


        <div className="appointment-stat-card">

          <div className="appointment-stat-icon doctor">
            🩺
          </div>

          <div>

            <span>
              CARE PROVIDER
            </span>

            <strong className="provider-name">
              PetCare
            </strong>

            <small>
              trusted veterinary network
            </small>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPOINTMENT LIST
          ===================================================== */}

      <section className="appointments-section">

        <div className="appointments-section-header">

          <div>

            <span>
              YOUR SCHEDULE
            </span>

            <h2>
              Upcoming Visits
            </h2>

            <p>
              Stay prepared for your pet's next
              important care visit.
            </p>

          </div>

          <button
            type="button"
            className="appointment-outline-button"
            onClick={() => setShowBooking(true)}
          >
            + New Appointment
          </button>

        </div>


        {appointments.length === 0 ? (

          <EmptyState
            icon="📅"
            eyebrow="VETERINARY CARE"
            title="No appointments yet"
            message="Book a veterinary visit and stay on top of your pet's health and wellness."
            buttonText="Book Appointment"
            buttonLink="/appointments"
          />

        ) : (

          <div className="appointments-list">

            {appointments.map((appointment) => (

              <article
                className="professional-appointment-card"
                key={appointment.id}
              >

                {/* PET IMAGE */}

                <div className="appointment-pet-image">

                  <img
                    src={appointment.image}
                    alt={appointment.pet}
                  />

                </div>


                {/* DATE */}

                <div className="appointment-date">

                  <strong>
                    {appointment.date}
                  </strong>

                  <span>
                    {appointment.month}
                  </span>

                  <small>
                    {appointment.year}
                  </small>

                </div>


                {/* DETAILS */}

                <div className="appointment-details">

                  <span className="appointment-service">
                    🐾 {appointment.service}
                  </span>

                  <h3>
                    {appointment.pet}
                  </h3>

                  <p>
                    {appointment.petType}
                  </p>

                  <div className="appointment-doctor">
                    🩺 {appointment.doctor}
                  </div>

                </div>


                {/* TIME + STATUS */}

                <div className="appointment-meta">

                  <div className="appointment-time">
                    <span>
                      TIME
                    </span>

                    <strong>
                      {appointment.time}
                    </strong>
                  </div>

                  <span className="appointment-status">
                    ✓ {appointment.status}
                  </span>

                </div>


                {/* ACTION */}

                <button
                  type="button"
                  className="appointment-cancel"
                  onClick={() =>
                    cancelAppointment(appointment.id)
                  }
                >
                  Cancel
                </button>

              </article>

            ))}

          </div>

        )}

      </section>


      {/* =====================================================
          CARE REMINDER
          ===================================================== */}

      <section className="appointment-care-banner">

        <div className="appointment-care-icon">
          ❤️
        </div>

        <div>

          <span>
            PETCARE REMINDER
          </span>

          <h2>
            A healthy pet is a happy pet.
          </h2>

          <p>
            Regular checkups help detect health
            concerns early and keep your furry
            family feeling their best.
          </p>

        </div>

        <div className="appointment-care-paws">
          🐾 🐾
        </div>

      </section>


      {/* =====================================================
          BOOKING MODAL
          ===================================================== */}

      {showBooking && (

        <div
          className="appointment-modal-overlay"
          onClick={() => setShowBooking(false)}
        >

          <div
            className="appointment-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="appointment-modal-header">

              <div>

                <span>
                  PETCARE VETERINARY
                </span>

                <h2>
                  Book an appointment
                </h2>

                <p>
                  Choose a time that works for you
                  and your furry friend.
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  setShowBooking(false)
                }
              >
                ×
              </button>

            </div>


            <form
              onSubmit={handleBookAppointment}
              className="appointment-form"
            >

              {/* PET */}

              <div className="appointment-form-field">

                <label>
                  SELECT PET
                </label>

                <select
                  name="pet"
                  value={formData.pet}
                  onChange={handleChange}
                >

                  <option value="Max">
                    Max — Golden Retriever
                  </option>

                  <option value="Luna">
                    Luna — Persian Cat
                  </option>

                </select>

              </div>


              {/* SERVICE */}

              <div className="appointment-form-field">

                <label>
                  SERVICE
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >

                  <option value="General Checkup">
                    General Checkup
                  </option>

                  <option value="Vaccination">
                    Vaccination
                  </option>

                  <option value="Dental Care">
                    Dental Care
                  </option>

                  <option value="Grooming Consultation">
                    Grooming Consultation
                  </option>

                  <option value="Wellness Consultation">
                    Wellness Consultation
                  </option>

                </select>

              </div>


              {/* DOCTOR */}

              <div className="appointment-form-field">

                <label>
                  VETERINARIAN
                </label>

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                >

                  <option value="Dr. Sarah Wilson">
                    Dr. Sarah Wilson
                  </option>

                  <option value="Dr. Michael Thomas">
                    Dr. Michael Thomas
                  </option>

                  <option value="Dr. Emily Carter">
                    Dr. Emily Carter
                  </option>

                </select>

              </div>


              {/* DATE + TIME */}

              <div className="appointment-form-row">

                <div className="appointment-form-field">

                  <label>
                    DATE
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min="2026-08-30"
                    required
                  />

                </div>


                <div className="appointment-form-field">

                  <label>
                    TIME
                  </label>

                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  >

                    <option>
                      10:00 AM
                    </option>

                    <option>
                      11:30 AM
                    </option>

                    <option>
                      02:00 PM
                    </option>

                    <option>
                      04:00 PM
                    </option>

                    <option>
                      05:30 PM
                    </option>

                  </select>

                </div>

              </div>


              {/* FORM ACTIONS */}

              <div className="appointment-form-actions">

                <button
                  type="button"
                  className="appointment-form-cancel"
                  onClick={() =>
                    setShowBooking(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="appointment-form-submit"
                >
                  Confirm Appointment →
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Appointments;