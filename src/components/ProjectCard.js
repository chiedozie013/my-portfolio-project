import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import classes from "./ProjectCard.module.css";

export default function ProjectCard() {
  return (
    <article className={card}>
      <div className={cardImageContainer}>
        <div
          className={classes.cardImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={classes.cardText}>
          <div className={cardDetains}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="#">
              See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
