export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  [Symbol.iterator]() {
    let current = 0;
    const members = Array.from(this.members);
    
    return {
      next() {
        if (current < members.length) {
          return {
            done: false,
            value: members[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}