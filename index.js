class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to="John" from="Bob" />
                <Hello to="Andrew" from="Luke" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));