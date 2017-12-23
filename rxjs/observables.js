/**
 * Just practicing my knowledge on RxJs observables.
 * Inspired by André Staltz video here: https://www.youtube.com/watch?v=uQ1zhJHclvs
 */

let arr = [10, 20, 30];

function next(ob) {
    console.log(ob);
}

function error(ob) {
    console.error(ob);
}

function done() {
    console.log('done');
}

function getMeSomeData(nextCb, errorCd, doneCb) {
    arr.forEach(nextCb);
    doneCb();
}

getMeSomeData(next, error, done);