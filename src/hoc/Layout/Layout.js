import React, {Component} from 'react';
import Aux from '../Aux'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'


// layout is the parent of sidedrawer and toolbar.
// A click on both will trigger the sidedrawer

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerToggle = () => {
        this.setState(state => ({showSideDrawer: !state.showSideDrawer}));
     };

    render() {
        return (
            <Aux>
                <SideDrawer toggleProp={this.sideDrawerToggle}
                            open={this.state.showSideDrawer}/>
                <Toolbar toggleProp={this.sideDrawerToggle}/>
                <main className={classes.Content}> {this.props.children} </main>
            </Aux>
            )
  }
}

export default Layout;