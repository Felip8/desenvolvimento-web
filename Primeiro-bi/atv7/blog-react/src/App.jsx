import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import "./css/index.css";

export default function App() {
  const blog = {
    tituloPrincipal: "Blog de viagens - Planeta 4546B",
    autor: "Felipe Valdivino Biava",
    dataPublicacao: "21/04/2026",
    tituloSecundario: "Descobrindo os biomas do planeta 4546b",
  };

  return (
    <>
      <div className="componente-header">
        <Header tituloPrincipal={blog.tituloPrincipal} />
      </div>

      <div className="componente-article-sidebar">
        <Article
          dataPublicacao={blog.dataPublicacao}
          autor={blog.autor}
          tituloSecundario={blog.tituloSecundario}
        />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
