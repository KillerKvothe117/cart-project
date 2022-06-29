import "./App.css";
import { useGlobalContext } from "./context/index";

import Navbar from "./components/navbar";
import CartContainer from "./components/cartContainer";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
