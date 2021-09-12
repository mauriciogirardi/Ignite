import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const { push } = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
    }

    if (session.activeSubscription) {
      return push('/posts')
    }

    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <button className={styles.container} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}
