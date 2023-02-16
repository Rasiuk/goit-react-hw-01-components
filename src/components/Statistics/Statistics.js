export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(({ id, label, precentage }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{precentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
