import styled, { css } from 'styled-components';
import { IconChevronDown } from '@tabler/icons';
import { useReducer } from 'react';


const base = css`
    box-shadow: ${p => p.theme.boxShadow};
    background-color: ${p => p.theme.elementBg};
    color: ${p => p.theme.textClr};
    box-shadow: ${p => p.theme.boxShadow};
    border-radius: .4rem;
    cursor: pointer;
`;

const Container = styled.div`
    width: 100%;
    max-width: 12rem;
    position: relative;
`;


const SelectedItem = styled.div<{ isActive: boolean; }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .813rem;
    min-height: 3rem;
    padding-inline: 1rem;
    .arrow-down {
        transition: transform .3s ease-in;
        ${({ isActive }) => isActive && css`
            transform: rotate(180deg);
        `}
    }
    ${base}
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    padding-block: .6rem;
    margin-top: .7rem;
    position: absolute;
    width: 100%;
    ${base}
`;

const Item = styled.span`
    padding: .3rem 1rem;
    cursor: pointer;
    font-size: .843rem;
    &:hover {
        color: hsl(0, 0%, 52%);
    }
`;

type ArrayToTuple<T extends readonly any[]> = T extends readonly (infer U)[] ? U : never;

type MenuProps<T extends readonly any[]> = {
    selected?: ArrayToTuple<T>
    selections: T;
    onSelect: (selected?: ArrayToTuple<T>) => void
};

function Menu<T extends readonly any[]>({ selections, selected , onSelect}: MenuProps<T>) {
    const [on, toggle] = useReducer((state: boolean, next: boolean | null) => next ?? !state, false);

    const handleSelect = (s: ArrayToTuple<typeof selections>) => {
        onSelect(s)
        toggle(false)
    }

    return (
        <Container role='menu'>
            <SelectedItem onClick={() => toggle(null)} isActive={on}>
                <span>{selected ? selected : 'Filter by Region'}</span>
                <IconChevronDown size={18} className='arrow-down' />
            </SelectedItem>
            {on && (
                <Items>
                    {
                        selections.map(s => <Item role='menuitem' key={s} onClick={() =>  handleSelect(s)}>{s}</Item>)
                    }
                </Items>
            )}
        </Container>
    );
}

export default Menu;