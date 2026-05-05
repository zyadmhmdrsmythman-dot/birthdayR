import React, { useState, useEffect } from 'react';
import './BirthdayCard.css'; // سننشئ هذا الملف أيضاً
import profileImage from './profile.jpg';

const BirthdayCard = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [heartsVisible, setHeartsVisible] = useState(false);

  useEffect(() => {
    // تسلسل الرسوم المتحركة
    const timeline = [
      () => setTimeout(() => setAnimationStep(1), 500),
      () => setTimeout(() => setAnimationStep(2), 1500),
      () => setTimeout(() => setAnimationStep(3), 2500),
      () => setTimeout(() => {
        setAnimationStep(4);
        setHeartsVisible(true);
      }, 3500),
    ];

    timeline.forEach((step, index) => step());

    return () => {
      timeline.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="birthday-container">
      {/* الخلفية المتحركة */}
      <div className="stars"></div>
      
      القلب الرئيسي
      {/* <div className={`main-heart ${animationStep >= 1 ? 'animate' : ''}`}>
        💖
      </div> */}
      <div className={`card ${animationStep >= 2 ? 'slide-in' : ''}`}>
        <div className="card-header">
          {/* الصورة الدائرية الجديدة */}
          <div className="profile-image">
            <img 
  src={profileImage} 
  alt="Rawan Ayman"
  className="profile-img"
/>
            <div className="image-glow"></div>
          </div>
        </div>
      {/* بطاقة التهنئة */}
      <div className={`card ${animationStep >= 2 ? 'slide-in' : ''}`}>
        <div className="card-header">
          <div className="tooth-emoji">🦷✨</div>
          <h1>عيد ميلاد سعيد يا دكتورة قلبي! 🦷💕</h1>
        </div>

        <div className="card-body">
          <p className="romantic-text">
            كل سنةوانتي طيبة يا أجمل دكتورة في الدنيا🌟<br/>
            أنتِ لستِ مجرد طبيبة أسنان،<br/>
            بل اجمل شيء في الحياة✨🦷
          </p>
          
          <div className="special-message">
            <div className="tooth-icon">🦷</div>
            <p>
               يارب كل السنين في صحة و عافية ياست البنات😍<br/>
               💖
            </p>
            <div className="tooth-icon">🦷</div>
          </div>

          <div className="wishes">
            <span>🎂 كل سنة وأنتِ طيبة 🎉</span>
            {/* <span>💝 من قلب يدق لكِ بقوة 💝</span> */}
          </div>
        </div>

        <div className="card-footer">
          {/* <button 
            className={`love-button ${animationStep >= 3 ? 'pulse' : ''}`}
            onClick={() => {
              setHeartsVisible(true);
              setAnimationStep(5);
            }}
          >

          </button> */}
        </div>
      </div>

      {/* قلوب متحركة */}
      {heartsVisible && (
        <div className="hearts-container">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="floating-heart"
              style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              💖
            </div>
          ))}
        </div>
      )}

      {/* تأثير البريق */}
      {/* <div className={`sparkles ${animationStep >= 4 ? 'show' : ''}`}>
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
      </div> */}
    </div> 
    </div> 
  );
};
export default BirthdayCard;