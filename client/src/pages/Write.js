import React , { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



function Write(){

    const [value , setValue] = useState('');

  return(
    <>
     
    <div className='add'>
        <div className='content'>
            <input type="text" placeholder='Title' />
            <ReactQuill theme='snow' value={value} onChange={setValue}/>

        </div>

        <div className='menu'>
            <div className='item'>
                <h1>Publish</h1>
                <span>
                    <b>Status:</b>Draft
                </span>

                <span>
                    <b>Visibility:</b> public
                </span>

                <input type ="file" id='file' name='' />
                <label htmlFor='file'> Upload Image</label>

                <div className='buttons'>
                    <button>Save us draft</button>
                    <button>Uploade</button>
                </div>



            </div>
            <div className='item'>
                <h1>Category</h1>

                <input type='radio' name='cat' id='mobile' />
                <label htmlFor='mobile'>Mobile</label>

                <input type='radio' name='cat' id='cloud' />
                <label htmlFor='cloud'>Cloud</label>

                <input type='radio' name='cat' id='ai' />
                <label htmlFor='ai'>AI</label>

                <input type='radio' name='cat' id='machine' />
                <label htmlFor='machine'>Machine</label>

            </div>

        </div>
        
     </div>

       


    
    </>


  );



}
export default Write;