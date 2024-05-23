import React, { useState, useEffect,useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UserContext } from '../../Context/Context';
import "./TextEditor.css"

function TextEditor() {
     // context data
     const {data,setData} = useContext(UserContext);
     

    const [editorHtml, setEditorHtml] = useState({});

    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['clean']
        ],
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
    ];

    const handleChange = (html) => {
        setEditorHtml(html);
        const data = JSON.parse(localStorage.getItem('editorData')) || [];
        data.push({ html });
        localStorage.setItem('editorData', JSON.stringify(data));
    };

    useEffect(() => {
        let formattedData = '';
    Object.keys(data).forEach(key => {
        formattedData += `${key}: ${data[key]}<br>`;
    });
    
    setEditorHtml(formattedData);
    console.log(data);
        console.log(data);
    }, [data]); // Update when formData changes

    return (
        <div className='text-editor-container'>
            <ReactQuill
                theme="snow"
                value={editorHtml}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                className='text-editor'
                
            />
        </div>
    );
}

export default TextEditor;