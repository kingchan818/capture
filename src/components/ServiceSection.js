import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services{" "}
        </h2>

        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              voluptatum consequatur ullam sint quod eveniet adipisci fugit
              dolores officia dolorem, vero quae minima! Consequuntur ad quasi,
              aperiam possimus non sequi?
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              voluptatum consequatur ullam sint quod eveniet adipisci fugit
              dolores officia dolorem, vero quae minima! Consequuntur ad quasi,
              aperiam possimus non sequi?
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaghragm</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              voluptatum consequatur ullam sint quod eveniet adipisci fugit
              dolores officia dolorem, vero quae minima! Consequuntur ad quasi,
              aperiam possimus non sequi?
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affortable</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              voluptatum consequatur ullam sint quod eveniet adipisci fugit
              dolores officia dolorem, vero quae minima! Consequuntur ad quasi,
              aperiam possimus non sequi?
            </p>
          </div>
        </div>

        <div className="image">
          <img src={home2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
