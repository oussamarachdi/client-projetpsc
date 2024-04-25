import React,{useState, useRef} from 'react'
import '../Styles/DragDropImageUploader.css'

const DragDropImageUploader = ({onImageChange}) => {
    const [images, setImages] = useState([])
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    function selectFiles(){
        fileInputRef.current.click()
    }

    const onFileSelect = (event) => {
        const files = event.target.files;
        const newImages = [];
        if(files.length === 0) return;
        for (let i=0; i<files.length; i++){
            if(files[i].type.split('/')[0] !== 'image') continue;
            const existingImage = images.some((e) => e.name === files[i].name);
            if(!existingImage){
                files[i]['url'] = URL.createObjectURL(files[i]);
                newImages.push(files[i])
                setImages((prevImages) => ([...prevImages, files[i]]))
            }
        
        }
        onImageChange(newImages);
    }

    function deleteImage(index){
        const newImages = images.filter((_,i) => i !== index)
        setImages(
            newImages
        )

        onImageChange(newImages);
    }

    function onDragOver (event){
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }
    function onDragLeave(event){
        event.preventDefault();
        setIsDragging(false);
    }
    function onDrop(event){
        event.preventDefault();
        const newImages = []
        setIsDragging(false);
        const files = event.dataTransfer.files;
        for (let i=0; i<files.length; i++){
            if(files[i].type.split('/')[0] !== 'image') continue;
            if(!images.some((e) => e.name === files[i].name)){
                files[i]['url'] = URL.createObjectURL(files[i])
                newImages.push(files[i])
                setImages((prevImages) => ([...prevImages, files[i]]))
            }
        }
        onImageChange(images)


    }
  return (
    <div className='card'>
        <div className='top'>
            <p>Drag & Drop image uploading</p>
        </div>

        <div className='drag-area' onDragOver={onDragOver} onDragLeave={onDragLeave}  onDrop={onDrop}>
            {
                isDragging ? (
                    <span className='select'>
                         Drop images here
                    </span>
                ) : (
                    <>
                    Drag & Drop image her or {" "}
                    <span className='select' role='button' onClick={selectFiles}>
                        Browse
                    </span>
                    
                    </>
                    
                )
            }
            
            

            <input name='file' type='file' className='file' multiple ref={fileInputRef} onChange={onFileSelect}></input>
        </div>
        <div className='container'>
            {images.map((image, index) => (
                <div className='image' key={index}>
                <span className='delete' onClick={() => deleteImage(index)}>&times;</span>
                <img src={image.url} alt={image.name} />
                </div>
            ))}
            
            
        </div>
    </div>
  )
}

export default DragDropImageUploader