import { render, screen } from '@testing-library/react';
import TodosItem from './TodosItem'

const todo =  {id: '1', text: 'test', isComplited: false}

describe('TodosItem component', () => {
    it('TodosItem renders', () => {
        render(<TodosItem item={todo}/>);

        expect(screen.getByText(/test/)).toBeInTheDocument();
    });
  });