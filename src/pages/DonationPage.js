import React, { useState } from 'react'
import '../Styles/DonationPage.css'
import MyMap from '../components/MyMap'
import axios from "axios"
import DragDropImageUploader from '../components/DragDropImageUploader'
import DateRangeComp from '../components/DateRangeComp'

const DonationPage = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quartier, setQuartier] = useState('');
  const [images, setImages] = useState([]);
  const [phone, setPhone] = useState('');
  const [availableTime, setAvailableTime] = useState({
    startDate: '',
    endDate: ''
  });
  const [address, setAddress] = useState({
    lat: '',
    lng: ''
  });
  const [errors, setErrors] = useState({
    inValidName:'',
    inValidImage: '',
    inValidPhoneNumber: '',
    EmptyFields: '',
    inValidAvailableTime: ''
  });

  const handleAddress = (data) => {
    setAddress({
      lat: data[0],
      lng: data[1]
    });
  };

  const handleAvailableTime = (data) => {
    setAvailableTime({
      startDate: data[0],
      endDate: data[1]
    });
  };

  const handleImageChange = (selectedImages) => {
    const validImages = selectedImages.filter((image) => image.type.startsWith('image/'));
    if(validImages.length !== selectedImages.length){
      setErrors({...errors, inValidImage:"Invalid image type.Please Select Only Images"})
      return;
    }
    setImages((prevImages) => ([...prevImages, ...validImages]))
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // VERIFY THE SUBMISSION
    // Initialize error object
    let newErrors = {
      inValidImage: '',
      inValidPhoneNumber: '',
      EmptyFields: '',
      inValidAvailableTime: ''
    };
    // Check for empty fields
    if (!type || !phone || !address.lat || !address.lng || !name || !quartier) {
      console.log(type, name, phone, address)
      newErrors.EmptyFields = 'You should Fill The Required Fields!!!';
    }
  
    // Check if the Number is Valid
    if (isNaN(phone) || phone.length !== 8) {
      newErrors.inValidPhoneNumber = "Phone Number Not Valid Please Enter It Correctly";
    }

    // Check if the available time is Valid
    const today = new Date();


    const startDay = new Date(availableTime.startDate);

    const endDay = new Date(availableTime.endDate);




    if (startDay.getTime() < today.getTime() || endDay.getTime() < today.getTime()) {
      newErrors.inValidAvailableTime = "Date Invalid"; // If either start or end date is in the future
    }
    
    if(!isNaN(name)){
      newErrors.inValidName = "Nom Invalid";
    }
    // Check if the image extension is valid
    if (!(images.length === 0)) {
      for (const image of images) {
        if (!image.type || !image.type.startsWith('image/')) {
          newErrors.inValidImage = "Invalid image type. Please select only image files.";
          break;
        }
      }
    }
    // Set the errors state once
    setErrors(newErrors);

    // Calculate number of errors
    let nbError = 0
    let errorArray = Object.values(newErrors)
    for(let i=0; i<errorArray.length; i++){
      if(errorArray[i] !== ''){
        nbError = nbError + 1 
      }
    }
   

    // Condition if the Submission is Valid or Not
    if (!(nbError > 0)) {

      try{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('quartier', quartier);
        formData.append('address', JSON.stringify(address)); // Convert to JSON if it's an object
        formData.append('tel', phone);
        formData.append('startDate', availableTime.startDate);
        formData.append('endDate', availableTime.endDate);
        images.forEach((image) => {
          formData.append('img', image)
        }); // Assuming imageFile is a File object

        const response = await axios.post("http://localhost:4000/api", formData,{      
          headers : {
            'Content-Type':'multipart/form-data'
          }
        })
        console.log(response.data)
      } catch(error){
        console.log(error);
      }
      
      
    }
  };

  
  return (
    <div>
      <div className='header'>
        <h1>About Us</h1>
      </div>
      <section className='Donation-Section'>


        <div className='donation-information'>
          <h3>Donation Informations</h3>
        <form  onSubmit={handleSubmit}  encType='multipart/form-data'>
        <div>
          <label htmlFor='NP'>Nom et Prénom:</label>
          <input type='text' placeholder='Nom et Prénom' onChange={(event) => setName(event.target.value)}/>
          {(errors.inValidName && !errors.EmptyFields) ? <span>{errors.inValidName}</span> : ''}
        </div>
        <label htmlFor='phone'>Phone Number : </label>
          <input type='text' id='phone' name='phone' placeholder='+216 (XXX) XXX-XXXX' onChange={(event) => setPhone(event.target.value)}/>
          {(errors.inValidPhoneNumber && !errors.EmptyFields) ? <span>{errors.inValidPhoneNumber}</span> : ''}
        
        <select name='typeDon' id='typeDon' onChange={(event) => setType(event.target.value)}>
            <option value="">Type Of Donation</option>
            <option value="Medicament">Medicament</option>
            <option value="Vetement">Vetement</option>
          </select>

          <select name='quartier' id='quartier' onChange={(event) => setType(event.target.value)}>
            <option value="">Votre quartier</option>
            <option value="Akouda">Akouda</option>
            <option value="Bouficha">Bouficha</option>
            <option value="Enfida">Enfida</option>
            <option value="Hammam Sousse">Hammam Sousse</option>
            <option value="Hergla">Hergla</option>
            <option value="Kalaa Kebira">Kalaa Kebira</option>
            <option value="Kalaa Seghira">Kalaa Seghira</option>
            <option value="Kondar">Kondar</option>
            <option value="M'saker">M'saken</option>
            <option value="Sidi Bou Ali">Sidi Bou Ali</option>
            <option value="Sidi El Hani">Sidi El Hani</option>
            <option value="Sousse Jawhara">Sousse Jawhara</option>
            <option value="Sousse Médiana">Sousse Médina</option>
            <option value="Sousse Riadh">Sousse Riadh</option>
            <option value="Sousse Sidi Abdelhamid">Sousse Sidi Abdelhamid</option>
          </select>

          <DragDropImageUploader onImageChange={handleImageChange}/>
          {(errors.inValidImage && !errors.EmptyFields) ? <span>{errors.inValidImage}</span> : ''}

          
          <div>
            <label>Click the Map to get your position</label>
            <MyMap onAdressChange={handleAddress}/>
          </div>
          {errors.EmptyFields ? <span>{errors.EmptyFields}</span> : ''}
          
          <div className='date'>
            <label htmlFor='time'>Available Time :</label>
            <DateRangeComp onDateChange={handleAvailableTime}/>
            {(errors.inValidAvailableTime && !errors.EmptyFields) ? <span>{errors.inValidAvailableTime}</span> : ''}
          </div>
          <input type='submit' className='btn-submit' value="Submit"/>
          
        </form>
          
        </div>
        
        
        
      </section>
    </div>
  )
}

export default DonationPage