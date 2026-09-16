export default function Menu() {
  const menuItems = [
    {
        "title": "Fritto Misto di Mare",
        "image": "/menu/fritto.webp",
        "popular": true,
        "description": "Frittura croccante di calamari, gamberi e verdure di stagione."
    },
    {
        "title": "Risotto Frutti di Mare",
        "image": "/menu/risotto.webp",
        "popular": true,
        "description": "Risotto mantecato con scampi, cozze, vongole e calamari freschi."
    },
    {
        "title": "Pizza Funghi Porcini e Bresaola",
        "image": "/menu/pizza.webp",
        "popular": true,
        "description": "Mozzarella fior di latte, porcini trifolati e bresaola della Valtellina."
    },
    {
        "title": "Cotoletta alla Milanese",
        "image": "/menu/cotoletta.webp",
        "popular": true,
        "description": "La classica costoletta di vitello impanata e dorata nel burro."
    },
    // {
    //     "title": "Cozze alla Marinara",
    //     "image": "/images/cozze-marinara.jpg",
    //     "popular": true,
    //     "description": "Cozze fresche saltate in padella con pomodoro, aglio, prezzemolo e crostini."
    // },
    // {
    //     "title": "Tiramisù alla Nutella",
    //     "image": "/images/tiramisu-nutella.jpg",
    //     "popular": true,
    //     "description": "Savoiardi imbevuti nel caffè con crema al mascarpone e cuore di Nutella."
    // },
    // {
    //     "title": "Grigliata di Carne",
    //     "image": "/images/grigliata-carne.jpg",
    //     "popular": true,
    //     "description": "Tagli scelti di carne alla griglia serviti con patate al forno."
    // },
    // {
    //     "title": "Spaghetti alle Vongole",
    //     "image": "/images/spaghetti-vongole.jpg",
    //     "popular": true,
    //     "description": "Spaghetti trafilati al bronzo con vongole veraci e profumo di limone."
    // },
    // {
    //     "title": "Tagliatelle dello Chef",
    //     "image": "/images/tagliatelle-chef.jpg",
    //     "popular": false,
    //     "description": "Pasta fresca fatta in casa con il nostro ragù speciale della tradizione."
    // },
    // {
    //     "title": "Calzone",
    //     "image": "/images/calzone.jpg",
    //     "popular": false,
    //     "description": "Ripieno di pomodoro, mozzarella, prosciutto cotto e funghi."
    // },
    // {
    //     "title": "Risotto alla Barbabietola e Pecorino",
    //     "image": "/images/risotto-barbabietola.jpg",
    //     "popular": false,
    //     "description": "Risotto cremoso alla barbabietola rossa finito con fonduta di pecorino."
    // }
];

  return (
    <section className="section section-alt" id="menu">
      <div className="container">
        <p className="eyebrow center">Menu</p>
        <h2 className="center">I piatti più amati</h2>
        <p className="section-lead center">
          Una selezione dei piatti segnalati più spesso dai clienti.
        </p>

        <div className="menu-list">
          {menuItems.map((item, index) => (
            <article key={index} className="menu-item-row">
              <div className="menu-item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="menu-item-image"
                  loading="lazy"
                />
                {item.popular && <span className="menu-tag">Popolare</span>}
              </div>

              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.title}</h3>
                </div>
                {item.description && (
                  <p className="menu-item-desc">{item.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* <p className="menu-note">
          Menu indicativo, basato sui piatti più citati dai clienti. Per la
          carta completa e i prezzi aggiornati, contatta il ristorante.
        </p> */}
      </div>
    </section>
  );
}