import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from '../App'

test('renders learn react link', () => {
  const { getByText } = render(<App />, { wrapper: MemoryRouter })
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
