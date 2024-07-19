import { useEffect, useState } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

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
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);

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
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/ConocenosPage" component={ConocenosPage} />
          <Route path="/ProductosPage" component={ProductosPage} />
          <Route path="/ObrasPage" component={ObrasPage} />
          <Route path="*" component={HomePages} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
