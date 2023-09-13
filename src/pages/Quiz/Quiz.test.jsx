import React from 'react'
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
})