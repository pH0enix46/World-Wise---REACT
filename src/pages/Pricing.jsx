import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing
            <br />
            Just $9/month
          </h2>
          <p>
            Enjoy unlimited access to all features and benefits. Our service is
            designed to fit your needs, providing excellent value at an
            affordable price. Sign up now and experience the difference!
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
