import React from 'react'
import Classnames from 'classnames'

import styles from './style'

class Hello extends React.Component {
    constructor(){
        super();

        this.state = {
            btn_style: 'btn_default'
        }
    }

    sayHello(e){
        this.setState({
            message: 'Hey, life is a struggle.'
        });
    }

    changeBtnStyle(e) {
        this.setState({
            btn_style: e.target.value
        })
    }

    render(){
        return <div className={styles.container}>
            <div className={styles.select_container}>
                <select name='style' className={styles.select} onChange={this.changeBtnStyle.bind(this)}>
                    <option value='btn_default'>btn-default</option>
                    <option value='btn_info'>btn-info</option>
                    <option value='btn_primary'>btn-primary</option>
                    <option value='btn_success'>btn-success</option>
                    <option value='btn_warning'>btn-warning</option>
                    <option value='btn_block'>btn-block</option>
                </select>
            </div>
            <button className={styles[this.state.btn_style]} onClick={this.sayHello.bind(this)}>Say Hello</button>
            {
                this.state.message && 
                <div className={styles.message}>
                    { this.state.message }
                </div>
            }
        </div>
    }
}

export default Hello
