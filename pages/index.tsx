import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Estas en Home</h1>
        <h1 className={styles.title}>
          Ir a<Link href="/about"> acerca de</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.jsx</code>
        </p>
    </MainLayout>
  )
}
