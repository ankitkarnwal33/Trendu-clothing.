import styles from "./CreateReview.module.scss";
import Cross from "../smallComponents/Cross";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { getSessionDetails, initializeSession } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import Popup from "../smallComponents/Popup";
import newReview from "@/actions/newReview";

interface CreatereviewProps {
  itemId: string;
  onClick(): void;
  close(): void;
}
export interface ReviewType {
  item: string;
  reviewContent: string;
  rating: number;
  isVerified: boolean;
  user: string;
}
export default function CreateReview({
  onClick,
  close,
  itemId,
}: CreatereviewProps) {
  const [reviewContent, setReviewContent] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const ratingRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const ratingArray: [number, number, number, number, number] = [1, 2, 3, 4, 5];
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (rating <= 0) {
      setError("You should select the rating!");
      return;
    }
    if (reviewContent.length <= 0) {
      setError("Review should at least 50 characters long !");
      return;
    }
    initializeSession();
    const user = await getSessionDetails();
    if (user === null) {
      setError("You are not logged in. Redirecting...");
      const timerId = setTimeout(() => {
        clearTimeout(timerId);
        return router.push("/login");
      }, 2000);
    } else {
      setError("");
      const review = {
        item: itemId,
        reviewContent,
        rating,
        isVerified: user.isVerified,
        user: user.name,
      };
      const isSubmitted = await newReview(review);
      let message: string = "";
      if (isSubmitted) {
        message = "Review has been added great !";
        close();
      } else {
        setError("Can't post your review. Please try again.");
      }
    }
  }
  function handleRating(r: number) {
    setRating(r);
    const elements: HTMLElement[] = Array.from(
      ratingRef.current?.childNodes || []
    );

    elements.forEach((el) => {
      el.classList.remove(styles.permanent);
    });
    elements.forEach((el, index: number) => {
      if (index < r) {
        el.classList.add(styles.permanent);
      }
    });
  }

  function handleReview(e: ChangeEvent<HTMLTextAreaElement>): void {
    if (e) setReviewContent(e.currentTarget?.value);
  }
  function handleRatingStyleAdd(value: number) {
    const elements: HTMLElement[] = Array.from(
      ratingRef.current?.childNodes || []
    );
    elements.forEach((el, index) => {
      if (index < value) {
        el.classList.add(styles.active);
      }
    });
  }
  function handleRatingStyleRem() {
    const elements: HTMLElement[] = Array.from(
      ratingRef.current?.childNodes || []
    );
    elements.forEach((el) => {
      el.classList.remove(styles.active);
    });
  }
  return (
    <div className={styles.review}>
      {error.length > 0 && <Popup error={error} />}
      <Cross onClick={onClick} />
      <form className={styles.review_box} onSubmit={handleSubmit}>
        <div className={styles.review_box_rating}>
          <label htmlFor="Rating">Select rating: </label>
          <div ref={ratingRef}>
            {ratingArray.map((value: number, index) => (
              <span
                key={index}
                onMouseOver={() => handleRatingStyleAdd(value)}
                onMouseLeave={() => handleRatingStyleRem()}
                onMouseDown={() => handleRating(value)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <p className={styles.review_box_text}>
          <label htmlFor="review">Review</label>
          <textarea
            name="review"
            id="review"
            rows={5}
            value={reviewContent}
            onChange={(e) => handleReview(e)}
            placeholder="Enter review here.."
            maxLength={500}
            minLength={50}
          ></textarea>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
