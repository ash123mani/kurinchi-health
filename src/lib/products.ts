export type ProductCategory = "oils" | "sweeteners" | "salt-soap" | "hair-care";

export type Product = {
  slug: string;
  name: string;
  tamilName: string;
  category: ProductCategory;
  emoji: string;
  tagline: string;
  tamilTagline: string;
  summary: string;
  description: string;
  tamilDescription: string;
  benefits: { title: string; text: string }[];
  ingredients: string[];
  usage: string[];
  sizes: string[];
  image: string;
  images: string[];
  imageAlt: string;
  badge?: string;
  featured?: boolean;
};

export const CATEGORIES: {
  id: "all" | ProductCategory;
  name: string;
  tamilName: string;
  description: string;
}[] = [
  {
    id: "all",
    name: "All Products",
    tamilName: "அனைத்து பொருட்கள்",
    description: "Everything we make, from cold pressed oils to natural sweeteners.",
  },
  {
    id: "oils",
    name: "Cold Pressed Oils",
    tamilName: "செக்கு எண்ணெய்கள்",
    description:
      "Unrefined wood pressed cooking oils made the traditional chekku way.",
  },
  {
    id: "sweeteners",
    name: "Natural Sweeteners",
    tamilName: "இயற்கை இனிப்புகள்",
    description:
      "Country sugar, palm jaggery and palm candy — unrefined and chemical free.",
  },
  {
    id: "salt-soap",
    name: "Salt & Soap",
    tamilName: "உப்பு & சோப்",
    description: "Himalayan rock salt and handmade coconut oil soap.",
  },
  {
    id: "hair-care",
    name: "Hair Care",
    tamilName: "கூந்தல் பராமரிப்பு",
    description: "Herbal hair oil made with natural ingredients and no chemicals.",
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "cold-pressed-coconut-oil",
    name: "Cold Pressed Coconut Oil",
    tamilName: "செக்கு தேங்காய் எண்ணெய்",
    category: "oils",
    emoji: "🥥",
    tagline: "Wood pressed goodness for cooking, hair and skin",
    tamilTagline:
      "சமையல், கூந்தல் மற்றும் சருமத்திற்கு செக்கு முறையில் தயாரிக்கப்பட்ட தூய தேங்காய் எண்ணெய்",
    summary:
      "100% pure, unrefined coconut oil extracted slowly in a traditional wood press. No chemicals, no preservatives.",
    description:
      "Our cold pressed coconut oil is made from carefully selected coconuts and extracted in small batches using a traditional wood press (chekku). The slow extraction keeps the natural aroma, flavour and nutrients intact. It is unrefined, chemical free and suitable for everyday cooking, hair care and skin care. A staple in South Indian kitchens, this is the same honest coconut oil our families have used for generations.",
    tamilDescription:
      "தேர்ந்தெடுக்கப்பட்ட தேங்காய்களிலிருந்து பாரம்பரிய மரச் செக்கில் மெதுவாக பிழிந்து எடுக்கப்படும் தூய தேங்காய் எண்ணெய். சமையல், கூந்தல் மற்றும் சரும பராமரிப்புக்கு ஏற்றது. ரசாயனங்கள், பிரிசர்வேட்டிவ்கள் சேர்க்கப்படவில்லை. இயற்கையான வாசனையும் ஊட்டச்சத்துக்களும் அப்படியே பாதுகாக்கப்படுகின்றன.",
    benefits: [
      {
        title: "Traditional wood pressed",
        text: "Slowly extracted in a chekku without heat or chemical processing.",
      },
      {
        title: "Unrefined & chemical free",
        text: "No bleaching, no deodorising and no preservatives added.",
      },
      {
        title: "For cooking, hair & skin",
        text: "A versatile kitchen and personal care oil used in South Indian homes.",
      },
      {
        title: "Natural aroma & taste",
        text: "Retains the fresh coconut flavour that refined oils lose.",
      },
    ],
    ingredients: ["100% cold pressed coconut oil"],
    usage: [
      "Use for everyday cooking, tempering and baking.",
      "Apply to hair before washing for a natural oil massage.",
      "Use a small amount on skin as a gentle moisturiser.",
    ],
    sizes: ["500 ml", "1 L"],
    image: "/products/coconut-oil-1.jpeg",
    images: ["/products/coconut-oil-1.jpeg", "/products/brand-hero.jpeg"],
    imageAlt:
      "Kurinchi Health Products cold pressed coconut oil bottle — செக்கு தேங்காய் எண்ணெய்",
    badge: "Bestseller",
    featured: true,
  },
  {
    slug: "cold-pressed-gingelly-oil",
    name: "Cold Pressed Gingelly Oil",
    tamilName: "செக்கு நல்லெண்ணை",
    category: "oils",
    emoji: "🌾",
    tagline: "The traditional sesame oil for authentic South Indian cooking",
    tamilTagline:
      "பாரம்பரிய தென்னிந்திய சமையலுக்கு ஏற்ற செக்கு நல்லெண்ணை",
    summary:
      "Unrefined sesame oil (nallennai) wood pressed the traditional way, with a rich nutty aroma and no chemicals.",
    description:
      "Gingelly oil, known as nallennai in Tamil, is an essential part of South Indian cooking and traditions. Our cold pressed gingelly oil is extracted from quality sesame seeds in a wood press, preserving its deep golden colour, nutty aroma and natural antioxidants. It is unrefined and free from chemicals and preservatives — perfect for traditional curries, pickles, podis and everyday cooking.",
    tamilDescription:
      "தரமான எள் விதைகளிலிருந்து பாரம்பரிய மரச் செக்கில் பிழிந்தெடுக்கப்படும் நல்லெண்ணை. தென்னிந்திய சமையலின் அடிப்படை. இயற்கையான நிறம், வாசனை மற்றும் ஆன்டி-ஆக்சிடன்ட்கள் பாதுகாக்கப்படுகின்றன. ரசாயனம், பிரிசர்வேட்டிவ் இல்லை.",
    benefits: [
      {
        title: "Rich, nutty flavour",
        text: "Adds the authentic taste that traditional Tamil cooking is known for.",
      },
      {
        title: "Natural antioxidants",
        text: "Sesame seeds naturally contain antioxidants that refined oils strip away.",
      },
      {
        title: "Unrefined & wood pressed",
        text: "No chemicals, no preservatives and no artificial refining.",
      },
      {
        title: "Everyday kitchen staple",
        text: "Suitable for curries, pickles, podis and tempering.",
      },
    ],
    ingredients: ["100% cold pressed sesame (gingelly) oil"],
    usage: [
      "Use for traditional curries, kootu and poriyal.",
      "Add to pickles and podis for authentic flavour.",
      "Store in a cool, dry place away from direct sunlight.",
    ],
    sizes: ["250 ml", "500 ml", "1 L"],
    image: "/products/gingelly-oil-1.jpeg",
    images: [
      "/products/gingelly-oil-1.jpeg",
      "/products/gingelly-oil-2.jpeg",
    ],
    imageAlt:
      "Kurinchi Health Products cold pressed gingelly oil bottle — செக்கு நல்லெண்ணை",
    featured: true,
  },
  {
    slug: "cold-pressed-groundnut-oil",
    name: "Cold Pressed Groundnut Oil",
    tamilName: "செக்கு கடலை எண்ணெய்",
    category: "oils",
    emoji: "🥜",
    tagline: "Pure wood pressed groundnut oil for daily cooking",
    tamilTagline:
      "தினசரி சமையலுக்கு ஏற்ற தூய செக்கு கடலை எண்ணெய்",
    summary:
      "Unrefined groundnut (peanut) oil made in a traditional wood press, with a light nutty taste and no additives.",
    description:
      "Our cold pressed groundnut oil is made from quality groundnuts and extracted in a traditional wood press. It has a mild, pleasant nutty flavour and is ideal for everyday cooking, frying and tempering. Because it is unrefined, it keeps the natural goodness of the groundnut without any chemicals or preservatives.",
    tamilDescription:
      "தரமான கடலை விதைகளிலிருந்து பாரம்பரிய மரச் செக்கில் பிழிந்தெடுக்கப்படும் தூய கடலை எண்ணெய். தினசரி சமையல், வறுவல் மற்றும் தாளிப்புக்கு ஏற்றது. இயற்கையான சுவை மற்றும் ஊட்டச்சத்து பாதுகாக்கப்படுகிறது. ரசாயனம், பிரிசர்வேட்டிவ் இல்லை.",
    benefits: [
      {
        title: "Light nutty taste",
        text: "A mild flavour that works well with everyday South Indian dishes.",
      },
      {
        title: "Good for frying",
        text: "A traditional choice for deep frying and tempering.",
      },
      {
        title: "Unrefined & chemical free",
        text: "Wood pressed without bleaching, deodorising or preservatives.",
      },
      {
        title: "Naturally nutritious",
        text: "Groundnuts contain natural fats and nutrients retained in cold pressing.",
      },
    ],
    ingredients: ["100% cold pressed groundnut oil"],
    usage: [
      "Use for daily cooking, frying and tempering.",
      "Ideal for traditional snacks and sweets.",
      "Store in a cool, dry place with the lid tightly closed.",
    ],
    sizes: ["250 ml", "500 ml", "1 L"],
    image: "/products/groundnut-oil-1.jpeg",
    images: [
      "/products/groundnut-oil-1.jpeg",
      "/products/groundnut-oil-2.jpeg",
    ],
    imageAlt:
      "Kurinchi Health Products cold pressed groundnut oil bottle — செக்கு கடலை எண்ணெய்",
    featured: true,
  },
  {
    slug: "organic-country-sugar",
    name: "Organic Country Sugar",
    tamilName: "ஆர்கானிக் நாட்டு சர்க்கரை",
    category: "sweeteners",
    emoji: "🍯",
    tagline: "Naattu sarkarai — a natural, chemical free substitute for white sugar",
    tamilTagline:
      "வெள்ளை சர்க்கரைக்கு இயற்கையான மாற்று — ரசாயனம் இல்லாத நாட்டு சர்க்கரை",
    summary:
      "Unrefined country sugar (naattu sarkarai) made from natural cane, with a rich caramel taste and no chemicals.",
    description:
      "Country sugar, or naattu sarkarai, is an unrefined natural sweetener made from sugarcane. It retains more of the natural molasses, minerals and flavour than ordinary white sugar. Use it in coffee, tea, sweets, porridge and traditional recipes for a warm caramel sweetness. Our country sugar is 100% chemical free and a healthier everyday choice for the whole family.",
    tamilDescription:
      "கரும்பிலிருந்து தயாரிக்கப்படும் இயற்கையான நாட்டு சர்க்கரை. வெள்ளை சர்க்கரையை விட இயற்கையான தாதுக்கள் மற்றும் சுவை அதிகம். காபி, தேநீர், இனிப்புகள் மற்றும் பாரம்பரிய உணவுகளுக்கு ஏற்றது. 100% ரசாயனம் இல்லாதது.",
    benefits: [
      {
        title: "Natural substitute for sugar",
        text: "An unrefined sweetener with a warm caramel flavour.",
      },
      {
        title: "Retains natural minerals",
        text: "Less processed than white sugar, so more of the natural molasses remains.",
      },
      {
        title: "100% chemical free",
        text: "No artificial colours, additives or preservatives.",
      },
      {
        title: "Traditional household use",
        text: "Traditionally used in coffee, tea, sweets and home remedies.",
      },
    ],
    ingredients: ["100% natural country sugar (naattu sarkarai)"],
    usage: [
      "Use as a direct substitute for white sugar in tea and coffee.",
      "Add to porridge, sweets and traditional recipes.",
      "Start with a little and adjust to taste.",
    ],
    sizes: ["500 g", "1 kg"],
    image: "/products/country-sugar-1.jpeg",
    images: ["/products/country-sugar-1.jpeg"],
    imageAlt:
      "Kurinchi Health Products organic country sugar pack — ஆர்கானிக் நாட்டு சர்க்கரை",
    badge: "100% Natural",
    featured: true,
  },
  {
    slug: "himalayan-rock-salt",
    name: "Himalayan Rock Salt",
    tamilName: "இந்துப்பு",
    category: "salt-soap",
    emoji: "🧂",
    tagline: "Nature's purest salt for a healthy life",
    tamilTagline:
      "ஆரோக்கியமான வாழ்வுக்கு இயற்கையின் தூய இந்துப்பு",
    summary:
      "Handpicked Himalayan rock salt with essential trace minerals — an additive-free alternative to table salt.",
    description:
      "Our Himalayan rock salt (induppu) is handpicked from the Himalayas and is naturally rich in trace minerals. It is an additive-free alternative to ordinary table salt, with a clean, balanced taste that works beautifully in everyday cooking. It is also traditionally used in spa and healing baths.",
    tamilDescription:
      "இமயமலையில் இருந்து கைமுறையாக தேர்ந்தெடுக்கப்படும் இந்துப்பு. இயற்கையான தாதுக்கள் நிறைந்தது. சாதாரண உப்புக்கு ரசாயனம் இல்லாத மாற்று. சமையல் மற்றும் ஸ்பா பயன்பாட்டுக்கு ஏற்றது.",
    benefits: [
      {
        title: "Handpicked from the Himalayas",
        text: "Naturally formed rock salt with no artificial additives.",
      },
      {
        title: "Essential trace minerals",
        text: "Contains naturally occurring minerals and nutrients.",
      },
      {
        title: "Additive-free",
        text: "No anti-caking agents, bleach or free-flowing chemicals.",
      },
      {
        title: "Culinary & wellness use",
        text: "Great for cooking, seasoning, spa and healing baths.",
      },
    ],
    ingredients: ["100% Himalayan rock salt"],
    usage: [
      "Use in everyday cooking and seasoning.",
      "Add a handful to warm bath water for a relaxing soak.",
      "Store in an airtight container in a dry place.",
    ],
    sizes: ["500 g", "1 kg"],
    image: "/products/rock-salt-1.jpeg",
    images: ["/products/rock-salt-1.jpeg"],
    imageAlt:
      "Kurinchi Health Products Himalayan rock salt pack — இந்துப்பு",
    badge: "Chemical Free",
    featured: true,
  },
  {
    slug: "handmade-coconut-oil-soap",
    name: "Handmade Coconut Oil Soap",
    tamilName: "கைவினை தேங்காய் எண்ணெய் சோப்",
    category: "salt-soap",
    emoji: "🧼",
    tagline: "Gentle, handmade soap made with pure coconut oil",
    tamilTagline:
      "தூய தேங்காய் எண்ணெயில் கைமுறையாக தயாரிக்கப்பட்ட மென்மையான சோப்",
    summary:
      "A simple handmade soap made in small batches with coconut oil — gentle on skin and free from harsh chemicals.",
    description:
      "Our handmade coconut oil soap is prepared in small batches using pure coconut oil and simple natural ingredients. It produces a creamy lather and cleanses gently without leaving the skin feeling dry. Because it is handmade, each bar is unique. No harsh detergents, no artificial colours and no unnecessary additives.",
    tamilDescription:
      "தூய தேங்காய் எண்ணெய் மற்றும் இயற்கைப் பொருட்களைக் கொண்டு சிறு அளவுகளில் கைமுறையாக தயாரிக்கப்படும் சோப். சருமத்திற்கு மென்மையானது. கடினமான ரசாயனங்கள், செயற்கை நிறங்கள் இல்லை. ஒவ்வொரு சோப்பும் தனித்துவமானது.",
    benefits: [
      {
        title: "Made with coconut oil",
        text: "Pure coconut oil is the main cleansing and moisturising ingredient.",
      },
      {
        title: "Gentle on skin",
        text: "A creamy lather that cleans without harsh detergents.",
      },
      {
        title: "Handmade in small batches",
        text: "Every bar is cut and cured by hand for a personal finish.",
      },
      {
        title: "No artificial additives",
        text: "Free from artificial colours and unnecessary chemicals.",
      },
    ],
    ingredients: ["Coconut oil", "Natural soap base", "Essential fragrance"],
    usage: [
      "Wet the bar and work into a lather.",
      "Massage gently onto skin, then rinse with water.",
      "Keep the soap dry between uses so it lasts longer.",
    ],
    sizes: ["100 g"],
    image: "/products/coconut-soap-1.jpeg",
    images: ["/products/coconut-soap-1.jpeg"],
    imageAlt:
      "Kurinchi Health Products handmade coconut oil soap bar — கைவினை சோப்",
  },
  {
    slug: "herbal-hair-oil",
    name: "Herbal Hair Oil",
    tamilName: "மூலிகை கூந்தல் எண்ணெய்",
    category: "hair-care",
    emoji: "🌿",
    tagline: "Nature's care for strong and healthy hair",
    tamilTagline:
      "வலுவான, ஆரோக்கியமான கூந்தலுக்கு இயற்கையின் மூலிகை பராமரிப்பு",
    summary:
      "A handmade herbal hair oil with no chemicals or preservatives, made to nourish the scalp and hair naturally.",
    description:
      "Our herbal hair oil is prepared by hand using a blend of traditional herbs and pure oils. It is made without chemicals or preservatives and is designed to nourish the scalp, reduce dryness and support strong, healthy-looking hair. A gentle weekly oil massage is a simple ritual that has been part of Tamil households for generations.",
    tamilDescription:
      "பாரம்பரிய மூலிகைகள் மற்றும் தூய எண்ணெய்களைக் கொண்டு கைமுறையாக தயாரிக்கப்படும் மூலிகை கூந்தல் எண்ணெய். ரசாயனம், பிரிசர்வேட்டிவ் இல்லை. தலைப்பகுதியை ஊட்டமாக்கி, உலர்வை குறைத்து, வலுவான கூந்தலுக்கு உதவுகிறது.",
    benefits: [
      {
        title: "100% herbal",
        text: "A traditional blend of herbs and natural oils.",
      },
      {
        title: "No chemicals or preservatives",
        text: "Handmade without artificial additives.",
      },
      {
        title: "Nourishes the scalp",
        text: "A relaxing oil massage helps reduce dryness and flaking.",
      },
      {
        title: "Supports healthy-looking hair",
        text: "Use regularly as part of a natural hair care routine.",
      },
    ],
    ingredients: ["Natural herb blend", "Pure coconut oil", "Sesame oil"],
    usage: [
      "Warm a small amount of oil in your palms.",
      "Massage gently into the scalp and hair.",
      "Leave for at least an hour, then wash with a mild shampoo.",
      "Use once or twice a week for best results.",
    ],
    sizes: ["100 ml", "200 ml", "500 ml", "1 L"],
    image: "/products/herbal-hair-oil-1.jpeg",
    images: [
      "/products/herbal-hair-oil-1.jpeg",
      "/products/herbal-hair-oil-2.jpeg",
    ],
    imageAlt:
      "Kurinchi Health Products herbal hair oil bottle — மூலிகை கூந்தல் எண்ணெய்",
    badge: "Handmade",
    featured: true,
  },
  {
    slug: "pure-palm-jaggery",
    name: "Pure Palm Jaggery",
    tamilName: "சுத்தமான கருப்பட்டி",
    category: "sweeteners",
    emoji: "🌴",
    tagline: "Traditional karupatti with a deep, natural sweetness",
    tamilTagline:
      "பாரம்பரிய முறையில் தயாரிக்கப்பட்ட இயற்கையான கருப்பட்டி",
    summary:
      "Unrefined palm jaggery (karupatti) made from palm sap using traditional methods — rich in minerals and free from chemicals.",
    description:
      "Palm jaggery, known as karupatti, is a traditional unrefined sweetener made from the sap of palm trees. It has a deep, earthy sweetness and retains natural minerals that white sugar loses during refining. Our karupatti is prepared using traditional methods and contains no chemicals or preservatives. Use it in coffee, tea, sweets and traditional remedies.",
    tamilDescription:
      "பனை மரத்தின் சாறிலிருந்து பாரம்பரிய முறையில் தயாரிக்கப்படும் கருப்பட்டி. இயற்கையான இனிப்பு மற்றும் தாதுக்கள் நிறைந்தது. ரசாயனம், பிரிசர்வேட்டிவ் இல்லை. காபி, தேநீர், இனிப்புகள் மற்றும் பாரம்பரிய உணவுகளுக்கு ஏற்றது.",
    benefits: [
      {
        title: "Traditional unrefined sweetener",
        text: "Made from palm sap without chemical refining.",
      },
      {
        title: "Natural minerals",
        text: "Retains more natural minerals than refined white sugar.",
      },
      {
        title: "Deep caramel flavour",
        text: "Adds a rich, earthy sweetness to drinks and sweets.",
      },
      {
        title: "No preservatives",
        text: "Prepared in small batches using traditional methods.",
      },
    ],
    ingredients: ["100% natural palm jaggery (karupatti)"],
    usage: [
      "Use in coffee, tea and warm milk.",
      "Add to traditional sweets and porridge.",
      "Store in an airtight container away from moisture.",
    ],
    sizes: ["500 g", "1 kg"],
    image: "/products/palm-jaggery-1.jpeg",
    images: ["/products/palm-jaggery-1.jpeg"],
    imageAlt:
      "Kurinchi Health Products pure palm jaggery — சுத்தமான கருப்பட்டி",
    featured: true,
  },
  {
    slug: "palm-candy",
    name: "Palm Candy",
    tamilName: "பனங்கற்கண்டு",
    category: "sweeteners",
    emoji: "🍬",
    tagline: "Crystalline palm sugar candy — a traditional natural sweetener",
    tamilTagline:
      "பாரம்பரிய இயற்கை இனிப்பு — பனங்கற்கண்டு",
    summary:
      "Palm candy (panangkarkandu) is a natural crystalline sweetener made from palm sap, traditionally used in home remedies and sweets.",
    description:
      "Palm candy, or panangkarkandu, is a crystalline sweetener made from palm sap. It has a mild, clean sweetness and is traditionally used in South Indian home remedies for coughs and colds, as well as in sweets and festive recipes. Our palm candy is natural and free from artificial colours and preservatives.",
    tamilDescription:
      "பனை சாறிலிருந்து தயாரிக்கப்படும் பனங்கற்கண்டு. இயற்கையான இனிப்பு. இருமல், சளி போன்ற வீட்டு வைத்தியங்களிலும், இனிப்புகளிலும் பாரம்பரியமாக பயன்படுத்தப்படுகிறது. செயற்கை நிறங்கள், பிரிசர்வேட்டிவ்கள் இல்லை.",
    benefits: [
      {
        title: "Natural crystalline sweetener",
        text: "Made from palm sap without artificial refining.",
      },
      {
        title: "Traditional home remedy",
        text: "Traditionally used with herbs for cough and cold preparations.",
      },
      {
        title: "Mild, clean sweetness",
        text: "A gentle sweetness that does not overpower other flavours.",
      },
      {
        title: "No artificial colours",
        text: "Free from artificial colours and preservatives.",
      },
    ],
    ingredients: ["100% natural palm candy (panangkarkandu)"],
    usage: [
      "Use as a natural sweetener for drinks and desserts.",
      "Traditionally combined with herbs for home remedies.",
      "Store in an airtight container in a dry place.",
    ],
    sizes: ["250 g", "500 g"],
    image: "/products/palm-candy-1.jpeg",
    images: ["/products/palm-candy-1.jpeg"],
    imageAlt:
      "Kurinchi Health Products palm candy — பனங்கற்கண்டு",
    featured: true,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  const sameCategory = PRODUCTS.filter(
    (item) => item.slug !== product.slug && item.category === product.category,
  );
  const others = PRODUCTS.filter(
    (item) => item.slug !== product.slug && item.category !== product.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getCategory(id: ProductCategory) {
  return CATEGORIES.find((category) => category.id === id);
}
