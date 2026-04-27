import { useState } from 'react'
import { TEAMS, SCHEDULE, RESULTS, REPLAYS } from '../data'

function ScoreDisplay({ r }) {
  if (!r) return <span className="score pending">— · —</span>
  const [sa, sb] = r
  return (
    <span className="score">
      <span className={sa > sb ? 'winner' : 'loser'}>{sa}</span>
      {' – '}
      <span className={sb > sa ? 'winner' : 'loser'}>{sb}</span>
    </span>
  )
}

function ReplayButtons({ replayList }) {
  if (!replayList || replayList.length === 0) {
    return <span className="replay-btn disabled">Sin repetición</span>
  }
  return (
    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      {replayList.map((url, i) => (
        <a
          key={i}
          className="replay-btn"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          ▶ Game {i + 1}
        </a>
      ))}
    </div>
  )
}

function JornadaCard({ jd }) {
  const hasAny = jd.matches.some((_, idx) => RESULTS[`j${jd.j}_m${idx}`] !== null)
  if (!hasAny) return null

  const allPlayed = jd.matches.every((_, idx) => RESULTS[`j${jd.j}_m${idx}`] !== null)
  const [open, setOpen] = useState(true)

  return (
    <div className="jornada-card">
      <div className="jornada-header" onClick={() => setOpen(o => !o)}>
        <span className="jornada-title">Jornada {jd.j}</span>
        <div className="jornada-meta">
          <span className={`badge ${allPlayed ? 'badge-played' : 'badge-next'}`}>
            {allPlayed ? 'Completada' : 'En curso'}
          </span>
          <span className={`chevron${open ? ' open' : ''}`}>▾</span>
        </div>
      </div>
      <div className={`jornada-body${open ? '' : ' closed'}`}>
        {jd.matches.map((m, idx) => {
          const key = `j${jd.j}_m${idx}`
          const [a, b] = m
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
              <ScoreDisplay r={RESULTS[key]} />
              <ReplayButtons replayList={REPLAYS[key]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function History() {
  const played = SCHEDULE.filter(jd =>
    jd.matches.some((_, idx) => RESULTS[`j${jd.j}_m${idx}`] !== null)
  )
  if (!played.length) {
    return <p className="empty">Todavía no hay resultados registrados.</p>
  }
  return (
    <div>
      {played.map(jd => <JornadaCard key={jd.j} jd={jd} />)}
    </div>
  )
}