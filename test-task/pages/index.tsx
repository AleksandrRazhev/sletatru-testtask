import Head from "next/head";
import { App } from "../src/components/App/App";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="this is a test task for the company sletat.ru"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </div>
  );
}
