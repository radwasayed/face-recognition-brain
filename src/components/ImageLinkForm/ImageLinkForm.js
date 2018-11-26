import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center-f'>
                <div className='form pa4 br3 shadow-5'>
                    <input type="text" className='f4 br4 pa2 w-70 center' onChange={onInputChange}/>
                    <button className='w-30 grow f3 link pv2 ph3 dib white bg-light-purple br4' onClick={onPictureSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
};

export default ImageLinkForm;