/**
 * Just practicing my knowledge on RxJs observables.
 * Inspired by André Staltz video here: https://www.youtube.com/watch?v=uQ1zhJHclvs
 */

const clickObservable = {
    subscribe: function subscribe(obs) {
        document.addEventListener('click', obs.next);
    }
};

const arrayObservable = {
    subscribe: function subscribe(obs) {
        let arr = [10, 20, 30];
        arr.forEach(obs.next);
        obs.done();
    }
};

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

arrayObservable.subscribe(observer);