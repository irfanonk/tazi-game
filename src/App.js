import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
