var P9;
(function (P9) {
    var Selector = (function () {
        function Selector(list) {
            this.list = list;
        }
        Selector.prototype.addClass = function (c) {
            for (var i = 0; i < this.list.length; i++) {
                if ((' ' + this.list[i].className + ' ').indexOf(' ' + c + ' ') < 0) {
                    this.list[i].className += (' ' + c);
                }
            }
        };
        Selector.prototype.click = function (cb) {
            return this.event('click', cb);
        };
        Selector.prototype.data = function (d) {
            if (this.list.length != 1) {
                return null;
            }
            return this.list[0].dataset ? this.list[0].dataset[d] : this.list[0].getAttribute('data-' + d);
        };
        Selector.prototype.event = function (evt, cb) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].addEventListener(evt, cb);
            }
            ;
        };
        Selector.prototype.hasClass = function (c) {
            if (this.list.length != 1) {
                return false;
            }
            return (' ' + this.list[0].className + ' ').indexOf(' ' + c + ' ') > -1;
        };
        Selector.prototype.load = function (cb) {
            return this.event('load', cb);
        };
        Selector.prototype.removeClass = function (c) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].className = (' ' + this.list[i].className + ' ').replace(' ' + c + ' ', '').trim();
            }
            ;
        };
        return Selector;
    }());
    P9.Selector = Selector;
})(P9 || (P9 = {}));
var P9;
(function (P9) {
    function get(q) {
        return new P9.Selector(document.querySelectorAll(q));
    }
    P9.get = get;
})(P9 || (P9 = {}));
window.p9 = P9;
