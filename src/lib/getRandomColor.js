export default function getRandomColor() {
  const colors = [
    '#495057',
    '#f03e3e',
    '#d6336c',
    '#ae3ec9',
    'green',
    'blue',
    'lightblue',
    'yellow'
  ];

  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}