import React from 'react'
// import { createApp, nextTick } from 'vitest'
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import 'matchmedia-polyfill'
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Quiz from '.';

describe('Quiz Component', () => {
    beforeEach(() => {
        render(<Quiz />)
    })

    afterEach(() => {
        cleanup()
    })

    it('should display a heading with appropriate text', () => {
        const element = screen.getByRole('heading')
        expect(element).toBeInTheDocument()
    })

    it('should display a timer which starts at 60', () => {
        const timer = screen.getByRole('timer')
        expect(timer).toBeInTheDocument()
        expect(timer.textContent).toBe('Timer: 60')
    })

    it('changes background colour when a user presses an answer', async () => {
        const answers = screen.queryAllByRole('answers')

        expect(answers.length).toBeGreaterThan(0)
        answers.forEach(answer => {
            expect(answer).toBeInTheDocument()
            userEvent.click(answer)
            const bgColour = window.getComputedStyle(answer).backgroundColor
            console.log(bgColour)
        })
        
    })
})