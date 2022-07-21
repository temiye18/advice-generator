import React, { useEffect, useState } from "react";
import { ImQuotesRight } from "react-icons/im";
import Container from "../UI/Container/Container.styled";
import Button from "../UI/Button/Button";
import iconDice from "../../assets/icon-dice.svg";
import classes from "./Advice.module.css";

const Advice = () => {
  const [advice, setAdvice] = useState({});

  const { id, advice: adviceText } = advice;
  console.log(id, adviceText);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(advice);

  const generateQuote = () => {
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <section>
      <Container>
        <div className={classes.advice__container}>
          <div className={classes.advice__box}>
            <h5>ADVICE #{id}</h5>
            <p className={classes.advice__text}>"{adviceText}"</p>
            <p className={classes.quote__icon}>
              <ImQuotesRight />
            </p>
            <Button onClick={generateQuote} className={classes.generate__quote}>
              <img src={iconDice} alt="button__icon" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Advice;
