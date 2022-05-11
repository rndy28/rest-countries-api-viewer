import styled from 'styled-components';
import { IconArrowNarrowLeft } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: ${p => p.theme.elementBg};
    color: ${p => p.theme.textClr};
    box-shadow: ${p => p.theme.boxShadow};
    width: fit-content;
    padding: .5rem 1rem;
    border-radius: .4rem;
    cursor: pointer;
    margin-bottom: 3rem;
    @media(min-width: 768px) {
        margin-bottom: 0;
    }
`;



const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Container onClick={() => navigate(-1)}>
            <IconArrowNarrowLeft size={20}/>
            Back
        </Container>
    );
};

export default BackButton;