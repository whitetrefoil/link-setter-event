import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import {describe, expect, it, vi} from 'vitest'
import {lce, le, lve} from '~/main.js'


describe('linkEvent', () => {
  it('should works with param "value"', async() => {
    const setter = vi.fn((val: string) => undefined)

    render(<input value="hello" onInput={le('value')(setter)}/>)
    await userEvent.type(screen.getByRole('textbox'), 'w')

    expect(setter).toHaveBeenCalledWith('hellow')
  })
})

describe('linkValueEvent', () => {
  it('should works', async() => {
    const setter = vi.fn((val: string) => undefined)

    render(<input value="hello" onInput={lve(setter)}/>)
    await userEvent.type(screen.getByRole('textbox'), 'w')

    expect(setter).toHaveBeenCalledWith('hellow')
  })
})

describe('linkCheckedEvent', () => {
  it('should works', async() => {
    const setter = vi.fn((val: boolean) => undefined)

    render(<input type="checkbox" checked={true} onChange={lce(setter)}/>)
    await userEvent.click(screen.getByRole('checkbox'))

    expect(setter).toHaveBeenCalledWith(false)
  })
})
