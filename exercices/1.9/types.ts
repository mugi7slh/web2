export interface Pizza {
  id: number;
  title: string;
  content: string;
}

export interface PizzaToUpdate {
  title?: string;
  content?: string;
}
export interface Film{
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number; // en millions
  description?: string; // URL vers une image
  imageUrl?: string; // URL vers une image
}
interface Text {
  id: string;
  content: string;
  level: "easy" | "medium" | "hard";
}

type NewText = Omit<Text, "id">;

export type { Text, NewText };

export type NewPizza = Omit<Pizza, "id">;
export type NewFilm = Omit<Film, 'id'>;

