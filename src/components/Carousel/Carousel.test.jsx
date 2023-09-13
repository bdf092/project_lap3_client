import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import 'matchmedia-polyfill'
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Carousel from '.';

describe('Carousel Component', () => {
    beforeEach(() => {
        render(<Carousel />)
    })

    afterEach(() => {
        cleanup()
    })

    it('Should display a slider', () => {
        const element = screen.getByRole('slider')
            expect(element).toBeInTheDocument()
            
    })
})