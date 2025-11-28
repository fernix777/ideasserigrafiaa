import React from 'react'

const LOGO_SRC = '/images/logo-ideas-sin-fondo.png'

function Logo({ className = '', alt = 'Ideas Serigrafía' }) {
  return <img src={LOGO_SRC} alt={alt} className={className} loading="lazy" />
}

export default Logo
