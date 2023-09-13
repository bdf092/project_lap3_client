import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '.';

describe("NavBar component", () => {

    beforeEach(() => {
        render(
        <BrowserRouter>
        <NavBar />;
        </BrowserRouter>
        )
    });

    afterEach(() => {
        cleanup();
    })

 it('Displays a nav bar children', () => {
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()

 })

});
