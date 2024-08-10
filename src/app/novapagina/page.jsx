import Link from 'next/link';
import styles from './novapagina.module.css'
import Topo from '@/componentes/Topo';

export default function NovaPagina() {
  return (
    <main className={styles.main_container}>
      <Topo />
      <div className={styles.card_container}>
        <h1>Nova Página</h1>
        <p>Essa é a nova página da aplicação.</p>
        <p>Essa é a nossa primeira página criada no React.</p>
        <Link href="/">Link para a página inicial</Link>
      </div>
    </main>
  );
}