const dictionary =  {
  meta: {
    websiteName: 'Nooc\'s Yard',
    motto: 'An idealist who floats between existentialism and nihilism.',
    bio: `
      A person.

      Male.
      Reading, music, and coding.

      Random radio stations for music.
      Follows directors for movies.
      Prefers novels for reading,
      also enjoys philosophy and history.
      Buys games but doesn't play much.

      Tried learning to draw 
      and bought a MIDI keyboard, 
      but that's all about it.

      Client development.
      A fan of Serverless.
    `,
  },
  labels: {
    home: 'Home',
    works: 'Works',
    doing: 'Doing',
    playing: 'Playing',
    writing: 'Writing',
    friends: 'Friends',
    email: 'Email',
    icon(label: string) {
      return `Icon for ${label}`
    }
  }
};

export default dictionary;