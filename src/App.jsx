import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./component/Homepage/Main/Main.jsx";
import Korzinka from "./component/Page/Korzinka/Korzinka.jsx";
import Save from "./component/Page/Save/Save.jsx";
import User from "./component/Page/User/Userpart.jsx";
import Product from "./component/Page/Product/Product.jsx";
import Signin from "./Storage/Users/Addusers.jsx";
import Error from "./component/Page/Error/Error";
import { useEffect, useState } from "react";

import getusers from "./Storage/Users/getusers.jsx";
// import { useGlobalContext } from "./context";

function App() {
  // const { handleSubmit } = useGlobalContext();

  const [name, setName] = useState("");
  const [user, setUser] = useState(getusers());

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { user: name}
    setUser(newItem)
    navigate('/main')
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <Signin name={name} setName={setName} handleSubmit={handleSubmit} />
          }
        />
        <Route path="/main" element={<Main user={user} />} />
        <Route path="/korzinka" element={<Korzinka />} />
        <Route path="/save" element={<Save />} />
        <Route path="/user" element={<User />} />
        <Route path="/product" element={<Product />} />
        <Route path="/korzinka" element={<Korzinka />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
