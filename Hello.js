
class Hello extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello {this.props.to} from {this.props.from}</h2>
            </div>
        );
    }
}

