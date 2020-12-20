import "./App.css";
import Registo from "./components/Registo";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Registo />
      </div>
    </AuthProvider>
  );
}

export default App;
