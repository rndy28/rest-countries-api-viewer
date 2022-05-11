import DarkMode from 'components/atoms/DarkMode';
import shared from 'components/shared';
import styled from 'styled-components';


const Container = styled.div`
    display: grid;
    place-items: center;
    background-color: ${p => p.theme.elementBg};
    color: ${p => p.theme.textClr};
    min-height: 5rem;
    box-shadow: ${p => p.theme.boxShadow};
    margin-bottom: 2rem;
`
const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${shared}
`

const Title = styled.h3`
    @media(min-width: 768px){
        font-size: 1.5rem;
    }
`

const Nav = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Where in the world?</Title>
                <DarkMode />
            </Wrapper>
        </Container>
    );
};

export default Nav;