import Hero from './Hero';
import Portofolio from './Portofolio';
import { profil } from './data';

function App() {
  return (
    <>
      <Hero {...profil} />
      <Portofolio />
      <footer>Dibuat dengan React + Vite · Praktikum Web 2026</footer>
    </>
  );
}

export default App;