const values = [
  { number: '01', title: 'Create', description: 'Bring ideas to life beside people who want to help make them real.' },
  { number: '02', title: 'Connect', description: 'Meet people who share your interests without the pressure of forced networking.' },
  { number: '03', title: 'Contribute', description: 'Help shape experiences, conversations, and the future of the community.' },
] as const;

export function Values() {
  return (
    <section className="section-space" aria-labelledby="values-title">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why people stay</p>
          <h2 id="values-title" className="section-title mt-4">Community feels better when everyone has a part in it.</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="value-block">
              <span className="text-xs font-semibold tracking-[0.16em] text-forest">{value.number}</span>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em]">{value.title}</h3>
              <p className="mt-4 body-muted">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
