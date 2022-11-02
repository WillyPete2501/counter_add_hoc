
const Counter = ({ addCount, subCount }) => {
    return (
        <div>
            <button onClick={subCount}>-</button>
            <button onClick={addCount}>+</button>
        </div>
    )
}

export default Counter