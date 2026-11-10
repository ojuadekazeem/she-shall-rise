export const site = {
  name: "She Shall Rise Foundation",
  tagline: "Rescue Her. Restore Her. Empower Her to Rise.",
  // TODO: replace with the Foundation's real contact details
  email: "hello@sheshallrise.org",
  /**
   * Link to the "Nominate a Girl" Google Form. Paste the form's share link
   * between the quotes. While it is empty, the button opens an email instead.
   */
  nominateFormUrl: "" as string,
  vision:
    "A world where every vulnerable girl is rescued from exploitation and harmful circumstances, restored in dignity and hope, and empowered to rise into the life and purpose God intended for her.",
  mission:
    "She Shall Rise Foundation exists to rescue and protect vulnerable girls whose family circumstances place them at risk of exploitation, forced marriage, domestic servitude, trafficking, abuse, or other harmful situations. Through safe shelter, education, mentorship, advocacy, life-skills development, and faith-centered support, we help each girl heal, discover her worth, and build a future filled with dignity, opportunity, and purpose.",
  coreBelief:
    "Her circumstances may shape the beginning of her story, but they do not have the authority to determine how her story ends. She shall rise.",
  scripture: {
    text: "He raises the poor from the dust and lifts the needy from the ash heap.",
    ref: "Psalm 113:7",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
];

export const values = [
  {
    title: "Dignity",
    text: "Every girl is inherently valuable and deserves to be treated with respect, compassion, and honor.",
  },
  {
    title: "Protection",
    text: "We believe every girl deserves to grow in an environment where she is safe from exploitation, abuse, coercion, and violence.",
  },
  {
    title: "Faith",
    text: "Our work is rooted in the belief that God has a purpose for every girl's life and that no circumstance places her beyond restoration.",
  },
  {
    title: "Restoration",
    text: "We seek more than rescue. We support girls in healing emotionally, spiritually, socially, and practically so they can move forward with confidence.",
  },
  {
    title: "Education",
    text: "We believe education is one of the most powerful pathways out of generational poverty, exploitation, and dependency.",
  },
  {
    title: "Empowerment",
    text: "Our goal is not to create lifelong dependence on charity, but to equip each girl with the knowledge, skills, confidence, and opportunities necessary to build an independent future.",
  },
  {
    title: "Family & Community",
    text: "Whenever it is safe and appropriate, we seek sustainable solutions that strengthen families and communities so that poverty and hardship do not force girls into harmful circumstances.",
  },
  {
    title: "Integrity",
    text: "We will steward every child entrusted to us and every resource entrusted to the Foundation with accountability, transparency, and excellence.",
  },
];

export type Program = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  body: string[];
  list?: string[];
  closing?: string;
};

export const programs: Program[] = [
  {
    slug: "rescue-protection",
    number: 1,
    title: "Rescue & Protection",
    subtitle: "Finding Her Before Exploitation Does",
    body: [
      "Working with trusted community leaders, schools, social-service organizations, faith communities, and appropriate government authorities to identify girls facing serious risk of exploitation, trafficking, forced marriage, unsafe domestic labor, abuse, or educational abandonment.",
    ],
  },
  {
    slug: "safe-haven",
    number: 2,
    title: "Safe Haven",
    subtitle: "A Safe Place to Become",
    body: [
      "Where appropriate and legally permitted, the Foundation will help provide or coordinate safe temporary or longer-term accommodation for girls who cannot safely remain in their current environment.",
      "The goal is not simply housing. It is creating a place of safety, stability, belonging, and hope.",
    ],
  },
  {
    slug: "education",
    number: 3,
    title: "Rise Through Education",
    subtitle: "Keeping Her Dreams Alive",
    body: ["Educational support may include:"],
    list: [
      "School enrollment and tuition assistance",
      "Uniforms and educational materials",
      "Tutoring",
      "Technology access",
      "Scholarships",
      "Vocational education",
      "University or professional training support",
    ],
    closing:
      "Our goal is that financial hardship should never be the reason a girl loses her opportunity to learn.",
  },
  {
    slug: "restoration-mentorship",
    number: 4,
    title: "Restoration & Mentorship",
    subtitle: "Helping Her Discover Who She Is",
    body: [
      "Girls who have experienced exploitation, abandonment, abuse, or severe hardship may require more than material assistance.",
      "Through qualified professionals and trained mentors, the Foundation will facilitate appropriate emotional support, counseling, mentorship, spiritual encouragement, and healthy relationship development.",
    ],
    closing:
      "Every girl should have someone who consistently tells her: You are valuable. You are capable. Your story is not over.",
  },
  {
    slug: "independence",
    number: 5,
    title: "Rise to Independence",
    subtitle: "Preparing Her for Life Beyond the Foundation",
    body: [
      "Older girls and young women will receive practical preparation for adulthood through:",
    ],
    list: [
      "Financial literacy",
      "Career development",
      "Entrepreneurship",
      "Vocational skills",
      "Leadership development",
      "Digital literacy",
      "Job readiness",
      "Healthy relationship education",
      "Independent-living skills",
    ],
    closing:
      "Success is not simply rescuing a girl from today's crisis. Success is helping her become capable of determining tomorrow's choices for herself.",
  },
  {
    slug: "family-preservation",
    number: 6,
    title: "Family Preservation",
    subtitle: "Helping Families Before Separation Becomes Necessary",
    body: [
      "Sometimes a family does not want to give up their daughter. The family simply cannot afford to care for her.",
      "Where the home is otherwise safe, She Shall Rise Foundation will seek ways to address the underlying hardship through education sponsorship, food support, economic empowerment, referrals, and other sustainable interventions.",
    ],
    closing:
      "Whenever safely possible, we want to strengthen the family rather than separate the girl from it.",
  },
];

export const promise = [
  "We will see you.",
  "We will hear you.",
  "We will protect your dignity.",
  "We will help you rediscover your dreams.",
  "We will remind you that your present circumstances are not your final destination.",
  "We will walk beside you until you can stand confidently on your own.",
];

export const declaration = {
  notDefined: [
    "She will not be defined by poverty.",
    "She will not be defined by abandonment.",
    "She will not be defined by exploitation.",
    "She will not be defined by what happened to her.",
  ],
  will: [
    "She will be protected.",
    "She will be educated.",
    "She will be restored.",
    "She will be empowered.",
  ],
};

export const pillars = ["Rescue", "Protect", "Educate", "Restore", "Empower"];

/** Gallery photos (from Unsplash), optimized copies in public/gallery. The title shows when a photo is opened. */
export const gallery = [
  { imgUrl: "/gallery/girl-01.jpg", title: "You are valuable.", alt: "A young girl in a cream dress stands thoughtfully among other children" },
  { imgUrl: "/gallery/girl-04.jpg", title: "You are capable.", alt: "A little girl with braided hair looks up with hope in her eyes" },
  { imgUrl: "/gallery/girl-08.jpg", title: "Your story is not over.", alt: "Two young girls, one in a red headscarf, stand together in soft light" },
  { imgUrl: "/gallery/girl-03.jpg", title: "She will be protected.", alt: "Black-and-white portrait of a girl with a steady, serious gaze" },
  { imgUrl: "/gallery/girl-05.jpg", title: "She will be educated.", alt: "A girl in a white dress, embraced from behind by a friend" },
  { imgUrl: "/gallery/girl-07.jpg", title: "She will be restored.", alt: "A girl stands tall in a patterned dress under an open sky" },
  { imgUrl: "/gallery/girl-02.jpg", title: "She will be empowered.", alt: "A small girl in an orange dress stands alone on a dusty street" },
  { imgUrl: "/gallery/girl-06.jpg", title: "You were created for more.", alt: "A young girl sits quietly on a doorstep beside other children" },
  { imgUrl: "/gallery/girl-09.jpg", title: "She shall rise.", alt: "A girl in an orange skirt stands in a concrete doorway" },
];
