import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Foods from "./components/foods/foods";
import Form from "./components/form/form";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Menu />
      <Foods />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
