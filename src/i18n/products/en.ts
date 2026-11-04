import type { ProductSlug } from "@/lib/products";

export type ProductContent = {
  name: string;
  secondaryName: string;
  tagline: string;
  secondaryTagline: string;
  summary: string;
  description: string;
  benefits: { title: string; text: string }[];
  ingredients: string[];
  usage: string[];
  imageAlt: string;
  badge?: string;
};

export const productContentEn: Record<ProductSlug, ProductContent> = {
  "cold-pressed-coconut-oil": {
    name: "Cold Pressed Coconut Oil",
    secondaryName: "செக்கு தேங்காய் எண்ணெய்",
    tagline: "Wood pressed goodness for cooking, hair and skin",
    secondaryTagline:
      "சமையல், கூந்தல் மற்றும் சருமத்திற்கு செக்கு முறையில் தயாரிக்கப்பட்ட தூய தேங்காய் எண்ணெய்",
    summary:
      "100% pure, unrefined coconut oil extracted slowly in a traditional wood press. No chemicals, no preservatives.",
    description:
      "Our cold pressed coconut oil is made from carefully selected coconuts and extracted in small batches using a traditional wood press (chekku). The slow extraction keeps the natural aroma, flavour and nutrients intact. It is unrefined, chemical free and suitable for everyday cooking, hair care and skin care. A staple in South Indian kitchens, this is the same honest coconut oil our families have used for generations.",
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
    imageAlt:
      "Kurinchi Health Products cold pressed coconut oil bottle — செக்கு தேங்காய் எண்ணெய்",
    badge: "Bestseller",
  },
  "cold-pressed-gingelly-oil": {
    name: "Cold Pressed Gingelly Oil",
    secondaryName: "செக்கு நல்லெண்ணை",
    tagline: "The traditional sesame oil for authentic South Indian cooking",
    secondaryTagline:
      "பாரம்பரிய தென்னிந்திய சமையலுக்கு ஏற்ற செக்கு நல்லெண்ணை",
    summary:
      "Unrefined sesame oil (nallennai) wood pressed the traditional way, with a rich nutty aroma and no chemicals.",
    description:
      "Gingelly oil, known as nallennai in Tamil, is an essential part of South Indian cooking and traditions. Our cold pressed gingelly oil is extracted from quality sesame seeds in a wood press, preserving its deep golden colour, nutty aroma and natural antioxidants. It is unrefined and free from chemicals and preservatives — perfect for traditional curries, pickles, podis and everyday cooking.",
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
    imageAlt:
      "Kurinchi Health Products cold pressed gingelly oil bottle — செக்கு நல்லெண்ணை",
  },
  "cold-pressed-groundnut-oil": {
    name: "Cold Pressed Groundnut Oil",
    secondaryName: "செக்கு கடலை எண்ணெய்",
    tagline: "Pure wood pressed groundnut oil for daily cooking",
    secondaryTagline: "தினசரி சமையலுக்கு ஏற்ற தூய செக்கு கடலை எண்ணெய்",
    summary:
      "Unrefined groundnut (peanut) oil made in a traditional wood press, with a light nutty taste and no additives.",
    description:
      "Our cold pressed groundnut oil is made from quality groundnuts and extracted in a traditional wood press. It has a mild, pleasant nutty flavour and is ideal for everyday cooking, frying and tempering. Because it is unrefined, it keeps the natural goodness of the groundnut without any chemicals or preservatives.",
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
    imageAlt:
      "Kurinchi Health Products cold pressed groundnut oil bottle — செக்கு கடலை எண்ணெய்",
  },
  "organic-country-sugar": {
    name: "Organic Country Sugar",
    secondaryName: "ஆர்கானிக் நாட்டு சர்க்கரை",
    tagline:
      "Naattu sarkarai — a natural, chemical free substitute for white sugar",
    secondaryTagline:
      "வெள்ளை சர்க்கரைக்கு இயற்கையான மாற்று — ரசாயனம் இல்லாத நாட்டு சர்க்கரை",
    summary:
      "Unrefined country sugar (naattu sarkarai) made from natural cane, with a rich caramel taste and no chemicals.",
    description:
      "Country sugar, or naattu sarkarai, is an unrefined natural sweetener made from sugarcane. It retains more of the natural molasses, minerals and flavour than ordinary white sugar. Use it in coffee, tea, sweets, porridge and traditional recipes for a warm caramel sweetness. Our country sugar is 100% chemical free and a healthier everyday choice for the whole family.",
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
    imageAlt:
      "Kurinchi Health Products organic country sugar pack — ஆர்கானிக் நாட்டு சர்க்கரை",
    badge: "100% Natural",
  },
  "himalayan-rock-salt": {
    name: "Himalayan Rock Salt",
    secondaryName: "இந்துப்பு",
    tagline: "Nature's purest salt for a healthy life",
    secondaryTagline: "ஆரோக்கியமான வாழ்வுக்கு இயற்கையின் தூய இந்துப்பு",
    summary:
      "Handpicked Himalayan rock salt with essential trace minerals — an additive-free alternative to table salt.",
    description:
      "Our Himalayan rock salt (induppu) is handpicked from the Himalayas and is naturally rich in trace minerals. It is an additive-free alternative to ordinary table salt, with a clean, balanced taste that works beautifully in everyday cooking. It is also traditionally used in spa and healing baths.",
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
    imageAlt: "Kurinchi Health Products Himalayan rock salt pack — இந்துப்பு",
    badge: "Chemical Free",
  },
  "handmade-coconut-oil-soap": {
    name: "Handmade Coconut Oil Soap",
    secondaryName: "கைவினை தேங்காய் எண்ணெய் சோப்",
    tagline: "Gentle, handmade soap made with pure coconut oil",
    secondaryTagline:
      "தூய தேங்காய் எண்ணெயில் கைமுறையாக தயாரிக்கப்பட்ட மென்மையான சோப்",
    summary:
      "A simple handmade soap made in small batches with coconut oil — gentle on skin and free from harsh chemicals.",
    description:
      "Our handmade coconut oil soap is prepared in small batches using pure coconut oil and simple natural ingredients. It produces a creamy lather and cleanses gently without leaving the skin feeling dry. Because it is handmade, each bar is unique. No harsh detergents, no artificial colours and no unnecessary additives.",
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
    imageAlt:
      "Kurinchi Health Products handmade coconut oil soap bar — கைவினை சோப்",
  },
  "herbal-hair-oil": {
    name: "Herbal Hair Oil",
    secondaryName: "மூலிகை கூந்தல் எண்ணெய்",
    tagline: "Nature's care for strong and healthy hair",
    secondaryTagline:
      "வலுவான, ஆரோக்கியமான கூந்தலுக்கு இயற்கையின் மூலிகை பராமரிப்பு",
    summary:
      "A handmade herbal hair oil with no chemicals or preservatives, made to nourish the scalp and hair naturally.",
    description:
      "Our herbal hair oil is prepared by hand using a blend of traditional herbs and pure oils. It is made without chemicals or preservatives and is designed to nourish the scalp, reduce dryness and support strong, healthy-looking hair. A gentle weekly oil massage is a simple ritual that has been part of Tamil households for generations.",
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
    imageAlt:
      "Kurinchi Health Products herbal hair oil bottle — மூலிகை கூந்தல் எண்ணெய்",
    badge: "Handmade",
  },
  "pure-palm-jaggery": {
    name: "Pure Palm Jaggery",
    secondaryName: "சுத்தமான கருப்பட்டி",
    tagline: "Traditional karupatti with a deep, natural sweetness",
    secondaryTagline:
      "பாரம்பரிய முறையில் தயாரிக்கப்பட்ட இயற்கையான கருப்பட்டி",
    summary:
      "Unrefined palm jaggery (karupatti) made from palm sap using traditional methods — rich in minerals and free from chemicals.",
    description:
      "Palm jaggery, known as karupatti, is a traditional unrefined sweetener made from the sap of palm trees. It has a deep, earthy sweetness and retains natural minerals that white sugar loses during refining. Our karupatti is prepared using traditional methods and contains no chemicals or preservatives. Use it in coffee, tea, sweets and traditional remedies.",
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
    imageAlt:
      "Kurinchi Health Products pure palm jaggery — சுத்தமான கருப்பட்டி",
  },
  "palm-candy": {
    name: "Palm Candy",
    secondaryName: "பனங்கற்கண்டு",
    tagline: "Crystalline palm sugar candy — a traditional natural sweetener",
    secondaryTagline: "பாரம்பரிய இயற்கை இனிப்பு — பனங்கற்கண்டு",
    summary:
      "Palm candy (panangkarkandu) is a natural crystalline sweetener made from palm sap, traditionally used in home remedies and sweets.",
    description:
      "Palm candy, or panangkarkandu, is a crystalline sweetener made from palm sap. It has a mild, clean sweetness and is traditionally used in South Indian home remedies for coughs and colds, as well as in sweets and festive recipes. Our palm candy is natural and free from artificial colours and preservatives.",
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
    imageAlt: "Kurinchi Health Products palm candy — பனங்கற்கண்டு",
  },
};
