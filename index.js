class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="John" from="Bob" num={3} isFunny />
                <Hello to="Andrew" from="Luke" isFunny={true} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));