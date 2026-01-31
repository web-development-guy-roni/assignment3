// Guy-Rozenbaum-214424814-Roni-Taktook-213207640

import Square from './Square';

interface BoardProps {
    squares: (string | null)[];
    onClick: (i: number) => void;
    winningLine: number[] | null;
}

const Board = ({ squares, onClick, winningLine }: BoardProps) => {
    const renderSquare = (i: number) => {
        const isWinningSquare = winningLine?.includes(i) ?? false;
        return (
            <Square
                key={i}
                value={squares[i]}
                onClick={() => onClick(i)}
                isWinningSquare={isWinningSquare}
            />
        );
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="d-flex">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="d-flex">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
