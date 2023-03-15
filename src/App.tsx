import styles from "./GlobalStyles/index.module.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Welcome</h1>
        <div className={styles.grid2}>
          <About />
          <Skills />
        </div>
        <Projects />
        <ContactInfo />
      </div>
    </div>
  );
};

export default App;
