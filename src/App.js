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
      <TrelloBoard/>
<<<<<<< HEAD
       {/* <RegisterForm/> */}
            <Main/>/
=======
      {/* <RegisterForm /> */}
      <Main />
       <RegisterForm/>
      <Main/>
>>>>>>> af007bec819a334e0e83abace423be9451cc1b83
    </div>
  );
}

export default App;
