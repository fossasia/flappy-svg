// threads are some actions that are called at a regular interval and can be stopped.

function Action(run, started, stopped) {
    if (run != undefined) {
        this.run = run;
    }
    if (started != undefined) {
        this.started = started;
    }
    if (stopped != undefined) {
        this.stopped = stopped;
    }
}

// attributes you can change
// public interface

Action.prototype = {
    intervalInMilliseconds : 50,
    started : function(){
        // action.start() was called.
        // You can use this.isRunning() to determine wether this is already running. 
    },
    stopped : function(){
        // action.stop() was called.
        // You can use this.isRunning() to determine wether this is already running. 
    },
    run : function(){
        // this will be executed regularily
    },

    // methods of actions

    start : function() {
        // start the action
        this.started();
        if (!this.isRunning()) {
             this.intervalID = setInterval(this.run, this.intervalInMilliseconds);
        }
    },

    stop : function() {
        // stop the action
        this.stopped();
        if (this.isRunning()) {
             clearInterval(this.intervalID);
             this.intervalID = null;
        }
    },

    restart : function() {
        // restart the action
        this.stop();
        this.start();
    },

    isRunning : function() {
        // restart the action
        return this.intervalID != null;
    },

    // attributes you better not touch
    // private interface
    intervalID : null
}
