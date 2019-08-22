import teamReducer from './teamReducer'
import playerReducer from './playerReducer'
import nationReducer from './nationReducer'
import positionReducer from './positionReducer'
import honourReducer from './honourReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    teams: teamReducer,
    players: playerReducer,
    nations: nationReducer,
    positions: positionReducer,
    honours: honourReducer
})

export default rootReducer