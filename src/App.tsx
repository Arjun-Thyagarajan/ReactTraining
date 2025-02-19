import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function test() {
      const response = await fetch("https://example.com/user");

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const user = await response.json();

      console.log("React component error", user);
    }

    test()
      .then(() => {
        console.log("done");
      })
      .catch(() => {
        console.log("error");
      });
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`${styles.logo} ${styles.react}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
