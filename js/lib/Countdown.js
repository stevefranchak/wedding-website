function Countdown(targetTimeMs, $widgetContainer) {
    this.targetTimeMs = targetTimeMs;
    this.$widgetContainer = $widgetContainer;

    this.timeUnitList = ['months', 'days', 'hours', 'minutes', 'seconds'];

    this._$widget = null;
    this._timeUnitListEles = [];

    this._init();
}

Countdown.prototype._init = function() {
    this._render();
    this._attachElements();
    this.start();
};

Countdown.prototype.start = function() {

};

Countdown.prototype._render = function() {
    var listHtml = ['<ul class="countdown-widget">'];

    this.timeUnitList.forEach(function(unit) {
        listHtml.push('<li><span class="countdown-value"></span> <span>' + unit + '</span></li>');
    });

    listHtml.push('</ul>');

    this._$widget = $(listHtml.join(''));

    this._$widget.appendTo(this.$widgetContainer);
};

Countdown.prototype._attachElements = function() {
    var self = this;

    this._$widget.find('.countdown-value').each(function() {
        self._timeUnitListEles.push($(this));
    });
};

module.exports = Countdown;
