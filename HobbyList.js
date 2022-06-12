class HobbyList extends React.Component {
    render() {
        const hobbyList = ['piano', 'tennis', 'coins'];
        return (
            <div>
                {hobbyList.map(h => <li>{h}</li>)}
            </div>
        );
    }
}