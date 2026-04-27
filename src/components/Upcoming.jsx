import { TEAMS, SCHEDULE, RESULTS } from '../data'

export default function Upcoming() {
  const upcoming = SCHEDULE.filter(jd =>
    jd.matches.some((_, idx) => RESULTS[`j${jd.j}_m${idx}`] === null)
  )
  if (!upcoming.length) return <p className="empty">Todas las jornadas han sido jugadas. ¡Liga completada!</p>

  const nextJ = upcoming[0].j

  return (
    <div>
      <p className="upcoming-intro">
        Próxima jornada: <strong>Jornada {nextJ}</strong>. Los partidos son al mejor de 3.
      </p>
      {upcoming.map((jd, i) => (
        <div className="jornada-card" key={jd.j}>
          <div className="jornada-header" style={{ cursor: 'default' }}>
            <span className="jornada-title">Jornada {jd.j}</span>
            <span className={`badge ${i === 0 ? 'badge-next' : 'badge-pending'}`}>
              {i === 0 ? 'Próxima' : 'Pendiente'}
            </span>
          </div>
          <div className="jornada-body">
            {jd.matches.map((m, idx) => {
              const [a, b] = m
              const r = RESULTS[`j${jd.j}_m${idx}`]
              if (r !== null) return null
              return (
                <div className="match-row" key={idx}>
                  <div className="match-teams">
                    <span className="team-pill">
                      <span className="team-dot" style={{ background: TEAMS[a].color }} />
                      {TEAMS[a].name}
                    </span>
                    <span className="vs">vs</span>
                    <span className="team-pill">
                      <span className="team-dot" style={{ background: TEAMS[b].color }} />
                      {TEAMS[b].name}
                    </span>
                  </div>
                  <span className="score pending">Best of 3</span>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}