import { useContext } from 'react';
import StateContext from '../context';

const CatDoing = () => {
    const [value] = useContext(StateContext);

    return (
        <>
            <h1>A COMPLETELY DIFFERENT COMPONENT!!</h1>
            <ul>
                {value.activity.map((stuff) => (
                    <li>{stuff}</li>
                ))}
            </ul>
        </>
    );
};

export default CatDoing;
