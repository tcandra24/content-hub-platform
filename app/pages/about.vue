<template>
  <div class="flex flex-col w-full">
    <div class="relative w-full max-w-content-measure-wide mx-auto px-space-lg pt-space-2xl pb-space-4xl">
      <div class="absolute -top-12 right-1/4 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="absolute top-1/3 left-10 w-72 h-72 bg-secondary-fixed/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start mb-space-4xl">
        <div class="lg:col-span-5 flex flex-col items-start">
          <div class="relative w-full aspect-square rounded-xl bg-surface-container-high p-space-sm shadow-md transition-all duration-300 hover:shadow-xl group">
            <div class="relative w-full h-full rounded-lg overflow-hidden bg-surface-container-highest">
              <img
                alt="Elena Vance portrait in sunlit studio"
                class="w-full h-full object-cover grayscale-15 contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANsUUSyBs7Cr_g4fCeUJ84X_9eoXBo59JVmyO5_yZcV2mtI_fR5n4YNdKflLFeIEPFRXbm4TSpvDnp2S8CZQGuvMYIGBN1wMdkl9JN7YYeejqeMfcONsgw0Nh2MqYd_c6lD9sZ3Om9M0wSoRzugirqyuWcJgai94dfvQjo41c-YVWVSLzJsD-kb_9kJSiEg8PQMDZ9J2qatfzI558Y5fpxCLsqsRIbiWxkD8X0Z-rnxwqN-cLTuy44"
              />
              <div class="absolute inset-0 bg-linear-to-t from-inverse-surface/60 via-transparent to-transparent opacity-80 mix-blend-multiply"></div>
              <div class="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between text-on-primary font-meta-tag text-meta-tag">
                <span class="inline-flex items-center gap-space-2xs bg-inverse-surface/80 backdrop-blur-md px-space-xs py-space-3xs rounded">
                  <span class="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                  <span>EV // ARCHIVE ID 0984</span>
                </span>
                <span class="tracking-widest uppercase text-surface-container-high">MUNICH / 48.13°N</span>
              </div>
            </div>
          </div>
          <div class="mt-space-md w-full flex items-center justify-between font-meta-tag text-meta-tag text-tertiary">
            <div class="flex items-center gap-space-2xs">
              <Icon name="pin_drop" class="w-[1rem] h-[1rem] text-primary" />
              <span class="text-on-surface-variant font-medium">Based in Munich · Building distributed systems &amp; quiet interfaces</span>
            </div>
            <span class="text-tertiary-container text-[0.7rem] hidden sm:inline">UTC+1</span>
          </div>
          <div class="mt-space-lg w-full bg-surface-container-low rounded-lg p-space-md shadow-sm">
            <div class="flex items-start gap-space-sm">
              <span class="relative flex h-3 w-3 mt-1 shrink-0">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <div class="space-y-space-3xs">
                <span class="font-meta-tag text-meta-tag text-secondary font-semibold uppercase tracking-wider block">Advisory Status</span>
                <p class="font-body-sm text-body-sm text-on-surface font-medium">Available for technical advising &amp; keynote speaking · Q1 2025</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Focusing on high-throughput streaming systems, SQLite at edge, and resilient API ergonomics.</p>
              </div>
            </div>
          </div>
          <div class="mt-space-lg flex flex-wrap gap-space-xs w-full">
            <a
              class="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded font-button-label text-button-label text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
              href="https://github.com"
            >
              <Icon name="terminal" class="w-[1rem] h-[1rem]" />
              <span>GitHub</span>
            </a>
            <a
              class="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded font-button-label text-button-label text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
              href="https://x.com"
            >
              <Icon name="alternate_email" class="w-[1rem] h-[1rem]" />
              <span>Twitter/X</span>
            </a>
            <a class="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded font-button-label text-button-label text-on-surface hover:bg-primary hover:text-on-primary transition-colors shadow-sm" href="#">
              <Icon name="badge" class="w-[1rem] h-[1rem]" />
              <span>ReadCV</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-7 flex flex-col justify-center space-y-space-lg lg:pl-space-xl">
          <div class="space-y-space-xs">
            <div class="flex items-center gap-space-xs">
              <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-widest font-semibold">// Folio &amp; Colophon</span>
              <span class="w-8 h-px bg-primary/40"></span>
              <span class="font-meta-tag text-meta-tag text-tertiary">Vol. 04 · Rev. 2025</span>
            </div>
            <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">Hi, I'm Elena — staff engineer, essayist, and maintainer of this digital garden.</h1>
          </div>
          <div class="space-y-space-md text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
            <p>Over the past twelve years, I have gravitated toward the fault lines of complex systems: distributed event pipelines, consensus mechanisms, and the quiet human ergonomics of local-first user interfaces.</p>
            <p>
              I currently advise venture-backed infrastructure teams and write deep technical postmortems. Prior to independent consulting, I was Staff Infrastructure Architect at
              <span class="text-on-surface font-semibold">Starlight Telemetry</span> and lead engineer on real-time replication primitives at <span class="text-on-surface font-semibold">Vespera Cloud</span>.
            </p>
            <p>
              My work is rooted in the belief that software should feel like well-joined cabinetry: durable, repairable by the operator, and respectful of cognitive bandwidth. Chronicle &amp; Code is where I document work-in-progress proofs,
              architectural schemas, and meditative thoughts on technology.
            </p>
          </div>

          <div class="grid grid-cols-3 gap-space-md pt-space-md">
            <div class="bg-surface-container rounded-lg p-space-md shadow-sm">
              <span class="font-display-hero text-[2rem] leading-none text-primary block font-medium">12+</span>
              <span class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider block mt-space-2xs">Years in Systems</span>
            </div>
            <div class="bg-surface-container rounded-lg p-space-md shadow-sm">
              <span class="font-display-hero text-[2rem] leading-none text-secondary block font-medium">1.4M</span>
              <span class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider block mt-space-2xs">Monthly Events / Core</span>
            </div>
            <div class="bg-surface-container rounded-lg p-space-md shadow-sm">
              <span class="font-display-hero text-[2rem] leading-none text-tertiary block font-medium">42</span>
              <span class="font-meta-tag text-meta-tag text-tertiary uppercase tracking-wider block mt-space-2xs">Essays Published</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-space-4xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
          <div>
            <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-widest font-semibold">// Foundational Axioms</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface mt-space-3xs">Core Pillars &amp; Philosophy</h2>
          </div>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">Principles refined over a decade of operating multi-region fleets and debugging distributed deadlocks at 3:00 AM.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div class="bg-surface-container rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div class="space-y-space-md">
              <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <Icon name="hub" class="w-[1.5rem] h-[1.5rem]" />
              </div>
              <div>
                <span class="font-meta-tag text-meta-tag text-tertiary block mb-space-3xs">PILLAR 01</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold">Resilient Architecture</h3>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Embrace failure as an omnipresent operational state. Build deterministic state machines, idempotent write paths, and backpressure protocols that degrade gracefully under partition rather than cascading into collapse.
              </p>
            </div>
            <div class="pt-space-lg mt-space-md flex items-center gap-space-xs font-meta-tag text-meta-tag text-primary font-medium">
              <span>READ CASE STUDY</span>
              <Icon name="arrow_forward" class="w-[1rem] h-[1rem]" />
            </div>
          </div>
          <div class="bg-surface-container rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div class="space-y-space-md">
              <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <Icon name="architecture" class="w-[1.5rem] h-[1.5rem]" />
              </div>
              <div>
                <span class="font-meta-tag text-meta-tag text-tertiary block mb-space-3xs">PILLAR 02</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold">Thoughtful Craft</h3>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Software is an intimate cognitive medium. Prioritize zero-latency local feedback, readable source colophons, intentional microcopy, and typographic hierarchy over gratuitous novelty or bloated runtime bundles.
              </p>
            </div>
            <div class="pt-space-lg mt-space-md flex items-center gap-space-xs font-meta-tag text-meta-tag text-secondary font-medium">
              <span>INTERFACE MANIFESTO</span>
              <Icon name="arrow_forward" class="w-[1rem] h-[1rem]" />
            </div>
          </div>
          <div class="bg-surface-container rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div class="space-y-space-md">
              <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <Icon name="hourglass_empty" class="w-[1.5rem] h-[1.5rem]" />
              </div>
              <div>
                <span class="font-meta-tag text-meta-tag text-tertiary block mb-space-3xs">PILLAR 03</span>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold">Slow Knowledge</h3>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Invest heavily in durable primitives: relational algebra, network fundamentals, compiler construction, and clear prose. In a world saturated with ephemeral hype cycles, deep fundamentals compound endlessly.
              </p>
            </div>
            <div class="pt-space-lg mt-space-md flex items-center gap-space-xs font-meta-tag text-meta-tag text-tertiary font-medium">
              <span>ON DIGITAL GARDENING</span>
              <Icon name="arrow_forward" class="w-[1rem] h-[1rem]" />
            </div>
          </div>
        </div>
      </div>

      <div class="mb-space-4xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
          <div>
            <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-widest font-semibold">// Selected Artifacts</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface mt-space-3xs">Production Systems &amp; Open Source</h2>
          </div>
          <div class="flex items-center gap-space-xs font-meta-tag text-meta-tag text-secondary">
            <span class="w-2 h-2 rounded-full bg-secondary"></span>
            <span>ALL PROJECTS ACTIVELY MAINTAINED</span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          <div class="bg-surface-container-low rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-space-sm">
                <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs bg-secondary/10 text-secondary font-meta-tag text-meta-tag rounded">
                  <Icon name="lock_clock" class="w-3.5 h-3.5" />
                  <span>CRDT REPLICATION</span>
                </span>
                <div class="flex items-center gap-space-3xs font-meta-tag text-meta-tag text-on-surface-variant bg-surface-container px-space-xs py-space-3xs rounded">
                  <Icon name="star" class="w-3.5 h-3.5 text-primary fill-primary" />
                  <span>2,480</span>
                </div>
              </div>
              <h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors flex items-center gap-space-xs">
                <span>Synapse-KV</span>
                <Icon name="north_east" class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mt-space-xs">A light-weight, deterministic state synchronization engine built over pure append-only logs with causal consistency verification and partition-tolerant repair.</p>
              <div class="mt-space-md flex flex-wrap gap-space-2xs">
                <span class="px-space-xs py-space-3xs font-code-inline text-code-inline bg-surface-container text-on-surface-variant rounded">Rust</span>
                <span class="px-space-xs py-space-3xs font-code-inline text-code-inline bg-surface-container text-on-surface-variant rounded">Tokio</span>
                <span class="px-space-xs py-space-3xs font-code-inline text-code-inline bg-surface-container text-on-surface-variant rounded">Raft</span>
              </div>
            </div>
          </div>
          <div class="bg-surface-container-low rounded-xl p-space-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-space-sm">
                <span class="inline-flex items-center gap-space-2xs px-space-xs py-space-3xs bg-primary/10 text-primary font-meta-tag text-meta-tag rounded">
                  <Icon name="dataset" class="w-3.5 h-3.5" />
                  <span>SQLITE RUNTIME</span>
                </span>
                <div class="flex items-center gap-space-3xs font-meta-tag text-meta-tag text-on-surface-variant bg-surface-container px-space-xs py-space-3xs rounded">
                  <Icon name="star" class="w-3.5 h-3.5 text-primary fill-primary" />
                  <span>1,812</span>
                </div>
              </div>
              <h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors flex items-center gap-space-xs">
                <span>PrismQuery</span>
                <Icon name="north_east" class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p class="font-body-md text-body-md text-on-surface-variant mt-space-xs">Type-safe embedded database driver compiling ASTs directly into zero-allocation bytecode streams with sub-millisecond cold start latency for edge microvms.</p>
              <div class="mt-space-md flex flex-wrap gap-space-2xs">
                <span class="px-space-xs py-space-3xs font-code-inline text-code-inline bg-surface-container text-on-surface-variant rounded">Go</span>
                <span class="px-space-xs py-space-3xs font-code-inline text-code-inline bg-surface-container text-on-surface-variant rounded">SQLite3 C-FFI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl mb-space-3xl">
        <div class="lg:col-span-7 space-y-space-lg">
          <div>
            <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-widest font-semibold">// Public Reflection</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface mt-space-3xs">Writing as an Empirical Scaffold</h2>
          </div>
          <div class="space-y-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
            <p>Why maintain a digital garden in an era dominated by transient social feeds and ephemeral algorithmic feeds? For me, writing in public is an indispensable verification step.</p>
            <div class="p-space-lg bg-surface-container-low rounded-lg shadow-sm">
              <p class="font-headline-sm text-headline-sm text-on-surface italic">“You never truly understand a distributed consensus protocol until you can explain its failure modes to an earnest student without waving your hands.”</p>
            </div>
            <p>This garden is neither an objective documentation library nor a marketing funnel. It is an honest working notebook.</p>
          </div>
          <div class="pt-space-md">
            <div class="flex items-center gap-space-xs mb-space-sm">
              <Icon name="draw" class="w-5 h-5 text-primary" />
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-medium">Analog Studio Tools &amp; Hardware</h3>
            </div>
            <div class="bg-surface-container rounded-xl p-space-md shadow-sm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md font-body-sm text-body-sm">
                <div class="space-y-space-2xs">
                  <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-wider block">Drafting &amp; Notation</span>
                  <div class="text-on-surface font-medium">Midori MD Notebook (A5 Grid)</div>
                  <div class="text-on-surface-variant">Lamy 2000 (Fine nib, Iroshizuku Yama-budo ink)</div>
                  <div class="text-on-surface-variant">Rotring 600 0.5mm Mechanical Pencil</div>
                </div>
                <div class="space-y-space-2xs">
                  <span class="font-meta-tag text-meta-tag text-secondary uppercase tracking-wider block">Compute Rig</span>
                  <div class="text-on-surface font-medium">Apple MacBook Pro 16" (M3 Max, 64GB)</div>
                  <div class="text-on-surface-variant">Studio Display 27" 5K Retina (Matte)</div>
                  <div class="text-on-surface-variant">Keychron Q1 Pro (Gateron Oil Kings, Lubed)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-5 flex flex-col justify-between space-y-space-lg">
          <div>
            <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-widest font-semibold">// The Scholarly Shelf</span>
            <h3 class="font-headline-md text-headline-md text-on-surface mt-space-3xs mb-space-md">Essential Non-Fiction</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Books that permanently altered my perspective on systems engineering, architecture, and epistemology.</p>
            <div class="space-y-space-sm">
              <div class="bg-surface-container rounded-lg p-space-md shadow-sm hover:shadow-md transition-all flex items-start gap-space-sm group">
                <span class="font-meta-tag text-meta-tag text-tertiary pt-space-3xs">01</span>
                <div class="space-y-space-3xs">
                  <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">Designing Data-Intensive Applications</h4>
                  <div class="font-meta-tag text-meta-tag text-primary">Martin Kleppmann</div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">The definitive canonical text on reliability, scalability, and distributed maintainability.</p>
                </div>
              </div>
              <div class="bg-surface-container rounded-lg p-space-md shadow-sm hover:shadow-md transition-all flex items-start gap-space-sm group">
                <span class="font-meta-tag text-meta-tag text-tertiary pt-space-3xs">02</span>
                <div class="space-y-space-3xs">
                  <h4 class="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">Thinking in Systems: A Primer</h4>
                  <div class="font-meta-tag text-meta-tag text-primary">Donella H. Meadows</div>
                  <p class="font-body-sm text-body-sm text-on-surface-variant">Stocks, flows, and feedback loops. Essential for anyone diagnosing recursive organizational failure.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-surface-container-high rounded-lg p-space-md shadow-sm">
            <div class="flex items-center gap-space-xs font-meta-tag text-meta-tag text-secondary uppercase font-semibold">
              <Icon name="bookmark" class="w-[1rem] h-[1rem]" />
              <span>Reading Queue 2025</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-3xs">Currently annotating: <em class="text-on-surface font-medium">'The Architecture of Open Source Applications' (Brown &amp; Wilson)</em>.</p>
          </div>
        </div>
      </div>

      <div class="bg-surface-container-low rounded-xl p-space-2xl shadow-sm text-center max-w-content-measure-prose mx-auto space-y-space-md">
        <span class="font-meta-tag text-meta-tag text-primary uppercase tracking-widest font-semibold">// Continuous Inquiry</span>
        <h2 class="font-headline-lg text-headline-lg text-on-surface">Let's build something that endures.</h2>
        <p class="font-body-md text-body-md text-on-surface-variant">I am frequently open to architectural reviews, guest lectures, podcast conversations, and advisory sessions for early-stage engineering leadership.</p>
        <div class="pt-space-xs flex flex-wrap justify-center gap-space-sm">
          <a class="px-space-md py-space-xs bg-primary text-on-primary font-button-label text-button-label rounded hover:bg-primary-container transition-colors shadow-sm inline-flex items-center gap-space-xs" href="mailto:elena@chroniclecode.dev">
            <Icon name="send" class="w-[1rem] h-[1rem]" />
            <span>Initiate Correspondence</span>
          </a>
          <NuxtLink class="px-space-md py-space-xs bg-surface-container text-on-surface font-button-label text-button-label rounded hover:bg-surface-container-high transition-colors shadow-sm inline-flex items-center gap-space-xs" to="/tech">
            <Icon name="auto_stories" class="w-[1rem] h-[1rem]" />
            <span>Browse All Articles</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
