export default function Info() {
  return (
    <section className="section section-alt" id="info">
      <div className="container info-grid">
        <div className="info-col">
          <p className="eyebrow">Informazioni</p>
          <h2>Dove siamo &amp; orari</h2>

          <ul className="info-list">
            <li>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 21s-7-6.1-7-11.3A7 7 0 0 1 19 9.7C19 15 12 21 12 21Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <circle
                  cx="12"
                  cy="9.5"
                  r="2.3"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
              <div>
                <p>Piazza Castello, 7, 20093 Cologno Monzese MI</p>
                <p className="muted small">Plus code: G7HG+FF Cologno Monzese</p>
              </div>
            </li>
            <li>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.9 19 5 13.1 4.5 6.2A2 2 0 0 1 6.5 4Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
              </svg>
              <div>
                <a href="tel:+390227302158">02 2730 2158</a>
              </div>
            </li>
            <li>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="M12 7v5l3.5 2"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <div>
                <p>
                  <strong>Lunedì:</strong> chiuso
                </p>
                <p className="muted small">
                  Per gli orari aggiornati di martedì–domenica consulta la
                  scheda Google del locale.
                </p>
              </div>
            </li>
          </ul>

          <div className="info-actions">
            <a
              className="btn btn-primary"
              href="https://www.google.com/maps/search/?api=1&query=Piazza+Castello+7+20093+Cologno+Monzese+MI"
            >
              Indicazioni stradali
            </a>
            <a className="btn btn-outline" href="tel:+390227302158">
              Chiama il ristorante
            </a>
          </div>
        </div>

        <div className="info-col map-col">
          <div className="map-frame">
            <iframe
              title="Mappa: Castello, Piazza Castello 7, Cologno Monzese"
              src="https://maps.google.com/maps?q=Piazza%20Castello%2C%207%2C%2020093%20Cologno%20Monzese%20MI&z=16&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
