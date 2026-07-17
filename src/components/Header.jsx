import React, { useRef, useState } from 'react';
import './Header.css';
import defaultAvatar from '../assets/avatar.jpg';

const Header = ({ title = 'Happy Birthday Jeev' }) => {
  const fileInputRef = useRef(null);
  const [avatarSrc, setAvatarSrc] = useState(defaultAvatar);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarSrc(url);
    }
  };

  return (
    <header className="site-header">
      <div className="header-brand">
        <span className="header-heart">💚</span>
        <span className="header-title">{title}</span>
        <span className="header-heart">💚</span>
      </div>

      <div className="avatar-wrapper" onClick={handleAvatarClick} title="Click to upload your photo">
        <div className="avatar-ring">
          <div className="avatar-inner">
            {avatarSrc ? (
              <img src={avatarSrc} alt="Your photo" className="avatar-img" />
            ) : (
              <div className="avatar-placeholder">
                <span className="avatar-icon">📷</span>
                <span className="avatar-hint">Upload</span>
              </div>
            )}
          </div>
        </div>
        <div className="avatar-glow" />
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        id="avatar-upload"
      />
    </header>
  );
};

export default Header;
