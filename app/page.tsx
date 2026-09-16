import Image from "next/image";

export default function Home() { 
  return (
    <>
      <section className="hero">
    <div className="container hero-inner">
      <div className="hero-copy">
        <p className="eyebrow">Ristorante · Cologno Monzese</p>
        <h1>Castello</h1>
        <p className="hero-lead">Cucina di pesce e di carne, pizza cotta al momento e porzioni generose, nel cuore di Piazza Castello.</p>

        <ul className="hero-meta" role="list">
          <li className="hero-meta-item">
            <span className="rating-badge">
              <svg className="icon icon-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.5 6.7L12 17.6l-6.1 3.1 1.5-6.7-5.1-4.6 6.8-.7L12 2.5z"/></svg>
              <strong>4,3</strong>
            </span>
            <span className="muted">(1.222 recensioni)</span>
          </li>
          <li className="hero-meta-item"><span className="muted">20-30&nbsp;€ a persona</span></li>
          <li className="hero-meta-item status-open" id="statusPill">
            <span className="status-dot" aria-hidden="true"></span>
            <span id="statusText">Consulta gli orari</span>
          </li>
        </ul>

        <div className="hero-actions">
          <a className="btn btn-primary" href="https://www.google.com/maps/search/?api=1&query=Piazza+Castello+7+20093+Cologno+Monzese+MI">
            <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.3A7 7 0 0 1 19 9.7C19 15 12 21 12 21Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.6"/></svg>
            Indicazioni
          </a>
          <a className="btn btn-outline" href="tel:+390227302158">
            <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2C10.9 19 5 13.1 4.5 6.2A2 2 0 0 1 6.5 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
            02 2730 2158
          </a>
        </div>

        <ul className="service-list" role="list">
          <li><svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3v9M18 3v6a2 2 0 0 1-2 2h-2v7M9 3v6a2 2 0 0 1-2 2H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Consumazione sul posto</li>
          <li><svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8h16l-1.2 10.2A2 2 0 0 1 16.8 20H7.2a2 2 0 0 1-2-1.8L4 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="1.5"/></svg>Asporto</li>
          <li><svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="6" cy="18" r="2.3" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="18" r="2.3" stroke="currentColor" stroke-width="1.5"/><path d="M6 18l3-8h5l3 6M9 10 8 6H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Consegna a domicilio</li>
        </ul>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="logo-badge logo-badge-lg">
          {/* <span className="logo-badge-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21V10L6 7V4H8V6L10 4V6L12 4V6L14 4V6L16 4V7L18 4H16L18 7L21 10V21H3Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M9 21V15H15V21" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>
          </span>
          <span className="logo-badge-title">Castello</span>
          <span className="logo-badge-rule"></span>
          <span className="logo-badge-sub">Ristorante · Pizzeria</span> */}
          <img src="/castello.png" alt="" width={"100%"} height={"100%"}/>
        </div>
      </div>
    </div>
  </section>

  <section className="section" id="chi-siamo">
    <div className="container narrow">
      <p className="eyebrow center">Panoramica</p>
      <h2 className="center">Una tavola generosa, nel cuore di Cologno</h2>
      <p className="section-lead center">
        Fritto misto, risotti ai frutti di mare, grigliate di carne e pizza al forno: Castello è un punto di riferimento
        per chi cerca porzioni abbondanti e una cucina che unisce pesce e tradizione. Segnalato da 291 persone su Google
        per il rapporto qualità‑prezzo e la cordialità del servizio.
      </p>
      <p className="section-lead center">
        La sala accoglie con pareti verde smeraldo, lampade a sospensione nere e pavimenti in legno chiaro:
        un ambiente curato, pensato sia per la cena in famiglia che per la pizza tra amici.
      </p>
      <div className="stat-row">
        <div className="stat">
          <span className="stat-value">4,3<span className="stat-unit">/5</span></span>
          <span className="stat-label">valutazione media</span>
        </div>
        <div className="stat">
          <span className="stat-value">1.222</span>
          <span className="stat-label">recensioni Google</span>
        </div>
        <div className="stat">
          <span className="stat-value">20‑30&nbsp;€</span>
          <span className="stat-label">spesa media a persona</span>
        </div>
      </div>
    </div>
  </section>
  </>
  );
}
