/**
 * Just practicing my knowledge on RxJs observables.
 * Inspired by André Staltz video here: https://www.youtube.com/watch?v=uQ1zhJHclvs
 */

function delay(timeToDelay) {
    const inputObservable = this;
    const outputObservable = createObservable(outputObserver => {
        inputObservable.subscribe({
            next: x => {
                setTimeout(() => {
                    outputObserver.next(x)
                }, timeToDelay);
            },
            error: e => outputObserver.error(e),
            done: () => outputObserver.done()
        });
    });

    return outputObservable;
}

function filter(conditionFn) {
    const inputObservable = this;
    const outputObservable = createObservable(outputObserver => {
        inputObservable.subscribe({
            next: x => {
                if (conditionFn(x)) {
                    outputObserver.next(x);
                }
            },
            error: e => outputObserver.error(e),
            done: () => outputObserver.done()
        });
    });

    return outputObservable;
}

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
        map: map,
        filter: filter,
        delay: delay,
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
    .filter(x => x !== 2)
    .delay(3000)
    .subscribe(observer);

// Uncomment the code below to test it on the browser
// clickObservable
//     .map(x => x.clientX)
//     .filter(x => x < 200)
//     .delay(3000)
//     .subscribe(observer);