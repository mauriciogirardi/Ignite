import { useEffect, useState } from 'react'

import { api } from '../services/api'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    async function getRepo() {
      const { data, status } = await api.get('/orgs/rocketseat/repos')

      if (status === 200) {
        setRepositories(data)
      }
    }

    getRepo()
  }, [])

  return (
    <section className="repository__list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </ul>
    </section>
  )
}
