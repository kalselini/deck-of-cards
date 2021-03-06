import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';
import { ShuffleIcon } from '../../assets';

// TODO: Write test to include default onClick function

afterEach(cleanup);

describe('Button component', () => {
  describe('given default props', () => {
    test('should render correctly', () => {
      render(<Button />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('given props', () => {
    const testProps = {
      children: 'Click Me',
      onClick: jest.fn(),
      startIcon: <ShuffleIcon />,
    };
    test('should render correctly', () => {
      render(
        <Button onClick={testProps.onClick} startIcon={testProps.startIcon}>
          {testProps.children}
        </Button>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should display children from prop', () => {
      render(
        <Button onClick={testProps.onClick} startIcon={testProps.startIcon}>
          {testProps.children}
        </Button>
      );
      expect(screen.getByText(/click me/i)).toBeInTheDocument();
    });

    test('should call onClick prop when clicked', () => {
      render(
        <Button onClick={testProps.onClick} startIcon={testProps.startIcon}>
          {testProps.children}
        </Button>
      );
      fireEvent.click(screen.getByText(/click me/i));
      expect(testProps.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('given props and disabled', () => {
    const testProps = {
      children: 'Click Me',
      onClick: jest.fn(),
      icon: <ShuffleIcon />,
      disabled: true,
    };

    test('should render correctly', () => {
      render(
        <Button
          onClick={testProps.onClick}
          startIcon={testProps.startIcon}
          disabled={testProps.disabled}
        >
          {testProps.children}
        </Button>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should display children from prop', () => {
      render(
        <Button
          onClick={testProps.onClick}
          startIcon={testProps.startIcon}
          disabled={testProps.disabled}
        >
          {testProps.children}
        </Button>
      );
      expect(screen.getByText(/click me/i)).toBeInTheDocument();
    });

    test('should not call onClick prop when clicked', () => {
      render(
        <Button
          onClick={testProps.onClick}
          startIcon={testProps.startIcon}
          disabled={testProps.disabled}
        >
          {testProps.children}
        </Button>
      );
      fireEvent.click(screen.getByText(/click me/i));
      expect(testProps.onClick).not.toHaveBeenCalledTimes(1);
    });
  });
});
