import React , { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation , useNavigate } from 'react-router-dom';
import moment from 'moment';



function Write(){
    
    const state = useLocation().state
    const [value , setValue] = useState(state?.title ||"");
    const [title, setTitle] = useState(state?.desc||"");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat ||"");
   
  const navigate = useNavigate();

    
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
        const imgUrl = await upload() 

        try {

            
            state  ? await axios.put(`/posts/${state.id}`,  {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : '',
              })
            : await axios.post(`/posts/`, {
                title,
                desc: value,
                cat,
                img: file ? imgUrl : '',
                date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
              });
              navigate('/');
            
        } catch (err) {

            console.log(err)
            
        }

    }


  return(
    <>
     
    <div className='add'>
        <div className='content'>
            <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)} />
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

                <input type='radio' checked ={cat ==="science"}  name='cat' id='science' value='science' onChange={e=>setCat(e.target.value)} />
                <label htmlFor='mobile'>science</label>

                <input type='radio'  checked ={cat ==="tec"} name='cat' id='tec' value='tec' onChange={e=>setCat(e.target.value)}/>
                <label htmlFor='cloud'>Texhnology</label>

                <input type='radio' checked ={cat ==="art"}  name='cat' id='art'value='art'  onChange={e=>setCat(e.target.value)}/>
                <label htmlFor='ai'>Art</label>

                <input type='radio'  checked ={cat ==="design"} name='cat' id='design' value='design' onChange={e=>setCat(e.target.value)} />
                <label htmlFor='machine'>Design</label>

            </div>

        </div>
        
     </div>

       


    
    </>


  );



}
export default Write;