import teamReducer from './teamReducer'
import playerReducer from './playerReducer'
import nationReducer from './nationReducer'
import positionReducer from './positionReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    teams: teamReducer,
    players: playerReducer,
    nations: nationReducer,
    positions: positionReducer
})

export default rootReducer