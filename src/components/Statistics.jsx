import { useState, useEffect } from 'react'
import { POKEMONS, TEAMS } from '../data'

function PokemonImage({ name, nickname }) {
  const [image, setImage] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Fetchear datos del pokémon de PokeAPI para obtener la imagen oficial
    const fetchPokemonImage = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
        if (!response.ok) throw new Error('Pokemon not found')
        
        const data = await response.json()
        const imageUrl = data.sprites.other['official-artwork'].front_default
        
        if (!imageUrl) throw new Error('No image available')
        
        // Verificar que la imagen existe
        const img = new Image()
        img.onload = () => setImage(imageUrl)
        img.onerror = () => setError(true)
        img.src = imageUrl
      } catch (err) {
        setError(true)
      }
    }

    fetchPokemonImage()
  }, [name])

  if (error) {
    return <div className="pokemon-image-placeholder">No imagen</div>
  }

  return image ? (
    <img src={image} alt={nickname} className="pokemon-image" />
  ) : (
    <div className="pokemon-image-loading">Cargando...</div>
  )
}

export default function Statistics() {
  // Ordenar pokémon por kills (mayor a menor)
  const sortedPokemons = [...POKEMONS].sort((a, b) => b.kills - a.kills)

  return (
    <div className="statistics-wrap">
      <table>
        <thead>
          <tr>
            <th>Mote</th>
            <th>Nombre</th>
            <th>Equipo</th>
            <th>Kills</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {sortedPokemons.map((pokemon) => {
            const team = TEAMS[pokemon.team]
            return (
              <tr key={pokemon.nickname}>
                <td>{pokemon.nickname}</td>
                <td>{pokemon.name}</td>
                <td>
                  <span className="team-pill">
                    <span className="team-dot" style={{ background: team.color }} />
                    {team.name}
                  </span>
                </td>
                <td className="kills-cell">{pokemon.kills}</td>
                <td className="image-cell">
                  <PokemonImage name={pokemon.name} nickname={pokemon.nickname} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
