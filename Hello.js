
class Hello extends React.Component {
    render() {
        console.log(this.props.isFunny);
        return (
            
            <div>
                <h2>Hello {this.props.to} from {this.props.from} {this.props.num} times.</h2>
            </div>
        );
    }
}

