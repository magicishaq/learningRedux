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
const incrementAction = {type: "INCREMENT", payload: 5}; 
const reducer = (state, action) => state


//make a store

//reducer is stuff goes in, stuff comes out two goes in, one comes out
//takes in a state and action and spits out a new state
const store = createStore(reducer)

console.log(store)




export default makeItBig; 