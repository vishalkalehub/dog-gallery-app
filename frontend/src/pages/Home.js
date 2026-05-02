import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function Home() {
  const [breeds, setBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => setBreeds(Object.keys(data.message)));

    API.get("/viewed")
      .then(res => setRecent(res.data))
      .catch(() => {});
  }, []);

  const filtered = breeds.filter(b =>
    b.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Dog Breeds</h2>

      <input
        className="search"
        type="text"
        placeholder="Search breed..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Recently Viewed</h3>
      <div className="grid">
        {recent.slice(-5).reverse().map((r, i) => {
          const breed = typeof r === "string" ? r : r.breed;
          return (
            <Link key={i} to={`/breed/${breed}`} className="card">
              {breed}
            </Link>
          );
        })}
      </div>

      <div className="grid">
        {filtered.map((breed, i) => (
          <Link key={i} to={`/breed/${breed}`} className="card">
            {breed}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;