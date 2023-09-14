import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '.';

describe("NavBar component", () => {

    beforeEach(() => {
        render(
        <MemoryRouter>
        <NavBar />;
        </MemoryRouter>
        )
    });

    afterEach(() => {
        cleanup();
    })

 it('Displays a navbar', () => {
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
 })

 it('Displays a logo', () => {
    const logo = screen.getByRole('img')
    expect(logo).toBeInTheDocument()
 })



  it('renders the Scoreboard link', () => {
    const scoreBoardLink = screen.getByRole('link', { name: /Score Board/i });
    expect(scoreBoardLink).toBeInTheDocument();
  });

  it('renders the Login link', () => {
    const loginLink = screen.getByRole('link', { name: /Log in/i });
    expect(loginLink).toBeInTheDocument();
  });

  it('renders the Signup link', () => {
    const signUpLink = screen.getByRole('link', { name: /Sign Up/i });
    expect(signUpLink).toBeInTheDocument();
  });

});
