class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My image</h1>
                <img src="https://images.unsplash.com/photo-1652847042924-0615a274d629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));