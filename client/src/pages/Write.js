import React , { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";



function Write(){

    const [value , setValue] = useState('');
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState('');


    
    const upload = async () => {
        try {
          const formData = new FormData();
          formData.append('file', file);
          const res = await axios.post('/upload', formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };
      


    const handleClick = async e => {
      
        e.preventDefault()
        const imgUrl = upload()

        try {
            
        } catch (err) {

            console.log(err)
            
        }

    }


  return(
    <>
     
    <div className='add'>
        <div className='content'>
            <input type="text" placeholder='Title' onChange={e=>setTitle(e.target.value)} />
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

                <input type ="file" id='file' name=''  onChange={e=>setFile(e.target.files[0])}/>
                <label htmlFor='file'> Upload Image</label>

                <div className='buttons'>
                    <button>Save us draft</button>
                    <button onClick={handleClick}>Publish</button>
                </div>



            </div>
            <div className='item'>
                <h1>Category</h1>

                <input type='radio' name='cat' id='science' onChange={e=>setCat(e.target.value)} />
                <label htmlFor='mobile'>Mobile</label>

                <input type='radio' name='cat' id='tec'  onChange={e=>setCat(e.target.value)}/>
                <label htmlFor='cloud'>Cloud</label>

                <input type='radio' name='cat' id='art'  onChange={e=>setCat(e.target.value)}/>
                <label htmlFor='ai'>AI</label>

                <input type='radio' name='cat' id='design' onChange={e=>setCat(e.target.value)} />
                <label htmlFor='machine'>Machine</label>

            </div>

        </div>
        
     </div>

       


    
    </>


  );



}
export default Write;