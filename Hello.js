
class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.num);

        return (
            
            <div>
                <h2>Hello {this.props.to} from {this.props.from}{bangs}</h2>
            </div>
        );
    }
}

