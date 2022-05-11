import styled from 'styled-components';

const Container = styled.article`
    width: 100%;
    border-radius: .4rem;
    overflow: hidden;
    background-color: ${p => p.theme.elementBg};
    box-shadow: ${p => p.theme.boxShadow};
    cursor: pointer;
`;

const Wrapper = styled.div`
    padding: 1rem 1.5rem 2rem 1.5rem;
`;

const Name = styled.h3`
    margin-bottom: .5rem;
    color: ${p => p.theme.textClr};
`;

export const Pair = styled.div`
    display: flex;
    gap: .5rem;
    font-size: .913rem;
    color: ${p => p.theme.textClr};
`;

export const Key = styled.p`
    font-weight: 600;
    color: ${p => p.theme.textClr};
`;

export const Value = styled.p`
    color: ${p => p.theme.textClr};
`;

const Flag = styled.img`
    object-fit: cover;
    height: 10rem;
    width: 100%;
    max-width: 100%;
`;

type CardProps = {
    name: string;
    population: number;
    region: string;
    capital?: string;
    flag: string;
    onClick?: () => void
};

const Card = ({ name, population, region, capital, flag, onClick }: CardProps) => {

    return (
        <Container onClick={onClick}>
            <Flag src={flag} alt={`${name} flag`}/>
            <Wrapper>
                <Name>{name}</Name>
                <Pair>
                    <Key>Population: </Key>
                    <Value>{population.toLocaleString('en-US')}</Value>
                </Pair>
                <Pair>
                    <Key>Region: </Key>
                    <Value>{region}</Value>
                </Pair>
                <Pair>
                    <Key>Capital: </Key>
                    <Value>{capital ? capital : 'Nil'}</Value>
                </Pair>
            </Wrapper>
        </Container>
    );
};

export default Card;