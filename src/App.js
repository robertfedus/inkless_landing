import React, { Component } from 'react';
import './App.css';

import Backdrop from './components/Backdrop/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Banner from './components/Banner/Banner';
import Plans from './components/Plans/Plans';
import OrderForm from './components/OrderForm/OrderForm';
import Features from './components/Features/Features';
import Platforms from './components/Platforms/Platforms';
import Footer from './components/Footer/Footer';
import ScrollToTop from 'react-scroll-to-top';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    orderFormSelection: '0'
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  updateOrderFormSelection = n => {
    this.setState({ orderFormSelection: n });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }} className="App">
        <ScrollToTop smooth color="#7a6bee" />
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} close={this.closeSideDrawer} />
        {backdrop}
        <main>
          <Banner id="acasă" />
          <Plans id="prețuri" order={this.updateOrderFormSelection} />
          <OrderForm id="comandă" selected={this.state.orderFormSelection} />
          <Features />
          <Platforms />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
