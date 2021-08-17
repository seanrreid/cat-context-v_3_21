import { useReducer } from 'react';
import { StateProvider } from './context';
import Cat from './components/Cat';
import CatDoing from './components/CatDoing';

function App() {
    const initialState = {
        activity: ['purring'],
        petName: 'Kitty',
    };

    const contextReducer = (state, action) => {
        switch (action.type) {
            case 'ACTION_EAT':
                return {
                    activity: [...state.activity, action.payload.activity],
                    petName: action.payload.name,
                };
            case 'ACTION_NAP':
                return {
                    activity: [...state.activity, action.payload.activity],
                    petName: action.payload.name,
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
                <CatDoing />
            </StateProvider>
        </div>
    );
}

export default App;
