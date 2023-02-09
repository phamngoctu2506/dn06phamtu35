import { combineReducers, createStore } from "redux";

const initialState = {
    startSelect: false,
    disableform: false,
    enableConfirm: false,
    confirmation: false,
    user: {
    },
    reservedSeats: [],
    message: ''
}

const rootReducer = combineReducers({
    datVeReducer(state = initialState, action) {
        switch (action.type) {
            case "START_SELECT":
                state.startSelect = true
                state.disableform = true
                state.message = 'Please Select your Seats NOW!'
                state.user.name = action.name
                state.user.numberOfSeat = action.numberOfSeat
                return {...state}
            case "SELECTING":
                state.user.seats = action.mangSeats
                if(Number(state.user.numberOfSeat)  === action.mangSeats.length){
                    state.startSelect = false
                    state.enableConfirm = true
                }
                else{
                    state.startSelect = true
                    state.enableConfirm = false
                }
                return {...state}
            case "CONFIRMATION":
                state.confirmation = action.confirmation
                state.reservedSeats = [...state.reservedSeats, ...state.user.seats]
                return {...state}
            default:
                return {...state}
        }
    }
})

export const store = createStore(rootReducer)