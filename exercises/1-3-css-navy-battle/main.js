const targets = [10,3,4,1,6,2,43,66,21,23]
const boards = document.querySelectorAll('.board');
const configs = {
    unit: 1,
    xAxys: 10,
    yAxys: 10,
    width: 400,
    height: 400
}
let boardCount = 0;

boards.forEach(board => {
    let totalCells = configs.xAxys * configs.yAxys;
    
    board.style.width = configs.width + 'px';
    board.style.height = configs.height + 'px';
    for(var i = 1; i <= totalCells; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        cell.style.width = configs.width / configs.xAxys + 'px';
        cell.style.height = configs.width / configs.yAxys + 'px';
        board.appendChild(cell)
    }

    let target = targets[boardCount]
    board.childNodes[target].classList.add('target')     
    
    // ball creator
    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.classList.add(`ball-${boardCount}`);
    board.appendChild(ball)
    
    boardCount++
});
