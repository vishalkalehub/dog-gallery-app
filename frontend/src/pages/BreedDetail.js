import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

function BreedDetail() {
  const { name } = useParams();
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dog.ceo/api/breed/${name}/images`)
      .then(res => res.json())
      .then(data => {
        setImages(data.message || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    API.post(`/viewed?breed=${name}`).catch(() => {});
  }, [name]);

  const likeImage = (img) => {
    API.post("/like", {
      image_url: img,
      breed: name
    }).then(() => alert("Liked!"));
  };

  const shareImage = (index) => {
    const url = `${window.location.origin}/breed/${name}?img=${index}`;

    if (navigator.share) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!images.length) return <p>No images found</p>;

  return (
    <div className="container">
      <h2>{name}</h2>

      <div className="grid">
        {images.slice(0, visible).map((img, i) => (
          <div className="card" key={i}>
            <img src={img} alt="dog" />
            <div>
              <button onClick={() => likeImage(img)}>❤️</button>
              <button onClick={() => shareImage(i)}>🔗</button>
            </div>
          </div>
        ))}
      </div>

      {visible < images.length && (
        <button onClick={() => setVisible(prev => prev + 10)}>
          Load More
        </button>
      )}
    </div>
  );
}

export default BreedDetail;