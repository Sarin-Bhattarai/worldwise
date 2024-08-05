import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Nav from "../components/Header/Nav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <Nav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
