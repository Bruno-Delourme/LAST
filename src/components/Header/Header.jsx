import React from 'react'
import PlatformList from '../PlatformList/PlatformList'
import './Header.css'

function Header({ selectedPlatform, onPlatformSelect }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" 
            alt="Logo" 
            className="logo"
          />
        </div>
        <div className="title-container">
          <h1>LAST <span>movie</span></h1>
          <span className="subtitle">Dernières Sorties</span>
        </div>
      </div>
      <PlatformList 
        selectedPlatform={selectedPlatform}
        onPlatformSelect={onPlatformSelect}
      />
    </header>
  )
}

export default Header 