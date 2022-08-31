import React from "react"

import logoCura from "assets/img/logo-cura.png"

const KarmenPillComparison = () => {
  return (
    <div className="product-detail__comparison-grid">
      <img src={logoCura} alt="Pill v1.1" className="product-detail__comparison-image product-detail__comparison-image01" />
      <h3 className="product-detail__comparison-title product-detail__comparison-title01">Pill v1.1</h3>
      <ul className="product-detail__comparison-list product-detail__comparison-list01">
        <li>82x34x15mm</li>
        <li>Raspberry Pi Zero W</li>
        <li>micro USB napájení</li>
        <li>micro USB</li>
        <li>Raspberry Pi Camera v2</li>
        <li>1 LED dioda</li>
        <li>Karmen Wizard konfigurace</li>
      </ul>

      <img src={logoCura} alt="Pill v1.2" className="product-detail__comparison-image product-detail__comparison-image02" />
      <h3 className="product-detail__comparison-title product-detail__comparison-title02">Pill v1.2</h3>
      <ul className="product-detail__comparison-list product-detail__comparison-list02">
        <li>98x34x15mm</li>
        <li>Raspberry Pi Zero W</li>
        <li>DC napájení</li>
        <li>micro USB</li>
        <li>Raspberry Pi Camera v2</li>
        <li>1 LED dioda</li>
        <li>Karmen Wizard konfigurace</li>
      </ul>

      <img src={logoCura} alt="Pill v2" className="product-detail__comparison-image product-detail__comparison-image03" />
      <h3 className="product-detail__comparison-title product-detail__comparison-title03">Pill v2</h3>
        <ul className="product-detail__comparison-list product-detail__comparison-list03">
        <li>98x34x15mm</li>
        <li>Raspberry Pi Zero W 2</li>
        <li>DC napájení</li>
        <li>micro USB</li>
        <li>Raspberry Pi Camera v2</li>
        <li>1 LED dioda</li>
        <li>SD karta - WIFI konfigurační soubor</li>
      </ul>

      <img src={logoCura} alt="Pill XL" className="product-detail__comparison-image product-detail__comparison-image04" />
      <h3 className="product-detail__comparison-title product-detail__comparison-title04">Pill XL</h3>
      <ul className="product-detail__comparison-list product-detail__comparison-list04">
        <li>88x71x20mm</li>
        <li>Raspberry Pi 3A+</li>
        <li>DC napájení</li>
        <li>USB-A</li>
        <li>Raspberry Pi Camera v2</li>
        <li>2 LED diody</li>
        <li>SD karta - WIFI konfigurační soubor</li>
      </ul>
    </div>
  )
}

export default KarmenPillComparison
