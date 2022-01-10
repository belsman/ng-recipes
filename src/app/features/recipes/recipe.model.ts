export interface Recipe {
  name: string;
  description: string;
  imageURL: string;
}

export const recipes: Recipe[] = [
  {
    name: 'A test recipe',
    description: 'A simple test recipe',
    imageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7QUgLIlKoGmNlvoOQ-g-J0kTeV2efXgPVw&usqp=CAU',
  },
];
