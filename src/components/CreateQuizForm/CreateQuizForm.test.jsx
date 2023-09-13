import React from 'react'
import {describe, it, expect, beforeEach, afterEach} from 'vitest'
import {screen, render, cleanup, queryAllByText} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import * as  matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)


import CreateQuizForm from '.'


describe('CreateQuizForm component', () => { 

    beforeEach(() => {
        render(<CreateQuizForm/>)
    })

    afterEach(() => {
        cleanup()
    })

    it ("Displays a form with buttons", () => {
        const elem = screen.getByRole('button')
        expect(elem).toBeInTheDocument()
        expect(elem).toHaveTextContent('Next')
    
    })

 })
