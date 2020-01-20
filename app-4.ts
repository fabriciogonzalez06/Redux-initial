import { Store, createStore } from 'redux';
import { ContadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.action';

const store: Store = createStore(ContadorReducer);


store.subscribe(() => {
    console.log("redux", store.getState());
});

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
