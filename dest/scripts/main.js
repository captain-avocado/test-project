(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var bodyScrollLock_min = createCommonjsModule(function (module, exports) {
!function(e,t){if("function"==typeof undefined&&undefined.amd)undefined(["exports"],t);else t(exports);}(commonjsGlobal,function(exports){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var l=!1;if("undefined"!=typeof window){var e={get passive(){l=!0;}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e);}var d="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),c=[],u=!1,a=-1,s=void 0,v=void 0,f=function(t){return c.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},m=function(e){var t=e||window.event;return!!f(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))},o=function(){setTimeout(function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0);});};exports.disableBodyScroll=function(i,e){if(d){if(!i)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(i&&!c.some(function(e){return e.targetElement===i})){var t={targetElement:i,options:e||{}};c=[].concat(r(c),[t]),i.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY);},i.ontouchmove=function(e){var t,o,n,r;1===e.targetTouches.length&&(o=i,r=(t=e).targetTouches[0].clientY-a,!f(t.target)&&(o&&0===o.scrollTop&&0<r?m(t):(n=o)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&r<0?m(t):t.stopPropagation()));},u||(document.addEventListener("touchmove",m,l?{passive:!1}:void 0),u=!0);}}else{n=e,setTimeout(function(){if(void 0===v){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(v=document.body.style.paddingRight,document.body.style.paddingRight=t+"px");}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden");});var o={targetElement:i,options:e||{}};c=[].concat(r(c),[o]);}var n;},exports.clearAllBodyScrollLocks=function(){d?(c.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null;}),u&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1),c=[],a=-1):(o(),c=[]);},exports.enableBodyScroll=function(t){if(d){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,c=c.filter(function(e){return e.targetElement!==t}),u&&0===c.length&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1);}else 1===c.length&&c[0].targetElement===t?(o(),c=[]):c=c.filter(function(e){return e.targetElement!==t});};});
});

var bodyScrollLock = unwrapExports(bodyScrollLock_min);

/*!
 * Glide.js v3.2.4
 * (c) 2013-2018 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A maximum number of slides to which movement will be made on swiping or dragging. Use `false` for unlimited.
   *
   * @type {Number|Boolean}
   */
  perTouch: false,

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled'
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: " + msg);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toFloat(value) {
  return parseFloat(value);
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */
function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}

/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];

    return r[k], r;
  }, {});
}

/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */
function mergeOptions(defaults, settings) {
  var options = _extends({}, defaults, settings);

  // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.
  if (settings.hasOwnProperty('classes')) {
    options.classes = _extends({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = _extends({}, defaults.classes.direction, settings.classes.direction);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = _extends({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }

  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  createClass(EventsBus, [{
    key: 'on',
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }
      }

      // Create the event's object if not yet created
      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      }

      // Add the handler to queue
      var index = this.events[event].push(handler) - 1;

      // Provide handle back for removal of event
      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }

    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: 'emit',
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }
      }

      // If the event doesn't exist, or there's no handlers in queue, just leave
      if (!this.hop.call(this.events, event)) {
        return;
      }

      // Cycle through events queue, fire!
      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);
  return EventsBus;
}();

var Glide = function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();

    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }

  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  createClass(Glide, [{
    key: 'mount',
    value: function mount$$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }

    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: 'mutate',
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }

    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: 'update',
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }

    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: 'go',
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }

    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: 'move',
    value: function move(distance) {
      this._c.Transition.disable();
      this._c.Move.make(distance);

      return this;
    }

    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }

    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: 'play',
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }

    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: 'pause',
    value: function pause() {
      this._e.emit('pause');

      return this;
    }

    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;

      return this;
    }

    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;

      return this;
    }

    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: 'on',
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }

    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: 'isType',
    value: function isType(name) {
      return this.settings.type === name;
    }

    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: 'settings',
    get: function get$$1() {
      return this._o;
    }

    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set$$1(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }

    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: 'index',
    get: function get$$1() {
      return this._i;
    }

    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set$$1(i) {
      this._i = toInt(i);
    }

    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: 'type',
    get: function get$$1() {
      return this.settings.type;
    }

    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: 'disabled',
    get: function get$$1() {
      return this._d;
    }

    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set$$1(status) {
      this._d = !!status;
    }
  }]);
  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },


    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        Glide.disable();

        this.move = move;

        Events.emit('run.before', this.move);

        this.calculate();

        Events.emit('run', this.move);

        Components.Transition.after(function () {
          if (_this.isOffset('<') || _this.isOffset('>')) {
            _this._o = false;

            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);

          Glide.enable();
        });
      }
    },


    /**
     * Calculates current index based on defined move.
     *
     * @return {Void}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction;


      var countableSteps = isNumber(toInt(steps)) && toInt(steps) !== 0;

      switch (direction) {
        case '>':
          if (steps === '>') {
            Glide.index = length;
          } else if (this.isEnd()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = 0;
            }

            Events.emit('run.end', move);
          } else if (countableSteps) {
            Glide.index += Math.min(length - Glide.index, -toInt(steps));
          } else {
            Glide.index++;
          }
          break;

        case '<':
          if (steps === '<') {
            Glide.index = 0;
          } else if (this.isStart()) {
            if (!(Glide.isType('slider') && !Glide.settings.rewind)) {
              this._o = true;

              Glide.index = length;
            }

            Events.emit('run.start', move);
          } else if (countableSteps) {
            Glide.index -= Math.min(Glide.index, toInt(steps));
          } else {
            Glide.index--;
          }
          break;

        case '=':
          Glide.index = steps;
          break;
      }
    },


    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index === 0;
    },


    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index === this.length;
    },


    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset(direction) {
      return this._o && this.move.direction === direction;
    }
  };

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },


    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      this._m = {
        direction: value.substr(0, 1),
        steps: value.substr(1) ? value.substr(1) : 0
      };
    }
  });

  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length;

      // If the `bound` option is acitve, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (Glide.isType('slider') && settings.focusAt !== 'center' && settings.bound) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });

  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });

  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */
function throttle(func, wait, options) {
  var timeout = void 0,
      context = void 0,
      args = void 0,
      result = void 0;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};

function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = this.value / 2 + 'px';
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },


    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;

        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };

  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });

  define(Gaps, 'grow', {
    /**
     * Gets additional dimentions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * (Components.Sizes.length - 1);
    }
  });

  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;

      return Gaps.value * (perView - 1) / perView;
    }
  });

  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */
  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));

  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });

  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}

/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */
function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}

var TRACK_SELECTOR = '[data-glide-el="track"]';

function Html (Glide, Components) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.cloneSlide);
      });
    }
  };

  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },


    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });

  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },


    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn('Could not find track element. Please use ' + TRACK_SELECTOR + ' attribute.');
      }
    }
  });

  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });

  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };

  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },


    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });

  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });

  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */
  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });

  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },


    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.offset = offset;

      Events.emit('move', {
        movement: this.value
      });

      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };

  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },


    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });

  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });

  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });

  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */
  Events.on(['build.before', 'run'], function () {
    Move.make();
  });

  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimentions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = this.slideWidth + 'px';
      }
    },


    /**
     * Setups dimentions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper(dimention) {
      Components.Html.wrapper.style.width = this.wrapperSize + 'px';
    },


    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };

  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });

  define(Sizes, 'width', {
    /**
     * Gets width value of the glide.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.root.offsetWidth;
    }
  });

  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });

  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of the single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });

  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimentions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */
  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });

  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Sizes.remove();
  });

  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');

      this.typeClass();
      this.activeClass();

      Events.emit('build.after');
    },


    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes[Glide.settings.type]);
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.activeSlide);

        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.activeSlide);
        });
      }
    },


    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var classes = Glide.settings.classes;

      Components.Html.root.classList.remove(classes[Glide.settings.type]);

      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(classes.activeSlide);
      });
    }
  };

  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */
  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });

  /**
   * Remount component:
   * - on resizing of the window to calculate new dimentions
   * - on updating settings via API
   */
  Events.on(['resize', 'update'], function () {
    Build.mount();
  });

  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */
  Events.on('move.after', function () {
    Build.activeClass();
  });

  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },


    /**
     * Collect clones with pattern.
     *
     * @return {Void}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes;


      var peekIncrementer = +!!Glide.settings.peek;
      var part = perView + peekIncrementer;
      var start = slides.slice(0, part);
      var end = slides.slice(-part);

      for (var r = 0; r < Math.max(1, Math.floor(perView / slides.length)); r++) {
        for (var i = 0; i < start.length; i++) {
          var clone = start[i].cloneNode(true);

          clone.classList.add(classes.cloneSlide);

          items.push(clone);
        }

        for (var _i = 0; _i < end.length; _i++) {
          var _clone = end[_i].cloneNode(true);

          _clone.classList.add(classes.cloneSlide);

          items.unshift(_clone);
        }
      }

      return items;
    },


    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;


      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half, items.length);

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = Components.Sizes.slideWidth + 'px';
      }
    },


    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;


      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };

  define(Clones, 'grow', {
    /**
     * Gets additional dimentions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });

  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */
  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });

  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */
  Events.on('destroy', function () {
    Clones.remove();
  });

  return Clones;
}

var EventsBinder = function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }

  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  createClass(EventsBinder, [{
    key: 'on',
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;

        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @return {Void}
     */

  }, {
    key: 'off',
    value: function off(events, el) {
      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], false);
      }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.listeners;
    }
  }]);
  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },


    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };

  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */
  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });

  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};

function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },


    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },


    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },


    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },


    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };

  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },


    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });

  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */
  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });

  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */
  Events.on('update', function () {
    Direction.mount();
  });

  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */
  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });

  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Gaps.value * Glide.index;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);

  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);

      Components.Html.wrapper.style.transform = 'translate3d(' + -1 * transform + 'px, 0px, 0px)';
    },


    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    }
  };

  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */
  Events.on('move', function (context) {
    var gap = Components.Gaps.value;
    var length = Components.Sizes.length;
    var width = Components.Sizes.slideWidth;

    if (Glide.isType('carousel') && Components.Run.isOffset('<')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(width * (length - 1));
      });

      return Translate.set(-width - gap * length);
    }

    if (Glide.isType('carousel') && Components.Run.isOffset('>')) {
      Components.Transition.after(function () {
        Events.emit('translate.jump');

        Translate.set(0);
      });

      return Translate.set(width * length + gap * length);
    }

    return Translate.set(context.movement);
  });

  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Translate.remove();
  });

  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;

  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return property + ' ' + this.duration + 'ms ' + settings.animationTimingFunc;
      }

      return property + ' 0ms ' + settings.animationTimingFunc;
    },


    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

      Components.Html.wrapper.style.transition = this.compose(property);
    },


    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },


    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },


    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;

      this.set();
    },


    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;

      this.set();
    }
  };

  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });

  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */
  Events.on('move', function () {
    Transition.set();
  });

  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimentions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */
  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });

  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */
  Events.on('run', function () {
    Transition.enable();
  });

  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */
  Events.on('destroy', function () {
    Transition.remove();
  });

  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */

var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var moveable = true;
  var capture = supportsPassive$1 ? { passive: true } : false;

  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },


    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();

        var swipe = this.touches(event);

        moveable = true;
        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);

        this.bindSwipeMove();
        this.bindSwipeEnd();

        Events.emit('swipe.start');
      }
    },


    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;


        var swipe = this.touches(event);

        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);

        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (moveable && swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();

          Components.Move.make(subExSx * toFloat(touchRatio));

          Components.Html.root.classList.add(classes.dragging);

          Events.emit('swipe.move');
        } else {
          moveable = false;

          return false;
        }
      }
    },


    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var settings = Glide.settings;

        var swipe = this.touches(event);
        var threshold = this.threshold(event);

        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        var steps = Math.round(swipeDistance / Components.Sizes.slideWidth);

        this.enable();

        if (moveable) {
          if (swipeDistance > threshold && swipeDeg < settings.touchAngle) {
            // While swipe is positive and greater than threshold move backward.
            if (settings.perTouch) {
              steps = Math.min(steps, toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('<' + steps));
          } else if (swipeDistance < -threshold && swipeDeg < settings.touchAngle) {
            // While swipe is negative and lower than negative threshold move forward.
            if (settings.perTouch) {
              steps = Math.max(steps, -toInt(settings.perTouch));
            }

            if (Components.Direction.is('rtl')) {
              steps = -steps;
            }

            Components.Run.make(Components.Direction.resolve('>' + steps));
          } else {
            // While swipe don't reach distance apply previous transform.
            Components.Move.make();
          }
        }

        Components.Html.root.classList.remove(settings.classes.dragging);

        this.unbindSwipeMove();
        this.unbindSwipeEnd();

        Events.emit('swipe.end');
      }
    },


    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var settings = Glide.settings;

      if (settings.swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (settings.dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },


    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper);
      Binder.off(START_EVENTS[1], Components.Html.wrapper);
    },


    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },


    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper);
    },


    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },


    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },


    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },


    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },


    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;

      Components.Transition.enable();

      return this;
    },


    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;

      Components.Transition.disable();

      return this;
    }
  };

  /**
   * Add component class:
   * - after initial building
   */
  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });

  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });

  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },


    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },


    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },


    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };

  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */
  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });

  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */
  var detached = false;

  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */
  var prevented = false;

  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');

      this.bind();
    },


    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },


    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },


    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.stopPropagation();

      if (prevented) {
        event.preventDefault();
      }
    },


    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;

          this.items[i].setAttribute('data-href', this.items[i].getAttribute('href'));

          this.items[i].removeAttribute('href');
        }

        detached = true;
      }

      return this;
    },


    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;

          this.items[i].setAttribute('href', this.items[i].getAttribute('data-href'));
        }

        detached = false;
      }

      return this;
    }
  };

  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });

  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */
  Events.on('swipe.move', function () {
    Anchors.detach();
  });

  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */
  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });

  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */
  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });

  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';

function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);

      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);

      this.addBindings();
    },


    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },


    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },


    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      item.classList.add(settings.classes.activeNav);

      siblings(item).forEach(function (sibling) {
        sibling.classList.remove(settings.classes.activeNav);
      });
    },


    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      controls[Glide.index].classList.remove(Glide.settings.classes.activeNav);
    },


    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },


    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },


    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on(['click', 'touchstart'], elements[i], this.click);
      }
    },


    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },


    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in driection precised in
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {Void}
     */
    click: function click(event) {
      event.preventDefault();

      Components.Run.make(Components.Direction.resolve(event.currentTarget.getAttribute('data-glide-dir')));
    }
  };

  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });

  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */
  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });

  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });

  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },


    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },


    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },


    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      if (event.keyCode === 39) {
        Components.Run.make(Components.Direction.resolve('>'));
      }

      if (event.keyCode === 37) {
        Components.Run.make(Components.Direction.resolve('<'));
      }
    }
  };

  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */
  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });

  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */
  Events.on('update', function () {
    Keyboard.mount();
  });

  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },


    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();
          }, this.time);
        }
      }
    },


    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },


    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        _this2.stop();
      });

      Binder.on('mouseout', Components.Html.root, function () {
        _this2.start();
      });
    },


    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };

  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });

  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */
  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });

  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */
  Events.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });

  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */
  Events.on(['run.after', 'play', 'swipe.end'], function () {
    Autoplay.start();
  });

  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */
  Events.on('update', function () {
    Autoplay.mount();
  });

  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */
  Events.on('destroy', function () {
    Binder.destroy();
  });

  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */
function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn('Breakpoints option must be an object');
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();

  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */
  var settings = Glide.settings;

  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */
  var points = sortBreakpoints(settings.breakpoints);

  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */
  var defaults = _extends({}, settings);

  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia('(max-width: ' + point + 'px)').matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };

  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */
  _extends(settings, Breakpoints.match(points));

  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */
  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));

  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */
  Events.on('update', function () {
    points = sortBreakpoints(points);

    defaults = _extends({}, settings);
  });

  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */
  Events.on('destroy', function () {
    Binder.off('resize', window);
  });

  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,

  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide$1 = function (_Core) {
  inherits(Glide$$1, _Core);

  function Glide$$1() {
    classCallCheck(this, Glide$$1);
    return possibleConstructorReturn(this, (Glide$$1.__proto__ || Object.getPrototypeOf(Glide$$1)).apply(this, arguments));
  }

  createClass(Glide$$1, [{
    key: 'mount',
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return get(Glide$$1.prototype.__proto__ || Object.getPrototypeOf(Glide$$1.prototype), 'mount', this).call(this, _extends({}, COMPONENTS, extensions));
    }
  }]);
  return Glide$$1;
}(Glide);

var disableBodyScroll = bodyScrollLock.disableBodyScroll;
var enableBodyScroll = bodyScrollLock.enableBodyScroll;
var modal = document.querySelector('.modal');
var targetElement = document.querySelector('.modal__content');
var modalImg = document.querySelector('.modal__img');
var modalTitle = document.querySelector('.modal__title');
var modalTextBlocks = document.querySelectorAll('.modal__text-block');
var modalValueTitle = document.querySelector('.modal__value-title');
var modalValueItems = document.querySelectorAll('.value-list__item');
var modalAdd = document.querySelector('.modal__add-block');
var modalAddLeft = document.querySelector('.modal__add-left');

var triggers = document.querySelectorAll('.modal-trigger');

function toggleModal() {
  modal.classList.toggle('is-active');
  setTimeout(function () {
    modalImg.classList.toggle('is-active');
  }, 200);
  setTimeout(function () {
    modalTitle.classList.toggle('is-active');
  }, 200);

  setTimeout(function () {
    modalTextBlocks[0].classList.toggle('is-active');
  }, 400);
  setTimeout(function () {
    modalTextBlocks[1].classList.toggle('is-active');
  }, 600);
  setTimeout(function () {
    modalValueTitle.classList.toggle('is-active');
  }, 800);

  modalValueItems.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.toggle('is-active');
    }, 800 + i * 100);
  });

  setTimeout(function () {
    modalAdd.classList.toggle('is-active');
  }, 600);

  setTimeout(function () {
    modalAddLeft.classList.toggle('is-active');
  }, 800);

  if (modal.classList.contains('is-active')) {
    disableBodyScroll(targetElement);
  } else {
    enableBodyScroll(targetElement);
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

triggers.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    toggleModal();
  });
});

window.addEventListener('click', windowOnClick);

new Glide$1('.glide', {
  // type: 'carousel',
  perView: 10
  // gap: 40,
}).mount();

document.querySelectorAll('.tag-list__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL2JvZHktc2Nyb2xsLWxvY2svbGliL2JvZHlTY3JvbGxMb2NrLm1pbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZ2xpZGVqcy9nbGlkZS9kaXN0L2dsaWRlLmVzbS5qcyIsIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJleHBvcnRzXCJdLHQpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpdChleHBvcnRzKTtlbHNle3ZhciBvPXt9O3QobyksZS5ib2R5U2Nyb2xsTG9jaz1vfX0odGhpcyxmdW5jdGlvbihleHBvcnRzKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLG89QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKW9bdF09ZVt0XTtyZXR1cm4gb31yZXR1cm4gQXJyYXkuZnJvbShlKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD0hMTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT17Z2V0IHBhc3NpdmUoKXtsPSEwfX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSl9dmFyIGQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSYmL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pLGM9W10sdT0hMSxhPS0xLHM9dm9pZCAwLHY9dm9pZCAwLGY9ZnVuY3Rpb24odCl7cmV0dXJuIGMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4hKCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmV8fCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUodCkpfSl9LG09ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8d2luZG93LmV2ZW50O3JldHVybiEhZih0LnRhcmdldCl8fCgxPHQudG91Y2hlcy5sZW5ndGh8fCh0LnByZXZlbnREZWZhdWx0JiZ0LnByZXZlbnREZWZhdWx0KCksITEpKX0sbz1mdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2b2lkIDAhPT12JiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dix2PXZvaWQgMCksdm9pZCAwIT09cyYmKGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9cyxzPXZvaWQgMCl9KX07ZXhwb3J0cy5kaXNhYmxlQm9keVNjcm9sbD1mdW5jdGlvbihpLGUpe2lmKGQpe2lmKCFpKXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJkaXNhYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGRpc2FibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLlwiKTtpZihpJiYhYy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQ9PT1pfSkpe3ZhciB0PXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbdF0pLGkub250b3VjaHN0YXJ0PWZ1bmN0aW9uKGUpezE9PT1lLnRhcmdldFRvdWNoZXMubGVuZ3RoJiYoYT1lLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSl9LGkub250b3VjaG1vdmU9ZnVuY3Rpb24oZSl7dmFyIHQsbyxuLHI7MT09PWUudGFyZ2V0VG91Y2hlcy5sZW5ndGgmJihvPWkscj0odD1lKS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFktYSwhZih0LnRhcmdldCkmJihvJiYwPT09by5zY3JvbGxUb3AmJjA8cj9tKHQpOihuPW8pJiZuLnNjcm9sbEhlaWdodC1uLnNjcm9sbFRvcDw9bi5jbGllbnRIZWlnaHQmJnI8MD9tKHQpOnQuc3RvcFByb3BhZ2F0aW9uKCkpKX0sdXx8KGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMCl9fWVsc2V7bj1lLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT12KXt2YXIgZT0hIW4mJiEwPT09bi5yZXNlcnZlU2Nyb2xsQmFyR2FwLHQ9d2luZG93LmlubmVyV2lkdGgtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO2UmJjA8dCYmKHY9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQsZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dCtcInB4XCIpfXZvaWQgMD09PXMmJihzPWRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3csZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiKX0pO3ZhciBvPXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbb10pfXZhciBufSxleHBvcnRzLmNsZWFyQWxsQm9keVNjcm9sbExvY2tzPWZ1bmN0aW9uKCl7ZD8oYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UudGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQ9bnVsbCxlLnRhcmdldEVsZW1lbnQub250b3VjaG1vdmU9bnVsbH0pLHUmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbSxsP3twYXNzaXZlOiExfTp2b2lkIDApLHU9ITEpLGM9W10sYT0tMSk6KG8oKSxjPVtdKX0sZXhwb3J0cy5lbmFibGVCb2R5U2Nyb2xsPWZ1bmN0aW9uKHQpe2lmKGQpe2lmKCF0KXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJlbmFibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZW5hYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy5cIik7dC5vbnRvdWNoc3RhcnQ9bnVsbCx0Lm9udG91Y2htb3ZlPW51bGwsYz1jLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS50YXJnZXRFbGVtZW50IT09dH0pLHUmJjA9PT1jLmxlbmd0aCYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMSl9ZWxzZSAxPT09Yy5sZW5ndGgmJmNbMF0udGFyZ2V0RWxlbWVudD09PXQ/KG8oKSxjPVtdKTpjPWMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQhPT10fSl9fSk7XG4iLCIvKiFcbiAqIEdsaWRlLmpzIHYzLjIuNFxuICogKGMpIDIwMTMtMjAxOCBKxJlkcnplaiBDaGHFgnViZWsgPGplZHJ6ZWouY2hhbHViZWtAZ21haWwuY29tPiAoaHR0cDovL2plZHJ6ZWpjaGFsdWJlay5jb20vKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIG1vdmVtZW50LlxuICAgKlxuICAgKiBBdmFpbGFibGUgdHlwZXM6XG4gICAqIGBzbGlkZXJgIC0gUmV3aW5kcyBzbGlkZXIgdG8gdGhlIHN0YXJ0L2VuZCB3aGVuIGl0IHJlYWNoZXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAqIGBjYXJvdXNlbGAgLSBDaGFuZ2VzIHNsaWRlcyB3aXRob3V0IHN0YXJ0aW5nIG92ZXIgd2hlbiBpdCByZWFjaGVzIHRoZSBmaXJzdCBvciBsYXN0IHNsaWRlLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdHlwZTogJ3NsaWRlcicsXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGF0IHNwZWNpZmljIHNsaWRlIG51bWJlciBkZWZpbmVkIHdpdGggemVyby1iYXNlZCBpbmRleC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHN0YXJ0QXQ6IDAsXG5cbiAgLyoqXG4gICAqIEEgbnVtYmVyIG9mIHNsaWRlcyB2aXNpYmxlIG9uIHRoZSBzaW5nbGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwZXJWaWV3OiAxLFxuXG4gIC8qKlxuICAgKiBGb2N1cyBjdXJyZW50bHkgYWN0aXZlIHNsaWRlIGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoZSB0cmFjay5cbiAgICpcbiAgICogQXZhaWxhYmxlIGlucHV0czpcbiAgICogYGNlbnRlcmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgYWx3YXlzIGZvY3VzZWQgYXQgdGhlIGNlbnRlciBvZiBhIHRyYWNrLlxuICAgKiBgMCwxLDIsMy4uLmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgZm9jdXNlZCBvbiB0aGUgc3BlY2lmaWVkIHplcm8tYmFzZWQgaW5kZXguXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfVxuICAgKi9cbiAgZm9jdXNBdDogMCxcblxuICAvKipcbiAgICogQSBzaXplIG9mIHRoZSBnYXAgYWRkZWQgYmV0d2VlbiBzbGlkZXMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnYXA6IDEwLFxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2xpZGVzIGFmdGVyIGEgc3BlY2lmaWVkIGludGVydmFsLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYXV0b3BsYXkuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheSBvbiBtb3VzZW92ZXIgZXZlbnQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgaG92ZXJwYXVzZTogdHJ1ZSxcblxuICAvKipcbiAgICogQWxsb3cgZm9yIGNoYW5naW5nIHNsaWRlcyB3aXRoIGxlZnQgYW5kIHJpZ2h0IGtleWJvYXJkIGFycm93cy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBrZXlib2FyZDogdHJ1ZSxcblxuICAvKipcbiAgICogU3RvcCBydW5uaW5nIGBwZXJWaWV3YCBudW1iZXIgb2Ygc2xpZGVzIGZyb20gdGhlIGVuZC4gVXNlIHRoaXNcbiAgICogb3B0aW9uIGlmIHlvdSBkb24ndCB3YW50IHRvIGhhdmUgYW4gZW1wdHkgc3BhY2UgYWZ0ZXJcbiAgICogYSBzbGlkZXIuIFdvcmtzIG9ubHkgd2l0aCBgc2xpZGVyYCB0eXBlIGFuZCBhXG4gICAqIG5vbi1jZW50ZXJlZCBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBib3VuZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIE1pbmltYWwgc3dpcGUgZGlzdGFuY2UgbmVlZGVkIHRvIGNoYW5nZSB0aGUgc2xpZGUuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhIHN3aXBpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIHN3aXBlVGhyZXNob2xkOiA4MCxcblxuICAvKipcbiAgICogTWluaW1hbCBtb3VzZSBkcmFnIGRpc3RhbmNlIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHNsaWRlLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYSBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgZHJhZ1RocmVzaG9sZDogMTIwLFxuXG4gIC8qKlxuICAgKiBBIG1heGltdW0gbnVtYmVyIG9mIHNsaWRlcyB0byB3aGljaCBtb3ZlbWVudCB3aWxsIGJlIG1hZGUgb24gc3dpcGluZyBvciBkcmFnZ2luZy4gVXNlIGBmYWxzZWAgZm9yIHVubGltaXRlZC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgcGVyVG91Y2g6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBNb3ZpbmcgZGlzdGFuY2UgcmF0aW8gb2YgdGhlIHNsaWRlcyBvbiBhIHN3aXBpbmcgYW5kIGRyYWdnaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgdG91Y2hSYXRpbzogMC41LFxuXG4gIC8qKlxuICAgKiBBbmdsZSByZXF1aXJlZCB0byBhY3RpdmF0ZSBzbGlkZXMgbW92aW5nIG9uIHN3aXBpbmcgb3IgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICB0b3VjaEFuZ2xlOiA0NSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBhbmltYXRpb25EdXJhdGlvbjogNDAwLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgbG9vcGluZyB0aGUgYHNsaWRlcmAgdHlwZS4gU2xpZGVyIHdpbGwgcmV3aW5kIHRvIHRoZSBmaXJzdC9sYXN0IHNsaWRlIHdoZW4gaXQncyBhdCB0aGUgc3RhcnQvZW5kLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHJld2luZDogdHJ1ZSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIHJld2luZGluZyBhbmltYXRpb24gb2YgdGhlIGBzbGlkZXJgIHR5cGUgaW4gbWlsbGlzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgcmV3aW5kRHVyYXRpb246IDgwMCxcblxuICAvKipcbiAgICogRWFzaW5nIGZ1bmN0aW9uIGZvciB0aGUgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2N1YmljLWJlemllciguMTY1LCAuODQwLCAuNDQwLCAxKScsXG5cbiAgLyoqXG4gICAqIFRocm90dGxlIGNvc3RseSBldmVudHMgYXQgbW9zdCBvbmNlIHBlciBldmVyeSB3YWl0IG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRocm90dGxlOiAxMCxcblxuICAvKipcbiAgICogTW92aW5nIGRpcmVjdGlvbiBtb2RlLlxuICAgKlxuICAgKiBBdmFpbGFibGUgaW5wdXRzOlxuICAgKiAtICdsdHInIC0gbGVmdCB0byByaWdodCBtb3ZlbWVudCxcbiAgICogLSAncnRsJyAtIHJpZ2h0IHRvIGxlZnQgbW92ZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBkaXJlY3Rpb246ICdsdHInLFxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdmFsdWUgb2YgdGhlIG5leHQgYW5kIHByZXZpb3VzIHZpZXdwb3J0cyB3aGljaFxuICAgKiBoYXZlIHRvIHBlZWsgaW4gdGhlIGN1cnJlbnQgdmlldy4gQWNjZXB0cyBudW1iZXIgYW5kXG4gICAqIHBpeGVscyBhcyBhIHN0cmluZy4gTGVmdCBhbmQgcmlnaHQgcGVla2luZyBjYW4gYmVcbiAgICogc2V0IHVwIHNlcGFyYXRlbHkgd2l0aCBhIGRpcmVjdGlvbnMgb2JqZWN0LlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogYDEwMGAgLSBQZWVrIDEwMHB4IG9uIHRoZSBib3RoIHNpZGVzLlxuICAgKiB7IGJlZm9yZTogMTAwLCBhZnRlcjogNTAgfWAgLSBQZWVrIDEwMHB4IG9uIHRoZSBsZWZ0IHNpZGUgYW5kIDUwcHggb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH1cbiAgICovXG4gIHBlZWs6IDAsXG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2Ygb3B0aW9ucyBhcHBsaWVkIGF0IHNwZWNpZmllZCBtZWRpYSBicmVha3BvaW50cy5cbiAgICogRm9yIGV4YW1wbGU6IGRpc3BsYXkgdHdvIHNsaWRlcyBwZXIgdmlldyB1bmRlciA4MDBweC5cbiAgICogYHtcbiAgICogICAnODAwcHgnOiB7XG4gICAqICAgICBwZXJWaWV3OiAyXG4gICAqICAgfVxuICAgKiB9YFxuICAgKi9cbiAgYnJlYWtwb2ludHM6IHt9LFxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGludGVybmFsbHkgdXNlZCBIVE1MIGNsYXNzZXMuXG4gICAqXG4gICAqIEB0b2RvIFJlZmFjdG9yIGBzbGlkZXJgIGFuZCBgY2Fyb3VzZWxgIHByb3BlcnRpZXMgdG8gc2luZ2xlIGB0eXBlOiB7IHNsaWRlcjogJycsIGNhcm91c2VsOiAnJyB9YCBvYmplY3RcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNsYXNzZXM6IHtcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIGx0cjogJ2dsaWRlLS1sdHInLFxuICAgICAgcnRsOiAnZ2xpZGUtLXJ0bCdcbiAgICB9LFxuICAgIHNsaWRlcjogJ2dsaWRlLS1zbGlkZXInLFxuICAgIGNhcm91c2VsOiAnZ2xpZGUtLWNhcm91c2VsJyxcbiAgICBzd2lwZWFibGU6ICdnbGlkZS0tc3dpcGVhYmxlJyxcbiAgICBkcmFnZ2luZzogJ2dsaWRlLS1kcmFnZ2luZycsXG4gICAgY2xvbmVTbGlkZTogJ2dsaWRlX19zbGlkZS0tY2xvbmUnLFxuICAgIGFjdGl2ZU5hdjogJ2dsaWRlX19idWxsZXQtLWFjdGl2ZScsXG4gICAgYWN0aXZlU2xpZGU6ICdnbGlkZV9fc2xpZGUtLWFjdGl2ZScsXG4gICAgZGlzYWJsZWRBcnJvdzogJ2dsaWRlX19hcnJvdy0tZGlzYWJsZWQnXG4gIH1cbn07XG5cbi8qKlxuICogT3V0cHV0cyB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGJvd3NlciBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICBjb25zb2xlLmVycm9yKFwiW0dsaWRlIHdhcm5dOiBcIiArIG1zZyk7XG59XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHZhbHVlIGVudGVyZWQgYXMgbnVtYmVyXG4gKiBvciBzdHJpbmcgdG8gaW50ZWdlciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHRvSW50KHZhbHVlKSB7XG4gIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdmFsdWUgZW50ZXJlZCBhcyBudW1iZXJcbiAqIG9yIHN0cmluZyB0byBmbGF0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHsqfSAgIHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuXG4gIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBzcGVjaWZpZWQgY29sbGVjdGlvbiBvZiBleHRlbnNpb25zLlxuICogRWFjaCBleHRlbnNpb24gcmVjZWl2ZXMgYWNjZXNzIHRvIGluc3RhbmNlIG9mIGdsaWRlIGFuZCByZXN0IG9mIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGdsaWRlXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9uc1xuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1vdW50KGdsaWRlLCBleHRlbnNpb25zLCBldmVudHMpIHtcbiAgdmFyIGNvbXBvbmVudHMgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIGV4dGVuc2lvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihleHRlbnNpb25zW25hbWVdKSkge1xuICAgICAgY29tcG9uZW50c1tuYW1lXSA9IGV4dGVuc2lvbnNbbmFtZV0oZ2xpZGUsIGNvbXBvbmVudHMsIGV2ZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ0V4dGVuc2lvbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29tcG9uZW50c1tfbmFtZV0ubW91bnQpKSB7XG4gICAgICBjb21wb25lbnRzW19uYW1lXS5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIERlZmluZXMgZ2V0dGVyIGFuZCBzZXR0ZXIgcHJvcGVydHkgb24gdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgICAgICBPYmplY3Qgd2hlcmUgcHJvcGVydHkgaGFzIHRvIGJlIGRlZmluZWQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgICAgICAgIE5hbWUgb2YgdGhlIGRlZmluZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmluaXRpb24gIEdldCBhbmQgc2V0IGRlZmluaXRpb25zIGZvciB0aGUgcHJvcGVydHkuXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiBkZWZpbmUob2JqLCBwcm9wLCBkZWZpbml0aW9uKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlZmluaXRpb24pO1xufVxuXG4vKipcbiAqIFNvcnRzIGFwaGFiZXRpY2FsbHkgb2JqZWN0IGtleXMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc29ydEtleXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGspIHtcbiAgICByW2tdID0gb2JqW2tdO1xuXG4gICAgcmV0dXJuIHJba10sIHI7XG4gIH0sIHt9KTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgcGFzc2VkIHNldHRpbmdzIG9iamVjdCB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNldHRpbmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhkZWZhdWx0cywgc2V0dGluZ3MpIHtcbiAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcblxuICAvLyBgT2JqZWN0LmFzc2lnbmAgZG8gbm90IGRlZXBseSBtZXJnZSBvYmplY3RzLCBzbyB3ZVxuICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5IGZvciBldmVyeSBuZXN0ZWQgb2JqZWN0XG4gIC8vIGluIG9wdGlvbnMuIEFsdGhvdWdoIGl0IGRvZXMgbm90IGxvb2sgc21hcnQsXG4gIC8vIGl0J3Mgc21hbGxlciBhbmQgZmFzdGVyIHRoYW4gc29tZSBmYW5jeVxuICAvLyBtZXJnaW5nIGRlZXAtbWVyZ2UgYWxnb3JpdGhtIHNjcmlwdC5cbiAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KCdjbGFzc2VzJykpIHtcbiAgICBvcHRpb25zLmNsYXNzZXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcywgc2V0dGluZ3MuY2xhc3Nlcyk7XG5cbiAgICBpZiAoc2V0dGluZ3MuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSgnZGlyZWN0aW9uJykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5kaXJlY3Rpb24gPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcy5kaXJlY3Rpb24sIHNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ2JyZWFrcG9pbnRzJykpIHtcbiAgICBvcHRpb25zLmJyZWFrcG9pbnRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRzLmJyZWFrcG9pbnRzLCBzZXR0aW5ncy5icmVha3BvaW50cyk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxudmFyIEV2ZW50c0J1cyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50QnVzIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudHNCdXMoKSB7XG4gICAgdmFyIGV2ZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRzQnVzKTtcblxuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuaG9wID0gZXZlbnRzLmhhc093blByb3BlcnR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbGlzdGVuZXIgdG8gdGhlIHNwZWNpZmVkIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuXG4gIGNyZWF0ZUNsYXNzKEV2ZW50c0J1cywgW3tcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMub24oZXZlbnRbaV0sIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZXZlbnQncyBvYmplY3QgaWYgbm90IHlldCBjcmVhdGVkXG4gICAgICBpZiAoIXRoaXMuaG9wLmNhbGwodGhpcy5ldmVudHMsIGV2ZW50KSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBoYW5kbGVyIHRvIHF1ZXVlXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChoYW5kbGVyKSAtIDE7XG5cbiAgICAgIC8vIFByb3ZpZGUgaGFuZGxlIGJhY2sgZm9yIHJlbW92YWwgb2YgZXZlbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF1baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3Igc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBjb250ZXh0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2VtaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZW1pdChldmVudFtpXSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgZXhpc3QsIG9yIHRoZXJlJ3Mgbm8gaGFuZGxlcnMgaW4gcXVldWUsIGp1c3QgbGVhdmVcbiAgICAgIGlmICghdGhpcy5ob3AuY2FsbCh0aGlzLmV2ZW50cywgZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3ljbGUgdGhyb3VnaCBldmVudHMgcXVldWUsIGZpcmUhXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtKGNvbnRleHQgfHwge30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudHNCdXM7XG59KCk7XG5cbnZhciBHbGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0IGdsaWRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzZWxlY3RvclxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xyXG4gICAqL1xuICBmdW5jdGlvbiBHbGlkZShzZWxlY3Rvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBHbGlkZSk7XG5cbiAgICB0aGlzLl9jID0ge307XG4gICAgdGhpcy5fdCA9IFtdO1xuICAgIHRoaXMuX2UgPSBuZXcgRXZlbnRzQnVzKCk7XG5cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLnNldHRpbmdzLnN0YXJ0QXQ7XG4gIH1cblxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBnbGlkZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIENvbGxlY3Rpb24gb2YgZXh0ZW5zaW9ucyB0byBpbml0aWFsaXplLlxyXG4gICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoR2xpZGUsIFt7XG4gICAga2V5OiAnbW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudCQkMSgpIHtcbiAgICAgIHZhciBleHRlbnNpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdGhpcy5fZS5lbWl0KCdtb3VudC5iZWZvcmUnKTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGV4dGVuc2lvbnMpKSB7XG4gICAgICAgIHRoaXMuX2MgPSBtb3VudCh0aGlzLCBleHRlbnNpb25zLCB0aGlzLl9lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBvYmplY3Qgb24gYG1vdW50KClgJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgnbW91bnQuYWZ0ZXInKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBhbiBpbnN0YW5jZSBgdHJhbnNsYXRlYCB0cmFuc2Zvcm1lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7QXJyYXl9IHRyYW5zZm9ybWVycyBDb2xsZWN0aW9uIG9mIHRyYW5zZm9ybWVycy5cclxuICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbXV0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbXV0YXRlKCkge1xuICAgICAgdmFyIHRyYW5zZm9ybWVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgICAgIGlmIChpc0FycmF5KHRyYW5zZm9ybWVycykpIHtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zZm9ybWVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBhcnJheSBvbiBgbXV0YXRlKClgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBnbGlkZSB3aXRoIHNwZWNpZmllZCBzZXR0aW5ncy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3NcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnModGhpcy5zZXR0aW5ncywgc2V0dGluZ3MpO1xuXG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3N0YXJ0QXQnKSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gc2V0dGluZ3Muc3RhcnRBdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCd1cGRhdGUnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugc2xpZGUgd2l0aCBzcGVjaWZpZWQgcGF0dGVybi4gQSBwYXR0ZXJuIG11c3QgYmUgaW4gdGhlIHNwZWNpYWwgZm9ybWF0OlxyXG4gICAgICogYD5gIC0gTW92ZSBvbmUgZm9yd2FyZFxyXG4gICAgICogYDxgIC0gTW92ZSBvbmUgYmFja3dhcmRcclxuICAgICAqIGA9e2l9YCAtIEdvIHRvIHtpfSB6ZXJvLWJhc2VkIHNsaWRlIChlcS4gJz0xJywgd2lsbCBnbyB0byBzZWNvbmQgc2xpZGUpXHJcbiAgICAgKiBgPj5gIC0gUmV3aW5kcyB0byBlbmQgKGxhc3Qgc2xpZGUpXHJcbiAgICAgKiBgPDxgIC0gUmV3aW5kcyB0byBzdGFydCAoZmlyc3Qgc2xpZGUpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm5cclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ28ocGF0dGVybikge1xuICAgICAgdGhpcy5fYy5SdW4ubWFrZShwYXR0ZXJuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRyYWNrIGJ5IHNwZWNpZmllZCBkaXN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlzdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlKGRpc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jLlRyYW5zaXRpb24uZGlzYWJsZSgpO1xuICAgICAgdGhpcy5fYy5Nb3ZlLm1ha2UoZGlzdGFuY2UpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgaW5zdGFuY2UgYW5kIHJldmVydCBhbGwgY2hhbmdlcyBkb25lIGJ5IHRoaXMuX2MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9lLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBpbnN0YW5jZSBhdXRvcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBpbnRlcnZhbCBSdW4gYXV0b3BsYXlpbmcgd2l0aCBwYXNzZWQgaW50ZXJ2YWwgcmVnYXJkbGVzcyBvZiBgYXV0b3BsYXlgIHNldHRpbmdzXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHZhciBpbnRlcnZhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmF1dG9wbGF5ID0gaW50ZXJ2YWw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgncGxheScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFN0b3AgaW5zdGFuY2UgYXV0b3BsYXlpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncGF1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuX2UuZW1pdCgncGF1c2UnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGdsaWRlIGludG8gYSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHMgZ2xpZGUgaW50byBhIGFjdGl2ZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEFkZHMgY3V1dG9tIGV2ZW50IGxpc3RlbmVyIHdpdGggaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlcikge1xuICAgICAgdGhpcy5fZS5vbihldmVudCwgaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGdsaWRlIGlzIGEgcHJlY2lzZWQgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNUeXBlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNUeXBlKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnR5cGUgPT09IG5hbWU7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBjb3JlIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldHRpbmdzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgY29yZSBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb1xyXG4gICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShvKSB7XG4gICAgICBpZiAoaXNPYmplY3QobykpIHtcbiAgICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdPcHRpb25zIG11c3QgYmUgYW4gYG9iamVjdGAgaW5zdGFuY2UuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGN1cnJlbnQgaW5kZXggb2YgdGhlIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaW5kZXgnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGN1cnJlbnQgaW5kZXggYSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKGkpIHtcbiAgICAgIHRoaXMuX2kgPSB0b0ludChpKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdHlwZSBuYW1lIG9mIHRoZSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3R5cGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudHlwZTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGlkbGUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Q7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHN0YXR1cykge1xuICAgICAgdGhpcy5fZCA9ICEhc3RhdHVzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gR2xpZGU7XG59KCk7XG5cbmZ1bmN0aW9uIFJ1biAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgUnVuID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGF1dG9ydW5uaW5nIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5fbyA9IGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGdsaWRlcyBydW5uaW5nIGJhc2VkIG9uIHRoZSBwYXNzZWQgbW92aW5nIHNjaGVtYS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb3ZlXG4gICAgICovXG4gICAgbWFrZTogZnVuY3Rpb24gbWFrZShtb3ZlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIEdsaWRlLmRpc2FibGUoKTtcblxuICAgICAgICB0aGlzLm1vdmUgPSBtb3ZlO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4uYmVmb3JlJywgdGhpcy5tb3ZlKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4nLCB0aGlzLm1vdmUpO1xuXG4gICAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5hZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmlzT2Zmc2V0KCc8JykgfHwgX3RoaXMuaXNPZmZzZXQoJz4nKSkge1xuICAgICAgICAgICAgX3RoaXMuX28gPSBmYWxzZTtcblxuICAgICAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5vZmZzZXQnLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLmFmdGVyJywgX3RoaXMubW92ZSk7XG5cbiAgICAgICAgICBHbGlkZS5lbmFibGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBjdXJyZW50IGluZGV4IGJhc2VkIG9uIGRlZmluZWQgbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlOiBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgICB2YXIgbW92ZSA9IHRoaXMubW92ZSxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBzdGVwcyA9IG1vdmUuc3RlcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gbW92ZS5kaXJlY3Rpb247XG5cblxuICAgICAgdmFyIGNvdW50YWJsZVN0ZXBzID0gaXNOdW1iZXIodG9JbnQoc3RlcHMpKSAmJiB0b0ludChzdGVwcykgIT09IDA7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChzdGVwcyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCA9IGxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmQoKSkge1xuICAgICAgICAgICAgaWYgKCEoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiAhR2xpZGUuc2V0dGluZ3MucmV3aW5kKSkge1xuICAgICAgICAgICAgICB0aGlzLl9vID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBHbGlkZS5pbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uZW5kJywgbW92ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb3VudGFibGVTdGVwcykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggKz0gTWF0aC5taW4obGVuZ3RoIC0gR2xpZGUuaW5kZXgsIC10b0ludChzdGVwcykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBpZiAoc3RlcHMgPT09ICc8Jykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0YXJ0KCkpIHtcbiAgICAgICAgICAgIGlmICghKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgIUdsaWRlLnNldHRpbmdzLnJld2luZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgR2xpZGUuaW5kZXggPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uc3RhcnQnLCBtb3ZlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50YWJsZVN0ZXBzKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCAtPSBNYXRoLm1pbihHbGlkZS5pbmRleCwgdG9JbnQoc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXgtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgR2xpZGUuaW5kZXggPSBzdGVwcztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTdGFydDogZnVuY3Rpb24gaXNTdGFydCgpIHtcbiAgICAgIHJldHVybiBHbGlkZS5pbmRleCA9PT0gMDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VuZDogZnVuY3Rpb24gaXNFbmQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaW5kZXggPT09IHRoaXMubGVuZ3RoO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB3ZSBhcmUgbWFraW5nIGEgb2Zmc2V0IHJ1bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzT2Zmc2V0OiBmdW5jdGlvbiBpc09mZnNldChkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLl9vICYmIHRoaXMubW92ZS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFJ1biwgJ21vdmUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX207XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9tID0ge1xuICAgICAgICBkaXJlY3Rpb246IHZhbHVlLnN1YnN0cigwLCAxKSxcbiAgICAgICAgc3RlcHM6IHZhbHVlLnN1YnN0cigxKSA/IHZhbHVlLnN1YnN0cigxKSA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoUnVuLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIHJ1bm5pbmcgZGlzdGFuY2UgYmFzZWRcbiAgICAgKiBvbiB6ZXJvLWluZGV4aW5nIG51bWJlciBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgICAgIHZhciBsZW5ndGggPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmxlbmd0aDtcblxuICAgICAgLy8gSWYgdGhlIGBib3VuZGAgb3B0aW9uIGlzIGFjaXR2ZSwgYSBtYXhpbXVtIHJ1bm5pbmcgZGlzdGFuY2Ugc2hvdWxkIGJlXG4gICAgICAvLyByZWR1Y2VkIGJ5IGBwZXJWaWV3YCBhbmQgYGZvY3VzQXRgIHNldHRpbmdzLiBSdW5uaW5nIGRpc3RhbmNlXG4gICAgICAvLyBzaG91bGQgZW5kIGJlZm9yZSBjcmVhdGluZyBhbiBlbXB0eSBzcGFjZSBhZnRlciBpbnN0YW5jZS5cblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgc2V0dGluZ3MuZm9jdXNBdCAhPT0gJ2NlbnRlcicgJiYgc2V0dGluZ3MuYm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAtIDEgLSAodG9JbnQoc2V0dGluZ3MucGVyVmlldykgLSAxKSArIHRvSW50KHNldHRpbmdzLmZvY3VzQXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShSdW4sICdvZmZzZXQnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBzdGF0dXMgb2YgdGhlIG9mZnNldHRpbmcgZmxhZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBSdW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJlbnQgdGltZS5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkXG4gKiBhdCBtb3N0IG9uY2UgZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCA9IHZvaWQgMCxcbiAgICAgIGNvbnRleHQgPSB2b2lkIDAsXG4gICAgICBhcmdzID0gdm9pZCAwLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKCkge1xuICAgIHZhciBhdCA9IG5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBhdDtcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChhdCAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBhdDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBwcmV2aW91cyA9IDA7XG4gICAgdGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG52YXIgTUFSR0lOX1RZUEUgPSB7XG4gIGx0cjogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIHJ0bDogWydtYXJnaW5SaWdodCcsICdtYXJnaW5MZWZ0J11cbn07XG5cbmZ1bmN0aW9uIEdhcHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEdhcHMgPSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBnYXBzIGJldHdlZW4gc2xpZGVzLiBGaXJzdCBhbmQgbGFzdFxuICAgICAqIHNsaWRlcyBkbyBub3QgcmVjZWl2ZSBpdCdzIGVkZ2UgbWFyZ2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc3R5bGUgPSBzbGlkZXNbaV0uc3R5bGU7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBDb21wb25lbnRzLkRpcmVjdGlvbi52YWx1ZTtcblxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gdGhpcy52YWx1ZSAvIDIgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSAhPT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9IHRoaXMudmFsdWUgLyAyICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBnYXBzIGZyb20gdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHNsaWRlc1tpXS5zdHlsZTtcblxuICAgICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShHYXBzLCAndmFsdWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgZ2FwLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0b0ludChHbGlkZS5zZXR0aW5ncy5nYXApO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEdhcHMsICdncm93Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYWRkaXRpb25hbCBkaW1lbnRpb25zIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gaW5jcmVhc2Ugd2lkdGggb2YgdGhlIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKENvbXBvbmVudHMuU2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoR2FwcywgJ3JlZHVjdG9yJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgcmVkdWN0aW9uIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gc3VidHJhY3Qgd2lkdGggb2YgdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcGVyVmlldyA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG5cbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKHBlclZpZXcgLSAxKSAvIHBlclZpZXc7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQXBwbHkgY2FsY3VsYXRlZCBnYXBzOlxuICAgKiAtIGFmdGVyIGJ1aWxkaW5nLCBzbyBzbGlkZXMgKGluY2x1ZGluZyBjbG9uZXMpIHdpbGwgcmVjZWl2ZSBwcm9wZXIgbWFyZ2luc1xuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEksIHRvIHJlY2FsY3VsYXRlIGdhcHMgd2l0aCBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYWZ0ZXInLCAndXBkYXRlJ10sIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHYXBzLmFwcGx5KENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSwgMzApKTtcblxuICAvKipcbiAgICogUmVtb3ZlIGdhcHM6XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEdhcHMucmVtb3ZlKENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEdhcHM7XG59XG5cbi8qKlxuICogRmluZHMgc2libGluZ3Mgbm9kZXMgb2YgdGhlIHBhc3NlZCBub2RlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBzaWJsaW5ncyhub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHZhciBuID0gbm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIG1hdGNoZWQgPSBbXTtcblxuICAgIGZvciAoOyBuOyBuID0gbi5uZXh0U2libGluZykge1xuICAgICAgaWYgKG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gbm9kZSkge1xuICAgICAgICBtYXRjaGVkLnB1c2gobik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZWQ7XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhc3NlZCBub2RlIGV4aXN0IGFuZCBpcyBhIHZhbGlkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZXhpc3Qobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBUUkFDS19TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cInRyYWNrXCJdJztcblxuZnVuY3Rpb24gSHRtbCAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgdmFyIEh0bWwgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXAgc2xpZGVyIEhUTUwgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0dsaWRlfSBnbGlkZVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMucm9vdCA9IEdsaWRlLnNlbGVjdG9yO1xuICAgICAgdGhpcy50cmFjayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFRSQUNLX1NFTEVDVE9SKTtcbiAgICAgIHRoaXMuc2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy53cmFwcGVyLmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiAhc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuY2xvbmVTbGlkZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEh0bWwsICdyb290Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgZ2xpZGUgbWFpbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3I7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSBtYWluIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocikge1xuICAgICAgaWYgKGlzU3RyaW5nKHIpKSB7XG4gICAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3QocikpIHtcbiAgICAgICAgSHRtbC5fciA9IHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdSb290IGVsZW1lbnQgbXVzdCBiZSBhIGV4aXN0aW5nIEh0bWwgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd0cmFjaycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG5vZGUgb2YgdGhlIGdsaWRlIHRyYWNrIHdpdGggc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3Q7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSB0cmFjayB3aXRoIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICBpZiAoZXhpc3QodCkpIHtcbiAgICAgICAgSHRtbC5fdCA9IHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdDb3VsZCBub3QgZmluZCB0cmFjayBlbGVtZW50LiBQbGVhc2UgdXNlICcgKyBUUkFDS19TRUxFQ1RPUiArICcgYXR0cmlidXRlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd3cmFwcGVyJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC50cmFjay5jaGlsZHJlblswXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBIdG1sO1xufVxuXG5mdW5jdGlvbiBQZWVrIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBQZWVrID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBob3cgbXVjaCB0byBwZWVrIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MucGVlaztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFBlZWssICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcnxPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gUGVlay5fdjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuYmVmb3JlID0gdG9JbnQodmFsdWUuYmVmb3JlKTtcbiAgICAgICAgdmFsdWUuYWZ0ZXIgPSB0b0ludCh2YWx1ZS5hZnRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgUGVlay5fdiA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKFBlZWssICdyZWR1Y3RvcicsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHJlZHVjdGlvbiB2YWx1ZSBjYXVzZWQgYnkgcGVlay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBQZWVrLnZhbHVlO1xuICAgICAgdmFyIHBlclZpZXcgPSBHbGlkZS5zZXR0aW5ncy5wZXJWaWV3O1xuXG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5iZWZvcmUgLyBwZXJWaWV3ICsgdmFsdWUuYWZ0ZXIgLyBwZXJWaWV3O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUgKiAyIC8gcGVyVmlldztcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZSBwZWVraW5nIHNpemVzIG9uOlxuICAgKiAtIHdoZW4gcmVzaXppbmcgd2luZG93IHRvIHVwZGF0ZSB0byBwcm9wZXIgcGVyY2VudHNcbiAgICovXG4gIEV2ZW50cy5vbihbJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFBlZWsubW91bnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFBlZWs7XG59XG5cbmZ1bmN0aW9uIE1vdmUgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIE1vdmUgPSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBtb3ZlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuX28gPSAwO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYSBtb3ZlbWVudCB2YWx1ZSBiYXNlZCBvbiBwYXNzZWQgb2Zmc2V0IGFuZCBjdXJyZW50bHkgYWN0aXZlIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uIG1ha2UoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgICAgRXZlbnRzLmVtaXQoJ21vdmUnLCB7XG4gICAgICAgIG1vdmVtZW50OiB0aGlzLnZhbHVlXG4gICAgICB9KTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ21vdmUuYWZ0ZXInLCB7XG4gICAgICAgICAgbW92ZW1lbnQ6IF90aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShNb3ZlLCAnb2Zmc2V0Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gb2Zmc2V0IHZhbHVlIHVzZWQgdG8gbW9kaWZ5IGN1cnJlbnQgdHJhbnNsYXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE1vdmUuX287XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBvZmZzZXQgdmFsdWUgdXNlZCB0byBtb2RpZnkgY3VycmVudCB0cmFuc2xhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIE1vdmUuX28gPSAhaXNVbmRlZmluZWQodmFsdWUpID8gdG9JbnQodmFsdWUpIDogMDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShNb3ZlLCAndHJhbnNsYXRlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYSByYXcgbW92ZW1lbnQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoTW92ZSwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gYWN0dWFsIG1vdmVtZW50IHZhbHVlIGNvcnJlY3RlZCBieSBvZmZzZXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICB2YXIgdHJhbnNsYXRlID0gdGhpcy50cmFuc2xhdGU7XG5cbiAgICAgIGlmIChDb21wb25lbnRzLkRpcmVjdGlvbi5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIG9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIG9mZnNldDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBNYWtlIG1vdmVtZW50IHRvIHByb3BlciBzbGlkZSBvbjpcbiAgICogLSBiZWZvcmUgYnVpbGQsIHNvIGdsaWRlIHdpbGwgc3RhcnQgYXQgYHN0YXJ0QXRgIGluZGV4XG4gICAqIC0gb24gZWFjaCBzdGFuZGFyZCBydW4gdG8gbW92ZSB0byBuZXdseSBjYWxjdWxhdGVkIGluZGV4XG4gICAqL1xuICBFdmVudHMub24oWydidWlsZC5iZWZvcmUnLCAncnVuJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBNb3ZlLm1ha2UoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIE1vdmU7XG59XG5cbmZ1bmN0aW9uIFNpemVzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBTaXplcyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZGltZW50aW9ucyBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldHVwU2xpZGVzOiBmdW5jdGlvbiBzZXR1cFNsaWRlcygpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSB0aGlzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHVwcyBkaW1lbnRpb25zIG9mIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXR1cFdyYXBwZXI6IGZ1bmN0aW9uIHNldHVwV3JhcHBlcihkaW1lbnRpb24pIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53cmFwcGVyU2l6ZSArICdweCc7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhcHBsaWVkIHN0eWxlcyBmcm9tIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH1cblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUud2lkdGggPSAnJztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFNpemVzLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY291bnQgbnVtYmVyIG9mIHRoZSBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5IdG1sLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoU2l6ZXMsICd3aWR0aCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdpZHRoIHZhbHVlIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRzLkh0bWwucm9vdC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3dyYXBwZXJTaXplJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgc2l6ZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gU2l6ZXMuc2xpZGVXaWR0aCAqIFNpemVzLmxlbmd0aCArIENvbXBvbmVudHMuR2Fwcy5ncm93ICsgQ29tcG9uZW50cy5DbG9uZXMuZ3JvdztcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3NsaWRlV2lkdGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aWR0aCB2YWx1ZSBvZiB0aGUgc2luZ2xlIHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFNpemVzLndpZHRoIC8gR2xpZGUuc2V0dGluZ3MucGVyVmlldyAtIENvbXBvbmVudHMuUGVlay5yZWR1Y3RvciAtIENvbXBvbmVudHMuR2Fwcy5yZWR1Y3RvcjtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBjYWxjdWxhdGVkIGdsaWRlJ3MgZGltZW5zaW9uczpcbiAgICogLSBiZWZvcmUgYnVpbGRpbmcsIHNvIG90aGVyIGRpbWVudGlvbnMgKGUuZy4gdHJhbnNsYXRlKSB3aWxsIGJlIGNhbGN1bGF0ZWQgcHJvcGVydGx5XG4gICAqIC0gd2hlbiByZXNpemluZyB3aW5kb3cgdG8gcmVjYWxjdWxhdGUgc2lsZGVzIGRpbWVuc2lvbnNcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJLCB0byBjYWxjdWxhdGUgZGltZW5zaW9ucyBiYXNlZCBvbiBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFNpemVzLnNldHVwU2xpZGVzKCk7XG4gICAgU2l6ZXMuc2V0dXBXcmFwcGVyKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FsY3VsYXRlZCBnbGlkZSdzIGRpbWVuc2lvbnM6XG4gICAqIC0gb24gZGVzdG90aW5nIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgU2l6ZXMucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBTaXplcztcbn1cblxuZnVuY3Rpb24gQnVpbGQgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEJ1aWxkID0ge1xuICAgIC8qKlxuICAgICAqIEluaXQgZ2xpZGUgYnVpbGRpbmcuIEFkZHMgY2xhc3Nlcywgc2V0c1xuICAgICAqIGRpbWVuc2lvbnMgYW5kIHNldHVwcyBpbml0aWFsIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFdmVudHMuZW1pdCgnYnVpbGQuYmVmb3JlJyk7XG5cbiAgICAgIHRoaXMudHlwZUNsYXNzKCk7XG4gICAgICB0aGlzLmFjdGl2ZUNsYXNzKCk7XG5cbiAgICAgIEV2ZW50cy5lbWl0KCdidWlsZC5hZnRlcicpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYHR5cGVgIGNsYXNzIHRvIHRoZSBnbGlkZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQ2xhc3M6IGZ1bmN0aW9uIHR5cGVDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlc1tHbGlkZS5zZXR0aW5ncy50eXBlXSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6IGZ1bmN0aW9uIGFjdGl2ZUNsYXNzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuICAgICAgdmFyIHNsaWRlID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuXG4gICAgICAgIHNpYmxpbmdzKHNsaWRlKS5mb3JFYWNoKGZ1bmN0aW9uIChzaWJsaW5nKSB7XG4gICAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIEhUTUwgY2xhc3NlcyBhcHBsaWVkIGF0IGJ1aWxkaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzc2VzOiBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbR2xpZGUuc2V0dGluZ3MudHlwZV0pO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBidWlsZGluZyBjbGFzc2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBjbGFzc2VzIGJlZm9yZSByZW1vdW50aW5nIGNvbXBvbmVudFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEJ1aWxkLnJlbW92ZUNsYXNzZXMoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50OlxuICAgKiAtIG9uIHJlc2l6aW5nIG9mIHRoZSB3aW5kb3cgdG8gY2FsY3VsYXRlIG5ldyBkaW1lbnRpb25zXG4gICAqIC0gb24gdXBkYXRpbmcgc2V0dGluZ3MgdmlhIEFQSVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQnVpbGQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgc2xpZGU6XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZS5hZnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBCdWlsZC5hY3RpdmVDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gQnVpbGQ7XG59XG5cbmZ1bmN0aW9uIENsb25lcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgQ2xvbmVzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXR0ZXJuIG1hcCBhbmQgY29sbGVjdCBzbGlkZXMgdG8gYmUgY2xvbmVkLlxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb2xsZWN0KCk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdCBjbG9uZXMgd2l0aCBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjb2xsZWN0OiBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgICAgdmFyIGl0ZW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuICAgICAgdmFyIF9HbGlkZSRzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzLFxuICAgICAgICAgIHBlclZpZXcgPSBfR2xpZGUkc2V0dGluZ3MucGVyVmlldyxcbiAgICAgICAgICBjbGFzc2VzID0gX0dsaWRlJHNldHRpbmdzLmNsYXNzZXM7XG5cblxuICAgICAgdmFyIHBlZWtJbmNyZW1lbnRlciA9ICshIUdsaWRlLnNldHRpbmdzLnBlZWs7XG4gICAgICB2YXIgcGFydCA9IHBlclZpZXcgKyBwZWVrSW5jcmVtZW50ZXI7XG4gICAgICB2YXIgc3RhcnQgPSBzbGlkZXMuc2xpY2UoMCwgcGFydCk7XG4gICAgICB2YXIgZW5kID0gc2xpZGVzLnNsaWNlKC1wYXJ0KTtcblxuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBlclZpZXcgLyBzbGlkZXMubGVuZ3RoKSk7IHIrKykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNsb25lID0gc3RhcnRbaV0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLmNsb25lU2xpZGUpO1xuXG4gICAgICAgICAgaXRlbXMucHVzaChjbG9uZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZW5kLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIHZhciBfY2xvbmUgPSBlbmRbX2ldLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgIF9jbG9uZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuY2xvbmVTbGlkZSk7XG5cbiAgICAgICAgICBpdGVtcy51bnNoaWZ0KF9jbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjbG9uZWQgc2xpZGVzIHdpdGggZ2VuZXJhdGVkIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIHZhciBfQ29tcG9uZW50cyRIdG1sID0gQ29tcG9uZW50cy5IdG1sLFxuICAgICAgICAgIHdyYXBwZXIgPSBfQ29tcG9uZW50cyRIdG1sLndyYXBwZXIsXG4gICAgICAgICAgc2xpZGVzID0gX0NvbXBvbmVudHMkSHRtbC5zbGlkZXM7XG5cblxuICAgICAgdmFyIGhhbGYgPSBNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpO1xuICAgICAgdmFyIHByZXBlbmQgPSBpdGVtcy5zbGljZSgwLCBoYWxmKS5yZXZlcnNlKCk7XG4gICAgICB2YXIgYXBwZW5kID0gaXRlbXMuc2xpY2UoaGFsZiwgaXRlbXMubGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcHBlbmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcHBlbmRbaV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBwcmVwZW5kLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUocHJlcGVuZFtfaTJdLCBzbGlkZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBpdGVtcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICAgIGl0ZW1zW19pM10uc3R5bGUud2lkdGggPSBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY2xvbmVkIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIucmVtb3ZlQ2hpbGQoaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ2xvbmVzLCAnZ3JvdycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFkZGl0aW9uYWwgZGltZW50aW9ucyB2YWx1ZSBjYXVzZWQgYnkgY2xvbmVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyBDb21wb25lbnRzLkdhcHMudmFsdWUpICogQ2xvbmVzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBzbGlkZSdzIGNsb25lczpcbiAgICogLSB3aGlsZSBnbGlkZSdzIHR5cGUgaXMgYGNhcm91c2VsYFxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ2xvbmVzLnJlbW92ZSgpO1xuICAgIENsb25lcy5tb3VudCgpO1xuICAgIENsb25lcy5hcHBlbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhZGRpdGlvbmFsIHNsaWRlJ3MgY2xvbmVzOlxuICAgKiAtIHdoaWxlIGdsaWRlJ3MgdHlwZSBpcyBgY2Fyb3VzZWxgXG4gICAqL1xuICBFdmVudHMub24oJ2J1aWxkLmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoR2xpZGUuaXNUeXBlKCdjYXJvdXNlbCcpKSB7XG4gICAgICBDbG9uZXMuYXBwZW5kKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGNsb25lcyBIVE1MRWxlbWVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENsb25lcy5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIENsb25lcztcbn1cblxudmFyIEV2ZW50c0JpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50c0JpbmRlciBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50c0JpbmRlcigpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHNCaW5kZXIpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudHMgbGlzdGVuZXJzIHRvIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50c1xuICAgKiBAcGFyYW0gIHtFbGVtZW50fFdpbmRvd3xEb2N1bWVudH0gZWxcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNsb3N1cmVcbiAgICogQHBhcmFtICB7Qm9vbGVhbnxPYmplY3R9IGNhcHR1cmVcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhFdmVudHNCaW5kZXIsIFt7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudHMsIGVsLCBjbG9zdXJlKSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudHNbaV1dID0gY2xvc3VyZTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRzXG4gICAgICogQHBhcmFtICB7RWxlbWVudHxXaW5kb3d8RG9jdW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb2ZmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWwpIHtcbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29sbGVjdGVkIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50c0JpbmRlcjtcbn0oKTtcblxuZnVuY3Rpb24gUmVzaXplIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgUmVzaXplID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHdpbmRvdyBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgcmV6c2l6ZWAgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdy5cbiAgICAgKiBJdCdzIGEgY29zdGx5IGV2ZW50LCBzbyB3ZSBhcmUgZGVib3VuY2luZyBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbigncmVzaXplJywgd2luZG93LCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdyZXNpemUnKTtcbiAgICAgIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBsaXN0ZW5lcnMgZnJvbSB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSB3aW5kb3c6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBSZXNpemUudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFJlc2l6ZTtcbn1cblxudmFyIFZBTElEX0RJUkVDVElPTlMgPSBbJ2x0cicsICdydGwnXTtcbnZhciBGTElQRURfTU9WRU1FTlRTID0ge1xuICAnPic6ICc8JyxcbiAgJzwnOiAnPicsXG4gICc9JzogJz0nXG59O1xuXG5mdW5jdGlvbiBEaXJlY3Rpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZ2FwIHZhbHVlIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MuZGlyZWN0aW9uO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHBhdHRlcm4gYmFzZWQgb24gZGlyZWN0aW9uIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZShwYXR0ZXJuKSB7XG4gICAgICB2YXIgdG9rZW4gPSBwYXR0ZXJuLnNsaWNlKDAsIDEpO1xuXG4gICAgICBpZiAodGhpcy5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQodG9rZW4pLmpvaW4oRkxJUEVEX01PVkVNRU5UU1t0b2tlbl0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdmFsdWUgb2YgZGlyZWN0aW9uIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IGRpcmVjdGlvbjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGRpcmVjdGlvbiBjbGFzcyB0byB0aGUgcm9vdCBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb25bdGhpcy52YWx1ZV0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGlyZWN0aW9uIGNsYXNzIGZyb20gdGhlIHJvb3QgSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uW3RoaXMudmFsdWVdKTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKERpcmVjdGlvbiwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uLl92O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChWQUxJRF9ESVJFQ1RJT05TLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgRGlyZWN0aW9uLl92ID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdEaXJlY3Rpb24gdmFsdWUgbXVzdCBiZSBgbHRyYCBvciBgcnRsYCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENsZWFyIGRpcmVjdGlvbiBjbGFzczpcbiAgICogLSBvbiBkZXN0cm95IHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVtb3ZlIGNsYXNzIGJlZm9yZSByZWFwcGxpbmcgYmVsbG93XG4gICAqL1xuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLnJlbW92ZUNsYXNzKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVmbGVjdCBjaGFuZ2VzIGluIGRpcmVjdGlvbiB2YWx1ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBkaXJlY3Rpb24gY2xhc3M6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nIHRvIGFwcGx5IGNsYXNzIGZvciB0aGUgZmlyc3QgdGltZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlYXBwbHkgZGlyZWN0aW9uIGNsYXNzIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIERpcmVjdGlvbi5hZGRDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gRGlyZWN0aW9uO1xufVxuXG4vKipcbiAqIFJlZmxlY3RzIHZhbHVlIG9mIGdsaWRlIG1vdmVtZW50LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBSdGwgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyB0aGUgcGFzc2VkIHRyYW5zbGF0ZSBpZiBnbGlkZSBpcyBpbiBSVEwgb3B0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgIHJldHVybiAtdHJhbnNsYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgZ2FwYCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR2FwIChHbGlkZSwgQ29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIHBhc3NlZCB0cmFuc2xhdGUgdmFsdWUgd2l0aCBudW1iZXIgaW4gdGhlIGBnYXBgIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlICsgQ29tcG9uZW50cy5HYXBzLnZhbHVlICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCB3aWR0aCBvZiBhZGRpdGlvbmFsIGNsb25lcyB3aWR0aC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR3JvdyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRvIHRoZSBwYXNzZWQgdHJhbnNsYXRlIHdpZHRoIG9mIHRoZSBoYWxmIG9mIGNsb25lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3cgLyAyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgcGVla2Agc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFBlZWtpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGEgYHBlZWtgIHNldHRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5mb2N1c0F0ID49IDApIHtcbiAgICAgICAgdmFyIHBlZWsgPSBDb21wb25lbnRzLlBlZWsudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHBlZWspKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWsuYmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCBhIGBmb2N1c0F0YCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gRm9jdXNpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGluZGV4IGluIHRoZSBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICAgIHZhciB3aWR0aCA9IENvbXBvbmVudHMuU2l6ZXMud2lkdGg7XG4gICAgICB2YXIgZm9jdXNBdCA9IEdsaWRlLnNldHRpbmdzLmZvY3VzQXQ7XG4gICAgICB2YXIgc2xpZGVXaWR0aCA9IENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aDtcblxuICAgICAgaWYgKGZvY3VzQXQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUgLSAod2lkdGggLyAyIC0gc2xpZGVXaWR0aCAvIDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gc2xpZGVXaWR0aCAqIGZvY3VzQXQgLSBnYXAgKiBmb2N1c0F0O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRpZmZyZW50IHRyYW5zZm9ybWVycyBvbiB0cmFuc2xhdGUgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG11dGF0b3IgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIE1lcmdlIGluc3RhbmNlIHRyYW5zZm9ybWVycyB3aXRoIGNvbGxlY3Rpb24gb2YgZGVmYXVsdCB0cmFuc2Zvcm1lcnMuXG4gICAqIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIFJ0bCBjb21wb25lbnQgYmUgbGFzdCBvbiB0aGUgbGlzdCxcbiAgICogc28gaXQgcmVmbGVjdHMgYWxsIHByZXZpb3VzIHRyYW5zZm9ybWF0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIFRSQU5TRk9STUVSUyA9IFtHYXAsIEdyb3csIFBlZWtpbmcsIEZvY3VzaW5nXS5jb25jYXQoR2xpZGUuX3QsIFtSdGxdKTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFBpcGxpbmVzIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIHJlZ2lzdGVyZWQgdHJhbnNmb3JtZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUodHJhbnNsYXRlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRSQU5TRk9STUVSUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJhbnNmb3JtZXIgPSBUUkFOU0ZPUk1FUlNbaV07XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odHJhbnNmb3JtZXIpICYmIGlzRnVuY3Rpb24odHJhbnNmb3JtZXIoKS5tb2RpZnkpKSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gdHJhbnNmb3JtZXIoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykubW9kaWZ5KHRyYW5zbGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybignVHJhbnNmb3JtZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBtb2RpZnkoKWAgbWV0aG9kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zbGF0ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgVHJhbnNsYXRlID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdHJhbnNsYXRlIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBtdXRhdG9yKEdsaWRlLCBDb21wb25lbnRzKS5tdXRhdGUodmFsdWUpO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIC0xICogdHJhbnNmb3JtICsgJ3B4LCAwcHgsIDBweCknO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdmFsdWUgb2YgdHJhbnNsYXRlIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IG5ldyB0cmFuc2xhdGUgdmFsdWU6XG4gICAqIC0gb24gbW92ZSB0byByZWZsZWN0IGluZGV4IGNoYW5nZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVmbGVjdCBwb3NzaWJsZSBjaGFuZ2VzIGluIG9wdGlvbnNcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZScsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICB2YXIgbGVuZ3RoID0gQ29tcG9uZW50cy5TaXplcy5sZW5ndGg7XG4gICAgdmFyIHdpZHRoID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoO1xuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSAmJiBDb21wb25lbnRzLlJ1bi5pc09mZnNldCgnPCcpKSB7XG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHMuZW1pdCgndHJhbnNsYXRlLmp1bXAnKTtcblxuICAgICAgICBUcmFuc2xhdGUuc2V0KHdpZHRoICogKGxlbmd0aCAtIDEpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCgtd2lkdGggLSBnYXAgKiBsZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykgJiYgQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJz4nKSkge1xuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3RyYW5zbGF0ZS5qdW1wJyk7XG5cbiAgICAgICAgVHJhbnNsYXRlLnNldCgwKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCh3aWR0aCAqIGxlbmd0aCArIGdhcCAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRyYW5zbGF0ZS5zZXQoY29udGV4dC5tb3ZlbWVudCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhbnNsYXRlOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2xhdGUucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEhvbGRzIGluYWN0aXZpdHkgc3RhdHVzIG9mIHRyYW5zaXRpb24uXG4gICAqIFdoZW4gdHJ1ZSB0cmFuc2l0aW9uIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHZhciBUcmFuc2l0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHN0cmluZyBvZiB0aGUgQ1NTIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZShwcm9wZXJ0eSkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAnICsgdGhpcy5kdXJhdGlvbiArICdtcyAnICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltaW5nRnVuYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAwbXMgJyArIHNldHRpbmdzLmFuaW1hdGlvblRpbWluZ0Z1bmM7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0cmFuc2l0aW9uIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nPX0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdmFyIHByb3BlcnR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuY29tcG9zZShwcm9wZXJ0eSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB2YWx1ZSBvZiB0cmFuc2l0aW9uIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIGFmdGVyIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKGNhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNldCgpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoVHJhbnNpdGlvbiwgJ2R1cmF0aW9uJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYmFzZWRcbiAgICAgKiBvbiBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBDb21wb25lbnRzLlJ1bi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJld2luZER1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogU2V0IHRyYW5zaXRpb24gYHN0eWxlYCB2YWx1ZTpcbiAgICogLSBvbiBlYWNoIG1vdmluZywgYmVjYXVzZSBpdCBtYXkgYmUgY2xlYXJlZCBieSBvZmZzZXQgbW92ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24uc2V0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRyYW5zaXRpb246XG4gICAqIC0gYmVmb3JlIGluaXRpYWwgYnVpbGQgdG8gYXZvaWQgdHJhbnNpdGlvbmluZyBmcm9tIGAwYCB0byBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSB3aGlsZSByZXNpemluZyB3aW5kb3cgYW5kIHJlY2FsY3VsYXRpbmcgZGltZW50aW9uc1xuICAgKiAtIG9uIGp1bXBpbmcgZnJvbSBvZmZzZXQgdHJhbnNpdGlvbiBhdCBzdGFydCBhbmQgZW5kIGVkZ2VzIGluIGBjYXJvdXNlbGAgdHlwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd0cmFuc2xhdGUuanVtcCddLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdHJhbnNpdGlvbjpcbiAgICogLSBvbiBlYWNoIHJ1bm5pbmcsIGJlY2F1c2UgaXQgbWF5IGJlIGRpc2FibGVkIGJ5IG9mZnNldCBtb3ZlXG4gICAqL1xuICBFdmVudHMub24oJ3J1bicsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2l0aW9uLmVuYWJsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRyYW5zaXRpb246XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufVxuXG4vKipcbiAqIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWVcbiAqIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAqL1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlJDEgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbnZhciBTVEFSVF9FVkVOVFMgPSBbJ3RvdWNoc3RhcnQnLCAnbW91c2Vkb3duJ107XG52YXIgTU9WRV9FVkVOVFMgPSBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXTtcbnZhciBFTkRfRVZFTlRTID0gWyd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdtb3VzZXVwJywgJ21vdXNlbGVhdmUnXTtcbnZhciBNT1VTRV9FVkVOVFMgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdtb3VzZWxlYXZlJ107XG5cbmZ1bmN0aW9uIFN3aXBlIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgc3dpcGVTaW4gPSAwO1xuICB2YXIgc3dpcGVTdGFydFggPSAwO1xuICB2YXIgc3dpcGVTdGFydFkgPSAwO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIG1vdmVhYmxlID0gdHJ1ZTtcbiAgdmFyIGNhcHR1cmUgPSBzdXBwb3J0c1Bhc3NpdmUkMSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgdmFyIFN3aXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHN3aXBlIGJpbmRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlc3RhcnRgIGV2ZW50LiBDYWxjdWxhdGVzIGVudHJ5IHBvaW50cyBvZiB0aGUgdXNlcidzIHRhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmICFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuXG4gICAgICAgIG1vdmVhYmxlID0gdHJ1ZTtcbiAgICAgICAgc3dpcGVTaW4gPSBudWxsO1xuICAgICAgICBzd2lwZVN0YXJ0WCA9IHRvSW50KHN3aXBlLnBhZ2VYKTtcbiAgICAgICAgc3dpcGVTdGFydFkgPSB0b0ludChzd2lwZS5wYWdlWSk7XG5cbiAgICAgICAgdGhpcy5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgICAgIHRoaXMuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLnN0YXJ0Jyk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlbW92ZWAgZXZlbnQuIENhbGN1bGF0ZXMgdXNlcidzIHRhcCBhbmdsZSBhbmQgZGlzdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIHRvdWNoQW5nbGUgPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hBbmdsZSxcbiAgICAgICAgICAgIHRvdWNoUmF0aW8gPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hSYXRpbyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfR2xpZGUkc2V0dGluZ3MuY2xhc3NlcztcblxuXG4gICAgICAgIHZhciBzd2lwZSA9IHRoaXMudG91Y2hlcyhldmVudCk7XG5cbiAgICAgICAgdmFyIHN1YkV4U3ggPSB0b0ludChzd2lwZS5wYWdlWCkgLSBzd2lwZVN0YXJ0WDtcbiAgICAgICAgdmFyIHN1YkV5U3kgPSB0b0ludChzd2lwZS5wYWdlWSkgLSBzd2lwZVN0YXJ0WTtcbiAgICAgICAgdmFyIHBvd0VYID0gTWF0aC5hYnMoc3ViRXhTeCA8PCAyKTtcbiAgICAgICAgdmFyIHBvd0VZID0gTWF0aC5hYnMoc3ViRXlTeSA8PCAyKTtcbiAgICAgICAgdmFyIHN3aXBlSHlwb3RlbnVzZSA9IE1hdGguc3FydChwb3dFWCArIHBvd0VZKTtcbiAgICAgICAgdmFyIHN3aXBlQ2F0aGV0dXMgPSBNYXRoLnNxcnQocG93RVkpO1xuXG4gICAgICAgIHN3aXBlU2luID0gTWF0aC5hc2luKHN3aXBlQ2F0aGV0dXMgLyBzd2lwZUh5cG90ZW51c2UpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSAmJiBzd2lwZVNpbiAqIDE4MCAvIE1hdGguUEkgPCB0b3VjaEFuZ2xlKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLk1vdmUubWFrZShzdWJFeFN4ICogdG9GbG9hdCh0b3VjaFJhdGlvKSk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuZHJhZ2dpbmcpO1xuXG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLm1vdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlZW5kYCBldmVudC4gRmluaXRpYWxpemVzIHVzZXIncyB0YXAgYW5kIGRlY2lkZXMgYWJvdXQgZ2xpZGUgbW92ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZW5kOiBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkKGV2ZW50KTtcblxuICAgICAgICB2YXIgc3dpcGVEaXN0YW5jZSA9IHN3aXBlLnBhZ2VYIC0gc3dpcGVTdGFydFg7XG4gICAgICAgIHZhciBzd2lwZURlZyA9IHN3aXBlU2luICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgdmFyIHN0ZXBzID0gTWF0aC5yb3VuZChzd2lwZURpc3RhbmNlIC8gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoKTtcblxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSkge1xuICAgICAgICAgIGlmIChzd2lwZURpc3RhbmNlID4gdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgcG9zaXRpdmUgYW5kIGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQgbW92ZSBiYWNrd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWluKHN0ZXBzLCB0b0ludChzZXR0aW5ncy5wZXJUb3VjaCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgICAgICAgIHN0ZXBzID0gLXN0ZXBzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoJzwnICsgc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlRGlzdGFuY2UgPCAtdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgbmVnYXRpdmUgYW5kIGxvd2VyIHRoYW4gbmVnYXRpdmUgdGhyZXNob2xkIG1vdmUgZm9yd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWF4KHN0ZXBzLCAtdG9JbnQoc2V0dGluZ3MucGVyVG91Y2gpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKENvbXBvbmVudHMuRGlyZWN0aW9uLmlzKCdydGwnKSkge1xuICAgICAgICAgICAgICBzdGVwcyA9IC1zdGVwcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZShDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlKCc+JyArIHN0ZXBzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdoaWxlIHN3aXBlIGRvbid0IHJlYWNoIGRpc3RhbmNlIGFwcGx5IHByZXZpb3VzIHRyYW5zZm9ybS5cbiAgICAgICAgICAgIENvbXBvbmVudHMuTW92ZS5tYWtlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5jbGFzc2VzLmRyYWdnaW5nKTtcblxuICAgICAgICB0aGlzLnVuYmluZFN3aXBlTW92ZSgpO1xuICAgICAgICB0aGlzLnVuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLmVuZCcpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3Mgc3RhcnRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmRTd2lwZVN0YXJ0OiBmdW5jdGlvbiBiaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgQmluZGVyLm9uKFNUQVJUX0VWRU5UU1swXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIF90aGlzLnN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSwgY2FwdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5kcmFnVGhyZXNob2xkKSB7XG4gICAgICAgIEJpbmRlci5vbihTVEFSVF9FVkVOVFNbMV0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpcy5zdGFydChldmVudCk7XG4gICAgICAgIH0sIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBzdGFydGluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kU3dpcGVTdGFydDogZnVuY3Rpb24gdW5iaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIEJpbmRlci5vZmYoU1RBUlRfRVZFTlRTWzBdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgICBCaW5kZXIub2ZmKFNUQVJUX0VWRU5UU1sxXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgbW92aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVNb3ZlOiBmdW5jdGlvbiBiaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIEJpbmRlci5vbihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIHRocm90dGxlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczIubW92ZShldmVudCk7XG4gICAgICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSksIGNhcHR1cmUpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBtb3ZpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlTW92ZTogZnVuY3Rpb24gdW5iaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgQmluZGVyLm9mZihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgZW5kaW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVFbmQ6IGZ1bmN0aW9uIGJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMuZW5kKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBlbmRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlRW5kOiBmdW5jdGlvbiB1bmJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZXMgZXZlbnQgdG91Y2hlcyBwb2ludHMgYWNjb3J0aW5nIHRvIGRpZmZlcmVudCB0eXBlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIHRvdWNoZXM6IGZ1bmN0aW9uIHRvdWNoZXMoZXZlbnQpIHtcbiAgICAgIGlmIChNT1VTRV9FVkVOVFMuaW5kZXhPZihldmVudC50eXBlKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiBtaW5pbXVtIHN3aXBlIGRpc3RhbmNlIHNldHRpbmdzIGJhc2VkIG9uIGV2ZW50IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhyZXNob2xkOiBmdW5jdGlvbiB0aHJlc2hvbGQoZXZlbnQpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoTU9VU0VfRVZFTlRTLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuZHJhZ1RocmVzaG9sZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldHRpbmdzLnN3aXBlVGhyZXNob2xkO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgc3dpcGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmVuYWJsZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzd2lwZSBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmRpc2FibGUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgY29tcG9uZW50IGNsYXNzOlxuICAgKiAtIGFmdGVyIGluaXRpYWwgYnVpbGRpbmdcbiAgICovXG4gIEV2ZW50cy5vbignYnVpbGQuYWZ0ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LmFkZChHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLnN3aXBlYWJsZSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgc3dpcGluZyBiaW5kaW5nczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byByZW1vdmUgYWRkZWQgRXZlbnRMaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBTd2lwZS51bmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVFbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gU3dpcGU7XG59XG5cbmZ1bmN0aW9uIEltYWdlcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG5cbiAgdmFyIEltYWdlcyA9IHtcbiAgICAvKipcbiAgICAgKiBCaW5kcyBsaXN0ZW5lciB0byBnbGlkZSB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgZHJhZ3N0YXJ0YCBldmVudCBvbiB3cmFwcGVyIHRvIHByZXZlbnQgZHJhZ2dpbmcgaW1hZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgdGhpcy5kcmFnc3RhcnQpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgYGRyYWdzdGFydGAgZXZlbnQgb24gd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlci4gUHJldmVudHMgZHJhZ2dpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGRyYWdzdGFydDogZnVuY3Rpb24gZHJhZ3N0YXJ0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGZyb20gaW1hZ2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIHJlbW92ZSBhZGRlZCBFdmVudExpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEltYWdlcy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gSW1hZ2VzO1xufVxuXG5mdW5jdGlvbiBBbmNob3JzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgZGV0YWNoaW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBQcmV2ZW50cyBkZXRhY2hpbmcgb2YgYWxyZWFkeSBkZXRhY2hlZCBhbmNob3JzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkZXRhY2hlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIb2xkcyBwcmV2ZW50aW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBJZiBgdHJ1ZWAgcmVkaXJlY3Rpb24gYWZ0ZXIgY2xpY2sgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICB2YXIgcHJldmVudGVkID0gZmFsc2U7XG5cbiAgdmFyIEFuY2hvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGEgaW5pdGlhbCBzdGF0ZSBvZiBhbmNob3JzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogSG9sZHMgY29sbGVjdGlvbiBvZiBhbmNob3JzIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2EgPSBDb21wb25lbnRzLkh0bWwud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cbiAgICAgIHRoaXMuYmluZCgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdjbGljaycsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aGlzLmNsaWNrKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGV2ZW50cyBhdHRhY2hlZCB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ2NsaWNrJywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGNsaWNrIGV2ZW50LiBQcmV2ZW50cyBjbGlja3Mgd2hlbiBnbGlkZSBpcyBpbiBgcHJldmVudGAgc3RhdHVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKHByZXZlbnRlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnQgaW5zaWRlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBkZXRhY2g6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIHByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgIGlmICghZGV0YWNoZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5pdGVtc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLCB0aGlzLml0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0ucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRhY2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnRzIGluc2lkZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgICBwcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGRldGFjaGVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5pdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGFjaGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQW5jaG9ycywgJ2l0ZW1zJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY29sbGVjdGlvbiBvZiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFuY2hvcnMuX2E7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogRGV0YWNoIGFuY2hvcnMgaW5zaWRlIHNsaWRlczpcbiAgICogLSBvbiBzd2lwaW5nLCBzbyB0aGV5IHdvbid0IHJlZGlyZWN0IHRvIGl0cyBgaHJlZmAgYXR0cmlidXRlc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdzd2lwZS5tb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuZGV0YWNoKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggYW5jaG9ycyBpbnNpZGUgc2xpZGVzOlxuICAgKiAtIGFmdGVyIHN3aXBpbmcgYW5kIHRyYW5zaXRpb25zIGVuZHMsIHNvIHRoZXkgY2FuIHJlZGlyZWN0IGFmdGVyIGNsaWNrIGFnYWluXG4gICAqL1xuICBFdmVudHMub24oJ3N3aXBlLmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgQW5jaG9ycy5hdHRhY2goKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbmNob3JzIGluc2lkZSBzbGlkZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgYW5jaG9ycyB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuYXR0YWNoKCk7XG4gICAgQW5jaG9ycy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQW5jaG9ycztcbn1cblxudmFyIE5BVl9TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cImNvbnRyb2xzW25hdl1cIl0nO1xudmFyIENPTlRST0xTX1NFTEVDVE9SID0gJ1tkYXRhLWdsaWRlLWVsXj1cImNvbnRyb2xzXCJdJztcblxuZnVuY3Rpb24gQ29udHJvbHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBDb250cm9scyA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0cyBhcnJvd3MuIEJpbmRzIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgKiB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29sbGVjdGlvbiBvZiBuYXZpZ2F0aW9uIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fbiA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoTkFWX1NFTEVDVE9SKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb2xsZWN0aW9uIG9mIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fYyA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoQ09OVFJPTFNfU0VMRUNUT1IpO1xuXG4gICAgICB0aGlzLmFkZEJpbmRpbmdzKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyh0aGlzLl9uW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmU6IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKHRoaXMuX25baV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgYWN0aXZlIGNsYXNzIG9uIGl0ZW1zIGluc2lkZSBuYXZpZ2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRyb2xzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoY29udHJvbHMpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuICAgICAgdmFyIGl0ZW0gPSBjb250cm9sc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5jbGFzc2VzLmFjdGl2ZU5hdik7XG5cbiAgICAgIHNpYmxpbmdzKGl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmNsYXNzZXMuYWN0aXZlTmF2KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWN0aXZlIGNsYXNzIGZyb20gYWN0aXZlIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udHJvbHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhjb250cm9scykge1xuICAgICAgY29udHJvbHNbR2xpZGUuaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5hY3RpdmVOYXYpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgaGFuZGxlcyB0byB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQmluZGluZ3M6IGZ1bmN0aW9uIGFkZEJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYmluZCh0aGlzLl9jW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGhhbmRsZXMgZnJvbSB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQmluZGluZ3M6IGZ1bmN0aW9uIHJlbW92ZUJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHRoaXMuX2NbaV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEJpbmRlci5vbihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0sIHRoaXMuY2xpY2spO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgZXZlbnRzIGJpbmRlZCB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoZWxlbWVudHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQmluZGVyLm9mZihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYGNsaWNrYCBldmVudCBvbiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICogTW92ZXMgc2xpZGVyIGluIGRyaWVjdGlvbiBwcmVjaXNlZCBpblxuICAgICAqIGBkYXRhLWdsaWRlLWRpcmAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nbGlkZS1kaXInKSkpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ29udHJvbHMsICdpdGVtcycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbGxlY3Rpb24gb2YgdGhlIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIENvbnRyb2xzLl9jO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgbmF2aWdhdGlvbiBpdGVtOlxuICAgKiAtIGFmdGVyIG1vdW50aW5nIHRvIHNldCBpdCB0byBpbml0aWFsIGluZGV4XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbihbJ21vdW50LmFmdGVyJywgJ21vdmUuYWZ0ZXInXSwgZnVuY3Rpb24gKCkge1xuICAgIENvbnRyb2xzLnNldEFjdGl2ZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGFuZCBIVE1MIENsYXNzZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29udHJvbHMucmVtb3ZlQmluZGluZ3MoKTtcbiAgICBDb250cm9scy5yZW1vdmVBY3RpdmUoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQ29udHJvbHM7XG59XG5cbmZ1bmN0aW9uIEtleWJvYXJkIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgS2V5Ym9hcmQgPSB7XG4gICAgLyoqXG4gICAgICogQmluZHMga2V5Ym9hcmQgZXZlbnRzIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMga2V5Ym9hcmQgcHJlc3MgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdrZXl1cCcsIGRvY3VtZW50LCB0aGlzLnByZXNzKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGtleWJvYXJkIHByZXNzIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdrZXl1cCcsIGRvY3VtZW50KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleWJvYXJkJ3MgYXJyb3dzIHByZXNzIGFuZCBtb3ZpbmcgZ2xpZGUgZm93YXJkIGFuZCBiYWNrd2FyZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHByZXNzOiBmdW5jdGlvbiBwcmVzcyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPCcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBmcm9tIGtleWJvYXJkOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGFkZGVkIGV2ZW50c1xuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBldmVudHMgYmVmb3JlIHJlbW91bnRpbmdcbiAgICovXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBLZXlib2FyZC51bmJpbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50XG4gICAqIC0gb24gdXBkYXRpbmcgdG8gcmVmbGVjdCBwb3RlbnRpYWwgY2hhbmdlcyBpbiBzZXR0aW5nc1xuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgS2V5Ym9hcmQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEJpbmRlci5kZXN0cm95KCk7XG4gIH0pO1xuXG4gIHJldHVybiBLZXlib2FyZDtcbn1cblxuZnVuY3Rpb24gQXV0b3BsYXkgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBBdXRvcGxheSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhdXRvcGxheWluZyBhbmQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5ob3ZlcnBhdXNlKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhdXRvcGxheWluZyBpbiBjb25maWd1cmVkIGludGVydmFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gZm9yY2UgUnVuIGF1dG9wbGF5aW5nIHdpdGggcGFzc2VkIGludGVydmFsIHJlZ2FyZGxlc3Mgb2YgYGF1dG9wbGF5YCBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLl9pKSkge1xuICAgICAgICAgIHRoaXMuX2kgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoJz4nKTtcblxuICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICB9LCB0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3J1bm5pbmcgb2YgdGhlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5faSA9IGNsZWFySW50ZXJ2YWwodGhpcy5faSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3BsYXlpbmcgd2hpbGUgbW91c2UgaXMgb3ZlciBnbGlkZSdzIGFyZWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgQmluZGVyLm9uKCdtb3VzZW92ZXInLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RvcCgpO1xuICAgICAgfSk7XG5cbiAgICAgIEJpbmRlci5vbignbW91c2VvdXQnLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZCBtb3VzZW92ZXIgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J10sIENvbXBvbmVudHMuSHRtbC5yb290KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEF1dG9wbGF5LCAndGltZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRpbWUgcGVyaW9kIHZhbHVlIGZvciB0aGUgYXV0b3BsYXkgaW50ZXJ2YWwuIFByaW9yaXRpemVzXG4gICAgICogdGltZXMgaW4gYGRhdGEtZ2xpZGUtYXV0b3BsYXlgIGF0dHJ1YnV0ZXMgb3ZlciBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGF1dG9wbGF5ID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWdsaWRlLWF1dG9wbGF5Jyk7XG5cbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICByZXR1cm4gdG9JbnQoYXV0b3BsYXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9JbnQoR2xpZGUuc2V0dGluZ3MuYXV0b3BsYXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN0b3AgYXV0b3BsYXlpbmcgYW5kIHVuYmluZCBldmVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gY2xlYXIgZGVmaW5lZCBpbnRlcnZhbFxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnVuYmluZCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheWluZzpcbiAgICogLSBiZWZvcmUgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwYXVzaW5nIHZpYSBBUElcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBjbGVhciBkZWZpbmVkIGludGVydmFsXG4gICAqIC0gd2hpbGUgc3RhcnRpbmcgYSBzd2lwZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmJlZm9yZScsICdwYXVzZScsICdkZXN0cm95JywgJ3N3aXBlLnN0YXJ0JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuc3RvcCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RhcnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gYWZ0ZXIgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwbGF5aW5nIHZpYSBBUElcbiAgICogLSB3aGlsZSBlbmRpbmcgYSBzd2lwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmFmdGVyJywgJ3BsYXknLCAnc3dpcGUuZW5kJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5zdGFydCgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3VudCBhdXRvcGxheWluZzpcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5Lm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgZ2xpZGUgaW5zdGFuY2UgdG8gY2xlYXJ1cCBsaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQXV0b3BsYXk7XG59XG5cbi8qKlxuICogU29ydHMga2V5cyBvZiBicmVha3BvaW50IG9iamVjdCBzbyB0aGV5IHdpbGwgYmUgb3JkZXJlZCBmcm9tIGxvd2VyIHRvIGJpZ2dlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzb3J0QnJlYWtwb2ludHMocG9pbnRzKSB7XG4gIGlmIChpc09iamVjdChwb2ludHMpKSB7XG4gICAgcmV0dXJuIHNvcnRLZXlzKHBvaW50cyk7XG4gIH0gZWxzZSB7XG4gICAgd2FybignQnJlYWtwb2ludHMgb3B0aW9uIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIEJyZWFrcG9pbnRzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHNldHRpbmdzLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHJlZmVyZW5jZSB0byBicmVha3BvaW50cyBvYmplY3QgaW4gc2V0dGluZ3MuIFNvcnRzIGJyZWFrcG9pbnRzXG4gICAqIGZyb20gc21hbGxlciB0byBsYXJnZXIuIEl0IGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHByb3BlclxuICAgKiBtYXRjaGluZyBjdXJyZW50bHkgYWN0aXZlIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzKHNldHRpbmdzLmJyZWFrcG9pbnRzKTtcblxuICAvKipcbiAgICogQ2FjaGUgaW5pdGlhbCBzZXR0aW5ncyBiZWZvcmUgb3ZlcndyaXR0aW5nLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcblxuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBzZXR0aW5ncyBmb3IgY3VycmVjdGx5IG1hdGNoaW5nIG1lZGlhIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocG9pbnRzKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKHZhciBwb2ludCBpbiBwb2ludHMpIHtcbiAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KHBvaW50KSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAnICsgcG9pbnQgKyAncHgpJykubWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gcG9pbnRzW3BvaW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3ZlcndyaXRlIGluc3RhbmNlIHNldHRpbmdzIHdpdGggY3VycmVudGx5IG1hdGNoaW5nIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqIFRoaXMgaGFwcGVucyByaWdodCBhZnRlciBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICBfZXh0ZW5kcyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBnbGlkZSB3aXRoIHNldHRpbmdzIG9mIG1hdGNoZWQgYnJla3BvaW50OlxuICAgKiAtIHdpbmRvdyByZXNpemUgdG8gdXBkYXRlIHNsaWRlclxuICAgKi9cbiAgQmluZGVyLm9uKCdyZXNpemUnLCB3aW5kb3csIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHbGlkZS5zZXR0aW5ncyA9IG1lcmdlT3B0aW9ucyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG4gIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG5cbiAgLyoqXG4gICAqIFJlc29ydCBhbmQgdXBkYXRlIGRlZmF1bHQgc2V0dGluZ3M6XG4gICAqIC0gb24gcmVpbml0IHZpYSBBUEksIHNvIGJyZWFrcG9pbnQgbWF0Y2hpbmcgd2lsbCBiZSBwZXJmb3JtZWQgd2l0aCBvcHRpb25zXG4gICAqL1xuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwb2ludHMgPSBzb3J0QnJlYWtwb2ludHMocG9pbnRzKTtcblxuICAgIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCByZXNpemUgbGlzdGVuZXI6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQmluZGVyLm9mZigncmVzaXplJywgd2luZG93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufVxuXG52YXIgQ09NUE9ORU5UUyA9IHtcbiAgLy8gUmVxdWlyZWRcbiAgSHRtbDogSHRtbCxcbiAgVHJhbnNsYXRlOiBUcmFuc2xhdGUsXG4gIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICBQZWVrOiBQZWVrLFxuICBTaXplczogU2l6ZXMsXG4gIEdhcHM6IEdhcHMsXG4gIE1vdmU6IE1vdmUsXG4gIENsb25lczogQ2xvbmVzLFxuICBSZXNpemU6IFJlc2l6ZSxcbiAgQnVpbGQ6IEJ1aWxkLFxuICBSdW46IFJ1bixcblxuICAvLyBPcHRpb25hbFxuICBTd2lwZTogU3dpcGUsXG4gIEltYWdlczogSW1hZ2VzLFxuICBBbmNob3JzOiBBbmNob3JzLFxuICBDb250cm9sczogQ29udHJvbHMsXG4gIEtleWJvYXJkOiBLZXlib2FyZCxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBCcmVha3BvaW50czogQnJlYWtwb2ludHNcbn07XG5cbnZhciBHbGlkZSQxID0gZnVuY3Rpb24gKF9Db3JlKSB7XG4gIGluaGVyaXRzKEdsaWRlJCQxLCBfQ29yZSk7XG5cbiAgZnVuY3Rpb24gR2xpZGUkJDEoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xpZGUkJDEpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHbGlkZSQkMS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhHbGlkZSQkMSwgW3tcbiAgICBrZXk6ICdtb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICByZXR1cm4gZ2V0KEdsaWRlJCQxLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxLnByb3RvdHlwZSksICdtb3VudCcsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIENPTVBPTkVOVFMsIGV4dGVuc2lvbnMpKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEdsaWRlJCQxO1xufShHbGlkZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsaWRlJDE7XG4iLCJpbXBvcnQgYm9keVNjcm9sbExvY2sgZnJvbSAnYm9keS1zY3JvbGwtbG9jayc7XG5pbXBvcnQgR2xpZGUgZnJvbSAnQGdsaWRlanMvZ2xpZGUnO1xuXG5jb25zdCBkaXNhYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmRpc2FibGVCb2R5U2Nyb2xsO1xuY29uc3QgZW5hYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmVuYWJsZUJvZHlTY3JvbGw7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpO1xuY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltZycpO1xuY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKTtcbmNvbnN0IG1vZGFsVGV4dEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fdGV4dC1ibG9jaycpO1xuY29uc3QgbW9kYWxWYWx1ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX192YWx1ZS10aXRsZScpO1xuY29uc3QgbW9kYWxWYWx1ZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlLWxpc3RfX2l0ZW0nKTtcbmNvbnN0IG1vZGFsQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hZGQtYmxvY2snKTtcbmNvbnN0IG1vZGFsQWRkTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYWRkLWxlZnQnKTtcblxuY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdHJpZ2dlcicpO1xuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsSW1nLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCAyMDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbFRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCAyMDApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsVGV4dEJsb2Nrc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgNDAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxUZXh0QmxvY2tzWzFdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCA2MDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbFZhbHVlVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDgwMCk7XG4gIFxuICBtb2RhbFZhbHVlSXRlbXMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH0sIDgwMCArIGkgKiAxMDApO1xuICB9KTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbEFkZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgNjAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbEFkZExlZnQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDgwMCk7XG5cbiAgaWYgKG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICBkaXNhYmxlQm9keVNjcm9sbCh0YXJnZXRFbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBlbmFibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2soZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICB0b2dnbGVNb2RhbCgpO1xuICB9XG59XG5cbnRyaWdnZXJzLmZvckVhY2goKGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlTW9kYWwoKTtcbiAgfSk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93T25DbGljayk7XG5cbm5ldyBHbGlkZSgnLmdsaWRlJywge1xuICAvLyB0eXBlOiAnY2Fyb3VzZWwnLFxuICBwZXJWaWV3OiAxMCxcbiAgLy8gZ2FwOiA0MCxcbn0pLm1vdW50KCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWctbGlzdF9fbGluaycpLmZvckVhY2goKGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsInRoaXMiLCJkaXNhYmxlQm9keVNjcm9sbCIsImJvZHlTY3JvbGxMb2NrIiwiZW5hYmxlQm9keVNjcm9sbCIsIm1vZGFsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0RWxlbWVudCIsIm1vZGFsSW1nIiwibW9kYWxUaXRsZSIsIm1vZGFsVGV4dEJsb2NrcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbFZhbHVlVGl0bGUiLCJtb2RhbFZhbHVlSXRlbXMiLCJtb2RhbEFkZCIsIm1vZGFsQWRkTGVmdCIsInRyaWdnZXJzIiwidG9nZ2xlTW9kYWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmb3JFYWNoIiwiZWwiLCJpIiwiY29udGFpbnMiLCJ3aW5kb3dPbkNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiR2xpZGUiLCJtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBT0EsU0FBTSxFQUFFQSxTQUFNLENBQUMsR0FBRyxDQUFDQSxTQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEFBQStCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxBQUFzQyxDQUFDLENBQUNDLGNBQUksQ0FBQyxTQUFTLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLGdIQUFnSCxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FB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QVE7S0FDcEJNLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUNDLENBQUQsRUFBTztNQUNoQ0MsY0FBRjs7R0FERjtDQURGOztBQU9BQyxPQUFPSCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0gsYUFBakM7O0FBRUEsSUFBSU8sT0FBSixDQUFVLFFBQVYsRUFBb0I7O1dBRVQ7O0NBRlgsRUFJR0MsS0FKSDs7QUFNQTNCLFNBQVNNLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q1MsT0FBN0MsQ0FBcUQsVUFBQ0MsRUFBRCxFQUFRO0tBQ3hETSxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFDQyxDQUFELEVBQU87TUFDaENDLGNBQUY7R0FERjtDQURGOzs7OyIsInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJanB1ZFd4c0xDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWhjblJsYld0aGJHOWxkaTlYWldKRGIyUnBibWN2ZEdWemRDMXdjbTlxWldOMEwyNXZaR1ZmYlc5a2RXeGxjeTlpYjJSNUxYTmpjbTlzYkMxc2IyTnJMMnhwWWk5aWIyUjVVMk55YjJ4c1RHOWpheTV0YVc0dWFuTWlMQ0l2VlhObGNuTXZZWEowWlcxcllXeHZaWFl2VjJWaVEyOWthVzVuTDNSbGMzUXRjSEp2YW1WamRDOXViMlJsWDIxdlpIVnNaWE12UUdkc2FXUmxhbk12WjJ4cFpHVXZaR2x6ZEM5bmJHbGtaUzVsYzIwdWFuTWlMQ0l2VlhObGNuTXZZWEowWlcxcllXeHZaWFl2VjJWaVEyOWthVzVuTDNSbGMzUXRjSEp2YW1WamRDOXpjbU12YzJOeWFYQjBjeTl0WVdsdUxtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlGbWRXNWpkR2x2YmlobExIUXBlMmxtS0Z3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlHUmxabWx1WlNZbVpHVm1hVzVsTG1GdFpDbGtaV1pwYm1Vb1cxd2laWGh3YjNKMGMxd2lYU3gwS1R0bGJITmxJR2xtS0Z3aWRXNWtaV1pwYm1Wa1hDSWhQWFI1Y0dWdlppQmxlSEJ2Y25SektYUW9aWGh3YjNKMGN5azdaV3h6Wlh0MllYSWdiejE3ZlR0MEtHOHBMR1V1WW05a2VWTmpjbTlzYkV4dlkyczliMzE5S0hSb2FYTXNablZ1WTNScGIyNG9aWGh3YjNKMGN5bDdYQ0oxYzJVZ2MzUnlhV04wWENJN1puVnVZM1JwYjI0Z2NpaGxLWHRwWmloQmNuSmhlUzVwYzBGeWNtRjVLR1VwS1h0bWIzSW9kbUZ5SUhROU1DeHZQVUZ5Y21GNUtHVXViR1Z1WjNSb0tUdDBQR1V1YkdWdVozUm9PM1FyS3lsdlczUmRQV1ZiZEYwN2NtVjBkWEp1SUc5OWNtVjBkWEp1SUVGeWNtRjVMbVp5YjIwb1pTbDlUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zWENKZlgyVnpUVzlrZFd4bFhDSXNlM1poYkhWbE9pRXdmU2s3ZG1GeUlHdzlJVEU3YVdZb1hDSjFibVJsWm1sdVpXUmNJaUU5ZEhsd1pXOW1JSGRwYm1SdmR5bDdkbUZ5SUdVOWUyZGxkQ0J3WVhOemFYWmxLQ2w3YkQwaE1IMTlPM2RwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lkR1Z6ZEZCaGMzTnBkbVZjSWl4dWRXeHNMR1VwTEhkcGJtUnZkeTV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWRHVnpkRkJoYzNOcGRtVmNJaXh1ZFd4c0xHVXBmWFpoY2lCa1BWd2lkVzVrWldacGJtVmtYQ0loUFhSNWNHVnZaaUIzYVc1a2IzY21KbmRwYm1SdmR5NXVZWFpwWjJGMGIzSW1KbmRwYm1SdmR5NXVZWFpwWjJGMGIzSXVjR3hoZEdadmNtMG1KaTlwVUNoaFpIeG9iMjVsZkc5a0tTOHVkR1Z6ZENoM2FXNWtiM2N1Ym1GMmFXZGhkRzl5TG5Cc1lYUm1iM0p0S1N4alBWdGRMSFU5SVRFc1lUMHRNU3h6UFhadmFXUWdNQ3gyUFhadmFXUWdNQ3htUFdaMWJtTjBhVzl1S0hRcGUzSmxkSFZ5YmlCakxuTnZiV1VvWm5WdVkzUnBiMjRvWlNsN2NtVjBkWEp1SVNnaFpTNXZjSFJwYjI1ekxtRnNiRzkzVkc5MVkyaE5iM1psZkh3aFpTNXZjSFJwYjI1ekxtRnNiRzkzVkc5MVkyaE5iM1psS0hRcEtYMHBmU3h0UFdaMWJtTjBhVzl1S0dVcGUzWmhjaUIwUFdWOGZIZHBibVJ2ZHk1bGRtVnVkRHR5WlhSMWNtNGhJV1lvZEM1MFlYSm5aWFFwZkh3b01UeDBMblJ2ZFdOb1pYTXViR1Z1WjNSb2ZId29kQzV3Y21WMlpXNTBSR1ZtWVhWc2RDWW1kQzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BMQ0V4S1NsOUxHODlablZ1WTNScGIyNG9LWHR6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1S0NsN2RtOXBaQ0F3SVQwOWRpWW1LR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1V1Y0dGa1pHbHVaMUpwWjJoMFBYWXNkajEyYjJsa0lEQXBMSFp2YVdRZ01DRTlQWE1tSmloa2IyTjFiV1Z1ZEM1aWIyUjVMbk4wZVd4bExtOTJaWEptYkc5M1BYTXNjejEyYjJsa0lEQXBmU2w5TzJWNGNHOXlkSE11WkdsellXSnNaVUp2WkhsVFkzSnZiR3c5Wm5WdVkzUnBiMjRvYVN4bEtYdHBaaWhrS1h0cFppZ2hhU2x5WlhSMWNtNGdkbTlwWkNCamIyNXpiMnhsTG1WeWNtOXlLRndpWkdsellXSnNaVUp2WkhsVFkzSnZiR3dnZFc1emRXTmpaWE56Wm5Wc0lDMGdkR0Z5WjJWMFJXeGxiV1Z1ZENCdGRYTjBJR0psSUhCeWIzWnBaR1ZrSUhkb1pXNGdZMkZzYkdsdVp5QmthWE5oWW14bFFtOWtlVk5qY205c2JDQnZiaUJKVDFNZ1pHVjJhV05sY3k1Y0lpazdhV1lvYVNZbUlXTXVjMjl0WlNobWRXNWpkR2x2YmlobEtYdHlaWFIxY200Z1pTNTBZWEpuWlhSRmJHVnRaVzUwUFQwOWFYMHBLWHQyWVhJZ2REMTdkR0Z5WjJWMFJXeGxiV1Z1ZERwcExHOXdkR2x2Ym5NNlpYeDhlMzE5TzJNOVcxMHVZMjl1WTJGMEtISW9ZeWtzVzNSZEtTeHBMbTl1ZEc5MVkyaHpkR0Z5ZEQxbWRXNWpkR2x2YmlobEtYc3hQVDA5WlM1MFlYSm5aWFJVYjNWamFHVnpMbXhsYm1kMGFDWW1LR0U5WlM1MFlYSm5aWFJVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmtwZlN4cExtOXVkRzkxWTJodGIzWmxQV1oxYm1OMGFXOXVLR1VwZTNaaGNpQjBMRzhzYml4eU96RTlQVDFsTG5SaGNtZGxkRlJ2ZFdOb1pYTXViR1Z1WjNSb0ppWW9iejFwTEhJOUtIUTlaU2t1ZEdGeVoyVjBWRzkxWTJobGMxc3dYUzVqYkdsbGJuUlpMV0VzSVdZb2RDNTBZWEpuWlhRcEppWW9ieVltTUQwOVBXOHVjMk55YjJ4c1ZHOXdKaVl3UEhJL2JTaDBLVG9vYmoxdktTWW1iaTV6WTNKdmJHeElaV2xuYUhRdGJpNXpZM0p2Ykd4VWIzQThQVzR1WTJ4cFpXNTBTR1ZwWjJoMEppWnlQREEvYlNoMEtUcDBMbk4wYjNCUWNtOXdZV2RoZEdsdmJpZ3BLU2w5TEhWOGZDaGtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lkRzkxWTJodGIzWmxYQ0lzYlN4c1AzdHdZWE56YVhabE9pRXhmVHAyYjJsa0lEQXBMSFU5SVRBcGZYMWxiSE5sZTI0OVpTeHpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2w3YVdZb2RtOXBaQ0F3UFQwOWRpbDdkbUZ5SUdVOUlTRnVKaVloTUQwOVBXNHVjbVZ6WlhKMlpWTmpjbTlzYkVKaGNrZGhjQ3gwUFhkcGJtUnZkeTVwYm01bGNsZHBaSFJvTFdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzVqYkdsbGJuUlhhV1IwYUR0bEppWXdQSFFtSmloMlBXUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVXVjR0ZrWkdsdVoxSnBaMmgwTEdSdlkzVnRaVzUwTG1KdlpIa3VjM1I1YkdVdWNHRmtaR2x1WjFKcFoyaDBQWFFyWENKd2VGd2lLWDEyYjJsa0lEQTlQVDF6SmlZb2N6MWtiMk4xYldWdWRDNWliMlI1TG5OMGVXeGxMbTkyWlhKbWJHOTNMR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1V1YjNabGNtWnNiM2M5WENKb2FXUmtaVzVjSWlsOUtUdDJZWElnYnoxN2RHRnlaMlYwUld4bGJXVnVkRHBwTEc5d2RHbHZibk02Wlh4OGUzMTlPMk05VzEwdVkyOXVZMkYwS0hJb1l5a3NXMjlkS1gxMllYSWdibjBzWlhod2IzSjBjeTVqYkdWaGNrRnNiRUp2WkhsVFkzSnZiR3hNYjJOcmN6MW1kVzVqZEdsdmJpZ3BlMlEvS0dNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlobEtYdGxMblJoY21kbGRFVnNaVzFsYm5RdWIyNTBiM1ZqYUhOMFlYSjBQVzUxYkd3c1pTNTBZWEpuWlhSRmJHVnRaVzUwTG05dWRHOTFZMmh0YjNabFBXNTFiR3g5S1N4MUppWW9aRzlqZFcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWhjSW5SdmRXTm9iVzkyWlZ3aUxHMHNiRDk3Y0dGemMybDJaVG9oTVgwNmRtOXBaQ0F3S1N4MVBTRXhLU3hqUFZ0ZExHRTlMVEVwT2lodktDa3NZejFiWFNsOUxHVjRjRzl5ZEhNdVpXNWhZbXhsUW05a2VWTmpjbTlzYkQxbWRXNWpkR2x2YmloMEtYdHBaaWhrS1h0cFppZ2hkQ2x5WlhSMWNtNGdkbTlwWkNCamIyNXpiMnhsTG1WeWNtOXlLRndpWlc1aFlteGxRbTlrZVZOamNtOXNiQ0IxYm5OMVkyTmxjM05tZFd3Z0xTQjBZWEpuWlhSRmJHVnRaVzUwSUcxMWMzUWdZbVVnY0hKdmRtbGtaV1FnZDJobGJpQmpZV3hzYVc1bklHVnVZV0pzWlVKdlpIbFRZM0p2Ykd3Z2IyNGdTVTlUSUdSbGRtbGpaWE11WENJcE8zUXViMjUwYjNWamFITjBZWEowUFc1MWJHd3NkQzV2Ym5SdmRXTm9iVzkyWlQxdWRXeHNMR005WXk1bWFXeDBaWElvWm5WdVkzUnBiMjRvWlNsN2NtVjBkWEp1SUdVdWRHRnlaMlYwUld4bGJXVnVkQ0U5UFhSOUtTeDFKaVl3UFQwOVl5NXNaVzVuZEdnbUppaGtiMk4xYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRndpZEc5MVkyaHRiM1psWENJc2JTeHNQM3R3WVhOemFYWmxPaUV4ZlRwMmIybGtJREFwTEhVOUlURXBmV1ZzYzJVZ01UMDlQV011YkdWdVozUm9KaVpqV3pCZExuUmhjbWRsZEVWc1pXMWxiblE5UFQxMFB5aHZLQ2tzWXoxYlhTazZZejFqTG1acGJIUmxjaWhtZFc1amRHbHZiaWhsS1h0eVpYUjFjbTRnWlM1MFlYSm5aWFJGYkdWdFpXNTBJVDA5ZEgwcGZYMHBPMXh1SWl3aUx5b2hYRzRnS2lCSGJHbGtaUzVxY3lCMk15NHlMalJjYmlBcUlDaGpLU0F5TURFekxUSXdNVGdnU3NTWlpISjZaV29nUTJoaHhZSjFZbVZySUR4cVpXUnllbVZxTG1Ob1lXeDFZbVZyUUdkdFlXbHNMbU52YlQ0Z0tHaDBkSEE2THk5cVpXUnllbVZxWTJoaGJIVmlaV3N1WTI5dEx5bGNiaUFxSUZKbGJHVmhjMlZrSUhWdVpHVnlJSFJvWlNCTlNWUWdUR2xqWlc1elpTNWNiaUFxTDF4dVhHNTJZWElnWkdWbVlYVnNkSE1nUFNCN1hHNGdJQzhxS2x4dUlDQWdLaUJVZVhCbElHOW1JSFJvWlNCdGIzWmxiV1Z1ZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dRWFpoYVd4aFlteGxJSFI1Y0dWek9seHVJQ0FnS2lCZ2MyeHBaR1Z5WUNBdElGSmxkMmx1WkhNZ2MyeHBaR1Z5SUhSdklIUm9aU0J6ZEdGeWRDOWxibVFnZDJobGJpQnBkQ0J5WldGamFHVnpJSFJvWlNCbWFYSnpkQ0J2Y2lCc1lYTjBJSE5zYVdSbExseHVJQ0FnS2lCZ1kyRnliM1Z6Wld4Z0lDMGdRMmhoYm1kbGN5QnpiR2xrWlhNZ2QybDBhRzkxZENCemRHRnlkR2x1WnlCdmRtVnlJSGRvWlc0Z2FYUWdjbVZoWTJobGN5QjBhR1VnWm1seWMzUWdiM0lnYkdGemRDQnpiR2xrWlM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UxTjBjbWx1WjMxY2JpQWdJQ292WEc0Z0lIUjVjR1U2SUNkemJHbGtaWEluTEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJUZEdGeWRDQmhkQ0J6Y0dWamFXWnBZeUJ6Ykdsa1pTQnVkVzFpWlhJZ1pHVm1hVzVsWkNCM2FYUm9JSHBsY204dFltRnpaV1FnYVc1a1pYZ3VYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRPZFcxaVpYSjlYRzRnSUNBcUwxeHVJQ0J6ZEdGeWRFRjBPaUF3TEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJCSUc1MWJXSmxjaUJ2WmlCemJHbGtaWE1nZG1semFXSnNaU0J2YmlCMGFHVWdjMmx1WjJ4bElIWnBaWGR3YjNKMExseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ0FnS2k5Y2JpQWdjR1Z5Vm1sbGR6b2dNU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSbTlqZFhNZ1kzVnljbVZ1ZEd4NUlHRmpkR2wyWlNCemJHbGtaU0JoZENCaElITndaV05wWm1sbFpDQndiM05wZEdsdmJpQnBiaUIwYUdVZ2RISmhZMnN1WEc0Z0lDQXFYRzRnSUNBcUlFRjJZV2xzWVdKc1pTQnBibkIxZEhNNlhHNGdJQ0FxSUdCalpXNTBaWEpnSUMwZ1EzVnljbVZ1ZENCemJHbGtaU0IzYVd4c0lHSmxJR0ZzZDJGNWN5Qm1iMk4xYzJWa0lHRjBJSFJvWlNCalpXNTBaWElnYjJZZ1lTQjBjbUZqYXk1Y2JpQWdJQ29nWURBc01Td3lMRE11TGk1Z0lDMGdRM1Z5Y21WdWRDQnpiR2xrWlNCM2FXeHNJR0psSUdadlkzVnpaV1FnYjI0Z2RHaGxJSE53WldOcFptbGxaQ0I2WlhKdkxXSmhjMlZrSUdsdVpHVjRMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VTNSeWFXNW5mRTUxYldKbGNuMWNiaUFnSUNvdlhHNGdJR1p2WTNWelFYUTZJREFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUVnYzJsNlpTQnZaaUIwYUdVZ1oyRndJR0ZrWkdWa0lHSmxkSGRsWlc0Z2MyeHBaR1Z6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1oyRndPaUF4TUN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUTJoaGJtZGxJSE5zYVdSbGN5QmhablJsY2lCaElITndaV05wWm1sbFpDQnBiblJsY25aaGJDNGdWWE5sSUdCbVlXeHpaV0FnWm05eUlIUjFjbTVwYm1jZ2IyWm1JR0YxZEc5d2JHRjVMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmRUp2YjJ4bFlXNTlYRzRnSUNBcUwxeHVJQ0JoZFhSdmNHeGhlVG9nWm1Gc2MyVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBiM0FnWVhWMGIzQnNZWGtnYjI0Z2JXOTFjMlZ2ZG1WeUlHVjJaVzUwTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1FtOXZiR1ZoYm4xY2JpQWdJQ292WEc0Z0lHaHZkbVZ5Y0dGMWMyVTZJSFJ5ZFdVc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGc2JHOTNJR1p2Y2lCamFHRnVaMmx1WnlCemJHbGtaWE1nZDJsMGFDQnNaV1owSUdGdVpDQnlhV2RvZENCclpYbGliMkZ5WkNCaGNuSnZkM011WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdLaTljYmlBZ2EyVjVZbTloY21RNklIUnlkV1VzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRk4wYjNBZ2NuVnVibWx1WnlCZ2NHVnlWbWxsZDJBZ2JuVnRZbVZ5SUc5bUlITnNhV1JsY3lCbWNtOXRJSFJvWlNCbGJtUXVJRlZ6WlNCMGFHbHpYRzRnSUNBcUlHOXdkR2x2YmlCcFppQjViM1VnWkc5dUozUWdkMkZ1ZENCMGJ5Qm9ZWFpsSUdGdUlHVnRjSFI1SUhOd1lXTmxJR0ZtZEdWeVhHNGdJQ0FxSUdFZ2MyeHBaR1Z5TGlCWGIzSnJjeUJ2Ym14NUlIZHBkR2dnWUhOc2FXUmxjbUFnZEhsd1pTQmhibVFnWVZ4dUlDQWdLaUJ1YjI0dFkyVnVkR1Z5WldRZ1lHWnZZM1Z6UVhSZ0lITmxkSFJwYm1jdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdENiMjlzWldGdWZWeHVJQ0FnS2k5Y2JpQWdZbTkxYm1RNklHWmhiSE5sTEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJOYVc1cGJXRnNJSE4zYVhCbElHUnBjM1JoYm1ObElHNWxaV1JsWkNCMGJ5QmphR0Z1WjJVZ2RHaGxJSE5zYVdSbExpQlZjMlVnWUdaaGJITmxZQ0JtYjNJZ2RIVnlibWx1WnlCdlptWWdZU0J6ZDJsd2FXNW5MbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmRUp2YjJ4bFlXNTlYRzRnSUNBcUwxeHVJQ0J6ZDJsd1pWUm9jbVZ6YUc5c1pEb2dPREFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRTFwYm1sdFlXd2diVzkxYzJVZ1pISmhaeUJrYVhOMFlXNWpaU0J1WldWa1pXUWdkRzhnWTJoaGJtZGxJSFJvWlNCemJHbGtaUzRnVlhObElHQm1ZV3h6WldBZ1ptOXlJSFIxY201cGJtY2diMlptSUdFZ1pISmhaMmRwYm1jdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOFFtOXZiR1ZoYm4xY2JpQWdJQ292WEc0Z0lHUnlZV2RVYUhKbGMyaHZiR1E2SURFeU1DeGNibHh1SUNBdktpcGNiaUFnSUNvZ1FTQnRZWGhwYlhWdElHNTFiV0psY2lCdlppQnpiR2xrWlhNZ2RHOGdkMmhwWTJnZ2JXOTJaVzFsYm5RZ2QybHNiQ0JpWlNCdFlXUmxJRzl1SUhOM2FYQnBibWNnYjNJZ1pISmhaMmRwYm1jdUlGVnpaU0JnWm1Gc2MyVmdJR1p2Y2lCMWJteHBiV2wwWldRdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOFFtOXZiR1ZoYm4xY2JpQWdJQ292WEc0Z0lIQmxjbFJ2ZFdOb09pQm1ZV3h6WlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVFc5MmFXNW5JR1JwYzNSaGJtTmxJSEpoZEdsdklHOW1JSFJvWlNCemJHbGtaWE1nYjI0Z1lTQnpkMmx3YVc1bklHRnVaQ0JrY21GbloybHVaeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBZ0lDb3ZYRzRnSUhSdmRXTm9VbUYwYVc4NklEQXVOU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRVzVuYkdVZ2NtVnhkV2x5WldRZ2RHOGdZV04wYVhaaGRHVWdjMnhwWkdWeklHMXZkbWx1WnlCdmJpQnpkMmx3YVc1bklHOXlJR1J5WVdkbmFXNW5MbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNBZ0tpOWNiaUFnZEc5MVkyaEJibWRzWlRvZ05EVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFUjFjbUYwYVc5dUlHOW1JSFJvWlNCaGJtbHRZWFJwYjI0Z2FXNGdiV2xzYkdselpXTnZibVJ6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1lXNXBiV0YwYVc5dVJIVnlZWFJwYjI0NklEUXdNQ3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRV3hzYjNkeklHeHZiM0JwYm1jZ2RHaGxJR0J6Ykdsa1pYSmdJSFI1Y0dVdUlGTnNhV1JsY2lCM2FXeHNJSEpsZDJsdVpDQjBieUIwYUdVZ1ptbHljM1F2YkdGemRDQnpiR2xrWlNCM2FHVnVJR2wwSjNNZ1lYUWdkR2hsSUhOMFlYSjBMMlZ1WkM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQnlaWGRwYm1RNklIUnlkV1VzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVIxY21GMGFXOXVJRzltSUhSb1pTQnlaWGRwYm1ScGJtY2dZVzVwYldGMGFXOXVJRzltSUhSb1pTQmdjMnhwWkdWeVlDQjBlWEJsSUdsdUlHMXBiR3hwYzJWamIyNWtjeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBZ0lDb3ZYRzRnSUhKbGQybHVaRVIxY21GMGFXOXVPaUE0TURBc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVWaGMybHVaeUJtZFc1amRHbHZiaUJtYjNJZ2RHaGxJR0Z1YVcxaGRHbHZiaTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTFOMGNtbHVaMzFjYmlBZ0lDb3ZYRzRnSUdGdWFXMWhkR2x2YmxScGJXbHVaMFoxYm1NNklDZGpkV0pwWXkxaVpYcHBaWElvTGpFMk5Td2dMamcwTUN3Z0xqUTBNQ3dnTVNrbkxGeHVYRzRnSUM4cUtseHVJQ0FnS2lCVWFISnZkSFJzWlNCamIzTjBiSGtnWlhabGJuUnpJR0YwSUcxdmMzUWdiMjVqWlNCd1pYSWdaWFpsY25rZ2QyRnBkQ0J0YVd4c2FYTmxZMjl1WkhNdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOVhHNGdJQ0FxTDF4dUlDQjBhSEp2ZEhSc1pUb2dNVEFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRTF2ZG1sdVp5QmthWEpsWTNScGIyNGdiVzlrWlM1Y2JpQWdJQ3BjYmlBZ0lDb2dRWFpoYVd4aFlteGxJR2x1Y0hWMGN6cGNiaUFnSUNvZ0xTQW5iSFJ5SnlBdElHeGxablFnZEc4Z2NtbG5hSFFnYlc5MlpXMWxiblFzWEc0Z0lDQXFJQzBnSjNKMGJDY2dMU0J5YVdkb2RDQjBieUJzWldaMElHMXZkbVZ0Wlc1MExseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdVM1J5YVc1bmZWeHVJQ0FnS2k5Y2JpQWdaR2x5WldOMGFXOXVPaUFuYkhSeUp5eGNibHh1SUNBdktpcGNiaUFnSUNvZ1ZHaGxJR1JwYzNSaGJtTmxJSFpoYkhWbElHOW1JSFJvWlNCdVpYaDBJR0Z1WkNCd2NtVjJhVzkxY3lCMmFXVjNjRzl5ZEhNZ2QyaHBZMmhjYmlBZ0lDb2dhR0YyWlNCMGJ5QndaV1ZySUdsdUlIUm9aU0JqZFhKeVpXNTBJSFpwWlhjdUlFRmpZMlZ3ZEhNZ2JuVnRZbVZ5SUdGdVpGeHVJQ0FnS2lCd2FYaGxiSE1nWVhNZ1lTQnpkSEpwYm1jdUlFeGxablFnWVc1a0lISnBaMmgwSUhCbFpXdHBibWNnWTJGdUlHSmxYRzRnSUNBcUlITmxkQ0IxY0NCelpYQmhjbUYwWld4NUlIZHBkR2dnWVNCa2FYSmxZM1JwYjI1eklHOWlhbVZqZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dSbTl5SUdWNFlXMXdiR1U2WEc0Z0lDQXFJR0F4TURCZ0lDMGdVR1ZsYXlBeE1EQndlQ0J2YmlCMGFHVWdZbTkwYUNCemFXUmxjeTVjYmlBZ0lDb2dleUJpWldadmNtVTZJREV3TUN3Z1lXWjBaWEk2SURVd0lIMWdJQzBnVUdWbGF5QXhNREJ3ZUNCdmJpQjBhR1VnYkdWbWRDQnphV1JsSUdGdVpDQTFNSEI0SUc5dUlIUm9aU0J5YVdkb2RDQnphV1JsTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZkZOMGNtbHVaM3hQWW1wbFkzUjlYRzRnSUNBcUwxeHVJQ0J3WldWck9pQXdMRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkRiMnhzWldOMGFXOXVJRzltSUc5d2RHbHZibk1nWVhCd2JHbGxaQ0JoZENCemNHVmphV1pwWldRZ2JXVmthV0VnWW5KbFlXdHdiMmx1ZEhNdVhHNGdJQ0FxSUVadmNpQmxlR0Z0Y0d4bE9pQmthWE53YkdGNUlIUjNieUJ6Ykdsa1pYTWdjR1Z5SUhacFpYY2dkVzVrWlhJZ09EQXdjSGd1WEc0Z0lDQXFJR0I3WEc0Z0lDQXFJQ0FnSnpnd01IQjRKem9nZTF4dUlDQWdLaUFnSUNBZ2NHVnlWbWxsZHpvZ01seHVJQ0FnS2lBZ0lIMWNiaUFnSUNvZ2ZXQmNiaUFnSUNvdlhHNGdJR0p5WldGcmNHOXBiblJ6T2lCN2ZTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1EyOXNiR1ZqZEdsdmJpQnZaaUJwYm5SbGNtNWhiR3g1SUhWelpXUWdTRlJOVENCamJHRnpjMlZ6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkRzlrYnlCU1pXWmhZM1J2Y2lCZ2MyeHBaR1Z5WUNCaGJtUWdZR05oY205MWMyVnNZQ0J3Y205d1pYSjBhV1Z6SUhSdklITnBibWRzWlNCZ2RIbHdaVG9nZXlCemJHbGtaWEk2SUNjbkxDQmpZWEp2ZFhObGJEb2dKeWNnZldBZ2IySnFaV04wWEc0Z0lDQXFJRUIwZVhCbElIdFBZbXBsWTNSOVhHNGdJQ0FxTDF4dUlDQmpiR0Z6YzJWek9pQjdYRzRnSUNBZ1pHbHlaV04wYVc5dU9pQjdYRzRnSUNBZ0lDQnNkSEk2SUNkbmJHbGtaUzB0YkhSeUp5eGNiaUFnSUNBZ0lISjBiRG9nSjJkc2FXUmxMUzF5ZEd3blhHNGdJQ0FnZlN4Y2JpQWdJQ0J6Ykdsa1pYSTZJQ2RuYkdsa1pTMHRjMnhwWkdWeUp5eGNiaUFnSUNCallYSnZkWE5sYkRvZ0oyZHNhV1JsTFMxallYSnZkWE5sYkNjc1hHNGdJQ0FnYzNkcGNHVmhZbXhsT2lBbloyeHBaR1V0TFhOM2FYQmxZV0pzWlNjc1hHNGdJQ0FnWkhKaFoyZHBibWM2SUNkbmJHbGtaUzB0WkhKaFoyZHBibWNuTEZ4dUlDQWdJR05zYjI1bFUyeHBaR1U2SUNkbmJHbGtaVjlmYzJ4cFpHVXRMV05zYjI1bEp5eGNiaUFnSUNCaFkzUnBkbVZPWVhZNklDZG5iR2xrWlY5ZlluVnNiR1YwTFMxaFkzUnBkbVVuTEZ4dUlDQWdJR0ZqZEdsMlpWTnNhV1JsT2lBbloyeHBaR1ZmWDNOc2FXUmxMUzFoWTNScGRtVW5MRnh1SUNBZ0lHUnBjMkZpYkdWa1FYSnliM2M2SUNkbmJHbGtaVjlmWVhKeWIzY3RMV1JwYzJGaWJHVmtKMXh1SUNCOVhHNTlPMXh1WEc0dktpcGNiaUFxSUU5MWRIQjFkSE1nZDJGeWJtbHVaeUJ0WlhOellXZGxJSFJ2SUhSb1pTQmliM2R6WlhJZ1kyOXVjMjlzWlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUh0VGRISnBibWQ5SUcxeloxeHVJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2QyRnliaWh0YzJjcElIdGNiaUFnWTI5dWMyOXNaUzVsY25KdmNpaGNJbHRIYkdsa1pTQjNZWEp1WFRvZ1hDSWdLeUJ0YzJjcE8xeHVmVnh1WEc1MllYSWdYM1I1Y0dWdlppQTlJSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBbUppQjBlWEJsYjJZZ1UzbHRZbTlzTG1sMFpYSmhkRzl5SUQwOVBTQmNJbk41YldKdmJGd2lJRDhnWm5WdVkzUnBiMjRnS0c5aWFpa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JRzlpYWp0Y2JuMGdPaUJtZFc1amRHbHZiaUFvYjJKcUtTQjdYRzRnSUhKbGRIVnliaUJ2WW1vZ0ppWWdkSGx3Wlc5bUlGTjViV0p2YkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlHOWlhaTVqYjI1emRISjFZM1J2Y2lBOVBUMGdVM2x0WW05c0lDWW1JRzlpYWlBaFBUMGdVM2x0WW05c0xuQnliM1J2ZEhsd1pTQS9JRndpYzNsdFltOXNYQ0lnT2lCMGVYQmxiMllnYjJKcU8xeHVmVHRjYmx4dWRtRnlJR05zWVhOelEyRnNiRU5vWldOcklEMGdablZ1WTNScGIyNGdLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2UxeHVJQ0JwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzV1YjNRZ1kyRnNiQ0JoSUdOc1lYTnpJR0Z6SUdFZ1puVnVZM1JwYjI1Y0lpazdYRzRnSUgxY2JuMDdYRzVjYm5aaGNpQmpjbVZoZEdWRGJHRnpjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnWm5WdVkzUnBiMjRnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWgwWVhKblpYUXNJSEJ5YjNCektTQjdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQndjbTl3Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZ5SUdSbGMyTnlhWEIwYjNJZ1BTQndjbTl3YzF0cFhUdGNiaUFnSUNBZ0lHUmxjMk55YVhCMGIzSXVaVzUxYldWeVlXSnNaU0E5SUdSbGMyTnlhWEIwYjNJdVpXNTFiV1Z5WVdKc1pTQjhmQ0JtWVd4elpUdGNiaUFnSUNBZ0lHUmxjMk55YVhCMGIzSXVZMjl1Wm1sbmRYSmhZbXhsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJR2xtSUNoY0luWmhiSFZsWENJZ2FXNGdaR1Z6WTNKcGNIUnZjaWtnWkdWelkzSnBjSFJ2Y2k1M2NtbDBZV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2RHRnlaMlYwTENCa1pYTmpjbWx3ZEc5eUxtdGxlU3dnWkdWelkzSnBjSFJ2Y2lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoRGIyNXpkSEoxWTNSdmNpd2djSEp2ZEc5UWNtOXdjeXdnYzNSaGRHbGpVSEp2Y0hNcElIdGNiaUFnSUNCcFppQW9jSEp2ZEc5UWNtOXdjeWtnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWhEYjI1emRISjFZM1J2Y2k1d2NtOTBiM1I1Y0dVc0lIQnliM1J2VUhKdmNITXBPMXh1SUNBZ0lHbG1JQ2h6ZEdGMGFXTlFjbTl3Y3lrZ1pHVm1hVzVsVUhKdmNHVnlkR2xsY3loRGIyNXpkSEoxWTNSdmNpd2djM1JoZEdsalVISnZjSE1wTzF4dUlDQWdJSEpsZEhWeWJpQkRiMjV6ZEhKMVkzUnZjanRjYmlBZ2ZUdGNibjBvS1R0Y2JseHVkbUZ5SUY5bGVIUmxibVJ6SUQwZ1QySnFaV04wTG1GemMybG5iaUI4ZkNCbWRXNWpkR2x2YmlBb2RHRnlaMlYwS1NCN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2RtRnlJSE52ZFhKalpTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JseHVJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUJ6YjNWeVkyVXBJSHRjYmlBZ0lDQWdJR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2MyOTFjbU5sTENCclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUhSaGNtZGxkRnRyWlhsZElEMGdjMjkxY21ObFcydGxlVjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFJoY21kbGREdGNibjA3WEc1Y2JuWmhjaUJuWlhRZ1BTQm1kVzVqZEdsdmJpQm5aWFFvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU3dnY21WalpXbDJaWElwSUh0Y2JpQWdhV1lnS0c5aWFtVmpkQ0E5UFQwZ2JuVnNiQ2tnYjJKcVpXTjBJRDBnUm5WdVkzUnBiMjR1Y0hKdmRHOTBlWEJsTzF4dUlDQjJZWElnWkdWell5QTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVVSbGMyTnlhWEIwYjNJb2IySnFaV04wTENCd2NtOXdaWEowZVNrN1hHNWNiaUFnYVdZZ0tHUmxjMk1nUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIWmhjaUJ3WVhKbGJuUWdQU0JQWW1wbFkzUXVaMlYwVUhKdmRHOTBlWEJsVDJZb2IySnFaV04wS1R0Y2JseHVJQ0FnSUdsbUlDaHdZWEpsYm5RZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm5aWFFvY0dGeVpXNTBMQ0J3Y205d1pYSjBlU3dnY21WalpXbDJaWElwTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUdsbUlDaGNJblpoYkhWbFhDSWdhVzRnWkdWell5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCa1pYTmpMblpoYkhWbE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIWmhjaUJuWlhSMFpYSWdQU0JrWlhOakxtZGxkRHRjYmx4dUlDQWdJR2xtSUNoblpYUjBaWElnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMGRHVnlMbU5oYkd3b2NtVmpaV2wyWlhJcE8xeHVJQ0I5WEc1OU8xeHVYRzUyWVhJZ2FXNW9aWEpwZEhNZ1BTQm1kVzVqZEdsdmJpQW9jM1ZpUTJ4aGMzTXNJSE4xY0dWeVEyeGhjM01wSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ6ZFhCbGNrTnNZWE56SUNFOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2MzVndaWEpEYkdGemN5QWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YQ0pUZFhCbGNpQmxlSEJ5WlhOemFXOXVJRzExYzNRZ1pXbDBhR1Z5SUdKbElHNTFiR3dnYjNJZ1lTQm1kVzVqZEdsdmJpd2dibTkwSUZ3aUlDc2dkSGx3Wlc5bUlITjFjR1Z5UTJ4aGMzTXBPMXh1SUNCOVhHNWNiaUFnYzNWaVEyeGhjM011Y0hKdmRHOTBlWEJsSUQwZ1QySnFaV04wTG1OeVpXRjBaU2h6ZFhCbGNrTnNZWE56SUNZbUlITjFjR1Z5UTJ4aGMzTXVjSEp2ZEc5MGVYQmxMQ0I3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0k2SUh0Y2JpQWdJQ0FnSUhaaGJIVmxPaUJ6ZFdKRGJHRnpjeXhjYmlBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUdaaGJITmxMRnh1SUNBZ0lDQWdkM0pwZEdGaWJHVTZJSFJ5ZFdVc1hHNGdJQ0FnSUNCamIyNW1hV2QxY21GaWJHVTZJSFJ5ZFdWY2JpQWdJQ0I5WEc0Z0lIMHBPMXh1SUNCcFppQW9jM1Z3WlhKRGJHRnpjeWtnVDJKcVpXTjBMbk5sZEZCeWIzUnZkSGx3WlU5bUlEOGdUMkpxWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltS0hOMVlrTnNZWE56TENCemRYQmxja05zWVhOektTQTZJSE4xWWtOc1lYTnpMbDlmY0hKdmRHOWZYeUE5SUhOMWNHVnlRMnhoYzNNN1hHNTlPMXh1WEc1MllYSWdjRzl6YzJsaWJHVkRiMjV6ZEhKMVkzUnZjbEpsZEhWeWJpQTlJR1oxYm1OMGFXOXVJQ2h6Wld4bUxDQmpZV3hzS1NCN1hHNGdJR2xtSUNnaGMyVnNaaWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJTWldabGNtVnVZMlZGY25KdmNpaGNJblJvYVhNZ2FHRnpiaWQwSUdKbFpXNGdhVzVwZEdsaGJHbHpaV1FnTFNCemRYQmxjaWdwSUdoaGMyNG5kQ0JpWldWdUlHTmhiR3hsWkZ3aUtUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmpZV3hzSUNZbUlDaDBlWEJsYjJZZ1kyRnNiQ0E5UFQwZ1hDSnZZbXBsWTNSY0lpQjhmQ0IwZVhCbGIyWWdZMkZzYkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpS1NBL0lHTmhiR3dnT2lCelpXeG1PMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkRiMjUyWlhKMGN5QjJZV3gxWlNCbGJuUmxjbVZrSUdGeklHNTFiV0psY2x4dUlDb2diM0lnYzNSeWFXNW5JSFJ2SUdsdWRHVm5aWElnZG1Gc2RXVXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlIWmhiSFZsWEc0Z0tpQkFjbVYwZFhKdWN5QjdUblZ0WW1WeWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCMGIwbHVkQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnY0dGeWMyVkpiblFvZG1Gc2RXVXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFTnZiblpsY25SeklIWmhiSFZsSUdWdWRHVnlaV1FnWVhNZ2JuVnRZbVZ5WEc0Z0tpQnZjaUJ6ZEhKcGJtY2dkRzhnWm14aGRDQjJZV3gxWlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnZG1Gc2RXVmNiaUFxSUVCeVpYUjFjbTV6SUh0T2RXMWlaWEo5WEc0Z0tpOWNibVoxYm1OMGFXOXVJSFJ2Um14dllYUW9kbUZzZFdVcElIdGNiaUFnY21WMGRYSnVJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nWVNCemRISnBibWN1WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3S24wZ0lDQjJZV3gxWlZ4dUlDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0ozTjBjbWx1WnljN1hHNTlYRzVjYmk4cUtseHVJQ29nU1c1a2FXTmhkR1Z6SUhkb1pYUm9aWElnZEdobElITndaV05wWm1sbFpDQjJZV3gxWlNCcGN5QmhiaUJ2WW1wbFkzUXVYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdLbjBnZG1Gc2RXVmNiaUFxSUVCeVpYUjFjbTRnZTBKdmIyeGxZVzU5WEc0Z0tseHVJQ29nUUhObFpTQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhbUZ6YUd0bGJtRnpMM1Z1WkdWeWMyTnZjbVZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5QWW1wbFkzUW9kbUZzZFdVcElIdGNiaUFnZG1GeUlIUjVjR1VnUFNCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkMWJtUmxabWx1WldRbklEOGdKM1Z1WkdWbWFXNWxaQ2NnT2lCZmRIbHdaVzltS0haaGJIVmxLVHRjYmx4dUlDQnlaWFIxY200Z2RIbHdaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QjhmQ0IwZVhCbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlBaElYWmhiSFZsT3lBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFcxcGVHVmtMVzl3WlhKaGRHOXljMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nWVNCdWRXMWlaWEl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3S24wZ2RtRnNkV1ZjYmlBcUlFQnlaWFIxY200Z2UwSnZiMnhsWVc1OVhHNGdLaTljYm1aMWJtTjBhVzl1SUdselRuVnRZbVZ5S0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdWRXMWlaWEluTzF4dWZWeHVYRzR2S2lwY2JpQXFJRWx1WkdsallYUmxjeUIzYUdWMGFHVnlJSFJvWlNCemNHVmphV1pwWldRZ2RtRnNkV1VnYVhNZ1lTQm1kVzVqZEdsdmJpNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ0lIc3FmU0IyWVd4MVpWeHVJQ29nUUhKbGRIVnliaUI3UW05dmJHVmhibjFjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5HZFc1amRHbHZiaWgyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuWm5WdVkzUnBiMjRuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRWx1WkdsallYUmxjeUIzYUdWMGFHVnlJSFJvWlNCemNHVmphV1pwWldRZ2RtRnNkV1VnYVhNZ2RXNWtaV1pwYm1Wa0xseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2V5cDlJSFpoYkhWbFhHNGdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMVZ1WkdWbWFXNWxaQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuZFc1a1pXWnBibVZrSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJKYm1ScFkyRjBaWE1nZDJobGRHaGxjaUIwYUdVZ2MzQmxZMmxtYVdWa0lIWmhiSFZsSUdseklHRnVJR0Z5Y21GNUxseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2V5cDlJSFpoYkhWbFhHNGdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEZ5Y21GNUtIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQjJZV3gxWlM1amIyNXpkSEoxWTNSdmNpQTlQVDBnUVhKeVlYazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaGJtUWdhVzVwZEdsaGJHbDZaWE1nYzNCbFkybG1hV1ZrSUdOdmJHeGxZM1JwYjI0Z2IyWWdaWGgwWlc1emFXOXVjeTVjYmlBcUlFVmhZMmdnWlhoMFpXNXphVzl1SUhKbFkyVnBkbVZ6SUdGalkyVnpjeUIwYnlCcGJuTjBZVzVqWlNCdlppQm5iR2xrWlNCaGJtUWdjbVZ6ZENCdlppQmpiMjF3YjI1bGJuUnpMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQm5iR2xrWlZ4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHVjRkR1Z1YzJsdmJuTmNiaUFxWEc0Z0tpQkFjbVYwZFhKdWN5QjdUMkpxWldOMGZWeHVJQ292WEc1bWRXNWpkR2x2YmlCdGIzVnVkQ2huYkdsa1pTd2daWGgwWlc1emFXOXVjeXdnWlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJqYjIxd2IyNWxiblJ6SUQwZ2UzMDdYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2JtRnRaU0JwYmlCbGVIUmxibk5wYjI1ektTQjdYRzRnSUNBZ2FXWWdLR2x6Um5WdVkzUnBiMjRvWlhoMFpXNXphVzl1YzF0dVlXMWxYU2twSUh0Y2JpQWdJQ0FnSUdOdmJYQnZibVZ1ZEhOYmJtRnRaVjBnUFNCbGVIUmxibk5wYjI1elcyNWhiV1ZkS0dkc2FXUmxMQ0JqYjIxd2IyNWxiblJ6TENCbGRtVnVkSE1wTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjNZWEp1S0NkRmVIUmxibk5wYjI0Z2JYVnpkQ0JpWlNCaElHWjFibU4wYVc5dUp5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdabTl5SUNoMllYSWdYMjVoYldVZ2FXNGdZMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQWdJR2xtSUNocGMwWjFibU4wYVc5dUtHTnZiWEJ2Ym1WdWRITmJYMjVoYldWZExtMXZkVzUwS1NrZ2UxeHVJQ0FnSUNBZ1kyOXRjRzl1Wlc1MGMxdGZibUZ0WlYwdWJXOTFiblFvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWTI5dGNHOXVaVzUwY3p0Y2JuMWNibHh1THlvcVhHNGdLaUJFWldacGJtVnpJR2RsZEhSbGNpQmhibVFnYzJWMGRHVnlJSEJ5YjNCbGNuUjVJRzl1SUhSb1pTQnpjR1ZqYVdacFpXUWdiMkpxWldOMExseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ2IySnFJQ0FnSUNBZ0lDQWdUMkpxWldOMElIZG9aWEpsSUhCeWIzQmxjblI1SUdoaGN5QjBieUJpWlNCa1pXWnBibVZrTGx4dUlDb2dRSEJoY21GdElDQjdVM1J5YVc1bmZTQndjbTl3SUNBZ0lDQWdJQ0JPWVcxbElHOW1JSFJvWlNCa1pXWnBibVZrSUhCeWIzQmxjblI1TGx4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQmtaV1pwYm1sMGFXOXVJQ0JIWlhRZ1lXNWtJSE5sZENCa1pXWnBibWwwYVc5dWN5Qm1iM0lnZEdobElIQnliM0JsY25SNUxseHVJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1pHVm1hVzVsS0c5aWFpd2djSEp2Y0N3Z1pHVm1hVzVwZEdsdmJpa2dlMXh1SUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29iMkpxTENCd2NtOXdMQ0JrWldacGJtbDBhVzl1S1R0Y2JuMWNibHh1THlvcVhHNGdLaUJUYjNKMGN5QmhjR2hoWW1WMGFXTmhiR3g1SUc5aWFtVmpkQ0JyWlhsekxseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ2IySnFYRzRnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0tpOWNibVoxYm1OMGFXOXVJSE52Y25STFpYbHpLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdUMkpxWldOMExtdGxlWE1vYjJKcUtTNXpiM0owS0NrdWNtVmtkV05sS0daMWJtTjBhVzl1SUNoeUxDQnJLU0I3WEc0Z0lDQWdjbHRyWFNBOUlHOWlhbHRyWFR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5VzJ0ZExDQnlPMXh1SUNCOUxDQjdmU2s3WEc1OVhHNWNiaThxS2x4dUlDb2dUV1Z5WjJWeklIQmhjM05sWkNCelpYUjBhVzVuY3lCdlltcGxZM1FnZDJsMGFDQmtaV1poZFd4MElHOXdkR2x2Ym5NdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCa1pXWmhkV3gwYzF4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQnpaWFIwYVc1bmMxeHVJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnRaWEpuWlU5d2RHbHZibk1vWkdWbVlYVnNkSE1zSUhObGRIUnBibWR6S1NCN1hHNGdJSFpoY2lCdmNIUnBiMjV6SUQwZ1gyVjRkR1Z1WkhNb2UzMHNJR1JsWm1GMWJIUnpMQ0J6WlhSMGFXNW5jeWs3WEc1Y2JpQWdMeThnWUU5aWFtVmpkQzVoYzNOcFoyNWdJR1J2SUc1dmRDQmtaV1Z3YkhrZ2JXVnlaMlVnYjJKcVpXTjBjeXdnYzI4Z2QyVmNiaUFnTHk4Z2FHRjJaU0IwYnlCa2J5QnBkQ0J0WVc1MVlXeHNlU0JtYjNJZ1pYWmxjbmtnYm1WemRHVmtJRzlpYW1WamRGeHVJQ0F2THlCcGJpQnZjSFJwYjI1ekxpQkJiSFJvYjNWbmFDQnBkQ0JrYjJWeklHNXZkQ0JzYjI5cklITnRZWEowTEZ4dUlDQXZMeUJwZENkeklITnRZV3hzWlhJZ1lXNWtJR1poYzNSbGNpQjBhR0Z1SUhOdmJXVWdabUZ1WTNsY2JpQWdMeThnYldWeVoybHVaeUJrWldWd0xXMWxjbWRsSUdGc1oyOXlhWFJvYlNCelkzSnBjSFF1WEc0Z0lHbG1JQ2h6WlhSMGFXNW5jeTVvWVhOUGQyNVFjbTl3WlhKMGVTZ25ZMnhoYzNObGN5Y3BLU0I3WEc0Z0lDQWdiM0IwYVc5dWN5NWpiR0Z6YzJWeklEMGdYMlY0ZEdWdVpITW9lMzBzSUdSbFptRjFiSFJ6TG1Oc1lYTnpaWE1zSUhObGRIUnBibWR6TG1Oc1lYTnpaWE1wTzF4dVhHNGdJQ0FnYVdZZ0tITmxkSFJwYm1kekxtTnNZWE56WlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvSjJScGNtVmpkR2x2YmljcEtTQjdYRzRnSUNBZ0lDQnZjSFJwYjI1ekxtTnNZWE56WlhNdVpHbHlaV04wYVc5dUlEMGdYMlY0ZEdWdVpITW9lMzBzSUdSbFptRjFiSFJ6TG1Oc1lYTnpaWE11WkdseVpXTjBhVzl1TENCelpYUjBhVzVuY3k1amJHRnpjMlZ6TG1ScGNtVmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLSE5sZEhScGJtZHpMbWhoYzA5M2JsQnliM0JsY25SNUtDZGljbVZoYTNCdmFXNTBjeWNwS1NCN1hHNGdJQ0FnYjNCMGFXOXVjeTVpY21WaGEzQnZhVzUwY3lBOUlGOWxlSFJsYm1SektIdDlMQ0JrWldaaGRXeDBjeTVpY21WaGEzQnZhVzUwY3l3Z2MyVjBkR2x1WjNNdVluSmxZV3R3YjJsdWRITXBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRzl3ZEdsdmJuTTdYRzU5WEc1Y2JuWmhjaUJGZG1WdWRITkNkWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNXpkSEoxWTNRZ1lTQkZkbVZ1ZEVKMWN5QnBibk4wWVc1alpTNWNiaUFnSUNwY2JpQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR1YyWlc1MGMxeHVJQ0FnS2k5Y2JpQWdablZ1WTNScGIyNGdSWFpsYm5SelFuVnpLQ2tnZTF4dUlDQWdJSFpoY2lCbGRtVnVkSE1nUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01DQW1KaUJoY21kMWJXVnVkSE5iTUYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJSHQ5TzF4dUlDQWdJR05zWVhOelEyRnNiRU5vWldOcktIUm9hWE1zSUVWMlpXNTBjMEoxY3lrN1hHNWNiaUFnSUNCMGFHbHpMbVYyWlc1MGN5QTlJR1YyWlc1MGN6dGNiaUFnSUNCMGFHbHpMbWh2Y0NBOUlHVjJaVzUwY3k1b1lYTlBkMjVRY205d1pYSjBlVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCQlpHUnpJR3hwYzNSbGJtVnlJSFJ2SUhSb1pTQnpjR1ZqYVdabFpDQmxkbVZ1ZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElIdFRkSEpwYm1kOFFYSnlZWGw5SUdWMlpXNTBYRzRnSUNBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHaGhibVJzWlhKY2JpQWdJQ292WEc1Y2JseHVJQ0JqY21WaGRHVkRiR0Z6Y3loRmRtVnVkSE5DZFhNc0lGdDdYRzRnSUNBZ2EyVjVPaUFuYjI0bkxGeHVJQ0FnSUhaaGJIVmxPaUJtZFc1amRHbHZiaUJ2YmlobGRtVnVkQ3dnYUdGdVpHeGxjaWtnZTF4dUlDQWdJQ0FnYVdZZ0tHbHpRWEp5WVhrb1pYWmxiblFwS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daWFpsYm5RdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1S0dWMlpXNTBXMmxkTENCb1lXNWtiR1Z5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJEY21WaGRHVWdkR2hsSUdWMlpXNTBKM01nYjJKcVpXTjBJR2xtSUc1dmRDQjVaWFFnWTNKbFlYUmxaRnh1SUNBZ0lDQWdhV1lnS0NGMGFHbHpMbWh2Y0M1allXeHNLSFJvYVhNdVpYWmxiblJ6TENCbGRtVnVkQ2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZElEMGdXMTA3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFRmtaQ0IwYUdVZ2FHRnVaR3hsY2lCMGJ5QnhkV1YxWlZ4dUlDQWdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZExuQjFjMmdvYUdGdVpHeGxjaWtnTFNBeE8xeHVYRzRnSUNBZ0lDQXZMeUJRY205MmFXUmxJR2hoYm1Sc1pTQmlZV05ySUdadmNpQnlaVzF2ZG1Gc0lHOW1JR1YyWlc1MFhHNGdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCeVpXMXZkbVU2SUdaMWJtTjBhVzl1SUhKbGJXOTJaU2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZFcybHVaR1Y0WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNkVzV6SUhKbFoybHpkR1Z5WldRZ2FHRnVaR3hsY25NZ1ptOXlJSE53WldOcFptbGxaQ0JsZG1WdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZkVGeWNtRjVmU0JsZG1WdWRGeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wUFgwZ1kyOXVkR1Y0ZEZ4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZGxiV2wwSnl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdaVzFwZENobGRtVnVkQ3dnWTI5dWRHVjRkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tHbHpRWEp5WVhrb1pYWmxiblFwS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daWFpsYm5RdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ0YVhRb1pYWmxiblJiYVYwc0lHTnZiblJsZUhRcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVsbUlIUm9aU0JsZG1WdWRDQmtiMlZ6YmlkMElHVjRhWE4wTENCdmNpQjBhR1Z5WlNkeklHNXZJR2hoYm1Sc1pYSnpJR2x1SUhGMVpYVmxMQ0JxZFhOMElHeGxZWFpsWEc0Z0lDQWdJQ0JwWmlBb0lYUm9hWE11YUc5d0xtTmhiR3dvZEdocGN5NWxkbVZ1ZEhNc0lHVjJaVzUwS1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRU41WTJ4bElIUm9jbTkxWjJnZ1pYWmxiblJ6SUhGMVpYVmxMQ0JtYVhKbElWeHVJQ0FnSUNBZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHbDBaVzBwSUh0Y2JpQWdJQ0FnSUNBZ2FYUmxiU2hqYjI1MFpYaDBJSHg4SUh0OUtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnZlYwcE8xeHVJQ0J5WlhSMWNtNGdSWFpsYm5SelFuVnpPMXh1ZlNncE8xeHVYRzUyWVhJZ1IyeHBaR1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUM4cUtseHlYRzRnSUNBcUlFTnZibk4wY25WamRDQm5iR2xrWlM1Y2NseHVJQ0FnS2x4eVhHNGdJQ0FxSUVCd1lYSmhiU0FnZTFOMGNtbHVaMzBnYzJWc1pXTjBiM0pjY2x4dUlDQWdLaUJBY0dGeVlXMGdJSHRQWW1wbFkzUjlJRzl3ZEdsdmJuTmNjbHh1SUNBZ0tpOWNiaUFnWm5WdVkzUnBiMjRnUjJ4cFpHVW9jMlZzWldOMGIzSXBJSHRjYmlBZ0lDQjJZWElnYjNCMGFXOXVjeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeElDWW1JR0Z5WjNWdFpXNTBjMXN4WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pGZElEb2dlMzA3WEc0Z0lDQWdZMnhoYzNORFlXeHNRMmhsWTJzb2RHaHBjeXdnUjJ4cFpHVXBPMXh1WEc0Z0lDQWdkR2hwY3k1Zll5QTlJSHQ5TzF4dUlDQWdJSFJvYVhNdVgzUWdQU0JiWFR0Y2JpQWdJQ0IwYUdsekxsOWxJRDBnYm1WM0lFVjJaVzUwYzBKMWN5Z3BPMXh1WEc0Z0lDQWdkR2hwY3k1a2FYTmhZbXhsWkNBOUlHWmhiSE5sTzF4dUlDQWdJSFJvYVhNdWMyVnNaV04wYjNJZ1BTQnpaV3hsWTNSdmNqdGNiaUFnSUNCMGFHbHpMbk5sZEhScGJtZHpJRDBnYldWeVoyVlBjSFJwYjI1ektHUmxabUYxYkhSekxDQnZjSFJwYjI1ektUdGNiaUFnSUNCMGFHbHpMbWx1WkdWNElEMGdkR2hwY3k1elpYUjBhVzVuY3k1emRHRnlkRUYwTzF4dUlDQjlYRzVjYmlBZ0x5b3FYSEpjYmlBZ0lDb2dTVzVwZEdsaGJHbDZaWE1nWjJ4cFpHVXVYSEpjYmlBZ0lDcGNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1pYaDBaVzV6YVc5dWN5QkRiMnhzWldOMGFXOXVJRzltSUdWNGRHVnVjMmx2Ym5NZ2RHOGdhVzVwZEdsaGJHbDZaUzVjY2x4dUlDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0tpOWNibHh1WEc0Z0lHTnlaV0YwWlVOc1lYTnpLRWRzYVdSbExDQmJlMXh1SUNBZ0lHdGxlVG9nSjIxdmRXNTBKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2JXOTFiblFrSkRFb0tTQjdYRzRnSUNBZ0lDQjJZWElnWlhoMFpXNXphVzl1Y3lBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZTMwN1hHNWNiaUFnSUNBZ0lIUm9hWE11WDJVdVpXMXBkQ2duYlc5MWJuUXVZbVZtYjNKbEp5azdYRzVjYmlBZ0lDQWdJR2xtSUNocGMwOWlhbVZqZENobGVIUmxibk5wYjI1ektTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWpJRDBnYlc5MWJuUW9kR2hwY3l3Z1pYaDBaVzV6YVc5dWN5d2dkR2hwY3k1ZlpTazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjNZWEp1S0NkWmIzVWdibVZsWkNCMGJ5QndjbTkyYVdSbElHRWdiMkpxWldOMElHOXVJR0J0YjNWdWRDZ3BZQ2NwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMGFHbHpMbDlsTG1WdGFYUW9KMjF2ZFc1MExtRm1kR1Z5SnlrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nUTI5c2JHVmpkSE1nWVc0Z2FXNXpkR0Z1WTJVZ1lIUnlZVzV6YkdGMFpXQWdkSEpoYm5ObWIzSnRaWEp6TGx4eVhHNGdJQ0FnSUNwY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwRnljbUY1ZlNCMGNtRnVjMlp2Y20xbGNuTWdRMjlzYkdWamRHbHZiaUJ2WmlCMGNtRnVjMlp2Y20xbGNuTXVYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjIxMWRHRjBaU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHMTFkR0YwWlNncElIdGNiaUFnSUNBZ0lIWmhjaUIwY21GdWMyWnZjbTFsY25NZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNQ0FtSmlCaGNtZDFiV1Z1ZEhOYk1GMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3dYU0E2SUZ0ZE8xeHVYRzRnSUNBZ0lDQnBaaUFvYVhOQmNuSmhlU2gwY21GdWMyWnZjbTFsY25NcEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzUWdQU0IwY21GdWMyWnZjbTFsY25NN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCM1lYSnVLQ2RaYjNVZ2JtVmxaQ0IwYnlCd2NtOTJhV1JsSUdFZ1lYSnlZWGtnYjI0Z1lHMTFkR0YwWlNncFlDY3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlGVndaR0YwWlhNZ1oyeHBaR1VnZDJsMGFDQnpjR1ZqYVdacFpXUWdjMlYwZEdsdVozTXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSE5sZEhScGJtZHpYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkMWNHUmhkR1VuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ0lDQjJZWElnYzJWMGRHbHVaM01nUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01DQW1KaUJoY21kMWJXVnVkSE5iTUYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJSHQ5TzF4dVhHNGdJQ0FnSUNCMGFHbHpMbk5sZEhScGJtZHpJRDBnYldWeVoyVlBjSFJwYjI1ektIUm9hWE11YzJWMGRHbHVaM01zSUhObGRIUnBibWR6S1R0Y2JseHVJQ0FnSUNBZ2FXWWdLSE5sZEhScGJtZHpMbWhoYzA5M2JsQnliM0JsY25SNUtDZHpkR0Z5ZEVGMEp5a3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibVJsZUNBOUlITmxkSFJwYm1kekxuTjBZWEowUVhRN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIUm9hWE11WDJVdVpXMXBkQ2duZFhCa1lYUmxKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dRMmhoYm1kbElITnNhV1JsSUhkcGRHZ2djM0JsWTJsbWFXVmtJSEJoZEhSbGNtNHVJRUVnY0dGMGRHVnliaUJ0ZFhOMElHSmxJR2x1SUhSb1pTQnpjR1ZqYVdGc0lHWnZjbTFoZERwY2NseHVJQ0FnSUNBcUlHQStZQ0F0SUUxdmRtVWdiMjVsSUdadmNuZGhjbVJjY2x4dUlDQWdJQ0FxSUdBOFlDQXRJRTF2ZG1VZ2IyNWxJR0poWTJ0M1lYSmtYSEpjYmlBZ0lDQWdLaUJnUFh0cGZXQWdMU0JIYnlCMGJ5QjdhWDBnZW1WeWJ5MWlZWE5sWkNCemJHbGtaU0FvWlhFdUlDYzlNU2NzSUhkcGJHd2daMjhnZEc4Z2MyVmpiMjVrSUhOc2FXUmxLVnh5WEc0Z0lDQWdJQ29nWUQ0K1lDQXRJRkpsZDJsdVpITWdkRzhnWlc1a0lDaHNZWE4wSUhOc2FXUmxLVnh5WEc0Z0lDQWdJQ29nWUR3OFlDQXRJRkpsZDJsdVpITWdkRzhnYzNSaGNuUWdLR1pwY25OMElITnNhV1JsS1Z4eVhHNGdJQ0FnSUNwY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCd1lYUjBaWEp1WEhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0SGJHbGtaWDFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZG5ieWNzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHZHZLSEJoZEhSbGNtNHBJSHRjYmlBZ0lDQWdJSFJvYVhNdVgyTXVVblZ1TG0xaGEyVW9jR0YwZEdWeWJpazdYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1RXOTJaU0IwY21GamF5QmllU0J6Y0dWamFXWnBaV1FnWkdsemRHRnVZMlV1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdScGMzUmhibU5sWEhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0SGJHbGtaWDFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZHRiM1psSnl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdiVzkyWlNoa2FYTjBZVzVqWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmWXk1VWNtRnVjMmwwYVc5dUxtUnBjMkZpYkdVb0tUdGNiaUFnSUNBZ0lIUm9hWE11WDJNdVRXOTJaUzV0WVd0bEtHUnBjM1JoYm1ObEtUdGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCRVpYTjBjbTk1SUdsdWMzUmhibU5sSUdGdVpDQnlaWFpsY25RZ1lXeHNJR05vWVc1blpYTWdaRzl1WlNCaWVTQjBhR2x6TGw5akxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJSbGMzUnliM2tuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQmtaWE4wY205NUtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZlpTNWxiV2wwS0Nka1pYTjBjbTk1SnlrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nVTNSaGNuUWdhVzV6ZEdGdVkyVWdZWFYwYjNCc1lYbHBibWN1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0Q2IyOXNaV0Z1ZkU1MWJXSmxjbjBnYVc1MFpYSjJZV3dnVW5WdUlHRjFkRzl3YkdGNWFXNW5JSGRwZEdnZ2NHRnpjMlZrSUdsdWRHVnlkbUZzSUhKbFoyRnlaR3hsYzNNZ2IyWWdZR0YxZEc5d2JHRjVZQ0J6WlhSMGFXNW5jMXh5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3UjJ4cFpHVjlYSEpjYmlBZ0lDQWdLaTljYmx4dUlDQjlMQ0I3WEc0Z0lDQWdhMlY1T2lBbmNHeGhlU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlIQnNZWGtvS1NCN1hHNGdJQ0FnSUNCMllYSWdhVzUwWlhKMllXd2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTUNBbUppQmhjbWQxYldWdWRITmJNRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklHWmhiSE5sTzF4dVhHNGdJQ0FnSUNCcFppQW9hVzUwWlhKMllXd3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpaWFIwYVc1bmN5NWhkWFJ2Y0d4aGVTQTlJR2x1ZEdWeWRtRnNPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IwYUdsekxsOWxMbVZ0YVhRb0ozQnNZWGtuS1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJUZEc5d0lHbHVjM1JoYm1ObElHRjFkRzl3YkdGNWFXNW5MbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBkc2FXUmxmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0ozQmhkWE5sSnl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdjR0YxYzJVb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5bExtVnRhWFFvSjNCaGRYTmxKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVMlYwY3lCbmJHbGtaU0JwYm5SdklHRWdhV1JzWlNCemRHRjBkWE11WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1IyeHBaR1Y5WEhKY2JpQWdJQ0FnS2k5Y2JseHVJQ0I5TENCN1hHNGdJQ0FnYTJWNU9pQW5aR2x6WVdKc1pTY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUdScGMyRmliR1VvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVJwYzJGaWJHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCVFpYUnpJR2RzYVdSbElHbHVkRzhnWVNCaFkzUnBkbVVnYzNSaGRIVnpMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBkc2FXUmxmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyVnVZV0pzWlNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR1Z1WVdKc1pTZ3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVpHbHpZV0pzWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJCWkdSeklHTjFkWFJ2YlNCbGRtVnVkQ0JzYVhOMFpXNWxjaUIzYVhSb0lHaGhibVJzWlhJdVhISmNiaUFnSUNBZ0tseHlYRzRnSUNBZ0lDb2dRSEJoY21GdElDQjdVM1J5YVc1bmZFRnljbUY1ZlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJQ0I3Um5WdVkzUnBiMjU5SUdoaGJtUnNaWEpjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBkc2FXUmxmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyOXVKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2IyNG9aWFpsYm5Rc0lHaGhibVJzWlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJVdWIyNG9aWFpsYm5Rc0lHaGhibVJzWlhJcE8xeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSUVOb1pXTnJjeUJwWmlCbmJHbGtaU0JwY3lCaElIQnlaV05wYzJWa0lIUjVjR1V1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZlNCdVlXMWxYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oybHpWSGx3WlNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR2x6Vkhsd1pTaHVZVzFsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpaWFIwYVc1bmN5NTBlWEJsSUQwOVBTQnVZVzFsTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1IyVjBjeUIyWVd4MVpTQnZaaUIwYUdVZ1kyOXlaU0J2Y0hScGIyNXpMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZHpaWFIwYVc1bmN5Y3NYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRa0pERW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmJ6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRk5sZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJR052Y21VZ2IzQjBhVzl1Y3k1Y2NseHVJQ0FnSUNBcVhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlHOWNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhISmNiaUFnSUNBZ0tpOWNiaUFnSUNBc1hHNGdJQ0FnYzJWME9pQm1kVzVqZEdsdmJpQnpaWFFrSkRFb2J5a2dlMXh1SUNBZ0lDQWdhV1lnS0dselQySnFaV04wS0c4cEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyOGdQU0J2TzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25UM0IwYVc5dWN5QnRkWE4wSUdKbElHRnVJR0J2WW1wbFkzUmdJR2x1YzNSaGJtTmxMaWNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1IyVjBjeUJqZFhKeVpXNTBJR2x1WkdWNElHOW1JSFJvWlNCemJHbGtaWEl1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMmx1WkdWNEp5eGNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENRa01TZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5cE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVMlYwY3lCamRYSnlaVzUwSUdsdVpHVjRJR0VnYzJ4cFpHVnlMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjY2x4dUlDQWdJQ0FxTDF4dUlDQWdJQ3hjYmlBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUhObGRDUWtNU2hwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlwSUQwZ2RHOUpiblFvYVNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQkhaWFJ6SUhSNWNHVWdibUZ0WlNCdlppQjBhR1VnYzJ4cFpHVnlMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFOMGNtbHVaMzFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZDBlWEJsSnl4Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ1FrTVNncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbk5sZEhScGJtZHpMblI1Y0dVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQkhaWFJ6SUhaaGJIVmxJRzltSUhSb1pTQnBaR3hsSUhOMFlYUjFjeTVjY2x4dUlDQWdJQ0FxWEhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0Q2IyOXNaV0Z1ZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMlJwYzJGaWJHVmtKeXhjYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDUWtNU2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWtPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nVTJWMGN5QjJZV3gxWlNCdlppQjBhR1VnYVdSc1pTQnpkR0YwZFhNdVhISmNiaUFnSUNBZ0tseHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNjbHh1SUNBZ0lDQXFMMXh1SUNBZ0lDeGNiaUFnSUNCelpYUTZJR1oxYm1OMGFXOXVJSE5sZENRa01TaHpkR0YwZFhNcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJRZ1BTQWhJWE4wWVhSMWN6dGNiaUFnSUNCOVhHNGdJSDFkS1R0Y2JpQWdjbVYwZFhKdUlFZHNhV1JsTzF4dWZTZ3BPMXh1WEc1bWRXNWpkR2x2YmlCU2RXNGdLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpMQ0JGZG1WdWRITXBJSHRjYmlBZ2RtRnlJRkoxYmlBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwYVdGc2FYcGxjeUJoZFhSdmNuVnVibWx1WnlCdlppQjBhR1VnWjJ4cFpHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2ZFc1ME9pQm1kVzVqZEdsdmJpQnRiM1Z1ZENncElIdGNiaUFnSUNBZ0lIUm9hWE11WDI4Z1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQk5ZV3RsY3lCbmJHbGtaWE1nY25WdWJtbHVaeUJpWVhObFpDQnZiaUIwYUdVZ2NHRnpjMlZrSUcxdmRtbHVaeUJ6WTJobGJXRXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2JXOTJaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHMWhhMlU2SUdaMWJtTjBhVzl1SUcxaGEyVW9iVzkyWlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJRjkwYUdseklEMGdkR2hwY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLQ0ZIYkdsa1pTNWthWE5oWW14bFpDa2dlMXh1SUNBZ0lDQWdJQ0JIYkdsa1pTNWthWE5oWW14bEtDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXRiM1psSUQwZ2JXOTJaVHRjYmx4dUlDQWdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25jblZ1TG1KbFptOXlaU2NzSUhSb2FYTXViVzkyWlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeGpkV3hoZEdVb0tUdGNibHh1SUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNuVnVKeXdnZEdocGN5NXRiM1psS1R0Y2JseHVJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMbFJ5WVc1emFYUnBiMjR1WVdaMFpYSW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2hmZEdocGN5NXBjMDltWm5ObGRDZ25QQ2NwSUh4OElGOTBhR2x6TG1selQyWm1jMlYwS0NjK0p5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGOTBhR2x6TGw5dklEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHlkVzR1YjJabWMyVjBKeXdnWDNSb2FYTXViVzkyWlNrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ1JYWmxiblJ6TG1WdGFYUW9KM0oxYmk1aFpuUmxjaWNzSUY5MGFHbHpMbTF2ZG1VcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVaVzVoWW14bEtDazdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTmhiR04xYkdGMFpYTWdZM1Z5Y21WdWRDQnBibVJsZUNCaVlYTmxaQ0J2YmlCa1pXWnBibVZrSUcxdmRtVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR05oYkdOMWJHRjBaVG9nWm5WdVkzUnBiMjRnWTJGc1kzVnNZWFJsS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJRzF2ZG1VZ1BTQjBhR2x6TG0xdmRtVXNYRzRnSUNBZ0lDQWdJQ0FnYkdWdVozUm9JRDBnZEdocGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNCMllYSWdjM1JsY0hNZ1BTQnRiM1psTG5OMFpYQnpMRnh1SUNBZ0lDQWdJQ0FnSUdScGNtVmpkR2x2YmlBOUlHMXZkbVV1WkdseVpXTjBhVzl1TzF4dVhHNWNiaUFnSUNBZ0lIWmhjaUJqYjNWdWRHRmliR1ZUZEdWd2N5QTlJR2x6VG5WdFltVnlLSFJ2U1c1MEtITjBaWEJ6S1NrZ0ppWWdkRzlKYm5Rb2MzUmxjSE1wSUNFOVBTQXdPMXh1WEc0Z0lDQWdJQ0J6ZDJsMFkyZ2dLR1JwY21WamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCallYTmxJQ2MrSnpwY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSbGNITWdQVDA5SUNjK0p5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ2dQU0JzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpMbWx6Ulc1a0tDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doS0Vkc2FXUmxMbWx6Vkhsd1pTZ25jMnhwWkdWeUp5a2dKaVlnSVVkc2FXUmxMbk5sZEhScGJtZHpMbkpsZDJsdVpDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmJ5QTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ2dQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQkZkbVZ1ZEhNdVpXMXBkQ2duY25WdUxtVnVaQ2NzSUcxdmRtVXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1kyOTFiblJoWW14bFUzUmxjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0SUNzOUlFMWhkR2d1YldsdUtHeGxibWQwYUNBdElFZHNhV1JsTG1sdVpHVjRMQ0F0ZEc5SmJuUW9jM1JsY0hNcEtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ3JLenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNWNiaUFnSUNBZ0lDQWdZMkZ6WlNBblBDYzZYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tITjBaWEJ6SUQwOVBTQW5QQ2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXVhWE5UZEdGeWRDZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVNoSGJHbGtaUzVwYzFSNWNHVW9KM05zYVdSbGNpY3BJQ1ltSUNGSGJHbGtaUzV6WlhSMGFXNW5jeTV5WlhkcGJtUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyOGdQU0IwY25WbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJRDBnYkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25jblZ1TG5OMFlYSjBKeXdnYlc5MlpTazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoamIzVnVkR0ZpYkdWVGRHVndjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdSMnhwWkdVdWFXNWtaWGdnTFQwZ1RXRjBhQzV0YVc0b1IyeHBaR1V1YVc1a1pYZ3NJSFJ2U1c1MEtITjBaWEJ6S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUVkc2FXUmxMbWx1WkdWNExTMDdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSnowbk9seHVJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0SUQwZ2MzUmxjSE03WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyaGxZMnR6SUdsbUlIZGxJR0Z5WlNCdmJpQjBhR1VnWm1seWMzUWdjMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2x6VTNSaGNuUTZJR1oxYm1OMGFXOXVJR2x6VTNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdSMnhwWkdVdWFXNWtaWGdnUFQwOUlEQTdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJobFkydHpJR2xtSUhkbElHRnlaU0J2YmlCMGFHVWdiR0Z6ZENCemJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMEp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2FYTkZibVE2SUdaMWJtTjBhVzl1SUdselJXNWtLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRWRzYVdSbExtbHVaR1Y0SUQwOVBTQjBhR2x6TG14bGJtZDBhRHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGFHVmphM01nYVdZZ2QyVWdZWEpsSUcxaGEybHVaeUJoSUc5bVpuTmxkQ0J5ZFc0dVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnWkdseVpXTjBhVzl1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3UW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmlBZ0lDQnBjMDltWm5ObGREb2dablZ1WTNScGIyNGdhWE5QWm1aelpYUW9aR2x5WldOMGFXOXVLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmJ5QW1KaUIwYUdsekxtMXZkbVV1WkdseVpXTjBhVzl1SUQwOVBTQmthWEpsWTNScGIyNDdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaFNkVzRzSUNkdGIzWmxKeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkbUZzZFdVZ2IyWWdkR2hsSUcxdmRtVWdjMk5vWlcxaExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXRPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdkbUZzZFdVZ2IyWWdkR2hsSUcxdmRtVWdjMk5vWlcxaExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlITmxkQ2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZmJTQTlJSHRjYmlBZ0lDQWdJQ0FnWkdseVpXTjBhVzl1T2lCMllXeDFaUzV6ZFdKemRISW9NQ3dnTVNrc1hHNGdJQ0FnSUNBZ0lITjBaWEJ6T2lCMllXeDFaUzV6ZFdKemRISW9NU2tnUHlCMllXeDFaUzV6ZFdKemRISW9NU2tnT2lBd1hHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdaR1ZtYVc1bEtGSjFiaXdnSjJ4bGJtZDBhQ2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCeWRXNXVhVzVuSUdScGMzUmhibU5sSUdKaGMyVmtYRzRnSUNBZ0lDb2diMjRnZW1WeWJ5MXBibVJsZUdsdVp5QnVkVzFpWlhJZ2IyWWdjMnhwWkdWekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlITmxkSFJwYm1keklEMGdSMnhwWkdVdWMyVjBkR2x1WjNNN1hHNGdJQ0FnSUNCMllYSWdiR1Z1WjNSb0lEMGdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuTnNhV1JsY3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0FnSUM4dklFbG1JSFJvWlNCZ1ltOTFibVJnSUc5d2RHbHZiaUJwY3lCaFkybDBkbVVzSUdFZ2JXRjRhVzExYlNCeWRXNXVhVzVuSUdScGMzUmhibU5sSUhOb2IzVnNaQ0JpWlZ4dUlDQWdJQ0FnTHk4Z2NtVmtkV05sWkNCaWVTQmdjR1Z5Vm1sbGQyQWdZVzVrSUdCbWIyTjFjMEYwWUNCelpYUjBhVzVuY3k0Z1VuVnVibWx1WnlCa2FYTjBZVzVqWlZ4dUlDQWdJQ0FnTHk4Z2MyaHZkV3hrSUdWdVpDQmlaV1p2Y21VZ1kzSmxZWFJwYm1jZ1lXNGdaVzF3ZEhrZ2MzQmhZMlVnWVdaMFpYSWdhVzV6ZEdGdVkyVXVYRzVjYmlBZ0lDQWdJR2xtSUNoSGJHbGtaUzVwYzFSNWNHVW9KM05zYVdSbGNpY3BJQ1ltSUhObGRIUnBibWR6TG1adlkzVnpRWFFnSVQwOUlDZGpaVzUwWlhJbklDWW1JSE5sZEhScGJtZHpMbUp2ZFc1a0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNaVzVuZEdnZ0xTQXhJQzBnS0hSdlNXNTBLSE5sZEhScGJtZHpMbkJsY2xacFpYY3BJQzBnTVNrZ0t5QjBiMGx1ZENoelpYUjBhVzVuY3k1bWIyTjFjMEYwS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUd4bGJtZDBhQ0F0SURFN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1VuVnVMQ0FuYjJabWMyVjBKeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdjM1JoZEhWeklHOW1JSFJvWlNCdlptWnpaWFIwYVc1bklHWnNZV2N1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDI4N1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z1VuVnVPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGSmxkSFZ5Ym5NZ1lTQmpkWEp5Wlc1MElIUnBiV1V1WEc0Z0tseHVJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnViM2NvS1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LVHRjYm4xY2JseHVMeW9xWEc0Z0tpQlNaWFIxY201eklHRWdablZ1WTNScGIyNHNJSFJvWVhRc0lIZG9aVzRnYVc1MmIydGxaQ3dnZDJsc2JDQnZibXg1SUdKbElIUnlhV2RuWlhKbFpGeHVJQ29nWVhRZ2JXOXpkQ0J2Ym1ObElHUjFjbWx1WnlCaElHZHBkbVZ1SUhkcGJtUnZkeUJ2WmlCMGFXMWxMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1oxYm1OY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQjNZV2wwWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEQxOUlHOXdkR2x2Ym5OY2JpQXFJRUJ5WlhSMWNtNGdlMFoxYm1OMGFXOXVmVnh1SUNwY2JpQXFJRUJ6WldVZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwycGhjMmhyWlc1aGN5OTFibVJsY25OamIzSmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlIUm9jbTkwZEd4bEtHWjFibU1zSUhkaGFYUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ2RtRnlJSFJwYldWdmRYUWdQU0IyYjJsa0lEQXNYRzRnSUNBZ0lDQmpiMjUwWlhoMElEMGdkbTlwWkNBd0xGeHVJQ0FnSUNBZ1lYSm5jeUE5SUhadmFXUWdNQ3hjYmlBZ0lDQWdJSEpsYzNWc2RDQTlJSFp2YVdRZ01EdGNiaUFnZG1GeUlIQnlaWFpwYjNWeklEMGdNRHRjYmlBZ2FXWWdLQ0Z2Y0hScGIyNXpLU0J2Y0hScGIyNXpJRDBnZTMwN1hHNWNiaUFnZG1GeUlHeGhkR1Z5SUQwZ1puVnVZM1JwYjI0Z2JHRjBaWElvS1NCN1hHNGdJQ0FnY0hKbGRtbHZkWE1nUFNCdmNIUnBiMjV6TG14bFlXUnBibWNnUFQwOUlHWmhiSE5sSUQ4Z01DQTZJRzV2ZHlncE8xeHVJQ0FnSUhScGJXVnZkWFFnUFNCdWRXeHNPMXh1SUNBZ0lISmxjM1ZzZENBOUlHWjFibU11WVhCd2JIa29ZMjl1ZEdWNGRDd2dZWEpuY3lrN1hHNGdJQ0FnYVdZZ0tDRjBhVzFsYjNWMEtTQmpiMjUwWlhoMElEMGdZWEpuY3lBOUlHNTFiR3c3WEc0Z0lIMDdYRzVjYmlBZ2RtRnlJSFJvY205MGRHeGxaQ0E5SUdaMWJtTjBhVzl1SUhSb2NtOTBkR3hsWkNncElIdGNiaUFnSUNCMllYSWdZWFFnUFNCdWIzY29LVHRjYmlBZ0lDQnBaaUFvSVhCeVpYWnBiM1Z6SUNZbUlHOXdkR2x2Ym5NdWJHVmhaR2x1WnlBOVBUMGdabUZzYzJVcElIQnlaWFpwYjNWeklEMGdZWFE3WEc0Z0lDQWdkbUZ5SUhKbGJXRnBibWx1WnlBOUlIZGhhWFFnTFNBb1lYUWdMU0J3Y21WMmFXOTFjeWs3WEc0Z0lDQWdZMjl1ZEdWNGRDQTlJSFJvYVhNN1hHNGdJQ0FnWVhKbmN5QTlJR0Z5WjNWdFpXNTBjenRjYmlBZ0lDQnBaaUFvY21WdFlXbHVhVzVuSUR3OUlEQWdmSHdnY21WdFlXbHVhVzVuSUQ0Z2QyRnBkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tIUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hScGJXVnZkWFFwTzF4dUlDQWdJQ0FnSUNCMGFXMWxiM1YwSUQwZ2JuVnNiRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEJ5WlhacGIzVnpJRDBnWVhRN1hHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCbWRXNWpMbUZ3Y0d4NUtHTnZiblJsZUhRc0lHRnlaM01wTzF4dUlDQWdJQ0FnYVdZZ0tDRjBhVzFsYjNWMEtTQmpiMjUwWlhoMElEMGdZWEpuY3lBOUlHNTFiR3c3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doZEdsdFpXOTFkQ0FtSmlCdmNIUnBiMjV6TG5SeVlXbHNhVzVuSUNFOVBTQm1ZV3h6WlNrZ2UxeHVJQ0FnSUNBZ2RHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUW9iR0YwWlhJc0lISmxiV0ZwYm1sdVp5azdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzRnSUgwN1hHNWNiaUFnZEdoeWIzUjBiR1ZrTG1OaGJtTmxiQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCamJHVmhjbFJwYldWdmRYUW9kR2x0Wlc5MWRDazdYRzRnSUNBZ2NISmxkbWx2ZFhNZ1BTQXdPMXh1SUNBZ0lIUnBiV1Z2ZFhRZ1BTQmpiMjUwWlhoMElEMGdZWEpuY3lBOUlHNTFiR3c3WEc0Z0lIMDdYRzVjYmlBZ2NtVjBkWEp1SUhSb2NtOTBkR3hsWkR0Y2JuMWNibHh1ZG1GeUlFMUJVa2RKVGw5VVdWQkZJRDBnZTF4dUlDQnNkSEk2SUZzbmJXRnlaMmx1VEdWbWRDY3NJQ2R0WVhKbmFXNVNhV2RvZENkZExGeHVJQ0J5ZEd3NklGc25iV0Z5WjJsdVVtbG5hSFFuTENBbmJXRnlaMmx1VEdWbWRDZGRYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQkhZWEJ6SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJSFpoY2lCSFlYQnpJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGd2NHeHBaWE1nWjJGd2N5QmlaWFIzWldWdUlITnNhV1JsY3k0Z1JtbHljM1FnWVc1a0lHeGhjM1JjYmlBZ0lDQWdLaUJ6Ykdsa1pYTWdaRzhnYm05MElISmxZMlZwZG1VZ2FYUW5jeUJsWkdkbElHMWhjbWRwYm5NdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBoVVRVeERiMnhzWldOMGFXOXVmU0J6Ykdsa1pYTmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0Z3Y0d4NU9pQm1kVzVqZEdsdmJpQmhjSEJzZVNoemJHbGtaWE1wSUh0Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JzWlc0Z1BTQnpiR2xrWlhNdWJHVnVaM1JvT3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlITjBlV3hsSUQwZ2MyeHBaR1Z6VzJsZExuTjBlV3hsTzF4dUlDQWdJQ0FnSUNCMllYSWdaR2x5WldOMGFXOXVJRDBnUTI5dGNHOXVaVzUwY3k1RWFYSmxZM1JwYjI0dWRtRnNkV1U3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2tnSVQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNCemRIbHNaVnROUVZKSFNVNWZWRmxRUlZ0a2FYSmxZM1JwYjI1ZFd6QmRYU0E5SUhSb2FYTXVkbUZzZFdVZ0x5QXlJQ3NnSjNCNEp6dGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0J6ZEhsc1pWdE5RVkpIU1U1ZlZGbFFSVnRrYVhKbFkzUnBiMjVkV3pCZFhTQTlJQ2NuTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0drZ0lUMDlJSE5zYVdSbGN5NXNaVzVuZEdnZ0xTQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2MzUjViR1ZiVFVGU1IwbE9YMVJaVUVWYlpHbHlaV04wYVc5dVhWc3hYVjBnUFNCMGFHbHpMblpoYkhWbElDOGdNaUFySUNkd2VDYzdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnYzNSNWJHVmJUVUZTUjBsT1gxUlpVRVZiWkdseVpXTjBhVzl1WFZzeFhWMGdQU0FuSnp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdaMkZ3Y3lCbWNtOXRJSFJvWlNCemJHbGtaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMGhVVFV4RGIyeHNaV04wYVc5dWZTQnpiR2xrWlhOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQXFMMXh1SUNBZ0lISmxiVzkyWlRvZ1puVnVZM1JwYjI0Z2NtVnRiM1psS0hOc2FXUmxjeWtnZTF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQXNJR3hsYmlBOUlITnNhV1JsY3k1c1pXNW5kR2c3SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MzUjViR1VnUFNCemJHbGtaWE5iYVYwdWMzUjViR1U3WEc1Y2JpQWdJQ0FnSUNBZ2MzUjViR1V1YldGeVoybHVUR1ZtZENBOUlDY25PMXh1SUNBZ0lDQWdJQ0J6ZEhsc1pTNXRZWEpuYVc1U2FXZG9kQ0E5SUNjbk8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQmtaV1pwYm1Vb1IyRndjeXdnSjNaaGJIVmxKeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkbUZzZFdVZ2IyWWdkR2hsSUdkaGNDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEc5SmJuUW9SMnhwWkdVdWMyVjBkR2x1WjNNdVoyRndLVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hIWVhCekxDQW5aM0p2ZHljc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdGa1pHbDBhVzl1WVd3Z1pHbHRaVzUwYVc5dWN5QjJZV3gxWlNCallYVnpaV1FnWW5rZ1oyRndjeTVjYmlBZ0lDQWdLaUJWYzJWa0lIUnZJR2x1WTNKbFlYTmxJSGRwWkhSb0lHOW1JSFJvWlNCemJHbGtaWE1nZDNKaGNIQmxjaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRPZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1IyRndjeTUyWVd4MVpTQXFJQ2hEYjIxd2IyNWxiblJ6TGxOcGVtVnpMbXhsYm1kMGFDQXRJREVwTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ1pHVm1hVzVsS0VkaGNITXNJQ2R5WldSMVkzUnZjaWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJSEpsWkhWamRHbHZiaUIyWVd4MVpTQmpZWFZ6WldRZ1lua2daMkZ3Y3k1Y2JpQWdJQ0FnS2lCVmMyVmtJSFJ2SUhOMVluUnlZV04wSUhkcFpIUm9JRzltSUhSb1pTQnpiR2xrWlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIQmxjbFpwWlhjZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3k1d1pYSldhV1YzTzF4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnUjJGd2N5NTJZV3gxWlNBcUlDaHdaWEpXYVdWM0lDMGdNU2tnTHlCd1pYSldhV1YzTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFRndjR3g1SUdOaGJHTjFiR0YwWldRZ1oyRndjenBjYmlBZ0lDb2dMU0JoWm5SbGNpQmlkV2xzWkdsdVp5d2djMjhnYzJ4cFpHVnpJQ2hwYm1Oc2RXUnBibWNnWTJ4dmJtVnpLU0IzYVd4c0lISmxZMlZwZG1VZ2NISnZjR1Z5SUcxaGNtZHBibk5jYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKTENCMGJ5QnlaV05oYkdOMWJHRjBaU0JuWVhCeklIZHBkR2dnYm1WM0lHOXdkR2x2Ym5OY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMkoxYVd4a0xtRm1kR1Z5Snl3Z0ozVndaR0YwWlNkZExDQjBhSEp2ZEhSc1pTaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdSMkZ3Y3k1aGNIQnNlU2hEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpNWphR2xzWkhKbGJpazdYRzRnSUgwc0lETXdLU2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsYlc5MlpTQm5ZWEJ6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY2dkRzhnWW5KcGJtY2diV0Z5YTNWd0lIUnZJR2wwY3lCcGJtbDBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCSFlYQnpMbkpsYlc5MlpTaERiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1amFHbHNaSEpsYmlrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQkhZWEJ6TzF4dWZWeHVYRzR2S2lwY2JpQXFJRVpwYm1SeklITnBZbXhwYm1keklHNXZaR1Z6SUc5bUlIUm9aU0J3WVhOelpXUWdibTlrWlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUh0RmJHVnRaVzUwZlNCdWIyUmxYRzRnS2lCQWNtVjBkWEp1SUh0QmNuSmhlWDFjYmlBcUwxeHVablZ1WTNScGIyNGdjMmxpYkdsdVozTW9ibTlrWlNrZ2UxeHVJQ0JwWmlBb2JtOWtaU0FtSmlCdWIyUmxMbkJoY21WdWRFNXZaR1VwSUh0Y2JpQWdJQ0IyWVhJZ2JpQTlJRzV2WkdVdWNHRnlaVzUwVG05a1pTNW1hWEp6ZEVOb2FXeGtPMXh1SUNBZ0lIWmhjaUJ0WVhSamFHVmtJRDBnVzEwN1hHNWNiaUFnSUNCbWIzSWdLRHNnYmpzZ2JpQTlJRzR1Ym1WNGRGTnBZbXhwYm1jcElIdGNiaUFnSUNBZ0lHbG1JQ2h1TG01dlpHVlVlWEJsSUQwOVBTQXhJQ1ltSUc0Z0lUMDlJRzV2WkdVcElIdGNiaUFnSUNBZ0lDQWdiV0YwWTJobFpDNXdkWE5vS0c0cE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ0WVhSamFHVmtPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRnRkTzF4dWZWeHVYRzR2S2lwY2JpQXFJRU5vWldOcmN5QnBaaUJ3WVhOelpXUWdibTlrWlNCbGVHbHpkQ0JoYm1RZ2FYTWdZU0IyWVd4cFpDQmxiR1Z0Wlc1MExseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwVnNaVzFsYm5SOUlHNXZaR1ZjYmlBcUlFQnlaWFIxY200Z2UwSnZiMnhsWVc1OVhHNGdLaTljYm1aMWJtTjBhVzl1SUdWNGFYTjBLRzV2WkdVcElIdGNiaUFnYVdZZ0tHNXZaR1VnSmlZZ2JtOWtaU0JwYm5OMFlXNWpaVzltSUhkcGJtUnZkeTVJVkUxTVJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHWmhiSE5sTzF4dWZWeHVYRzUyWVhJZ1ZGSkJRMHRmVTBWTVJVTlVUMUlnUFNBblcyUmhkR0V0WjJ4cFpHVXRaV3c5WENKMGNtRmphMXdpWFNjN1hHNWNibVoxYm1OMGFXOXVJRWgwYld3Z0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SektTQjdYRzRnSUhaaGNpQklkRzFzSUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSFZ3SUhOc2FXUmxjaUJJVkUxTUlHNXZaR1Z6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRIYkdsa1pYMGdaMnhwWkdWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG5KdmIzUWdQU0JIYkdsa1pTNXpaV3hsWTNSdmNqdGNiaUFnSUNBZ0lIUm9hWE11ZEhKaFkyc2dQU0IwYUdsekxuSnZiM1F1Y1hWbGNubFRaV3hsWTNSdmNpaFVVa0ZEUzE5VFJVeEZRMVJQVWlrN1hHNGdJQ0FnSUNCMGFHbHpMbk5zYVdSbGN5QTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLSFJvYVhNdWQzSmhjSEJsY2k1amFHbHNaSEpsYmlrdVptbHNkR1Z5S0daMWJtTjBhVzl1SUNoemJHbGtaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSVhOc2FXUmxMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWhIYkdsa1pTNXpaWFIwYVc1bmN5NWpiR0Z6YzJWekxtTnNiMjVsVTJ4cFpHVXBPMXh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdSbFptbHVaU2hJZEcxc0xDQW5jbTl2ZENjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUc1dlpHVWdiMllnZEdobElHZHNhV1JsSUcxaGFXNGdaV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJJZEcxc0xsOXlPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdibTlrWlNCdlppQjBhR1VnWjJ4cFpHVWdiV0ZwYmlCbGJHVnRaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnYzJWMEtISXBJSHRjYmlBZ0lDQWdJR2xtSUNocGMxTjBjbWx1WnloeUtTa2dlMXh1SUNBZ0lDQWdJQ0J5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWh5S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLR1Y0YVhOMEtISXBLU0I3WEc0Z0lDQWdJQ0FnSUVoMGJXd3VYM0lnUFNCeU8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2QyRnliaWduVW05dmRDQmxiR1Z0Wlc1MElHMTFjM1FnWW1VZ1lTQmxlR2x6ZEdsdVp5QklkRzFzSUc1dlpHVW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hJZEcxc0xDQW5kSEpoWTJzbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCdWIyUmxJRzltSUhSb1pTQm5iR2xrWlNCMGNtRmpheUIzYVhSb0lITnNhV1JsY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQklkRzFzTGw5ME8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2JtOWtaU0J2WmlCMGFHVWdaMnhwWkdVZ2RISmhZMnNnZDJsMGFDQnpiR2xrWlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjMlYwT2lCbWRXNWpkR2x2YmlCelpYUW9kQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tHVjRhWE4wS0hRcEtTQjdYRzRnSUNBZ0lDQWdJRWgwYld3dVgzUWdQU0IwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25RMjkxYkdRZ2JtOTBJR1pwYm1RZ2RISmhZMnNnWld4bGJXVnVkQzRnVUd4bFlYTmxJSFZ6WlNBbklDc2dWRkpCUTB0ZlUwVk1SVU5VVDFJZ0t5QW5JR0YwZEhKcFluVjBaUzRuS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lHUmxabWx1WlNoSWRHMXNMQ0FuZDNKaGNIQmxjaWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJRzV2WkdVZ2IyWWdkR2hsSUhOc2FXUmxjeUIzY21Gd2NHVnlMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVoMGJXd3VkSEpoWTJzdVkyaHBiR1J5Wlc1Yk1GMDdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdTSFJ0YkR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnVUdWbGF5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNCMllYSWdVR1ZsYXlBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFIxY0hNZ2FHOTNJRzExWTJnZ2RHOGdjR1ZsYXlCaVlYTmxaQ0J2YmlCelpYUjBhVzVuY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NTJZV3gxWlNBOUlFZHNhV1JsTG5ObGRIUnBibWR6TG5CbFpXczdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaFFaV1ZyTENBbmRtRnNkV1VuTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUIyWVd4MVpTQnZaaUIwYUdVZ2NHVmxheTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRPZFcxaVpYSjhUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUZCbFpXc3VYM1k3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1UyVjBjeUIyWVd4MVpTQnZaaUIwYUdVZ2NHVmxheTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZFOWlhbVZqZEgwZ2RtRnNkV1ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FYTlBZbXBsWTNRb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG1KbFptOXlaU0E5SUhSdlNXNTBLSFpoYkhWbExtSmxabTl5WlNrN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG1GbWRHVnlJRDBnZEc5SmJuUW9kbUZzZFdVdVlXWjBaWElwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0IwYjBsdWRDaDJZV3gxWlNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lGQmxaV3N1WDNZZ1BTQjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lHUmxabWx1WlNoUVpXVnJMQ0FuY21Wa2RXTjBiM0luTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUJ5WldSMVkzUnBiMjRnZG1Gc2RXVWdZMkYxYzJWa0lHSjVJSEJsWldzdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIWmhiSFZsSUQwZ1VHVmxheTUyWVd4MVpUdGNiaUFnSUNBZ0lIWmhjaUJ3WlhKV2FXVjNJRDBnUjJ4cFpHVXVjMlYwZEdsdVozTXVjR1Z5Vm1sbGR6dGNibHh1SUNBZ0lDQWdhV1lnS0dselQySnFaV04wS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZG1Gc2RXVXVZbVZtYjNKbElDOGdjR1Z5Vm1sbGR5QXJJSFpoYkhWbExtRm1kR1Z5SUM4Z2NHVnlWbWxsZHp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxJQ29nTWlBdklIQmxjbFpwWlhjN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZqWVd4amRXeGhkR1VnY0dWbGEybHVaeUJ6YVhwbGN5QnZianBjYmlBZ0lDb2dMU0IzYUdWdUlISmxjMmw2YVc1bklIZHBibVJ2ZHlCMGJ5QjFjR1JoZEdVZ2RHOGdjSEp2Y0dWeUlIQmxjbU5sYm5SelhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9XeWR5WlhOcGVtVW5MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCUVpXVnJMbTF2ZFc1MEtDazdYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJRWldWck8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCTmIzWmxJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJOYjNabElEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU52Ym5OMGNuVmpkSE1nYlc5MlpTQmpiMjF3YjI1bGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5dklEMGdNRHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRFlXeGpkV3hoZEdWeklHRWdiVzkyWlcxbGJuUWdkbUZzZFdVZ1ltRnpaV1FnYjI0Z2NHRnpjMlZrSUc5bVpuTmxkQ0JoYm1RZ1kzVnljbVZ1ZEd4NUlHRmpkR2wyWlNCcGJtUmxlQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdiMlptYzJWMFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRZV3RsT2lCbWRXNWpkR2x2YmlCdFlXdGxLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlGOTBhR2x6SUQwZ2RHaHBjenRjYmx4dUlDQWdJQ0FnZG1GeUlHOW1abk5sZENBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nTUR0Y2JseHVJQ0FnSUNBZ2RHaHBjeTV2Wm1aelpYUWdQU0J2Wm1aelpYUTdYRzVjYmlBZ0lDQWdJRVYyWlc1MGN5NWxiV2wwS0NkdGIzWmxKeXdnZTF4dUlDQWdJQ0FnSUNCdGIzWmxiV1Z1ZERvZ2RHaHBjeTUyWVd4MVpWeHVJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1aFpuUmxjaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R0YjNabExtRm1kR1Z5Snl3Z2UxeHVJQ0FnSUNBZ0lDQWdJRzF2ZG1WdFpXNTBPaUJmZEdocGN5NTJZV3gxWlZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0JrWldacGJtVW9UVzkyWlN3Z0oyOW1abk5sZENjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdGdUlHOW1abk5sZENCMllXeDFaU0IxYzJWa0lIUnZJRzF2WkdsbWVTQmpkWEp5Wlc1MElIUnlZVzV6YkdGMFpTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJOYjNabExsOXZPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdZVzRnYjJabWMyVjBJSFpoYkhWbElIVnpaV1FnZEc4Z2JXOWthV1o1SUdOMWNuSmxiblFnZEhKaGJuTnNZWFJsTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnYzJWMEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCTmIzWmxMbDl2SUQwZ0lXbHpWVzVrWldacGJtVmtLSFpoYkhWbEtTQS9JSFJ2U1c1MEtIWmhiSFZsS1NBNklEQTdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0JrWldacGJtVW9UVzkyWlN3Z0ozUnlZVzV6YkdGMFpTY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHRWdjbUYzSUcxdmRtVnRaVzUwSUhaaGJIVmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVOdmJYQnZibVZ1ZEhNdVUybDZaWE11YzJ4cFpHVlhhV1IwYUNBcUlFZHNhV1JsTG1sdVpHVjRPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnWkdWbWFXNWxLRTF2ZG1Vc0lDZDJZV3gxWlNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdGdUlHRmpkSFZoYkNCdGIzWmxiV1Z1ZENCMllXeDFaU0JqYjNKeVpXTjBaV1FnWW5rZ2IyWm1jMlYwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUc5bVpuTmxkQ0E5SUhSb2FYTXViMlptYzJWME8xeHVJQ0FnSUNBZ2RtRnlJSFJ5WVc1emJHRjBaU0E5SUhSb2FYTXVkSEpoYm5Oc1lYUmxPMXh1WEc0Z0lDQWdJQ0JwWmlBb1EyOXRjRzl1Wlc1MGN5NUVhWEpsWTNScGIyNHVhWE1vSjNKMGJDY3BLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnS3lCdlptWnpaWFE3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnTFNCdlptWnpaWFE3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1RXRnJaU0J0YjNabGJXVnVkQ0IwYnlCd2NtOXdaWElnYzJ4cFpHVWdiMjQ2WEc0Z0lDQXFJQzBnWW1WbWIzSmxJR0oxYVd4a0xDQnpieUJuYkdsa1pTQjNhV3hzSUhOMFlYSjBJR0YwSUdCemRHRnlkRUYwWUNCcGJtUmxlRnh1SUNBZ0tpQXRJRzl1SUdWaFkyZ2djM1JoYm1SaGNtUWdjblZ1SUhSdklHMXZkbVVnZEc4Z2JtVjNiSGtnWTJGc1kzVnNZWFJsWkNCcGJtUmxlRnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0ZzblluVnBiR1F1WW1WbWIzSmxKeXdnSjNKMWJpZGRMQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnVFc5MlpTNXRZV3RsS0NrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQk5iM1psTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJUYVhwbGN5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNCMllYSWdVMmw2WlhNZ1BTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVMlYwZFhCeklHUnBiV1Z1ZEdsdmJuTWdiMllnYzJ4cFpHVnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6WlhSMWNGTnNhV1JsY3pvZ1puVnVZM1JwYjI0Z2MyVjBkWEJUYkdsa1pYTW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyeHBaR1Z6SUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjenRjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCemJHbGtaWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdjMnhwWkdWelcybGRMbk4wZVd4bExuZHBaSFJvSUQwZ2RHaHBjeTV6Ykdsa1pWZHBaSFJvSUNzZ0ozQjRKenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVFpYUjFjSE1nWkdsdFpXNTBhVzl1Y3lCdlppQnpiR2xrWlhNZ2QzSmhjSEJsY2k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MyVjBkWEJYY21Gd2NHVnlPaUJtZFc1amRHbHZiaUJ6WlhSMWNGZHlZWEJ3WlhJb1pHbHRaVzUwYVc5dUtTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1emRIbHNaUzUzYVdSMGFDQTlJSFJvYVhNdWQzSmhjSEJsY2xOcGVtVWdLeUFuY0hnbk8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdZWEJ3YkdsbFpDQnpkSGxzWlhNZ1puSnZiU0JJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabE9pQm1kVzVqZEdsdmJpQnlaVzF2ZG1Vb0tTQjdYRzRnSUNBZ0lDQjJZWElnYzJ4cFpHVnpJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbk5zYVdSbGN6dGNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6Ykdsa1pYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2MyeHBaR1Z6VzJsZExuTjBlV3hsTG5kcFpIUm9JRDBnSnljN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5TG5OMGVXeGxMbmRwWkhSb0lEMGdKeWM3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdSbFptbHVaU2hUYVhwbGN5d2dKMnhsYm1kMGFDY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHTnZkVzUwSUc1MWJXSmxjaUJ2WmlCMGFHVWdjMnhwWkdWekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRU52YlhCdmJtVnVkSE11U0hSdGJDNXpiR2xrWlhNdWJHVnVaM1JvTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ1pHVm1hVzVsS0ZOcGVtVnpMQ0FuZDJsa2RHZ25MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QjNhV1IwYUNCMllXeDFaU0J2WmlCMGFHVWdaMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1YjJabWMyVjBWMmxrZEdnN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1UybDZaWE1zSUNkM2NtRndjR1Z5VTJsNlpTY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklITnBlbVVnYjJZZ2RHaGxJSE5zYVdSbGN5QjNjbUZ3Y0dWeUxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRk5wZW1WekxuTnNhV1JsVjJsa2RHZ2dLaUJUYVhwbGN5NXNaVzVuZEdnZ0t5QkRiMjF3YjI1bGJuUnpMa2RoY0hNdVozSnZkeUFySUVOdmJYQnZibVZ1ZEhNdVEyeHZibVZ6TG1keWIzYzdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0JrWldacGJtVW9VMmw2WlhNc0lDZHpiR2xrWlZkcFpIUm9KeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkMmxrZEdnZ2RtRnNkV1VnYjJZZ2RHaGxJSE5wYm1kc1pTQnpiR2xrWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQlRhWHBsY3k1M2FXUjBhQ0F2SUVkc2FXUmxMbk5sZEhScGJtZHpMbkJsY2xacFpYY2dMU0JEYjIxd2IyNWxiblJ6TGxCbFpXc3VjbVZrZFdOMGIzSWdMU0JEYjIxd2IyNWxiblJ6TGtkaGNITXVjbVZrZFdOMGIzSTdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVhCd2JIa2dZMkZzWTNWc1lYUmxaQ0JuYkdsa1pTZHpJR1JwYldWdWMybHZibk02WEc0Z0lDQXFJQzBnWW1WbWIzSmxJR0oxYVd4a2FXNW5MQ0J6YnlCdmRHaGxjaUJrYVcxbGJuUnBiMjV6SUNobExtY3VJSFJ5WVc1emJHRjBaU2tnZDJsc2JDQmlaU0JqWVd4amRXeGhkR1ZrSUhCeWIzQmxjblJzZVZ4dUlDQWdLaUF0SUhkb1pXNGdjbVZ6YVhwcGJtY2dkMmx1Wkc5M0lIUnZJSEpsWTJGc1kzVnNZWFJsSUhOcGJHUmxjeUJrYVcxbGJuTnBiMjV6WEc0Z0lDQXFJQzBnYjI0Z2RYQmtZWFJwYm1jZ2RtbGhJRUZRU1N3Z2RHOGdZMkZzWTNWc1lYUmxJR1JwYldWdWMybHZibk1nWW1GelpXUWdiMjRnYm1WM0lHOXdkR2x2Ym5OY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMkoxYVd4a0xtSmxabTl5WlNjc0lDZHlaWE5wZW1VbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JUYVhwbGN5NXpaWFIxY0ZOc2FXUmxjeWdwTzF4dUlDQWdJRk5wZW1WekxuTmxkSFZ3VjNKaGNIQmxjaWdwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElHTmhiR04xYkdGMFpXUWdaMnhwWkdVbmN5QmthVzFsYm5OcGIyNXpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnZkR2x1WnlCMGJ5QmljbWx1WnlCdFlYSnJkWEFnZEc4Z2FYUnpJR2x1YVhSaGJDQnpkR0YwWlZ4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZGtaWE4wY205NUp5d2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRk5wZW1WekxuSmxiVzkyWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdVMmw2WlhNN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUVKMWFXeGtJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJDZFdsc1pDQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJKYm1sMElHZHNhV1JsSUdKMWFXeGthVzVuTGlCQlpHUnpJR05zWVhOelpYTXNJSE5sZEhOY2JpQWdJQ0FnS2lCa2FXMWxibk5wYjI1eklHRnVaQ0J6WlhSMWNITWdhVzVwZEdsaGJDQnpkR0YwWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnUlhabGJuUnpMbVZ0YVhRb0oySjFhV3hrTG1KbFptOXlaU2NwTzF4dVhHNGdJQ0FnSUNCMGFHbHpMblI1Y0dWRGJHRnpjeWdwTzF4dUlDQWdJQ0FnZEdocGN5NWhZM1JwZG1WRGJHRnpjeWdwTzF4dVhHNGdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25ZblZwYkdRdVlXWjBaWEluS1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJaR1J6SUdCMGVYQmxZQ0JqYkdGemN5QjBieUIwYUdVZ1oyeHBaR1VnWld4bGJXVnVkQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnZEhsd1pVTnNZWE56T2lCbWRXNWpkR2x2YmlCMGVYQmxRMnhoYzNNb0tTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWNtOXZkQzVqYkdGemMweHBjM1F1WVdSa0tFZHNhV1JsTG5ObGRIUnBibWR6TG1Oc1lYTnpaWE5iUjJ4cFpHVXVjMlYwZEdsdVozTXVkSGx3WlYwcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ1lXTjBhWFpsSUdOc1lYTnpJSFJ2SUdOMWNuSmxiblFnYzJ4cFpHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0ZqZEdsMlpVTnNZWE56T2lCbWRXNWpkR2x2YmlCaFkzUnBkbVZEYkdGemN5Z3BJSHRjYmlBZ0lDQWdJSFpoY2lCamJHRnpjMlZ6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM011WTJ4aGMzTmxjenRjYmlBZ0lDQWdJSFpoY2lCemJHbGtaU0E5SUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzV6Ykdsa1pYTmJSMnhwWkdVdWFXNWtaWGhkTzF4dVhHNGdJQ0FnSUNCcFppQW9jMnhwWkdVcElIdGNiaUFnSUNBZ0lDQWdjMnhwWkdVdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMyVnpMbUZqZEdsMlpWTnNhV1JsS1R0Y2JseHVJQ0FnSUNBZ0lDQnphV0pzYVc1bmN5aHpiR2xrWlNrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2MybGliR2x1WnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSE5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGpiR0Z6YzJWekxtRmpkR2wyWlZOc2FXUmxLVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5QklWRTFNSUdOc1lYTnpaWE1nWVhCd2JHbGxaQ0JoZENCaWRXbHNaR2x1Wnk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psUTJ4aGMzTmxjem9nWm5WdVkzUnBiMjRnY21WdGIzWmxRMnhoYzNObGN5Z3BJSHRjYmlBZ0lDQWdJSFpoY2lCamJHRnpjMlZ6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM011WTJ4aGMzTmxjenRjYmx4dUlDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbkp2YjNRdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJHRnpjMlZ6VzBkc2FXUmxMbk5sZEhScGJtZHpMblI1Y0dWZEtUdGNibHh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuTnNhV1JsY3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoemFXSnNhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lITnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJHRnpjMlZ6TG1GamRHbDJaVk5zYVdSbEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUTJ4bFlYSWdZblZwYkdScGJtY2dZMnhoYzNObGN6cGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklHSnlhVzVuSUVoVVRVd2dkRzhnYVhSeklHbHVhWFJwWVd3Z2MzUmhkR1ZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMGJ5QnlaVzF2ZG1VZ1kyeGhjM05sY3lCaVpXWnZjbVVnY21WdGIzVnVkR2x1WnlCamIyMXdiMjVsYm5SY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMlJsYzNSeWIza25MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQ2RXbHNaQzV5WlcxdmRtVkRiR0Z6YzJWektDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pXMXZkVzUwSUdOdmJYQnZibVZ1ZERwY2JpQWdJQ29nTFNCdmJpQnlaWE5wZW1sdVp5QnZaaUIwYUdVZ2QybHVaRzkzSUhSdklHTmhiR04xYkdGMFpTQnVaWGNnWkdsdFpXNTBhVzl1YzF4dUlDQWdLaUF0SUc5dUlIVndaR0YwYVc1bklITmxkSFJwYm1keklIWnBZU0JCVUVsY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKM0psYzJsNlpTY3NJQ2QxY0dSaGRHVW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVKMWFXeGtMbTF2ZFc1MEtDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVGQyRndJR0ZqZEdsMlpTQmpiR0Z6Y3lCdlppQmpkWEp5Wlc1MElITnNhV1JsT2x4dUlDQWdLaUF0SUdGbWRHVnlJR1ZoWTJnZ2JXOTJaU0IwYnlCMGFHVWdibVYzSUdsdVpHVjRYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjIxdmRtVXVZV1owWlhJbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdRblZwYkdRdVlXTjBhWFpsUTJ4aGMzTW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVKMWFXeGtPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQkRiRzl1WlhNZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnZG1GeUlFTnNiMjVsY3lBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRjbVZoZEdVZ2NHRjBkR1Z5YmlCdFlYQWdZVzVrSUdOdmJHeGxZM1FnYzJ4cFpHVnpJSFJ2SUdKbElHTnNiMjVsWkM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1sMFpXMXpJRDBnVzEwN1hHNWNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXBjMVI1Y0dVb0oyTmhjbTkxYzJWc0p5a3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBkR1Z0Y3lBOUlIUm9hWE11WTI5c2JHVmpkQ2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTnZiR3hsWTNRZ1kyeHZibVZ6SUhkcGRHZ2djR0YwZEdWeWJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZMjlzYkdWamREb2dablZ1WTNScGIyNGdZMjlzYkdWamRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCcGRHVnRjeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dXMTA3WEc0Z0lDQWdJQ0IyWVhJZ2MyeHBaR1Z6SUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjenRjYmlBZ0lDQWdJSFpoY2lCZlIyeHBaR1VrYzJWMGRHbHVaM01nUFNCSGJHbGtaUzV6WlhSMGFXNW5jeXhjYmlBZ0lDQWdJQ0FnSUNCd1pYSldhV1YzSUQwZ1gwZHNhV1JsSkhObGRIUnBibWR6TG5CbGNsWnBaWGNzWEc0Z0lDQWdJQ0FnSUNBZ1kyeGhjM05sY3lBOUlGOUhiR2xrWlNSelpYUjBhVzVuY3k1amJHRnpjMlZ6TzF4dVhHNWNiaUFnSUNBZ0lIWmhjaUJ3WldWclNXNWpjbVZ0Wlc1MFpYSWdQU0FySVNGSGJHbGtaUzV6WlhSMGFXNW5jeTV3WldWck8xeHVJQ0FnSUNBZ2RtRnlJSEJoY25RZ1BTQndaWEpXYVdWM0lDc2djR1ZsYTBsdVkzSmxiV1Z1ZEdWeU8xeHVJQ0FnSUNBZ2RtRnlJSE4wWVhKMElEMGdjMnhwWkdWekxuTnNhV05sS0RBc0lIQmhjblFwTzF4dUlDQWdJQ0FnZG1GeUlHVnVaQ0E5SUhOc2FXUmxjeTV6YkdsalpTZ3RjR0Z5ZENrN1hHNWNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlISWdQU0F3T3lCeUlEd2dUV0YwYUM1dFlYZ29NU3dnVFdGMGFDNW1iRzl2Y2lod1pYSldhV1YzSUM4Z2MyeHBaR1Z6TG14bGJtZDBhQ2twT3lCeUt5c3BJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCemRHRnlkQzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamJHOXVaU0E5SUhOMFlYSjBXMmxkTG1Oc2IyNWxUbTlrWlNoMGNuVmxLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHTnNiMjVsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9ZMnhoYzNObGN5NWpiRzl1WlZOc2FXUmxLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHbDBaVzF6TG5CMWMyZ29ZMnh2Ym1VcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnWDJrZ1BTQXdPeUJmYVNBOElHVnVaQzVzWlc1bmRHZzdJRjlwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ1gyTnNiMjVsSUQwZ1pXNWtXMTlwWFM1amJHOXVaVTV2WkdVb2RISjFaU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQmZZMnh2Ym1VdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMyVnpMbU5zYjI1bFUyeHBaR1VwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdhWFJsYlhNdWRXNXphR2xtZENoZlkyeHZibVVwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCcGRHVnRjenRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQmNIQmxibVFnWTJ4dmJtVmtJSE5zYVdSbGN5QjNhWFJvSUdkbGJtVnlZWFJsWkNCd1lYUjBaWEp1TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaGNIQmxibVE2SUdaMWJtTjBhVzl1SUdGd2NHVnVaQ2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQnBkR1Z0Y3lBOUlIUm9hWE11YVhSbGJYTTdYRzRnSUNBZ0lDQjJZWElnWDBOdmJYQnZibVZ1ZEhNa1NIUnRiQ0E5SUVOdmJYQnZibVZ1ZEhNdVNIUnRiQ3hjYmlBZ0lDQWdJQ0FnSUNCM2NtRndjR1Z5SUQwZ1gwTnZiWEJ2Ym1WdWRITWtTSFJ0YkM1M2NtRndjR1Z5TEZ4dUlDQWdJQ0FnSUNBZ0lITnNhV1JsY3lBOUlGOURiMjF3YjI1bGJuUnpKRWgwYld3dWMyeHBaR1Z6TzF4dVhHNWNiaUFnSUNBZ0lIWmhjaUJvWVd4bUlEMGdUV0YwYUM1bWJHOXZjaWhwZEdWdGN5NXNaVzVuZEdnZ0x5QXlLVHRjYmlBZ0lDQWdJSFpoY2lCd2NtVndaVzVrSUQwZ2FYUmxiWE11YzJ4cFkyVW9NQ3dnYUdGc1ppa3VjbVYyWlhKelpTZ3BPMXh1SUNBZ0lDQWdkbUZ5SUdGd2NHVnVaQ0E5SUdsMFpXMXpMbk5zYVdObEtHaGhiR1lzSUdsMFpXMXpMbXhsYm1kMGFDazdYRzVjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWVhCd1pXNWtMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lIZHlZWEJ3WlhJdVlYQndaVzVrUTJocGJHUW9ZWEJ3Wlc1a1cybGRLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnWDJreUlEMGdNRHNnWDJreUlEd2djSEpsY0dWdVpDNXNaVzVuZEdnN0lGOXBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lIZHlZWEJ3WlhJdWFXNXpaWEowUW1WbWIzSmxLSEJ5WlhCbGJtUmJYMmt5WFN3Z2MyeHBaR1Z6V3pCZEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdYMmt6SUQwZ01Ec2dYMmt6SUR3Z2FYUmxiWE11YkdWdVozUm9PeUJmYVRNckt5a2dlMXh1SUNBZ0lDQWdJQ0JwZEdWdGMxdGZhVE5kTG5OMGVXeGxMbmRwWkhSb0lEMGdRMjl0Y0c5dVpXNTBjeTVUYVhwbGN5NXpiR2xrWlZkcFpIUm9JQ3NnSjNCNEp6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVWdZV3hzSUdOc2IyNWxaQ0J6Ykdsa1pYTXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSEpsYlc5MlpUb2dablZ1WTNScGIyNGdjbVZ0YjNabEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUdsMFpXMXpJRDBnZEdocGN5NXBkR1Z0Y3p0Y2JseHVYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR2wwWlcxekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMbkpsYlc5MlpVTm9hV3hrS0dsMFpXMXpXMmxkS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ1pHVm1hVzVsS0VOc2IyNWxjeXdnSjJkeWIzY25MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QmhaR1JwZEdsdmJtRnNJR1JwYldWdWRHbHZibk1nZG1Gc2RXVWdZMkYxYzJWa0lHSjVJR05zYjI1bGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvUTI5dGNHOXVaVzUwY3k1VGFYcGxjeTV6Ykdsa1pWZHBaSFJvSUNzZ1EyOXRjRzl1Wlc1MGN5NUhZWEJ6TG5aaGJIVmxLU0FxSUVOc2IyNWxjeTVwZEdWdGN5NXNaVzVuZEdnN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWEJ3Wlc1a0lHRmtaR2wwYVc5dVlXd2djMnhwWkdVbmN5QmpiRzl1WlhNNlhHNGdJQ0FxSUMwZ2QyaHBiR1VnWjJ4cFpHVW5jeUIwZVhCbElHbHpJR0JqWVhKdmRYTmxiR0JjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmRYQmtZWFJsSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFTnNiMjVsY3k1eVpXMXZkbVVvS1R0Y2JpQWdJQ0JEYkc5dVpYTXViVzkxYm5Rb0tUdGNiaUFnSUNCRGJHOXVaWE11WVhCd1pXNWtLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkJjSEJsYm1RZ1lXUmthWFJwYjI1aGJDQnpiR2xrWlNkeklHTnNiMjVsY3pwY2JpQWdJQ29nTFNCM2FHbHNaU0JuYkdsa1pTZHpJSFI1Y0dVZ2FYTWdZR05oY205MWMyVnNZRnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0NkaWRXbHNaQzVpWldadmNtVW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnYVdZZ0tFZHNhV1JsTG1selZIbHdaU2duWTJGeWIzVnpaV3duS1NrZ2UxeHVJQ0FnSUNBZ1EyeHZibVZ6TG1Gd2NHVnVaQ2dwTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCamJHOXVaWE1nU0ZSTlRFVnNaVzFsYm5Sek9seHVJQ0FnS2lBdElHOXVJR1JsYzNSeWIzbHBibWNzSUhSdklHSnlhVzVuSUVoVVRVd2dkRzhnYVhSeklHbHVhWFJwWVd3Z2MzUmhkR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkRiRzl1WlhNdWNtVnRiM1psS0NrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQkRiRzl1WlhNN1hHNTlYRzVjYm5aaGNpQkZkbVZ1ZEhOQ2FXNWtaWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNXpkSEoxWTNRZ1lTQkZkbVZ1ZEhOQ2FXNWtaWElnYVc1emRHRnVZMlV1WEc0Z0lDQXFMMXh1SUNCbWRXNWpkR2x2YmlCRmRtVnVkSE5DYVc1a1pYSW9LU0I3WEc0Z0lDQWdkbUZ5SUd4cGMzUmxibVZ5Y3lBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZTMwN1hHNGdJQ0FnWTJ4aGMzTkRZV3hzUTJobFkyc29kR2hwY3l3Z1JYWmxiblJ6UW1sdVpHVnlLVHRjYmx4dUlDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKeklEMGdiR2x6ZEdWdVpYSnpPMXh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGa1pITWdaWFpsYm5SeklHeHBjM1JsYm1WeWN5QjBieUJoY25KdmQzTWdTRlJOVENCbGJHVnRaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElDQjdVM1J5YVc1bmZFRnljbUY1ZlNCbGRtVnVkSE5jYmlBZ0lDb2dRSEJoY21GdElDQjdSV3hsYldWdWRIeFhhVzVrYjNkOFJHOWpkVzFsYm5SOUlHVnNYRzRnSUNBcUlFQndZWEpoYlNBZ2UwWjFibU4wYVc5dWZTQmpiRzl6ZFhKbFhHNGdJQ0FxSUVCd1lYSmhiU0FnZTBKdmIyeGxZVzU4VDJKcVpXTjBmU0JqWVhCMGRYSmxYRzRnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQXFMMXh1WEc1Y2JpQWdZM0psWVhSbFEyeGhjM01vUlhabGJuUnpRbWx1WkdWeUxDQmJlMXh1SUNBZ0lHdGxlVG9nSjI5dUp5eGNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYjI0b1pYWmxiblJ6TENCbGJDd2dZMnh2YzNWeVpTa2dlMXh1SUNBZ0lDQWdkbUZ5SUdOaGNIUjFjbVVnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z015QW1KaUJoY21kMWJXVnVkSE5iTTEwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzelhTQTZJR1poYkhObE8xeHVYRzRnSUNBZ0lDQnBaaUFvYVhOVGRISnBibWNvWlhabGJuUnpLU2tnZTF4dUlDQWdJQ0FnSUNCbGRtVnVkSE1nUFNCYlpYWmxiblJ6WFR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQmxkbVZ1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTmJaWFpsYm5SelcybGRYU0E5SUdOc2IzTjFjbVU3WEc1Y2JpQWdJQ0FnSUNBZ1pXd3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGxkbVZ1ZEhOYmFWMHNJSFJvYVhNdWJHbHpkR1Z1WlhKelcyVjJaVzUwYzF0cFhWMHNJR05oY0hSMWNtVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdaWFpsYm5RZ2JHbHpkR1Z1WlhKeklHWnliMjBnWVhKeWIzZHpJRWhVVFV3Z1pXeGxiV1Z1ZEhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0VGRISnBibWQ4UVhKeVlYbDlJR1YyWlc1MGMxeHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwVnNaVzFsYm5SOFYybHVaRzkzZkVSdlkzVnRaVzUwZlNCbGJGeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyOW1aaWNzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHOW1aaWhsZG1WdWRITXNJR1ZzS1NCN1hHNGdJQ0FnSUNCcFppQW9hWE5UZEhKcGJtY29aWFpsYm5SektTa2dlMXh1SUNBZ0lDQWdJQ0JsZG1WdWRITWdQU0JiWlhabGJuUnpYVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCbGRtVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdaV3d1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkSE5iYVYwc0lIUm9hWE11YkdsemRHVnVaWEp6VzJWMlpXNTBjMXRwWFYwc0lHWmhiSE5sS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRVpYTjBjbTk1SUdOdmJHeGxZM1JsWkNCc2FYTjBaVzVsY25NdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmx4dUlDQjlMQ0I3WEc0Z0lDQWdhMlY1T2lBblpHVnpkSEp2ZVNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR1JsYzNSeWIza29LU0I3WEc0Z0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1c2FYTjBaVzVsY25NN1hHNGdJQ0FnZlZ4dUlDQjlYU2s3WEc0Z0lISmxkSFZ5YmlCRmRtVnVkSE5DYVc1a1pYSTdYRzU5S0NrN1hHNWNibVoxYm1OMGFXOXVJRkpsYzJsNlpTQW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdkbUZ5SUZKbGMybDZaU0E5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSmJtbDBhV0ZzYVhwbGN5QjNhVzVrYjNjZ1ltbHVaR2x1WjNNdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1aWFXNWtLQ2s3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FtbHVaSE1nWUhKbGVuTnBlbVZnSUd4cGMzUmxibVZ5SUhSdklIUm9aU0IzYVc1a2IzY3VYRzRnSUNBZ0lDb2dTWFFuY3lCaElHTnZjM1JzZVNCbGRtVnVkQ3dnYzI4Z2QyVWdZWEpsSUdSbFltOTFibU5wYm1jZ2FYUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0pwYm1RNklHWjFibU4wYVc5dUlHSnBibVFvS1NCN1hHNGdJQ0FnSUNCQ2FXNWtaWEl1YjI0b0ozSmxjMmw2WlNjc0lIZHBibVJ2ZHl3Z2RHaHliM1IwYkdVb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNtVnphWHBsSnlrN1hHNGdJQ0FnSUNCOUxDQkhiR2xrWlM1elpYUjBhVzVuY3k1MGFISnZkSFJzWlNrcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRlZ1WW1sdVpITWdiR2x6ZEdWdVpYSnpJR1p5YjIwZ2RHaGxJSGRwYm1SdmR5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdkVzVpYVc1a09pQm1kVzVqZEdsdmJpQjFibUpwYm1Rb0tTQjdYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyWm1LQ2R5WlhOcGVtVW5MQ0IzYVc1a2IzY3BPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WdGIzWmxJR0pwYm1ScGJtZHpJR1p5YjIwZ2QybHVaRzkzT2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUhKbGJXOTJaU0JoWkdSbFpDQkZkbVZ1ZEV4cGMzUmxibVZ5WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyUmxjM1J5YjNrbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdVbVZ6YVhwbExuVnVZbWx1WkNncE8xeHVJQ0FnSUVKcGJtUmxjaTVrWlhOMGNtOTVLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCU1pYTnBlbVU3WEc1OVhHNWNiblpoY2lCV1FVeEpSRjlFU1ZKRlExUkpUMDVUSUQwZ1d5ZHNkSEluTENBbmNuUnNKMTA3WEc1MllYSWdSa3hKVUVWRVgwMVBWa1ZOUlU1VVV5QTlJSHRjYmlBZ0p6NG5PaUFuUENjc1hHNGdJQ2M4SnpvZ0p6NG5MRnh1SUNBblBTYzZJQ2M5SjF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnUkdseVpXTjBhVzl1SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJSFpoY2lCRWFYSmxZM1JwYjI0Z1BTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVMlYwZFhCeklHZGhjQ0IyWVd4MVpTQmlZWE5sWkNCdmJpQnpaWFIwYVc1bmN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpTQTlJRWRzYVdSbExuTmxkSFJwYm1kekxtUnBjbVZqZEdsdmJqdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhOdmJIWmxjeUJ3WVhSMFpYSnVJR0poYzJWa0lHOXVJR1JwY21WamRHbHZiaUIyWVd4MVpWeHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhCaGRIUmxjbTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VTNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lISmxjMjlzZG1VNklHWjFibU4wYVc5dUlISmxjMjlzZG1Vb2NHRjBkR1Z5YmlrZ2UxeHVJQ0FnSUNBZ2RtRnlJSFJ2YTJWdUlEMGdjR0YwZEdWeWJpNXpiR2xqWlNnd0xDQXhLVHRjYmx4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YVhNb0ozSjBiQ2NwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCd1lYUjBaWEp1TG5Od2JHbDBLSFJ2YTJWdUtTNXFiMmx1S0VaTVNWQkZSRjlOVDFaRlRVVk9WRk5iZEc5clpXNWRLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSEJoZEhSbGNtNDdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJobFkydHpJSFpoYkhWbElHOW1JR1JwY21WamRHbHZiaUJ0YjJSbExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdScGNtVmpkR2x2Ymx4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2x6T2lCbWRXNWpkR2x2YmlCcGN5aGthWEpsWTNScGIyNHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5aaGJIVmxJRDA5UFNCa2FYSmxZM1JwYjI0N1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRWEJ3YkdsbGN5QmthWEpsWTNScGIyNGdZMnhoYzNNZ2RHOGdkR2hsSUhKdmIzUWdTRlJOVENCbGJHVnRaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaFpHUkRiR0Z6Y3pvZ1puVnVZM1JwYjI0Z1lXUmtRMnhoYzNNb0tTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWNtOXZkQzVqYkdGemMweHBjM1F1WVdSa0tFZHNhV1JsTG5ObGRIUnBibWR6TG1Oc1lYTnpaWE11WkdseVpXTjBhVzl1VzNSb2FYTXVkbUZzZFdWZEtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVnpJR1JwY21WamRHbHZiaUJqYkdGemN5Qm1jbTl0SUhSb1pTQnliMjkwSUVoVVRVd2daV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabFEyeGhjM002SUdaMWJtTjBhVzl1SUhKbGJXOTJaVU5zWVhOektDa2dlMXh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hIYkdsa1pTNXpaWFIwYVc1bmN5NWpiR0Z6YzJWekxtUnBjbVZqZEdsdmJsdDBhR2x6TG5aaGJIVmxYU2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdSbFptbHVaU2hFYVhKbFkzUnBiMjRzSUNkMllXeDFaU2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCa2FYSmxZM1JwYjI0dVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRVJwY21WamRHbHZiaTVmZGp0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFJ6SUhaaGJIVmxJRzltSUhSb1pTQmthWEpsWTNScGIyNHVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2RtRnNkV1ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb1ZrRk1TVVJmUkVsU1JVTlVTVTlPVXk1cGJtUmxlRTltS0haaGJIVmxLU0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJRVJwY21WamRHbHZiaTVmZGlBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25SR2x5WldOMGFXOXVJSFpoYkhWbElHMTFjM1FnWW1VZ1lHeDBjbUFnYjNJZ1lISjBiR0FuS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkRiR1ZoY2lCa2FYSmxZM1JwYjI0Z1kyeGhjM002WEc0Z0lDQXFJQzBnYjI0Z1pHVnpkSEp2ZVNCMGJ5QmljbWx1WnlCSVZFMU1JSFJ2SUdsMGN5QnBibWwwYVdGc0lITjBZWFJsWEc0Z0lDQXFJQzBnYjI0Z2RYQmtZWFJsSUhSdklISmxiVzkyWlNCamJHRnpjeUJpWldadmNtVWdjbVZoY0hCc2FXNW5JR0psYkd4dmQxeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLRnNuWkdWemRISnZlU2NzSUNkMWNHUmhkR1VuWFN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFUnBjbVZqZEdsdmJpNXlaVzF2ZG1WRGJHRnpjeWdwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNWdWRDQmpiMjF3YjI1bGJuUTZYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUmxJSFJ2SUhKbFpteGxZM1FnWTJoaGJtZGxjeUJwYmlCa2FYSmxZM1JwYjI0Z2RtRnNkV1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmRYQmtZWFJsSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFUnBjbVZqZEdsdmJpNXRiM1Z1ZENncE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVhCd2JIa2daR2x5WldOMGFXOXVJR05zWVhOek9seHVJQ0FnS2lBdElHSmxabTl5WlNCaWRXbHNaR2x1WnlCMGJ5QmhjSEJzZVNCamJHRnpjeUJtYjNJZ2RHaGxJR1pwY25OMElIUnBiV1ZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMGJ5QnlaV0Z3Y0d4NUlHUnBjbVZqZEdsdmJpQmpiR0Z6Y3lCMGFHRjBJRzFoZVNCamFHRnVaMlZrWEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b1d5ZGlkV2xzWkM1aVpXWnZjbVVuTENBbmRYQmtZWFJsSjEwc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkVhWEpsWTNScGIyNHVZV1JrUTJ4aGMzTW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVScGNtVmpkR2x2Ymp0Y2JuMWNibHh1THlvcVhHNGdLaUJTWldac1pXTjBjeUIyWVd4MVpTQnZaaUJuYkdsa1pTQnRiM1psYldWdWRDNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlFZHNhV1JsWEc0Z0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlFTnZiWEJ2Ym1WdWRITmNiaUFxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBcUwxeHVablZ1WTNScGIyNGdVblJzSUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3lrZ2UxeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRTVsWjJGMFpYTWdkR2hsSUhCaGMzTmxaQ0IwY21GdWMyeGhkR1VnYVdZZ1oyeHBaR1VnYVhNZ2FXNGdVbFJNSUc5d2RHbHZiaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdkSEpoYm5Oc1lYUmxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxdlpHbG1lVG9nWm5WdVkzUnBiMjRnYlc5a2FXWjVLSFJ5WVc1emJHRjBaU2tnZTF4dUlDQWdJQ0FnYVdZZ0tFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbWx6S0NkeWRHd25LU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFhSeVlXNXpiR0YwWlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeVlXNXpiR0YwWlR0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1ZYQmtZWFJsY3lCbmJHbGtaU0J0YjNabGJXVnVkQ0IzYVhSb0lHRWdZR2RoY0dBZ2MyVjBkR2x1WjNNdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCSGJHbGtaVnh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCRGIyMXdiMjVsYm5SelhHNGdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlFZGhjQ0FvUjJ4cFpHVXNJRU52YlhCdmJtVnVkSE1wSUh0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQk5iMlJwWm1sbGN5QndZWE56WldRZ2RISmhibk5zWVhSbElIWmhiSFZsSUhkcGRHZ2diblZ0WW1WeUlHbHVJSFJvWlNCZ1oyRndZQ0J6WlhSMGFXNW5jeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdkSEpoYm5Oc1lYUmxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxdlpHbG1lVG9nWm5WdVkzUnBiMjRnYlc5a2FXWjVLSFJ5WVc1emJHRjBaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5WVc1emJHRjBaU0FySUVOdmJYQnZibVZ1ZEhNdVIyRndjeTUyWVd4MVpTQXFJRWRzYVdSbExtbHVaR1Y0TzF4dUlDQWdJSDFjYmlBZ2ZUdGNibjFjYmx4dUx5b3FYRzRnS2lCVmNHUmhkR1Z6SUdkc2FXUmxJRzF2ZG1WdFpXNTBJSGRwZEdnZ2QybGtkR2dnYjJZZ1lXUmthWFJwYjI1aGJDQmpiRzl1WlhNZ2QybGtkR2d1WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JIYkdsa1pWeHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JEYjIxd2IyNWxiblJ6WEc0Z0tpQkFjbVYwZFhKdUlIdFBZbXBsWTNSOVhHNGdLaTljYm1aMWJtTjBhVzl1SUVkeWIzY2dLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpLU0I3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FXUmtjeUIwYnlCMGFHVWdjR0Z6YzJWa0lIUnlZVzV6YkdGMFpTQjNhV1IwYUNCdlppQjBhR1VnYUdGc1ppQnZaaUJqYkc5dVpYTXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdE9kVzFpWlhKOUlIUnlZVzV6YkdGMFpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjJScFpuazZJR1oxYm1OMGFXOXVJRzF2WkdsbWVTaDBjbUZ1YzJ4aGRHVXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVWdLeUJEYjIxd2IyNWxiblJ6TGtOc2IyNWxjeTVuY205M0lDOGdNanRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nVlhCa1lYUmxjeUJuYkdsa1pTQnRiM1psYldWdWRDQjNhWFJvSUdFZ1lIQmxaV3RnSUhObGRIUnBibWR6TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnUjJ4cFpHVmNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnUTI5dGNHOXVaVzUwYzF4dUlDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ292WEc1bWRXNWpkR2x2YmlCUVpXVnJhVzVuSUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3lrZ2UxeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRTF2WkdsbWFXVnpJSEJoYzNObFpDQjBjbUZ1YzJ4aGRHVWdkbUZzZFdVZ2QybDBhQ0JoSUdCd1pXVnJZQ0J6WlhSMGFXNW5MbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElDQjdUblZ0WW1WeWZTQjBjbUZ1YzJ4aGRHVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5a2FXWjVPaUJtZFc1amRHbHZiaUJ0YjJScFpua29kSEpoYm5Oc1lYUmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb1IyeHBaR1V1YzJWMGRHbHVaM011Wm05amRYTkJkQ0ErUFNBd0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCd1pXVnJJRDBnUTI5dGNHOXVaVzUwY3k1UVpXVnJMblpoYkhWbE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGMwOWlhbVZqZENod1pXVnJLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNtRnVjMnhoZEdVZ0xTQndaV1ZyTG1KbFptOXlaVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNtRnVjMnhoZEdVZ0xTQndaV1ZyTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEhKaGJuTnNZWFJsTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibjFjYmx4dUx5b3FYRzRnS2lCVmNHUmhkR1Z6SUdkc2FXUmxJRzF2ZG1WdFpXNTBJSGRwZEdnZ1lTQmdabTlqZFhOQmRHQWdjMlYwZEdsdVozTXVYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkhiR2xrWlZ4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkRiMjF3YjI1bGJuUnpYRzRnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0tpOWNibVoxYm1OMGFXOXVJRVp2WTNWemFXNW5JQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFMXZaR2xtYVdWeklIQmhjM05sWkNCMGNtRnVjMnhoZEdVZ2RtRnNkV1VnZDJsMGFDQnBibVJsZUNCcGJpQjBhR1VnWUdadlkzVnpRWFJnSUhObGRIUnBibWN1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdJSHRPZFcxaVpYSjlJSFJ5WVc1emJHRjBaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDUxYldKbGNuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCdGIyUnBabms2SUdaMWJtTjBhVzl1SUcxdlpHbG1lU2gwY21GdWMyeGhkR1VwSUh0Y2JpQWdJQ0FnSUhaaGNpQm5ZWEFnUFNCRGIyMXdiMjVsYm5SekxrZGhjSE11ZG1Gc2RXVTdYRzRnSUNBZ0lDQjJZWElnZDJsa2RHZ2dQU0JEYjIxd2IyNWxiblJ6TGxOcGVtVnpMbmRwWkhSb08xeHVJQ0FnSUNBZ2RtRnlJR1p2WTNWelFYUWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN5NW1iMk4xYzBGME8xeHVJQ0FnSUNBZ2RtRnlJSE5zYVdSbFYybGtkR2dnUFNCRGIyMXdiMjVsYm5SekxsTnBlbVZ6TG5Oc2FXUmxWMmxrZEdnN1hHNWNiaUFnSUNBZ0lHbG1JQ2htYjJOMWMwRjBJRDA5UFNBblkyVnVkR1Z5SnlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISmhibk5zWVhSbElDMGdLSGRwWkhSb0lDOGdNaUF0SUhOc2FXUmxWMmxrZEdnZ0x5QXlLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5WVc1emJHRjBaU0F0SUhOc2FXUmxWMmxrZEdnZ0tpQm1iMk4xYzBGMElDMGdaMkZ3SUNvZ1ptOWpkWE5CZER0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1FYQndiR2xsY3lCa2FXWm1jbVZ1ZENCMGNtRnVjMlp2Y20xbGNuTWdiMjRnZEhKaGJuTnNZWFJsSUhaaGJIVmxMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdSMnhwWkdWY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdRMjl0Y0c5dVpXNTBjMXh1SUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJ0ZFhSaGRHOXlJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQk5aWEpuWlNCcGJuTjBZVzVqWlNCMGNtRnVjMlp2Y20xbGNuTWdkMmwwYUNCamIyeHNaV04wYVc5dUlHOW1JR1JsWm1GMWJIUWdkSEpoYm5ObWIzSnRaWEp6TGx4dUlDQWdLaUJKZENkeklHbHRjRzl5ZEdGdWRDQjBhR0YwSUhSb1pTQlNkR3dnWTI5dGNHOXVaVzUwSUdKbElHeGhjM1FnYjI0Z2RHaGxJR3hwYzNRc1hHNGdJQ0FxSUhOdklHbDBJSEpsWm14bFkzUnpJR0ZzYkNCd2NtVjJhVzkxY3lCMGNtRnVjMlp2Y20xaGRHbHZibk11WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0QmNuSmhlWDFjYmlBZ0lDb3ZYRzRnSUhaaGNpQlVVa0ZPVTBaUFVrMUZVbE1nUFNCYlIyRndMQ0JIY205M0xDQlFaV1ZyYVc1bkxDQkdiMk4xYzJsdVoxMHVZMjl1WTJGMEtFZHNhV1JsTGw5MExDQmJVblJzWFNrN1hHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJRYVhCc2FXNWxjeUIwY21GdWMyeGhkR1VnZG1Gc2RXVWdkMmwwYUNCeVpXZHBjM1JsY21Wa0lIUnlZVzV6Wm05eWJXVnljeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdkSEpoYm5Oc1lYUmxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxMWRHRjBaVG9nWm5WdVkzUnBiMjRnYlhWMFlYUmxLSFJ5WVc1emJHRjBaU2tnZTF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCVVVrRk9VMFpQVWsxRlVsTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFJ5WVc1elptOXliV1Z5SUQwZ1ZGSkJUbE5HVDFKTlJWSlRXMmxkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0hSeVlXNXpabTl5YldWeUtTQW1KaUJwYzBaMWJtTjBhVzl1S0hSeVlXNXpabTl5YldWeUtDa3ViVzlrYVdaNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSeVlXNXpiR0YwWlNBOUlIUnlZVzV6Wm05eWJXVnlLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpMQ0JGZG1WdWRITXBMbTF2WkdsbWVTaDBjbUZ1YzJ4aGRHVXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUhkaGNtNG9KMVJ5WVc1elptOXliV1Z5SUhOb2IzVnNaQ0JpWlNCaElHWjFibU4wYVc5dUlIUm9ZWFFnY21WMGRYSnVjeUJoYmlCdlltcGxZM1FnZDJsMGFDQmdiVzlrYVdaNUtDbGdJRzFsZEdodlpDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1U3WEc0Z0lDQWdmVnh1SUNCOU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCVWNtRnVjMnhoZEdVZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnZG1GeUlGUnlZVzV6YkdGMFpTQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUWlhSeklIWmhiSFZsSUc5bUlIUnlZVzV6YkdGMFpTQnZiaUJJVkUxTUlHVnNaVzFsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnZG1Gc2RXVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z2MyVjBLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQjJZWElnZEhKaGJuTm1iM0p0SUQwZ2JYVjBZWFJ2Y2loSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3lrdWJYVjBZWFJsS0haaGJIVmxLVHRjYmx4dUlDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXVjM1I1YkdVdWRISmhibk5tYjNKdElEMGdKM1J5WVc1emJHRjBaVE5rS0NjZ0t5QXRNU0FxSUhSeVlXNXpabTl5YlNBcklDZHdlQ3dnTUhCNExDQXdjSGdwSnp0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklIWmhiSFZsSUc5bUlIUnlZVzV6YkdGMFpTQm1jbTl0SUVoVVRVd2daV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabE9pQm1kVzVqZEdsdmJpQnlaVzF2ZG1Vb0tTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1emRIbHNaUzUwY21GdWMyWnZjbTBnUFNBbkp6dGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRk5sZENCdVpYY2dkSEpoYm5Oc1lYUmxJSFpoYkhWbE9seHVJQ0FnS2lBdElHOXVJRzF2ZG1VZ2RHOGdjbVZtYkdWamRDQnBibVJsZUNCamFHRnVaMlZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKSUhSdklISmxabXhsWTNRZ2NHOXpjMmxpYkdVZ1kyaGhibWRsY3lCcGJpQnZjSFJwYjI1elhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMjF2ZG1VbkxDQm1kVzVqZEdsdmJpQW9ZMjl1ZEdWNGRDa2dlMXh1SUNBZ0lIWmhjaUJuWVhBZ1BTQkRiMjF3YjI1bGJuUnpMa2RoY0hNdWRtRnNkV1U3WEc0Z0lDQWdkbUZ5SUd4bGJtZDBhQ0E5SUVOdmJYQnZibVZ1ZEhNdVUybDZaWE11YkdWdVozUm9PMXh1SUNBZ0lIWmhjaUIzYVdSMGFDQTlJRU52YlhCdmJtVnVkSE11VTJsNlpYTXVjMnhwWkdWWGFXUjBhRHRjYmx4dUlDQWdJR2xtSUNoSGJHbGtaUzVwYzFSNWNHVW9KMk5oY205MWMyVnNKeWtnSmlZZ1EyOXRjRzl1Wlc1MGN5NVNkVzR1YVhOUFptWnpaWFFvSnp3bktTa2dlMXh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVVY21GdWMybDBhVzl1TG1GbWRHVnlLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1JYWmxiblJ6TG1WdGFYUW9KM1J5WVc1emJHRjBaUzVxZFcxd0p5azdYRzVjYmlBZ0lDQWdJQ0FnVkhKaGJuTnNZWFJsTG5ObGRDaDNhV1IwYUNBcUlDaHNaVzVuZEdnZ0xTQXhLU2s3WEc0Z0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUZSeVlXNXpiR0YwWlM1elpYUW9MWGRwWkhSb0lDMGdaMkZ3SUNvZ2JHVnVaM1JvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1IyeHBaR1V1YVhOVWVYQmxLQ2RqWVhKdmRYTmxiQ2NwSUNZbUlFTnZiWEJ2Ym1WdWRITXVVblZ1TG1selQyWm1jMlYwS0NjK0p5a3BJSHRjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1aFpuUmxjaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2QwY21GdWMyeGhkR1V1YW5WdGNDY3BPMXh1WEc0Z0lDQWdJQ0FnSUZSeVlXNXpiR0YwWlM1elpYUW9NQ2s3WEc0Z0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUZSeVlXNXpiR0YwWlM1elpYUW9kMmxrZEdnZ0tpQnNaVzVuZEdnZ0t5Qm5ZWEFnS2lCc1pXNW5kR2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQlVjbUZ1YzJ4aGRHVXVjMlYwS0dOdmJuUmxlSFF1Ylc5MlpXMWxiblFwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElIUnlZVzV6YkdGMFpUcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklHSnlhVzVuSUcxaGNtdDFjQ0IwYnlCcGRITWdhVzVwZEdGc0lITjBZWFJsWEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyUmxjM1J5YjNrbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdWSEpoYm5Oc1lYUmxMbkpsYlc5MlpTZ3BPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnVkhKaGJuTnNZWFJsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJVY21GdWMybDBhVzl1SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJJYjJ4a2N5QnBibUZqZEdsMmFYUjVJSE4wWVhSMWN5QnZaaUIwY21GdWMybDBhVzl1TGx4dUlDQWdLaUJYYUdWdUlIUnlkV1VnZEhKaGJuTnBkR2x2YmlCcGN5QnViM1FnWVhCd2JHbGxaQzVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTBKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1SUNCMllYSWdaR2x6WVdKc1pXUWdQU0JtWVd4elpUdGNibHh1SUNCMllYSWdWSEpoYm5OcGRHbHZiaUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGIyMXdiM05sY3lCemRISnBibWNnYjJZZ2RHaGxJRU5UVXlCMGNtRnVjMmwwYVc5dUxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhCeWIzQmxjblI1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VTNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTnZiWEJ2YzJVNklHWjFibU4wYVc5dUlHTnZiWEJ2YzJVb2NISnZjR1Z5ZEhrcElIdGNiaUFnSUNBZ0lIWmhjaUJ6WlhSMGFXNW5jeUE5SUVkc2FXUmxMbk5sZEhScGJtZHpPMXh1WEc0Z0lDQWdJQ0JwWmlBb0lXUnBjMkZpYkdWa0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQndjbTl3WlhKMGVTQXJJQ2NnSnlBcklIUm9hWE11WkhWeVlYUnBiMjRnS3lBbmJYTWdKeUFySUhObGRIUnBibWR6TG1GdWFXMWhkR2x2YmxScGJXbHVaMFoxYm1NN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCd2NtOXdaWEowZVNBcklDY2dNRzF6SUNjZ0t5QnpaWFIwYVc1bmN5NWhibWx0WVhScGIyNVVhVzFwYm1kR2RXNWpPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdkbUZzZFdVZ2IyWWdkSEpoYm5OcGRHbHZiaUJ2YmlCSVZFMU1JR1ZzWlcxbGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WnoxOUlIQnliM0JsY25SNVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUhObGRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCd2NtOXdaWEowZVNBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nSjNSeVlXNXpabTl5YlNjN1hHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5TG5OMGVXeGxMblJ5WVc1emFYUnBiMjRnUFNCMGFHbHpMbU52YlhCdmMyVW9jSEp2Y0dWeWRIa3BPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGJXOTJaWE1nZG1Gc2RXVWdiMllnZEhKaGJuTnBkR2x2YmlCbWNtOXRJRWhVVFV3Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVVvS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTV6ZEhsc1pTNTBjbUZ1YzJsMGFXOXVJRDBnSnljN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVblZ1Y3lCallXeHNZbUZqYXlCaFpuUmxjaUJoYm1sdFlYUnBiMjR1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnRjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdGbWRHVnlPaUJtZFc1amRHbHZiaUJoWm5SbGNpaGpZV3hzWW1GamF5a2dlMXh1SUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lHTmhiR3hpWVdOcktDazdYRzRnSUNBZ0lDQjlMQ0IwYUdsekxtUjFjbUYwYVc5dUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJGYm1GaWJHVWdkSEpoYm5OcGRHbHZiaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWlc1aFlteGxPaUJtZFc1amRHbHZiaUJsYm1GaWJHVW9LU0I3WEc0Z0lDQWdJQ0JrYVhOaFlteGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0IwYUdsekxuTmxkQ2dwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFUnBjMkZpYkdVZ2RISmhibk5wZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaR2x6WVdKc1pUb2dablZ1WTNScGIyNGdaR2x6WVdKc1pTZ3BJSHRjYmlBZ0lDQWdJR1JwYzJGaWJHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdkR2hwY3k1elpYUW9LVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnWkdWbWFXNWxLRlJ5WVc1emFYUnBiMjRzSUNka2RYSmhkR2x2Ymljc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdSMWNtRjBhVzl1SUc5bUlIUm9aU0IwY21GdWMybDBhVzl1SUdKaGMyVmtYRzRnSUNBZ0lDb2diMjRnWTNWeWNtVnVkR3g1SUhKMWJtNXBibWNnWVc1cGJXRjBhVzl1SUhSNWNHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFvS1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNibHh1SUNBZ0lDQWdhV1lnS0Vkc2FXUmxMbWx6Vkhsd1pTZ25jMnhwWkdWeUp5a2dKaVlnUTI5dGNHOXVaVzUwY3k1U2RXNHViMlptYzJWMEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFIwYVc1bmN5NXlaWGRwYm1SRWRYSmhkR2x2Ymp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhObGRIUnBibWR6TG1GdWFXMWhkR2x2YmtSMWNtRjBhVzl1TzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTmxkQ0IwY21GdWMybDBhVzl1SUdCemRIbHNaV0FnZG1Gc2RXVTZYRzRnSUNBcUlDMGdiMjRnWldGamFDQnRiM1pwYm1jc0lHSmxZMkYxYzJVZ2FYUWdiV0Y1SUdKbElHTnNaV0Z5WldRZ1lua2diMlptYzJWMElHMXZkbVZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmJXOTJaU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCVWNtRnVjMmwwYVc5dUxuTmxkQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSR2x6WVdKc1pTQjBjbUZ1YzJsMGFXOXVPbHh1SUNBZ0tpQXRJR0psWm05eVpTQnBibWwwYVdGc0lHSjFhV3hrSUhSdklHRjJiMmxrSUhSeVlXNXphWFJwYjI1cGJtY2dabkp2YlNCZ01HQWdkRzhnWUhOMFlYSjBRWFJnSUdsdVpHVjRYRzRnSUNBcUlDMGdkMmhwYkdVZ2NtVnphWHBwYm1jZ2QybHVaRzkzSUdGdVpDQnlaV05oYkdOMWJHRjBhVzVuSUdScGJXVnVkR2x2Ym5OY2JpQWdJQ29nTFNCdmJpQnFkVzF3YVc1bklHWnliMjBnYjJabWMyVjBJSFJ5WVc1emFYUnBiMjRnWVhRZ2MzUmhjblFnWVc1a0lHVnVaQ0JsWkdkbGN5QnBiaUJnWTJGeWIzVnpaV3hnSUhSNWNHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWhiSjJKMWFXeGtMbUpsWm05eVpTY3NJQ2R5WlhOcGVtVW5MQ0FuZEhKaGJuTnNZWFJsTG1wMWJYQW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUZSeVlXNXphWFJwYjI0dVpHbHpZV0pzWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUlc1aFlteGxJSFJ5WVc1emFYUnBiMjQ2WEc0Z0lDQXFJQzBnYjI0Z1pXRmphQ0J5ZFc1dWFXNW5MQ0JpWldOaGRYTmxJR2wwSUcxaGVTQmlaU0JrYVhOaFlteGxaQ0JpZVNCdlptWnpaWFFnYlc5MlpWeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2R5ZFc0bkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdWSEpoYm5OcGRHbHZiaTVsYm1GaWJHVW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCMGNtRnVjMmwwYVc5dU9seHVJQ0FnS2lBdElHOXVJR1JsYzNSeWIzbHBibWNnZEc4Z1luSnBibWNnYldGeWEzVndJSFJ2SUdsMGN5QnBibWwwWVd3Z2MzUmhkR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQlVjbUZ1YzJsMGFXOXVMbkpsYlc5MlpTZ3BPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnVkhKaGJuTnBkR2x2Ymp0Y2JuMWNibHh1THlvcVhHNGdLaUJVWlhOMElIWnBZU0JoSUdkbGRIUmxjaUJwYmlCMGFHVWdiM0IwYVc5dWN5QnZZbXBsWTNRZ2RHOGdjMlZsWEc0Z0tpQnBaaUIwYUdVZ2NHRnpjMmwyWlNCd2NtOXdaWEowZVNCcGN5QmhZMk5sYzNObFpDNWNiaUFxWEc0Z0tpQkFjMlZsSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5WFNVTkhMMFYyWlc1MFRHbHpkR1Z1WlhKUGNIUnBiMjV6TDJKc2IySXZaMmd0Y0dGblpYTXZaWGh3YkdGcGJtVnlMbTFrSTJabFlYUjFjbVV0WkdWMFpXTjBhVzl1WEc0Z0tpOWNibHh1ZG1GeUlITjFjSEJ2Y25SelVHRnpjMmwyWlNBOUlHWmhiSE5sTzF4dVhHNTBjbmtnZTF4dUlDQjJZWElnYjNCMGN5QTlJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoN2ZTd2dKM0JoYzNOcGRtVW5MQ0I3WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0J6ZFhCd2IzSjBjMUJoYzNOcGRtVWdQU0IwY25WbE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0ozUmxjM1JRWVhOemFYWmxKeXdnYm5Wc2JDd2diM0IwY3lrN1hHNGdJSGRwYm1SdmR5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLQ2QwWlhOMFVHRnpjMmwyWlNjc0lHNTFiR3dzSUc5d2RITXBPMXh1ZlNCallYUmphQ0FvWlNrZ2UzMWNibHh1ZG1GeUlITjFjSEJ2Y25SelVHRnpjMmwyWlNReElEMGdjM1Z3Y0c5eWRITlFZWE56YVhabE8xeHVYRzUyWVhJZ1UxUkJVbFJmUlZaRlRsUlRJRDBnV3lkMGIzVmphSE4wWVhKMEp5d2dKMjF2ZFhObFpHOTNiaWRkTzF4dWRtRnlJRTFQVmtWZlJWWkZUbFJUSUQwZ1d5ZDBiM1ZqYUcxdmRtVW5MQ0FuYlc5MWMyVnRiM1psSjEwN1hHNTJZWElnUlU1RVgwVldSVTVVVXlBOUlGc25kRzkxWTJobGJtUW5MQ0FuZEc5MVkyaGpZVzVqWld3bkxDQW5iVzkxYzJWMWNDY3NJQ2R0YjNWelpXeGxZWFpsSjEwN1hHNTJZWElnVFU5VlUwVmZSVlpGVGxSVElEMGdXeWR0YjNWelpXUnZkMjRuTENBbmJXOTFjMlZ0YjNabEp5d2dKMjF2ZFhObGRYQW5MQ0FuYlc5MWMyVnNaV0YyWlNkZE8xeHVYRzVtZFc1amRHbHZiaUJUZDJsd1pTQW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdkbUZ5SUhOM2FYQmxVMmx1SUQwZ01EdGNiaUFnZG1GeUlITjNhWEJsVTNSaGNuUllJRDBnTUR0Y2JpQWdkbUZ5SUhOM2FYQmxVM1JoY25SWklEMGdNRHRjYmlBZ2RtRnlJR1JwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYRzRnSUhaaGNpQnRiM1psWVdKc1pTQTlJSFJ5ZFdVN1hHNGdJSFpoY2lCallYQjBkWEpsSUQwZ2MzVndjRzl5ZEhOUVlYTnphWFpsSkRFZ1B5QjdJSEJoYzNOcGRtVTZJSFJ5ZFdVZ2ZTQTZJR1poYkhObE8xeHVYRzRnSUhaaGNpQlRkMmx3WlNBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwYVdGc2FYcGxjeUJ6ZDJsd1pTQmlhVzVrYVc1bmN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVpYVc1a1UzZHBjR1ZUZEdGeWRDZ3BPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVoaGJtUnNaWElnWm05eUlHQnpkMmx3WlhOMFlYSjBZQ0JsZG1WdWRDNGdRMkZzWTNWc1lYUmxjeUJsYm5SeWVTQndiMmx1ZEhNZ2IyWWdkR2hsSUhWelpYSW5jeUIwWVhBdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhabGJuUmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE4wWVhKME9pQm1kVzVqZEdsdmJpQnpkR0Z5ZENobGRtVnVkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDRmthWE5oWW14bFpDQW1KaUFoUjJ4cFpHVXVaR2x6WVdKc1pXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWthWE5oWW14bEtDazdYRzVjYmlBZ0lDQWdJQ0FnZG1GeUlITjNhWEJsSUQwZ2RHaHBjeTUwYjNWamFHVnpLR1YyWlc1MEtUdGNibHh1SUNBZ0lDQWdJQ0J0YjNabFlXSnNaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSE4zYVhCbFUybHVJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdjM2RwY0dWVGRHRnlkRmdnUFNCMGIwbHVkQ2h6ZDJsd1pTNXdZV2RsV0NrN1hHNGdJQ0FnSUNBZ0lITjNhWEJsVTNSaGNuUlpJRDBnZEc5SmJuUW9jM2RwY0dVdWNHRm5aVmtwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1sdVpGTjNhWEJsVFc5MlpTZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnBibVJUZDJsd1pVVnVaQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R6ZDJsd1pTNXpkR0Z5ZENjcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWhoYm1Sc1pYSWdabTl5SUdCemQybHdaVzF2ZG1WZ0lHVjJaVzUwTGlCRFlXeGpkV3hoZEdWeklIVnpaWEluY3lCMFlYQWdZVzVuYkdVZ1lXNWtJR1JwYzNSaGJtTmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHVjJaVzUwWEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkyWlRvZ1puVnVZM1JwYjI0Z2JXOTJaU2hsZG1WdWRDa2dlMXh1SUNBZ0lDQWdhV1lnS0NGSGJHbGtaUzVrYVhOaFlteGxaQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdYMGRzYVdSbEpITmxkSFJwYm1keklEMGdSMnhwWkdVdWMyVjBkR2x1WjNNc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNWamFFRnVaMnhsSUQwZ1gwZHNhV1JsSkhObGRIUnBibWR6TG5SdmRXTm9RVzVuYkdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNWamFGSmhkR2x2SUQwZ1gwZHNhV1JsSkhObGRIUnBibWR6TG5SdmRXTm9VbUYwYVc4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemMyVnpJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMbU5zWVhOelpYTTdYRzVjYmx4dUlDQWdJQ0FnSUNCMllYSWdjM2RwY0dVZ1BTQjBhR2x6TG5SdmRXTm9aWE1vWlhabGJuUXBPMXh1WEc0Z0lDQWdJQ0FnSUhaaGNpQnpkV0pGZUZONElEMGdkRzlKYm5Rb2MzZHBjR1V1Y0dGblpWZ3BJQzBnYzNkcGNHVlRkR0Z5ZEZnN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZFdKRmVWTjVJRDBnZEc5SmJuUW9jM2RwY0dVdWNHRm5aVmtwSUMwZ2MzZHBjR1ZUZEdGeWRGazdYRzRnSUNBZ0lDQWdJSFpoY2lCd2IzZEZXQ0E5SUUxaGRHZ3VZV0p6S0hOMVlrVjRVM2dnUER3Z01pazdYRzRnSUNBZ0lDQWdJSFpoY2lCd2IzZEZXU0E5SUUxaGRHZ3VZV0p6S0hOMVlrVjVVM2tnUER3Z01pazdYRzRnSUNBZ0lDQWdJSFpoY2lCemQybHdaVWg1Y0c5MFpXNTFjMlVnUFNCTllYUm9Mbk54Y25Rb2NHOTNSVmdnS3lCd2IzZEZXU2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQnpkMmx3WlVOaGRHaGxkSFZ6SUQwZ1RXRjBhQzV6Y1hKMEtIQnZkMFZaS1R0Y2JseHVJQ0FnSUNBZ0lDQnpkMmx3WlZOcGJpQTlJRTFoZEdndVlYTnBiaWh6ZDJsd1pVTmhkR2hsZEhWeklDOGdjM2RwY0dWSWVYQnZkR1Z1ZFhObEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2JXOTJaV0ZpYkdVZ0ppWWdjM2RwY0dWVGFXNGdLaUF4T0RBZ0x5Qk5ZWFJvTGxCSklEd2dkRzkxWTJoQmJtZHNaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHVjJaVzUwTG5OMGIzQlFjbTl3WVdkaGRHbHZiaWdwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVOYjNabExtMWhhMlVvYzNWaVJYaFRlQ0FxSUhSdlJteHZZWFFvZEc5MVkyaFNZWFJwYnlrcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbkp2YjNRdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMyVnpMbVJ5WVdkbmFXNW5LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R6ZDJsd1pTNXRiM1psSnlrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdiVzkyWldGaWJHVWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVoaGJtUnNaWElnWm05eUlHQnpkMmx3WldWdVpHQWdaWFpsYm5RdUlFWnBibWwwYVdGc2FYcGxjeUIxYzJWeUozTWdkR0Z3SUdGdVpDQmtaV05wWkdWeklHRmliM1YwSUdkc2FXUmxJRzF2ZG1VdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhabGJuUmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR1Z1WkRvZ1puVnVZM1JwYjI0Z1pXNWtLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVVkc2FXUmxMbVJwYzJGaWJHVmtLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnpaWFIwYVc1bmN5QTlJRWRzYVdSbExuTmxkSFJwYm1kek8xeHVYRzRnSUNBZ0lDQWdJSFpoY2lCemQybHdaU0E5SUhSb2FYTXVkRzkxWTJobGN5aGxkbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lIWmhjaUIwYUhKbGMyaHZiR1FnUFNCMGFHbHpMblJvY21WemFHOXNaQ2hsZG1WdWRDazdYRzVjYmlBZ0lDQWdJQ0FnZG1GeUlITjNhWEJsUkdsemRHRnVZMlVnUFNCemQybHdaUzV3WVdkbFdDQXRJSE4zYVhCbFUzUmhjblJZTzF4dUlDQWdJQ0FnSUNCMllYSWdjM2RwY0dWRVpXY2dQU0J6ZDJsd1pWTnBiaUFxSURFNE1DQXZJRTFoZEdndVVFazdYRzRnSUNBZ0lDQWdJSFpoY2lCemRHVndjeUE5SUUxaGRHZ3VjbTkxYm1Rb2MzZHBjR1ZFYVhOMFlXNWpaU0F2SUVOdmJYQnZibVZ1ZEhNdVUybDZaWE11YzJ4cFpHVlhhV1IwYUNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtRmliR1VvS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYlc5MlpXRmliR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNkcGNHVkVhWE4wWVc1alpTQStJSFJvY21WemFHOXNaQ0FtSmlCemQybHdaVVJsWnlBOElITmxkSFJwYm1kekxuUnZkV05vUVc1bmJHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvYVd4bElITjNhWEJsSUdseklIQnZjMmwwYVhabElHRnVaQ0JuY21WaGRHVnlJSFJvWVc0Z2RHaHlaWE5vYjJ4a0lHMXZkbVVnWW1GamEzZGhjbVF1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzJWMGRHbHVaM011Y0dWeVZHOTFZMmdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNITWdQU0JOWVhSb0xtMXBiaWh6ZEdWd2N5d2dkRzlKYm5Rb2MyVjBkR2x1WjNNdWNHVnlWRzkxWTJncEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbWx6S0NkeWRHd25LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd2N5QTlJQzF6ZEdWd2N6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1U2RXNHViV0ZyWlNoRGIyMXdiMjVsYm5SekxrUnBjbVZqZEdsdmJpNXlaWE52YkhabEtDYzhKeUFySUhOMFpYQnpLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHpkMmx3WlVScGMzUmhibU5sSUR3Z0xYUm9jbVZ6YUc5c1pDQW1KaUJ6ZDJsd1pVUmxaeUE4SUhObGRIUnBibWR6TG5SdmRXTm9RVzVuYkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9hV3hsSUhOM2FYQmxJR2x6SUc1bFoyRjBhWFpsSUdGdVpDQnNiM2RsY2lCMGFHRnVJRzVsWjJGMGFYWmxJSFJvY21WemFHOXNaQ0J0YjNabElHWnZjbmRoY21RdVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MyVjBkR2x1WjNNdWNHVnlWRzkxWTJncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjSE1nUFNCTllYUm9MbTFoZUNoemRHVndjeXdnTFhSdlNXNTBLSE5sZEhScGJtZHpMbkJsY2xSdmRXTm9LU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hEYjIxd2IyNWxiblJ6TGtScGNtVmpkR2x2Ymk1cGN5Z25jblJzSnlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjSE1nUFNBdGMzUmxjSE03WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVVblZ1TG0xaGEyVW9RMjl0Y0c5dVpXNTBjeTVFYVhKbFkzUnBiMjR1Y21WemIyeDJaU2duUGljZ0t5QnpkR1Z3Y3lrcE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlhhR2xzWlNCemQybHdaU0JrYjI0bmRDQnlaV0ZqYUNCa2FYTjBZVzVqWlNCaGNIQnNlU0J3Y21WMmFXOTFjeUIwY21GdWMyWnZjbTB1WEc0Z0lDQWdJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMazF2ZG1VdWJXRnJaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzV5YjI5MExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb2MyVjBkR2x1WjNNdVkyeGhjM05sY3k1a2NtRm5aMmx1WnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1MWJtSnBibVJUZDJsd1pVMXZkbVVvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUxYm1KcGJtUlRkMmx3WlVWdVpDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHpkMmx3WlM1bGJtUW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJ6ZDJsd1pTZHpJSE4wWVhKMGFXNW5JR1YyWlc1MExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmlhVzVrVTNkcGNHVlRkR0Z5ZERvZ1puVnVZM1JwYjI0Z1ltbHVaRk4zYVhCbFUzUmhjblFvS1NCN1hHNGdJQ0FnSUNCMllYSWdYM1JvYVhNZ1BTQjBhR2x6TzF4dVhHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNibHh1SUNBZ0lDQWdhV1lnS0hObGRIUnBibWR6TG5OM2FYQmxWR2h5WlhOb2IyeGtLU0I3WEc0Z0lDQWdJQ0FnSUVKcGJtUmxjaTV2YmloVFZFRlNWRjlGVmtWT1ZGTmJNRjBzSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMQ0JtZFc1amRHbHZiaUFvWlhabGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCZmRHaHBjeTV6ZEdGeWRDaGxkbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lIMHNJR05oY0hSMWNtVXBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb2MyVjBkR2x1WjNNdVpISmhaMVJvY21WemFHOXNaQ2tnZTF4dUlDQWdJQ0FnSUNCQ2FXNWtaWEl1YjI0b1UxUkJVbFJmUlZaRlRsUlRXekZkTENCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaXdnWm5WdVkzUnBiMjRnS0dWMlpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1gzUm9hWE11YzNSaGNuUW9aWFpsYm5RcE8xeHVJQ0FnSUNBZ0lDQjlMQ0JqWVhCMGRYSmxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUhOM2FYQmxKM01nYzNSaGNuUnBibWNnWlhabGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFZ1WW1sdVpGTjNhWEJsVTNSaGNuUTZJR1oxYm1OMGFXOXVJSFZ1WW1sdVpGTjNhWEJsVTNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMlptS0ZOVVFWSlVYMFZXUlU1VVUxc3dYU3dnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXBPMXh1SUNBZ0lDQWdRbWx1WkdWeUxtOW1aaWhUVkVGU1ZGOUZWa1ZPVkZOYk1WMHNJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJDYVc1a2N5QnpkMmx3WlNkeklHMXZkbWx1WnlCbGRtVnVkQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWW1sdVpGTjNhWEJsVFc5MlpUb2dablZ1WTNScGIyNGdZbWx1WkZOM2FYQmxUVzkyWlNncElIdGNiaUFnSUNBZ0lIWmhjaUJmZEdocGN6SWdQU0IwYUdsek8xeHVYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyNG9UVTlXUlY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMQ0IwYUhKdmRIUnNaU2htZFc1amRHbHZiaUFvWlhabGJuUXBJSHRjYmlBZ0lDQWdJQ0FnWDNSb2FYTXlMbTF2ZG1Vb1pYWmxiblFwTzF4dUlDQWdJQ0FnZlN3Z1IyeHBaR1V1YzJWMGRHbHVaM011ZEdoeWIzUjBiR1VwTENCallYQjBkWEpsS1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZibUpwYm1SeklITjNhWEJsSjNNZ2JXOTJhVzVuSUdWMlpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IxYm1KcGJtUlRkMmx3WlUxdmRtVTZJR1oxYm1OMGFXOXVJSFZ1WW1sdVpGTjNhWEJsVFc5MlpTZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZabVlvVFU5V1JWOUZWa1ZPVkZNc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkNhVzVrY3lCemQybHdaU2R6SUdWdVpHbHVaeUJsZG1WdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkZOM2FYQmxSVzVrT2lCbWRXNWpkR2x2YmlCaWFXNWtVM2RwY0dWRmJtUW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ1gzUm9hWE16SUQwZ2RHaHBjenRjYmx4dUlDQWdJQ0FnUW1sdVpHVnlMbTl1S0VWT1JGOUZWa1ZPVkZNc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5TENCbWRXNWpkR2x2YmlBb1pYWmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ1gzUm9hWE16TG1WdVpDaGxkbVZ1ZENrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUnpJSE4zYVhCbEozTWdaVzVrYVc1bklHVjJaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCMWJtSnBibVJUZDJsd1pVVnVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtVM2RwY0dWRmJtUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMlptS0VWT1JGOUZWa1ZPVkZNc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQk9iM0p0WVd4cGVtVnpJR1YyWlc1MElIUnZkV05vWlhNZ2NHOXBiblJ6SUdGalkyOXlkR2x1WnlCMGJ5QmthV1ptWlhKbGJuUWdkSGx3WlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhabGJuUmNiaUFnSUNBZ0tpOWNiaUFnSUNCMGIzVmphR1Z6T2lCbWRXNWpkR2x2YmlCMGIzVmphR1Z6S0dWMlpXNTBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1RVOVZVMFZmUlZaRlRsUlRMbWx1WkdWNFQyWW9aWFpsYm5RdWRIbHdaU2tnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaWFpsYm5RN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCbGRtVnVkQzUwYjNWamFHVnpXekJkSUh4OElHVjJaVzUwTG1Ob1lXNW5aV1JVYjNWamFHVnpXekJkTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkSE1nZG1Gc2RXVWdiMllnYldsdWFXMTFiU0J6ZDJsd1pTQmthWE4wWVc1alpTQnpaWFIwYVc1bmN5QmlZWE5sWkNCdmJpQmxkbVZ1ZENCMGVYQmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhSb2NtVnphRzlzWkRvZ1puVnVZM1JwYjI0Z2RHaHlaWE5vYjJ4a0tHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNibHh1SUNBZ0lDQWdhV1lnS0UxUFZWTkZYMFZXUlU1VVV5NXBibVJsZUU5bUtHVjJaVzUwTG5SNWNHVXBJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITmxkSFJwYm1kekxtUnlZV2RVYUhKbGMyaHZiR1E3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ6WlhSMGFXNW5jeTV6ZDJsd1pWUm9jbVZ6YUc5c1pEdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJGYm1GaWJHVnpJSE4zYVhCbElHVjJaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3YzJWc1puMWNiaUFnSUNBZ0tpOWNiaUFnSUNCbGJtRmliR1U2SUdaMWJtTjBhVzl1SUdWdVlXSnNaU2dwSUh0Y2JpQWdJQ0FnSUdScGMyRmliR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVZISmhibk5wZEdsdmJpNWxibUZpYkdVb0tUdGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1JHbHpZV0pzWlhNZ2MzZHBjR1VnWlhabGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHpaV3htZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR1JwYzJGaWJHVTZJR1oxYm1OMGFXOXVJR1JwYzJGaWJHVW9LU0I3WEc0Z0lDQWdJQ0JrYVhOaFlteGxaQ0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1a2FYTmhZbXhsS0NrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVdSa0lHTnZiWEJ2Ym1WdWRDQmpiR0Z6Y3pwY2JpQWdJQ29nTFNCaFpuUmxjaUJwYm1sMGFXRnNJR0oxYVd4a2FXNW5YRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJKMWFXeGtMbUZtZEdWeUp5d2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRU52YlhCdmJtVnVkSE11U0hSdGJDNXliMjkwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9SMnhwWkdVdWMyVjBkR2x1WjNNdVkyeGhjM05sY3k1emQybHdaV0ZpYkdVcE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WdGIzWmxJSE4zYVhCcGJtY2dZbWx1WkdsdVozTTZYRzRnSUNBcUlDMGdiMjRnWkdWemRISnZlV2x1Wnl3Z2RHOGdjbVZ0YjNabElHRmtaR1ZrSUVWMlpXNTBUR2x6ZEdWdVpYSnpYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJSbGMzUnliM2tuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1UzZHBjR1V1ZFc1aWFXNWtVM2RwY0dWVGRHRnlkQ2dwTzF4dUlDQWdJRk4zYVhCbExuVnVZbWx1WkZOM2FYQmxUVzkyWlNncE8xeHVJQ0FnSUZOM2FYQmxMblZ1WW1sdVpGTjNhWEJsUlc1a0tDazdYRzRnSUNBZ1FtbHVaR1Z5TG1SbGMzUnliM2tvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlGTjNhWEJsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJKYldGblpYTWdLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpMQ0JGZG1WdWRITXBJSHRjYmlBZ0x5b3FYRzRnSUNBcUlFbHVjM1JoYm1ObElHOW1JSFJvWlNCaWFXNWtaWElnWm05eUlFUlBUU0JGZG1WdWRITXVYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRGZG1WdWRITkNhVzVrWlhKOVhHNGdJQ0FxTDF4dUlDQjJZWElnUW1sdVpHVnlJRDBnYm1WM0lFVjJaVzUwYzBKcGJtUmxjaWdwTzF4dVhHNGdJSFpoY2lCSmJXRm5aWE1nUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FtbHVaSE1nYkdsemRHVnVaWElnZEc4Z1oyeHBaR1VnZDNKaGNIQmxjaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1aWFXNWtLQ2s3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FtbHVaSE1nWUdSeVlXZHpkR0Z5ZEdBZ1pYWmxiblFnYjI0Z2QzSmhjSEJsY2lCMGJ5QndjbVYyWlc1MElHUnlZV2RuYVc1bklHbHRZV2RsY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduWkhKaFozTjBZWEowSnl3Z1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5keVlYQndaWElzSUhSb2FYTXVaSEpoWjNOMFlYSjBLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUdCa2NtRm5jM1JoY25SZ0lHVjJaVzUwSUc5dUlIZHlZWEJ3WlhJdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkRvZ1puVnVZM1JwYjI0Z2RXNWlhVzVrS0NrZ2UxeHVJQ0FnSUNBZ1FtbHVaR1Z5TG05bVppZ25aSEpoWjNOMFlYSjBKeXdnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXBPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVWMlpXNTBJR2hoYm1Sc1pYSXVJRkJ5WlhabGJuUnpJR1J5WVdkbmFXNW5MbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JrY21GbmMzUmhjblE2SUdaMWJtTjBhVzl1SUdSeVlXZHpkR0Z5ZENobGRtVnVkQ2tnZTF4dUlDQWdJQ0FnWlhabGJuUXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsYlc5MlpTQmlhVzVrYVc1bmN5Qm1jbTl0SUdsdFlXZGxjenBjYmlBZ0lDb2dMU0J2YmlCa1pYTjBjbTk1YVc1bkxDQjBieUJ5WlcxdmRtVWdZV1JrWldRZ1JYWmxiblJNYVhOMFpXNWxjbk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkpiV0ZuWlhNdWRXNWlhVzVrS0NrN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVsdFlXZGxjenRjYm4xY2JseHVablZ1WTNScGIyNGdRVzVqYUc5eWN5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRWh2YkdSeklHUmxkR0ZqYUdsdVp5QnpkR0YwZFhNZ2IyWWdZVzVqYUc5eWN5NWNiaUFnSUNvZ1VISmxkbVZ1ZEhNZ1pHVjBZV05vYVc1bklHOW1JR0ZzY21WaFpIa2daR1YwWVdOb1pXUWdZVzVqYUc5eWN5NWNiaUFnSUNwY2JpQWdJQ29nUUhCeWFYWmhkR1ZjYmlBZ0lDb2dRSFI1Y0dVZ2UwSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQjJZWElnWkdWMFlXTm9aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dTRzlzWkhNZ2NISmxkbVZ1ZEdsdVp5QnpkR0YwZFhNZ2IyWWdZVzVqYUc5eWN5NWNiaUFnSUNvZ1NXWWdZSFJ5ZFdWZ0lISmxaR2x5WldOMGFXOXVJR0ZtZEdWeUlHTnNhV05ySUhkcGJHd2dZbVVnWkdsellXSnNaV1F1WEc0Z0lDQXFYRzRnSUNBcUlFQndjbWwyWVhSbFhHNGdJQ0FxSUVCMGVYQmxJSHRDYjI5c1pXRnVmVnh1SUNBZ0tpOWNiaUFnZG1GeUlIQnlaWFpsYm5SbFpDQTlJR1poYkhObE8xeHVYRzRnSUhaaGNpQkJibU5vYjNKeklEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhWd2N5QmhJR2x1YVhScFlXd2djM1JoZEdVZ2IyWWdZVzVqYUc5eWN5QmpiMjF3YjI1bGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FxSUVodmJHUnpJR052Ykd4bFkzUnBiMjRnYjJZZ1lXNWphRzl5Y3lCbGJHVnRaVzUwY3k1Y2JpQWdJQ0FnSUNBcVhHNGdJQ0FnSUNBZ0tpQkFjSEpwZG1GMFpWeHVJQ0FnSUNBZ0lDb2dRSFI1Y0dVZ2UwaFVUVXhEYjJ4c1pXTjBhVzl1ZlZ4dUlDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNCMGFHbHpMbDloSUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5keVlYQndaWEl1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duWVNjcE8xeHVYRzRnSUNBZ0lDQjBhR2x6TG1KcGJtUW9LVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJsZG1WdWRITWdkRzhnWVc1amFHOXljeUJwYm5OcFpHVWdZU0IwY21GamF5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkRvZ1puVnVZM1JwYjI0Z1ltbHVaQ2dwSUh0Y2JpQWdJQ0FnSUVKcGJtUmxjaTV2YmlnblkyeHBZMnNuTENCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaXdnZEdocGN5NWpiR2xqYXlrN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dWVzVpYVc1a2N5QmxkbVZ1ZEhNZ1lYUjBZV05vWldRZ2RHOGdZVzVqYUc5eWN5QnBibk5wWkdVZ1lTQjBjbUZqYXk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2RXNWlhVzVrT2lCbWRXNWpkR2x2YmlCMWJtSnBibVFvS1NCN1hHNGdJQ0FnSUNCQ2FXNWtaWEl1YjJabUtDZGpiR2xqYXljc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQklZVzVrYkdWeUlHWnZjaUJqYkdsamF5QmxkbVZ1ZEM0Z1VISmxkbVZ1ZEhNZ1kyeHBZMnR6SUhkb1pXNGdaMnhwWkdVZ2FYTWdhVzRnWUhCeVpYWmxiblJnSUhOMFlYUjFjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTnNhV05yT2lCbWRXNWpkR2x2YmlCamJHbGpheWhsZG1WdWRDa2dlMXh1SUNBZ0lDQWdaWFpsYm5RdWMzUnZjRkJ5YjNCaFoyRjBhVzl1S0NrN1hHNWNiaUFnSUNBZ0lHbG1JQ2h3Y21WMlpXNTBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1pYWmxiblF1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRVpYUmhZMmhsY3lCaGJtTm9iM0p6SUdOc2FXTnJJR1YyWlc1MElHbHVjMmxrWlNCbmJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM05sYkdaOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWkdWMFlXTm9PaUJtZFc1amRHbHZiaUJrWlhSaFkyZ29LU0I3WEc0Z0lDQWdJQ0J3Y21WMlpXNTBaV1FnUFNCMGNuVmxPMXh1WEc0Z0lDQWdJQ0JwWmlBb0lXUmxkR0ZqYUdWa0tTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnZEdocGN5NXBkR1Z0Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVhWFJsYlhOYmFWMHVaSEpoWjJkaFlteGxJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzFvY21WbUp5d2dkR2hwY3k1cGRHVnRjMXRwWFM1blpYUkJkSFJ5YVdKMWRHVW9KMmh5WldZbktTazdYRzVjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbkpsYlc5MlpVRjBkSEpwWW5WMFpTZ25hSEpsWmljcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWkdWMFlXTm9aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJkSFJoWTJobGN5QmhibU5vYjNKeklHTnNhV05ySUdWMlpXNTBjeUJwYm5OcFpHVWdaMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0elpXeG1mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHRjBkR0ZqYURvZ1puVnVZM1JwYjI0Z1lYUjBZV05vS0NrZ2UxeHVJQ0FnSUNBZ2NISmxkbVZ1ZEdWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lHbG1JQ2hrWlhSaFkyaGxaQ2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIUm9hWE11YVhSbGJYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sMFpXMXpXMmxkTG1SeVlXZG5ZV0pzWlNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sMFpXMXpXMmxkTG5ObGRFRjBkSEpwWW5WMFpTZ25hSEpsWmljc0lIUm9hWE11YVhSbGJYTmJhVjB1WjJWMFFYUjBjbWxpZFhSbEtDZGtZWFJoTFdoeVpXWW5LU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmtaWFJoWTJobFpDQTlJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnWkdWbWFXNWxLRUZ1WTJodmNuTXNJQ2RwZEdWdGN5Y3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHTnZiR3hsWTNScGIyNGdiMllnZEdobElHRnljbTkzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdTRlJOVEVWc1pXMWxiblJiWFgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJCYm1Ob2IzSnpMbDloTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFUmxkR0ZqYUNCaGJtTm9iM0p6SUdsdWMybGtaU0J6Ykdsa1pYTTZYRzRnSUNBcUlDMGdiMjRnYzNkcGNHbHVaeXdnYzI4Z2RHaGxlU0IzYjI0bmRDQnlaV1JwY21WamRDQjBieUJwZEhNZ1lHaHlaV1pnSUdGMGRISnBZblYwWlhOY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpZ25jM2RwY0dVdWJXOTJaU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmJtTm9iM0p6TG1SbGRHRmphQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWFIwWVdOb0lHRnVZMmh2Y25NZ2FXNXphV1JsSUhOc2FXUmxjenBjYmlBZ0lDb2dMU0JoWm5SbGNpQnpkMmx3YVc1bklHRnVaQ0IwY21GdWMybDBhVzl1Y3lCbGJtUnpMQ0J6YnlCMGFHVjVJR05oYmlCeVpXUnBjbVZqZENCaFpuUmxjaUJqYkdsamF5QmhaMkZwYmx4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZHpkMmx3WlM1bGJtUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUTI5dGNHOXVaVzUwY3k1VWNtRnVjMmwwYVc5dUxtRm1kR1Z5S0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lFRnVZMmh2Y25NdVlYUjBZV05vS0NrN1hHNGdJQ0FnZlNrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJWYm1KcGJtUWdZVzVqYUc5eWN5QnBibk5wWkdVZ2MyeHBaR1Z6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JR0Z1WTJodmNuTWdkRzhnYVhSeklHbHVhWFJwWVd3Z2MzUmhkR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkJibU5vYjNKekxtRjBkR0ZqYUNncE8xeHVJQ0FnSUVGdVkyaHZjbk11ZFc1aWFXNWtLQ2s3WEc0Z0lDQWdRbWx1WkdWeUxtUmxjM1J5YjNrb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRUZ1WTJodmNuTTdYRzU5WEc1Y2JuWmhjaUJPUVZaZlUwVk1SVU5VVDFJZ1BTQW5XMlJoZEdFdFoyeHBaR1V0Wld3OVhDSmpiMjUwY205c2MxdHVZWFpkWENKZEp6dGNiblpoY2lCRFQwNVVVazlNVTE5VFJVeEZRMVJQVWlBOUlDZGJaR0YwWVMxbmJHbGtaUzFsYkY0OVhDSmpiMjUwY205c2Mxd2lYU2M3WEc1Y2JtWjFibU4wYVc5dUlFTnZiblJ5YjJ4eklDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUM4cUtseHVJQ0FnS2lCSmJuTjBZVzVqWlNCdlppQjBhR1VnWW1sdVpHVnlJR1p2Y2lCRVQwMGdSWFpsYm5SekxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdSWFpsYm5SelFtbHVaR1Z5ZlZ4dUlDQWdLaTljYmlBZ2RtRnlJRUpwYm1SbGNpQTlJRzVsZHlCRmRtVnVkSE5DYVc1a1pYSW9LVHRjYmx4dUlDQjJZWElnUTI5dWRISnZiSE1nUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1NXNXBkSE1nWVhKeWIzZHpMaUJDYVc1a2N5QmxkbVZ1ZEhNZ2JHbHpkR1Z1WlhKelhHNGdJQ0FnSUNvZ2RHOGdkR2hsSUdGeWNtOTNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQXFJRU52Ykd4bFkzUnBiMjRnYjJZZ2JtRjJhV2RoZEdsdmJpQklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FnSUNwY2JpQWdJQ0FnSUNBcUlFQndjbWwyWVhSbFhHNGdJQ0FnSUNBZ0tpQkFkSGx3WlNCN1NGUk5URU52Ykd4bFkzUnBiMjU5WEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhSb2FYTXVYMjRnUFNCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tFNUJWbDlUUlV4RlExUlBVaWs3WEc1Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2dRMjlzYkdWamRHbHZiaUJ2WmlCamIyNTBjbTlzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQWdJQ3BjYmlBZ0lDQWdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQWdJQ0FnS2lCQWRIbHdaU0I3U0ZSTlRFTnZiR3hsWTNScGIyNTlYRzRnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJSFJvYVhNdVgyTWdQU0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0VOUFRsUlNUMHhUWDFORlRFVkRWRTlTS1R0Y2JseHVJQ0FnSUNBZ2RHaHBjeTVoWkdSQ2FXNWthVzVuY3lncE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ1lXTjBhWFpsSUdOc1lYTnpJSFJ2SUdOMWNuSmxiblFnYzJ4cFpHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZEVGamRHbDJaVG9nWm5WdVkzUnBiMjRnYzJWMFFXTjBhWFpsS0NrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TGw5dUxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV1JrUTJ4aGMzTW9kR2hwY3k1ZmJsdHBYUzVqYUdsc1pISmxiaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCaFkzUnBkbVVnWTJ4aGMzTWdkRzhnWTNWeWNtVnVkQ0J6Ykdsa1pTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabFFXTjBhWFpsT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVZCWTNScGRtVW9LU0I3WEc0Z0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhSb2FYTXVYMjR1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eVpXMXZkbVZEYkdGemN5aDBhR2x6TGw5dVcybGRMbU5vYVd4a2NtVnVLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVWIyZG5iR1Z6SUdGamRHbDJaU0JqYkdGemN5QnZiaUJwZEdWdGN5QnBibk5wWkdVZ2JtRjJhV2RoZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwaFVUVXhGYkdWdFpXNTBmU0JqYjI1MGNtOXNjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWVdSa1EyeGhjM002SUdaMWJtTjBhVzl1SUdGa1pFTnNZWE56S0dOdmJuUnliMnh6S1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNiaUFnSUNBZ0lIWmhjaUJwZEdWdElEMGdZMjl1ZEhKdmJITmJSMnhwWkdVdWFXNWtaWGhkTzF4dVhHNGdJQ0FnSUNCcGRHVnRMbU5zWVhOelRHbHpkQzVoWkdRb2MyVjBkR2x1WjNNdVkyeGhjM05sY3k1aFkzUnBkbVZPWVhZcE8xeHVYRzRnSUNBZ0lDQnphV0pzYVc1bmN5aHBkR1Z0S1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoemFXSnNhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lITnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoelpYUjBhVzVuY3k1amJHRnpjMlZ6TG1GamRHbDJaVTVoZGlrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVnpJR0ZqZEdsMlpTQmpiR0Z6Y3lCbWNtOXRJR0ZqZEdsMlpTQmpiMjUwY205c0xseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1NGUk5URVZzWlcxbGJuUjlJR052Ym5SeWIyeHpYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J5WlcxdmRtVkRiR0Z6Y3pvZ1puVnVZM1JwYjI0Z2NtVnRiM1psUTJ4aGMzTW9ZMjl1ZEhKdmJITXBJSHRjYmlBZ0lDQWdJR052Ym5SeWIyeHpXMGRzYVdSbExtbHVaR1Y0WFM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0Vkc2FXUmxMbk5sZEhScGJtZHpMbU5zWVhOelpYTXVZV04wYVhabFRtRjJLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQlpHUnpJR2hoYm1Sc1pYTWdkRzhnZEdobElHVmhZMmdnWjNKdmRYQWdiMllnWTI5dWRISnZiSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdGa1pFSnBibVJwYm1kek9pQm1kVzVqZEdsdmJpQmhaR1JDYVc1a2FXNW5jeWdwSUh0Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVmWXk1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnBibVFvZEdocGN5NWZZMXRwWFM1amFHbHNaSEpsYmlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5Qm9ZVzVrYkdWeklHWnliMjBnZEdobElHVmhZMmdnWjNKdmRYQWdiMllnWTI5dWRISnZiSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhKbGJXOTJaVUpwYm1ScGJtZHpPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVkNhVzVrYVc1bmN5Z3BJSHRjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnZEdocGN5NWZZeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5WdVltbHVaQ2gwYUdsekxsOWpXMmxkTG1Ob2FXeGtjbVZ1S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkNhVzVrY3lCbGRtVnVkSE1nZEc4Z1lYSnliM2R6SUVoVVRVd2daV3hsYldWdWRITXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwaFVUVXhEYjJ4c1pXTjBhVzl1ZlNCbGJHVnRaVzUwYzF4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDaGxiR1Z0Wlc1MGN5a2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JsYkdWdFpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQkNhVzVrWlhJdWIyNG9XeWRqYkdsamF5Y3NJQ2QwYjNWamFITjBZWEowSjEwc0lHVnNaVzFsYm5SelcybGRMQ0IwYUdsekxtTnNhV05yS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZibUpwYm1SeklHVjJaVzUwY3lCaWFXNWtaV1FnZEc4Z2RHaGxJR0Z5Y205M2N5QklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRJVkUxTVEyOXNiR1ZqZEdsdmJuMGdaV3hsYldWdWRITmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFZ1WW1sdVpEb2dablZ1WTNScGIyNGdkVzVpYVc1a0tHVnNaVzFsYm5SektTQjdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR1ZzWlcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lFSnBibVJsY2k1dlptWW9XeWRqYkdsamF5Y3NJQ2QwYjNWamFITjBZWEowSjEwc0lHVnNaVzFsYm5SelcybGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSVlXNWtiR1Z6SUdCamJHbGphMkFnWlhabGJuUWdiMjRnZEdobElHRnljbTkzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFJRTF2ZG1WeklITnNhV1JsY2lCcGJpQmtjbWxsWTNScGIyNGdjSEpsWTJselpXUWdhVzVjYmlBZ0lDQWdLaUJnWkdGMFlTMW5iR2xrWlMxa2FYSmdJR0YwZEhKcFluVjBaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmxkbVZ1ZEZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1kyeHBZMnM2SUdaMWJtTjBhVzl1SUdOc2FXTnJLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQmxkbVZ1ZEM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dVhHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsSjFiaTV0WVd0bEtFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbkpsYzI5c2RtVW9aWFpsYm5RdVkzVnljbVZ1ZEZSaGNtZGxkQzVuWlhSQmRIUnlhV0oxZEdVb0oyUmhkR0V0WjJ4cFpHVXRaR2x5SnlrcEtUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdaR1ZtYVc1bEtFTnZiblJ5YjJ4ekxDQW5hWFJsYlhNbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCamIyeHNaV04wYVc5dUlHOW1JSFJvWlNCamIyNTBjbTlzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdTRlJOVEVWc1pXMWxiblJiWFgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJEYjI1MGNtOXNjeTVmWXp0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkMkZ3SUdGamRHbDJaU0JqYkdGemN5QnZaaUJqZFhKeVpXNTBJRzVoZG1sbllYUnBiMjRnYVhSbGJUcGNiaUFnSUNvZ0xTQmhablJsY2lCdGIzVnVkR2x1WnlCMGJ5QnpaWFFnYVhRZ2RHOGdhVzVwZEdsaGJDQnBibVJsZUZ4dUlDQWdLaUF0SUdGbWRHVnlJR1ZoWTJnZ2JXOTJaU0IwYnlCMGFHVWdibVYzSUdsdVpHVjRYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvV3lkdGIzVnVkQzVoWm5SbGNpY3NJQ2R0YjNabExtRm1kR1Z5SjEwc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkRiMjUwY205c2N5NXpaWFJCWTNScGRtVW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCaWFXNWthVzVuY3lCaGJtUWdTRlJOVENCRGJHRnpjMlZ6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JRzFoY210MWNDQjBieUJwZEhNZ2FXNXBkR2xoYkNCemRHRjBaVnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0Nka1pYTjBjbTk1Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFTnZiblJ5YjJ4ekxuSmxiVzkyWlVKcGJtUnBibWR6S0NrN1hHNGdJQ0FnUTI5dWRISnZiSE11Y21WdGIzWmxRV04wYVhabEtDazdYRzRnSUNBZ1FtbHVaR1Z5TG1SbGMzUnliM2tvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlFTnZiblJ5YjJ4ek8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCTFpYbGliMkZ5WkNBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ2RtRnlJRXRsZVdKdllYSmtJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVKcGJtUnpJR3RsZVdKdllYSmtJR1YyWlc1MGN5QnZiaUJqYjIxd2IyNWxiblFnYlc5MWJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2ZFc1ME9pQm1kVzVqZEdsdmJpQnRiM1Z1ZENncElIdGNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXpaWFIwYVc1bmN5NXJaWGxpYjJGeVpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnBibVFvS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJaR1J6SUd0bGVXSnZZWEprSUhCeVpYTnpJR1YyWlc1MGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkRvZ1puVnVZM1JwYjI0Z1ltbHVaQ2dwSUh0Y2JpQWdJQ0FnSUVKcGJtUmxjaTV2YmlnbmEyVjVkWEFuTENCa2IyTjFiV1Z1ZEN3Z2RHaHBjeTV3Y21WemN5azdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WdGIzWmxjeUJyWlhsaWIyRnlaQ0J3Y21WemN5QmxkbVZ1ZEhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkRvZ1puVnVZM1JwYjI0Z2RXNWlhVzVrS0NrZ2UxeHVJQ0FnSUNBZ1FtbHVaR1Z5TG05bVppZ25hMlY1ZFhBbkxDQmtiMk4xYldWdWRDazdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nU0dGdVpHeGxjeUJyWlhsaWIyRnlaQ2R6SUdGeWNtOTNjeUJ3Y21WemN5QmhibVFnYlc5MmFXNW5JR2RzYVdSbElHWnZkMkZ5WkNCaGJtUWdZbUZqYTNkaGNtUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlHVjJaVzUwWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCd2NtVnpjem9nWm5WdVkzUnBiMjRnY0hKbGMzTW9aWFpsYm5RcElIdGNiaUFnSUNBZ0lHbG1JQ2hsZG1WdWRDNXJaWGxEYjJSbElEMDlQU0F6T1NrZ2UxeHVJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMbEoxYmk1dFlXdGxLRU52YlhCdmJtVnVkSE11UkdseVpXTjBhVzl1TG5KbGMyOXNkbVVvSno0bktTazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNobGRtVnVkQzVyWlhsRGIyUmxJRDA5UFNBek55a2dlMXh1SUNBZ0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGxKMWJpNXRZV3RsS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxuSmxjMjlzZG1Vb0p6d25LU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pXMXZkbVVnWW1sdVpHbHVaM01nWm5KdmJTQnJaWGxpYjJGeVpEcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklISmxiVzkyWlNCaFpHUmxaQ0JsZG1WdWRITmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIwYnlCeVpXMXZkbVVnWlhabGJuUnpJR0psWm05eVpTQnlaVzF2ZFc1MGFXNW5YRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvV3lka1pYTjBjbTk1Snl3Z0ozVndaR0YwWlNkZExDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdTMlY1WW05aGNtUXVkVzVpYVc1a0tDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pXMXZkVzUwSUdOdmJYQnZibVZ1ZEZ4dUlDQWdLaUF0SUc5dUlIVndaR0YwYVc1bklIUnZJSEpsWm14bFkzUWdjRzkwWlc1MGFXRnNJR05vWVc1blpYTWdhVzRnYzJWMGRHbHVaM05jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmRYQmtZWFJsSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFdGxlV0p2WVhKa0xtMXZkVzUwS0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJFWlhOMGNtOTVJR0pwYm1SbGNqcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklISmxiVzkyWlNCc2FYTjBaVzVsY25OY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpZ25aR1Z6ZEhKdmVTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JDYVc1a1pYSXVaR1Z6ZEhKdmVTZ3BPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnUzJWNVltOWhjbVE3WEc1OVhHNWNibVoxYm1OMGFXOXVJRUYxZEc5d2JHRjVJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQkpibk4wWVc1alpTQnZaaUIwYUdVZ1ltbHVaR1Z5SUdadmNpQkVUMDBnUlhabGJuUnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3UlhabGJuUnpRbWx1WkdWeWZWeHVJQ0FnS2k5Y2JpQWdkbUZ5SUVKcGJtUmxjaUE5SUc1bGR5QkZkbVZ1ZEhOQ2FXNWtaWElvS1R0Y2JseHVJQ0IyWVhJZ1FYVjBiM0JzWVhrZ1BTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTVzVwZEdsaGJHbDZaWE1nWVhWMGIzQnNZWGxwYm1jZ1lXNWtJR1YyWlc1MGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0JwWmlBb1IyeHBaR1V1YzJWMGRHbHVaM011YUc5MlpYSndZWFZ6WlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVGRHRnlkSE1nWVhWMGIzQnNZWGxwYm1jZ2FXNGdZMjl1Wm1sbmRYSmxaQ0JwYm5SbGNuWmhiQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdRbTl2YkdWaGJueE9kVzFpWlhKOUlHWnZjbU5sSUZKMWJpQmhkWFJ2Y0d4aGVXbHVaeUIzYVhSb0lIQmhjM05sWkNCcGJuUmxjblpoYkNCeVpXZGhjbVJzWlhOeklHOW1JR0JoZFhSdmNHeGhlV0FnYzJWMGRHbHVaM05jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhOMFlYSjBPaUJtZFc1amRHbHZiaUJ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCZmRHaHBjeUE5SUhSb2FYTTdYRzVjYmlBZ0lDQWdJR2xtSUNoSGJHbGtaUzV6WlhSMGFXNW5jeTVoZFhSdmNHeGhlU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9hWE5WYm1SbFptbHVaV1FvZEdocGN5NWZhU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5cElEMGdjMlYwU1c1MFpYSjJZV3dvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWDNSb2FYTXVjM1J2Y0NncE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsSjFiaTV0WVd0bEtDYytKeWs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRjkwYUdsekxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lDQWdmU3dnZEdocGN5NTBhVzFsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk4wYjNCeklHRjFkRzl5ZFc1dWFXNW5JRzltSUhSb1pTQm5iR2xrWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MzUnZjRG9nWm5WdVkzUnBiMjRnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgya2dQU0JqYkdWaGNrbHVkR1Z5ZG1Gc0tIUm9hWE11WDJrcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk4wYjNCeklHRjFkRzl3YkdGNWFXNW5JSGRvYVd4bElHMXZkWE5sSUdseklHOTJaWElnWjJ4cFpHVW5jeUJoY21WaExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmlhVzVrT2lCbWRXNWpkR2x2YmlCaWFXNWtLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlGOTBhR2x6TWlBOUlIUm9hWE03WEc1Y2JpQWdJQ0FnSUVKcGJtUmxjaTV2YmlnbmJXOTFjMlZ2ZG1WeUp5d2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1FzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdYM1JvYVhNeUxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyNG9KMjF2ZFhObGIzVjBKeXdnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbkp2YjNRc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnWDNSb2FYTXlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVFnYlc5MWMyVnZkbVZ5SUdWMlpXNTBjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhWdVltbHVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtLQ2tnZTF4dUlDQWdJQ0FnUW1sdVpHVnlMbTltWmloYkoyMXZkWE5sYjNabGNpY3NJQ2R0YjNWelpXOTFkQ2RkTENCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaEJkWFJ2Y0d4aGVTd2dKM1JwYldVbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCMGFXMWxJSEJsY21sdlpDQjJZV3gxWlNCbWIzSWdkR2hsSUdGMWRHOXdiR0Y1SUdsdWRHVnlkbUZzTGlCUWNtbHZjbWwwYVhwbGMxeHVJQ0FnSUNBcUlIUnBiV1Z6SUdsdUlHQmtZWFJoTFdkc2FXUmxMV0YxZEc5d2JHRjVZQ0JoZEhSeWRXSjFkR1Z6SUc5MlpYSWdiM0IwYVc5dWN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQmhkWFJ2Y0d4aGVTQTlJRU52YlhCdmJtVnVkSE11U0hSdGJDNXpiR2xrWlhOYlIyeHBaR1V1YVc1a1pYaGRMbWRsZEVGMGRISnBZblYwWlNnblpHRjBZUzFuYkdsa1pTMWhkWFJ2Y0d4aGVTY3BPMXh1WEc0Z0lDQWdJQ0JwWmlBb1lYVjBiM0JzWVhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnZTVzUwS0dGMWRHOXdiR0Y1S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSdlNXNTBLRWRzYVdSbExuTmxkSFJwYm1kekxtRjFkRzl3YkdGNUtUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJUZEc5d0lHRjFkRzl3YkdGNWFXNW5JR0Z1WkNCMWJtSnBibVFnWlhabGJuUnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR05zWldGeUlHUmxabWx1WldRZ2FXNTBaWEoyWVd4Y2JpQWdJQ29nTFNCdmJpQjFjR1JoZEdsdVp5QjJhV0VnUVZCSklIUnZJSEpsYzJWMElHbHVkR1Z5ZG1Gc0lIUm9ZWFFnYldGNUlHTm9ZVzVuWldSY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMlJsYzNSeWIza25MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmRYUnZjR3hoZVM1MWJtSnBibVFvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRk4wYjNBZ1lYVjBiM0JzWVhscGJtYzZYRzRnSUNBcUlDMGdZbVZtYjNKbElHVmhZMmdnY25WdUxDQjBieUJ5WlhOMFlYSjBJR0YxZEc5d2JHRjVhVzVuWEc0Z0lDQXFJQzBnYjI0Z2NHRjFjMmx1WnlCMmFXRWdRVkJKWEc0Z0lDQXFJQzBnYjI0Z1pHVnpkSEp2ZVdsdVp5d2dkRzhnWTJ4bFlYSWdaR1ZtYVc1bFpDQnBiblJsY25aaGJGeHVJQ0FnS2lBdElIZG9hV3hsSUhOMFlYSjBhVzVuSUdFZ2MzZHBjR1ZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKSUhSdklISmxjMlYwSUdsdWRHVnlkbUZzSUhSb1lYUWdiV0Y1SUdOb1lXNW5aV1JjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkozSjFiaTVpWldadmNtVW5MQ0FuY0dGMWMyVW5MQ0FuWkdWemRISnZlU2NzSUNkemQybHdaUzV6ZEdGeWRDY3NJQ2QxY0dSaGRHVW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVGMWRHOXdiR0Y1TG5OMGIzQW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBZWEowSUdGMWRHOXdiR0Y1YVc1bk9seHVJQ0FnS2lBdElHRm1kR1Z5SUdWaFkyZ2djblZ1TENCMGJ5QnlaWE4wWVhKMElHRjFkRzl3YkdGNWFXNW5YRzRnSUNBcUlDMGdiMjRnY0d4aGVXbHVaeUIyYVdFZ1FWQkpYRzRnSUNBcUlDMGdkMmhwYkdVZ1pXNWthVzVuSUdFZ2MzZHBjR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkozSjFiaTVoWm5SbGNpY3NJQ2R3YkdGNUp5d2dKM04zYVhCbExtVnVaQ2RkTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1FYVjBiM0JzWVhrdWMzUmhjblFvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsYlc5MWJuUWdZWFYwYjNCc1lYbHBibWM2WEc0Z0lDQXFJQzBnYjI0Z2RYQmtZWFJwYm1jZ2RtbGhJRUZRU1NCMGJ5QnlaWE5sZENCcGJuUmxjblpoYkNCMGFHRjBJRzFoZVNCamFHRnVaMlZrWEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0ozVndaR0YwWlNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkJkWFJ2Y0d4aGVTNXRiM1Z1ZENncE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUkdWemRISnZlU0JoSUdKcGJtUmxjanBjYmlBZ0lDb2dMU0J2YmlCa1pYTjBjbTk1YVc1bklHZHNhV1JsSUdsdWMzUmhibU5sSUhSdklHTnNaV0Z5ZFhBZ2JHbHpkR1Z1WlhKelhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMlJsYzNSeWIza25MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVGMWRHOXdiR0Y1TzF4dWZWeHVYRzR2S2lwY2JpQXFJRk52Y25SeklHdGxlWE1nYjJZZ1luSmxZV3R3YjJsdWRDQnZZbXBsWTNRZ2MyOGdkR2hsZVNCM2FXeHNJR0psSUc5eVpHVnlaV1FnWm5KdmJTQnNiM2RsY2lCMGJ5QmlhV2RuWlhJdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhCdmFXNTBjMXh1SUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYzI5eWRFSnlaV0ZyY0c5cGJuUnpLSEJ2YVc1MGN5a2dlMXh1SUNCcFppQW9hWE5QWW1wbFkzUW9jRzlwYm5SektTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCemIzSjBTMlY1Y3lod2IybHVkSE1wTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhkaGNtNG9KMEp5WldGcmNHOXBiblJ6SUc5d2RHbHZiaUJ0ZFhOMElHSmxJR0Z1SUc5aWFtVmpkQ2NwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUh0OU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCQ2NtVmhhM0J2YVc1MGN5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRWh2YkdSeklISmxabVZ5Wlc1alpTQjBieUJ6WlhSMGFXNW5jeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA5aWFtVmpkSDFjYmlBZ0lDb3ZYRzRnSUhaaGNpQnpaWFIwYVc1bmN5QTlJRWRzYVdSbExuTmxkSFJwYm1kek8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCSWIyeGtjeUJ5WldabGNtVnVZMlVnZEc4Z1luSmxZV3R3YjJsdWRITWdiMkpxWldOMElHbHVJSE5sZEhScGJtZHpMaUJUYjNKMGN5QmljbVZoYTNCdmFXNTBjMXh1SUNBZ0tpQm1jbTl0SUhOdFlXeHNaWElnZEc4Z2JHRnlaMlZ5TGlCSmRDQnBjeUJ5WlhGMWFYSmxaQ0JwYmlCdmNtUmxjaUIwYnlCd2NtOXdaWEpjYmlBZ0lDb2diV0YwWTJocGJtY2dZM1Z5Y21WdWRHeDVJR0ZqZEdsMlpTQmljbVZoYTNCdmFXNTBJSE5sZEhScGJtZHpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VDJKcVpXTjBmVnh1SUNBZ0tpOWNiaUFnZG1GeUlIQnZhVzUwY3lBOUlITnZjblJDY21WaGEzQnZhVzUwY3loelpYUjBhVzVuY3k1aWNtVmhhM0J2YVc1MGN5azdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFTmhZMmhsSUdsdWFYUnBZV3dnYzJWMGRHbHVaM01nWW1WbWIzSmxJRzkyWlhKM2NtbDBkR2x1Wnk1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwOWlhbVZqZEgxY2JpQWdJQ292WEc0Z0lIWmhjaUJrWldaaGRXeDBjeUE5SUY5bGVIUmxibVJ6S0h0OUxDQnpaWFIwYVc1bmN5azdYRzVjYmlBZ2RtRnlJRUp5WldGcmNHOXBiblJ6SUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFMWhkR05vWlhNZ2MyVjBkR2x1WjNNZ1ptOXlJR04xY25KbFkzUnNlU0J0WVhSamFHbHVaeUJ0WldScFlTQmljbVZoYTNCdmFXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIQnZhVzUwYzF4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiV0YwWTJnNklHWjFibU4wYVc5dUlHMWhkR05vS0hCdmFXNTBjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCM2FXNWtiM2N1YldGMFkyaE5aV1JwWVNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2NHOXBiblFnYVc0Z2NHOXBiblJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hCdmFXNTBjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHdiMmx1ZENrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDNhVzVrYjNjdWJXRjBZMmhOWldScFlTZ25LRzFoZUMxM2FXUjBhRG9nSnlBcklIQnZhVzUwSUNzZ0ozQjRLU2NwTG0xaGRHTm9aWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ2YVc1MGMxdHdiMmx1ZEYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQmtaV1poZFd4MGN6dGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRTkyWlhKM2NtbDBaU0JwYm5OMFlXNWpaU0J6WlhSMGFXNW5jeUIzYVhSb0lHTjFjbkpsYm5Sc2VTQnRZWFJqYUdsdVp5QmljbVZoYTNCdmFXNTBJSE5sZEhScGJtZHpMbHh1SUNBZ0tpQlVhR2x6SUdoaGNIQmxibk1nY21sbmFIUWdZV1owWlhJZ1kyOXRjRzl1Wlc1MElHbHVhWFJwWVd4cGVtRjBhVzl1TGx4dUlDQWdLaTljYmlBZ1gyVjRkR1Z1WkhNb2MyVjBkR2x1WjNNc0lFSnlaV0ZyY0c5cGJuUnpMbTFoZEdOb0tIQnZhVzUwY3lrcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWjJ4cFpHVWdkMmwwYUNCelpYUjBhVzVuY3lCdlppQnRZWFJqYUdWa0lHSnlaV3R3YjJsdWREcGNiaUFnSUNvZ0xTQjNhVzVrYjNjZ2NtVnphWHBsSUhSdklIVndaR0YwWlNCemJHbGtaWEpjYmlBZ0lDb3ZYRzRnSUVKcGJtUmxjaTV2YmlnbmNtVnphWHBsSnl3Z2QybHVaRzkzTENCMGFISnZkSFJzWlNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1IyeHBaR1V1YzJWMGRHbHVaM01nUFNCdFpYSm5aVTl3ZEdsdmJuTW9jMlYwZEdsdVozTXNJRUp5WldGcmNHOXBiblJ6TG0xaGRHTm9LSEJ2YVc1MGN5a3BPMXh1SUNCOUxDQkhiR2xrWlM1elpYUjBhVzVuY3k1MGFISnZkSFJzWlNrcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pYTnZjblFnWVc1a0lIVndaR0YwWlNCa1pXWmhkV3gwSUhObGRIUnBibWR6T2x4dUlDQWdLaUF0SUc5dUlISmxhVzVwZENCMmFXRWdRVkJKTENCemJ5QmljbVZoYTNCdmFXNTBJRzFoZEdOb2FXNW5JSGRwYkd3Z1ltVWdjR1Z5Wm05eWJXVmtJSGRwZEdnZ2IzQjBhVzl1YzF4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZDFjR1JoZEdVbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjRzlwYm5SeklEMGdjMjl5ZEVKeVpXRnJjRzlwYm5SektIQnZhVzUwY3lrN1hHNWNiaUFnSUNCa1pXWmhkV3gwY3lBOUlGOWxlSFJsYm1SektIdDlMQ0J6WlhSMGFXNW5jeWs3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ2NtVnphWHBsSUd4cGMzUmxibVZ5T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JRzFoY210MWNDQjBieUJwZEhNZ2FXNXBkR2xoYkNCemRHRjBaVnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0Nka1pYTjBjbTk1Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFSnBibVJsY2k1dlptWW9KM0psYzJsNlpTY3NJSGRwYm1SdmR5azdYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJDY21WaGEzQnZhVzUwY3p0Y2JuMWNibHh1ZG1GeUlFTlBUVkJQVGtWT1ZGTWdQU0I3WEc0Z0lDOHZJRkpsY1hWcGNtVmtYRzRnSUVoMGJXdzZJRWgwYld3c1hHNGdJRlJ5WVc1emJHRjBaVG9nVkhKaGJuTnNZWFJsTEZ4dUlDQlVjbUZ1YzJsMGFXOXVPaUJVY21GdWMybDBhVzl1TEZ4dUlDQkVhWEpsWTNScGIyNDZJRVJwY21WamRHbHZiaXhjYmlBZ1VHVmxhem9nVUdWbGF5eGNiaUFnVTJsNlpYTTZJRk5wZW1WekxGeHVJQ0JIWVhCek9pQkhZWEJ6TEZ4dUlDQk5iM1psT2lCTmIzWmxMRnh1SUNCRGJHOXVaWE02SUVOc2IyNWxjeXhjYmlBZ1VtVnphWHBsT2lCU1pYTnBlbVVzWEc0Z0lFSjFhV3hrT2lCQ2RXbHNaQ3hjYmlBZ1VuVnVPaUJTZFc0c1hHNWNiaUFnTHk4Z1QzQjBhVzl1WVd4Y2JpQWdVM2RwY0dVNklGTjNhWEJsTEZ4dUlDQkpiV0ZuWlhNNklFbHRZV2RsY3l4Y2JpQWdRVzVqYUc5eWN6b2dRVzVqYUc5eWN5eGNiaUFnUTI5dWRISnZiSE02SUVOdmJuUnliMnh6TEZ4dUlDQkxaWGxpYjJGeVpEb2dTMlY1WW05aGNtUXNYRzRnSUVGMWRHOXdiR0Y1T2lCQmRYUnZjR3hoZVN4Y2JpQWdRbkpsWVd0d2IybHVkSE02SUVKeVpXRnJjRzlwYm5SelhHNTlPMXh1WEc1MllYSWdSMnhwWkdVa01TQTlJR1oxYm1OMGFXOXVJQ2hmUTI5eVpTa2dlMXh1SUNCcGJtaGxjbWwwY3loSGJHbGtaU1FrTVN3Z1gwTnZjbVVwTzF4dVhHNGdJR1oxYm1OMGFXOXVJRWRzYVdSbEpDUXhLQ2tnZTF4dUlDQWdJR05zWVhOelEyRnNiRU5vWldOcktIUm9hWE1zSUVkc2FXUmxKQ1F4S1R0Y2JpQWdJQ0J5WlhSMWNtNGdjRzl6YzJsaWJHVkRiMjV6ZEhKMVkzUnZjbEpsZEhWeWJpaDBhR2x6TENBb1IyeHBaR1VrSkRFdVgxOXdjbTkwYjE5ZklIeDhJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmloSGJHbGtaU1FrTVNrcExtRndjR3g1S0hSb2FYTXNJR0Z5WjNWdFpXNTBjeWtwTzF4dUlDQjlYRzVjYmlBZ1kzSmxZWFJsUTJ4aGMzTW9SMnhwWkdVa0pERXNJRnQ3WEc0Z0lDQWdhMlY1T2lBbmJXOTFiblFuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQnRiM1Z1ZENncElIdGNiaUFnSUNBZ0lIWmhjaUJsZUhSbGJuTnBiMjV6SUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lEQWdKaVlnWVhKbmRXMWxiblJ6V3pCZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk1GMGdPaUI3ZlR0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUdkbGRDaEhiR2xrWlNRa01TNXdjbTkwYjNSNWNHVXVYMTl3Y205MGIxOWZJSHg4SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppaEhiR2xrWlNRa01TNXdjbTkwYjNSNWNHVXBMQ0FuYlc5MWJuUW5MQ0IwYUdsektTNWpZV3hzS0hSb2FYTXNJRjlsZUhSbGJtUnpLSHQ5TENCRFQwMVFUMDVGVGxSVExDQmxlSFJsYm5OcGIyNXpLU2s3WEc0Z0lDQWdmVnh1SUNCOVhTazdYRzRnSUhKbGRIVnliaUJIYkdsa1pTUWtNVHRjYm4wb1IyeHBaR1VwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCSGJHbGtaU1F4TzF4dUlpd2lhVzF3YjNKMElHSnZaSGxUWTNKdmJHeE1iMk5ySUdaeWIyMGdKMkp2WkhrdGMyTnliMnhzTFd4dlkyc25PMXh1YVcxd2IzSjBJRWRzYVdSbElHWnliMjBnSjBCbmJHbGtaV3B6TDJkc2FXUmxKenRjYmx4dVkyOXVjM1FnWkdsellXSnNaVUp2WkhsVFkzSnZiR3dnUFNCaWIyUjVVMk55YjJ4c1RHOWpheTVrYVhOaFlteGxRbTlrZVZOamNtOXNiRHRjYm1OdmJuTjBJR1Z1WVdKc1pVSnZaSGxUWTNKdmJHd2dQU0JpYjJSNVUyTnliMnhzVEc5amF5NWxibUZpYkdWQ2IyUjVVMk55YjJ4c08xeHVZMjl1YzNRZ2JXOWtZV3dnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Ylc5a1lXd25LVHRjYm1OdmJuTjBJSFJoY21kbGRFVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWJXOWtZV3hmWDJOdmJuUmxiblFuS1R0Y2JtTnZibk4wSUcxdlpHRnNTVzFuSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG0xdlpHRnNYMTlwYldjbktUdGNibU52Ym5OMElHMXZaR0ZzVkdsMGJHVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViVzlrWVd4ZlgzUnBkR3hsSnlrN1hHNWpiMjV6ZENCdGIyUmhiRlJsZUhSQ2JHOWphM01nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NjdWJXOWtZV3hmWDNSbGVIUXRZbXh2WTJzbktUdGNibU52Ym5OMElHMXZaR0ZzVm1Gc2RXVlVhWFJzWlNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dGIyUmhiRjlmZG1Gc2RXVXRkR2wwYkdVbktUdGNibU52Ym5OMElHMXZaR0ZzVm1Gc2RXVkpkR1Z0Y3lBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0pCYkd3b0p5NTJZV3gxWlMxc2FYTjBYMTlwZEdWdEp5azdYRzVqYjI1emRDQnRiMlJoYkVGa1pDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXRiMlJoYkY5ZllXUmtMV0pzYjJOckp5azdYRzVqYjI1emRDQnRiMlJoYkVGa1pFeGxablFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Ylc5a1lXeGZYMkZrWkMxc1pXWjBKeWs3WEc1Y2JtTnZibk4wSUhSeWFXZG5aWEp6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnbkxtMXZaR0ZzTFhSeWFXZG5aWEluS1R0Y2JseHVablZ1WTNScGIyNGdkRzluWjJ4bFRXOWtZV3dvS1NCN1hHNGdJRzF2WkdGc0xtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2JpQWdJQ0J0YjJSaGJFbHRaeTVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdmU3dnTWpBd0tUdGNiaUFnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc0Z0lDQWdiVzlrWVd4VWFYUnNaUzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdmU3dnTWpBd0tUdGNibHh1SUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2JpQWdJQ0J0YjJSaGJGUmxlSFJDYkc5amEzTmJNRjB1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYVhNdFlXTjBhWFpsSnlrN1hHNGdJSDBzSURRd01DazdYRzRnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4dUlDQWdJRzF2WkdGc1ZHVjRkRUpzYjJOcmMxc3hYUzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdmU3dnTmpBd0tUdGNiaUFnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc0Z0lDQWdiVzlrWVd4V1lXeDFaVlJwZEd4bExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCOUxDQTRNREFwTzF4dUlDQmNiaUFnYlc5a1lXeFdZV3gxWlVsMFpXMXpMbVp2Y2tWaFkyZ29LR1ZzTENCcEtTQTlQaUI3WEc0Z0lDQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdYRzRnSUNBZ0lDQmxiQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdJQ0I5TENBNE1EQWdLeUJwSUNvZ01UQXdLVHRjYmlBZ2ZTazdYRzVjYmlBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN1hHNGdJQ0FnYlc5a1lXeEJaR1F1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYVhNdFlXTjBhWFpsSnlrN1hHNGdJSDBzSURZd01DazdYRzVjYmlBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN1hHNGdJQ0FnYlc5a1lXeEJaR1JNWldaMExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCOUxDQTRNREFwTzF4dVhHNGdJR2xtSUNodGIyUmhiQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJsekxXRmpkR2wyWlNjcEtTQjdYRzRnSUNBZ1pHbHpZV0pzWlVKdlpIbFRZM0p2Ykd3b2RHRnlaMlYwUld4bGJXVnVkQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWlc1aFlteGxRbTlrZVZOamNtOXNiQ2gwWVhKblpYUkZiR1Z0Wlc1MEtUdGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUIzYVc1a2IzZFBia05zYVdOcktHVjJaVzUwS1NCN1hHNGdJR2xtSUNobGRtVnVkQzUwWVhKblpYUWdQVDA5SUcxdlpHRnNLU0I3WEc0Z0lDQWdkRzluWjJ4bFRXOWtZV3dvS1R0Y2JpQWdmVnh1ZlZ4dVhHNTBjbWxuWjJWeWN5NW1iM0pGWVdOb0tDaGxiQ2tnUFQ0Z2UxeHVJQ0JsYkM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEc0Z0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1SUNBZ0lIUnZaMmRzWlUxdlpHRnNLQ2s3WEc0Z0lIMHBPMXh1ZlNrN1hHNWNibmRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lIZHBibVJ2ZDA5dVEyeHBZMnNwTzF4dVhHNXVaWGNnUjJ4cFpHVW9KeTVuYkdsa1pTY3NJSHRjYmlBZ0x5OGdkSGx3WlRvZ0oyTmhjbTkxYzJWc0p5eGNiaUFnY0dWeVZtbGxkem9nTVRBc1hHNGdJQzh2SUdkaGNEb2dOREFzWEc1OUtTNXRiM1Z1ZENncE8xeHVYRzVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGbkxXeHBjM1JmWDJ4cGJtc25LUzVtYjNKRllXTm9LQ2hsYkNrZ1BUNGdlMXh1SUNCbGJDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hHNGdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dUlDQjlLVHRjYm4wcE8xeHVYRzVjYmlKZExDSnVZVzFsY3lJNld5SmtaV1pwYm1VaUxDSjBhR2x6SWl3aVpHbHpZV0pzWlVKdlpIbFRZM0p2Ykd3aUxDSmliMlI1VTJOeWIyeHNURzlqYXlJc0ltVnVZV0pzWlVKdlpIbFRZM0p2Ykd3aUxDSnRiMlJoYkNJc0ltUnZZM1Z0Wlc1MElpd2ljWFZsY25sVFpXeGxZM1J2Y2lJc0luUmhjbWRsZEVWc1pXMWxiblFpTENKdGIyUmhiRWx0WnlJc0ltMXZaR0ZzVkdsMGJHVWlMQ0p0YjJSaGJGUmxlSFJDYkc5amEzTWlMQ0p4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNJaXdpYlc5a1lXeFdZV3gxWlZScGRHeGxJaXdpYlc5a1lXeFdZV3gxWlVsMFpXMXpJaXdpYlc5a1lXeEJaR1FpTENKdGIyUmhiRUZrWkV4bFpuUWlMQ0owY21sbloyVnljeUlzSW5SdloyZHNaVTF2WkdGc0lpd2lZMnhoYzNOTWFYTjBJaXdpZEc5bloyeGxJaXdpWm05eVJXRmphQ0lzSW1Wc0lpd2lhU0lzSW1OdmJuUmhhVzV6SWl3aWQybHVaRzkzVDI1RGJHbGpheUlzSW1WMlpXNTBJaXdpZEdGeVoyVjBJaXdpWVdSa1JYWmxiblJNYVhOMFpXNWxjaUlzSW1VaUxDSndjbVYyWlc1MFJHVm1ZWFZzZENJc0luZHBibVJ2ZHlJc0lrZHNhV1JsSWl3aWJXOTFiblFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN1FVRkJRU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFOUJRVTlCTEZOQlFVMHNSVUZCUlVFc1UwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlEwRXNVMEZCVFN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4QlFVRXJRaXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRVUZCYzBNc1EwRkJReXhEUVVGRFF5eGpRVUZKTEVOQlFVTXNVMEZCVXl4UFFVRlBMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZkQlFWY3NSVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4UFFVRlBMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZETEVOQlFVTXNSVUZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEV0QlFVc3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhuU0VGQlowZ3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1MwRkJTeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETERoSFFVRTRSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVTXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3T3pzN1FVTkJlSHBHT3pzN096czdRVUZOUVN4SlFVRkpMRkZCUVZFc1IwRkJSenM3T3pzN096czdPenRGUVZWaUxFbEJRVWtzUlVGQlJTeFJRVUZST3pzN096czdPMFZCVDJRc1QwRkJUeXhGUVVGRkxFTkJRVU03T3pzN096czdSVUZQVml4UFFVRlBMRVZCUVVVc1EwRkJRenM3T3pzN096czdPenM3UlVGWFZpeFBRVUZQTEVWQlFVVXNRMEZCUXpzN096czdPenRGUVU5V0xFZEJRVWNzUlVGQlJTeEZRVUZGT3pzN096czdPMFZCVDFBc1VVRkJVU3hGUVVGRkxFdEJRVXM3T3pzN096czdSVUZQWml4VlFVRlZMRVZCUVVVc1NVRkJTVHM3T3pzN096dEZRVTlvUWl4UlFVRlJMRVZCUVVVc1NVRkJTVHM3T3pzN096czdPenRGUVZWa0xFdEJRVXNzUlVGQlJTeExRVUZMT3pzN096czdPMFZCVDFvc1kwRkJZeXhGUVVGRkxFVkJRVVU3T3pzN096czdSVUZQYkVJc1lVRkJZU3hGUVVGRkxFZEJRVWM3T3pzN096czdSVUZQYkVJc1VVRkJVU3hGUVVGRkxFdEJRVXM3T3pzN096czdSVUZQWml4VlFVRlZMRVZCUVVVc1IwRkJSenM3T3pzN096dEZRVTltTEZWQlFWVXNSVUZCUlN4RlFVRkZPenM3T3pzN08wVkJUMlFzYVVKQlFXbENMRVZCUVVVc1IwRkJSenM3T3pzN096dEZRVTkwUWl4TlFVRk5MRVZCUVVVc1NVRkJTVHM3T3pzN096dEZRVTlhTEdOQlFXTXNSVUZCUlN4SFFVRkhPenM3T3pzN08wVkJUMjVDTEcxQ1FVRnRRaXhGUVVGRkxHMURRVUZ0UXpzN096czdPenRGUVU5NFJDeFJRVUZSTEVWQlFVVXNSVUZCUlRzN096czdPenM3T3pzN1JVRlhXaXhUUVVGVExFVkJRVVVzUzBGQlN6czdPenM3T3pzN096czdPenM3UlVGamFFSXNTVUZCU1N4RlFVRkZMRU5CUVVNN096czdPenM3T3pzN08wVkJWMUFzVjBGQlZ5eEZRVUZGTEVWQlFVVTdPenM3T3pzN08wVkJVV1lzVDBGQlR5eEZRVUZGTzBsQlExQXNVMEZCVXl4RlFVRkZPMDFCUTFRc1IwRkJSeXhGUVVGRkxGbEJRVms3VFVGRGFrSXNSMEZCUnl4RlFVRkZMRmxCUVZrN1MwRkRiRUk3U1VGRFJDeE5RVUZOTEVWQlFVVXNaVUZCWlR0SlFVTjJRaXhSUVVGUkxFVkJRVVVzYVVKQlFXbENPMGxCUXpOQ0xGTkJRVk1zUlVGQlJTeHJRa0ZCYTBJN1NVRkROMElzVVVGQlVTeEZRVUZGTEdsQ1FVRnBRanRKUVVNelFpeFZRVUZWTEVWQlFVVXNjVUpCUVhGQ08wbEJRMnBETEZOQlFWTXNSVUZCUlN4MVFrRkJkVUk3U1VGRGJFTXNWMEZCVnl4RlFVRkZMSE5DUVVGelFqdEpRVU51UXl4aFFVRmhMRVZCUVVVc2QwSkJRWGRDTzBkQlEzaERPME5CUTBZc1EwRkJRenM3T3pzN096czdRVUZSUml4VFFVRlRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVU3UlVGRGFrSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenREUVVOMlF6czdRVUZGUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhQUVVGUExFMUJRVTBzUzBGQlN5eFZRVUZWTEVsQlFVa3NUMEZCVHl4TlFVRk5MRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzUjBGQlJ5eFZRVUZWTEVkQlFVY3NSVUZCUlR0RlFVTnFSeXhQUVVGUExFOUJRVThzUjBGQlJ5eERRVUZETzBOQlEyNUNMRWRCUVVjc1ZVRkJWU3hIUVVGSExFVkJRVVU3UlVGRGFrSXNUMEZCVHl4SFFVRkhMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVlVGQlZTeEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRXRCUVVzc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eE5RVUZOTEVOQlFVTXNVMEZCVXl4SFFVRkhMRkZCUVZFc1IwRkJSeXhQUVVGUExFZEJRVWNzUTBGQlF6dERRVU01U0N4RFFVRkRPenRCUVVWR0xFbEJRVWtzWTBGQll5eEhRVUZITEZWQlFWVXNVVUZCVVN4RlFVRkZMRmRCUVZjc1JVRkJSVHRGUVVOd1JDeEpRVUZKTEVWQlFVVXNVVUZCVVN4WlFVRlpMRmRCUVZjc1EwRkJReXhGUVVGRk8wbEJRM1JETEUxQlFVMHNTVUZCU1N4VFFVRlRMRU5CUVVNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0SFFVTXhSRHREUVVOR0xFTkJRVU03TzBGQlJVWXNTVUZCU1N4WFFVRlhMRWRCUVVjc1dVRkJXVHRGUVVNMVFpeFRRVUZUTEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVTdTVUZEZGtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdUVUZEY2tNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMDFCUXpGQ0xGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRlZCUVZVc1NVRkJTU3hMUVVGTExFTkJRVU03VFVGRGRrUXNWVUZCVlN4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03VFVGREwwSXNTVUZCU1N4UFFVRlBMRWxCUVVrc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMDFCUTNSRUxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTMEZETTBRN1IwRkRSanM3UlVGRlJDeFBRVUZQTEZWQlFWVXNWMEZCVnl4RlFVRkZMRlZCUVZVc1JVRkJSU3hYUVVGWExFVkJRVVU3U1VGRGNrUXNTVUZCU1N4VlFVRlZMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU53UlN4SlFVRkpMRmRCUVZjc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRE5VUXNUMEZCVHl4WFFVRlhMRU5CUVVNN1IwRkRjRUlzUTBGQlF6dERRVU5JTEVWQlFVVXNRMEZCUXpzN1FVRkZTaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SlFVRkpMRlZCUVZVc1RVRkJUU3hGUVVGRk8wVkJRMmhFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wbEJRM3BETEVsQlFVa3NUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdTVUZGTVVJc1MwRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVTdUVUZEZEVJc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFGQlEzSkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1QwRkRNMEk3UzBGRFJqdEhRVU5HT3p0RlFVVkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wTkJRMllzUTBGQlF6czdRVUZGUml4SlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSVHRGUVVOcVJDeEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdSVUZEYWtRc1NVRkJTU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXpzN1JVRkZOMFFzU1VGQlNTeEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMGxCUTNSQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03TzBsQlJUTkRMRWxCUVVrc1RVRkJUU3hMUVVGTExFbEJRVWtzUlVGQlJUdE5RVU51UWl4UFFVRlBMRk5CUVZNc1EwRkJRenRMUVVOc1FpeE5RVUZOTzAxQlEwd3NUMEZCVHl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0TFFVTjRRenRIUVVOR0xFMUJRVTBzU1VGQlNTeFBRVUZQTEVsQlFVa3NTVUZCU1N4RlFVRkZPMGxCUXpGQ0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SFFVTnVRaXhOUVVGTk8wbEJRMHdzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenM3U1VGRmRFSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1UwRkJVeXhGUVVGRk8wMUJRM2hDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q096dEpRVVZFTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEhRVU01UWp0RFFVTkdMRU5CUVVNN08wRkJSVVlzU1VGQlNTeFJRVUZSTEVkQlFVY3NWVUZCVlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wVkJRemRETEVsQlFVa3NUMEZCVHl4VlFVRlZMRXRCUVVzc1ZVRkJWU3hKUVVGSkxGVkJRVlVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZETTBRc1RVRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5d3dSRUZCTUVRc1IwRkJSeXhQUVVGUExGVkJRVlVzUTBGQlF5eERRVUZETzBkQlEzSkhPenRGUVVWRUxGRkJRVkVzUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFbEJRVWtzVlVGQlZTeERRVUZETEZOQlFWTXNSVUZCUlR0SlFVTnlSU3hYUVVGWExFVkJRVVU3VFVGRFdDeExRVUZMTEVWQlFVVXNVVUZCVVR0TlFVTm1MRlZCUVZVc1JVRkJSU3hMUVVGTE8wMUJRMnBDTEZGQlFWRXNSVUZCUlN4SlFVRkpPMDFCUTJRc1dVRkJXU3hGUVVGRkxFbEJRVWs3UzBGRGJrSTdSMEZEUml4RFFVRkRMRU5CUVVNN1JVRkRTQ3hKUVVGSkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeEZRVUZGTEZWQlFWVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhUUVVGVExFZEJRVWNzVlVGQlZTeERRVUZETzBOQlEzWklMRU5CUVVNN08wRkJSVVlzU1VGQlNTeDVRa0ZCZVVJc1IwRkJSeXhWUVVGVkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVTdSVUZEY0VRc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJUdEpRVU5VTEUxQlFVMHNTVUZCU1N4alFVRmpMRU5CUVVNc01rUkJRVEpFTEVOQlFVTXNRMEZCUXp0SFFVTjJSanM3UlVGRlJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dERRVU4yUml4RFFVRkRPenM3T3pzN096czdRVUZUUml4VFFVRlRMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVU3UlVGRGNFSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UTBGRGVFSTdPenM3T3pzN096dEJRVk5FTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSVHRGUVVOMFFpeFBRVUZQTEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenREUVVNeFFqczdPenM3T3pzN1FVRlJSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVTdSVUZEZGtJc1QwRkJUeXhQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVOQlFVTTdRMEZEYkVNN096czdPenM3T3pzN1FVRlZSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVTdSVUZEZGtJc1NVRkJTU3hKUVVGSkxFZEJRVWNzVDBGQlR5eExRVUZMTEV0QlFVc3NWMEZCVnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMFZCUlhaRkxFOUJRVThzU1VGQlNTeExRVUZMTEZWQlFWVXNTVUZCU1N4SlFVRkpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdRMEZETlVRN096czdPenM3TzBGQlVVUXNVMEZCVXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRk8wVkJRM1pDTEU5QlFVOHNUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hEUVVGRE8wTkJRMnhET3pzN096czdPenRCUVZGRUxGTkJRVk1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlR0RlFVTjZRaXhQUVVGUExFOUJRVThzUzBGQlN5eExRVUZMTEZWQlFWVXNRMEZCUXp0RFFVTndRenM3T3pzN096czdRVUZSUkN4VFFVRlRMRmRCUVZjc1EwRkJReXhMUVVGTExFVkJRVVU3UlVGRE1VSXNUMEZCVHl4UFFVRlBMRXRCUVVzc1MwRkJTeXhYUVVGWExFTkJRVU03UTBGRGNrTTdPenM3T3pzN08wRkJVVVFzVTBGQlV5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZPMFZCUTNSQ0xFOUJRVThzUzBGQlN5eERRVUZETEZkQlFWY3NTMEZCU3l4TFFVRkxMRU5CUVVNN1EwRkRjRU03T3pzN096czdPenM3TzBGQlYwUXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdSVUZEZUVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUlVGQlJTeERRVUZET3p0RlFVVndRaXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEZWQlFWVXNSVUZCUlR0SlFVTXpRaXhKUVVGSkxGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSVHROUVVOb1F5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UzBGRGFFVXNUVUZCVFR0TlFVTk1MRWxCUVVrc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMHRCUTNSRE8wZEJRMFk3TzBWQlJVUXNTMEZCU3l4SlFVRkpMRXRCUVVzc1NVRkJTU3hWUVVGVkxFVkJRVVU3U1VGRE5VSXNTVUZCU1N4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMDFCUTNaRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRMUVVNelFqdEhRVU5HT3p0RlFVVkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wTkJRMjVDT3pzN096czdPenM3TzBGQlZVUXNVMEZCVXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVTdSVUZEY2tNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wTkJRemxET3pzN096czdPenRCUVZGRUxGTkJRVk1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlR0RlFVTnlRaXhQUVVGUExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRKUVVOd1JDeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0SlFVVmtMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SFFVTm9RaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBOQlExSTdPenM3T3pzN096dEJRVk5FTEZOQlFWTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVU3UlVGRGVFTXNTVUZCU1N4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN096czdPenM3UlVGUEwwTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBsQlEzUkRMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1NVRkZia1VzU1VGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdE5RVU5vUkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UzBGRGJFYzdSMEZEUmpzN1JVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1NVRkRNVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wZEJRMmhHT3p0RlFVVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wTkJRMmhDT3p0QlFVVkVMRWxCUVVrc1UwRkJVeXhIUVVGSExGbEJRVms3T3pzN096dEZRVTB4UWl4VFFVRlRMRk5CUVZNc1IwRkJSenRKUVVOdVFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRjRVlzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenM3U1VGRmFFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRGNrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETzBkQlEyeERPenM3T3pzN096czdPMFZCVlVRc1YwRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBsQlEzUkNMRWRCUVVjc1JVRkJSU3hKUVVGSk8wbEJRMVFzUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVU3VFVGRGFrTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGRGJFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VlVGRGNrTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkROVUk3VDBGRFJqczdPMDFCUjBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1QwRkRla0k3T3p0TlFVZEVMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN08wMUJSMnBFTEU5QlFVODdVVUZEVEN4TlFVRk5MRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VlVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTJ4RE8wOUJRMFlzUTBGQlF6dExRVU5JT3pzN096czdPenM3UjBGVFJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRTFCUVUwN1NVRkRXQ3hMUVVGTExFVkJRVVVzVTBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSVHROUVVOdVF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRWUVVOeVF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0VFFVTTVRanRQUVVOR096czdUVUZIUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU4wUXl4UFFVRlBPMDlCUTFJN096dE5RVWRFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNTVUZCU1N4RlFVRkZPMUZCUTNwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1QwRkRja0lzUTBGQlF5eERRVUZETzB0QlEwbzdSMEZEUml4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVOS0xFOUJRVThzVTBGQlV5eERRVUZETzBOQlEyeENMRVZCUVVVc1EwRkJRenM3UVVGRlNpeEpRVUZKTEV0QlFVc3NSMEZCUnl4WlFVRlpPenM3T3pzN08wVkJUM1JDTEZOQlFWTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSVHRKUVVOMlFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRja1lzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenM3U1VGRk5VSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRFlpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOaUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenM3U1VGRk1VSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRGRFSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03U1VGRGVrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03UjBGRGNFTTdPenM3T3pzN096czdSVUZWUkN4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGJFSXNSMEZCUnl4RlFVRkZMRTlCUVU4N1NVRkRXaXhMUVVGTExFVkJRVVVzVTBGQlV5eFJRVUZSTEVkQlFVYzdUVUZEZWtJc1NVRkJTU3hWUVVGVkxFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZET3p0TlFVVjRSaXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenM3VFVGRk4wSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VDBGRE5VTXNUVUZCVFR0UlFVTk1MRWxCUVVrc1EwRkJReXd5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMDlCUTI1RU96dE5RVVZFTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZET3p0TlFVVTFRaXhQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pT3pzN096czdPenM3UjBGVFJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRkZCUVZFN1NVRkRZaXhMUVVGTExFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZGtJc1NVRkJTU3haUVVGWkxFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZET3p0TlFVVXhSaXhKUVVGSkxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlR0UlFVTjZRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEZsQlFWa3NRMEZCUXp0UFFVTjRRaXhOUVVGTk8xRkJRMHdzU1VGQlNTeERRVUZETERKRFFVRXlReXhEUVVGRExFTkJRVU03VDBGRGJrUTdPMDFCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqczdPenM3T3pzN08wZEJVMFlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4UlFVRlJPMGxCUTJJc1MwRkJTeXhGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzWkNMRWxCUVVrc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6czdUVUZGZEVZc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6czdUVUZGZEVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMUZCUTNSRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenRQUVVNdlFqczdUVUZGUkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXpzN1RVRkZka0lzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3T3pzN096czdSMEZqUml4RlFVRkZPMGxCUTBRc1IwRkJSeXhGUVVGRkxFbEJRVWs3U1VGRFZDeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRk8wMUJRekZDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1RVRkZNVUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3TzBkQlUwWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hOUVVGTk8wbEJRMWdzUzBGQlN5eEZRVUZGTEZOQlFWTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHROUVVNM1FpeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dE5RVU0zUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN08wMUJSVFZDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN096czdPenM3TzBkQlVVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVE8wbEJRMlFzUzBGQlN5eEZRVUZGTEZOQlFWTXNUMEZCVHl4SFFVRkhPMDFCUTNoQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE96dE5RVVY0UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVOaU96czdPenM3T3pzN1IwRlRSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEUxQlFVMDdTVUZEV0N4TFFVRkxMRVZCUVVVc1UwRkJVeXhKUVVGSkxFZEJRVWM3VFVGRGNrSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE96dE5RVVY2Uml4SlFVRkpMRkZCUVZFc1JVRkJSVHRSUVVOYUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRQUVVOdVF6czdUVUZGUkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXpzN1RVRkZja0lzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRTlCUVU4N1NVRkRXaXhMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdUVUZEZEVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN08wMUJSWFJDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN096czdPenM3TzBkQlVVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVE8wbEJRMlFzUzBGQlN5eEZRVUZGTEZOQlFWTXNUMEZCVHl4SFFVRkhPMDFCUTNoQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPenROUVVWeVFpeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTmlPenM3T3pzN096dEhRVkZHTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1VVRkJVVHRKUVVOaUxFdEJRVXNzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTjJRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXpzN1RVRkZkRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3T3p0SFFWVkdMRVZCUVVVN1NVRkRSQ3hIUVVGSExFVkJRVVVzU1VGQlNUdEpRVU5VTEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTzAxQlEycERMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3VFVGRk0wSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1MwRkRZanM3T3pzN096czdPMGRCVTBZc1JVRkJSVHRKUVVORUxFZEJRVWNzUlVGQlJTeFJRVUZSTzBsQlEySXNTMEZCU3l4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJUdE5RVU16UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXp0TFFVTndRenM3T3pzN096czdSMEZSUml4RlFVRkZPMGxCUTBRc1IwRkJSeXhGUVVGRkxGVkJRVlU3U1VGRFppeEhRVUZITEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRja0lzVDBGQlR5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPMHRCUTJoQ096czdPenM3T3pzN1NVRlRSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZPMDFCUTNSQ0xFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTJZc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdUMEZEWWl4TlFVRk5PMUZCUTB3c1NVRkJTU3hEUVVGRExIVkRRVUYxUXl4RFFVRkRMRU5CUVVNN1QwRkRMME03UzBGRFJqczdPenM3T3pzN1IwRlJSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEU5QlFVODdTVUZEV2l4SFFVRkhMRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VFVGRGNrSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8wdEJRMmhDT3pzN096czdPenRKUVZGRUxFZEJRVWNzUlVGQlJTeFRRVUZUTEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVN1RVRkRkRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGNFSTdPenM3T3pzN08wZEJVVVlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4TlFVRk5PMGxCUTFnc1IwRkJSeXhGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTTdTMEZETTBJN096czdPenM3TzBkQlVVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hWUVVGVk8wbEJRMllzUjBGQlJ5eEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNKQ0xFOUJRVThzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0TFFVTm9RanM3T3pzN096czdTVUZSUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTzAxQlF6TkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0TFFVTndRanRIUVVOR0xFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEwb3NUMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRaQ3hGUVVGRkxFTkJRVU03TzBGQlJVb3NVMEZCVXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdSVUZEZGtNc1NVRkJTU3hIUVVGSExFZEJRVWM3T3pzN096dEpRVTFTTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenROUVVOMFFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOcVFqczdPenM3T3pzN1NVRlJSQ3hKUVVGSkxFVkJRVVVzVTBGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZPMDFCUTNoQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXpzN1RVRkZha0lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRia0lzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPenRSUVVWb1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenM3VVVGRmFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPenRSUVVWeVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN08xRkJSV3BDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1VVRkZPVUlzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRWUVVOMFF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3V1VGRmFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWRCUTNaRE96dFZRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1ZVRkZja01zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMU5CUTJoQ0xFTkJRVU1zUTBGQlF6dFBRVU5LTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzVTBGQlV5eEZRVUZGTEZOQlFWTXNVMEZCVXl4SFFVRkhPMDFCUXpsQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpPMVZCUTJoQ0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMDFCUTNwQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxPMVZCUTJ4Q0xGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPenM3VFVGSEwwSXNTVUZCU1N4alFVRmpMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMDFCUld4RkxGRkJRVkVzVTBGQlV6dFJRVU5tTEV0QlFVc3NSMEZCUnp0VlFVTk9MRWxCUVVrc1MwRkJTeXhMUVVGTExFZEJRVWNzUlVGQlJUdFpRVU5xUWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF6dFhRVU4wUWl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0alFVTjJSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1kwRkZaaXhMUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTnFRanM3V1VGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFhRVU01UWl4TlFVRk5MRWxCUVVrc1kwRkJZeXhGUVVGRk8xbEJRM3BDTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWRCUXpsRUxFMUJRVTA3V1VGRFRDeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1YwRkRaanRWUVVORUxFMUJRVTA3TzFGQlJWSXNTMEZCU3l4SFFVRkhPMVZCUTA0c1NVRkJTU3hMUVVGTExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFsQlEycENMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFkQlEycENMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMk5CUTNaRUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPenRqUVVWbUxFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUTNSQ096dFpRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFkQlEyaERMRTFCUVUwc1NVRkJTU3hqUVVGakxFVkJRVVU3V1VGRGVrSXNTMEZCU3l4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdWMEZEY0VRc1RVRkJUVHRaUVVOTUxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WFFVTm1PMVZCUTBRc1RVRkJUVHM3VVVGRlVpeExRVUZMTEVkQlFVYzdWVUZEVGl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFZRVU53UWl4TlFVRk5PMDlCUTFRN1MwRkRSanM3T3pzN096czdTVUZSUkN4UFFVRlBMRVZCUVVVc1UwRkJVeXhQUVVGUExFZEJRVWM3VFVGRE1VSXNUMEZCVHl4TFFVRkxMRU5CUVVNc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU14UWpzN096czdPenM3U1VGUlJDeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRWRCUVVjN1RVRkRkRUlzVDBGQlR5eExRVUZMTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03UzBGRGNFTTdPenM3T3pzN096dEpRVk5FTEZGQlFWRXNSVUZCUlN4VFFVRlRMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVU3VFVGRGNrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4TFFVRkxMRk5CUVZNc1EwRkJRenRMUVVOeVJEdEhRVU5HTEVOQlFVTTdPMFZCUlVZc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3p0SlFVMXNRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzB0QlEyaENPenM3T3pzN096dEpRVkZFTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGRrSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSenRSUVVOU0xGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wSXNTMEZCU3l4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETzA5QlF6ZERMRU5CUVVNN1MwRkRTRHRIUVVOR0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUlVGQlJUczdPenM3T3p0SlFVOXdRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1NVRkJTU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXp0TlFVTTVRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU03T3pzN096dE5RVTB6UXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTlCUVU4c1MwRkJTeXhSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlR0UlFVTTNSU3hQUVVGUExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzA5QlF6ZEZPenROUVVWRUxFOUJRVThzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnVRanRIUVVOR0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUlVGQlJUczdPenM3TzBsQlRYQkNMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGFFSTdSMEZEUml4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN096czdPenRCUVU5RUxGTkJRVk1zUjBGQlJ5eEhRVUZITzBWQlEySXNUMEZCVHl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBOQlF6ZENPenM3T3pzN096czdPenM3TzBGQllVUXNVMEZCVXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVTdSVUZEY2tNc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzAxQlEyaENMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03VFVGRGFFSXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenROUVVOaUxFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0RlFVTndRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdSVUZEYWtJc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRGUVVVelFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4VFFVRlRMRXRCUVVzc1IwRkJSenRKUVVNelFpeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1MwRkJTeXhMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJwRUxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEWml4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dEhRVU55UXl4RFFVRkRPenRGUVVWR0xFbEJRVWtzVTBGQlV5eEhRVUZITEZOQlFWTXNVMEZCVXl4SFFVRkhPMGxCUTI1RExFbEJRVWtzUlVGQlJTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJZc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRXRCUVVzc1JVRkJSU3hSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlF6RkVMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRka01zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTm1MRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU03U1VGRGFrSXNTVUZCU1N4VFFVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVWQlFVVTdUVUZEZEVNc1NVRkJTU3hQUVVGUExFVkJRVVU3VVVGRFdDeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRkRUlzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0UFFVTm9RanROUVVORUxGRkJRVkVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdUVUZEWkN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1RVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dExRVU55UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEZGQlFWRXNTMEZCU3l4TFFVRkxMRVZCUVVVN1RVRkRha1FzVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03UzBGRGVFTTdTVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRIUVVObUxFTkJRVU03TzBWQlJVWXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhaUVVGWk8wbEJRemRDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOMFFpeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTJJc1QwRkJUeXhIUVVGSExFOUJRVThzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGRCUTJwRExFTkJRVU03TzBWQlJVWXNUMEZCVHl4VFFVRlRMRU5CUVVNN1EwRkRiRUk3TzBGQlJVUXNTVUZCU1N4WFFVRlhMRWRCUVVjN1JVRkRhRUlzUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMR0ZCUVdFc1EwRkJRenRGUVVOc1F5eEhRVUZITEVWQlFVVXNRMEZCUXl4aFFVRmhMRVZCUVVVc1dVRkJXU3hEUVVGRE8wTkJRMjVETEVOQlFVTTdPMEZCUlVZc1UwRkJVeXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN1JVRkRlRU1zU1VGQlNTeEpRVUZKTEVkQlFVYzdPenM3T3pzN08wbEJVVlFzUzBGQlN5eEZRVUZGTEZOQlFWTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHROUVVNMVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEycEVMRWxCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkROVUlzU1VGQlNTeFRRVUZUTEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU03TzFGQlJUTkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFZRVU5ZTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZETVVRc1RVRkJUVHRWUVVOTUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEZGtNN08xRkJSVVFzU1VGQlNTeERRVUZETEV0QlFVc3NUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3VlVGRE0wSXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTXhSQ3hOUVVGTk8xVkJRMHdzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTjJRenRQUVVOR08wdEJRMFk3T3pzN096czdPenRKUVZORUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVN1RVRkRPVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU5xUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRPenRSUVVVMVFpeExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOMFFpeExRVUZMTEVOQlFVTXNWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJRenRQUVVONFFqdExRVU5HTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhCQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRMnhETzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3T3pzN08wbEJUMjVDTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRia1E3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVTdPenM3T3pzN1NVRlBka0lzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE96dE5RVVZ5UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRMUVVNM1F6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPenRGUVU5SUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEZsQlFWazdTVUZEZUVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEhRVU01UXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFTTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRIUVVNdlF5eERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhKUVVGSkxFTkJRVU03UTBGRFlqczdPenM3T3pzN1FVRlJSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVTdSVUZEZEVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0SlFVTXpRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVOdVF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN08wbEJSV3BDTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTzAxQlF6TkNMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSVHRSUVVOc1F5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRMnBDTzB0QlEwWTdPMGxCUlVRc1QwRkJUeXhQUVVGUExFTkJRVU03UjBGRGFFSTdPMFZCUlVRc1QwRkJUeXhGUVVGRkxFTkJRVU03UTBGRFdEczdPenM3T3pzN1FVRlJSQ3hUUVVGVExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVTdSVUZEYmtJc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeFpRVUZaTEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVN1NVRkRPVU1zVDBGQlR5eEpRVUZKTEVOQlFVTTdSMEZEWWpzN1JVRkZSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dERRVU5rT3p0QlFVVkVMRWxCUVVrc1kwRkJZeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPenRCUVVVdlF5eFRRVUZUTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wVkJRMmhETEVsQlFVa3NTVUZCU1N4SFFVRkhPenM3T3pzN1NVRk5WQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdUVUZEZEVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPMDFCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdUVUZEY2tRc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeExRVUZMTEVWQlFVVTdVVUZEZEVZc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMDlCUTNKRkxFTkJRVU1zUTBGQlF6dExRVU5LTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPMGxCVFc1Q0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYUVJN096czdPenM3TzBsQlVVUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdE5RVU51UWl4SlFVRkpMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU5tTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzA5QlF5OUNPenROUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTFvc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdUMEZEWWl4TlFVRk5PMUZCUTB3c1NVRkJTU3hEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1QwRkRia1E3UzBGRFJqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhCQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYUVJN096czdPenM3TzBsQlVVUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdE5RVU51UWl4SlFVRkpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU5hTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wOUJRMklzVFVGQlRUdFJRVU5NTEVsQlFVa3NRMEZCUXl3eVEwRkJNa01zUjBGQlJ5eGpRVUZqTEVkQlFVY3NZVUZCWVN4RFFVRkRMRU5CUVVNN1QwRkRjRVk3UzBGRFJqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlRzN096czdPMGxCVFhSQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJReTlDTzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzU1VGQlNTeERRVUZETzBOQlEySTdPMEZCUlVRc1UwRkJVeXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN1JVRkRlRU1zU1VGQlNTeEpRVUZKTEVkQlFVYzdPenM3T3p0SlFVMVVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMHRCUTJ4RE8wZEJRMFlzUTBGQlF6czdSVUZGUml4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJUczdPenM3TzBsQlRYQkNMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGFFSTdPenM3T3pzN096dEpRVk5FTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGRrSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGRGJrSXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTI1RExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFBRVU5zUXl4TlFVRk5PMUZCUTB3c1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UFFVTjBRanM3VFVGRlJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOcVFqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlRzN096czdPMGxCVFhaQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMDFCUTNaQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE96dE5RVVZ5UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU51UWl4UFFVRlBMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wOUJRM1pFT3p0TlFVVkVMRTlCUVU4c1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdTMEZETlVJN1IwRkRSaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNXVUZCV1R0SlFVTXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdSMEZEWkN4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eEpRVUZKTEVOQlFVTTdRMEZEWWpzN1FVRkZSQ3hUUVVGVExFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1JVRkJSVHRGUVVONFF5eEpRVUZKTEVsQlFVa3NSMEZCUnpzN096czdPMGxCVFZRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEySTdPenM3T3pzN096dEpRVk5FTEVsQlFVa3NSVUZCUlN4VFFVRlRMRWxCUVVrc1IwRkJSenROUVVOd1FpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN08wMUJSV3BDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3VFVGRmJrWXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03TzAxQlJYSkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFGQlEyeENMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN6dFBRVU55UWl4RFFVRkRMRU5CUVVNN08wMUJSVWdzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSVHRWUVVONFFpeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzN1UwRkRkRUlzUTBGQlF5eERRVUZETzA5QlEwb3NRMEZCUXl4RFFVRkRPMHRCUTBvN1IwRkRSaXhEUVVGRE96dEZRVVZHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRk96czdPenM3U1VGTmNrSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOb1FqczdPenM3T3pzN1NVRlJSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUTNaQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOc1JEdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NSVUZCUlRzN096czdPMGxCVFhoQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU03UzBGRGJFUTdSMEZEUml4RFFVRkRMRU5CUVVNN08wVkJSVWdzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVN096czdPenRKUVUxd1FpeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1RVRkRiRUlzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenROUVVONlFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRE96dE5RVVV2UWl4SlFVRkpMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTJ4RExFOUJRVThzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXp0UFFVTXpRanM3VFVGRlJDeFBRVUZQTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1MwRkRNMEk3UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBTQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNZMEZCWXl4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRkxGbEJRVms3U1VGRE4wTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wZEJRMklzUTBGQlF5eERRVUZET3p0RlFVVklMRTlCUVU4c1NVRkJTU3hEUVVGRE8wTkJRMkk3TzBGQlJVUXNVMEZCVXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdSVUZEZWtNc1NVRkJTU3hMUVVGTExFZEJRVWM3T3pzN096dEpRVTFXTEZkQlFWY3NSVUZCUlN4VFFVRlRMRmRCUVZjc1IwRkJSenROUVVOc1F5eEpRVUZKTEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6czdUVUZGY0VNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZEVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdUMEZEYUVRN1MwRkRSanM3T3pzN096czdTVUZSUkN4WlFVRlpMRVZCUVVVc1UwRkJVeXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTzAxQlF6ZERMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTMEZETDBRN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZET3p0TlFVVndReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTjBReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03VDBGRE5VSTdPMDFCUlVRc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRE1VTTdSMEZEUml4RFFVRkRPenRGUVVWR0xFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkZPenM3T3pzN1NVRk5kRUlzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFOUJRVThzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wdEJRM1JETzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZPenM3T3pzN1NVRk5ja0lzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFOUJRVThzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wdEJRM3BETzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNZVUZCWVN4RlFVRkZPenM3T3pzN1NVRk5NMElzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFOUJRVThzUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzB0QlEzaEdPMGRCUTBZc1EwRkJReXhEUVVGRE96dEZRVVZJTEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1dVRkJXU3hGUVVGRk96czdPenM3U1VGTk1VSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRMUVVOdVJ6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPenM3UlVGUlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4WlFVRlpPMGxCUXpGRUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTndRaXhMUVVGTExFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdSMEZEZEVJc1EwRkJReXhEUVVGRE96czdPenM3UlVGTlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3haUVVGWk8wbEJReTlDTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRIUVVOb1FpeERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhMUVVGTExFTkJRVU03UTBGRFpEczdRVUZGUkN4VFFVRlRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlR0RlFVTjZReXhKUVVGSkxFdEJRVXNzUjBGQlJ6czdPenM3T3p0SlFVOVdMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZET3p0TlFVVTFRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdUVUZEYWtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZET3p0TlFVVnVRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMHRCUXpWQ096czdPenM3T3p0SlFWRkVMRk5CUVZNc1JVRkJSU3hUUVVGVExGTkJRVk1zUjBGQlJ6dE5RVU01UWl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dExRVU5xUmpzN096czdPenM3U1VGUlJDeFhRVUZYTEVWQlFVVXNVMEZCVXl4WFFVRlhMRWRCUVVjN1RVRkRiRU1zU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03VFVGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE96dE5RVVZvUkN4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOVUxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6czdVVUZGZWtNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRTlCUVU4c1JVRkJSVHRWUVVONlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZETDBNc1EwRkJReXhEUVVGRE8wOUJRMG83UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hoUVVGaExFVkJRVVVzVTBGQlV5eGhRVUZoTEVkQlFVYzdUVUZEZEVNc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN08wMUJSWEpETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXpzN1RVRkZjRVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzVDBGQlR5eEZRVUZGTzFGQlEyaEVMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRQUVVNdlF5eERRVUZETEVOQlFVTTdTMEZEU2p0SFFVTkdMRU5CUVVNN096czdPenM3UlVGUFJpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZETTBNc1MwRkJTeXhEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzBkQlEzWkNMRU5CUVVNc1EwRkJRenM3T3pzN096dEZRVTlJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNXVUZCV1R0SlFVTXhReXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdSMEZEWml4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRmxCUVZrN1NVRkRiRU1zUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGRCUTNKQ0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRXRCUVVzc1EwRkJRenREUVVOa096dEJRVVZFTEZOQlFWTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlF6RkRMRWxCUVVrc1RVRkJUU3hIUVVGSE96czdPMGxCU1Znc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZET3p0TlFVVm9RaXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1VVRkROVUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VDBGRE4wSTdTMEZEUmpzN096czdPenM3U1VGUlJDeFBRVUZQTEVWQlFVVXNVMEZCVXl4UFFVRlBMRWRCUVVjN1RVRkRNVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMDFCUTI1R0xFbEJRVWtzVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wMUJRM0JETEVsQlFVa3NaVUZCWlN4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUk8xVkJRMmhETEU5QlFVOHNSMEZCUnl4bFFVRmxMRU5CUVVNc1QwRkJUenRWUVVOcVF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJRenM3TzAxQlIzUkRMRWxCUVVrc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8wMUJRemRETEVsQlFVa3NTVUZCU1N4SFFVRkhMRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU03VFVGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1RVRkRiRU1zU1VGQlNTeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3p0TlFVVTVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VVVGRGVrVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VlVGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenM3VlVGRmNrTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPenRWUVVWNFF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMjVDT3p0UlFVVkVMRXRCUVVzc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFWQlEzUkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03TzFWQlJYSkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenM3VlVGRmVrTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU4yUWp0UFFVTkdPenROUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETzB0QlEyUTdPenM3T3pzN08wbEJVVVFzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNoQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1RVRkRka0lzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNUdFZRVU5zUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNUMEZCVHp0VlFVTnNReXhOUVVGTkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hEUVVGRE96czdUVUZIY2tNc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzAxQlEzaERMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzAxQlF6ZERMRWxCUVVrc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6czdUVUZGTjBNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZEVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVOb1F6czdUVUZGUkN4TFFVRkxMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdFJRVU0zUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFBRVU12UXpzN1RVRkZSQ3hMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0UlFVTXpReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1QwRkROMFE3UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZUVJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXpzN08wMUJSM1pDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRM0pETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVNdlF6dExRVU5HTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPMGxCVFhKQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03UzBGRGNFWTdSMEZEUml4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmxCUVZrN1NVRkRPVUlzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGxCUTJoQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTm1MRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEhRVU5xUWl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrN1NVRkRjRU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8wMUJRelZDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRMUVVOcVFqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNXVUZCV1R0SlFVTXZRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdSMEZEYWtJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNUVUZCVFN4RFFVRkRPME5CUTJZN08wRkJSVVFzU1VGQlNTeFpRVUZaTEVkQlFVY3NXVUZCV1RzN096dEZRVWszUWl4VFFVRlRMRmxCUVZrc1IwRkJSenRKUVVOMFFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRka1lzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenM3U1VGRmJrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03UjBGRE5VSTdPenM3T3pzN096czdPenM3UlVGaFJDeFhRVUZYTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1NVRkRla0lzUjBGQlJ5eEZRVUZGTEVsQlFVazdTVUZEVkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1RVRkRkRU1zU1VGQlNTeFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPenROUVVWNFJpeEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRSUVVOd1FpeE5RVUZOTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRQUVVOdVFqczdUVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU4wUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenM3VVVGRmNFTXNSVUZCUlN4RFFVRkRMR2RDUVVGblFpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzA5QlEzQkZPMHRCUTBZN096czdPenM3T3pzN1IwRlZSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEV0QlFVczdTVUZEVml4TFFVRkxMRVZCUVVVc1UwRkJVeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlR0TlFVTTVRaXhKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0UlFVTndRaXhOUVVGTkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UFFVTnVRanM3VFVGRlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVOMFF5eEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VDBGRGNrVTdTMEZEUmpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRk5CUVZNN1NVRkRaQ3hMUVVGTExFVkJRVVVzVTBGQlV5eFBRVUZQTEVkQlFVYzdUVUZEZUVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzB0QlEzWkNPMGRCUTBZc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRFNpeFBRVUZQTEZsQlFWa3NRMEZCUXp0RFFVTnlRaXhGUVVGRkxFTkJRVU03TzBGQlJVb3NVMEZCVXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3p0RlFVMHhReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZsQlFWa3NSVUZCUlN4RFFVRkRPenRGUVVWb1F5eEpRVUZKTEUxQlFVMHNSMEZCUnpzN096dEpRVWxZTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenROUVVOMFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1MwRkRZanM3T3pzN096czdPMGxCVTBRc1NVRkJTU3hGUVVGRkxGTkJRVk1zU1VGQlNTeEhRVUZITzAxQlEzQkNMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1dVRkJXVHRSUVVNdlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wOUJRM1pDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzB0QlF6bENPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU01UWp0SFFVTkdMRU5CUVVNN096czdPenRGUVUxR0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmxCUVZrN1NVRkRMMElzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGxCUTJoQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SFFVTnNRaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1EwRkRaanM3UVVGRlJDeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTNSRExFbEJRVWtzWjBKQlFXZENMRWRCUVVjN1JVRkRja0lzUjBGQlJ5eEZRVUZGTEVkQlFVYzdSVUZEVWl4SFFVRkhMRVZCUVVVc1IwRkJSenRGUVVOU0xFZEJRVWNzUlVGQlJTeEhRVUZITzBOQlExUXNRMEZCUXpzN1FVRkZSaXhUUVVGVExGTkJRVk1zUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1JVRkJSVHRGUVVNM1F5eEpRVUZKTEZOQlFWTXNSMEZCUnpzN096czdPMGxCVFdRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1MwRkRka003T3pzN096czdPenRKUVZORUxFOUJRVThzUlVGQlJTeFRRVUZUTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVN1RVRkRha01zU1VGQlNTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdPMDFCUldoRExFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1FpeFBRVUZQTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdUMEZETTBRN08wMUJSVVFzVDBGQlR5eFBRVUZQTEVOQlFVTTdTMEZEYUVJN096czdPenM3T3p0SlFWTkVMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVTdUVUZEZWtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eExRVUZMTEZOQlFWTXNRMEZCUXp0TFFVTnFRenM3T3pzN096czdTVUZSUkN4UlFVRlJMRVZCUVVVc1UwRkJVeXhSUVVGUkxFZEJRVWM3VFVGRE5VSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGJFWTdPenM3T3pzN08wbEJVVVFzVjBGQlZ5eEZRVUZGTEZOQlFWTXNWMEZCVnl4SFFVRkhPMDFCUTJ4RExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMHRCUTNKR08wZEJRMFlzUTBGQlF6czdSVUZGUml4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFOUJRVThzUlVGQlJUczdPenM3TzBsQlRYcENMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4UFFVRlBMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGNrSTdPenM3T3pzN096dEpRVk5FTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGRrSXNTVUZCU1N4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRGVFTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU03VDBGRGRFSXNUVUZCVFR0UlFVTk1MRWxCUVVrc1EwRkJReXgzUTBGQmQwTXNRMEZCUXl4RFFVRkRPMDlCUTJoRU8wdEJRMFk3UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBTQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxGbEJRVms3U1VGRE0wTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wZEJRM3BDTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNXVUZCV1R0SlFVTTVRaXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdSMEZEYmtJc1EwRkJReXhEUVVGRE96czdPenM3TzBWQlQwZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExHTkJRV01zUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4WlFVRlpPMGxCUTJoRUxGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SFFVTjBRaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1EwRkRiRUk3T3pzN096czdPenRCUVZORUxGTkJRVk1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVN1JVRkRMMElzVDBGQlR6czdPenM3T3p0SlFVOU1MRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVTdUVUZEYWtNc1NVRkJTU3hWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1F5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRPMDlCUTI1Q096dE5RVVZFTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q08wZEJRMFlzUTBGQlF6dERRVU5JT3pzN096czdPenM3UVVGVFJDeFRRVUZUTEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wVkJReTlDTEU5QlFVODdPenM3T3pzN1NVRlBUQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZPMDFCUTJwRExFOUJRVThzVTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZEZUVRN1IwRkRSaXhEUVVGRE8wTkJRMGc3T3pzN096czdPenRCUVZORUxGTkJRVk1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVN1JVRkRhRU1zVDBGQlR6czdPenM3T3p0SlFVOU1MRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVTdUVUZEYWtNc1QwRkJUeXhUUVVGVExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJReTlETzBkQlEwWXNRMEZCUXp0RFFVTklPenM3T3pzN096czdRVUZUUkN4VFFVRlRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTzBWQlEyNURMRTlCUVU4N096czdPenM3U1VGUFRDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRk8wMUJRMnBETEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTzFGQlF5OUNMRWxCUVVrc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPenRSUVVWcVF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRWUVVOc1FpeFBRVUZQTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xTkJRMmhET3p0UlFVVkVMRTlCUVU4c1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF6dFBRVU42UWpzN1RVRkZSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dExRVU5zUWp0SFFVTkdMRU5CUVVNN1EwRkRTRHM3T3pzN096czdPMEZCVTBRc1UwRkJVeXhSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlR0RlFVTndReXhQUVVGUE96czdPenM3TzBsQlQwd3NUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU5xUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TlFVTm9ReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJRenROUVVOdVF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF6dE5RVU55UXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXpzN1RVRkZOME1zU1VGQlNTeFBRVUZQTEV0QlFVc3NVVUZCVVN4RlFVRkZPMUZCUTNoQ0xFOUJRVThzVTBGQlV5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzA5QlEycEVPenROUVVWRUxFOUJRVThzVTBGQlV5eEhRVUZITEZWQlFWVXNSMEZCUnl4UFFVRlBMRWRCUVVjc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF6dExRVU42UkR0SFFVTkdMRU5CUVVNN1EwRkRTRHM3T3pzN096czdPMEZCVTBRc1UwRkJVeXhQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN096czdPenM3TzBWQlVUTkRMRWxCUVVrc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZET3p0RlFVVXhSU3hQUVVGUE96czdPenM3TzBsQlQwd3NUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU5xUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU0xUXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMUZCUld4RExFbEJRVWtzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0VlFVTXZSQ3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMU5CUTNSRkxFMUJRVTA3VlVGRFRDeEpRVUZKTEVOQlFVTXNaMFpCUVdkR0xFTkJRVU1zUTBGQlF6dFRRVU40Ump0UFFVTkdPenROUVVWRUxFOUJRVThzVTBGQlV5eERRVUZETzB0QlEyeENPMGRCUTBZc1EwRkJRenREUVVOSU96dEJRVVZFTEZOQlFWTXNVMEZCVXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlF6ZERMRWxCUVVrc1UwRkJVeXhIUVVGSE96czdPenM3TzBsQlQyUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJUdE5RVU4yUWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdUVUZGZWtRc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4SFFVRkhMR1ZCUVdVc1EwRkJRenRMUVVNM1JqczdPenM3T3pzN1NVRlJSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZUVJc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRE9VTTdSMEZEUml4RFFVRkRPenM3T3pzN08wVkJUMFlzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1ZVRkJWU3hQUVVGUExFVkJRVVU3U1VGRGJrTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYUVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRja01zU1VGQlNTeExRVUZMTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU03TzBsQlJYaERMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0TlFVTTFSQ3hWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpPMUZCUTNSRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6czdVVUZGT1VJc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VDBGRGNrTXNRMEZCUXl4RFFVRkRPenROUVVWSUxFOUJRVThzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZETjBNN08wbEJSVVFzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wMUJRelZFTEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVms3VVVGRGRFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPenRSUVVVNVFpeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRMnhDTEVOQlFVTXNRMEZCUXpzN1RVRkZTQ3hQUVVGUExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZEY2tRN08wbEJSVVFzVDBGQlR5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEhRVU40UXl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmxCUVZrN1NVRkRMMElzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGRCUTNCQ0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRk5CUVZNc1EwRkJRenREUVVOc1FqczdRVUZGUkN4VFFVRlRMRlZCUVZVc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPenRGUVU4NVF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wVkJSWEpDTEVsQlFVa3NWVUZCVlN4SFFVRkhPenM3T3pzN08wbEJUMllzVDBGQlR5eEZRVUZGTEZOQlFWTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSVHROUVVOc1F5eEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRE96dE5RVVU1UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xRkJRMklzVDBGQlR5eFJRVUZSTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFBRVU01UlRzN1RVRkZSQ3hQUVVGUExGRkJRVkVzUjBGQlJ5eFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETzB0QlF6RkVPenM3T3pzN096czdTVUZUUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRE96dE5RVVV2Uml4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTMEZEYmtVN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NSVUZCUlN4RFFVRkRPMHRCUXk5RE96czdPenM3T3pzN1NVRlRSQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMDFCUXpsQ0xGVkJRVlVzUTBGQlF5eFpRVUZaTzFGQlEzSkNMRkZCUVZFc1JVRkJSU3hEUVVGRE8wOUJRMW9zUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1MwRkRia0k3T3pzN096czdPMGxCVVVRc1RVRkJUU3hGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzaENMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03TzAxQlJXcENMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU5hT3pzN096czdPenRKUVZGRUxFOUJRVThzUlVGQlJTeFRRVUZUTEU5QlFVOHNSMEZCUnp0TlFVTXhRaXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZET3p0TlFVVm9RaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTMEZEV2p0SFFVTkdMRU5CUVVNN08wVkJSVVlzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVN096czdPenM3U1VGUE4wSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03TzAxQlJUbENMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJUdFJRVU51UkN4UFFVRlBMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU03VDBGRGFFTTdPMDFCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1MwRkRia003UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEZsQlFWazdTVUZETlVJc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzBkQlEyeENMRU5CUVVNc1EwRkJRenM3T3pzN096czdSVUZSU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zWTBGQll5eEZRVUZGTEZGQlFWRXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZEYkVVc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBkQlEzUkNMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1dVRkJXVHRKUVVNelFpeFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1IwRkRja0lzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeFpRVUZaTzBsQlF5OUNMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEhRVU55UWl4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eFZRVUZWTEVOQlFVTTdRMEZEYmtJN096czdPenM3T3p0QlFWTkVMRWxCUVVrc1pVRkJaU3hIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGTlVJc1NVRkJTVHRGUVVOR0xFbEJRVWtzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSU3hGUVVGRkxGTkJRVk1zUlVGQlJUdEpRVU01UXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJRenRMUVVONFFqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0RlFVTnVSQ3hOUVVGTkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0RFFVTjJSQ3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVWQlFVVTdPMEZCUldRc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4bFFVRmxMRU5CUVVNN08wRkJSWGhETEVsQlFVa3NXVUZCV1N4SFFVRkhMRU5CUVVNc1dVRkJXU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzBGQlF5OURMRWxCUVVrc1YwRkJWeXhIUVVGSExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMEZCUXpkRExFbEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNWVUZCVlN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hUUVVGVExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdRVUZEZEVVc1NVRkJTU3haUVVGWkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNWMEZCVnl4RlFVRkZMRk5CUVZNc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6czdRVUZGZGtVc1UwRkJVeXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN096czdPenRGUVUxNlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRmxCUVZrc1JVRkJSU3hEUVVGRE96dEZRVVZvUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03UlVGRGFrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wVkJRM0JDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJRenRGUVVOd1FpeEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN1JVRkRja0lzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMFZCUTNCQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhIUVVGSExFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3UlVGRk5VUXNTVUZCU1N4TFFVRkxMRWRCUVVjN096czdPenRKUVUxV0xFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NSMEZCUnp0TlFVTjBRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdTMEZEZGtJN096czdPenM3T3p0SlFWTkVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdUVUZETTBJc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRhRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPenRSUVVWbUxFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzFGQlJXaERMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGFFSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOb1FpeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1VVRkZha01zU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXpzN1VVRkZjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRQUVVNMVFqdExRVU5HT3pzN096czdPenRKUVZGRUxFbEJRVWtzUlVGQlJTeFRRVUZUTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1RVRkRla0lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRia0lzU1VGQlNTeGxRVUZsTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFN1dVRkRhRU1zVlVGQlZTeEhRVUZITEdWQlFXVXNRMEZCUXl4VlFVRlZPMWxCUTNaRExGVkJRVlVzUjBGQlJ5eGxRVUZsTEVOQlFVTXNWVUZCVlR0WlFVTjJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETEU5QlFVOHNRMEZCUXpzN08xRkJSM1JETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMUZCUldoRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OURMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRE8xRkJReTlETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1RExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNURMRWxCUVVrc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJReTlETEVsQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMUZCUlhKRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhsUVVGbExFTkJRVU1zUTBGQlF6czdVVUZGZEVRc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExGVkJRVlVzUlVGQlJUdFZRVU55UkN4TFFVRkxMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03TzFWQlJYaENMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6czdWVUZGY0VRc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMVZCUlhKRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1UwRkRNMElzVFVGQlRUdFZRVU5NTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN08xVkJSV3BDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMU5CUTJRN1QwRkRSanRMUVVOR096czdPenM3T3pzN1NVRlRSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUTNaQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1Q0xFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNN08xRkJSVGxDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYUVNc1NVRkJTU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3VVVGRmRFTXNTVUZCU1N4aFFVRmhMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZET1VNc1NVRkJTU3hSUVVGUkxFZEJRVWNzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM2hETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03TzFGQlJYQkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6czdVVUZGWkN4SlFVRkpMRkZCUVZFc1JVRkJSVHRWUVVOYUxFbEJRVWtzWVVGQllTeEhRVUZITEZOQlFWTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJUczdXVUZGTDBRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEzSkNMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYmtRN08xbEJSVVFzU1VGQlNTeFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdGpRVU5zUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU03WVVGRGFFSTdPMWxCUlVRc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1YwRkRhRVVzVFVGQlRTeEpRVUZKTEdGQlFXRXNSMEZCUnl4RFFVRkRMRk5CUVZNc1NVRkJTU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCUlRzN1dVRkZka1VzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTNKQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1JEczdXVUZGUkN4SlFVRkpMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMk5CUTJ4RExFdEJRVXNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXp0aFFVTm9RanM3V1VGRlJDeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFhRVU5vUlN4TlFVRk5PenRaUVVWTUxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1YwRkRlRUk3VTBGRFJqczdVVUZGUkN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMUZCUldwRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdPMUZCUlhSQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1QwRkRNVUk3UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hqUVVGakxFVkJRVVVzVTBGQlV5eGpRVUZqTEVkQlFVYzdUVUZEZUVNc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZET3p0TlFVVnFRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPenROUVVVNVFpeEpRVUZKTEZGQlFWRXNRMEZCUXl4alFVRmpMRVZCUVVVN1VVRkRNMElzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hMUVVGTExFVkJRVVU3VlVGRGJrVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU53UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wOUJRMkk3TzAxQlJVUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1lVRkJZU3hGUVVGRk8xRkJRekZDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUzBGQlN5eEZRVUZGTzFWQlEyNUZMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEY0VJc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFBRVU5pTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzWjBKQlFXZENMRVZCUVVVc1UwRkJVeXhuUWtGQlowSXNSMEZCUnp0TlFVTTFReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMDFCUTNKRUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1MwRkRkRVE3T3pzN096czdPMGxCVVVRc1lVRkJZU3hGUVVGRkxGTkJRVk1zWVVGQllTeEhRVUZITzAxQlEzUkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6czdUVUZGYkVJc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEZWQlFWVXNTMEZCU3l4RlFVRkZPMUZCUTNoRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1QwRkRjRUlzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzB0QlEzWkRPenM3T3pzN096dEpRVkZFTEdWQlFXVXNSVUZCUlN4VFFVRlRMR1ZCUVdVc1IwRkJSenROUVVNeFF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUTJ4RU96czdPenM3T3p0SlFWRkVMRmxCUVZrc1JVRkJSU3hUUVVGVExGbEJRVmtzUjBGQlJ6dE5RVU53UXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU03TzAxQlJXeENMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUzBGQlN5eEZRVUZGTzFGQlF6bEVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdUMEZEYmtJc1EwRkJReXhEUVVGRE8wdEJRMG83T3pzN096czdPMGxCVVVRc1kwRkJZeXhGUVVGRkxGTkJRVk1zWTBGQll5eEhRVUZITzAxQlEzaERMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UzBGRGFrUTdPenM3T3pzN08wbEJVVVFzVDBGQlR5eEZRVUZGTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSVHROUVVNdlFpeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTNwRExFOUJRVThzUzBGQlN5eERRVUZETzA5QlEyUTdPMDFCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEY0VRN096czdPenM3TzBsQlVVUXNVMEZCVXl4RlFVRkZMRk5CUVZNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUdE5RVU51UXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZET3p0TlFVVTVRaXhKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlEzcERMRTlCUVU4c1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF6dFBRVU12UWpzN1RVRkZSQ3hQUVVGUExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTTdTMEZEYUVNN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wMUJSV3BDTEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03TzAxQlJTOUNMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMkk3T3pzN096czdPMGxCVVVRc1QwRkJUeXhGUVVGRkxGTkJRVk1zVDBGQlR5eEhRVUZITzAxQlF6RkNMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03TzAxQlJXaENMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdPMDFCUldoRExFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdSMEZEUml4RFFVRkRPenM3T3pzN1JVRk5SaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEdGQlFXRXNSVUZCUlN4WlFVRlpPMGxCUTI1RExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UjBGRGRFVXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZOQlFWTXNSVUZCUlN4WlFVRlpPMGxCUXk5Q0xFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8wbEJRM3BDTEV0QlFVc3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRKUVVONFFpeExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1NVRkRka0lzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMGRCUTJ4Q0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRXRCUVVzc1EwRkJRenREUVVOa096dEJRVVZFTEZOQlFWTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdSVUZOTVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXpzN1JVRkZhRU1zU1VGQlNTeE5RVUZOTEVkQlFVYzdPenM3T3p0SlFVMVlMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03UzBGRFlqczdPenM3T3pzN1NVRlJSQ3hKUVVGSkxFVkJRVVVzVTBGQlV5eEpRVUZKTEVkQlFVYzdUVUZEY0VJc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMHRCUTJwRk96czdPenM3T3p0SlFWRkVMRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU40UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wdEJRMnhFT3pzN096czdPenRKUVZGRUxGTkJRVk1zUlVGQlJTeFRRVUZUTEZOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVN1RVRkRia01zUzBGQlN5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMHRCUTNoQ08wZEJRMFlzUTBGQlF6czdPenM3TzBWQlRVWXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhUUVVGVExFVkJRVVVzV1VGQldUdEpRVU12UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03U1VGRGFFSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExFMUJRVTBzUTBGQlF6dERRVU5tT3p0QlFVVkVMRk5CUVZNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3T3pzN1JVRk5NME1zU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVc1EwRkJRenM3T3pzN096czdPMFZCVTJoRExFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXpzN096czdPenM3TzBWQlUzSkNMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6czdSVUZGZEVJc1NVRkJTU3hQUVVGUExFZEJRVWM3T3pzN096dEpRVTFhTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenM3T3pzN096dE5RVTkwUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenROUVVWNFJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1MwRkRZanM3T3pzN096czdTVUZSUkN4SlFVRkpMRVZCUVVVc1UwRkJVeXhKUVVGSkxFZEJRVWM3VFVGRGNFSXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzB0QlEzcEVPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUXpsRE96czdPenM3T3pzN1NVRlRSQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUXpOQ0xFdEJRVXNzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXpzN1RVRkZlRUlzU1VGQlNTeFRRVUZUTEVWQlFVVTdVVUZEWWl4TFFVRkxMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03VDBGRGVFSTdTMEZEUmpzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXpzN1RVRkZha0lzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTmlMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0VlFVTXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU03TzFWQlJXaERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZET3p0VlFVVTFSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU4yUXpzN1VVRkZSQ3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzA5QlEycENPenROUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPenM3T3pzN08wbEJVVVFzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNoQ0xGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTTdPMDFCUld4Q0xFbEJRVWtzVVVGQlVTeEZRVUZGTzFGQlExb3NTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFWQlF6RkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenM3VlVGRkwwSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE4wVTdPMUZCUlVRc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dFBRVU5zUWpzN1RVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhaQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYmtJN1IwRkRSaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxGbEJRVms3U1VGRGJFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNXVUZCV1R0SlFVTnFReXhWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpPMDFCUTNSRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0TFFVTnNRaXhEUVVGRExFTkJRVU03UjBGRFNpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZsQlFWazdTVUZETDBJc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBsQlEycENMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU5xUWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UjBGRGJFSXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzVDBGQlR5eERRVUZETzBOQlEyaENPenRCUVVWRUxFbEJRVWtzV1VGQldTeEhRVUZITEdsRFFVRnBReXhEUVVGRE8wRkJRM0pFTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWNzTmtKQlFUWkNMRU5CUVVNN08wRkJSWFJFTEZOQlFWTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdSVUZOTlVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXpzN1JVRkZhRU1zU1VGQlNTeFJRVUZSTEVkQlFVYzdPenM3T3pzN1NVRlBZaXhMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdPenM3T3pzN1RVRlBkRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6czdPenM3T3pzN1RVRlJPVVFzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPenROUVVWdVJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1MwRkRjRUk3T3pzN096czdPMGxCVVVRc1UwRkJVeXhGUVVGRkxGTkJRVk1zVTBGQlV5eEhRVUZITzAxQlF6bENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTjJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdUMEZEY0VNN1MwRkRSanM3T3pzN096czdTVUZSUkN4WlFVRlpMRVZCUVVVc1UwRkJVeXhaUVVGWkxFZEJRVWM3VFVGRGNFTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFBRVU4yUXp0TFFVTkdPenM3T3pzN096czdTVUZUUkN4UlFVRlJMRVZCUVVVc1UwRkJVeXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzAxQlEzQkRMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdUVUZET1VJc1NVRkJTU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3VFVGRmFrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenM3VFVGRkwwTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEU5QlFVOHNSVUZCUlR0UlFVTjRReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzA5QlEzUkVMRU5CUVVNc1EwRkJRenRMUVVOS096czdPenM3T3pzN1NVRlRSQ3hYUVVGWExFVkJRVVVzVTBGQlV5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZPMDFCUXpGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dExRVU14UlRzN096czdPenM3U1VGUlJDeFhRVUZYTEVWQlFVVXNVMEZCVXl4WFFVRlhMRWRCUVVjN1RVRkRiRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRM1pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRQUVVOb1F6dExRVU5HT3pzN096czdPenRKUVZGRUxHTkJRV01zUlVGQlJTeFRRVUZUTEdOQlFXTXNSMEZCUnp0TlFVTjRReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMDlCUTJ4RE8wdEJRMFk3T3pzN096czdPenRKUVZORUxFbEJRVWtzUlVGQlJTeFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1RVRkROVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1VVRkRlRU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3haUVVGWkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzA5QlF6ZEVPMHRCUTBZN096czdPenM3T3p0SlFWTkVMRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVTdUVUZEYUVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZUVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4WlFVRlpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UFFVTnNSRHRMUVVOR096czdPenM3T3pzN096dEpRVmRFTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRE0wSXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE96dE5RVVYyUWl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjJSenRIUVVOR0xFTkJRVU03TzBWQlJVWXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVU3T3pzN096dEpRVTE0UWl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRE8wdEJRM0JDTzBkQlEwWXNRMEZCUXl4RFFVRkRPenM3T3pzN08wVkJUMGdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1JVRkJSU3haUVVGWkxFTkJRVU1zUlVGQlJTeFpRVUZaTzBsQlEyNUVMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dEhRVU4wUWl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmxCUVZrN1NVRkRMMElzVVVGQlVTeERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMGxCUXpGQ0xGRkJRVkVzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdSMEZEYkVJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNVVUZCVVN4RFFVRkRPME5CUTJwQ096dEJRVVZFTEZOQlFWTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdSVUZOTlVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXpzN1JVRkZhRU1zU1VGQlNTeFJRVUZSTEVkQlFVYzdPenM3T3p0SlFVMWlMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFGQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFBRVU5pTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzU1VGQlNTeEZRVUZGTEZOQlFWTXNTVUZCU1N4SFFVRkhPMDFCUTNCQ0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTMEZETVVNN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzB0QlF5OUNPenM3T3pzN096czdTVUZUUkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTzAxQlF6TkNMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUzBGQlN5eEZRVUZGTEVWQlFVVTdVVUZEZUVJc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UFFVTjRSRHM3VFVGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRXRCUVVzc1JVRkJSU3hGUVVGRk8xRkJRM2hDTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VDBGRGVFUTdTMEZEUmp0SFFVTkdMRU5CUVVNN096czdPenM3UlVGUFJpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZETTBNc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBkQlEyNUNMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXVHRKUVVNNVFpeFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1IwRkRiRUlzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeFpRVUZaTzBsQlF5OUNMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEhRVU5zUWl4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eFJRVUZSTEVOQlFVTTdRMEZEYWtJN08wRkJSVVFzVTBGQlV5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVU3T3pzN096dEZRVTAxUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxGbEJRVmtzUlVGQlJTeERRVUZET3p0RlFVVm9ReXhKUVVGSkxGRkJRVkVzUjBGQlJ6czdPenM3TzBsQlRXSXNTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenM3VFVGRllpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRemRDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRQUVVOaU8wdEJRMFk3T3pzN096czdPenRKUVZORUxFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NSMEZCUnp0TlFVTjBRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMDFCUldwQ0xFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRNMElzU1VGQlNTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRk8xVkJRM2hDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1YwRkJWeXhEUVVGRExGbEJRVms3V1VGRGFFTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE96dFpRVVZpTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0WlFVVjZRaXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdWMEZEWml4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5tTzA5QlEwWTdTMEZEUmpzN096czdPenM3U1VGUlJDeEpRVUZKTEVWQlFVVXNVMEZCVXl4SlFVRkpMRWRCUVVjN1RVRkRjRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzB0QlEyeERPenM3T3pzN096dEpRVkZFTEVsQlFVa3NSVUZCUlN4VFFVRlRMRWxCUVVrc1IwRkJSenROUVVOd1FpeEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNN08wMUJSV3hDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmxCUVZrN1VVRkRka1FzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMDlCUTJZc1EwRkJReXhEUVVGRE96dE5RVVZJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmxCUVZrN1VVRkRkRVFzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMDlCUTJoQ0xFTkJRVU1zUTBGQlF6dExRVU5LT3pzN096czdPenRKUVZGRUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTjRRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkROMFE3UjBGRFJpeERRVUZET3p0RlFVVkdMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdPMGxCVDNaQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTTdPMDFCUlhaR0xFbEJRVWtzVVVGQlVTeEZRVUZGTzFGQlExb3NUMEZCVHl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VDBGRGVFSTdPMDFCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRMUVVOMlF6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPenRGUVU5SUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzV1VGQldUdEpRVU16UXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03UjBGRGJrSXNRMEZCUXl4RFFVRkRPenM3T3pzN096czdPMFZCVlVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZsQlFWa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxHRkJRV0VzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4WlFVRlpPMGxCUTJwR0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SFFVTnFRaXhEUVVGRExFTkJRVU03T3pzN096czdPMFZCVVVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzV1VGQldUdEpRVU40UkN4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03UjBGRGJFSXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpPMGxCUXpsQ0xGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SFFVTnNRaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExGRkJRVkVzUTBGQlF6dERRVU5xUWpzN096czdPenM3UVVGUlJDeFRRVUZUTEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1JVRkRMMElzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1NVRkRjRUlzVDBGQlR5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1IwRkRla0lzVFVGQlRUdEpRVU5NTEVsQlFVa3NRMEZCUXl4elEwRkJjME1zUTBGQlF5eERRVUZETzBkQlF6bERPenRGUVVWRUxFOUJRVThzUlVGQlJTeERRVUZETzBOQlExZzdPMEZCUlVRc1UwRkJVeXhYUVVGWExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN096czdPenRGUVUwdlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRmxCUVZrc1JVRkJSU3hEUVVGRE96czdPenM3TzBWQlQyaERMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdPenM3T3pzN096dEZRVk01UWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPenM3T3pzN08wVkJUMjVFTEVsQlFVa3NVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdPMFZCUlhSRExFbEJRVWtzVjBGQlZ5eEhRVUZIT3pzN096czdPMGxCVDJoQ0xFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1RVRkROVUlzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4VlFVRlZMRXRCUVVzc1YwRkJWeXhGUVVGRk8xRkJRelZETEV0QlFVc3NTVUZCU1N4TFFVRkxMRWxCUVVrc1RVRkJUU3hGUVVGRk8xVkJRM2hDTEVsQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5vUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zWTBGQll5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVU3WTBGRE4wUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRGRFSTdWMEZEUmp0VFFVTkdPMDlCUTBZN08wMUJSVVFzVDBGQlR5eFJRVUZSTEVOQlFVTTdTMEZEYWtJN1IwRkRSaXhEUVVGRE96czdPenM3UlVGTlJpeFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFRsRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zV1VGQldUdEpRVU12UXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBkQlEzQkZMRVZCUVVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5OMElzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXVHRKUVVNNVFpeE5RVUZOTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEpRVVZxUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SFFVTnVReXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdSMEZET1VJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNWMEZCVnl4RFFVRkRPME5CUTNCQ096dEJRVVZFTEVsQlFVa3NWVUZCVlN4SFFVRkhPenRGUVVWbUxFbEJRVWtzUlVGQlJTeEpRVUZKTzBWQlExWXNVMEZCVXl4RlFVRkZMRk5CUVZNN1JVRkRjRUlzVlVGQlZTeEZRVUZGTEZWQlFWVTdSVUZEZEVJc1UwRkJVeXhGUVVGRkxGTkJRVk03UlVGRGNFSXNTVUZCU1N4RlFVRkZMRWxCUVVrN1JVRkRWaXhMUVVGTExFVkJRVVVzUzBGQlN6dEZRVU5hTEVsQlFVa3NSVUZCUlN4SlFVRkpPMFZCUTFZc1NVRkJTU3hGUVVGRkxFbEJRVWs3UlVGRFZpeE5RVUZOTEVWQlFVVXNUVUZCVFR0RlFVTmtMRTFCUVUwc1JVRkJSU3hOUVVGTk8wVkJRMlFzUzBGQlN5eEZRVUZGTEV0QlFVczdSVUZEV2l4SFFVRkhMRVZCUVVVc1IwRkJSenM3TzBWQlIxSXNTMEZCU3l4RlFVRkZMRXRCUVVzN1JVRkRXaXhOUVVGTkxFVkJRVVVzVFVGQlRUdEZRVU5rTEU5QlFVOHNSVUZCUlN4UFFVRlBPMFZCUTJoQ0xGRkJRVkVzUlVGQlJTeFJRVUZSTzBWQlEyeENMRkZCUVZFc1JVRkJSU3hSUVVGUk8wVkJRMnhDTEZGQlFWRXNSVUZCUlN4UlFVRlJPMFZCUTJ4Q0xGZEJRVmNzUlVGQlJTeFhRVUZYTzBOQlEzcENMRU5CUVVNN08wRkJSVVlzU1VGQlNTeFBRVUZQTEVkQlFVY3NWVUZCVlN4TFFVRkxMRVZCUVVVN1JVRkROMElzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenM3UlVGRk1VSXNVMEZCVXl4UlFVRlJMRWRCUVVjN1NVRkRiRUlzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVNdlFpeFBRVUZQTEhsQ1FVRjVRaXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRWxCUVVrc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdSMEZEZUVnN08wVkJSVVFzVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNKQ0xFZEJRVWNzUlVGQlJTeFBRVUZQTzBsQlExb3NTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEVsQlFVa3NWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenM3VFVGRmVFWXNUMEZCVHl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVsQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjJTanRIUVVOR0xFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEwb3NUMEZCVHl4UlFVRlJMRU5CUVVNN1EwRkRha0lzUTBGQlF5eExRVUZMTEVOQlFVTTdPMEZETjJwSVVpeEpRVUZOUXl4dlFrRkJiMEpETEdWQlFXVkVMR2xDUVVGNlF6dEJRVU5CTEVsQlFVMUZMRzFDUVVGdFFrUXNaVUZCWlVNc1owSkJRWGhETzBGQlEwRXNTVUZCVFVNc1VVRkJVVU1zVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhSUVVGMlFpeERRVUZrTzBGQlEwRXNTVUZCVFVNc1owSkJRV2RDUml4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEdsQ1FVRjJRaXhEUVVGMFFqdEJRVU5CTEVsQlFVMUZMRmRCUVZkSUxGTkJRVk5ETEdGQlFWUXNRMEZCZFVJc1lVRkJka0lzUTBGQmFrSTdRVUZEUVN4SlFVRk5SeXhoUVVGaFNpeFRRVUZUUXl4aFFVRlVMRU5CUVhWQ0xHVkJRWFpDTEVOQlFXNUNPMEZCUTBFc1NVRkJUVWtzYTBKQlFXdENUQ3hUUVVGVFRTeG5Ra0ZCVkN4RFFVRXdRaXh2UWtGQk1VSXNRMEZCZUVJN1FVRkRRU3hKUVVGTlF5eHJRa0ZCYTBKUUxGTkJRVk5ETEdGQlFWUXNRMEZCZFVJc2NVSkJRWFpDTEVOQlFYaENPMEZCUTBFc1NVRkJUVThzYTBKQlFXdENVaXhUUVVGVFRTeG5Ra0ZCVkN4RFFVRXdRaXh0UWtGQk1VSXNRMEZCZUVJN1FVRkRRU3hKUVVGTlJ5eFhRVUZYVkN4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEcxQ1FVRjJRaXhEUVVGcVFqdEJRVU5CTEVsQlFVMVRMR1ZCUVdWV0xGTkJRVk5ETEdGQlFWUXNRMEZCZFVJc2EwSkJRWFpDTEVOQlFYSkNPenRCUVVWQkxFbEJRVTFWTEZkQlFWZFlMRk5CUVZOTkxHZENRVUZVTEVOQlFUQkNMR2RDUVVFeFFpeERRVUZxUWpzN1FVRkZRU3hUUVVGVFRTeFhRVUZVTEVkQlFYVkNPMUZCUTJaRExGTkJRVTRzUTBGQlowSkRMRTFCUVdoQ0xFTkJRWFZDTEZkQlFYWkNPMkZCUTFjc1dVRkJUVHRoUVVOT1JDeFRRVUZVTEVOQlFXMUNReXhOUVVGdVFpeERRVUV3UWl4WFFVRXhRanRIUVVSR0xFVkJSVWNzUjBGR1NEdGhRVWRYTEZsQlFVMDdaVUZEU2tRc1UwRkJXQ3hEUVVGeFFrTXNUVUZCY2tJc1EwRkJORUlzVjBGQk5VSTdSMEZFUml4RlFVVkhMRWRCUmtnN08yRkJTVmNzV1VGQlRUdHZRa0ZEUXl4RFFVRm9RaXhGUVVGdFFrUXNVMEZCYmtJc1EwRkJOa0pETEUxQlFUZENMRU5CUVc5RExGZEJRWEJETzBkQlJFWXNSVUZGUnl4SFFVWklPMkZCUjFjc1dVRkJUVHR2UWtGRFF5eERRVUZvUWl4RlFVRnRRa1FzVTBGQmJrSXNRMEZCTmtKRExFMUJRVGRDTEVOQlFXOURMRmRCUVhCRE8wZEJSRVlzUlVGRlJ5eEhRVVpJTzJGQlIxY3NXVUZCVFR0dlFrRkRRMFFzVTBGQmFFSXNRMEZCTUVKRExFMUJRVEZDTEVOQlFXbERMRmRCUVdwRE8wZEJSRVlzUlVGRlJ5eEhRVVpJT3p0clFrRkpaMEpETEU5QlFXaENMRU5CUVhkQ0xGVkJRVU5ETEVWQlFVUXNSVUZCUzBNc1EwRkJUQ3hGUVVGWE8yVkJRM1JDTEZsQlFVMDdVMEZEV2tvc1UwRkJTQ3hEUVVGaFF5eE5RVUZpTEVOQlFXOUNMRmRCUVhCQ08wdEJSRVlzUlVGRlJ5eE5RVUZOUnl4SlFVRkpMRWRCUm1JN1IwRkVSanM3WVVGTlZ5eFpRVUZOTzJGQlEwNUtMRk5CUVZRc1EwRkJiVUpETEUxQlFXNUNMRU5CUVRCQ0xGZEJRVEZDTzBkQlJFWXNSVUZGUnl4SFFVWklPenRoUVVsWExGbEJRVTA3YVVKQlEwWkVMRk5CUVdJc1EwRkJkVUpETEUxQlFYWkNMRU5CUVRoQ0xGZEJRVGxDTzBkQlJFWXNSVUZGUnl4SFFVWklPenROUVVsSlppeE5RVUZOWXl4VFFVRk9MRU5CUVdkQ1N5eFJRVUZvUWl4RFFVRjVRaXhYUVVGNlFpeERRVUZLTEVWQlFUSkRPM05DUVVOMlFtaENMR0ZCUVd4Q08wZEJSRVlzVFVGRlR6dHhRa0ZEV1VFc1lVRkJha0k3T3pzN1FVRkpTaXhUUVVGVGFVSXNZVUZCVkN4RFFVRjFRa01zUzBGQmRrSXNSVUZCT0VJN1RVRkRlRUpCTEUxQlFVMURMRTFCUVU0c1MwRkJhVUowUWl4TFFVRnlRaXhGUVVFMFFqczdPenM3UVVGTE9VSlpMRk5CUVZOSkxFOUJRVlFzUTBGQmFVSXNWVUZCUTBNc1JVRkJSQ3hGUVVGUk8wdEJRM0JDVFN4blFrRkJTQ3hEUVVGdlFpeFBRVUZ3UWl4RlFVRTJRaXhWUVVGRFF5eERRVUZFTEVWQlFVODdUVUZEYUVORExHTkJRVVk3TzBkQlJFWTdRMEZFUmpzN1FVRlBRVU1zVDBGQlQwZ3NaMEpCUVZBc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVOSUxHRkJRV3BET3p0QlFVVkJMRWxCUVVsUExFOUJRVW9zUTBGQlZTeFJRVUZXTEVWQlFXOUNPenRYUVVWVU96dERRVVpZTEVWQlNVZERMRXRCU2tnN08wRkJUVUV6UWl4VFFVRlRUU3huUWtGQlZDeERRVUV3UWl4cFFrRkJNVUlzUlVGQk5rTlRMRTlCUVRkRExFTkJRWEZFTEZWQlFVTkRMRVZCUVVRc1JVRkJVVHRMUVVONFJFMHNaMEpCUVVnc1EwRkJiMElzVDBGQmNFSXNSVUZCTmtJc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzAxQlEyaERReXhqUVVGR08wZEJSRVk3UTBGRVJqczdPenNpZlE9PSJ9
