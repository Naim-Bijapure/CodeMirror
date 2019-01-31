import React, { Component } from 'react';
import { connect } from "react-redux";
import AppContainer from './MainDrawer';

class AppNavigation extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return <AppContainer  screenProps={this.props} />
    }
  }
  
 
  export default connect()(AppNavigation);


