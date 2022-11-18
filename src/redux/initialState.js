const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do!',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Socials!',
      description: 'ToDo on socials'
    },
  ],

  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: '2',
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: '3',
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: '4',
      listId: '2',
      title: 'Facebook',
      icon: 'facebook',
    },
    {
      id: '5',
      listId: '2',
      title: 'Instagram',
      icon: 'instagram',
    },
    {
      id: '6',
      listId: '2',
      title: 'Twitter',
      icon: 'twitter',
    }
  ],

  cards: [
    { id: '1', columnId: '1', isFavorite: false, title: 'This is Going to Hurt' },
    { id: '2', columnId: '1', isFavorite: false, title: 'Interpreter of Maladies' },
    { id: '3', columnId: '2', isFavorite: false, title: 'Harry Potter' },
    { id: '4', columnId: '2', isFavorite: false, title: 'Star Wars' },
    { id: '5', columnId: '3', isFavorite: false, title: 'The Witcher' },
    { id: '6', columnId: '3', isFavorite: false, title: 'Skyrim' },
    { id: '7', columnId: '4', isFavorite: false, title: 'Suchar_Codzienny' },
    { id: '8', columnId: '4', isFavorite: false, title: 'Edyta Górniak' },
    { id: '9', columnId: '5', isFavorite: false, title: 'Anna Pavlova' },
    { id: '10', columnId: '6', isFavorite: false, title: 'Tygodnik NIE' },
  ],

  searchPhrase:  '',
};

export default initialState;