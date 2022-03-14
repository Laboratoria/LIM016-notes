import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteForever, MdCreate } from 'react-icons/md';

export const Notes = () => {
    return (
        <div>
            <div><span>Tittle</span></div>
            <div>
                <MdDeleteForever className='delete-icon' size='1.3em'></MdDeleteForever>
                <MdCreate className='create-icon' size='1.3em'></MdCreate>
            </div>

        </div>

    )
};