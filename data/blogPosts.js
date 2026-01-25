export const blogPosts = [
  {
    id: 1,
    slug: 'zukunft-der-webentwicklung-2026',
    title: 'Enterprise Architecture 2026: Laravel & Vue.js im Fokus',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Architecture', 'Laravel', 'Vue.js', 'Performance'],
    author: 'Tobias Kubina',
    publishedAt: '2026-01-24',
    readTime: '18 MIN',
    excerpt: 'Warum herkömmliche CMS-Lösungen für geschäftskritische Prozesse versagen und wie moderne Custom-Stacks die Latenz eliminieren.',
    content: `
      <section class="mb-20">
        <div class="border-l-[12px] border-[#C8102E] pl-8 my-16">
          <p class="text-3xl md:text-5xl font-light text-zinc-500 leading-tight italic">
            Wir bauen keine Webseiten. Wir entwickeln <span class="text-zinc-900 font-[1000] uppercase tracking-tighter">digitale Kern-Infrastrukturen</span>.
          </p>
        </div>
        <p class="text-zinc-500 text-lg italic leading-relaxed">
          Im Jahr 2026 ist die Grenze zwischen Web-Applikation und Betriebssystem verschwommen. Unternehmen, die noch auf monolithische "Out-of-the-Box"-Lösungen setzen, verlieren den Anschluss an eine Welt, die in Millisekunden rechnet. Ein moderner Stack muss mehr leisten als nur Daten anzuzeigen – er muss die algorithmische Entropie beherrschen.
        </p>
      </section>

            <section class="grid lg:grid-cols-2 gap-16 items-start mb-32">
              <div>
                <h2 class="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter leading-[0.9] text-zinc-900 mb-8">
                  01. System <br/><span class="text-[#C8102E]">Integrity.</span>
                </h2>
                <p class="text-zinc-500 text-lg italic leading-relaxed mb-6">
                  In der Enterprise-Entwicklung 2026 ist Isolation der Schlüssel. Eine <strong>Hexagonale Architektur</strong> (Ports and Adapters) schützt Ihren Core vor äußeren Einflüssen. Wir kapseln die Geschäftslogik so radikal ab, dass das Framework austauschbar bleibt, während die Validität der Daten unantastbar ist.
                </p>
                <div class="flex gap-4">
                  <span class="px-4 py-2 bg-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">#Zero_Bloat</span>
                  <span class="px-4 py-2 bg-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">#Scale_Ready</span>
                </div>
              </div>

              <div class="bg-[#0F172A] rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl">
                <div class="flex gap-2 mb-6">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <pre class="font-mono text-sm text-slate-300 overflow-x-auto"><code><span class="text-slate-500">// Domain Isolation Pattern</span>
      <span class="text-sky-400">namespace</span> <span class="text-white">App\\Core\\Domain;</span>

      <span class="text-sky-400">final class</span> <span class="text-yellow-400">TransactionService</span>
      {
          <span class="text-sky-400">public function</span> <span class="text-emerald-400">execute</span>(ValidData $data)
          {
              <span class="text-slate-500">// Strict Business Logic without Side Effects</span>
              <span class="text-sky-400">return</span> <span class="text-white">DB::transaction(fn() => $this->core->process($data));</span>
          }
      }</code></pre>
              </div>
            </section>



            <section class="bg-zinc-900 rounded-[3rem] p-10 md:p-20 mb-32 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#C8102E] opacity-10 blur-[100px]"></div>
              <h3 class="text-3xl md:text-5xl font-[1000] uppercase italic text-white mb-12 tracking-tighter">02. Velocity <span class="text-[#C8102E]">Benchmarks.</span></h3>
              <p class="text-zinc-400 mb-12 italic max-w-2xl">
                Zeit ist die härteste Währung im Web. Während Standard-Systeme mit Overhead und veralteten Plugin-Architekturen kämpfen, nutzen wir die volle Power von Laravel Octane und High-Performance JIT-Compiling.
              </p>
              <div class="space-y-8 max-w-2xl text-white">
                 <div>
                    <div class="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Legacy Stack (WP / Monolith)</div>
                    <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div class="h-full bg-zinc-500 w-[85%]"></div>
                    </div>
                    <span class="text-[10px] opacity-40 italic">Average TTFB: 840ms</span>
                 </div>
                 <div>
                    <div class="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 text-[#C8102E]">Velweb Custom Stack (Octane)</div>
                    <div class="h-2 bg-white/10 rounded-full overflow-hidden">
                       <div class="h-full bg-[#C8102E] w-[12%] shadow-[0_0_15px_#C8102E]"></div>
                    </div>
                    <span class="text-[10px] text-[#C8102E] italic">Average TTFB: 42ms</span>
                 </div>
              </div>
            </section>

            <section class="mb-32">
              <h2 class="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter leading-[0.9] text-zinc-900 mb-12">
                03. Reactive <br/><span class="text-[#C8102E]">Frontends.</span>
              </h2>
              <div class="grid lg:grid-cols-3 gap-8">
                <div class="p-8 border border-zinc-100 rounded-3xl bg-white hover:border-[#C8102E] transition-colors group">
                  <h4 class="font-black italic uppercase text-zinc-900 mb-4 tracking-widest">Hydration Control</h4>
                  <p class="text-zinc-500 text-sm italic">Präzises Rendering nur dort, wo Interaktion stattfindet. Wir eliminieren unnötigen JavaScript-Ballast.</p>
                </div>
                <div class="p-8 border border-zinc-100 rounded-3xl bg-white hover:border-[#C8102E] transition-colors group">
                  <h4 class="font-black italic uppercase text-zinc-900 mb-4 tracking-widest">State Management</h4>
                  <p class="text-zinc-500 text-sm italic">Ultra-schnelle Datenflüsse durch optimierte Store-Patterns. Keine Verzögerungen in der UI.</p>
                </div>
                <div class="p-8 border border-zinc-100 rounded-3xl bg-white hover:border-[#C8102E] transition-colors group">
                  <h4 class="font-black italic uppercase text-zinc-900 mb-4 tracking-widest">Type Safety</h4>
                  <p class="text-zinc-500 text-sm italic">Durchgängiges TypeScript von der API bis zur Komponente. Fehler werden eliminiert, bevor sie entstehen.</p>
                </div>
              </div>
            </section>

            <section class="mb-32">
              <div class="flex flex-col md:flex-row gap-12 items-center bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100">
                 <div class="w-full md:w-1/2">
                   <h2 class="text-4xl font-[1000] uppercase italic tracking-tighter text-zinc-900 mb-6">04. Cloud <span class="text-[#C8102E]">Native.</span></h2>
                   <p class="text-zinc-500 italic leading-relaxed">
                     Moderne Architektur endet nicht beim Code. Wir orchestrieren Infrastrukturen, die mitatmen. Auto-Scaling, Edge-Caching und Serverless Functions bilden das Rückgrat für Lastspitzen, ohne die Kosten in die Höhe zu treiben.
                   </p>
                 </div>
                 <div class="w-full md:w-1/2 grid grid-cols-2 gap-4">
                    <div class="aspect-square bg-zinc-900 rounded-2xl flex flex-col items-center justify-center text-white">
                      <span class="text-3xl font-[1000] italic">99.99</span>
                      <span class="text-[8px] uppercase tracking-[0.2em] opacity-50">Uptime %</span>
                    </div>
                    <div class="aspect-square bg-[#C8102E] rounded-2xl flex flex-col items-center justify-center text-white">
                      <span class="text-3xl font-[1000] italic">&lt;1s</span>
                      <span class="text-[8px] uppercase tracking-[0.2em] opacity-50">Deployment Time</span>
                    </div>
                 </div>
              </div>
            </section>

            <section class="text-center max-w-3xl mx-auto">
              <h2 class="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter text-zinc-900 mb-8">Ready for the <span class="text-[#C8102E]">Evolution?</span></h2>
              <p class="text-zinc-500 text-lg italic leading-relaxed mb-12">
                Die Wahl der Architektur ist keine rein technische Entscheidung – sie ist eine strategische. Wer heute auf billige, instabile Lösungen setzt, zahlt morgen den Preis durch technische Schulden und mangelnde Agilität. Enterprise Architecture 2026 bedeutet: Präzision, Geschwindigkeit und kompromisslose Qualität.
              </p>
            </section>
          `
        }
      ];