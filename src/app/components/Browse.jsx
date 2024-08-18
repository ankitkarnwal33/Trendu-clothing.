import Image from "next/image";
import styles from "./Browse.module.scss";
import Casual from "./../../../public/img/Casual.png";
import Party from "./../../../public/img/Party.png";
import Gym from "./../../../public/img/Gym.png";
import Formal from "./../../../public/img/Formal.png";
function Browse() {
  const browseData = [
    {
      heading: "Casual",
      image: Casual,
      className: styles.browse__cards__card1,
    },
    {
      heading: "Formal",
      image: Formal,
      className: styles.browse__cards__card2,
    },
    {
      heading: "Party",
      image: Party,
      className: styles.browse__cards__card3,
    },
    {
      heading: "Gym",
      image: Gym,
      className: styles.browse__cards__card4,
    },
  ];
  return (
    <section className={styles.browse}>
      <h2 className={styles.browse__heading}>browse by dress style</h2>
      <div className={styles.browse__cards}>
        {browseData.map((card, index) => (
          <div className={card.className}>
            <h4>{card.heading}</h4>
            <Image
              src={card.image}
              placeholder="blur"
              alt={card.heading}
            ></Image>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Browse;
