// Guy-Rozenbaum-214424814-Roni-Taktook-213207640

import styled from 'styled-components';

interface SquareProps {
    value: string | null;
    onClick: () => void;
    isWinningSquare: boolean;
}

const StyledButton = styled.button<{ $isWinningSquare: boolean }>`
    width: 80px;
    height: 80px;
    font-size: 2rem;
    font-weight: bold;
    background-color: ${props => props.$isWinningSquare ? '#28a745' : '#fff'};
    color: ${props => props.$isWinningSquare ? '#fff' : '#000'};
    border: 1px solid #dee2e6;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.$isWinningSquare ? '#218838' : '#e9ecef'};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
`;

const Square = ({ value, onClick, isWinningSquare }: SquareProps) => {
    return (
        <StyledButton onClick={onClick} $isWinningSquare={isWinningSquare}>
            {value}
        </StyledButton>
    );
};

export default Square;
