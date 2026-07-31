export const VENUE_INFO = {
  name: "Pickle Garden",
  subtitle: "At The Yards",
  tagline: "Ponte Vedra Beach's Premier 12-Court Pickleball & Social Destination",
  address: "254 Alta Mar Dr, Ponte Vedra Beach, FL 32082",
  phone: "(904) 740-2944",
  secondaryPhone: "(904) 601-7173",
  email: "info@picklegarden.com",
  instagram: "@picklegarden_",
  instagramUrl: "https://www.instagram.com/picklegarden_/?hl=en",
  hours: "Monday - Sunday: 8:00 AM - 10:00 PM",
  courtFee: "$40 / hour per court",
  openPlayFee: "$12 / player",
  totalCourts: 12,
  courtType: "Dedicated Outdoor Acrylic Hard Courts with Stadium LED Lighting",
};

export const COURTS_DATA = Array.from({ length: 12 }, (_, i) => {
  const courtNum = i + 1;
  const statusList = ["Available", "Booked", "Open Play", "Clinic In Progress"];
  let status = "Available";
  if (courtNum === 3 || courtNum === 7) status = "Booked";
  if (courtNum === 1 || courtNum === 2) status = "Open Play";
  if (courtNum === 5) status = "Clinic In Progress";

  return {
    id: courtNum,
    name: `Court ${courtNum}`,
    type: courtNum <= 4 ? "Championship Stadium Court" : courtNum <= 8 ? "Shaded Executive Court" : "Community Court",
    lighting: "Pro LED Stadium 500 Lux",
    surface: "Cushioned Acrylic Hard Court",
    status,
    features: courtNum <= 4 ? ["Live Stream Camera", "Spectator Seating", "Misting Fans"] : ["Shade Canopies", "Hydration Station"]
  };
});

export const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
];

export const PROGRAMS = [
  {
    id: "open-play",
    title: "Daily Drop-In Open Play",
    tag: "Most Popular",
    category: "Recreational",
    schedule: "Daily 8:00 AM - 12:00 PM & 5:00 PM - 9:00 PM",
    price: "$12 / session",
    skillLevel: "All Levels (2.5 - 5.0)",
    description: "Rotate through games, meet top players in Florida, and enjoy high-energy structured drop-in sessions with paddle stack systems.",
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0eca?auto=format&fit=crop&w=800&q=80",
    badge: "Daily"
  },
  {
    id: "beginner-clinic",
    title: "Pickleball 101: Fundamentals & Rules",
    tag: "Beginner Friendly",
    category: "Clinics",
    schedule: "Tuesdays & Thursdays @ 9:30 AM",
    price: "$35 / class",
    skillLevel: "Beginner (1.0 - 2.5)",
    description: "Master court positioning, dinking, serve mechanics, kitchen rules, and scoring with our certified IPTPA pro instructors.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80",
    badge: "Clinics"
  },
  {
    id: "kitchen-mastery",
    title: "Advanced Kitchen & Reset BootCamp",
    tag: "Skill Booster",
    category: "Clinics",
    schedule: "Wednesdays & Saturdays @ 10:00 AM",
    price: "$45 / class",
    skillLevel: "Intermediate / Advanced (3.5+)",
    description: "Sharpen soft game resets, third-shot drops, speed-ups, hand speed drills, and strategic tournament play.",
    image: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?auto=format&fit=crop&w=800&q=80",
    badge: "Mastery"
  },
  {
    id: "friday-night-lights",
    title: "Friday Night Lights & Dinks Social",
    tag: "Social Event",
    category: "Social",
    schedule: "Every Friday 6:30 PM - 9:30 PM",
    price: "$25 / ticket",
    skillLevel: "Social & Fun",
    description: "Under the LED stadium lights! Live DJ music, artisan food trucks, craft beer & seltzers, round-robin play & prizes.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    badge: "Weekly Event"
  }
];

export const COACHES = [
  {
    name: "Maria Nili",
    role: "Head Pickleball Director",
    bio: "PPA Tour veteran with over 10 years of racket sports experience. Specializes in strategy, dink mechanics, and competitive mental edge.",
    credentials: "PPR Master Certified • 5.0 Rated Player",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Coach Tyler Vance",
    role: "Senior High Performance Coach",
    bio: "Former D1 tennis player turned pickleball fanatic. Expert in fast-paced transition zone resets and high-level doubles positioning.",
    credentials: "IPTPA Certified Level II • Tournament Champion",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Elena Rostova",
    role: "Junior & Youth Director",
    bio: "Passionate about bringing the joy of pickleball to young athletes and new players with engaging energetic drills.",
    credentials: "Youth Sports Certified • PPR Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  }
];

export const MEMBERSHIPS = [
  {
    id: "community",
    name: "Guest Pass",
    price: "$0",
    period: "Pay-as-you-play",
    description: "Perfect for visitors or casual play at The Yards.",
    features: [
      "Book courts 3 days in advance",
      "Standard $40/hr court reservation rate",
      "Access to open drop-in play ($12/session)",
      "Pro Shop access",
      "Café & bar guest access"
    ],
    popular: false,
    cta: "Start Playing"
  },
  {
    id: "garden-club",
    name: "Garden Club Member",
    price: "$89",
    period: "per month",
    description: "Our core membership for active players looking for priority and savings.",
    features: [
      "14-Day advance court reservation window",
      "25% OFF court rental fees ($30/hr)",
      "FREE unlimited morning drop-in play",
      "10% discount on Pro Shop apparel & gear",
      "Member-only Friday Night Social passes",
      "Free court lighting for night sessions"
    ],
    popular: true,
    cta: "Join Garden Club"
  },
  {
    id: "vip-championship",
    name: "Championship VIP",
    price: "$169",
    period: "per month",
    description: "Ultimate access with all-inclusive perks, guest passes, and private coaching credits.",
    features: [
      "30-Day priority advance booking window",
      "50% OFF court rental fees ($20/hr)",
      "FREE unlimited drop-in play (All slots)",
      "1 Private Coaching session / month included",
      "2 Monthly VIP Guest Passes",
      "15% discount in Pro Shop & Beer Garden",
      "Free locker room & towel service"
    ],
    popular: false,
    cta: "Get VIP Access"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1599586120429-48281b6f0eca?auto=format&fit=crop&w=600&q=80",
    likes: "482",
    comments: "34",
    caption: "Golden hour dinks under the palms! 🌴☀️ Who's grabbing a court this weekend at @picklegarden_? #PickleGarden #PonteVedraPickleball #PickleballLife"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=600&q=80",
    likes: "619",
    comments: "52",
    caption: "Friday Night Lights packing out all 12 courts! Cold drinks, high energy, and epic resets. 🍻⚡ #UnderTheLights #TheYards"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?auto=format&fit=crop&w=600&q=80",
    likes: "394",
    comments: "28",
    caption: "Fresh shipment of Paddles & Pro Shop apparel just dropped! Stop by before your next match. 🎾🎒 #ProShop"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    likes: "741",
    comments: "63",
    caption: "Congrats to our Spring Double Shootout Winners! 🏆 Over 80 teams battled it out across 12 courts! #PickleballTournament"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80",
    likes: "512",
    comments: "41",
    caption: "Morning light over Court 1. Crisp air, fresh coffee, and non-stop kitchen battles. ☕🎾 #MorningRoutine"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    likes: "889",
    comments: "79",
    caption: "Junior clinic in full swing! Building the next generation of pickleball legends at Pickle Garden. 🔥 #YouthPickleball"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Pickle Garden is hands down the finest facility in North Florida! 12 pristine courts, amazing LED lights for night play, and a community that makes you feel like family.",
    author: "Dave M.",
    role: "Local Player (4.0 Rating)",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The Friday Night Lights event is the highlight of our week. Great play, food trucks, ice cold craft beers, and top notch courts. There's nothing like it!",
    author: "Sarah & Kevin T.",
    role: "Garden Club Members",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "I took Coach Maria's Kitchen Mastery clinic and my third-shot drop improved tenfold in two weeks. The coaching staff here is world-class.",
    author: "Carlos R.",
    role: "Tournament Competitor",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export const FAQS = [
  {
    q: "Do I need to be a member to reserve courts or play?",
    a: "No! Pickle Garden welcomes everyone. Non-members can book courts up to 3 days in advance ($40/hr) or drop in for Open Play ($12). Members enjoy priority advance booking, discounted court rates, and free drop-in access."
  },
  {
    q: "Are rental paddles and balls available?",
    a: "Yes! Our on-site Pro Shop offers premium performance demo paddles (Selkirk, JOOLA, Paddletek) for rental or purchase, plus Franklin X-40 outdoor balls."
  },
  {
    q: "How does Open Play drop-in work?",
    a: "Open Play uses our organized paddle stack rotation system broken down by skill level. Show up, stack your paddle, and play formatted 11-point games with continuous rotation!"
  },
  {
    q: "Can I host a private corporate event, birthday party, or tournament?",
    a: "Absolutely! We offer full facility corporate buyouts, private court cluster reservations with dedicated coaches, food truck catering, and tournament coordination."
  },
  {
    q: "What happens in case of rain or inclement weather?",
    a: "If weather forces court closures, all reserved court rentals and scheduled clinic fees are automatically credited back to your account or rescheduled seamlessly."
  }
];
