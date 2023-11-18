import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Survey from "./pages/Survey/Survey";
import MainLayout from "./components/MainLayout/MainLayout";
import MainTopNav from "./components/MainTopNav/MainTopNav";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//     ],
//   },
//   { path: "/survey", element: <Survey /> },
// ]);

function App() {
  return (
    <div className="App">
      <MainTopNav />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/survey" element={<Survey />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
