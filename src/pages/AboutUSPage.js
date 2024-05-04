import React from 'react'
import '../Styles/AboutUsPage.css'

const AboutUSPage = () => {
  return (
    <div className='about-us-page'>
        <div className='header'>
            <h1>À propos de nous</h1>
        </div>

        <div className='about-us-content'>
          <div className='mission-text'>
          <p className='fr'>
          Bienvenue, nous sommes un groupe d'étudiants. Nous avons réalisé un projet social caritatif représenté par un site Web qui collecte des dons tels que des vêtements, de la nourriture et tout ce qui dépasse ce qui est nécessaire, cela peut aider les nécessiteux, et en coopération avec. les Scouts Régionaux de Sousse qui se chargeront de collecter ces dons et de les distribuer aux nécessiteux.          </p>
            <br />
            <p className='ar'>
            مرحبا بكم، نحن مجموعة من الطلبة قمنا بإنجاز مشروع إجتماعي خيري متمثل في موقع إلكتروني يقوم بجمع تبرعات كملابس و طعام و كل ما زاد عن الحاجة و بإمكانه مساعدة المحتاج و بالتعاون مع الكشافه الجهوية بسوسة التي ستتكفل بجمع هاته التبرعات وتوزيعها على المحتاجين
            </p>
          </div>
        
        
        <div className='map-container'>
          <iframe 
          title = 'Association Map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25889.86787793083!2d10.631389850000003!3d35.79420094999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302758ffbcf3b1f%3A0xf67d2395e7567b7c!2zU0NPVVQgU09VU1NFINmG2KfYr9mKINis2YfYqSDYs9mI2LPYqSDZhNmE2YPYtNin2YHYqSDYp9mE2KrZiNmG2LPZitip!5e0!3m2!1sfr!2stn!4v1713700742814!5m2!1sfr!2stn" 
          width="600" 
          height="450" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
    </div>
  )
}

export default AboutUSPage