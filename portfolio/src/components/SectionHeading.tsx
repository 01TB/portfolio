export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  center = false,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  center?: boolean
}) {
  return (
    <div data-reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow">
        <span aria-hidden="true" className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro && <p className={`section-intro ${center ? 'mx-auto' : ''}`}>{intro}</p>}
    </div>
  )
}
