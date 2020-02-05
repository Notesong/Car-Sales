import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            // creates a new array for 'additionalFeatures' that contains only features not being added to 'car.features' 
            const filteredAdditionalFeaturesArray = state.additionalFeatures.filter(item => action.payload.id !== item.id);
            return {
                ...state,
                car: {
                    ...state.car,
                    // adds the feature to 'car.features' that the user wants to add to the car
                    features: [...state.car.features, action.payload]
                },
                // sets 'additionalFeatures' to the array filtered above
                // this effectively removes the feature from 'additionalFeatures' because the user wants to buy it.
                // the feature is placed in 'car.features' instead
                additionalFeatures: filteredAdditionalFeaturesArray,
                // adjusts the current 'additionalPrice' using the feature's price
                additionalPrice: state.additionalPrice + action.payload.price
            }
        case REMOVE_FEATURE:
            // creates a new array for 'car.features' that contains only features not being returned to 'additionalFeatures'
            const filteredFeaturesArray = state.car.features.filter(item => action.payload.id !== item.id);
            return {
                ...state,
                car: {
                    ...state.car,
                    // sets the current 'car.features' to the filtered array
                    // this effectively removes the feature from 'car.features' that the user no longer wants
                    // the feature is placed back in 'additionalFeatures' instead
                    features: filteredFeaturesArray
                },
                // puts the feature the user wants to remove from 'car.features' back into the 'additionalFeatures' array
                additionalFeatures: [...state.additionalFeatures, action.payload],
                // adjusts the current 'additionalPrice' using the feature's price
                additionalPrice:  state.additionalPrice - action.payload.price
            }
        default:
            return state;
    }
};