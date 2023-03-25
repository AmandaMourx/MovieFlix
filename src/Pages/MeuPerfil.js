import React from 'react'

export default function MeuPerfil() {
  return (
    <div>MeuPerfil
      <Link to="/"><button>Home</button></Link>
      <Routes>
        <Route path="/" component={App}></Route>
      </Routes>
    </div>
  )
}
