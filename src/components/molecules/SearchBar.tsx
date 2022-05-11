import styled from 'styled-components';
import { IconSearch } from '@tabler/icons';


const Container = styled.form`
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: ${p => p.theme.elementBg};
    box-shadow: ${p => p.theme.boxShadow};
    min-height: 3rem;
    border-radius: .4rem;
    padding-inline: 1rem;
    font-size: .813rem;
    width: 100%;
    input {
        width: 100%;
        min-height: inherit;
        background-color: inherit;
        color: ${p => p.theme.textInputClr};
        &::placeholder {
            color: ${p => p.theme.inputPlaceholderClr};
        }
    }
    .search-icon {
        color: ${p => p.theme.searchIconClr};
    }
    @media(min-width: 768px) {
        max-width: 25rem;
    }
`;


const SearchBar = ({ onChange }: {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}) => {
    return (
        <Container>
            <IconSearch size={20} className='search-icon' />
            <input placeholder='Search for a country...' onChange={onChange} />
        </Container>
    );
};

export default SearchBar;