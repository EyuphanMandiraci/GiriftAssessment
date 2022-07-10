import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export default function Main(){
    const store = createStore(reducers, applyMiddleware(thunk));
    return (
        <StoreProvider store={store}>
            <PaperProvider>
                <App/>
            </PaperProvider>
        </StoreProvider>
    );
}


registerRootComponent(Main);
