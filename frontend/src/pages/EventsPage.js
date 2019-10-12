import React, { useState } from "react";
import CarousellCards from "../components/CarousellCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Icon, Image } from "semantic-ui-react";
import EventCard from "../components/EventCard";
import CollapsedEventView from "../components/CollapsedEventView";

const EventsPage = props => {
  const eventOne = {
    title: "Investment",
    desc:
      "For investors paying for each dollar of a company's earnings, the P/E ratio is a significant indicator, but the price-to-book ratio (P/B) is also a reliable indication of how much investors are willing to spend on each dollar of company assets. In the process of the P/B ratio, the share price of a stock is divided by its net assets; any intangibles, such as goodwill, are not taken into account. It is a crucial factor of the price-to-book ratio, due to it indicating the actual payment for tangible assets and not the more difficult valuation of intangibles. Accordingly, the P/B could be considered a comparatively conservative metric.",
    date: "Tues Night",
    location: "Dining Hall",
    image:
      "http://www.nusinvest.com/wp-content/uploads/2016/03/General-poster.jpg"
  };

  const eventTwo = {
    title: "NUS Investment Fair",
    desc:
      "For investors paying for each dollar of a company's earnings, the P/E ratio is a significant indicator, but the price-to-book ratio (P/B) is also a reliable indication of how much investors are willing to spend on each dollar of company assets. In the process of the P/B ratio, the share price of a stock is divided by its net assets; any intangibles, such as goodwill, are not taken into account. It is a crucial factor of the price-to-book ratio, due to it indicating the actual payment for tangible assets and not the more difficult valuation of intangibles. Accordingly, the P/B could be considered a comparatively conservative metric.",
    date: "22 Sept 2019",
    location: "Seminar Room 7",
    by: "Investos",
    image:
      "http://www.nusinvest.com/wp-content/uploads/2016/03/General-poster.jpg",
    capacity: "25",
    currentno: "17"
  };

  return (
    <main className="events-page">
      <div className="placeholder">
        <CarousellCards />
        <CollapsedEventView event={eventTwo} />
      </div>
    </main>
  );
};

export default EventsPage;
