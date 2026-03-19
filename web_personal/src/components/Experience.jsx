import { useInView } from '../hooks/useInView'

const jobs = [
  {
    company: 'Wimad',
    role: 'IT Specialist',
    period: '2023 — 2025',
    bullets: [
      'Led development of React application serving 10k+ daily active users',
      'Improved page performance by 40% through code splitting and lazy loading',
      'Mentored junior developers and ran weekly code reviews',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section className="section section-alt" id="experience">
      <div className="container" ref={ref}>
        <p className="label">// experience</p>
        <h2 className={`section-title fade-in${inView ? ' visible' : ''}`}>
          Work History
        </h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`timeline-item fade-in${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15 + 0.1}s` }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-desc">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
