import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client'
import { SignInButtonGithub } from '.'

jest.mock('next-auth/client')

describe('SignInButtonGithub component', () => {
  it('renders  correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButtonGithub />)
    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument()
  })

  it('renders  correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'John Doe',
          email: 'johndoe@example.com',
        },
        expires: 'fake-expires',
      },
      true,
    ])

    render(<SignInButtonGithub />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
