import axios from 'axios';
import Loader from 'components/atoms/Loader';
import Header from 'components/organism/Header';
import Main from 'components/organism/Main';
import { useEffect, useState } from 'react';
import type { Country } from 'types';



let cachedCountries: Country[] = [];

const Home = () => {
    const [countries, setCountries] = useState<Country[]>(cachedCountries);
    const [newCountries, setNewCountries] = useState<Country[]>(cachedCountries)

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                const res = await axios.get('https://restcountries.com/v3.1/all', {
                    signal: controller.signal
                });
                setCountries(prev => prev.length > 0 ? prev : res.data);
                setNewCountries(prev => prev.length > 0 ? prev : res.data)
                if (cachedCountries.length === 0) {
                    cachedCountries = res.data;
                }
            } catch (error) {
                return error
            }
        })();

        return () => controller.abort();

    }, []);


    if (countries.length === 0) return <Loader />;

    return (
        <>
            <Header setNewCountries={setNewCountries} countries={countries}/>
            <Main newCountries={newCountries} />
        </>
    );
};

export default Home;