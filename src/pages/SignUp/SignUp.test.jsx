import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import SignUp from './index';

import renderWithRouter from '../../../test-utils'; 

describe('Sign up', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    const { container } = renderWithRouter(<SignUp />);
    expect(container).toBeInTheDocument();
  });
 
    it('renders the sign up form', () => {
        expect(screen.getByRole('form')).toBeInTheDocument();
    }   );      
    

    it('renders the sign up form with the correct button', () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders the sign up form with the correct button text', () => {
        expect(screen.getByRole('button')).toHaveTextContent('Sign Up');
    });

});
