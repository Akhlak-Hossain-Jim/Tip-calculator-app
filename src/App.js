import { useState, useEffect } from "react";
import styled from "styled-components";

function Footer() {
  return (
    <footer>
      Developed by{" "}
      <a
        href="https://ah-jim-seed.web.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Akhlak Hossain Jim
      </a>
    </footer>
  );
}

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [stat, setStat] = useState();
  const [person, setPerson] = useState();
  const [tipPerPerson, setTipPerPerson] = useState("0.00");
  const [totalTip, setTotalTip] = useState("0.00");

  const handlePerson = (e) => {
    setPerson(Number(e.target.value));
    setStat(
      Number(e.target.value) === 0
        ? true
        : Number(e.target.value) !== 0
        ? false
        : undefined
    );
  };

  const handleClick = () => {
    setBill(0);
    setTip(0);
    setPerson(0);
    document.querySelector("#BILL").value = "";
  };

  useEffect(() => {
    setTotalTip(
      bill !== 0 && tip !== 0 ? ((bill * tip) / 100).toFixed(2) : "0.00"
    );
  }, [bill, tip]);

  useEffect(() => {
    setTipPerPerson(
      isNaN(totalTip / person) ? "0.00" : (totalTip / person).toFixed(2)
    );
  }, [totalTip, person, tipPerPerson]);

  return (
    <Container>
      <Header>
        <img src="/logo.svg" alt="" />
      </Header>
      <div className="container">
        <div className="left">
          <div className="bill">Bill</div>
          <div className="input_1">
            <img src="/icon-dollar.svg" alt="$" />
            <input
              type="number"
              id="BILL"
              placeholder="0"
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </div>
          <div className="tip">Select Tip %</div>
          <div className="tip_grid">
            <div className="tip_grid__button" onClick={() => setTip(5)}>
              5%
            </div>
            <div className="tip_grid__button" onClick={() => setTip(10)}>
              10%
            </div>
            <div className="tip_grid__button" onClick={() => setTip(15)}>
              15%
            </div>
            <div className="tip_grid__button" onClick={() => setTip(25)}>
              25%
            </div>
            <div className="tip_grid__button" onClick={() => setTip(50)}>
              50%
            </div>
            <input
              type="number"
              onChange={(e) => setTip(Number(e.target.value))}
              className="tip_grid__button"
              placeholder="Custom"
            />
          </div>
          <div className="nop">
            Number of People {stat === true ? <span>Can't be zero</span> : null}
          </div>
          <div className="input_1">
            <img src="/icon-person.svg" alt="$" />
            <input
              type="number"
              onChange={handlePerson}
              placeholder="0"
              value={person}
              required
            />
          </div>
        </div>
        <div className="right">
          <div className="right_data">
            <div className="line">
              <div className="line_left">
                <p className="l_1">Tip Amount</p>
                <p className="l_2">/ person</p>
              </div>
              <div className="line_right">${tipPerPerson}</div>
            </div>
            <div className="line">
              <div className="line_left">
                <p className="l_1">Total</p>
                <p className="l_2">/ person</p>
              </div>
              <div className="line_right">${totalTip}</div>
            </div>
          </div>
          <button
            className={`button ${
              tip === 0 || bill === 0 || person === 0 ? "disabled" : ""
            }`}
            onClick={handleClick}
          >
            RESET
          </button>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 163px;
  padding-bottom: 88px;
  @media (max-width: 548px) {
    padding-top: 50px;
    padding-bottom: 39px;
  }
  img {
    width: 87px;
    height: 54px;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  min-height: 1024px;
  .container {
    background: #ffffff;
    border-radius: 27px;
    padding: 30px 33px 33px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 31px;
    max-width: 923px;
    margin: 0 auto auto;
    @media (max-width: 548px) {
      grid-template-columns: 1fr;
      gap: 33px;
      padding: 32px 24px;
      padding-bottom: 80px;
      border-radius: 27px 27px 0 0;
    }
    .left {
      padding: 17px 18px 17px 17px;
      border-radius: 16px;
      @media (max-width: 768px) {
        padding: 0;
      }
      .bill {
        font-size: 16px;
        line-height: 100%;
        color: #657171;
        padding-bottom: 14px;
      }
      .input_1 {
        background: #f3f8fb;
        border-radius: 5px;
        border: 1px solid #f3f8fb;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 16.04px 5px 19.05px;
        width: 100%;
        &.error {
          border-color: #d08a7a;
        }
        img {
          width: auto;
          height: 24px;
        }
        input {
          flex: 1;
          background-color: transparent;
          border: none;
          font-size: 24px;
          color: #00474b;
          font-family: Space Mono;
          text-align: right;
          width: 100%;
          -moz-appearance: textfield;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          &:invalid {
            border-color: #d08a7a;
          }
          &::placeholder {
            color: #9ebbbd;
          }
          &:focus-visible {
            outline: none;
          }
        }
      }
      .tip {
        padding: 45px 0 20px;
        font-size: 16px;
        line-height: 100%;
        color: #657171;
      }
      .tip_grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 16px;
        grid-column-gap: 14px;
        width: 100%;
        @media (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
        &__button {
          padding: 12px;
          background: #00474b;
          border-radius: 6px;
          text-align: center;
          font-size: 24px;
          line-height: 100%;
          color: #f5ffff;
          &:hover {
            background: #9fe8df;
            color: #00474b;
          }
          &:last-child {
            font-family: Space Mono;
            font-weight: bold;
            &:focus {
              text-align: right;
            }
            background: #f4f8fb;
            color: #00474b;
            width: 100%;
            outline: none;
            border: none;
            -moz-appearance: textfield;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            &::placeholder {
              font-family: Space Mono;
              font-weight: bold;
              color: #9ebbbd;
            }
          }
        }
      }
      .nop {
        font-size: 16px;
        line-height: 100%;
        color: #657171;
        padding: 44px 0 11px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          color: #d08a7a;
        }
      }
    }
    .right {
      background-color: #00474b;
      padding: 53px 36px 39px 40px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 768px) {
        padding: 40px 20px;
      }
      &_data {
        display: flex;
        flex-direction: column;
        gap: 53px;
        width: 100%;
        .line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          &_left {
            p {
              &:first-child {
                font-size: 16px;
                line-height: 100%;
                color: #f5ffff;
                padding-bottom: 7px;
              }
              &:last-child {
                font-size: 14px;
                line-height: 100%;
                letter-spacing: -0.05em;
                color: #669da2;
              }
            }
          }
          &_right {
            font-size: 48px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #2cc4b1;
          }
        }
      }
      button.button {
        background: #2cc4b1;
        color: #00474b;
        padding: 16px;
        width: 100%;
        border: none;
        outline: none;
        font-weight: bold;
        border-radius: 6px;
        &.disabled {
          background: #0d686d;
        }
        @media (max-width: 548px) {
          margin-top: 50px;
        }
      }
    }
  }
  footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 5px;
    width: 100%;
    text-align: center;
    a {
      color: #00474b;
    }
  }
`;
