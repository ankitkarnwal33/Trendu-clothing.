"use client";

import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { act, useReducer } from "react";
import styles from "./Cart.module.scss";
import Button from "./smallComponents/Button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.val }
          : item
      );
    case "dec":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - action.payload.val }
          : item
      );
    case "del":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
function Cart() {
  const initialState = [
    {
      id: 1,
      title: "T-shirt with Tape details",
      image: "/img/Arrivals/image7.png",
      color: "Black",
      size: "Large",
      price: 220,
      discount: 5,
      quantity: 1,
    },
    {
      id: 2,
      title: "Skinny Fit Jeans",
      image: "/img/Arrivals/image8.png",
      color: "Black",
      size: "Large",
      price: 220,
      discount: 20,
      quantity: 1,
    },
    {
      id: 3,
      title: "Checkered Shirt",
      image: "/img/Arrivals/image9.png",
      color: "black",
      size: "large",
      price: 220,
      discount: 7,
      quantity: 1,
    },
    {
      id: 4,
      title: "Sleeve Striped T-shirt",
      image: "/img/Arrivals/image10.png",
      color: "black",
      size: "large",
      price: 320,
      discount: 15,
      quantity: 1,
    },
  ];
  const [state, dispatch] = useReducer(reducer, initialState);
  const length = state.length;
  console.log(length);
  function handleMinus(id) {
    dispatch({
      type: "dec",
      payload: {
        id,
        val: 1,
      },
    });
  }
  function handlePlus(id) {
    dispatch({
      type: "inc",
      payload: {
        id,
        val: 1,
      },
    });
  }
  function handleDeleteCartItem(id) {
    dispatch({
      type: "del",
      payload: id,
    });
  }
  const totalPrice = state.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.price;
  }, 0);
  const totalSaving = state.reduce((accumulator, item) => {
    return accumulator + (item.discount * item.price * item.quantity) / 100;
  }, 0);
  let deliveryCharge = totalPrice >= 500 ? 0 : 49;
  return (
    <>
      {length > 0 ? (
        <>
          <h1 id={styles.heading}>Your cart </h1>
          <div className={styles.container__boxes}>
            <div className={styles.container__boxes__items}>
              {state.map((item) => (
                <div
                  className={styles.container__boxes__items__item}
                  key={item.id}
                >
                  <Image
                    src={item.image}
                    width={120}
                    height={120}
                    alt={item.title}
                  />
                  <div className={styles.item__details}>
                    <div className={styles.item__details__title}>
                      <h3>{item.title}</h3>
                      <MdDelete onClick={() => handleDeleteCartItem(item.id)} />
                    </div>
                    <div className={styles.item__details__specs}>
                      <p>
                        Color: <span>{item.color}</span>
                      </p>
                      <p>
                        Size: <span> {item.size}</span>
                      </p>
                    </div>
                    <div className={styles.item__details__final}>
                      <p className={styles.item__details__final__price}>
                        ${item.price}
                      </p>
                      <div>
                        <HiMinus onClick={() => handleMinus(item.id)} />
                        <p>{item.quantity}</p>
                        <GoPlus onClick={() => handlePlus(item.id)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.container__boxes__checkout}>
              <h3 className={styles.container__boxes__checkout__heading}>
                Order Summary
              </h3>
              <div className={styles.order}>
                <div className={styles.order__subtotal}>
                  <h5>Subtotal</h5>
                  <h4>${totalPrice.toFixed(0)}</h4>
                </div>
                <div className={styles.order__discount}>
                  <h5>
                    Discount(-{((totalSaving * 100) / totalPrice).toFixed(0)}%)
                  </h5>
                  <h4>-${totalSaving.toFixed(0)}</h4>
                </div>
                <div className={styles.order__delivery}>
                  <h5>Delivery Fee</h5>
                  <h4>${deliveryCharge}</h4>
                </div>
              </div>
              <div className={styles.total}>
                <h4>Total</h4>
                <h5>
                  ${(totalPrice + deliveryCharge - totalSaving).toFixed(0)}
                </h5>
              </div>
              <div className={styles.promotion}>
                <input type="text" placeholder="Add promo code" />
                <button>Apply</button>
              </div>
              <Link href={"/"}>
                <button className={styles.finalCheckout}>
                  Go to Checkout <FaArrowRightLong />{" "}
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <h3>
            Your cart is waiting for the perfect pick. Start shopping now!
          </h3>
          <Button toPath={"/"} content="Home" />
        </div>
      )}
    </>
  );
}

export default Cart;
