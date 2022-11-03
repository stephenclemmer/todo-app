import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ToDo from '../Components/ToDo/index';
import {SettingsProvider} from '../Context/Settings/settingsContext'

describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    render(
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    )

    let header = screen.getByTestId('todo-header');
    let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    expect(h1).toBeInTheDocument();
  })
})

