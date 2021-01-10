import React from "react";
import styled from "styled-components";
import { About } from "../styles";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How to Start</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
            tempora aperiam perferendis explicabo earum. Repellendus, ex sint
            sed, esse modi incidunt ut unde accusantium expedita, labore
            assumenda minima nemo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>daily schedule</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
            tempora aperiam perferendis explicabo earum. Repellendus, ex sint
            sed, esse modi incidunt ut unde accusantium expedita, labore
            assumenda minima nemo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different payment</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
            tempora aperiam perferendis explicabo earum. Repellendus, ex sint
            sed, esse modi incidunt ut unde accusantium expedita, labore
            assumenda minima nemo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What products do you order</h4>
        <div className="answer">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
            tempora aperiam perferendis explicabo earum. Repellendus, ex sint
            sed, esse modi incidunt ut unde accusantium expedita, labore
            assumenda minima nemo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2 rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
