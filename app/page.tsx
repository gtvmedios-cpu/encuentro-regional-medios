const agenda = [
 {day:"DÍA 1 · 16 NOV",title:"Conectar",desc:"Apertura, experiencias regionales y diálogo entre medios."},
 {day:"DÍA 2 · 17 NOV",title:"Transformar",desc:"Innovación, cooperación, conclusiones y compromisos."}
];
const features = [
 ["01","Periodismo e innovación","Nuevas narrativas, herramientas digitales y retos de la comunicación."],
 ["02","Convergencia de medios","Radio, televisión, prensa y plataformas digitales en diálogo."],
 ["03","Territorio y comunidad","El papel de los medios en el desarrollo regional."]
];
export default function Home(){
 return <main className="overflow-hidden">
  <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b16]/80 backdrop-blur-xl">
   <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
    <a href="#" className="text-sm font-black tracking-[.16em]">ENCUENTRO<span className="text-orange-400">.2026</span></a>
    <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex"><a href="#encuentro">El encuentro</a><a href="#agenda">Agenda</a><a href="#ponentes">Participantes</a></nav>
    <a href="#inscripcion" className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-400">Inscribirme ↗</a>
   </div>
  </header>
  <section className="site-grid glow relative flex min-h-[95vh] items-center px-5 pt-24">
   <div className="mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
    <div>
     <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-orange-200"><span className="h-2 w-2 rounded-full bg-orange-400"/> GAMARRA · CESAR · COLOMBIA</div>
     <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl lg:text-[88px]">MEDIOS QUE<br/><span className="gradient-text">CONECTAN.</span><br/>INNOVAN.<br/>TRANSFORMAN.</h1>
     <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">Primer Encuentro Regional de Medios del Sur del Cesar y Magdalena Medio.</p>
     <div className="mt-9 flex flex-wrap gap-4"><a href="#inscripcion" className="rounded-full bg-orange-500 px-7 py-4 font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-400">Quiero participar <span>↗</span></a><a href="#encuentro" className="rounded-full border border-white/15 px-7 py-4 font-semibold hover:bg-white/5">Conoce el encuentro</a></div>
     <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7 text-sm text-white/55"><span>◷ 16 — 17 NOVIEMBRE 2026</span><span>⌖ CASA DE LA CULTURA · GAMARRA</span></div>
    </div>
    <div className="relative mx-auto w-full max-w-lg">
     <div className="absolute -inset-8 rounded-full bg-orange-500/10 blur-3xl"/>
     <div className="panel relative rounded-[2rem] p-7 sm:p-10">
      <div className="flex items-center justify-between text-xs uppercase tracking-[.2em] text-white/45"><span>Encuentro 2026</span><span className="text-orange-300">01 / 02</span></div>
      <div className="my-12 flex aspect-square items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-transparent to-orange-500/20">
       <div className="text-center"><div className="text-8xl font-black tracking-tighter sm:text-9xl">M<span className="text-orange-400">+</span></div><div className="mt-3 text-xs tracking-[.35em] text-white/50">VOCES · IDEAS · TERRITORIO</div></div>
      </div>
      <p className="text-sm leading-6 text-white/60">Un espacio para encontrarnos, compartir experiencias y fortalecer el ecosistema de medios regionales.</p>
     </div>
    </div>
   </div>
   <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/30">DESLIZA PARA DESCUBRIR ↓</div>
  </section>
  <section id="encuentro" className="mx-auto max-w-7xl px-5 py-24">
   <div className="grid gap-10 md:grid-cols-2"><div><p className="mb-4 text-sm font-bold tracking-[.2em] text-orange-400">01 / EL ENCUENTRO</p><h2 className="text-4xl font-bold leading-tight sm:text-5xl">La comunicación<br/>que mueve <span className="gradient-text">territorios.</span></h2></div><p className="max-w-xl text-lg leading-8 text-white/60">Un punto de encuentro para periodistas, comunicadores, productores, creadores de contenido y representantes de medios. Dos jornadas para aprender, conversar y construir nuevas alianzas desde el Sur del Cesar y el Magdalena Medio.</p></div>
   <div className="mt-14 grid gap-4 md:grid-cols-3">{features.map(([n,t,d])=><article key={n} className="panel rounded-2xl p-7"><span className="text-sm text-orange-400">{n} /</span><h3 className="mt-8 text-xl font-bold">{t}</h3><p className="mt-3 leading-7 text-white/55">{d}</p></article>)}</div>
  </section>
  <section id="agenda" className="border-y border-white/10 bg-white/[.025] py-24"><div className="mx-auto max-w-7xl px-5"><p className="mb-4 text-sm font-bold tracking-[.2em] text-orange-400">02 / AGENDA</p><h2 className="mb-12 text-4xl font-bold sm:text-5xl">Dos días. <span className="text-white/40">Muchas ideas.</span></h2><div className="grid gap-5 md:grid-cols-2">{agenda.map(a=><article key={a.day} className="panel rounded-2xl p-8"><p className="text-xs font-bold tracking-[.2em] text-orange-300">{a.day}</p><h3 className="mt-5 text-3xl font-bold">{a.title}</h3><p className="mt-3 text-white/55">{a.desc}</p><p className="mt-8 text-sm text-white/35">Programación detallada próximamente</p></article>)}</div></div></section>
  <section id="ponentes" className="mx-auto max-w-7xl px-5 py-24"><p className="mb-4 text-sm font-bold tracking-[.2em] text-orange-400">03 / VOCES</p><h2 className="text-4xl font-bold sm:text-5xl">Ideas que inspiran.<br/><span className="text-white/40">Experiencias que conectan.</span></h2><p className="mt-5 max-w-xl text-white/55">Conoce a los conferencistas, panelistas y medios invitados.</p><div className="panel mt-10 rounded-2xl p-8 text-white/50">Los perfiles y fotografías se cargarán desde el panel administrativo.</div></section>
  <section id="inscripcion" className="px-5 pb-24"><div className="glow mx-auto max-w-7xl rounded-[2rem] border border-orange-400/20 bg-orange-500/[.06] p-8 sm:p-14"><p className="text-sm font-bold tracking-[.2em] text-orange-300">04 / PARTICIPA</p><div className="mt-5 grid items-center gap-8 md:grid-cols-2"><h2 className="text-4xl font-black sm:text-6xl">Tu voz también<br/>hace parte.</h2><div><p className="leading-7 text-white/60">Acompáñanos en este encuentro regional de medios. Muy pronto habilitaremos el formulario oficial de inscripción.</p><button className="mt-6 rounded-full bg-orange-500 px-7 py-4 font-bold text-white opacity-70" disabled>Inscripciones próximamente</button></div></div></div></section>
  <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/35">© 2026 Primer Encuentro Regional de Medios · Gamarra, Cesar, Colombia</footer>
 </main>
}
