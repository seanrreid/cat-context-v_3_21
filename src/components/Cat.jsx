import { useContext } from 'react';
import StateContext from '../context';

const Cat = () => {
    const [value, dispatch] = useContext(StateContext);
    const { activity } = value;

    const _handleClick = (type) => {
        dispatch({
            type,
        });
    };

    return (
        <>
            <p>The cat is {activity}</p>
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
