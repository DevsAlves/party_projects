import partyFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  const [parties, setParties] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadParties = async () => {
      try {
        const res = await partyFetch.get("/party"); // agora correto
        setParties(res.data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar as festas");
      } finally {
        setLoading(false);
      }
    };

    loadParties();
  }, []);

  if (loading) return <p>Carregando festas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home">
      <h1>Suas Festas</h1>

      <div className="parties-container">
        {parties.length === 0 ? (
          <p>Não há festas criadas!</p>
        ) : (
          parties.map((party) => (
            <div className="party" key={party._id}>
              <img src={party.image} alt={party.title} />
              <h3>{party.title}</h3>

              <Link
                to={`/party/${party._id}`}
                className="btn-secondary"
              >
                Detalhes
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;