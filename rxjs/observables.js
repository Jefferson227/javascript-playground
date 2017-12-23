/**
 * Just practicing my knowledge on RxJs observables.
 * Inspired by André Staltz video here: https://www.youtube.com/watch?v=uQ1zhJHclvs
 */

function map(transformFn) {
    const inputObservable = this;
    const outputObservable = createObservable(outputObserver => {
        inputObservable.subscribe({
            next: x => {
                const y = transformFn(x);
                outputObserver.next(y);
            },
            error: e => outputObserver.error(e),
            done: () => outputObserver.done()
        });
    });

    return outputObservable;
}

function createObservable(subscribeFn) {
    return {
        subscribe: subscribeFn,
        map: map
    };
}

const clickObservable = createObservable(function subscribe(obs) {
    document.addEventListener('click', obs.next);
});

const arrayObservable = createObservable(function subscribe(obs) {
    let arr = [10, 20, 30];
    arr.forEach(obs.next);
    obs.done();
});

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

arrayObservable
    .map(x => x / 10)
    .subscribe(observer);