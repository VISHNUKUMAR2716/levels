import { BrowserRouter as Router, Routes, Route, Link,useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import "./App.css";
import User from "./Users";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Setting";
import { AuthProvider } from "./AuthContext";
import Largelist from "./Largelist";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import UseCallbackExample from "./Child";
import UsermemoExample from "./Call";
import Sceach from "./Sceach";
import VirtualList from "./VirtualList";
import ProductList from "./ProductList";
import debounce from "./Utils";
import Home from "./Home";

const App = () => {
const Location =useLocation()

return(
  <AnimatePresence>
    <Routes location={Location} key={Location.pathname}>
      <Route path="/"element={<Home />} />
      <Route path="/about" element={<Profile />} />

    </Routes>
  </AnimatePresence>
)

}


export default App;
