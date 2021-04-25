import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonGroup from './index';
import Button from '../Button';

afterEach(cleanup);

describe('ButtonGroup component', () => {
  describe('given default props', () => {
    test('should render correctly', () => {
      render(<ButtonGroup />);
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('given props', () => {
    const buttonsArray = [
      {
        children: 'Button 1',
        onClick: jest.fn(),
      },
      {
        children: 'Button 2',
        onClick: jest.fn(),
      },
      {
        children: 'Button 3',
        onClick: jest.fn(),
      },
    ];

    const buttons = buttonsArray.map((button) => (
      <Button onClick={button.onClick}>{button.children}</Button>
    ));

    const testProps = {
      children: buttons,
    };

    test('should render correctly', () => {
      render(<ButtonGroup>{testProps.children}</ButtonGroup>);
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    test('should call onClick props when buttons are clicked', () => {
      render(<ButtonGroup>{testProps.children}</ButtonGroup>);

      fireEvent.click(screen.getByText(/button 1/i));
      expect(buttonsArray[0].onClick).toHaveBeenCalledTimes(1);

      fireEvent.click(screen.getByText(/button 2/i));
      expect(buttonsArray[1].onClick).toHaveBeenCalledTimes(1);

      fireEvent.click(screen.getByText(/button 3/i));
      expect(buttonsArray[2].onClick).toHaveBeenCalledTimes(1);
    });
  });
});
