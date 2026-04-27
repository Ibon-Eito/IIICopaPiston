import { TEAMS, SCHEDULE, RESULTS } from '../data'

function calcStandings() {
  const stats = {}
  for (const id in TEAMS) stats[id] = { pts: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, played: 0 }

  for (const jd of SCHEDULE) {
    jd.matches.forEach((m, idx) => {
      const r = RESULTS[`j${jd.j}_m${idx}`]
      if (!r) return
      const [a, b] = m
      const [sa, sb] = r
      stats[a].gf += sa; stats[a].ga += sb; stats[a].played++
      stats[b].gf += sb; stats[b].ga += sa; stats[b].played++
      if (sa > sb)      { stats[a].pts += 3; stats[a].w++; stats[b].l++ }
      else if (sb > sa) { stats[b].pts += 3; stats[b].w++; stats[a].l++ }
      else              { stats[a].pts++; stats[b].pts++; stats[a].d++; stats[b].d++ }
    })
  }

  return Object.entries(stats)
    .map(([id, s]) => ({ id, ...s }))
    .sort((a, b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf)
}

export default function Standings() {
  const rows = calcStandings()
  return (
    <div className="standings-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>V</th>
            <th>D</th>
            <th>GF</th>
            <th>GC</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const t = TEAMS[r.id]
            return (
              <tr key={r.id}>
                <td className={`rank-cell${i === 0 ? ' gold' : ''}`}>{i + 1}</td>
                <td>
                  <span className="team-pill">
                    <span className="team-dot" style={{ background: t.color }} />
                    {t.name}
                  </span>
                </td>
                <td>{r.played}</td>
                <td>{r.w}</td>
                <td>{r.l}</td>
                <td>{r.gf}</td>
                <td>{r.ga}</td>
                <td className="pts-cell">{r.pts}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}