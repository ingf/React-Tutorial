import { Link } from 'react-router-component'

// only import in Header
import Header from 'wepiao/Header'

// import styles
import styles from './style'

export default class Home extends React.Component {

  state = {
    menus: [{
      text: 'Home',
      link: '/'
    },{
      text: 'Test',
      link: 'javascript:void(0)'
    },{
      text: 'About',
      link: '/about'
    },{
      text: 'List',
      link: '/list'
    },{
      text: 'Details',
      link: '/details'
    }],
    current: 'Home'
  }

  onMenuClick(index, e) {
    let current = this.state.menus[index];

    this.setState({
        current: current.text
    });
  }

  render() {

    return (
      <div className={styles.home}>
        <Header menus={this.state.menus} onClick={this.onMenuClick.bind(this)}/>
        <h2>This is {this.state.current} page</h2>
      </div>
    )
  }
}
