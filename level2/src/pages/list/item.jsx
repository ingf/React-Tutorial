export default class Item extends React.Component {
    static propTypes = {
        data: React.PropTypes.shape({
            id: React.PropTypes.any,
            name: React.PropTypes.string,
            poster_url: React.PropTypes.string,
            detail: React.PropTypes.string
            // photos: React.PropTypes.arrayOf(React.PropTypes.shape({
            //     url: React.PropTypes.string
            // }))
        })
    }

    render() {
        let info = this.props.data;
        let styles = this.props.styles;

        return <div className={styles.item}>
            <img src={info.poster_url} className={styles.avatar}/>
            <div className={styles.name}>{info.name}</div>
            <p className={styles.desc}>{info.detail}</p>
        </div>
    }
}
