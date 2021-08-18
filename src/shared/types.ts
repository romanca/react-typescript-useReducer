interface Task {
  text: string;
  complete?: boolean;
  id: number;
  categoryId?: number;
  priority: string;
  date: Date;
  deleted?: boolean;
  default?: boolean;
}

interface List {
  title: string;
  id: number;
  deleted?: boolean;
  favorite?: boolean;
}

interface Category {
  title: string;
  id: number;
}
