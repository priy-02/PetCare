function StatCard({ icon, label, value, description }) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>

        <span>{label}</span>

        <h3>{value}</h3>

        <p>{description}</p>

      </div>

    </div>
  );
}

export default StatCard;