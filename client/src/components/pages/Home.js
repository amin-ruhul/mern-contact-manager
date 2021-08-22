import Styles from "../../assets/css/Home.module.css";
function Home() {
  return (
    <div className={Styles.home}>
      <div>
        <h3>Kep Your contact Stored.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, modi
          nobis! Totam, molestiae qui.
        </p>
        <a className={Styles.btn} href="/register">
          Get Started
        </a>
      </div>
      <div>
        <img
          className={Styles.image}
          src="https://opendoodles.s3-us-west-1.amazonaws.com/reading-side.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
