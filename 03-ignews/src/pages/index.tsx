import { GetStaticProps } from 'next'
import { stripe } from '../services/stripe'
import Image from 'next/image'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    id: string
    amount: string
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton />
        </section>

        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width="500"
          height="500"
        />
      </main>
    </>
  )
}

// SSG - Static Site Generation
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IcCpNC9CY3OoIDJ2zRDeeRq', {
    expand: ['product'],
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24hs
  }
}
