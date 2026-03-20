import {vi} from "vitest"
import { render, screen, fireEvent } from '@testing-library/react'
import Lista from "./components/Lista"


test('megjeleníti az elemeket', () => {
  const data = [
    { tipus: 'Dell', meret: 24 },
    { tipus: 'LG', meret: 27 }
  ]

render(<Lista data={data} setData={() => {}} />)

  expect(screen.getByText(/LG/)).toBeInTheDocument()
})

test('törlés működik', () => {
  const data = [
    { tipus: 'Dell', meret: 24 },
    { tipus: 'LG', meret: 27 }
  ]

  const setDataMock = vi.fn()

  render(<Lista data={data} setData={setDataMock} />)

  const buttons = screen.getAllByText('🗑️')
  fireEvent.click(buttons[0])

  expect(setDataMock).toHaveBeenCalled()
})