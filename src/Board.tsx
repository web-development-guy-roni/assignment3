interface BoardProps {
    squares: (string | null)[];
    onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: BoardProps) => {
    const renderSquare = (i: number) => {
        return (
            <button
                key={i}
                className="square"
                onClick={() => onClick(i)}
            >
                {squares[i]}
            </button>
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
