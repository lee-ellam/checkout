import {Map} from 'immutable';
import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {setInitialState} from './actions';
import reducer from './reducer';
import App from './Components/App';
import {DonationAmountContainer} from './Containers/DonationAmountContainer';

const initialState = Map({
  origin: Map({
    type: 'charity',
    data: Map({
      name: 'Cancer Research UK',
      statement: 'help beat cancer sooner',
      image: '//images.justgiving.com/image/b410179a-2042-4c6b-903b-df106b48fc3c.jpg?template=size200x200'
    })
  }),
  currency: 'GBP'
});

const store = createStore(reducer, initialState);
//store.dispatch(setInitialState(initialState))

const routes = (
  <Route handler={App}>
    <Route path="/donation-amount" handler={DonationAmountContainer} />
    {/*<Route path="/authorization" handler={Auth} />*/}
    <DefaultRoute handler={DonationAmountContainer} />
  </Route>
);

Router.run(routes, Root => React.render(<Provider store={store}>{() => <Root />}</Provider>, document.querySelector('#app')));
