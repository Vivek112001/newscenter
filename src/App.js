import React from "react"; 
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export function App() {
      return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="General"
                  pagesize={6}
                  country={"in"}
                  category="General"
                />
              }
            ></Route>
            <Route
              path="/Entertainment"
              element={
                <News
                  key="Entertainment"
                  pagesize={6}
                  country={"in"}
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              path="/Business"
              element={
                <News
                  key="Business"
                  pagesize={6}
                  country={"in"}
                  category="Business"
                />
              }
            ></Route>
            <Route
              path="/Health"
              element={
                <News
                  key="Health"
                  pagesize={6}
                  country={"in"}
                  category="Health"
                />
              }
            ></Route>
            <Route
              path="/Science"
              element={
                <News
                  key="Science"
                  pagesize={6}
                  country={"in"}
                  category="Science"
                />
              }
            ></Route>
            <Route
              path="/Sports"
              element={
                <News
                  key="Sports"
                  pagesize={6}
                  country={"in"}
                  category="Sports"
                />
              }
            ></Route>
            <Route
              path="/Technology"
              element={
                <News
                  key="Technology"
                  pagesize={6}
                  country={"in"}
                  category="Technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  
}

export default App;
