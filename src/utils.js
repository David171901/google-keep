export function randomColorTailwind() {
    const colors = ['bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300'];
    return colors[Math.floor(Math.random() * colors.length)];
}

