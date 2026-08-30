function AppointmentCard({
  date,
  time,
  pet,
  doctor,
  type,
  status,
}) {
  return (
    <div className="appointment-card">

      <div className="appointment-date">

        <strong>{date}</strong>

        <span>{time}</span>

      </div>

      <div className="appointment-info">

        <h3>{type}</h3>

        <p>
          {pet} · {doctor}
        </p>

      </div>

      <span className="appointment-status">
        {status}
      </span>

    </div>
  );
}

export default AppointmentCard;