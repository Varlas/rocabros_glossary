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
  race: string;
  description: string;
  content: string;
}

interface Info {
  AVENTURAS: Array<Adventure>;
  PERSONAJES: Array<NPC>;
}

interface NavBarProps {
  onOptionClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface SidePanelProps {
  onMenuClick: (event: MouseEvent<HTMLButtonElement>) => void;
  list: Array<Adventure | NPC>;
}

interface ContentProps {
  selectedId: number;
  list: Array<Adventure | NPC>;
}

export type { Adventure, NPC, Info, NavBarProps, SidePanelProps, ContentProps };
