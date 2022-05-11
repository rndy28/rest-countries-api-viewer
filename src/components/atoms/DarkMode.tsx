import styled from 'styled-components';
import { IconMoon } from '@tabler/icons'
import { useContext } from 'react';
import { themeContext } from 'App';

const Container = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    cursor: pointer;
    .moon-icon {
        height: 1.3rem;
        width: 1.3rem;
        fill: #fff;
    }

    @media(min-width: 768px) {
        .moon-icon {
            height: 1.4rem;
            width: 1.4rem;
        }
    }
`;

const Text = styled.span`
    font-size: .9rem;

    @media(min-width: 768px){
        font-size: 1rem;
    }
`

const DarkMode = () => {
    const toggleTheme = useContext(themeContext)
    return (
        <Container onClick={toggleTheme}>
            <IconMoon className='moon-icon'/>
            <Text>Dark Mode</Text>
        </Container>
    );
};

export default DarkMode;