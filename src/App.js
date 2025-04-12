import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./componention/Main";
import RegisterForm from "./componention/Registratr";
import TrelloBoard from "./componention/TrelloBoard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/dashboard" element={<TrelloBoard />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Main/>
    </div>
  );
}

export default App;
