import { useContext, useState } from 'react';
import StateContext from '../context';

const Cat = () => {
    const [name, setName] = useState('');
    const [value, dispatch] = useContext(StateContext);
    const { petName } = value;

    const _handleClick = (type) => {
        dispatch({
            type,
            payload: name,
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
            <button type='button' onClick={() => _handleClick('ACTION_EAT')}>
                eat
            </button>
            <button type='button' onClick={() => _handleClick('ACTION_NAP')}>
                nap
            </button>
        </>
    );
};

export default Cat;
