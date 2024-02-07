import Announcement from "./components/Announcement";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";


function App() {
  return (
    <>
      <Announcement />
      <Home />
      <About />
      <Services />

      {/* <Button onClick={() => alert('Hello, world!')} style={{
        background: "var(--white-secondary)",
        color: "black",
      }}>
        Click me!
      </Button>

      <Button onClick={() => alert('Hello, world!')} style={{
        background: "transparent",
        color: "var(--white-secondary)",
        border: "1px solid var(--white-secondary)",
      }}>
        Click me!
      </Button>


    */}
    </>

  );
}

export default App;
