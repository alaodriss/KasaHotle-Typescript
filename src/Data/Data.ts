
interface Host {
  name: string;
  picture: string;
}

export class Accommodation {
  id?: string ;
  title?: string;
  cover?: string;
  pictures?: string[];
  description?: string;
  host?: Host | undefined;
  rating?: string;
  location?: string;
  equipments?: string[];
  tags?: string[];

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.cover) this.cover = initializer.cover;
    if (initializer.pictures) this.pictures = initializer.pictures;
    if (initializer.description) this.description = initializer.description;
    if (initializer.host) this.host = initializer.host;
    if (initializer.rating) this.rating = initializer.rating;
    if (initializer.location) this.location = initializer.location;
    if (initializer.equipments) this.equipments = initializer.equipments;
    if (initializer.tags) this.tags = initializer.tags;
  }
}