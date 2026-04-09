3.1 Die "Großen Drei" Basis-Physiken (Corporate Standards)

Diese Systeme definieren die physikalischen Grundgesetze (Licht, Bewegung, Tiefe) für den Großteil des Webs und dienen oft als Basis-Layer für Mixology-Experimente.

Material 3 (M3) & Expressive (Google)

Kernphilosophie: Personalized, Emotional & Accessible.

Visuelle Marker: Dynamische Farbanpassung an Nutzerpräferenzen (Tonal Palettes statt harter Hex-Werte), variable Eckenradien (shape-corner-*), "Container"-Konzepte statt starrer Ränder. Flache Oberflächen mit tonalem Elevation-System statt harter Schatten.

Motion Physics: "Expressive Motion" basierend auf Federmodellen (Spring Physics). Erlaubt Overshoot, Elastizität und verspielte Reaktionen auf Touch.

Fluent 2 (Microsoft)

Kernphilosophie: Light, Texture & Performance.

Visuelle Marker: Materialien simulieren physikalische Eigenschaften unter Licht. Mica (opak, nimmt Hintergrundfarbe/Wallpaper an), Acrylic (translucent, starker Blur, Noise-Textur) und Smoke (Verdunkelung für Modals).

Motion Physics: "Connected Animations" mit geteilten Achsenübergängen und Tiefenstaffelung im Z-Raum.

Human Interface Guidelines / Spatial (Apple)

Kernphilosophie: Glass, Vibrancy & Immersive Depth.

Visuelle Marker: "Liquid Glass" (dickes Glas mit Refraktion/Verzerrung an den Rändern) und "Vibrancy" (Sättigungserhöhung des Hintergrunds durch das Material hindurch). Randlose Inputs, starke Fokus-Schatten.

Motion Physics: "Fluid Gesture" – direkte Manipulation, Parallax-Effekte und Physik, die in Echtzeit auf Touch-Geschwindigkeit und -Winkel reagiert.

3.2 Die "Post-Flat" Textur-Renaissance (Morphismen)

Nach einem Jahrzehnt des Flat Designs kehren Texturen, Tiefe und haptische Qualitäten zurück. Diese Stile liefern die "Haut" für ODS-Komponenten.

Advanced Liquid Glass & Glassmorphism

Konzept: Tiefe durch physikalisch korrektes Glas.

Evolution 2026: Integration von echter Refraktion und optischer Verzerrung (via SVG feDisplacementMap), bei der sich der Hintergrund an den Rändern der Komponente "biegt".

CSS-Implementierung: backdrop-filter: blur(20px) saturate(180%) kombiniert mit halbtransparenten Rändern (border: 1px solid rgba(255,255,255,0.3)).

Claymorphism (Fluffy 3D)

Konzept: Aufgeblasene, weiche, organische Formen (Knete/Marshmallow-Ästhetik).

Visuelle Marker: Matte Oberflächen, starke innere Schatten (inset box-shadow) für volumetrische Wölbungen, extrem runde Ecken ("Squircles"), schwebende Außen-Schatten.

Post-Neumorphism (Neumorphism 2.0)

Konzept: Subtile Extrusion aus dem Hintergrund, jedoch mit gelösten Kontrastproblemen.

Visuelle Marker: Statt reiner Farbgleichheit werden nun gezielte Highlights und stärkere Schattierungen genutzt ("Depth with Clarity"), oft kombiniert mit leichten Texturen, um Barrierefreiheit zu gewährleisten.

Tactile Skeuomorphism 3.0

Konzept: Hyperrealistische Materialimitation für spezifische Komponenten.

Visuelle Marker: Digitale Oberflächen, die visuelle Cues von genarbtem Leder, mattem Papier, Filz oder gebürstetem Aluminium übernehmen. Fokus liegt auf der Mikro-Textur, nicht auf kitschigen Metaphern.

Aurora & Mesh Gradients (Ambient Color)

Konzept: Weiche, organisch ineinanderfließende Farbwolken.

Technische Umsetzung: Übereinanderliegende, animierte radiale Verläufe mit extremem CSS-Blur (filter: blur(100px)) oder WebGL-Shader für flüssige Farbdynamik.

3.3 Struktur, Layout & Typografie (Space & Grid)

Wie Inhalte im Viewport organisiert, priorisiert und gebrochen werden.

Bento Box UI (Modular Grid)

Konzept: Strenge Aufteilung des Viewports in abgerundete Kacheln unterschiedlicher Größe (wie eine japanische Bento-Box).

Visuelle Marker: Extreme Ordnung, perfekte Hierarchie, einheitliche Gaps. Reduziert visuelles Chaos bei datenintensiven Dashboards. Oft kombiniert mit Glassmorphismus.

Editorial Asymmetry & Broken Grids

Konzept: Webdesign, das sich an High-End-Printmagazinen orientiert.

Visuelle Marker: Bewusst überlappende Elemente, asymmetrische Weißräume, Bilder, die aus Rastern ausbrechen, und Headlines, die Bilder überschneiden. "Geplantes Chaos" mit starker visueller Hierarchie.

Macro & Kinetic Typography

Konzept: Typografie übernimmt die Rolle des Haupt-UI-Elements (Bilder/Grafiken treten in den Hintergrund).

Visuelle Marker: Oversized Fonts, starker Kontrast zwischen Serif und Sans-Serif, Custom-Typefaces.

Motion Physics: "Text Transitions" – Schriften, die sich beim Scrollen morphen, flüssig einblenden oder auf Cursor-Bewegungen reagieren (Variable Fonts).

Ultra-Minimalism (Zen UI)

Konzept: Maximale Reduktion auf die absolute Kernfunktion ("Purposeful Simplicity").

Visuelle Marker: Riesige, nicht genutzte Weißräume (Negative Space), monochrome Farbpaletten, unsichtbare oder fehlende Ränder, Fokus auf Mikro-Texte statt auf Icons.

3.4 Nostalgie, Subkultur & Chaos (Die "Vibe"-Kategorien)

Stile, die bewusst mit glatten UX-Konventionen brechen und auf rohe Emotion oder Nostalgie setzen.

Frutiger Aero & Frutiger Eco (Web 2.0 Revival)

Konzept: Optimistischer Futurismus der Jahre 2005–2012.

Visuelle Marker: Hochglanz-Oberflächen ("Glossy"), Lens Flares, Wassertropfen, Himmelsmotive, Glas-Architektur. Komplexe linear-gradient Overlays (weiß zu transparent) für klassische "Glanzkanten".

Y2K, Acid Design & Chrome-Core

Konzept: Rave-Kultur der späten 90er trifft auf dystopischen Cyberpunk.

Visuelle Marker: "Colorful Black" (Neon auf tiefem Schwarz), flüssiges Chrom/Metall-Typografie, verzerrte Gitter, Glitch-Effekte.

Technische Umsetzung: mix-blend-mode: difference, holografische Texturen via conic-gradient.

Neo-Brutalism (Neubrutalism)

Konzept: Rohes, ungeschöntes Design als Gegenreaktion zum Corporate-Minimalismus.

Visuelle Marker: Hoher Kontrast, reine HTML-Farben, dicke schwarze Ränder (border: 3px solid #000), harte, unverschwommene Schatten (box-shadow: 4px 4px 0px 0px #000), System-Fonts (Courier, Arial), Marquee-Texte.

Cute-alism & Sticker UI

Konzept: Eine Mutation, die harte Layouts mit extrem verspielten Elementen mischt.

Visuelle Marker: Pastellfarben, digitale "Sticker" (die oft leicht schief über dem Layout kleben), 3D-Emojis, dicke abgerundete Ränder, "Kawaii"-Ästhetik kombiniert mit Neo-Brutalismus.

Retro-Futurism (Terminal / Cassette Futurism)

Konzept: Die Zukunft aus Sicht der 80er Jahre.

Visuelle Marker: Monospace-Fonts (Bernstein/Neon-Grün), CRT-Scanlines (repeating-gradients), Text-Glow (text-shadow), klobige UI-Rahmen, CLI (Command Line Interface)-Ästhetik.

3.5 Phygital, Spatial & Dimensionale UIs

Designs, die die Lücke zwischen Screen und physischem Raum schließen (AR/VR-Einflüsse).

Spatial UI & Z-Depth Architecture

Konzept: UI-Elemente existieren im echten 3D-Raum und reagieren auf Perspektive und Eye-Tracking/Cursor-Position.

Visuelle Marker: Mehrschichtige Parallax-Ebenen, dynamische Echtzeit-Beleuchtung auf UI-Panels, Elemente werfen physikalisch korrekte Schatten aufeinander.

Industrial UI (Hardware-Skeuomorphismus)

Konzept: Taktile Bedienelemente aus dem Hi-Fi-, Audio- oder Industrie-Hardware-Bereich.

Visuelle Marker: Realistische Drehregler (Knobs), klobige Toggle-Switches, gebürstetes Metall als Hintergrund (repeating-linear-gradient + Noise), mechanisches "Klick"-Feedback.

Immersive 3D & WebGL Environments

Konzept: 3D-Objekte sind nicht nur Dekoration, sondern das Interface selbst.

Visuelle Marker: Nutzer navigieren durch Räume oder drehen 3D-Produkte (z. B. Autos, Schuhe), wobei UI-Elemente direkt an bestimmte Koordinaten des 3D-Modells gepinnt sind (Spatial Annotations).

3.6 AI-Native, Dynamische & Adaptive Ästhetik

Spezifische Paradigmen, die durch künstliche Intelligenz und neue Display-Technologien (OLED) geboren wurden.

Generative UI (Das "Sparkle"-Paradigma)

Konzept: Interfaces, die sich in Echtzeit generieren, während eine KI "denkt" oder Kontexte sich ändern. Weg vom statischen Layout hin zur Konversation.

Visuelle Marker: Schimmernde Skeletons, leuchtende, animierte Ränder (oft Violett/Magenta-Gradients), Typewriter-Einblendeffekte, "Breathing"-Animationen (weiches Pulsieren).

Agentic & Voice-Visual UI

Konzept: Visuelle Repräsentation von unsichtbaren KI-Agenten.

Visuelle Marker: Morphende Orbs (Kugeln), flüssige Audio-Visualizer, die auf Stimmfrequenzen reagieren, dynamische Unschärfe, die einen "Zuhör"- oder "Sprech"-Status simuliert.

Adaptive OLED & Lightning Dark Mode

Konzept: Die Evolution des Dark Modes, optimiert für moderne OLED-Displays und Energieeffizienz.

Visuelle Marker: Wahres Schwarz (#000000) statt Dunkelgrau. Um Tiefe zu erzeugen, werden "Lightning"-Effekte genutzt – leuchtende Neon-Akzente, Glow-Effekte unter Karten und stark leuchtende Typografie, die wie Lichtstreifen im Dunkeln wirken.

Microinteraction-Driven UI

Konzept: Das Interface verzichtet auf klassische Ladebalken oder Statusmeldungen; jeder Systemstatus wird durch Mikro-Bewegungen kommuniziert.

Visuelle Marker: Buttons, die sich bei Erfolg in Häkchen morphen, Haptic-Feedback-Simulationen durch Micro-Shakes, extrem fluides Drag-and-Drop mit Physik-Simulation.