import {Route,Routes} from 'react-router-dom';
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";

export default function App() {
  

  return (
    <>
      <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}


