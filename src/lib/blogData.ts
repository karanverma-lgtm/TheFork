export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "dumpukh-secrets",
    title: "The Secrets of Dumpukh Slow-Cooking: Retaining Royal Aromas",
    summary: "Explore the ancient Indian culinary art of sealing clay and copper pots with dough, allowing dishes to cook in their own steam for unmatched depth of flavor.",
    content: `The art of Dumpukh (literally meaning 'to damp or seal steam') originated in the royal kitchens of the Awadh dynasty in Lucknow. It is a cooking style that demands absolute patience, precision, and an intimate understanding of heat dynamics.\n\n### The Science of Sealed Steam\nIn conventional cooking, moisture and essential volatile oils escape into the air. Dumpukh solves this by sealing the cooking vessel—typically a heavy clay handi or copper pot—with a thick ribbon of wheat flour dough (the dust). As the pot heats slowly over low charcoal embers, the contents cook entirely in their own juices and steam.\n\n### Layering the Flavors\nThe secret to an authentic Dumpukh biryani or mutton korma lies in the layering. Coarse spices, tender cuts of meat, long-grain basmati rice, saffron-infused milk, and drops of pure rosewater are layered inside the pot. The seal ensures that none of these fragrances escape. When the seal is finally cracked open at the table, the rush of trapped aroma is a sensory explosion that sets royal catering apart.\n\n### The Modern Event Adaption\nAt The Fork, Mr. Anil Yadav and our chefs have adapted this centuries-old method to large-scale events. By using heavy custom copper handis and precise thermal control, we ensure that a biryani served to 1,000 guests maintains the exact same tenderness and aroma profile as a single-portion preparation.`,
    coverImage: "/images/image_30.jpg",
    category: "Culinary Secrets",
    date: "May 15, 2026",
    author: "Anil Yadav (Head Chef)",
    readTime: "5 min read"
  },
  {
    id: "wedding-menu-planning",
    title: "Designing a Majestic Wedding Menu for 500+ Guests",
    summary: "How to balance traditional cuisine expectations with speed of service, visual presentation, and dietary variety without sacrificing food quality.",
    content: `Planning a wedding catering layout is a delicate balancing act. You are not just designing a menu; you are choreographing a high-speed culinary event where every plate must feel personal and premium.\n\n### 1. The Power of Live Stations\nA long, static buffet line is the enemy of premium guest experiences. It creates bottlenecks and feels institutional. We recommend dividing the menu into distinct live 'culinary performance' stations. For instance:\n- A live Tandoor station serving hot kebabs directly from clay ovens.\n- An interactive Awadhi Dumpukh handi-cracking station.\n- A global small-plates counter featuring fresh-rolled sushi or Thai fusion.\n\n### 2. Sizing and Calculations\nFor a guest list of 500+, variety is critical, but over-complicating the menu leads to execution lag. We recommend: \n- 6 to 8 appetizers (evenly split between vegetarian and non-vegetarian).\n- 3 active live action counters.\n- 5 main courses (including at least one signature slow-cooked curry and a regional lentil).\n- 3 premium desserts (combining a hot traditional sweet with cold global selections).\n\n### 3. Temperature Integrity\nNothing ruins 5-star food faster than lukewarm temperatures. The Fork utilizes custom insulated transport structures and active fuel-induction warming tables to ensure that every dish remains at its optimal serving temperature from the first guest to the last.`,
    coverImage: "/images/image_31.jpg",
    category: "Event Planning",
    date: "April 28, 2026",
    author: "Sonu Gahlot (Event Coordinator)",
    readTime: "7 min read"
  },
  {
    id: "bespoke-mixology",
    title: "The Art of Bespoke Mixology: Elevating the Event Bar",
    summary: "How custom cocktail programs, fresh-pressed ingredients, and artistic glassware transform the modern social gathering experience.",
    content: `For decades, event bars were an afterthought—relegated to standard spirits and artificial mixers. Today, the bar is a central entertainment hub, a stage where visual showmanship meets olfactory pleasure.\n\n### Crafting Signature Cocktails\nInstead of offering a generic list, we design bespoke beverage programs tailored to the couple or corporate brand. These feature house-made syrups, fresh-pressed citrus, and aromatic smoke infusions. A popular creation, for example, is our 'Saffron Cardamom Sour'—which links traditional Indian dessert notes with premium single malt and fresh lemon.\n\n### Ice & Glassware Program\nDetail is everything. We use custom clear ice blocks (which melt slower, preventing dilution) and select glassware that matches the aesthetic theme. From crystal coupe glasses to heavy copper mugs, the vessel is as important as the drink.\n\n### Professional Staffing\nOur bartenders are trained mixologists who understand flavor balancing and speed-crafting. They engage with guests, describing the flavor notes and preparing cocktails with flair, ensuring that the bar is a memorable centerpiece of the evening.`,
    coverImage: "/images/image_32.jpg",
    category: "Mixology",
    date: "March 12, 2026",
    author: "The Fork Bar Team",
    readTime: "4 min read"
  }
];
