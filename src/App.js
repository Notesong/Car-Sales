// modules
import React from 'react';
import { connect } from 'react-redux';

import { addFeature, removeFeature } from "./actions";

// components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  const removeFeatureApp = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const addFeatureApp = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
      <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} removeFeature={removeFeatureApp}/>
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={addFeatureApp} />
          <Total car={props.car} additionalPrice={props.additionalPrice} />
        </div>
      </div>      
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
