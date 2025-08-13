'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({label, name}){ 

    const [pickedImage, setPickedImage] = useState();

    const imageInputRef = useRef();

    function handlePickClick(){
        imageInputRef.current.click()
    }

    function handleImageChange(event){
        const file = event.target.files[0]

        if(!file){
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader(); //make data url

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file) // This doesn't return anything but after finishing .onload will trigger
    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet!</p>}
                {pickedImage && <Image src={pickedImage} alt="The image selected by the user" fill />}
            </div>
            <input className={classes.input} type='file' id={name} accept='image/png, image/jpeg' name={name} ref={imageInputRef} onChange={handleImageChange} required />
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick the image
            </button>
        </div>
    </div>
}