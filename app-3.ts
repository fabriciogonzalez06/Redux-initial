import { Reducer, Action } from './ngrx-fake/ngrx';
import { ContadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.action';


class Store<T>{

    //private state: T;

    constructor(private reducer: Reducer<T>, private state: T) {
    }

    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}


const state = new Store(ContadorReducer, 10);

console.log(state.getState());


state.dispatch(incrementadorAction);
console.log(state.getState());