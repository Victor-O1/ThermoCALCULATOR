import React from 'react';
import isot from "../assets/isot.jpg"
import isob from "../assets/isob.jpg"
import isoc from "../assets/isoc.png"
import adia from "../assets/adia.jpg"

const Card = (props) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{props.head}</h2>
            <p className="text-gray-700">{props.children}</p><br />
            <div className='flex justify-center'>
                <img className="items-center " src={props.img == "isot" ? isot : null} />
                <img className="items-center " src={props.img == "isob" ? isob : null} />
                <img className="items-center " src={props.img == "isoc" ? isoc : null} />
                <img className="items-center " src={props.img == "adia" ? adia : null} /></div>
        </div>
    );
};

export default Card;