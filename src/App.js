import { useReducer } from 'react';
import { StateProvider } from './context';
import Cat from "./components/Cat"

function App() {
    const initialState = {
        activity: 'purring',
    };

    const contextReducer = (state, action) => {
        switch (action.type) {
            case 'ACTION_EAT':
                return {
                    activity: 'eating',
                };
            case 'ACTION_NAP':
                return {
                    activity: 'napping',
                };
            default:
                return state;
        }
    };

    return (
        <div className='App'>
            <StateProvider value={useReducer(contextReducer, initialState)}>
                <h1>Context Demo</h1>
                <Cat />
            </StateProvider>
        </div>
    );
}

export default App;
