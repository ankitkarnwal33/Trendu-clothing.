"use client";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { useEffect, useReducer, useState } from "react";
import styles from "./Cart.module.scss";
import Button from "./smallComponents/Button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import CartSkeleton from "@/skeleton/CartSkeleton";
import { CartItem } from "./ItemDetail/ItemDetails";

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

function reducer(state: CartItem[], action: Action) {
  let newState;
  switch (action.type) {
    case "inc":
      newState = state.map((item: CartItem) =>
        item.id === action.payload.id && item.quantity < 10
          ? { ...item, quantity: item.quantity + action.payload.val }
          : item
      );
      break;
    case "dec":
      newState = state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - action.payload.val }
          : item
      );
      break;
    case "del":
      newState = state.filter((item) => item.id !== action.payload.id);
      break;
    case "set":
      newState = action.payload.data; // Fix: ensure payload.data is used
      break;
    default:
      return state;
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(newState));
  }
  return newState;
}

function Cart() {
  const [state, dispatch] = useReducer(reducer, []);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setTimeout(() => {
      if (localCart) {
        dispatch({
          type: "set",
          payload: {
            data: JSON.parse(localCart), // Fix: match reducer logic
          },
        });
      }
      setLoading(false);
    }, 500);
  }, []);

  function handleMinus(id: string) {
    dispatch({
      type: "dec",
      payload: {
        id,
        val: 1,
      },
    });
  }

  function handlePlus(id: string) {
    dispatch({
      type: "inc",
      payload: {
        id,
        val: 1,
      },
    });
  }

  function handleDeleteCartItem(id: string) {
    if (state.length > 0) {
      dispatch({
        type: "del",
        payload: { id },
      });
    }
  }

  const length: number = state.length;
  const totalPrice: number = state.reduce(
    (accumulator: number, item: CartItem) => {
      return accumulator + item.quantity * item.price;
    },
    0
  );
  const totalSaving: number = state.reduce(
    (accumulator: number, item: CartItem) => {
      return accumulator + (item.discount * item.price * item.quantity) / 100;
    },
    0
  );
  const deliveryCharge: number = totalPrice >= 500 ? 0 : 49;

  return (
    <>
      {loading && <CartSkeleton />}
      {length <= 0 && !loading && (
        <div className={styles.empty}>
          <h3>
            Your cart is waiting for the perfect pick. Start shopping now!
          </h3>
          <Button toPath={"/"} content="Home" />
        </div>
      )}
      {length > 0 && !loading && (
        <>
          <h1 id={styles.heading}>Your cart</h1>
          <div className={styles.container__boxes}>
            <div className={styles.container__boxes__items}>
              {state.map((item: CartItem) => (
                <div
                  className={styles.container__boxes__items__item}
                  key={item.id}
                >
                  <Image
                    src={item.image}
                    width={120}
                    height={120}
                    alt={item.title || ""}
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
                        Size: <span>{item.size}</span>
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
      )}
    </>
  );
}

export default Cart;
