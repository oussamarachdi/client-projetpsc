import React, { useState } from 'react';
import '../Styles/DonationPage.css';
import MyMap from '../components/MyMap';
import axios from "axios";
import DragDropImageUploader from '../components/DragDropImageUploader';
import DateRangeComp from '../components/DateRangeComp';
import Feedback from '../components/FeedBack';

const DonationPage = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quartier, setQuartier] = useState('');
  const [images, setImages] = useState([]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
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
    inValidEmail: '',
    EmptyFields: '',
    inValidAvailableTime: ''
  });

  const [submitting, setSubmitting] = useState(false);

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
      setErrors({...errors, inValidImage:"Invalid image type.Please Select Only Images"});
      return;
    }
    setImages(validImages);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors({...errors, inValidEmail: emailRegex.test(event.target.value) ? '' : 'Invalid email address'});
  };

  const handleReturnToForm = () => {
    window.location.reload();
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setSubmitting(true);
    // VERIFY THE SUBMISSION
    // Initialize error object
    let newErrors = {
      inValidImage: '',
      inValidPhoneNumber: '',
      inValidEmail: '',
      EmptyFields: '',
      inValidAvailableTime: ''
    };
    // Check for empty fields
    if (!type || !phone || !address.lat || !address.lng || !name || !quartier || !email) {
      newErrors.EmptyFields = 'You should Fill The Required Fields!!!';
    }
  
    // Check if the Number is Valid
    const phoneRegex = /^(?:\+?216)?(?:\d{8}|(?:(?:2[0-9])|(?:5[0-9])|(?:9[0-5])|(?:7[0-7]))\d{6})$/;
    if (!phoneRegex.test(phone)) {
      newErrors.inValidPhoneNumber = "Numéro de téléphone non valide. Veuillez le saisir correctement.";
    }

    // Check if the email is Valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.inValidEmail = "Adresse e-mail non valide. Veuillez la saisir correctement.";
    }

    // Check if the available time is Valid
    const today = new Date();
    const startDay = new Date(availableTime.startDate);
    const endDay = new Date(availableTime.endDate);
    if (startDay.getTime() < today.getTime() || endDay.getTime() < today.getTime()) {
      newErrors.inValidAvailableTime = "Date Invalid"; // If either start or end date is in the future
    }
    
    // Check Name
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if(!nameRegex.test(name)){
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
    let nbError = Object.values(newErrors).filter(error => error !== '').length;
    if(nbError > 0){
      setSubmitting(false);
      return;
    }

    // Condition if the Submission is Valid or Not
    try{
      const formData = new FormData();
      formData.append('name', name);
      formData.append('type', type);
      formData.append('quartier', quartier);
      formData.append('address', JSON.stringify(address)); // Convert to JSON if it's an object
      formData.append('tel', phone);
      formData.append('email', email);
      formData.append('startDate', availableTime.startDate);
      formData.append('endDate', availableTime.endDate);
      images.forEach((image) => {
        formData.append('img', image)
      }); // Assuming imageFile is a File object
      let baseUrl =
        process.env.REACT_APP_ENV === "develop"
          ? process.env.REACT_APP_BASE_DEV_URL
          : process.env.REACT_APP_BASE_PROD_URL;
      const response = await axios.post(`${baseUrl}/api`, formData, {
        headers : {
          'Content-Type':'multipart/form-data'
        }
      })
      if(response)
      setEmailSent(true);
    } catch(error){
      console.log(error);
      setEmailSent(false);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <div className='header'>
        <h1>Faites un don ici</h1>
      </div>
      <section className='Donation-Section'>
        <div className='donation-information'>
          
          {
            emailSent ? (<Feedback emailSent={emailSent} onReturnToForm={handleReturnToForm}/>) : 
            <>
            <h3>Informations sur les dons</h3>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='field'>
              <label htmlFor='NP'>Nom et Prénom:</label>
              <input type='text' placeholder='Nom et Prénom' onChange={(event) => setName(event.target.value)}/>
              {(errors.inValidName && !errors.EmptyFields) ? <span className='erreur'>{errors.inValidName}</span> : ''}
            </div>
            <div className='field'>
            <label htmlFor='phone'>Numéro de Téléphone :</label>
              <input type='text' id='phone' name='phone' placeholder='+216 (XXX) XXX-XXXX' onChange={(event) => setPhone(event.target.value)} style={{width:'90%'}}/>
              {(errors.inValidPhoneNumber && !errors.EmptyFields) ? <span className='erreur'>{errors.inValidPhoneNumber}</span> : ''}
            </div>

            <div className='field'>
              <label htmlFor='email'>Adresse E-mail :</label>
              <input type='text' id='email' name='email' placeholder='example@example.com' onChange={handleEmailChange} style={{width:'90%'}}/>
              {(errors.inValidEmail && !errors.EmptyFields) ? <span className='erreur'>{errors.inValidEmail}</span> : ''}
            </div>

            <div className='field'>
              <select name='typeDon' id='typeDon' onChange={(event) => setType(event.target.value)}>
                <option value="">Type de Don</option>
                <option value="Medicament">Médicament</option>
                <option value="Vetement">Vêtement</option>
                <option value="Nourriture">Nourriture</option>
              </select>
            </div>

            <div className='field'>
              <select name='quartier' id='quartier' onChange={(event) => setQuartier(event.target.value)}>
                <option value="">Votre quartier</option>
                <option value="Akouda">Akouda</option>
                <option value="Bouficha">Bouficha</option>
                <option value="Enfida">Enfida</option>
                <option value="Sahloul">Sahloul</option>
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
            </div>

            <div className='field'>
              <DragDropImageUploader onImageChange={handleImageChange}/>
              {(errors.inValidImage && !errors.EmptyFields) ? <span className='erreur'>{errors.inValidImage}</span> : ''}
            </div>

            <div className='field'>
              <label>Cliquez sur la carte pour obtenir votre position</label>
              <MyMap onAdressChange={handleAddress}/>
            </div>

            <div className='date field'>
              <label htmlFor='time'>Temps disponible :</label>
              <DateRangeComp onDateChange={handleAvailableTime}/>
              {(errors.inValidAvailableTime && !errors.EmptyFields) ? <span className='erreur'>{errors.inValidAvailableTime}</span> : ''}
            </div>
            <input type='submit' className='btn-submit' value="Submit" disabled={submitting}/>
            {submitting &&  <span className='loading'>Loading...</span>}
            {errors.EmptyFields ? <span className='erreur'>{errors.EmptyFields}</span> : ''}
          </form>
            </>
          }
          
        </div>
      </section>
    </div>
  );
}

export default DonationPage;
