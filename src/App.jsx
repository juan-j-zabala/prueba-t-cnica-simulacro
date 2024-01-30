import Lbdisponibles from "./libros-disponibles/Lbdisponibles";
import LitLectura from "./lista-lecturas/LitLectura";

function App() {
  return (
    <div className="bg-neutral-950 h-screen p-2 text-2xl md:flex md:flex-row md:gap-4 items-center  md:overflow-hidden ">
      <Lbdisponibles />
      <LitLectura />
    </div>
  );
}

export default App;
