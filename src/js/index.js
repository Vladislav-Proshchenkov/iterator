import Character from './Character.js';
import Team from './Team.js';

const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 70, 1, 30, 20);
const magician = new Character('Маг', 'Magician', 40, 1, 20, 40);

const team = new Team();
team.addAll(bowman, swordsman, magician);

// Итерация по команде
for (const character of team) {
  console.log(character);
}