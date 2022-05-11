import axios, { AxiosResponse } from 'axios';
import BackButton from 'components/atoms/BackButton';
import Loader from 'components/atoms/Loader';
import { Key, Pair, Value } from 'components/molecules/Card';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import type { Country } from 'types';


const Container = styled.main`
    width: 95%;
    max-width: 80rem;
    margin-inline: auto;
`;


const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 20rem;
    margin-inline: auto;
    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 80rem;
        margin-top: 5rem;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    @media(min-width: 768px) {
        max-width: 28rem;
    }
    @media(min-width: 1200px) {
        max-width: 35rem;
    }
`;


const Title = styled.h3`
    color: ${p => p.theme.textClr};
    @media(min-width: 768px) {
        font-size: 1.3rem;
    }
    @media(min-width: 950px) {
        font-size: 1.6rem;
    }
    @media(min-width: 1200px) {
        font-size: 1.9rem;
    }
`;

const Flag = styled.img`
    object-fit: cover;
    width: 100%;
    max-width: 20rem;
    @media(min-width: 868px) {
        max-width: 25rem;
    }
    @media(min-width: 950px) {
        max-width: 30rem;
    }
    @media(min-width: 1200px) {
        max-width: 35rem;
        max-height: 25rem;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: 3rem;
    margin-top: 1rem;
    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    &:nth-of-type(1) {
        width: 65%;
    }
`;

const Borders = styled(Column)`
    margin-block: 1rem 1.5rem;
    @media(min-width: 768px) {
        flex-direction: row;
    }
    & > p {
        width: 80%;
        max-width: 8rem;
        position: relative;
        top: 4px;
    }
    & > div {
        display: flex;
        gap: .5rem;
        flex-wrap: wrap;
    }
`;

const Tag = styled.div`
    min-height: 2rem;
    width: fit-content;
    padding-inline: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.theme.elementBg};
    box-shadow: ${p => p.theme.boxShadow};
    color: ${p => p.theme.textClr};
    border-radius: .4rem;
    cursor: pointer;
`;

const Details = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState<Country | undefined>();
    const [borders, setBorders] = useState<Country[] | undefined>();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const countryRes: AxiosResponse<[Country]> = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
                setCountry(countryRes.data[0]);

                const codes = countryRes.data[0]?.borders?.map(b => b).join(',');


                if (codes) {
                    const bordersCountriesRes = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
                    setBorders(bordersCountriesRes.data);
                } else {
                    setBorders([]);
                }
            } catch (error: any) {
                throw new Error(error);
            }
        })();
    }, [countryName]);



    if (!country || typeof borders === 'undefined') return <Loader />;
    console.log(country)

    return (
        <Container>
            <BackButton />
            <Article>
                <Flag src={country.flags.svg} alt={`${country.name.common} flag`}/>
                <Wrapper>
                    <Title>{country.name.common}</Title>

                    <Row>
                        <Column>
                            <Pair>
                                <Key>
                                    Native Name:
                                </Key>
                                {
                                    country.languages && <Value>{Object.keys(country.languages).map((lang, i, arr) => (
                                        arr[arr.length - 1] !== arr[i] ? `${country.name.nativeName[lang]?.common}, ` : country.name.nativeName[lang]?.common
                                    )) }</Value>
                                }
                            </Pair>
                            <Pair>
                                <Key>Population: </Key>
                                <Value>{country.population.toLocaleString('en-US')}</Value>
                            </Pair>
                            <Pair>
                                <Key>Region: </Key>
                                <Value>{country.region}</Value>
                            </Pair>
                            <Pair>
                                <Key>Sub Region: </Key>
                                <Value>{country.subregion ? country.subregion : 'Nil'}</Value>
                            </Pair>
                            <Pair>
                                <Key>Capital: </Key>
                                <Value>{country.capital ? country.capital : 'Nil'}</Value>
                            </Pair>
                        </Column>

                        <Column>
                            <Pair>
                                <Key>Top Level Domain: </Key>
                                <Value>{country.tld}</Value>
                            </Pair>
                            <Pair>
                                <Key>Currencies: </Key>
                                <Value>
                                    {country.currencies ? Object.values(country.currencies).map((curr, index, arr) => (
                                        arr.length > 1 && arr[arr.length - 1] !== arr[index] ? `${curr.name}, ` : curr.name
                                    )) : 'Nil'}
                                </Value>
                            </Pair>
                            <Pair>
                                <Key>Languages: </Key>
                                <Value>
                                    {country.languages ? Object.values(country.languages).map((lang, index, arr) => (
                                        arr.length > 1 && arr[arr.length - 1] !== arr[index] ? `${lang}, ` : lang
                                    )): 'Nil'}
                                </Value>
                            </Pair>
                        </Column>
                    </Row>
                    <Borders>
                        <Key>Border Countries: </Key>
                        {
                            borders.length > 0 && (
                                <div>
                                    {borders.map(c => (
                                        <Tag key={c.name.common} onClick={() => navigate(`/countries/${c.name.common}`)}>{c.name.common}</Tag>
                                    ))}
                                </div>
                            )
                        }
                        {borders.length === 0 && <Value>Nil</Value>}
                    </Borders>
                </Wrapper>
            </Article>
        </Container>
    );
};

export default Details;