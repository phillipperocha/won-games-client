import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i))

    expect(screen.getByLabelText(/search/i))
    expect(screen.getByLabelText(/open shopping cart/i))

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })
})
