
class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props;
        const colors = { fontSize: '50px', backgroundColor: 'purple' };
        return (
            <div className="Machine">

                <p style={colors}>{s1}{s2}{s3}</p>

                <p className={s1 === s2 && s3 ? 'win' : 'lose'}>
                    {s1 === s2 && s3 ? "You win!" : "You lose!"}
                </p>

            </div>
        );
    }
}

