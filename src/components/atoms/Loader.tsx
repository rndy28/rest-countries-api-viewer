import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${p => p.theme.bg};
    color: ${p => p.theme.textClr};
    display: grid;
    place-items: center;
    font-size: 1.5rem;
`;



const Loader = () => {
    return (
        <Container>
            Loading...
        </Container>
    );
};

export default Loader;
