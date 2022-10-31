import FilterBtn from "../Buttons/FilterBtn";
import styled from 'styled-components';
import React from 'react';

const Ul = styled.ul`
display: flex;
justify-content: center;
`

const Li = styled.li`
&:not(:last-child) {
    margin-right: 8px;
  }
`

interface FilterControlsProps {
    items: string[];
    onFilter: (name: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({items, onFilter}) => {
    return (
        <Ul>
            {items.map((item: string) => (
                <Li key={item}><FilterBtn name={item} onFilter={onFilter} /></Li>
            ))}
        </Ul>
    )
}

export default FilterControls;