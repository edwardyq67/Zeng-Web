
import { obtenerProductos } from '@/lib/productos';
import Inicio from './page/Inicio';

export default async function Home() {
  const productos = await obtenerProductos();
  
  console.log(productos);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-5  font-sans">
      <Inicio/>
    </div>
  );
}