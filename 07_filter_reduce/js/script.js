const topBrazilMovies = [
    { title: 'Vingadores: Ultimato', peopleAmount: 19_686_119, distribuitedBy: 'Disney' },
    { title: 'Titanic', peopleAmount: 17_050_000, distribuitedBy: 'Paramount / 20th' },
    { title: 'O Rei Leão', peopleAmount: 16_267_649, distribuitedBy: 'Disney' },
    { title: 'Vingadores: Guerra Infinita', peopleAmount: 14_572_181, distribuitedBy: 'Disney' },
    { title: 'Tubarão', peopleAmount: 13_035_119, distribuitedBy: 'Universal' },
    { title: 'Nada a Perder', peopleAmount: 11_944_985, distribuitedBy: 'Paris Filmes' },
    { title: 'Os Dez Mandamentos', peopleAmount: 11_259_536, distribuitedBy: 'Paris Downton Filmes' },
    { title: 'Tropa de Elite 2', peopleAmount: 11_204_815, distribuitedBy: 'Zazen' },
    { title: 'Os Vingadores', peopleAmount: 10_968_065, distribuitedBy: 'Disney' },
    { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10_735_524, distribuitedBy: 'Embrafilme' }
]
const totalPeopleWatchedDisneyMovies = topBrazilMovies
    .filter(({ distribuitedBy }) => distribuitedBy === 'Disney')
    .reduce((acc, { peopleAmount }) => acc + peopleAmount, 0)
console.log(totalPeopleWatchedDisneyMovies)