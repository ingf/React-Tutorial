import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-component'
import Item from './item'
// import * as Api from 'utils/api'

import styles from './style'
import LIST from './data'

export default class List extends React.Component {
   
    state = {
        list: LIST,
        current: false
    }

    componentDidMount() {
        // let that = this;
        // Api.jsonp('/cgi/movie/city', {cityId:10}).
        //     then((resp) => {
        //         that.setState({ list: resp.content.data.list }) 
        //     })

    }

    onItemClick(item) {
        this.setState({
            current: item
        });
    }

    render() {
        let list = this.state.list;
        let current = this.state.current;
        let iscurrent = (item) => {
            return current && current.id === item.id;
        }

        return <div className={styles.page}>
            <ul className={styles.list}>
                { 
                    list.length && 
                    list.map((item, index) => {
                        return <li className={classnames(styles.li, {[styles.current]: iscurrent(item)})} key={index} onClick={this.onItemClick.bind(this, item)}>
                            <div style={{backgroundImage: 'url('+ item.poster_url + ')'}} className={styles.img}></div>
                            <p className={styles.name}>{item.name}</p>
                        </li>
                    })
                }
            </ul>
            { current && <Item styles={styles} data={current}/> }
            <div className={styles['back-home']}>
                <Link href='/' className={styles.link}>Back home</Link>
            </div>
        </div>
        
    }

}
