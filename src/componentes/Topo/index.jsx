import Image from "next/image";
import Logo from '/public/vercel.svg'
import styles from './Topo.module.css';

export default function Topo() {
  return (
    <div className={styles.topo_container}>
      <Image className={styles.img_logo} src={Logo} alt="Vercel Logo"/>
      <h1>Topo</h1>
    </div>
  );
}