import Link from "next/link";
import styles from "./page.module.css";
import Topo from '@/componentes/Topo';

export default function Home() {
  return (
    <main className={styles.main}>
      <Topo />
      <div className={styles.card_container}>
        <h1>Página Inicial</h1>
        <p>Essa é a página principal da aplicação React.</p>
        <p>Essa página é gerada automaticamente durante a criação da aplicação.</p>
        <Link href="/novapagina">Link para a nova página</Link>
        </div> 
    </main>
  );
}
