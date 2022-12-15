
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import styles from '../../styles/Home.module.css'

export default function PricingPage() {
  return (
    <MainLayout>
      <h1> Estas en Pricing </h1>
        <h1 className={styles.title}>
          Ir a <Link href="/"> Home </Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/pricing/index.jsx</code>
        </p>
    </MainLayout>
  )
}
