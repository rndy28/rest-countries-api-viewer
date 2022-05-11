import Card from 'components/molecules/Card';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import type { Country } from 'types';

const Container = styled.main`
    width: 95%;
    max-width: 80rem;
    margin-inline: auto;
    display: grid;
    place-content: center;
    gap: 2rem;
    grid-template-columns: repeat(1, 270px);
    @media(min-width: 580px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    @media(min-width: 950px) {
        gap: 3rem;
    }
    @media(min-width: 1300px) {
        grid-template-columns: repeat(4, minmax(250px, 1fr));
        gap: 5rem;
    }
    margin-block: 3rem;
`;

const Main = ({ newCountries }: { newCountries: Country[]; }) => {
    const navigate = useNavigate();
    
    return (
        <Container>
            {
                newCountries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map(country => (
                    <Card
                        key={country.name.common}
                        name={country.name.common}
                        flag={country.flags.svg}
                        region={country.region}
                        population={country.population}
                        capital={country.capital}
                        onClick={() => navigate(country.name.common)}
                    />
                ))
            }

        </Container>
    );
};

export default Main;