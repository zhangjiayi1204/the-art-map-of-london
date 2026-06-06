/* ============================================
   i18n.js — Full-site Chinese/English bilingual
   ============================================ */

(function () {
  var dict = {
    en: {
      // Navbar
      'nav.home': 'Home', 'nav.map': 'Map', 'nav.timeline': 'Timeline',
      'nav.map_drop': 'Map ▾', 'nav.stpauls': "St. Paul's Cathedral",
      'nav.greenwich': 'Greenwich', 'nav.chelsea': 'Chelsea',
      'nav.hydepark': 'Hyde Park', 'nav.westminster': 'Palace of Westminster',
      'nav.piccadilly': 'Piccadilly Circus',
      'nav.towerbridge': 'Tower Bridge',
      'nav.music': 'Music',
      'lang.switch': '中', 'lang.label': 'EN',

      // Home page
      'hero.title': 'Discover London Through Art Insight',
      'hero.locations': 'With <strong>7 Locations</strong>',
      'hero.years': 'Across <strong>220 Years</strong>',
      'intro.heading': 'When Art Meets City',
      'intro.line1': 'Step into London through iconic artworks.',
      'intro.line2': "From Canaletto's St. Paul's Cathedral to Ginner's Piccadilly Circus, explore the city's landmarks and hidden corners.",
      'intro.line3': "Discover how each piece reflects London's history, culture, and evolving artistic styles with our interactive map and timeline.",
      'intro.line4': 'Walk with us through centuries of London, accompanied by music — if you will.',
      'home.music_teaser': 'Each landmark is paired with a piece of classical music that echoes its spirit — walk with us, and listen.',
      'home.music_link': 'Explore Music Gallery →',
      'intro.credit': 'Waterloo Bridge, Claude Monet, 1903',
      'map.heading': 'Explore the Map',
      'map.subtitle': 'Click any marker to see the artwork, or <a href="map.html">open the full map &rarr;</a>',
      'carousel.heading': '"Museum" From 18th to 20th Century',
      'carousel.stpauls': "St. Paul's Cathedral", 'carousel.greenwich': 'Greenwich',
      'carousel.chelsea': 'Chelsea', 'carousel.hydepark': 'Hyde Park',
      'carousel.westminster': 'Palace of Westminster', 'carousel.piccadilly': 'Piccadilly Circus',
      'carousel.towerbridge': 'Tower Bridge',

      // Footer
      'footer.contact': 'Contact:', 'footer.copy': '&copy; 2025 The Art Map of London. All rights reserved.',
      'footer.nonprofit': 'Non-profit website dedicated to art and culture education.',

      // Shared section headings
      'sec.description': 'Description',
      'sec.analysis': 'Artwork Analysis and Historical Background',
      'sec.biography': 'Artist Biography',
      'sec.style': 'Style Interpretation',
      'sec.view_details': 'View details →',

      // ---- St Paul's ----
      'stpauls.desc_title': "St. Paul's Cathedral",
      'stpauls.desc_p': "Located on Ludgate Hill in London, it is a masterpiece designed by Sir Christopher Wren in the 17th century as part of the city's reconstruction after the Great Fire of London. Its iconic dome, inspired by St. Peter's Basilica, rises 111 meters high, making it a key feature of London's skyline. As a symbol of resilience during the Blitz in World War II, the cathedral holds great historical and cultural significance. St. Paul's Cathedral has been the venue for significant national events, including the wedding of Charles, now King Charles III, and Diana, Princess of Wales, in 1981.",
      'stpauls.analysis_p1': "Canaletto's <em>St. Paul's Cathedral</em> is unique among his Thames views as the only painting to focus closely on the entire building. Created for his prominent British patron, Thomas Hollis, who commissioned many of his London landscapes, the painting highlights St. Paul's as both an architectural marvel and a social backdrop. The cathedral dominates the scene, while the lively square and surrounding streets feature figures engaged in conversation and elegant carriages entering or leaving, capturing the dynamic interplay between the grandeur of the structure and the vibrancy of urban life.",
      'stpauls.analysis_p2': "In the 18th century, London evolved into not only the nation's political and economic center but also a global hub for commerce and finance. Rising literacy rates provided the foundation for widespread cultural consumption, while the flourishing art market experienced remarkable growth in art trade. The newly risen middle class—comprising merchants, gentry, yeoman, and professionals—became the cultural elite of the era, driving the demand for cultural goods. In Canaletto's <em>St. Paul's Cathedral</em>, elements such as elegant carriages and citizens engaged in conversation vividly capture the vibrancy of urban life, reflecting the critical roles of the middle class and the nobility in shaping London's social and cultural landscape.",
      'stpauls.bio_p': "Giovanni Antonio Canal (18 October 1697 – 19 April 1768), commonly known as Canaletto, was a renowned 18th-century Italian painter of the Venetian School, famous for his cityscape paintings (<em>Vedute</em>) of Venice and other European cities. His works not only showcase remarkable architectural accuracy and detail but also imbue the scenes with vivid light and atmosphere, making them exemplary representations of 18th-century European cityscape painting.",
      'stpauls.style_p': "The Venetian School was one of the most important artistic movements of the Italian Renaissance, centered in Venice and reaching its peak from the late 15th to the mid-16th century. The Venetian School emphasized the use of color, light, and atmosphere, showcasing a unique sense of romance and sensibility. It also focused on the depiction of nature, particularly in landscapes and backgrounds, while paying great attention to the expression of human emotions.",
      'stpauls.artwork_info': "Canaletto, 1697–1768, <strong>St. Paul's Cathedral</strong>, ca. 1754",

      // ---- Greenwich ----
      'greenwich.desc_title': 'Greenwich',
      'greenwich.desc_p': '<strong>Greenwich</strong>, a historic town in southeast Greater London, is famed for its maritime heritage and as the site of the Prime Meridian and Greenwich Mean Time (GMT). Located south of the River Thames, 8.9 km from Charing Cross, it is home to the Royal Observatory, established in 1675 by King Charles II. Though no longer used for astronomical research since 1998, the observatory remains significant as the location of prime Meridian, marker of longitude zero, officially designated at the 1884 International Meridian Conference.',
      'greenwich.analysis_p1': '<strong>Turner</strong> presents a sweeping panorama of Greater London as seen from Greenwich Park, overlooking Sir Christopher Wren\u2019s Naval Hospital, the River Thames, and the distant city. Scattered across the foreground are maps and globes, with a retired navy officer, wearing glasses and leaning on a cane, examining two design plans\u2014an allusion to Britain\u2019s storied past. Slightly further back, a man in a fashionable top hat and yellow gloves raises his hands in celebration of a thriving present. Finally, at the base of the hill, a third figure peers through a telescope, observing the competition between steamships and sailing vessels on the river\u2014a subtle nod to the future.',
      'greenwich.analysis_p2': '<strong>By 1825</strong>, <strong>small handheld telescopes</strong>, such as monocular or binocular models, had become widespread. They were primarily used for navigation, military purposes, and terrestrial observation.',
      'greenwich.bio_p': '<strong>Joseph Mallord William Turner RA </strong>(April 23, 1775 \u2013 December 19, 1851), known during his lifetime as William Turner, was one of the most representative landscape painters of the Romantic era in Britain. Renowned for his innovative use of color and mastery of light and shadow, he earned the title \u201cPainter of Light.\u201d His works had a profound influence on later Impressionist and modern art movements.',
      'greenwich.style_p': '<strong>Romanticism</strong> responded to the anxiety of industrialization by calling for a return to nature and a reverence for tradition. Romantic artists focused on using light, shadow, and color to create emotional atmospheres, with natural landscapes being imbued with symbolic meaning. While Romanticism inherently critiqued industrialization and urbanization, Turner\u2019s works reflect his complex attitude toward these changes. He often juxtaposed nature with human civilization, particularly technological progress. This contrast not only represented humanity\u2019s conquest of nature but also reflected the inner turmoil industrialization caused in Romantic artists.',
      'greenwich.artwork_info': 'Joseph Mallord William Turner, 1775\u20131851, <strong>View of London from Greenwich</strong>, ca. 1825',

      // ---- Chelsea ----
      'chelsea.desc_title': 'Chelsea',
      'chelsea.desc_p': '<strong>Chelsea</strong> is an affluent area located in the southwest of London, part of the Royal Borough of Kensington and Chelsea. Known for its rich history and cultural background, Chelsea has long been a hub for artists, writers, and celebrities. The history of Chelsea dates back to Roman times, but it rapidly developed in the 17th and 18th centuries, becoming a residence for the London upper class.',
      'chelsea.analysis_p1': '<strong>Whistler</strong> infused music into his paintings, with his \u201cNocturnes\u201d resembling a composition of musical notes. This particular work depicts the view from Battersea Bridge, with the artist gazing towards Chelsea on the opposite bank of the Thames. The tower of Chelsea Old Church is faintly visible on the right side of the canvas, while a fisherman in the foreground gazes at a small barge. This is the first painting in Whistler\u2019s Nocturne series, which aims to convey the beauty and tranquility of the Thames River at dusk or night.',
      'chelsea.analysis_p2': '<strong>In the 19th century</strong>, Europe underwent an accelerated industrial revolution, with society rapidly modernizing and urbanization intensifying. After the Kanagawa Treaty, Japan established diplomatic and trade relations with Western countries. By the end of the 19th century, European artists, especially in France and Britain, were profoundly influenced by Japanese art, particularly ukiyo-e woodblock prints. This influence, known as \u201cJaponisme,\u201d sparked widespread interest in the Western art world.',
      'chelsea.bio_p': '<strong>James McNeill Whistler</strong> (July 11, 1834 \u2013 July 17, 1903) was a British painter born in the United States, renowned for his unique artistic style and innovations in color and composition. He was an important figure in the late 19th-century art world and one of the representatives of both Impressionism and Post-Impressionism. Whistler\u2019s works encompassed landscapes, portraits, and nocturnes, with his \u201cNocturne\u201d series being particularly famous.',
      'chelsea.style_p': '<strong>Orientalism</strong>, particularly Japonisme, had a significant influence on Whistler and many other Impressionist painters of the time. The flat silhouette forms are a typical characteristic of ukiyo-e prints from the same period. The monochromatic color washes, noticeable brushstrokes, and soft composition echo the style of ink wash painting.',
      'chelsea.artwork_info': 'James McNeill Whistler, 1834\u20131903, <strong>Nocturne: Blue And Silver \u2013 Chelsea</strong>, ca. 1871',

      // ---- Hyde Park ----
      'hydepark.desc_title': 'Hyde Park',
      'hydepark.desc_p': '<strong>Hyde Park</strong>, located in the heart of Central London, is one of the city\u2019s most iconic green spaces. Spanning 350 acres, it is the largest of the four Royal Parks that form a chain from Kensington Palace to Buckingham Palace. The park is historically significant as a site for free speech and public demonstrations, with Speaker\u2019s Corner remaining a symbol of democratic expression.',
      'hydepark.analysis_p1': '<strong>Monet</strong> painted several views of Hyde Park during his stay in London in 1871, capturing the park in different lights and seasons. This work portrays a serene afternoon scene, with dappled sunlight filtering through the trees and casting soft shadows on the paths below. Figures stroll leisurely, embodying the tranquility of a Victorian afternoon in one of London\u2019s most cherished public spaces.',
      'hydepark.analysis_p2': '<strong>London in 1871</strong> was a city in transformation. The Franco-Prussian War had driven many French artists, including Monet and Pissarro, to seek refuge in London. The city\u2019s parks and river scenes provided a rich source of subject matter for these artists, who brought with them the revolutionary techniques of Impressionism.',
      'hydepark.bio_p': '<strong>Claude Monet</strong> (November 14, 1840 \u2013 December 5, 1926) was a French painter and a founding figure of the Impressionist movement. His painting <em>Impression, Sunrise</em> gave the movement its name. Monet\u2019s dedication to painting en plein air (outdoors) and his pursuit of capturing the ephemeral effects of light and atmosphere revolutionized landscape painting.',
      'hydepark.style_p': '<strong>Impressionism</strong> broke from academic tradition by emphasizing the artist\u2019s immediate perception of a scene. Impressionist painters used short, visible brushstrokes, pure unmixed colors, and an emphasis on the effects of natural light. They often painted outdoors, seeking to capture a fleeting moment rather than a carefully composed studio scene.',
      'hydepark.artwork_info': 'Claude Monet, 1840\u20131926, <strong>Hyde Park</strong>, ca. 1871',

      // ---- Westminster ----
      'westminster.desc_title': 'Palace of Westminster',
      'westminster.desc_p': '<strong>The Palace of Westminster</strong>, also known as the Houses of Parliament, stands on the north bank of the River Thames in the City of Westminster. This iconic Gothic Revival building, designed by Sir Charles Barry and Augustus Pugin, was constructed between 1840 and 1876 after the original palace was destroyed by fire in 1834. It remains the seat of the British Parliament and a UNESCO World Heritage Site.',
      'westminster.analysis_p1': '<strong>Pissarro</strong> painted several views of the Palace of Westminster from his vantage point across the Thames. This work captures the iconic silhouette of the building emerging from the London fog, its Gothic spires softened by the atmospheric haze. The muted palette and broken brushwork exemplify Pissarro\u2019s mature Impressionist style.',
      'westminster.analysis_p2': '<strong>The late 19th century</strong> saw London established as the capital of a global empire. The Thames had become a bustling artery of commerce, and the Houses of Parliament stood as a symbol of British governance and tradition. Artists were drawn to the river as a subject that combined natural beauty with the grandeur of human achievement.',
      'westminster.bio_p': '<strong>Camille Pissarro</strong> (July 10, 1830 \u2013 November 13, 1903) was a Danish-French Impressionist and Neo-Impressionist painter. Known as the \u201cFather of Impressionism,\u201d he was the only artist to exhibit in all eight Impressionist exhibitions. Pissarro\u2019s work bridges the gap between the Barbizon school, Impressionism, and the Pointillist innovations of Seurat and Signac.',
      'westminster.style_p': '<strong>Late Impressionism</strong> saw artists applying the movement\u2019s principles to increasingly diverse subjects. Pissarro brought the techniques of broken color and atmospheric perspective to bear on the urban landscape, finding poetry in the interplay between monumental architecture and shifting weather.',
      'westminster.artwork_info': 'Camille Pissarro, 1830\u20131903, <strong>Palace of Westminster</strong>, ca. 1890',

      // ---- Piccadilly ----
      'piccadilly.desc_title': 'Piccadilly Circus',
      'piccadilly.desc_p': '<strong>Piccadilly Circus</strong> is a road junction and public space in London\u2019s West End, built in 1819 to connect Regent Street with Piccadilly. Famous for its neon signs, the Shaftesbury Memorial Fountain, and its status as a major meeting point, Piccadilly Circus has long been considered the bustling heart of London\u2019s entertainment district.',
      'piccadilly.analysis_p1': '<strong>Ginner\u2019s</strong> painting of Piccadilly Circus captures the vibrant energy of early 20th-century London. Electric advertising signs illuminate the scene, while crowds of pedestrians and omnibuses create a dense, dynamic composition. Ginner\u2019s thick impasto technique gives the painting a tactile, almost sculptural quality, emphasizing the materiality of the modern city.',
      'piccadilly.analysis_p2': '<strong>The Edwardian era</strong> represented a period of transition. Electric lighting had transformed the urban night, and mass advertising was reshaping the visual environment. Piccadilly Circus became a symbol of the modern metropolis \u2014 dazzling, crowded, and relentlessly energetic.',
      'piccadilly.bio_p': '<strong>Charles Ginner</strong> (March 4, 1878 \u2013 January 6, 1952) was a British painter of the Camden Town Group. Known for his meticulous, thickly painted urban scenes, Ginner brought a distinctive Post-Impressionist sensibility to depictions of everyday London life. His style combined the structural clarity of C\u00e9zanne with the vivid observation of Van Gogh.',
      'piccadilly.style_p': '<strong>The Camden Town Group</strong> (1911\u20131913) was a collective of British Post-Impressionist artists who sought to depict modern urban life with honesty and directness. Rejecting the idealization of academic painting, they focused on ordinary scenes \u2014 cafes, lodging houses, and busy streets \u2014 painted with bold color and expressive brushwork.',
      'piccadilly.artwork_info': 'Charles Ginner, 1878\u20131952, <strong>Piccadilly Circus</strong>, ca. 1912',

      // ---- Tower Bridge ----
      'tower.desc_title': 'Tower Bridge',
      'tower.desc_p': '<strong>Tower Bridge</strong>, spanning the River Thames near the Tower of London, is one of the most recognisable landmarks in the world. Construction began in 1886 and the bridge was officially opened on 30 June 1894 by the Prince of Wales, later King Edward VII. A masterpiece of Victorian engineering, its distinctive twin towers and bascule mechanism — allowing the roadway to lift for passing ships — made it a symbol of Britain\'s industrial prowess at the height of the Empire.',
      'tower.analysis_p1': '<strong>Wyllie\'s</strong> <em>The Opening of Tower Bridge</em> is more than a landscape — it is a historical document. The painting captures the very moment the Prince of Wales\'s carriage crosses the newly opened bridge on 30 June 1894, surrounded by a flotilla of decorated vessels on the Thames and crowds gathered along the embankments. Wyllie, himself a master maritime painter, renders every detail — from the rigging of the ships to the pennants fluttering in the breeze — with the precision of a naval draughtsman and the warmth of a witness.',
      'tower.analysis_p2': '<strong>The 1890s</strong> marked the zenith of Britain\'s industrial and imperial confidence. Tower Bridge was more than a traffic solution — it was a deliberate statement of engineering ambition, designed in a Gothic style to harmonise with the adjacent Tower of London yet built with cutting-edge hydraulic machinery. The opening ceremony drew tens of thousands of spectators. It was, in essence, Victorian London\'s Olympic moment: a city showing off what it could build, to itself and to the world.',
      'tower.bio_p': '<strong>William Lionel Wyllie</strong> (5 July 1851 – 6 April 1931) was a British maritime painter, etcher, and illustrator, widely regarded as one of the finest marine artists of his generation. Born into a family of painters in London, he studied at the Royal Academy Schools from the age of 12. Wyllie dedicated his career to capturing the life of Britain\'s waterways — naval battles, bustling ports, and the everyday rhythm of the Thames. His deep knowledge of ships and the sea, combined with a meticulous realist technique, made his work both artistically compelling and historically invaluable.',
      'tower.style_p': '<strong>Victorian Maritime Realism</strong> emerged from Britain\'s deep relationship with the sea as an island nation and imperial power. Maritime painters like Wyllie were not merely landscape artists — they were chroniclers of national identity. Every ship, crane, and pennant in Wyllie\'s work is rendered with technical accuracy, reflecting the Victorian conviction that observation and detail were the highest virtues in both science and art. Wyllie\'s paintings read as love letters to the machinery of empire — but also, in their attention to crowds and ordinary onlookers, as democratic tributes to the people who made that machinery run.',
      'tower.artwork_info': 'William Lionel Wyllie, 1851–1931, <strong>The Opening of Tower Bridge</strong>, 1894',

      // ---- Timeline ----
      'tl.heading': 'Historical Timeline',
      'tl.t1_title': 'Greenwich Royal Observatory Founded',
      'tl.t1_date': '1675',
      'tl.t1_p': "King Charles II established the Royal Observatory in Greenwich, laying the foundation for modern astronomy and navigation.",
      'tl.t1_link': 'View Greenwich →',
      'tl.t2_title': "Canaletto Paints St. Paul's",
      'tl.t2_date': 'ca. 1754',
      'tl.t2_p': "Canaletto captures St. Paul's Cathedral in its full architectural glory — the only painting among his Thames views to focus on the entire building.",
      'tl.t2_link': "View St. Paul's →",
      'tl.t3_title': 'Turner Paints Greenwich',
      'tl.t3_date': 'ca. 1825',
      'tl.t3_p': "J.M.W. Turner presents a sweeping panorama from Greenwich Park, juxtaposing maps, telescopes, and ships to reflect on Britain's maritime past and industrial future.",
      'tl.t3_link': 'View Greenwich →',
      'tl.t4_title': 'The Victorian Era',
      'tl.t4_date': '1837–1901',
      'tl.t4_p': 'The Industrial Revolution reached its peak. London underwent sweeping transformation — infrastructure boomed, railways expanded, and the city emerged as a global cultural capital.',
      'tl.t5_title': 'Whistler & Monet in London',
      'tl.t5_date': 'ca. 1871',
      'tl.t5_p': 'Two masters converged on London. Whistler painted Chelsea in delicate tonal harmonies, while Monet captured Hyde Park in shifting light.',
      'tl.t5_link_c': 'View Chelsea →',
      'tl.t5_link_h': 'View Hyde Park →',
      'tl.t6_title': 'Pissarro Paints Westminster',
      'tl.t6_date': 'ca. 1890',
      'tl.t6_p': 'Camille Pissarro turned his eye to the Palace of Westminster — capturing the iconic Gothic Revival architecture through his distinctive broken brushwork.',
      'tl.t6_link': 'View Westminster →',
      'tl.t7_title': 'Tower Bridge Opens',
      'tl.t7_date': '1894',
      'tl.t7_p': 'On 30 June 1894, the Prince of Wales opened Tower Bridge before tens of thousands of spectators — a Victorian engineering marvel that symbolised Britain\'s industrial confidence at the Empire\'s zenith.',
      'tl.t7_link': 'View Tower Bridge →',

      'tl.t8_title': 'The Edwardian Era',
      'tl.t8_date': '1901–1910',
      'tl.t8_p': 'The Edwardian period blended opulence with social transformation. London flourished as a cultural hub, while labour movements signalled a new century.',
      'tl.t9_title': 'Ginner Paints Piccadilly Circus',
      'tl.t9_date': 'ca. 1912',
      'tl.t9_p': 'Charles Ginner captured the vibrant energy of Piccadilly Circus — its glowing advertisements, busy crowds, and the relentless pulse of modern London.',
      'tl.t9_link': 'View Piccadilly →',

      // Style card content (timeline) — keep English as default for academic content
      'tl.s1_hist': '<b>Historical context</b>: The Scientific Revolution was in full swing. Newton\'s <em>Principia</em> (1687) would soon reshape the world\'s understanding of nature.',
      'tl.s1_impact': '<b>Impact on art</b>: Precision, perspective, and a reverence for measurable reality informed everything from architectural draughtsmanship to landscape painting.',
      'tl.s1_p1': 'The late 17th century saw a flourishing of empirical science. The Royal Society (founded 1660) promoted observation and experimentation, and architecture — like Wren\'s designs — reflected rational order and grandeur.',
      'tl.s2_hist': '<b>Historical context</b>: The Enlightenment celebrated reason and individual experience. Rising literacy and a booming art market created a new class of cultural consumers — merchants, gentry, and professionals who wanted souvenirs of their travels.',
      'tl.s2_impact': '<b>Impact on art</b>: The demand for topographical accuracy merged with painterly atmosphere, transforming cityscape painting from mere documentation into a sophisticated artistic genre.',
      'tl.s2_p1': 'The Venetian School emphasised colour, light, and atmosphere over line and form. Canaletto\'s <em>vedute</em> (cityscape views) combined architectural precision with luminous skies, catering to British aristocrats on the Grand Tour.',
      'tl.s3_hist': '<b>Historical context</b>: The Industrial Revolution had transformed Britain into the "workshop of the world". Steam power, railways, and factories reshaped the landscape — and artists grappled with both wonder and anxiety.',
      'tl.s3_impact': '<b>Impact on art</b>: Turner\'s work captured the tension between nature and technology: steamships cutting through mist, the old world giving way to the new, light itself becoming a subject.',
      'tl.s3_p1': 'Romanticism rejected Enlightenment rationalism in favour of emotion, nature, and the sublime. Turner became known as the "Painter of Light", using bold colour and atmospheric effects to evoke awe and transience.',
      'tl.s4_hist': '<b>Historical context</b>: The Great Exhibition of 1851 showcased British industrial might to the world. The Empire was at its zenith, and London\'s population exploded from 1 to 6 million.',
      'tl.s4_impact': '<b>Impact on art</b>: Britain\'s global reach brought an influx of non-Western influences, while social reform movements pushed artists to confront urban poverty and the human cost of industrialisation.',
      'tl.s4_p1': 'Victorian art and architecture drew from multiple historical sources — Gothic Revival, Neoclassicism, and Orientalism coexisted. The Pre-Raphaelite Brotherhood rejected academic convention in favour of medieval sincerity and vivid colour.',
      'tl.s5_hist': '<b>Historical context</b>: The Franco-Prussian War (1870–71) drove French artists to London. The city\'s infamous smog, combined with the soft Thames light, created an accidental studio for atmospheric painting.',
      'tl.s5_impact': '<b>Impact on art</b>: London\'s pollution paradoxically produced beautiful effects — the "London particular" fog became a visual character in its own right, softening edges and dissolving forms.',
      'tl.s5_p1': 'Whistler\'s <em>Nocturnes</em> reduced the Thames to mood and colour — a precursor to abstraction. Monet, fleeing the Franco-Prussian War, found London\'s fog an irresistible subject for his study of light.',
      'tl.s6_hist': '<b>Historical context</b>: The <em>fin de siecle</em> brought both optimism and anxiety. Urbanisation accelerated, and artists increasingly turned to the modern city as their subject — the boulevard, the bridge, the crowd.',
      'tl.s6_impact': '<b>Impact on art</b>: Pissarro demonstrated that Impressionism was not bound to rural France — it could capture the pulse of a metropolis, the steam of trains, the haze over the Thames.',
      'tl.s6_p1': 'By the 1890s, Impressionism had matured. Pissarro applied its principles — broken colour, visible brushstrokes, and an emphasis on changing light — to subjects beyond the French countryside, finding new life in London\'s urban landscape.',
      'tl.s7_hist': '<b>Historical context</b>: The 1890s marked imperial Britain\'s zenith. Tower Bridge was its architectural manifesto: Gothic stonework concealing cutting-edge hydraulics. On 30 June 1894, 50,000 spectators watched the Prince of Wales open the bridge — a city performing its greatness to itself.',
      'tl.s7_impact': '<b>Impact on art</b>: Wyllie proved a civic ceremony deserved history painting\'s scale. The crowd, not the prince, is the protagonist. The bridge itself — medieval romance married to industrial muscle — became a metaphor for an empire balanced between tradition and transformation.',
      'tl.s7_p1': 'Wyllie, who entered the Royal Academy at twelve, belonged to a lineage of painter-sailors who rendered every spar and pennant with naval precision. His Tower Bridge watercolour is not romantic impression but forensic document — the Prince\'s carriage, the flotilla, the bunting, the crowd — recording a nation whose soul was measured in ships and bridges as much as cathedrals.',
      'tl.s8_hist': '<b>Historical context</b>: The suffragette movement intensified, the Labour Party was founded (1900), and social hierarchies were being questioned. Meanwhile, electric light transformed the nocturnal cityscape.',
      'tl.s8_impact': '<b>Impact on art</b>: A generation of artists sought to break free from academic tradition. The Camden Town Group (founded 1911) painted ordinary London life with unflinching honesty, paving the way for British modernism.',
      'tl.s8_p1': 'The Edwardian era was Britain\'s Belle Epoque — a final flourish of elegance before the Great War. In art, Post-Impressionism and the Bloomsbury Group challenged Victorian conventions with bold colour and formal experimentation.',
      'tl.s9_hist': '<b>Historical context</b>: On the eve of World War I, London was a city of speed, spectacle, and unease. Electric advertising had transformed the urban night, and the modern metropolis was both exhilarating and disorienting.',
      'tl.s9_impact': '<b>Impact on art</b>: Ginner\'s technique — building surfaces with thick, deliberate strokes — foreshadows the materiality of 20th-century painting.',
      'tl.s9_p1': 'Ginner was a key member of the Camden Town Group, known for thick impasto brushwork and a direct, realist approach. His Piccadilly Circus teems with energy — electric signs, omnibuses, and a restless crowd compressed into a dense, almost claustrophobic composition.',
      'tl.s1_style': 'Style: Baroque Scientific Spirit',
      'tl.s2_style': 'Style: Venetian School / Vedute',
      'tl.s3_style': 'Style: Romanticism',
      'tl.s4_style': 'Style: Victorian Eclecticism',
      'tl.s5_style': 'Style: Tonalism & Impressionism',
      'tl.s6_style': 'Style: Late Impressionism',
      'tl.s7_style': 'Style: Victorian Maritime Realism',
      'tl.s8_style': 'Style: Belle Epoque & Early Modernism',
      'tl.s9_style': 'Style: Camden Town Group / Post-Impressionism',

      // Map popup
      'map.stpauls': "St. Paul's Cathedral",
      'map.greenwich': 'Greenwich',
      'map.chelsea': 'Chelsea',
      'map.hydepark': 'Hyde Park',
      'map.westminster': 'Palace of Westminster',
      'map.piccadilly': 'Piccadilly Circus',
      'map.towerbridge': 'Tower Bridge',
      'map.view': 'View details →',

      // ---- Music Gallery ----
      'music.page_title': 'Music Gallery — The Art Map of London',
      'music.heading': 'Music Gallery',
      'music.subtitle': 'Each landmark, each era, each painting — paired with a piece of music that echoes its spirit.',
      'music.label.reason': 'Why this piece',
      'music.label.background': 'Creation background',
      'music.label.style': 'Style resonance',
      'music.badge.home': 'Home',
      'music.badge.stpauls': "St. Paul's Cathedral",
      'music.badge.greenwich': 'Greenwich',
      'music.badge.chelsea': 'Chelsea',
      'music.badge.hydepark': 'Hyde Park',
      'music.badge.westminster': 'Palace of Westminster',
      'music.badge.piccadilly': 'Piccadilly Circus',
      'music.badge.tower': 'Tower Bridge',
      'music.badge.timeline': 'Timeline',
      'music.badge.map': 'Map',

      // Home
      'music.home.title': 'Clair de Lune — Claude Debussy (1905)',
      'music.home.reason': "A quiet moonlit invitation to step into the journey ahead. Debussy's floating notes mirror the home page's opening line: \"Art is London's flowing epic,\" setting a contemplative tone for the century-spanning walk to come.",
      'music.home.background': 'Published in 1905 as the third movement of the Suite Bergamasque. Debussy sought to strip music of narrative function, offering instead pure sensory experience — a reverie suspended in time.',
      'music.home.style': 'Impressionist painting × Impressionist music — both dissolve hard edges into atmosphere. The home page hero image and Debussy share the same logic: evoke, do not declare.',

      // St Paul's
      'music.stpauls.title': 'Water Music: Overture — George Frideric Handel (1717)',
      'music.stpauls.reason': "Handel was 18th-century London's most celebrated composer. The Water Music was composed for a royal pageant on the River Thames — a geographical and temporal twin to Canaletto's Thames-side St. Paul's Cathedral.",
      'music.stpauls.background': 'On 17 July 1717, King George I hosted a royal river concert. A barge carried fifty musicians down the Thames while tens of thousands lined the banks, making it one of the first great public musical spectacles in London.',
      'music.stpauls.style': 'Baroque order and splendour × Venetian School architectural precision — rational structures that house sensory magnificence. Both Canaletto and Handel worked for aristocratic patrons yet produced works of enduring democratic appeal.',

      // Greenwich
      'music.greenwich.title': 'Symphony No. 6 "Pastoral" — Ludwig van Beethoven (1808)',
      'music.greenwich.reason': "Turner painted London from the heights of Greenwich Park; Beethoven composed his Pastoral Symphony from the hills outside Vienna. Both works stand at an elevated distance, surveying the vast interplay of civilisation and nature.",
      'music.greenwich.background': "Premiered in 1808, Beethoven inscribed it \"recollections of country life — more expression of feeling than painting\". It pioneered programme music, where emotion and imagery guided the score.",
      'music.greenwich.style': 'A turning point between Classicism and Romanticism — Turner\'s precise composition strains against the surge of emotion beneath, echoing Beethoven\'s middle-period symphonies. Both refuse to choose between structure and passion.',

      // Chelsea
      'music.chelsea.title': 'Clair de Lune — Claude Debussy (1905)',
      'music.chelsea.reason': "Whistler titled his painting 'Nocturne' — a direct borrowing from musical vocabulary. Debussy painted moonlight with notes. Both artists rejected literal representation in favour of atmosphere, suggestion, and the unsayable.",
      'music.chelsea.background': 'Published in 1905 as part of the Suite Bergamasque. Debussy was deeply influenced by Impressionist painters and Symbolist poets, striving to make music that dissolved narrative into pure sensory presence.',
      'music.chelsea.style': 'Tonalism × Impressionist music — dissolved contours, muted palettes, the capture of a singular fleeting mood. Whistler\'s butterfly signature and Debussy\'s drifting harmonies: two artists insisting that atmosphere is content.',

      // Hyde Park
      'music.hydepark.title': 'Arabesque No. 1 — Claude Debussy (1891)',
      'music.hydepark.reason': "Arabesque means a flowing ornamental curve — the very shape of Monet's dappled light filtering through Hyde Park's trees. The piece's cascading arpeggios mirror the dance of sun and shadow across the park.",
      'music.hydepark.background': 'Composed in 1891, the title draws from decorative art — the sinuous lines of Islamic and Art Nouveau ornament. It already reveals Debussy\'s break from conventional harmony, anticipating the Impressionist revolution in music.',
      'music.hydepark.style': 'Impressionist painting × Impressionist music — Monet captures light in short distinct brushstrokes; Debussy dissolves traditional harmony in liquid arpeggios. Both make the fleeting moment permanent.',

      // Westminster
      'music.westminster.title': 'Gymnopédie No. 1 — Erik Satie (1888)',
      'music.westminster.reason': "Pissarro's Westminster Palace emerges from the London fog in softened, muted tones. Satie's music is the fog itself — spare, unhurried, refusing drama. Both share a restrained majesty.",
      'music.westminster.background': "Gymnopédie takes its name from ancient Spartan ritual dances performed by naked youths. Satie created an unprecedented musical language — minimal notes, open harmonies, and a tempo marking that reads \"slowly, with pain\".",
      'music.westminster.style': 'Late Impressionism × proto-Minimalism — Pissarro stripped away excess detail; Satie stripped away all ornament. Both prove that less, rendered with precision, yields more.',

      // Piccadilly
      'music.piccadilly.title': 'Orpheus in the Underworld — Jacques Offenbach (1858)',
      'music.piccadilly.reason': "Ginner's Piccadilly is London's carnival night — neon, crowds, omnibuses. Offenbach's operetta is Paris's carnival night — witty, irreverent, subverting everything. The two great cities' nocturnal energies resonate across the Channel.",
      'music.piccadilly.background': "Premiered in Paris in 1858, it rewrites the Greek myth of Orpheus as a satirical farce. The famous Can-Can finale became the unofficial anthem of Second Empire hedonism — music as pure joyful disobedience.",
      'music.piccadilly.style': 'Camden Town Group × French operetta — the former painted urban life with unvarnished honesty; the latter celebrated the moment with irreverent lightness. Beneath their different surfaces lies the same unadorned embrace of urban vitality.',

      // Tower Bridge
      'music.tower.title': 'William Tell Overture — Gioachino Rossini (1829)',
      'music.tower.reason': "The day Tower Bridge opened, fifty decorated vessels paraded and fifty thousand spectators cheered. Rossini's overture traces the same dramatic arc — storm, pastoral calm, and triumphant finale — as the bridge's journey from blueprint to imperial icon.",
      'music.tower.background': "Rossini's last opera, premiered in Paris in 1829. The overture's four sections — Dawn, Storm, Pastorale, and Finale March — form one of the most dramatic instrumental narratives in the orchestral repertoire.",
      'music.tower.style': 'Victorian maritime realism × Italian Romantic opera — Wyllie recorded history with watercolour precision; Rossini composed heroic narrative with orchestral grandeur. Grandeur and exactitude as twin virtues, whether in stone or sound.',

      // Timeline
      'music.timeline.title': 'The Planets: Jupiter — Gustav Holst (1916)',
      'music.timeline.reason': "Jupiter is the most expansive movement of The Planets — a celebration of growth and prosperity. Its solemn yet warm central melody feels like a tribute to two centuries of London's artistic inheritance, spanning Canaletto to Ginner.",
      'music.timeline.background': 'Composed between 1914 and 1916, during the shadow of the Great War. Holst drew on astrology rather than astronomy, giving each planet a distinct emotional character. Jupiter embodies joviality, abundance, and the ceremonial.',
      'music.timeline.style': 'Late Romanticism × British National School — Holst channels the European symphonic tradition through a distinctly English sensibility, mirroring how London absorbed continental art movements while forging its own visual identity.',

      // Map
      'music.map.title': 'Orpheus in the Underworld — Jacques Offenbach (1858)',
      'music.map.reason': "The same piece that animates Piccadilly — but here, across the full map, Offenbach's buoyant tempo becomes an invitation: click any marker, and enter your own London.",
      'music.map.background': "Premiered in 1858 Paris. Offenbach's operetta strips the Orpheus myth of its solemnity, turning it into a celebration of the here-and-now. Its lightness is deliberate — music that refuses to take itself too seriously.",
      'music.map.style': "Light opera × interactive cartography — Offenbach's comic irreverence mirrors the map's democratic spirit: every landmark is equal, every visitor charts their own route. No prescribed path, no hierarchy — just exploration.",

    },

    zh: {
      // Navbar
      'nav.home': '首页', 'nav.map': '地图', 'nav.timeline': '时间线',
      'nav.map_drop': '地图 ▾', 'nav.stpauls': '圣保罗大教堂',
      'nav.greenwich': '格林威治', 'nav.chelsea': '切尔西',
      'nav.hydepark': '海德公园', 'nav.westminster': '威斯敏斯特宫',
      'nav.piccadilly': '皮卡迪利广场',
      'nav.towerbridge': '塔桥',
      'nav.music': '音乐',
      'lang.switch': 'EN', 'lang.label': '中',

      // 首页
      'hero.title': '<span class="hw hw1">艺术</span><span class="hw hw2">是</span><span class="hw hw3">伦敦</span><br><span class="hw hw4">流</span><span class="hw hw5">动</span><span class="hw hw6">的</span><br><span class="hw hw7">史</span><span class="hw hw8">诗</span>',
      'hero.locations': '涵盖 <strong>7 个地点</strong>',
      'hero.years': '跨越 <strong>220 年</strong>',
      'intro.heading': '当艺术遇见城市',
      'intro.line1': '透过经典画作，走进伦敦。',
      'intro.line2': '从卡纳莱托笔下的圣保罗大教堂，到金纳描绘的皮卡迪利广场，探索这座城市的地标与隐秘角落。',
      'intro.line3': '通过我们的交互地图和时间线，发现每幅作品如何映射伦敦的历史、文化与不断演变的艺术风格。',
      'intro.line4': '如果您愿意，请随音乐与我们一起走过伦敦的百年。',
      'home.music_teaser': '每个地标都有一段与之共鸣的古典音乐——请随我们，边走边听。',
      'home.music_link': '探索音乐展馆 →',
      'intro.credit': '滑铁卢桥，克劳德·莫奈，1903',
      'map.heading': '探索地图',
      'map.subtitle': '点击标记查看画作，或<a href="map.html">打开全屏地图 →</a>',
      'carousel.heading': '「美术馆」— 18 至 20 世纪',
      'carousel.stpauls': '圣保罗大教堂', 'carousel.greenwich': '格林威治',
      'carousel.chelsea': '切尔西', 'carousel.hydepark': '海德公园',
      'carousel.westminster': '威斯敏斯特宫', 'carousel.piccadilly': '皮卡迪利广场', 'carousel.towerbridge': '塔桥',

      // Footer
      'footer.contact': '联系方式：', 'footer.copy': '© 2025 The Art Map of London。保留所有权利。',
      'footer.nonprofit': '非盈利网站，致力于艺术与文化教育。',

      // 共享
      'sec.description': '地点概览', 'sec.analysis': '画作分析与历史背景',
      'sec.biography': '艺术家生平', 'sec.style': '风格解读',
      'sec.view_details': '查看详情 →',

      // ---- 圣保罗大教堂 ----
      'stpauls.desc_title': '圣保罗大教堂',
      'stpauls.desc_p': '坐落于伦敦路德门山，是 17 世纪克里斯托弗·雷恩爵士在伦敦大火后城市重建中设计的杰作。其标志性穹顶受圣彼得大教堂启发，高达 111 米，成为伦敦天际线的重要标志。作为二战大轰炸期间坚韧精神的象征，大教堂具有深远的历史与文化意义。这里也是重大国事活动的举办地，包括 1981 年查尔斯王子（现查尔斯三世国王）与戴安娜王妃的婚礼。',
      'stpauls.analysis_p1': '卡纳莱托的《圣保罗大教堂》在他所有泰晤士河景作品中独树一帜——这是唯一一幅将整座建筑作为画面核心的画作。作品为其重要的英国赞助人托马斯·霍利斯所作，既突出了圣保罗大教堂的建筑壮丽，也将其置于生动的社会背景之中。大教堂占据画面主导，而广场与周边街道上交谈的人群、进出的优雅马车，共同捕捉了建筑宏伟与都市活力之间的动态交融。',
      'stpauls.analysis_p2': '18 世纪的伦敦不仅是国家的政治经济中心，更成为全球商业与金融的枢纽。识字率的提升为广泛的文化消费奠定了基础，艺术市场蓬勃发展，艺术品交易空前活跃。新兴中产阶级——商人、乡绅、自耕农和专业人士——成为时代的文化精英，推动了对文化产品的需求。在卡纳莱托的《圣保罗大教堂》中，优雅的马车、交谈的市民等元素生动捕捉了都市生活的活力，映射出中产阶级与贵族在塑造伦敦社会文化景观中的关键角色。',
      'stpauls.bio_p': '乔瓦尼·安东尼奥·卡纳尔（1697年10月18日－1768年4月19日），世称卡纳莱托，是 18 世纪著名的意大利威尼斯画派画家，以其描绘威尼斯及其他欧洲城市的城市风景画（Vedute）闻名于世。他的作品不仅展现了卓越的建筑精确性与细节，更赋予画面生动的光影与氛围，成为 18 世纪欧洲城市风景画的典范之作。',
      'stpauls.style_p': '威尼斯画派是意大利文艺复兴时期最重要的艺术运动之一，以威尼斯为中心，于 15 世纪末至 16 世纪中期达到鼎盛。威尼斯画派强调色彩、光线与氛围的运用，呈现出独特的浪漫与感性，同时注重对自然的描绘，尤其在风景与背景中倾注了大量心力，并对人物情感的表达给予了极大关注。',
      'stpauls.artwork_info': '卡纳莱托，1697–1768，<strong>圣保罗大教堂</strong>，约 1754 年',

      // ---- 格林威治 ----
      'greenwich.desc_title': '格林威治',
      'greenwich.desc_p': '<strong>格林威治</strong>是伦敦东南部一座历史悠久的小镇，以海洋遗产和本初子午线及格林威治标准时间（GMT）的所在地而闻名。它位于泰晤士河南岸，距查令十字街 8.9 公里，拥有由查理二世国王于 1675 年建立的皇家天文台。尽管自 1998 年起不再用于天文研究，天文台仍因作为本初子午线所在地而意义非凡——零度经线的标志正是 1884 年国际子午线会议所正式指定的。',
      'greenwich.analysis_p1': '<strong>透纳</strong>呈现了一幅从格林威治公园眺望大伦敦的壮阔全景，俯瞰雷恩设计的皇家海军医院、泰晤士河与远处的城市。前景中散落着地图与地球仪，一位佩戴眼镜、拄着手杖的退役海军军官正在审视两张设计图——暗喻大不列颠辉煌的过往。稍远处，一位戴着时尚礼帽和黄手套的男子高举双手，庆祝着繁荣的当下。最后，在山坡脚下，第三个人物透过望远镜观察着河面上蒸汽船与帆船之间的竞争——向未来的微妙致意。',
      'greenwich.analysis_p2': '<strong>到 1825 年</strong>，<strong>小型手持望远镜</strong>，如单筒和双筒型号，已经广泛普及，主要用于航海、军事和地面观测。',
      'greenwich.bio_p': '<strong>约瑟夫·马洛德·威廉·透纳 RA</strong>（1775年4月23日－1851年12月19日），生前被称为威廉·透纳，是英国浪漫主义时期最具代表性的风景画家之一。他以其对色彩的大胆运用和对光影的卓越掌控而闻名，被誉为「光之画家」。他的作品对后来的印象派及现代艺术运动产生了深远影响。',
      'greenwich.style_p': '<strong>浪漫主义</strong>回应了工业化带来的焦虑，呼唤回归自然、尊崇传统。浪漫主义艺术家致力于运用光影和色彩营造情感氛围，自然风景被赋予了象征意义。虽然浪漫主义本质上批判工业化与城市化，但透纳的作品反映了他对这些变化的复杂态度。他常常将自然与人类文明——尤其是技术进步——并置。这种对比不仅体现了人类对自然的征服，也折射出工业化在浪漫主义艺术家心中引起的深层动荡。',
      'greenwich.artwork_info': '约瑟夫·马洛德·威廉·透纳，1775–1851，<strong>从格林威治眺望伦敦</strong>，约 1825 年',

      // ---- 切尔西 ----
      'chelsea.desc_title': '切尔西',
      'chelsea.desc_p': '<strong>切尔西</strong>位于伦敦西南部，属于肯辛顿与切尔西皇家自治市，是一片以悠久历史与深厚文化底蕴著称的富庶地区。切尔西长期以来一直是艺术家、作家和名流的聚集地，其历史可追溯至罗马时代，但真正迅速发展是在 17 至 18 世纪，成为伦敦上流社会的聚居地。',
      'chelsea.analysis_p1': '<strong>惠斯勒</strong>将音乐融入绘画，他的「夜曲」系列宛如音符的谱写。这幅作品描绘了从巴特西桥眺望的景象，艺术家凝视着对岸的切尔西。切尔西老教堂的塔楼在画布右侧隐约可见，前景中一位渔夫凝视着一艘小驳船。这是惠斯勒夜曲系列的第一幅作品，旨在传达泰晤士河在黄昏或夜晚的宁静之美。蝴蝶作为日本艺术中频繁出现的装饰元素，象征变化、蜕变与美。日本浮世绘版画的影响体现在作品中相对简约的色调，以及位于画面中下方、被惠斯勒采用为个人标志性签名的蝴蝶图案。',
      'chelsea.analysis_p2': '<strong>19 世纪</strong>的欧洲经历了加速的工业革命，社会快速现代化，城市化日益加剧。神奈川条约签订后，日本与西方国家建立了外交与贸易关系。日本艺术的简洁与非常规形式为艺术家们提供了反思和突破工业化与机械化桎梏的契机。到 19 世纪末，欧洲艺术家——尤其是法英两国——深受日本艺术特别是浮世绘版画的影响，这股被称为「日本主义」的热潮在西方艺术界引发了广泛的兴趣。',
      'chelsea.bio_p': '<strong>詹姆斯·麦克尼尔·惠斯勒</strong>（1834年7月11日－1903年7月17日），出生于美国的英国画家，以其独特的艺术风格和对色彩与构图的创新而闻名。他是 19 世纪末艺术界的重要人物，也是印象派与后印象派的代表人物之一。惠斯勒的作品涵盖风景、肖像与夜曲，尤以其「夜曲」系列闻名。他的艺术理念深受音乐启发，他试图将音乐的节奏与音调融入绘画，强调色彩与光线的和谐，而非传统绘画的叙事性或细节描绘。此外，他的作品亦受到日本艺术——特别是浮世绘版画的影响。',
      'chelsea.style_p': '<strong>东方主义</strong>，尤其是日本主义，对惠斯勒及同时期许多印象派画家产生了深远影响。平面化的剪影造型是同期浮世绘版画的典型特征。单色渲染、可见的笔触和柔和的构图，皆呼应了水墨画的美学风格。',
      'chelsea.artwork_info': '詹姆斯·麦克尼尔·惠斯勒，1834–1903，<strong>夜曲：蓝与银——切尔西</strong>，约 1871 年',

      // ---- 海德公园 ----
      'hydepark.desc_title': '海德公园',
      'hydepark.desc_p': '<strong>海德公园</strong>位于伦敦市中心，是这座城市最具标志性的绿地之一，占地 350 英亩，是从肯辛顿宫到白金汉宫的四座皇家公园中最大的一座。公园在历史上以言论自由和公众示威的场所而闻名，演讲角至今仍是民主表达的象征。',
      'hydepark.analysis_p1': '<strong>莫奈</strong>在 1871 年旅居伦敦期间，创作了多幅海德公园的风景画，捕捉了不同光线与季节下公园的面貌。这幅作品描绘了一个宁静的午后场景，斑驳的阳光透过树叶洒下柔和的光影，漫步其中的人们悠然自得，展现了维多利亚时代午后伦敦最珍贵公共空间中的静谧与美好。',
      'hydepark.analysis_p2': '<strong>1871 年的伦敦</strong>是一座正在转型的城市。普法战争使包括莫奈和毕沙罗在内的许多法国艺术家流亡伦敦。城市的公园与河景为这些艺术家提供了丰富的创作素材，他们也将印象派的革命性技法带到了英国。',
      'hydepark.bio_p': '<strong>克劳德·莫奈</strong>（1840年11月14日－1926年12月5日），法国画家，印象派运动的奠基人之一。他的画作《日出·印象》为这一运动赋予了名称。莫奈毕生致力于户外写生（en plein air），追求捕捉光线与氛围的瞬间效果，彻底革新了风景画。',
      'hydepark.style_p': '<strong>印象派</strong>打破了学院派传统，强调艺术家对场景的即时感知。印象派画家使用短促而可见的笔触、纯粹的未混合色彩，注重自然光的效果。他们常常在户外作画，追求捕捉转瞬即逝的瞬间，而非精心布置的画室场景。',
      'hydepark.artwork_info': '克劳德·莫奈，1840–1926，<strong>海德公园</strong>，约 1871 年',

      // ---- 威斯敏斯特 ----
      'westminster.desc_title': '威斯敏斯特宫',
      'westminster.desc_p': '<strong>威斯敏斯特宫</strong>，又称议会大厦，矗立于泰晤士河北岸的威斯敏斯特市。这座标志性的哥特复兴式建筑由查尔斯·巴里爵士和奥古斯都·普金设计，在原宫殿于 1834 年被大火焚毁后，于 1840 年至 1876 年间建成。它至今仍是英国议会所在地，并被列为联合国教科文组织世界遗产。',
      'westminster.analysis_p1': '<strong>毕沙罗</strong>从泰晤士河对岸的视角创作了多幅威斯敏斯特宫的画作。这幅作品捕捉了建筑在伦敦雾气中若隐若现的标志性轮廓，哥特式尖顶在朦胧的雾霭中变得柔和。克制的色调与破碎的笔触体现了毕沙罗成熟期印象派风格的典型特征。',
      'westminster.analysis_p2': '<strong>19 世纪末</strong>的伦敦已成为全球帝国的首都。泰晤士河是繁忙的商业动脉，议会大厦则是英国治理与传统的象征。艺术家们被这条河流所吸引——它既融合了自然之美，又承载着人类成就的壮丽。',
      'westminster.bio_p': '<strong>卡米耶·毕沙罗</strong>（1830年7月10日－1903年11月13日），丹麦裔法国印象派与新印象派画家，被誉为「印象派之父」，是唯一一位参加了全部八次印象派展览的艺术家。毕沙罗的作品连接了巴比松画派、印象派与修拉和西涅克的点彩派创新。',
      'westminster.style_p': '<strong>晚期印象派</strong>中，艺术家们将这一运动的原则应用于越来越多样化的题材。毕沙罗将破碎色彩和空气透视的技法运用于城市景观，在纪念性建筑与变幻天气的交织中寻找诗意。',
      'westminster.artwork_info': '卡米耶·毕沙罗，1830–1903，<strong>威斯敏斯特宫</strong>，约 1890 年',

      // ---- 皮卡迪利 ----
      'piccadilly.desc_title': '皮卡迪利广场',
      'piccadilly.desc_p': '<strong>皮卡迪利广场</strong>是伦敦西区的一个道路交叉口及公共空间，建于 1819 年，连接摄政街与皮卡迪利大街。广场以霓虹灯牌、沙夫茨伯里纪念喷泉以及重要聚会地点的身份而闻名，长久以来被视为伦敦娱乐区繁华的心脏地带。',
      'piccadilly.analysis_p1': '<strong>金纳</strong>的这幅皮卡迪利广场捕捉了 20 世纪初伦敦的蓬勃活力。电光广告牌照亮了场景，密集的人群与公共马车构成了充满张力的画面。金纳厚重的厚涂技法赋予画面近乎雕塑般的质感，强调了现代都市的物质性。',
      'piccadilly.analysis_p2': '<strong>爱德华时代</strong>代表着一个转型期。电力照明彻底改变了城市夜景，大众广告重塑了视觉环境。皮卡迪利广场成为现代大都市的象征——令人目眩、拥挤喧嚣、永不停歇。',
      'piccadilly.bio_p': '<strong>查尔斯·金纳</strong>（1878年3月4日－1952年1月6日），英国卡姆登镇小组画家。以其细腻厚重笔触下的城市景观闻名，金纳将独特的后印象派感受力注入对伦敦日常生活的描绘中。他的风格融合了塞尚的结构清晰与梵高的生动观察。',
      'piccadilly.style_p': '<strong>卡姆登镇小组</strong>（1911–1913）是一群英国后印象派艺术家的团体，致力于以真诚和直率描绘现代城市生活。他们摒弃学院派绘画的理想化，专注于寻常场景——咖啡馆、寄宿公寓和繁忙的街道——以大胆的色彩和富有表现力的笔触呈现。',
      'piccadilly.artwork_info': '查尔斯·金纳，1878–1952，<strong>皮卡迪利广场</strong>，约 1912 年',

      // ---- 塔桥 ----
      'tower.desc_title': '塔桥',
      'tower.desc_p': '<strong>塔桥</strong>横跨泰晤士河、毗邻伦敦塔，是世界上最知名的地标之一。桥梁于 1886 年动工，1894 年 6 月 30 日由威尔士亲王（后来的爱德华七世）主持正式开通。作为维多利亚工程技术的杰作，其标志性的双塔和可升降的桥面——为通行船只而设——使其成为大英帝国鼎盛时期工业实力的象征。',
      'tower.analysis_p1': '<strong>威利的</strong>《塔桥开通典礼》不只是一幅风景画——它是一份历史档案。画面捕捉了 1894 年 6 月 30 日威尔士亲王的马车穿越新建成的桥梁的那一刻，泰晤士河上装饰华丽的船队云集，河岸上挤满了围观的人群。威利本人是一位海事绘画大师，他细腻地描绘了每一个细节——从船只的索具到微风中飘扬的三角旗——兼具海军绘图师的精确与亲历者的温度。',
      'tower.analysis_p2': '<strong>1890 年代</strong>标志着英国工业与帝国自信的巅峰。塔桥不仅是一座交通解决方案——它是一份蓄意的工程宣言，以哥特风格设计与毗邻的伦敦塔相协调，却使用了最尖端的液压机械。开通典礼吸引了数以万计的观众。它在本质上就是维多利亚伦敦的「奥运时刻」：一座城市向自身和世界展示其建设能力的盛典。',
      'tower.bio_p': '<strong>威廉·莱昂内尔·威利</strong>（1851年7月5日－1931年4月6日），英国海事画家、蚀刻师和插画家，被公认为他那一代最杰出的海洋艺术家之一。他出生于伦敦一个画家世家，12 岁即进入皇家艺术学院学习。威利毕生致力于描绘英国水域的生命——海战、繁忙的港口以及泰晤士河的日常律动。他对船舶和海洋的深厚知识，加上一丝不苟的现实主义技法，使其作品既具有艺术感染力，又具有不可替代的历史价值。',
      'tower.style_p': '<strong>维多利亚海事现实主义</strong>源于英国作为岛国和帝国力量与海洋的深厚联系。像威利这样的海事画家不仅是风景画家——他们是民族身份的记录者。威利笔下的每一艘船、每一台起重机、每一面三角旗都以技术性的精确呈现，体现了维多利亚时代对观察与细节无论在科学还是艺术中皆为至高美德的信念。威利的画作读来如同致帝国机械的情书——但同时也因为其对人群和普通围观者的关注，而成为对驱动这些机械运转的人们的民主致敬。',
      'tower.artwork_info': '威廉·莱昂内尔·威利，1851–1931，<strong>塔桥开通典礼</strong>，1894',

      // ---- 时间线 ----
      'tl.heading': '历史时间线',
      'tl.t1_title': '格林威治皇家天文台成立',
      'tl.t1_date': '1675 年',
      'tl.t1_p': '查理二世国王在格林威治建立了皇家天文台，为现代天文学和航海术奠定了基础。',
      'tl.t1_link': '查看格林威治 →',
      'tl.t2_title': '卡纳莱托描绘圣保罗大教堂',
      'tl.t2_date': '约 1754 年',
      'tl.t2_p': '卡纳莱托将圣保罗大教堂的全貌尽收画中——这是他所有泰晤士河景作品中唯一一幅以整座建筑为核心的画作。',
      'tl.t2_link': '查看圣保罗大教堂 →',
      'tl.t3_title': '透纳描绘格林威治',
      'tl.t3_date': '约 1825 年',
      'tl.t3_p': '透纳展现了从格林威治公园眺望的壮阔全景，将地图、望远镜与船只并置，反思大不列颠的海洋过往与工业未来。',
      'tl.t3_link': '查看格林威治 →',
      'tl.t4_title': '维多利亚时代',
      'tl.t4_date': '1837–1901',
      'tl.t4_p': '工业革命达到顶峰。伦敦经历了全面变革——基础设施蓬勃发展，铁路不断延伸，这座城市崛起为全球文化之都。',
      'tl.t5_title': '惠斯勒与莫奈齐聚伦敦',
      'tl.t5_date': '约 1871 年',
      'tl.t5_p': '两位大师在伦敦交汇。惠斯勒以细腻的色调描绘切尔西河畔，莫奈则在变幻的光影中捕捉海德公园的韵味。',
      'tl.t5_link_c': '查看切尔西 →',
      'tl.t5_link_h': '查看海德公园 →',
      'tl.t6_title': '毕沙罗描绘威斯敏斯特宫',
      'tl.t6_date': '约 1890 年',
      'tl.t6_p': '卡米耶·毕沙罗将目光投向威斯敏斯特宫——以其独特的破碎笔触捕捉了这座标志性哥特复兴建筑的韵味。',
      'tl.t6_link': '查看威斯敏斯特宫 →',
      'tl.t7_title': '塔桥开通',
      'tl.t7_date': '1894 年',
      'tl.t7_p': '1894 年 6 月 30 日，威尔士亲王在数万观众的注视下主持了塔桥的开通典礼——这一维多利亚工程奇迹象征了大英帝国鼎盛时期的工业自信。',
      'tl.t7_link': '查看塔桥 →',
      'tl.t8_title': '爱德华时代',
      'tl.t8_date': '1901–1910',
      'tl.t8_p': '爱德华时代融合了奢华与社会变革。伦敦作为文化中心繁荣发展，工人运动则预示着一个新世纪的到来。',
      'tl.t9_title': '金纳描绘皮卡迪利广场',
      'tl.t9_date': '约 1912 年',
      'tl.t9_p': '查尔斯·金纳捕捉了皮卡迪利广场的蓬勃活力——闪耀的广告牌、熙攘的人群和现代伦敦永不停歇的脉搏。',
      'tl.t9_link': '查看皮卡迪利广场 →',

      // 时间线风格卡片（中文摘要）
      'tl.s1_style': '风格：巴洛克科学精神',
      'tl.s2_style': '风格：威尼斯画派 / 城市风景画',
      'tl.s3_style': '风格：浪漫主义',
      'tl.s4_style': '风格：维多利亚折衷主义',
      'tl.s5_style': '风格：色调主义与印象派',
      'tl.s6_style': '风格：晚期印象派',
      'tl.s7_style': '风格：维多利亚海事现实主义',
      'tl.s7_p1': '威利 12 岁入皇家艺术学院，属于通晓每一根桅杆的「画家-水手」谱系。他的塔桥水彩不是浪漫印象，而是法医档案——亲王的马车、河上船队、彩旗与人群——记录了一个由船舶与桥梁丈量灵魂的国度。',
      'tl.s7_hist': '<b>历史背景</b>：1890 年代是大英帝国的巅峰。塔桥是其建筑宣言：哥特石材下藏着最尖端的水压机械。1894 年 6 月 30 日，五万观众见证威尔士亲王开通桥梁——一座城市向自身展示自身的伟大。',
      'tl.s7_impact': '<b>对艺术的影响</b>：威利证明了公共仪式配得上历史画的尺幅。人群而非亲王是主角。塔桥本身——中世纪浪漫与工业力量的结合——成为帝国在传统与变革间平衡的隐喻。',

      'tl.s8_style': '风格：美好时代与早期现代主义',
      'tl.s9_style': '风格：卡姆登镇小组 / 后印象派',

      // 时间线风格卡片正文
      'tl.s1_p1': '17 世纪晚期见证了经验科学的蓬勃发展。成立于 1660 年的皇家学会提倡观察与实验，建筑——如雷恩的设计——则反映了理性的秩序与宏伟。',
      'tl.s1_hist': '<b>历史背景</b>：科学革命正如火如荼。牛顿的《自然哲学的数学原理》（1687）即将重塑人类对自然的认知。',
      'tl.s1_impact': '<b>对艺术的影响</b>：精确、透视和对可测量现实的尊崇，渗透到了从建筑设计到风景画的方方面面。',
      'tl.s2_p1': '威尼斯画派强调色彩、光线与氛围，而非线条与形式。卡纳莱托的城市风景画（vedute）将建筑精确性与明亮的天空融为一体，迎合了英国贵族壮游（Grand Tour）的需求。',
      'tl.s2_hist': '<b>历史背景</b>：启蒙运动推崇理性与个人体验。识字率的提升和蓬勃发展的艺术市场催生了新一代文化消费者。',
      'tl.s2_impact': '<b>对艺术的影响</b>：对地形精确性的需求与绘画氛围相融合，将城市风景画从单纯的记录转变为精致的艺术门类。',
      'tl.s3_p1': '浪漫主义摒弃了启蒙运动的理性主义，转而拥抱情感、自然与崇高。透纳被誉为「光之画家」，他以大胆的色彩和氛围效果唤起敬畏与无常之感。',
      'tl.s3_hist': '<b>历史背景</b>：工业革命已将英国变成了「世界工厂」。蒸汽动力、铁路和工厂重塑了地貌景观。',
      'tl.s3_impact': '<b>对艺术的影响</b>：透纳捕捉了自然与技术之间的张力——蒸汽船穿越迷雾，旧世界让位于新时代。',
      'tl.s4_p1': '维多利亚时代的艺术与建筑汲取了多元历史源流——哥特复兴、新古典主义与东方主义并存。前拉斐尔派兄弟会则摒弃了学院派的陈规。',
      'tl.s4_hist': '<b>历史背景</b>：1851 年万国博览会展示了英国的工业实力。伦敦人口从 100 万激增至 600 万。',
      'tl.s4_impact': '<b>对艺术的影响</b>：英国的全球触角带来了非西方的影响，而社会改革则推动艺术家直面城市贫困。',
      'tl.s5_p1': '惠斯勒的「夜曲」将泰晤士河还原为情绪与色彩——近乎抽象的早期探索。莫奈在普法战争期间流亡伦敦，发现城市的雾霾是他研究光线不可抗拒的题材。',
      'tl.s5_hist': '<b>历史背景</b>：普法战争（1870–71）将法国艺术家推向伦敦。城市的浓雾意外地成为了氛围绘画的天然画室。',
      'tl.s5_impact': '<b>对艺术的影响</b>：伦敦的污染竟产生了美丽的效果——雾霾成为视觉主角，柔化了边缘，消解了形态。',
      'tl.s6_p1': '到了 1890 年代，印象派已臻成熟。毕沙罗将其原则——破碎的色彩、可见的笔触、变幻的光线——应用于法国乡间以外的题材。',
      'tl.s6_hist': '<b>历史背景</b>：世纪末既充满乐观也伴随着焦虑。城市化加速，艺术家纷纷转向现代都市作为创作题材。',
      'tl.s6_impact': '<b>对艺术的影响</b>：毕沙罗证明了印象派并非局限于法国乡村——它可以捕捉大都市的脉搏、火车的蒸汽、泰晤士河上的雾霭。',
      'tl.s8_p1': '爱德华时代是英国的「美好时代」——大战前夕最后的优雅绽放。后印象派和布鲁姆斯伯里团体以大胆的色彩和形式实验挑战维多利亚时代的传统。',
      'tl.s8_hist': '<b>历史背景</b>：妇女选举权运动日益高涨，工党于 1900 年成立，电力照明彻底改变了城市夜景。',
      'tl.s8_impact': '<b>对艺术的影响</b>：一代艺术家力求挣脱学院传统。卡姆登镇小组（1911 年成立）以毫不妥协的诚实描绘伦敦日常，为英国现代主义铺平了道路。',
      'tl.s9_p1': '金纳是卡姆登镇小组的核心成员，以厚重的厚涂笔法和直接写实的风格而闻名。他笔下的皮卡迪利广场充满活力——电光广告、公共马车和密集的人群被压缩在近乎窒息的构图中。',
      'tl.s9_hist': '<b>历史背景</b>：一战前夕的伦敦是一座速度、奇观与不安并存的城市。电力广告彻底改变了都市夜景，现代大都市令人兴奋又令人迷失。',
      'tl.s9_impact': '<b>对艺术的影响</b>：金纳以厚重而深思熟虑的笔触构筑画面，预示了 20 世纪绘画的物质性。城市不再是背景，而是主角。',

      // 地图弹窗
      'map.stpauls': '圣保罗大教堂', 'map.greenwich': '格林威治',
      'map.chelsea': '切尔西', 'map.hydepark': '海德公园',
      'map.westminster': '威斯敏斯特宫', 'map.piccadilly': '皮卡迪利广场', 'map.towerbridge': '塔桥',
      'map.view': '查看详情 →',

      // ---- 音乐展馆 ----
      'music.page_title': '音乐展馆 — The Art Map of London',
      'music.heading': '音乐展馆',
      'music.subtitle': '每个地标、每个时代、每幅画作——都配有一段与之共鸣的音乐。',
      'music.label.reason': '选择原因',
      'music.label.background': '创作背景',
      'music.label.style': '风格呼应',
      'music.badge.home': '首页',
      'music.badge.stpauls': '圣保罗大教堂',
      'music.badge.greenwich': '格林威治',
      'music.badge.chelsea': '切尔西',
      'music.badge.hydepark': '海德公园',
      'music.badge.westminster': '威斯敏斯特宫',
      'music.badge.piccadilly': '皮卡迪利广场',
      'music.badge.tower': '塔桥',
      'music.badge.timeline': '时间线',
      'music.badge.map': '全页地图',

      // 首页
      'music.home.title': 'Clair de Lune（月光） — 克劳德·德彪西（1905）',
      'music.home.reason': '静谧的月光意象，邀请观者踏入接下来的百年漫步。德彪西漂浮的音符与首页开篇句「艺术是伦敦流动的史诗」形成诗意对位，为这场跨越世纪的行走定下静谧的基调。',
      'music.home.background': '1905 年出版，属于《贝加莫组曲》第三乐章。德彪西试图让音乐褪去叙事功能，成为纯粹的感官体验——一场悬浮在时间中的梦幻。',
      'music.home.style': '印象派绘画 × 印象主义音乐——两者都将硬朗的边界消融为氛围。首页 hero 画面与德彪西共享同一种逻辑：唤起，而非宣告。',

      // 圣保罗大教堂
      'music.stpauls.title': 'Water Music: Overture（水上音乐序曲） — 格奥尔格·弗里德里希·亨德尔（1717）',
      'music.stpauls.reason': '亨德尔是 18 世纪伦敦最负盛名的作曲家。《水上音乐》为泰晤士河上的皇家庆典而作，与卡纳莱托笔下的泰晤士河畔圣保罗大教堂形成地理与时代的双重对应。',
      'music.stpauls.background': '1717 年 7 月 17 日，乔治一世在泰晤士河举办皇家游船音乐会。五十名乐师在驳船上演奏，两岸万人空巷——这是伦敦最早的伟大公共音乐奇观之一。',
      'music.stpauls.style': '巴洛克的秩序与华丽 × 威尼斯画派的建筑精确——理性结构中包裹感官的辉煌。卡纳莱托与亨德尔同为贵族赞助人而创作，却都留下了具有持久大众感染力的作品。',

      // 格林威治
      'music.greenwich.title': 'Symphony No. 6 "Pastoral"（田园交响曲） — 路德维希·范·贝多芬（1808）',
      'music.greenwich.reason': '透纳从格林威治公园的高处眺望伦敦全景，贝多芬在维也纳郊外的山丘上写下对自然的礼赞。两件作品都站在高远处，回望文明与自然交织的壮阔视野。',
      'music.greenwich.background': '1808 年首演，贝多芬标注「乡村生活的回忆——情感多于描绘」。它开创了标题音乐的先河，让情感与意象引导乐谱的走向。',
      'music.greenwich.style': '古典向浪漫的转折点——透纳画面中精确的构图之下，翻涌着即将冲破束缚的情感，与贝多芬中晚期交响曲一脉相承。两者都不在结构与激情之间做非此即彼的选择。',

      // 切尔西
      'music.chelsea.title': 'Clair de Lune（月光） — 克劳德·德彪西（1905）',
      'music.chelsea.reason': '惠斯勒将画作命名为「夜曲」——直接借用音乐体裁。德彪西则以音符描绘月光。两人都拒绝写实，追求不可言说的氛围与暗示。',
      'music.chelsea.background': '1905 年出版，属于《贝加莫组曲》。德彪西深受印象派绘画与象征主义诗歌的影响，试图让音乐消解叙事，化作纯粹的感官存在。',
      'music.chelsea.style': '色调主义 × 印象主义音乐——模糊的边界、柔和的色调、对独特瞬间氛围的捕捉。惠斯勒的蝴蝶签名与德彪西的飘浮音符：两位艺术家共同坚持，氛围本身就是内容。',

      // 海德公园
      'music.hydepark.title': 'Arabesque No. 1（阿拉伯风格曲第一号） — 克劳德·德彪西（1891）',
      'music.hydepark.reason': 'Arabesque 意为蔓藤花纹——蜿蜒、流转的装饰曲线，正是莫奈笔下海德公园斑驳树影的音乐化身。乐曲的流动琶音呼应着阳光与树影在公园中的舞蹈。',
      'music.hydepark.background': '1891 年创作，标题取自装饰艺术——伊斯兰与新艺术运动中的曲线纹样。它已展现出德彪西突破传统和声的探索，预示着音乐中的印象派革命。',
      'music.hydepark.style': '印象派绘画 × 印象主义音乐——莫奈用短促笔触捕捉光影，德彪西用流动琶音瓦解传统和声。两者都将转瞬即逝的片刻定格为永恒。',

      // 威斯敏斯特宫
      'music.westminster.title': 'Gymnopédie No. 1（裸体歌舞第一号） — 埃里克·萨蒂（1888）',
      'music.westminster.reason': '毕沙罗笔下的威斯敏斯特宫在伦敦雾中若隐若现，色调克制而朦胧。萨蒂的音乐就像雾本身——简洁、缓慢、拒绝戏剧性。两者共享一种克制的庄严。',
      'music.westminster.background': 'Gymnopédie 得名于古希腊斯巴达的裸体舞蹈仪式。萨蒂以极简的音符和空旷的和声，创造了前所未有的音乐语言——乐谱上标注的演奏提示是「缓慢地，带着痛苦」。',
      'music.westminster.style': '晚期印象派 × 极简主义先驱——毕沙罗去除冗余细节，萨蒂去除所有装饰音。两者都证明：少一点，以精确呈现，反而更多。',

      // 皮卡迪利广场
      'music.piccadilly.title': 'Orpheus in the Underworld（地狱中的奥菲欧） — 雅克·奥芬巴赫（1858）',
      'music.piccadilly.reason': '金纳笔下的皮卡迪利广场是伦敦的狂欢之夜——霓虹、人群、公共马车。奥芬巴赫的轻歌剧是巴黎的狂欢之声——戏谑、喧闹、颠覆一切。两座大都会的夜晚，隔海共振。',
      'music.piccadilly.background': '1858 年巴黎首演，将希腊神话中奥菲欧的故事改写为讽刺轻歌剧。著名的康康舞终曲成为第二帝国享乐主义的非官方颂歌——音乐即纯粹的、快乐的叛逆。',
      'music.piccadilly.style': '卡姆登镇小组 × 法国轻歌剧——前者以厚涂笔触不加修饰地描绘城市脉搏，后者以轻快旋律拥抱此刻的烟火。表象不同，底层共享对城市生命力不加粉饰的拥抱。',

      // 塔桥
      'music.tower.title': 'William Tell Overture（威廉·退尔序曲） — 焦阿基诺·罗西尼（1829）',
      'music.tower.reason': '塔桥开通那天，五十艘装饰船列队而来，五万观众欢呼雷动。罗西尼的序曲以暴风雨、牧歌与凯旋终曲，勾勒出从工业蓝图到帝国象征的戏剧弧线。',
      'music.tower.background': '罗西尼最后一部歌剧，1829 年巴黎首演。序曲四段落——黎明、暴风雨、牧歌、终曲进行曲——构成管弦乐曲目中最具戏剧张力的叙事之一。',
      'music.tower.style': '维多利亚海事现实主义 × 意大利浪漫主义歌剧——威利以水彩的精确记录历史的「真实指纹」，罗西尼以管弦乐的磅礴书写英雄叙事。宏大与精确，无论在石头还是声音中，皆为并行的美德。',

      // 时间线
      'music.timeline.title': 'The Planets: Jupiter（行星组曲：木星） — 古斯塔夫·霍尔斯特（1916）',
      'music.timeline.reason': '木星是《行星组曲》中最宏大的乐章，象征扩张与繁荣。那庄严而温暖的中段旋律，恰似对伦敦两百年艺术遗产的致意——从卡纳莱托到金纳，跨越世纪。',
      'music.timeline.background': '1914 至 1916 年间创作，正值一战阴影笼罩。霍尔斯特以占星学而非天文学为灵感，赋予每颗行星独特的情感特质。木星代表欢愉、丰饶与仪式感。',
      'music.timeline.style': '晚期浪漫主义 × 英国民族乐派——霍尔斯特将欧洲交响传统经由鲜明的英式感性呈现，恰如伦敦吸收欧陆艺术运动的同时，锻造了自身的视觉身份。',

      // 全页地图
      'music.map.title': 'Orpheus in the Underworld（地狱中的奥菲欧） — 雅克·奥芬巴赫（1858）',
      'music.map.reason': '与皮卡迪利页相同曲目——但在全览地图的语境下，奥芬巴赫轻快的节奏更像一声邀约：点开任何一个标记，进入属于你的伦敦。',
      'music.map.background': '1858 年巴黎首演。奥芬巴赫的轻歌剧剥去了奥菲欧神话的庄严外衣，将其变成一场对此刻的庆典。它的轻盈是刻意的——拒绝严肃的音乐，邀请自由的探索。',
      'music.map.style': '轻歌剧 × 交互式地图——奥芬巴赫的喜剧式不羁映射了地图的民主精神：每个地标平等，每位访客自选路径。没有预设路线，没有层级——唯有漫游。',

    }
  };

  var currentLang = localStorage.getItem('lang') || 'en';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[lang] && dict[lang][key]) {
        el.innerHTML = dict[lang][key];
      }
    });

    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.textContent = dict[lang]['lang.switch'];
    }
  }

  window.toggleLang = function () {
    applyLang(currentLang === 'en' ? 'zh' : 'en');
  };

  // Expose for dynamic content (map popups etc.)
  window.i18n_t = function (key, fallback) {
    return (dict[currentLang] && dict[currentLang][key]) || fallback || key;
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);
    // Re-apply after a delay for dynamically injected content (navbar etc.)
    setTimeout(function () { applyLang(currentLang); }, 100);
    setTimeout(function () { applyLang(currentLang); }, 300);
  });

})();
