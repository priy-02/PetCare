import { useState } from "react";

function HealthTracker() {
  const [selectedPet, setSelectedPet] = useState("Bruno");

  const pets = [
    {
      name: "Bruno",
      breed: "Golden Retriever",
      age: "4 years",
      image:
        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=85",
      score: 86,
    },
    {
      name: "Luna",
      breed: "Persian Cat",
      age: "2 years",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=85",
      score: 92,
    },
    {
      name: "Coco",
      breed: "Beagle",
      age: "3 years",
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=700&q=85",
      score: 78,
    },
  ];

  const currentPet =
    pets.find((pet) => pet.name === selectedPet) || pets[0];

  const healthMetrics = [
    {
      icon: "🐕",
      title: "Daily Activity",
      value: "42 min",
      target: "60 min goal",
      percentage: 70,
      className: "activity-metric",
    },
    {
      icon: "🥣",
      title: "Nutrition",
      value: "2 / 2",
      target: "Meals completed",
      percentage: 100,
      className: "nutrition-metric",
    },
    {
      icon: "💧",
      title: "Hydration",
      value: "78%",
      target: "Daily target",
      percentage: 78,
      className: "hydration-metric",
    },
    {
      icon: "😴",
      title: "Sleep",
      value: "8.2 hrs",
      target: "Healthy range",
      percentage: 82,
      className: "sleep-metric",
    },
  ];

  const timeline = [
    {
      icon: "💉",
      title: "Vaccination completed",
      description: "Annual vaccination recorded",
      date: "Aug 18, 2026",
      type: "green",
    },
    {
      icon: "⚖️",
      title: "Weight recorded",
      description: "Bruno weighed 28 kg",
      date: "Aug 12, 2026",
      type: "blue",
    },
    {
      icon: "💊",
      title: "Deworming completed",
      description: "Routine deworming treatment",
      date: "Aug 04, 2026",
      type: "orange",
    },
    {
      icon: "🩺",
      title: "Health checkup",
      description: "Routine wellness examination",
      date: "Jul 22, 2026",
      type: "pink",
    },
  ];

  return (
    <div className="health-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="health-hero">

        <div className="health-hero-content">

          <span className="health-eyebrow">
            PET WELLNESS CENTER ❤️
          </span>

          <h1>
            A healthier pet
            <br />
            <span>is a happier pet.</span>
          </h1>

          <p>
            Understand your pet's everyday wellness,
            stay on top of important care and celebrate
            their healthy moments.
          </p>

          <div className="health-hero-points">

            <span>✓ Wellness tracking</span>

            <span>✓ Health reminders</span>

            <span>✓ Care history</span>

          </div>

        </div>


        <div className="health-hero-pet">

          <div className="health-hero-image">

            <img
              src={currentPet.image}
              alt={currentPet.name}
            />

          </div>

          <div className="health-score-floating">

            <div className="health-score-circle">
              <strong>{currentPet.score}</strong>
              <span>/100</span>
            </div>

            <div>
              <strong>Wellness Score</strong>
              <small>Looking great!</small>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PET SELECTOR
      ===================================================== */}

      <section className="health-pet-selector">

        <div>

          <span>
            TRACKING PET
          </span>

          <h2>
            Whose wellness are we checking?
          </h2>

        </div>


        <div className="health-pet-buttons">

          {pets.map((pet) => (

            <button
              type="button"
              key={pet.name}
              className={
                selectedPet === pet.name
                  ? "health-pet-button selected"
                  : "health-pet-button"
              }
              onClick={() => setSelectedPet(pet.name)}
            >

              <img
                src={pet.image}
                alt={pet.name}
              />

              <div>
                <strong>{pet.name}</strong>
                <span>{pet.breed}</span>
              </div>

              {selectedPet === pet.name && (
                <b>✓</b>
              )}

            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          WELLNESS SCORE
      ===================================================== */}

      <section className="health-score-section">

        <div className="health-score-card">

          <div className="health-score-card-header">

            <div>
              <span>
                OVERALL WELLNESS
              </span>

              <h2>
                {currentPet.name}'s health score
              </h2>

              <p>
                Based on activity, nutrition, hydration,
                sleep and recent health records.
              </p>
            </div>

            <div className="large-health-score">

              <strong>
                {currentPet.score}
              </strong>

              <span>
                / 100
              </span>

            </div>

          </div>


          <div className="health-score-progress">

            <div
              style={{
                width: `${currentPet.score}%`,
              }}
            />

          </div>


          <div className="health-score-footer">

            <span>
              🌱 Excellent wellness
            </span>

            <span>
              Updated today
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          DAILY METRICS
      ===================================================== */}

      <section className="health-content-section">

        <div className="health-section-heading">

          <div>

            <span>
              TODAY'S WELLNESS
            </span>

            <h2>
              How is {currentPet.name} doing?
            </h2>

          </div>

          <span className="health-updated">
            Updated a few minutes ago
          </span>

        </div>


        <div className="health-metrics-grid">

          {healthMetrics.map((metric) => (

            <div
              className="health-metric-card"
              key={metric.title}
            >

              <div className="health-metric-top">

                <div className={`health-metric-icon ${metric.className}`}>
                  {metric.icon}
                </div>

                <span>
                  {metric.percentage}%
                </span>

              </div>


              <h3>
                {metric.title}
              </h3>

              <strong>
                {metric.value}
              </strong>

              <small>
                {metric.target}
              </small>


              <div className="health-metric-bar">

                <div
                  style={{
                    width: `${metric.percentage}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WEEKLY ACTIVITY + CARE REMINDERS
      ===================================================== */}

      <section className="health-main-grid">

        {/* WEEKLY ACTIVITY */}

        <div className="health-panel weekly-health-panel">

          <div className="health-panel-header">

            <div>
              <span>
                ACTIVITY
              </span>

              <h2>
                Weekly movement
              </h2>
            </div>

            <select defaultValue="This week">

              <option>
                This week
              </option>

              <option>
                Last week
              </option>

            </select>

          </div>


          <div className="activity-chart">

            <div className="chart-y-axis">

              <span>60m</span>
              <span>45m</span>
              <span>30m</span>
              <span>15m</span>
              <span>0m</span>

            </div>


            <div className="chart-area">

              <div className="chart-grid-line" />
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />


              <div className="chart-bars">

                <div className="chart-day">
                  <div
                    className="chart-bar"
                    style={{ height: "60%" }}
                  />
                  <span>Mon</span>
                </div>

                <div className="chart-day">
                  <div
                    className="chart-bar"
                    style={{ height: "76%" }}
                  />
                  <span>Tue</span>
                </div>

                <div className="chart-day">
                  <div
                    className="chart-bar"
                    style={{ height: "48%" }}
                  />
                  <span>Wed</span>
                </div>

                <div className="chart-day">
                  <div
                    className="chart-bar"
                    style={{ height: "83%" }}
                  />
                  <span>Thu</span>
                </div>

                <div className="chart-day">
                  <div
                    className="chart-bar"
                    style={{ height: "70%" }}
                  />
                  <span>Fri</span>
                </div>

                <div className="chart-day">
                  <div
                    className="chart-bar active"
                    style={{ height: "92%" }}
                  />
                  <span>Sat</span>
                </div>

                <div className="chart-day">
                  <div
                    className="chart-bar"
                    style={{ height: "70%" }}
                  />
                  <span>Sun</span>
                </div>

              </div>

            </div>

          </div>


          <div className="activity-chart-footer">

            <div>
              <strong>42 min</strong>
              <span>Today's activity</span>
            </div>

            <div>
              <strong>47 min</strong>
              <span>Weekly average</span>
            </div>

            <div>
              <strong>+12%</strong>
              <span>vs last week</span>
            </div>

          </div>

        </div>


        {/* CARE REMINDERS */}

        <div className="health-panel reminders-panel">

          <div className="health-panel-header">

            <div>

              <span>
                DON'T FORGET
              </span>

              <h2>
                Care reminders
              </h2>

            </div>

            <button type="button">
              + Add
            </button>

          </div>


          <div className="health-reminders">

            <div className="health-reminder">

              <div className="reminder-icon pink-reminder">
                💉
              </div>

              <div>
                <strong>
                  Rabies vaccination
                </strong>

                <span>
                  Due in 18 days
                </span>
              </div>

              <b>
                18d
              </b>

            </div>


            <div className="health-reminder">

              <div className="reminder-icon orange-reminder">
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
                12d
              </b>

            </div>


            <div className="health-reminder">

              <div className="reminder-icon blue-reminder">
                🦷
              </div>

              <div>
                <strong>
                  Dental checkup
                </strong>

                <span>
                  Due next month
                </span>
              </div>

              <b>
                30d
              </b>

            </div>


            <div className="health-reminder completed-reminder">

              <div className="reminder-icon green-reminder">
                ✓
              </div>

              <div>
                <strong>
                  Annual health check
                </strong>

                <span>
                  Completed Aug 18
                </span>
              </div>

              <b>
                Done
              </b>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HEALTH HISTORY
      ===================================================== */}

      <section className="health-history-section">

        <div className="health-section-heading">

          <div>

            <span>
              HEALTH HISTORY
            </span>

            <h2>
              {currentPet.name}'s recent care
            </h2>

          </div>

          <button
            type="button"
            className="view-history-button"
          >
            View full history →
          </button>

        </div>


        <div className="health-timeline">

          {timeline.map((item) => (

            <div
              className="health-timeline-item"
              key={item.title}
            >

              <div
                className={`timeline-icon ${item.type}`}
              >
                {item.icon}
              </div>

              <div className="timeline-content">

                <strong>
                  {item.title}
                </strong>

                <span>
                  {item.description}
                </span>

              </div>

              <time>
                {item.date}
              </time>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          HEALTH CTA
      ===================================================== */}

      <section className="health-bottom-cta">

        <div className="health-cta-image">

          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85"
            alt="Happy pet"
          />

        </div>


        <div className="health-cta-content">

          <span>
            YOUR PET'S HEALTH MATTERS ❤️
          </span>

          <h2>
            Little healthy habits
            <br />
            create big happy lives.
          </h2>

          <p>
            Keep tracking the small things.
            Every walk, meal, vaccination and
            cuddle contributes to a healthier pet.
          </p>

        </div>

      </section>

    </div>
  );
}

export default HealthTracker;