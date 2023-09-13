import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import NotFound from './index';

import renderWithRouter from '../../../test-utils'; 

describe('Sign up', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFound/>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    const { container } = renderWithRouter(<NotFound />);
    expect(container).toBeInTheDocument();
  });
 
        
  it('displays the correct error message', () => {
    expect(screen.getByText(/Page not found/)).toBeInTheDocument();  
    
  });

it('provides a link to the home page', ()=> {
    
    expect(screen.getByText(/Home Page/)).toBeInTheDocument();
    const link = screen.getByText(/Home Page/);
    expect(link).toHaveAttribute('href', '/');
    
  });

});
