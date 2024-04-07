import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//Componentes propios
import HomePages from "./pages/HomePage";
import Loading from "./components/Loading";
import { ConocenosPage } from "./pages/ConocenosPage";
import { ObrasPage } from "./pages/ObrasPage";
import ProductosPage from "./pages/ProductosPage";

function App() {
  //Seccion Contenido
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/ConocenosPage" element={<ConocenosPage />} />
        <Route path="/ProductosPage" element={<ProductosPage />} />
        <Route path="/ObrasPage" element={<ObrasPage />} />
      </Routes>
    );
  }
}

export default App;
