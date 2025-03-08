import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide</h2>
          <p>
            WorldWide is a global platform that connects people and ideas,
            fostering collaboration and innovation across cultures. We empower
            individuals and businesses to share knowledge and explore new
            opportunities
          </p>
          <p>
            We are committed to inclusivity and sustainability, aiming to bridge
            cultural gaps and create positive impacts in communities worldwide.
            Join us in shaping a better future together!
          </p>
        </div>
      </section>
    </main>
  );
}
