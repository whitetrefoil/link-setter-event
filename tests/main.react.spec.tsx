import {render, screen} from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import {describe, expect, it, vi} from 'vitest'
import {linkCheckedEvent, linkEvent, linkValueEvent} from '~/main.js'


describe('linkEvent', () => {
  it('should works with param "value"', async() => {
    const setter = vi.fn((val: string) => undefined)

    render(<input value="hello" onInput={linkEvent('value')(setter)}/>)
    await userEvent.type(screen.getByRole('textbox'), 'w')

    expect(setter).toHaveBeenCalledWith('hellow')
  })
})

describe('linkValueEvent', () => {
  it('should works', async() => {
    const setter = vi.fn((val: string) => undefined)

    render(<input value="hello" onInput={linkValueEvent(setter)}/>)
    await userEvent.type(screen.getByRole('textbox'), 'w')

    expect(setter).toHaveBeenCalledWith('hellow')
  })
})

describe('linkCheckedEvent', () => {
  it('should works', async() => {
    const setter = vi.fn((val: boolean) => undefined)

    render(<input type="checkbox" checked={true} onChange={linkCheckedEvent(setter)}/>)
    await userEvent.click(screen.getByRole('checkbox'))

    expect(setter).toHaveBeenCalledWith(false)
  })
})
