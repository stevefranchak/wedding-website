function Countdown(targetTimeMs, $widgetContainer) {
    this.targetTimeMs = targetTimeMs;
    this.$widgetContainer = $widgetContainer;

    this.timeUnitList = ['weeks', 'days', 'hours', 'minutes', 'seconds'];
    this._countdownUnits = 0;

    this._$widget = null;
    this._$timeUnitListEles = $();

    if (!window.countdown) {
        if (console && console.error) {
            console.error('This script requires Countdown.js: http://countdownjs.org/');
        }
        return;
    }

    this._init();
}

Countdown.prototype._init = function() {
    this._render();
    this._attachElements();
    this._setCountdownUnits();
    this.start();
};

Countdown.prototype._setCountdownUnits = function() {
    var self = this;

    this.timeUnitList
    .map(function(unit) {
        if (typeof unit === 'string') {
            return unit.toUpperCase();
        }
        return unit;
    })
    .forEach(function(unit) {
        var unitValue = window.countdown[unit];
        if (unitValue) {
            self._countdownUnits |= unitValue;
        }
    });
};

Countdown.prototype._update = function() {
    var ts = window.countdown(null, this.targetTimeMs, this._countdownUnits);

    console.log(this._$timeUnitListEles);

    this._$timeUnitListEles.each(function() {
        var $valueEle = $(this);
            unit = $(this).data('unit');
        if (unit && ts[unit]) {
            $valueEle.text(ts[unit]);
        }
    });

    setTimeout($.proxy(Countdown.prototype._update, this), 1000);
};

Countdown.prototype.start = function() {
    this._update();
};

Countdown.prototype._render = function() {
    var listHtml = ['<ul class="countdown-widget">'];

    this.timeUnitList.forEach(function(unit) {
        listHtml.push('<li><span class="countdown-value" data-unit="' + unit + '"></span> ' +
            '<span class="countdown-unit">' + unit + '</span></li>');
    });

    listHtml.push('</ul>');

    this._$widget = $(listHtml.join(''));

    this._$widget.appendTo(this.$widgetContainer);
};

Countdown.prototype._attachElements = function() {
    var self = this;

    this._$widget.find('.countdown-value').each(function() {
        self._$timeUnitListEles = self._$timeUnitListEles.add($(this));
    });
};

module.exports = Countdown;
