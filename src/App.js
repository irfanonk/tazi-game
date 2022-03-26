import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout/MainLayout";
import PlayNow from "./pages/PlayNow";
import Error from "./pages/Error";
import MarketPlace from "./pages/MarketPlace";
import Renting from "./pages/Renting";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MarketPlace />}></Route>
            <Route path="/renting" element={<Renting />}></Route>
            <Route path="/play-now" element={<PlayNow />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
