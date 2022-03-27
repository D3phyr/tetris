let container = document.querySelector('.container');
let block = document.querySelectorAll('.block');
let blockNext = document.querySelectorAll('.next__block');
let firstColomn = Array.from(document.querySelectorAll('.block__first-colomn'));
let lastColomn = Array.from(document.querySelectorAll('.block__last-colomn'));
let result = document.querySelector('.result__value');
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let ArrowDownIndex = 0;
let randomElement = -1;
let randomNextElement = 0;
let elementPosition = 0;
let resultValue = 0;

let timeInterval = setInterval(falling, 500);
respawn();

window.addEventListener('keydown', function (e) {
    if (e.code == 'ArrowLeft') {
        if (!firstColomn.some(elem => elem.classList.contains('fall'))) {
            if ((!block[index1 - 20].classList.contains('set')) && (!block[index2 - 20].classList.contains('set')) && (!block[index3 - 20].classList.contains('set')) && (!block[index4 - 20].classList.contains('set')) && (index1 > 19) && (index2 > 19) && (index3 > 19) && (index4 > 19)) {
                removeFallAll();
                removeColor();
                index1 -= 20;
                index2 -= 20;
                index3 -= 20;
                index4 -= 20;
                addFallAll();
                setColor();
            }
        }
    }
    if (e.code == 'ArrowRight') {
        if (!lastColomn.some(elem => elem.classList.contains('fall'))) {
            if ((!block[index1 + 20].classList.contains('set')) && (!block[index2 + 20].classList.contains('set')) && (!block[index3 + 20].classList.contains('set')) && (!block[index4 + 20].classList.contains('set')) && (index4 < 180) && (index3 < 180) && (index2 < 180) && (index1 < 180)) {
                removeFallAll();
                removeColor();
                index1 += 20;
                index2 += 20;
                index3 += 20;
                index4 += 20;
                addFallAll();
                setColor();
            }
        }
    }
    if (e.code == 'ArrowDown') {
        if (ArrowDownIndex == 0) {
            timeInterval = setInterval(falling, 30);
            ArrowDownIndex = 1;
            this.addEventListener('keyup', function () {
                ArrowDownIndex = 0;
                clearInterval(timeInterval);
            })
        }
    }
    if (e.code == 'ArrowUp') {
        if (randomElement == 0) {
            if (!block[0].classList.contains('fall') && !block[80].classList.contains('fall') && !block[160].classList.contains('fall') && !block[1].classList.contains('fall') && !block[81].classList.contains('fall') && !block[161].classList.contains('fall')) {

                if (elementPosition == 0) {
                    if (!block[index1 + 38].classList.contains('set') && !block[index2 + 19].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 - 19].classList.contains('set')) {
                        removeFallAll();
                        removeColor();
                        index1 += 38;
                        index2 += 19;
                        index3 += 0;
                        index4 -= 19;
                        addFallAll();
                        setColor();
                        elementPosition = 1;
                    }
                }
                else if (elementPosition == 1) {
                    if (!block[index1 - 38].classList.contains('set') && !block[index2 - 19].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 + 19].classList.contains('set')) {
                        removeFallAll();
                        removeColor();
                        index1 -= 38;
                        index2 -= 19;
                        index3 += 0;
                        index4 += 19;
                        addFallAll();
                        setColor();
                        elementPosition = 0;
                    }
                }

            }
        }

        if (randomElement == 2) {
            if (elementPosition == 0) {
                if (!block[index1 + 1].classList.contains('set') && !block[index2 + 0].classList.contains('set') && !block[index3 - 0].classList.contains('set') && !block[index4 - 39].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 1;
                    index2 += 0;
                    index3 -= 0;
                    index4 -= 39;
                    addFallAll();
                    setColor();
                    elementPosition = 1;
                }
            }
            else if (elementPosition == 1) {
                if (!block[index1 - 1].classList.contains('set') && !block[index2 - 0].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 + 39].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 -= 1;
                    index2 -= 0;
                    index3 += 00;
                    index4 += 39;
                    addFallAll();
                    setColor();
                    elementPosition = 0;
                }
            }
        }

        if (randomElement == 3) {
            if (elementPosition == 0) {
                if (!block[index1 + 41].classList.contains('set') && !block[index2 + 0].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 + 1].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 41;
                    index2 += 0;
                    index3 += 0;
                    index4 += 1;
                    addFallAll();
                    setColor();
                    elementPosition = 1;
                }
            }
            else if (elementPosition == 1) {
                if (!block[index1 - 41].classList.contains('set') && !block[index2 - 0].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 - 1].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 -= 41;
                    index2 -= 0;
                    index3 += 0;
                    index4 -= 1;
                    addFallAll();
                    setColor();
                    elementPosition = 0;
                }
            }
        }

        if (randomElement == 4) {
            if (elementPosition == 0) {
                if (!block[index1 + 20].classList.contains('set') && !block[index2 - 1].classList.contains('set') && !block[index3 - 20].classList.contains('set') && !block[index4 - 39].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 20;
                    index2 -= 1;
                    index3 -= 20;
                    index4 -= 39;
                    addFallAll();
                    setColor();
                    elementPosition = 1;
                }
            }
            else if (elementPosition == 1) {
                if (!block[index1 + 21].classList.contains('set') && !block[index2 + 40].classList.contains('set') && !block[index3 + 19].classList.contains('set') && !block[index4 - 2].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 21;
                    index2 += 40;
                    index3 += 19;
                    index4 -= 2;
                    addFallAll();
                    setColor();
                    elementPosition = 2;
                }
            }
            else if (elementPosition == 2) {
                if (!block[index1 - 39].classList.contains('set') && !block[index2 - 18].classList.contains('set') && !block[index3 + 1].classList.contains('set') && !block[index4 + 20].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 -= 39;
                    index2 -= 18;
                    index3 += 1;
                    index4 += 20;
                    addFallAll();
                    setColor();
                    elementPosition = 3;
                }
            }
            else if (elementPosition == 3) {
                if (!block[index1 - 2].classList.contains('set') && !block[index2 - 21].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 + 21].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 -= 2;
                    index2 -= 21;
                    index3 += 0;
                    index4 += 21;
                    addFallAll();
                    setColor();
                    elementPosition = 0;
                }
            }
        }

        if (randomElement == 5) {
            if (elementPosition == 0) {
                if (!block[index1 + 19].classList.contains('set') && !block[index2 - 0].classList.contains('set') && !block[index3 - 19].classList.contains('set') && !block[index4 + 2].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 19;
                    index2 -= 0;
                    index3 -= 19;
                    index4 += 2;
                    addFallAll();
                    setColor();
                    elementPosition = 1;
                }
            }
            else if (elementPosition == 1) {
                if (!block[index1 + 20].classList.contains('set') && !block[index2 - 1].classList.contains('set') && !block[index3 - 22].classList.contains('set') && !block[index4 - 41].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 20;
                    index2 -= 1;
                    index3 -= 22;
                    index4 -= 41;
                    addFallAll();
                    setColor();
                    elementPosition = 2;
                }
            }
            else if (elementPosition == 2) {
                if (!block[index1 + 2].classList.contains('set') && !block[index2 + 21].classList.contains('set') && !block[index3 + 40].classList.contains('set') && !block[index4 + 19].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 2;
                    index2 += 21;
                    index3 += 40;
                    index4 += 19;
                    addFallAll();
                    setColor();
                    elementPosition = 3;
                }
            }
            else if (elementPosition == 3) {
                if (!block[index1 - 41].classList.contains('set') && !block[index2 - 20].classList.contains('set') && !block[index3 + 1].classList.contains('set') && !block[index4 + 20].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 -= 41;
                    index2 -= 20;
                    index3 += 1;
                    index4 += 20;
                    addFallAll();
                    setColor();
                    elementPosition = 0;
                }
            }
        }

        if (randomElement == 6) {
            if (elementPosition == 0) {
                if (!block[index1 + 21].classList.contains('set') && !block[index2 + 19].classList.contains('set') && !block[index3 - 0].classList.contains('set') && !block[index4 - 19].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 21;
                    index2 += 19;
                    index3 -= 0;
                    index4 -= 19;
                    addFallAll();
                    setColor();
                    elementPosition = 1;
                }
            }
            else if (elementPosition == 1) {
                if (!block[index1 - 19].classList.contains('set') && !block[index2 + 21].classList.contains('set') && !block[index3 - 0].classList.contains('set') && !block[index4 - 21].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 -= 19;
                    index2 += 21;
                    index3 -= 0;
                    index4 -= 21;
                    addFallAll();
                    setColor();
                    elementPosition = 2;
                }
            }
            else if (elementPosition == 2) {
                if (!block[index1 - 21].classList.contains('set') && !block[index2 - 19].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 + 19].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 -= 21;
                    index2 -= 19;
                    index3 += 0;
                    index4 += 19;
                    addFallAll();
                    setColor();
                    elementPosition = 3;
                }
            }
            else if (elementPosition == 3) {
                if (!block[index1 + 19].classList.contains('set') && !block[index2 - 21].classList.contains('set') && !block[index3 + 0].classList.contains('set') && !block[index4 + 21].classList.contains('set')) {
                    removeFallAll();
                    removeColor();
                    index1 += 19;
                    index2 -= 21;
                    index3 += 0;
                    index4 += 21;
                    addFallAll();
                    setColor();
                    elementPosition = 0;
                }
            }
        }
    }
})

function removeFallAll() {
    block[index1].classList.remove('fall');
    block[index2].classList.remove('fall');
    block[index3].classList.remove('fall');
    block[index4].classList.remove('fall');
}

function addFallAll() {
    block[index1].classList.add('fall');
    block[index2].classList.add('fall');
    block[index3].classList.add('fall');
    block[index4].classList.add('fall');
}

function addSetAll() {
    block[index1].classList.add('set');
    block[index2].classList.add('set');
    block[index3].classList.add('set');
    block[index4].classList.add('set');
}

function falling() {
    removeFallAll();
    removeColor();
    if (((index1 - 19) % 20 == 0) || ((index2 - 19) % 20 == 0) || ((index3 - 19) % 20 == 0) || ((index4 - 19) % 20 == 0) || (block[index1 + 1].classList.contains('set')) || (block[index2 + 1].classList.contains('set')) || (block[index3 + 1].classList.contains('set')) || (block[index4 + 1].classList.contains('set'))) {
        addSetAll();
        setColor();
        respawn();
        rowCheck();
    } else {
        index1++;
        index2++;
        index3++;
        index4++;
        addFallAll();
        setColor();
    }
}

function respawn() {
    if (randomElement == -1) randomElement = Math.floor(Math.random() * 7);
    else randomElement = randomNextElement;
    elementPosition = 0;
    if (randomElement == 0) {
        index1 = 60;
        index2 = 80;
        index3 = 100;
        index4 = 120;
        addFallAll();
        setDarkBlue();
        blockNext[0]
    }
    if (randomElement == 1) {
        index1 = 80;
        index2 = 81;
        index3 = 100;
        index4 = 101;
        addFallAll();
        setBlue();
    }
    if (randomElement == 2) {
        index1 = 60;
        index2 = 80;
        index3 = 81;
        index4 = 101;
        addFallAll();
        setOrange();
    }
    if (randomElement == 3) {
        index1 = 61;
        index2 = 81;
        index3 = 80;
        index4 = 100;
        addFallAll();
        setYellow();
    }
    if (randomElement == 4) {
        index1 = 60;
        index2 = 61;
        index3 = 81;
        index4 = 101;
        addFallAll();
        setPurple();
    }
    if (randomElement == 5) {
        index1 = 61;
        index2 = 81;
        index3 = 101;
        index4 = 100;
        addFallAll();
        setGreen();
    }
    if (randomElement == 6) {
        index1 = 80;
        index2 = 61;
        index3 = 81;
        index4 = 101;
        addFallAll();
        setMagenta();
    }

    blockNext.forEach(item => {
        item.classList.remove('block_dark-blue');
        item.classList.remove('block_blue');
        item.classList.remove('block_orange');
        item.classList.remove('block_yellow');
        item.classList.remove('block_purple');
        item.classList.remove('block_green');
        item.classList.remove('block_magenta');
    })

    randomNextElement = Math.floor(Math.random() * 7);
    if (randomNextElement == 0) {
        blockNext[0].classList.add('block_dark-blue');
        blockNext[2].classList.add('block_dark-blue');
        blockNext[4].classList.add('block_dark-blue');
        blockNext[6].classList.add('block_dark-blue');
    }
    if (randomNextElement == 1) {
        blockNext[2].classList.add('block_blue');
        blockNext[3].classList.add('block_blue');
        blockNext[4].classList.add('block_blue');
        blockNext[5].classList.add('block_blue');
    }
    if (randomNextElement == 2) {
        blockNext[2].classList.add('block_orange');
        blockNext[4].classList.add('block_orange');
        blockNext[5].classList.add('block_orange');
        blockNext[7].classList.add('block_orange');
    }
    if (randomNextElement == 3) {
        blockNext[3].classList.add('block_yellow');
        blockNext[4].classList.add('block_yellow');
        blockNext[5].classList.add('block_yellow');
        blockNext[6].classList.add('block_yellow');
    }
    if (randomNextElement == 4) {
        blockNext[0].classList.add('block_purple');
        blockNext[1].classList.add('block_purple');
        blockNext[3].classList.add('block_purple');
        blockNext[5].classList.add('block_purple');
    }
    if (randomNextElement == 5) {
        blockNext[4].classList.add('block_green');
        blockNext[5].classList.add('block_green');
        blockNext[3].classList.add('block_green');
        blockNext[1].classList.add('block_green');
    }
    if (randomNextElement == 6) {
        blockNext[4].classList.add('block_magenta');
        blockNext[3].classList.add('block_magenta');
        blockNext[5].classList.add('block_magenta');
        blockNext[7].classList.add('block_magenta');
    }
}

function setDarkBlue() {
    block[index1].classList.add('block_dark-blue');
    block[index2].classList.add('block_dark-blue');
    block[index3].classList.add('block_dark-blue');
    block[index4].classList.add('block_dark-blue');
}

function setBlue() {
    block[index1].classList.add('block_blue');
    block[index2].classList.add('block_blue');
    block[index3].classList.add('block_blue');
    block[index4].classList.add('block_blue');
}

function setOrange() {
    block[index1].classList.add('block_orange');
    block[index2].classList.add('block_orange');
    block[index3].classList.add('block_orange');
    block[index4].classList.add('block_orange');
}

function setYellow() {
    block[index1].classList.add('block_yellow');
    block[index2].classList.add('block_yellow');
    block[index3].classList.add('block_yellow');
    block[index4].classList.add('block_yellow');
}

function setPurple() {
    block[index1].classList.add('block_purple');
    block[index2].classList.add('block_purple');
    block[index3].classList.add('block_purple');
    block[index4].classList.add('block_purple');
}

function setGreen() {
    block[index1].classList.add('block_green');
    block[index2].classList.add('block_green');
    block[index3].classList.add('block_green');
    block[index4].classList.add('block_green');
}

function setMagenta() {
    block[index1].classList.add('block_magenta');
    block[index2].classList.add('block_magenta');
    block[index3].classList.add('block_magenta');
    block[index4].classList.add('block_magenta');
}

function setColor() {
    if (randomElement == 0) setDarkBlue();
    if (randomElement == 1) setBlue();
    if (randomElement == 2) setOrange();
    if (randomElement == 3) setYellow();
    if (randomElement == 4) setPurple();
    if (randomElement == 5) setGreen();
    if (randomElement == 6) setMagenta();
}

function removeColor() {
    block.forEach(item => {
        if (!item.classList.contains('set') && !item.classList.contains('fall')) {
            item.classList.remove('block_dark-blue');
            item.classList.remove('block_blue');
            item.classList.remove('block_orange');
            item.classList.remove('block_yellow');
            item.classList.remove('block_purple');
            item.classList.remove('block_green');
            item.classList.remove('block_magenta');
        }
    })
}

function rowCheck() {
    for (let z = 0; z < 20; z++) {
        if (block[z].classList.contains('set') && block[z + 20].classList.contains('set') && block[z + 40].classList.contains('set') && block[z + 60].classList.contains('set') && block[z + 80].classList.contains('set') && block[z + 100].classList.contains('set') && block[z + 120].classList.contains('set') && block[z + 140].classList.contains('set') && block[z + 160].classList.contains('set') && block[z + 180].classList.contains('set')) {
            rowRemove(z);
            rowLowering(z);
        }
    }
    if (block[2].classList.contains('set') || block[22].classList.contains('set') || block[42].classList.contains('set') || block[62].classList.contains('set') || block[82].classList.contains('set') || block[102].classList.contains('set') || block[122].classList.contains('set') || block[142].classList.contains('set') || block[162].classList.contains('set') || block[182].classList.contains('set')) {
        lose();
    }
}

function rowRemove(z) {
    rowBlockRemove(z);
    rowBlockRemove(z + 20);
    rowBlockRemove(z + 40);
    rowBlockRemove(z + 60);
    rowBlockRemove(z + 80);
    rowBlockRemove(z + 100);
    rowBlockRemove(z + 120);
    rowBlockRemove(z + 140);
    rowBlockRemove(z + 160);
    rowBlockRemove(z + 180);
    resultValue++;
    result.innerHTML = resultValue;
}

function rowBlockRemove(z) {
    block[z].classList.remove('set');
    block[z].classList.remove('block_dark-blue');
    block[z].classList.remove('block_blue');
    block[z].classList.remove('block_orange');
    block[z].classList.remove('block_yellow');
    block[z].classList.remove('block_purple');
    block[z].classList.remove('block_green');
    block[z].classList.remove('block_magenta');
}

function rowLowering(z) {
    for (z; z > 0; z--) {
        if (block[z].classList.contains('set')) {
            rowColorSet(z);
            rowBlockRemove(z);
            block[z + 1].classList.add('set');
        }
        if (block[z + 20].classList.contains('set')) {
            rowColorSet(z + 20);
            rowBlockRemove(z + 20);
            block[z + 20 + 1].classList.add('set');
        }
        if (block[z + 40].classList.contains('set')) {
            rowColorSet(z + 40);
            rowBlockRemove(z + 40);
            block[z + 40 + 1].classList.add('set');
        }
        if (block[z + 60].classList.contains('set')) {
            rowColorSet(z + 60);
            rowBlockRemove(z + 60);
            block[z + 60 + 1].classList.add('set');
        }
        if (block[z + 80].classList.contains('set')) {
            rowColorSet(z + 80);
            rowBlockRemove(z + 80);
            block[z + 80 + 1].classList.add('set');
        }
        if (block[z + 100].classList.contains('set')) {
            rowColorSet(z + 100);
            rowBlockRemove(z + 100);
            block[z + 100 + 1].classList.add('set');
        }
        if (block[z + 120].classList.contains('set')) {
            rowColorSet(z + 120);
            rowBlockRemove(z + 120);
            block[z + 120 + 1].classList.add('set');
        }
        if (block[z + 140].classList.contains('set')) {
            rowColorSet(z + 140);
            rowBlockRemove(z + 140);
            block[z + 140 + 1].classList.add('set');
        }
        if (block[z + 160].classList.contains('set')) {
            rowColorSet(z + 160);
            rowBlockRemove(z + 160);
            block[z + 160 + 1].classList.add('set');
        }
        if (block[z + 180].classList.contains('set')) {
            rowColorSet(z + 180);
            rowBlockRemove(z + 180);
            block[z + 180 + 1].classList.add('set');
        }
    }
}

function rowColorSet(z) {
    if (block[z].classList.contains('block_dark-blue')) block[z + 1].classList.add('block_dark-blue');
    if (block[z].classList.contains('block_blue')) block[z + 1].classList.add('block_blue');
    if (block[z].classList.contains('block_orange')) block[z + 1].classList.add('block_orange');
    if (block[z].classList.contains('block_yellow')) block[z + 1].classList.add('block_yellow');
    if (block[z].classList.contains('block_purple')) block[z + 1].classList.add('block_purple');
    if (block[z].classList.contains('block_green')) block[z + 1].classList.add('block_green');
    if (block[z].classList.contains('block_magenta')) block[z + 1].classList.add('block_magenta');
}

function lose() {
    block.forEach(item => {
        item.classList.remove('set');
        item.classList.remove('block_dark-blue');
        item.classList.remove('block_blue');
        item.classList.remove('block_orange');
        item.classList.remove('block_yellow');
        item.classList.remove('block_purple');
        item.classList.remove('block_green');
        item.classList.remove('block_magenta');
    })
    result.innerHTML = 0;
    resultValue = 0;
    respawn();
}
