import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


// layout is the parent of sidedrawer and toolbar.
// A click on both will trigger the sidedrawer

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerToggle = () => {
        this.setState({showSideDrawer: false});
     };

    render() {
        return (
            <Aux>
                <SideDrawer closed={this.sideDrawerToggle}
                            open={this.state.showSideDrawer}/>
                <Toolbar/>
                <main className={classes.Content}> {this.props.children} </main>
            </Aux>
            )
  }
}

export default Layout;