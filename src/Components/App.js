import React from 'react';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import {element} from 'prop-types';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header title="Proyecto Final"/>
      <Content >
        {props.children}
      </Content>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: element.isRequired,
}

export default App;