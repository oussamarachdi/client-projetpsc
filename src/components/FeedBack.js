import React from 'react';
import '../Styles/Feedback.css'; // Import the CSS file for styling

const Feedback = ({ emailSent, onReturnToForm }) => {
  return (
    <div className="feedback-container">
      {emailSent ? (
        <div className="success-message">
          <h2>E-mail envoyé avec succès !</h2>
          <p>Merci pour votre don. Votre soutien est grandement apprécié et nous aidera à poursuivre notre important travail.</p>
          <p>Si vous avez des questions ou si vous avez besoin d’aide, n’hésitez pas à nous contacter. Merci encore !</p>
          <button className="btn-return" onClick={onReturnToForm}>Retour au formulaire</button>
        </div>
      ) : (
        <div className="error-message">
          <h2>Error Sending Email</h2>
          <p>There was an error sending your donation request. Please try again later.</p>
          <button className="btn-return" onClick={onReturnToForm}>Retour au formulaire</button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
