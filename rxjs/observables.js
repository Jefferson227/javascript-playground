/**
 * Just practicing my knowledge on RxJs observables.
 * Inspired by André Staltz video here: https://www.youtube.com/watch?v=uQ1zhJHclvs
 */

let arr = [10, 20, 30];

const observer = {
    next: function next(ob) {
        console.log(ob);
    },
    error: function error(ob) {
        console.error(ob);
    },
    done: function done() {
        console.log('done');
    }
};

function getMeSomeData(obs) {
    arr.forEach(obs.next);
    obs.done();
}

getMeSomeData(observer);