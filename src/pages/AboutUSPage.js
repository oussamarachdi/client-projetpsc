import React from 'react'
import '../Styles/AboutUsPage.css'

const AboutUSPage = () => {
  return (
    <div className='about-us-page'>
        <div className='header'>
            <h1>About-Us</h1>
        </div>

        <div className='about-us-content'>
          <div className='mission-text'>
          <p className='fr'>
            Un groupe d'étudiants motivés se réunit dans une salle de classe, animés par une seule idée : faire une différence dans la vie des autres. Leur mission est claire : concevoir un projet caritatif qui aura un impact positif sur la communauté. Les discussions animées résonnent dans la salle alors qu'ils planifient les détails, partageant leurs idées avec enthousiasme. Certains écrivent frénétiquement sur des tableaux blancs, tandis que d'autres tapotent sur leurs ordinateurs portables, recherchant des informations cruciales. Malgré les défis qui les attendent, leur détermination ne faiblit pas. Ils sont unis par un but commun : réussir pour aider ceux dans le besoin.
            </p>
            <p className='ar'>
            مجموعة من الطلاب المتحمسين يجتمعون في قاعة دراسية، محمومين بفكرة واحدة: إحداث فرق في حياة الآخرين. مهمتهم واضحة: تصميم مشروع خيري سيكون له تأثير إيجابي على المجتمع. ترتدى النقاشات الحماسية في القاعة بينما يخططون للتفاصيل، مشاركين أفكارهم بحماس. يكتب البعض بشكل مفرط على السبورات البيضاء، بينما يقوم البعض الآخر بالتحقق من معلومات حاسمة على أجهزة الكمبيوتر المحمولة. على الرغم من التحديات التي تنتظرهم، إلا أن عزيمتهم لا تتزعزع. إنهم متحدون من خلال هدف مشترك: النجاح لمساعدة أولئك الذين في حاجة.
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