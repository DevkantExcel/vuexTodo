const students = [
    {
        'id' : 1,
        'name' : 'Rakesh',
        'games' : ['Tennis','Football','Cricket',],
        'selected': false
    },
    {
        'id' : 2,
        'name' : 'Amresh',
        'games' : ['Football','Cricket',],
        'selected': false
    },
    {
        'id' : 3,
        'name' : 'Prakash',
        'games' : ['Badminton','Tennis','Cricket',],
        'selected': false
    },
    {
        'id' : 4,
        'name' : 'David',
        'games' : ['Kabbaddi','Football','Chess',],
        'selected': false
    },
    {
        'id' : 5,
        'name' : 'Michael',
        'games' : ['Play Station','Wii','Sudoku',],
        'selected': false
    },
    {
        'id' : 6,
        'name' : 'Sucre',
        'games' : ['Football','Cards','3 patti',],
        'selected': false
    },
    {
        'id' : 7,
        'name' : 'Sebastian',
        'games' : ['Barbie','Ludo','Shatranj',],
        'selected': false
    },
]

export default {
    getStudents(){
        return students;
    }
}