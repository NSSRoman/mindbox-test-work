import { render, screen } from '@testing-library/react';
import TodosList from './TodosList';

const data = [
              {id: '1', text: 'test', isComplited: false},
              {id: '2', text: 'react', isComplited: false},
              {id: '3', text: 'jest', isComplited: false}
             ];

describe('TodosList component', () => {
    it('TodosList renders', () => {
        render(<TodosList todos={data}/>);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText(/react/)).toBeInTheDocument();
    });

    it('TodosList snapshot', () => {
        const utils = render(<TodosList todos={data}/>);

        expect(utils).toMatchSnapshot();
    });
  });
  