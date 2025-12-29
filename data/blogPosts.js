export const blogPosts = [
  {
    id: 1,
    slug: 'zukunft-der-webentwicklung-2026',
    title: 'Web-Engineering 2026: Laravel & Vue.js',
    highlightTitle: 'Architektur schlägt Template.',
    excerpt: 'Eine tiefgehende Analyse über die technische Überlegenheit von Fullstack-Engineering gegenüber Standard-CMS-Lösungen wie WordPress.',
    category: 'Engineering',
    tags: ['Informatik', 'Architecture', 'Laravel', 'Vue.js'],
    author: 'Tobias Kubina',
    publishedAt: '2025-12-29',
    readTime: '20 Min.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=90',
    content: `
      <div class="bg-gray-900 text-white p-8 md:p-20 rounded-[3rem] mb-16 border-b-[16px] border-red-600 relative overflow-hidden">
        <h2 class="text-red-600 !mt-0 text-3xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
          Das Ende der <br><span class="text-white">Monolithen.</span>
        </h2>
        <p class="text-lg md:text-2xl italic text-gray-400 leading-relaxed max-w-4xl">
          Warum wir im Jahr 2026 keine Webseiten mehr bauen, sondern hochperformante Software-Infrastrukturen. Eine Untersuchung über die Entkopplung von Daten und Präsentation.
        </p>
      </div>

      <div class="mb-20 px-4 md:px-0">
        <h3 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-gray-900">
          01. Die WordPress-Falle <span class="text-red-600">(Technical Debt)</span>
        </h3>
        <p class="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
          Standard-CMS wie WordPress basieren auf einer Architektur, die für Blogs der frühen 2000er optimiert war. Für moderne Enterprise-Anforderungen erzeugen sie massive technische Schulden:
        </p>
        <ul class="space-y-4 mb-10">
          <li class="flex items-start gap-4 italic font-bold text-gray-800">
            <span class="text-red-600 font-black">/</span>
            <span>Overhead: Ein Standard-Install lädt hunderte Skripte, die für 90% der Funktionen nicht benötigt werden (Bloatware).</span>
          </li>
          <li class="flex items-start gap-4 italic font-bold text-gray-800">
            <span class="text-red-600 font-black">/</span>
            <span>Sicherheit: Die Abhängigkeit von Drittanbieter-Plugins macht Systeme zum Primärziel für automatisierte Exploits.</span>
          </li>
          <li class="flex items-start gap-4 italic font-bold text-gray-800">
            <span class="text-red-600 font-black">/</span>
            <span>Skalierbarkeit: Ab 50.000 Datensätzen kapitulieren herkömmliche Shared-Hosting Datenbank-Strukturen.</span>
          </li>
        </ul>
      </div>

      <div class="bg-gray-50 p-8 md:p-16 rounded-[4rem] mb-20 border-2 border-gray-100">
        <h3 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8">
          02. Warum Laravel & Vue.js?
        </h3>
        <p class="text-gray-600 mb-8 leading-relaxed italic">
          Wir nutzen den TALL-Stack-Ansatz oder Inertia.js, um die Brücke zwischen robustem Backend und reaktivem Frontend zu schlagen. Das Ergebnis ist eine Single-Page-Application (SPA) Erfahrung mit der SEO-Power von Server Side Rendering (SSR).
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-3xl shadow-sm">
            <h4 class="text-red-600 font-black uppercase italic mb-4">Backend (Laravel)</h4>
            <p class="text-xs text-gray-500 italic font-bold uppercase tracking-tighter">Einsatz von Eloquent ORM für komplexe Relationen, Redis für Caching-Layer und Laravel Horizon für Queue-Management.</p>
          </div>
          <div class="bg-white p-8 rounded-3xl shadow-sm">
            <h4 class="text-red-600 font-black uppercase italic mb-4">Frontend (Vue.js/Nuxt)</h4>
            <p class="text-xs text-gray-500 italic font-bold uppercase tracking-tighter">Nutzt Composition API für sauberen, modularen Code und Pinia für ein vorhersehbares State-Management über die gesamte Applikation.</p>
          </div>
        </div>
      </div>

      <div class="mb-20">
        <h3 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 border-r-8 border-red-600 pr-8 text-right">
          03. Messbare <br><span class="text-red-600">Überlegenheit</span>
        </h3>
        <p class="text-lg text-gray-700 italic leading-relaxed mb-10">
          In wissenschaftlichen Tests zeigt sich: Ein optimiertes Laravel-System mit Vite-Kompilierung erreicht LCP-Werte (Largest Contentful Paint) unter 0.8 Sekunden. Zum Vergleich: Ein durchschnittliches WordPress-Theme liegt bei 2.4 bis 4.1 Sekunden.
        </p>
        <div class="bg-gray-900 p-10 rounded-[3rem] text-white overflow-x-auto">
          <code class="text-green-400 text-xs md:text-sm block leading-relaxed whitespace-nowrap">
            // Performance Optimierung auf Server-Ebene<br>
            php artisan config:cache<br>
            php artisan route:cache<br>
            php artisan view:cache<br>
            <span class="text-gray-500">// Ergebnis: Reduzierung der Boot-Zeit um ~40%</span>
          </code>
        </div>
      </div>

      <div class="bg-red-600 text-white p-10 md:p-20 rounded-[4rem] italic shadow-2xl">
        <h3 class="text-2xl md:text-4xl font-black uppercase mb-6 italic">Fazit für Entscheider</h3>
        <p class="text-lg md:text-xl font-medium leading-relaxed mb-0">
          Wer heute in Individual-Entwicklung investiert, kauft keine Webseite – er kauft einen Zeitvorsprung. Die Wartbarkeit von sauber strukturiertem PHP 8.4 Code übertrifft jede No-Code Lösung um Jahrzehnte. Lassen Sie uns Software bauen, die Ihre Geschäftsprozesse digital abbildet, statt sie zu behindern.
        </p>
      </div>
    `
  }
];