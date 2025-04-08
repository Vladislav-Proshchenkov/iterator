import Team from './team';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

const swordsman = {
  name: 'Мечник',
  type: 'Swordsman',
  health: 70,
  level: 1,
  attack: 40,
  defence: 10
};

const magician = {
  name: 'Маг',
  type: 'Magician',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
};

const team = new Team();
team.addAll(bowman, swordsman, magician);

for (const member of team) {
  console.log(member);
}