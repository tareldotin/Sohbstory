export interface IssueBody {
  heading: string;
  paragraphs: string[];
  pullQuote: string;
  closing: string;
}

export interface Issue {
  slug: string;
  number: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  cover: string;
  author: string;
  authorRole: string;
  body: IssueBody;
}

export const issues: Issue[] = [
  {
    slug: "on-quiet-mornings",
    number: 24,
    title: "On Quiet Mornings",
    date: "Mar 09, 2025",
    category: "Rituals",
    excerpt: "There is an hour — somewhere between the kettle and the first message — when the day has not yet decided what it will be.",
    readTime: "6 min",
    cover: "/images/cover-01.jpg",
    author: "Elena Marsh",
    authorRole: "Editor in Chief",
    body: {
      heading: "The hour before",
      paragraphs: [
        "We asked readers to describe their first ten minutes of the day. The replies arrived slowly, like they had been carried by hand. A woman in Lisbon lights one candle before the news. A man in Kyoto waits for the rice cooker’s click.",
        "None of it is remarkable. All of it is everything. The ritual is not the point — the returning is.",
        "This week, keep one small thing: a cup, a page, a song. Let it mark the start. That is all. We will do it with you.",
      ],
      pullQuote: "The ritual is not the point. The returning is.",
      closing: "See you next Sunday — same hour, same quiet.",
    },
  },
  {
    slug: "the-color-of-calm",
    number: 23,
    title: "The Color of Calm",
    date: "Feb 23, 2025",
    category: "Notes",
    excerpt: "Beige, we think, is not the absence of color. It is color at rest.",
    readTime: "3 min",
    cover: "/images/cover-03.jpg",
    author: "Amara Okafor",
    authorRole: "Illustrator",
    body: {
      heading: "A short letter",
      paragraphs: [
        "Beige, we think, is not the absence of color. It is color at rest — after the shouting, after the trend, after the long winter.",
        "This letter is a short one: a palette, a playlist, and a photograph of a wall that does nothing all day and does it beautifully.",
      ],
      pullQuote: "Soft is not weak. Soft is patient.",
      closing: "Paint nothing this week. Just look at a wall you like. It counts.",
    },
  },
  {
    slug: "hands-that-make",
    number: 22,
    title: "Hands That Make",
    date: "Feb 09, 2025",
    category: "Interviews",
    excerpt: "We spoke with a bookbinder who works in a room the size of a piano. She says the glue decides the schedule.",
    readTime: "9 min",
    cover: "/images/cover-05.jpg",
    author: "Jonas Reyer",
    authorRole: "Staff Writer",
    body: {
      heading: "A room the size of a piano",
      paragraphs: [
        "The studio sits above a bakery, so the workday smells faintly of bread. She has bound books here for eleven years and has never once rushed the spine.",
        "We talked about tools, mistakes, and why the slow trades are quietly winning — young people, she says, keep knocking on her door asking to learn.",
      ],
      pullQuote: "A book has to want to close.",
      closing: "The full conversation — glue, patience, and all — is inside this week’s letter.",
    },
  },
  {
    slug: "small-rooms-big-sky",
    number: 21,
    title: "Small Rooms, Big Sky",
    date: "Jan 26, 2025",
    category: "Places",
    excerpt: "Every city keeps one street where the light arrives late and stays longer. We went looking.",
    readTime: "7 min",
    cover: "/images/cover-06.jpg",
    author: "Jonas Reyer",
    authorRole: "Staff Writer",
    body: {
      heading: "Where the light stays",
      paragraphs: [
        "Every city keeps one street where the light arrives late and stays longer than anywhere else. It is rarely the famous one.",
        "In this letter: a rooftop in Seville, a staircase in Lisbon, and the window of a laundromat in Seoul at six in the morning.",
      ],
      pullQuote: "Light is the oldest furniture.",
      closing: "Tell us about your street. We are making a map of slow places.",
    },
  },
  {
    slug: "objects-we-keep",
    number: 20,
    title: "Objects We Keep",
    date: "Dec 15, 2024",
    category: "Objects",
    excerpt: "A wooden spoon with a burned edge. A ticket stub from a film you half remember. The drawer does not lie.",
    readTime: "5 min",
    cover: "/images/cover-02.jpg",
    author: "Theo Lindqvist",
    authorRole: "Producer",
    body: {
      heading: "The drawer does not lie",
      paragraphs: [
        "A wooden spoon with a burned edge. A ticket stub from a film you half remember. A key to a door you cannot place.",
        "We asked readers to photograph one object they would keep forever. Two hundred replies arrived — and one theme: the object was never the point.",
      ],
      pullQuote: "We keep things because we cannot keep time.",
      closing: "This week’s letter is a small museum of reader treasures — including a thimble that survived a house move, three countries, and one divorce.",
    },
  },
  {
    slug: "an-essay-on-slowness",
    number: 19,
    title: "An Essay on Slowness",
    date: "Nov 24, 2024",
    category: "Essays",
    excerpt: "Slowness is not a speed. It is a direction — toward the thing in front of you.",
    readTime: "11 min",
    cover: "/images/cover-04.jpg",
    author: "Elena Marsh",
    authorRole: "Editor in Chief",
    body: {
      heading: "A week at walking pace",
      paragraphs: [
        "Slowness is not a speed. It is a direction — toward the thing in front of you, the person in front of you, the day in front of you.",
        "This essay walks through one week lived at walking pace: the mail, the market, the long way home, and the strange discovery that nothing was lost.",
      ],
      pullQuote: "Hurry is a habit, not a necessity.",
      closing: "It ends where it began — at a table, with bread, with nothing to add.",
    },
  },
];

export const categories = [
  {
    name: "Rituals",
    count: 15,
    description: "The habits that hold us.",
  },
  {
    name: "Notes",
    count: 20,
    description: "Short and sweet.",
  },
  {
    name: "Interviews",
    count: 8,
    description: "Conversations with quiet makers.",
  },
  {
    name: "Places",
    count: 11,
    description: "Rooms, streets, and light.",
  },
  {
    name: "Objects",
    count: 9,
    description: "Things worth keeping.",
  },
  {
    name: "Essays",
    count: 12,
    description: "Longer thoughts on small things.",
  },
];
