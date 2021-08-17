import { useContext, useState } from 'react';
import StateContext from '../context';

const Cat = () => {
    const [name, setName] = useState('');
    const [value, dispatch] = useContext(StateContext);
    const { petName } = value;

    const _handleClick = (type, activity) => {
        dispatch({
            type,
            payload: { name, activity },
        });
    };

    const _handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    return (
        <>
            <input type='text' onChange={(e) => _handleChange(e)} />
            <p>Name: {petName}</p>
            <button type='button' onClick={() => _handleClick('ACTION_EAT', 'eating')}>
                eat
            </button>
            <button type='button' onClick={() => _handleClick('ACTION_NAP', 'sleeping')}>
                nap
            </button>
        </>
    );
};

export default Cat;
