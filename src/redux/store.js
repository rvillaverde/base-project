import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware
  ));

let persistor = persistStore(store)

// const makeStore = (context) => createStore(reducer)

export { store, persistor }
