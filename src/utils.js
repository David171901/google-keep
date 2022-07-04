export function randomColorTailwind() {
    const colors = ['bg-red-300', 'bg-orange-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-300', 'bg-indigo-300', 'bg-purple-300', 'bg-slate-300', 'bg-lime-300', 'bg-teal-300', 'bg-pink-300', 'bg-cyan-300', 'bg-violet-300', 'bg-rose-300'];
    return colors[Math.floor(Math.random() * colors.length)];
}

