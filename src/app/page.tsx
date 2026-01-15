import { obtenerProductos } from '@/lib/productos';
import Inicio from './inicio/page';

export default async function Home() {
  const productos = await obtenerProductos();
  
  console.log(productos);

  return (
    // Solo p-5 desde md en adelante, en móviles no tiene padding
    <div className="md:p-5 p-2 min-h-screen bg-zinc-50 font-sans">
      <Inicio/>
    </div>
  );
}