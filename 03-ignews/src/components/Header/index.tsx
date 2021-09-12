import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'
import { SignInButtonGithub } from '../SignInButtonGithub'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          alt="ig.news"
          width="100%"
          height="100%"
          objectFit="contain"
        />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active} name="Home" />
          <ActiveLink
            href="/posts"
            activeClassName={styles.active}
            name="Posts"
          />
        </nav>

        <SignInButtonGithub />
      </div>
    </header>
  )
}
