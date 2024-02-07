import Announcement from "./components/Announcement";
import Button from "./components/Button";
import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/Layout";


function App() {
  return (
    <>
      <Announcement />

      <Home />

      <Button onClick={() => alert('Hello, world!')} style={{
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


      <Button onClick={() => alert('Hello, world!')} style={{
        background: "transparent",
        color: "black",
        border: "1px solid black",
      }}>
        Click me!
      </Button>
    </>

  );
}

export default App;
