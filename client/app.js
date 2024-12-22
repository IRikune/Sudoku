const $app = document.getElementById('app');
const $board = document.createElement('main')
$board.id = 'board'


const board = [
    { group: 1, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 2, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 3, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 4, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 5, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 6, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 7, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 8, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
    { group: 9, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] },
]

board.forEach((group, index) => {
    const $group = document.createElement('section')
    $group.className = 'group'
    group.value.forEach(row => {
        const $row = document.createElement('div')
        $row.className = 'row'
        row.forEach(cell => {
            const $cell = document.createElement('div')
            const $span = document.createElement('span')
            $span.innerText = cell
            $cell.className = 'cell'
            $cell.appendChild($span)
            $group.appendChild($cell)
        })
    })
    $board.appendChild($group)
})

$app.appendChild($board)