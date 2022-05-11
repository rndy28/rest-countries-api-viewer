import { css } from 'styled-components';

const shared = css`
    width: 90%;
    max-width: 80rem;

    @media(min-width: 768px) {
        width: 95%;
    }
`;

export default shared;