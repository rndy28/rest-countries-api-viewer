import Menu from 'components/molecules/Menu';
import SearchBar from 'components/molecules/SearchBar';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Country } from 'types';
import shared from 'components/shared';

const Container = styled.header`
    width: 100%;
    display: grid;
    place-items: center;
`;



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    min-height: inherit;
    @media(min-width: 768px) {
        flex-direction: row;
    }
    ${shared};
`;

const selections = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceana'
] as const;

let lastSelected: typeof selections[number] | undefined;

const Header = ({ setNewCountries, countries }: {
    setNewCountries: React.Dispatch<React.SetStateAction<Country[]>>;
    countries: Country[]
}) => {
    const [selected, setSelected] = useState<typeof selections[number] | undefined>(lastSelected);
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value) return;

        setQuery(value);
    };

    useEffect(() => {
        setNewCountries(countries.filter(c => {
            if(!selected) return c
            return c.region === selected
        }).filter(c => c.name.common.toLowerCase().includes(query.toLowerCase())));
    }, [selected, query]);


    useEffect(() => {
        lastSelected = selected
    }, [selected])

    return (
        <Container>
            <Wrapper>
                <SearchBar onChange={handleChange} />
                <Menu selections={selections} selected={selected} onSelect={(s) => setSelected(s)} />
            </Wrapper>
        </Container>
    );
};

export default Header; 