import { useEffect, useState } from "react";
import API from "../api";

function Liked() {
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    API.get("/like")
      .then(res => setLiked(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="container">
      <h2>Liked Images</h2>

      <div className="grid">
        {liked.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.image_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Liked;