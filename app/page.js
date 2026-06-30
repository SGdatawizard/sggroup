const tools = [
  {
    title: "SG Data",
    href: "https://www.sggbdata.com/password",
    image: "/sg-data.png",
    description:
      "A full catalogue of passed GB items auctioned with Stanley Gibbons.",
  },
  {
    title: "SG Anthology",
    href: "https://sganthology-gzk7.vercel.app/",
    image: "/sg-anthology.png",
    description:
      "A sales tool to help match customers to their categories, and sell more stock.",
  },
  {
    title: "SG Auctions",
    href: "https://sg-auctions.vercel.app/",
    image: "/sg-auctions.png",
    description:
      "A full auction stats tracker to map how our auctions are performing.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="masthead">
        <div className="brand">
          <span className="monogram">SG</span>
          <span className="wordmark">
            Stanley <em>Gibbons</em>
          </span>
        </div>
        <p className="eyebrow">Internal toolkit · Est. 1856</p>
        <h1 className="title">Three tools, one drawer.</h1>
        <p className="lede">Pick a tool to get to work.</p>
      </header>

      <section className="album" aria-label="Tools">
        {tools.map((tool) => (
          <a
            key={tool.title}
            className="stamp"
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="stamp-inner">
              <div className="stamp-head">
                <h2 className="stamp-title">{tool.title}</h2>
                <span className="open">Open ↗</span>
              </div>
              <div className="shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.image} alt={`${tool.title} screenshot`} />
              </div>
              <p className="desc">{tool.description}</p>
            </div>
          </a>
        ))}
      </section>

      <footer className="footer">
        <span>Stanley Gibbons</span>
        <span className="sep">·</span>
        <span>For internal use</span>
      </footer>
    </main>
  );
}
