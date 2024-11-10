import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Explore.css";

const images = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
const cardTitles = ["Peru", "Bolivia", "Chile", "Argentina", "Colombia"];

function Explore() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleCardClick = (country) => {
    console.log("Card clicked:", country); // Log card click
    navigate(`/country/${country}`); // Navigate to the country gallery
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div id="countries" className="countries">
      <h1>Countries I've visited</h1>
      <p>
        Over the course of five months, I traveled through five remarkable South
        American countries. In Peru, I discovered the ancient wonders of Machu
        Picchu; in Bolivia, I was awed by the beauty of the salt flats; in
        Chile, I relished its diverse landscapes and flavors; in Argentina, the
        passionate football culture ignited my love for the game and its people;
        and in Colombia, I explored its vibrant culture and heritage. Each
        country added a unique chapter to my travel story.
        <strong> Where do you wanna go see?</strong>
      </p>

      <Row className="justify-content-center mx-0">
        {cardTitles.map((title, index) => (
          <Col key={index} md={2} className="px-2">
            <div
              className="country-card"
              onClick={() => handleCardClick(title)} // Use the click handler
              style={{ cursor: "pointer" }}
            >
              <Card className="h-100 text-center" style={{ width: "200px" }}>
                <Card.Img
                  variant="top"
                  src={images(`./${title}.jpeg`)} // Construct image path dynamically
                  alt={title} // Set alt text for accessibility
                  style={{
                    height: "35vh",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    borderRadius: "0.25rem",
                    padding: "2px",
                  }}
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Explore;
