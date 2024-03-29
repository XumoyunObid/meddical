import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout.jsx";
import { nanoid } from "nanoid";
import { main_pages } from "./router/main-router";

// import { About } from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
