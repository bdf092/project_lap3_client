import React from 'react';
import { render } from '@testing-library/react';
import Scoreboard from './index';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


describe('Scoreboard', () => {
    it('renders without crashing', () => {
        render(<Scoreboard />);
    });

    it('displays the "Username" header', () => {
        const { getAllByText } = render(<Scoreboard />);
        expect(getAllByText('Username').length).toBeGreaterThan(0);
    });

    it('displays specific user data', () => {
        const { getAllByText } = render(<Scoreboard />);
        expect(getAllByText('FantasticRabbit42').length).toBeGreaterThan(0);
        expect(getAllByText('LuckyTiger7').length).toBeGreaterThan(0);
        expect(getAllByText('MysticFox36').length).toBeGreaterThan(0);
    });
});

