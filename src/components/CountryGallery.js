import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Masonry from "react-masonry-css"; // Use Masonry as the layout
import LazyLoad from "react-lazyload"; // Import react-lazyload
import photos from "../imagePaths"; // Ensure this is correctly imported
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./CountryGallery.css"; // Ensure this is correctly imported

const countryList = ["Peru", "Bolivia", "Chile", "Argentina", "Colombia"];

function CountryGallery() {
  const { country } = useParams();
  const navigate = useNavigate();
  const countryImages = useMemo(() => photos[country] || [], [country]);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  // Shuffle function for randomizing the images array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Scroll to top and shuffle images whenever the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    setShuffledImages(shuffleArray(countryImages));
  }, [country, countryImages]);

  // Handle invalid country
  if (!countryList.includes(country)) {
    return <div>Country not found.</div>;
  }

  const currentCountryIndex = countryList.indexOf(country);

  const handlePrevCountry = () => {
    const prevIndex =
      (currentCountryIndex - 1 + countryList.length) % countryList.length;
    navigate(`/country/${countryList[prevIndex]}`);
  };

  const handleNextCountry = () => {
    const nextIndex = (currentCountryIndex + 1) % countryList.length;
    navigate(`/country/${countryList[nextIndex]}`);
  };

  const handleImageClick = (currentIndex) => {
    setIndex(currentIndex);
    setOpen(true);
  };

  return (
    <div className="country-page">
      <div className="country-title">
        <button onClick={handlePrevCountry} className="arrow-button">
          {"<"}
        </button>
        <h1>{country}</h1>
        <button onClick={handleNextCountry} className="arrow-button">
          {">"}
        </button>
      </div>

      {/* Masonry Layout with Lazy Loading */}
      <Masonry
        breakpointCols={{ default: 6, 800: 4, 500: 3 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {shuffledImages.map((photo, idx) => (
          <LazyLoad key={idx} height={200} offset={100} once>
            <img
              src={photo.src || photo}
              alt={`${country} ${idx + 1}`}
              onClick={() => handleImageClick(idx)}
              className="image"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </LazyLoad>
        ))}
      </Masonry>

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        index={index}
        open={open}
        close={() => setOpen(false)}
        slides={shuffledImages}
      />
    </div>
  );
}

export default CountryGallery;
