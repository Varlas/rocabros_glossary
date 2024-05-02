interface Adventure {
  id: number;
  title: string;
  tags: Array<string>;
  description: string;
  content: string;
}

interface NPC {
  id: number;
  title: string;
  tags: Array<string>;
  image: string;
  tagline: string;
  race: string;
  description: string;
  content: string;
}

interface Info {
  AVENTURAS: Array<Adventure>;
  PERSONAJES: Array<NPC>;
}

interface ContentProps {
  selectedId: number;
  list: Array<Adventure | NPC>;
}

export type { Adventure, NPC, Info, ContentProps };
