import React, { useEffect, useState } from "react";

const ListComponent = ({ title, fetchFunction }) => {
  const [data, setData] = useState([]);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    setLoading(true);
    setError(null); 
    fetchFunction()
      .then((data) => {
        setData(data);
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); 
      });
  }, [fetchFunction]);

  if (loading) {
    return <p>Caricamento...</p>; 
  }

  if (error) {
    return <p>Errore: {error}</p>; 
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item.id}>
              {item.nome} - {item.posizione}
            </li>
          ))
        ) : (
          <p>Nessun dato disponibile.</p>
        )}
      </ul>
    </div>
  );
};

export default ListComponent;
