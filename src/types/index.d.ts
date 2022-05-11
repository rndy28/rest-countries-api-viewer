export interface Country {
    name: Name & {
        nativeName: {
            [key: string]: Name;
        };
    };
    tld: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    borders: string[];
    flag: string;
    population: number;
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
    };
}

type Name = {
    official: string;
    common: string;
};