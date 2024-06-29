
import React from 'react';
import './Botones.css';

import { MdChangeCircle } from "react-icons/md";







interface Props {
    event: (e: any) => void;
    id: string;
}


export const BotonActualizar = (props: Props) => {

    //sdadasdssadsad


    return <div className="">
        <button id={props.id} onClick={() => props.event(props.id)} className="eButton eButtonV">
            <MdChangeCircle size={30} className='icoButtonVerde' />
        </button>

    </div>;


}



