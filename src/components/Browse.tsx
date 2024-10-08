import Image from "next/image";
import styles from "./Browse.module.scss";
import Casual from "@/../../public/img/Casual.png";
import Party from "@/../../public/img/Party.png";
import Gym from "@/../../public/img/Gym.png";
import Formal from "@/../../public/img/Formal.png";
import Link from "next/link";
function Browse() {
  const browseData = [
    {
      id: 1,
      heading: "Casual",
      image: Casual,
      className: styles.browse__cards__card1,
      url: "/product/casual",
    },
    {
      id: 2,
      heading: "Formal",
      image: Formal,
      className: styles.browse__cards__card2,
      url: "/product/formal",
    },
    {
      id: 3,
      heading: "Party",
      image: Party,
      className: styles.browse__cards__card3,
      url: "/product/party",
    },
    {
      id: 4,
      heading: "Gym",
      image: Gym,
      className: styles.browse__cards__card4,
      url: "/product/gym",
    },
  ];
  return (
    <section className={styles.browse}>
      <h2 className={styles.browse__heading}>browse by dress style</h2>
      <div className={styles.browse__cards}>
        {browseData.map((card) => (
          <Link href={card.url} key={card.id}>
            <div className={card.className}>
              <h4>{card.heading}</h4>
              <Image
                src={card.image}
                placeholder="blur"
                alt={card.heading}
                quality={1}
              ></Image>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Browse;
