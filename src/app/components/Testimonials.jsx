"use client";
import { useRef, useState } from "react";
import Star from "./smallComponents/Star";
import styles from "./Testimonials.module.scss";
function Testimonials() {
  const parentRef = useRef(null);
  const cardRef = useRef(null);
  const [tracker, setTracker] = useState(0);
  const [transformCard, setTransformCard] = useState(0);
  //Mock data
  const reviews = [
    {
      rating: 5,
      owner: "Sarah Gill",
      isVerified: true,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      rating: 4,
      owner: "Ankit Karnwal",
      isVerified: true,
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends. ",
    },
    {
      rating: 1,
      owner: "Anuj Karnwal",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Yogesh",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 3,
      owner: "Raj Kumar",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 2,
      owner: "Akshay Kumar",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 4,
      owner: "Minakshi",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Arti",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 4,
      owner: "Kusum Devi",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 3,
      owner: "Deepak",
      isVerified: false,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 2,
      owner: "Ketan Kumar Karnwal",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 4,
      owner: "Priyanka",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Anjali Devi",
      isVerified: false,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Sarvesh Kumar",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Vishal Kumar",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Vansh Kumar",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Sheetal",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Rekha Devi",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Gungun Gupta",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Akhilesh Kumar",
      isVerified: false,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      owner: "Sarah",
      isVerified: true,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
  ];
  const { length } = reviews;

  function handleScrollPrev(event) {
    if (tracker > 0) {
      setTransformCard((value) => value + 110);
      setTracker((v) => v - 1);
    } else {
      console.log("done");
      setTransformCard((value) => value * 0);
    }
  }
  function handleScrollNext(event) {
    if (tracker < length - 2) {
      setTransformCard((v) => v - 110);
      setTracker((v) => v + 1);
    } else {
      setTracker(0);
      setTransformCard((v) => v * 0);
    }
  }

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.container__header}>
          <h4 className={styles.container__header__heading}>
            our happy customers
          </h4>
          <div className={styles.container__header__buttons}>
            <span onClick={handleScrollPrev}>&larr;</span>
            <span onClick={handleScrollNext}>&rarr;</span>
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.sliderContainer__reviews} ref={parentRef}>
            {reviews.map((review) => (
              <div
                className={`${styles.sliderContainer__reviews__review} card`}
                ref={cardRef}
                key={review.owner}
                style={{
                  transform: `translateX(${transformCard}%)`,
                  transition: "transform 0.5s ease",
                }}
                // style={{ transform: `translateX(-400%)` }}
              >
                <div
                  className={styles.sliderContainer__reviews__review__rating}
                >
                  {typeof reviews[0].rating === "number" && (
                    <Star rating={review.rating} />
                  )}
                </div>
                <div className={styles.sliderContainer__reviews__review__user}>
                  <h2>{review.owner}</h2>
                  {review.isVerified && (
                    <svg
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0.829102C8.07164 0.829102 6.18657 1.40093 4.58319 2.47227C2.97982 3.54362 1.73013 5.06636 0.992179 6.84794C0.254225 8.62952 0.061142 10.5899 0.437348 12.4812C0.813554 14.3725 1.74215 16.1098 3.10571 17.4734C4.46928 18.837 6.20656 19.7656 8.09787 20.1418C9.98919 20.518 11.9496 20.3249 13.7312 19.5869C15.5127 18.849 17.0355 17.5993 18.1068 15.9959C19.1782 14.3925 19.75 12.5075 19.75 10.5791C19.7473 7.99408 18.7192 5.51571 16.8913 3.68783C15.0634 1.85994 12.585 0.831831 10 0.829102ZM14.2806 8.85973L9.03063 14.1097C8.96097 14.1795 8.87826 14.2348 8.78721 14.2725C8.69616 14.3103 8.59857 14.3297 8.5 14.3297C8.40144 14.3297 8.30385 14.3103 8.2128 14.2725C8.12175 14.2348 8.03903 14.1795 7.96938 14.1097L5.71938 11.8597C5.57865 11.719 5.49959 11.5281 5.49959 11.3291C5.49959 11.1301 5.57865 10.9392 5.71938 10.7985C5.86011 10.6577 6.05098 10.5787 6.25 10.5787C6.44903 10.5787 6.6399 10.6577 6.78063 10.7985L8.5 12.5188L13.2194 7.79848C13.2891 7.72879 13.3718 7.67352 13.4628 7.63581C13.5539 7.59809 13.6515 7.57868 13.75 7.57868C13.8486 7.57868 13.9461 7.59809 14.0372 7.63581C14.1282 7.67352 14.2109 7.72879 14.2806 7.79848C14.3503 7.86816 14.4056 7.95088 14.4433 8.04193C14.481 8.13297 14.5004 8.23056 14.5004 8.3291C14.5004 8.42765 14.481 8.52523 14.4433 8.61627C14.4056 8.70732 14.3503 8.79004 14.2806 8.85973Z"
                        fill="#01AB31"
                      />
                    </svg>
                  )}
                </div>
                <p
                  className={styles.sliderContainer__reviews__review__comment}
                >{`"${review.review}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
