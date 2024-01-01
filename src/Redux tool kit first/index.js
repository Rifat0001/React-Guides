import { createStore } from 'redux';
const initial_value = {
    counter: 5,
    privacy: false
}
const counterRedux = (store = initial_value, action) => {
    if (action.type === 'add') {
        return { counter: store.counter + 1 }
    }
    else if (action.type === 'min') {
        return {...store, counter: store.counter - 1 }
    }
    else if (action.type === 'adding') {
        return {...store, counter: store.counter + Number(action.payload.num)}
    }
    else if (action.type === 'subs') {
        return {...store, counter: store.counter - Number(action.payload.num) }
    }
    else if (action.type === 'private') {
        return {...store, privacy: !store.privacy }
    }
    return store;
}
const counterStore = createStore(counterRedux);

export default counterStore;
