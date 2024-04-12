import { render, screen } from '@testing-library/react'
import App from './App'
import { mockedUsers } from './tests/UserMock'

describe('List of users', () => {
  beforeAll(() => {
    jest.mock('./services/userService', () => ({
      getUsers: jest.fn().mockResolvedValue(mockedUsers),
    }))
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should render a list of users showing the name', async () => {
    render(<App />)

    const users = await screen.findAllByRole('listitem')

    expect(users).toHaveLength(mockedUsers.length)
    users.forEach((user, index) => {
      expect(user).toHaveTextContent(mockedUsers[index].name)
    })
  })
})
