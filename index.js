function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>My number is: {num}</h1>
                <p> {num === 7 ? "Congrats!" : "Sad"}</p>
                {num === 5 && <h1>The number "five"</h1>} {/* если в && первое true, то второе выполнится. */}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));