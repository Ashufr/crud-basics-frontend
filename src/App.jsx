import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from "./Users/User";
import Create from "./CreateUser/Create";
import Update from "./UpdateUser/Update";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Create />} />
                <Route path="/update/:id" element={<Update />} />
            </Routes>
        </Router>
    );
};

export default App;
