
class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous'
    }
    render() {
        return (
            <div>
                <p>Hi {this.props.to} from {this.props.from}</p>
            </div>
        );
    }
}