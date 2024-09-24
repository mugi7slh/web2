interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}
interface Film{
  id: number;
  title: String;
  director: String;
  duration: number;
  budget?: number; // en millions
  description?: String; // URL vers une image
  imageUrl?: String; // URL vers une image
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Film };
