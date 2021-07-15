import {
    createStore, 
    compose,
    applyMiddleware,
    bindActionCreators
} from "redux"

const makeLouder = string => string.toUpperCase(); 
const repeatThreeTimes = string => string.repeat(3); 
const embbolden = string => string.bold(); 

const makeLouderRepeatThreeTimesAndEmbolden = string => repeatThreeTimes(embbolden(makeLouder(string)));  


//compose is just combing these three methods 

const makeItBig = compose(makeLouder, repeatThreeTimes, embbolden)
console.log(makeItBig('hello'))
console.log(makeLouderRepeatThreeTimesAndEmbolden('hello'))

const initState = {value: 0} ;
//only requirment is a type
//why action type is in capital 
//because type is a constant
const INCREMENT = 'INCREMENT'
const ADD = 'ADD'; 

//action creator is a function that depending on the type will change the state in the reducer function
const incrementAction = {type: INCREMENT, payload: 5};
const add = (amount) => ({type: ADD, payload: amount})
const increment = (amount) => ({type: INCREMENT, payload: amount})
const reducer = (state = initState, action) => {
    if(action.type === INCREMENT){
        return {value: state.value + 1}
    }
    if (action.type === ADD) {
        return {value: state.value + action.payload}
    }
}

//makes a store 
const store = createStore(reducer); 


//make a store

//reducer is stuff goes in, stuff comes out two goes in, one comes out
//takes in a state and action and spits out a new state
store.dispatch(increment()); 

console.log(store)

const subscriber = () => console.log('SUBSCRIBER', store.getState()); 

store.subscribe(subscriber);



//rules for reducers
//no mutation
//you hve to return something
//usally one provider
//turn to flat structure

//subscribe is an event listener
//every time the state changes the subcrbe will be called
store.dispatch(increment()); 
store.dispatch(add(10))
store.dispatch(increment()); 
const arr = [makeItBig, store] ; 

export default arr; 