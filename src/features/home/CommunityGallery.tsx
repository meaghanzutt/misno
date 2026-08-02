const galleryItems = [
  {
    title: 'Coffee meetups',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    alt: 'Friends sharing coffee at a neighborhood café',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    title: 'Creative sessions',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
    alt: 'A group collaborating during a creative session',
    className: 'md:col-span-5',
  },
  {
    title: 'Weekend adventures',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    alt: 'People gathering outdoors during a weekend adventure',
    className: 'md:col-span-5',
  },
] as const;

export function CommunityGallery() {
  return (
    <section className="section-space border-y border-border bg-surface" aria-labelledby="community-gallery-title">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="eyebrow">Community in action</p>
          <h2 id="community-gallery-title" className="section-title mt-4">This is what showing up can look like.</h2>
          <p className="mt-4 body-muted">Small gatherings, shared interests, and room to create something together.</p>
        </div>
        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-12 md:auto-rows-[180px]">
          {galleryItems.map((item) => (
            <figure key={item.title} className={`community-gallery-card ${item.className}`}>
              <img src={item.image} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
