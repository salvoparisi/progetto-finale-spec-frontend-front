export default function Homepage() {
    return (
        <div className="container d-flex flex-column align-items-center pt-4">
            <h1>Benvenuto su Mobile Store</h1>
            <p className="text-muted text-center">La piattaforma perfetta per esplorare e confrontare i migliori dispositivi mobili sul mercato!</p>

            <section className="w-100 mt-4">
                <h2>📋 Lista dei dispositivi</h2>
                <p>Nella nostra lista troverai una panoramica dei dispositivi disponibili, con le loro informazioni principali:</p>
                <ul>
                    <li><strong>Titolo:</strong> Nome del dispositivo</li>
                    <li><strong>Categoria:</strong> Tipologia del prodotto (es. Premium, Mid-range, Economico)</li>
                </ul>
            </section>

            <section className="w-100 mt-4">
                <h2>🔍 Ricerca e Filtri</h2>
                <ul>
                    <li><strong>Barra di ricerca:</strong> Trova rapidamente un dispositivo digitando il suo nome.</li>
                    <li><strong>Filtro per categoria:</strong> Visualizza solo smartphone, smartwatch o tablet in base alla categoria selezionata.</li>
                    <li><strong>Ordinamento:</strong> Organizza i dispositivi in ordine alfabetico (A-Z o Z-A) per titolo o categoria.</li>
                </ul>
            </section>

            <section className="w-100 mt-4">
                <h2>📖 Pagina di dettaglio</h2>
                <p>Ogni dispositivo ha una pagina dedicata con tutte le sue caratteristiche:</p>
                <ul>
                    <li>Prezzo 💰</li>
                    <li>Marca 🏷️</li>
                    <li>Durata della batteria 🔋</li>
                    <li>Altre specifiche tecniche 📊</li>
                </ul>
            </section>

            <section className="w-100 mt-4">
                <h2>⚖️ Comparatore di dispositivi</h2>
                <p>Vuoi confrontare due dispositivi? Usa il nostro <strong>comparatore</strong>!</p>
                <ul>
                    <li>Seleziona due dispositivi dalla lista, dalla pagina di dettaglio o tramite un menu dedicato.</li>
                    <li>Confronta le loro caratteristiche affiancate per una scelta più informata.</li>
                </ul>
            </section>

            <section className="w-100 mt-4">
                <h2>⭐ Sistema di preferiti</h2>
                <p>Non vuoi perdere di vista i tuoi dispositivi preferiti? Aggiungili ai <strong>preferiti</strong>!</p>
                <ul>
                    <li>Puoi aggiungere o rimuovere dispositivi in qualsiasi momento.</li>
                    <li>I tuoi preferiti sono sempre accessibili da qualsiasi sezione dell'app.</li>
                </ul>
            </section>

            <div className="text-center w-100 mt-5">
                <h3>🚀 Inizia ora!</h3>
                <p>Esplora la nostra lista, confronta i dispositivi e trova il miglior prodotto per te!</p>
            </div>
        </div>
    );
}