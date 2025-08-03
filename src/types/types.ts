interface Adventure {
  id: number;
  title: string;
  tags: Array<string>;
  description: string;
  content: Array<string>;
}

interface NPC {
  id: number;
  title: string;
  tags: Array<string>;
  image?: string;
  tagline?: string;
  race: string;
  description: string;
  content: Array<string>;
}

interface Places {
  id: number;
  title: string;
  type: string;
  tags: Array<string>;
  description: string;
  tagline: string;
  content: Array<string>;
}

interface Info {
  AVENTURAS: Array<Adventure>;
  PERSONAJES: Array<NPC>;
  LUGARES: Array<Places>;
}

interface ContentProps {
  selectedId: number;
  list: Array<Adventure | NPC>;
}

export type { Adventure, NPC, Info, ContentProps };
