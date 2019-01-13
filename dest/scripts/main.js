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

/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get$1(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt$1(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get$1(element);
  return (
    toInt$1(styles.width) +
    toInt$1(styles.paddingLeft) +
    toInt$1(styles.paddingRight) +
    toInt$1(styles.borderLeftWidth) +
    toInt$1(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt$1(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt$1(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt$1(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt$1(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get$1(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get$1(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get$1(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get$1(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt$1(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt$1(railXStyle.borderLeftWidth) + toInt$1(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt$1(railXStyle.marginLeft) + toInt$1(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get$1(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt$1(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt$1(railYStyle.borderTopWidth) + toInt$1(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt$1(railYStyle.marginTop) + toInt$1(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt$1(get$1(this.scrollbarXRail).marginLeft) +
    toInt$1(get$1(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt$1(get$1(this.scrollbarYRail).marginTop) +
    toInt$1(get$1(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

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

// new Glide('.glide', {
//   perView: 10,
// }).mount();


var container = document.querySelector('.container--title');
var ps = new PerfectScrollbar(container);

document.querySelectorAll('.tag-list__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

var modalList = document.querySelector('.modal-list');
var targetElementList = document.querySelector('.modal-list__content');
var triggersList = document.querySelectorAll('.modal-list-trigger');

function toggleModalList() {
  modalList.classList.toggle('is-active');
  if (modalList.classList.contains('is-active')) {
    disableBodyScroll(targetElementList);
  } else {
    enableBodyScroll(targetElementList);
  }
}

function windowOnClickList(event) {
  if (event.target === modalList) {
    toggleModalList();
  }
}

triggersList.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    toggleModalList();
  });
});

window.addEventListener('click', windowOnClickList);

}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL2JvZHktc2Nyb2xsLWxvY2svbGliL2JvZHlTY3JvbGxMb2NrLm1pbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZ2xpZGVqcy9nbGlkZS9kaXN0L2dsaWRlLmVzbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9kaXN0L3BlcmZlY3Qtc2Nyb2xsYmFyLmVzbS5qcyIsIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJleHBvcnRzXCJdLHQpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpdChleHBvcnRzKTtlbHNle3ZhciBvPXt9O3QobyksZS5ib2R5U2Nyb2xsTG9jaz1vfX0odGhpcyxmdW5jdGlvbihleHBvcnRzKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLG89QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKW9bdF09ZVt0XTtyZXR1cm4gb31yZXR1cm4gQXJyYXkuZnJvbShlKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD0hMTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT17Z2V0IHBhc3NpdmUoKXtsPSEwfX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSl9dmFyIGQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSYmL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pLGM9W10sdT0hMSxhPS0xLHM9dm9pZCAwLHY9dm9pZCAwLGY9ZnVuY3Rpb24odCl7cmV0dXJuIGMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4hKCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmV8fCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUodCkpfSl9LG09ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8d2luZG93LmV2ZW50O3JldHVybiEhZih0LnRhcmdldCl8fCgxPHQudG91Y2hlcy5sZW5ndGh8fCh0LnByZXZlbnREZWZhdWx0JiZ0LnByZXZlbnREZWZhdWx0KCksITEpKX0sbz1mdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2b2lkIDAhPT12JiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dix2PXZvaWQgMCksdm9pZCAwIT09cyYmKGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9cyxzPXZvaWQgMCl9KX07ZXhwb3J0cy5kaXNhYmxlQm9keVNjcm9sbD1mdW5jdGlvbihpLGUpe2lmKGQpe2lmKCFpKXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJkaXNhYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGRpc2FibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLlwiKTtpZihpJiYhYy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQ9PT1pfSkpe3ZhciB0PXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbdF0pLGkub250b3VjaHN0YXJ0PWZ1bmN0aW9uKGUpezE9PT1lLnRhcmdldFRvdWNoZXMubGVuZ3RoJiYoYT1lLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSl9LGkub250b3VjaG1vdmU9ZnVuY3Rpb24oZSl7dmFyIHQsbyxuLHI7MT09PWUudGFyZ2V0VG91Y2hlcy5sZW5ndGgmJihvPWkscj0odD1lKS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFktYSwhZih0LnRhcmdldCkmJihvJiYwPT09by5zY3JvbGxUb3AmJjA8cj9tKHQpOihuPW8pJiZuLnNjcm9sbEhlaWdodC1uLnNjcm9sbFRvcDw9bi5jbGllbnRIZWlnaHQmJnI8MD9tKHQpOnQuc3RvcFByb3BhZ2F0aW9uKCkpKX0sdXx8KGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMCl9fWVsc2V7bj1lLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT12KXt2YXIgZT0hIW4mJiEwPT09bi5yZXNlcnZlU2Nyb2xsQmFyR2FwLHQ9d2luZG93LmlubmVyV2lkdGgtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO2UmJjA8dCYmKHY9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQsZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dCtcInB4XCIpfXZvaWQgMD09PXMmJihzPWRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3csZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiKX0pO3ZhciBvPXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbb10pfXZhciBufSxleHBvcnRzLmNsZWFyQWxsQm9keVNjcm9sbExvY2tzPWZ1bmN0aW9uKCl7ZD8oYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UudGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQ9bnVsbCxlLnRhcmdldEVsZW1lbnQub250b3VjaG1vdmU9bnVsbH0pLHUmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbSxsP3twYXNzaXZlOiExfTp2b2lkIDApLHU9ITEpLGM9W10sYT0tMSk6KG8oKSxjPVtdKX0sZXhwb3J0cy5lbmFibGVCb2R5U2Nyb2xsPWZ1bmN0aW9uKHQpe2lmKGQpe2lmKCF0KXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJlbmFibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZW5hYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy5cIik7dC5vbnRvdWNoc3RhcnQ9bnVsbCx0Lm9udG91Y2htb3ZlPW51bGwsYz1jLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS50YXJnZXRFbGVtZW50IT09dH0pLHUmJjA9PT1jLmxlbmd0aCYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMSl9ZWxzZSAxPT09Yy5sZW5ndGgmJmNbMF0udGFyZ2V0RWxlbWVudD09PXQ/KG8oKSxjPVtdKTpjPWMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQhPT10fSl9fSk7XG4iLCIvKiFcbiAqIEdsaWRlLmpzIHYzLjIuNFxuICogKGMpIDIwMTMtMjAxOCBKxJlkcnplaiBDaGHFgnViZWsgPGplZHJ6ZWouY2hhbHViZWtAZ21haWwuY29tPiAoaHR0cDovL2plZHJ6ZWpjaGFsdWJlay5jb20vKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIG1vdmVtZW50LlxuICAgKlxuICAgKiBBdmFpbGFibGUgdHlwZXM6XG4gICAqIGBzbGlkZXJgIC0gUmV3aW5kcyBzbGlkZXIgdG8gdGhlIHN0YXJ0L2VuZCB3aGVuIGl0IHJlYWNoZXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAqIGBjYXJvdXNlbGAgLSBDaGFuZ2VzIHNsaWRlcyB3aXRob3V0IHN0YXJ0aW5nIG92ZXIgd2hlbiBpdCByZWFjaGVzIHRoZSBmaXJzdCBvciBsYXN0IHNsaWRlLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdHlwZTogJ3NsaWRlcicsXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGF0IHNwZWNpZmljIHNsaWRlIG51bWJlciBkZWZpbmVkIHdpdGggemVyby1iYXNlZCBpbmRleC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHN0YXJ0QXQ6IDAsXG5cbiAgLyoqXG4gICAqIEEgbnVtYmVyIG9mIHNsaWRlcyB2aXNpYmxlIG9uIHRoZSBzaW5nbGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwZXJWaWV3OiAxLFxuXG4gIC8qKlxuICAgKiBGb2N1cyBjdXJyZW50bHkgYWN0aXZlIHNsaWRlIGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoZSB0cmFjay5cbiAgICpcbiAgICogQXZhaWxhYmxlIGlucHV0czpcbiAgICogYGNlbnRlcmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgYWx3YXlzIGZvY3VzZWQgYXQgdGhlIGNlbnRlciBvZiBhIHRyYWNrLlxuICAgKiBgMCwxLDIsMy4uLmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgZm9jdXNlZCBvbiB0aGUgc3BlY2lmaWVkIHplcm8tYmFzZWQgaW5kZXguXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfVxuICAgKi9cbiAgZm9jdXNBdDogMCxcblxuICAvKipcbiAgICogQSBzaXplIG9mIHRoZSBnYXAgYWRkZWQgYmV0d2VlbiBzbGlkZXMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnYXA6IDEwLFxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2xpZGVzIGFmdGVyIGEgc3BlY2lmaWVkIGludGVydmFsLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYXV0b3BsYXkuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheSBvbiBtb3VzZW92ZXIgZXZlbnQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgaG92ZXJwYXVzZTogdHJ1ZSxcblxuICAvKipcbiAgICogQWxsb3cgZm9yIGNoYW5naW5nIHNsaWRlcyB3aXRoIGxlZnQgYW5kIHJpZ2h0IGtleWJvYXJkIGFycm93cy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBrZXlib2FyZDogdHJ1ZSxcblxuICAvKipcbiAgICogU3RvcCBydW5uaW5nIGBwZXJWaWV3YCBudW1iZXIgb2Ygc2xpZGVzIGZyb20gdGhlIGVuZC4gVXNlIHRoaXNcbiAgICogb3B0aW9uIGlmIHlvdSBkb24ndCB3YW50IHRvIGhhdmUgYW4gZW1wdHkgc3BhY2UgYWZ0ZXJcbiAgICogYSBzbGlkZXIuIFdvcmtzIG9ubHkgd2l0aCBgc2xpZGVyYCB0eXBlIGFuZCBhXG4gICAqIG5vbi1jZW50ZXJlZCBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBib3VuZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIE1pbmltYWwgc3dpcGUgZGlzdGFuY2UgbmVlZGVkIHRvIGNoYW5nZSB0aGUgc2xpZGUuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhIHN3aXBpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIHN3aXBlVGhyZXNob2xkOiA4MCxcblxuICAvKipcbiAgICogTWluaW1hbCBtb3VzZSBkcmFnIGRpc3RhbmNlIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHNsaWRlLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYSBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgZHJhZ1RocmVzaG9sZDogMTIwLFxuXG4gIC8qKlxuICAgKiBBIG1heGltdW0gbnVtYmVyIG9mIHNsaWRlcyB0byB3aGljaCBtb3ZlbWVudCB3aWxsIGJlIG1hZGUgb24gc3dpcGluZyBvciBkcmFnZ2luZy4gVXNlIGBmYWxzZWAgZm9yIHVubGltaXRlZC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgcGVyVG91Y2g6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBNb3ZpbmcgZGlzdGFuY2UgcmF0aW8gb2YgdGhlIHNsaWRlcyBvbiBhIHN3aXBpbmcgYW5kIGRyYWdnaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgdG91Y2hSYXRpbzogMC41LFxuXG4gIC8qKlxuICAgKiBBbmdsZSByZXF1aXJlZCB0byBhY3RpdmF0ZSBzbGlkZXMgbW92aW5nIG9uIHN3aXBpbmcgb3IgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICB0b3VjaEFuZ2xlOiA0NSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBhbmltYXRpb25EdXJhdGlvbjogNDAwLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgbG9vcGluZyB0aGUgYHNsaWRlcmAgdHlwZS4gU2xpZGVyIHdpbGwgcmV3aW5kIHRvIHRoZSBmaXJzdC9sYXN0IHNsaWRlIHdoZW4gaXQncyBhdCB0aGUgc3RhcnQvZW5kLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHJld2luZDogdHJ1ZSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIHJld2luZGluZyBhbmltYXRpb24gb2YgdGhlIGBzbGlkZXJgIHR5cGUgaW4gbWlsbGlzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgcmV3aW5kRHVyYXRpb246IDgwMCxcblxuICAvKipcbiAgICogRWFzaW5nIGZ1bmN0aW9uIGZvciB0aGUgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2N1YmljLWJlemllciguMTY1LCAuODQwLCAuNDQwLCAxKScsXG5cbiAgLyoqXG4gICAqIFRocm90dGxlIGNvc3RseSBldmVudHMgYXQgbW9zdCBvbmNlIHBlciBldmVyeSB3YWl0IG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRocm90dGxlOiAxMCxcblxuICAvKipcbiAgICogTW92aW5nIGRpcmVjdGlvbiBtb2RlLlxuICAgKlxuICAgKiBBdmFpbGFibGUgaW5wdXRzOlxuICAgKiAtICdsdHInIC0gbGVmdCB0byByaWdodCBtb3ZlbWVudCxcbiAgICogLSAncnRsJyAtIHJpZ2h0IHRvIGxlZnQgbW92ZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBkaXJlY3Rpb246ICdsdHInLFxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdmFsdWUgb2YgdGhlIG5leHQgYW5kIHByZXZpb3VzIHZpZXdwb3J0cyB3aGljaFxuICAgKiBoYXZlIHRvIHBlZWsgaW4gdGhlIGN1cnJlbnQgdmlldy4gQWNjZXB0cyBudW1iZXIgYW5kXG4gICAqIHBpeGVscyBhcyBhIHN0cmluZy4gTGVmdCBhbmQgcmlnaHQgcGVla2luZyBjYW4gYmVcbiAgICogc2V0IHVwIHNlcGFyYXRlbHkgd2l0aCBhIGRpcmVjdGlvbnMgb2JqZWN0LlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogYDEwMGAgLSBQZWVrIDEwMHB4IG9uIHRoZSBib3RoIHNpZGVzLlxuICAgKiB7IGJlZm9yZTogMTAwLCBhZnRlcjogNTAgfWAgLSBQZWVrIDEwMHB4IG9uIHRoZSBsZWZ0IHNpZGUgYW5kIDUwcHggb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH1cbiAgICovXG4gIHBlZWs6IDAsXG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2Ygb3B0aW9ucyBhcHBsaWVkIGF0IHNwZWNpZmllZCBtZWRpYSBicmVha3BvaW50cy5cbiAgICogRm9yIGV4YW1wbGU6IGRpc3BsYXkgdHdvIHNsaWRlcyBwZXIgdmlldyB1bmRlciA4MDBweC5cbiAgICogYHtcbiAgICogICAnODAwcHgnOiB7XG4gICAqICAgICBwZXJWaWV3OiAyXG4gICAqICAgfVxuICAgKiB9YFxuICAgKi9cbiAgYnJlYWtwb2ludHM6IHt9LFxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGludGVybmFsbHkgdXNlZCBIVE1MIGNsYXNzZXMuXG4gICAqXG4gICAqIEB0b2RvIFJlZmFjdG9yIGBzbGlkZXJgIGFuZCBgY2Fyb3VzZWxgIHByb3BlcnRpZXMgdG8gc2luZ2xlIGB0eXBlOiB7IHNsaWRlcjogJycsIGNhcm91c2VsOiAnJyB9YCBvYmplY3RcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNsYXNzZXM6IHtcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIGx0cjogJ2dsaWRlLS1sdHInLFxuICAgICAgcnRsOiAnZ2xpZGUtLXJ0bCdcbiAgICB9LFxuICAgIHNsaWRlcjogJ2dsaWRlLS1zbGlkZXInLFxuICAgIGNhcm91c2VsOiAnZ2xpZGUtLWNhcm91c2VsJyxcbiAgICBzd2lwZWFibGU6ICdnbGlkZS0tc3dpcGVhYmxlJyxcbiAgICBkcmFnZ2luZzogJ2dsaWRlLS1kcmFnZ2luZycsXG4gICAgY2xvbmVTbGlkZTogJ2dsaWRlX19zbGlkZS0tY2xvbmUnLFxuICAgIGFjdGl2ZU5hdjogJ2dsaWRlX19idWxsZXQtLWFjdGl2ZScsXG4gICAgYWN0aXZlU2xpZGU6ICdnbGlkZV9fc2xpZGUtLWFjdGl2ZScsXG4gICAgZGlzYWJsZWRBcnJvdzogJ2dsaWRlX19hcnJvdy0tZGlzYWJsZWQnXG4gIH1cbn07XG5cbi8qKlxuICogT3V0cHV0cyB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGJvd3NlciBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICBjb25zb2xlLmVycm9yKFwiW0dsaWRlIHdhcm5dOiBcIiArIG1zZyk7XG59XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHZhbHVlIGVudGVyZWQgYXMgbnVtYmVyXG4gKiBvciBzdHJpbmcgdG8gaW50ZWdlciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHRvSW50KHZhbHVlKSB7XG4gIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdmFsdWUgZW50ZXJlZCBhcyBudW1iZXJcbiAqIG9yIHN0cmluZyB0byBmbGF0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHsqfSAgIHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuXG4gIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBzcGVjaWZpZWQgY29sbGVjdGlvbiBvZiBleHRlbnNpb25zLlxuICogRWFjaCBleHRlbnNpb24gcmVjZWl2ZXMgYWNjZXNzIHRvIGluc3RhbmNlIG9mIGdsaWRlIGFuZCByZXN0IG9mIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGdsaWRlXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9uc1xuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1vdW50KGdsaWRlLCBleHRlbnNpb25zLCBldmVudHMpIHtcbiAgdmFyIGNvbXBvbmVudHMgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIGV4dGVuc2lvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihleHRlbnNpb25zW25hbWVdKSkge1xuICAgICAgY29tcG9uZW50c1tuYW1lXSA9IGV4dGVuc2lvbnNbbmFtZV0oZ2xpZGUsIGNvbXBvbmVudHMsIGV2ZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ0V4dGVuc2lvbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29tcG9uZW50c1tfbmFtZV0ubW91bnQpKSB7XG4gICAgICBjb21wb25lbnRzW19uYW1lXS5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIERlZmluZXMgZ2V0dGVyIGFuZCBzZXR0ZXIgcHJvcGVydHkgb24gdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgICAgICBPYmplY3Qgd2hlcmUgcHJvcGVydHkgaGFzIHRvIGJlIGRlZmluZWQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgICAgICAgIE5hbWUgb2YgdGhlIGRlZmluZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmluaXRpb24gIEdldCBhbmQgc2V0IGRlZmluaXRpb25zIGZvciB0aGUgcHJvcGVydHkuXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiBkZWZpbmUob2JqLCBwcm9wLCBkZWZpbml0aW9uKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlZmluaXRpb24pO1xufVxuXG4vKipcbiAqIFNvcnRzIGFwaGFiZXRpY2FsbHkgb2JqZWN0IGtleXMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc29ydEtleXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGspIHtcbiAgICByW2tdID0gb2JqW2tdO1xuXG4gICAgcmV0dXJuIHJba10sIHI7XG4gIH0sIHt9KTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgcGFzc2VkIHNldHRpbmdzIG9iamVjdCB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNldHRpbmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhkZWZhdWx0cywgc2V0dGluZ3MpIHtcbiAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcblxuICAvLyBgT2JqZWN0LmFzc2lnbmAgZG8gbm90IGRlZXBseSBtZXJnZSBvYmplY3RzLCBzbyB3ZVxuICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5IGZvciBldmVyeSBuZXN0ZWQgb2JqZWN0XG4gIC8vIGluIG9wdGlvbnMuIEFsdGhvdWdoIGl0IGRvZXMgbm90IGxvb2sgc21hcnQsXG4gIC8vIGl0J3Mgc21hbGxlciBhbmQgZmFzdGVyIHRoYW4gc29tZSBmYW5jeVxuICAvLyBtZXJnaW5nIGRlZXAtbWVyZ2UgYWxnb3JpdGhtIHNjcmlwdC5cbiAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KCdjbGFzc2VzJykpIHtcbiAgICBvcHRpb25zLmNsYXNzZXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcywgc2V0dGluZ3MuY2xhc3Nlcyk7XG5cbiAgICBpZiAoc2V0dGluZ3MuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSgnZGlyZWN0aW9uJykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5kaXJlY3Rpb24gPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcy5kaXJlY3Rpb24sIHNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ2JyZWFrcG9pbnRzJykpIHtcbiAgICBvcHRpb25zLmJyZWFrcG9pbnRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRzLmJyZWFrcG9pbnRzLCBzZXR0aW5ncy5icmVha3BvaW50cyk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxudmFyIEV2ZW50c0J1cyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50QnVzIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudHNCdXMoKSB7XG4gICAgdmFyIGV2ZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRzQnVzKTtcblxuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuaG9wID0gZXZlbnRzLmhhc093blByb3BlcnR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbGlzdGVuZXIgdG8gdGhlIHNwZWNpZmVkIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuXG4gIGNyZWF0ZUNsYXNzKEV2ZW50c0J1cywgW3tcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMub24oZXZlbnRbaV0sIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZXZlbnQncyBvYmplY3QgaWYgbm90IHlldCBjcmVhdGVkXG4gICAgICBpZiAoIXRoaXMuaG9wLmNhbGwodGhpcy5ldmVudHMsIGV2ZW50KSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBoYW5kbGVyIHRvIHF1ZXVlXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChoYW5kbGVyKSAtIDE7XG5cbiAgICAgIC8vIFByb3ZpZGUgaGFuZGxlIGJhY2sgZm9yIHJlbW92YWwgb2YgZXZlbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF1baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3Igc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBjb250ZXh0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2VtaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZW1pdChldmVudFtpXSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgZXhpc3QsIG9yIHRoZXJlJ3Mgbm8gaGFuZGxlcnMgaW4gcXVldWUsIGp1c3QgbGVhdmVcbiAgICAgIGlmICghdGhpcy5ob3AuY2FsbCh0aGlzLmV2ZW50cywgZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3ljbGUgdGhyb3VnaCBldmVudHMgcXVldWUsIGZpcmUhXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtKGNvbnRleHQgfHwge30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudHNCdXM7XG59KCk7XG5cbnZhciBHbGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0IGdsaWRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzZWxlY3RvclxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xyXG4gICAqL1xuICBmdW5jdGlvbiBHbGlkZShzZWxlY3Rvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBHbGlkZSk7XG5cbiAgICB0aGlzLl9jID0ge307XG4gICAgdGhpcy5fdCA9IFtdO1xuICAgIHRoaXMuX2UgPSBuZXcgRXZlbnRzQnVzKCk7XG5cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLnNldHRpbmdzLnN0YXJ0QXQ7XG4gIH1cblxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBnbGlkZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIENvbGxlY3Rpb24gb2YgZXh0ZW5zaW9ucyB0byBpbml0aWFsaXplLlxyXG4gICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoR2xpZGUsIFt7XG4gICAga2V5OiAnbW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudCQkMSgpIHtcbiAgICAgIHZhciBleHRlbnNpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdGhpcy5fZS5lbWl0KCdtb3VudC5iZWZvcmUnKTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGV4dGVuc2lvbnMpKSB7XG4gICAgICAgIHRoaXMuX2MgPSBtb3VudCh0aGlzLCBleHRlbnNpb25zLCB0aGlzLl9lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBvYmplY3Qgb24gYG1vdW50KClgJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgnbW91bnQuYWZ0ZXInKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBhbiBpbnN0YW5jZSBgdHJhbnNsYXRlYCB0cmFuc2Zvcm1lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7QXJyYXl9IHRyYW5zZm9ybWVycyBDb2xsZWN0aW9uIG9mIHRyYW5zZm9ybWVycy5cclxuICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbXV0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbXV0YXRlKCkge1xuICAgICAgdmFyIHRyYW5zZm9ybWVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgICAgIGlmIChpc0FycmF5KHRyYW5zZm9ybWVycykpIHtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zZm9ybWVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBhcnJheSBvbiBgbXV0YXRlKClgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBnbGlkZSB3aXRoIHNwZWNpZmllZCBzZXR0aW5ncy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3NcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnModGhpcy5zZXR0aW5ncywgc2V0dGluZ3MpO1xuXG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3N0YXJ0QXQnKSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gc2V0dGluZ3Muc3RhcnRBdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCd1cGRhdGUnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugc2xpZGUgd2l0aCBzcGVjaWZpZWQgcGF0dGVybi4gQSBwYXR0ZXJuIG11c3QgYmUgaW4gdGhlIHNwZWNpYWwgZm9ybWF0OlxyXG4gICAgICogYD5gIC0gTW92ZSBvbmUgZm9yd2FyZFxyXG4gICAgICogYDxgIC0gTW92ZSBvbmUgYmFja3dhcmRcclxuICAgICAqIGA9e2l9YCAtIEdvIHRvIHtpfSB6ZXJvLWJhc2VkIHNsaWRlIChlcS4gJz0xJywgd2lsbCBnbyB0byBzZWNvbmQgc2xpZGUpXHJcbiAgICAgKiBgPj5gIC0gUmV3aW5kcyB0byBlbmQgKGxhc3Qgc2xpZGUpXHJcbiAgICAgKiBgPDxgIC0gUmV3aW5kcyB0byBzdGFydCAoZmlyc3Qgc2xpZGUpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm5cclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ28ocGF0dGVybikge1xuICAgICAgdGhpcy5fYy5SdW4ubWFrZShwYXR0ZXJuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRyYWNrIGJ5IHNwZWNpZmllZCBkaXN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlzdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlKGRpc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jLlRyYW5zaXRpb24uZGlzYWJsZSgpO1xuICAgICAgdGhpcy5fYy5Nb3ZlLm1ha2UoZGlzdGFuY2UpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgaW5zdGFuY2UgYW5kIHJldmVydCBhbGwgY2hhbmdlcyBkb25lIGJ5IHRoaXMuX2MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9lLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBpbnN0YW5jZSBhdXRvcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBpbnRlcnZhbCBSdW4gYXV0b3BsYXlpbmcgd2l0aCBwYXNzZWQgaW50ZXJ2YWwgcmVnYXJkbGVzcyBvZiBgYXV0b3BsYXlgIHNldHRpbmdzXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHZhciBpbnRlcnZhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmF1dG9wbGF5ID0gaW50ZXJ2YWw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgncGxheScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFN0b3AgaW5zdGFuY2UgYXV0b3BsYXlpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncGF1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuX2UuZW1pdCgncGF1c2UnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGdsaWRlIGludG8gYSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHMgZ2xpZGUgaW50byBhIGFjdGl2ZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEFkZHMgY3V1dG9tIGV2ZW50IGxpc3RlbmVyIHdpdGggaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlcikge1xuICAgICAgdGhpcy5fZS5vbihldmVudCwgaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGdsaWRlIGlzIGEgcHJlY2lzZWQgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNUeXBlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNUeXBlKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnR5cGUgPT09IG5hbWU7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBjb3JlIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldHRpbmdzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgY29yZSBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb1xyXG4gICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShvKSB7XG4gICAgICBpZiAoaXNPYmplY3QobykpIHtcbiAgICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdPcHRpb25zIG11c3QgYmUgYW4gYG9iamVjdGAgaW5zdGFuY2UuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGN1cnJlbnQgaW5kZXggb2YgdGhlIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaW5kZXgnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGN1cnJlbnQgaW5kZXggYSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKGkpIHtcbiAgICAgIHRoaXMuX2kgPSB0b0ludChpKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdHlwZSBuYW1lIG9mIHRoZSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3R5cGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudHlwZTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGlkbGUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Q7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHN0YXR1cykge1xuICAgICAgdGhpcy5fZCA9ICEhc3RhdHVzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gR2xpZGU7XG59KCk7XG5cbmZ1bmN0aW9uIFJ1biAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgUnVuID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGF1dG9ydW5uaW5nIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5fbyA9IGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGdsaWRlcyBydW5uaW5nIGJhc2VkIG9uIHRoZSBwYXNzZWQgbW92aW5nIHNjaGVtYS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb3ZlXG4gICAgICovXG4gICAgbWFrZTogZnVuY3Rpb24gbWFrZShtb3ZlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIEdsaWRlLmRpc2FibGUoKTtcblxuICAgICAgICB0aGlzLm1vdmUgPSBtb3ZlO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4uYmVmb3JlJywgdGhpcy5tb3ZlKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4nLCB0aGlzLm1vdmUpO1xuXG4gICAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5hZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmlzT2Zmc2V0KCc8JykgfHwgX3RoaXMuaXNPZmZzZXQoJz4nKSkge1xuICAgICAgICAgICAgX3RoaXMuX28gPSBmYWxzZTtcblxuICAgICAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5vZmZzZXQnLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLmFmdGVyJywgX3RoaXMubW92ZSk7XG5cbiAgICAgICAgICBHbGlkZS5lbmFibGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBjdXJyZW50IGluZGV4IGJhc2VkIG9uIGRlZmluZWQgbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlOiBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgICB2YXIgbW92ZSA9IHRoaXMubW92ZSxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBzdGVwcyA9IG1vdmUuc3RlcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gbW92ZS5kaXJlY3Rpb247XG5cblxuICAgICAgdmFyIGNvdW50YWJsZVN0ZXBzID0gaXNOdW1iZXIodG9JbnQoc3RlcHMpKSAmJiB0b0ludChzdGVwcykgIT09IDA7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChzdGVwcyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCA9IGxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmQoKSkge1xuICAgICAgICAgICAgaWYgKCEoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiAhR2xpZGUuc2V0dGluZ3MucmV3aW5kKSkge1xuICAgICAgICAgICAgICB0aGlzLl9vID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBHbGlkZS5pbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uZW5kJywgbW92ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb3VudGFibGVTdGVwcykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggKz0gTWF0aC5taW4obGVuZ3RoIC0gR2xpZGUuaW5kZXgsIC10b0ludChzdGVwcykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBpZiAoc3RlcHMgPT09ICc8Jykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0YXJ0KCkpIHtcbiAgICAgICAgICAgIGlmICghKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgIUdsaWRlLnNldHRpbmdzLnJld2luZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgR2xpZGUuaW5kZXggPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uc3RhcnQnLCBtb3ZlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50YWJsZVN0ZXBzKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCAtPSBNYXRoLm1pbihHbGlkZS5pbmRleCwgdG9JbnQoc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXgtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgR2xpZGUuaW5kZXggPSBzdGVwcztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTdGFydDogZnVuY3Rpb24gaXNTdGFydCgpIHtcbiAgICAgIHJldHVybiBHbGlkZS5pbmRleCA9PT0gMDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VuZDogZnVuY3Rpb24gaXNFbmQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaW5kZXggPT09IHRoaXMubGVuZ3RoO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB3ZSBhcmUgbWFraW5nIGEgb2Zmc2V0IHJ1bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzT2Zmc2V0OiBmdW5jdGlvbiBpc09mZnNldChkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLl9vICYmIHRoaXMubW92ZS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFJ1biwgJ21vdmUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX207XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9tID0ge1xuICAgICAgICBkaXJlY3Rpb246IHZhbHVlLnN1YnN0cigwLCAxKSxcbiAgICAgICAgc3RlcHM6IHZhbHVlLnN1YnN0cigxKSA/IHZhbHVlLnN1YnN0cigxKSA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoUnVuLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIHJ1bm5pbmcgZGlzdGFuY2UgYmFzZWRcbiAgICAgKiBvbiB6ZXJvLWluZGV4aW5nIG51bWJlciBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgICAgIHZhciBsZW5ndGggPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmxlbmd0aDtcblxuICAgICAgLy8gSWYgdGhlIGBib3VuZGAgb3B0aW9uIGlzIGFjaXR2ZSwgYSBtYXhpbXVtIHJ1bm5pbmcgZGlzdGFuY2Ugc2hvdWxkIGJlXG4gICAgICAvLyByZWR1Y2VkIGJ5IGBwZXJWaWV3YCBhbmQgYGZvY3VzQXRgIHNldHRpbmdzLiBSdW5uaW5nIGRpc3RhbmNlXG4gICAgICAvLyBzaG91bGQgZW5kIGJlZm9yZSBjcmVhdGluZyBhbiBlbXB0eSBzcGFjZSBhZnRlciBpbnN0YW5jZS5cblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgc2V0dGluZ3MuZm9jdXNBdCAhPT0gJ2NlbnRlcicgJiYgc2V0dGluZ3MuYm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAtIDEgLSAodG9JbnQoc2V0dGluZ3MucGVyVmlldykgLSAxKSArIHRvSW50KHNldHRpbmdzLmZvY3VzQXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShSdW4sICdvZmZzZXQnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBzdGF0dXMgb2YgdGhlIG9mZnNldHRpbmcgZmxhZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBSdW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJlbnQgdGltZS5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkXG4gKiBhdCBtb3N0IG9uY2UgZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCA9IHZvaWQgMCxcbiAgICAgIGNvbnRleHQgPSB2b2lkIDAsXG4gICAgICBhcmdzID0gdm9pZCAwLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKCkge1xuICAgIHZhciBhdCA9IG5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBhdDtcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChhdCAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBhdDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBwcmV2aW91cyA9IDA7XG4gICAgdGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG52YXIgTUFSR0lOX1RZUEUgPSB7XG4gIGx0cjogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIHJ0bDogWydtYXJnaW5SaWdodCcsICdtYXJnaW5MZWZ0J11cbn07XG5cbmZ1bmN0aW9uIEdhcHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEdhcHMgPSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBnYXBzIGJldHdlZW4gc2xpZGVzLiBGaXJzdCBhbmQgbGFzdFxuICAgICAqIHNsaWRlcyBkbyBub3QgcmVjZWl2ZSBpdCdzIGVkZ2UgbWFyZ2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc3R5bGUgPSBzbGlkZXNbaV0uc3R5bGU7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBDb21wb25lbnRzLkRpcmVjdGlvbi52YWx1ZTtcblxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gdGhpcy52YWx1ZSAvIDIgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSAhPT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9IHRoaXMudmFsdWUgLyAyICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBnYXBzIGZyb20gdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHNsaWRlc1tpXS5zdHlsZTtcblxuICAgICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShHYXBzLCAndmFsdWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgZ2FwLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0b0ludChHbGlkZS5zZXR0aW5ncy5nYXApO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEdhcHMsICdncm93Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYWRkaXRpb25hbCBkaW1lbnRpb25zIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gaW5jcmVhc2Ugd2lkdGggb2YgdGhlIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKENvbXBvbmVudHMuU2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoR2FwcywgJ3JlZHVjdG9yJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgcmVkdWN0aW9uIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gc3VidHJhY3Qgd2lkdGggb2YgdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcGVyVmlldyA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG5cbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKHBlclZpZXcgLSAxKSAvIHBlclZpZXc7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQXBwbHkgY2FsY3VsYXRlZCBnYXBzOlxuICAgKiAtIGFmdGVyIGJ1aWxkaW5nLCBzbyBzbGlkZXMgKGluY2x1ZGluZyBjbG9uZXMpIHdpbGwgcmVjZWl2ZSBwcm9wZXIgbWFyZ2luc1xuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEksIHRvIHJlY2FsY3VsYXRlIGdhcHMgd2l0aCBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYWZ0ZXInLCAndXBkYXRlJ10sIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHYXBzLmFwcGx5KENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSwgMzApKTtcblxuICAvKipcbiAgICogUmVtb3ZlIGdhcHM6XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEdhcHMucmVtb3ZlKENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEdhcHM7XG59XG5cbi8qKlxuICogRmluZHMgc2libGluZ3Mgbm9kZXMgb2YgdGhlIHBhc3NlZCBub2RlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBzaWJsaW5ncyhub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHZhciBuID0gbm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIG1hdGNoZWQgPSBbXTtcblxuICAgIGZvciAoOyBuOyBuID0gbi5uZXh0U2libGluZykge1xuICAgICAgaWYgKG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gbm9kZSkge1xuICAgICAgICBtYXRjaGVkLnB1c2gobik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZWQ7XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhc3NlZCBub2RlIGV4aXN0IGFuZCBpcyBhIHZhbGlkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZXhpc3Qobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBUUkFDS19TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cInRyYWNrXCJdJztcblxuZnVuY3Rpb24gSHRtbCAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgdmFyIEh0bWwgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXAgc2xpZGVyIEhUTUwgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0dsaWRlfSBnbGlkZVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMucm9vdCA9IEdsaWRlLnNlbGVjdG9yO1xuICAgICAgdGhpcy50cmFjayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFRSQUNLX1NFTEVDVE9SKTtcbiAgICAgIHRoaXMuc2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy53cmFwcGVyLmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiAhc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuY2xvbmVTbGlkZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEh0bWwsICdyb290Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgZ2xpZGUgbWFpbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3I7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSBtYWluIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocikge1xuICAgICAgaWYgKGlzU3RyaW5nKHIpKSB7XG4gICAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3QocikpIHtcbiAgICAgICAgSHRtbC5fciA9IHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdSb290IGVsZW1lbnQgbXVzdCBiZSBhIGV4aXN0aW5nIEh0bWwgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd0cmFjaycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG5vZGUgb2YgdGhlIGdsaWRlIHRyYWNrIHdpdGggc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3Q7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSB0cmFjayB3aXRoIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICBpZiAoZXhpc3QodCkpIHtcbiAgICAgICAgSHRtbC5fdCA9IHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdDb3VsZCBub3QgZmluZCB0cmFjayBlbGVtZW50LiBQbGVhc2UgdXNlICcgKyBUUkFDS19TRUxFQ1RPUiArICcgYXR0cmlidXRlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd3cmFwcGVyJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC50cmFjay5jaGlsZHJlblswXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBIdG1sO1xufVxuXG5mdW5jdGlvbiBQZWVrIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBQZWVrID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBob3cgbXVjaCB0byBwZWVrIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MucGVlaztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFBlZWssICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcnxPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gUGVlay5fdjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuYmVmb3JlID0gdG9JbnQodmFsdWUuYmVmb3JlKTtcbiAgICAgICAgdmFsdWUuYWZ0ZXIgPSB0b0ludCh2YWx1ZS5hZnRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgUGVlay5fdiA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKFBlZWssICdyZWR1Y3RvcicsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHJlZHVjdGlvbiB2YWx1ZSBjYXVzZWQgYnkgcGVlay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBQZWVrLnZhbHVlO1xuICAgICAgdmFyIHBlclZpZXcgPSBHbGlkZS5zZXR0aW5ncy5wZXJWaWV3O1xuXG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5iZWZvcmUgLyBwZXJWaWV3ICsgdmFsdWUuYWZ0ZXIgLyBwZXJWaWV3O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUgKiAyIC8gcGVyVmlldztcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZSBwZWVraW5nIHNpemVzIG9uOlxuICAgKiAtIHdoZW4gcmVzaXppbmcgd2luZG93IHRvIHVwZGF0ZSB0byBwcm9wZXIgcGVyY2VudHNcbiAgICovXG4gIEV2ZW50cy5vbihbJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFBlZWsubW91bnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFBlZWs7XG59XG5cbmZ1bmN0aW9uIE1vdmUgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIE1vdmUgPSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBtb3ZlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuX28gPSAwO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYSBtb3ZlbWVudCB2YWx1ZSBiYXNlZCBvbiBwYXNzZWQgb2Zmc2V0IGFuZCBjdXJyZW50bHkgYWN0aXZlIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uIG1ha2UoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgICAgRXZlbnRzLmVtaXQoJ21vdmUnLCB7XG4gICAgICAgIG1vdmVtZW50OiB0aGlzLnZhbHVlXG4gICAgICB9KTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ21vdmUuYWZ0ZXInLCB7XG4gICAgICAgICAgbW92ZW1lbnQ6IF90aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShNb3ZlLCAnb2Zmc2V0Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gb2Zmc2V0IHZhbHVlIHVzZWQgdG8gbW9kaWZ5IGN1cnJlbnQgdHJhbnNsYXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE1vdmUuX287XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBvZmZzZXQgdmFsdWUgdXNlZCB0byBtb2RpZnkgY3VycmVudCB0cmFuc2xhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIE1vdmUuX28gPSAhaXNVbmRlZmluZWQodmFsdWUpID8gdG9JbnQodmFsdWUpIDogMDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShNb3ZlLCAndHJhbnNsYXRlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYSByYXcgbW92ZW1lbnQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoTW92ZSwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gYWN0dWFsIG1vdmVtZW50IHZhbHVlIGNvcnJlY3RlZCBieSBvZmZzZXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICB2YXIgdHJhbnNsYXRlID0gdGhpcy50cmFuc2xhdGU7XG5cbiAgICAgIGlmIChDb21wb25lbnRzLkRpcmVjdGlvbi5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIG9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIG9mZnNldDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBNYWtlIG1vdmVtZW50IHRvIHByb3BlciBzbGlkZSBvbjpcbiAgICogLSBiZWZvcmUgYnVpbGQsIHNvIGdsaWRlIHdpbGwgc3RhcnQgYXQgYHN0YXJ0QXRgIGluZGV4XG4gICAqIC0gb24gZWFjaCBzdGFuZGFyZCBydW4gdG8gbW92ZSB0byBuZXdseSBjYWxjdWxhdGVkIGluZGV4XG4gICAqL1xuICBFdmVudHMub24oWydidWlsZC5iZWZvcmUnLCAncnVuJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBNb3ZlLm1ha2UoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIE1vdmU7XG59XG5cbmZ1bmN0aW9uIFNpemVzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBTaXplcyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZGltZW50aW9ucyBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldHVwU2xpZGVzOiBmdW5jdGlvbiBzZXR1cFNsaWRlcygpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSB0aGlzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHVwcyBkaW1lbnRpb25zIG9mIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXR1cFdyYXBwZXI6IGZ1bmN0aW9uIHNldHVwV3JhcHBlcihkaW1lbnRpb24pIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53cmFwcGVyU2l6ZSArICdweCc7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhcHBsaWVkIHN0eWxlcyBmcm9tIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH1cblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUud2lkdGggPSAnJztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFNpemVzLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY291bnQgbnVtYmVyIG9mIHRoZSBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5IdG1sLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoU2l6ZXMsICd3aWR0aCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdpZHRoIHZhbHVlIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRzLkh0bWwucm9vdC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3dyYXBwZXJTaXplJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgc2l6ZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gU2l6ZXMuc2xpZGVXaWR0aCAqIFNpemVzLmxlbmd0aCArIENvbXBvbmVudHMuR2Fwcy5ncm93ICsgQ29tcG9uZW50cy5DbG9uZXMuZ3JvdztcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3NsaWRlV2lkdGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aWR0aCB2YWx1ZSBvZiB0aGUgc2luZ2xlIHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFNpemVzLndpZHRoIC8gR2xpZGUuc2V0dGluZ3MucGVyVmlldyAtIENvbXBvbmVudHMuUGVlay5yZWR1Y3RvciAtIENvbXBvbmVudHMuR2Fwcy5yZWR1Y3RvcjtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBjYWxjdWxhdGVkIGdsaWRlJ3MgZGltZW5zaW9uczpcbiAgICogLSBiZWZvcmUgYnVpbGRpbmcsIHNvIG90aGVyIGRpbWVudGlvbnMgKGUuZy4gdHJhbnNsYXRlKSB3aWxsIGJlIGNhbGN1bGF0ZWQgcHJvcGVydGx5XG4gICAqIC0gd2hlbiByZXNpemluZyB3aW5kb3cgdG8gcmVjYWxjdWxhdGUgc2lsZGVzIGRpbWVuc2lvbnNcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJLCB0byBjYWxjdWxhdGUgZGltZW5zaW9ucyBiYXNlZCBvbiBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFNpemVzLnNldHVwU2xpZGVzKCk7XG4gICAgU2l6ZXMuc2V0dXBXcmFwcGVyKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FsY3VsYXRlZCBnbGlkZSdzIGRpbWVuc2lvbnM6XG4gICAqIC0gb24gZGVzdG90aW5nIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgU2l6ZXMucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBTaXplcztcbn1cblxuZnVuY3Rpb24gQnVpbGQgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEJ1aWxkID0ge1xuICAgIC8qKlxuICAgICAqIEluaXQgZ2xpZGUgYnVpbGRpbmcuIEFkZHMgY2xhc3Nlcywgc2V0c1xuICAgICAqIGRpbWVuc2lvbnMgYW5kIHNldHVwcyBpbml0aWFsIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFdmVudHMuZW1pdCgnYnVpbGQuYmVmb3JlJyk7XG5cbiAgICAgIHRoaXMudHlwZUNsYXNzKCk7XG4gICAgICB0aGlzLmFjdGl2ZUNsYXNzKCk7XG5cbiAgICAgIEV2ZW50cy5lbWl0KCdidWlsZC5hZnRlcicpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYHR5cGVgIGNsYXNzIHRvIHRoZSBnbGlkZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQ2xhc3M6IGZ1bmN0aW9uIHR5cGVDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlc1tHbGlkZS5zZXR0aW5ncy50eXBlXSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6IGZ1bmN0aW9uIGFjdGl2ZUNsYXNzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuICAgICAgdmFyIHNsaWRlID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuXG4gICAgICAgIHNpYmxpbmdzKHNsaWRlKS5mb3JFYWNoKGZ1bmN0aW9uIChzaWJsaW5nKSB7XG4gICAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIEhUTUwgY2xhc3NlcyBhcHBsaWVkIGF0IGJ1aWxkaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzc2VzOiBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbR2xpZGUuc2V0dGluZ3MudHlwZV0pO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBidWlsZGluZyBjbGFzc2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBjbGFzc2VzIGJlZm9yZSByZW1vdW50aW5nIGNvbXBvbmVudFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEJ1aWxkLnJlbW92ZUNsYXNzZXMoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50OlxuICAgKiAtIG9uIHJlc2l6aW5nIG9mIHRoZSB3aW5kb3cgdG8gY2FsY3VsYXRlIG5ldyBkaW1lbnRpb25zXG4gICAqIC0gb24gdXBkYXRpbmcgc2V0dGluZ3MgdmlhIEFQSVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQnVpbGQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgc2xpZGU6XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZS5hZnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBCdWlsZC5hY3RpdmVDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gQnVpbGQ7XG59XG5cbmZ1bmN0aW9uIENsb25lcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgQ2xvbmVzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXR0ZXJuIG1hcCBhbmQgY29sbGVjdCBzbGlkZXMgdG8gYmUgY2xvbmVkLlxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb2xsZWN0KCk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdCBjbG9uZXMgd2l0aCBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjb2xsZWN0OiBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgICAgdmFyIGl0ZW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuICAgICAgdmFyIF9HbGlkZSRzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzLFxuICAgICAgICAgIHBlclZpZXcgPSBfR2xpZGUkc2V0dGluZ3MucGVyVmlldyxcbiAgICAgICAgICBjbGFzc2VzID0gX0dsaWRlJHNldHRpbmdzLmNsYXNzZXM7XG5cblxuICAgICAgdmFyIHBlZWtJbmNyZW1lbnRlciA9ICshIUdsaWRlLnNldHRpbmdzLnBlZWs7XG4gICAgICB2YXIgcGFydCA9IHBlclZpZXcgKyBwZWVrSW5jcmVtZW50ZXI7XG4gICAgICB2YXIgc3RhcnQgPSBzbGlkZXMuc2xpY2UoMCwgcGFydCk7XG4gICAgICB2YXIgZW5kID0gc2xpZGVzLnNsaWNlKC1wYXJ0KTtcblxuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBlclZpZXcgLyBzbGlkZXMubGVuZ3RoKSk7IHIrKykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNsb25lID0gc3RhcnRbaV0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLmNsb25lU2xpZGUpO1xuXG4gICAgICAgICAgaXRlbXMucHVzaChjbG9uZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZW5kLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIHZhciBfY2xvbmUgPSBlbmRbX2ldLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgIF9jbG9uZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuY2xvbmVTbGlkZSk7XG5cbiAgICAgICAgICBpdGVtcy51bnNoaWZ0KF9jbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjbG9uZWQgc2xpZGVzIHdpdGggZ2VuZXJhdGVkIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIHZhciBfQ29tcG9uZW50cyRIdG1sID0gQ29tcG9uZW50cy5IdG1sLFxuICAgICAgICAgIHdyYXBwZXIgPSBfQ29tcG9uZW50cyRIdG1sLndyYXBwZXIsXG4gICAgICAgICAgc2xpZGVzID0gX0NvbXBvbmVudHMkSHRtbC5zbGlkZXM7XG5cblxuICAgICAgdmFyIGhhbGYgPSBNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpO1xuICAgICAgdmFyIHByZXBlbmQgPSBpdGVtcy5zbGljZSgwLCBoYWxmKS5yZXZlcnNlKCk7XG4gICAgICB2YXIgYXBwZW5kID0gaXRlbXMuc2xpY2UoaGFsZiwgaXRlbXMubGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcHBlbmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcHBlbmRbaV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBwcmVwZW5kLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUocHJlcGVuZFtfaTJdLCBzbGlkZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBpdGVtcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICAgIGl0ZW1zW19pM10uc3R5bGUud2lkdGggPSBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY2xvbmVkIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIucmVtb3ZlQ2hpbGQoaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ2xvbmVzLCAnZ3JvdycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFkZGl0aW9uYWwgZGltZW50aW9ucyB2YWx1ZSBjYXVzZWQgYnkgY2xvbmVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyBDb21wb25lbnRzLkdhcHMudmFsdWUpICogQ2xvbmVzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBzbGlkZSdzIGNsb25lczpcbiAgICogLSB3aGlsZSBnbGlkZSdzIHR5cGUgaXMgYGNhcm91c2VsYFxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ2xvbmVzLnJlbW92ZSgpO1xuICAgIENsb25lcy5tb3VudCgpO1xuICAgIENsb25lcy5hcHBlbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhZGRpdGlvbmFsIHNsaWRlJ3MgY2xvbmVzOlxuICAgKiAtIHdoaWxlIGdsaWRlJ3MgdHlwZSBpcyBgY2Fyb3VzZWxgXG4gICAqL1xuICBFdmVudHMub24oJ2J1aWxkLmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoR2xpZGUuaXNUeXBlKCdjYXJvdXNlbCcpKSB7XG4gICAgICBDbG9uZXMuYXBwZW5kKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGNsb25lcyBIVE1MRWxlbWVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENsb25lcy5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIENsb25lcztcbn1cblxudmFyIEV2ZW50c0JpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50c0JpbmRlciBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50c0JpbmRlcigpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHNCaW5kZXIpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudHMgbGlzdGVuZXJzIHRvIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50c1xuICAgKiBAcGFyYW0gIHtFbGVtZW50fFdpbmRvd3xEb2N1bWVudH0gZWxcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNsb3N1cmVcbiAgICogQHBhcmFtICB7Qm9vbGVhbnxPYmplY3R9IGNhcHR1cmVcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhFdmVudHNCaW5kZXIsIFt7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudHMsIGVsLCBjbG9zdXJlKSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudHNbaV1dID0gY2xvc3VyZTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRzXG4gICAgICogQHBhcmFtICB7RWxlbWVudHxXaW5kb3d8RG9jdW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb2ZmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWwpIHtcbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29sbGVjdGVkIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50c0JpbmRlcjtcbn0oKTtcblxuZnVuY3Rpb24gUmVzaXplIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgUmVzaXplID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHdpbmRvdyBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgcmV6c2l6ZWAgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdy5cbiAgICAgKiBJdCdzIGEgY29zdGx5IGV2ZW50LCBzbyB3ZSBhcmUgZGVib3VuY2luZyBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbigncmVzaXplJywgd2luZG93LCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdyZXNpemUnKTtcbiAgICAgIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBsaXN0ZW5lcnMgZnJvbSB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSB3aW5kb3c6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBSZXNpemUudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFJlc2l6ZTtcbn1cblxudmFyIFZBTElEX0RJUkVDVElPTlMgPSBbJ2x0cicsICdydGwnXTtcbnZhciBGTElQRURfTU9WRU1FTlRTID0ge1xuICAnPic6ICc8JyxcbiAgJzwnOiAnPicsXG4gICc9JzogJz0nXG59O1xuXG5mdW5jdGlvbiBEaXJlY3Rpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZ2FwIHZhbHVlIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MuZGlyZWN0aW9uO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHBhdHRlcm4gYmFzZWQgb24gZGlyZWN0aW9uIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZShwYXR0ZXJuKSB7XG4gICAgICB2YXIgdG9rZW4gPSBwYXR0ZXJuLnNsaWNlKDAsIDEpO1xuXG4gICAgICBpZiAodGhpcy5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQodG9rZW4pLmpvaW4oRkxJUEVEX01PVkVNRU5UU1t0b2tlbl0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdmFsdWUgb2YgZGlyZWN0aW9uIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IGRpcmVjdGlvbjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGRpcmVjdGlvbiBjbGFzcyB0byB0aGUgcm9vdCBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb25bdGhpcy52YWx1ZV0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGlyZWN0aW9uIGNsYXNzIGZyb20gdGhlIHJvb3QgSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uW3RoaXMudmFsdWVdKTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKERpcmVjdGlvbiwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uLl92O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChWQUxJRF9ESVJFQ1RJT05TLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgRGlyZWN0aW9uLl92ID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdEaXJlY3Rpb24gdmFsdWUgbXVzdCBiZSBgbHRyYCBvciBgcnRsYCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENsZWFyIGRpcmVjdGlvbiBjbGFzczpcbiAgICogLSBvbiBkZXN0cm95IHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVtb3ZlIGNsYXNzIGJlZm9yZSByZWFwcGxpbmcgYmVsbG93XG4gICAqL1xuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLnJlbW92ZUNsYXNzKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVmbGVjdCBjaGFuZ2VzIGluIGRpcmVjdGlvbiB2YWx1ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBkaXJlY3Rpb24gY2xhc3M6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nIHRvIGFwcGx5IGNsYXNzIGZvciB0aGUgZmlyc3QgdGltZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlYXBwbHkgZGlyZWN0aW9uIGNsYXNzIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIERpcmVjdGlvbi5hZGRDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gRGlyZWN0aW9uO1xufVxuXG4vKipcbiAqIFJlZmxlY3RzIHZhbHVlIG9mIGdsaWRlIG1vdmVtZW50LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBSdGwgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyB0aGUgcGFzc2VkIHRyYW5zbGF0ZSBpZiBnbGlkZSBpcyBpbiBSVEwgb3B0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgIHJldHVybiAtdHJhbnNsYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgZ2FwYCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR2FwIChHbGlkZSwgQ29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIHBhc3NlZCB0cmFuc2xhdGUgdmFsdWUgd2l0aCBudW1iZXIgaW4gdGhlIGBnYXBgIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlICsgQ29tcG9uZW50cy5HYXBzLnZhbHVlICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCB3aWR0aCBvZiBhZGRpdGlvbmFsIGNsb25lcyB3aWR0aC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR3JvdyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRvIHRoZSBwYXNzZWQgdHJhbnNsYXRlIHdpZHRoIG9mIHRoZSBoYWxmIG9mIGNsb25lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3cgLyAyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgcGVla2Agc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFBlZWtpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGEgYHBlZWtgIHNldHRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5mb2N1c0F0ID49IDApIHtcbiAgICAgICAgdmFyIHBlZWsgPSBDb21wb25lbnRzLlBlZWsudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHBlZWspKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWsuYmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCBhIGBmb2N1c0F0YCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gRm9jdXNpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGluZGV4IGluIHRoZSBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICAgIHZhciB3aWR0aCA9IENvbXBvbmVudHMuU2l6ZXMud2lkdGg7XG4gICAgICB2YXIgZm9jdXNBdCA9IEdsaWRlLnNldHRpbmdzLmZvY3VzQXQ7XG4gICAgICB2YXIgc2xpZGVXaWR0aCA9IENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aDtcblxuICAgICAgaWYgKGZvY3VzQXQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUgLSAod2lkdGggLyAyIC0gc2xpZGVXaWR0aCAvIDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gc2xpZGVXaWR0aCAqIGZvY3VzQXQgLSBnYXAgKiBmb2N1c0F0O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRpZmZyZW50IHRyYW5zZm9ybWVycyBvbiB0cmFuc2xhdGUgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG11dGF0b3IgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIE1lcmdlIGluc3RhbmNlIHRyYW5zZm9ybWVycyB3aXRoIGNvbGxlY3Rpb24gb2YgZGVmYXVsdCB0cmFuc2Zvcm1lcnMuXG4gICAqIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIFJ0bCBjb21wb25lbnQgYmUgbGFzdCBvbiB0aGUgbGlzdCxcbiAgICogc28gaXQgcmVmbGVjdHMgYWxsIHByZXZpb3VzIHRyYW5zZm9ybWF0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIFRSQU5TRk9STUVSUyA9IFtHYXAsIEdyb3csIFBlZWtpbmcsIEZvY3VzaW5nXS5jb25jYXQoR2xpZGUuX3QsIFtSdGxdKTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFBpcGxpbmVzIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIHJlZ2lzdGVyZWQgdHJhbnNmb3JtZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUodHJhbnNsYXRlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRSQU5TRk9STUVSUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJhbnNmb3JtZXIgPSBUUkFOU0ZPUk1FUlNbaV07XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odHJhbnNmb3JtZXIpICYmIGlzRnVuY3Rpb24odHJhbnNmb3JtZXIoKS5tb2RpZnkpKSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gdHJhbnNmb3JtZXIoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykubW9kaWZ5KHRyYW5zbGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybignVHJhbnNmb3JtZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBtb2RpZnkoKWAgbWV0aG9kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zbGF0ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgVHJhbnNsYXRlID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdHJhbnNsYXRlIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBtdXRhdG9yKEdsaWRlLCBDb21wb25lbnRzKS5tdXRhdGUodmFsdWUpO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIC0xICogdHJhbnNmb3JtICsgJ3B4LCAwcHgsIDBweCknO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdmFsdWUgb2YgdHJhbnNsYXRlIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IG5ldyB0cmFuc2xhdGUgdmFsdWU6XG4gICAqIC0gb24gbW92ZSB0byByZWZsZWN0IGluZGV4IGNoYW5nZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVmbGVjdCBwb3NzaWJsZSBjaGFuZ2VzIGluIG9wdGlvbnNcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZScsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICB2YXIgbGVuZ3RoID0gQ29tcG9uZW50cy5TaXplcy5sZW5ndGg7XG4gICAgdmFyIHdpZHRoID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoO1xuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSAmJiBDb21wb25lbnRzLlJ1bi5pc09mZnNldCgnPCcpKSB7XG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHMuZW1pdCgndHJhbnNsYXRlLmp1bXAnKTtcblxuICAgICAgICBUcmFuc2xhdGUuc2V0KHdpZHRoICogKGxlbmd0aCAtIDEpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCgtd2lkdGggLSBnYXAgKiBsZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykgJiYgQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJz4nKSkge1xuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3RyYW5zbGF0ZS5qdW1wJyk7XG5cbiAgICAgICAgVHJhbnNsYXRlLnNldCgwKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCh3aWR0aCAqIGxlbmd0aCArIGdhcCAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRyYW5zbGF0ZS5zZXQoY29udGV4dC5tb3ZlbWVudCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhbnNsYXRlOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2xhdGUucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEhvbGRzIGluYWN0aXZpdHkgc3RhdHVzIG9mIHRyYW5zaXRpb24uXG4gICAqIFdoZW4gdHJ1ZSB0cmFuc2l0aW9uIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHZhciBUcmFuc2l0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHN0cmluZyBvZiB0aGUgQ1NTIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZShwcm9wZXJ0eSkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAnICsgdGhpcy5kdXJhdGlvbiArICdtcyAnICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltaW5nRnVuYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAwbXMgJyArIHNldHRpbmdzLmFuaW1hdGlvblRpbWluZ0Z1bmM7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0cmFuc2l0aW9uIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nPX0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdmFyIHByb3BlcnR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuY29tcG9zZShwcm9wZXJ0eSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB2YWx1ZSBvZiB0cmFuc2l0aW9uIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIGFmdGVyIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKGNhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNldCgpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoVHJhbnNpdGlvbiwgJ2R1cmF0aW9uJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYmFzZWRcbiAgICAgKiBvbiBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBDb21wb25lbnRzLlJ1bi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJld2luZER1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogU2V0IHRyYW5zaXRpb24gYHN0eWxlYCB2YWx1ZTpcbiAgICogLSBvbiBlYWNoIG1vdmluZywgYmVjYXVzZSBpdCBtYXkgYmUgY2xlYXJlZCBieSBvZmZzZXQgbW92ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24uc2V0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRyYW5zaXRpb246XG4gICAqIC0gYmVmb3JlIGluaXRpYWwgYnVpbGQgdG8gYXZvaWQgdHJhbnNpdGlvbmluZyBmcm9tIGAwYCB0byBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSB3aGlsZSByZXNpemluZyB3aW5kb3cgYW5kIHJlY2FsY3VsYXRpbmcgZGltZW50aW9uc1xuICAgKiAtIG9uIGp1bXBpbmcgZnJvbSBvZmZzZXQgdHJhbnNpdGlvbiBhdCBzdGFydCBhbmQgZW5kIGVkZ2VzIGluIGBjYXJvdXNlbGAgdHlwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd0cmFuc2xhdGUuanVtcCddLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdHJhbnNpdGlvbjpcbiAgICogLSBvbiBlYWNoIHJ1bm5pbmcsIGJlY2F1c2UgaXQgbWF5IGJlIGRpc2FibGVkIGJ5IG9mZnNldCBtb3ZlXG4gICAqL1xuICBFdmVudHMub24oJ3J1bicsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2l0aW9uLmVuYWJsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRyYW5zaXRpb246XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufVxuXG4vKipcbiAqIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWVcbiAqIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAqL1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlJDEgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbnZhciBTVEFSVF9FVkVOVFMgPSBbJ3RvdWNoc3RhcnQnLCAnbW91c2Vkb3duJ107XG52YXIgTU9WRV9FVkVOVFMgPSBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXTtcbnZhciBFTkRfRVZFTlRTID0gWyd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdtb3VzZXVwJywgJ21vdXNlbGVhdmUnXTtcbnZhciBNT1VTRV9FVkVOVFMgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdtb3VzZWxlYXZlJ107XG5cbmZ1bmN0aW9uIFN3aXBlIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgc3dpcGVTaW4gPSAwO1xuICB2YXIgc3dpcGVTdGFydFggPSAwO1xuICB2YXIgc3dpcGVTdGFydFkgPSAwO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIG1vdmVhYmxlID0gdHJ1ZTtcbiAgdmFyIGNhcHR1cmUgPSBzdXBwb3J0c1Bhc3NpdmUkMSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgdmFyIFN3aXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHN3aXBlIGJpbmRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlc3RhcnRgIGV2ZW50LiBDYWxjdWxhdGVzIGVudHJ5IHBvaW50cyBvZiB0aGUgdXNlcidzIHRhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmICFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuXG4gICAgICAgIG1vdmVhYmxlID0gdHJ1ZTtcbiAgICAgICAgc3dpcGVTaW4gPSBudWxsO1xuICAgICAgICBzd2lwZVN0YXJ0WCA9IHRvSW50KHN3aXBlLnBhZ2VYKTtcbiAgICAgICAgc3dpcGVTdGFydFkgPSB0b0ludChzd2lwZS5wYWdlWSk7XG5cbiAgICAgICAgdGhpcy5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgICAgIHRoaXMuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLnN0YXJ0Jyk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlbW92ZWAgZXZlbnQuIENhbGN1bGF0ZXMgdXNlcidzIHRhcCBhbmdsZSBhbmQgZGlzdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIHRvdWNoQW5nbGUgPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hBbmdsZSxcbiAgICAgICAgICAgIHRvdWNoUmF0aW8gPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hSYXRpbyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfR2xpZGUkc2V0dGluZ3MuY2xhc3NlcztcblxuXG4gICAgICAgIHZhciBzd2lwZSA9IHRoaXMudG91Y2hlcyhldmVudCk7XG5cbiAgICAgICAgdmFyIHN1YkV4U3ggPSB0b0ludChzd2lwZS5wYWdlWCkgLSBzd2lwZVN0YXJ0WDtcbiAgICAgICAgdmFyIHN1YkV5U3kgPSB0b0ludChzd2lwZS5wYWdlWSkgLSBzd2lwZVN0YXJ0WTtcbiAgICAgICAgdmFyIHBvd0VYID0gTWF0aC5hYnMoc3ViRXhTeCA8PCAyKTtcbiAgICAgICAgdmFyIHBvd0VZID0gTWF0aC5hYnMoc3ViRXlTeSA8PCAyKTtcbiAgICAgICAgdmFyIHN3aXBlSHlwb3RlbnVzZSA9IE1hdGguc3FydChwb3dFWCArIHBvd0VZKTtcbiAgICAgICAgdmFyIHN3aXBlQ2F0aGV0dXMgPSBNYXRoLnNxcnQocG93RVkpO1xuXG4gICAgICAgIHN3aXBlU2luID0gTWF0aC5hc2luKHN3aXBlQ2F0aGV0dXMgLyBzd2lwZUh5cG90ZW51c2UpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSAmJiBzd2lwZVNpbiAqIDE4MCAvIE1hdGguUEkgPCB0b3VjaEFuZ2xlKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLk1vdmUubWFrZShzdWJFeFN4ICogdG9GbG9hdCh0b3VjaFJhdGlvKSk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuZHJhZ2dpbmcpO1xuXG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLm1vdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlZW5kYCBldmVudC4gRmluaXRpYWxpemVzIHVzZXIncyB0YXAgYW5kIGRlY2lkZXMgYWJvdXQgZ2xpZGUgbW92ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZW5kOiBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkKGV2ZW50KTtcblxuICAgICAgICB2YXIgc3dpcGVEaXN0YW5jZSA9IHN3aXBlLnBhZ2VYIC0gc3dpcGVTdGFydFg7XG4gICAgICAgIHZhciBzd2lwZURlZyA9IHN3aXBlU2luICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgdmFyIHN0ZXBzID0gTWF0aC5yb3VuZChzd2lwZURpc3RhbmNlIC8gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoKTtcblxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSkge1xuICAgICAgICAgIGlmIChzd2lwZURpc3RhbmNlID4gdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgcG9zaXRpdmUgYW5kIGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQgbW92ZSBiYWNrd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWluKHN0ZXBzLCB0b0ludChzZXR0aW5ncy5wZXJUb3VjaCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgICAgICAgIHN0ZXBzID0gLXN0ZXBzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoJzwnICsgc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlRGlzdGFuY2UgPCAtdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgbmVnYXRpdmUgYW5kIGxvd2VyIHRoYW4gbmVnYXRpdmUgdGhyZXNob2xkIG1vdmUgZm9yd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWF4KHN0ZXBzLCAtdG9JbnQoc2V0dGluZ3MucGVyVG91Y2gpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKENvbXBvbmVudHMuRGlyZWN0aW9uLmlzKCdydGwnKSkge1xuICAgICAgICAgICAgICBzdGVwcyA9IC1zdGVwcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZShDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlKCc+JyArIHN0ZXBzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdoaWxlIHN3aXBlIGRvbid0IHJlYWNoIGRpc3RhbmNlIGFwcGx5IHByZXZpb3VzIHRyYW5zZm9ybS5cbiAgICAgICAgICAgIENvbXBvbmVudHMuTW92ZS5tYWtlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5jbGFzc2VzLmRyYWdnaW5nKTtcblxuICAgICAgICB0aGlzLnVuYmluZFN3aXBlTW92ZSgpO1xuICAgICAgICB0aGlzLnVuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLmVuZCcpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3Mgc3RhcnRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmRTd2lwZVN0YXJ0OiBmdW5jdGlvbiBiaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgQmluZGVyLm9uKFNUQVJUX0VWRU5UU1swXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIF90aGlzLnN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSwgY2FwdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5kcmFnVGhyZXNob2xkKSB7XG4gICAgICAgIEJpbmRlci5vbihTVEFSVF9FVkVOVFNbMV0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpcy5zdGFydChldmVudCk7XG4gICAgICAgIH0sIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBzdGFydGluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kU3dpcGVTdGFydDogZnVuY3Rpb24gdW5iaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIEJpbmRlci5vZmYoU1RBUlRfRVZFTlRTWzBdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgICBCaW5kZXIub2ZmKFNUQVJUX0VWRU5UU1sxXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgbW92aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVNb3ZlOiBmdW5jdGlvbiBiaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIEJpbmRlci5vbihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIHRocm90dGxlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczIubW92ZShldmVudCk7XG4gICAgICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSksIGNhcHR1cmUpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBtb3ZpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlTW92ZTogZnVuY3Rpb24gdW5iaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgQmluZGVyLm9mZihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgZW5kaW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVFbmQ6IGZ1bmN0aW9uIGJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMuZW5kKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBlbmRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlRW5kOiBmdW5jdGlvbiB1bmJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZXMgZXZlbnQgdG91Y2hlcyBwb2ludHMgYWNjb3J0aW5nIHRvIGRpZmZlcmVudCB0eXBlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIHRvdWNoZXM6IGZ1bmN0aW9uIHRvdWNoZXMoZXZlbnQpIHtcbiAgICAgIGlmIChNT1VTRV9FVkVOVFMuaW5kZXhPZihldmVudC50eXBlKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiBtaW5pbXVtIHN3aXBlIGRpc3RhbmNlIHNldHRpbmdzIGJhc2VkIG9uIGV2ZW50IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhyZXNob2xkOiBmdW5jdGlvbiB0aHJlc2hvbGQoZXZlbnQpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoTU9VU0VfRVZFTlRTLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuZHJhZ1RocmVzaG9sZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldHRpbmdzLnN3aXBlVGhyZXNob2xkO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgc3dpcGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmVuYWJsZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzd2lwZSBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmRpc2FibGUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgY29tcG9uZW50IGNsYXNzOlxuICAgKiAtIGFmdGVyIGluaXRpYWwgYnVpbGRpbmdcbiAgICovXG4gIEV2ZW50cy5vbignYnVpbGQuYWZ0ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LmFkZChHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLnN3aXBlYWJsZSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgc3dpcGluZyBiaW5kaW5nczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byByZW1vdmUgYWRkZWQgRXZlbnRMaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBTd2lwZS51bmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVFbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gU3dpcGU7XG59XG5cbmZ1bmN0aW9uIEltYWdlcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG5cbiAgdmFyIEltYWdlcyA9IHtcbiAgICAvKipcbiAgICAgKiBCaW5kcyBsaXN0ZW5lciB0byBnbGlkZSB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgZHJhZ3N0YXJ0YCBldmVudCBvbiB3cmFwcGVyIHRvIHByZXZlbnQgZHJhZ2dpbmcgaW1hZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgdGhpcy5kcmFnc3RhcnQpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgYGRyYWdzdGFydGAgZXZlbnQgb24gd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlci4gUHJldmVudHMgZHJhZ2dpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGRyYWdzdGFydDogZnVuY3Rpb24gZHJhZ3N0YXJ0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGZyb20gaW1hZ2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIHJlbW92ZSBhZGRlZCBFdmVudExpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEltYWdlcy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gSW1hZ2VzO1xufVxuXG5mdW5jdGlvbiBBbmNob3JzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgZGV0YWNoaW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBQcmV2ZW50cyBkZXRhY2hpbmcgb2YgYWxyZWFkeSBkZXRhY2hlZCBhbmNob3JzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkZXRhY2hlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIb2xkcyBwcmV2ZW50aW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBJZiBgdHJ1ZWAgcmVkaXJlY3Rpb24gYWZ0ZXIgY2xpY2sgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICB2YXIgcHJldmVudGVkID0gZmFsc2U7XG5cbiAgdmFyIEFuY2hvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGEgaW5pdGlhbCBzdGF0ZSBvZiBhbmNob3JzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogSG9sZHMgY29sbGVjdGlvbiBvZiBhbmNob3JzIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2EgPSBDb21wb25lbnRzLkh0bWwud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cbiAgICAgIHRoaXMuYmluZCgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdjbGljaycsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aGlzLmNsaWNrKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGV2ZW50cyBhdHRhY2hlZCB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ2NsaWNrJywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGNsaWNrIGV2ZW50LiBQcmV2ZW50cyBjbGlja3Mgd2hlbiBnbGlkZSBpcyBpbiBgcHJldmVudGAgc3RhdHVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKHByZXZlbnRlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnQgaW5zaWRlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBkZXRhY2g6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIHByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgIGlmICghZGV0YWNoZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5pdGVtc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLCB0aGlzLml0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0ucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRhY2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnRzIGluc2lkZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgICBwcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGRldGFjaGVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5pdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGFjaGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQW5jaG9ycywgJ2l0ZW1zJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY29sbGVjdGlvbiBvZiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFuY2hvcnMuX2E7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogRGV0YWNoIGFuY2hvcnMgaW5zaWRlIHNsaWRlczpcbiAgICogLSBvbiBzd2lwaW5nLCBzbyB0aGV5IHdvbid0IHJlZGlyZWN0IHRvIGl0cyBgaHJlZmAgYXR0cmlidXRlc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdzd2lwZS5tb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuZGV0YWNoKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggYW5jaG9ycyBpbnNpZGUgc2xpZGVzOlxuICAgKiAtIGFmdGVyIHN3aXBpbmcgYW5kIHRyYW5zaXRpb25zIGVuZHMsIHNvIHRoZXkgY2FuIHJlZGlyZWN0IGFmdGVyIGNsaWNrIGFnYWluXG4gICAqL1xuICBFdmVudHMub24oJ3N3aXBlLmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgQW5jaG9ycy5hdHRhY2goKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbmNob3JzIGluc2lkZSBzbGlkZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgYW5jaG9ycyB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuYXR0YWNoKCk7XG4gICAgQW5jaG9ycy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQW5jaG9ycztcbn1cblxudmFyIE5BVl9TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cImNvbnRyb2xzW25hdl1cIl0nO1xudmFyIENPTlRST0xTX1NFTEVDVE9SID0gJ1tkYXRhLWdsaWRlLWVsXj1cImNvbnRyb2xzXCJdJztcblxuZnVuY3Rpb24gQ29udHJvbHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBDb250cm9scyA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0cyBhcnJvd3MuIEJpbmRzIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgKiB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29sbGVjdGlvbiBvZiBuYXZpZ2F0aW9uIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fbiA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoTkFWX1NFTEVDVE9SKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb2xsZWN0aW9uIG9mIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fYyA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoQ09OVFJPTFNfU0VMRUNUT1IpO1xuXG4gICAgICB0aGlzLmFkZEJpbmRpbmdzKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyh0aGlzLl9uW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmU6IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKHRoaXMuX25baV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgYWN0aXZlIGNsYXNzIG9uIGl0ZW1zIGluc2lkZSBuYXZpZ2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRyb2xzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoY29udHJvbHMpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuICAgICAgdmFyIGl0ZW0gPSBjb250cm9sc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5jbGFzc2VzLmFjdGl2ZU5hdik7XG5cbiAgICAgIHNpYmxpbmdzKGl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmNsYXNzZXMuYWN0aXZlTmF2KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWN0aXZlIGNsYXNzIGZyb20gYWN0aXZlIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udHJvbHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhjb250cm9scykge1xuICAgICAgY29udHJvbHNbR2xpZGUuaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5hY3RpdmVOYXYpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgaGFuZGxlcyB0byB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQmluZGluZ3M6IGZ1bmN0aW9uIGFkZEJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYmluZCh0aGlzLl9jW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGhhbmRsZXMgZnJvbSB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQmluZGluZ3M6IGZ1bmN0aW9uIHJlbW92ZUJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHRoaXMuX2NbaV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEJpbmRlci5vbihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0sIHRoaXMuY2xpY2spO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgZXZlbnRzIGJpbmRlZCB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoZWxlbWVudHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQmluZGVyLm9mZihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYGNsaWNrYCBldmVudCBvbiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICogTW92ZXMgc2xpZGVyIGluIGRyaWVjdGlvbiBwcmVjaXNlZCBpblxuICAgICAqIGBkYXRhLWdsaWRlLWRpcmAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nbGlkZS1kaXInKSkpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ29udHJvbHMsICdpdGVtcycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbGxlY3Rpb24gb2YgdGhlIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIENvbnRyb2xzLl9jO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgbmF2aWdhdGlvbiBpdGVtOlxuICAgKiAtIGFmdGVyIG1vdW50aW5nIHRvIHNldCBpdCB0byBpbml0aWFsIGluZGV4XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbihbJ21vdW50LmFmdGVyJywgJ21vdmUuYWZ0ZXInXSwgZnVuY3Rpb24gKCkge1xuICAgIENvbnRyb2xzLnNldEFjdGl2ZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGFuZCBIVE1MIENsYXNzZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29udHJvbHMucmVtb3ZlQmluZGluZ3MoKTtcbiAgICBDb250cm9scy5yZW1vdmVBY3RpdmUoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQ29udHJvbHM7XG59XG5cbmZ1bmN0aW9uIEtleWJvYXJkIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgS2V5Ym9hcmQgPSB7XG4gICAgLyoqXG4gICAgICogQmluZHMga2V5Ym9hcmQgZXZlbnRzIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMga2V5Ym9hcmQgcHJlc3MgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdrZXl1cCcsIGRvY3VtZW50LCB0aGlzLnByZXNzKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGtleWJvYXJkIHByZXNzIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdrZXl1cCcsIGRvY3VtZW50KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleWJvYXJkJ3MgYXJyb3dzIHByZXNzIGFuZCBtb3ZpbmcgZ2xpZGUgZm93YXJkIGFuZCBiYWNrd2FyZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHByZXNzOiBmdW5jdGlvbiBwcmVzcyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPCcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBmcm9tIGtleWJvYXJkOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGFkZGVkIGV2ZW50c1xuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBldmVudHMgYmVmb3JlIHJlbW91bnRpbmdcbiAgICovXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBLZXlib2FyZC51bmJpbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50XG4gICAqIC0gb24gdXBkYXRpbmcgdG8gcmVmbGVjdCBwb3RlbnRpYWwgY2hhbmdlcyBpbiBzZXR0aW5nc1xuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgS2V5Ym9hcmQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEJpbmRlci5kZXN0cm95KCk7XG4gIH0pO1xuXG4gIHJldHVybiBLZXlib2FyZDtcbn1cblxuZnVuY3Rpb24gQXV0b3BsYXkgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBBdXRvcGxheSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhdXRvcGxheWluZyBhbmQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5ob3ZlcnBhdXNlKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhdXRvcGxheWluZyBpbiBjb25maWd1cmVkIGludGVydmFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gZm9yY2UgUnVuIGF1dG9wbGF5aW5nIHdpdGggcGFzc2VkIGludGVydmFsIHJlZ2FyZGxlc3Mgb2YgYGF1dG9wbGF5YCBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLl9pKSkge1xuICAgICAgICAgIHRoaXMuX2kgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoJz4nKTtcblxuICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICB9LCB0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3J1bm5pbmcgb2YgdGhlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5faSA9IGNsZWFySW50ZXJ2YWwodGhpcy5faSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3BsYXlpbmcgd2hpbGUgbW91c2UgaXMgb3ZlciBnbGlkZSdzIGFyZWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgQmluZGVyLm9uKCdtb3VzZW92ZXInLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RvcCgpO1xuICAgICAgfSk7XG5cbiAgICAgIEJpbmRlci5vbignbW91c2VvdXQnLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZCBtb3VzZW92ZXIgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J10sIENvbXBvbmVudHMuSHRtbC5yb290KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEF1dG9wbGF5LCAndGltZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRpbWUgcGVyaW9kIHZhbHVlIGZvciB0aGUgYXV0b3BsYXkgaW50ZXJ2YWwuIFByaW9yaXRpemVzXG4gICAgICogdGltZXMgaW4gYGRhdGEtZ2xpZGUtYXV0b3BsYXlgIGF0dHJ1YnV0ZXMgb3ZlciBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGF1dG9wbGF5ID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWdsaWRlLWF1dG9wbGF5Jyk7XG5cbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICByZXR1cm4gdG9JbnQoYXV0b3BsYXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9JbnQoR2xpZGUuc2V0dGluZ3MuYXV0b3BsYXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN0b3AgYXV0b3BsYXlpbmcgYW5kIHVuYmluZCBldmVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gY2xlYXIgZGVmaW5lZCBpbnRlcnZhbFxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnVuYmluZCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheWluZzpcbiAgICogLSBiZWZvcmUgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwYXVzaW5nIHZpYSBBUElcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBjbGVhciBkZWZpbmVkIGludGVydmFsXG4gICAqIC0gd2hpbGUgc3RhcnRpbmcgYSBzd2lwZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmJlZm9yZScsICdwYXVzZScsICdkZXN0cm95JywgJ3N3aXBlLnN0YXJ0JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuc3RvcCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RhcnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gYWZ0ZXIgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwbGF5aW5nIHZpYSBBUElcbiAgICogLSB3aGlsZSBlbmRpbmcgYSBzd2lwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmFmdGVyJywgJ3BsYXknLCAnc3dpcGUuZW5kJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5zdGFydCgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3VudCBhdXRvcGxheWluZzpcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5Lm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgZ2xpZGUgaW5zdGFuY2UgdG8gY2xlYXJ1cCBsaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQXV0b3BsYXk7XG59XG5cbi8qKlxuICogU29ydHMga2V5cyBvZiBicmVha3BvaW50IG9iamVjdCBzbyB0aGV5IHdpbGwgYmUgb3JkZXJlZCBmcm9tIGxvd2VyIHRvIGJpZ2dlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzb3J0QnJlYWtwb2ludHMocG9pbnRzKSB7XG4gIGlmIChpc09iamVjdChwb2ludHMpKSB7XG4gICAgcmV0dXJuIHNvcnRLZXlzKHBvaW50cyk7XG4gIH0gZWxzZSB7XG4gICAgd2FybignQnJlYWtwb2ludHMgb3B0aW9uIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIEJyZWFrcG9pbnRzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHNldHRpbmdzLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHJlZmVyZW5jZSB0byBicmVha3BvaW50cyBvYmplY3QgaW4gc2V0dGluZ3MuIFNvcnRzIGJyZWFrcG9pbnRzXG4gICAqIGZyb20gc21hbGxlciB0byBsYXJnZXIuIEl0IGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHByb3BlclxuICAgKiBtYXRjaGluZyBjdXJyZW50bHkgYWN0aXZlIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzKHNldHRpbmdzLmJyZWFrcG9pbnRzKTtcblxuICAvKipcbiAgICogQ2FjaGUgaW5pdGlhbCBzZXR0aW5ncyBiZWZvcmUgb3ZlcndyaXR0aW5nLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcblxuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBzZXR0aW5ncyBmb3IgY3VycmVjdGx5IG1hdGNoaW5nIG1lZGlhIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocG9pbnRzKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKHZhciBwb2ludCBpbiBwb2ludHMpIHtcbiAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KHBvaW50KSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAnICsgcG9pbnQgKyAncHgpJykubWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gcG9pbnRzW3BvaW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3ZlcndyaXRlIGluc3RhbmNlIHNldHRpbmdzIHdpdGggY3VycmVudGx5IG1hdGNoaW5nIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqIFRoaXMgaGFwcGVucyByaWdodCBhZnRlciBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICBfZXh0ZW5kcyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBnbGlkZSB3aXRoIHNldHRpbmdzIG9mIG1hdGNoZWQgYnJla3BvaW50OlxuICAgKiAtIHdpbmRvdyByZXNpemUgdG8gdXBkYXRlIHNsaWRlclxuICAgKi9cbiAgQmluZGVyLm9uKCdyZXNpemUnLCB3aW5kb3csIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHbGlkZS5zZXR0aW5ncyA9IG1lcmdlT3B0aW9ucyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG4gIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG5cbiAgLyoqXG4gICAqIFJlc29ydCBhbmQgdXBkYXRlIGRlZmF1bHQgc2V0dGluZ3M6XG4gICAqIC0gb24gcmVpbml0IHZpYSBBUEksIHNvIGJyZWFrcG9pbnQgbWF0Y2hpbmcgd2lsbCBiZSBwZXJmb3JtZWQgd2l0aCBvcHRpb25zXG4gICAqL1xuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwb2ludHMgPSBzb3J0QnJlYWtwb2ludHMocG9pbnRzKTtcblxuICAgIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCByZXNpemUgbGlzdGVuZXI6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQmluZGVyLm9mZigncmVzaXplJywgd2luZG93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufVxuXG52YXIgQ09NUE9ORU5UUyA9IHtcbiAgLy8gUmVxdWlyZWRcbiAgSHRtbDogSHRtbCxcbiAgVHJhbnNsYXRlOiBUcmFuc2xhdGUsXG4gIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICBQZWVrOiBQZWVrLFxuICBTaXplczogU2l6ZXMsXG4gIEdhcHM6IEdhcHMsXG4gIE1vdmU6IE1vdmUsXG4gIENsb25lczogQ2xvbmVzLFxuICBSZXNpemU6IFJlc2l6ZSxcbiAgQnVpbGQ6IEJ1aWxkLFxuICBSdW46IFJ1bixcblxuICAvLyBPcHRpb25hbFxuICBTd2lwZTogU3dpcGUsXG4gIEltYWdlczogSW1hZ2VzLFxuICBBbmNob3JzOiBBbmNob3JzLFxuICBDb250cm9sczogQ29udHJvbHMsXG4gIEtleWJvYXJkOiBLZXlib2FyZCxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBCcmVha3BvaW50czogQnJlYWtwb2ludHNcbn07XG5cbnZhciBHbGlkZSQxID0gZnVuY3Rpb24gKF9Db3JlKSB7XG4gIGluaGVyaXRzKEdsaWRlJCQxLCBfQ29yZSk7XG5cbiAgZnVuY3Rpb24gR2xpZGUkJDEoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xpZGUkJDEpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHbGlkZSQkMS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhHbGlkZSQkMSwgW3tcbiAgICBrZXk6ICdtb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICByZXR1cm4gZ2V0KEdsaWRlJCQxLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxLnByb3RvdHlwZSksICdtb3VudCcsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIENPTVBPTkVOVFMsIGV4dGVuc2lvbnMpKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEdsaWRlJCQxO1xufShHbGlkZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsaWRlJDE7XG4iLCIvKiFcbiAqIHBlcmZlY3Qtc2Nyb2xsYmFyIHYxLjQuMFxuICogKGMpIDIwMTggSHl1bmplIEp1blxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIGdldChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXQoZWxlbWVudCwgb2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWwgPSB2YWwgKyBcInB4XCI7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGl2KGNsYXNzTmFtZSkge1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiBkaXY7XG59XG5cbnZhciBlbE1hdGNoZXMgPVxuICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgKEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcik7XG5cbmZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgcXVlcnkpIHtcbiAgaWYgKCFlbE1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgbWF0Y2hpbmcgbWV0aG9kIHN1cHBvcnRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGVsTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHF1ZXJ5KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQucmVtb3ZlKSB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtZW50LmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIG1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKTsgfVxuICApO1xufVxuXG52YXIgY2xzID0ge1xuICBtYWluOiAncHMnLFxuICBlbGVtZW50OiB7XG4gICAgdGh1bWI6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwc19fdGh1bWItXCIgKyB4KTsgfSxcbiAgICByYWlsOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3JhaWwtXCIgKyB4KTsgfSxcbiAgICBjb25zdW1pbmc6ICdwc19fY2hpbGQtLWNvbnN1bWUnLFxuICB9LFxuICBzdGF0ZToge1xuICAgIGZvY3VzOiAncHMtLWZvY3VzJyxcbiAgICBjbGlja2luZzogJ3BzLS1jbGlja2luZycsXG4gICAgYWN0aXZlOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHMtLWFjdGl2ZS1cIiArIHgpOyB9LFxuICAgIHNjcm9sbGluZzogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1zY3JvbGxpbmctXCIgKyB4KTsgfSxcbiAgfSxcbn07XG5cbi8qXG4gKiBIZWxwZXIgbWV0aG9kc1xuICovXG52YXIgc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cbmZ1bmN0aW9uIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpIHtcbiAgdmFyIGNsYXNzTGlzdCA9IGkuZWxlbWVudC5jbGFzc0xpc3Q7XG4gIHZhciBjbGFzc05hbWUgPSBjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpO1xuXG4gIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIGNsZWFyVGltZW91dChzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0pO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHNjcm9sbGluZ0NsYXNzVGltZW91dFt4XSA9IHNldFRpbWVvdXQoXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gaS5pc0FsaXZlICYmIGkuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5zY3JvbGxpbmcoeCkpOyB9LFxuICAgIGkuc2V0dGluZ3Muc2Nyb2xsaW5nVGhyZXNob2xkXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHgpIHtcbiAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeCk7XG4gIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHgpO1xufVxuXG52YXIgRXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gRXZlbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5oYW5kbGVycyA9IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNFbXB0eTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gW107XG4gIH1cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGV2ZW50TmFtZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmICh0YXJnZXQgJiYgaGFuZGxlciAhPT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcyQxLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcyQxLmhhbmRsZXJzKSB7XG4gICAgdGhpcyQxLnVuYmluZChuYW1lKTtcbiAgfVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmlzRW1wdHkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5ldmVyeShcbiAgICBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzJDEuaGFuZGxlcnNba2V5XS5sZW5ndGggPT09IDA7IH1cbiAgKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBFdmVudEVsZW1lbnQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxudmFyIEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIGV2ZW50RWxlbWVudCAoZWxlbWVudCkge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlZSkgeyByZXR1cm4gZWUuZWxlbWVudCA9PT0gZWxlbWVudDsgfSlbMF07XG4gIGlmICghZWUpIHtcbiAgICBlZSA9IG5ldyBFdmVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnB1c2goZWUpO1xuICB9XG4gIHJldHVybiBlZTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KS5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICBlZS51bmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcblxuICBpZiAoZWUuaXNFbXB0eSkge1xuICAgIC8vIHJlbW92ZVxuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5zcGxpY2UodGhpcy5ldmVudEVsZW1lbnRzLmluZGV4T2YoZWUpLCAxKTtcbiAgfVxufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICB0aGlzLmV2ZW50RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS51bmJpbmRBbGwoKTsgfSk7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgb25jZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZWUudW5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xuICAgIGhhbmRsZXIoZXZ0KTtcbiAgfTtcbiAgZWUuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gZXZ0O1xuICB9XG59XG5cbnZhciBwcm9jZXNzU2Nyb2xsRGlmZiA9IGZ1bmN0aW9uKFxuICBpLFxuICBheGlzLFxuICBkaWZmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGZpZWxkcztcbiAgaWYgKGF4aXMgPT09ICd0b3AnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRIZWlnaHQnLFxuICAgICAgJ2NvbnRhaW5lckhlaWdodCcsXG4gICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICd5JyxcbiAgICAgICd1cCcsXG4gICAgICAnZG93bicgXTtcbiAgfSBlbHNlIGlmIChheGlzID09PSAnbGVmdCcpIHtcbiAgICBmaWVsZHMgPSBbXG4gICAgICAnY29udGVudFdpZHRoJyxcbiAgICAgICdjb250YWluZXJXaWR0aCcsXG4gICAgICAnc2Nyb2xsTGVmdCcsXG4gICAgICAneCcsXG4gICAgICAnbGVmdCcsXG4gICAgICAncmlnaHQnIF07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIHByb3BlciBheGlzIHNob3VsZCBiZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYkMShpLCBkaWZmLCBmaWVsZHMsIHVzZVNjcm9sbGluZ0NsYXNzLCBmb3JjZUZpcmVSZWFjaEV2ZW50KTtcbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NTY3JvbGxEaWZmJDEoXG4gIGksXG4gIGRpZmYsXG4gIHJlZixcbiAgdXNlU2Nyb2xsaW5nQ2xhc3MsXG4gIGZvcmNlRmlyZVJlYWNoRXZlbnRcbikge1xuICB2YXIgY29udGVudEhlaWdodCA9IHJlZlswXTtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IHJlZlsxXTtcbiAgdmFyIHNjcm9sbFRvcCA9IHJlZlsyXTtcbiAgdmFyIHkgPSByZWZbM107XG4gIHZhciB1cCA9IHJlZls0XTtcbiAgdmFyIGRvd24gPSByZWZbNV07XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgLy8gcmVzZXQgcmVhY2hcbiAgaS5yZWFjaFt5XSA9IG51bGw7XG5cbiAgLy8gMSBmb3Igc3VicGl4ZWwgcm91bmRpbmdcbiAgaWYgKGVsZW1lbnRbc2Nyb2xsVG9wXSA8IDEpIHtcbiAgICBpLnJlYWNoW3ldID0gJ3N0YXJ0JztcbiAgfVxuXG4gIC8vIDEgZm9yIHN1YnBpeGVsIHJvdW5kaW5nXG4gIGlmIChlbGVtZW50W3Njcm9sbFRvcF0gPiBpW2NvbnRlbnRIZWlnaHRdIC0gaVtjb250YWluZXJIZWlnaHRdIC0gMSkge1xuICAgIGkucmVhY2hbeV0gPSAnZW5kJztcbiAgfVxuXG4gIGlmIChkaWZmKSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIHkpKSk7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyB1cCkpKTtcbiAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgZG93bikpKTtcbiAgICB9XG5cbiAgICBpZiAodXNlU2Nyb2xsaW5nQ2xhc3MpIHtcbiAgICAgIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpLnJlYWNoW3ldICYmIChkaWZmIHx8IGZvcmNlRmlyZVJlYWNoRXZlbnQpKSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLVwiICsgeSArIFwiLXJlYWNoLVwiICsgKGkucmVhY2hbeV0pKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvSW50KHgpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc0VkaXRhYmxlKGVsKSB7XG4gIHJldHVybiAoXG4gICAgbWF0Y2hlcyhlbCwgJ2lucHV0LFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAnc2VsZWN0LFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAndGV4dGFyZWEsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICdidXR0b24sW2NvbnRlbnRlZGl0YWJsZV0nKVxuICApO1xufVxuXG5mdW5jdGlvbiBvdXRlcldpZHRoKGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlcyA9IGdldChlbGVtZW50KTtcbiAgcmV0dXJuIChcbiAgICB0b0ludChzdHlsZXMud2lkdGgpICtcbiAgICB0b0ludChzdHlsZXMucGFkZGluZ0xlZnQpICtcbiAgICB0b0ludChzdHlsZXMucGFkZGluZ1JpZ2h0KSArXG4gICAgdG9JbnQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCkgK1xuICAgIHRvSW50KHN0eWxlcy5ib3JkZXJSaWdodFdpZHRoKVxuICApO1xufVxuXG52YXIgZW52ID0ge1xuICBpc1dlYktpdDpcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ1dlYmtpdEFwcGVhcmFuY2UnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcbiAgc3VwcG9ydHNUb3VjaDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgICAgICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSksXG4gIHN1cHBvcnRzSWVQb2ludGVyOlxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzLFxuICBpc0Nocm9tZTpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC9DaHJvbWUvaS50ZXN0KG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50KSxcbn07XG5cbnZhciB1cGRhdGVHZW9tZXRyeSA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG4gIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG5cbiAgaS5jb250YWluZXJXaWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIGkuY29udGFpbmVySGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgaS5jb250ZW50SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWFJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhclhSYWlsKTtcbiAgfVxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJZUmFpbCkpIHtcbiAgICAvLyBjbGVhbiB1cCBhbmQgYXBwZW5kXG4gICAgcXVlcnlDaGlsZHJlbihlbGVtZW50LCBjbHMuZWxlbWVudC5yYWlsKCd5JykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiByZW1vdmUoZWwpOyB9XG4gICAgKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGkuc2Nyb2xsYmFyWVJhaWwpO1xuICB9XG5cbiAgaWYgKFxuICAgICFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJlxuICAgIGkuY29udGFpbmVyV2lkdGggKyBpLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRXaWR0aFxuICApIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFhXaWR0aCA9IGkuY29udGFpbmVyV2lkdGggLSBpLnJhaWxYTWFyZ2luV2lkdGg7XG4gICAgaS5yYWlsWFJhdGlvID0gaS5jb250YWluZXJXaWR0aCAvIGkucmFpbFhXaWR0aDtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludChpLnJhaWxYV2lkdGggKiBpLmNvbnRhaW5lcldpZHRoIC8gaS5jb250ZW50V2lkdGgpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gdG9JbnQoXG4gICAgICAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpICpcbiAgICAgICAgKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSAvXG4gICAgICAgIChpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChcbiAgICAhaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiZcbiAgICBpLmNvbnRhaW5lckhlaWdodCArIGkuc2V0dGluZ3Muc2Nyb2xsWU1hcmdpbk9mZnNldCA8IGkuY29udGVudEhlaWdodFxuICApIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFlIZWlnaHQgPSBpLmNvbnRhaW5lckhlaWdodCAtIGkucmFpbFlNYXJnaW5IZWlnaHQ7XG4gICAgaS5yYWlsWVJhdGlvID0gaS5jb250YWluZXJIZWlnaHQgLyBpLnJhaWxZSGVpZ2h0O1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludChpLnJhaWxZSGVpZ2h0ICogaS5jb250YWluZXJIZWlnaHQgLyBpLmNvbnRlbnRIZWlnaHQpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSB0b0ludChcbiAgICAgIHJvdW5kZWRTY3JvbGxUb3AgKlxuICAgICAgICAoaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkgL1xuICAgICAgICAoaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpLnNjcm9sbGJhclhMZWZ0ID49IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSB7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoO1xuICB9XG4gIGlmIChpLnNjcm9sbGJhcllUb3AgPj0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkge1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQ7XG4gIH1cblxuICB1cGRhdGVDc3MoZWxlbWVudCwgaSk7XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuYWN0aXZlKCd4JykpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuYWN0aXZlKCd4JykpO1xuICAgIGkuc2Nyb2xsYmFyWFdpZHRoID0gMDtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gMDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAwO1xuICB9XG4gIGlmIChpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmFjdGl2ZSgneScpKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmFjdGl2ZSgneScpKTtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSAwO1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IDA7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRUaHVtYlNpemUoaSwgdGh1bWJTaXplKSB7XG4gIGlmIChpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCkge1xuICAgIHRodW1iU2l6ZSA9IE1hdGgubWF4KHRodW1iU2l6ZSwgaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpO1xuICB9XG4gIGlmIChpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCkge1xuICAgIHRodW1iU2l6ZSA9IE1hdGgubWluKHRodW1iU2l6ZSwgaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpO1xuICB9XG4gIHJldHVybiB0aHVtYlNpemU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbGVtZW50LCBpKSB7XG4gIHZhciB4UmFpbE9mZnNldCA9IHsgd2lkdGg6IGkucmFpbFhXaWR0aCB9O1xuICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gIGlmIChpLmlzUnRsKSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9XG4gICAgICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgICAgaS5jb250YWluZXJXaWR0aCAtXG4gICAgICBpLmNvbnRlbnRXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICB9XG4gIGlmIChpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tKSB7XG4gICAgeFJhaWxPZmZzZXQuYm90dG9tID0gaS5zY3JvbGxiYXJYQm90dG9tIC0gcm91bmRlZFNjcm9sbFRvcDtcbiAgfSBlbHNlIHtcbiAgICB4UmFpbE9mZnNldC50b3AgPSBpLnNjcm9sbGJhclhUb3AgKyByb3VuZGVkU2Nyb2xsVG9wO1xuICB9XG4gIHNldChpLnNjcm9sbGJhclhSYWlsLCB4UmFpbE9mZnNldCk7XG5cbiAgdmFyIHlSYWlsT2Zmc2V0ID0geyB0b3A6IHJvdW5kZWRTY3JvbGxUb3AsIGhlaWdodDogaS5yYWlsWUhlaWdodCB9O1xuICBpZiAoaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0KSB7XG4gICAgaWYgKGkuaXNSdGwpIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID1cbiAgICAgICAgaS5jb250ZW50V2lkdGggLVxuICAgICAgICAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpIC1cbiAgICAgICAgaS5zY3JvbGxiYXJZUmlnaHQgLVxuICAgICAgICBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9IGkuc2Nyb2xsYmFyWVJpZ2h0IC0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaS5pc1J0bCkge1xuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9XG4gICAgICAgIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgICAgaS5jb250YWluZXJXaWR0aCAqIDIgLVxuICAgICAgICBpLmNvbnRlbnRXaWR0aCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWUxlZnQgLVxuICAgICAgICBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID0gaS5zY3JvbGxiYXJZTGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH1cbiAgc2V0KGkuc2Nyb2xsYmFyWVJhaWwsIHlSYWlsT2Zmc2V0KTtcblxuICBzZXQoaS5zY3JvbGxiYXJYLCB7XG4gICAgbGVmdDogaS5zY3JvbGxiYXJYTGVmdCxcbiAgICB3aWR0aDogaS5zY3JvbGxiYXJYV2lkdGggLSBpLnJhaWxCb3JkZXJYV2lkdGgsXG4gIH0pO1xuICBzZXQoaS5zY3JvbGxiYXJZLCB7XG4gICAgdG9wOiBpLnNjcm9sbGJhcllUb3AsXG4gICAgaGVpZ2h0OiBpLnNjcm9sbGJhcllIZWlnaHQgLSBpLnJhaWxCb3JkZXJZV2lkdGgsXG4gIH0pO1xufVxuXG52YXIgY2xpY2tSYWlsID0gZnVuY3Rpb24oaSkge1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZUmFpbCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBvc2l0aW9uVG9wID1cbiAgICAgIGUucGFnZVkgLVxuICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IC1cbiAgICAgIGkuc2Nyb2xsYmFyWVJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvblRvcCA+IGkuc2Nyb2xsYmFyWVRvcCA/IDEgOiAtMTtcblxuICAgIGkuZWxlbWVudC5zY3JvbGxUb3AgKz0gZGlyZWN0aW9uICogaS5jb250YWluZXJIZWlnaHQ7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYUmFpbCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBvc2l0aW9uTGVmdCA9XG4gICAgICBlLnBhZ2VYIC1cbiAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCAtXG4gICAgICBpLnNjcm9sbGJhclhSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uTGVmdCA+IGkuc2Nyb2xsYmFyWExlZnQgPyAxIDogLTE7XG5cbiAgICBpLmVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lcldpZHRoO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59O1xuXG52YXIgZHJhZ1RodW1iID0gZnVuY3Rpb24oaSkge1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVyV2lkdGgnLFxuICAgICdjb250ZW50V2lkdGgnLFxuICAgICdwYWdlWCcsXG4gICAgJ3JhaWxYV2lkdGgnLFxuICAgICdzY3JvbGxiYXJYJyxcbiAgICAnc2Nyb2xsYmFyWFdpZHRoJyxcbiAgICAnc2Nyb2xsTGVmdCcsXG4gICAgJ3gnLFxuICAgICdzY3JvbGxiYXJYUmFpbCcgXSk7XG4gIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoaSwgW1xuICAgICdjb250YWluZXJIZWlnaHQnLFxuICAgICdjb250ZW50SGVpZ2h0JyxcbiAgICAncGFnZVknLFxuICAgICdyYWlsWUhlaWdodCcsXG4gICAgJ3Njcm9sbGJhclknLFxuICAgICdzY3JvbGxiYXJZSGVpZ2h0JyxcbiAgICAnc2Nyb2xsVG9wJyxcbiAgICAneScsXG4gICAgJ3Njcm9sbGJhcllSYWlsJyBdKTtcbn07XG5cbmZ1bmN0aW9uIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoXG4gIGksXG4gIHJlZlxuKSB7XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgcGFnZVkgPSByZWZbMl07XG4gIHZhciByYWlsWUhlaWdodCA9IHJlZlszXTtcbiAgdmFyIHNjcm9sbGJhclkgPSByZWZbNF07XG4gIHZhciBzY3JvbGxiYXJZSGVpZ2h0ID0gcmVmWzVdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzZdO1xuICB2YXIgeSA9IHJlZls3XTtcbiAgdmFyIHNjcm9sbGJhcllSYWlsID0gcmVmWzhdO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIHZhciBzdGFydGluZ1Njcm9sbFRvcCA9IG51bGw7XG4gIHZhciBzdGFydGluZ01vdXNlUGFnZVkgPSBudWxsO1xuICB2YXIgc2Nyb2xsQnkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIGVsZW1lbnRbc2Nyb2xsVG9wXSA9XG4gICAgICBzdGFydGluZ1Njcm9sbFRvcCArIHNjcm9sbEJ5ICogKGVbcGFnZVldIC0gc3RhcnRpbmdNb3VzZVBhZ2VZKTtcbiAgICBhZGRTY3JvbGxpbmdDbGFzcyhpLCB5KTtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeSk7XG4gICAgaVtzY3JvbGxiYXJZUmFpbF0uY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuY2xpY2tpbmcpO1xuICAgIGkuZXZlbnQudW5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgaS5ldmVudC5iaW5kKGlbc2Nyb2xsYmFyWV0sICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHN0YXJ0aW5nU2Nyb2xsVG9wID0gZWxlbWVudFtzY3JvbGxUb3BdO1xuICAgIHN0YXJ0aW5nTW91c2VQYWdlWSA9IGVbcGFnZVldO1xuICAgIHNjcm9sbEJ5ID1cbiAgICAgIChpW2NvbnRlbnRIZWlnaHRdIC0gaVtjb250YWluZXJIZWlnaHRdKSAvXG4gICAgICAoaVtyYWlsWUhlaWdodF0gLSBpW3Njcm9sbGJhcllIZWlnaHRdKTtcblxuICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBpLmV2ZW50Lm9uY2UoaS5vd25lckRvY3VtZW50LCAnbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlbc2Nyb2xsYmFyWVJhaWxdLmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmNsaWNraW5nKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxudmFyIGtleWJvYXJkID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICB2YXIgZWxlbWVudEhvdmVyZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGVsZW1lbnQsICc6aG92ZXInKTsgfTtcbiAgdmFyIHNjcm9sbGJhckZvY3VzZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGkuc2Nyb2xsYmFyWCwgJzpmb2N1cycpIHx8IG1hdGNoZXMoaS5zY3JvbGxiYXJZLCAnOmZvY3VzJyk7IH07XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgaWYgKGRlbHRhWCA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApIHx8XG4gICAgICAgIChzY3JvbGxUb3AgPj0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQgJiYgZGVsdGFZIDwgMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBpZiAoZGVsdGFZID09PSAwKSB7XG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChzY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApIHx8XG4gICAgICAgIChzY3JvbGxMZWZ0ID49IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCAmJiBkZWx0YVggPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoXG4gICAgICAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQgJiYgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgfHxcbiAgICAgIGUuZGVmYXVsdFByZXZlbnRlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZWxlbWVudEhvdmVyZWQoKSAmJiAhc2Nyb2xsYmFyRm9jdXNlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIDogaS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdJRlJBTUUnKSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LmNvbnRlbnREb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ28gZGVlcGVyIGlmIGVsZW1lbnQgaXMgYSB3ZWJjb21wb25lbnRcbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRWRpdGFibGUoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWx0YVggPSAwO1xuICAgIHZhciBkZWx0YVkgPSAwO1xuXG4gICAgc3dpdGNoIChlLndoaWNoKSB7XG4gICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSAtaS5jb250ZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSAtaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAtMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyB1cFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyByaWdodFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250ZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSBpLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWCA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDogLy8gZG93blxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAtMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMyOiAvLyBzcGFjZSBiYXJcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMzOiAvLyBwYWdlIHVwXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzQ6IC8vIHBhZ2UgZG93blxuICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNjogLy8gaG9tZVxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNTogLy8gZW5kXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJiBkZWx0YVggIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmIGRlbHRhWSAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgd2hlZWwgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgaXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCA9PT0gMDtcbiAgICB2YXIgaXNCb3R0b20gPVxuICAgICAgcm91bmRlZFNjcm9sbFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID09PSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB2YXIgaXNMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwO1xuICAgIHZhciBpc1JpZ2h0ID1cbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cbiAgICB2YXIgaGl0c0JvdW5kO1xuXG4gICAgLy8gcGljayBheGlzIHdpdGggcHJpbWFyeSBkaXJlY3Rpb25cbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkpIHtcbiAgICAgIGhpdHNCb3VuZCA9IGlzVG9wIHx8IGlzQm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRzQm91bmQgPSBpc0xlZnQgfHwgaXNSaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0c0JvdW5kID8gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbiA6IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWx0YUZyb21FdmVudChlKSB7XG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgIHZhciBkZWx0YVkgPSAtMSAqIGUuZGVsdGFZO1xuXG4gICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkZWx0YVkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBPUyBYIFNhZmFyaVxuICAgICAgZGVsdGFYID0gLTEgKiBlLndoZWVsRGVsdGFYIC8gNjtcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YVkgLyA2O1xuICAgIH1cblxuICAgIGlmIChlLmRlbHRhTW9kZSAmJiBlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgLy8gRmlyZWZveCBpbiBkZWx0YU1vZGUgMTogTGluZSBzY3JvbGxpbmdcbiAgICAgIGRlbHRhWCAqPSAxMDtcbiAgICAgIGRlbHRhWSAqPSAxMDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFYICE9PSBkZWx0YVggJiYgZGVsdGFZICE9PSBkZWx0YVkgLyogTmFOIGNoZWNrcyAqLykge1xuICAgICAgLy8gSUUgaW4gc29tZSBtb3VzZSBkcml2ZXJzXG4gICAgICBkZWx0YVggPSAwO1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhO1xuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAvLyByZXZlcnNlIGF4aXMgd2l0aCBzaGlmdCBrZXlcbiAgICAgIHJldHVybiBbLWRlbHRhWSwgLWRlbHRhWF07XG4gICAgfVxuICAgIHJldHVybiBbZGVsdGFYLCBkZWx0YVldO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQodGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIC8vIEZJWE1FOiB0aGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgPHNlbGVjdD4gaXNzdWUgaW4gRkYgYW5kIElFICM1NzFcbiAgICBpZiAoIWVudi5pc1dlYktpdCAmJiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdDpmb2N1cycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjdXJzb3IgPSB0YXJnZXQ7XG5cbiAgICB3aGlsZSAoY3Vyc29yICYmIGN1cnNvciAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmVsZW1lbnQuY29uc3VtaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gZ2V0KGN1cnNvcik7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBbc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZXS5qb2luKFxuICAgICAgICAnJ1xuICAgICAgKTtcblxuICAgICAgLy8gaWYgc2Nyb2xsYWJsZVxuICAgICAgaWYgKG92ZXJmbG93Lm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGN1cnNvci5zY3JvbGxIZWlnaHQgLSBjdXJzb3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZIDwgMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGN1cnNvci5zY3JvbGxXaWR0aCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNld2hlZWxIYW5kbGVyKGUpIHtcbiAgICB2YXIgcmVmID0gZ2V0RGVsdGFGcm9tRXZlbnQoZSk7XG4gICAgdmFyIGRlbHRhWCA9IHJlZlswXTtcbiAgICB2YXIgZGVsdGFZID0gcmVmWzFdO1xuXG4gICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGUudGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xuICAgIGlmICghaS5zZXR0aW5ncy51c2VCb3RoV2hlZWxBeGVzKSB7XG4gICAgICAvLyBkZWx0YVggd2lsbCBvbmx5IGJlIHVzZWQgZm9yIGhvcml6b250YWwgc2Nyb2xsaW5nIGFuZCBkZWx0YVkgd2lsbFxuICAgICAgLy8gb25seSBiZSB1c2VkIGZvciB2ZXJ0aWNhbCBzY3JvbGxpbmcgLSB0aGlzIGlzIHRoZSBkZWZhdWx0XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlICYmICFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgIC8vIG9ubHkgdmVydGljYWwgc2Nyb2xsYmFyIGlzIGFjdGl2ZSBhbmQgdXNlQm90aFdoZWVsQXhlcyBvcHRpb24gaXNcbiAgICAgIC8vIGFjdGl2ZSwgc28gbGV0J3Mgc2Nyb2xsIHZlcnRpY2FsIGJhciB1c2luZyBib3RoIG1vdXNlIHdoZWVsIGF4ZXNcbiAgICAgIGlmIChkZWx0YVkpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhclhBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgLy8gdXNlQm90aFdoZWVsQXhlcyBhbmQgb25seSBob3Jpem9udGFsIGJhciBpcyBhY3RpdmUsIHNvIHVzZSBib3RoXG4gICAgICAvLyB3aGVlbCBheGVzIGZvciBob3Jpem9udGFsIGJhclxuICAgICAgaWYgKGRlbHRhWCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgc2hvdWxkUHJldmVudCA9IHNob3VsZFByZXZlbnQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpO1xuICAgIGlmIChzaG91bGRQcmV2ZW50ICYmICFlLmN0cmxLZXkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cub253aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3doZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cub25tb3VzZXdoZWVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2V3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfVxufTtcblxudmFyIHRvdWNoID0gZnVuY3Rpb24oaSkge1xuICBpZiAoIWVudi5zdXBwb3J0c1RvdWNoICYmICFlbnYuc3VwcG9ydHNJZVBvaW50ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciBtYWduaXR1ZGVYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgICB2YXIgbWFnbml0dWRlWSA9IE1hdGguYWJzKGRlbHRhWSk7XG5cbiAgICBpZiAobWFnbml0dWRlWSA+IG1hZ25pdHVkZVgpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgdXAvZG93biB0aGUgcGFnZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChkZWx0YVkgPCAwICYmIHNjcm9sbFRvcCA9PT0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpIHx8XG4gICAgICAgIChkZWx0YVkgPiAwICYmIHNjcm9sbFRvcCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICAvLyBzZXQgcHJldmVudCBmb3IgbW9iaWxlIENocm9tZSByZWZyZXNoXG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSA9PT0gMCAmJiBkZWx0YVkgPiAwICYmIGVudi5pc0Nocm9tZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hZ25pdHVkZVggPiBtYWduaXR1ZGVZKSB7XG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIGxlZnQvcmlnaHQgYWNyb3NzIHRoZSBwYWdlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKGRlbHRhWCA8IDAgJiYgc2Nyb2xsTGVmdCA9PT0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKSB8fFxuICAgICAgICAoZGVsdGFYID4gMCAmJiBzY3JvbGxMZWZ0ID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGlmZmVyZW5jZVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRpZmZlcmVuY2VYO1xuXG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG4gIH1cblxuICB2YXIgc3RhcnRPZmZzZXQgPSB7fTtcbiAgdmFyIHN0YXJ0VGltZSA9IDA7XG4gIHZhciBzcGVlZCA9IHt9O1xuICB2YXIgZWFzaW5nTG9vcCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gZ2V0VG91Y2goZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1heWJlIElFIHBvaW50ZXJcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEhhbmRsZShlKSB7XG4gICAgaWYgKGUucG9pbnRlclR5cGUgJiYgZS5wb2ludGVyVHlwZSA9PT0gJ3BlbicgJiYgZS5idXR0b25zID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGUucG9pbnRlclR5cGUgJiZcbiAgICAgIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiZcbiAgICAgIGUucG9pbnRlclR5cGUgIT09IGUuTVNQT0lOVEVSX1RZUEVfTU9VU0VcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoIXNob3VsZEhhbmRsZShlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgc3RhcnRPZmZzZXQucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICBzdGFydE9mZnNldC5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xuXG4gICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoZWFzaW5nTG9vcCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZCh0YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yID0gdGFyZ2V0O1xuXG4gICAgd2hpbGUgKGN1cnNvciAmJiBjdXJzb3IgIT09IGVsZW1lbnQpIHtcbiAgICAgIGlmIChjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5lbGVtZW50LmNvbnN1bWluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IGdldChjdXJzb3IpO1xuICAgICAgdmFyIG92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV0uam9pbihcbiAgICAgICAgJydcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIHNjcm9sbGFibGVcbiAgICAgIGlmIChvdmVyZmxvdy5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA8IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsTGVmdCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNob3VsZEhhbmRsZShlKSkge1xuICAgICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XG5cbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0geyBwYWdlWDogdG91Y2gucGFnZVgsIHBhZ2VZOiB0b3VjaC5wYWdlWSB9O1xuXG4gICAgICB2YXIgZGlmZmVyZW5jZVggPSBjdXJyZW50T2Zmc2V0LnBhZ2VYIC0gc3RhcnRPZmZzZXQucGFnZVg7XG4gICAgICB2YXIgZGlmZmVyZW5jZVkgPSBjdXJyZW50T2Zmc2V0LnBhZ2VZIC0gc3RhcnRPZmZzZXQucGFnZVk7XG5cbiAgICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChlLnRhcmdldCwgZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSk7XG4gICAgICBzdGFydE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICB2YXIgdGltZUdhcCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgaWYgKHRpbWVHYXAgPiAwKSB7XG4gICAgICAgIHNwZWVkLnggPSBkaWZmZXJlbmNlWCAvIHRpbWVHYXA7XG4gICAgICAgIHNwZWVkLnkgPSBkaWZmZXJlbmNlWSAvIHRpbWVHYXA7XG4gICAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkUHJldmVudChkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG91Y2hFbmQoKSB7XG4gICAgaWYgKGkuc2V0dGluZ3Muc3dpcGVFYXNpbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICBlYXNpbmdMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3BlZWQueCAmJiAhc3BlZWQueSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkLngpIDwgMC4wMSAmJiBNYXRoLmFicyhzcGVlZC55KSA8IDAuMDEpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5VG91Y2hNb3ZlKHNwZWVkLnggKiAzMCwgc3BlZWQueSAqIDMwKTtcblxuICAgICAgICBzcGVlZC54ICo9IDAuODtcbiAgICAgICAgc3BlZWQueSAqPSAwLjg7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVudi5zdXBwb3J0c1RvdWNoKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydCk7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hlbmQnLCB0b3VjaEVuZCk7XG4gIH0gZWxzZSBpZiAoZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XG4gICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcmRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcm1vdmUnLCB0b3VjaE1vdmUpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVydXAnLCB0b3VjaEVuZCk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuTVNQb2ludGVyRXZlbnQpIHtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyRG93bicsIHRvdWNoU3RhcnQpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJNb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyVXAnLCB0b3VjaEVuZCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGVmYXVsdFNldHRpbmdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgaGFuZGxlcnM6IFsnY2xpY2stcmFpbCcsICdkcmFnLXRodW1iJywgJ2tleWJvYXJkJywgJ3doZWVsJywgJ3RvdWNoJ10sXG4gIG1heFNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBzY3JvbGxpbmdUaHJlc2hvbGQ6IDEwMDAsXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ6IDAsXG4gIHNjcm9sbFlNYXJnaW5PZmZzZXQ6IDAsXG4gIHN1cHByZXNzU2Nyb2xsWDogZmFsc2UsXG4gIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXG4gIHN3aXBlRWFzaW5nOiB0cnVlLFxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcbiAgd2hlZWxQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgd2hlZWxTcGVlZDogMSxcbn0pOyB9O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gICdjbGljay1yYWlsJzogY2xpY2tSYWlsLFxuICAnZHJhZy10aHVtYic6IGRyYWdUaHVtYixcbiAga2V5Ym9hcmQ6IGtleWJvYXJkLFxuICB3aGVlbDogd2hlZWwsXG4gIHRvdWNoOiB0b3VjaCxcbn07XG5cbnZhciBQZXJmZWN0U2Nyb2xsYmFyID0gZnVuY3Rpb24gUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB1c2VyU2V0dGluZ3MpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggdXNlclNldHRpbmdzID09PSB2b2lkIDAgKSB1c2VyU2V0dGluZ3MgPSB7fTtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgaXMgc3BlY2lmaWVkIHRvIGluaXRpYWxpemUgUGVyZmVjdFNjcm9sbGJhcicpO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLm1haW4pO1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3MoKTtcbiAgZm9yICh2YXIga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgIHRoaXMkMS5zZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcldpZHRoID0gbnVsbDtcbiAgdGhpcy5jb250YWluZXJIZWlnaHQgPSBudWxsO1xuICB0aGlzLmNvbnRlbnRXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGVudEhlaWdodCA9IG51bGw7XG5cbiAgdmFyIGZvY3VzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5mb2N1cyk7IH07XG4gIHZhciBibHVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5mb2N1cyk7IH07XG5cbiAgdGhpcy5pc1J0bCA9IGdldChlbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnO1xuICB0aGlzLmlzTmVnYXRpdmVTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcmlnaW5hbFNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTE7XG4gICAgcmVzdWx0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IDwgMDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBvcmlnaW5hbFNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSkoKTtcbiAgdGhpcy5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSB0aGlzLmlzTmVnYXRpdmVTY3JvbGxcbiAgICA/IGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoXG4gICAgOiAwO1xuICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50TWFuYWdlcigpO1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG5cbiAgdGhpcy5zY3JvbGxiYXJYUmFpbCA9IGRpdihjbHMuZWxlbWVudC5yYWlsKCd4JykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclggPSBkaXYoY2xzLmVsZW1lbnQudGh1bWIoJ3gnKSk7XG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJYKTtcbiAgdGhpcy5zY3JvbGxiYXJYLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2ZvY3VzJywgZm9jdXMpO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJYLCAnYmx1cicsIGJsdXIpO1xuICB0aGlzLnNjcm9sbGJhclhBY3RpdmUgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhXaWR0aCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWExlZnQgPSBudWxsO1xuICB2YXIgcmFpbFhTdHlsZSA9IGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYQm90dG9tID0gcGFyc2VJbnQocmFpbFhTdHlsZS5ib3R0b20sIDEwKTtcbiAgaWYgKGlzTmFOKHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSkpIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJYVG9wID0gdG9JbnQocmFpbFhTdHlsZS50b3ApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20gPSB0cnVlO1xuICB9XG4gIHRoaXMucmFpbEJvcmRlclhXaWR0aCA9XG4gICAgdG9JbnQocmFpbFhTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICsgdG9JbnQocmFpbFhTdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcbiAgLy8gU2V0IHJhaWwgdG8gZGlzcGxheTpibG9jayB0byBjYWxjdWxhdGUgbWFyZ2luc1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxYTWFyZ2luV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUubWFyZ2luTGVmdCkgKyB0b0ludChyYWlsWFN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHRoaXMucmFpbFhXaWR0aCA9IG51bGw7XG4gIHRoaXMucmFpbFhSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5zY3JvbGxiYXJZUmFpbCA9IGRpdihjbHMuZWxlbWVudC5yYWlsKCd5JykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclkgPSBkaXYoY2xzLmVsZW1lbnQudGh1bWIoJ3knKSk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJZKTtcbiAgdGhpcy5zY3JvbGxiYXJZLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2ZvY3VzJywgZm9jdXMpO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJZLCAnYmx1cicsIGJsdXIpO1xuICB0aGlzLnNjcm9sbGJhcllBY3RpdmUgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllIZWlnaHQgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllUb3AgPSBudWxsO1xuICB2YXIgcmFpbFlTdHlsZSA9IGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZUmlnaHQgPSBwYXJzZUludChyYWlsWVN0eWxlLnJpZ2h0LCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhcllSaWdodCkpIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbGJhcllMZWZ0ID0gdG9JbnQocmFpbFlTdHlsZS5sZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPSB0cnVlO1xuICB9XG4gIHRoaXMuc2Nyb2xsYmFyWU91dGVyV2lkdGggPSB0aGlzLmlzUnRsID8gb3V0ZXJXaWR0aCh0aGlzLnNjcm9sbGJhclkpIDogbnVsbDtcbiAgdGhpcy5yYWlsQm9yZGVyWVdpZHRoID1cbiAgICB0b0ludChyYWlsWVN0eWxlLmJvcmRlclRvcFdpZHRoKSArIHRvSW50KHJhaWxZU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxZTWFyZ2luSGVpZ2h0ID1cbiAgICB0b0ludChyYWlsWVN0eWxlLm1hcmdpblRvcCkgKyB0b0ludChyYWlsWVN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5yYWlsWVJhdGlvID0gbnVsbDtcblxuICB0aGlzLnJlYWNoID0ge1xuICAgIHg6XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbExlZnQgPj0gdGhpcy5jb250ZW50V2lkdGggLSB0aGlzLmNvbnRhaW5lcldpZHRoXG4gICAgICAgICAgPyAnZW5kJ1xuICAgICAgICAgIDogbnVsbCxcbiAgICB5OlxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbFRvcCA+PSB0aGlzLmNvbnRlbnRIZWlnaHQgLSB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgID8gJ2VuZCdcbiAgICAgICAgICA6IG51bGwsXG4gIH07XG5cbiAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcblxuICB0aGlzLnNldHRpbmdzLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXJOYW1lKSB7IHJldHVybiBoYW5kbGVyc1toYW5kbGVyTmFtZV0odGhpcyQxKTsgfSk7XG5cbiAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7IC8vIGZvciBvblNjcm9sbCBvbmx5XG4gIHRoaXMubGFzdFNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7IC8vIGZvciBvblNjcm9sbCBvbmx5XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLmVsZW1lbnQsICdzY3JvbGwnLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gdGhpcyQxLm9uU2Nyb2xsKGUpOyB9KTtcbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJlY2FsY3VhdGUgbmVnYXRpdmUgc2Nyb2xsTGVmdCBhZGp1c3RtZW50XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyB0aGlzLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICA6IDA7XG5cbiAgLy8gUmVjYWxjdWxhdGUgcmFpbCBtYXJnaW5zXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHRoaXMucmFpbFhNYXJnaW5XaWR0aCA9XG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpLm1hcmdpbkxlZnQpICtcbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCkubWFyZ2luUmlnaHQpO1xuICB0aGlzLnJhaWxZTWFyZ2luSGVpZ2h0ID1cbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCkubWFyZ2luVG9wKSArXG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpLm1hcmdpbkJvdHRvbSk7XG5cbiAgLy8gSGlkZSBzY3JvbGxiYXJzIG5vdCB0byBhZmZlY3Qgc2Nyb2xsV2lkdGggYW5kIHNjcm9sbEhlaWdodFxuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcblxuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcblxuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAndG9wJywgMCwgZmFsc2UsIHRydWUpO1xuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAnbGVmdCcsIDAsIGZhbHNlLCB0cnVlKTtcblxuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJycgfSk7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5vblNjcm9sbCA9IGZ1bmN0aW9uIG9uU2Nyb2xsIChlKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICd0b3AnLCB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wIC0gdGhpcy5sYXN0U2Nyb2xsVG9wKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYoXG4gICAgdGhpcyxcbiAgICAnbGVmdCcsXG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgLSB0aGlzLmxhc3RTY3JvbGxMZWZ0XG4gICk7XG5cbiAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gTWF0aC5mbG9vcih0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0O1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZXZlbnQudW5iaW5kQWxsKCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclgpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJZKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMucmVtb3ZlUHNDbGFzc2VzKCk7XG5cbiAgLy8gdW5zZXQgZWxlbWVudHNcbiAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYUmFpbCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBudWxsO1xuXG4gIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUucmVtb3ZlUHNDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlUHNDbGFzc2VzICgpIHtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWVcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFuYW1lLm1hdGNoKC9ecHMoWy1fXS4rfCkkLyk7IH0pXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmZlY3RTY3JvbGxiYXI7XG4iLCJpbXBvcnQgYm9keVNjcm9sbExvY2sgZnJvbSAnYm9keS1zY3JvbGwtbG9jayc7XG5pbXBvcnQgR2xpZGUgZnJvbSAnQGdsaWRlanMvZ2xpZGUnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuXG5jb25zdCBkaXNhYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmRpc2FibGVCb2R5U2Nyb2xsO1xuY29uc3QgZW5hYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmVuYWJsZUJvZHlTY3JvbGw7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpO1xuY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltZycpO1xuY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKTtcbmNvbnN0IG1vZGFsVGV4dEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fdGV4dC1ibG9jaycpO1xuY29uc3QgbW9kYWxWYWx1ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX192YWx1ZS10aXRsZScpO1xuY29uc3QgbW9kYWxWYWx1ZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlLWxpc3RfX2l0ZW0nKTtcbmNvbnN0IG1vZGFsQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hZGQtYmxvY2snKTtcbmNvbnN0IG1vZGFsQWRkTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYWRkLWxlZnQnKTtcblxuY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdHJpZ2dlcicpO1xuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxJbWcuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDIwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDIwMCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxUZXh0QmxvY2tzWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCA0MDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbFRleHRCbG9ja3NbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDYwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsVmFsdWVUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgODAwKTtcbiAgXG4gIG1vZGFsVmFsdWVJdGVtcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSwgODAwICsgaSAqIDEwMCk7XG4gIH0pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsQWRkLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCA2MDApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsQWRkTGVmdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgODAwKTtcblxuICBpZiAobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgIGRpc2FibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGVuYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHRvZ2dsZU1vZGFsKCk7XG4gIH1cbn1cblxudHJpZ2dlcnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVNb2RhbCgpO1xuICB9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKTtcblxuLy8gbmV3IEdsaWRlKCcuZ2xpZGUnLCB7XG4vLyAgIHBlclZpZXc6IDEwLFxuLy8gfSkubW91bnQoKTtcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLS10aXRsZScpO1xuY29uc3QgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihjb250YWluZXIpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFnLWxpc3RfX2xpbmsnKS5mb3JFYWNoKChlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBtb2RhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdCcpO1xuY29uc3QgdGFyZ2V0RWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbGlzdF9fY29udGVudCcpO1xuY29uc3QgdHJpZ2dlcnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWxpc3QtdHJpZ2dlcicpO1xuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbExpc3QoKSB7XG4gIG1vZGFsTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgaWYgKG1vZGFsTGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgZGlzYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudExpc3QpO1xuICB9IGVsc2Uge1xuICAgIGVuYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudExpc3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdpbmRvd09uQ2xpY2tMaXN0KGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsTGlzdCkge1xuICAgIHRvZ2dsZU1vZGFsTGlzdCgpO1xuICB9XG59XG5cbnRyaWdnZXJzTGlzdC5mb3JFYWNoKChlbCkgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZU1vZGFsTGlzdCgpO1xuICB9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrTGlzdCk7XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJ0aGlzIiwiZ2V0IiwidG9JbnQiLCJkaXNhYmxlQm9keVNjcm9sbCIsImJvZHlTY3JvbGxMb2NrIiwiZW5hYmxlQm9keVNjcm9sbCIsIm1vZGFsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0RWxlbWVudCIsIm1vZGFsSW1nIiwibW9kYWxUaXRsZSIsIm1vZGFsVGV4dEJsb2NrcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbFZhbHVlVGl0bGUiLCJtb2RhbFZhbHVlSXRlbXMiLCJtb2RhbEFkZCIsIm1vZGFsQWRkTGVmdCIsInRyaWdnZXJzIiwidG9nZ2xlTW9kYWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmb3JFYWNoIiwiZWwiLCJpIiwiY29udGFpbnMiLCJ3aW5kb3dPbkNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiY29udGFpbmVyIiwicHMiLCJQZXJmZWN0U2Nyb2xsYmFyIiwibW9kYWxMaXN0IiwidGFyZ2V0RWxlbWVudExpc3QiLCJ0cmlnZ2Vyc0xpc3QiLCJ0b2dnbGVNb2RhbExpc3QiLCJ3aW5kb3dPbkNsaWNrTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBT0EsU0FBTSxFQUFFQSxTQUFNLENBQUMsR0FBRyxDQUFDQSxTQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEFBQStCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxBQUFzQyxDQUFDLENBQUNDLGNBQUksQ0FBQyxTQUFTLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLGdIQUFnSCxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEdBQThHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztBQ0F4ekY7Ozs7OztBQU1BLElBQUksUUFBUSxHQUFHOzs7Ozs7Ozs7O0VBVWIsSUFBSSxFQUFFLFFBQVE7Ozs7Ozs7RUFPZCxPQUFPLEVBQUUsQ0FBQzs7Ozs7OztFQU9WLE9BQU8sRUFBRSxDQUFDOzs7Ozs7Ozs7OztFQVdWLE9BQU8sRUFBRSxDQUFDOzs7Ozs7O0VBT1YsR0FBRyxFQUFFLEVBQUU7Ozs7Ozs7RUFPUCxRQUFRLEVBQUUsS0FBSzs7Ozs7OztFQU9mLFVBQVUsRUFBRSxJQUFJOzs7Ozs7O0VBT2hCLFFBQVEsRUFBRSxJQUFJOzs7Ozs7Ozs7O0VBVWQsS0FBSyxFQUFFLEtBQUs7Ozs7Ozs7RUFPWixjQUFjLEVBQUUsRUFBRTs7Ozs7OztFQU9sQixhQUFhLEVBQUUsR0FBRzs7Ozs7OztFQU9sQixRQUFRLEVBQUUsS0FBSzs7Ozs7OztFQU9mLFVBQVUsRUFBRSxHQUFHOzs7Ozs7O0VBT2YsVUFBVSxFQUFFLEVBQUU7Ozs7Ozs7RUFPZCxpQkFBaUIsRUFBRSxHQUFHOzs7Ozs7O0VBT3RCLE1BQU0sRUFBRSxJQUFJOzs7Ozs7O0VBT1osY0FBYyxFQUFFLEdBQUc7Ozs7Ozs7RUFPbkIsbUJBQW1CLEVBQUUsbUNBQW1DOzs7Ozs7O0VBT3hELFFBQVEsRUFBRSxFQUFFOzs7Ozs7Ozs7OztFQVdaLFNBQVMsRUFBRSxLQUFLOzs7Ozs7Ozs7Ozs7OztFQWNoQixJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7RUFXUCxXQUFXLEVBQUUsRUFBRTs7Ozs7Ozs7RUFRZixPQUFPLEVBQUU7SUFDUCxTQUFTLEVBQUU7TUFDVCxHQUFHLEVBQUUsWUFBWTtNQUNqQixHQUFHLEVBQUUsWUFBWTtLQUNsQjtJQUNELE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsU0FBUyxFQUFFLGtCQUFrQjtJQUM3QixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQyxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLGFBQWEsRUFBRSx3QkFBd0I7R0FDeEM7Q0FDRixDQUFDOzs7Ozs7OztBQVFGLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRTtFQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ3ZDOztBQUVELElBQUksT0FBTyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFO0VBQ2pHLE9BQU8sT0FBTyxHQUFHLENBQUM7Q0FDbkIsR0FBRyxVQUFVLEdBQUcsRUFBRTtFQUNqQixPQUFPLEdBQUcsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxNQUFNLElBQUksR0FBRyxLQUFLLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDO0NBQzlILENBQUM7O0FBRUYsSUFBSSxjQUFjLEdBQUcsVUFBVSxRQUFRLEVBQUUsV0FBVyxFQUFFO0VBQ3BELElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUU7SUFDdEMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0dBQzFEO0NBQ0YsQ0FBQzs7QUFFRixJQUFJLFdBQVcsR0FBRyxZQUFZO0VBQzVCLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtJQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUNyQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUIsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQztNQUN2RCxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztNQUMvQixJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7TUFDdEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUMzRDtHQUNGOztFQUVELE9BQU8sVUFBVSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtJQUNyRCxJQUFJLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLElBQUksV0FBVyxFQUFFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxPQUFPLFdBQVcsQ0FBQztHQUNwQixDQUFDO0NBQ0gsRUFBRSxDQUFDOztBQUVKLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUU7RUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDekMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUUxQixLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtNQUN0QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUMzQjtLQUNGO0dBQ0Y7O0VBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZixDQUFDOztBQUVGLElBQUksR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0VBQ2pELElBQUksTUFBTSxLQUFLLElBQUksRUFBRSxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztFQUNqRCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztFQUU3RCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7SUFDdEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFFM0MsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO01BQ25CLE9BQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07TUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ3hDO0dBQ0YsTUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7SUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0dBQ25CLE1BQU07SUFDTCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOztJQUV0QixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7TUFDeEIsT0FBTyxTQUFTLENBQUM7S0FDbEI7O0lBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQzlCO0NBQ0YsQ0FBQzs7QUFFRixJQUFJLFFBQVEsR0FBRyxVQUFVLFFBQVEsRUFBRSxVQUFVLEVBQUU7RUFDN0MsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksRUFBRTtJQUMzRCxNQUFNLElBQUksU0FBUyxDQUFDLDBEQUEwRCxHQUFHLE9BQU8sVUFBVSxDQUFDLENBQUM7R0FDckc7O0VBRUQsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFO0lBQ3JFLFdBQVcsRUFBRTtNQUNYLEtBQUssRUFBRSxRQUFRO01BQ2YsVUFBVSxFQUFFLEtBQUs7TUFDakIsUUFBUSxFQUFFLElBQUk7TUFDZCxZQUFZLEVBQUUsSUFBSTtLQUNuQjtHQUNGLENBQUMsQ0FBQztFQUNILElBQUksVUFBVSxFQUFFLE1BQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7Q0FDdkgsQ0FBQzs7QUFFRixJQUFJLHlCQUF5QixHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRTtFQUNwRCxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ1QsTUFBTSxJQUFJLGNBQWMsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0dBQ3ZGOztFQUVELE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ3ZGLENBQUM7Ozs7Ozs7OztBQVNGLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRTtFQUNwQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN4Qjs7Ozs7Ozs7O0FBU0QsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0VBQ3RCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQzFCOzs7Ozs7OztBQVFELFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtFQUN2QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztDQUNsQzs7Ozs7Ozs7OztBQVVELFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtFQUN2QixJQUFJLElBQUksR0FBRyxPQUFPLEtBQUssS0FBSyxXQUFXLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7RUFFdkUsT0FBTyxJQUFJLEtBQUssVUFBVSxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUM1RDs7Ozs7Ozs7QUFRRCxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7RUFDdkIsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUM7Q0FDbEM7Ozs7Ozs7O0FBUUQsU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFO0VBQ3pCLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDO0NBQ3BDOzs7Ozs7OztBQVFELFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtFQUMxQixPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQztDQUNyQzs7Ozs7Ozs7QUFRRCxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7RUFDdEIsT0FBTyxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQztDQUNwQzs7Ozs7Ozs7Ozs7QUFXRCxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtFQUN4QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7O0VBRXBCLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxFQUFFO0lBQzNCLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO01BQ2hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNoRSxNQUFNO01BQ0wsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDdEM7R0FDRjs7RUFFRCxLQUFLLElBQUksS0FBSyxJQUFJLFVBQVUsRUFBRTtJQUM1QixJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDdkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzNCO0dBQ0Y7O0VBRUQsT0FBTyxVQUFVLENBQUM7Q0FDbkI7Ozs7Ozs7Ozs7QUFVRCxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtFQUNyQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDOUM7Ozs7Ozs7O0FBUUQsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFFO0VBQ3JCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQ3BELENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRWQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0dBQ2hCLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDUjs7Ozs7Ozs7O0FBU0QsU0FBUyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtFQUN4QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzs7Ozs7OztFQU8vQyxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDdEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztJQUVuRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQ2hELE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNsRztHQUNGOztFQUVELElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTtJQUMxQyxPQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7R0FDaEY7O0VBRUQsT0FBTyxPQUFPLENBQUM7Q0FDaEI7O0FBRUQsSUFBSSxTQUFTLEdBQUcsWUFBWTs7Ozs7O0VBTTFCLFNBQVMsU0FBUyxHQUFHO0lBQ25CLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwRixjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztJQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7R0FDbEM7Ozs7Ozs7Ozs7RUFVRCxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEIsR0FBRyxFQUFFLElBQUk7SUFDVCxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRTtNQUNqQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtVQUNyQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1QjtPQUNGOzs7TUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztPQUN6Qjs7O01BR0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7TUFHakQsT0FBTztRQUNMLE1BQU0sRUFBRSxTQUFTLE1BQU0sR0FBRztVQUN4QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7T0FDRixDQUFDO0tBQ0g7Ozs7Ozs7OztHQVNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsTUFBTTtJQUNYLEtBQUssRUFBRSxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO01BQ25DLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1VBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO09BQ0Y7OztNQUdELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLE9BQU87T0FDUjs7O01BR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUU7UUFDekMsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztPQUNyQixDQUFDLENBQUM7S0FDSjtHQUNGLENBQUMsQ0FBQyxDQUFDO0VBQ0osT0FBTyxTQUFTLENBQUM7Q0FDbEIsRUFBRSxDQUFDOztBQUVKLElBQUksS0FBSyxHQUFHLFlBQVk7Ozs7Ozs7RUFPdEIsU0FBUyxLQUFLLENBQUMsUUFBUSxFQUFFO0lBQ3ZCLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyRixjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUU1QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDOztJQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztHQUNwQzs7Ozs7Ozs7OztFQVVELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixHQUFHLEVBQUUsT0FBTztJQUNaLEtBQUssRUFBRSxTQUFTLFFBQVEsR0FBRztNQUN6QixJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O01BRXhGLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztNQUU3QixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUM1QyxNQUFNO1FBQ0wsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7T0FDbkQ7O01BRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O01BRTVCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7OztHQVNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsUUFBUTtJQUNiLEtBQUssRUFBRSxTQUFTLE1BQU0sR0FBRztNQUN2QixJQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7O01BRTFGLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDO09BQ3hCLE1BQU07UUFDTCxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztPQUNuRDs7TUFFRCxPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7Ozs7R0FTRixFQUFFO0lBQ0QsR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDdkIsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOztNQUV0RixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztNQUV0RCxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO09BQy9COztNQUVELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztNQUV2QixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7Ozs7Ozs7OztHQWNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsSUFBSTtJQUNULEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztNQUUxQixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7Ozs7R0FTRixFQUFFO0lBQ0QsR0FBRyxFQUFFLE1BQU07SUFDWCxLQUFLLEVBQUUsU0FBUyxJQUFJLENBQUMsUUFBUSxFQUFFO01BQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO01BQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7TUFFNUIsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7R0FRRixFQUFFO0lBQ0QsR0FBRyxFQUFFLFNBQVM7SUFDZCxLQUFLLEVBQUUsU0FBUyxPQUFPLEdBQUc7TUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O01BRXhCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7OztHQVNGLEVBQUU7SUFDRCxHQUFHLEVBQUUsTUFBTTtJQUNYLEtBQUssRUFBRSxTQUFTLElBQUksR0FBRztNQUNyQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O01BRXpGLElBQUksUUFBUSxFQUFFO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO09BQ25DOztNQUVELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztNQUVyQixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7OztHQVFGLEVBQUU7SUFDRCxHQUFHLEVBQUUsT0FBTztJQUNaLEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRztNQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7TUFFdEIsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7R0FRRixFQUFFO0lBQ0QsR0FBRyxFQUFFLFNBQVM7SUFDZCxLQUFLLEVBQUUsU0FBUyxPQUFPLEdBQUc7TUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O01BRXJCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7Ozs7O0dBUUYsRUFBRTtJQUNELEdBQUcsRUFBRSxRQUFRO0lBQ2IsS0FBSyxFQUFFLFNBQVMsTUFBTSxHQUFHO01BQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOztNQUV0QixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7Ozs7O0dBVUYsRUFBRTtJQUNELEdBQUcsRUFBRSxJQUFJO0lBQ1QsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7TUFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztNQUUzQixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7Ozs7R0FTRixFQUFFO0lBQ0QsR0FBRyxFQUFFLFFBQVE7SUFDYixLQUFLLEVBQUUsU0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFO01BQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0tBQ3BDOzs7Ozs7OztHQVFGLEVBQUU7SUFDRCxHQUFHLEVBQUUsVUFBVTtJQUNmLEdBQUcsRUFBRSxTQUFTLE1BQU0sR0FBRztNQUNyQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDaEI7Ozs7Ozs7OztJQVNELEdBQUcsRUFBRSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUU7TUFDdEIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztPQUNiLE1BQU07UUFDTCxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztPQUMvQztLQUNGOzs7Ozs7OztHQVFGLEVBQUU7SUFDRCxHQUFHLEVBQUUsT0FBTztJQUNaLEdBQUcsRUFBRSxTQUFTLE1BQU0sR0FBRztNQUNyQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDaEI7Ozs7Ozs7O0lBUUQsR0FBRyxFQUFFLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRTtNQUN0QixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjs7Ozs7Ozs7R0FRRixFQUFFO0lBQ0QsR0FBRyxFQUFFLE1BQU07SUFDWCxHQUFHLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUMzQjs7Ozs7Ozs7R0FRRixFQUFFO0lBQ0QsR0FBRyxFQUFFLFVBQVU7SUFDZixHQUFHLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDckIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7Ozs7OztJQVFELEdBQUcsRUFBRSxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUU7TUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQ3BCO0dBQ0YsQ0FBQyxDQUFDLENBQUM7RUFDSixPQUFPLEtBQUssQ0FBQztDQUNkLEVBQUUsQ0FBQzs7QUFFSixTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtFQUN2QyxJQUFJLEdBQUcsR0FBRzs7Ozs7O0lBTVIsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO01BQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0tBQ2pCOzs7Ozs7OztJQVFELElBQUksRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7TUFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOztNQUVqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBRWhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUVqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBRXJDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7UUFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUU5QixVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZO1VBQ3RDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDOztZQUVqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDdkM7O1VBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOztVQUVyQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEIsQ0FBQyxDQUFDO09BQ0o7S0FDRjs7Ozs7Ozs7SUFRRCxTQUFTLEVBQUUsU0FBUyxTQUFTLEdBQUc7TUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7VUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7VUFDbEIsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7OztNQUcvQixJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7TUFFbEUsUUFBUSxTQUFTO1FBQ2YsS0FBSyxHQUFHO1VBQ04sSUFBSSxLQUFLLEtBQUssR0FBRyxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1dBQ3RCLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2NBQ3ZELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDOztjQUVmLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2pCOztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1dBQzlCLE1BQU0sSUFBSSxjQUFjLEVBQUU7WUFDekIsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7V0FDOUQsTUFBTTtZQUNMLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUNmO1VBQ0QsTUFBTTs7UUFFUixLQUFLLEdBQUc7VUFDTixJQUFJLEtBQUssS0FBSyxHQUFHLEVBQUU7WUFDakIsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7V0FDakIsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN6QixJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Y0FDdkQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7O2NBRWYsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDdEI7O1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDaEMsTUFBTSxJQUFJLGNBQWMsRUFBRTtZQUN6QixLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztXQUNwRCxNQUFNO1lBQ0wsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1dBQ2Y7VUFDRCxNQUFNOztRQUVSLEtBQUssR0FBRztVQUNOLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1VBQ3BCLE1BQU07T0FDVDtLQUNGOzs7Ozs7OztJQVFELE9BQU8sRUFBRSxTQUFTLE9BQU8sR0FBRztNQUMxQixPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7Ozs7OztJQVFELEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRztNQUN0QixPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQzs7Ozs7Ozs7O0lBU0QsUUFBUSxFQUFFLFNBQVMsUUFBUSxDQUFDLFNBQVMsRUFBRTtNQUNyQyxPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDO0tBQ3JEO0dBQ0YsQ0FBQzs7RUFFRixNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRTs7Ozs7O0lBTWxCLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztNQUNsQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDaEI7Ozs7Ozs7O0lBUUQsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRTtNQUN2QixJQUFJLENBQUMsRUFBRSxHQUFHO1FBQ1IsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7T0FDN0MsQ0FBQztLQUNIO0dBQ0YsQ0FBQyxDQUFDOztFQUVILE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFOzs7Ozs7O0lBT3BCLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztNQUNsQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO01BQzlCLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O01BTTNDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQzdFLE9BQU8sTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDN0U7O01BRUQsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0dBQ0YsQ0FBQyxDQUFDOztFQUVILE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFOzs7Ozs7SUFNcEIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjtHQUNGLENBQUMsQ0FBQzs7RUFFSCxPQUFPLEdBQUcsQ0FBQztDQUNaOzs7Ozs7O0FBT0QsU0FBUyxHQUFHLEdBQUc7RUFDYixPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDN0I7Ozs7Ozs7Ozs7Ozs7QUFhRCxTQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtFQUNyQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7TUFDaEIsT0FBTyxHQUFHLEtBQUssQ0FBQztNQUNoQixJQUFJLEdBQUcsS0FBSyxDQUFDO01BQ2IsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3BCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFLENBQUM7O0VBRTNCLElBQUksS0FBSyxHQUFHLFNBQVMsS0FBSyxHQUFHO0lBQzNCLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDakQsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0dBQ3JDLENBQUM7O0VBRUYsSUFBSSxTQUFTLEdBQUcsU0FBUyxTQUFTLEdBQUc7SUFDbkMsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDMUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUN2QyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2YsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUNqQixJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksU0FBUyxHQUFHLElBQUksRUFBRTtNQUN0QyxJQUFJLE9BQU8sRUFBRTtRQUNYLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDO09BQ2hCO01BQ0QsUUFBUSxHQUFHLEVBQUUsQ0FBQztNQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3JDLE1BQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtNQUNqRCxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztLQUN4QztJQUNELE9BQU8sTUFBTSxDQUFDO0dBQ2YsQ0FBQzs7RUFFRixTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7SUFDN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDYixPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7R0FDakMsQ0FBQzs7RUFFRixPQUFPLFNBQVMsQ0FBQztDQUNsQjs7QUFFRCxJQUFJLFdBQVcsR0FBRztFQUNoQixHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO0VBQ2xDLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7Q0FDbkMsQ0FBQzs7QUFFRixTQUFTLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtFQUN4QyxJQUFJLElBQUksR0FBRzs7Ozs7Ozs7SUFRVCxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsTUFBTSxFQUFFO01BQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzs7UUFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQ1gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMxRCxNQUFNO1VBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN2Qzs7UUFFRCxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMzQixLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzFELE1BQU07VUFDTCxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3ZDO09BQ0Y7S0FDRjs7Ozs7Ozs7O0lBU0QsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRTtNQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O1FBRTVCLEtBQUssQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO09BQ3hCO0tBQ0Y7R0FDRixDQUFDOztFQUVGLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7Ozs7SUFNcEIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbEM7R0FDRixDQUFDLENBQUM7O0VBRUgsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7SUFPbkIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNuRDtHQUNGLENBQUMsQ0FBQzs7RUFFSCxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTs7Ozs7OztJQU92QixHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7TUFDbEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7O01BRXJDLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQzdDO0dBQ0YsQ0FBQyxDQUFDOzs7Ozs7O0VBT0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsRUFBRSxRQUFRLENBQUMsWUFBWTtJQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQzlDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0VBTVIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWTtJQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQy9DLENBQUMsQ0FBQzs7RUFFSCxPQUFPLElBQUksQ0FBQztDQUNiOzs7Ozs7OztBQVFELFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTtFQUN0QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0lBQzNCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ25DLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQzs7SUFFakIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUU7TUFDM0IsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDakI7S0FDRjs7SUFFRCxPQUFPLE9BQU8sQ0FBQztHQUNoQjs7RUFFRCxPQUFPLEVBQUUsQ0FBQztDQUNYOzs7Ozs7OztBQVFELFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRTtFQUNuQixJQUFJLElBQUksSUFBSSxJQUFJLFlBQVksTUFBTSxDQUFDLFdBQVcsRUFBRTtJQUM5QyxPQUFPLElBQUksQ0FBQztHQUNiOztFQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsSUFBSSxjQUFjLEdBQUcseUJBQXlCLENBQUM7O0FBRS9DLFNBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7RUFDaEMsSUFBSSxJQUFJLEdBQUc7Ozs7OztJQU1ULEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRztNQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7TUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztNQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssRUFBRTtRQUN0RixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDckUsQ0FBQyxDQUFDO0tBQ0o7R0FDRixDQUFDOztFQUVGLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFOzs7Ozs7SUFNbkIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7Ozs7Ozs7SUFRRCxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQ25CLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2YsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDL0I7O01BRUQsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztPQUNiLE1BQU07UUFDTCxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztPQUNuRDtLQUNGO0dBQ0YsQ0FBQyxDQUFDOztFQUVILE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7Ozs7SUFNcEIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7Ozs7Ozs7SUFRRCxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO01BQ25CLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7T0FDYixNQUFNO1FBQ0wsSUFBSSxDQUFDLDJDQUEyQyxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUMsQ0FBQztPQUNwRjtLQUNGO0dBQ0YsQ0FBQyxDQUFDOztFQUVILE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFOzs7Ozs7SUFNdEIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7R0FDRixDQUFDLENBQUM7O0VBRUgsT0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtFQUN4QyxJQUFJLElBQUksR0FBRzs7Ozs7O0lBTVQsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO01BQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDbEM7R0FDRixDQUFDOztFQUVGLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7Ozs7SUFNcEIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7Ozs7Ozs7O0lBU0QsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRTtNQUN2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ2xDLE1BQU07UUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3RCOztNQUVELElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0tBQ2pCO0dBQ0YsQ0FBQyxDQUFDOztFQUVILE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFOzs7Ozs7SUFNdkIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7TUFDdkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7O01BRXJDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7T0FDdkQ7O01BRUQsT0FBTyxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUM1QjtHQUNGLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxZQUFZO0lBQzFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztHQUNkLENBQUMsQ0FBQzs7RUFFSCxPQUFPLElBQUksQ0FBQztDQUNiOztBQUVELFNBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO0VBQ3hDLElBQUksSUFBSSxHQUFHOzs7Ozs7SUFNVCxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7TUFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDYjs7Ozs7Ozs7O0lBU0QsSUFBSSxFQUFFLFNBQVMsSUFBSSxHQUFHO01BQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7TUFFakIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztNQUVuRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7TUFFckIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDbEIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO09BQ3JCLENBQUMsQ0FBQzs7TUFFSCxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1VBQ3hCLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7S0FDSjtHQUNGLENBQUM7O0VBRUYsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7Ozs7OztJQU1yQixHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7TUFDbEIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7Ozs7OztJQVFELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUU7TUFDdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xEO0dBQ0YsQ0FBQyxDQUFDOztFQUVILE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFOzs7Ozs7SUFNeEIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztLQUNsRDtHQUNGLENBQUMsQ0FBQzs7RUFFSCxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTs7Ozs7O0lBTXBCLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztNQUNsQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO01BQ3pCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7O01BRS9CLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbEMsT0FBTyxTQUFTLEdBQUcsTUFBTSxDQUFDO09BQzNCOztNQUVELE9BQU8sU0FBUyxHQUFHLE1BQU0sQ0FBQztLQUMzQjtHQUNGLENBQUMsQ0FBQzs7Ozs7OztFQU9ILE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsWUFBWTtJQUM3QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7R0FDYixDQUFDLENBQUM7O0VBRUgsT0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtFQUN6QyxJQUFJLEtBQUssR0FBRzs7Ozs7O0lBTVYsV0FBVyxFQUFFLFNBQVMsV0FBVyxHQUFHO01BQ2xDLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztNQUVwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztPQUNoRDtLQUNGOzs7Ozs7OztJQVFELFlBQVksRUFBRSxTQUFTLFlBQVksQ0FBQyxTQUFTLEVBQUU7TUFDN0MsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUMvRDs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDeEIsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O01BRXBDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztPQUM1Qjs7TUFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUMxQztHQUNGLENBQUM7O0VBRUYsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7Ozs7OztJQU10QixHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7TUFDbEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDdEM7R0FDRixDQUFDLENBQUM7O0VBRUgsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUU7Ozs7OztJQU1yQixHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7TUFDbEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekM7R0FDRixDQUFDLENBQUM7O0VBRUgsTUFBTSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUU7Ozs7OztJQU0zQixHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7TUFDbEIsT0FBTyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDeEY7R0FDRixDQUFDLENBQUM7O0VBRUgsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUU7Ozs7OztJQU0xQixHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7TUFDbEIsT0FBTyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ25HO0dBQ0YsQ0FBQyxDQUFDOzs7Ozs7OztFQVFILE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLFlBQVk7SUFDMUQsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztHQUN0QixDQUFDLENBQUM7Ozs7OztFQU1ILE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVk7SUFDL0IsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2hCLENBQUMsQ0FBQzs7RUFFSCxPQUFPLEtBQUssQ0FBQztDQUNkOztBQUVELFNBQVMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO0VBQ3pDLElBQUksS0FBSyxHQUFHOzs7Ozs7O0lBT1YsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO01BQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O01BRTVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztNQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O01BRW5CLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDNUI7Ozs7Ozs7O0lBUUQsU0FBUyxFQUFFLFNBQVMsU0FBUyxHQUFHO01BQzlCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2pGOzs7Ozs7OztJQVFELFdBQVcsRUFBRSxTQUFTLFdBQVcsR0FBRztNQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztNQUNyQyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7O01BRWhELElBQUksS0FBSyxFQUFFO1FBQ1QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztRQUV6QyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO1VBQ3pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQyxDQUFDLENBQUM7T0FDSjtLQUNGOzs7Ozs7OztJQVFELGFBQWEsRUFBRSxTQUFTLGFBQWEsR0FBRztNQUN0QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7TUFFckMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztNQUVwRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7UUFDaEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQy9DLENBQUMsQ0FBQztLQUNKO0dBQ0YsQ0FBQzs7Ozs7OztFQU9GLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsWUFBWTtJQUMzQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7R0FDdkIsQ0FBQyxDQUFDOzs7Ozs7O0VBT0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxZQUFZO0lBQzFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztHQUNmLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWTtJQUNsQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7R0FDckIsQ0FBQyxDQUFDOztFQUVILE9BQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7RUFDMUMsSUFBSSxNQUFNLEdBQUc7Ozs7SUFJWCxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7TUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7O01BRWhCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztPQUM3QjtLQUNGOzs7Ozs7OztJQVFELE9BQU8sRUFBRSxTQUFTLE9BQU8sR0FBRztNQUMxQixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7TUFDbkYsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDcEMsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLFFBQVE7VUFDaEMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPO1VBQ2pDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDOzs7TUFHdEMsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7TUFDN0MsSUFBSSxJQUFJLEdBQUcsT0FBTyxHQUFHLGVBQWUsQ0FBQztNQUNyQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztNQUNsQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7O01BRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtVQUNyQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOztVQUVyQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7O1VBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7O1FBRUQsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7VUFDdEMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7VUFFckMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztVQUV6QyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO09BQ0Y7O01BRUQsT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUN2QixJQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxJQUFJO1VBQ2xDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPO1VBQ2xDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7OztNQUdyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7TUFDeEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7TUFDN0MsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztNQUU3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hDOztNQUVELEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzdDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQy9DOztNQUVELEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztPQUM3RDtLQUNGOzs7Ozs7OztJQVFELE1BQU0sRUFBRSxTQUFTLE1BQU0sR0FBRztNQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOzs7TUFHdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQy9DO0tBQ0Y7R0FDRixDQUFDOztFQUVGLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFOzs7Ozs7SUFNckIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztLQUNwRjtHQUNGLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBWTtJQUM5QixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2pCLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBWTtJQUNwQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2pCO0dBQ0YsQ0FBQyxDQUFDOzs7Ozs7RUFNSCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNqQixDQUFDLENBQUM7O0VBRUgsT0FBTyxNQUFNLENBQUM7Q0FDZjs7QUFFRCxJQUFJLFlBQVksR0FBRyxZQUFZOzs7O0VBSTdCLFNBQVMsWUFBWSxHQUFHO0lBQ3RCLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN2RixjQUFjLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDOztJQUVuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztHQUM1Qjs7Ozs7Ozs7Ozs7OztFQWFELFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixHQUFHLEVBQUUsSUFBSTtJQUNULEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRTtNQUN0QyxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O01BRXhGLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQ25COztNQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDOztRQUVwQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDcEU7S0FDRjs7Ozs7Ozs7OztHQVVGLEVBQUU7SUFDRCxHQUFHLEVBQUUsS0FBSztJQUNWLEtBQUssRUFBRSxTQUFTLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFO01BQzlCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQ25COztNQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztPQUNyRTtLQUNGOzs7Ozs7OztHQVFGLEVBQUU7SUFDRCxHQUFHLEVBQUUsU0FBUztJQUNkLEtBQUssRUFBRSxTQUFTLE9BQU8sR0FBRztNQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7R0FDRixDQUFDLENBQUMsQ0FBQztFQUNKLE9BQU8sWUFBWSxDQUFDO0NBQ3JCLEVBQUUsQ0FBQzs7QUFFSixTQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7O0VBTTFDLElBQUksTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O0VBRWhDLElBQUksTUFBTSxHQUFHOzs7O0lBSVgsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO01BQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNiOzs7Ozs7Ozs7SUFTRCxJQUFJLEVBQUUsU0FBUyxJQUFJLEdBQUc7TUFDcEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxZQUFZO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDdkIsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDOUI7Ozs7Ozs7O0lBUUQsTUFBTSxFQUFFLFNBQVMsTUFBTSxHQUFHO01BQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzlCO0dBQ0YsQ0FBQzs7Ozs7O0VBTUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWTtJQUMvQixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQ2xCLENBQUMsQ0FBQzs7RUFFSCxPQUFPLE1BQU0sQ0FBQztDQUNmOztBQUVELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEMsSUFBSSxnQkFBZ0IsR0FBRztFQUNyQixHQUFHLEVBQUUsR0FBRztFQUNSLEdBQUcsRUFBRSxHQUFHO0VBQ1IsR0FBRyxFQUFFLEdBQUc7Q0FDVCxDQUFDOztBQUVGLFNBQVMsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO0VBQzdDLElBQUksU0FBUyxHQUFHOzs7Ozs7SUFNZCxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7TUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztLQUN2Qzs7Ozs7Ozs7O0lBU0QsT0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRTtNQUNqQyxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7TUFFaEMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztPQUMzRDs7TUFFRCxPQUFPLE9BQU8sQ0FBQztLQUNoQjs7Ozs7Ozs7O0lBU0QsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRTtNQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDO0tBQ2pDOzs7Ozs7OztJQVFELFFBQVEsRUFBRSxTQUFTLFFBQVEsR0FBRztNQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNsRjs7Ozs7Ozs7SUFRRCxXQUFXLEVBQUUsU0FBUyxXQUFXLEdBQUc7TUFDbEMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDckY7R0FDRixDQUFDOztFQUVGLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFOzs7Ozs7SUFNekIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sU0FBUyxDQUFDLEVBQUUsQ0FBQztLQUNyQjs7Ozs7Ozs7O0lBU0QsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRTtNQUN2QixJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN4QyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztPQUN0QixNQUFNO1FBQ0wsSUFBSSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7T0FDaEQ7S0FDRjtHQUNGLENBQUMsQ0FBQzs7Ozs7OztFQU9ILE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsWUFBWTtJQUMzQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7R0FDekIsQ0FBQyxDQUFDOzs7Ozs7RUFNSCxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZO0lBQzlCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztHQUNuQixDQUFDLENBQUM7Ozs7Ozs7RUFPSCxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFlBQVk7SUFDaEQsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0dBQ3RCLENBQUMsQ0FBQzs7RUFFSCxPQUFPLFNBQVMsQ0FBQztDQUNsQjs7Ozs7Ozs7O0FBU0QsU0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtFQUMvQixPQUFPOzs7Ozs7O0lBT0wsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBRTtNQUNqQyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUM7T0FDbkI7O01BRUQsT0FBTyxTQUFTLENBQUM7S0FDbEI7R0FDRixDQUFDO0NBQ0g7Ozs7Ozs7OztBQVNELFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7RUFDL0IsT0FBTzs7Ozs7OztJQU9MLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUU7TUFDakMsT0FBTyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztLQUN4RDtHQUNGLENBQUM7Q0FDSDs7Ozs7Ozs7O0FBU0QsU0FBUyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtFQUNoQyxPQUFPOzs7Ozs7O0lBT0wsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLFNBQVMsRUFBRTtNQUNqQyxPQUFPLFNBQVMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7S0FDL0M7R0FDRixDQUFDO0NBQ0g7Ozs7Ozs7OztBQVNELFNBQVMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7RUFDbkMsT0FBTzs7Ozs7OztJQU9MLE1BQU0sRUFBRSxTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUU7TUFDakMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7UUFDL0IsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7O1FBRWpDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1VBQ2xCLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDaEM7O1FBRUQsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDO09BQ3pCOztNQUVELE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0dBQ0YsQ0FBQztDQUNIOzs7Ozs7Ozs7QUFTRCxTQUFTLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0VBQ3BDLE9BQU87Ozs7Ozs7SUFPTCxNQUFNLEVBQUUsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFFO01BQ2pDLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO01BQ2hDLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQ25DLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO01BQ3JDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDOztNQUU3QyxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7UUFDeEIsT0FBTyxTQUFTLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDakQ7O01BRUQsT0FBTyxTQUFTLEdBQUcsVUFBVSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO0tBQ3pEO0dBQ0YsQ0FBQztDQUNIOzs7Ozs7Ozs7QUFTRCxTQUFTLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7Ozs7RUFRM0MsSUFBSSxZQUFZLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRTFFLE9BQU87Ozs7Ozs7SUFPTCxNQUFNLEVBQUUsU0FBUyxNQUFNLENBQUMsU0FBUyxFQUFFO01BQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVDLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFFbEMsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1VBQy9ELFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEUsTUFBTTtVQUNMLElBQUksQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1NBQ3hGO09BQ0Y7O01BRUQsT0FBTyxTQUFTLENBQUM7S0FDbEI7R0FDRixDQUFDO0NBQ0g7O0FBRUQsU0FBUyxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7RUFDN0MsSUFBSSxTQUFTLEdBQUc7Ozs7Ozs7SUFPZCxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFO01BQ3ZCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOztNQUV6RCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsZUFBZSxDQUFDO0tBQzdGOzs7Ozs7OztJQVFELE1BQU0sRUFBRSxTQUFTLE1BQU0sR0FBRztNQUN4QixVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUM5QztHQUNGLENBQUM7Ozs7Ozs7RUFPRixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLE9BQU8sRUFBRTtJQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNoQyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7SUFFeEMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQzVELFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVk7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztRQUU5QixTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNyQyxDQUFDLENBQUM7O01BRUgsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUM3Qzs7SUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDNUQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWTtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O1FBRTlCLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDbEIsQ0FBQyxDQUFDOztNQUVILE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUNyRDs7SUFFRCxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQ3hDLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWTtJQUMvQixTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDcEIsQ0FBQyxDQUFDOztFQUVILE9BQU8sU0FBUyxDQUFDO0NBQ2xCOztBQUVELFNBQVMsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7O0VBTzlDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQzs7RUFFckIsSUFBSSxVQUFVLEdBQUc7Ozs7Ozs7SUFPZixPQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsUUFBUSxFQUFFO01BQ2xDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7O01BRTlCLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixPQUFPLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDO09BQzlFOztNQUVELE9BQU8sUUFBUSxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUM7S0FDMUQ7Ozs7Ozs7OztJQVNELEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztNQUNsQixJQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7O01BRS9GLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNuRTs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDeEIsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDL0M7Ozs7Ozs7OztJQVNELEtBQUssRUFBRSxTQUFTLEtBQUssQ0FBQyxRQUFRLEVBQUU7TUFDOUIsVUFBVSxDQUFDLFlBQVk7UUFDckIsUUFBUSxFQUFFLENBQUM7T0FDWixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNuQjs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDeEIsUUFBUSxHQUFHLEtBQUssQ0FBQzs7TUFFakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ1o7Ozs7Ozs7O0lBUUQsT0FBTyxFQUFFLFNBQVMsT0FBTyxHQUFHO01BQzFCLFFBQVEsR0FBRyxJQUFJLENBQUM7O01BRWhCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNaO0dBQ0YsQ0FBQzs7RUFFRixNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRTs7Ozs7OztJQU83QixHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7TUFDbEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7TUFFOUIsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1FBQ25ELE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQztPQUNoQzs7TUFFRCxPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztLQUNuQztHQUNGLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWTtJQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7R0FDbEIsQ0FBQyxDQUFDOzs7Ozs7OztFQVFILE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsWUFBWTtJQUNsRSxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDdEIsQ0FBQyxDQUFDOzs7Ozs7RUFNSCxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxZQUFZO0lBQzNCLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUNyQixDQUFDLENBQUM7Ozs7OztFQU1ILE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVk7SUFDL0IsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ3JCLENBQUMsQ0FBQzs7RUFFSCxPQUFPLFVBQVUsQ0FBQztDQUNuQjs7Ozs7Ozs7O0FBU0QsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDOztBQUU1QixJQUFJO0VBQ0YsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO0lBQzlDLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztNQUNsQixlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3hCO0dBQ0YsQ0FBQyxDQUFDOztFQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ25ELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ3ZELENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTs7QUFFZCxJQUFJLGlCQUFpQixHQUFHLGVBQWUsQ0FBQzs7QUFFeEMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDL0MsSUFBSSxXQUFXLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDN0MsSUFBSSxVQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN0RSxJQUFJLFlBQVksR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDOztBQUV2RSxTQUFTLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7O0VBTXpDLElBQUksTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7O0VBRWhDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7RUFDcEIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztFQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7RUFDcEIsSUFBSSxPQUFPLEdBQUcsaUJBQWlCLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDOztFQUU1RCxJQUFJLEtBQUssR0FBRzs7Ozs7O0lBTVYsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO01BQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7Ozs7O0lBU0QsS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRTtNQUMzQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBRWYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFFaEMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUVqQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztRQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO09BQzVCO0tBQ0Y7Ozs7Ozs7O0lBUUQsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtNQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUNuQixJQUFJLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUTtZQUNoQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVU7WUFDdkMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxVQUFVO1lBQ3ZDLE9BQU8sR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDOzs7UUFHdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFFaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDL0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFFckMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxDQUFDOztRQUV0RCxJQUFJLFFBQVEsSUFBSSxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxFQUFFO1VBQ3JELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7VUFFeEIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOztVQUVwRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7VUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQixNQUFNO1VBQ0wsUUFBUSxHQUFHLEtBQUssQ0FBQzs7VUFFakIsT0FBTyxLQUFLLENBQUM7U0FDZDtPQUNGO0tBQ0Y7Ozs7Ozs7OztJQVNELEdBQUcsRUFBRSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUU7TUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDbkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7UUFFOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUV0QyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUM5QyxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFFcEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztRQUVkLElBQUksUUFBUSxFQUFFO1VBQ1osSUFBSSxhQUFhLEdBQUcsU0FBUyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFOztZQUUvRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Y0FDckIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNuRDs7WUFFRCxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO2NBQ2xDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQzthQUNoQjs7WUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztXQUNoRSxNQUFNLElBQUksYUFBYSxHQUFHLENBQUMsU0FBUyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFOztZQUV2RSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Y0FDckIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3BEOztZQUVELElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7Y0FDbEMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ2hCOztZQUVELFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1dBQ2hFLE1BQU07O1lBRUwsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztXQUN4QjtTQUNGOztRQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFFakUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUMxQjtLQUNGOzs7Ozs7OztJQVFELGNBQWMsRUFBRSxTQUFTLGNBQWMsR0FBRztNQUN4QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7O01BRWpCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7O01BRTlCLElBQUksUUFBUSxDQUFDLGNBQWMsRUFBRTtRQUMzQixNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQUssRUFBRTtVQUNuRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDYjs7TUFFRCxJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUU7UUFDMUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUU7VUFDbkUsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQixFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2I7S0FDRjs7Ozs7Ozs7SUFRRCxnQkFBZ0IsRUFBRSxTQUFTLGdCQUFnQixHQUFHO01BQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN0RDs7Ozs7Ozs7SUFRRCxhQUFhLEVBQUUsU0FBUyxhQUFhLEdBQUc7TUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDOztNQUVsQixNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFBVSxLQUFLLEVBQUU7UUFDeEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUNwQixFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdkM7Ozs7Ozs7O0lBUUQsZUFBZSxFQUFFLFNBQVMsZUFBZSxHQUFHO01BQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEQ7Ozs7Ozs7O0lBUUQsWUFBWSxFQUFFLFNBQVMsWUFBWSxHQUFHO01BQ3BDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQzs7TUFFbEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUU7UUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUNuQixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7SUFRRCxjQUFjLEVBQUUsU0FBUyxjQUFjLEdBQUc7TUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqRDs7Ozs7Ozs7SUFRRCxPQUFPLEVBQUUsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFO01BQy9CLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDekMsT0FBTyxLQUFLLENBQUM7T0FDZDs7TUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwRDs7Ozs7Ozs7SUFRRCxTQUFTLEVBQUUsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO01BQ25DLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7O01BRTlCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDekMsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDO09BQy9COztNQUVELE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQztLQUNoQzs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDeEIsUUFBUSxHQUFHLEtBQUssQ0FBQzs7TUFFakIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7TUFFL0IsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7SUFRRCxPQUFPLEVBQUUsU0FBUyxPQUFPLEdBQUc7TUFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQzs7TUFFaEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7TUFFaEMsT0FBTyxJQUFJLENBQUM7S0FDYjtHQUNGLENBQUM7Ozs7OztFQU1GLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVk7SUFDbkMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUN0RSxDQUFDLENBQUM7Ozs7OztFQU1ILE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVk7SUFDL0IsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDbEIsQ0FBQyxDQUFDOztFQUVILE9BQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7OztFQU0xQyxJQUFJLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztFQUVoQyxJQUFJLE1BQU0sR0FBRzs7Ozs7O0lBTVgsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO01BQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNiOzs7Ozs7OztJQVFELElBQUksRUFBRSxTQUFTLElBQUksR0FBRztNQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDakU7Ozs7Ozs7O0lBUUQsTUFBTSxFQUFFLFNBQVMsTUFBTSxHQUFHO01BQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEQ7Ozs7Ozs7O0lBUUQsU0FBUyxFQUFFLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtNQUNuQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDeEI7R0FDRixDQUFDOzs7Ozs7RUFNRixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDbEIsQ0FBQyxDQUFDOztFQUVILE9BQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRUQsU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7OztFQU0zQyxJQUFJLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7Ozs7Ozs7RUFTaEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7RUFTckIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDOztFQUV0QixJQUFJLE9BQU8sR0FBRzs7Ozs7O0lBTVosS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHOzs7Ozs7O01BT3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7O01BRXhELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNiOzs7Ozs7OztJQVFELElBQUksRUFBRSxTQUFTLElBQUksR0FBRztNQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekQ7Ozs7Ozs7O0lBUUQsTUFBTSxFQUFFLFNBQVMsTUFBTSxHQUFHO01BQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDOUM7Ozs7Ozs7OztJQVNELEtBQUssRUFBRSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUU7TUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOztNQUV4QixJQUFJLFNBQVMsRUFBRTtRQUNiLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztPQUN4QjtLQUNGOzs7Ozs7OztJQVFELE1BQU0sRUFBRSxTQUFTLE1BQU0sR0FBRztNQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDOztNQUVqQixJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1VBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7VUFFaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1VBRTVFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDOztRQUVELFFBQVEsR0FBRyxJQUFJLENBQUM7T0FDakI7O01BRUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7Ozs7SUFRRCxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7TUFDeEIsU0FBUyxHQUFHLEtBQUssQ0FBQzs7TUFFbEIsSUFBSSxRQUFRLEVBQUU7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7VUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztVQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUM3RTs7UUFFRCxRQUFRLEdBQUcsS0FBSyxDQUFDO09BQ2xCOztNQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2I7R0FDRixDQUFDOztFQUVGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFOzs7Ozs7SUFNdkIsR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO01BQ2xCLE9BQU8sT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNuQjtHQUNGLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWTtJQUNsQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDbEIsQ0FBQyxDQUFDOzs7Ozs7RUFNSCxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZO0lBQ2pDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVk7TUFDdEMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2xCLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQzs7Ozs7O0VBTUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWTtJQUMvQixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztHQUNsQixDQUFDLENBQUM7O0VBRUgsT0FBTyxPQUFPLENBQUM7Q0FDaEI7O0FBRUQsSUFBSSxZQUFZLEdBQUcsaUNBQWlDLENBQUM7QUFDckQsSUFBSSxpQkFBaUIsR0FBRyw2QkFBNkIsQ0FBQzs7QUFFdEQsU0FBUyxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7OztFQU01QyxJQUFJLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztFQUVoQyxJQUFJLFFBQVEsR0FBRzs7Ozs7OztJQU9iLEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRzs7Ozs7OztNQU90QixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDOzs7Ozs7OztNQVE5RCxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUM7O01BRW5FLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7Ozs7SUFRRCxTQUFTLEVBQUUsU0FBUyxTQUFTLEdBQUc7TUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNwQztLQUNGOzs7Ozs7OztJQVFELFlBQVksRUFBRSxTQUFTLFlBQVksR0FBRztNQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQ3ZDO0tBQ0Y7Ozs7Ozs7OztJQVNELFFBQVEsRUFBRSxTQUFTLFFBQVEsQ0FBQyxRQUFRLEVBQUU7TUFDcEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztNQUM5QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztNQUVqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztNQUUvQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO1FBQ3hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDdEQsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7OztJQVNELFdBQVcsRUFBRSxTQUFTLFdBQVcsQ0FBQyxRQUFRLEVBQUU7TUFDMUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFFOzs7Ozs7OztJQVFELFdBQVcsRUFBRSxTQUFTLFdBQVcsR0FBRztNQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQ2hDO0tBQ0Y7Ozs7Ozs7O0lBUUQsY0FBYyxFQUFFLFNBQVMsY0FBYyxHQUFHO01BQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDbEM7S0FDRjs7Ozs7Ozs7O0lBU0QsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRTtNQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDN0Q7S0FDRjs7Ozs7Ozs7O0lBU0QsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLFFBQVEsRUFBRTtNQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2xEO0tBQ0Y7Ozs7Ozs7Ozs7O0lBV0QsS0FB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QyxFQUFELEVBQVE7S0FDeERNLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUNDLENBQUQsRUFBTztNQUNoQ0MsY0FBRjtHQURGO0NBREY7O0FBTUEsSUFBTUssWUFBWTdCLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxJQUFNNkIsb0JBQW9COUIsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBMUI7QUFDQSxJQUFNOEIsZUFBZS9CLFNBQVNNLGdCQUFULENBQTBCLHFCQUExQixDQUFyQjs7QUFFQSxTQUFTMEIsZUFBVCxHQUEyQjtZQUNmbkIsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsV0FBM0I7TUFDSWUsVUFBVWhCLFNBQVYsQ0FBb0JLLFFBQXBCLENBQTZCLFdBQTdCLENBQUosRUFBK0M7c0JBQzNCWSxpQkFBbEI7R0FERixNQUVPO3FCQUNZQSxpQkFBakI7Ozs7QUFJSixTQUFTRyxpQkFBVCxDQUEyQmIsS0FBM0IsRUFBa0M7TUFDNUJBLE1BQU1DLE1BQU4sS0FBaUJRLFNBQXJCLEVBQWdDOzs7OztBQUtsQ0UsYUFBYWhCLE9BQWIsQ0FBcUIsVUFBQ0MsRUFBRCxFQUFRO0tBQ3hCTSxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFDQyxDQUFELEVBQU87TUFDaENDLGNBQUY7O0dBREY7Q0FERjs7QUFPQUMsT0FBT0gsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNXLGlCQUFqQzs7OzsiLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpwdWRXeHNMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTloY25SbGJXdGhiRzlsZGk5WFpXSkRiMlJwYm1jdmRHVnpkQzF3Y205cVpXTjBMMjV2WkdWZmJXOWtkV3hsY3k5aWIyUjVMWE5qY205c2JDMXNiMk5yTDJ4cFlpOWliMlI1VTJOeWIyeHNURzlqYXk1dGFXNHVhbk1pTENJdlZYTmxjbk12WVhKMFpXMXJZV3h2WlhZdlYyVmlRMjlrYVc1bkwzUmxjM1F0Y0hKdmFtVmpkQzl1YjJSbFgyMXZaSFZzWlhNdlFHZHNhV1JsYW5NdloyeHBaR1V2WkdsemRDOW5iR2xrWlM1bGMyMHVhbk1pTENJdlZYTmxjbk12WVhKMFpXMXJZV3h2WlhZdlYyVmlRMjlrYVc1bkwzUmxjM1F0Y0hKdmFtVmpkQzl1YjJSbFgyMXZaSFZzWlhNdmNHVnlabVZqZEMxelkzSnZiR3hpWVhJdlpHbHpkQzl3WlhKbVpXTjBMWE5qY205c2JHSmhjaTVsYzIwdWFuTWlMQ0l2VlhObGNuTXZZWEowWlcxcllXeHZaWFl2VjJWaVEyOWthVzVuTDNSbGMzUXRjSEp2YW1WamRDOXpjbU12YzJOeWFYQjBjeTl0WVdsdUxtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlGbWRXNWpkR2x2YmlobExIUXBlMmxtS0Z3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlHUmxabWx1WlNZbVpHVm1hVzVsTG1GdFpDbGtaV1pwYm1Vb1cxd2laWGh3YjNKMGMxd2lYU3gwS1R0bGJITmxJR2xtS0Z3aWRXNWtaV1pwYm1Wa1hDSWhQWFI1Y0dWdlppQmxlSEJ2Y25SektYUW9aWGh3YjNKMGN5azdaV3h6Wlh0MllYSWdiejE3ZlR0MEtHOHBMR1V1WW05a2VWTmpjbTlzYkV4dlkyczliMzE5S0hSb2FYTXNablZ1WTNScGIyNG9aWGh3YjNKMGN5bDdYQ0oxYzJVZ2MzUnlhV04wWENJN1puVnVZM1JwYjI0Z2NpaGxLWHRwWmloQmNuSmhlUzVwYzBGeWNtRjVLR1VwS1h0bWIzSW9kbUZ5SUhROU1DeHZQVUZ5Y21GNUtHVXViR1Z1WjNSb0tUdDBQR1V1YkdWdVozUm9PM1FyS3lsdlczUmRQV1ZiZEYwN2NtVjBkWEp1SUc5OWNtVjBkWEp1SUVGeWNtRjVMbVp5YjIwb1pTbDlUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zWENKZlgyVnpUVzlrZFd4bFhDSXNlM1poYkhWbE9pRXdmU2s3ZG1GeUlHdzlJVEU3YVdZb1hDSjFibVJsWm1sdVpXUmNJaUU5ZEhsd1pXOW1JSGRwYm1SdmR5bDdkbUZ5SUdVOWUyZGxkQ0J3WVhOemFYWmxLQ2w3YkQwaE1IMTlPM2RwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lkR1Z6ZEZCaGMzTnBkbVZjSWl4dWRXeHNMR1VwTEhkcGJtUnZkeTV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWRHVnpkRkJoYzNOcGRtVmNJaXh1ZFd4c0xHVXBmWFpoY2lCa1BWd2lkVzVrWldacGJtVmtYQ0loUFhSNWNHVnZaaUIzYVc1a2IzY21KbmRwYm1SdmR5NXVZWFpwWjJGMGIzSW1KbmRwYm1SdmR5NXVZWFpwWjJGMGIzSXVjR3hoZEdadmNtMG1KaTlwVUNoaFpIeG9iMjVsZkc5a0tTOHVkR1Z6ZENoM2FXNWtiM2N1Ym1GMmFXZGhkRzl5TG5Cc1lYUm1iM0p0S1N4alBWdGRMSFU5SVRFc1lUMHRNU3h6UFhadmFXUWdNQ3gyUFhadmFXUWdNQ3htUFdaMWJtTjBhVzl1S0hRcGUzSmxkSFZ5YmlCakxuTnZiV1VvWm5WdVkzUnBiMjRvWlNsN2NtVjBkWEp1SVNnaFpTNXZjSFJwYjI1ekxtRnNiRzkzVkc5MVkyaE5iM1psZkh3aFpTNXZjSFJwYjI1ekxtRnNiRzkzVkc5MVkyaE5iM1psS0hRcEtYMHBmU3h0UFdaMWJtTjBhVzl1S0dVcGUzWmhjaUIwUFdWOGZIZHBibVJ2ZHk1bGRtVnVkRHR5WlhSMWNtNGhJV1lvZEM1MFlYSm5aWFFwZkh3b01UeDBMblJ2ZFdOb1pYTXViR1Z1WjNSb2ZId29kQzV3Y21WMlpXNTBSR1ZtWVhWc2RDWW1kQzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BMQ0V4S1NsOUxHODlablZ1WTNScGIyNG9LWHR6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1S0NsN2RtOXBaQ0F3SVQwOWRpWW1LR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1V1Y0dGa1pHbHVaMUpwWjJoMFBYWXNkajEyYjJsa0lEQXBMSFp2YVdRZ01DRTlQWE1tSmloa2IyTjFiV1Z1ZEM1aWIyUjVMbk4wZVd4bExtOTJaWEptYkc5M1BYTXNjejEyYjJsa0lEQXBmU2w5TzJWNGNHOXlkSE11WkdsellXSnNaVUp2WkhsVFkzSnZiR3c5Wm5WdVkzUnBiMjRvYVN4bEtYdHBaaWhrS1h0cFppZ2hhU2x5WlhSMWNtNGdkbTlwWkNCamIyNXpiMnhsTG1WeWNtOXlLRndpWkdsellXSnNaVUp2WkhsVFkzSnZiR3dnZFc1emRXTmpaWE56Wm5Wc0lDMGdkR0Z5WjJWMFJXeGxiV1Z1ZENCdGRYTjBJR0psSUhCeWIzWnBaR1ZrSUhkb1pXNGdZMkZzYkdsdVp5QmthWE5oWW14bFFtOWtlVk5qY205c2JDQnZiaUJKVDFNZ1pHVjJhV05sY3k1Y0lpazdhV1lvYVNZbUlXTXVjMjl0WlNobWRXNWpkR2x2YmlobEtYdHlaWFIxY200Z1pTNTBZWEpuWlhSRmJHVnRaVzUwUFQwOWFYMHBLWHQyWVhJZ2REMTdkR0Z5WjJWMFJXeGxiV1Z1ZERwcExHOXdkR2x2Ym5NNlpYeDhlMzE5TzJNOVcxMHVZMjl1WTJGMEtISW9ZeWtzVzNSZEtTeHBMbTl1ZEc5MVkyaHpkR0Z5ZEQxbWRXNWpkR2x2YmlobEtYc3hQVDA5WlM1MFlYSm5aWFJVYjNWamFHVnpMbXhsYm1kMGFDWW1LR0U5WlM1MFlYSm5aWFJVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmtwZlN4cExtOXVkRzkxWTJodGIzWmxQV1oxYm1OMGFXOXVLR1VwZTNaaGNpQjBMRzhzYml4eU96RTlQVDFsTG5SaGNtZGxkRlJ2ZFdOb1pYTXViR1Z1WjNSb0ppWW9iejFwTEhJOUtIUTlaU2t1ZEdGeVoyVjBWRzkxWTJobGMxc3dYUzVqYkdsbGJuUlpMV0VzSVdZb2RDNTBZWEpuWlhRcEppWW9ieVltTUQwOVBXOHVjMk55YjJ4c1ZHOXdKaVl3UEhJL2JTaDBLVG9vYmoxdktTWW1iaTV6WTNKdmJHeElaV2xuYUhRdGJpNXpZM0p2Ykd4VWIzQThQVzR1WTJ4cFpXNTBTR1ZwWjJoMEppWnlQREEvYlNoMEtUcDBMbk4wYjNCUWNtOXdZV2RoZEdsdmJpZ3BLU2w5TEhWOGZDaGtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtGd2lkRzkxWTJodGIzWmxYQ0lzYlN4c1AzdHdZWE56YVhabE9pRXhmVHAyYjJsa0lEQXBMSFU5SVRBcGZYMWxiSE5sZTI0OVpTeHpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2w3YVdZb2RtOXBaQ0F3UFQwOWRpbDdkbUZ5SUdVOUlTRnVKaVloTUQwOVBXNHVjbVZ6WlhKMlpWTmpjbTlzYkVKaGNrZGhjQ3gwUFhkcGJtUnZkeTVwYm01bGNsZHBaSFJvTFdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzVqYkdsbGJuUlhhV1IwYUR0bEppWXdQSFFtSmloMlBXUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVXVjR0ZrWkdsdVoxSnBaMmgwTEdSdlkzVnRaVzUwTG1KdlpIa3VjM1I1YkdVdWNHRmtaR2x1WjFKcFoyaDBQWFFyWENKd2VGd2lLWDEyYjJsa0lEQTlQVDF6SmlZb2N6MWtiMk4xYldWdWRDNWliMlI1TG5OMGVXeGxMbTkyWlhKbWJHOTNMR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1V1YjNabGNtWnNiM2M5WENKb2FXUmtaVzVjSWlsOUtUdDJZWElnYnoxN2RHRnlaMlYwUld4bGJXVnVkRHBwTEc5d2RHbHZibk02Wlh4OGUzMTlPMk05VzEwdVkyOXVZMkYwS0hJb1l5a3NXMjlkS1gxMllYSWdibjBzWlhod2IzSjBjeTVqYkdWaGNrRnNiRUp2WkhsVFkzSnZiR3hNYjJOcmN6MW1kVzVqZEdsdmJpZ3BlMlEvS0dNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlobEtYdGxMblJoY21kbGRFVnNaVzFsYm5RdWIyNTBiM1ZqYUhOMFlYSjBQVzUxYkd3c1pTNTBZWEpuWlhSRmJHVnRaVzUwTG05dWRHOTFZMmh0YjNabFBXNTFiR3g5S1N4MUppWW9aRzlqZFcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWhjSW5SdmRXTm9iVzkyWlZ3aUxHMHNiRDk3Y0dGemMybDJaVG9oTVgwNmRtOXBaQ0F3S1N4MVBTRXhLU3hqUFZ0ZExHRTlMVEVwT2lodktDa3NZejFiWFNsOUxHVjRjRzl5ZEhNdVpXNWhZbXhsUW05a2VWTmpjbTlzYkQxbWRXNWpkR2x2YmloMEtYdHBaaWhrS1h0cFppZ2hkQ2x5WlhSMWNtNGdkbTlwWkNCamIyNXpiMnhsTG1WeWNtOXlLRndpWlc1aFlteGxRbTlrZVZOamNtOXNiQ0IxYm5OMVkyTmxjM05tZFd3Z0xTQjBZWEpuWlhSRmJHVnRaVzUwSUcxMWMzUWdZbVVnY0hKdmRtbGtaV1FnZDJobGJpQmpZV3hzYVc1bklHVnVZV0pzWlVKdlpIbFRZM0p2Ykd3Z2IyNGdTVTlUSUdSbGRtbGpaWE11WENJcE8zUXViMjUwYjNWamFITjBZWEowUFc1MWJHd3NkQzV2Ym5SdmRXTm9iVzkyWlQxdWRXeHNMR005WXk1bWFXeDBaWElvWm5WdVkzUnBiMjRvWlNsN2NtVjBkWEp1SUdVdWRHRnlaMlYwUld4bGJXVnVkQ0U5UFhSOUtTeDFKaVl3UFQwOVl5NXNaVzVuZEdnbUppaGtiMk4xYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRndpZEc5MVkyaHRiM1psWENJc2JTeHNQM3R3WVhOemFYWmxPaUV4ZlRwMmIybGtJREFwTEhVOUlURXBmV1ZzYzJVZ01UMDlQV011YkdWdVozUm9KaVpqV3pCZExuUmhjbWRsZEVWc1pXMWxiblE5UFQxMFB5aHZLQ2tzWXoxYlhTazZZejFqTG1acGJIUmxjaWhtZFc1amRHbHZiaWhsS1h0eVpYUjFjbTRnWlM1MFlYSm5aWFJGYkdWdFpXNTBJVDA5ZEgwcGZYMHBPMXh1SWl3aUx5b2hYRzRnS2lCSGJHbGtaUzVxY3lCMk15NHlMalJjYmlBcUlDaGpLU0F5TURFekxUSXdNVGdnU3NTWlpISjZaV29nUTJoaHhZSjFZbVZySUR4cVpXUnllbVZxTG1Ob1lXeDFZbVZyUUdkdFlXbHNMbU52YlQ0Z0tHaDBkSEE2THk5cVpXUnllbVZxWTJoaGJIVmlaV3N1WTI5dEx5bGNiaUFxSUZKbGJHVmhjMlZrSUhWdVpHVnlJSFJvWlNCTlNWUWdUR2xqWlc1elpTNWNiaUFxTDF4dVhHNTJZWElnWkdWbVlYVnNkSE1nUFNCN1hHNGdJQzhxS2x4dUlDQWdLaUJVZVhCbElHOW1JSFJvWlNCdGIzWmxiV1Z1ZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dRWFpoYVd4aFlteGxJSFI1Y0dWek9seHVJQ0FnS2lCZ2MyeHBaR1Z5WUNBdElGSmxkMmx1WkhNZ2MyeHBaR1Z5SUhSdklIUm9aU0J6ZEdGeWRDOWxibVFnZDJobGJpQnBkQ0J5WldGamFHVnpJSFJvWlNCbWFYSnpkQ0J2Y2lCc1lYTjBJSE5zYVdSbExseHVJQ0FnS2lCZ1kyRnliM1Z6Wld4Z0lDMGdRMmhoYm1kbGN5QnpiR2xrWlhNZ2QybDBhRzkxZENCemRHRnlkR2x1WnlCdmRtVnlJSGRvWlc0Z2FYUWdjbVZoWTJobGN5QjBhR1VnWm1seWMzUWdiM0lnYkdGemRDQnpiR2xrWlM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UxTjBjbWx1WjMxY2JpQWdJQ292WEc0Z0lIUjVjR1U2SUNkemJHbGtaWEluTEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJUZEdGeWRDQmhkQ0J6Y0dWamFXWnBZeUJ6Ykdsa1pTQnVkVzFpWlhJZ1pHVm1hVzVsWkNCM2FYUm9JSHBsY204dFltRnpaV1FnYVc1a1pYZ3VYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRPZFcxaVpYSjlYRzRnSUNBcUwxeHVJQ0J6ZEdGeWRFRjBPaUF3TEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJCSUc1MWJXSmxjaUJ2WmlCemJHbGtaWE1nZG1semFXSnNaU0J2YmlCMGFHVWdjMmx1WjJ4bElIWnBaWGR3YjNKMExseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ0FnS2k5Y2JpQWdjR1Z5Vm1sbGR6b2dNU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSbTlqZFhNZ1kzVnljbVZ1ZEd4NUlHRmpkR2wyWlNCemJHbGtaU0JoZENCaElITndaV05wWm1sbFpDQndiM05wZEdsdmJpQnBiaUIwYUdVZ2RISmhZMnN1WEc0Z0lDQXFYRzRnSUNBcUlFRjJZV2xzWVdKc1pTQnBibkIxZEhNNlhHNGdJQ0FxSUdCalpXNTBaWEpnSUMwZ1EzVnljbVZ1ZENCemJHbGtaU0IzYVd4c0lHSmxJR0ZzZDJGNWN5Qm1iMk4xYzJWa0lHRjBJSFJvWlNCalpXNTBaWElnYjJZZ1lTQjBjbUZqYXk1Y2JpQWdJQ29nWURBc01Td3lMRE11TGk1Z0lDMGdRM1Z5Y21WdWRDQnpiR2xrWlNCM2FXeHNJR0psSUdadlkzVnpaV1FnYjI0Z2RHaGxJSE53WldOcFptbGxaQ0I2WlhKdkxXSmhjMlZrSUdsdVpHVjRMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VTNSeWFXNW5mRTUxYldKbGNuMWNiaUFnSUNvdlhHNGdJR1p2WTNWelFYUTZJREFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUVnYzJsNlpTQnZaaUIwYUdVZ1oyRndJR0ZrWkdWa0lHSmxkSGRsWlc0Z2MyeHBaR1Z6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1oyRndPaUF4TUN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUTJoaGJtZGxJSE5zYVdSbGN5QmhablJsY2lCaElITndaV05wWm1sbFpDQnBiblJsY25aaGJDNGdWWE5sSUdCbVlXeHpaV0FnWm05eUlIUjFjbTVwYm1jZ2IyWm1JR0YxZEc5d2JHRjVMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmRUp2YjJ4bFlXNTlYRzRnSUNBcUwxeHVJQ0JoZFhSdmNHeGhlVG9nWm1Gc2MyVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBiM0FnWVhWMGIzQnNZWGtnYjI0Z2JXOTFjMlZ2ZG1WeUlHVjJaVzUwTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1FtOXZiR1ZoYm4xY2JpQWdJQ292WEc0Z0lHaHZkbVZ5Y0dGMWMyVTZJSFJ5ZFdVc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGc2JHOTNJR1p2Y2lCamFHRnVaMmx1WnlCemJHbGtaWE1nZDJsMGFDQnNaV1owSUdGdVpDQnlhV2RvZENCclpYbGliMkZ5WkNCaGNuSnZkM011WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdLaTljYmlBZ2EyVjVZbTloY21RNklIUnlkV1VzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRk4wYjNBZ2NuVnVibWx1WnlCZ2NHVnlWbWxsZDJBZ2JuVnRZbVZ5SUc5bUlITnNhV1JsY3lCbWNtOXRJSFJvWlNCbGJtUXVJRlZ6WlNCMGFHbHpYRzRnSUNBcUlHOXdkR2x2YmlCcFppQjViM1VnWkc5dUozUWdkMkZ1ZENCMGJ5Qm9ZWFpsSUdGdUlHVnRjSFI1SUhOd1lXTmxJR0ZtZEdWeVhHNGdJQ0FxSUdFZ2MyeHBaR1Z5TGlCWGIzSnJjeUJ2Ym14NUlIZHBkR2dnWUhOc2FXUmxjbUFnZEhsd1pTQmhibVFnWVZ4dUlDQWdLaUJ1YjI0dFkyVnVkR1Z5WldRZ1lHWnZZM1Z6UVhSZ0lITmxkSFJwYm1jdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdENiMjlzWldGdWZWeHVJQ0FnS2k5Y2JpQWdZbTkxYm1RNklHWmhiSE5sTEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJOYVc1cGJXRnNJSE4zYVhCbElHUnBjM1JoYm1ObElHNWxaV1JsWkNCMGJ5QmphR0Z1WjJVZ2RHaGxJSE5zYVdSbExpQlZjMlVnWUdaaGJITmxZQ0JtYjNJZ2RIVnlibWx1WnlCdlptWWdZU0J6ZDJsd2FXNW5MbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmRUp2YjJ4bFlXNTlYRzRnSUNBcUwxeHVJQ0J6ZDJsd1pWUm9jbVZ6YUc5c1pEb2dPREFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRTFwYm1sdFlXd2diVzkxYzJVZ1pISmhaeUJrYVhOMFlXNWpaU0J1WldWa1pXUWdkRzhnWTJoaGJtZGxJSFJvWlNCemJHbGtaUzRnVlhObElHQm1ZV3h6WldBZ1ptOXlJSFIxY201cGJtY2diMlptSUdFZ1pISmhaMmRwYm1jdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOFFtOXZiR1ZoYm4xY2JpQWdJQ292WEc0Z0lHUnlZV2RVYUhKbGMyaHZiR1E2SURFeU1DeGNibHh1SUNBdktpcGNiaUFnSUNvZ1FTQnRZWGhwYlhWdElHNTFiV0psY2lCdlppQnpiR2xrWlhNZ2RHOGdkMmhwWTJnZ2JXOTJaVzFsYm5RZ2QybHNiQ0JpWlNCdFlXUmxJRzl1SUhOM2FYQnBibWNnYjNJZ1pISmhaMmRwYm1jdUlGVnpaU0JnWm1Gc2MyVmdJR1p2Y2lCMWJteHBiV2wwWldRdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOFFtOXZiR1ZoYm4xY2JpQWdJQ292WEc0Z0lIQmxjbFJ2ZFdOb09pQm1ZV3h6WlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVFc5MmFXNW5JR1JwYzNSaGJtTmxJSEpoZEdsdklHOW1JSFJvWlNCemJHbGtaWE1nYjI0Z1lTQnpkMmx3YVc1bklHRnVaQ0JrY21GbloybHVaeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBZ0lDb3ZYRzRnSUhSdmRXTm9VbUYwYVc4NklEQXVOU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRVzVuYkdVZ2NtVnhkV2x5WldRZ2RHOGdZV04wYVhaaGRHVWdjMnhwWkdWeklHMXZkbWx1WnlCdmJpQnpkMmx3YVc1bklHOXlJR1J5WVdkbmFXNW5MbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNBZ0tpOWNiaUFnZEc5MVkyaEJibWRzWlRvZ05EVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFUjFjbUYwYVc5dUlHOW1JSFJvWlNCaGJtbHRZWFJwYjI0Z2FXNGdiV2xzYkdselpXTnZibVJ6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ1lXNXBiV0YwYVc5dVJIVnlZWFJwYjI0NklEUXdNQ3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRV3hzYjNkeklHeHZiM0JwYm1jZ2RHaGxJR0J6Ykdsa1pYSmdJSFI1Y0dVdUlGTnNhV1JsY2lCM2FXeHNJSEpsZDJsdVpDQjBieUIwYUdVZ1ptbHljM1F2YkdGemRDQnpiR2xrWlNCM2FHVnVJR2wwSjNNZ1lYUWdkR2hsSUhOMFlYSjBMMlZ1WkM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQnlaWGRwYm1RNklIUnlkV1VzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVIxY21GMGFXOXVJRzltSUhSb1pTQnlaWGRwYm1ScGJtY2dZVzVwYldGMGFXOXVJRzltSUhSb1pTQmdjMnhwWkdWeVlDQjBlWEJsSUdsdUlHMXBiR3hwYzJWamIyNWtjeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBZ0lDb3ZYRzRnSUhKbGQybHVaRVIxY21GMGFXOXVPaUE0TURBc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVWaGMybHVaeUJtZFc1amRHbHZiaUJtYjNJZ2RHaGxJR0Z1YVcxaGRHbHZiaTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTFOMGNtbHVaMzFjYmlBZ0lDb3ZYRzRnSUdGdWFXMWhkR2x2YmxScGJXbHVaMFoxYm1NNklDZGpkV0pwWXkxaVpYcHBaWElvTGpFMk5Td2dMamcwTUN3Z0xqUTBNQ3dnTVNrbkxGeHVYRzRnSUM4cUtseHVJQ0FnS2lCVWFISnZkSFJzWlNCamIzTjBiSGtnWlhabGJuUnpJR0YwSUcxdmMzUWdiMjVqWlNCd1pYSWdaWFpsY25rZ2QyRnBkQ0J0YVd4c2FYTmxZMjl1WkhNdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOVhHNGdJQ0FxTDF4dUlDQjBhSEp2ZEhSc1pUb2dNVEFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRTF2ZG1sdVp5QmthWEpsWTNScGIyNGdiVzlrWlM1Y2JpQWdJQ3BjYmlBZ0lDb2dRWFpoYVd4aFlteGxJR2x1Y0hWMGN6cGNiaUFnSUNvZ0xTQW5iSFJ5SnlBdElHeGxablFnZEc4Z2NtbG5hSFFnYlc5MlpXMWxiblFzWEc0Z0lDQXFJQzBnSjNKMGJDY2dMU0J5YVdkb2RDQjBieUJzWldaMElHMXZkbVZ0Wlc1MExseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdVM1J5YVc1bmZWeHVJQ0FnS2k5Y2JpQWdaR2x5WldOMGFXOXVPaUFuYkhSeUp5eGNibHh1SUNBdktpcGNiaUFnSUNvZ1ZHaGxJR1JwYzNSaGJtTmxJSFpoYkhWbElHOW1JSFJvWlNCdVpYaDBJR0Z1WkNCd2NtVjJhVzkxY3lCMmFXVjNjRzl5ZEhNZ2QyaHBZMmhjYmlBZ0lDb2dhR0YyWlNCMGJ5QndaV1ZySUdsdUlIUm9aU0JqZFhKeVpXNTBJSFpwWlhjdUlFRmpZMlZ3ZEhNZ2JuVnRZbVZ5SUdGdVpGeHVJQ0FnS2lCd2FYaGxiSE1nWVhNZ1lTQnpkSEpwYm1jdUlFeGxablFnWVc1a0lISnBaMmgwSUhCbFpXdHBibWNnWTJGdUlHSmxYRzRnSUNBcUlITmxkQ0IxY0NCelpYQmhjbUYwWld4NUlIZHBkR2dnWVNCa2FYSmxZM1JwYjI1eklHOWlhbVZqZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dSbTl5SUdWNFlXMXdiR1U2WEc0Z0lDQXFJR0F4TURCZ0lDMGdVR1ZsYXlBeE1EQndlQ0J2YmlCMGFHVWdZbTkwYUNCemFXUmxjeTVjYmlBZ0lDb2dleUJpWldadmNtVTZJREV3TUN3Z1lXWjBaWEk2SURVd0lIMWdJQzBnVUdWbGF5QXhNREJ3ZUNCdmJpQjBhR1VnYkdWbWRDQnphV1JsSUdGdVpDQTFNSEI0SUc5dUlIUm9aU0J5YVdkb2RDQnphV1JsTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZkZOMGNtbHVaM3hQWW1wbFkzUjlYRzRnSUNBcUwxeHVJQ0J3WldWck9pQXdMRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkRiMnhzWldOMGFXOXVJRzltSUc5d2RHbHZibk1nWVhCd2JHbGxaQ0JoZENCemNHVmphV1pwWldRZ2JXVmthV0VnWW5KbFlXdHdiMmx1ZEhNdVhHNGdJQ0FxSUVadmNpQmxlR0Z0Y0d4bE9pQmthWE53YkdGNUlIUjNieUJ6Ykdsa1pYTWdjR1Z5SUhacFpYY2dkVzVrWlhJZ09EQXdjSGd1WEc0Z0lDQXFJR0I3WEc0Z0lDQXFJQ0FnSnpnd01IQjRKem9nZTF4dUlDQWdLaUFnSUNBZ2NHVnlWbWxsZHpvZ01seHVJQ0FnS2lBZ0lIMWNiaUFnSUNvZ2ZXQmNiaUFnSUNvdlhHNGdJR0p5WldGcmNHOXBiblJ6T2lCN2ZTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1EyOXNiR1ZqZEdsdmJpQnZaaUJwYm5SbGNtNWhiR3g1SUhWelpXUWdTRlJOVENCamJHRnpjMlZ6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkRzlrYnlCU1pXWmhZM1J2Y2lCZ2MyeHBaR1Z5WUNCaGJtUWdZR05oY205MWMyVnNZQ0J3Y205d1pYSjBhV1Z6SUhSdklITnBibWRzWlNCZ2RIbHdaVG9nZXlCemJHbGtaWEk2SUNjbkxDQmpZWEp2ZFhObGJEb2dKeWNnZldBZ2IySnFaV04wWEc0Z0lDQXFJRUIwZVhCbElIdFBZbXBsWTNSOVhHNGdJQ0FxTDF4dUlDQmpiR0Z6YzJWek9pQjdYRzRnSUNBZ1pHbHlaV04wYVc5dU9pQjdYRzRnSUNBZ0lDQnNkSEk2SUNkbmJHbGtaUzB0YkhSeUp5eGNiaUFnSUNBZ0lISjBiRG9nSjJkc2FXUmxMUzF5ZEd3blhHNGdJQ0FnZlN4Y2JpQWdJQ0J6Ykdsa1pYSTZJQ2RuYkdsa1pTMHRjMnhwWkdWeUp5eGNiaUFnSUNCallYSnZkWE5sYkRvZ0oyZHNhV1JsTFMxallYSnZkWE5sYkNjc1hHNGdJQ0FnYzNkcGNHVmhZbXhsT2lBbloyeHBaR1V0TFhOM2FYQmxZV0pzWlNjc1hHNGdJQ0FnWkhKaFoyZHBibWM2SUNkbmJHbGtaUzB0WkhKaFoyZHBibWNuTEZ4dUlDQWdJR05zYjI1bFUyeHBaR1U2SUNkbmJHbGtaVjlmYzJ4cFpHVXRMV05zYjI1bEp5eGNiaUFnSUNCaFkzUnBkbVZPWVhZNklDZG5iR2xrWlY5ZlluVnNiR1YwTFMxaFkzUnBkbVVuTEZ4dUlDQWdJR0ZqZEdsMlpWTnNhV1JsT2lBbloyeHBaR1ZmWDNOc2FXUmxMUzFoWTNScGRtVW5MRnh1SUNBZ0lHUnBjMkZpYkdWa1FYSnliM2M2SUNkbmJHbGtaVjlmWVhKeWIzY3RMV1JwYzJGaWJHVmtKMXh1SUNCOVhHNTlPMXh1WEc0dktpcGNiaUFxSUU5MWRIQjFkSE1nZDJGeWJtbHVaeUJ0WlhOellXZGxJSFJ2SUhSb1pTQmliM2R6WlhJZ1kyOXVjMjlzWlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUh0VGRISnBibWQ5SUcxeloxeHVJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2QyRnliaWh0YzJjcElIdGNiaUFnWTI5dWMyOXNaUzVsY25KdmNpaGNJbHRIYkdsa1pTQjNZWEp1WFRvZ1hDSWdLeUJ0YzJjcE8xeHVmVnh1WEc1MllYSWdYM1I1Y0dWdlppQTlJSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMDlJRndpWm5WdVkzUnBiMjVjSWlBbUppQjBlWEJsYjJZZ1UzbHRZbTlzTG1sMFpYSmhkRzl5SUQwOVBTQmNJbk41YldKdmJGd2lJRDhnWm5WdVkzUnBiMjRnS0c5aWFpa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JRzlpYWp0Y2JuMGdPaUJtZFc1amRHbHZiaUFvYjJKcUtTQjdYRzRnSUhKbGRIVnliaUJ2WW1vZ0ppWWdkSGx3Wlc5bUlGTjViV0p2YkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlHOWlhaTVqYjI1emRISjFZM1J2Y2lBOVBUMGdVM2x0WW05c0lDWW1JRzlpYWlBaFBUMGdVM2x0WW05c0xuQnliM1J2ZEhsd1pTQS9JRndpYzNsdFltOXNYQ0lnT2lCMGVYQmxiMllnYjJKcU8xeHVmVHRjYmx4dWRtRnlJR05zWVhOelEyRnNiRU5vWldOcklEMGdablZ1WTNScGIyNGdLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2UxeHVJQ0JwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzV1YjNRZ1kyRnNiQ0JoSUdOc1lYTnpJR0Z6SUdFZ1puVnVZM1JwYjI1Y0lpazdYRzRnSUgxY2JuMDdYRzVjYm5aaGNpQmpjbVZoZEdWRGJHRnpjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnWm5WdVkzUnBiMjRnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWgwWVhKblpYUXNJSEJ5YjNCektTQjdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQndjbTl3Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZ5SUdSbGMyTnlhWEIwYjNJZ1BTQndjbTl3YzF0cFhUdGNiaUFnSUNBZ0lHUmxjMk55YVhCMGIzSXVaVzUxYldWeVlXSnNaU0E5SUdSbGMyTnlhWEIwYjNJdVpXNTFiV1Z5WVdKc1pTQjhmQ0JtWVd4elpUdGNiaUFnSUNBZ0lHUmxjMk55YVhCMGIzSXVZMjl1Wm1sbmRYSmhZbXhsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJR2xtSUNoY0luWmhiSFZsWENJZ2FXNGdaR1Z6WTNKcGNIUnZjaWtnWkdWelkzSnBjSFJ2Y2k1M2NtbDBZV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2RHRnlaMlYwTENCa1pYTmpjbWx3ZEc5eUxtdGxlU3dnWkdWelkzSnBjSFJ2Y2lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoRGIyNXpkSEoxWTNSdmNpd2djSEp2ZEc5UWNtOXdjeXdnYzNSaGRHbGpVSEp2Y0hNcElIdGNiaUFnSUNCcFppQW9jSEp2ZEc5UWNtOXdjeWtnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWhEYjI1emRISjFZM1J2Y2k1d2NtOTBiM1I1Y0dVc0lIQnliM1J2VUhKdmNITXBPMXh1SUNBZ0lHbG1JQ2h6ZEdGMGFXTlFjbTl3Y3lrZ1pHVm1hVzVsVUhKdmNHVnlkR2xsY3loRGIyNXpkSEoxWTNSdmNpd2djM1JoZEdsalVISnZjSE1wTzF4dUlDQWdJSEpsZEhWeWJpQkRiMjV6ZEhKMVkzUnZjanRjYmlBZ2ZUdGNibjBvS1R0Y2JseHVkbUZ5SUY5bGVIUmxibVJ6SUQwZ1QySnFaV04wTG1GemMybG5iaUI4ZkNCbWRXNWpkR2x2YmlBb2RHRnlaMlYwS1NCN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2RtRnlJSE52ZFhKalpTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JseHVJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUJ6YjNWeVkyVXBJSHRjYmlBZ0lDQWdJR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2MyOTFjbU5sTENCclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUhSaGNtZGxkRnRyWlhsZElEMGdjMjkxY21ObFcydGxlVjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFJoY21kbGREdGNibjA3WEc1Y2JuWmhjaUJuWlhRZ1BTQm1kVzVqZEdsdmJpQm5aWFFvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU3dnY21WalpXbDJaWElwSUh0Y2JpQWdhV1lnS0c5aWFtVmpkQ0E5UFQwZ2JuVnNiQ2tnYjJKcVpXTjBJRDBnUm5WdVkzUnBiMjR1Y0hKdmRHOTBlWEJsTzF4dUlDQjJZWElnWkdWell5QTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVVSbGMyTnlhWEIwYjNJb2IySnFaV04wTENCd2NtOXdaWEowZVNrN1hHNWNiaUFnYVdZZ0tHUmxjMk1nUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIWmhjaUJ3WVhKbGJuUWdQU0JQWW1wbFkzUXVaMlYwVUhKdmRHOTBlWEJsVDJZb2IySnFaV04wS1R0Y2JseHVJQ0FnSUdsbUlDaHdZWEpsYm5RZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm5aWFFvY0dGeVpXNTBMQ0J3Y205d1pYSjBlU3dnY21WalpXbDJaWElwTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUdsbUlDaGNJblpoYkhWbFhDSWdhVzRnWkdWell5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCa1pYTmpMblpoYkhWbE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIWmhjaUJuWlhSMFpYSWdQU0JrWlhOakxtZGxkRHRjYmx4dUlDQWdJR2xtSUNoblpYUjBaWElnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMGRHVnlMbU5oYkd3b2NtVmpaV2wyWlhJcE8xeHVJQ0I5WEc1OU8xeHVYRzUyWVhJZ2FXNW9aWEpwZEhNZ1BTQm1kVzVqZEdsdmJpQW9jM1ZpUTJ4aGMzTXNJSE4xY0dWeVEyeGhjM01wSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ6ZFhCbGNrTnNZWE56SUNFOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2MzVndaWEpEYkdGemN5QWhQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YQ0pUZFhCbGNpQmxlSEJ5WlhOemFXOXVJRzExYzNRZ1pXbDBhR1Z5SUdKbElHNTFiR3dnYjNJZ1lTQm1kVzVqZEdsdmJpd2dibTkwSUZ3aUlDc2dkSGx3Wlc5bUlITjFjR1Z5UTJ4aGMzTXBPMXh1SUNCOVhHNWNiaUFnYzNWaVEyeGhjM011Y0hKdmRHOTBlWEJsSUQwZ1QySnFaV04wTG1OeVpXRjBaU2h6ZFhCbGNrTnNZWE56SUNZbUlITjFjR1Z5UTJ4aGMzTXVjSEp2ZEc5MGVYQmxMQ0I3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0k2SUh0Y2JpQWdJQ0FnSUhaaGJIVmxPaUJ6ZFdKRGJHRnpjeXhjYmlBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUdaaGJITmxMRnh1SUNBZ0lDQWdkM0pwZEdGaWJHVTZJSFJ5ZFdVc1hHNGdJQ0FnSUNCamIyNW1hV2QxY21GaWJHVTZJSFJ5ZFdWY2JpQWdJQ0I5WEc0Z0lIMHBPMXh1SUNCcFppQW9jM1Z3WlhKRGJHRnpjeWtnVDJKcVpXTjBMbk5sZEZCeWIzUnZkSGx3WlU5bUlEOGdUMkpxWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltS0hOMVlrTnNZWE56TENCemRYQmxja05zWVhOektTQTZJSE4xWWtOc1lYTnpMbDlmY0hKdmRHOWZYeUE5SUhOMWNHVnlRMnhoYzNNN1hHNTlPMXh1WEc1MllYSWdjRzl6YzJsaWJHVkRiMjV6ZEhKMVkzUnZjbEpsZEhWeWJpQTlJR1oxYm1OMGFXOXVJQ2h6Wld4bUxDQmpZV3hzS1NCN1hHNGdJR2xtSUNnaGMyVnNaaWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJTWldabGNtVnVZMlZGY25KdmNpaGNJblJvYVhNZ2FHRnpiaWQwSUdKbFpXNGdhVzVwZEdsaGJHbHpaV1FnTFNCemRYQmxjaWdwSUdoaGMyNG5kQ0JpWldWdUlHTmhiR3hsWkZ3aUtUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmpZV3hzSUNZbUlDaDBlWEJsYjJZZ1kyRnNiQ0E5UFQwZ1hDSnZZbXBsWTNSY0lpQjhmQ0IwZVhCbGIyWWdZMkZzYkNBOVBUMGdYQ0ptZFc1amRHbHZibHdpS1NBL0lHTmhiR3dnT2lCelpXeG1PMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkRiMjUyWlhKMGN5QjJZV3gxWlNCbGJuUmxjbVZrSUdGeklHNTFiV0psY2x4dUlDb2diM0lnYzNSeWFXNW5JSFJ2SUdsdWRHVm5aWElnZG1Gc2RXVXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlIWmhiSFZsWEc0Z0tpQkFjbVYwZFhKdWN5QjdUblZ0WW1WeWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCMGIwbHVkQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnY0dGeWMyVkpiblFvZG1Gc2RXVXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFTnZiblpsY25SeklIWmhiSFZsSUdWdWRHVnlaV1FnWVhNZ2JuVnRZbVZ5WEc0Z0tpQnZjaUJ6ZEhKcGJtY2dkRzhnWm14aGRDQjJZV3gxWlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnZG1Gc2RXVmNiaUFxSUVCeVpYUjFjbTV6SUh0T2RXMWlaWEo5WEc0Z0tpOWNibVoxYm1OMGFXOXVJSFJ2Um14dllYUW9kbUZzZFdVcElIdGNiaUFnY21WMGRYSnVJSEJoY25ObFJteHZZWFFvZG1Gc2RXVXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nWVNCemRISnBibWN1WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3S24wZ0lDQjJZV3gxWlZ4dUlDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0ozTjBjbWx1WnljN1hHNTlYRzVjYmk4cUtseHVJQ29nU1c1a2FXTmhkR1Z6SUhkb1pYUm9aWElnZEdobElITndaV05wWm1sbFpDQjJZV3gxWlNCcGN5QmhiaUJ2WW1wbFkzUXVYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdLbjBnZG1Gc2RXVmNiaUFxSUVCeVpYUjFjbTRnZTBKdmIyeGxZVzU5WEc0Z0tseHVJQ29nUUhObFpTQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhbUZ6YUd0bGJtRnpMM1Z1WkdWeWMyTnZjbVZjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5QWW1wbFkzUW9kbUZzZFdVcElIdGNiaUFnZG1GeUlIUjVjR1VnUFNCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkMWJtUmxabWx1WldRbklEOGdKM1Z1WkdWbWFXNWxaQ2NnT2lCZmRIbHdaVzltS0haaGJIVmxLVHRjYmx4dUlDQnlaWFIxY200Z2RIbHdaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QjhmQ0IwZVhCbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlBaElYWmhiSFZsT3lBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFcxcGVHVmtMVzl3WlhKaGRHOXljMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nWVNCdWRXMWlaWEl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3S24wZ2RtRnNkV1ZjYmlBcUlFQnlaWFIxY200Z2UwSnZiMnhsWVc1OVhHNGdLaTljYm1aMWJtTjBhVzl1SUdselRuVnRZbVZ5S0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdWRXMWlaWEluTzF4dWZWeHVYRzR2S2lwY2JpQXFJRWx1WkdsallYUmxjeUIzYUdWMGFHVnlJSFJvWlNCemNHVmphV1pwWldRZ2RtRnNkV1VnYVhNZ1lTQm1kVzVqZEdsdmJpNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ0lIc3FmU0IyWVd4MVpWeHVJQ29nUUhKbGRIVnliaUI3UW05dmJHVmhibjFjYmlBcUwxeHVablZ1WTNScGIyNGdhWE5HZFc1amRHbHZiaWgyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuWm5WdVkzUnBiMjRuTzF4dWZWeHVYRzR2S2lwY2JpQXFJRWx1WkdsallYUmxjeUIzYUdWMGFHVnlJSFJvWlNCemNHVmphV1pwWldRZ2RtRnNkV1VnYVhNZ2RXNWtaV1pwYm1Wa0xseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2V5cDlJSFpoYkhWbFhHNGdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMVZ1WkdWbWFXNWxaQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuZFc1a1pXWnBibVZrSnp0Y2JuMWNibHh1THlvcVhHNGdLaUJKYm1ScFkyRjBaWE1nZDJobGRHaGxjaUIwYUdVZ2MzQmxZMmxtYVdWa0lIWmhiSFZsSUdseklHRnVJR0Z5Y21GNUxseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2V5cDlJSFpoYkhWbFhHNGdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMEZ5Y21GNUtIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQjJZV3gxWlM1amIyNXpkSEoxWTNSdmNpQTlQVDBnUVhKeVlYazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaGJtUWdhVzVwZEdsaGJHbDZaWE1nYzNCbFkybG1hV1ZrSUdOdmJHeGxZM1JwYjI0Z2IyWWdaWGgwWlc1emFXOXVjeTVjYmlBcUlFVmhZMmdnWlhoMFpXNXphVzl1SUhKbFkyVnBkbVZ6SUdGalkyVnpjeUIwYnlCcGJuTjBZVzVqWlNCdlppQm5iR2xrWlNCaGJtUWdjbVZ6ZENCdlppQmpiMjF3YjI1bGJuUnpMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQm5iR2xrWlZ4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHVjRkR1Z1YzJsdmJuTmNiaUFxWEc0Z0tpQkFjbVYwZFhKdWN5QjdUMkpxWldOMGZWeHVJQ292WEc1bWRXNWpkR2x2YmlCdGIzVnVkQ2huYkdsa1pTd2daWGgwWlc1emFXOXVjeXdnWlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJqYjIxd2IyNWxiblJ6SUQwZ2UzMDdYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2JtRnRaU0JwYmlCbGVIUmxibk5wYjI1ektTQjdYRzRnSUNBZ2FXWWdLR2x6Um5WdVkzUnBiMjRvWlhoMFpXNXphVzl1YzF0dVlXMWxYU2twSUh0Y2JpQWdJQ0FnSUdOdmJYQnZibVZ1ZEhOYmJtRnRaVjBnUFNCbGVIUmxibk5wYjI1elcyNWhiV1ZkS0dkc2FXUmxMQ0JqYjIxd2IyNWxiblJ6TENCbGRtVnVkSE1wTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjNZWEp1S0NkRmVIUmxibk5wYjI0Z2JYVnpkQ0JpWlNCaElHWjFibU4wYVc5dUp5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdabTl5SUNoMllYSWdYMjVoYldVZ2FXNGdZMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQWdJR2xtSUNocGMwWjFibU4wYVc5dUtHTnZiWEJ2Ym1WdWRITmJYMjVoYldWZExtMXZkVzUwS1NrZ2UxeHVJQ0FnSUNBZ1kyOXRjRzl1Wlc1MGMxdGZibUZ0WlYwdWJXOTFiblFvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWTI5dGNHOXVaVzUwY3p0Y2JuMWNibHh1THlvcVhHNGdLaUJFWldacGJtVnpJR2RsZEhSbGNpQmhibVFnYzJWMGRHVnlJSEJ5YjNCbGNuUjVJRzl1SUhSb1pTQnpjR1ZqYVdacFpXUWdiMkpxWldOMExseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ2IySnFJQ0FnSUNBZ0lDQWdUMkpxWldOMElIZG9aWEpsSUhCeWIzQmxjblI1SUdoaGN5QjBieUJpWlNCa1pXWnBibVZrTGx4dUlDb2dRSEJoY21GdElDQjdVM1J5YVc1bmZTQndjbTl3SUNBZ0lDQWdJQ0JPWVcxbElHOW1JSFJvWlNCa1pXWnBibVZrSUhCeWIzQmxjblI1TGx4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQmtaV1pwYm1sMGFXOXVJQ0JIWlhRZ1lXNWtJSE5sZENCa1pXWnBibWwwYVc5dWN5Qm1iM0lnZEdobElIQnliM0JsY25SNUxseHVJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1pHVm1hVzVsS0c5aWFpd2djSEp2Y0N3Z1pHVm1hVzVwZEdsdmJpa2dlMXh1SUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29iMkpxTENCd2NtOXdMQ0JrWldacGJtbDBhVzl1S1R0Y2JuMWNibHh1THlvcVhHNGdLaUJUYjNKMGN5QmhjR2hoWW1WMGFXTmhiR3g1SUc5aWFtVmpkQ0JyWlhsekxseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ2IySnFYRzRnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0tpOWNibVoxYm1OMGFXOXVJSE52Y25STFpYbHpLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdUMkpxWldOMExtdGxlWE1vYjJKcUtTNXpiM0owS0NrdWNtVmtkV05sS0daMWJtTjBhVzl1SUNoeUxDQnJLU0I3WEc0Z0lDQWdjbHRyWFNBOUlHOWlhbHRyWFR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5VzJ0ZExDQnlPMXh1SUNCOUxDQjdmU2s3WEc1OVhHNWNiaThxS2x4dUlDb2dUV1Z5WjJWeklIQmhjM05sWkNCelpYUjBhVzVuY3lCdlltcGxZM1FnZDJsMGFDQmtaV1poZFd4MElHOXdkR2x2Ym5NdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCa1pXWmhkV3gwYzF4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQnpaWFIwYVc1bmMxeHVJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnRaWEpuWlU5d2RHbHZibk1vWkdWbVlYVnNkSE1zSUhObGRIUnBibWR6S1NCN1hHNGdJSFpoY2lCdmNIUnBiMjV6SUQwZ1gyVjRkR1Z1WkhNb2UzMHNJR1JsWm1GMWJIUnpMQ0J6WlhSMGFXNW5jeWs3WEc1Y2JpQWdMeThnWUU5aWFtVmpkQzVoYzNOcFoyNWdJR1J2SUc1dmRDQmtaV1Z3YkhrZ2JXVnlaMlVnYjJKcVpXTjBjeXdnYzI4Z2QyVmNiaUFnTHk4Z2FHRjJaU0IwYnlCa2J5QnBkQ0J0WVc1MVlXeHNlU0JtYjNJZ1pYWmxjbmtnYm1WemRHVmtJRzlpYW1WamRGeHVJQ0F2THlCcGJpQnZjSFJwYjI1ekxpQkJiSFJvYjNWbmFDQnBkQ0JrYjJWeklHNXZkQ0JzYjI5cklITnRZWEowTEZ4dUlDQXZMeUJwZENkeklITnRZV3hzWlhJZ1lXNWtJR1poYzNSbGNpQjBhR0Z1SUhOdmJXVWdabUZ1WTNsY2JpQWdMeThnYldWeVoybHVaeUJrWldWd0xXMWxjbWRsSUdGc1oyOXlhWFJvYlNCelkzSnBjSFF1WEc0Z0lHbG1JQ2h6WlhSMGFXNW5jeTVvWVhOUGQyNVFjbTl3WlhKMGVTZ25ZMnhoYzNObGN5Y3BLU0I3WEc0Z0lDQWdiM0IwYVc5dWN5NWpiR0Z6YzJWeklEMGdYMlY0ZEdWdVpITW9lMzBzSUdSbFptRjFiSFJ6TG1Oc1lYTnpaWE1zSUhObGRIUnBibWR6TG1Oc1lYTnpaWE1wTzF4dVhHNGdJQ0FnYVdZZ0tITmxkSFJwYm1kekxtTnNZWE56WlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvSjJScGNtVmpkR2x2YmljcEtTQjdYRzRnSUNBZ0lDQnZjSFJwYjI1ekxtTnNZWE56WlhNdVpHbHlaV04wYVc5dUlEMGdYMlY0ZEdWdVpITW9lMzBzSUdSbFptRjFiSFJ6TG1Oc1lYTnpaWE11WkdseVpXTjBhVzl1TENCelpYUjBhVzVuY3k1amJHRnpjMlZ6TG1ScGNtVmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLSE5sZEhScGJtZHpMbWhoYzA5M2JsQnliM0JsY25SNUtDZGljbVZoYTNCdmFXNTBjeWNwS1NCN1hHNGdJQ0FnYjNCMGFXOXVjeTVpY21WaGEzQnZhVzUwY3lBOUlGOWxlSFJsYm1SektIdDlMQ0JrWldaaGRXeDBjeTVpY21WaGEzQnZhVzUwY3l3Z2MyVjBkR2x1WjNNdVluSmxZV3R3YjJsdWRITXBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRzl3ZEdsdmJuTTdYRzU5WEc1Y2JuWmhjaUJGZG1WdWRITkNkWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNXpkSEoxWTNRZ1lTQkZkbVZ1ZEVKMWN5QnBibk4wWVc1alpTNWNiaUFnSUNwY2JpQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJR1YyWlc1MGMxeHVJQ0FnS2k5Y2JpQWdablZ1WTNScGIyNGdSWFpsYm5SelFuVnpLQ2tnZTF4dUlDQWdJSFpoY2lCbGRtVnVkSE1nUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01DQW1KaUJoY21kMWJXVnVkSE5iTUYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJSHQ5TzF4dUlDQWdJR05zWVhOelEyRnNiRU5vWldOcktIUm9hWE1zSUVWMlpXNTBjMEoxY3lrN1hHNWNiaUFnSUNCMGFHbHpMbVYyWlc1MGN5QTlJR1YyWlc1MGN6dGNiaUFnSUNCMGFHbHpMbWh2Y0NBOUlHVjJaVzUwY3k1b1lYTlBkMjVRY205d1pYSjBlVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCQlpHUnpJR3hwYzNSbGJtVnlJSFJ2SUhSb1pTQnpjR1ZqYVdabFpDQmxkbVZ1ZEM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElIdFRkSEpwYm1kOFFYSnlZWGw5SUdWMlpXNTBYRzRnSUNBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHaGhibVJzWlhKY2JpQWdJQ292WEc1Y2JseHVJQ0JqY21WaGRHVkRiR0Z6Y3loRmRtVnVkSE5DZFhNc0lGdDdYRzRnSUNBZ2EyVjVPaUFuYjI0bkxGeHVJQ0FnSUhaaGJIVmxPaUJtZFc1amRHbHZiaUJ2YmlobGRtVnVkQ3dnYUdGdVpHeGxjaWtnZTF4dUlDQWdJQ0FnYVdZZ0tHbHpRWEp5WVhrb1pYWmxiblFwS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daWFpsYm5RdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1S0dWMlpXNTBXMmxkTENCb1lXNWtiR1Z5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJEY21WaGRHVWdkR2hsSUdWMlpXNTBKM01nYjJKcVpXTjBJR2xtSUc1dmRDQjVaWFFnWTNKbFlYUmxaRnh1SUNBZ0lDQWdhV1lnS0NGMGFHbHpMbWh2Y0M1allXeHNLSFJvYVhNdVpYWmxiblJ6TENCbGRtVnVkQ2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZElEMGdXMTA3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFRmtaQ0IwYUdVZ2FHRnVaR3hsY2lCMGJ5QnhkV1YxWlZ4dUlDQWdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZExuQjFjMmdvYUdGdVpHeGxjaWtnTFNBeE8xeHVYRzRnSUNBZ0lDQXZMeUJRY205MmFXUmxJR2hoYm1Sc1pTQmlZV05ySUdadmNpQnlaVzF2ZG1Gc0lHOW1JR1YyWlc1MFhHNGdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCeVpXMXZkbVU2SUdaMWJtTjBhVzl1SUhKbGJXOTJaU2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZFcybHVaR1Y0WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNkVzV6SUhKbFoybHpkR1Z5WldRZ2FHRnVaR3hsY25NZ1ptOXlJSE53WldOcFptbGxaQ0JsZG1WdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZkVGeWNtRjVmU0JsZG1WdWRGeHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wUFgwZ1kyOXVkR1Y0ZEZ4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZGxiV2wwSnl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdaVzFwZENobGRtVnVkQ3dnWTI5dWRHVjRkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tHbHpRWEp5WVhrb1pYWmxiblFwS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daWFpsYm5RdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ0YVhRb1pYWmxiblJiYVYwc0lHTnZiblJsZUhRcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVsbUlIUm9aU0JsZG1WdWRDQmtiMlZ6YmlkMElHVjRhWE4wTENCdmNpQjBhR1Z5WlNkeklHNXZJR2hoYm1Sc1pYSnpJR2x1SUhGMVpYVmxMQ0JxZFhOMElHeGxZWFpsWEc0Z0lDQWdJQ0JwWmlBb0lYUm9hWE11YUc5d0xtTmhiR3dvZEdocGN5NWxkbVZ1ZEhNc0lHVjJaVzUwS1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRU41WTJ4bElIUm9jbTkxWjJnZ1pYWmxiblJ6SUhGMVpYVmxMQ0JtYVhKbElWeHVJQ0FnSUNBZ2RHaHBjeTVsZG1WdWRITmJaWFpsYm5SZExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHbDBaVzBwSUh0Y2JpQWdJQ0FnSUNBZ2FYUmxiU2hqYjI1MFpYaDBJSHg4SUh0OUtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnZlYwcE8xeHVJQ0J5WlhSMWNtNGdSWFpsYm5SelFuVnpPMXh1ZlNncE8xeHVYRzUyWVhJZ1IyeHBaR1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUM4cUtseHlYRzRnSUNBcUlFTnZibk4wY25WamRDQm5iR2xrWlM1Y2NseHVJQ0FnS2x4eVhHNGdJQ0FxSUVCd1lYSmhiU0FnZTFOMGNtbHVaMzBnYzJWc1pXTjBiM0pjY2x4dUlDQWdLaUJBY0dGeVlXMGdJSHRQWW1wbFkzUjlJRzl3ZEdsdmJuTmNjbHh1SUNBZ0tpOWNiaUFnWm5WdVkzUnBiMjRnUjJ4cFpHVW9jMlZzWldOMGIzSXBJSHRjYmlBZ0lDQjJZWElnYjNCMGFXOXVjeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeElDWW1JR0Z5WjNWdFpXNTBjMXN4WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pGZElEb2dlMzA3WEc0Z0lDQWdZMnhoYzNORFlXeHNRMmhsWTJzb2RHaHBjeXdnUjJ4cFpHVXBPMXh1WEc0Z0lDQWdkR2hwY3k1Zll5QTlJSHQ5TzF4dUlDQWdJSFJvYVhNdVgzUWdQU0JiWFR0Y2JpQWdJQ0IwYUdsekxsOWxJRDBnYm1WM0lFVjJaVzUwYzBKMWN5Z3BPMXh1WEc0Z0lDQWdkR2hwY3k1a2FYTmhZbXhsWkNBOUlHWmhiSE5sTzF4dUlDQWdJSFJvYVhNdWMyVnNaV04wYjNJZ1BTQnpaV3hsWTNSdmNqdGNiaUFnSUNCMGFHbHpMbk5sZEhScGJtZHpJRDBnYldWeVoyVlBjSFJwYjI1ektHUmxabUYxYkhSekxDQnZjSFJwYjI1ektUdGNiaUFnSUNCMGFHbHpMbWx1WkdWNElEMGdkR2hwY3k1elpYUjBhVzVuY3k1emRHRnlkRUYwTzF4dUlDQjlYRzVjYmlBZ0x5b3FYSEpjYmlBZ0lDb2dTVzVwZEdsaGJHbDZaWE1nWjJ4cFpHVXVYSEpjYmlBZ0lDcGNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1pYaDBaVzV6YVc5dWN5QkRiMnhzWldOMGFXOXVJRzltSUdWNGRHVnVjMmx2Ym5NZ2RHOGdhVzVwZEdsaGJHbDZaUzVjY2x4dUlDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0tpOWNibHh1WEc0Z0lHTnlaV0YwWlVOc1lYTnpLRWRzYVdSbExDQmJlMXh1SUNBZ0lHdGxlVG9nSjIxdmRXNTBKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2JXOTFiblFrSkRFb0tTQjdYRzRnSUNBZ0lDQjJZWElnWlhoMFpXNXphVzl1Y3lBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZTMwN1hHNWNiaUFnSUNBZ0lIUm9hWE11WDJVdVpXMXBkQ2duYlc5MWJuUXVZbVZtYjNKbEp5azdYRzVjYmlBZ0lDQWdJR2xtSUNocGMwOWlhbVZqZENobGVIUmxibk5wYjI1ektTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWpJRDBnYlc5MWJuUW9kR2hwY3l3Z1pYaDBaVzV6YVc5dWN5d2dkR2hwY3k1ZlpTazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjNZWEp1S0NkWmIzVWdibVZsWkNCMGJ5QndjbTkyYVdSbElHRWdiMkpxWldOMElHOXVJR0J0YjNWdWRDZ3BZQ2NwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMGFHbHpMbDlsTG1WdGFYUW9KMjF2ZFc1MExtRm1kR1Z5SnlrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nUTI5c2JHVmpkSE1nWVc0Z2FXNXpkR0Z1WTJVZ1lIUnlZVzV6YkdGMFpXQWdkSEpoYm5ObWIzSnRaWEp6TGx4eVhHNGdJQ0FnSUNwY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwRnljbUY1ZlNCMGNtRnVjMlp2Y20xbGNuTWdRMjlzYkdWamRHbHZiaUJ2WmlCMGNtRnVjMlp2Y20xbGNuTXVYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjIxMWRHRjBaU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHMTFkR0YwWlNncElIdGNiaUFnSUNBZ0lIWmhjaUIwY21GdWMyWnZjbTFsY25NZ1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNQ0FtSmlCaGNtZDFiV1Z1ZEhOYk1GMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3dYU0E2SUZ0ZE8xeHVYRzRnSUNBZ0lDQnBaaUFvYVhOQmNuSmhlU2gwY21GdWMyWnZjbTFsY25NcEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzUWdQU0IwY21GdWMyWnZjbTFsY25NN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCM1lYSnVLQ2RaYjNVZ2JtVmxaQ0IwYnlCd2NtOTJhV1JsSUdFZ1lYSnlZWGtnYjI0Z1lHMTFkR0YwWlNncFlDY3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlGVndaR0YwWlhNZ1oyeHBaR1VnZDJsMGFDQnpjR1ZqYVdacFpXUWdjMlYwZEdsdVozTXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSE5sZEhScGJtZHpYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkMWNHUmhkR1VuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ0lDQjJZWElnYzJWMGRHbHVaM01nUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01DQW1KaUJoY21kMWJXVnVkSE5iTUYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJSHQ5TzF4dVhHNGdJQ0FnSUNCMGFHbHpMbk5sZEhScGJtZHpJRDBnYldWeVoyVlBjSFJwYjI1ektIUm9hWE11YzJWMGRHbHVaM01zSUhObGRIUnBibWR6S1R0Y2JseHVJQ0FnSUNBZ2FXWWdLSE5sZEhScGJtZHpMbWhoYzA5M2JsQnliM0JsY25SNUtDZHpkR0Z5ZEVGMEp5a3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibVJsZUNBOUlITmxkSFJwYm1kekxuTjBZWEowUVhRN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIUm9hWE11WDJVdVpXMXBkQ2duZFhCa1lYUmxKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dRMmhoYm1kbElITnNhV1JsSUhkcGRHZ2djM0JsWTJsbWFXVmtJSEJoZEhSbGNtNHVJRUVnY0dGMGRHVnliaUJ0ZFhOMElHSmxJR2x1SUhSb1pTQnpjR1ZqYVdGc0lHWnZjbTFoZERwY2NseHVJQ0FnSUNBcUlHQStZQ0F0SUUxdmRtVWdiMjVsSUdadmNuZGhjbVJjY2x4dUlDQWdJQ0FxSUdBOFlDQXRJRTF2ZG1VZ2IyNWxJR0poWTJ0M1lYSmtYSEpjYmlBZ0lDQWdLaUJnUFh0cGZXQWdMU0JIYnlCMGJ5QjdhWDBnZW1WeWJ5MWlZWE5sWkNCemJHbGtaU0FvWlhFdUlDYzlNU2NzSUhkcGJHd2daMjhnZEc4Z2MyVmpiMjVrSUhOc2FXUmxLVnh5WEc0Z0lDQWdJQ29nWUQ0K1lDQXRJRkpsZDJsdVpITWdkRzhnWlc1a0lDaHNZWE4wSUhOc2FXUmxLVnh5WEc0Z0lDQWdJQ29nWUR3OFlDQXRJRkpsZDJsdVpITWdkRzhnYzNSaGNuUWdLR1pwY25OMElITnNhV1JsS1Z4eVhHNGdJQ0FnSUNwY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCd1lYUjBaWEp1WEhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0SGJHbGtaWDFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZG5ieWNzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHZHZLSEJoZEhSbGNtNHBJSHRjYmlBZ0lDQWdJSFJvYVhNdVgyTXVVblZ1TG0xaGEyVW9jR0YwZEdWeWJpazdYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1RXOTJaU0IwY21GamF5QmllU0J6Y0dWamFXWnBaV1FnWkdsemRHRnVZMlV1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdScGMzUmhibU5sWEhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0SGJHbGtaWDFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZHRiM1psSnl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdiVzkyWlNoa2FYTjBZVzVqWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmWXk1VWNtRnVjMmwwYVc5dUxtUnBjMkZpYkdVb0tUdGNiaUFnSUNBZ0lIUm9hWE11WDJNdVRXOTJaUzV0WVd0bEtHUnBjM1JoYm1ObEtUdGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCRVpYTjBjbTk1SUdsdWMzUmhibU5sSUdGdVpDQnlaWFpsY25RZ1lXeHNJR05vWVc1blpYTWdaRzl1WlNCaWVTQjBhR2x6TGw5akxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJSbGMzUnliM2tuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQmtaWE4wY205NUtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZlpTNWxiV2wwS0Nka1pYTjBjbTk1SnlrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nVTNSaGNuUWdhVzV6ZEdGdVkyVWdZWFYwYjNCc1lYbHBibWN1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0Q2IyOXNaV0Z1ZkU1MWJXSmxjbjBnYVc1MFpYSjJZV3dnVW5WdUlHRjFkRzl3YkdGNWFXNW5JSGRwZEdnZ2NHRnpjMlZrSUdsdWRHVnlkbUZzSUhKbFoyRnlaR3hsYzNNZ2IyWWdZR0YxZEc5d2JHRjVZQ0J6WlhSMGFXNW5jMXh5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3UjJ4cFpHVjlYSEpjYmlBZ0lDQWdLaTljYmx4dUlDQjlMQ0I3WEc0Z0lDQWdhMlY1T2lBbmNHeGhlU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlIQnNZWGtvS1NCN1hHNGdJQ0FnSUNCMllYSWdhVzUwWlhKMllXd2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTUNBbUppQmhjbWQxYldWdWRITmJNRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklHWmhiSE5sTzF4dVhHNGdJQ0FnSUNCcFppQW9hVzUwWlhKMllXd3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpaWFIwYVc1bmN5NWhkWFJ2Y0d4aGVTQTlJR2x1ZEdWeWRtRnNPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IwYUdsekxsOWxMbVZ0YVhRb0ozQnNZWGtuS1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJUZEc5d0lHbHVjM1JoYm1ObElHRjFkRzl3YkdGNWFXNW5MbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBkc2FXUmxmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0ozQmhkWE5sSnl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdjR0YxYzJVb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5bExtVnRhWFFvSjNCaGRYTmxKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVMlYwY3lCbmJHbGtaU0JwYm5SdklHRWdhV1JzWlNCemRHRjBkWE11WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1IyeHBaR1Y5WEhKY2JpQWdJQ0FnS2k5Y2JseHVJQ0I5TENCN1hHNGdJQ0FnYTJWNU9pQW5aR2x6WVdKc1pTY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUdScGMyRmliR1VvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVJwYzJGaWJHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCVFpYUnpJR2RzYVdSbElHbHVkRzhnWVNCaFkzUnBkbVVnYzNSaGRIVnpMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBkc2FXUmxmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyVnVZV0pzWlNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR1Z1WVdKc1pTZ3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVpHbHpZV0pzWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJCWkdSeklHTjFkWFJ2YlNCbGRtVnVkQ0JzYVhOMFpXNWxjaUIzYVhSb0lHaGhibVJzWlhJdVhISmNiaUFnSUNBZ0tseHlYRzRnSUNBZ0lDb2dRSEJoY21GdElDQjdVM1J5YVc1bmZFRnljbUY1ZlNCbGRtVnVkRnh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJQ0I3Um5WdVkzUnBiMjU5SUdoaGJtUnNaWEpjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTBkc2FXUmxmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyOXVKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2IyNG9aWFpsYm5Rc0lHaGhibVJzWlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJVdWIyNG9aWFpsYm5Rc0lHaGhibVJzWlhJcE8xeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSUVOb1pXTnJjeUJwWmlCbmJHbGtaU0JwY3lCaElIQnlaV05wYzJWa0lIUjVjR1V1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZlNCdVlXMWxYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oybHpWSGx3WlNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR2x6Vkhsd1pTaHVZVzFsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpaWFIwYVc1bmN5NTBlWEJsSUQwOVBTQnVZVzFsTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1IyVjBjeUIyWVd4MVpTQnZaaUIwYUdVZ1kyOXlaU0J2Y0hScGIyNXpMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZHpaWFIwYVc1bmN5Y3NYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRa0pERW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmJ6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRk5sZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJR052Y21VZ2IzQjBhVzl1Y3k1Y2NseHVJQ0FnSUNBcVhISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlHOWNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhISmNiaUFnSUNBZ0tpOWNiaUFnSUNBc1hHNGdJQ0FnYzJWME9pQm1kVzVqZEdsdmJpQnpaWFFrSkRFb2J5a2dlMXh1SUNBZ0lDQWdhV1lnS0dselQySnFaV04wS0c4cEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyOGdQU0J2TzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25UM0IwYVc5dWN5QnRkWE4wSUdKbElHRnVJR0J2WW1wbFkzUmdJR2x1YzNSaGJtTmxMaWNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1IyVjBjeUJqZFhKeVpXNTBJR2x1WkdWNElHOW1JSFJvWlNCemJHbGtaWEl1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMmx1WkdWNEp5eGNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENRa01TZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5cE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVMlYwY3lCamRYSnlaVzUwSUdsdVpHVjRJR0VnYzJ4cFpHVnlMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjY2x4dUlDQWdJQ0FxTDF4dUlDQWdJQ3hjYmlBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUhObGRDUWtNU2hwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlwSUQwZ2RHOUpiblFvYVNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQkhaWFJ6SUhSNWNHVWdibUZ0WlNCdlppQjBhR1VnYzJ4cFpHVnlMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFOMGNtbHVaMzFjY2x4dUlDQWdJQ0FxTDF4dVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZDBlWEJsSnl4Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ1FrTVNncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbk5sZEhScGJtZHpMblI1Y0dVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQkhaWFJ6SUhaaGJIVmxJRzltSUhSb1pTQnBaR3hsSUhOMFlYUjFjeTVjY2x4dUlDQWdJQ0FxWEhKY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0Q2IyOXNaV0Z1ZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMlJwYzJGaWJHVmtKeXhjYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDUWtNU2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWtPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nVTJWMGN5QjJZV3gxWlNCdlppQjBhR1VnYVdSc1pTQnpkR0YwZFhNdVhISmNiaUFnSUNBZ0tseHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNjbHh1SUNBZ0lDQXFMMXh1SUNBZ0lDeGNiaUFnSUNCelpYUTZJR1oxYm1OMGFXOXVJSE5sZENRa01TaHpkR0YwZFhNcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJRZ1BTQWhJWE4wWVhSMWN6dGNiaUFnSUNCOVhHNGdJSDFkS1R0Y2JpQWdjbVYwZFhKdUlFZHNhV1JsTzF4dWZTZ3BPMXh1WEc1bWRXNWpkR2x2YmlCU2RXNGdLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpMQ0JGZG1WdWRITXBJSHRjYmlBZ2RtRnlJRkoxYmlBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwYVdGc2FYcGxjeUJoZFhSdmNuVnVibWx1WnlCdlppQjBhR1VnWjJ4cFpHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2ZFc1ME9pQm1kVzVqZEdsdmJpQnRiM1Z1ZENncElIdGNiaUFnSUNBZ0lIUm9hWE11WDI4Z1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQk5ZV3RsY3lCbmJHbGtaWE1nY25WdWJtbHVaeUJpWVhObFpDQnZiaUIwYUdVZ2NHRnpjMlZrSUcxdmRtbHVaeUJ6WTJobGJXRXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2JXOTJaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHMWhhMlU2SUdaMWJtTjBhVzl1SUcxaGEyVW9iVzkyWlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJRjkwYUdseklEMGdkR2hwY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLQ0ZIYkdsa1pTNWthWE5oWW14bFpDa2dlMXh1SUNBZ0lDQWdJQ0JIYkdsa1pTNWthWE5oWW14bEtDazdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXRiM1psSUQwZ2JXOTJaVHRjYmx4dUlDQWdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25jblZ1TG1KbFptOXlaU2NzSUhSb2FYTXViVzkyWlNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeGpkV3hoZEdVb0tUdGNibHh1SUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNuVnVKeXdnZEdocGN5NXRiM1psS1R0Y2JseHVJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMbFJ5WVc1emFYUnBiMjR1WVdaMFpYSW9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2hmZEdocGN5NXBjMDltWm5ObGRDZ25QQ2NwSUh4OElGOTBhR2x6TG1selQyWm1jMlYwS0NjK0p5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGOTBhR2x6TGw5dklEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHlkVzR1YjJabWMyVjBKeXdnWDNSb2FYTXViVzkyWlNrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ1JYWmxiblJ6TG1WdGFYUW9KM0oxYmk1aFpuUmxjaWNzSUY5MGFHbHpMbTF2ZG1VcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVaVzVoWW14bEtDazdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTmhiR04xYkdGMFpYTWdZM1Z5Y21WdWRDQnBibVJsZUNCaVlYTmxaQ0J2YmlCa1pXWnBibVZrSUcxdmRtVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR05oYkdOMWJHRjBaVG9nWm5WdVkzUnBiMjRnWTJGc1kzVnNZWFJsS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJRzF2ZG1VZ1BTQjBhR2x6TG0xdmRtVXNYRzRnSUNBZ0lDQWdJQ0FnYkdWdVozUm9JRDBnZEdocGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNCMllYSWdjM1JsY0hNZ1BTQnRiM1psTG5OMFpYQnpMRnh1SUNBZ0lDQWdJQ0FnSUdScGNtVmpkR2x2YmlBOUlHMXZkbVV1WkdseVpXTjBhVzl1TzF4dVhHNWNiaUFnSUNBZ0lIWmhjaUJqYjNWdWRHRmliR1ZUZEdWd2N5QTlJR2x6VG5WdFltVnlLSFJ2U1c1MEtITjBaWEJ6S1NrZ0ppWWdkRzlKYm5Rb2MzUmxjSE1wSUNFOVBTQXdPMXh1WEc0Z0lDQWdJQ0J6ZDJsMFkyZ2dLR1JwY21WamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCallYTmxJQ2MrSnpwY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSbGNITWdQVDA5SUNjK0p5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ2dQU0JzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpMbWx6Ulc1a0tDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doS0Vkc2FXUmxMbWx6Vkhsd1pTZ25jMnhwWkdWeUp5a2dKaVlnSVVkc2FXUmxMbk5sZEhScGJtZHpMbkpsZDJsdVpDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmJ5QTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ2dQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQkZkbVZ1ZEhNdVpXMXBkQ2duY25WdUxtVnVaQ2NzSUcxdmRtVXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1kyOTFiblJoWW14bFUzUmxjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0SUNzOUlFMWhkR2d1YldsdUtHeGxibWQwYUNBdElFZHNhV1JsTG1sdVpHVjRMQ0F0ZEc5SmJuUW9jM1JsY0hNcEtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ3JLenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNWNiaUFnSUNBZ0lDQWdZMkZ6WlNBblBDYzZYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tITjBaWEJ6SUQwOVBTQW5QQ2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXVhWE5UZEdGeWRDZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVNoSGJHbGtaUzVwYzFSNWNHVW9KM05zYVdSbGNpY3BJQ1ltSUNGSGJHbGtaUzV6WlhSMGFXNW5jeTV5WlhkcGJtUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyOGdQU0IwY25WbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJRDBnYkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25jblZ1TG5OMFlYSjBKeXdnYlc5MlpTazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoamIzVnVkR0ZpYkdWVGRHVndjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdSMnhwWkdVdWFXNWtaWGdnTFQwZ1RXRjBhQzV0YVc0b1IyeHBaR1V1YVc1a1pYZ3NJSFJ2U1c1MEtITjBaWEJ6S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUVkc2FXUmxMbWx1WkdWNExTMDdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSnowbk9seHVJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0SUQwZ2MzUmxjSE03WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyaGxZMnR6SUdsbUlIZGxJR0Z5WlNCdmJpQjBhR1VnWm1seWMzUWdjMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2x6VTNSaGNuUTZJR1oxYm1OMGFXOXVJR2x6VTNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdSMnhwWkdVdWFXNWtaWGdnUFQwOUlEQTdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJobFkydHpJR2xtSUhkbElHRnlaU0J2YmlCMGFHVWdiR0Z6ZENCemJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMEp2YjJ4bFlXNTlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2FYTkZibVE2SUdaMWJtTjBhVzl1SUdselJXNWtLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRWRzYVdSbExtbHVaR1Y0SUQwOVBTQjBhR2x6TG14bGJtZDBhRHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGFHVmphM01nYVdZZ2QyVWdZWEpsSUcxaGEybHVaeUJoSUc5bVpuTmxkQ0J5ZFc0dVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnWkdseVpXTjBhVzl1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3UW05dmJHVmhibjFjYmlBZ0lDQWdLaTljYmlBZ0lDQnBjMDltWm5ObGREb2dablZ1WTNScGIyNGdhWE5QWm1aelpYUW9aR2x5WldOMGFXOXVLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmJ5QW1KaUIwYUdsekxtMXZkbVV1WkdseVpXTjBhVzl1SUQwOVBTQmthWEpsWTNScGIyNDdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaFNkVzRzSUNkdGIzWmxKeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkbUZzZFdVZ2IyWWdkR2hsSUcxdmRtVWdjMk5vWlcxaExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXRPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdkbUZzZFdVZ2IyWWdkR2hsSUcxdmRtVWdjMk5vWlcxaExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlITmxkQ2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZmJTQTlJSHRjYmlBZ0lDQWdJQ0FnWkdseVpXTjBhVzl1T2lCMllXeDFaUzV6ZFdKemRISW9NQ3dnTVNrc1hHNGdJQ0FnSUNBZ0lITjBaWEJ6T2lCMllXeDFaUzV6ZFdKemRISW9NU2tnUHlCMllXeDFaUzV6ZFdKemRISW9NU2tnT2lBd1hHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdaR1ZtYVc1bEtGSjFiaXdnSjJ4bGJtZDBhQ2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCeWRXNXVhVzVuSUdScGMzUmhibU5sSUdKaGMyVmtYRzRnSUNBZ0lDb2diMjRnZW1WeWJ5MXBibVJsZUdsdVp5QnVkVzFpWlhJZ2IyWWdjMnhwWkdWekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlITmxkSFJwYm1keklEMGdSMnhwWkdVdWMyVjBkR2x1WjNNN1hHNGdJQ0FnSUNCMllYSWdiR1Z1WjNSb0lEMGdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuTnNhV1JsY3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0FnSUM4dklFbG1JSFJvWlNCZ1ltOTFibVJnSUc5d2RHbHZiaUJwY3lCaFkybDBkbVVzSUdFZ2JXRjRhVzExYlNCeWRXNXVhVzVuSUdScGMzUmhibU5sSUhOb2IzVnNaQ0JpWlZ4dUlDQWdJQ0FnTHk4Z2NtVmtkV05sWkNCaWVTQmdjR1Z5Vm1sbGQyQWdZVzVrSUdCbWIyTjFjMEYwWUNCelpYUjBhVzVuY3k0Z1VuVnVibWx1WnlCa2FYTjBZVzVqWlZ4dUlDQWdJQ0FnTHk4Z2MyaHZkV3hrSUdWdVpDQmlaV1p2Y21VZ1kzSmxZWFJwYm1jZ1lXNGdaVzF3ZEhrZ2MzQmhZMlVnWVdaMFpYSWdhVzV6ZEdGdVkyVXVYRzVjYmlBZ0lDQWdJR2xtSUNoSGJHbGtaUzVwYzFSNWNHVW9KM05zYVdSbGNpY3BJQ1ltSUhObGRIUnBibWR6TG1adlkzVnpRWFFnSVQwOUlDZGpaVzUwWlhJbklDWW1JSE5sZEhScGJtZHpMbUp2ZFc1a0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNaVzVuZEdnZ0xTQXhJQzBnS0hSdlNXNTBLSE5sZEhScGJtZHpMbkJsY2xacFpYY3BJQzBnTVNrZ0t5QjBiMGx1ZENoelpYUjBhVzVuY3k1bWIyTjFjMEYwS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUd4bGJtZDBhQ0F0SURFN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1VuVnVMQ0FuYjJabWMyVjBKeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdjM1JoZEhWeklHOW1JSFJvWlNCdlptWnpaWFIwYVc1bklHWnNZV2N1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDI4N1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z1VuVnVPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGSmxkSFZ5Ym5NZ1lTQmpkWEp5Wlc1MElIUnBiV1V1WEc0Z0tseHVJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnViM2NvS1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LVHRjYm4xY2JseHVMeW9xWEc0Z0tpQlNaWFIxY201eklHRWdablZ1WTNScGIyNHNJSFJvWVhRc0lIZG9aVzRnYVc1MmIydGxaQ3dnZDJsc2JDQnZibXg1SUdKbElIUnlhV2RuWlhKbFpGeHVJQ29nWVhRZ2JXOXpkQ0J2Ym1ObElHUjFjbWx1WnlCaElHZHBkbVZ1SUhkcGJtUnZkeUJ2WmlCMGFXMWxMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJR1oxYm1OY2JpQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZTQjNZV2wwWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEQxOUlHOXdkR2x2Ym5OY2JpQXFJRUJ5WlhSMWNtNGdlMFoxYm1OMGFXOXVmVnh1SUNwY2JpQXFJRUJ6WldVZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwycGhjMmhyWlc1aGN5OTFibVJsY25OamIzSmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlIUm9jbTkwZEd4bEtHWjFibU1zSUhkaGFYUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ2RtRnlJSFJwYldWdmRYUWdQU0IyYjJsa0lEQXNYRzRnSUNBZ0lDQmpiMjUwWlhoMElEMGdkbTlwWkNBd0xGeHVJQ0FnSUNBZ1lYSm5jeUE5SUhadmFXUWdNQ3hjYmlBZ0lDQWdJSEpsYzNWc2RDQTlJSFp2YVdRZ01EdGNiaUFnZG1GeUlIQnlaWFpwYjNWeklEMGdNRHRjYmlBZ2FXWWdLQ0Z2Y0hScGIyNXpLU0J2Y0hScGIyNXpJRDBnZTMwN1hHNWNiaUFnZG1GeUlHeGhkR1Z5SUQwZ1puVnVZM1JwYjI0Z2JHRjBaWElvS1NCN1hHNGdJQ0FnY0hKbGRtbHZkWE1nUFNCdmNIUnBiMjV6TG14bFlXUnBibWNnUFQwOUlHWmhiSE5sSUQ4Z01DQTZJRzV2ZHlncE8xeHVJQ0FnSUhScGJXVnZkWFFnUFNCdWRXeHNPMXh1SUNBZ0lISmxjM1ZzZENBOUlHWjFibU11WVhCd2JIa29ZMjl1ZEdWNGRDd2dZWEpuY3lrN1hHNGdJQ0FnYVdZZ0tDRjBhVzFsYjNWMEtTQmpiMjUwWlhoMElEMGdZWEpuY3lBOUlHNTFiR3c3WEc0Z0lIMDdYRzVjYmlBZ2RtRnlJSFJvY205MGRHeGxaQ0E5SUdaMWJtTjBhVzl1SUhSb2NtOTBkR3hsWkNncElIdGNiaUFnSUNCMllYSWdZWFFnUFNCdWIzY29LVHRjYmlBZ0lDQnBaaUFvSVhCeVpYWnBiM1Z6SUNZbUlHOXdkR2x2Ym5NdWJHVmhaR2x1WnlBOVBUMGdabUZzYzJVcElIQnlaWFpwYjNWeklEMGdZWFE3WEc0Z0lDQWdkbUZ5SUhKbGJXRnBibWx1WnlBOUlIZGhhWFFnTFNBb1lYUWdMU0J3Y21WMmFXOTFjeWs3WEc0Z0lDQWdZMjl1ZEdWNGRDQTlJSFJvYVhNN1hHNGdJQ0FnWVhKbmN5QTlJR0Z5WjNWdFpXNTBjenRjYmlBZ0lDQnBaaUFvY21WdFlXbHVhVzVuSUR3OUlEQWdmSHdnY21WdFlXbHVhVzVuSUQ0Z2QyRnBkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tIUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdZMnhsWVhKVWFXMWxiM1YwS0hScGJXVnZkWFFwTzF4dUlDQWdJQ0FnSUNCMGFXMWxiM1YwSUQwZ2JuVnNiRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEJ5WlhacGIzVnpJRDBnWVhRN1hHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCbWRXNWpMbUZ3Y0d4NUtHTnZiblJsZUhRc0lHRnlaM01wTzF4dUlDQWdJQ0FnYVdZZ0tDRjBhVzFsYjNWMEtTQmpiMjUwWlhoMElEMGdZWEpuY3lBOUlHNTFiR3c3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2doZEdsdFpXOTFkQ0FtSmlCdmNIUnBiMjV6TG5SeVlXbHNhVzVuSUNFOVBTQm1ZV3h6WlNrZ2UxeHVJQ0FnSUNBZ2RHbHRaVzkxZENBOUlITmxkRlJwYldWdmRYUW9iR0YwWlhJc0lISmxiV0ZwYm1sdVp5azdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzRnSUgwN1hHNWNiaUFnZEdoeWIzUjBiR1ZrTG1OaGJtTmxiQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCamJHVmhjbFJwYldWdmRYUW9kR2x0Wlc5MWRDazdYRzRnSUNBZ2NISmxkbWx2ZFhNZ1BTQXdPMXh1SUNBZ0lIUnBiV1Z2ZFhRZ1BTQmpiMjUwWlhoMElEMGdZWEpuY3lBOUlHNTFiR3c3WEc0Z0lIMDdYRzVjYmlBZ2NtVjBkWEp1SUhSb2NtOTBkR3hsWkR0Y2JuMWNibHh1ZG1GeUlFMUJVa2RKVGw5VVdWQkZJRDBnZTF4dUlDQnNkSEk2SUZzbmJXRnlaMmx1VEdWbWRDY3NJQ2R0WVhKbmFXNVNhV2RvZENkZExGeHVJQ0J5ZEd3NklGc25iV0Z5WjJsdVVtbG5hSFFuTENBbmJXRnlaMmx1VEdWbWRDZGRYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQkhZWEJ6SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJSFpoY2lCSFlYQnpJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVGd2NHeHBaWE1nWjJGd2N5QmlaWFIzWldWdUlITnNhV1JsY3k0Z1JtbHljM1FnWVc1a0lHeGhjM1JjYmlBZ0lDQWdLaUJ6Ykdsa1pYTWdaRzhnYm05MElISmxZMlZwZG1VZ2FYUW5jeUJsWkdkbElHMWhjbWRwYm5NdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBoVVRVeERiMnhzWldOMGFXOXVmU0J6Ykdsa1pYTmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0Z3Y0d4NU9pQm1kVzVqZEdsdmJpQmhjSEJzZVNoemJHbGtaWE1wSUh0Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdMQ0JzWlc0Z1BTQnpiR2xrWlhNdWJHVnVaM1JvT3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlITjBlV3hsSUQwZ2MyeHBaR1Z6VzJsZExuTjBlV3hsTzF4dUlDQWdJQ0FnSUNCMllYSWdaR2x5WldOMGFXOXVJRDBnUTI5dGNHOXVaVzUwY3k1RWFYSmxZM1JwYjI0dWRtRnNkV1U3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2tnSVQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNCemRIbHNaVnROUVZKSFNVNWZWRmxRUlZ0a2FYSmxZM1JwYjI1ZFd6QmRYU0E5SUhSb2FYTXVkbUZzZFdVZ0x5QXlJQ3NnSjNCNEp6dGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0J6ZEhsc1pWdE5RVkpIU1U1ZlZGbFFSVnRrYVhKbFkzUnBiMjVkV3pCZFhTQTlJQ2NuTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0drZ0lUMDlJSE5zYVdSbGN5NXNaVzVuZEdnZ0xTQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2MzUjViR1ZiVFVGU1IwbE9YMVJaVUVWYlpHbHlaV04wYVc5dVhWc3hYVjBnUFNCMGFHbHpMblpoYkhWbElDOGdNaUFySUNkd2VDYzdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnYzNSNWJHVmJUVUZTUjBsT1gxUlpVRVZiWkdseVpXTjBhVzl1WFZzeFhWMGdQU0FuSnp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdaMkZ3Y3lCbWNtOXRJSFJvWlNCemJHbGtaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMGhVVFV4RGIyeHNaV04wYVc5dWZTQnpiR2xrWlhOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQXFMMXh1SUNBZ0lISmxiVzkyWlRvZ1puVnVZM1JwYjI0Z2NtVnRiM1psS0hOc2FXUmxjeWtnZTF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQXNJR3hsYmlBOUlITnNhV1JsY3k1c1pXNW5kR2c3SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MzUjViR1VnUFNCemJHbGtaWE5iYVYwdWMzUjViR1U3WEc1Y2JpQWdJQ0FnSUNBZ2MzUjViR1V1YldGeVoybHVUR1ZtZENBOUlDY25PMXh1SUNBZ0lDQWdJQ0J6ZEhsc1pTNXRZWEpuYVc1U2FXZG9kQ0E5SUNjbk8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQmtaV1pwYm1Vb1IyRndjeXdnSjNaaGJIVmxKeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkbUZzZFdVZ2IyWWdkR2hsSUdkaGNDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEc5SmJuUW9SMnhwWkdVdWMyVjBkR2x1WjNNdVoyRndLVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hIWVhCekxDQW5aM0p2ZHljc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdGa1pHbDBhVzl1WVd3Z1pHbHRaVzUwYVc5dWN5QjJZV3gxWlNCallYVnpaV1FnWW5rZ1oyRndjeTVjYmlBZ0lDQWdLaUJWYzJWa0lIUnZJR2x1WTNKbFlYTmxJSGRwWkhSb0lHOW1JSFJvWlNCemJHbGtaWE1nZDNKaGNIQmxjaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRPZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1IyRndjeTUyWVd4MVpTQXFJQ2hEYjIxd2IyNWxiblJ6TGxOcGVtVnpMbXhsYm1kMGFDQXRJREVwTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ1pHVm1hVzVsS0VkaGNITXNJQ2R5WldSMVkzUnZjaWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJSEpsWkhWamRHbHZiaUIyWVd4MVpTQmpZWFZ6WldRZ1lua2daMkZ3Y3k1Y2JpQWdJQ0FnS2lCVmMyVmtJSFJ2SUhOMVluUnlZV04wSUhkcFpIUm9JRzltSUhSb1pTQnpiR2xrWlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIQmxjbFpwWlhjZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3k1d1pYSldhV1YzTzF4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnUjJGd2N5NTJZV3gxWlNBcUlDaHdaWEpXYVdWM0lDMGdNU2tnTHlCd1pYSldhV1YzTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFRndjR3g1SUdOaGJHTjFiR0YwWldRZ1oyRndjenBjYmlBZ0lDb2dMU0JoWm5SbGNpQmlkV2xzWkdsdVp5d2djMjhnYzJ4cFpHVnpJQ2hwYm1Oc2RXUnBibWNnWTJ4dmJtVnpLU0IzYVd4c0lISmxZMlZwZG1VZ2NISnZjR1Z5SUcxaGNtZHBibk5jYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKTENCMGJ5QnlaV05oYkdOMWJHRjBaU0JuWVhCeklIZHBkR2dnYm1WM0lHOXdkR2x2Ym5OY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMkoxYVd4a0xtRm1kR1Z5Snl3Z0ozVndaR0YwWlNkZExDQjBhSEp2ZEhSc1pTaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdSMkZ3Y3k1aGNIQnNlU2hEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpNWphR2xzWkhKbGJpazdYRzRnSUgwc0lETXdLU2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsYlc5MlpTQm5ZWEJ6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY2dkRzhnWW5KcGJtY2diV0Z5YTNWd0lIUnZJR2wwY3lCcGJtbDBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCSFlYQnpMbkpsYlc5MlpTaERiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1amFHbHNaSEpsYmlrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQkhZWEJ6TzF4dWZWeHVYRzR2S2lwY2JpQXFJRVpwYm1SeklITnBZbXhwYm1keklHNXZaR1Z6SUc5bUlIUm9aU0J3WVhOelpXUWdibTlrWlM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUh0RmJHVnRaVzUwZlNCdWIyUmxYRzRnS2lCQWNtVjBkWEp1SUh0QmNuSmhlWDFjYmlBcUwxeHVablZ1WTNScGIyNGdjMmxpYkdsdVozTW9ibTlrWlNrZ2UxeHVJQ0JwWmlBb2JtOWtaU0FtSmlCdWIyUmxMbkJoY21WdWRFNXZaR1VwSUh0Y2JpQWdJQ0IyWVhJZ2JpQTlJRzV2WkdVdWNHRnlaVzUwVG05a1pTNW1hWEp6ZEVOb2FXeGtPMXh1SUNBZ0lIWmhjaUJ0WVhSamFHVmtJRDBnVzEwN1hHNWNiaUFnSUNCbWIzSWdLRHNnYmpzZ2JpQTlJRzR1Ym1WNGRGTnBZbXhwYm1jcElIdGNiaUFnSUNBZ0lHbG1JQ2h1TG01dlpHVlVlWEJsSUQwOVBTQXhJQ1ltSUc0Z0lUMDlJRzV2WkdVcElIdGNiaUFnSUNBZ0lDQWdiV0YwWTJobFpDNXdkWE5vS0c0cE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ0WVhSamFHVmtPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRnRkTzF4dWZWeHVYRzR2S2lwY2JpQXFJRU5vWldOcmN5QnBaaUJ3WVhOelpXUWdibTlrWlNCbGVHbHpkQ0JoYm1RZ2FYTWdZU0IyWVd4cFpDQmxiR1Z0Wlc1MExseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwVnNaVzFsYm5SOUlHNXZaR1ZjYmlBcUlFQnlaWFIxY200Z2UwSnZiMnhsWVc1OVhHNGdLaTljYm1aMWJtTjBhVzl1SUdWNGFYTjBLRzV2WkdVcElIdGNiaUFnYVdZZ0tHNXZaR1VnSmlZZ2JtOWtaU0JwYm5OMFlXNWpaVzltSUhkcGJtUnZkeTVJVkUxTVJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHWmhiSE5sTzF4dWZWeHVYRzUyWVhJZ1ZGSkJRMHRmVTBWTVJVTlVUMUlnUFNBblcyUmhkR0V0WjJ4cFpHVXRaV3c5WENKMGNtRmphMXdpWFNjN1hHNWNibVoxYm1OMGFXOXVJRWgwYld3Z0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SektTQjdYRzRnSUhaaGNpQklkRzFzSUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSFZ3SUhOc2FXUmxjaUJJVkUxTUlHNXZaR1Z6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRIYkdsa1pYMGdaMnhwWkdWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG5KdmIzUWdQU0JIYkdsa1pTNXpaV3hsWTNSdmNqdGNiaUFnSUNBZ0lIUm9hWE11ZEhKaFkyc2dQU0IwYUdsekxuSnZiM1F1Y1hWbGNubFRaV3hsWTNSdmNpaFVVa0ZEUzE5VFJVeEZRMVJQVWlrN1hHNGdJQ0FnSUNCMGFHbHpMbk5zYVdSbGN5QTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLSFJvYVhNdWQzSmhjSEJsY2k1amFHbHNaSEpsYmlrdVptbHNkR1Z5S0daMWJtTjBhVzl1SUNoemJHbGtaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSVhOc2FXUmxMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWhIYkdsa1pTNXpaWFIwYVc1bmN5NWpiR0Z6YzJWekxtTnNiMjVsVTJ4cFpHVXBPMXh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdSbFptbHVaU2hJZEcxc0xDQW5jbTl2ZENjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUc1dlpHVWdiMllnZEdobElHZHNhV1JsSUcxaGFXNGdaV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJJZEcxc0xsOXlPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdibTlrWlNCdlppQjBhR1VnWjJ4cFpHVWdiV0ZwYmlCbGJHVnRaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnYzJWMEtISXBJSHRjYmlBZ0lDQWdJR2xtSUNocGMxTjBjbWx1WnloeUtTa2dlMXh1SUNBZ0lDQWdJQ0J5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWh5S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLR1Y0YVhOMEtISXBLU0I3WEc0Z0lDQWdJQ0FnSUVoMGJXd3VYM0lnUFNCeU8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2QyRnliaWduVW05dmRDQmxiR1Z0Wlc1MElHMTFjM1FnWW1VZ1lTQmxlR2x6ZEdsdVp5QklkRzFzSUc1dlpHVW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hJZEcxc0xDQW5kSEpoWTJzbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCdWIyUmxJRzltSUhSb1pTQm5iR2xrWlNCMGNtRmpheUIzYVhSb0lITnNhV1JsY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQklkRzFzTGw5ME8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2JtOWtaU0J2WmlCMGFHVWdaMnhwWkdVZ2RISmhZMnNnZDJsMGFDQnpiR2xrWlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjMlYwT2lCbWRXNWpkR2x2YmlCelpYUW9kQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tHVjRhWE4wS0hRcEtTQjdYRzRnSUNBZ0lDQWdJRWgwYld3dVgzUWdQU0IwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25RMjkxYkdRZ2JtOTBJR1pwYm1RZ2RISmhZMnNnWld4bGJXVnVkQzRnVUd4bFlYTmxJSFZ6WlNBbklDc2dWRkpCUTB0ZlUwVk1SVU5VVDFJZ0t5QW5JR0YwZEhKcFluVjBaUzRuS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lHUmxabWx1WlNoSWRHMXNMQ0FuZDNKaGNIQmxjaWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJRzV2WkdVZ2IyWWdkR2hsSUhOc2FXUmxjeUIzY21Gd2NHVnlMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVoMGJXd3VkSEpoWTJzdVkyaHBiR1J5Wlc1Yk1GMDdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdTSFJ0YkR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnVUdWbGF5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNCMllYSWdVR1ZsYXlBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFIxY0hNZ2FHOTNJRzExWTJnZ2RHOGdjR1ZsYXlCaVlYTmxaQ0J2YmlCelpYUjBhVzVuY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NTJZV3gxWlNBOUlFZHNhV1JsTG5ObGRIUnBibWR6TG5CbFpXczdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaFFaV1ZyTENBbmRtRnNkV1VuTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUIyWVd4MVpTQnZaaUIwYUdVZ2NHVmxheTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRPZFcxaVpYSjhUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUZCbFpXc3VYM1k3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1UyVjBjeUIyWVd4MVpTQnZaaUIwYUdVZ2NHVmxheTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUblZ0WW1WeWZFOWlhbVZqZEgwZ2RtRnNkV1ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FYTlBZbXBsWTNRb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG1KbFptOXlaU0E5SUhSdlNXNTBLSFpoYkhWbExtSmxabTl5WlNrN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG1GbWRHVnlJRDBnZEc5SmJuUW9kbUZzZFdVdVlXWjBaWElwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0IwYjBsdWRDaDJZV3gxWlNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lGQmxaV3N1WDNZZ1BTQjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lHUmxabWx1WlNoUVpXVnJMQ0FuY21Wa2RXTjBiM0luTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUJ5WldSMVkzUnBiMjRnZG1Gc2RXVWdZMkYxYzJWa0lHSjVJSEJsWldzdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlIWmhiSFZsSUQwZ1VHVmxheTUyWVd4MVpUdGNiaUFnSUNBZ0lIWmhjaUJ3WlhKV2FXVjNJRDBnUjJ4cFpHVXVjMlYwZEdsdVozTXVjR1Z5Vm1sbGR6dGNibHh1SUNBZ0lDQWdhV1lnS0dselQySnFaV04wS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZG1Gc2RXVXVZbVZtYjNKbElDOGdjR1Z5Vm1sbGR5QXJJSFpoYkhWbExtRm1kR1Z5SUM4Z2NHVnlWbWxsZHp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxJQ29nTWlBdklIQmxjbFpwWlhjN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZqWVd4amRXeGhkR1VnY0dWbGEybHVaeUJ6YVhwbGN5QnZianBjYmlBZ0lDb2dMU0IzYUdWdUlISmxjMmw2YVc1bklIZHBibVJ2ZHlCMGJ5QjFjR1JoZEdVZ2RHOGdjSEp2Y0dWeUlIQmxjbU5sYm5SelhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9XeWR5WlhOcGVtVW5MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCUVpXVnJMbTF2ZFc1MEtDazdYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJRWldWck8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCTmIzWmxJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJOYjNabElEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU52Ym5OMGNuVmpkSE1nYlc5MlpTQmpiMjF3YjI1bGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5dklEMGdNRHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRFlXeGpkV3hoZEdWeklHRWdiVzkyWlcxbGJuUWdkbUZzZFdVZ1ltRnpaV1FnYjI0Z2NHRnpjMlZrSUc5bVpuTmxkQ0JoYm1RZ1kzVnljbVZ1ZEd4NUlHRmpkR2wyWlNCcGJtUmxlQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdiMlptYzJWMFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRZV3RsT2lCbWRXNWpkR2x2YmlCdFlXdGxLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlGOTBhR2x6SUQwZ2RHaHBjenRjYmx4dUlDQWdJQ0FnZG1GeUlHOW1abk5sZENBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nTUR0Y2JseHVJQ0FnSUNBZ2RHaHBjeTV2Wm1aelpYUWdQU0J2Wm1aelpYUTdYRzVjYmlBZ0lDQWdJRVYyWlc1MGN5NWxiV2wwS0NkdGIzWmxKeXdnZTF4dUlDQWdJQ0FnSUNCdGIzWmxiV1Z1ZERvZ2RHaHBjeTUyWVd4MVpWeHVJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1aFpuUmxjaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R0YjNabExtRm1kR1Z5Snl3Z2UxeHVJQ0FnSUNBZ0lDQWdJRzF2ZG1WdFpXNTBPaUJmZEdocGN5NTJZV3gxWlZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0JrWldacGJtVW9UVzkyWlN3Z0oyOW1abk5sZENjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdGdUlHOW1abk5sZENCMllXeDFaU0IxYzJWa0lIUnZJRzF2WkdsbWVTQmpkWEp5Wlc1MElIUnlZVzV6YkdGMFpTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwOWlhbVZqZEgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJOYjNabExsOXZPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdZVzRnYjJabWMyVjBJSFpoYkhWbElIVnpaV1FnZEc4Z2JXOWthV1o1SUdOMWNuSmxiblFnZEhKaGJuTnNZWFJsTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnYzJWMEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCTmIzWmxMbDl2SUQwZ0lXbHpWVzVrWldacGJtVmtLSFpoYkhWbEtTQS9JSFJ2U1c1MEtIWmhiSFZsS1NBNklEQTdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0JrWldacGJtVW9UVzkyWlN3Z0ozUnlZVzV6YkdGMFpTY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHRWdjbUYzSUcxdmRtVnRaVzUwSUhaaGJIVmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUVOdmJYQnZibVZ1ZEhNdVUybDZaWE11YzJ4cFpHVlhhV1IwYUNBcUlFZHNhV1JsTG1sdVpHVjRPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnWkdWbWFXNWxLRTF2ZG1Vc0lDZDJZV3gxWlNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdGdUlHRmpkSFZoYkNCdGIzWmxiV1Z1ZENCMllXeDFaU0JqYjNKeVpXTjBaV1FnWW5rZ2IyWm1jMlYwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUc5bVpuTmxkQ0E5SUhSb2FYTXViMlptYzJWME8xeHVJQ0FnSUNBZ2RtRnlJSFJ5WVc1emJHRjBaU0E5SUhSb2FYTXVkSEpoYm5Oc1lYUmxPMXh1WEc0Z0lDQWdJQ0JwWmlBb1EyOXRjRzl1Wlc1MGN5NUVhWEpsWTNScGIyNHVhWE1vSjNKMGJDY3BLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnS3lCdlptWnpaWFE3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnTFNCdlptWnpaWFE3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1RXRnJaU0J0YjNabGJXVnVkQ0IwYnlCd2NtOXdaWElnYzJ4cFpHVWdiMjQ2WEc0Z0lDQXFJQzBnWW1WbWIzSmxJR0oxYVd4a0xDQnpieUJuYkdsa1pTQjNhV3hzSUhOMFlYSjBJR0YwSUdCemRHRnlkRUYwWUNCcGJtUmxlRnh1SUNBZ0tpQXRJRzl1SUdWaFkyZ2djM1JoYm1SaGNtUWdjblZ1SUhSdklHMXZkbVVnZEc4Z2JtVjNiSGtnWTJGc1kzVnNZWFJsWkNCcGJtUmxlRnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0ZzblluVnBiR1F1WW1WbWIzSmxKeXdnSjNKMWJpZGRMQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnVFc5MlpTNXRZV3RsS0NrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQk5iM1psTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJUYVhwbGN5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNCMllYSWdVMmw2WlhNZ1BTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVMlYwZFhCeklHUnBiV1Z1ZEdsdmJuTWdiMllnYzJ4cFpHVnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6WlhSMWNGTnNhV1JsY3pvZ1puVnVZM1JwYjI0Z2MyVjBkWEJUYkdsa1pYTW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyeHBaR1Z6SUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjenRjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCemJHbGtaWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdjMnhwWkdWelcybGRMbk4wZVd4bExuZHBaSFJvSUQwZ2RHaHBjeTV6Ykdsa1pWZHBaSFJvSUNzZ0ozQjRKenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVFpYUjFjSE1nWkdsdFpXNTBhVzl1Y3lCdlppQnpiR2xrWlhNZ2QzSmhjSEJsY2k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MyVjBkWEJYY21Gd2NHVnlPaUJtZFc1amRHbHZiaUJ6WlhSMWNGZHlZWEJ3WlhJb1pHbHRaVzUwYVc5dUtTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1emRIbHNaUzUzYVdSMGFDQTlJSFJvYVhNdWQzSmhjSEJsY2xOcGVtVWdLeUFuY0hnbk8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdZWEJ3YkdsbFpDQnpkSGxzWlhNZ1puSnZiU0JJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabE9pQm1kVzVqZEdsdmJpQnlaVzF2ZG1Vb0tTQjdYRzRnSUNBZ0lDQjJZWElnYzJ4cFpHVnpJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbk5zYVdSbGN6dGNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6Ykdsa1pYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2MyeHBaR1Z6VzJsZExuTjBlV3hsTG5kcFpIUm9JRDBnSnljN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5TG5OMGVXeGxMbmRwWkhSb0lEMGdKeWM3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdSbFptbHVaU2hUYVhwbGN5d2dKMnhsYm1kMGFDY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHTnZkVzUwSUc1MWJXSmxjaUJ2WmlCMGFHVWdjMnhwWkdWekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRU52YlhCdmJtVnVkSE11U0hSdGJDNXpiR2xrWlhNdWJHVnVaM1JvTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ1pHVm1hVzVsS0ZOcGVtVnpMQ0FuZDJsa2RHZ25MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QjNhV1IwYUNCMllXeDFaU0J2WmlCMGFHVWdaMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1YjJabWMyVjBWMmxrZEdnN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1UybDZaWE1zSUNkM2NtRndjR1Z5VTJsNlpTY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklITnBlbVVnYjJZZ2RHaGxJSE5zYVdSbGN5QjNjbUZ3Y0dWeUxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRk5wZW1WekxuTnNhV1JsVjJsa2RHZ2dLaUJUYVhwbGN5NXNaVzVuZEdnZ0t5QkRiMjF3YjI1bGJuUnpMa2RoY0hNdVozSnZkeUFySUVOdmJYQnZibVZ1ZEhNdVEyeHZibVZ6TG1keWIzYzdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0JrWldacGJtVW9VMmw2WlhNc0lDZHpiR2xrWlZkcFpIUm9KeXdnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkMmxrZEdnZ2RtRnNkV1VnYjJZZ2RHaGxJSE5wYm1kc1pTQnpiR2xrWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQlRhWHBsY3k1M2FXUjBhQ0F2SUVkc2FXUmxMbk5sZEhScGJtZHpMbkJsY2xacFpYY2dMU0JEYjIxd2IyNWxiblJ6TGxCbFpXc3VjbVZrZFdOMGIzSWdMU0JEYjIxd2IyNWxiblJ6TGtkaGNITXVjbVZrZFdOMGIzSTdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVhCd2JIa2dZMkZzWTNWc1lYUmxaQ0JuYkdsa1pTZHpJR1JwYldWdWMybHZibk02WEc0Z0lDQXFJQzBnWW1WbWIzSmxJR0oxYVd4a2FXNW5MQ0J6YnlCdmRHaGxjaUJrYVcxbGJuUnBiMjV6SUNobExtY3VJSFJ5WVc1emJHRjBaU2tnZDJsc2JDQmlaU0JqWVd4amRXeGhkR1ZrSUhCeWIzQmxjblJzZVZ4dUlDQWdLaUF0SUhkb1pXNGdjbVZ6YVhwcGJtY2dkMmx1Wkc5M0lIUnZJSEpsWTJGc1kzVnNZWFJsSUhOcGJHUmxjeUJrYVcxbGJuTnBiMjV6WEc0Z0lDQXFJQzBnYjI0Z2RYQmtZWFJwYm1jZ2RtbGhJRUZRU1N3Z2RHOGdZMkZzWTNWc1lYUmxJR1JwYldWdWMybHZibk1nWW1GelpXUWdiMjRnYm1WM0lHOXdkR2x2Ym5OY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMkoxYVd4a0xtSmxabTl5WlNjc0lDZHlaWE5wZW1VbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JUYVhwbGN5NXpaWFIxY0ZOc2FXUmxjeWdwTzF4dUlDQWdJRk5wZW1WekxuTmxkSFZ3VjNKaGNIQmxjaWdwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElHTmhiR04xYkdGMFpXUWdaMnhwWkdVbmN5QmthVzFsYm5OcGIyNXpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnZkR2x1WnlCMGJ5QmljbWx1WnlCdFlYSnJkWEFnZEc4Z2FYUnpJR2x1YVhSaGJDQnpkR0YwWlZ4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZGtaWE4wY205NUp5d2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRk5wZW1WekxuSmxiVzkyWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdVMmw2WlhNN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUVKMWFXeGtJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJDZFdsc1pDQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJKYm1sMElHZHNhV1JsSUdKMWFXeGthVzVuTGlCQlpHUnpJR05zWVhOelpYTXNJSE5sZEhOY2JpQWdJQ0FnS2lCa2FXMWxibk5wYjI1eklHRnVaQ0J6WlhSMWNITWdhVzVwZEdsaGJDQnpkR0YwWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnUlhabGJuUnpMbVZ0YVhRb0oySjFhV3hrTG1KbFptOXlaU2NwTzF4dVhHNGdJQ0FnSUNCMGFHbHpMblI1Y0dWRGJHRnpjeWdwTzF4dUlDQWdJQ0FnZEdocGN5NWhZM1JwZG1WRGJHRnpjeWdwTzF4dVhHNGdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25ZblZwYkdRdVlXWjBaWEluS1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJaR1J6SUdCMGVYQmxZQ0JqYkdGemN5QjBieUIwYUdVZ1oyeHBaR1VnWld4bGJXVnVkQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnZEhsd1pVTnNZWE56T2lCbWRXNWpkR2x2YmlCMGVYQmxRMnhoYzNNb0tTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWNtOXZkQzVqYkdGemMweHBjM1F1WVdSa0tFZHNhV1JsTG5ObGRIUnBibWR6TG1Oc1lYTnpaWE5iUjJ4cFpHVXVjMlYwZEdsdVozTXVkSGx3WlYwcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ1lXTjBhWFpsSUdOc1lYTnpJSFJ2SUdOMWNuSmxiblFnYzJ4cFpHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0ZqZEdsMlpVTnNZWE56T2lCbWRXNWpkR2x2YmlCaFkzUnBkbVZEYkdGemN5Z3BJSHRjYmlBZ0lDQWdJSFpoY2lCamJHRnpjMlZ6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM011WTJ4aGMzTmxjenRjYmlBZ0lDQWdJSFpoY2lCemJHbGtaU0E5SUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzV6Ykdsa1pYTmJSMnhwWkdVdWFXNWtaWGhkTzF4dVhHNGdJQ0FnSUNCcFppQW9jMnhwWkdVcElIdGNiaUFnSUNBZ0lDQWdjMnhwWkdVdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMyVnpMbUZqZEdsMlpWTnNhV1JsS1R0Y2JseHVJQ0FnSUNBZ0lDQnphV0pzYVc1bmN5aHpiR2xrWlNrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2MybGliR2x1WnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSE5wWW14cGJtY3VZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGpiR0Z6YzJWekxtRmpkR2wyWlZOc2FXUmxLVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5QklWRTFNSUdOc1lYTnpaWE1nWVhCd2JHbGxaQ0JoZENCaWRXbHNaR2x1Wnk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psUTJ4aGMzTmxjem9nWm5WdVkzUnBiMjRnY21WdGIzWmxRMnhoYzNObGN5Z3BJSHRjYmlBZ0lDQWdJSFpoY2lCamJHRnpjMlZ6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM011WTJ4aGMzTmxjenRjYmx4dUlDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbkp2YjNRdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJHRnpjMlZ6VzBkc2FXUmxMbk5sZEhScGJtZHpMblI1Y0dWZEtUdGNibHh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuTnNhV1JsY3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoemFXSnNhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lITnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJHRnpjMlZ6TG1GamRHbDJaVk5zYVdSbEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUTJ4bFlYSWdZblZwYkdScGJtY2dZMnhoYzNObGN6cGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklHSnlhVzVuSUVoVVRVd2dkRzhnYVhSeklHbHVhWFJwWVd3Z2MzUmhkR1ZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMGJ5QnlaVzF2ZG1VZ1kyeGhjM05sY3lCaVpXWnZjbVVnY21WdGIzVnVkR2x1WnlCamIyMXdiMjVsYm5SY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMlJsYzNSeWIza25MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQ2RXbHNaQzV5WlcxdmRtVkRiR0Z6YzJWektDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pXMXZkVzUwSUdOdmJYQnZibVZ1ZERwY2JpQWdJQ29nTFNCdmJpQnlaWE5wZW1sdVp5QnZaaUIwYUdVZ2QybHVaRzkzSUhSdklHTmhiR04xYkdGMFpTQnVaWGNnWkdsdFpXNTBhVzl1YzF4dUlDQWdLaUF0SUc5dUlIVndaR0YwYVc1bklITmxkSFJwYm1keklIWnBZU0JCVUVsY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKM0psYzJsNlpTY3NJQ2QxY0dSaGRHVW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVKMWFXeGtMbTF2ZFc1MEtDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVGQyRndJR0ZqZEdsMlpTQmpiR0Z6Y3lCdlppQmpkWEp5Wlc1MElITnNhV1JsT2x4dUlDQWdLaUF0SUdGbWRHVnlJR1ZoWTJnZ2JXOTJaU0IwYnlCMGFHVWdibVYzSUdsdVpHVjRYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjIxdmRtVXVZV1owWlhJbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdRblZwYkdRdVlXTjBhWFpsUTJ4aGMzTW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVKMWFXeGtPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQkRiRzl1WlhNZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnZG1GeUlFTnNiMjVsY3lBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRjbVZoZEdVZ2NHRjBkR1Z5YmlCdFlYQWdZVzVrSUdOdmJHeGxZM1FnYzJ4cFpHVnpJSFJ2SUdKbElHTnNiMjVsWkM1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1sMFpXMXpJRDBnVzEwN1hHNWNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXBjMVI1Y0dVb0oyTmhjbTkxYzJWc0p5a3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBkR1Z0Y3lBOUlIUm9hWE11WTI5c2JHVmpkQ2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTnZiR3hsWTNRZ1kyeHZibVZ6SUhkcGRHZ2djR0YwZEdWeWJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZMjlzYkdWamREb2dablZ1WTNScGIyNGdZMjlzYkdWamRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCcGRHVnRjeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dXMTA3WEc0Z0lDQWdJQ0IyWVhJZ2MyeHBaR1Z6SUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjenRjYmlBZ0lDQWdJSFpoY2lCZlIyeHBaR1VrYzJWMGRHbHVaM01nUFNCSGJHbGtaUzV6WlhSMGFXNW5jeXhjYmlBZ0lDQWdJQ0FnSUNCd1pYSldhV1YzSUQwZ1gwZHNhV1JsSkhObGRIUnBibWR6TG5CbGNsWnBaWGNzWEc0Z0lDQWdJQ0FnSUNBZ1kyeGhjM05sY3lBOUlGOUhiR2xrWlNSelpYUjBhVzVuY3k1amJHRnpjMlZ6TzF4dVhHNWNiaUFnSUNBZ0lIWmhjaUJ3WldWclNXNWpjbVZ0Wlc1MFpYSWdQU0FySVNGSGJHbGtaUzV6WlhSMGFXNW5jeTV3WldWck8xeHVJQ0FnSUNBZ2RtRnlJSEJoY25RZ1BTQndaWEpXYVdWM0lDc2djR1ZsYTBsdVkzSmxiV1Z1ZEdWeU8xeHVJQ0FnSUNBZ2RtRnlJSE4wWVhKMElEMGdjMnhwWkdWekxuTnNhV05sS0RBc0lIQmhjblFwTzF4dUlDQWdJQ0FnZG1GeUlHVnVaQ0E5SUhOc2FXUmxjeTV6YkdsalpTZ3RjR0Z5ZENrN1hHNWNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlISWdQU0F3T3lCeUlEd2dUV0YwYUM1dFlYZ29NU3dnVFdGMGFDNW1iRzl2Y2lod1pYSldhV1YzSUM4Z2MyeHBaR1Z6TG14bGJtZDBhQ2twT3lCeUt5c3BJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCemRHRnlkQzVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamJHOXVaU0E5SUhOMFlYSjBXMmxkTG1Oc2IyNWxUbTlrWlNoMGNuVmxLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHTnNiMjVsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9ZMnhoYzNObGN5NWpiRzl1WlZOc2FXUmxLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHbDBaVzF6TG5CMWMyZ29ZMnh2Ym1VcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnWDJrZ1BTQXdPeUJmYVNBOElHVnVaQzVzWlc1bmRHZzdJRjlwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ1gyTnNiMjVsSUQwZ1pXNWtXMTlwWFM1amJHOXVaVTV2WkdVb2RISjFaU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQmZZMnh2Ym1VdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMyVnpMbU5zYjI1bFUyeHBaR1VwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdhWFJsYlhNdWRXNXphR2xtZENoZlkyeHZibVVwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCcGRHVnRjenRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQmNIQmxibVFnWTJ4dmJtVmtJSE5zYVdSbGN5QjNhWFJvSUdkbGJtVnlZWFJsWkNCd1lYUjBaWEp1TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaGNIQmxibVE2SUdaMWJtTjBhVzl1SUdGd2NHVnVaQ2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQnBkR1Z0Y3lBOUlIUm9hWE11YVhSbGJYTTdYRzRnSUNBZ0lDQjJZWElnWDBOdmJYQnZibVZ1ZEhNa1NIUnRiQ0E5SUVOdmJYQnZibVZ1ZEhNdVNIUnRiQ3hjYmlBZ0lDQWdJQ0FnSUNCM2NtRndjR1Z5SUQwZ1gwTnZiWEJ2Ym1WdWRITWtTSFJ0YkM1M2NtRndjR1Z5TEZ4dUlDQWdJQ0FnSUNBZ0lITnNhV1JsY3lBOUlGOURiMjF3YjI1bGJuUnpKRWgwYld3dWMyeHBaR1Z6TzF4dVhHNWNiaUFnSUNBZ0lIWmhjaUJvWVd4bUlEMGdUV0YwYUM1bWJHOXZjaWhwZEdWdGN5NXNaVzVuZEdnZ0x5QXlLVHRjYmlBZ0lDQWdJSFpoY2lCd2NtVndaVzVrSUQwZ2FYUmxiWE11YzJ4cFkyVW9NQ3dnYUdGc1ppa3VjbVYyWlhKelpTZ3BPMXh1SUNBZ0lDQWdkbUZ5SUdGd2NHVnVaQ0E5SUdsMFpXMXpMbk5zYVdObEtHaGhiR1lzSUdsMFpXMXpMbXhsYm1kMGFDazdYRzVjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWVhCd1pXNWtMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lIZHlZWEJ3WlhJdVlYQndaVzVrUTJocGJHUW9ZWEJ3Wlc1a1cybGRLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnWDJreUlEMGdNRHNnWDJreUlEd2djSEpsY0dWdVpDNXNaVzVuZEdnN0lGOXBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lIZHlZWEJ3WlhJdWFXNXpaWEowUW1WbWIzSmxLSEJ5WlhCbGJtUmJYMmt5WFN3Z2MyeHBaR1Z6V3pCZEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdYMmt6SUQwZ01Ec2dYMmt6SUR3Z2FYUmxiWE11YkdWdVozUm9PeUJmYVRNckt5a2dlMXh1SUNBZ0lDQWdJQ0JwZEdWdGMxdGZhVE5kTG5OMGVXeGxMbmRwWkhSb0lEMGdRMjl0Y0c5dVpXNTBjeTVUYVhwbGN5NXpiR2xrWlZkcFpIUm9JQ3NnSjNCNEp6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVWdZV3hzSUdOc2IyNWxaQ0J6Ykdsa1pYTXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSEpsYlc5MlpUb2dablZ1WTNScGIyNGdjbVZ0YjNabEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUdsMFpXMXpJRDBnZEdocGN5NXBkR1Z0Y3p0Y2JseHVYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR2wwWlcxekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMbkpsYlc5MlpVTm9hV3hrS0dsMFpXMXpXMmxkS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ1pHVm1hVzVsS0VOc2IyNWxjeXdnSjJkeWIzY25MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QmhaR1JwZEdsdmJtRnNJR1JwYldWdWRHbHZibk1nZG1Gc2RXVWdZMkYxYzJWa0lHSjVJR05zYjI1bGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvUTI5dGNHOXVaVzUwY3k1VGFYcGxjeTV6Ykdsa1pWZHBaSFJvSUNzZ1EyOXRjRzl1Wlc1MGN5NUhZWEJ6TG5aaGJIVmxLU0FxSUVOc2IyNWxjeTVwZEdWdGN5NXNaVzVuZEdnN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWEJ3Wlc1a0lHRmtaR2wwYVc5dVlXd2djMnhwWkdVbmN5QmpiRzl1WlhNNlhHNGdJQ0FxSUMwZ2QyaHBiR1VnWjJ4cFpHVW5jeUIwZVhCbElHbHpJR0JqWVhKdmRYTmxiR0JjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmRYQmtZWFJsSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFTnNiMjVsY3k1eVpXMXZkbVVvS1R0Y2JpQWdJQ0JEYkc5dVpYTXViVzkxYm5Rb0tUdGNiaUFnSUNCRGJHOXVaWE11WVhCd1pXNWtLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkJjSEJsYm1RZ1lXUmthWFJwYjI1aGJDQnpiR2xrWlNkeklHTnNiMjVsY3pwY2JpQWdJQ29nTFNCM2FHbHNaU0JuYkdsa1pTZHpJSFI1Y0dVZ2FYTWdZR05oY205MWMyVnNZRnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0NkaWRXbHNaQzVpWldadmNtVW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnYVdZZ0tFZHNhV1JsTG1selZIbHdaU2duWTJGeWIzVnpaV3duS1NrZ2UxeHVJQ0FnSUNBZ1EyeHZibVZ6TG1Gd2NHVnVaQ2dwTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCamJHOXVaWE1nU0ZSTlRFVnNaVzFsYm5Sek9seHVJQ0FnS2lBdElHOXVJR1JsYzNSeWIzbHBibWNzSUhSdklHSnlhVzVuSUVoVVRVd2dkRzhnYVhSeklHbHVhWFJwWVd3Z2MzUmhkR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkRiRzl1WlhNdWNtVnRiM1psS0NrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQkRiRzl1WlhNN1hHNTlYRzVjYm5aaGNpQkZkbVZ1ZEhOQ2FXNWtaWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUM4cUtseHVJQ0FnS2lCRGIyNXpkSEoxWTNRZ1lTQkZkbVZ1ZEhOQ2FXNWtaWElnYVc1emRHRnVZMlV1WEc0Z0lDQXFMMXh1SUNCbWRXNWpkR2x2YmlCRmRtVnVkSE5DYVc1a1pYSW9LU0I3WEc0Z0lDQWdkbUZ5SUd4cGMzUmxibVZ5Y3lBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nZTMwN1hHNGdJQ0FnWTJ4aGMzTkRZV3hzUTJobFkyc29kR2hwY3l3Z1JYWmxiblJ6UW1sdVpHVnlLVHRjYmx4dUlDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKeklEMGdiR2x6ZEdWdVpYSnpPMXh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGa1pITWdaWFpsYm5SeklHeHBjM1JsYm1WeWN5QjBieUJoY25KdmQzTWdTRlJOVENCbGJHVnRaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElDQjdVM1J5YVc1bmZFRnljbUY1ZlNCbGRtVnVkSE5jYmlBZ0lDb2dRSEJoY21GdElDQjdSV3hsYldWdWRIeFhhVzVrYjNkOFJHOWpkVzFsYm5SOUlHVnNYRzRnSUNBcUlFQndZWEpoYlNBZ2UwWjFibU4wYVc5dWZTQmpiRzl6ZFhKbFhHNGdJQ0FxSUVCd1lYSmhiU0FnZTBKdmIyeGxZVzU4VDJKcVpXTjBmU0JqWVhCMGRYSmxYRzRnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQXFMMXh1WEc1Y2JpQWdZM0psWVhSbFEyeGhjM01vUlhabGJuUnpRbWx1WkdWeUxDQmJlMXh1SUNBZ0lHdGxlVG9nSjI5dUp5eGNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYjI0b1pYWmxiblJ6TENCbGJDd2dZMnh2YzNWeVpTa2dlMXh1SUNBZ0lDQWdkbUZ5SUdOaGNIUjFjbVVnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z015QW1KaUJoY21kMWJXVnVkSE5iTTEwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzelhTQTZJR1poYkhObE8xeHVYRzRnSUNBZ0lDQnBaaUFvYVhOVGRISnBibWNvWlhabGJuUnpLU2tnZTF4dUlDQWdJQ0FnSUNCbGRtVnVkSE1nUFNCYlpYWmxiblJ6WFR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQmxkbVZ1ZEhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTmJaWFpsYm5SelcybGRYU0E5SUdOc2IzTjFjbVU3WEc1Y2JpQWdJQ0FnSUNBZ1pXd3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGxkbVZ1ZEhOYmFWMHNJSFJvYVhNdWJHbHpkR1Z1WlhKelcyVjJaVzUwYzF0cFhWMHNJR05oY0hSMWNtVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdaWFpsYm5RZ2JHbHpkR1Z1WlhKeklHWnliMjBnWVhKeWIzZHpJRWhVVFV3Z1pXeGxiV1Z1ZEhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0VGRISnBibWQ4UVhKeVlYbDlJR1YyWlc1MGMxeHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwVnNaVzFsYm5SOFYybHVaRzkzZkVSdlkzVnRaVzUwZlNCbGJGeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyOW1aaWNzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHOW1aaWhsZG1WdWRITXNJR1ZzS1NCN1hHNGdJQ0FnSUNCcFppQW9hWE5UZEhKcGJtY29aWFpsYm5SektTa2dlMXh1SUNBZ0lDQWdJQ0JsZG1WdWRITWdQU0JiWlhabGJuUnpYVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCbGRtVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdaV3d1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkSE5iYVYwc0lIUm9hWE11YkdsemRHVnVaWEp6VzJWMlpXNTBjMXRwWFYwc0lHWmhiSE5sS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRVpYTjBjbTk1SUdOdmJHeGxZM1JsWkNCc2FYTjBaVzVsY25NdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmx4dUlDQjlMQ0I3WEc0Z0lDQWdhMlY1T2lBblpHVnpkSEp2ZVNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR1JsYzNSeWIza29LU0I3WEc0Z0lDQWdJQ0JrWld4bGRHVWdkR2hwY3k1c2FYTjBaVzVsY25NN1hHNGdJQ0FnZlZ4dUlDQjlYU2s3WEc0Z0lISmxkSFZ5YmlCRmRtVnVkSE5DYVc1a1pYSTdYRzU5S0NrN1hHNWNibVoxYm1OMGFXOXVJRkpsYzJsNlpTQW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdkbUZ5SUZKbGMybDZaU0E5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSmJtbDBhV0ZzYVhwbGN5QjNhVzVrYjNjZ1ltbHVaR2x1WjNNdVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1aWFXNWtLQ2s3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FtbHVaSE1nWUhKbGVuTnBlbVZnSUd4cGMzUmxibVZ5SUhSdklIUm9aU0IzYVc1a2IzY3VYRzRnSUNBZ0lDb2dTWFFuY3lCaElHTnZjM1JzZVNCbGRtVnVkQ3dnYzI4Z2QyVWdZWEpsSUdSbFltOTFibU5wYm1jZ2FYUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0pwYm1RNklHWjFibU4wYVc5dUlHSnBibVFvS1NCN1hHNGdJQ0FnSUNCQ2FXNWtaWEl1YjI0b0ozSmxjMmw2WlNjc0lIZHBibVJ2ZHl3Z2RHaHliM1IwYkdVb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNtVnphWHBsSnlrN1hHNGdJQ0FnSUNCOUxDQkhiR2xrWlM1elpYUjBhVzVuY3k1MGFISnZkSFJzWlNrcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRlZ1WW1sdVpITWdiR2x6ZEdWdVpYSnpJR1p5YjIwZ2RHaGxJSGRwYm1SdmR5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdkVzVpYVc1a09pQm1kVzVqZEdsdmJpQjFibUpwYm1Rb0tTQjdYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyWm1LQ2R5WlhOcGVtVW5MQ0IzYVc1a2IzY3BPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WdGIzWmxJR0pwYm1ScGJtZHpJR1p5YjIwZ2QybHVaRzkzT2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUhKbGJXOTJaU0JoWkdSbFpDQkZkbVZ1ZEV4cGMzUmxibVZ5WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyUmxjM1J5YjNrbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdVbVZ6YVhwbExuVnVZbWx1WkNncE8xeHVJQ0FnSUVKcGJtUmxjaTVrWlhOMGNtOTVLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCU1pYTnBlbVU3WEc1OVhHNWNiblpoY2lCV1FVeEpSRjlFU1ZKRlExUkpUMDVUSUQwZ1d5ZHNkSEluTENBbmNuUnNKMTA3WEc1MllYSWdSa3hKVUVWRVgwMVBWa1ZOUlU1VVV5QTlJSHRjYmlBZ0p6NG5PaUFuUENjc1hHNGdJQ2M4SnpvZ0p6NG5MRnh1SUNBblBTYzZJQ2M5SjF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnUkdseVpXTjBhVzl1SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJSFpoY2lCRWFYSmxZM1JwYjI0Z1BTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVMlYwZFhCeklHZGhjQ0IyWVd4MVpTQmlZWE5sWkNCdmJpQnpaWFIwYVc1bmN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpTQTlJRWRzYVdSbExuTmxkSFJwYm1kekxtUnBjbVZqZEdsdmJqdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlhOdmJIWmxjeUJ3WVhSMFpYSnVJR0poYzJWa0lHOXVJR1JwY21WamRHbHZiaUIyWVd4MVpWeHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhCaGRIUmxjbTVjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VTNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lISmxjMjlzZG1VNklHWjFibU4wYVc5dUlISmxjMjlzZG1Vb2NHRjBkR1Z5YmlrZ2UxeHVJQ0FnSUNBZ2RtRnlJSFJ2YTJWdUlEMGdjR0YwZEdWeWJpNXpiR2xqWlNnd0xDQXhLVHRjYmx4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YVhNb0ozSjBiQ2NwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCd1lYUjBaWEp1TG5Od2JHbDBLSFJ2YTJWdUtTNXFiMmx1S0VaTVNWQkZSRjlOVDFaRlRVVk9WRk5iZEc5clpXNWRLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSEJoZEhSbGNtNDdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJobFkydHpJSFpoYkhWbElHOW1JR1JwY21WamRHbHZiaUJ0YjJSbExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdScGNtVmpkR2x2Ymx4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2x6T2lCbWRXNWpkR2x2YmlCcGN5aGthWEpsWTNScGIyNHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5aaGJIVmxJRDA5UFNCa2FYSmxZM1JwYjI0N1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRWEJ3YkdsbGN5QmthWEpsWTNScGIyNGdZMnhoYzNNZ2RHOGdkR2hsSUhKdmIzUWdTRlJOVENCbGJHVnRaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaFpHUkRiR0Z6Y3pvZ1puVnVZM1JwYjI0Z1lXUmtRMnhoYzNNb0tTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWNtOXZkQzVqYkdGemMweHBjM1F1WVdSa0tFZHNhV1JsTG5ObGRIUnBibWR6TG1Oc1lYTnpaWE11WkdseVpXTjBhVzl1VzNSb2FYTXVkbUZzZFdWZEtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVnpJR1JwY21WamRHbHZiaUJqYkdGemN5Qm1jbTl0SUhSb1pTQnliMjkwSUVoVVRVd2daV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabFEyeGhjM002SUdaMWJtTjBhVzl1SUhKbGJXOTJaVU5zWVhOektDa2dlMXh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hIYkdsa1pTNXpaWFIwYVc1bmN5NWpiR0Z6YzJWekxtUnBjbVZqZEdsdmJsdDBhR2x6TG5aaGJIVmxYU2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdSbFptbHVaU2hFYVhKbFkzUnBiMjRzSUNkMllXeDFaU2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCa2FYSmxZM1JwYjI0dVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRVJwY21WamRHbHZiaTVmZGp0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFJ6SUhaaGJIVmxJRzltSUhSb1pTQmthWEpsWTNScGIyNHVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2RtRnNkV1ZjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb1ZrRk1TVVJmUkVsU1JVTlVTVTlPVXk1cGJtUmxlRTltS0haaGJIVmxLU0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJRVJwY21WamRHbHZiaTVmZGlBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25SR2x5WldOMGFXOXVJSFpoYkhWbElHMTFjM1FnWW1VZ1lHeDBjbUFnYjNJZ1lISjBiR0FuS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkRiR1ZoY2lCa2FYSmxZM1JwYjI0Z1kyeGhjM002WEc0Z0lDQXFJQzBnYjI0Z1pHVnpkSEp2ZVNCMGJ5QmljbWx1WnlCSVZFMU1JSFJ2SUdsMGN5QnBibWwwYVdGc0lITjBZWFJsWEc0Z0lDQXFJQzBnYjI0Z2RYQmtZWFJsSUhSdklISmxiVzkyWlNCamJHRnpjeUJpWldadmNtVWdjbVZoY0hCc2FXNW5JR0psYkd4dmQxeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLRnNuWkdWemRISnZlU2NzSUNkMWNHUmhkR1VuWFN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFUnBjbVZqZEdsdmJpNXlaVzF2ZG1WRGJHRnpjeWdwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNWdWRDQmpiMjF3YjI1bGJuUTZYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUmxJSFJ2SUhKbFpteGxZM1FnWTJoaGJtZGxjeUJwYmlCa2FYSmxZM1JwYjI0Z2RtRnNkV1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmRYQmtZWFJsSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFUnBjbVZqZEdsdmJpNXRiM1Z1ZENncE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVhCd2JIa2daR2x5WldOMGFXOXVJR05zWVhOek9seHVJQ0FnS2lBdElHSmxabTl5WlNCaWRXbHNaR2x1WnlCMGJ5QmhjSEJzZVNCamJHRnpjeUJtYjNJZ2RHaGxJR1pwY25OMElIUnBiV1ZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMGJ5QnlaV0Z3Y0d4NUlHUnBjbVZqZEdsdmJpQmpiR0Z6Y3lCMGFHRjBJRzFoZVNCamFHRnVaMlZrWEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b1d5ZGlkV2xzWkM1aVpXWnZjbVVuTENBbmRYQmtZWFJsSjEwc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkVhWEpsWTNScGIyNHVZV1JrUTJ4aGMzTW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVScGNtVmpkR2x2Ymp0Y2JuMWNibHh1THlvcVhHNGdLaUJTWldac1pXTjBjeUIyWVd4MVpTQnZaaUJuYkdsa1pTQnRiM1psYldWdWRDNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlFZHNhV1JsWEc0Z0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlFTnZiWEJ2Ym1WdWRITmNiaUFxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBcUwxeHVablZ1WTNScGIyNGdVblJzSUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3lrZ2UxeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRTVsWjJGMFpYTWdkR2hsSUhCaGMzTmxaQ0IwY21GdWMyeGhkR1VnYVdZZ1oyeHBaR1VnYVhNZ2FXNGdVbFJNSUc5d2RHbHZiaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdkSEpoYm5Oc1lYUmxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxdlpHbG1lVG9nWm5WdVkzUnBiMjRnYlc5a2FXWjVLSFJ5WVc1emJHRjBaU2tnZTF4dUlDQWdJQ0FnYVdZZ0tFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbWx6S0NkeWRHd25LU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFhSeVlXNXpiR0YwWlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeVlXNXpiR0YwWlR0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1ZYQmtZWFJsY3lCbmJHbGtaU0J0YjNabGJXVnVkQ0IzYVhSb0lHRWdZR2RoY0dBZ2MyVjBkR2x1WjNNdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCSGJHbGtaVnh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCRGIyMXdiMjVsYm5SelhHNGdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlFZGhjQ0FvUjJ4cFpHVXNJRU52YlhCdmJtVnVkSE1wSUh0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQk5iMlJwWm1sbGN5QndZWE56WldRZ2RISmhibk5zWVhSbElIWmhiSFZsSUhkcGRHZ2diblZ0WW1WeUlHbHVJSFJvWlNCZ1oyRndZQ0J6WlhSMGFXNW5jeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdkSEpoYm5Oc1lYUmxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxdlpHbG1lVG9nWm5WdVkzUnBiMjRnYlc5a2FXWjVLSFJ5WVc1emJHRjBaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5WVc1emJHRjBaU0FySUVOdmJYQnZibVZ1ZEhNdVIyRndjeTUyWVd4MVpTQXFJRWRzYVdSbExtbHVaR1Y0TzF4dUlDQWdJSDFjYmlBZ2ZUdGNibjFjYmx4dUx5b3FYRzRnS2lCVmNHUmhkR1Z6SUdkc2FXUmxJRzF2ZG1WdFpXNTBJSGRwZEdnZ2QybGtkR2dnYjJZZ1lXUmthWFJwYjI1aGJDQmpiRzl1WlhNZ2QybGtkR2d1WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JIYkdsa1pWeHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JEYjIxd2IyNWxiblJ6WEc0Z0tpQkFjbVYwZFhKdUlIdFBZbXBsWTNSOVhHNGdLaTljYm1aMWJtTjBhVzl1SUVkeWIzY2dLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpLU0I3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FXUmtjeUIwYnlCMGFHVWdjR0Z6YzJWa0lIUnlZVzV6YkdGMFpTQjNhV1IwYUNCdlppQjBhR1VnYUdGc1ppQnZaaUJqYkc5dVpYTXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdE9kVzFpWlhKOUlIUnlZVzV6YkdGMFpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjJScFpuazZJR1oxYm1OMGFXOXVJRzF2WkdsbWVTaDBjbUZ1YzJ4aGRHVXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVWdLeUJEYjIxd2IyNWxiblJ6TGtOc2IyNWxjeTVuY205M0lDOGdNanRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nVlhCa1lYUmxjeUJuYkdsa1pTQnRiM1psYldWdWRDQjNhWFJvSUdFZ1lIQmxaV3RnSUhObGRIUnBibWR6TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnUjJ4cFpHVmNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnUTI5dGNHOXVaVzUwYzF4dUlDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ292WEc1bWRXNWpkR2x2YmlCUVpXVnJhVzVuSUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3lrZ2UxeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRTF2WkdsbWFXVnpJSEJoYzNObFpDQjBjbUZ1YzJ4aGRHVWdkbUZzZFdVZ2QybDBhQ0JoSUdCd1pXVnJZQ0J6WlhSMGFXNW5MbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElDQjdUblZ0WW1WeWZTQjBjbUZ1YzJ4aGRHVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5a2FXWjVPaUJtZFc1amRHbHZiaUJ0YjJScFpua29kSEpoYm5Oc1lYUmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb1IyeHBaR1V1YzJWMGRHbHVaM011Wm05amRYTkJkQ0ErUFNBd0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCd1pXVnJJRDBnUTI5dGNHOXVaVzUwY3k1UVpXVnJMblpoYkhWbE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGMwOWlhbVZqZENod1pXVnJLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNtRnVjMnhoZEdVZ0xTQndaV1ZyTG1KbFptOXlaVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNtRnVjMnhoZEdVZ0xTQndaV1ZyTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEhKaGJuTnNZWFJsTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibjFjYmx4dUx5b3FYRzRnS2lCVmNHUmhkR1Z6SUdkc2FXUmxJRzF2ZG1WdFpXNTBJSGRwZEdnZ1lTQmdabTlqZFhOQmRHQWdjMlYwZEdsdVozTXVYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkhiR2xrWlZ4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkRiMjF3YjI1bGJuUnpYRzRnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0tpOWNibVoxYm1OMGFXOXVJRVp2WTNWemFXNW5JQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFMXZaR2xtYVdWeklIQmhjM05sWkNCMGNtRnVjMnhoZEdVZ2RtRnNkV1VnZDJsMGFDQnBibVJsZUNCcGJpQjBhR1VnWUdadlkzVnpRWFJnSUhObGRIUnBibWN1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdJSHRPZFcxaVpYSjlJSFJ5WVc1emJHRjBaVnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDUxYldKbGNuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCdGIyUnBabms2SUdaMWJtTjBhVzl1SUcxdlpHbG1lU2gwY21GdWMyeGhkR1VwSUh0Y2JpQWdJQ0FnSUhaaGNpQm5ZWEFnUFNCRGIyMXdiMjVsYm5SekxrZGhjSE11ZG1Gc2RXVTdYRzRnSUNBZ0lDQjJZWElnZDJsa2RHZ2dQU0JEYjIxd2IyNWxiblJ6TGxOcGVtVnpMbmRwWkhSb08xeHVJQ0FnSUNBZ2RtRnlJR1p2WTNWelFYUWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN5NW1iMk4xYzBGME8xeHVJQ0FnSUNBZ2RtRnlJSE5zYVdSbFYybGtkR2dnUFNCRGIyMXdiMjVsYm5SekxsTnBlbVZ6TG5Oc2FXUmxWMmxrZEdnN1hHNWNiaUFnSUNBZ0lHbG1JQ2htYjJOMWMwRjBJRDA5UFNBblkyVnVkR1Z5SnlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISmhibk5zWVhSbElDMGdLSGRwWkhSb0lDOGdNaUF0SUhOc2FXUmxWMmxrZEdnZ0x5QXlLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5WVc1emJHRjBaU0F0SUhOc2FXUmxWMmxrZEdnZ0tpQm1iMk4xYzBGMElDMGdaMkZ3SUNvZ1ptOWpkWE5CZER0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1FYQndiR2xsY3lCa2FXWm1jbVZ1ZENCMGNtRnVjMlp2Y20xbGNuTWdiMjRnZEhKaGJuTnNZWFJsSUhaaGJIVmxMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdSMnhwWkdWY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdRMjl0Y0c5dVpXNTBjMXh1SUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJ0ZFhSaGRHOXlJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQk5aWEpuWlNCcGJuTjBZVzVqWlNCMGNtRnVjMlp2Y20xbGNuTWdkMmwwYUNCamIyeHNaV04wYVc5dUlHOW1JR1JsWm1GMWJIUWdkSEpoYm5ObWIzSnRaWEp6TGx4dUlDQWdLaUJKZENkeklHbHRjRzl5ZEdGdWRDQjBhR0YwSUhSb1pTQlNkR3dnWTI5dGNHOXVaVzUwSUdKbElHeGhjM1FnYjI0Z2RHaGxJR3hwYzNRc1hHNGdJQ0FxSUhOdklHbDBJSEpsWm14bFkzUnpJR0ZzYkNCd2NtVjJhVzkxY3lCMGNtRnVjMlp2Y20xaGRHbHZibk11WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0QmNuSmhlWDFjYmlBZ0lDb3ZYRzRnSUhaaGNpQlVVa0ZPVTBaUFVrMUZVbE1nUFNCYlIyRndMQ0JIY205M0xDQlFaV1ZyYVc1bkxDQkdiMk4xYzJsdVoxMHVZMjl1WTJGMEtFZHNhV1JsTGw5MExDQmJVblJzWFNrN1hHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJRYVhCc2FXNWxjeUIwY21GdWMyeGhkR1VnZG1Gc2RXVWdkMmwwYUNCeVpXZHBjM1JsY21Wa0lIUnlZVzV6Wm05eWJXVnljeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDUxYldKbGNuMGdkSEpoYm5Oc1lYUmxYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxMWRHRjBaVG9nWm5WdVkzUnBiMjRnYlhWMFlYUmxLSFJ5WVc1emJHRjBaU2tnZTF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCVVVrRk9VMFpQVWsxRlVsTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFJ5WVc1elptOXliV1Z5SUQwZ1ZGSkJUbE5HVDFKTlJWSlRXMmxkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0hSeVlXNXpabTl5YldWeUtTQW1KaUJwYzBaMWJtTjBhVzl1S0hSeVlXNXpabTl5YldWeUtDa3ViVzlrYVdaNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSeVlXNXpiR0YwWlNBOUlIUnlZVzV6Wm05eWJXVnlLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpMQ0JGZG1WdWRITXBMbTF2WkdsbWVTaDBjbUZ1YzJ4aGRHVXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUhkaGNtNG9KMVJ5WVc1elptOXliV1Z5SUhOb2IzVnNaQ0JpWlNCaElHWjFibU4wYVc5dUlIUm9ZWFFnY21WMGRYSnVjeUJoYmlCdlltcGxZM1FnZDJsMGFDQmdiVzlrYVdaNUtDbGdJRzFsZEdodlpDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1U3WEc0Z0lDQWdmVnh1SUNCOU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCVWNtRnVjMnhoZEdVZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnZG1GeUlGUnlZVzV6YkdGMFpTQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUWlhSeklIWmhiSFZsSUc5bUlIUnlZVzV6YkdGMFpTQnZiaUJJVkUxTUlHVnNaVzFsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA1MWJXSmxjbjBnZG1Gc2RXVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z2MyVjBLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQjJZWElnZEhKaGJuTm1iM0p0SUQwZ2JYVjBZWFJ2Y2loSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3lrdWJYVjBZWFJsS0haaGJIVmxLVHRjYmx4dUlDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXVjM1I1YkdVdWRISmhibk5tYjNKdElEMGdKM1J5WVc1emJHRjBaVE5rS0NjZ0t5QXRNU0FxSUhSeVlXNXpabTl5YlNBcklDZHdlQ3dnTUhCNExDQXdjSGdwSnp0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklIWmhiSFZsSUc5bUlIUnlZVzV6YkdGMFpTQm1jbTl0SUVoVVRVd2daV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabE9pQm1kVzVqZEdsdmJpQnlaVzF2ZG1Vb0tTQjdYRzRnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1emRIbHNaUzUwY21GdWMyWnZjbTBnUFNBbkp6dGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRk5sZENCdVpYY2dkSEpoYm5Oc1lYUmxJSFpoYkhWbE9seHVJQ0FnS2lBdElHOXVJRzF2ZG1VZ2RHOGdjbVZtYkdWamRDQnBibVJsZUNCamFHRnVaMlZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKSUhSdklISmxabXhsWTNRZ2NHOXpjMmxpYkdVZ1kyaGhibWRsY3lCcGJpQnZjSFJwYjI1elhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMjF2ZG1VbkxDQm1kVzVqZEdsdmJpQW9ZMjl1ZEdWNGRDa2dlMXh1SUNBZ0lIWmhjaUJuWVhBZ1BTQkRiMjF3YjI1bGJuUnpMa2RoY0hNdWRtRnNkV1U3WEc0Z0lDQWdkbUZ5SUd4bGJtZDBhQ0E5SUVOdmJYQnZibVZ1ZEhNdVUybDZaWE11YkdWdVozUm9PMXh1SUNBZ0lIWmhjaUIzYVdSMGFDQTlJRU52YlhCdmJtVnVkSE11VTJsNlpYTXVjMnhwWkdWWGFXUjBhRHRjYmx4dUlDQWdJR2xtSUNoSGJHbGtaUzVwYzFSNWNHVW9KMk5oY205MWMyVnNKeWtnSmlZZ1EyOXRjRzl1Wlc1MGN5NVNkVzR1YVhOUFptWnpaWFFvSnp3bktTa2dlMXh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVVY21GdWMybDBhVzl1TG1GbWRHVnlLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1JYWmxiblJ6TG1WdGFYUW9KM1J5WVc1emJHRjBaUzVxZFcxd0p5azdYRzVjYmlBZ0lDQWdJQ0FnVkhKaGJuTnNZWFJsTG5ObGRDaDNhV1IwYUNBcUlDaHNaVzVuZEdnZ0xTQXhLU2s3WEc0Z0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUZSeVlXNXpiR0YwWlM1elpYUW9MWGRwWkhSb0lDMGdaMkZ3SUNvZ2JHVnVaM1JvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1IyeHBaR1V1YVhOVWVYQmxLQ2RqWVhKdmRYTmxiQ2NwSUNZbUlFTnZiWEJ2Ym1WdWRITXVVblZ1TG1selQyWm1jMlYwS0NjK0p5a3BJSHRjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1aFpuUmxjaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2QwY21GdWMyeGhkR1V1YW5WdGNDY3BPMXh1WEc0Z0lDQWdJQ0FnSUZSeVlXNXpiR0YwWlM1elpYUW9NQ2s3WEc0Z0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUZSeVlXNXpiR0YwWlM1elpYUW9kMmxrZEdnZ0tpQnNaVzVuZEdnZ0t5Qm5ZWEFnS2lCc1pXNW5kR2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQlVjbUZ1YzJ4aGRHVXVjMlYwS0dOdmJuUmxlSFF1Ylc5MlpXMWxiblFwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElIUnlZVzV6YkdGMFpUcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklHSnlhVzVuSUcxaGNtdDFjQ0IwYnlCcGRITWdhVzVwZEdGc0lITjBZWFJsWEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyUmxjM1J5YjNrbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdWSEpoYm5Oc1lYUmxMbkpsYlc5MlpTZ3BPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnVkhKaGJuTnNZWFJsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJVY21GdWMybDBhVzl1SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJJYjJ4a2N5QnBibUZqZEdsMmFYUjVJSE4wWVhSMWN5QnZaaUIwY21GdWMybDBhVzl1TGx4dUlDQWdLaUJYYUdWdUlIUnlkV1VnZEhKaGJuTnBkR2x2YmlCcGN5QnViM1FnWVhCd2JHbGxaQzVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTBKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1SUNCMllYSWdaR2x6WVdKc1pXUWdQU0JtWVd4elpUdGNibHh1SUNCMllYSWdWSEpoYm5OcGRHbHZiaUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGIyMXdiM05sY3lCemRISnBibWNnYjJZZ2RHaGxJRU5UVXlCMGNtRnVjMmwwYVc5dUxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhCeWIzQmxjblI1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VTNSeWFXNW5mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTnZiWEJ2YzJVNklHWjFibU4wYVc5dUlHTnZiWEJ2YzJVb2NISnZjR1Z5ZEhrcElIdGNiaUFnSUNBZ0lIWmhjaUJ6WlhSMGFXNW5jeUE5SUVkc2FXUmxMbk5sZEhScGJtZHpPMXh1WEc0Z0lDQWdJQ0JwWmlBb0lXUnBjMkZpYkdWa0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQndjbTl3WlhKMGVTQXJJQ2NnSnlBcklIUm9hWE11WkhWeVlYUnBiMjRnS3lBbmJYTWdKeUFySUhObGRIUnBibWR6TG1GdWFXMWhkR2x2YmxScGJXbHVaMFoxYm1NN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCd2NtOXdaWEowZVNBcklDY2dNRzF6SUNjZ0t5QnpaWFIwYVc1bmN5NWhibWx0WVhScGIyNVVhVzFwYm1kR2RXNWpPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRITWdkbUZzZFdVZ2IyWWdkSEpoYm5OcGRHbHZiaUJ2YmlCSVZFMU1JR1ZzWlcxbGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WnoxOUlIQnliM0JsY25SNVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUhObGRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCd2NtOXdaWEowZVNBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdGeVozVnRaVzUwYzFzd1hTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z1lYSm5kVzFsYm5Seld6QmRJRG9nSjNSeVlXNXpabTl5YlNjN1hHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5TG5OMGVXeGxMblJ5WVc1emFYUnBiMjRnUFNCMGFHbHpMbU52YlhCdmMyVW9jSEp2Y0dWeWRIa3BPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGJXOTJaWE1nZG1Gc2RXVWdiMllnZEhKaGJuTnBkR2x2YmlCbWNtOXRJRWhVVFV3Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVVvS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTV6ZEhsc1pTNTBjbUZ1YzJsMGFXOXVJRDBnSnljN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVblZ1Y3lCallXeHNZbUZqYXlCaFpuUmxjaUJoYm1sdFlYUnBiMjR1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnRjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdGbWRHVnlPaUJtZFc1amRHbHZiaUJoWm5SbGNpaGpZV3hzWW1GamF5a2dlMXh1SUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lHTmhiR3hpWVdOcktDazdYRzRnSUNBZ0lDQjlMQ0IwYUdsekxtUjFjbUYwYVc5dUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJGYm1GaWJHVWdkSEpoYm5OcGRHbHZiaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWlc1aFlteGxPaUJtZFc1amRHbHZiaUJsYm1GaWJHVW9LU0I3WEc0Z0lDQWdJQ0JrYVhOaFlteGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0IwYUdsekxuTmxkQ2dwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFUnBjMkZpYkdVZ2RISmhibk5wZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaR2x6WVdKc1pUb2dablZ1WTNScGIyNGdaR2x6WVdKc1pTZ3BJSHRjYmlBZ0lDQWdJR1JwYzJGaWJHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdkR2hwY3k1elpYUW9LVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnWkdWbWFXNWxLRlJ5WVc1emFYUnBiMjRzSUNka2RYSmhkR2x2Ymljc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdSMWNtRjBhVzl1SUc5bUlIUm9aU0IwY21GdWMybDBhVzl1SUdKaGMyVmtYRzRnSUNBZ0lDb2diMjRnWTNWeWNtVnVkR3g1SUhKMWJtNXBibWNnWVc1cGJXRjBhVzl1SUhSNWNHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFvS1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNibHh1SUNBZ0lDQWdhV1lnS0Vkc2FXUmxMbWx6Vkhsd1pTZ25jMnhwWkdWeUp5a2dKaVlnUTI5dGNHOXVaVzUwY3k1U2RXNHViMlptYzJWMEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFIwYVc1bmN5NXlaWGRwYm1SRWRYSmhkR2x2Ymp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhObGRIUnBibWR6TG1GdWFXMWhkR2x2YmtSMWNtRjBhVzl1TzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTmxkQ0IwY21GdWMybDBhVzl1SUdCemRIbHNaV0FnZG1Gc2RXVTZYRzRnSUNBcUlDMGdiMjRnWldGamFDQnRiM1pwYm1jc0lHSmxZMkYxYzJVZ2FYUWdiV0Y1SUdKbElHTnNaV0Z5WldRZ1lua2diMlptYzJWMElHMXZkbVZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmJXOTJaU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCVWNtRnVjMmwwYVc5dUxuTmxkQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSR2x6WVdKc1pTQjBjbUZ1YzJsMGFXOXVPbHh1SUNBZ0tpQXRJR0psWm05eVpTQnBibWwwYVdGc0lHSjFhV3hrSUhSdklHRjJiMmxrSUhSeVlXNXphWFJwYjI1cGJtY2dabkp2YlNCZ01HQWdkRzhnWUhOMFlYSjBRWFJnSUdsdVpHVjRYRzRnSUNBcUlDMGdkMmhwYkdVZ2NtVnphWHBwYm1jZ2QybHVaRzkzSUdGdVpDQnlaV05oYkdOMWJHRjBhVzVuSUdScGJXVnVkR2x2Ym5OY2JpQWdJQ29nTFNCdmJpQnFkVzF3YVc1bklHWnliMjBnYjJabWMyVjBJSFJ5WVc1emFYUnBiMjRnWVhRZ2MzUmhjblFnWVc1a0lHVnVaQ0JsWkdkbGN5QnBiaUJnWTJGeWIzVnpaV3hnSUhSNWNHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWhiSjJKMWFXeGtMbUpsWm05eVpTY3NJQ2R5WlhOcGVtVW5MQ0FuZEhKaGJuTnNZWFJsTG1wMWJYQW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUZSeVlXNXphWFJwYjI0dVpHbHpZV0pzWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUlc1aFlteGxJSFJ5WVc1emFYUnBiMjQ2WEc0Z0lDQXFJQzBnYjI0Z1pXRmphQ0J5ZFc1dWFXNW5MQ0JpWldOaGRYTmxJR2wwSUcxaGVTQmlaU0JrYVhOaFlteGxaQ0JpZVNCdlptWnpaWFFnYlc5MlpWeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2R5ZFc0bkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdWSEpoYm5OcGRHbHZiaTVsYm1GaWJHVW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCMGNtRnVjMmwwYVc5dU9seHVJQ0FnS2lBdElHOXVJR1JsYzNSeWIzbHBibWNnZEc4Z1luSnBibWNnYldGeWEzVndJSFJ2SUdsMGN5QnBibWwwWVd3Z2MzUmhkR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQlVjbUZ1YzJsMGFXOXVMbkpsYlc5MlpTZ3BPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnVkhKaGJuTnBkR2x2Ymp0Y2JuMWNibHh1THlvcVhHNGdLaUJVWlhOMElIWnBZU0JoSUdkbGRIUmxjaUJwYmlCMGFHVWdiM0IwYVc5dWN5QnZZbXBsWTNRZ2RHOGdjMlZsWEc0Z0tpQnBaaUIwYUdVZ2NHRnpjMmwyWlNCd2NtOXdaWEowZVNCcGN5QmhZMk5sYzNObFpDNWNiaUFxWEc0Z0tpQkFjMlZsSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5WFNVTkhMMFYyWlc1MFRHbHpkR1Z1WlhKUGNIUnBiMjV6TDJKc2IySXZaMmd0Y0dGblpYTXZaWGh3YkdGcGJtVnlMbTFrSTJabFlYUjFjbVV0WkdWMFpXTjBhVzl1WEc0Z0tpOWNibHh1ZG1GeUlITjFjSEJ2Y25SelVHRnpjMmwyWlNBOUlHWmhiSE5sTzF4dVhHNTBjbmtnZTF4dUlDQjJZWElnYjNCMGN5QTlJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoN2ZTd2dKM0JoYzNOcGRtVW5MQ0I3WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0J6ZFhCd2IzSjBjMUJoYzNOcGRtVWdQU0IwY25WbE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0ozUmxjM1JRWVhOemFYWmxKeXdnYm5Wc2JDd2diM0IwY3lrN1hHNGdJSGRwYm1SdmR5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLQ2QwWlhOMFVHRnpjMmwyWlNjc0lHNTFiR3dzSUc5d2RITXBPMXh1ZlNCallYUmphQ0FvWlNrZ2UzMWNibHh1ZG1GeUlITjFjSEJ2Y25SelVHRnpjMmwyWlNReElEMGdjM1Z3Y0c5eWRITlFZWE56YVhabE8xeHVYRzUyWVhJZ1UxUkJVbFJmUlZaRlRsUlRJRDBnV3lkMGIzVmphSE4wWVhKMEp5d2dKMjF2ZFhObFpHOTNiaWRkTzF4dWRtRnlJRTFQVmtWZlJWWkZUbFJUSUQwZ1d5ZDBiM1ZqYUcxdmRtVW5MQ0FuYlc5MWMyVnRiM1psSjEwN1hHNTJZWElnUlU1RVgwVldSVTVVVXlBOUlGc25kRzkxWTJobGJtUW5MQ0FuZEc5MVkyaGpZVzVqWld3bkxDQW5iVzkxYzJWMWNDY3NJQ2R0YjNWelpXeGxZWFpsSjEwN1hHNTJZWElnVFU5VlUwVmZSVlpGVGxSVElEMGdXeWR0YjNWelpXUnZkMjRuTENBbmJXOTFjMlZ0YjNabEp5d2dKMjF2ZFhObGRYQW5MQ0FuYlc5MWMyVnNaV0YyWlNkZE8xeHVYRzVtZFc1amRHbHZiaUJUZDJsd1pTQW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdkbUZ5SUhOM2FYQmxVMmx1SUQwZ01EdGNiaUFnZG1GeUlITjNhWEJsVTNSaGNuUllJRDBnTUR0Y2JpQWdkbUZ5SUhOM2FYQmxVM1JoY25SWklEMGdNRHRjYmlBZ2RtRnlJR1JwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYRzRnSUhaaGNpQnRiM1psWVdKc1pTQTlJSFJ5ZFdVN1hHNGdJSFpoY2lCallYQjBkWEpsSUQwZ2MzVndjRzl5ZEhOUVlYTnphWFpsSkRFZ1B5QjdJSEJoYzNOcGRtVTZJSFJ5ZFdVZ2ZTQTZJR1poYkhObE8xeHVYRzRnSUhaaGNpQlRkMmx3WlNBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwYVdGc2FYcGxjeUJ6ZDJsd1pTQmlhVzVrYVc1bmN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVpYVc1a1UzZHBjR1ZUZEdGeWRDZ3BPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVoaGJtUnNaWElnWm05eUlHQnpkMmx3WlhOMFlYSjBZQ0JsZG1WdWRDNGdRMkZzWTNWc1lYUmxjeUJsYm5SeWVTQndiMmx1ZEhNZ2IyWWdkR2hsSUhWelpYSW5jeUIwWVhBdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhabGJuUmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE4wWVhKME9pQm1kVzVqZEdsdmJpQnpkR0Z5ZENobGRtVnVkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDRmthWE5oWW14bFpDQW1KaUFoUjJ4cFpHVXVaR2x6WVdKc1pXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWthWE5oWW14bEtDazdYRzVjYmlBZ0lDQWdJQ0FnZG1GeUlITjNhWEJsSUQwZ2RHaHBjeTUwYjNWamFHVnpLR1YyWlc1MEtUdGNibHh1SUNBZ0lDQWdJQ0J0YjNabFlXSnNaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSE4zYVhCbFUybHVJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdjM2RwY0dWVGRHRnlkRmdnUFNCMGIwbHVkQ2h6ZDJsd1pTNXdZV2RsV0NrN1hHNGdJQ0FnSUNBZ0lITjNhWEJsVTNSaGNuUlpJRDBnZEc5SmJuUW9jM2RwY0dVdWNHRm5aVmtwTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WW1sdVpGTjNhWEJsVFc5MlpTZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnBibVJUZDJsd1pVVnVaQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R6ZDJsd1pTNXpkR0Z5ZENjcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWhoYm1Sc1pYSWdabTl5SUdCemQybHdaVzF2ZG1WZ0lHVjJaVzUwTGlCRFlXeGpkV3hoZEdWeklIVnpaWEluY3lCMFlYQWdZVzVuYkdVZ1lXNWtJR1JwYzNSaGJtTmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHVjJaVzUwWEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkyWlRvZ1puVnVZM1JwYjI0Z2JXOTJaU2hsZG1WdWRDa2dlMXh1SUNBZ0lDQWdhV1lnS0NGSGJHbGtaUzVrYVhOaFlteGxaQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdYMGRzYVdSbEpITmxkSFJwYm1keklEMGdSMnhwWkdVdWMyVjBkR2x1WjNNc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNWamFFRnVaMnhsSUQwZ1gwZHNhV1JsSkhObGRIUnBibWR6TG5SdmRXTm9RVzVuYkdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNWamFGSmhkR2x2SUQwZ1gwZHNhV1JsSkhObGRIUnBibWR6TG5SdmRXTm9VbUYwYVc4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYkdGemMyVnpJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMbU5zWVhOelpYTTdYRzVjYmx4dUlDQWdJQ0FnSUNCMllYSWdjM2RwY0dVZ1BTQjBhR2x6TG5SdmRXTm9aWE1vWlhabGJuUXBPMXh1WEc0Z0lDQWdJQ0FnSUhaaGNpQnpkV0pGZUZONElEMGdkRzlKYm5Rb2MzZHBjR1V1Y0dGblpWZ3BJQzBnYzNkcGNHVlRkR0Z5ZEZnN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZFdKRmVWTjVJRDBnZEc5SmJuUW9jM2RwY0dVdWNHRm5aVmtwSUMwZ2MzZHBjR1ZUZEdGeWRGazdYRzRnSUNBZ0lDQWdJSFpoY2lCd2IzZEZXQ0E5SUUxaGRHZ3VZV0p6S0hOMVlrVjRVM2dnUER3Z01pazdYRzRnSUNBZ0lDQWdJSFpoY2lCd2IzZEZXU0E5SUUxaGRHZ3VZV0p6S0hOMVlrVjVVM2tnUER3Z01pazdYRzRnSUNBZ0lDQWdJSFpoY2lCemQybHdaVWg1Y0c5MFpXNTFjMlVnUFNCTllYUm9Mbk54Y25Rb2NHOTNSVmdnS3lCd2IzZEZXU2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQnpkMmx3WlVOaGRHaGxkSFZ6SUQwZ1RXRjBhQzV6Y1hKMEtIQnZkMFZaS1R0Y2JseHVJQ0FnSUNBZ0lDQnpkMmx3WlZOcGJpQTlJRTFoZEdndVlYTnBiaWh6ZDJsd1pVTmhkR2hsZEhWeklDOGdjM2RwY0dWSWVYQnZkR1Z1ZFhObEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2JXOTJaV0ZpYkdVZ0ppWWdjM2RwY0dWVGFXNGdLaUF4T0RBZ0x5Qk5ZWFJvTGxCSklEd2dkRzkxWTJoQmJtZHNaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHVjJaVzUwTG5OMGIzQlFjbTl3WVdkaGRHbHZiaWdwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVOYjNabExtMWhhMlVvYzNWaVJYaFRlQ0FxSUhSdlJteHZZWFFvZEc5MVkyaFNZWFJwYnlrcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbkp2YjNRdVkyeGhjM05NYVhOMExtRmtaQ2hqYkdGemMyVnpMbVJ5WVdkbmFXNW5LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R6ZDJsd1pTNXRiM1psSnlrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdiVzkyWldGaWJHVWdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVoaGJtUnNaWElnWm05eUlHQnpkMmx3WldWdVpHQWdaWFpsYm5RdUlFWnBibWwwYVdGc2FYcGxjeUIxYzJWeUozTWdkR0Z3SUdGdVpDQmtaV05wWkdWeklHRmliM1YwSUdkc2FXUmxJRzF2ZG1VdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhabGJuUmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR1Z1WkRvZ1puVnVZM1JwYjI0Z1pXNWtLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVVkc2FXUmxMbVJwYzJGaWJHVmtLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnpaWFIwYVc1bmN5QTlJRWRzYVdSbExuTmxkSFJwYm1kek8xeHVYRzRnSUNBZ0lDQWdJSFpoY2lCemQybHdaU0E5SUhSb2FYTXVkRzkxWTJobGN5aGxkbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lIWmhjaUIwYUhKbGMyaHZiR1FnUFNCMGFHbHpMblJvY21WemFHOXNaQ2hsZG1WdWRDazdYRzVjYmlBZ0lDQWdJQ0FnZG1GeUlITjNhWEJsUkdsemRHRnVZMlVnUFNCemQybHdaUzV3WVdkbFdDQXRJSE4zYVhCbFUzUmhjblJZTzF4dUlDQWdJQ0FnSUNCMllYSWdjM2RwY0dWRVpXY2dQU0J6ZDJsd1pWTnBiaUFxSURFNE1DQXZJRTFoZEdndVVFazdYRzRnSUNBZ0lDQWdJSFpoY2lCemRHVndjeUE5SUUxaGRHZ3VjbTkxYm1Rb2MzZHBjR1ZFYVhOMFlXNWpaU0F2SUVOdmJYQnZibVZ1ZEhNdVUybDZaWE11YzJ4cFpHVlhhV1IwYUNrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtRmliR1VvS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYlc5MlpXRmliR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNkcGNHVkVhWE4wWVc1alpTQStJSFJvY21WemFHOXNaQ0FtSmlCemQybHdaVVJsWnlBOElITmxkSFJwYm1kekxuUnZkV05vUVc1bmJHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvYVd4bElITjNhWEJsSUdseklIQnZjMmwwYVhabElHRnVaQ0JuY21WaGRHVnlJSFJvWVc0Z2RHaHlaWE5vYjJ4a0lHMXZkbVVnWW1GamEzZGhjbVF1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzJWMGRHbHVaM011Y0dWeVZHOTFZMmdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNITWdQU0JOWVhSb0xtMXBiaWh6ZEdWd2N5d2dkRzlKYm5Rb2MyVjBkR2x1WjNNdWNHVnlWRzkxWTJncEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbWx6S0NkeWRHd25LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd2N5QTlJQzF6ZEdWd2N6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnUTI5dGNHOXVaVzUwY3k1U2RXNHViV0ZyWlNoRGIyMXdiMjVsYm5SekxrUnBjbVZqZEdsdmJpNXlaWE52YkhabEtDYzhKeUFySUhOMFpYQnpLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHpkMmx3WlVScGMzUmhibU5sSUR3Z0xYUm9jbVZ6YUc5c1pDQW1KaUJ6ZDJsd1pVUmxaeUE4SUhObGRIUnBibWR6TG5SdmRXTm9RVzVuYkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9hV3hsSUhOM2FYQmxJR2x6SUc1bFoyRjBhWFpsSUdGdVpDQnNiM2RsY2lCMGFHRnVJRzVsWjJGMGFYWmxJSFJvY21WemFHOXNaQ0J0YjNabElHWnZjbmRoY21RdVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MyVjBkR2x1WjNNdWNHVnlWRzkxWTJncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjSE1nUFNCTllYUm9MbTFoZUNoemRHVndjeXdnTFhSdlNXNTBLSE5sZEhScGJtZHpMbkJsY2xSdmRXTm9LU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hEYjIxd2IyNWxiblJ6TGtScGNtVmpkR2x2Ymk1cGN5Z25jblJzSnlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjSE1nUFNBdGMzUmxjSE03WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVVblZ1TG0xaGEyVW9RMjl0Y0c5dVpXNTBjeTVFYVhKbFkzUnBiMjR1Y21WemIyeDJaU2duUGljZ0t5QnpkR1Z3Y3lrcE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlhhR2xzWlNCemQybHdaU0JrYjI0bmRDQnlaV0ZqYUNCa2FYTjBZVzVqWlNCaGNIQnNlU0J3Y21WMmFXOTFjeUIwY21GdWMyWnZjbTB1WEc0Z0lDQWdJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMazF2ZG1VdWJXRnJaU2dwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzV5YjI5MExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb2MyVjBkR2x1WjNNdVkyeGhjM05sY3k1a2NtRm5aMmx1WnlrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1MWJtSnBibVJUZDJsd1pVMXZkbVVvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUxYm1KcGJtUlRkMmx3WlVWdVpDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHpkMmx3WlM1bGJtUW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJ6ZDJsd1pTZHpJSE4wWVhKMGFXNW5JR1YyWlc1MExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmlhVzVrVTNkcGNHVlRkR0Z5ZERvZ1puVnVZM1JwYjI0Z1ltbHVaRk4zYVhCbFUzUmhjblFvS1NCN1hHNGdJQ0FnSUNCMllYSWdYM1JvYVhNZ1BTQjBhR2x6TzF4dVhHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNibHh1SUNBZ0lDQWdhV1lnS0hObGRIUnBibWR6TG5OM2FYQmxWR2h5WlhOb2IyeGtLU0I3WEc0Z0lDQWdJQ0FnSUVKcGJtUmxjaTV2YmloVFZFRlNWRjlGVmtWT1ZGTmJNRjBzSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMQ0JtZFc1amRHbHZiaUFvWlhabGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCZmRHaHBjeTV6ZEdGeWRDaGxkbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lIMHNJR05oY0hSMWNtVXBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb2MyVjBkR2x1WjNNdVpISmhaMVJvY21WemFHOXNaQ2tnZTF4dUlDQWdJQ0FnSUNCQ2FXNWtaWEl1YjI0b1UxUkJVbFJmUlZaRlRsUlRXekZkTENCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaXdnWm5WdVkzUnBiMjRnS0dWMlpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1gzUm9hWE11YzNSaGNuUW9aWFpsYm5RcE8xeHVJQ0FnSUNBZ0lDQjlMQ0JqWVhCMGRYSmxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUhOM2FYQmxKM01nYzNSaGNuUnBibWNnWlhabGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFZ1WW1sdVpGTjNhWEJsVTNSaGNuUTZJR1oxYm1OMGFXOXVJSFZ1WW1sdVpGTjNhWEJsVTNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMlptS0ZOVVFWSlVYMFZXUlU1VVUxc3dYU3dnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXBPMXh1SUNBZ0lDQWdRbWx1WkdWeUxtOW1aaWhUVkVGU1ZGOUZWa1ZPVkZOYk1WMHNJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJDYVc1a2N5QnpkMmx3WlNkeklHMXZkbWx1WnlCbGRtVnVkQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWW1sdVpGTjNhWEJsVFc5MlpUb2dablZ1WTNScGIyNGdZbWx1WkZOM2FYQmxUVzkyWlNncElIdGNiaUFnSUNBZ0lIWmhjaUJmZEdocGN6SWdQU0IwYUdsek8xeHVYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyNG9UVTlXUlY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMQ0IwYUhKdmRIUnNaU2htZFc1amRHbHZiaUFvWlhabGJuUXBJSHRjYmlBZ0lDQWdJQ0FnWDNSb2FYTXlMbTF2ZG1Vb1pYWmxiblFwTzF4dUlDQWdJQ0FnZlN3Z1IyeHBaR1V1YzJWMGRHbHVaM011ZEdoeWIzUjBiR1VwTENCallYQjBkWEpsS1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZibUpwYm1SeklITjNhWEJsSjNNZ2JXOTJhVzVuSUdWMlpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IxYm1KcGJtUlRkMmx3WlUxdmRtVTZJR1oxYm1OMGFXOXVJSFZ1WW1sdVpGTjNhWEJsVFc5MlpTZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZabVlvVFU5V1JWOUZWa1ZPVkZNc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkNhVzVrY3lCemQybHdaU2R6SUdWdVpHbHVaeUJsZG1WdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkZOM2FYQmxSVzVrT2lCbWRXNWpkR2x2YmlCaWFXNWtVM2RwY0dWRmJtUW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ1gzUm9hWE16SUQwZ2RHaHBjenRjYmx4dUlDQWdJQ0FnUW1sdVpHVnlMbTl1S0VWT1JGOUZWa1ZPVkZNc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5TENCbWRXNWpkR2x2YmlBb1pYWmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ1gzUm9hWE16TG1WdVpDaGxkbVZ1ZENrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUnpJSE4zYVhCbEozTWdaVzVrYVc1bklHVjJaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCMWJtSnBibVJUZDJsd1pVVnVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtVM2RwY0dWRmJtUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMlptS0VWT1JGOUZWa1ZPVkZNc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQk9iM0p0WVd4cGVtVnpJR1YyWlc1MElIUnZkV05vWlhNZ2NHOXBiblJ6SUdGalkyOXlkR2x1WnlCMGJ5QmthV1ptWlhKbGJuUWdkSGx3WlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhabGJuUmNiaUFnSUNBZ0tpOWNiaUFnSUNCMGIzVmphR1Z6T2lCbWRXNWpkR2x2YmlCMGIzVmphR1Z6S0dWMlpXNTBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1RVOVZVMFZmUlZaRlRsUlRMbWx1WkdWNFQyWW9aWFpsYm5RdWRIbHdaU2tnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaWFpsYm5RN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCbGRtVnVkQzUwYjNWamFHVnpXekJkSUh4OElHVjJaVzUwTG1Ob1lXNW5aV1JVYjNWamFHVnpXekJkTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFZGxkSE1nZG1Gc2RXVWdiMllnYldsdWFXMTFiU0J6ZDJsd1pTQmthWE4wWVc1alpTQnpaWFIwYVc1bmN5QmlZWE5sWkNCdmJpQmxkbVZ1ZENCMGVYQmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhSb2NtVnphRzlzWkRvZ1puVnVZM1JwYjI0Z2RHaHlaWE5vYjJ4a0tHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNibHh1SUNBZ0lDQWdhV1lnS0UxUFZWTkZYMFZXUlU1VVV5NXBibVJsZUU5bUtHVjJaVzUwTG5SNWNHVXBJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITmxkSFJwYm1kekxtUnlZV2RVYUhKbGMyaHZiR1E3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ6WlhSMGFXNW5jeTV6ZDJsd1pWUm9jbVZ6YUc5c1pEdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJGYm1GaWJHVnpJSE4zYVhCbElHVjJaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3YzJWc1puMWNiaUFnSUNBZ0tpOWNiaUFnSUNCbGJtRmliR1U2SUdaMWJtTjBhVzl1SUdWdVlXSnNaU2dwSUh0Y2JpQWdJQ0FnSUdScGMyRmliR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVZISmhibk5wZEdsdmJpNWxibUZpYkdVb0tUdGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1JHbHpZV0pzWlhNZ2MzZHBjR1VnWlhabGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdHpaV3htZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR1JwYzJGaWJHVTZJR1oxYm1OMGFXOXVJR1JwYzJGaWJHVW9LU0I3WEc0Z0lDQWdJQ0JrYVhOaFlteGxaQ0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1a2FYTmhZbXhsS0NrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVdSa0lHTnZiWEJ2Ym1WdWRDQmpiR0Z6Y3pwY2JpQWdJQ29nTFNCaFpuUmxjaUJwYm1sMGFXRnNJR0oxYVd4a2FXNW5YRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJKMWFXeGtMbUZtZEdWeUp5d2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRU52YlhCdmJtVnVkSE11U0hSdGJDNXliMjkwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9SMnhwWkdVdWMyVjBkR2x1WjNNdVkyeGhjM05sY3k1emQybHdaV0ZpYkdVcE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WdGIzWmxJSE4zYVhCcGJtY2dZbWx1WkdsdVozTTZYRzRnSUNBcUlDMGdiMjRnWkdWemRISnZlV2x1Wnl3Z2RHOGdjbVZ0YjNabElHRmtaR1ZrSUVWMlpXNTBUR2x6ZEdWdVpYSnpYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJSbGMzUnliM2tuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1UzZHBjR1V1ZFc1aWFXNWtVM2RwY0dWVGRHRnlkQ2dwTzF4dUlDQWdJRk4zYVhCbExuVnVZbWx1WkZOM2FYQmxUVzkyWlNncE8xeHVJQ0FnSUZOM2FYQmxMblZ1WW1sdVpGTjNhWEJsUlc1a0tDazdYRzRnSUNBZ1FtbHVaR1Z5TG1SbGMzUnliM2tvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlGTjNhWEJsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJKYldGblpYTWdLRWRzYVdSbExDQkRiMjF3YjI1bGJuUnpMQ0JGZG1WdWRITXBJSHRjYmlBZ0x5b3FYRzRnSUNBcUlFbHVjM1JoYm1ObElHOW1JSFJvWlNCaWFXNWtaWElnWm05eUlFUlBUU0JGZG1WdWRITXVYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRGZG1WdWRITkNhVzVrWlhKOVhHNGdJQ0FxTDF4dUlDQjJZWElnUW1sdVpHVnlJRDBnYm1WM0lFVjJaVzUwYzBKcGJtUmxjaWdwTzF4dVhHNGdJSFpoY2lCSmJXRm5aWE1nUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FtbHVaSE1nYkdsemRHVnVaWElnZEc4Z1oyeHBaR1VnZDNKaGNIQmxjaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1aWFXNWtLQ2s3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FtbHVaSE1nWUdSeVlXZHpkR0Z5ZEdBZ1pYWmxiblFnYjI0Z2QzSmhjSEJsY2lCMGJ5QndjbVYyWlc1MElHUnlZV2RuYVc1bklHbHRZV2RsY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduWkhKaFozTjBZWEowSnl3Z1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5keVlYQndaWElzSUhSb2FYTXVaSEpoWjNOMFlYSjBLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUdCa2NtRm5jM1JoY25SZ0lHVjJaVzUwSUc5dUlIZHlZWEJ3WlhJdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkRvZ1puVnVZM1JwYjI0Z2RXNWlhVzVrS0NrZ2UxeHVJQ0FnSUNBZ1FtbHVaR1Z5TG05bVppZ25aSEpoWjNOMFlYSjBKeXdnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXBPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVWMlpXNTBJR2hoYm1Sc1pYSXVJRkJ5WlhabGJuUnpJR1J5WVdkbmFXNW5MbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JrY21GbmMzUmhjblE2SUdaMWJtTjBhVzl1SUdSeVlXZHpkR0Z5ZENobGRtVnVkQ2tnZTF4dUlDQWdJQ0FnWlhabGJuUXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsYlc5MlpTQmlhVzVrYVc1bmN5Qm1jbTl0SUdsdFlXZGxjenBjYmlBZ0lDb2dMU0J2YmlCa1pYTjBjbTk1YVc1bkxDQjBieUJ5WlcxdmRtVWdZV1JrWldRZ1JYWmxiblJNYVhOMFpXNWxjbk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkpiV0ZuWlhNdWRXNWlhVzVrS0NrN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVsdFlXZGxjenRjYm4xY2JseHVablZ1WTNScGIyNGdRVzVqYUc5eWN5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRWh2YkdSeklHUmxkR0ZqYUdsdVp5QnpkR0YwZFhNZ2IyWWdZVzVqYUc5eWN5NWNiaUFnSUNvZ1VISmxkbVZ1ZEhNZ1pHVjBZV05vYVc1bklHOW1JR0ZzY21WaFpIa2daR1YwWVdOb1pXUWdZVzVqYUc5eWN5NWNiaUFnSUNwY2JpQWdJQ29nUUhCeWFYWmhkR1ZjYmlBZ0lDb2dRSFI1Y0dVZ2UwSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQjJZWElnWkdWMFlXTm9aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dTRzlzWkhNZ2NISmxkbVZ1ZEdsdVp5QnpkR0YwZFhNZ2IyWWdZVzVqYUc5eWN5NWNiaUFnSUNvZ1NXWWdZSFJ5ZFdWZ0lISmxaR2x5WldOMGFXOXVJR0ZtZEdWeUlHTnNhV05ySUhkcGJHd2dZbVVnWkdsellXSnNaV1F1WEc0Z0lDQXFYRzRnSUNBcUlFQndjbWwyWVhSbFhHNGdJQ0FxSUVCMGVYQmxJSHRDYjI5c1pXRnVmVnh1SUNBZ0tpOWNiaUFnZG1GeUlIQnlaWFpsYm5SbFpDQTlJR1poYkhObE8xeHVYRzRnSUhaaGNpQkJibU5vYjNKeklEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhWd2N5QmhJR2x1YVhScFlXd2djM1JoZEdVZ2IyWWdZVzVqYUc5eWN5QmpiMjF3YjI1bGJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjNWdWREb2dablZ1WTNScGIyNGdiVzkxYm5Rb0tTQjdYRzRnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FxSUVodmJHUnpJR052Ykd4bFkzUnBiMjRnYjJZZ1lXNWphRzl5Y3lCbGJHVnRaVzUwY3k1Y2JpQWdJQ0FnSUNBcVhHNGdJQ0FnSUNBZ0tpQkFjSEpwZG1GMFpWeHVJQ0FnSUNBZ0lDb2dRSFI1Y0dVZ2UwaFVUVXhEYjJ4c1pXTjBhVzl1ZlZ4dUlDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNCMGFHbHpMbDloSUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5keVlYQndaWEl1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duWVNjcE8xeHVYRzRnSUNBZ0lDQjBhR2x6TG1KcGJtUW9LVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJsZG1WdWRITWdkRzhnWVc1amFHOXljeUJwYm5OcFpHVWdZU0IwY21GamF5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkRvZ1puVnVZM1JwYjI0Z1ltbHVaQ2dwSUh0Y2JpQWdJQ0FnSUVKcGJtUmxjaTV2YmlnblkyeHBZMnNuTENCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaXdnZEdocGN5NWpiR2xqYXlrN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dWVzVpYVc1a2N5QmxkbVZ1ZEhNZ1lYUjBZV05vWldRZ2RHOGdZVzVqYUc5eWN5QnBibk5wWkdVZ1lTQjBjbUZqYXk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2RXNWlhVzVrT2lCbWRXNWpkR2x2YmlCMWJtSnBibVFvS1NCN1hHNGdJQ0FnSUNCQ2FXNWtaWEl1YjJabUtDZGpiR2xqYXljc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQklZVzVrYkdWeUlHWnZjaUJqYkdsamF5QmxkbVZ1ZEM0Z1VISmxkbVZ1ZEhNZ1kyeHBZMnR6SUhkb1pXNGdaMnhwWkdVZ2FYTWdhVzRnWUhCeVpYWmxiblJnSUhOMFlYUjFjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTnNhV05yT2lCbWRXNWpkR2x2YmlCamJHbGpheWhsZG1WdWRDa2dlMXh1SUNBZ0lDQWdaWFpsYm5RdWMzUnZjRkJ5YjNCaFoyRjBhVzl1S0NrN1hHNWNiaUFnSUNBZ0lHbG1JQ2h3Y21WMlpXNTBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1pYWmxiblF1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRVpYUmhZMmhsY3lCaGJtTm9iM0p6SUdOc2FXTnJJR1YyWlc1MElHbHVjMmxrWlNCbmJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlM05sYkdaOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWkdWMFlXTm9PaUJtZFc1amRHbHZiaUJrWlhSaFkyZ29LU0I3WEc0Z0lDQWdJQ0J3Y21WMlpXNTBaV1FnUFNCMGNuVmxPMXh1WEc0Z0lDQWdJQ0JwWmlBb0lXUmxkR0ZqYUdWa0tTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnZEdocGN5NXBkR1Z0Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVhWFJsYlhOYmFWMHVaSEpoWjJkaFlteGxJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzFvY21WbUp5d2dkR2hwY3k1cGRHVnRjMXRwWFM1blpYUkJkSFJ5YVdKMWRHVW9KMmh5WldZbktTazdYRzVjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbkpsYlc5MlpVRjBkSEpwWW5WMFpTZ25hSEpsWmljcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWkdWMFlXTm9aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJkSFJoWTJobGN5QmhibU5vYjNKeklHTnNhV05ySUdWMlpXNTBjeUJwYm5OcFpHVWdaMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0elpXeG1mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHRjBkR0ZqYURvZ1puVnVZM1JwYjI0Z1lYUjBZV05vS0NrZ2UxeHVJQ0FnSUNBZ2NISmxkbVZ1ZEdWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lHbG1JQ2hrWlhSaFkyaGxaQ2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIUm9hWE11YVhSbGJYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sMFpXMXpXMmxkTG1SeVlXZG5ZV0pzWlNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sMFpXMXpXMmxkTG5ObGRFRjBkSEpwWW5WMFpTZ25hSEpsWmljc0lIUm9hWE11YVhSbGJYTmJhVjB1WjJWMFFYUjBjbWxpZFhSbEtDZGtZWFJoTFdoeVpXWW5LU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmtaWFJoWTJobFpDQTlJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnWkdWbWFXNWxLRUZ1WTJodmNuTXNJQ2RwZEdWdGN5Y3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHTnZiR3hsWTNScGIyNGdiMllnZEdobElHRnljbTkzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdTRlJOVEVWc1pXMWxiblJiWFgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJCYm1Ob2IzSnpMbDloTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFUmxkR0ZqYUNCaGJtTm9iM0p6SUdsdWMybGtaU0J6Ykdsa1pYTTZYRzRnSUNBcUlDMGdiMjRnYzNkcGNHbHVaeXdnYzI4Z2RHaGxlU0IzYjI0bmRDQnlaV1JwY21WamRDQjBieUJwZEhNZ1lHaHlaV1pnSUdGMGRISnBZblYwWlhOY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpZ25jM2RwY0dVdWJXOTJaU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmJtTm9iM0p6TG1SbGRHRmphQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWFIwWVdOb0lHRnVZMmh2Y25NZ2FXNXphV1JsSUhOc2FXUmxjenBjYmlBZ0lDb2dMU0JoWm5SbGNpQnpkMmx3YVc1bklHRnVaQ0IwY21GdWMybDBhVzl1Y3lCbGJtUnpMQ0J6YnlCMGFHVjVJR05oYmlCeVpXUnBjbVZqZENCaFpuUmxjaUJqYkdsamF5QmhaMkZwYmx4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZHpkMmx3WlM1bGJtUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUTI5dGNHOXVaVzUwY3k1VWNtRnVjMmwwYVc5dUxtRm1kR1Z5S0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lFRnVZMmh2Y25NdVlYUjBZV05vS0NrN1hHNGdJQ0FnZlNrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJWYm1KcGJtUWdZVzVqYUc5eWN5QnBibk5wWkdVZ2MyeHBaR1Z6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JR0Z1WTJodmNuTWdkRzhnYVhSeklHbHVhWFJwWVd3Z2MzUmhkR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkJibU5vYjNKekxtRjBkR0ZqYUNncE8xeHVJQ0FnSUVGdVkyaHZjbk11ZFc1aWFXNWtLQ2s3WEc0Z0lDQWdRbWx1WkdWeUxtUmxjM1J5YjNrb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRUZ1WTJodmNuTTdYRzU5WEc1Y2JuWmhjaUJPUVZaZlUwVk1SVU5VVDFJZ1BTQW5XMlJoZEdFdFoyeHBaR1V0Wld3OVhDSmpiMjUwY205c2MxdHVZWFpkWENKZEp6dGNiblpoY2lCRFQwNVVVazlNVTE5VFJVeEZRMVJQVWlBOUlDZGJaR0YwWVMxbmJHbGtaUzFsYkY0OVhDSmpiMjUwY205c2Mxd2lYU2M3WEc1Y2JtWjFibU4wYVc5dUlFTnZiblJ5YjJ4eklDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUM4cUtseHVJQ0FnS2lCSmJuTjBZVzVqWlNCdlppQjBhR1VnWW1sdVpHVnlJR1p2Y2lCRVQwMGdSWFpsYm5SekxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdSWFpsYm5SelFtbHVaR1Z5ZlZ4dUlDQWdLaTljYmlBZ2RtRnlJRUpwYm1SbGNpQTlJRzVsZHlCRmRtVnVkSE5DYVc1a1pYSW9LVHRjYmx4dUlDQjJZWElnUTI5dWRISnZiSE1nUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1NXNXBkSE1nWVhKeWIzZHpMaUJDYVc1a2N5QmxkbVZ1ZEhNZ2JHbHpkR1Z1WlhKelhHNGdJQ0FnSUNvZ2RHOGdkR2hsSUdGeWNtOTNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQXFJRU52Ykd4bFkzUnBiMjRnYjJZZ2JtRjJhV2RoZEdsdmJpQklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FnSUNwY2JpQWdJQ0FnSUNBcUlFQndjbWwyWVhSbFhHNGdJQ0FnSUNBZ0tpQkFkSGx3WlNCN1NGUk5URU52Ykd4bFkzUnBiMjU5WEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhSb2FYTXVYMjRnUFNCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tFNUJWbDlUUlV4RlExUlBVaWs3WEc1Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2dRMjlzYkdWamRHbHZiaUJ2WmlCamIyNTBjbTlzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQWdJQ3BjYmlBZ0lDQWdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQWdJQ0FnS2lCQWRIbHdaU0I3U0ZSTlRFTnZiR3hsWTNScGIyNTlYRzRnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJSFJvYVhNdVgyTWdQU0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0VOUFRsUlNUMHhUWDFORlRFVkRWRTlTS1R0Y2JseHVJQ0FnSUNBZ2RHaHBjeTVoWkdSQ2FXNWthVzVuY3lncE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ1lXTjBhWFpsSUdOc1lYTnpJSFJ2SUdOMWNuSmxiblFnYzJ4cFpHVXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZEVGamRHbDJaVG9nWm5WdVkzUnBiMjRnYzJWMFFXTjBhWFpsS0NrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TGw5dUxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV1JrUTJ4aGMzTW9kR2hwY3k1ZmJsdHBYUzVqYUdsc1pISmxiaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCaFkzUnBkbVVnWTJ4aGMzTWdkRzhnWTNWeWNtVnVkQ0J6Ykdsa1pTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVZ0YjNabFFXTjBhWFpsT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVZCWTNScGRtVW9LU0I3WEc0Z0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhSb2FYTXVYMjR1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eVpXMXZkbVZEYkdGemN5aDBhR2x6TGw5dVcybGRMbU5vYVd4a2NtVnVLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVWIyZG5iR1Z6SUdGamRHbDJaU0JqYkdGemN5QnZiaUJwZEdWdGN5QnBibk5wWkdVZ2JtRjJhV2RoZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwaFVUVXhGYkdWdFpXNTBmU0JqYjI1MGNtOXNjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWVdSa1EyeGhjM002SUdaMWJtTjBhVzl1SUdGa1pFTnNZWE56S0dOdmJuUnliMnh6S1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN6dGNiaUFnSUNBZ0lIWmhjaUJwZEdWdElEMGdZMjl1ZEhKdmJITmJSMnhwWkdVdWFXNWtaWGhkTzF4dVhHNGdJQ0FnSUNCcGRHVnRMbU5zWVhOelRHbHpkQzVoWkdRb2MyVjBkR2x1WjNNdVkyeGhjM05sY3k1aFkzUnBkbVZPWVhZcE8xeHVYRzRnSUNBZ0lDQnphV0pzYVc1bmN5aHBkR1Z0S1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNoemFXSnNhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lITnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoelpYUjBhVzVuY3k1amJHRnpjMlZ6TG1GamRHbDJaVTVoZGlrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVnpJR0ZqZEdsMlpTQmpiR0Z6Y3lCbWNtOXRJR0ZqZEdsMlpTQmpiMjUwY205c0xseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1NGUk5URVZzWlcxbGJuUjlJR052Ym5SeWIyeHpYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J5WlcxdmRtVkRiR0Z6Y3pvZ1puVnVZM1JwYjI0Z2NtVnRiM1psUTJ4aGMzTW9ZMjl1ZEhKdmJITXBJSHRjYmlBZ0lDQWdJR052Ym5SeWIyeHpXMGRzYVdSbExtbHVaR1Y0WFM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0Vkc2FXUmxMbk5sZEhScGJtZHpMbU5zWVhOelpYTXVZV04wYVhabFRtRjJLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQlpHUnpJR2hoYm1Sc1pYTWdkRzhnZEdobElHVmhZMmdnWjNKdmRYQWdiMllnWTI5dWRISnZiSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdGa1pFSnBibVJwYm1kek9pQm1kVzVqZEdsdmJpQmhaR1JDYVc1a2FXNW5jeWdwSUh0Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTVmWXk1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnBibVFvZEdocGN5NWZZMXRwWFM1amFHbHNaSEpsYmlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5Qm9ZVzVrYkdWeklHWnliMjBnZEdobElHVmhZMmdnWjNKdmRYQWdiMllnWTI5dWRISnZiSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhKbGJXOTJaVUpwYm1ScGJtZHpPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVkNhVzVrYVc1bmN5Z3BJSHRjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnZEdocGN5NWZZeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5WdVltbHVaQ2gwYUdsekxsOWpXMmxkTG1Ob2FXeGtjbVZ1S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkNhVzVrY3lCbGRtVnVkSE1nZEc4Z1lYSnliM2R6SUVoVVRVd2daV3hsYldWdWRITXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwaFVUVXhEYjJ4c1pXTjBhVzl1ZlNCbGJHVnRaVzUwYzF4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDaGxiR1Z0Wlc1MGN5a2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JsYkdWdFpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQkNhVzVrWlhJdWIyNG9XeWRqYkdsamF5Y3NJQ2QwYjNWamFITjBZWEowSjEwc0lHVnNaVzFsYm5SelcybGRMQ0IwYUdsekxtTnNhV05yS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZibUpwYm1SeklHVjJaVzUwY3lCaWFXNWtaV1FnZEc4Z2RHaGxJR0Z5Y205M2N5QklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRJVkUxTVEyOXNiR1ZqZEdsdmJuMGdaV3hsYldWdWRITmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFZ1WW1sdVpEb2dablZ1WTNScGIyNGdkVzVpYVc1a0tHVnNaVzFsYm5SektTQjdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR1ZzWlcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lFSnBibVJsY2k1dlptWW9XeWRqYkdsamF5Y3NJQ2QwYjNWamFITjBZWEowSjEwc0lHVnNaVzFsYm5SelcybGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSVlXNWtiR1Z6SUdCamJHbGphMkFnWlhabGJuUWdiMjRnZEdobElHRnljbTkzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFJRTF2ZG1WeklITnNhV1JsY2lCcGJpQmtjbWxsWTNScGIyNGdjSEpsWTJselpXUWdhVzVjYmlBZ0lDQWdLaUJnWkdGMFlTMW5iR2xrWlMxa2FYSmdJR0YwZEhKcFluVjBaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQmxkbVZ1ZEZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1kyeHBZMnM2SUdaMWJtTjBhVzl1SUdOc2FXTnJLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQmxkbVZ1ZEM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dVhHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsSjFiaTV0WVd0bEtFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbkpsYzI5c2RtVW9aWFpsYm5RdVkzVnljbVZ1ZEZSaGNtZGxkQzVuWlhSQmRIUnlhV0oxZEdVb0oyUmhkR0V0WjJ4cFpHVXRaR2x5SnlrcEtUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdaR1ZtYVc1bEtFTnZiblJ5YjJ4ekxDQW5hWFJsYlhNbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCamIyeHNaV04wYVc5dUlHOW1JSFJvWlNCamIyNTBjbTlzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdTRlJOVEVWc1pXMWxiblJiWFgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJEYjI1MGNtOXNjeTVmWXp0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkMkZ3SUdGamRHbDJaU0JqYkdGemN5QnZaaUJqZFhKeVpXNTBJRzVoZG1sbllYUnBiMjRnYVhSbGJUcGNiaUFnSUNvZ0xTQmhablJsY2lCdGIzVnVkR2x1WnlCMGJ5QnpaWFFnYVhRZ2RHOGdhVzVwZEdsaGJDQnBibVJsZUZ4dUlDQWdLaUF0SUdGbWRHVnlJR1ZoWTJnZ2JXOTJaU0IwYnlCMGFHVWdibVYzSUdsdVpHVjRYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvV3lkdGIzVnVkQzVoWm5SbGNpY3NJQ2R0YjNabExtRm1kR1Z5SjEwc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkRiMjUwY205c2N5NXpaWFJCWTNScGRtVW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCaWFXNWthVzVuY3lCaGJtUWdTRlJOVENCRGJHRnpjMlZ6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JRzFoY210MWNDQjBieUJwZEhNZ2FXNXBkR2xoYkNCemRHRjBaVnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0Nka1pYTjBjbTk1Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFTnZiblJ5YjJ4ekxuSmxiVzkyWlVKcGJtUnBibWR6S0NrN1hHNGdJQ0FnUTI5dWRISnZiSE11Y21WdGIzWmxRV04wYVhabEtDazdYRzRnSUNBZ1FtbHVaR1Z5TG1SbGMzUnliM2tvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlFTnZiblJ5YjJ4ek8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCTFpYbGliMkZ5WkNBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ2RtRnlJRXRsZVdKdllYSmtJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVKcGJtUnpJR3RsZVdKdllYSmtJR1YyWlc1MGN5QnZiaUJqYjIxd2IyNWxiblFnYlc5MWJuUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2ZFc1ME9pQm1kVzVqZEdsdmJpQnRiM1Z1ZENncElIdGNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXpaWFIwYVc1bmN5NXJaWGxpYjJGeVpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnBibVFvS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJaR1J6SUd0bGVXSnZZWEprSUhCeVpYTnpJR1YyWlc1MGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkRvZ1puVnVZM1JwYjI0Z1ltbHVaQ2dwSUh0Y2JpQWdJQ0FnSUVKcGJtUmxjaTV2YmlnbmEyVjVkWEFuTENCa2IyTjFiV1Z1ZEN3Z2RHaHBjeTV3Y21WemN5azdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WdGIzWmxjeUJyWlhsaWIyRnlaQ0J3Y21WemN5QmxkbVZ1ZEhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkRvZ1puVnVZM1JwYjI0Z2RXNWlhVzVrS0NrZ2UxeHVJQ0FnSUNBZ1FtbHVaR1Z5TG05bVppZ25hMlY1ZFhBbkxDQmtiMk4xYldWdWRDazdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nU0dGdVpHeGxjeUJyWlhsaWIyRnlaQ2R6SUdGeWNtOTNjeUJ3Y21WemN5QmhibVFnYlc5MmFXNW5JR2RzYVdSbElHWnZkMkZ5WkNCaGJtUWdZbUZqYTNkaGNtUXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlHVjJaVzUwWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCd2NtVnpjem9nWm5WdVkzUnBiMjRnY0hKbGMzTW9aWFpsYm5RcElIdGNiaUFnSUNBZ0lHbG1JQ2hsZG1WdWRDNXJaWGxEYjJSbElEMDlQU0F6T1NrZ2UxeHVJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMbEoxYmk1dFlXdGxLRU52YlhCdmJtVnVkSE11UkdseVpXTjBhVzl1TG5KbGMyOXNkbVVvSno0bktTazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNobGRtVnVkQzVyWlhsRGIyUmxJRDA5UFNBek55a2dlMXh1SUNBZ0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGxKMWJpNXRZV3RsS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxuSmxjMjlzZG1Vb0p6d25LU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pXMXZkbVVnWW1sdVpHbHVaM01nWm5KdmJTQnJaWGxpYjJGeVpEcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklISmxiVzkyWlNCaFpHUmxaQ0JsZG1WdWRITmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIwYnlCeVpXMXZkbVVnWlhabGJuUnpJR0psWm05eVpTQnlaVzF2ZFc1MGFXNW5YRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvV3lka1pYTjBjbTk1Snl3Z0ozVndaR0YwWlNkZExDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdTMlY1WW05aGNtUXVkVzVpYVc1a0tDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pXMXZkVzUwSUdOdmJYQnZibVZ1ZEZ4dUlDQWdLaUF0SUc5dUlIVndaR0YwYVc1bklIUnZJSEpsWm14bFkzUWdjRzkwWlc1MGFXRnNJR05vWVc1blpYTWdhVzRnYzJWMGRHbHVaM05jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmRYQmtZWFJsSnl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFdGxlV0p2WVhKa0xtMXZkVzUwS0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJFWlhOMGNtOTVJR0pwYm1SbGNqcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUhSdklISmxiVzkyWlNCc2FYTjBaVzVsY25OY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpZ25aR1Z6ZEhKdmVTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JDYVc1a1pYSXVaR1Z6ZEhKdmVTZ3BPMXh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnUzJWNVltOWhjbVE3WEc1OVhHNWNibVoxYm1OMGFXOXVJRUYxZEc5d2JHRjVJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQkpibk4wWVc1alpTQnZaaUIwYUdVZ1ltbHVaR1Z5SUdadmNpQkVUMDBnUlhabGJuUnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3UlhabGJuUnpRbWx1WkdWeWZWeHVJQ0FnS2k5Y2JpQWdkbUZ5SUVKcGJtUmxjaUE5SUc1bGR5QkZkbVZ1ZEhOQ2FXNWtaWElvS1R0Y2JseHVJQ0IyWVhJZ1FYVjBiM0JzWVhrZ1BTQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTVzVwZEdsaGJHbDZaWE1nWVhWMGIzQnNZWGxwYm1jZ1lXNWtJR1YyWlc1MGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0JwWmlBb1IyeHBaR1V1YzJWMGRHbHVaM011YUc5MlpYSndZWFZ6WlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVGRHRnlkSE1nWVhWMGIzQnNZWGxwYm1jZ2FXNGdZMjl1Wm1sbmRYSmxaQ0JwYm5SbGNuWmhiQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdRbTl2YkdWaGJueE9kVzFpWlhKOUlHWnZjbU5sSUZKMWJpQmhkWFJ2Y0d4aGVXbHVaeUIzYVhSb0lIQmhjM05sWkNCcGJuUmxjblpoYkNCeVpXZGhjbVJzWlhOeklHOW1JR0JoZFhSdmNHeGhlV0FnYzJWMGRHbHVaM05jYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhOMFlYSjBPaUJtZFc1amRHbHZiaUJ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCZmRHaHBjeUE5SUhSb2FYTTdYRzVjYmlBZ0lDQWdJR2xtSUNoSGJHbGtaUzV6WlhSMGFXNW5jeTVoZFhSdmNHeGhlU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9hWE5WYm1SbFptbHVaV1FvZEdocGN5NWZhU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5cElEMGdjMlYwU1c1MFpYSjJZV3dvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWDNSb2FYTXVjM1J2Y0NncE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsSjFiaTV0WVd0bEtDYytKeWs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRjkwYUdsekxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lDQWdmU3dnZEdocGN5NTBhVzFsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk4wYjNCeklHRjFkRzl5ZFc1dWFXNW5JRzltSUhSb1pTQm5iR2xrWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MzUnZjRG9nWm5WdVkzUnBiMjRnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgya2dQU0JqYkdWaGNrbHVkR1Z5ZG1Gc0tIUm9hWE11WDJrcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk4wYjNCeklHRjFkRzl3YkdGNWFXNW5JSGRvYVd4bElHMXZkWE5sSUdseklHOTJaWElnWjJ4cFpHVW5jeUJoY21WaExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmlhVzVrT2lCbWRXNWpkR2x2YmlCaWFXNWtLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlGOTBhR2x6TWlBOUlIUm9hWE03WEc1Y2JpQWdJQ0FnSUVKcGJtUmxjaTV2YmlnbmJXOTFjMlZ2ZG1WeUp5d2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1FzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdYM1JvYVhNeUxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyNG9KMjF2ZFhObGIzVjBKeXdnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbkp2YjNRc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnWDNSb2FYTXlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVFnYlc5MWMyVnZkbVZ5SUdWMlpXNTBjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhWdVltbHVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtLQ2tnZTF4dUlDQWdJQ0FnUW1sdVpHVnlMbTltWmloYkoyMXZkWE5sYjNabGNpY3NJQ2R0YjNWelpXOTFkQ2RkTENCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaEJkWFJ2Y0d4aGVTd2dKM1JwYldVbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCMGFXMWxJSEJsY21sdlpDQjJZV3gxWlNCbWIzSWdkR2hsSUdGMWRHOXdiR0Y1SUdsdWRHVnlkbUZzTGlCUWNtbHZjbWwwYVhwbGMxeHVJQ0FnSUNBcUlIUnBiV1Z6SUdsdUlHQmtZWFJoTFdkc2FXUmxMV0YxZEc5d2JHRjVZQ0JoZEhSeWRXSjFkR1Z6SUc5MlpYSWdiM0IwYVc5dWN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQmhkWFJ2Y0d4aGVTQTlJRU52YlhCdmJtVnVkSE11U0hSdGJDNXpiR2xrWlhOYlIyeHBaR1V1YVc1a1pYaGRMbWRsZEVGMGRISnBZblYwWlNnblpHRjBZUzFuYkdsa1pTMWhkWFJ2Y0d4aGVTY3BPMXh1WEc0Z0lDQWdJQ0JwWmlBb1lYVjBiM0JzWVhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnZTVzUwS0dGMWRHOXdiR0Y1S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSdlNXNTBLRWRzYVdSbExuTmxkSFJwYm1kekxtRjFkRzl3YkdGNUtUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJUZEc5d0lHRjFkRzl3YkdGNWFXNW5JR0Z1WkNCMWJtSnBibVFnWlhabGJuUnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR05zWldGeUlHUmxabWx1WldRZ2FXNTBaWEoyWVd4Y2JpQWdJQ29nTFNCdmJpQjFjR1JoZEdsdVp5QjJhV0VnUVZCSklIUnZJSEpsYzJWMElHbHVkR1Z5ZG1Gc0lIUm9ZWFFnYldGNUlHTm9ZVzVuWldSY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMlJsYzNSeWIza25MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmRYUnZjR3hoZVM1MWJtSnBibVFvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRk4wYjNBZ1lYVjBiM0JzWVhscGJtYzZYRzRnSUNBcUlDMGdZbVZtYjNKbElHVmhZMmdnY25WdUxDQjBieUJ5WlhOMFlYSjBJR0YxZEc5d2JHRjVhVzVuWEc0Z0lDQXFJQzBnYjI0Z2NHRjFjMmx1WnlCMmFXRWdRVkJKWEc0Z0lDQXFJQzBnYjI0Z1pHVnpkSEp2ZVdsdVp5d2dkRzhnWTJ4bFlYSWdaR1ZtYVc1bFpDQnBiblJsY25aaGJGeHVJQ0FnS2lBdElIZG9hV3hsSUhOMFlYSjBhVzVuSUdFZ2MzZHBjR1ZjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKSUhSdklISmxjMlYwSUdsdWRHVnlkbUZzSUhSb1lYUWdiV0Y1SUdOb1lXNW5aV1JjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkozSjFiaTVpWldadmNtVW5MQ0FuY0dGMWMyVW5MQ0FuWkdWemRISnZlU2NzSUNkemQybHdaUzV6ZEdGeWRDY3NJQ2QxY0dSaGRHVW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVGMWRHOXdiR0Y1TG5OMGIzQW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBZWEowSUdGMWRHOXdiR0Y1YVc1bk9seHVJQ0FnS2lBdElHRm1kR1Z5SUdWaFkyZ2djblZ1TENCMGJ5QnlaWE4wWVhKMElHRjFkRzl3YkdGNWFXNW5YRzRnSUNBcUlDMGdiMjRnY0d4aGVXbHVaeUIyYVdFZ1FWQkpYRzRnSUNBcUlDMGdkMmhwYkdVZ1pXNWthVzVuSUdFZ2MzZHBjR1ZjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkozSjFiaTVoWm5SbGNpY3NJQ2R3YkdGNUp5d2dKM04zYVhCbExtVnVaQ2RkTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1FYVjBiM0JzWVhrdWMzUmhjblFvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsYlc5MWJuUWdZWFYwYjNCc1lYbHBibWM2WEc0Z0lDQXFJQzBnYjI0Z2RYQmtZWFJwYm1jZ2RtbGhJRUZRU1NCMGJ5QnlaWE5sZENCcGJuUmxjblpoYkNCMGFHRjBJRzFoZVNCamFHRnVaMlZrWEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0ozVndaR0YwWlNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkJkWFJ2Y0d4aGVTNXRiM1Z1ZENncE8xeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUkdWemRISnZlU0JoSUdKcGJtUmxjanBjYmlBZ0lDb2dMU0J2YmlCa1pYTjBjbTk1YVc1bklHZHNhV1JsSUdsdWMzUmhibU5sSUhSdklHTnNaV0Z5ZFhBZ2JHbHpkR1Z1WlhKelhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMlJsYzNSeWIza25MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVGMWRHOXdiR0Y1TzF4dWZWeHVYRzR2S2lwY2JpQXFJRk52Y25SeklHdGxlWE1nYjJZZ1luSmxZV3R3YjJsdWRDQnZZbXBsWTNRZ2MyOGdkR2hsZVNCM2FXeHNJR0psSUc5eVpHVnlaV1FnWm5KdmJTQnNiM2RsY2lCMGJ5QmlhV2RuWlhJdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhCdmFXNTBjMXh1SUNvZ1FISmxkSFZ5Ym5NZ2UwOWlhbVZqZEgxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYzI5eWRFSnlaV0ZyY0c5cGJuUnpLSEJ2YVc1MGN5a2dlMXh1SUNCcFppQW9hWE5QWW1wbFkzUW9jRzlwYm5SektTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCemIzSjBTMlY1Y3lod2IybHVkSE1wTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhkaGNtNG9KMEp5WldGcmNHOXBiblJ6SUc5d2RHbHZiaUJ0ZFhOMElHSmxJR0Z1SUc5aWFtVmpkQ2NwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUh0OU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCQ2NtVmhhM0J2YVc1MGN5QW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXNJRVYyWlc1MGN5a2dlMXh1SUNBdktpcGNiaUFnSUNvZ1NXNXpkR0Z1WTJVZ2IyWWdkR2hsSUdKcGJtUmxjaUJtYjNJZ1JFOU5JRVYyWlc1MGN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMFYyWlc1MGMwSnBibVJsY24xY2JpQWdJQ292WEc0Z0lIWmhjaUJDYVc1a1pYSWdQU0J1WlhjZ1JYWmxiblJ6UW1sdVpHVnlLQ2s3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRWh2YkdSeklISmxabVZ5Wlc1alpTQjBieUJ6WlhSMGFXNW5jeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA5aWFtVmpkSDFjYmlBZ0lDb3ZYRzRnSUhaaGNpQnpaWFIwYVc1bmN5QTlJRWRzYVdSbExuTmxkSFJwYm1kek8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCSWIyeGtjeUJ5WldabGNtVnVZMlVnZEc4Z1luSmxZV3R3YjJsdWRITWdiMkpxWldOMElHbHVJSE5sZEhScGJtZHpMaUJUYjNKMGN5QmljbVZoYTNCdmFXNTBjMXh1SUNBZ0tpQm1jbTl0SUhOdFlXeHNaWElnZEc4Z2JHRnlaMlZ5TGlCSmRDQnBjeUJ5WlhGMWFYSmxaQ0JwYmlCdmNtUmxjaUIwYnlCd2NtOXdaWEpjYmlBZ0lDb2diV0YwWTJocGJtY2dZM1Z5Y21WdWRHeDVJR0ZqZEdsMlpTQmljbVZoYTNCdmFXNTBJSE5sZEhScGJtZHpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VDJKcVpXTjBmVnh1SUNBZ0tpOWNiaUFnZG1GeUlIQnZhVzUwY3lBOUlITnZjblJDY21WaGEzQnZhVzUwY3loelpYUjBhVzVuY3k1aWNtVmhhM0J2YVc1MGN5azdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFTmhZMmhsSUdsdWFYUnBZV3dnYzJWMGRHbHVaM01nWW1WbWIzSmxJRzkyWlhKM2NtbDBkR2x1Wnk1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwOWlhbVZqZEgxY2JpQWdJQ292WEc0Z0lIWmhjaUJrWldaaGRXeDBjeUE5SUY5bGVIUmxibVJ6S0h0OUxDQnpaWFIwYVc1bmN5azdYRzVjYmlBZ2RtRnlJRUp5WldGcmNHOXBiblJ6SUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFMWhkR05vWlhNZ2MyVjBkR2x1WjNNZ1ptOXlJR04xY25KbFkzUnNlU0J0WVhSamFHbHVaeUJ0WldScFlTQmljbVZoYTNCdmFXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlIQnZhVzUwYzF4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0UFltcGxZM1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiV0YwWTJnNklHWjFibU4wYVc5dUlHMWhkR05vS0hCdmFXNTBjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCM2FXNWtiM2N1YldGMFkyaE5aV1JwWVNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2NHOXBiblFnYVc0Z2NHOXBiblJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hCdmFXNTBjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHdiMmx1ZENrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDNhVzVrYjNjdWJXRjBZMmhOWldScFlTZ25LRzFoZUMxM2FXUjBhRG9nSnlBcklIQnZhVzUwSUNzZ0ozQjRLU2NwTG0xaGRHTm9aWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ2YVc1MGMxdHdiMmx1ZEYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQmtaV1poZFd4MGN6dGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRTkyWlhKM2NtbDBaU0JwYm5OMFlXNWpaU0J6WlhSMGFXNW5jeUIzYVhSb0lHTjFjbkpsYm5Sc2VTQnRZWFJqYUdsdVp5QmljbVZoYTNCdmFXNTBJSE5sZEhScGJtZHpMbHh1SUNBZ0tpQlVhR2x6SUdoaGNIQmxibk1nY21sbmFIUWdZV1owWlhJZ1kyOXRjRzl1Wlc1MElHbHVhWFJwWVd4cGVtRjBhVzl1TGx4dUlDQWdLaTljYmlBZ1gyVjRkR1Z1WkhNb2MyVjBkR2x1WjNNc0lFSnlaV0ZyY0c5cGJuUnpMbTFoZEdOb0tIQnZhVzUwY3lrcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWjJ4cFpHVWdkMmwwYUNCelpYUjBhVzVuY3lCdlppQnRZWFJqYUdWa0lHSnlaV3R3YjJsdWREcGNiaUFnSUNvZ0xTQjNhVzVrYjNjZ2NtVnphWHBsSUhSdklIVndaR0YwWlNCemJHbGtaWEpjYmlBZ0lDb3ZYRzRnSUVKcGJtUmxjaTV2YmlnbmNtVnphWHBsSnl3Z2QybHVaRzkzTENCMGFISnZkSFJzWlNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1IyeHBaR1V1YzJWMGRHbHVaM01nUFNCdFpYSm5aVTl3ZEdsdmJuTW9jMlYwZEdsdVozTXNJRUp5WldGcmNHOXBiblJ6TG0xaGRHTm9LSEJ2YVc1MGN5a3BPMXh1SUNCOUxDQkhiR2xrWlM1elpYUjBhVzVuY3k1MGFISnZkSFJzWlNrcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pYTnZjblFnWVc1a0lIVndaR0YwWlNCa1pXWmhkV3gwSUhObGRIUnBibWR6T2x4dUlDQWdLaUF0SUc5dUlISmxhVzVwZENCMmFXRWdRVkJKTENCemJ5QmljbVZoYTNCdmFXNTBJRzFoZEdOb2FXNW5JSGRwYkd3Z1ltVWdjR1Z5Wm05eWJXVmtJSGRwZEdnZ2IzQjBhVzl1YzF4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZDFjR1JoZEdVbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjRzlwYm5SeklEMGdjMjl5ZEVKeVpXRnJjRzlwYm5SektIQnZhVzUwY3lrN1hHNWNiaUFnSUNCa1pXWmhkV3gwY3lBOUlGOWxlSFJsYm1SektIdDlMQ0J6WlhSMGFXNW5jeWs3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ2NtVnphWHBsSUd4cGMzUmxibVZ5T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JRzFoY210MWNDQjBieUJwZEhNZ2FXNXBkR2xoYkNCemRHRjBaVnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0Nka1pYTjBjbTk1Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFSnBibVJsY2k1dlptWW9KM0psYzJsNlpTY3NJSGRwYm1SdmR5azdYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJDY21WaGEzQnZhVzUwY3p0Y2JuMWNibHh1ZG1GeUlFTlBUVkJQVGtWT1ZGTWdQU0I3WEc0Z0lDOHZJRkpsY1hWcGNtVmtYRzRnSUVoMGJXdzZJRWgwYld3c1hHNGdJRlJ5WVc1emJHRjBaVG9nVkhKaGJuTnNZWFJsTEZ4dUlDQlVjbUZ1YzJsMGFXOXVPaUJVY21GdWMybDBhVzl1TEZ4dUlDQkVhWEpsWTNScGIyNDZJRVJwY21WamRHbHZiaXhjYmlBZ1VHVmxhem9nVUdWbGF5eGNiaUFnVTJsNlpYTTZJRk5wZW1WekxGeHVJQ0JIWVhCek9pQkhZWEJ6TEZ4dUlDQk5iM1psT2lCTmIzWmxMRnh1SUNCRGJHOXVaWE02SUVOc2IyNWxjeXhjYmlBZ1VtVnphWHBsT2lCU1pYTnBlbVVzWEc0Z0lFSjFhV3hrT2lCQ2RXbHNaQ3hjYmlBZ1VuVnVPaUJTZFc0c1hHNWNiaUFnTHk4Z1QzQjBhVzl1WVd4Y2JpQWdVM2RwY0dVNklGTjNhWEJsTEZ4dUlDQkpiV0ZuWlhNNklFbHRZV2RsY3l4Y2JpQWdRVzVqYUc5eWN6b2dRVzVqYUc5eWN5eGNiaUFnUTI5dWRISnZiSE02SUVOdmJuUnliMnh6TEZ4dUlDQkxaWGxpYjJGeVpEb2dTMlY1WW05aGNtUXNYRzRnSUVGMWRHOXdiR0Y1T2lCQmRYUnZjR3hoZVN4Y2JpQWdRbkpsWVd0d2IybHVkSE02SUVKeVpXRnJjRzlwYm5SelhHNTlPMXh1WEc1MllYSWdSMnhwWkdVa01TQTlJR1oxYm1OMGFXOXVJQ2hmUTI5eVpTa2dlMXh1SUNCcGJtaGxjbWwwY3loSGJHbGtaU1FrTVN3Z1gwTnZjbVVwTzF4dVhHNGdJR1oxYm1OMGFXOXVJRWRzYVdSbEpDUXhLQ2tnZTF4dUlDQWdJR05zWVhOelEyRnNiRU5vWldOcktIUm9hWE1zSUVkc2FXUmxKQ1F4S1R0Y2JpQWdJQ0J5WlhSMWNtNGdjRzl6YzJsaWJHVkRiMjV6ZEhKMVkzUnZjbEpsZEhWeWJpaDBhR2x6TENBb1IyeHBaR1VrSkRFdVgxOXdjbTkwYjE5ZklIeDhJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmloSGJHbGtaU1FrTVNrcExtRndjR3g1S0hSb2FYTXNJR0Z5WjNWdFpXNTBjeWtwTzF4dUlDQjlYRzVjYmlBZ1kzSmxZWFJsUTJ4aGMzTW9SMnhwWkdVa0pERXNJRnQ3WEc0Z0lDQWdhMlY1T2lBbmJXOTFiblFuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQnRiM1Z1ZENncElIdGNiaUFnSUNBZ0lIWmhjaUJsZUhSbGJuTnBiMjV6SUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lEQWdKaVlnWVhKbmRXMWxiblJ6V3pCZElDRTlQU0IxYm1SbFptbHVaV1FnUHlCaGNtZDFiV1Z1ZEhOYk1GMGdPaUI3ZlR0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUdkbGRDaEhiR2xrWlNRa01TNXdjbTkwYjNSNWNHVXVYMTl3Y205MGIxOWZJSHg4SUU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppaEhiR2xrWlNRa01TNXdjbTkwYjNSNWNHVXBMQ0FuYlc5MWJuUW5MQ0IwYUdsektTNWpZV3hzS0hSb2FYTXNJRjlsZUhSbGJtUnpLSHQ5TENCRFQwMVFUMDVGVGxSVExDQmxlSFJsYm5OcGIyNXpLU2s3WEc0Z0lDQWdmVnh1SUNCOVhTazdYRzRnSUhKbGRIVnliaUJIYkdsa1pTUWtNVHRjYm4wb1IyeHBaR1VwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCSGJHbGtaU1F4TzF4dUlpd2lMeW9oWEc0Z0tpQndaWEptWldOMExYTmpjbTlzYkdKaGNpQjJNUzQwTGpCY2JpQXFJQ2hqS1NBeU1ERTRJRWg1ZFc1cVpTQktkVzVjYmlBcUlFQnNhV05sYm5ObElFMUpWRnh1SUNvdlhHNW1kVzVqZEdsdmJpQm5aWFFvWld4bGJXVnVkQ2tnZTF4dUlDQnlaWFIxY200Z1oyVjBRMjl0Y0hWMFpXUlRkSGxzWlNobGJHVnRaVzUwS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJWMEtHVnNaVzFsYm5Rc0lHOWlhaWtnZTF4dUlDQm1iM0lnS0haaGNpQnJaWGtnYVc0Z2IySnFLU0I3WEc0Z0lDQWdkbUZ5SUhaaGJDQTlJRzlpYWx0clpYbGRPMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkbUZzSUQwOVBTQW5iblZ0WW1WeUp5a2dlMXh1SUNBZ0lDQWdkbUZzSUQwZ2RtRnNJQ3NnWENKd2VGd2lPMXh1SUNBZ0lIMWNiaUFnSUNCbGJHVnRaVzUwTG5OMGVXeGxXMnRsZVYwZ1BTQjJZV3c3WEc0Z0lIMWNiaUFnY21WMGRYSnVJR1ZzWlcxbGJuUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHUnBkaWhqYkdGemMwNWhiV1VwSUh0Y2JpQWdkbUZ5SUdScGRpQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0oyUnBkaWNwTzF4dUlDQmthWFl1WTJ4aGMzTk9ZVzFsSUQwZ1kyeGhjM05PWVcxbE8xeHVJQ0J5WlhSMWNtNGdaR2wyTzF4dWZWeHVYRzUyWVhJZ1pXeE5ZWFJqYUdWeklEMWNiaUFnZEhsd1pXOW1JRVZzWlcxbGJuUWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1YRzRnSUNoRmJHVnRaVzUwTG5CeWIzUnZkSGx3WlM1dFlYUmphR1Z6SUh4OFhHNGdJQ0FnUld4bGJXVnVkQzV3Y205MGIzUjVjR1V1ZDJWaWEybDBUV0YwWTJobGMxTmxiR1ZqZEc5eUlIeDhYRzRnSUNBZ1JXeGxiV1Z1ZEM1d2NtOTBiM1I1Y0dVdWJXOTZUV0YwWTJobGMxTmxiR1ZqZEc5eUlIeDhYRzRnSUNBZ1JXeGxiV1Z1ZEM1d2NtOTBiM1I1Y0dVdWJYTk5ZWFJqYUdWelUyVnNaV04wYjNJcE8xeHVYRzVtZFc1amRHbHZiaUJ0WVhSamFHVnpLR1ZzWlcxbGJuUXNJSEYxWlhKNUtTQjdYRzRnSUdsbUlDZ2haV3hOWVhSamFHVnpLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZE9ieUJsYkdWdFpXNTBJRzFoZEdOb2FXNW5JRzFsZEdodlpDQnpkWEJ3YjNKMFpXUW5LVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJsYkUxaGRHTm9aWE11WTJGc2JDaGxiR1Z0Wlc1MExDQnhkV1Z5ZVNrN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhKbGJXOTJaU2hsYkdWdFpXNTBLU0I3WEc0Z0lHbG1JQ2hsYkdWdFpXNTBMbkpsYlc5MlpTa2dlMXh1SUNBZ0lHVnNaVzFsYm5RdWNtVnRiM1psS0NrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2FXWWdLR1ZzWlcxbGJuUXVjR0Z5Wlc1MFRtOWtaU2tnZTF4dUlDQWdJQ0FnWld4bGJXVnVkQzV3WVhKbGJuUk9iMlJsTG5KbGJXOTJaVU5vYVd4a0tHVnNaVzFsYm5RcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnhkV1Z5ZVVOb2FXeGtjbVZ1S0dWc1pXMWxiblFzSUhObGJHVmpkRzl5S1NCN1hHNGdJSEpsZEhWeWJpQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdVptbHNkR1Z5TG1OaGJHd29aV3hsYldWdWRDNWphR2xzWkhKbGJpd2dablZ1WTNScGIyNGdLR05vYVd4a0tTQjdJSEpsZEhWeWJpQnRZWFJqYUdWektHTm9hV3hrTENCelpXeGxZM1J2Y2lrN0lIMWNiaUFnS1R0Y2JuMWNibHh1ZG1GeUlHTnNjeUE5SUh0Y2JpQWdiV0ZwYmpvZ0ozQnpKeXhjYmlBZ1pXeGxiV1Z1ZERvZ2UxeHVJQ0FnSUhSb2RXMWlPaUJtZFc1amRHbHZiaUFvZUNrZ2V5QnlaWFIxY200Z0tGd2ljSE5mWDNSb2RXMWlMVndpSUNzZ2VDazdJSDBzWEc0Z0lDQWdjbUZwYkRvZ1puVnVZM1JwYjI0Z0tIZ3BJSHNnY21WMGRYSnVJQ2hjSW5CelgxOXlZV2xzTFZ3aUlDc2dlQ2s3SUgwc1hHNGdJQ0FnWTI5dWMzVnRhVzVuT2lBbmNITmZYMk5vYVd4a0xTMWpiMjV6ZFcxbEp5eGNiaUFnZlN4Y2JpQWdjM1JoZEdVNklIdGNiaUFnSUNCbWIyTjFjem9nSjNCekxTMW1iMk4xY3ljc1hHNGdJQ0FnWTJ4cFkydHBibWM2SUNkd2N5MHRZMnhwWTJ0cGJtY25MRnh1SUNBZ0lHRmpkR2wyWlRvZ1puVnVZM1JwYjI0Z0tIZ3BJSHNnY21WMGRYSnVJQ2hjSW5CekxTMWhZM1JwZG1VdFhDSWdLeUI0S1RzZ2ZTeGNiaUFnSUNCelkzSnZiR3hwYm1jNklHWjFibU4wYVc5dUlDaDRLU0I3SUhKbGRIVnliaUFvWENKd2N5MHRjMk55YjJ4c2FXNW5MVndpSUNzZ2VDazdJSDBzWEc0Z0lIMHNYRzU5TzF4dVhHNHZLbHh1SUNvZ1NHVnNjR1Z5SUcxbGRHaHZaSE5jYmlBcUwxeHVkbUZ5SUhOamNtOXNiR2x1WjBOc1lYTnpWR2x0Wlc5MWRDQTlJSHNnZURvZ2JuVnNiQ3dnZVRvZ2JuVnNiQ0I5TzF4dVhHNW1kVzVqZEdsdmJpQmhaR1JUWTNKdmJHeHBibWREYkdGemN5aHBMQ0I0S1NCN1hHNGdJSFpoY2lCamJHRnpjMHhwYzNRZ1BTQnBMbVZzWlcxbGJuUXVZMnhoYzNOTWFYTjBPMXh1SUNCMllYSWdZMnhoYzNOT1lXMWxJRDBnWTJ4ekxuTjBZWFJsTG5OamNtOXNiR2x1WnloNEtUdGNibHh1SUNCcFppQW9ZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLR05zWVhOelRtRnRaU2twSUh0Y2JpQWdJQ0JqYkdWaGNsUnBiV1Z2ZFhRb2MyTnliMnhzYVc1blEyeGhjM05VYVcxbGIzVjBXM2hkS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamJHRnpjMHhwYzNRdVlXUmtLR05zWVhOelRtRnRaU2s3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z2NtVnRiM1psVTJOeWIyeHNhVzVuUTJ4aGMzTW9hU3dnZUNrZ2UxeHVJQ0J6WTNKdmJHeHBibWREYkdGemMxUnBiV1Z2ZFhSYmVGMGdQU0J6WlhSVWFXMWxiM1YwS0Z4dUlDQWdJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUdrdWFYTkJiR2wyWlNBbUppQnBMbVZzWlcxbGJuUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaGpiSE11YzNSaGRHVXVjMk55YjJ4c2FXNW5LSGdwS1RzZ2ZTeGNiaUFnSUNCcExuTmxkSFJwYm1kekxuTmpjbTlzYkdsdVoxUm9jbVZ6YUc5c1pGeHVJQ0FwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ6WlhSVFkzSnZiR3hwYm1kRGJHRnpjMGx1YzNSaGJuUnNlU2hwTENCNEtTQjdYRzRnSUdGa1pGTmpjbTlzYkdsdVowTnNZWE56S0drc0lIZ3BPMXh1SUNCeVpXMXZkbVZUWTNKdmJHeHBibWREYkdGemN5aHBMQ0I0S1R0Y2JuMWNibHh1ZG1GeUlFVjJaVzUwUld4bGJXVnVkQ0E5SUdaMWJtTjBhVzl1SUVWMlpXNTBSV3hsYldWdWRDaGxiR1Z0Wlc1MEtTQjdYRzRnSUhSb2FYTXVaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUTdYRzRnSUhSb2FYTXVhR0Z1Wkd4bGNuTWdQU0I3ZlR0Y2JuMDdYRzVjYm5aaGNpQndjbTkwYjNSNWNHVkJZMk5sYzNOdmNuTWdQU0I3SUdselJXMXdkSGs2SUhzZ1kyOXVabWxuZFhKaFlteGxPaUIwY25WbElIMGdmVHRjYmx4dVJYWmxiblJGYkdWdFpXNTBMbkJ5YjNSdmRIbHdaUzVpYVc1a0lEMGdablZ1WTNScGIyNGdZbWx1WkNBb1pYWmxiblJPWVcxbExDQm9ZVzVrYkdWeUtTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2RHaHBjeTVvWVc1a2JHVnljMXRsZG1WdWRFNWhiV1ZkSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJSFJvYVhNdWFHRnVaR3hsY25OYlpYWmxiblJPWVcxbFhTQTlJRnRkTzF4dUlDQjlYRzRnSUhSb2FYTXVhR0Z1Wkd4bGNuTmJaWFpsYm5ST1lXMWxYUzV3ZFhOb0tHaGhibVJzWlhJcE8xeHVJQ0IwYUdsekxtVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkRTVoYldVc0lHaGhibVJzWlhJc0lHWmhiSE5sS1R0Y2JuMDdYRzVjYmtWMlpXNTBSV3hsYldWdWRDNXdjbTkwYjNSNWNHVXVkVzVpYVc1a0lEMGdablZ1WTNScGIyNGdkVzVpYVc1a0lDaGxkbVZ1ZEU1aGJXVXNJSFJoY21kbGRDa2dlMXh1SUNBZ0lIWmhjaUIwYUdsekpERWdQU0IwYUdsek8xeHVYRzRnSUhSb2FYTXVhR0Z1Wkd4bGNuTmJaWFpsYm5ST1lXMWxYU0E5SUhSb2FYTXVhR0Z1Wkd4bGNuTmJaWFpsYm5ST1lXMWxYUzVtYVd4MFpYSW9ablZ1WTNScGIyNGdLR2hoYm1Sc1pYSXBJSHRjYmlBZ0lDQnBaaUFvZEdGeVoyVjBJQ1ltSUdoaGJtUnNaWElnSVQwOUlIUmhjbWRsZENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTWtNUzVsYkdWdFpXNTBMbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvWlhabGJuUk9ZVzFsTENCb1lXNWtiR1Z5TENCbVlXeHpaU2s3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlLVHRjYm4wN1hHNWNia1YyWlc1MFJXeGxiV1Z1ZEM1d2NtOTBiM1I1Y0dVdWRXNWlhVzVrUVd4c0lEMGdablZ1WTNScGIyNGdkVzVpYVc1a1FXeHNJQ2dwSUh0Y2JpQWdJQ0IyWVhJZ2RHaHBjeVF4SUQwZ2RHaHBjenRjYmx4dUlDQm1iM0lnS0haaGNpQnVZVzFsSUdsdUlIUm9hWE1rTVM1b1lXNWtiR1Z5Y3lrZ2UxeHVJQ0FnSUhSb2FYTWtNUzUxYm1KcGJtUW9ibUZ0WlNrN1hHNGdJSDFjYm4wN1hHNWNibkJ5YjNSdmRIbHdaVUZqWTJWemMyOXljeTVwYzBWdGNIUjVMbWRsZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjJZWElnZEdocGN5UXhJRDBnZEdocGN6dGNibHh1SUNCeVpYUjFjbTRnVDJKcVpXTjBMbXRsZVhNb2RHaHBjeTVvWVc1a2JHVnljeWt1WlhabGNua29YRzRnSUNBZ1puVnVZM1JwYjI0Z0tHdGxlU2tnZXlCeVpYUjFjbTRnZEdocGN5UXhMbWhoYm1Sc1pYSnpXMnRsZVYwdWJHVnVaM1JvSUQwOVBTQXdPeUI5WEc0Z0lDazdYRzU5TzF4dVhHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkR2xsY3lnZ1JYWmxiblJGYkdWdFpXNTBMbkJ5YjNSdmRIbHdaU3dnY0hKdmRHOTBlWEJsUVdOalpYTnpiM0p6SUNrN1hHNWNiblpoY2lCRmRtVnVkRTFoYm1GblpYSWdQU0JtZFc1amRHbHZiaUJGZG1WdWRFMWhibUZuWlhJb0tTQjdYRzRnSUhSb2FYTXVaWFpsYm5SRmJHVnRaVzUwY3lBOUlGdGRPMXh1ZlR0Y2JseHVSWFpsYm5STllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1bGRtVnVkRVZzWlcxbGJuUWdQU0JtZFc1amRHbHZiaUJsZG1WdWRFVnNaVzFsYm5RZ0tHVnNaVzFsYm5RcElIdGNiaUFnZG1GeUlHVmxJRDBnZEdocGN5NWxkbVZ1ZEVWc1pXMWxiblJ6TG1acGJIUmxjaWhtZFc1amRHbHZiaUFvWldVcElIc2djbVYwZFhKdUlHVmxMbVZzWlcxbGJuUWdQVDA5SUdWc1pXMWxiblE3SUgwcFd6QmRPMXh1SUNCcFppQW9JV1ZsS1NCN1hHNGdJQ0FnWldVZ1BTQnVaWGNnUlhabGJuUkZiR1Z0Wlc1MEtHVnNaVzFsYm5RcE8xeHVJQ0FnSUhSb2FYTXVaWFpsYm5SRmJHVnRaVzUwY3k1d2RYTm9LR1ZsS1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnWldVN1hHNTlPMXh1WEc1RmRtVnVkRTFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbUpwYm1RZ1BTQm1kVzVqZEdsdmJpQmlhVzVrSUNobGJHVnRaVzUwTENCbGRtVnVkRTVoYldVc0lHaGhibVJzWlhJcElIdGNiaUFnZEdocGN5NWxkbVZ1ZEVWc1pXMWxiblFvWld4bGJXVnVkQ2t1WW1sdVpDaGxkbVZ1ZEU1aGJXVXNJR2hoYm1Sc1pYSXBPMXh1ZlR0Y2JseHVSWFpsYm5STllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1MWJtSnBibVFnUFNCbWRXNWpkR2x2YmlCMWJtSnBibVFnS0dWc1pXMWxiblFzSUdWMlpXNTBUbUZ0WlN3Z2FHRnVaR3hsY2lrZ2UxeHVJQ0IyWVhJZ1pXVWdQU0IwYUdsekxtVjJaVzUwUld4bGJXVnVkQ2hsYkdWdFpXNTBLVHRjYmlBZ1pXVXVkVzVpYVc1a0tHVjJaVzUwVG1GdFpTd2dhR0Z1Wkd4bGNpazdYRzVjYmlBZ2FXWWdLR1ZsTG1selJXMXdkSGtwSUh0Y2JpQWdJQ0F2THlCeVpXMXZkbVZjYmlBZ0lDQjBhR2x6TG1WMlpXNTBSV3hsYldWdWRITXVjM0JzYVdObEtIUm9hWE11WlhabGJuUkZiR1Z0Wlc1MGN5NXBibVJsZUU5bUtHVmxLU3dnTVNrN1hHNGdJSDFjYm4wN1hHNWNia1YyWlc1MFRXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdWRXNWlhVzVrUVd4c0lEMGdablZ1WTNScGIyNGdkVzVpYVc1a1FXeHNJQ2dwSUh0Y2JpQWdkR2hwY3k1bGRtVnVkRVZzWlcxbGJuUnpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLR1VwSUhzZ2NtVjBkWEp1SUdVdWRXNWlhVzVrUVd4c0tDazdJSDBwTzF4dUlDQjBhR2x6TG1WMlpXNTBSV3hsYldWdWRITWdQU0JiWFR0Y2JuMDdYRzVjYmtWMlpXNTBUV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXViMjVqWlNBOUlHWjFibU4wYVc5dUlHOXVZMlVnS0dWc1pXMWxiblFzSUdWMlpXNTBUbUZ0WlN3Z2FHRnVaR3hsY2lrZ2UxeHVJQ0IyWVhJZ1pXVWdQU0IwYUdsekxtVjJaVzUwUld4bGJXVnVkQ2hsYkdWdFpXNTBLVHRjYmlBZ2RtRnlJRzl1WTJWSVlXNWtiR1Z5SUQwZ1puVnVZM1JwYjI0Z0tHVjJkQ2tnZTF4dUlDQWdJR1ZsTG5WdVltbHVaQ2hsZG1WdWRFNWhiV1VzSUc5dVkyVklZVzVrYkdWeUtUdGNiaUFnSUNCb1lXNWtiR1Z5S0dWMmRDazdYRzRnSUgwN1hHNGdJR1ZsTG1KcGJtUW9aWFpsYm5ST1lXMWxMQ0J2Ym1ObFNHRnVaR3hsY2lrN1hHNTlPMXh1WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZGZG1WdWRDaHVZVzFsS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnZDJsdVpHOTNMa04xYzNSdmJVVjJaVzUwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJEZFhOMGIyMUZkbVZ1ZENodVlXMWxLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IyWVhJZ1pYWjBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSWFpsYm5Rb0owTjFjM1J2YlVWMlpXNTBKeWs3WEc0Z0lDQWdaWFowTG1sdWFYUkRkWE4wYjIxRmRtVnVkQ2h1WVcxbExDQm1ZV3h6WlN3Z1ptRnNjMlVzSUhWdVpHVm1hVzVsWkNrN1hHNGdJQ0FnY21WMGRYSnVJR1YyZER0Y2JpQWdmVnh1ZlZ4dVhHNTJZWElnY0hKdlkyVnpjMU5qY205c2JFUnBabVlnUFNCbWRXNWpkR2x2YmloY2JpQWdhU3hjYmlBZ1lYaHBjeXhjYmlBZ1pHbG1aaXhjYmlBZ2RYTmxVMk55YjJ4c2FXNW5RMnhoYzNNc1hHNGdJR1p2Y21ObFJtbHlaVkpsWVdOb1JYWmxiblJjYmlrZ2UxeHVJQ0JwWmlBb0lIVnpaVk5qY205c2JHbHVaME5zWVhOeklEMDlQU0IyYjJsa0lEQWdLU0IxYzJWVFkzSnZiR3hwYm1kRGJHRnpjeUE5SUhSeWRXVTdYRzRnSUdsbUlDZ2dabTl5WTJWR2FYSmxVbVZoWTJoRmRtVnVkQ0E5UFQwZ2RtOXBaQ0F3SUNrZ1ptOXlZMlZHYVhKbFVtVmhZMmhGZG1WdWRDQTlJR1poYkhObE8xeHVYRzRnSUhaaGNpQm1hV1ZzWkhNN1hHNGdJR2xtSUNoaGVHbHpJRDA5UFNBbmRHOXdKeWtnZTF4dUlDQWdJR1pwWld4a2N5QTlJRnRjYmlBZ0lDQWdJQ2RqYjI1MFpXNTBTR1ZwWjJoMEp5eGNiaUFnSUNBZ0lDZGpiMjUwWVdsdVpYSklaV2xuYUhRbkxGeHVJQ0FnSUNBZ0ozTmpjbTlzYkZSdmNDY3NYRzRnSUNBZ0lDQW5lU2NzWEc0Z0lDQWdJQ0FuZFhBbkxGeHVJQ0FnSUNBZ0oyUnZkMjRuSUYwN1hHNGdJSDBnWld4elpTQnBaaUFvWVhocGN5QTlQVDBnSjJ4bFpuUW5LU0I3WEc0Z0lDQWdabWxsYkdSeklEMGdXMXh1SUNBZ0lDQWdKMk52Ym5SbGJuUlhhV1IwYUNjc1hHNGdJQ0FnSUNBblkyOXVkR0ZwYm1WeVYybGtkR2duTEZ4dUlDQWdJQ0FnSjNOamNtOXNiRXhsWm5RbkxGeHVJQ0FnSUNBZ0ozZ25MRnh1SUNBZ0lDQWdKMnhsWm5RbkxGeHVJQ0FnSUNBZ0ozSnBaMmgwSnlCZE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblFTQndjbTl3WlhJZ1lYaHBjeUJ6YUc5MWJHUWdZbVVnY0hKdmRtbGtaV1FuS1R0Y2JpQWdmVnh1WEc0Z0lIQnliMk5sYzNOVFkzSnZiR3hFYVdabUpERW9hU3dnWkdsbVppd2dabWxsYkdSekxDQjFjMlZUWTNKdmJHeHBibWREYkdGemN5d2dabTl5WTJWR2FYSmxVbVZoWTJoRmRtVnVkQ2s3WEc1OU8xeHVYRzVtZFc1amRHbHZiaUJ3Y205alpYTnpVMk55YjJ4c1JHbG1aaVF4S0Z4dUlDQnBMRnh1SUNCa2FXWm1MRnh1SUNCeVpXWXNYRzRnSUhWelpWTmpjbTlzYkdsdVowTnNZWE56TEZ4dUlDQm1iM0pqWlVacGNtVlNaV0ZqYUVWMlpXNTBYRzRwSUh0Y2JpQWdkbUZ5SUdOdmJuUmxiblJJWldsbmFIUWdQU0J5WldaYk1GMDdYRzRnSUhaaGNpQmpiMjUwWVdsdVpYSklaV2xuYUhRZ1BTQnlaV1piTVYwN1hHNGdJSFpoY2lCelkzSnZiR3hVYjNBZ1BTQnlaV1piTWwwN1hHNGdJSFpoY2lCNUlEMGdjbVZtV3pOZE8xeHVJQ0IyWVhJZ2RYQWdQU0J5WldaYk5GMDdYRzRnSUhaaGNpQmtiM2R1SUQwZ2NtVm1XelZkTzF4dUlDQnBaaUFvSUhWelpWTmpjbTlzYkdsdVowTnNZWE56SUQwOVBTQjJiMmxrSURBZ0tTQjFjMlZUWTNKdmJHeHBibWREYkdGemN5QTlJSFJ5ZFdVN1hHNGdJR2xtSUNnZ1ptOXlZMlZHYVhKbFVtVmhZMmhGZG1WdWRDQTlQVDBnZG05cFpDQXdJQ2tnWm05eVkyVkdhWEpsVW1WaFkyaEZkbVZ1ZENBOUlHWmhiSE5sTzF4dVhHNGdJSFpoY2lCbGJHVnRaVzUwSUQwZ2FTNWxiR1Z0Wlc1ME8xeHVYRzRnSUM4dklISmxjMlYwSUhKbFlXTm9YRzRnSUdrdWNtVmhZMmhiZVYwZ1BTQnVkV3hzTzF4dVhHNGdJQzh2SURFZ1ptOXlJSE4xWW5CcGVHVnNJSEp2ZFc1a2FXNW5YRzRnSUdsbUlDaGxiR1Z0Wlc1MFczTmpjbTlzYkZSdmNGMGdQQ0F4S1NCN1hHNGdJQ0FnYVM1eVpXRmphRnQ1WFNBOUlDZHpkR0Z5ZENjN1hHNGdJSDFjYmx4dUlDQXZMeUF4SUdadmNpQnpkV0p3YVhobGJDQnliM1Z1WkdsdVoxeHVJQ0JwWmlBb1pXeGxiV1Z1ZEZ0elkzSnZiR3hVYjNCZElENGdhVnRqYjI1MFpXNTBTR1ZwWjJoMFhTQXRJR2xiWTI5dWRHRnBibVZ5U0dWcFoyaDBYU0F0SURFcElIdGNiaUFnSUNCcExuSmxZV05vVzNsZElEMGdKMlZ1WkNjN1hHNGdJSDFjYmx4dUlDQnBaaUFvWkdsbVppa2dlMXh1SUNBZ0lHVnNaVzFsYm5RdVpHbHpjR0YwWTJoRmRtVnVkQ2hqY21WaGRHVkZkbVZ1ZENnb1hDSndjeTF6WTNKdmJHd3RYQ0lnS3lCNUtTa3BPMXh1WEc0Z0lDQWdhV1lnS0dScFptWWdQQ0F3S1NCN1hHNGdJQ0FnSUNCbGJHVnRaVzUwTG1ScGMzQmhkR05vUlhabGJuUW9ZM0psWVhSbFJYWmxiblFvS0Z3aWNITXRjMk55YjJ4c0xWd2lJQ3NnZFhBcEtTazdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGthV1ptSUQ0Z01Da2dlMXh1SUNBZ0lDQWdaV3hsYldWdWRDNWthWE53WVhSamFFVjJaVzUwS0dOeVpXRjBaVVYyWlc1MEtDaGNJbkJ6TFhOamNtOXNiQzFjSWlBcklHUnZkMjRwS1NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIVnpaVk5qY205c2JHbHVaME5zWVhOektTQjdYRzRnSUNBZ0lDQnpaWFJUWTNKdmJHeHBibWREYkdGemMwbHVjM1JoYm5Sc2VTaHBMQ0I1S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9hUzV5WldGamFGdDVYU0FtSmlBb1pHbG1aaUI4ZkNCbWIzSmpaVVpwY21WU1pXRmphRVYyWlc1MEtTa2dlMXh1SUNBZ0lHVnNaVzFsYm5RdVpHbHpjR0YwWTJoRmRtVnVkQ2hqY21WaGRHVkZkbVZ1ZENnb1hDSndjeTFjSWlBcklIa2dLeUJjSWkxeVpXRmphQzFjSWlBcklDaHBMbkpsWVdOb1czbGRLU2twS1R0Y2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjBiMGx1ZENoNEtTQjdYRzRnSUhKbGRIVnliaUJ3WVhKelpVbHVkQ2g0TENBeE1Da2dmSHdnTUR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYVhORlpHbDBZV0pzWlNobGJDa2dlMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRzFoZEdOb1pYTW9aV3dzSUNkcGJuQjFkQ3hiWTI5dWRHVnVkR1ZrYVhSaFlteGxYU2NwSUh4OFhHNGdJQ0FnYldGMFkyaGxjeWhsYkN3Z0ozTmxiR1ZqZEN4YlkyOXVkR1Z1ZEdWa2FYUmhZbXhsWFNjcElIeDhYRzRnSUNBZ2JXRjBZMmhsY3lobGJDd2dKM1JsZUhSaGNtVmhMRnRqYjI1MFpXNTBaV1JwZEdGaWJHVmRKeWtnZkh4Y2JpQWdJQ0J0WVhSamFHVnpLR1ZzTENBblluVjBkRzl1TEZ0amIyNTBaVzUwWldScGRHRmliR1ZkSnlsY2JpQWdLVHRjYm4xY2JseHVablZ1WTNScGIyNGdiM1YwWlhKWGFXUjBhQ2hsYkdWdFpXNTBLU0I3WEc0Z0lIWmhjaUJ6ZEhsc1pYTWdQU0JuWlhRb1pXeGxiV1Z1ZENrN1hHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ2RHOUpiblFvYzNSNWJHVnpMbmRwWkhSb0tTQXJYRzRnSUNBZ2RHOUpiblFvYzNSNWJHVnpMbkJoWkdScGJtZE1aV1owS1NBclhHNGdJQ0FnZEc5SmJuUW9jM1I1YkdWekxuQmhaR1JwYm1kU2FXZG9kQ2tnSzF4dUlDQWdJSFJ2U1c1MEtITjBlV3hsY3k1aWIzSmtaWEpNWldaMFYybGtkR2dwSUN0Y2JpQWdJQ0IwYjBsdWRDaHpkSGxzWlhNdVltOXlaR1Z5VW1sbmFIUlhhV1IwYUNsY2JpQWdLVHRjYm4xY2JseHVkbUZ5SUdWdWRpQTlJSHRjYmlBZ2FYTlhaV0pMYVhRNlhHNGdJQ0FnZEhsd1pXOW1JR1J2WTNWdFpXNTBJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KbHh1SUNBZ0lDZFhaV0pyYVhSQmNIQmxZWEpoYm1ObEp5QnBiaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjM1I1YkdVc1hHNGdJSE4xY0hCdmNuUnpWRzkxWTJnNlhHNGdJQ0FnZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWmNiaUFnSUNBb0oyOXVkRzkxWTJoemRHRnlkQ2NnYVc0Z2QybHVaRzkzSUh4OFhHNGdJQ0FnSUNBb2QybHVaRzkzTGtSdlkzVnRaVzUwVkc5MVkyZ2dKaVlnWkc5amRXMWxiblFnYVc1emRHRnVZMlZ2WmlCM2FXNWtiM2N1Ukc5amRXMWxiblJVYjNWamFDa3BMRnh1SUNCemRYQndiM0owYzBsbFVHOXBiblJsY2pwY2JpQWdJQ0IwZVhCbGIyWWdibUYyYVdkaGRHOXlJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ1WVhacFoyRjBiM0l1YlhOTllYaFViM1ZqYUZCdmFXNTBjeXhjYmlBZ2FYTkRhSEp2YldVNlhHNGdJQ0FnZEhsd1pXOW1JRzVoZG1sbllYUnZjaUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVpjYmlBZ0lDQXZRMmh5YjIxbEwya3VkR1Z6ZENodVlYWnBaMkYwYjNJZ0ppWWdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQ2tzWEc1OU8xeHVYRzUyWVhJZ2RYQmtZWFJsUjJWdmJXVjBjbmtnUFNCbWRXNWpkR2x2YmlocEtTQjdYRzRnSUhaaGNpQmxiR1Z0Wlc1MElEMGdhUzVsYkdWdFpXNTBPMXh1SUNCMllYSWdjbTkxYm1SbFpGTmpjbTlzYkZSdmNDQTlJRTFoZEdndVpteHZiM0lvWld4bGJXVnVkQzV6WTNKdmJHeFViM0FwTzF4dVhHNGdJR2t1WTI5dWRHRnBibVZ5VjJsa2RHZ2dQU0JsYkdWdFpXNTBMbU5zYVdWdWRGZHBaSFJvTzF4dUlDQnBMbU52Ym5SaGFXNWxja2hsYVdkb2RDQTlJR1ZzWlcxbGJuUXVZMnhwWlc1MFNHVnBaMmgwTzF4dUlDQnBMbU52Ym5SbGJuUlhhV1IwYUNBOUlHVnNaVzFsYm5RdWMyTnliMnhzVjJsa2RHZzdYRzRnSUdrdVkyOXVkR1Z1ZEVobGFXZG9kQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNTR1ZwWjJoME8xeHVYRzRnSUdsbUlDZ2haV3hsYldWdWRDNWpiMjUwWVdsdWN5aHBMbk5qY205c2JHSmhjbGhTWVdsc0tTa2dlMXh1SUNBZ0lDOHZJR05zWldGdUlIVndJR0Z1WkNCaGNIQmxibVJjYmlBZ0lDQnhkV1Z5ZVVOb2FXeGtjbVZ1S0dWc1pXMWxiblFzSUdOc2N5NWxiR1Z0Wlc1MExuSmhhV3dvSjNnbktTa3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9aV3dwSUhzZ2NtVjBkWEp1SUhKbGJXOTJaU2hsYkNrN0lIMWNiaUFnSUNBcE8xeHVJQ0FnSUdWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb2FTNXpZM0p2Ykd4aVlYSllVbUZwYkNrN1hHNGdJSDFjYmlBZ2FXWWdLQ0ZsYkdWdFpXNTBMbU52Ym5SaGFXNXpLR2t1YzJOeWIyeHNZbUZ5V1ZKaGFXd3BLU0I3WEc0Z0lDQWdMeThnWTJ4bFlXNGdkWEFnWVc1a0lHRndjR1Z1WkZ4dUlDQWdJSEYxWlhKNVEyaHBiR1J5Wlc0b1pXeGxiV1Z1ZEN3Z1kyeHpMbVZzWlcxbGJuUXVjbUZwYkNnbmVTY3BLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hsYkNrZ2V5QnlaWFIxY200Z2NtVnRiM1psS0dWc0tUc2dmVnh1SUNBZ0lDazdYRzRnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaHBMbk5qY205c2JHSmhjbGxTWVdsc0tUdGNiaUFnZlZ4dVhHNGdJR2xtSUNoY2JpQWdJQ0FoYVM1elpYUjBhVzVuY3k1emRYQndjbVZ6YzFOamNtOXNiRmdnSmlaY2JpQWdJQ0JwTG1OdmJuUmhhVzVsY2xkcFpIUm9JQ3NnYVM1elpYUjBhVzVuY3k1elkzSnZiR3hZVFdGeVoybHVUMlptYzJWMElEd2dhUzVqYjI1MFpXNTBWMmxrZEdoY2JpQWdLU0I3WEc0Z0lDQWdhUzV6WTNKdmJHeGlZWEpZUVdOMGFYWmxJRDBnZEhKMVpUdGNiaUFnSUNCcExuSmhhV3hZVjJsa2RHZ2dQU0JwTG1OdmJuUmhhVzVsY2xkcFpIUm9JQzBnYVM1eVlXbHNXRTFoY21kcGJsZHBaSFJvTzF4dUlDQWdJR2t1Y21GcGJGaFNZWFJwYnlBOUlHa3VZMjl1ZEdGcGJtVnlWMmxrZEdnZ0x5QnBMbkpoYVd4WVYybGtkR2c3WEc0Z0lDQWdhUzV6WTNKdmJHeGlZWEpZVjJsa2RHZ2dQU0JuWlhSVWFIVnRZbE5wZW1Vb1hHNGdJQ0FnSUNCcExGeHVJQ0FnSUNBZ2RHOUpiblFvYVM1eVlXbHNXRmRwWkhSb0lDb2dhUzVqYjI1MFlXbHVaWEpYYVdSMGFDQXZJR2t1WTI5dWRHVnVkRmRwWkhSb0tWeHVJQ0FnSUNrN1hHNGdJQ0FnYVM1elkzSnZiR3hpWVhKWVRHVm1kQ0E5SUhSdlNXNTBLRnh1SUNBZ0lDQWdLR2t1Ym1WbllYUnBkbVZUWTNKdmJHeEJaR3AxYzNSdFpXNTBJQ3NnWld4bGJXVnVkQzV6WTNKdmJHeE1aV1owS1NBcVhHNGdJQ0FnSUNBZ0lDaHBMbkpoYVd4WVYybGtkR2dnTFNCcExuTmpjbTlzYkdKaGNsaFhhV1IwYUNrZ0wxeHVJQ0FnSUNBZ0lDQW9hUzVqYjI1MFpXNTBWMmxrZEdnZ0xTQnBMbU52Ym5SaGFXNWxjbGRwWkhSb0tWeHVJQ0FnSUNrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2FTNXpZM0p2Ykd4aVlYSllRV04wYVhabElEMGdabUZzYzJVN1hHNGdJSDFjYmx4dUlDQnBaaUFvWEc0Z0lDQWdJV2t1YzJWMGRHbHVaM011YzNWd2NISmxjM05UWTNKdmJHeFpJQ1ltWEc0Z0lDQWdhUzVqYjI1MFlXbHVaWEpJWldsbmFIUWdLeUJwTG5ObGRIUnBibWR6TG5OamNtOXNiRmxOWVhKbmFXNVBabVp6WlhRZ1BDQnBMbU52Ym5SbGJuUklaV2xuYUhSY2JpQWdLU0I3WEc0Z0lDQWdhUzV6WTNKdmJHeGlZWEpaUVdOMGFYWmxJRDBnZEhKMVpUdGNiaUFnSUNCcExuSmhhV3haU0dWcFoyaDBJRDBnYVM1amIyNTBZV2x1WlhKSVpXbG5hSFFnTFNCcExuSmhhV3haVFdGeVoybHVTR1ZwWjJoME8xeHVJQ0FnSUdrdWNtRnBiRmxTWVhScGJ5QTlJR2t1WTI5dWRHRnBibVZ5U0dWcFoyaDBJQzhnYVM1eVlXbHNXVWhsYVdkb2REdGNiaUFnSUNCcExuTmpjbTlzYkdKaGNsbElaV2xuYUhRZ1BTQm5aWFJVYUhWdFlsTnBlbVVvWEc0Z0lDQWdJQ0JwTEZ4dUlDQWdJQ0FnZEc5SmJuUW9hUzV5WVdsc1dVaGxhV2RvZENBcUlHa3VZMjl1ZEdGcGJtVnlTR1ZwWjJoMElDOGdhUzVqYjI1MFpXNTBTR1ZwWjJoMEtWeHVJQ0FnSUNrN1hHNGdJQ0FnYVM1elkzSnZiR3hpWVhKWlZHOXdJRDBnZEc5SmJuUW9YRzRnSUNBZ0lDQnliM1Z1WkdWa1UyTnliMnhzVkc5d0lDcGNiaUFnSUNBZ0lDQWdLR2t1Y21GcGJGbElaV2xuYUhRZ0xTQnBMbk5qY205c2JHSmhjbGxJWldsbmFIUXBJQzljYmlBZ0lDQWdJQ0FnS0drdVkyOXVkR1Z1ZEVobGFXZG9kQ0F0SUdrdVkyOXVkR0ZwYm1WeVNHVnBaMmgwS1Z4dUlDQWdJQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYVM1elkzSnZiR3hpWVhKWlFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lIMWNibHh1SUNCcFppQW9hUzV6WTNKdmJHeGlZWEpZVEdWbWRDQStQU0JwTG5KaGFXeFlWMmxrZEdnZ0xTQnBMbk5qY205c2JHSmhjbGhYYVdSMGFDa2dlMXh1SUNBZ0lHa3VjMk55YjJ4c1ltRnlXRXhsWm5RZ1BTQnBMbkpoYVd4WVYybGtkR2dnTFNCcExuTmpjbTlzYkdKaGNsaFhhV1IwYUR0Y2JpQWdmVnh1SUNCcFppQW9hUzV6WTNKdmJHeGlZWEpaVkc5d0lENDlJR2t1Y21GcGJGbElaV2xuYUhRZ0xTQnBMbk5qY205c2JHSmhjbGxJWldsbmFIUXBJSHRjYmlBZ0lDQnBMbk5qY205c2JHSmhjbGxVYjNBZ1BTQnBMbkpoYVd4WlNHVnBaMmgwSUMwZ2FTNXpZM0p2Ykd4aVlYSlpTR1ZwWjJoME8xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbFEzTnpLR1ZzWlcxbGJuUXNJR2twTzF4dVhHNGdJR2xtSUNocExuTmpjbTlzYkdKaGNsaEJZM1JwZG1VcElIdGNiaUFnSUNCbGJHVnRaVzUwTG1Oc1lYTnpUR2x6ZEM1aFpHUW9ZMnh6TG5OMFlYUmxMbUZqZEdsMlpTZ25lQ2NwS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCbGJHVnRaVzUwTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvWTJ4ekxuTjBZWFJsTG1GamRHbDJaU2duZUNjcEtUdGNiaUFnSUNCcExuTmpjbTlzYkdKaGNsaFhhV1IwYUNBOUlEQTdYRzRnSUNBZ2FTNXpZM0p2Ykd4aVlYSllUR1ZtZENBOUlEQTdYRzRnSUNBZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElEMGdNRHRjYmlBZ2ZWeHVJQ0JwWmlBb2FTNXpZM0p2Ykd4aVlYSlpRV04wYVhabEtTQjdYRzRnSUNBZ1pXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdVlXUmtLR05zY3k1emRHRjBaUzVoWTNScGRtVW9KM2tuS1NrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1pXeGxiV1Z1ZEM1amJHRnpjMHhwYzNRdWNtVnRiM1psS0dOc2N5NXpkR0YwWlM1aFkzUnBkbVVvSjNrbktTazdYRzRnSUNBZ2FTNXpZM0p2Ykd4aVlYSlpTR1ZwWjJoMElEMGdNRHRjYmlBZ0lDQnBMbk5qY205c2JHSmhjbGxVYjNBZ1BTQXdPMXh1SUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lEMGdNRHRjYmlBZ2ZWeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z1oyVjBWR2gxYldKVGFYcGxLR2tzSUhSb2RXMWlVMmw2WlNrZ2UxeHVJQ0JwWmlBb2FTNXpaWFIwYVc1bmN5NXRhVzVUWTNKdmJHeGlZWEpNWlc1bmRHZ3BJSHRjYmlBZ0lDQjBhSFZ0WWxOcGVtVWdQU0JOWVhSb0xtMWhlQ2gwYUhWdFlsTnBlbVVzSUdrdWMyVjBkR2x1WjNNdWJXbHVVMk55YjJ4c1ltRnlUR1Z1WjNSb0tUdGNiaUFnZlZ4dUlDQnBaaUFvYVM1elpYUjBhVzVuY3k1dFlYaFRZM0p2Ykd4aVlYSk1aVzVuZEdncElIdGNiaUFnSUNCMGFIVnRZbE5wZW1VZ1BTQk5ZWFJvTG0xcGJpaDBhSFZ0WWxOcGVtVXNJR2t1YzJWMGRHbHVaM011YldGNFUyTnliMnhzWW1GeVRHVnVaM1JvS1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnZEdoMWJXSlRhWHBsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUIxY0dSaGRHVkRjM01vWld4bGJXVnVkQ3dnYVNrZ2UxeHVJQ0IyWVhJZ2VGSmhhV3hQWm1aelpYUWdQU0I3SUhkcFpIUm9PaUJwTG5KaGFXeFlWMmxrZEdnZ2ZUdGNiaUFnZG1GeUlISnZkVzVrWldSVFkzSnZiR3hVYjNBZ1BTQk5ZWFJvTG1ac2IyOXlLR1ZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdLVHRjYmx4dUlDQnBaaUFvYVM1cGMxSjBiQ2tnZTF4dUlDQWdJSGhTWVdsc1QyWm1jMlYwTG14bFpuUWdQVnh1SUNBZ0lDQWdhUzV1WldkaGRHbDJaVk5qY205c2JFRmthblZ6ZEcxbGJuUWdLMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBJQ3RjYmlBZ0lDQWdJR2t1WTI5dWRHRnBibVZ5VjJsa2RHZ2dMVnh1SUNBZ0lDQWdhUzVqYjI1MFpXNTBWMmxrZEdnN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2VGSmhhV3hQWm1aelpYUXViR1ZtZENBOUlHVnNaVzFsYm5RdWMyTnliMnhzVEdWbWREdGNiaUFnZlZ4dUlDQnBaaUFvYVM1cGMxTmpjbTlzYkdKaGNsaFZjMmx1WjBKdmRIUnZiU2tnZTF4dUlDQWdJSGhTWVdsc1QyWm1jMlYwTG1KdmRIUnZiU0E5SUdrdWMyTnliMnhzWW1GeVdFSnZkSFJ2YlNBdElISnZkVzVrWldSVFkzSnZiR3hVYjNBN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2VGSmhhV3hQWm1aelpYUXVkRzl3SUQwZ2FTNXpZM0p2Ykd4aVlYSllWRzl3SUNzZ2NtOTFibVJsWkZOamNtOXNiRlJ2Y0R0Y2JpQWdmVnh1SUNCelpYUW9hUzV6WTNKdmJHeGlZWEpZVW1GcGJDd2dlRkpoYVd4UFptWnpaWFFwTzF4dVhHNGdJSFpoY2lCNVVtRnBiRTltWm5ObGRDQTlJSHNnZEc5d09pQnliM1Z1WkdWa1UyTnliMnhzVkc5d0xDQm9aV2xuYUhRNklHa3VjbUZwYkZsSVpXbG5hSFFnZlR0Y2JpQWdhV1lnS0drdWFYTlRZM0p2Ykd4aVlYSlpWWE5wYm1kU2FXZG9kQ2tnZTF4dUlDQWdJR2xtSUNocExtbHpVblJzS1NCN1hHNGdJQ0FnSUNCNVVtRnBiRTltWm5ObGRDNXlhV2RvZENBOVhHNGdJQ0FnSUNBZ0lHa3VZMjl1ZEdWdWRGZHBaSFJvSUMxY2JpQWdJQ0FnSUNBZ0tHa3VibVZuWVhScGRtVlRZM0p2Ykd4QlpHcDFjM1J0Wlc1MElDc2daV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBLU0F0WEc0Z0lDQWdJQ0FnSUdrdWMyTnliMnhzWW1GeVdWSnBaMmgwSUMxY2JpQWdJQ0FnSUNBZ2FTNXpZM0p2Ykd4aVlYSlpUM1YwWlhKWGFXUjBhRHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2VWSmhhV3hQWm1aelpYUXVjbWxuYUhRZ1BTQnBMbk5qY205c2JHSmhjbGxTYVdkb2RDQXRJR1ZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kRHRjYmlBZ0lDQjlYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdhV1lnS0drdWFYTlNkR3dwSUh0Y2JpQWdJQ0FnSUhsU1lXbHNUMlptYzJWMExteGxablFnUFZ4dUlDQWdJQ0FnSUNCcExtNWxaMkYwYVhabFUyTnliMnhzUVdScWRYTjBiV1Z1ZENBclhHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVEdWbWRDQXJYRzRnSUNBZ0lDQWdJR2t1WTI5dWRHRnBibVZ5VjJsa2RHZ2dLaUF5SUMxY2JpQWdJQ0FnSUNBZ2FTNWpiMjUwWlc1MFYybGtkR2dnTFZ4dUlDQWdJQ0FnSUNCcExuTmpjbTlzYkdKaGNsbE1aV1owSUMxY2JpQWdJQ0FnSUNBZ2FTNXpZM0p2Ykd4aVlYSlpUM1YwWlhKWGFXUjBhRHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2VWSmhhV3hQWm1aelpYUXViR1ZtZENBOUlHa3VjMk55YjJ4c1ltRnlXVXhsWm5RZ0t5QmxiR1Z0Wlc1MExuTmpjbTlzYkV4bFpuUTdYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lITmxkQ2hwTG5OamNtOXNiR0poY2xsU1lXbHNMQ0I1VW1GcGJFOW1abk5sZENrN1hHNWNiaUFnYzJWMEtHa3VjMk55YjJ4c1ltRnlXQ3dnZTF4dUlDQWdJR3hsWm5RNklHa3VjMk55YjJ4c1ltRnlXRXhsWm5Rc1hHNGdJQ0FnZDJsa2RHZzZJR2t1YzJOeWIyeHNZbUZ5V0ZkcFpIUm9JQzBnYVM1eVlXbHNRbTl5WkdWeVdGZHBaSFJvTEZ4dUlDQjlLVHRjYmlBZ2MyVjBLR2t1YzJOeWIyeHNZbUZ5V1N3Z2UxeHVJQ0FnSUhSdmNEb2dhUzV6WTNKdmJHeGlZWEpaVkc5d0xGeHVJQ0FnSUdobGFXZG9kRG9nYVM1elkzSnZiR3hpWVhKWlNHVnBaMmgwSUMwZ2FTNXlZV2xzUW05eVpHVnlXVmRwWkhSb0xGeHVJQ0I5S1R0Y2JuMWNibHh1ZG1GeUlHTnNhV05yVW1GcGJDQTlJR1oxYm1OMGFXOXVLR2twSUh0Y2JpQWdhUzVsZG1WdWRDNWlhVzVrS0drdWMyTnliMnhzWW1GeVdTd2dKMjF2ZFhObFpHOTNiaWNzSUdaMWJtTjBhVzl1SUNobEtTQjdJSEpsZEhWeWJpQmxMbk4wYjNCUWNtOXdZV2RoZEdsdmJpZ3BPeUI5S1R0Y2JpQWdhUzVsZG1WdWRDNWlhVzVrS0drdWMyTnliMnhzWW1GeVdWSmhhV3dzSUNkdGIzVnpaV1J2ZDI0bkxDQm1kVzVqZEdsdmJpQW9aU2tnZTF4dUlDQWdJSFpoY2lCd2IzTnBkR2x2YmxSdmNDQTlYRzRnSUNBZ0lDQmxMbkJoWjJWWklDMWNiaUFnSUNBZ0lIZHBibVJ2ZHk1d1lXZGxXVTltWm5ObGRDQXRYRzRnSUNBZ0lDQnBMbk5qY205c2JHSmhjbGxTWVdsc0xtZGxkRUp2ZFc1a2FXNW5RMnhwWlc1MFVtVmpkQ2dwTG5SdmNEdGNiaUFnSUNCMllYSWdaR2x5WldOMGFXOXVJRDBnY0c5emFYUnBiMjVVYjNBZ1BpQnBMbk5qY205c2JHSmhjbGxVYjNBZ1B5QXhJRG9nTFRFN1hHNWNiaUFnSUNCcExtVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lDczlJR1JwY21WamRHbHZiaUFxSUdrdVkyOXVkR0ZwYm1WeVNHVnBaMmgwTzF4dUlDQWdJSFZ3WkdGMFpVZGxiMjFsZEhKNUtHa3BPMXh1WEc0Z0lDQWdaUzV6ZEc5d1VISnZjR0ZuWVhScGIyNG9LVHRjYmlBZ2ZTazdYRzVjYmlBZ2FTNWxkbVZ1ZEM1aWFXNWtLR2t1YzJOeWIyeHNZbUZ5V0N3Z0oyMXZkWE5sWkc5M2JpY3NJR1oxYm1OMGFXOXVJQ2hsS1NCN0lISmxkSFZ5YmlCbExuTjBiM0JRY205d1lXZGhkR2x2YmlncE95QjlLVHRjYmlBZ2FTNWxkbVZ1ZEM1aWFXNWtLR2t1YzJOeWIyeHNZbUZ5V0ZKaGFXd3NJQ2R0YjNWelpXUnZkMjRuTENCbWRXNWpkR2x2YmlBb1pTa2dlMXh1SUNBZ0lIWmhjaUJ3YjNOcGRHbHZia3hsWm5RZ1BWeHVJQ0FnSUNBZ1pTNXdZV2RsV0NBdFhHNGdJQ0FnSUNCM2FXNWtiM2N1Y0dGblpWaFBabVp6WlhRZ0xWeHVJQ0FnSUNBZ2FTNXpZM0p2Ykd4aVlYSllVbUZwYkM1blpYUkNiM1Z1WkdsdVowTnNhV1Z1ZEZKbFkzUW9LUzVzWldaME8xeHVJQ0FnSUhaaGNpQmthWEpsWTNScGIyNGdQU0J3YjNOcGRHbHZia3hsWm5RZ1BpQnBMbk5qY205c2JHSmhjbGhNWldaMElEOGdNU0E2SUMweE8xeHVYRzRnSUNBZ2FTNWxiR1Z0Wlc1MExuTmpjbTlzYkV4bFpuUWdLejBnWkdseVpXTjBhVzl1SUNvZ2FTNWpiMjUwWVdsdVpYSlhhV1IwYUR0Y2JpQWdJQ0IxY0dSaGRHVkhaVzl0WlhSeWVTaHBLVHRjYmx4dUlDQWdJR1V1YzNSdmNGQnliM0JoWjJGMGFXOXVLQ2s3WEc0Z0lIMHBPMXh1ZlR0Y2JseHVkbUZ5SUdSeVlXZFVhSFZ0WWlBOUlHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ1ltbHVaRTF2ZFhObFUyTnliMnhzU0dGdVpHeGxjaWhwTENCYlhHNGdJQ0FnSjJOdmJuUmhhVzVsY2xkcFpIUm9KeXhjYmlBZ0lDQW5ZMjl1ZEdWdWRGZHBaSFJvSnl4Y2JpQWdJQ0FuY0dGblpWZ25MRnh1SUNBZ0lDZHlZV2xzV0ZkcFpIUm9KeXhjYmlBZ0lDQW5jMk55YjJ4c1ltRnlXQ2NzWEc0Z0lDQWdKM05qY205c2JHSmhjbGhYYVdSMGFDY3NYRzRnSUNBZ0ozTmpjbTlzYkV4bFpuUW5MRnh1SUNBZ0lDZDRKeXhjYmlBZ0lDQW5jMk55YjJ4c1ltRnlXRkpoYVd3bklGMHBPMXh1SUNCaWFXNWtUVzkxYzJWVFkzSnZiR3hJWVc1a2JHVnlLR2tzSUZ0Y2JpQWdJQ0FuWTI5dWRHRnBibVZ5U0dWcFoyaDBKeXhjYmlBZ0lDQW5ZMjl1ZEdWdWRFaGxhV2RvZENjc1hHNGdJQ0FnSjNCaFoyVlpKeXhjYmlBZ0lDQW5jbUZwYkZsSVpXbG5hSFFuTEZ4dUlDQWdJQ2R6WTNKdmJHeGlZWEpaSnl4Y2JpQWdJQ0FuYzJOeWIyeHNZbUZ5V1VobGFXZG9kQ2NzWEc0Z0lDQWdKM05qY205c2JGUnZjQ2NzWEc0Z0lDQWdKM2tuTEZ4dUlDQWdJQ2R6WTNKdmJHeGlZWEpaVW1GcGJDY2dYU2s3WEc1OU8xeHVYRzVtZFc1amRHbHZiaUJpYVc1a1RXOTFjMlZUWTNKdmJHeElZVzVrYkdWeUtGeHVJQ0JwTEZ4dUlDQnlaV1pjYmlrZ2UxeHVJQ0IyWVhJZ1kyOXVkR0ZwYm1WeVNHVnBaMmgwSUQwZ2NtVm1XekJkTzF4dUlDQjJZWElnWTI5dWRHVnVkRWhsYVdkb2RDQTlJSEpsWmxzeFhUdGNiaUFnZG1GeUlIQmhaMlZaSUQwZ2NtVm1XekpkTzF4dUlDQjJZWElnY21GcGJGbElaV2xuYUhRZ1BTQnlaV1piTTEwN1hHNGdJSFpoY2lCelkzSnZiR3hpWVhKWklEMGdjbVZtV3pSZE8xeHVJQ0IyWVhJZ2MyTnliMnhzWW1GeVdVaGxhV2RvZENBOUlISmxabHMxWFR0Y2JpQWdkbUZ5SUhOamNtOXNiRlJ2Y0NBOUlISmxabHMyWFR0Y2JpQWdkbUZ5SUhrZ1BTQnlaV1piTjEwN1hHNGdJSFpoY2lCelkzSnZiR3hpWVhKWlVtRnBiQ0E5SUhKbFpsczRYVHRjYmx4dUlDQjJZWElnWld4bGJXVnVkQ0E5SUdrdVpXeGxiV1Z1ZER0Y2JseHVJQ0IyWVhJZ2MzUmhjblJwYm1kVFkzSnZiR3hVYjNBZ1BTQnVkV3hzTzF4dUlDQjJZWElnYzNSaGNuUnBibWROYjNWelpWQmhaMlZaSUQwZ2JuVnNiRHRjYmlBZ2RtRnlJSE5qY205c2JFSjVJRDBnYm5Wc2JEdGNibHh1SUNCbWRXNWpkR2x2YmlCdGIzVnpaVTF2ZG1WSVlXNWtiR1Z5S0dVcElIdGNiaUFnSUNCbGJHVnRaVzUwVzNOamNtOXNiRlJ2Y0YwZ1BWeHVJQ0FnSUNBZ2MzUmhjblJwYm1kVFkzSnZiR3hVYjNBZ0t5QnpZM0p2Ykd4Q2VTQXFJQ2hsVzNCaFoyVlpYU0F0SUhOMFlYSjBhVzVuVFc5MWMyVlFZV2RsV1NrN1hHNGdJQ0FnWVdSa1UyTnliMnhzYVc1blEyeGhjM01vYVN3Z2VTazdYRzRnSUNBZ2RYQmtZWFJsUjJWdmJXVjBjbmtvYVNrN1hHNWNiaUFnSUNCbExuTjBiM0JRY205d1lXZGhkR2x2YmlncE8xeHVJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHMXZkWE5sVlhCSVlXNWtiR1Z5S0NrZ2UxeHVJQ0FnSUhKbGJXOTJaVk5qY205c2JHbHVaME5zWVhOektHa3NJSGtwTzF4dUlDQWdJR2xiYzJOeWIyeHNZbUZ5V1ZKaGFXeGRMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9ZMnh6TG5OMFlYUmxMbU5zYVdOcmFXNW5LVHRjYmlBZ0lDQnBMbVYyWlc1MExuVnVZbWx1WkNocExtOTNibVZ5Ukc5amRXMWxiblFzSUNkdGIzVnpaVzF2ZG1VbkxDQnRiM1Z6WlUxdmRtVklZVzVrYkdWeUtUdGNiaUFnZlZ4dVhHNGdJR2t1WlhabGJuUXVZbWx1WkNocFczTmpjbTlzYkdKaGNsbGRMQ0FuYlc5MWMyVmtiM2R1Snl3Z1puVnVZM1JwYjI0Z0tHVXBJSHRjYmlBZ0lDQnpkR0Z5ZEdsdVoxTmpjbTlzYkZSdmNDQTlJR1ZzWlcxbGJuUmJjMk55YjJ4c1ZHOXdYVHRjYmlBZ0lDQnpkR0Z5ZEdsdVowMXZkWE5sVUdGblpWa2dQU0JsVzNCaFoyVlpYVHRjYmlBZ0lDQnpZM0p2Ykd4Q2VTQTlYRzRnSUNBZ0lDQW9hVnRqYjI1MFpXNTBTR1ZwWjJoMFhTQXRJR2xiWTI5dWRHRnBibVZ5U0dWcFoyaDBYU2tnTDF4dUlDQWdJQ0FnS0dsYmNtRnBiRmxJWldsbmFIUmRJQzBnYVZ0elkzSnZiR3hpWVhKWlNHVnBaMmgwWFNrN1hHNWNiaUFnSUNCcExtVjJaVzUwTG1KcGJtUW9hUzV2ZDI1bGNrUnZZM1Z0Wlc1MExDQW5iVzkxYzJWdGIzWmxKeXdnYlc5MWMyVk5iM1psU0dGdVpHeGxjaWs3WEc0Z0lDQWdhUzVsZG1WdWRDNXZibU5sS0drdWIzZHVaWEpFYjJOMWJXVnVkQ3dnSjIxdmRYTmxkWEFuTENCdGIzVnpaVlZ3U0dGdVpHeGxjaWs3WEc1Y2JpQWdJQ0JwVzNOamNtOXNiR0poY2xsU1lXbHNYUzVqYkdGemMweHBjM1F1WVdSa0tHTnNjeTV6ZEdGMFpTNWpiR2xqYTJsdVp5azdYRzVjYmlBZ0lDQmxMbk4wYjNCUWNtOXdZV2RoZEdsdmJpZ3BPMXh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnZlNrN1hHNTlYRzVjYm5aaGNpQnJaWGxpYjJGeVpDQTlJR1oxYm1OMGFXOXVLR2twSUh0Y2JpQWdkbUZ5SUdWc1pXMWxiblFnUFNCcExtVnNaVzFsYm5RN1hHNWNiaUFnZG1GeUlHVnNaVzFsYm5SSWIzWmxjbVZrSUQwZ1puVnVZM1JwYjI0Z0tDa2dleUJ5WlhSMWNtNGdiV0YwWTJobGN5aGxiR1Z0Wlc1MExDQW5PbWh2ZG1WeUp5azdJSDA3WEc0Z0lIWmhjaUJ6WTNKdmJHeGlZWEpHYjJOMWMyVmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z2JXRjBZMmhsY3locExuTmpjbTlzYkdKaGNsZ3NJQ2M2Wm05amRYTW5LU0I4ZkNCdFlYUmphR1Z6S0drdWMyTnliMnhzWW1GeVdTd2dKenBtYjJOMWN5Y3BPeUI5TzF4dVhHNGdJR1oxYm1OMGFXOXVJSE5vYjNWc1pGQnlaWFpsYm5SRVpXWmhkV3gwS0dSbGJIUmhXQ3dnWkdWc2RHRlpLU0I3WEc0Z0lDQWdkbUZ5SUhOamNtOXNiRlJ2Y0NBOUlFMWhkR2d1Wm14dmIzSW9aV3hsYldWdWRDNXpZM0p2Ykd4VWIzQXBPMXh1SUNBZ0lHbG1JQ2hrWld4MFlWZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lHbG1JQ2doYVM1elkzSnZiR3hpWVhKWlFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNoY2JpQWdJQ0FnSUNBZ0tITmpjbTlzYkZSdmNDQTlQVDBnTUNBbUppQmtaV3gwWVZrZ1BpQXdLU0I4ZkZ4dUlDQWdJQ0FnSUNBb2MyTnliMnhzVkc5d0lENDlJR2t1WTI5dWRHVnVkRWhsYVdkb2RDQXRJR2t1WTI5dWRHRnBibVZ5U0dWcFoyaDBJQ1ltSUdSbGJIUmhXU0E4SURBcFhHNGdJQ0FnSUNBcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDRnBMbk5sZEhScGJtZHpMbmRvWldWc1VISnZjR0ZuWVhScGIyNDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJSE5qY205c2JFeGxablFnUFNCbGJHVnRaVzUwTG5OamNtOXNiRXhsWm5RN1hHNGdJQ0FnYVdZZ0tHUmxiSFJoV1NBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDRnBMbk5qY205c2JHSmhjbGhCWTNScGRtVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLRnh1SUNBZ0lDQWdJQ0FvYzJOeWIyeHNUR1ZtZENBOVBUMGdNQ0FtSmlCa1pXeDBZVmdnUENBd0tTQjhmRnh1SUNBZ0lDQWdJQ0FvYzJOeWIyeHNUR1ZtZENBK1BTQnBMbU52Ym5SbGJuUlhhV1IwYUNBdElHa3VZMjl1ZEdGcGJtVnlWMmxrZEdnZ0ppWWdaR1ZzZEdGWUlENGdNQ2xjYmlBZ0lDQWdJQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSVdrdWMyVjBkR2x1WjNNdWQyaGxaV3hRY205d1lXZGhkR2x2Ymp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lIMWNibHh1SUNCcExtVjJaVzUwTG1KcGJtUW9hUzV2ZDI1bGNrUnZZM1Z0Wlc1MExDQW5hMlY1Wkc5M2JpY3NJR1oxYm1OMGFXOXVJQ2hsS1NCN1hHNGdJQ0FnYVdZZ0tGeHVJQ0FnSUNBZ0tHVXVhWE5FWldaaGRXeDBVSEpsZG1WdWRHVmtJQ1ltSUdVdWFYTkVaV1poZFd4MFVISmxkbVZ1ZEdWa0tDa3BJSHg4WEc0Z0lDQWdJQ0JsTG1SbFptRjFiSFJRY21WMlpXNTBaV1JjYmlBZ0lDQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9JV1ZzWlcxbGJuUkliM1psY21Wa0tDa2dKaVlnSVhOamNtOXNiR0poY2tadlkzVnpaV1FvS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmx4dUlDQWdJSFpoY2lCaFkzUnBkbVZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WVdOMGFYWmxSV3hsYldWdWRGeHVJQ0FnSUNBZ1B5QmtiMk4xYldWdWRDNWhZM1JwZG1WRmJHVnRaVzUwWEc0Z0lDQWdJQ0E2SUdrdWIzZHVaWEpFYjJOMWJXVnVkQzVoWTNScGRtVkZiR1Z0Wlc1ME8xeHVJQ0FnSUdsbUlDaGhZM1JwZG1WRmJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNCcFppQW9ZV04wYVhabFJXeGxiV1Z1ZEM1MFlXZE9ZVzFsSUQwOVBTQW5TVVpTUVUxRkp5a2dlMXh1SUNBZ0lDQWdJQ0JoWTNScGRtVkZiR1Z0Wlc1MElEMGdZV04wYVhabFJXeGxiV1Z1ZEM1amIyNTBaVzUwUkc5amRXMWxiblF1WVdOMGFYWmxSV3hsYldWdWREdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDOHZJR2R2SUdSbFpYQmxjaUJwWmlCbGJHVnRaVzUwSUdseklHRWdkMlZpWTI5dGNHOXVaVzUwWEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2hoWTNScGRtVkZiR1Z0Wlc1MExuTm9ZV1J2ZDFKdmIzUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCaFkzUnBkbVZGYkdWdFpXNTBJRDBnWVdOMGFYWmxSV3hsYldWdWRDNXphR0ZrYjNkU2IyOTBMbUZqZEdsMlpVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHbG1JQ2hwYzBWa2FYUmhZbXhsS0dGamRHbDJaVVZzWlcxbGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnWkdWc2RHRllJRDBnTUR0Y2JpQWdJQ0IyWVhJZ1pHVnNkR0ZaSUQwZ01EdGNibHh1SUNBZ0lITjNhWFJqYUNBb1pTNTNhR2xqYUNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0F6TnpvZ0x5OGdiR1ZtZEZ4dUlDQWdJQ0FnSUNCcFppQW9aUzV0WlhSaFMyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pHVnNkR0ZZSUQwZ0xXa3VZMjl1ZEdWdWRGZHBaSFJvTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHVXVZV3gwUzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdWc2RHRllJRDBnTFdrdVkyOXVkR0ZwYm1WeVYybGtkR2c3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pHVnNkR0ZZSUQwZ0xUTXdPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBek9Eb2dMeThnZFhCY2JpQWdJQ0FnSUNBZ2FXWWdLR1V1YldWMFlVdGxlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHUmxiSFJoV1NBOUlHa3VZMjl1ZEdWdWRFaGxhV2RvZER0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxMbUZzZEV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdSbGJIUmhXU0E5SUdrdVkyOXVkR0ZwYm1WeVNHVnBaMmgwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lHUmxiSFJoV1NBOUlETXdPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBek9Ub2dMeThnY21sbmFIUmNiaUFnSUNBZ0lDQWdhV1lnS0dVdWJXVjBZVXRsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1JsYkhSaFdDQTlJR2t1WTI5dWRHVnVkRmRwWkhSb08xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR1V1WVd4MFMyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pHVnNkR0ZZSUQwZ2FTNWpiMjUwWVdsdVpYSlhhV1IwYUR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQmtaV3gwWVZnZ1BTQXpNRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJR05oYzJVZ05EQTZJQzh2SUdSdmQyNWNiaUFnSUNBZ0lDQWdhV1lnS0dVdWJXVjBZVXRsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1JsYkhSaFdTQTlJQzFwTG1OdmJuUmxiblJJWldsbmFIUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWlM1aGJIUkxaWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmtaV3gwWVZrZ1BTQXRhUzVqYjI1MFlXbHVaWEpJWldsbmFIUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdWc2RHRlpJRDBnTFRNd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ1kyRnpaU0F6TWpvZ0x5OGdjM0JoWTJVZ1ltRnlYRzRnSUNBZ0lDQWdJR2xtSUNobExuTm9hV1owUzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdWc2RHRlpJRDBnYVM1amIyNTBZV2x1WlhKSVpXbG5hSFE3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pHVnNkR0ZaSUQwZ0xXa3VZMjl1ZEdGcGJtVnlTR1ZwWjJoME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ1kyRnpaU0F6TXpvZ0x5OGdjR0ZuWlNCMWNGeHVJQ0FnSUNBZ0lDQmtaV3gwWVZrZ1BTQnBMbU52Ym5SaGFXNWxja2hsYVdkb2REdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCallYTmxJRE0wT2lBdkx5QndZV2RsSUdSdmQyNWNiaUFnSUNBZ0lDQWdaR1ZzZEdGWklEMGdMV2t1WTI5dWRHRnBibVZ5U0dWcFoyaDBPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lHTmhjMlVnTXpZNklDOHZJR2h2YldWY2JpQWdJQ0FnSUNBZ1pHVnNkR0ZaSUQwZ2FTNWpiMjUwWlc1MFNHVnBaMmgwTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJR05oYzJVZ016VTZJQzh2SUdWdVpGeHVJQ0FnSUNBZ0lDQmtaV3gwWVZrZ1BTQXRhUzVqYjI1MFpXNTBTR1ZwWjJoME8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYVM1elpYUjBhVzVuY3k1emRYQndjbVZ6YzFOamNtOXNiRmdnSmlZZ1pHVnNkR0ZZSUNFOVBTQXdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHBMbk5sZEhScGJtZHpMbk4xY0hCeVpYTnpVMk55YjJ4c1dTQW1KaUJrWld4MFlWa2dJVDA5SURBcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JsYkdWdFpXNTBMbk5qY205c2JGUnZjQ0F0UFNCa1pXeDBZVms3WEc0Z0lDQWdaV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBJQ3M5SUdSbGJIUmhXRHRjYmlBZ0lDQjFjR1JoZEdWSFpXOXRaWFJ5ZVNocEtUdGNibHh1SUNBZ0lHbG1JQ2h6YUc5MWJHUlFjbVYyWlc1MFJHVm1ZWFZzZENoa1pXeDBZVmdzSUdSbGJIUmhXU2twSUh0Y2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1ZlR0Y2JseHVkbUZ5SUhkb1pXVnNJRDBnWm5WdVkzUnBiMjRvYVNrZ2UxeHVJQ0IyWVhJZ1pXeGxiV1Z1ZENBOUlHa3VaV3hsYldWdWREdGNibHh1SUNCbWRXNWpkR2x2YmlCemFHOTFiR1JRY21WMlpXNTBSR1ZtWVhWc2RDaGtaV3gwWVZnc0lHUmxiSFJoV1NrZ2UxeHVJQ0FnSUhaaGNpQnliM1Z1WkdWa1UyTnliMnhzVkc5d0lEMGdUV0YwYUM1bWJHOXZjaWhsYkdWdFpXNTBMbk5qY205c2JGUnZjQ2s3WEc0Z0lDQWdkbUZ5SUdselZHOXdJRDBnWld4bGJXVnVkQzV6WTNKdmJHeFViM0FnUFQwOUlEQTdYRzRnSUNBZ2RtRnlJR2x6UW05MGRHOXRJRDFjYmlBZ0lDQWdJSEp2ZFc1a1pXUlRZM0p2Ykd4VWIzQWdLeUJsYkdWdFpXNTBMbTltWm5ObGRFaGxhV2RvZENBOVBUMGdaV3hsYldWdWRDNXpZM0p2Ykd4SVpXbG5hSFE3WEc0Z0lDQWdkbUZ5SUdselRHVm1kQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNUR1ZtZENBOVBUMGdNRHRjYmlBZ0lDQjJZWElnYVhOU2FXZG9kQ0E5WEc0Z0lDQWdJQ0JsYkdWdFpXNTBMbk5qY205c2JFeGxablFnS3lCbGJHVnRaVzUwTG05bVpuTmxkRmRwWkhSb0lEMDlQU0JsYkdWdFpXNTBMbk5qY205c2JGZHBaSFJvTzF4dVhHNGdJQ0FnZG1GeUlHaHBkSE5DYjNWdVpEdGNibHh1SUNBZ0lDOHZJSEJwWTJzZ1lYaHBjeUIzYVhSb0lIQnlhVzFoY25rZ1pHbHlaV04wYVc5dVhHNGdJQ0FnYVdZZ0tFMWhkR2d1WVdKektHUmxiSFJoV1NrZ1BpQk5ZWFJvTG1GaWN5aGtaV3gwWVZncEtTQjdYRzRnSUNBZ0lDQm9hWFJ6UW05MWJtUWdQU0JwYzFSdmNDQjhmQ0JwYzBKdmRIUnZiVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2FHbDBjMEp2ZFc1a0lEMGdhWE5NWldaMElIeDhJR2x6VW1sbmFIUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdocGRITkNiM1Z1WkNBL0lDRnBMbk5sZEhScGJtZHpMbmRvWldWc1VISnZjR0ZuWVhScGIyNGdPaUIwY25WbE8xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdaMlYwUkdWc2RHRkdjbTl0UlhabGJuUW9aU2tnZTF4dUlDQWdJSFpoY2lCa1pXeDBZVmdnUFNCbExtUmxiSFJoV0R0Y2JpQWdJQ0IyWVhJZ1pHVnNkR0ZaSUQwZ0xURWdLaUJsTG1SbGJIUmhXVHRjYmx4dUlDQWdJR2xtSUNoMGVYQmxiMllnWkdWc2RHRllJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5QjhmQ0IwZVhCbGIyWWdaR1ZzZEdGWklEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUNBZ0x5OGdUMU1nV0NCVFlXWmhjbWxjYmlBZ0lDQWdJR1JsYkhSaFdDQTlJQzB4SUNvZ1pTNTNhR1ZsYkVSbGJIUmhXQ0F2SURZN1hHNGdJQ0FnSUNCa1pXeDBZVmtnUFNCbExuZG9aV1ZzUkdWc2RHRlpJQzhnTmp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1pTNWtaV3gwWVUxdlpHVWdKaVlnWlM1a1pXeDBZVTF2WkdVZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUM4dklFWnBjbVZtYjNnZ2FXNGdaR1ZzZEdGTmIyUmxJREU2SUV4cGJtVWdjMk55YjJ4c2FXNW5YRzRnSUNBZ0lDQmtaV3gwWVZnZ0tqMGdNVEE3WEc0Z0lDQWdJQ0JrWld4MFlWa2dLajBnTVRBN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHUmxiSFJoV0NBaFBUMGdaR1ZzZEdGWUlDWW1JR1JsYkhSaFdTQWhQVDBnWkdWc2RHRlpJQzhxSUU1aFRpQmphR1ZqYTNNZ0tpOHBJSHRjYmlBZ0lDQWdJQzh2SUVsRklHbHVJSE52YldVZ2JXOTFjMlVnWkhKcGRtVnljMXh1SUNBZ0lDQWdaR1ZzZEdGWUlEMGdNRHRjYmlBZ0lDQWdJR1JsYkhSaFdTQTlJR1V1ZDJobFpXeEVaV3gwWVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb1pTNXphR2xtZEV0bGVTa2dlMXh1SUNBZ0lDQWdMeThnY21WMlpYSnpaU0JoZUdseklIZHBkR2dnYzJocFpuUWdhMlY1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdXeTFrWld4MFlWa3NJQzFrWld4MFlWaGRPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnVzJSbGJIUmhXQ3dnWkdWc2RHRlpYVHRjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUhOb2IzVnNaRUpsUTI5dWMzVnRaV1JDZVVOb2FXeGtLSFJoY21kbGRDd2daR1ZzZEdGWUxDQmtaV3gwWVZrcElIdGNiaUFnSUNBdkx5QkdTVmhOUlRvZ2RHaHBjeUJwY3lCaElIZHZjbXRoY205MWJtUWdabTl5SUR4elpXeGxZM1ErSUdsemMzVmxJR2x1SUVaR0lHRnVaQ0JKUlNBak5UY3hYRzRnSUNBZ2FXWWdLQ0ZsYm5ZdWFYTlhaV0pMYVhRZ0ppWWdaV3hsYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NkelpXeGxZM1E2Wm05amRYTW5LU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tDRmxiR1Z0Wlc1MExtTnZiblJoYVc1ektIUmhjbWRsZENrcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnWTNWeWMyOXlJRDBnZEdGeVoyVjBPMXh1WEc0Z0lDQWdkMmhwYkdVZ0tHTjFjbk52Y2lBbUppQmpkWEp6YjNJZ0lUMDlJR1ZzWlcxbGJuUXBJSHRjYmlBZ0lDQWdJR2xtSUNoamRYSnpiM0l1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0dOc2N5NWxiR1Z0Wlc1MExtTnZibk4xYldsdVp5a3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIWmhjaUJ6ZEhsc1pTQTlJR2RsZENoamRYSnpiM0lwTzF4dUlDQWdJQ0FnZG1GeUlHOTJaWEptYkc5M0lEMGdXM04wZVd4bExtOTJaWEptYkc5M0xDQnpkSGxzWlM1dmRtVnlabXh2ZDFnc0lITjBlV3hsTG05MlpYSm1iRzkzV1YwdWFtOXBiaWhjYmlBZ0lDQWdJQ0FnSnlkY2JpQWdJQ0FnSUNrN1hHNWNiaUFnSUNBZ0lDOHZJR2xtSUhOamNtOXNiR0ZpYkdWY2JpQWdJQ0FnSUdsbUlDaHZkbVZ5Wm14dmR5NXRZWFJqYUNndktITmpjbTlzYkh4aGRYUnZLUzhwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ0WVhoVFkzSnZiR3hVYjNBZ1BTQmpkWEp6YjNJdWMyTnliMnhzU0dWcFoyaDBJQzBnWTNWeWMyOXlMbU5zYVdWdWRFaGxhV2RvZER0Y2JpQWdJQ0FnSUNBZ2FXWWdLRzFoZUZOamNtOXNiRlJ2Y0NBK0lEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBaEtHTjFjbk52Y2k1elkzSnZiR3hVYjNBZ1BUMDlJREFnSmlZZ1pHVnNkR0ZaSUQ0Z01Da2dKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDRW9ZM1Z5YzI5eUxuTmpjbTlzYkZSdmNDQTlQVDBnYldGNFUyTnliMnhzVkc5d0lDWW1JR1JsYkhSaFdTQThJREFwWEc0Z0lDQWdJQ0FnSUNBZ0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RtRnlJRzFoZUZOamNtOXNiRXhsWm5RZ1BTQmpkWEp6YjNJdWMyTnliMnhzVjJsa2RHZ2dMU0JqZFhKemIzSXVZMnhwWlc1MFYybGtkR2c3WEc0Z0lDQWdJQ0FnSUdsbUlDaHRZWGhUWTNKdmJHeE1aV1owSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNFb1kzVnljMjl5TG5OamNtOXNiRXhsWm5RZ1BUMDlJREFnSmlZZ1pHVnNkR0ZZSUR3Z01Da2dKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDRW9ZM1Z5YzI5eUxuTmpjbTlzYkV4bFpuUWdQVDA5SUcxaGVGTmpjbTlzYkV4bFpuUWdKaVlnWkdWc2RHRllJRDRnTUNsY2JpQWdJQ0FnSUNBZ0lDQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmpkWEp6YjNJZ1BTQmpkWEp6YjNJdWNHRnlaVzUwVG05a1pUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ0YjNWelpYZG9aV1ZzU0dGdVpHeGxjaWhsS1NCN1hHNGdJQ0FnZG1GeUlISmxaaUE5SUdkbGRFUmxiSFJoUm5KdmJVVjJaVzUwS0dVcE8xeHVJQ0FnSUhaaGNpQmtaV3gwWVZnZ1BTQnlaV1piTUYwN1hHNGdJQ0FnZG1GeUlHUmxiSFJoV1NBOUlISmxabHN4WFR0Y2JseHVJQ0FnSUdsbUlDaHphRzkxYkdSQ1pVTnZibk4xYldWa1FubERhR2xzWkNobExuUmhjbWRsZEN3Z1pHVnNkR0ZZTENCa1pXeDBZVmtwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUhOb2IzVnNaRkJ5WlhabGJuUWdQU0JtWVd4elpUdGNiaUFnSUNCcFppQW9JV2t1YzJWMGRHbHVaM011ZFhObFFtOTBhRmRvWldWc1FYaGxjeWtnZTF4dUlDQWdJQ0FnTHk4Z1pHVnNkR0ZZSUhkcGJHd2diMjVzZVNCaVpTQjFjMlZrSUdadmNpQm9iM0pwZW05dWRHRnNJSE5qY205c2JHbHVaeUJoYm1RZ1pHVnNkR0ZaSUhkcGJHeGNiaUFnSUNBZ0lDOHZJRzl1YkhrZ1ltVWdkWE5sWkNCbWIzSWdkbVZ5ZEdsallXd2djMk55YjJ4c2FXNW5JQzBnZEdocGN5QnBjeUIwYUdVZ1pHVm1ZWFZzZEZ4dUlDQWdJQ0FnWld4bGJXVnVkQzV6WTNKdmJHeFViM0FnTFQwZ1pHVnNkR0ZaSUNvZ2FTNXpaWFIwYVc1bmN5NTNhR1ZsYkZOd1pXVmtPMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBJQ3M5SUdSbGJIUmhXQ0FxSUdrdWMyVjBkR2x1WjNNdWQyaGxaV3hUY0dWbFpEdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHa3VjMk55YjJ4c1ltRnlXVUZqZEdsMlpTQW1KaUFoYVM1elkzSnZiR3hpWVhKWVFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNBdkx5QnZibXg1SUhabGNuUnBZMkZzSUhOamNtOXNiR0poY2lCcGN5QmhZM1JwZG1VZ1lXNWtJSFZ6WlVKdmRHaFhhR1ZsYkVGNFpYTWdiM0IwYVc5dUlHbHpYRzRnSUNBZ0lDQXZMeUJoWTNScGRtVXNJSE52SUd4bGRDZHpJSE5qY205c2JDQjJaWEowYVdOaGJDQmlZWElnZFhOcGJtY2dZbTkwYUNCdGIzVnpaU0IzYUdWbGJDQmhlR1Z6WEc0Z0lDQWdJQ0JwWmlBb1pHVnNkR0ZaS1NCN1hHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lDMDlJR1JsYkhSaFdTQXFJR2t1YzJWMGRHbHVaM011ZDJobFpXeFRjR1ZsWkR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUNzOUlHUmxiSFJoV0NBcUlHa3VjMlYwZEdsdVozTXVkMmhsWld4VGNHVmxaRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSE5vYjNWc1pGQnlaWFpsYm5RZ1BTQjBjblZsTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvYVM1elkzSnZiR3hpWVhKWVFXTjBhWFpsSUNZbUlDRnBMbk5qY205c2JHSmhjbGxCWTNScGRtVXBJSHRjYmlBZ0lDQWdJQzh2SUhWelpVSnZkR2hYYUdWbGJFRjRaWE1nWVc1a0lHOXViSGtnYUc5eWFYcHZiblJoYkNCaVlYSWdhWE1nWVdOMGFYWmxMQ0J6YnlCMWMyVWdZbTkwYUZ4dUlDQWdJQ0FnTHk4Z2QyaGxaV3dnWVhobGN5Qm1iM0lnYUc5eWFYcHZiblJoYkNCaVlYSmNiaUFnSUNBZ0lHbG1JQ2hrWld4MFlWZ3BJSHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6WTNKdmJHeE1aV1owSUNzOUlHUmxiSFJoV0NBcUlHa3VjMlYwZEdsdVozTXVkMmhsWld4VGNHVmxaRHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kQ0F0UFNCa1pXeDBZVmtnS2lCcExuTmxkSFJwYm1kekxuZG9aV1ZzVTNCbFpXUTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnphRzkxYkdSUWNtVjJaVzUwSUQwZ2RISjFaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjFjR1JoZEdWSFpXOXRaWFJ5ZVNocEtUdGNibHh1SUNBZ0lITm9iM1ZzWkZCeVpYWmxiblFnUFNCemFHOTFiR1JRY21WMlpXNTBJSHg4SUhOb2IzVnNaRkJ5WlhabGJuUkVaV1poZFd4MEtHUmxiSFJoV0N3Z1pHVnNkR0ZaS1R0Y2JpQWdJQ0JwWmlBb2MyaHZkV3hrVUhKbGRtVnVkQ0FtSmlBaFpTNWpkSEpzUzJWNUtTQjdYRzRnSUNBZ0lDQmxMbk4wYjNCUWNtOXdZV2RoZEdsdmJpZ3BPMXh1SUNBZ0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnZDJsdVpHOTNMbTl1ZDJobFpXd2dJVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ2FTNWxkbVZ1ZEM1aWFXNWtLR1ZzWlcxbGJuUXNJQ2QzYUdWbGJDY3NJRzF2ZFhObGQyaGxaV3hJWVc1a2JHVnlLVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2QybHVaRzkzTG05dWJXOTFjMlYzYUdWbGJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNCcExtVjJaVzUwTG1KcGJtUW9aV3hsYldWdWRDd2dKMjF2ZFhObGQyaGxaV3duTENCdGIzVnpaWGRvWldWc1NHRnVaR3hsY2lrN1hHNGdJSDFjYm4wN1hHNWNiblpoY2lCMGIzVmphQ0E5SUdaMWJtTjBhVzl1S0drcElIdGNiaUFnYVdZZ0tDRmxibll1YzNWd2NHOXlkSE5VYjNWamFDQW1KaUFoWlc1MkxuTjFjSEJ2Y25SelNXVlFiMmx1ZEdWeUtTQjdYRzRnSUNBZ2NtVjBkWEp1TzF4dUlDQjlYRzVjYmlBZ2RtRnlJR1ZzWlcxbGJuUWdQU0JwTG1Wc1pXMWxiblE3WEc1Y2JpQWdablZ1WTNScGIyNGdjMmh2ZFd4a1VISmxkbVZ1ZENoa1pXeDBZVmdzSUdSbGJIUmhXU2tnZTF4dUlDQWdJSFpoY2lCelkzSnZiR3hVYjNBZ1BTQk5ZWFJvTG1ac2IyOXlLR1ZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdLVHRjYmlBZ0lDQjJZWElnYzJOeWIyeHNUR1ZtZENBOUlHVnNaVzFsYm5RdWMyTnliMnhzVEdWbWREdGNiaUFnSUNCMllYSWdiV0ZuYm1sMGRXUmxXQ0E5SUUxaGRHZ3VZV0p6S0dSbGJIUmhXQ2s3WEc0Z0lDQWdkbUZ5SUcxaFoyNXBkSFZrWlZrZ1BTQk5ZWFJvTG1GaWN5aGtaV3gwWVZrcE8xeHVYRzRnSUNBZ2FXWWdLRzFoWjI1cGRIVmtaVmtnUGlCdFlXZHVhWFIxWkdWWUtTQjdYRzRnSUNBZ0lDQXZMeUIxYzJWeUlHbHpJSEJsY21oaGNITWdkSEo1YVc1bklIUnZJSE4zYVhCbElIVndMMlJ2ZDI0Z2RHaGxJSEJoWjJWY2JseHVJQ0FnSUNBZ2FXWWdLRnh1SUNBZ0lDQWdJQ0FvWkdWc2RHRlpJRHdnTUNBbUppQnpZM0p2Ykd4VWIzQWdQVDA5SUdrdVkyOXVkR1Z1ZEVobGFXZG9kQ0F0SUdrdVkyOXVkR0ZwYm1WeVNHVnBaMmgwS1NCOGZGeHVJQ0FnSUNBZ0lDQW9aR1ZzZEdGWklENGdNQ0FtSmlCelkzSnZiR3hVYjNBZ1BUMDlJREFwWEc0Z0lDQWdJQ0FwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdjMlYwSUhCeVpYWmxiblFnWm05eUlHMXZZbWxzWlNCRGFISnZiV1VnY21WbWNtVnphRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkMmx1Wkc5M0xuTmpjbTlzYkZrZ1BUMDlJREFnSmlZZ1pHVnNkR0ZaSUQ0Z01DQW1KaUJsYm5ZdWFYTkRhSEp2YldVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNodFlXZHVhWFIxWkdWWUlENGdiV0ZuYm1sMGRXUmxXU2tnZTF4dUlDQWdJQ0FnTHk4Z2RYTmxjaUJwY3lCd1pYSm9ZWEJ6SUhSeWVXbHVaeUIwYnlCemQybHdaU0JzWldaMEwzSnBaMmgwSUdGamNtOXpjeUIwYUdVZ2NHRm5aVnh1WEc0Z0lDQWdJQ0JwWmlBb1hHNGdJQ0FnSUNBZ0lDaGtaV3gwWVZnZ1BDQXdJQ1ltSUhOamNtOXNiRXhsWm5RZ1BUMDlJR2t1WTI5dWRHVnVkRmRwWkhSb0lDMGdhUzVqYjI1MFlXbHVaWEpYYVdSMGFDa2dmSHhjYmlBZ0lDQWdJQ0FnS0dSbGJIUmhXQ0ErSURBZ0ppWWdjMk55YjJ4c1RHVm1kQ0E5UFQwZ01DbGNiaUFnSUNBZ0lDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHRndjR3g1Vkc5MVkyaE5iM1psS0dScFptWmxjbVZ1WTJWWUxDQmthV1ptWlhKbGJtTmxXU2tnZTF4dUlDQWdJR1ZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdJQzA5SUdScFptWmxjbVZ1WTJWWk8xeHVJQ0FnSUdWc1pXMWxiblF1YzJOeWIyeHNUR1ZtZENBdFBTQmthV1ptWlhKbGJtTmxXRHRjYmx4dUlDQWdJSFZ3WkdGMFpVZGxiMjFsZEhKNUtHa3BPMXh1SUNCOVhHNWNiaUFnZG1GeUlITjBZWEowVDJabWMyVjBJRDBnZTMwN1hHNGdJSFpoY2lCemRHRnlkRlJwYldVZ1BTQXdPMXh1SUNCMllYSWdjM0JsWldRZ1BTQjdmVHRjYmlBZ2RtRnlJR1ZoYzJsdVoweHZiM0FnUFNCdWRXeHNPMXh1WEc0Z0lHWjFibU4wYVc5dUlHZGxkRlJ2ZFdOb0tHVXBJSHRjYmlBZ0lDQnBaaUFvWlM1MFlYSm5aWFJVYjNWamFHVnpLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaUzUwWVhKblpYUlViM1ZqYUdWeld6QmRPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5Qk5ZWGxpWlNCSlJTQndiMmx1ZEdWeVhHNGdJQ0FnSUNCeVpYUjFjbTRnWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCbWRXNWpkR2x2YmlCemFHOTFiR1JJWVc1a2JHVW9aU2tnZTF4dUlDQWdJR2xtSUNobExuQnZhVzUwWlhKVWVYQmxJQ1ltSUdVdWNHOXBiblJsY2xSNWNHVWdQVDA5SUNkd1pXNG5JQ1ltSUdVdVluVjBkRzl1Y3lBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb1pTNTBZWEpuWlhSVWIzVmphR1Z6SUNZbUlHVXVkR0Z5WjJWMFZHOTFZMmhsY3k1c1pXNW5kR2dnUFQwOUlERXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvWEc0Z0lDQWdJQ0JsTG5CdmFXNTBaWEpVZVhCbElDWW1YRzRnSUNBZ0lDQmxMbkJ2YVc1MFpYSlVlWEJsSUNFOVBTQW5iVzkxYzJVbklDWW1YRzRnSUNBZ0lDQmxMbkJ2YVc1MFpYSlVlWEJsSUNFOVBTQmxMazFUVUU5SlRsUkZVbDlVV1ZCRlgwMVBWVk5GWEc0Z0lDQWdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2RHOTFZMmhUZEdGeWRDaGxLU0I3WEc0Z0lDQWdhV1lnS0NGemFHOTFiR1JJWVc1a2JHVW9aU2twSUh0Y2JpQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnZEc5MVkyZ2dQU0JuWlhSVWIzVmphQ2hsS1R0Y2JseHVJQ0FnSUhOMFlYSjBUMlptYzJWMExuQmhaMlZZSUQwZ2RHOTFZMmd1Y0dGblpWZzdYRzRnSUNBZ2MzUmhjblJQWm1aelpYUXVjR0ZuWlZrZ1BTQjBiM1ZqYUM1d1lXZGxXVHRjYmx4dUlDQWdJSE4wWVhKMFZHbHRaU0E5SUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzRnSUNBZ2FXWWdLR1ZoYzJsdVoweHZiM0FnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29aV0Z6YVc1blRHOXZjQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWm5WdVkzUnBiMjRnYzJodmRXeGtRbVZEYjI1emRXMWxaRUo1UTJocGJHUW9kR0Z5WjJWMExDQmtaV3gwWVZnc0lHUmxiSFJoV1NrZ2UxeHVJQ0FnSUdsbUlDZ2haV3hsYldWdWRDNWpiMjUwWVdsdWN5aDBZWEpuWlhRcEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkbUZ5SUdOMWNuTnZjaUE5SUhSaGNtZGxkRHRjYmx4dUlDQWdJSGRvYVd4bElDaGpkWEp6YjNJZ0ppWWdZM1Z5YzI5eUlDRTlQU0JsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1kzVnljMjl5TG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3loamJITXVaV3hsYldWdWRDNWpiMjV6ZFcxcGJtY3BLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQjJZWElnYzNSNWJHVWdQU0JuWlhRb1kzVnljMjl5S1R0Y2JpQWdJQ0FnSUhaaGNpQnZkbVZ5Wm14dmR5QTlJRnR6ZEhsc1pTNXZkbVZ5Wm14dmR5d2djM1I1YkdVdWIzWmxjbVpzYjNkWUxDQnpkSGxzWlM1dmRtVnlabXh2ZDFsZExtcHZhVzRvWEc0Z0lDQWdJQ0FnSUNjblhHNGdJQ0FnSUNBcE8xeHVYRzRnSUNBZ0lDQXZMeUJwWmlCelkzSnZiR3hoWW14bFhHNGdJQ0FnSUNCcFppQW9iM1psY21ac2IzY3ViV0YwWTJnb0x5aHpZM0p2Ykd4OFlYVjBieWt2S1NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYldGNFUyTnliMnhzVkc5d0lEMGdZM1Z5YzI5eUxuTmpjbTlzYkVobGFXZG9kQ0F0SUdOMWNuTnZjaTVqYkdsbGJuUklaV2xuYUhRN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h0WVhoVFkzSnZiR3hVYjNBZ1BpQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lTaGpkWEp6YjNJdWMyTnliMnhzVkc5d0lEMDlQU0F3SUNZbUlHUmxiSFJoV1NBK0lEQXBJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQWhLR04xY25OdmNpNXpZM0p2Ykd4VWIzQWdQVDA5SUcxaGVGTmpjbTlzYkZSdmNDQW1KaUJrWld4MFlWa2dQQ0F3S1Z4dUlDQWdJQ0FnSUNBZ0lDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIWmhjaUJ0WVhoVFkzSnZiR3hNWldaMElEMGdZM1Z5YzI5eUxuTmpjbTlzYkV4bFpuUWdMU0JqZFhKemIzSXVZMnhwWlc1MFYybGtkR2c3WEc0Z0lDQWdJQ0FnSUdsbUlDaHRZWGhUWTNKdmJHeE1aV1owSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNFb1kzVnljMjl5TG5OamNtOXNiRXhsWm5RZ1BUMDlJREFnSmlZZ1pHVnNkR0ZZSUR3Z01Da2dKaVpjYmlBZ0lDQWdJQ0FnSUNBZ0lDRW9ZM1Z5YzI5eUxuTmpjbTlzYkV4bFpuUWdQVDA5SUcxaGVGTmpjbTlzYkV4bFpuUWdKaVlnWkdWc2RHRllJRDRnTUNsY2JpQWdJQ0FnSUNBZ0lDQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmpkWEp6YjNJZ1BTQmpkWEp6YjNJdWNHRnlaVzUwVG05a1pUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUIwYjNWamFFMXZkbVVvWlNrZ2UxeHVJQ0FnSUdsbUlDaHphRzkxYkdSSVlXNWtiR1VvWlNrcElIdGNiaUFnSUNBZ0lIWmhjaUIwYjNWamFDQTlJR2RsZEZSdmRXTm9LR1VwTzF4dVhHNGdJQ0FnSUNCMllYSWdZM1Z5Y21WdWRFOW1abk5sZENBOUlIc2djR0ZuWlZnNklIUnZkV05vTG5CaFoyVllMQ0J3WVdkbFdUb2dkRzkxWTJndWNHRm5aVmtnZlR0Y2JseHVJQ0FnSUNBZ2RtRnlJR1JwWm1abGNtVnVZMlZZSUQwZ1kzVnljbVZ1ZEU5bVpuTmxkQzV3WVdkbFdDQXRJSE4wWVhKMFQyWm1jMlYwTG5CaFoyVllPMXh1SUNBZ0lDQWdkbUZ5SUdScFptWmxjbVZ1WTJWWklEMGdZM1Z5Y21WdWRFOW1abk5sZEM1d1lXZGxXU0F0SUhOMFlYSjBUMlptYzJWMExuQmhaMlZaTzF4dVhHNGdJQ0FnSUNCcFppQW9jMmh2ZFd4a1FtVkRiMjV6ZFcxbFpFSjVRMmhwYkdRb1pTNTBZWEpuWlhRc0lHUnBabVpsY21WdVkyVllMQ0JrYVdabVpYSmxibU5sV1NrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmhjSEJzZVZSdmRXTm9UVzkyWlNoa2FXWm1aWEpsYm1ObFdDd2daR2xtWm1WeVpXNWpaVmtwTzF4dUlDQWdJQ0FnYzNSaGNuUlBabVp6WlhRZ1BTQmpkWEp5Wlc1MFQyWm1jMlYwTzF4dVhHNGdJQ0FnSUNCMllYSWdZM1Z5Y21WdWRGUnBiV1VnUFNCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNibHh1SUNBZ0lDQWdkbUZ5SUhScGJXVkhZWEFnUFNCamRYSnlaVzUwVkdsdFpTQXRJSE4wWVhKMFZHbHRaVHRjYmlBZ0lDQWdJR2xtSUNoMGFXMWxSMkZ3SUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0J6Y0dWbFpDNTRJRDBnWkdsbVptVnlaVzVqWlZnZ0x5QjBhVzFsUjJGd08xeHVJQ0FnSUNBZ0lDQnpjR1ZsWkM1NUlEMGdaR2xtWm1WeVpXNWpaVmtnTHlCMGFXMWxSMkZ3TzF4dUlDQWdJQ0FnSUNCemRHRnlkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tITm9iM1ZzWkZCeVpYWmxiblFvWkdsbVptVnlaVzVqWlZnc0lHUnBabVpsY21WdVkyVlpLU2tnZTF4dUlDQWdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUdaMWJtTjBhVzl1SUhSdmRXTm9SVzVrS0NrZ2UxeHVJQ0FnSUdsbUlDaHBMbk5sZEhScGJtZHpMbk4zYVhCbFJXRnphVzVuS1NCN1hHNGdJQ0FnSUNCamJHVmhja2x1ZEdWeWRtRnNLR1ZoYzJsdVoweHZiM0FwTzF4dUlDQWdJQ0FnWldGemFXNW5URzl2Y0NBOUlITmxkRWx1ZEdWeWRtRnNLR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9hUzVwYzBsdWFYUnBZV3hwZW1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnWTJ4bFlYSkpiblJsY25aaGJDaGxZWE5wYm1kTWIyOXdLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVhOd1pXVmtMbmdnSmlZZ0lYTndaV1ZrTG5rcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYkdWaGNrbHVkR1Z5ZG1Gc0tHVmhjMmx1WjB4dmIzQXBPMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hOWVhSb0xtRmljeWh6Y0dWbFpDNTRLU0E4SURBdU1ERWdKaVlnVFdGMGFDNWhZbk1vYzNCbFpXUXVlU2tnUENBd0xqQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1kyeGxZWEpKYm5SbGNuWmhiQ2hsWVhOcGJtZE1iMjl3S1R0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JoY0hCc2VWUnZkV05vVFc5MlpTaHpjR1ZsWkM1NElDb2dNekFzSUhOd1pXVmtMbmtnS2lBek1DazdYRzVjYmlBZ0lDQWdJQ0FnYzNCbFpXUXVlQ0FxUFNBd0xqZzdYRzRnSUNBZ0lDQWdJSE53WldWa0xua2dLajBnTUM0NE8xeHVJQ0FnSUNBZ2ZTd2dNVEFwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaGxibll1YzNWd2NHOXlkSE5VYjNWamFDa2dlMXh1SUNBZ0lHa3VaWFpsYm5RdVltbHVaQ2hsYkdWdFpXNTBMQ0FuZEc5MVkyaHpkR0Z5ZENjc0lIUnZkV05vVTNSaGNuUXBPMXh1SUNBZ0lHa3VaWFpsYm5RdVltbHVaQ2hsYkdWdFpXNTBMQ0FuZEc5MVkyaHRiM1psSnl3Z2RHOTFZMmhOYjNabEtUdGNiaUFnSUNCcExtVjJaVzUwTG1KcGJtUW9aV3hsYldWdWRDd2dKM1J2ZFdOb1pXNWtKeXdnZEc5MVkyaEZibVFwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR1Z1ZGk1emRYQndiM0owYzBsbFVHOXBiblJsY2lrZ2UxeHVJQ0FnSUdsbUlDaDNhVzVrYjNjdVVHOXBiblJsY2tWMlpXNTBLU0I3WEc0Z0lDQWdJQ0JwTG1WMlpXNTBMbUpwYm1Rb1pXeGxiV1Z1ZEN3Z0ozQnZhVzUwWlhKa2IzZHVKeXdnZEc5MVkyaFRkR0Z5ZENrN1hHNGdJQ0FnSUNCcExtVjJaVzUwTG1KcGJtUW9aV3hsYldWdWRDd2dKM0J2YVc1MFpYSnRiM1psSnl3Z2RHOTFZMmhOYjNabEtUdGNiaUFnSUNBZ0lHa3VaWFpsYm5RdVltbHVaQ2hsYkdWdFpXNTBMQ0FuY0c5cGJuUmxjblZ3Snl3Z2RHOTFZMmhGYm1RcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2QybHVaRzkzTGsxVFVHOXBiblJsY2tWMlpXNTBLU0I3WEc0Z0lDQWdJQ0JwTG1WMlpXNTBMbUpwYm1Rb1pXeGxiV1Z1ZEN3Z0owMVRVRzlwYm5SbGNrUnZkMjRuTENCMGIzVmphRk4wWVhKMEtUdGNiaUFnSUNBZ0lHa3VaWFpsYm5RdVltbHVaQ2hsYkdWdFpXNTBMQ0FuVFZOUWIybHVkR1Z5VFc5MlpTY3NJSFJ2ZFdOb1RXOTJaU2s3WEc0Z0lDQWdJQ0JwTG1WMlpXNTBMbUpwYm1Rb1pXeGxiV1Z1ZEN3Z0owMVRVRzlwYm5SbGNsVndKeXdnZEc5MVkyaEZibVFwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVHRjYmx4dWRtRnlJR1JsWm1GMWJIUlRaWFIwYVc1bmN5QTlJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUNoN1hHNGdJR2hoYm1Sc1pYSnpPaUJiSjJOc2FXTnJMWEpoYVd3bkxDQW5aSEpoWnkxMGFIVnRZaWNzSUNkclpYbGliMkZ5WkNjc0lDZDNhR1ZsYkNjc0lDZDBiM1ZqYUNkZExGeHVJQ0J0WVhoVFkzSnZiR3hpWVhKTVpXNW5kR2c2SUc1MWJHd3NYRzRnSUcxcGJsTmpjbTlzYkdKaGNreGxibWQwYURvZ2JuVnNiQ3hjYmlBZ2MyTnliMnhzYVc1blZHaHlaWE5vYjJ4a09pQXhNREF3TEZ4dUlDQnpZM0p2Ykd4WVRXRnlaMmx1VDJabWMyVjBPaUF3TEZ4dUlDQnpZM0p2Ykd4WlRXRnlaMmx1VDJabWMyVjBPaUF3TEZ4dUlDQnpkWEJ3Y21WemMxTmpjbTlzYkZnNklHWmhiSE5sTEZ4dUlDQnpkWEJ3Y21WemMxTmpjbTlzYkZrNklHWmhiSE5sTEZ4dUlDQnpkMmx3WlVWaGMybHVaem9nZEhKMVpTeGNiaUFnZFhObFFtOTBhRmRvWldWc1FYaGxjem9nWm1Gc2MyVXNYRzRnSUhkb1pXVnNVSEp2Y0dGbllYUnBiMjQ2SUhSeWRXVXNYRzRnSUhkb1pXVnNVM0JsWldRNklERXNYRzU5S1RzZ2ZUdGNibHh1ZG1GeUlHaGhibVJzWlhKeklEMGdlMXh1SUNBblkyeHBZMnN0Y21GcGJDYzZJR05zYVdOclVtRnBiQ3hjYmlBZ0oyUnlZV2N0ZEdoMWJXSW5PaUJrY21GblZHaDFiV0lzWEc0Z0lHdGxlV0p2WVhKa09pQnJaWGxpYjJGeVpDeGNiaUFnZDJobFpXdzZJSGRvWldWc0xGeHVJQ0IwYjNWamFEb2dkRzkxWTJnc1hHNTlPMXh1WEc1MllYSWdVR1Z5Wm1WamRGTmpjbTlzYkdKaGNpQTlJR1oxYm1OMGFXOXVJRkJsY21abFkzUlRZM0p2Ykd4aVlYSW9aV3hsYldWdWRDd2dkWE5sY2xObGRIUnBibWR6S1NCN1hHNGdJSFpoY2lCMGFHbHpKREVnUFNCMGFHbHpPMXh1SUNCcFppQW9JSFZ6WlhKVFpYUjBhVzVuY3lBOVBUMGdkbTlwWkNBd0lDa2dkWE5sY2xObGRIUnBibWR6SUQwZ2UzMDdYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQmxiR1Z0Wlc1MElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJR1ZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtHVnNaVzFsYm5RcE8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0NGbGJHVnRaVzUwSUh4OElDRmxiR1Z0Wlc1MExtNXZaR1ZPWVcxbEtTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkdWJ5QmxiR1Z0Wlc1MElHbHpJSE53WldOcFptbGxaQ0IwYnlCcGJtbDBhV0ZzYVhwbElGQmxjbVpsWTNSVFkzSnZiR3hpWVhJbktUdGNiaUFnZlZ4dVhHNGdJSFJvYVhNdVpXeGxiV1Z1ZENBOUlHVnNaVzFsYm5RN1hHNWNiaUFnWld4bGJXVnVkQzVqYkdGemMweHBjM1F1WVdSa0tHTnNjeTV0WVdsdUtUdGNibHh1SUNCMGFHbHpMbk5sZEhScGJtZHpJRDBnWkdWbVlYVnNkRk5sZEhScGJtZHpLQ2s3WEc0Z0lHWnZjaUFvZG1GeUlHdGxlU0JwYmlCMWMyVnlVMlYwZEdsdVozTXBJSHRjYmlBZ0lDQjBhR2x6SkRFdWMyVjBkR2x1WjNOYmEyVjVYU0E5SUhWelpYSlRaWFIwYVc1bmMxdHJaWGxkTzF4dUlDQjlYRzVjYmlBZ2RHaHBjeTVqYjI1MFlXbHVaWEpYYVdSMGFDQTlJRzUxYkd3N1hHNGdJSFJvYVhNdVkyOXVkR0ZwYm1WeVNHVnBaMmgwSUQwZ2JuVnNiRHRjYmlBZ2RHaHBjeTVqYjI1MFpXNTBWMmxrZEdnZ1BTQnVkV3hzTzF4dUlDQjBhR2x6TG1OdmJuUmxiblJJWldsbmFIUWdQU0J1ZFd4c08xeHVYRzRnSUhaaGNpQm1iMk4xY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJR1ZzWlcxbGJuUXVZMnhoYzNOTWFYTjBMbUZrWkNoamJITXVjM1JoZEdVdVptOWpkWE1wT3lCOU8xeHVJQ0IyWVhJZ1lteDFjaUE5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlHVnNaVzFsYm5RdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJITXVjM1JoZEdVdVptOWpkWE1wT3lCOU8xeHVYRzRnSUhSb2FYTXVhWE5TZEd3Z1BTQm5aWFFvWld4bGJXVnVkQ2t1WkdseVpXTjBhVzl1SUQwOVBTQW5jblJzSnp0Y2JpQWdkR2hwY3k1cGMwNWxaMkYwYVhabFUyTnliMnhzSUQwZ0tHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjJZWElnYjNKcFoybHVZV3hUWTNKdmJHeE1aV1owSUQwZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaME8xeHVJQ0FnSUhaaGNpQnlaWE4xYkhRZ1BTQnVkV3hzTzF4dUlDQWdJR1ZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kQ0E5SUMweE8xeHVJQ0FnSUhKbGMzVnNkQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNUR1ZtZENBOElEQTdYRzRnSUNBZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElEMGdiM0pwWjJsdVlXeFRZM0p2Ykd4TVpXWjBPMXh1SUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc0Z0lIMHBLQ2s3WEc0Z0lIUm9hWE11Ym1WbllYUnBkbVZUWTNKdmJHeEJaR3AxYzNSdFpXNTBJRDBnZEdocGN5NXBjMDVsWjJGMGFYWmxVMk55YjJ4c1hHNGdJQ0FnUHlCbGJHVnRaVzUwTG5OamNtOXNiRmRwWkhSb0lDMGdaV3hsYldWdWRDNWpiR2xsYm5SWGFXUjBhRnh1SUNBZ0lEb2dNRHRjYmlBZ2RHaHBjeTVsZG1WdWRDQTlJRzVsZHlCRmRtVnVkRTFoYm1GblpYSW9LVHRjYmlBZ2RHaHBjeTV2ZDI1bGNrUnZZM1Z0Wlc1MElEMGdaV3hsYldWdWRDNXZkMjVsY2tSdlkzVnRaVzUwSUh4OElHUnZZM1Z0Wlc1ME8xeHVYRzRnSUhSb2FYTXVjMk55YjJ4c1ltRnlXRkpoYVd3Z1BTQmthWFlvWTJ4ekxtVnNaVzFsYm5RdWNtRnBiQ2duZUNjcEtUdGNiaUFnWld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoMGFHbHpMbk5qY205c2JHSmhjbGhTWVdsc0tUdGNiaUFnZEdocGN5NXpZM0p2Ykd4aVlYSllJRDBnWkdsMktHTnNjeTVsYkdWdFpXNTBMblJvZFcxaUtDZDRKeWtwTzF4dUlDQjBhR2x6TG5OamNtOXNiR0poY2xoU1lXbHNMbUZ3Y0dWdVpFTm9hV3hrS0hSb2FYTXVjMk55YjJ4c1ltRnlXQ2s3WEc0Z0lIUm9hWE11YzJOeWIyeHNZbUZ5V0M1elpYUkJkSFJ5YVdKMWRHVW9KM1JoWW1sdVpHVjRKeXdnTUNrN1hHNGdJSFJvYVhNdVpYWmxiblF1WW1sdVpDaDBhR2x6TG5OamNtOXNiR0poY2xnc0lDZG1iMk4xY3ljc0lHWnZZM1Z6S1R0Y2JpQWdkR2hwY3k1bGRtVnVkQzVpYVc1a0tIUm9hWE11YzJOeWIyeHNZbUZ5V0N3Z0oySnNkWEluTENCaWJIVnlLVHRjYmlBZ2RHaHBjeTV6WTNKdmJHeGlZWEpZUVdOMGFYWmxJRDBnYm5Wc2JEdGNiaUFnZEdocGN5NXpZM0p2Ykd4aVlYSllWMmxrZEdnZ1BTQnVkV3hzTzF4dUlDQjBhR2x6TG5OamNtOXNiR0poY2xoTVpXWjBJRDBnYm5Wc2JEdGNiaUFnZG1GeUlISmhhV3hZVTNSNWJHVWdQU0JuWlhRb2RHaHBjeTV6WTNKdmJHeGlZWEpZVW1GcGJDazdYRzRnSUhSb2FYTXVjMk55YjJ4c1ltRnlXRUp2ZEhSdmJTQTlJSEJoY25ObFNXNTBLSEpoYVd4WVUzUjViR1V1WW05MGRHOXRMQ0F4TUNrN1hHNGdJR2xtSUNocGMwNWhUaWgwYUdsekxuTmpjbTlzYkdKaGNsaENiM1IwYjIwcEtTQjdYRzRnSUNBZ2RHaHBjeTVwYzFOamNtOXNiR0poY2xoVmMybHVaMEp2ZEhSdmJTQTlJR1poYkhObE8xeHVJQ0FnSUhSb2FYTXVjMk55YjJ4c1ltRnlXRlJ2Y0NBOUlIUnZTVzUwS0hKaGFXeFlVM1I1YkdVdWRHOXdLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IwYUdsekxtbHpVMk55YjJ4c1ltRnlXRlZ6YVc1blFtOTBkRzl0SUQwZ2RISjFaVHRjYmlBZ2ZWeHVJQ0IwYUdsekxuSmhhV3hDYjNKa1pYSllWMmxrZEdnZ1BWeHVJQ0FnSUhSdlNXNTBLSEpoYVd4WVUzUjViR1V1WW05eVpHVnlUR1ZtZEZkcFpIUm9LU0FySUhSdlNXNTBLSEpoYVd4WVUzUjViR1V1WW05eVpHVnlVbWxuYUhSWGFXUjBhQ2s3WEc0Z0lDOHZJRk5sZENCeVlXbHNJSFJ2SUdScGMzQnNZWGs2WW14dlkyc2dkRzhnWTJGc1kzVnNZWFJsSUcxaGNtZHBibk5jYmlBZ2MyVjBLSFJvYVhNdWMyTnliMnhzWW1GeVdGSmhhV3dzSUhzZ1pHbHpjR3hoZVRvZ0oySnNiMk5ySnlCOUtUdGNiaUFnZEdocGN5NXlZV2xzV0UxaGNtZHBibGRwWkhSb0lEMWNiaUFnSUNCMGIwbHVkQ2h5WVdsc1dGTjBlV3hsTG0xaGNtZHBia3hsWm5RcElDc2dkRzlKYm5Rb2NtRnBiRmhUZEhsc1pTNXRZWEpuYVc1U2FXZG9kQ2s3WEc0Z0lITmxkQ2gwYUdsekxuTmpjbTlzYkdKaGNsaFNZV2xzTENCN0lHUnBjM0JzWVhrNklDY25JSDBwTzF4dUlDQjBhR2x6TG5KaGFXeFlWMmxrZEdnZ1BTQnVkV3hzTzF4dUlDQjBhR2x6TG5KaGFXeFlVbUYwYVc4Z1BTQnVkV3hzTzF4dVhHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdWSmhhV3dnUFNCa2FYWW9ZMnh6TG1Wc1pXMWxiblF1Y21GcGJDZ25lU2NwS1R0Y2JpQWdaV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwYUdsekxuTmpjbTlzYkdKaGNsbFNZV2xzS1R0Y2JpQWdkR2hwY3k1elkzSnZiR3hpWVhKWklEMGdaR2wyS0dOc2N5NWxiR1Z0Wlc1MExuUm9kVzFpS0NkNUp5a3BPMXh1SUNCMGFHbHpMbk5qY205c2JHSmhjbGxTWVdsc0xtRndjR1Z1WkVOb2FXeGtLSFJvYVhNdWMyTnliMnhzWW1GeVdTazdYRzRnSUhSb2FYTXVjMk55YjJ4c1ltRnlXUzV6WlhSQmRIUnlhV0oxZEdVb0ozUmhZbWx1WkdWNEp5d2dNQ2s3WEc0Z0lIUm9hWE11WlhabGJuUXVZbWx1WkNoMGFHbHpMbk5qY205c2JHSmhjbGtzSUNkbWIyTjFjeWNzSUdadlkzVnpLVHRjYmlBZ2RHaHBjeTVsZG1WdWRDNWlhVzVrS0hSb2FYTXVjMk55YjJ4c1ltRnlXU3dnSjJKc2RYSW5MQ0JpYkhWeUtUdGNiaUFnZEdocGN5NXpZM0p2Ykd4aVlYSlpRV04wYVhabElEMGdiblZzYkR0Y2JpQWdkR2hwY3k1elkzSnZiR3hpWVhKWlNHVnBaMmgwSUQwZ2JuVnNiRHRjYmlBZ2RHaHBjeTV6WTNKdmJHeGlZWEpaVkc5d0lEMGdiblZzYkR0Y2JpQWdkbUZ5SUhKaGFXeFpVM1I1YkdVZ1BTQm5aWFFvZEdocGN5NXpZM0p2Ykd4aVlYSlpVbUZwYkNrN1hHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdWSnBaMmgwSUQwZ2NHRnljMlZKYm5Rb2NtRnBiRmxUZEhsc1pTNXlhV2RvZEN3Z01UQXBPMXh1SUNCcFppQW9hWE5PWVU0b2RHaHBjeTV6WTNKdmJHeGlZWEpaVW1sbmFIUXBLU0I3WEc0Z0lDQWdkR2hwY3k1cGMxTmpjbTlzYkdKaGNsbFZjMmx1WjFKcFoyaDBJRDBnWm1Gc2MyVTdYRzRnSUNBZ2RHaHBjeTV6WTNKdmJHeGlZWEpaVEdWbWRDQTlJSFJ2U1c1MEtISmhhV3haVTNSNWJHVXViR1ZtZENrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2RHaHBjeTVwYzFOamNtOXNiR0poY2xsVmMybHVaMUpwWjJoMElEMGdkSEoxWlR0Y2JpQWdmVnh1SUNCMGFHbHpMbk5qY205c2JHSmhjbGxQZFhSbGNsZHBaSFJvSUQwZ2RHaHBjeTVwYzFKMGJDQS9JRzkxZEdWeVYybGtkR2dvZEdocGN5NXpZM0p2Ykd4aVlYSlpLU0E2SUc1MWJHdzdYRzRnSUhSb2FYTXVjbUZwYkVKdmNtUmxjbGxYYVdSMGFDQTlYRzRnSUNBZ2RHOUpiblFvY21GcGJGbFRkSGxzWlM1aWIzSmtaWEpVYjNCWGFXUjBhQ2tnS3lCMGIwbHVkQ2h5WVdsc1dWTjBlV3hsTG1KdmNtUmxja0p2ZEhSdmJWZHBaSFJvS1R0Y2JpQWdjMlYwS0hSb2FYTXVjMk55YjJ4c1ltRnlXVkpoYVd3c0lIc2daR2x6Y0d4aGVUb2dKMkpzYjJOckp5QjlLVHRjYmlBZ2RHaHBjeTV5WVdsc1dVMWhjbWRwYmtobGFXZG9kQ0E5WEc0Z0lDQWdkRzlKYm5Rb2NtRnBiRmxUZEhsc1pTNXRZWEpuYVc1VWIzQXBJQ3NnZEc5SmJuUW9jbUZwYkZsVGRIbHNaUzV0WVhKbmFXNUNiM1IwYjIwcE8xeHVJQ0J6WlhRb2RHaHBjeTV6WTNKdmJHeGlZWEpaVW1GcGJDd2dleUJrYVhOd2JHRjVPaUFuSnlCOUtUdGNiaUFnZEdocGN5NXlZV2xzV1VobGFXZG9kQ0E5SUc1MWJHdzdYRzRnSUhSb2FYTXVjbUZwYkZsU1lYUnBieUE5SUc1MWJHdzdYRzVjYmlBZ2RHaHBjeTV5WldGamFDQTlJSHRjYmlBZ0lDQjRPbHh1SUNBZ0lDQWdaV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBJRHc5SURCY2JpQWdJQ0FnSUNBZ1B5QW5jM1JoY25RblhHNGdJQ0FnSUNBZ0lEb2daV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBJRDQ5SUhSb2FYTXVZMjl1ZEdWdWRGZHBaSFJvSUMwZ2RHaHBjeTVqYjI1MFlXbHVaWEpYYVdSMGFGeHVJQ0FnSUNBZ0lDQWdJRDhnSjJWdVpDZGNiaUFnSUNBZ0lDQWdJQ0E2SUc1MWJHd3NYRzRnSUNBZ2VUcGNiaUFnSUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lEdzlJREJjYmlBZ0lDQWdJQ0FnUHlBbmMzUmhjblFuWEc0Z0lDQWdJQ0FnSURvZ1pXeGxiV1Z1ZEM1elkzSnZiR3hVYjNBZ1BqMGdkR2hwY3k1amIyNTBaVzUwU0dWcFoyaDBJQzBnZEdocGN5NWpiMjUwWVdsdVpYSklaV2xuYUhSY2JpQWdJQ0FnSUNBZ0lDQS9JQ2RsYm1RblhHNGdJQ0FnSUNBZ0lDQWdPaUJ1ZFd4c0xGeHVJQ0I5TzF4dVhHNGdJSFJvYVhNdWFYTkJiR2wyWlNBOUlIUnlkV1U3WEc1Y2JpQWdkR2hwY3k1elpYUjBhVzVuY3k1b1lXNWtiR1Z5Y3k1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNob1lXNWtiR1Z5VG1GdFpTa2dleUJ5WlhSMWNtNGdhR0Z1Wkd4bGNuTmJhR0Z1Wkd4bGNrNWhiV1ZkS0hSb2FYTWtNU2s3SUgwcE8xeHVYRzRnSUhSb2FYTXViR0Z6ZEZOamNtOXNiRlJ2Y0NBOUlFMWhkR2d1Wm14dmIzSW9aV3hsYldWdWRDNXpZM0p2Ykd4VWIzQXBPeUF2THlCbWIzSWdiMjVUWTNKdmJHd2diMjVzZVZ4dUlDQjBhR2x6TG14aGMzUlRZM0p2Ykd4TVpXWjBJRDBnWld4bGJXVnVkQzV6WTNKdmJHeE1aV1owT3lBdkx5Qm1iM0lnYjI1VFkzSnZiR3dnYjI1c2VWeHVJQ0IwYUdsekxtVjJaVzUwTG1KcGJtUW9kR2hwY3k1bGJHVnRaVzUwTENBbmMyTnliMnhzSnl3Z1puVnVZM1JwYjI0Z0tHVXBJSHNnY21WMGRYSnVJSFJvYVhNa01TNXZibE5qY205c2JDaGxLVHNnZlNrN1hHNGdJSFZ3WkdGMFpVZGxiMjFsZEhKNUtIUm9hWE1wTzF4dWZUdGNibHh1VUdWeVptVmpkRk5qY205c2JHSmhjaTV3Y205MGIzUjVjR1V1ZFhCa1lYUmxJRDBnWm5WdVkzUnBiMjRnZFhCa1lYUmxJQ2dwSUh0Y2JpQWdhV1lnS0NGMGFHbHpMbWx6UVd4cGRtVXBJSHRjYmlBZ0lDQnlaWFIxY200N1hHNGdJSDFjYmx4dUlDQXZMeUJTWldOaGJHTjFZWFJsSUc1bFoyRjBhWFpsSUhOamNtOXNiRXhsWm5RZ1lXUnFkWE4wYldWdWRGeHVJQ0IwYUdsekxtNWxaMkYwYVhabFUyTnliMnhzUVdScWRYTjBiV1Z1ZENBOUlIUm9hWE11YVhOT1pXZGhkR2wyWlZOamNtOXNiRnh1SUNBZ0lEOGdkR2hwY3k1bGJHVnRaVzUwTG5OamNtOXNiRmRwWkhSb0lDMGdkR2hwY3k1bGJHVnRaVzUwTG1Oc2FXVnVkRmRwWkhSb1hHNGdJQ0FnT2lBd08xeHVYRzRnSUM4dklGSmxZMkZzWTNWc1lYUmxJSEpoYVd3Z2JXRnlaMmx1YzF4dUlDQnpaWFFvZEdocGN5NXpZM0p2Ykd4aVlYSllVbUZwYkN3Z2V5QmthWE53YkdGNU9pQW5ZbXh2WTJzbklIMHBPMXh1SUNCelpYUW9kR2hwY3k1elkzSnZiR3hpWVhKWlVtRnBiQ3dnZXlCa2FYTndiR0Y1T2lBbllteHZZMnNuSUgwcE8xeHVJQ0IwYUdsekxuSmhhV3hZVFdGeVoybHVWMmxrZEdnZ1BWeHVJQ0FnSUhSdlNXNTBLR2RsZENoMGFHbHpMbk5qY205c2JHSmhjbGhTWVdsc0tTNXRZWEpuYVc1TVpXWjBLU0FyWEc0Z0lDQWdkRzlKYm5Rb1oyVjBLSFJvYVhNdWMyTnliMnhzWW1GeVdGSmhhV3dwTG0xaGNtZHBibEpwWjJoMEtUdGNiaUFnZEdocGN5NXlZV2xzV1UxaGNtZHBia2hsYVdkb2RDQTlYRzRnSUNBZ2RHOUpiblFvWjJWMEtIUm9hWE11YzJOeWIyeHNZbUZ5V1ZKaGFXd3BMbTFoY21kcGJsUnZjQ2tnSzF4dUlDQWdJSFJ2U1c1MEtHZGxkQ2gwYUdsekxuTmpjbTlzYkdKaGNsbFNZV2xzS1M1dFlYSm5hVzVDYjNSMGIyMHBPMXh1WEc0Z0lDOHZJRWhwWkdVZ2MyTnliMnhzWW1GeWN5QnViM1FnZEc4Z1lXWm1aV04wSUhOamNtOXNiRmRwWkhSb0lHRnVaQ0J6WTNKdmJHeElaV2xuYUhSY2JpQWdjMlYwS0hSb2FYTXVjMk55YjJ4c1ltRnlXRkpoYVd3c0lIc2daR2x6Y0d4aGVUb2dKMjV2Ym1VbklIMHBPMXh1SUNCelpYUW9kR2hwY3k1elkzSnZiR3hpWVhKWlVtRnBiQ3dnZXlCa2FYTndiR0Y1T2lBbmJtOXVaU2NnZlNrN1hHNWNiaUFnZFhCa1lYUmxSMlZ2YldWMGNua29kR2hwY3lrN1hHNWNiaUFnY0hKdlkyVnpjMU5qY205c2JFUnBabVlvZEdocGN5d2dKM1J2Y0Njc0lEQXNJR1poYkhObExDQjBjblZsS1R0Y2JpQWdjSEp2WTJWemMxTmpjbTlzYkVScFptWW9kR2hwY3l3Z0oyeGxablFuTENBd0xDQm1ZV3h6WlN3Z2RISjFaU2s3WEc1Y2JpQWdjMlYwS0hSb2FYTXVjMk55YjJ4c1ltRnlXRkpoYVd3c0lIc2daR2x6Y0d4aGVUb2dKeWNnZlNrN1hHNGdJSE5sZENoMGFHbHpMbk5qY205c2JHSmhjbGxTWVdsc0xDQjdJR1JwYzNCc1lYazZJQ2NuSUgwcE8xeHVmVHRjYmx4dVVHVnlabVZqZEZOamNtOXNiR0poY2k1d2NtOTBiM1I1Y0dVdWIyNVRZM0p2Ykd3Z1BTQm1kVzVqZEdsdmJpQnZibE5qY205c2JDQW9aU2tnZTF4dUlDQnBaaUFvSVhSb2FYTXVhWE5CYkdsMlpTa2dlMXh1SUNBZ0lISmxkSFZ5Ymp0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlVkbGIyMWxkSEo1S0hSb2FYTXBPMXh1SUNCd2NtOWpaWE56VTJOeWIyeHNSR2xtWmloMGFHbHpMQ0FuZEc5d0p5d2dkR2hwY3k1bGJHVnRaVzUwTG5OamNtOXNiRlJ2Y0NBdElIUm9hWE11YkdGemRGTmpjbTlzYkZSdmNDazdYRzRnSUhCeWIyTmxjM05UWTNKdmJHeEVhV1ptS0Z4dUlDQWdJSFJvYVhNc1hHNGdJQ0FnSjJ4bFpuUW5MRnh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV6WTNKdmJHeE1aV1owSUMwZ2RHaHBjeTVzWVhOMFUyTnliMnhzVEdWbWRGeHVJQ0FwTzF4dVhHNGdJSFJvYVhNdWJHRnpkRk5qY205c2JGUnZjQ0E5SUUxaGRHZ3VabXh2YjNJb2RHaHBjeTVsYkdWdFpXNTBMbk5qY205c2JGUnZjQ2s3WEc0Z0lIUm9hWE11YkdGemRGTmpjbTlzYkV4bFpuUWdQU0IwYUdsekxtVnNaVzFsYm5RdWMyTnliMnhzVEdWbWREdGNibjA3WEc1Y2JsQmxjbVpsWTNSVFkzSnZiR3hpWVhJdWNISnZkRzkwZVhCbExtUmxjM1J5YjNrZ1BTQm1kVzVqZEdsdmJpQmtaWE4wY205NUlDZ3BJSHRjYmlBZ2FXWWdLQ0YwYUdsekxtbHpRV3hwZG1VcElIdGNiaUFnSUNCeVpYUjFjbTQ3WEc0Z0lIMWNibHh1SUNCMGFHbHpMbVYyWlc1MExuVnVZbWx1WkVGc2JDZ3BPMXh1SUNCeVpXMXZkbVVvZEdocGN5NXpZM0p2Ykd4aVlYSllLVHRjYmlBZ2NtVnRiM1psS0hSb2FYTXVjMk55YjJ4c1ltRnlXU2s3WEc0Z0lISmxiVzkyWlNoMGFHbHpMbk5qY205c2JHSmhjbGhTWVdsc0tUdGNiaUFnY21WdGIzWmxLSFJvYVhNdWMyTnliMnhzWW1GeVdWSmhhV3dwTzF4dUlDQjBhR2x6TG5KbGJXOTJaVkJ6UTJ4aGMzTmxjeWdwTzF4dVhHNGdJQzh2SUhWdWMyVjBJR1ZzWlcxbGJuUnpYRzRnSUhSb2FYTXVaV3hsYldWdWRDQTlJRzUxYkd3N1hHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdDQTlJRzUxYkd3N1hHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdTQTlJRzUxYkd3N1hHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdGSmhhV3dnUFNCdWRXeHNPMXh1SUNCMGFHbHpMbk5qY205c2JHSmhjbGxTWVdsc0lEMGdiblZzYkR0Y2JseHVJQ0IwYUdsekxtbHpRV3hwZG1VZ1BTQm1ZV3h6WlR0Y2JuMDdYRzVjYmxCbGNtWmxZM1JUWTNKdmJHeGlZWEl1Y0hKdmRHOTBlWEJsTG5KbGJXOTJaVkJ6UTJ4aGMzTmxjeUE5SUdaMWJtTjBhVzl1SUhKbGJXOTJaVkJ6UTJ4aGMzTmxjeUFvS1NCN1hHNGdJSFJvYVhNdVpXeGxiV1Z1ZEM1amJHRnpjMDVoYldVZ1BTQjBhR2x6TG1Wc1pXMWxiblF1WTJ4aGMzTk9ZVzFsWEc0Z0lDQWdMbk53YkdsMEtDY2dKeWxjYmlBZ0lDQXVabWxzZEdWeUtHWjFibU4wYVc5dUlDaHVZVzFsS1NCN0lISmxkSFZ5YmlBaGJtRnRaUzV0WVhSamFDZ3ZYbkJ6S0ZzdFgxMHVLM3dwSkM4cE95QjlLVnh1SUNBZ0lDNXFiMmx1S0NjZ0p5azdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCUVpYSm1aV04wVTJOeWIyeHNZbUZ5TzF4dUlpd2lhVzF3YjNKMElHSnZaSGxUWTNKdmJHeE1iMk5ySUdaeWIyMGdKMkp2WkhrdGMyTnliMnhzTFd4dlkyc25PMXh1YVcxd2IzSjBJRWRzYVdSbElHWnliMjBnSjBCbmJHbGtaV3B6TDJkc2FXUmxKenRjYm1sdGNHOXlkQ0JRWlhKbVpXTjBVMk55YjJ4c1ltRnlJR1p5YjIwZ0ozQmxjbVpsWTNRdGMyTnliMnhzWW1GeUp6dGNibHh1WTI5dWMzUWdaR2x6WVdKc1pVSnZaSGxUWTNKdmJHd2dQU0JpYjJSNVUyTnliMnhzVEc5amF5NWthWE5oWW14bFFtOWtlVk5qY205c2JEdGNibU52Ym5OMElHVnVZV0pzWlVKdlpIbFRZM0p2Ykd3Z1BTQmliMlI1VTJOeWIyeHNURzlqYXk1bGJtRmliR1ZDYjJSNVUyTnliMnhzTzF4dVkyOXVjM1FnYlc5a1lXd2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViVzlrWVd3bktUdGNibU52Ym5OMElIUmhjbWRsZEVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Ylc5a1lXeGZYMk52Ym5SbGJuUW5LVHRjYm1OdmJuTjBJRzF2WkdGc1NXMW5JRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbTF2WkdGc1gxOXBiV2NuS1R0Y2JtTnZibk4wSUcxdlpHRnNWR2wwYkdVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWJXOWtZV3hmWDNScGRHeGxKeWs3WEc1amIyNXpkQ0J0YjJSaGJGUmxlSFJDYkc5amEzTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1Ylc5a1lXeGZYM1JsZUhRdFlteHZZMnNuS1R0Y2JtTnZibk4wSUcxdlpHRnNWbUZzZFdWVWFYUnNaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV0YjJSaGJGOWZkbUZzZFdVdGRHbDBiR1VuS1R0Y2JtTnZibk4wSUcxdlpHRnNWbUZzZFdWSmRHVnRjeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1MllXeDFaUzFzYVhOMFgxOXBkR1Z0SnlrN1hHNWpiMjV6ZENCdGIyUmhiRUZrWkNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dGIyUmhiRjlmWVdSa0xXSnNiMk5ySnlrN1hHNWpiMjV6ZENCdGIyUmhiRUZrWkV4bFpuUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViVzlrWVd4ZlgyRmtaQzFzWldaMEp5azdYRzVjYm1OdmJuTjBJSFJ5YVdkblpYSnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG0xdlpHRnNMWFJ5YVdkblpYSW5LVHRjYmx4dVpuVnVZM1JwYjI0Z2RHOW5aMnhsVFc5a1lXd29LU0I3WEc0Z0lHMXZaR0ZzTG1Oc1lYTnpUR2x6ZEM1MGIyZG5iR1VvSjJsekxXRmpkR2wyWlNjcE8xeHVYRzRnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4dUlDQWdJRzF2WkdGc1NXMW5MbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMmx6TFdGamRHbDJaU2NwTzF4dUlDQjlMQ0F5TURBcE8xeHVJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjYmlBZ0lDQnRiMlJoYkZScGRHeGxMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMmx6TFdGamRHbDJaU2NwTzF4dUlDQjlMQ0F5TURBcE8xeHVYRzRnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4dUlDQWdJRzF2WkdGc1ZHVjRkRUpzYjJOcmMxc3dYUzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdmU3dnTkRBd0tUdGNiaUFnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc0Z0lDQWdiVzlrWVd4VVpYaDBRbXh2WTJ0eld6RmRMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMmx6TFdGamRHbDJaU2NwTzF4dUlDQjlMQ0EyTURBcE8xeHVJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjYmlBZ0lDQnRiMlJoYkZaaGJIVmxWR2wwYkdVdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmFYTXRZV04wYVhabEp5azdYRzRnSUgwc0lEZ3dNQ2s3WEc0Z0lGeHVJQ0J0YjJSaGJGWmhiSFZsU1hSbGJYTXVabTl5UldGamFDZ29aV3dzSUdrcElEMCtJSHRjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lHVnNMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMmx6TFdGamRHbDJaU2NwTzF4dUlDQWdJSDBzSURnd01DQXJJR2tnS2lBeE1EQXBPMXh1SUNCOUtUdGNibHh1SUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2JpQWdJQ0J0YjJSaGJFRmtaQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdmU3dnTmpBd0tUdGNibHh1SUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2JpQWdJQ0J0YjJSaGJFRmtaRXhsWm5RdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmFYTXRZV04wYVhabEp5azdYRzRnSUgwc0lEZ3dNQ2s3WEc1Y2JpQWdhV1lnS0cxdlpHRnNMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWduYVhNdFlXTjBhWFpsSnlrcElIdGNiaUFnSUNCa2FYTmhZbXhsUW05a2VWTmpjbTlzYkNoMFlYSm5aWFJGYkdWdFpXNTBLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JsYm1GaWJHVkNiMlI1VTJOeWIyeHNLSFJoY21kbGRFVnNaVzFsYm5RcE8xeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJSGRwYm1SdmQwOXVRMnhwWTJzb1pYWmxiblFwSUh0Y2JpQWdhV1lnS0dWMlpXNTBMblJoY21kbGRDQTlQVDBnYlc5a1lXd3BJSHRjYmlBZ0lDQjBiMmRuYkdWTmIyUmhiQ2dwTzF4dUlDQjlYRzU5WEc1Y2JuUnlhV2RuWlhKekxtWnZja1ZoWTJnb0tHVnNLU0E5UGlCN1hHNGdJR1ZzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnS0dVcElEMCtJSHRjYmlBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYRzRnSUNBZ2RHOW5aMnhsVFc5a1lXd29LVHRjYmlBZ2ZTazdYRzU5S1R0Y2JseHVkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z2QybHVaRzkzVDI1RGJHbGpheWs3WEc1Y2JpOHZJRzVsZHlCSGJHbGtaU2duTG1kc2FXUmxKeXdnZTF4dUx5OGdJQ0J3WlhKV2FXVjNPaUF4TUN4Y2JpOHZJSDBwTG0xdmRXNTBLQ2s3WEc1Y2JseHVZMjl1YzNRZ1kyOXVkR0ZwYm1WeUlEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtTnZiblJoYVc1bGNpMHRkR2wwYkdVbktUdGNibU52Ym5OMElIQnpJRDBnYm1WM0lGQmxjbVpsWTNSVFkzSnZiR3hpWVhJb1kyOXVkR0ZwYm1WeUtUdGNibHh1Wkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG5SaFp5MXNhWE4wWDE5c2FXNXJKeWt1Wm05eVJXRmphQ2dvWld3cElEMCtJSHRjYmlBZ1pXd3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQW9aU2tnUFQ0Z2UxeHVJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdmU2s3WEc1OUtUdGNibHh1WTI5dWMzUWdiVzlrWVd4TWFYTjBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbTF2WkdGc0xXeHBjM1FuS1R0Y2JtTnZibk4wSUhSaGNtZGxkRVZzWlcxbGJuUk1hWE4wSUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG0xdlpHRnNMV3hwYzNSZlgyTnZiblJsYm5RbktUdGNibU52Ym5OMElIUnlhV2RuWlhKelRHbHpkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1dGIyUmhiQzFzYVhOMExYUnlhV2RuWlhJbktUdGNibHh1Wm5WdVkzUnBiMjRnZEc5bloyeGxUVzlrWVd4TWFYTjBLQ2tnZTF4dUlDQnRiMlJoYkV4cGMzUXVZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25hWE10WVdOMGFYWmxKeWs3WEc0Z0lHbG1JQ2h0YjJSaGJFeHBjM1F1WTJ4aGMzTk1hWE4wTG1OdmJuUmhhVzV6S0NkcGN5MWhZM1JwZG1VbktTa2dlMXh1SUNBZ0lHUnBjMkZpYkdWQ2IyUjVVMk55YjJ4c0tIUmhjbWRsZEVWc1pXMWxiblJNYVhOMEtUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmxibUZpYkdWQ2IyUjVVMk55YjJ4c0tIUmhjbWRsZEVWc1pXMWxiblJNYVhOMEtUdGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUIzYVc1a2IzZFBia05zYVdOclRHbHpkQ2hsZG1WdWRDa2dlMXh1SUNCcFppQW9aWFpsYm5RdWRHRnlaMlYwSUQwOVBTQnRiMlJoYkV4cGMzUXBJSHRjYmlBZ0lDQjBiMmRuYkdWTmIyUmhiRXhwYzNRb0tUdGNiaUFnZlZ4dWZWeHVYRzUwY21sbloyVnljMHhwYzNRdVptOXlSV0ZqYUNnb1pXd3BJRDArSUh0Y2JpQWdaV3d1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0FvWlNrZ1BUNGdlMXh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCMGIyZG5iR1ZOYjJSaGJFeHBjM1FvS1R0Y2JpQWdmU2s3WEc1OUtUdGNibHh1ZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dkMmx1Wkc5M1QyNURiR2xqYTB4cGMzUXBPMXh1WEc1Y2JseHVYRzRpWFN3aWJtRnRaWE1pT2xzaVpHVm1hVzVsSWl3aWRHaHBjeUlzSW1kbGRDSXNJblJ2U1c1MElpd2laR2x6WVdKc1pVSnZaSGxUWTNKdmJHd2lMQ0ppYjJSNVUyTnliMnhzVEc5amF5SXNJbVZ1WVdKc1pVSnZaSGxUWTNKdmJHd2lMQ0p0YjJSaGJDSXNJbVJ2WTNWdFpXNTBJaXdpY1hWbGNubFRaV3hsWTNSdmNpSXNJblJoY21kbGRFVnNaVzFsYm5RaUxDSnRiMlJoYkVsdFp5SXNJbTF2WkdGc1ZHbDBiR1VpTENKdGIyUmhiRlJsZUhSQ2JHOWphM01pTENKeGRXVnllVk5sYkdWamRHOXlRV3hzSWl3aWJXOWtZV3hXWVd4MVpWUnBkR3hsSWl3aWJXOWtZV3hXWVd4MVpVbDBaVzF6SWl3aWJXOWtZV3hCWkdRaUxDSnRiMlJoYkVGa1pFeGxablFpTENKMGNtbG5aMlZ5Y3lJc0luUnZaMmRzWlUxdlpHRnNJaXdpWTJ4aGMzTk1hWE4wSWl3aWRHOW5aMnhsSWl3aVptOXlSV0ZqYUNJc0ltVnNJaXdpYVNJc0ltTnZiblJoYVc1eklpd2lkMmx1Wkc5M1QyNURiR2xqYXlJc0ltVjJaVzUwSWl3aWRHRnlaMlYwSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0ltVWlMQ0p3Y21WMlpXNTBSR1ZtWVhWc2RDSXNJbmRwYm1SdmR5SXNJbU52Ym5SaGFXNWxjaUlzSW5Ceklpd2lVR1Z5Wm1WamRGTmpjbTlzYkdKaGNpSXNJbTF2WkdGc1RHbHpkQ0lzSW5SaGNtZGxkRVZzWlcxbGJuUk1hWE4wSWl3aWRISnBaMmRsY25OTWFYTjBJaXdpZEc5bloyeGxUVzlrWVd4TWFYTjBJaXdpZDJsdVpHOTNUMjVEYkdsamEweHBjM1FpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN1FVRkJRU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hGUVVGRkxFOUJRVTlCTEZOQlFVMHNSVUZCUlVFc1UwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlEwRXNVMEZCVFN4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4QlFVRXJRaXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRVUZCYzBNc1EwRkJReXhEUVVGRFF5eGpRVUZKTEVOQlFVTXNVMEZCVXl4UFFVRlBMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZkQlFWY3NSVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4UFFVRlBMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRkxHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZETEVOQlFVTXNSVUZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEV0QlFVc3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhuU0VGQlowZ3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1MwRkJTeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETERoSFFVRTRSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVTXNSVUZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3T3pzN1FVTkJlSHBHT3pzN096czdRVUZOUVN4SlFVRkpMRkZCUVZFc1IwRkJSenM3T3pzN096czdPenRGUVZWaUxFbEJRVWtzUlVGQlJTeFJRVUZST3pzN096czdPMFZCVDJRc1QwRkJUeXhGUVVGRkxFTkJRVU03T3pzN096czdSVUZQVml4UFFVRlBMRVZCUVVVc1EwRkJRenM3T3pzN096czdPenM3UlVGWFZpeFBRVUZQTEVWQlFVVXNRMEZCUXpzN096czdPenRGUVU5V0xFZEJRVWNzUlVGQlJTeEZRVUZGT3pzN096czdPMFZCVDFBc1VVRkJVU3hGUVVGRkxFdEJRVXM3T3pzN096czdSVUZQWml4VlFVRlZMRVZCUVVVc1NVRkJTVHM3T3pzN096dEZRVTlvUWl4UlFVRlJMRVZCUVVVc1NVRkJTVHM3T3pzN096czdPenRGUVZWa0xFdEJRVXNzUlVGQlJTeExRVUZMT3pzN096czdPMFZCVDFvc1kwRkJZeXhGUVVGRkxFVkJRVVU3T3pzN096czdSVUZQYkVJc1lVRkJZU3hGUVVGRkxFZEJRVWM3T3pzN096czdSVUZQYkVJc1VVRkJVU3hGUVVGRkxFdEJRVXM3T3pzN096czdSVUZQWml4VlFVRlZMRVZCUVVVc1IwRkJSenM3T3pzN096dEZRVTltTEZWQlFWVXNSVUZCUlN4RlFVRkZPenM3T3pzN08wVkJUMlFzYVVKQlFXbENMRVZCUVVVc1IwRkJSenM3T3pzN096dEZRVTkwUWl4TlFVRk5MRVZCUVVVc1NVRkJTVHM3T3pzN096dEZRVTlhTEdOQlFXTXNSVUZCUlN4SFFVRkhPenM3T3pzN08wVkJUMjVDTEcxQ1FVRnRRaXhGUVVGRkxHMURRVUZ0UXpzN096czdPenRGUVU5NFJDeFJRVUZSTEVWQlFVVXNSVUZCUlRzN096czdPenM3T3pzN1JVRlhXaXhUUVVGVExFVkJRVVVzUzBGQlN6czdPenM3T3pzN096czdPenM3UlVGamFFSXNTVUZCU1N4RlFVRkZMRU5CUVVNN096czdPenM3T3pzN08wVkJWMUFzVjBGQlZ5eEZRVUZGTEVWQlFVVTdPenM3T3pzN08wVkJVV1lzVDBGQlR5eEZRVUZGTzBsQlExQXNVMEZCVXl4RlFVRkZPMDFCUTFRc1IwRkJSeXhGUVVGRkxGbEJRVms3VFVGRGFrSXNSMEZCUnl4RlFVRkZMRmxCUVZrN1MwRkRiRUk3U1VGRFJDeE5RVUZOTEVWQlFVVXNaVUZCWlR0SlFVTjJRaXhSUVVGUkxFVkJRVVVzYVVKQlFXbENPMGxCUXpOQ0xGTkJRVk1zUlVGQlJTeHJRa0ZCYTBJN1NVRkROMElzVVVGQlVTeEZRVUZGTEdsQ1FVRnBRanRKUVVNelFpeFZRVUZWTEVWQlFVVXNjVUpCUVhGQ08wbEJRMnBETEZOQlFWTXNSVUZCUlN4MVFrRkJkVUk3U1VGRGJFTXNWMEZCVnl4RlFVRkZMSE5DUVVGelFqdEpRVU51UXl4aFFVRmhMRVZCUVVVc2QwSkJRWGRDTzBkQlEzaERPME5CUTBZc1EwRkJRenM3T3pzN096czdRVUZSUml4VFFVRlRMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVU3UlVGRGFrSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenREUVVOMlF6czdRVUZGUkN4SlFVRkpMRTlCUVU4c1IwRkJSeXhQUVVGUExFMUJRVTBzUzBGQlN5eFZRVUZWTEVsQlFVa3NUMEZCVHl4TlFVRk5MRU5CUVVNc1VVRkJVU3hMUVVGTExGRkJRVkVzUjBGQlJ5eFZRVUZWTEVkQlFVY3NSVUZCUlR0RlFVTnFSeXhQUVVGUExFOUJRVThzUjBGQlJ5eERRVUZETzBOQlEyNUNMRWRCUVVjc1ZVRkJWU3hIUVVGSExFVkJRVVU3UlVGRGFrSXNUMEZCVHl4SFFVRkhMRWxCUVVrc1QwRkJUeXhOUVVGTkxFdEJRVXNzVlVGQlZTeEpRVUZKTEVkQlFVY3NRMEZCUXl4WFFVRlhMRXRCUVVzc1RVRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eE5RVUZOTEVOQlFVTXNVMEZCVXl4SFFVRkhMRkZCUVZFc1IwRkJSeXhQUVVGUExFZEJRVWNzUTBGQlF6dERRVU01U0N4RFFVRkRPenRCUVVWR0xFbEJRVWtzWTBGQll5eEhRVUZITEZWQlFWVXNVVUZCVVN4RlFVRkZMRmRCUVZjc1JVRkJSVHRGUVVOd1JDeEpRVUZKTEVWQlFVVXNVVUZCVVN4WlFVRlpMRmRCUVZjc1EwRkJReXhGUVVGRk8wbEJRM1JETEUxQlFVMHNTVUZCU1N4VFFVRlRMRU5CUVVNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0SFFVTXhSRHREUVVOR0xFTkJRVU03TzBGQlJVWXNTVUZCU1N4WFFVRlhMRWRCUVVjc1dVRkJXVHRGUVVNMVFpeFRRVUZUTEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVTdTVUZEZGtNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdUVUZEY2tNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMDFCUXpGQ0xGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRlZCUVZVc1NVRkJTU3hMUVVGTExFTkJRVU03VFVGRGRrUXNWVUZCVlN4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03VFVGREwwSXNTVUZCU1N4UFFVRlBMRWxCUVVrc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMDFCUTNSRUxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTTdTMEZETTBRN1IwRkRSanM3UlVGRlJDeFBRVUZQTEZWQlFWVXNWMEZCVnl4RlFVRkZMRlZCUVZVc1JVRkJSU3hYUVVGWExFVkJRVVU3U1VGRGNrUXNTVUZCU1N4VlFVRlZMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU53UlN4SlFVRkpMRmRCUVZjc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03U1VGRE5VUXNUMEZCVHl4WFFVRlhMRU5CUVVNN1IwRkRjRUlzUTBGQlF6dERRVU5JTEVWQlFVVXNRMEZCUXpzN1FVRkZTaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SlFVRkpMRlZCUVZVc1RVRkJUU3hGUVVGRk8wVkJRMmhFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wbEJRM3BETEVsQlFVa3NUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdTVUZGTVVJc1MwRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVTdUVUZEZEVJc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFGQlEzSkVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1QwRkRNMEk3UzBGRFJqdEhRVU5HT3p0RlFVVkVMRTlCUVU4c1RVRkJUU3hEUVVGRE8wTkJRMllzUTBGQlF6czdRVUZGUml4SlFVRkpMRWRCUVVjc1IwRkJSeXhUUVVGVExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSVHRGUVVOcVJDeEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRVZCUVVVc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdSVUZEYWtRc1NVRkJTU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXpzN1JVRkZOMFFzU1VGQlNTeEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMGxCUTNSQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03TzBsQlJUTkRMRWxCUVVrc1RVRkJUU3hMUVVGTExFbEJRVWtzUlVGQlJUdE5RVU51UWl4UFFVRlBMRk5CUVZNc1EwRkJRenRMUVVOc1FpeE5RVUZOTzAxQlEwd3NUMEZCVHl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0TFFVTjRRenRIUVVOR0xFMUJRVTBzU1VGQlNTeFBRVUZQTEVsQlFVa3NTVUZCU1N4RlFVRkZPMGxCUXpGQ0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0SFFVTnVRaXhOUVVGTk8wbEJRMHdzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenM3U1VGRmRFSXNTVUZCU1N4TlFVRk5MRXRCUVVzc1UwRkJVeXhGUVVGRk8wMUJRM2hDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q096dEpRVVZFTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEhRVU01UWp0RFFVTkdMRU5CUVVNN08wRkJSVVlzU1VGQlNTeFJRVUZSTEVkQlFVY3NWVUZCVlN4UlFVRlJMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wVkJRemRETEVsQlFVa3NUMEZCVHl4VlFVRlZMRXRCUVVzc1ZVRkJWU3hKUVVGSkxGVkJRVlVzUzBGQlN5eEpRVUZKTEVWQlFVVTdTVUZETTBRc1RVRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5d3dSRUZCTUVRc1IwRkJSeXhQUVVGUExGVkJRVlVzUTBGQlF5eERRVUZETzBkQlEzSkhPenRGUVVWRUxGRkJRVkVzUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFbEJRVWtzVlVGQlZTeERRVUZETEZOQlFWTXNSVUZCUlR0SlFVTnlSU3hYUVVGWExFVkJRVVU3VFVGRFdDeExRVUZMTEVWQlFVVXNVVUZCVVR0TlFVTm1MRlZCUVZVc1JVRkJSU3hMUVVGTE8wMUJRMnBDTEZGQlFWRXNSVUZCUlN4SlFVRkpPMDFCUTJRc1dVRkJXU3hGUVVGRkxFbEJRVWs3UzBGRGJrSTdSMEZEUml4RFFVRkRMRU5CUVVNN1JVRkRTQ3hKUVVGSkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeEZRVUZGTEZWQlFWVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhUUVVGVExFZEJRVWNzVlVGQlZTeERRVUZETzBOQlEzWklMRU5CUVVNN08wRkJSVVlzU1VGQlNTeDVRa0ZCZVVJc1IwRkJSeXhWUVVGVkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVTdSVUZEY0VRc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJUdEpRVU5VTEUxQlFVMHNTVUZCU1N4alFVRmpMRU5CUVVNc01rUkJRVEpFTEVOQlFVTXNRMEZCUXp0SFFVTjJSanM3UlVGRlJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4UFFVRlBMRWxCUVVrc1MwRkJTeXhSUVVGUkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dERRVU4yUml4RFFVRkRPenM3T3pzN096czdRVUZUUml4VFFVRlRMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVU3UlVGRGNFSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UTBGRGVFSTdPenM3T3pzN096dEJRVk5FTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSVHRGUVVOMFFpeFBRVUZQTEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenREUVVNeFFqczdPenM3T3pzN1FVRlJSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVTdSVUZEZGtJc1QwRkJUeXhQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVOQlFVTTdRMEZEYkVNN096czdPenM3T3pzN1FVRlZSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVTdSVUZEZGtJc1NVRkJTU3hKUVVGSkxFZEJRVWNzVDBGQlR5eExRVUZMTEV0QlFVc3NWMEZCVnl4SFFVRkhMRmRCUVZjc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMFZCUlhaRkxFOUJRVThzU1VGQlNTeExRVUZMTEZWQlFWVXNTVUZCU1N4SlFVRkpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdRMEZETlVRN096czdPenM3TzBGQlVVUXNVMEZCVXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRk8wVkJRM1pDTEU5QlFVOHNUMEZCVHl4TFFVRkxMRXRCUVVzc1VVRkJVU3hEUVVGRE8wTkJRMnhET3pzN096czdPenRCUVZGRUxGTkJRVk1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlR0RlFVTjZRaXhQUVVGUExFOUJRVThzUzBGQlN5eExRVUZMTEZWQlFWVXNRMEZCUXp0RFFVTndRenM3T3pzN096czdRVUZSUkN4VFFVRlRMRmRCUVZjc1EwRkJReXhMUVVGTExFVkJRVVU3UlVGRE1VSXNUMEZCVHl4UFFVRlBMRXRCUVVzc1MwRkJTeXhYUVVGWExFTkJRVU03UTBGRGNrTTdPenM3T3pzN08wRkJVVVFzVTBGQlV5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZPMFZCUTNSQ0xFOUJRVThzUzBGQlN5eERRVUZETEZkQlFWY3NTMEZCU3l4TFFVRkxMRU5CUVVNN1EwRkRjRU03T3pzN096czdPenM3TzBGQlYwUXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdSVUZEZUVNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUlVGQlJTeERRVUZET3p0RlFVVndRaXhMUVVGTExFbEJRVWtzU1VGQlNTeEpRVUZKTEZWQlFWVXNSVUZCUlR0SlFVTXpRaXhKUVVGSkxGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1JVRkJSVHROUVVOb1F5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UzBGRGFFVXNUVUZCVFR0TlFVTk1MRWxCUVVrc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4RFFVRkRPMHRCUTNSRE8wZEJRMFk3TzBWQlJVUXNTMEZCU3l4SlFVRkpMRXRCUVVzc1NVRkJTU3hWUVVGVkxFVkJRVVU3U1VGRE5VSXNTVUZCU1N4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMDFCUTNaRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRMUVVNelFqdEhRVU5HT3p0RlFVVkVMRTlCUVU4c1ZVRkJWU3hEUVVGRE8wTkJRMjVDT3pzN096czdPenM3TzBGQlZVUXNVMEZCVXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVTdSVUZEY2tNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wTkJRemxET3pzN096czdPenRCUVZGRUxGTkJRVk1zVVVGQlVTeERRVUZETEVkQlFVY3NSVUZCUlR0RlFVTnlRaXhQUVVGUExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRKUVVOd1JDeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0SlFVVmtMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SFFVTm9RaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBOQlExSTdPenM3T3pzN096dEJRVk5FTEZOQlFWTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVU3UlVGRGVFTXNTVUZCU1N4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN096czdPenM3UlVGUEwwTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzBsQlEzUkRMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1NVRkZia1VzU1VGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zUlVGQlJUdE5RVU5vUkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UzBGRGJFYzdSMEZEUmpzN1JVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1NVRkRNVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wZEJRMmhHT3p0RlFVVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wTkJRMmhDT3p0QlFVVkVMRWxCUVVrc1UwRkJVeXhIUVVGSExGbEJRVms3T3pzN096dEZRVTB4UWl4VFFVRlRMRk5CUVZNc1IwRkJSenRKUVVOdVFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRjRVlzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenM3U1VGRmFFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRGNrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETzBkQlEyeERPenM3T3pzN096czdPMFZCVlVRc1YwRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBsQlEzUkNMRWRCUVVjc1JVRkJSU3hKUVVGSk8wbEJRMVFzUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVU3VFVGRGFrTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGRGJFSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VlVGRGNrTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1UwRkROVUk3VDBGRFJqczdPMDFCUjBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVWQlFVVTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1QwRkRla0k3T3p0TlFVZEVMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN08wMUJSMnBFTEU5QlFVODdVVUZEVEN4TlFVRk5MRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VlVGRGVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMU5CUTJ4RE8wOUJRMFlzUTBGQlF6dExRVU5JT3pzN096czdPenM3UjBGVFJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRTFCUVUwN1NVRkRXQ3hMUVVGTExFVkJRVVVzVTBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSVHROUVVOdVF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRWUVVOeVF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0VFFVTTVRanRQUVVOR096czdUVUZIUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU4wUXl4UFFVRlBPMDlCUTFJN096dE5RVWRFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNTVUZCU1N4RlFVRkZPMUZCUTNwRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1QwRkRja0lzUTBGQlF5eERRVUZETzB0QlEwbzdSMEZEUml4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVOS0xFOUJRVThzVTBGQlV5eERRVUZETzBOQlEyeENMRVZCUVVVc1EwRkJRenM3UVVGRlNpeEpRVUZKTEV0QlFVc3NSMEZCUnl4WlFVRlpPenM3T3pzN08wVkJUM1JDTEZOQlFWTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSVHRKUVVOMlFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRja1lzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenM3U1VGRk5VSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRFlpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOaUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4VFFVRlRMRVZCUVVVc1EwRkJRenM3U1VGRk1VSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03U1VGRGRFSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03U1VGRGVrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJoRUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03UjBGRGNFTTdPenM3T3pzN096czdSVUZWUkN4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGJFSXNSMEZCUnl4RlFVRkZMRTlCUVU4N1NVRkRXaXhMUVVGTExFVkJRVVVzVTBGQlV5eFJRVUZSTEVkQlFVYzdUVUZEZWtJc1NVRkJTU3hWUVVGVkxFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZET3p0TlFVVjRSaXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenM3VFVGRk4wSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVU3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VDBGRE5VTXNUVUZCVFR0UlFVTk1MRWxCUVVrc1EwRkJReXd5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMDlCUTI1RU96dE5RVVZFTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZET3p0TlFVVTFRaXhQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pT3pzN096czdPenM3UjBGVFJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRkZCUVZFN1NVRkRZaXhMUVVGTExFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZGtJc1NVRkJTU3haUVVGWkxFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRWxCUVVrc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZET3p0TlFVVXhSaXhKUVVGSkxFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNSVUZCUlR0UlFVTjZRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEZsQlFWa3NRMEZCUXp0UFFVTjRRaXhOUVVGTk8xRkJRMHdzU1VGQlNTeERRVUZETERKRFFVRXlReXhEUVVGRExFTkJRVU03VDBGRGJrUTdPMDFCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqczdPenM3T3pzN08wZEJVMFlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4UlFVRlJPMGxCUTJJc1MwRkJTeXhGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzWkNMRWxCUVVrc1VVRkJVU3hIUVVGSExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6czdUVUZGZEVZc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6czdUVUZGZEVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMUZCUTNSRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenRQUVVNdlFqczdUVUZGUkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXpzN1RVRkZka0lzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3T3pzN096czdSMEZqUml4RlFVRkZPMGxCUTBRc1IwRkJSeXhGUVVGRkxFbEJRVWs3U1VGRFZDeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRk8wMUJRekZDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1RVRkZNVUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3TzBkQlUwWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hOUVVGTk8wbEJRMWdzUzBGQlN5eEZRVUZGTEZOQlFWTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHROUVVNM1FpeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dE5RVU0zUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN08wMUJSVFZDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN096czdPenM3TzBkQlVVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVE8wbEJRMlFzUzBGQlN5eEZRVUZGTEZOQlFWTXNUMEZCVHl4SFFVRkhPMDFCUTNoQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE96dE5RVVY0UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVOaU96czdPenM3T3pzN1IwRlRSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEUxQlFVMDdTVUZEV0N4TFFVRkxMRVZCUVVVc1UwRkJVeXhKUVVGSkxFZEJRVWM3VFVGRGNrSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRE96dE5RVVY2Uml4SlFVRkpMRkZCUVZFc1JVRkJSVHRSUVVOYUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRQUVVOdVF6czdUVUZGUkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXpzN1RVRkZja0lzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRTlCUVU4N1NVRkRXaXhMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdUVUZEZEVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN08wMUJSWFJDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN096czdPenM3TzBkQlVVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hUUVVGVE8wbEJRMlFzUzBGQlN5eEZRVUZGTEZOQlFWTXNUMEZCVHl4SFFVRkhPMDFCUTNoQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPenROUVVWeVFpeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTmlPenM3T3pzN096dEhRVkZHTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1VVRkJVVHRKUVVOaUxFdEJRVXNzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTjJRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXpzN1RVRkZkRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3T3p0SFFWVkdMRVZCUVVVN1NVRkRSQ3hIUVVGSExFVkJRVVVzU1VGQlNUdEpRVU5VTEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzVDBGQlR5eEZRVUZGTzAxQlEycERMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3VFVGRk0wSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1MwRkRZanM3T3pzN096czdPMGRCVTBZc1JVRkJSVHRKUVVORUxFZEJRVWNzUlVGQlJTeFJRVUZSTzBsQlEySXNTMEZCU3l4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJUdE5RVU16UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUXp0TFFVTndRenM3T3pzN096czdSMEZSUml4RlFVRkZPMGxCUTBRc1IwRkJSeXhGUVVGRkxGVkJRVlU3U1VGRFppeEhRVUZITEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRja0lzVDBGQlR5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPMHRCUTJoQ096czdPenM3T3pzN1NVRlRSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZPMDFCUTNSQ0xFbEJRVWtzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTJZc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdUMEZEWWl4TlFVRk5PMUZCUTB3c1NVRkJTU3hEUVVGRExIVkRRVUYxUXl4RFFVRkRMRU5CUVVNN1QwRkRMME03UzBGRFJqczdPenM3T3pzN1IwRlJSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEU5QlFVODdTVUZEV2l4SFFVRkhMRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VFVGRGNrSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8wdEJRMmhDT3pzN096czdPenRKUVZGRUxFZEJRVWNzUlVGQlJTeFRRVUZUTEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVN1RVRkRkRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGNFSTdPenM3T3pzN08wZEJVVVlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4TlFVRk5PMGxCUTFnc1IwRkJSeXhGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTTdTMEZETTBJN096czdPenM3TzBkQlVVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hWUVVGVk8wbEJRMllzUjBGQlJ5eEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNKQ0xFOUJRVThzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0TFFVTm9RanM3T3pzN096czdTVUZSUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTzAxQlF6TkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXp0TFFVTndRanRIUVVOR0xFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEwb3NUMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRaQ3hGUVVGRkxFTkJRVU03TzBGQlJVb3NVMEZCVXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdSVUZEZGtNc1NVRkJTU3hIUVVGSExFZEJRVWM3T3pzN096dEpRVTFTTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenROUVVOMFFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOcVFqczdPenM3T3pzN1NVRlJSQ3hKUVVGSkxFVkJRVVVzVTBGQlV5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZPMDFCUTNoQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXpzN1RVRkZha0lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRia0lzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPenRSUVVWb1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJRenM3VVVGRmFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPenRSUVVWeVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN08xRkJSV3BDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1VVRkZPVUlzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRWUVVOMFF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNNVF5eExRVUZMTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3V1VGRmFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWRCUTNaRE96dFZRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1ZVRkZja01zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMU5CUTJoQ0xFTkJRVU1zUTBGQlF6dFBRVU5LTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzVTBGQlV5eEZRVUZGTEZOQlFWTXNVMEZCVXl4SFFVRkhPMDFCUXpsQ0xFbEJRVWtzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpPMVZCUTJoQ0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMDFCUTNwQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxPMVZCUTJ4Q0xGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPenM3VFVGSEwwSXNTVUZCU1N4alFVRmpMRWRCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMDFCUld4RkxGRkJRVkVzVTBGQlV6dFJRVU5tTEV0QlFVc3NSMEZCUnp0VlFVTk9MRWxCUVVrc1MwRkJTeXhMUVVGTExFZEJRVWNzUlVGQlJUdFpRVU5xUWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF6dFhRVU4wUWl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTzFsQlEzWkNMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0alFVTjJSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1kwRkZaaXhMUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTnFRanM3V1VGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFhRVU01UWl4TlFVRk5MRWxCUVVrc1kwRkJZeXhGUVVGRk8xbEJRM3BDTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWRCUXpsRUxFMUJRVTA3V1VGRFRDeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1YwRkRaanRWUVVORUxFMUJRVTA3TzFGQlJWSXNTMEZCU3l4SFFVRkhPMVZCUTA0c1NVRkJTU3hMUVVGTExFdEJRVXNzUjBGQlJ5eEZRVUZGTzFsQlEycENMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzFkQlEycENMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZEZWtJc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMk5CUTNaRUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRPenRqUVVWbUxFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUTNSQ096dFpRVVZFTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFkQlEyaERMRTFCUVUwc1NVRkJTU3hqUVVGakxFVkJRVVU3V1VGRGVrSXNTMEZCU3l4RFFVRkRMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdWMEZEY0VRc1RVRkJUVHRaUVVOTUxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WFFVTm1PMVZCUTBRc1RVRkJUVHM3VVVGRlVpeExRVUZMTEVkQlFVYzdWVUZEVGl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dFZRVU53UWl4TlFVRk5PMDlCUTFRN1MwRkRSanM3T3pzN096czdTVUZSUkN4UFFVRlBMRVZCUVVVc1UwRkJVeXhQUVVGUExFZEJRVWM3VFVGRE1VSXNUMEZCVHl4TFFVRkxMRU5CUVVNc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU14UWpzN096czdPenM3U1VGUlJDeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRWRCUVVjN1RVRkRkRUlzVDBGQlR5eExRVUZMTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03UzBGRGNFTTdPenM3T3pzN096dEpRVk5FTEZGQlFWRXNSVUZCUlN4VFFVRlRMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVU3VFVGRGNrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4TFFVRkxMRk5CUVZNc1EwRkJRenRMUVVOeVJEdEhRVU5HTEVOQlFVTTdPMFZCUlVZc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3p0SlFVMXNRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzB0QlEyaENPenM3T3pzN096dEpRVkZFTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGRrSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSenRSUVVOU0xGTkJRVk1zUlVGQlJTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRE4wSXNTMEZCU3l4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETzA5QlF6ZERMRU5CUVVNN1MwRkRTRHRIUVVOR0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUlVGQlJUczdPenM3T3p0SlFVOXdRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1NVRkJTU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXp0TlFVTTVRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU03T3pzN096dE5RVTB6UXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTlCUVU4c1MwRkJTeXhSUVVGUkxFbEJRVWtzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlR0UlFVTTNSU3hQUVVGUExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzA5QlF6ZEZPenROUVVWRUxFOUJRVThzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTnVRanRIUVVOR0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxGRkJRVkVzUlVGQlJUczdPenM3TzBsQlRYQkNMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGFFSTdSMEZEUml4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN096czdPenRCUVU5RUxGTkJRVk1zUjBGQlJ5eEhRVUZITzBWQlEySXNUMEZCVHl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBOQlF6ZENPenM3T3pzN096czdPenM3TzBGQllVUXNVMEZCVXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVTdSVUZEY2tNc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzAxQlEyaENMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03VFVGRGFFSXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenROUVVOaUxFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXp0RlFVTndRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdSVUZEYWtJc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRGUVVVelFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4VFFVRlRMRXRCUVVzc1IwRkJSenRKUVVNelFpeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1MwRkJTeXhMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJwRUxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEWml4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dEhRVU55UXl4RFFVRkRPenRGUVVWR0xFbEJRVWtzVTBGQlV5eEhRVUZITEZOQlFWTXNVMEZCVXl4SFFVRkhPMGxCUTI1RExFbEJRVWtzUlVGQlJTeEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJZc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRXRCUVVzc1JVRkJSU3hSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzBsQlF6RkVMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRka01zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTm1MRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU03U1VGRGFrSXNTVUZCU1N4VFFVRlRMRWxCUVVrc1EwRkJReXhKUVVGSkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVWQlFVVTdUVUZEZEVNc1NVRkJTU3hQUVVGUExFVkJRVVU3VVVGRFdDeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1VVRkRkRUlzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0UFFVTm9RanROUVVORUxGRkJRVkVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdUVUZEWkN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1RVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dExRVU55UXl4TlFVRk5MRWxCUVVrc1EwRkJReXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZETEZGQlFWRXNTMEZCU3l4TFFVRkxMRVZCUVVVN1RVRkRha1FzVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03UzBGRGVFTTdTVUZEUkN4UFFVRlBMRTFCUVUwc1EwRkJRenRIUVVObUxFTkJRVU03TzBWQlJVWXNVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhaUVVGWk8wbEJRemRDTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOMFFpeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTJJc1QwRkJUeXhIUVVGSExFOUJRVThzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGRCUTJwRExFTkJRVU03TzBWQlJVWXNUMEZCVHl4VFFVRlRMRU5CUVVNN1EwRkRiRUk3TzBGQlJVUXNTVUZCU1N4WFFVRlhMRWRCUVVjN1JVRkRhRUlzUjBGQlJ5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMR0ZCUVdFc1EwRkJRenRGUVVOc1F5eEhRVUZITEVWQlFVVXNRMEZCUXl4aFFVRmhMRVZCUVVVc1dVRkJXU3hEUVVGRE8wTkJRMjVETEVOQlFVTTdPMEZCUlVZc1UwRkJVeXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN1JVRkRlRU1zU1VGQlNTeEpRVUZKTEVkQlFVYzdPenM3T3pzN08wbEJVVlFzUzBGQlN5eEZRVUZGTEZOQlFWTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHROUVVNMVFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEycEVMRWxCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkROVUlzU1VGQlNTeFRRVUZUTEVkQlFVY3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU03TzFGQlJUTkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFZRVU5ZTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZETVVRc1RVRkJUVHRWUVVOTUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEZGtNN08xRkJSVVFzU1VGQlNTeERRVUZETEV0QlFVc3NUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3VlVGRE0wSXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0VFFVTXhSQ3hOUVVGTk8xVkJRMHdzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTjJRenRQUVVOR08wdEJRMFk3T3pzN096czdPenRKUVZORUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVN1RVRkRPVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU5xUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRPenRSUVVVMVFpeExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVOMFFpeExRVUZMTEVOQlFVTXNWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJRenRQUVVONFFqdExRVU5HTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhCQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRMnhETzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3T3pzN08wbEJUMjVDTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRia1E3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVTdPenM3T3pzN1NVRlBka0lzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE96dE5RVVZ5UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRMUVVNM1F6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPenRGUVU5SUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEZsQlFWazdTVUZEZUVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEhRVU01UXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFTTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRIUVVNdlF5eERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhKUVVGSkxFTkJRVU03UTBGRFlqczdPenM3T3pzN1FVRlJSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVTdSVUZEZEVJc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlR0SlFVTXpRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVOdVF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN08wbEJSV3BDTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTzAxQlF6TkNMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSVHRSUVVOc1F5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRMnBDTzB0QlEwWTdPMGxCUlVRc1QwRkJUeXhQUVVGUExFTkJRVU03UjBGRGFFSTdPMFZCUlVRc1QwRkJUeXhGUVVGRkxFTkJRVU03UTBGRFdEczdPenM3T3pzN1FVRlJSQ3hUUVVGVExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVTdSVUZEYmtJc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeFpRVUZaTEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVN1NVRkRPVU1zVDBGQlR5eEpRVUZKTEVOQlFVTTdSMEZEWWpzN1JVRkZSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dERRVU5rT3p0QlFVVkVMRWxCUVVrc1kwRkJZeXhIUVVGSExIbENRVUY1UWl4RFFVRkRPenRCUVVVdlF5eFRRVUZUTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wVkJRMmhETEVsQlFVa3NTVUZCU1N4SFFVRkhPenM3T3pzN1NVRk5WQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdUVUZEZEVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPMDFCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdUVUZEY2tRc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeExRVUZMTEVWQlFVVTdVVUZEZEVZc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMDlCUTNKRkxFTkJRVU1zUTBGQlF6dExRVU5LTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPMGxCVFc1Q0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYUVJN096czdPenM3TzBsQlVVUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdE5RVU51UWl4SlFVRkpMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU5tTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzA5QlF5OUNPenROUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTFvc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdUMEZEWWl4TlFVRk5PMUZCUTB3c1NVRkJTU3hEUVVGRExESkRRVUV5UXl4RFFVRkRMRU5CUVVNN1QwRkRia1E3UzBGRFJqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhCQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYUVJN096czdPenM3TzBsQlVVUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdE5RVU51UWl4SlFVRkpMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU5hTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wOUJRMklzVFVGQlRUdFJRVU5NTEVsQlFVa3NRMEZCUXl3eVEwRkJNa01zUjBGQlJ5eGpRVUZqTEVkQlFVY3NZVUZCWVN4RFFVRkRMRU5CUVVNN1QwRkRjRVk3UzBGRFJqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNSVUZCUlRzN096czdPMGxCVFhSQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJReTlDTzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzU1VGQlNTeERRVUZETzBOQlEySTdPMEZCUlVRc1UwRkJVeXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN1JVRkRlRU1zU1VGQlNTeEpRVUZKTEVkQlFVYzdPenM3T3p0SlFVMVVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMHRCUTJ4RE8wZEJRMFlzUTBGQlF6czdSVUZGUml4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJUczdPenM3TzBsQlRYQkNMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGFFSTdPenM3T3pzN096dEpRVk5FTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGRrSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGRGJrSXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUTI1RExFdEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFBRVU5zUXl4TlFVRk5PMUZCUTB3c1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UFFVTjBRanM3VFVGRlJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOcVFqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlRzN096czdPMGxCVFhaQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMDFCUTNaQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE96dE5RVVZ5UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU51UWl4UFFVRlBMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wOUJRM1pFT3p0TlFVVkVMRTlCUVU4c1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdTMEZETlVJN1IwRkRSaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNXVUZCV1R0SlFVTXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdSMEZEWkN4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eEpRVUZKTEVOQlFVTTdRMEZEWWpzN1FVRkZSQ3hUUVVGVExFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1JVRkJSVHRGUVVONFF5eEpRVUZKTEVsQlFVa3NSMEZCUnpzN096czdPMGxCVFZRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEySTdPenM3T3pzN096dEpRVk5FTEVsQlFVa3NSVUZCUlN4VFFVRlRMRWxCUVVrc1IwRkJSenROUVVOd1FpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN08wMUJSV3BDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3VFVGRmJrWXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU03TzAxQlJYSkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFGQlEyeENMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN6dFBRVU55UWl4RFFVRkRMRU5CUVVNN08wMUJSVWdzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSVHRWUVVONFFpeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzN1UwRkRkRUlzUTBGQlF5eERRVUZETzA5QlEwb3NRMEZCUXl4RFFVRkRPMHRCUTBvN1IwRkRSaXhEUVVGRE96dEZRVVZHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRk96czdPenM3U1VGTmNrSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOb1FqczdPenM3T3pzN1NVRlJSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUTNaQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOc1JEdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NSVUZCUlRzN096czdPMGxCVFhoQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU03UzBGRGJFUTdSMEZEUml4RFFVRkRMRU5CUVVNN08wVkJSVWdzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVN096czdPenRKUVUxd1FpeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1RVRkRiRUlzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenROUVVONlFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRE96dE5RVVV2UWl4SlFVRkpMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTJ4RExFOUJRVThzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXp0UFFVTXpRanM3VFVGRlJDeFBRVUZQTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNN1MwRkRNMEk3UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBTQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNZMEZCWXl4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRkxGbEJRVms3U1VGRE4wTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wZEJRMklzUTBGQlF5eERRVUZET3p0RlFVVklMRTlCUVU4c1NVRkJTU3hEUVVGRE8wTkJRMkk3TzBGQlJVUXNVMEZCVXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdSVUZEZWtNc1NVRkJTU3hMUVVGTExFZEJRVWM3T3pzN096dEpRVTFXTEZkQlFWY3NSVUZCUlN4VFFVRlRMRmRCUVZjc1IwRkJSenROUVVOc1F5eEpRVUZKTEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6czdUVUZGY0VNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZEVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdUMEZEYUVRN1MwRkRSanM3T3pzN096czdTVUZSUkN4WlFVRlpMRVZCUVVVc1UwRkJVeXhaUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTzAxQlF6ZERMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTMEZETDBRN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZET3p0TlFVVndReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTjBReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03VDBGRE5VSTdPMDFCUlVRc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRE1VTTdSMEZEUml4RFFVRkRPenRGUVVWR0xFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkZPenM3T3pzN1NVRk5kRUlzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFOUJRVThzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE8wdEJRM1JETzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZPenM3T3pzN1NVRk5ja0lzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFOUJRVThzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wdEJRM3BETzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNZVUZCWVN4RlFVRkZPenM3T3pzN1NVRk5NMElzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFOUJRVThzUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzB0QlEzaEdPMGRCUTBZc1EwRkJReXhEUVVGRE96dEZRVVZJTEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1dVRkJXU3hGUVVGRk96czdPenM3U1VGTk1VSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenRMUVVOdVJ6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPenM3UlVGUlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4WlFVRlpPMGxCUXpGRUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTndRaXhMUVVGTExFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdSMEZEZEVJc1EwRkJReXhEUVVGRE96czdPenM3UlVGTlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3haUVVGWk8wbEJReTlDTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRIUVVOb1FpeERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhMUVVGTExFTkJRVU03UTBGRFpEczdRVUZGUkN4VFFVRlRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlR0RlFVTjZReXhKUVVGSkxFdEJRVXNzUjBGQlJ6czdPenM3T3p0SlFVOVdMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZET3p0TlFVVTFRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdUVUZEYWtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZET3p0TlFVVnVRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMHRCUXpWQ096czdPenM3T3p0SlFWRkVMRk5CUVZNc1JVRkJSU3hUUVVGVExGTkJRVk1zUjBGQlJ6dE5RVU01UWl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dExRVU5xUmpzN096czdPenM3U1VGUlJDeFhRVUZYTEVWQlFVVXNVMEZCVXl4WFFVRlhMRWRCUVVjN1RVRkRiRU1zU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03VFVGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE96dE5RVVZvUkN4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOVUxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6czdVVUZGZWtNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRTlCUVU4c1JVRkJSVHRWUVVONlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZETDBNc1EwRkJReXhEUVVGRE8wOUJRMG83UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hoUVVGaExFVkJRVVVzVTBGQlV5eGhRVUZoTEVkQlFVYzdUVUZEZEVNc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN08wMUJSWEpETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXpzN1RVRkZjRVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzVDBGQlR5eEZRVUZGTzFGQlEyaEVMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRQUVVNdlF5eERRVUZETEVOQlFVTTdTMEZEU2p0SFFVTkdMRU5CUVVNN096czdPenM3UlVGUFJpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZETTBNc1MwRkJTeXhEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzBkQlEzWkNMRU5CUVVNc1EwRkJRenM3T3pzN096dEZRVTlJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNXVUZCV1R0SlFVTXhReXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdSMEZEWml4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRmxCUVZrN1NVRkRiRU1zUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMGRCUTNKQ0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRXRCUVVzc1EwRkJRenREUVVOa096dEJRVVZFTEZOQlFWTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlF6RkRMRWxCUVVrc1RVRkJUU3hIUVVGSE96czdPMGxCU1Znc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZET3p0TlFVVm9RaXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1VVRkROVUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VDBGRE4wSTdTMEZEUmpzN096czdPenM3U1VGUlJDeFBRVUZQTEVWQlFVVXNVMEZCVXl4UFFVRlBMRWRCUVVjN1RVRkRNVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMDFCUTI1R0xFbEJRVWtzVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wMUJRM0JETEVsQlFVa3NaVUZCWlN4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUk8xVkJRMmhETEU5QlFVOHNSMEZCUnl4bFFVRmxMRU5CUVVNc1QwRkJUenRWUVVOcVF5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJRenM3TzAxQlIzUkRMRWxCUVVrc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8wMUJRemRETEVsQlFVa3NTVUZCU1N4SFFVRkhMRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU03VFVGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1RVRkRiRU1zU1VGQlNTeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3p0TlFVVTVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VVVGRGVrVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VlVGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenM3VlVGRmNrTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPenRWUVVWNFF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRMjVDT3p0UlFVVkVMRXRCUVVzc1NVRkJTU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTzFWQlEzUkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03TzFWQlJYSkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenM3VlVGRmVrTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU4yUWp0UFFVTkdPenROUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETzB0QlEyUTdPenM3T3pzN08wbEJVVVFzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNoQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1RVRkRka0lzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNUdFZRVU5zUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNUMEZCVHp0VlFVTnNReXhOUVVGTkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hEUVVGRE96czdUVUZIY2tNc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzAxQlEzaERMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzAxQlF6ZERMRWxCUVVrc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6czdUVUZGTjBNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZEVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVOb1F6czdUVUZGUkN4TFFVRkxMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJUdFJRVU0zUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFBRVU12UXpzN1RVRkZSQ3hMUVVGTExFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVWQlFVVXNSVUZCUlR0UlFVTXpReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1QwRkROMFE3UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZUVJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXpzN08wMUJSM1pDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRM0pETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVNdlF6dExRVU5HTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPMGxCVFhKQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVsQlFVa3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03UzBGRGNFWTdSMEZEUml4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmxCUVZrN1NVRkRPVUlzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGxCUTJoQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTm1MRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEhRVU5xUWl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNZMEZCWXl4RlFVRkZMRmxCUVZrN1NVRkRjRU1zU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8wMUJRelZDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRMUVVOcVFqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNXVUZCV1R0SlFVTXZRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdSMEZEYWtJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNUVUZCVFN4RFFVRkRPME5CUTJZN08wRkJSVVFzU1VGQlNTeFpRVUZaTEVkQlFVY3NXVUZCV1RzN096dEZRVWszUWl4VFFVRlRMRmxCUVZrc1IwRkJSenRKUVVOMFFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRka1lzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4WlFVRlpMRU5CUVVNc1EwRkJRenM3U1VGRmJrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03UjBGRE5VSTdPenM3T3pzN096czdPenM3UlVGaFJDeFhRVUZYTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1NVRkRla0lzUjBGQlJ5eEZRVUZGTEVsQlFVazdTVUZEVkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1RVRkRkRU1zU1VGQlNTeFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPenROUVVWNFJpeEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRSUVVOd1FpeE5RVUZOTEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRQUVVOdVFqczdUVUZGUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU4wUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenM3VVVGRmNFTXNSVUZCUlN4RFFVRkRMR2RDUVVGblFpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzA5QlEzQkZPMHRCUTBZN096czdPenM3T3pzN1IwRlZSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEV0QlFVczdTVUZEVml4TFFVRkxMRVZCUVVVc1UwRkJVeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNSVUZCUlR0TlFVTTVRaXhKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0UlFVTndRaXhOUVVGTkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UFFVTnVRanM3VFVGRlJDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVOMFF5eEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03VDBGRGNrVTdTMEZEUmpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRk5CUVZNN1NVRkRaQ3hMUVVGTExFVkJRVVVzVTBGQlV5eFBRVUZQTEVkQlFVYzdUVUZEZUVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETzB0QlEzWkNPMGRCUTBZc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRFNpeFBRVUZQTEZsQlFWa3NRMEZCUXp0RFFVTnlRaXhGUVVGRkxFTkJRVU03TzBGQlJVb3NVMEZCVXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3p0RlFVMHhReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZsQlFWa3NSVUZCUlN4RFFVRkRPenRGUVVWb1F5eEpRVUZKTEUxQlFVMHNSMEZCUnpzN096dEpRVWxZTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenROUVVOMFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1MwRkRZanM3T3pzN096czdPMGxCVTBRc1NVRkJTU3hGUVVGRkxGTkJRVk1zU1VGQlNTeEhRVUZITzAxQlEzQkNMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNSVUZCUlN4UlFVRlJMRU5CUVVNc1dVRkJXVHRSUVVNdlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wOUJRM1pDTEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzB0QlF6bENPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU01UWp0SFFVTkdMRU5CUVVNN096czdPenRGUVUxR0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmxCUVZrN1NVRkRMMElzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGxCUTJoQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SFFVTnNRaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1EwRkRaanM3UVVGRlJDeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTNSRExFbEJRVWtzWjBKQlFXZENMRWRCUVVjN1JVRkRja0lzUjBGQlJ5eEZRVUZGTEVkQlFVYzdSVUZEVWl4SFFVRkhMRVZCUVVVc1IwRkJSenRGUVVOU0xFZEJRVWNzUlVGQlJTeEhRVUZITzBOQlExUXNRMEZCUXpzN1FVRkZSaXhUUVVGVExGTkJRVk1zUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1JVRkJSVHRGUVVNM1F5eEpRVUZKTEZOQlFWTXNSMEZCUnpzN096czdPMGxCVFdRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNN1MwRkRka003T3pzN096czdPenRKUVZORUxFOUJRVThzUlVGQlJTeFRRVUZUTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVN1RVRkRha01zU1VGQlNTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdPMDFCUldoRExFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1FpeFBRVUZQTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdUMEZETTBRN08wMUJSVVFzVDBGQlR5eFBRVUZQTEVOQlFVTTdTMEZEYUVJN096czdPenM3T3p0SlFWTkVMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVTdUVUZEZWtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eExRVUZMTEZOQlFWTXNRMEZCUXp0TFFVTnFRenM3T3pzN096czdTVUZSUkN4UlFVRlJMRVZCUVVVc1UwRkJVeXhSUVVGUkxFZEJRVWM3VFVGRE5VSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGJFWTdPenM3T3pzN08wbEJVVVFzVjBGQlZ5eEZRVUZGTEZOQlFWTXNWMEZCVnl4SFFVRkhPMDFCUTJ4RExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMHRCUTNKR08wZEJRMFlzUTBGQlF6czdSVUZGUml4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFOUJRVThzUlVGQlJUczdPenM3TzBsQlRYcENMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4UFFVRlBMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGNrSTdPenM3T3pzN096dEpRVk5FTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGRrSXNTVUZCU1N4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRGVFTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU03VDBGRGRFSXNUVUZCVFR0UlFVTk1MRWxCUVVrc1EwRkJReXgzUTBGQmQwTXNRMEZCUXl4RFFVRkRPMDlCUTJoRU8wdEJRMFk3UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBTQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxGbEJRVms3U1VGRE0wTXNVMEZCVXl4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8wZEJRM3BDTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNXVUZCV1R0SlFVTTVRaXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdSMEZEYmtJc1EwRkJReXhEUVVGRE96czdPenM3TzBWQlQwZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExHTkJRV01zUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4WlFVRlpPMGxCUTJoRUxGTkJRVk1zUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SFFVTjBRaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1EwRkRiRUk3T3pzN096czdPenRCUVZORUxGTkJRVk1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVN1JVRkRMMElzVDBGQlR6czdPenM3T3p0SlFVOU1MRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVTdUVUZEYWtNc1NVRkJTU3hWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1F5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRPMDlCUTI1Q096dE5RVVZFTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q08wZEJRMFlzUTBGQlF6dERRVU5JT3pzN096czdPenM3UVVGVFJDeFRRVUZUTEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRk8wVkJReTlDTEU5QlFVODdPenM3T3pzN1NVRlBUQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZPMDFCUTJwRExFOUJRVThzVTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZEZUVRN1IwRkRSaXhEUVVGRE8wTkJRMGc3T3pzN096czdPenRCUVZORUxGTkJRVk1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVN1JVRkRhRU1zVDBGQlR6czdPenM3T3p0SlFVOU1MRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVTdUVUZEYWtNc1QwRkJUeXhUUVVGVExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJReTlETzBkQlEwWXNRMEZCUXp0RFFVTklPenM3T3pzN096czdRVUZUUkN4VFFVRlRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTzBWQlEyNURMRTlCUVU4N096czdPenM3U1VGUFRDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRk8wMUJRMnBETEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTzFGQlF5OUNMRWxCUVVrc1NVRkJTU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPenRSUVVWcVF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSVHRWUVVOc1FpeFBRVUZQTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8xTkJRMmhET3p0UlFVVkVMRTlCUVU4c1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF6dFBRVU42UWpzN1RVRkZSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dExRVU5zUWp0SFFVTkdMRU5CUVVNN1EwRkRTRHM3T3pzN096czdPMEZCVTBRc1UwRkJVeXhSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlR0RlFVTndReXhQUVVGUE96czdPenM3TzBsQlQwd3NUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU5xUXl4SlFVRkpMRWRCUVVjc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TlFVTm9ReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJRenROUVVOdVF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF6dE5RVU55UXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXpzN1RVRkZOME1zU1VGQlNTeFBRVUZQTEV0QlFVc3NVVUZCVVN4RlFVRkZPMUZCUTNoQ0xFOUJRVThzVTBGQlV5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzA5QlEycEVPenROUVVWRUxFOUJRVThzVTBGQlV5eEhRVUZITEZWQlFWVXNSMEZCUnl4UFFVRlBMRWRCUVVjc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF6dExRVU42UkR0SFFVTkdMRU5CUVVNN1EwRkRTRHM3T3pzN096czdPMEZCVTBRc1UwRkJVeXhQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN096czdPenM3TzBWQlVUTkRMRWxCUVVrc1dVRkJXU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZET3p0RlFVVXhSU3hQUVVGUE96czdPenM3TzBsQlQwd3NUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU5xUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU0xUXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMUZCUld4RExFbEJRVWtzVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRlZCUVZVc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0VlFVTXZSQ3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMU5CUTNSRkxFMUJRVTA3VlVGRFRDeEpRVUZKTEVOQlFVTXNaMFpCUVdkR0xFTkJRVU1zUTBGQlF6dFRRVU40Ump0UFFVTkdPenROUVVWRUxFOUJRVThzVTBGQlV5eERRVUZETzB0QlEyeENPMGRCUTBZc1EwRkJRenREUVVOSU96dEJRVVZFTEZOQlFWTXNVMEZCVXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlF6ZERMRWxCUVVrc1UwRkJVeXhIUVVGSE96czdPenM3TzBsQlQyUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJUdE5RVU4yUWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdUVUZGZWtRc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NVMEZCVXl4SFFVRkhMR1ZCUVdVc1EwRkJRenRMUVVNM1JqczdPenM3T3pzN1NVRlJSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZUVJc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRE9VTTdSMEZEUml4RFFVRkRPenM3T3pzN08wVkJUMFlzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1ZVRkJWU3hQUVVGUExFVkJRVVU3U1VGRGJrTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYUVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRja01zU1VGQlNTeExRVUZMTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU03TzBsQlJYaERMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0TlFVTTFSQ3hWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpPMUZCUTNSRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6czdVVUZGT1VJc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VDBGRGNrTXNRMEZCUXl4RFFVRkRPenROUVVWSUxFOUJRVThzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZETjBNN08wbEJSVVFzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wMUJRelZFTEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVms3VVVGRGRFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPenRSUVVVNVFpeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRMnhDTEVOQlFVTXNRMEZCUXpzN1RVRkZTQ3hQUVVGUExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SFFVRkhMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZEY2tRN08wbEJSVVFzVDBGQlR5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEhRVU40UXl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmxCUVZrN1NVRkRMMElzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGRCUTNCQ0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRk5CUVZNc1EwRkJRenREUVVOc1FqczdRVUZGUkN4VFFVRlRMRlZCUVZVc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPenRGUVU4NVF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wVkJSWEpDTEVsQlFVa3NWVUZCVlN4SFFVRkhPenM3T3pzN08wbEJUMllzVDBGQlR5eEZRVUZGTEZOQlFWTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSVHROUVVOc1F5eEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRE96dE5RVVU1UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xRkJRMklzVDBGQlR5eFJRVUZSTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dFBRVU01UlRzN1RVRkZSQ3hQUVVGUExGRkJRVkVzUjBGQlJ5eFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMRzFDUVVGdFFpeERRVUZETzB0QlF6RkVPenM3T3pzN096czdTVUZUUkN4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRE96dE5RVVV2Uml4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTMEZEYmtVN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NSVUZCUlN4RFFVRkRPMHRCUXk5RE96czdPenM3T3pzN1NVRlRSQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMDFCUXpsQ0xGVkJRVlVzUTBGQlF5eFpRVUZaTzFGQlEzSkNMRkZCUVZFc1JVRkJSU3hEUVVGRE8wOUJRMW9zUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1MwRkRia0k3T3pzN096czdPMGxCVVVRc1RVRkJUU3hGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzaENMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03TzAxQlJXcENMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU5hT3pzN096czdPenRKUVZGRUxFOUJRVThzUlVGQlJTeFRRVUZUTEU5QlFVOHNSMEZCUnp0TlFVTXhRaXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZET3p0TlFVVm9RaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdTMEZEV2p0SFFVTkdMRU5CUVVNN08wVkJSVVlzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVN096czdPenM3U1VGUE4wSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03TzAxQlJUbENMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJUdFJRVU51UkN4UFFVRlBMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU03VDBGRGFFTTdPMDFCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1MwRkRia003UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEZsQlFWazdTVUZETlVJc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzBkQlEyeENMRU5CUVVNc1EwRkJRenM3T3pzN096czdSVUZSU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zWTBGQll5eEZRVUZGTEZGQlFWRXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZEYkVVc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBkQlEzUkNMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1dVRkJXVHRKUVVNelFpeFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1IwRkRja0lzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeFpRVUZaTzBsQlF5OUNMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEhRVU55UWl4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eFZRVUZWTEVOQlFVTTdRMEZEYmtJN096czdPenM3T3p0QlFWTkVMRWxCUVVrc1pVRkJaU3hIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGTlVJc1NVRkJTVHRGUVVOR0xFbEJRVWtzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSU3hGUVVGRkxGTkJRVk1zUlVGQlJUdEpRVU01UXl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJRenRMUVVONFFqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0RlFVTnVSQ3hOUVVGTkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0RFFVTjJSQ3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVWQlFVVTdPMEZCUldRc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4bFFVRmxMRU5CUVVNN08wRkJSWGhETEVsQlFVa3NXVUZCV1N4SFFVRkhMRU5CUVVNc1dVRkJXU3hGUVVGRkxGZEJRVmNzUTBGQlF5eERRVUZETzBGQlF5OURMRWxCUVVrc1YwRkJWeXhIUVVGSExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMEZCUXpkRExFbEJRVWtzVlVGQlZTeEhRVUZITEVOQlFVTXNWVUZCVlN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hUUVVGVExFVkJRVVVzV1VGQldTeERRVUZETEVOQlFVTTdRVUZEZEVVc1NVRkJTU3haUVVGWkxFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNWMEZCVnl4RlFVRkZMRk5CUVZNc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6czdRVUZGZGtVc1UwRkJVeXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN096czdPenRGUVUxNlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRmxCUVZrc1JVRkJSU3hEUVVGRE96dEZRVVZvUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03UlVGRGFrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8wVkJRM0JDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJRenRGUVVOd1FpeEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN1JVRkRja0lzU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMFZCUTNCQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhIUVVGSExFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3UlVGRk5VUXNTVUZCU1N4TFFVRkxMRWRCUVVjN096czdPenRKUVUxV0xFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NSMEZCUnp0TlFVTjBRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdTMEZEZGtJN096czdPenM3T3p0SlFWTkVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdUVUZETTBJc1NVRkJTU3hEUVVGRExGRkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRhRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPenRSUVVWbUxFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzFGQlJXaERMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGFFSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOb1FpeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5xUXl4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1VVRkZha01zU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXpzN1VVRkZjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRQUVVNMVFqdExRVU5HT3pzN096czdPenRKUVZGRUxFbEJRVWtzUlVGQlJTeFRRVUZUTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1RVRkRla0lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRia0lzU1VGQlNTeGxRVUZsTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFN1dVRkRhRU1zVlVGQlZTeEhRVUZITEdWQlFXVXNRMEZCUXl4VlFVRlZPMWxCUTNaRExGVkJRVlVzUjBGQlJ5eGxRVUZsTEVOQlFVTXNWVUZCVlR0WlFVTjJReXhQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETEU5QlFVOHNRMEZCUXpzN08xRkJSM1JETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMUZCUldoRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF5OURMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1YwRkJWeXhEUVVGRE8xRkJReTlETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTI1RExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNURMRWxCUVVrc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJReTlETEVsQlFVa3NZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMUZCUlhKRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhsUVVGbExFTkJRVU1zUTBGQlF6czdVVUZGZEVRc1NVRkJTU3hSUVVGUkxFbEJRVWtzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExGVkJRVlVzUlVGQlJUdFZRVU55UkN4TFFVRkxMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03TzFWQlJYaENMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF6czdWVUZGY0VRc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMVZCUlhKRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1UwRkRNMElzVFVGQlRUdFZRVU5NTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN08xVkJSV3BDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMU5CUTJRN1QwRkRSanRMUVVOR096czdPenM3T3pzN1NVRlRSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUTNaQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1Q0xFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNN08xRkJSVGxDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZEYUVNc1NVRkJTU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3VVVGRmRFTXNTVUZCU1N4aFFVRmhMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVUZYTEVOQlFVTTdVVUZET1VNc1NVRkJTU3hSUVVGUkxFZEJRVWNzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8xRkJRM2hETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03TzFGQlJYQkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6czdVVUZGWkN4SlFVRkpMRkZCUVZFc1JVRkJSVHRWUVVOYUxFbEJRVWtzWVVGQllTeEhRVUZITEZOQlFWTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQlJUczdXVUZGTDBRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzJOQlEzSkNMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYmtRN08xbEJSVVFzU1VGQlNTeFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdGpRVU5zUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU03WVVGRGFFSTdPMWxCUlVRc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1YwRkRhRVVzVFVGQlRTeEpRVUZKTEdGQlFXRXNSMEZCUnl4RFFVRkRMRk5CUVZNc1NVRkJTU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCUlRzN1dVRkZka1VzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZPMk5CUTNKQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1JEczdXVUZGUkN4SlFVRkpMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMk5CUTJ4RExFdEJRVXNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXp0aFFVTm9RanM3V1VGRlJDeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFhRVU5vUlN4TlFVRk5PenRaUVVWTUxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1YwRkRlRUk3VTBGRFJqczdVVUZGUkN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMUZCUldwRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdPMUZCUlhSQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1QwRkRNVUk3UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hqUVVGakxFVkJRVVVzVTBGQlV5eGpRVUZqTEVkQlFVYzdUVUZEZUVNc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZET3p0TlFVVnFRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPenROUVVVNVFpeEpRVUZKTEZGQlFWRXNRMEZCUXl4alFVRmpMRVZCUVVVN1VVRkRNMElzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hMUVVGTExFVkJRVVU3VlVGRGJrVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU53UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wOUJRMkk3TzAxQlJVUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1lVRkJZU3hGUVVGRk8xRkJRekZDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUzBGQlN5eEZRVUZGTzFWQlEyNUZMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEY0VJc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFBRVU5pTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzWjBKQlFXZENMRVZCUVVVc1UwRkJVeXhuUWtGQlowSXNSMEZCUnp0TlFVTTFReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMDFCUTNKRUxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1MwRkRkRVE3T3pzN096czdPMGxCVVVRc1lVRkJZU3hGUVVGRkxGTkJRVk1zWVVGQllTeEhRVUZITzAxQlEzUkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6czdUVUZGYkVJc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEZWQlFWVXNTMEZCU3l4RlFVRkZPMUZCUTNoRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1QwRkRjRUlzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzB0QlEzWkRPenM3T3pzN096dEpRVkZFTEdWQlFXVXNSVUZCUlN4VFFVRlRMR1ZCUVdVc1IwRkJSenROUVVNeFF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUTJ4RU96czdPenM3T3p0SlFWRkVMRmxCUVZrc1JVRkJSU3hUUVVGVExGbEJRVmtzUjBGQlJ6dE5RVU53UXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU03TzAxQlJXeENMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUzBGQlN5eEZRVUZGTzFGQlF6bEVMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdUMEZEYmtJc1EwRkJReXhEUVVGRE8wdEJRMG83T3pzN096czdPMGxCVVVRc1kwRkJZeXhGUVVGRkxGTkJRVk1zWTBGQll5eEhRVUZITzAxQlEzaERMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UzBGRGFrUTdPenM3T3pzN08wbEJVVVFzVDBGQlR5eEZRVUZGTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSVHROUVVNdlFpeEpRVUZKTEZsQlFWa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUTNwRExFOUJRVThzUzBGQlN5eERRVUZETzA5QlEyUTdPMDFCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEY0VRN096czdPenM3TzBsQlVVUXNVMEZCVXl4RlFVRkZMRk5CUVZNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJUdE5RVU51UXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZET3p0TlFVVTVRaXhKUVVGSkxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlEzcERMRTlCUVU4c1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF6dFBRVU12UWpzN1RVRkZSQ3hQUVVGUExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTTdTMEZEYUVNN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wMUJSV3BDTEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03TzAxQlJTOUNMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMkk3T3pzN096czdPMGxCVVVRc1QwRkJUeXhGUVVGRkxGTkJRVk1zVDBGQlR5eEhRVUZITzAxQlF6RkNMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03TzAxQlJXaENMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdPMDFCUldoRExFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdSMEZEUml4RFFVRkRPenM3T3pzN1JVRk5SaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEdGQlFXRXNSVUZCUlN4WlFVRlpPMGxCUTI1RExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UjBGRGRFVXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZOQlFWTXNSVUZCUlN4WlFVRlpPMGxCUXk5Q0xFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8wbEJRM3BDTEV0QlFVc3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRKUVVONFFpeExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1NVRkRka0lzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMGRCUTJ4Q0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRXRCUVVzc1EwRkJRenREUVVOa096dEJRVVZFTEZOQlFWTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdSVUZOTVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXpzN1JVRkZhRU1zU1VGQlNTeE5RVUZOTEVkQlFVYzdPenM3T3p0SlFVMVlMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03UzBGRFlqczdPenM3T3pzN1NVRlJSQ3hKUVVGSkxFVkJRVVVzVTBGQlV5eEpRVUZKTEVkQlFVYzdUVUZEY0VJc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPMHRCUTJwRk96czdPenM3T3p0SlFWRkVMRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU40UWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wdEJRMnhFT3pzN096czdPenRKUVZGRUxGTkJRVk1zUlVGQlJTeFRRVUZUTEZOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVN1RVRkRia01zUzBGQlN5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMHRCUTNoQ08wZEJRMFlzUTBGQlF6czdPenM3TzBWQlRVWXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhUUVVGVExFVkJRVVVzV1VGQldUdEpRVU12UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03U1VGRGFFSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExFMUJRVTBzUTBGQlF6dERRVU5tT3p0QlFVVkVMRk5CUVZNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3T3pzN1JVRk5NME1zU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVc1EwRkJRenM3T3pzN096czdPMFZCVTJoRExFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXpzN096czdPenM3TzBWQlUzSkNMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6czdSVUZGZEVJc1NVRkJTU3hQUVVGUExFZEJRVWM3T3pzN096dEpRVTFhTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenM3T3pzN096dE5RVTkwUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenROUVVWNFJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1MwRkRZanM3T3pzN096czdTVUZSUkN4SlFVRkpMRVZCUVVVc1UwRkJVeXhKUVVGSkxFZEJRVWM3VFVGRGNFSXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzB0QlEzcEVPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUXpsRE96czdPenM3T3pzN1NVRlRSQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUXpOQ0xFdEJRVXNzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXpzN1RVRkZlRUlzU1VGQlNTeFRRVUZUTEVWQlFVVTdVVUZEWWl4TFFVRkxMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03VDBGRGVFSTdTMEZEUmpzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXpzN1RVRkZha0lzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTmlMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0VlFVTXhReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU03TzFWQlJXaERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZET3p0VlFVVTFSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFRRVU4yUXpzN1VVRkZSQ3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETzA5QlEycENPenROUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPenM3T3pzN08wbEJVVVFzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNoQ0xGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTTdPMDFCUld4Q0xFbEJRVWtzVVVGQlVTeEZRVUZGTzFGQlExb3NTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFWQlF6RkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenM3VlVGRkwwSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE4wVTdPMUZCUlVRc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dFBRVU5zUWpzN1RVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhaQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYmtJN1IwRkRSaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxGbEJRVms3U1VGRGJFTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNXVUZCV1R0SlFVTnFReXhWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpPMDFCUTNSRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0TFFVTnNRaXhEUVVGRExFTkJRVU03UjBGRFNpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZsQlFWazdTVUZETDBJc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBsQlEycENMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU5xUWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UjBGRGJFSXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzVDBGQlR5eERRVUZETzBOQlEyaENPenRCUVVWRUxFbEJRVWtzV1VGQldTeEhRVUZITEdsRFFVRnBReXhEUVVGRE8wRkJRM0pFTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWNzTmtKQlFUWkNMRU5CUVVNN08wRkJSWFJFTEZOQlFWTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdSVUZOTlVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXpzN1JVRkZhRU1zU1VGQlNTeFJRVUZSTEVkQlFVYzdPenM3T3pzN1NVRlBZaXhMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdPenM3T3pzN1RVRlBkRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6czdPenM3T3pzN1RVRlJPVVFzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRPenROUVVWdVJTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1MwRkRjRUk3T3pzN096czdPMGxCVVVRc1UwRkJVeXhGUVVGRkxGTkJRVk1zVTBGQlV5eEhRVUZITzAxQlF6bENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTjJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdUMEZEY0VNN1MwRkRSanM3T3pzN096czdTVUZSUkN4WlFVRlpMRVZCUVVVc1UwRkJVeXhaUVVGWkxFZEJRVWM3VFVGRGNFTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFBRVU4yUXp0TFFVTkdPenM3T3pzN096czdTVUZUUkN4UlFVRlJMRVZCUVVVc1UwRkJVeXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzAxQlEzQkRMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdUVUZET1VJc1NVRkJTU3hKUVVGSkxFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3VFVGRmFrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenM3VFVGRkwwTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEU5QlFVOHNSVUZCUlR0UlFVTjRReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzA5QlEzUkVMRU5CUVVNc1EwRkJRenRMUVVOS096czdPenM3T3pzN1NVRlRSQ3hYUVVGWExFVkJRVVVzVTBGQlV5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZPMDFCUXpGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dExRVU14UlRzN096czdPenM3U1VGUlJDeFhRVUZYTEVWQlFVVXNVMEZCVXl4WFFVRlhMRWRCUVVjN1RVRkRiRU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRM1pETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRQUVVOb1F6dExRVU5HT3pzN096czdPenRKUVZGRUxHTkJRV01zUlVGQlJTeFRRVUZUTEdOQlFXTXNSMEZCUnp0TlFVTjRReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1VVRkRka01zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMDlCUTJ4RE8wdEJRMFk3T3pzN096czdPenRKUVZORUxFbEJRVWtzUlVGQlJTeFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1RVRkROVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1VVRkRlRU1zVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3haUVVGWkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzA5QlF6ZEVPMHRCUTBZN096czdPenM3T3p0SlFWTkVMRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVTdUVUZEYUVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZUVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4WlFVRlpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UFFVTnNSRHRMUVVOR096czdPenM3T3pzN096dEpRVmRFTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRE0wSXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE96dE5RVVYyUWl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zWVVGQllTeERRVUZETEZsQlFWa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjJSenRIUVVOR0xFTkJRVU03TzBWQlJVWXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVU3T3pzN096dEpRVTE0UWl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNUMEZCVHl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRE8wdEJRM0JDTzBkQlEwWXNRMEZCUXl4RFFVRkRPenM3T3pzN08wVkJUMGdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1JVRkJSU3haUVVGWkxFTkJRVU1zUlVGQlJTeFpRVUZaTzBsQlEyNUVMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dEhRVU4wUWl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmxCUVZrN1NVRkRMMElzVVVGQlVTeERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMGxCUXpGQ0xGRkJRVkVzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTjRRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdSMEZEYkVJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNVVUZCVVN4RFFVRkRPME5CUTJwQ096dEJRVVZFTEZOQlFWTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdSVUZOTlVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXpzN1JVRkZhRU1zU1VGQlNTeFJRVUZSTEVkQlFVYzdPenM3T3p0SlFVMWlMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFGQlF6TkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFBRVU5pTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzU1VGQlNTeEZRVUZGTEZOQlFWTXNTVUZCU1N4SFFVRkhPMDFCUTNCQ0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTMEZETVVNN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzB0QlF5OUNPenM3T3pzN096czdTVUZUUkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTzAxQlF6TkNMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUzBGQlN5eEZRVUZGTEVWQlFVVTdVVUZEZUVJc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UFFVTjRSRHM3VFVGRlJDeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRXRCUVVzc1JVRkJSU3hGUVVGRk8xRkJRM2hDTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VDBGRGVFUTdTMEZEUmp0SFFVTkdMRU5CUVVNN096czdPenM3UlVGUFJpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZETTBNc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBkQlEyNUNMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXVHRKUVVNNVFpeFJRVUZSTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1IwRkRiRUlzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeFpRVUZaTzBsQlF5OUNMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEhRVU5zUWl4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eFJRVUZSTEVOQlFVTTdRMEZEYWtJN08wRkJSVVFzVTBGQlV5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVU3T3pzN096dEZRVTAxUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxGbEJRVmtzUlVGQlJTeERRVUZET3p0RlFVVm9ReXhKUVVGSkxGRkJRVkVzUjBGQlJ6czdPenM3TzBsQlRXSXNTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenM3VFVGRllpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRemRDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRQUVVOaU8wdEJRMFk3T3pzN096czdPenRKUVZORUxFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NSMEZCUnp0TlFVTjBRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMDFCUldwQ0xFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRNMElzU1VGQlNTeFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRk8xVkJRM2hDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1YwRkJWeXhEUVVGRExGbEJRVms3V1VGRGFFTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE96dFpRVVZpTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0WlFVVjZRaXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdWMEZEWml4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU5tTzA5QlEwWTdTMEZEUmpzN096czdPenM3U1VGUlJDeEpRVUZKTEVWQlFVVXNVMEZCVXl4SlFVRkpMRWRCUVVjN1RVRkRjRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzB0QlEyeERPenM3T3pzN096dEpRVkZFTEVsQlFVa3NSVUZCUlN4VFFVRlRMRWxCUVVrc1IwRkJSenROUVVOd1FpeEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNN08wMUJSV3hDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmxCUVZrN1VVRkRka1FzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMDlCUTJZc1EwRkJReXhEUVVGRE96dE5RVVZJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRmxCUVZrN1VVRkRkRVFzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMDlCUTJoQ0xFTkJRVU1zUTBGQlF6dExRVU5LT3pzN096czdPenRKUVZGRUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTjRRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkROMFE3UjBGRFJpeERRVUZET3p0RlFVVkdMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdPMGxCVDNaQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTTdPMDFCUlhaR0xFbEJRVWtzVVVGQlVTeEZRVUZGTzFGQlExb3NUMEZCVHl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VDBGRGVFSTdPMDFCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRMUVVOMlF6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPenRGUVU5SUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzV1VGQldUdEpRVU16UXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03UjBGRGJrSXNRMEZCUXl4RFFVRkRPenM3T3pzN096czdPMFZCVlVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZsQlFWa3NSVUZCUlN4UFFVRlBMRVZCUVVVc1UwRkJVeXhGUVVGRkxHRkJRV0VzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4WlFVRlpPMGxCUTJwR0xGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SFFVTnFRaXhEUVVGRExFTkJRVU03T3pzN096czdPMFZCVVVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4TlFVRk5MRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzV1VGQldUdEpRVU40UkN4UlFVRlJMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03UjBGRGJFSXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpPMGxCUXpsQ0xGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SFFVTnNRaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExGRkJRVkVzUTBGQlF6dERRVU5xUWpzN096czdPenM3UVVGUlJDeFRRVUZUTEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1JVRkRMMElzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1NVRkRjRUlzVDBGQlR5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1IwRkRla0lzVFVGQlRUdEpRVU5NTEVsQlFVa3NRMEZCUXl4elEwRkJjME1zUTBGQlF5eERRVUZETzBkQlF6bERPenRGUVVWRUxFOUJRVThzUlVGQlJTeERRVUZETzBOQlExZzdPMEZCUlVRc1UwRkJVeXhYUVVGWExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN096czdPenRGUVUwdlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRmxCUVZrc1JVRkJSU3hEUVVGRE96czdPenM3TzBWQlQyaERMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdPenM3T3pzN096dEZRVk01UWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPenM3T3pzN08wVkJUMjVFTEVsQlFVa3NVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdPMFZCUlhSRExFbEJRVWtzVjBGQlZ5eEhRVUZIT3pzN096czdPMGxCVDJoQ0xFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1RVRkROVUlzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4VlFVRlZMRXRCUVVzc1YwRkJWeXhGUVVGRk8xRkJRelZETEV0QlFVc3NTVUZCU1N4TFFVRkxMRWxCUVVrc1RVRkJUU3hGUVVGRk8xVkJRM2hDTEVsQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJUdFpRVU5vUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zWTBGQll5eEhRVUZITEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVU3WTBGRE4wUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRGRFSTdWMEZEUmp0VFFVTkdPMDlCUTBZN08wMUJSVVFzVDBGQlR5eFJRVUZSTEVOQlFVTTdTMEZEYWtJN1IwRkRSaXhEUVVGRE96czdPenM3UlVGTlJpeFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFRsRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSU3hSUVVGUkxFTkJRVU1zV1VGQldUdEpRVU12UXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBkQlEzQkZMRVZCUVVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5OMElzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXVHRKUVVNNVFpeE5RVUZOTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEpRVVZxUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SFFVTnVReXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdSMEZET1VJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNWMEZCVnl4RFFVRkRPME5CUTNCQ096dEJRVVZFTEVsQlFVa3NWVUZCVlN4SFFVRkhPenRGUVVWbUxFbEJRVWtzUlVGQlJTeEpRVUZKTzBWQlExWXNVMEZCVXl4RlFVRkZMRk5CUVZNN1JVRkRjRUlzVlVGQlZTeEZRVUZGTEZWQlFWVTdSVUZEZEVJc1UwRkJVeXhGUVVGRkxGTkJRVk03UlVGRGNFSXNTVUZCU1N4RlFVRkZMRWxCUVVrN1JVRkRWaXhMUVVGTExFVkJRVVVzUzBGQlN6dEZRVU5hTEVsQlFVa3NSVUZCUlN4SlFVRkpPMFZCUTFZc1NVRkJTU3hGUVVGRkxFbEJRVWs3UlVGRFZpeE5RVUZOTEVWQlFVVXNUVUZCVFR0RlFVTmtMRTFCUVUwc1JVRkJSU3hOUVVGTk8wVkJRMlFzUzBGQlN5eEZRVUZGTEV0QlFVczdSVUZEV2l4SFFVRkhMRVZCUVVVc1IwRkJSenM3TzBWQlIxSXNTMEZCU3l4RlFVRkZMRXRCUVVzN1JVRkRXaXhOUVVGTkxFVkJRVVVzVFVGQlRUdEZRVU5rTEU5QlFVOHNSVUZCUlN4UFFVRlBPMFZCUTJoQ0xGRkJRVkVzUlVGQlJTeFJRVUZSTzBWQlEyeENMRkZCUVZFc1JVRkJSU3hSUVVGUk8wVkJRMnhDTEZGQlFWRXNSVUZCUlN4UlFVRlJPMFZCUTJ4Q0xGZEJRVmNzUlVGQlJTeFhRVUZYTzBOQlEzcENMRU5CUVVNN08wRkJSVVlzU1VGQlNTeFBRVUZQTEVkQlFVY3NWVUZCVlN4TFFVRkxMRVZCUVVVN1JVRkROMElzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenM3UlVGRk1VSXNVMEZCVXl4UlFVRlJMRWRCUVVjN1NVRkRiRUlzWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVNdlFpeFBRVUZQTEhsQ1FVRjVRaXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRWxCUVVrc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTTdSMEZEZUVnN08wVkJSVVFzVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMGxCUTNKQ0xFZEJRVWNzUlVGQlJTeFBRVUZQTzBsQlExb3NTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEVsQlFVa3NWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenM3VFVGRmVFWXNUMEZCVHl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVsQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTjJTanRIUVVOR0xFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEwb3NUMEZCVHl4UlFVRlJMRU5CUVVNN1EwRkRha0lzUTBGQlF5eExRVUZMTEVOQlFVTTdPMEZEYUd0SVVqczdPenM3UVVGTFFTeFRRVUZUUXl4TFFVRkhMRU5CUVVNc1QwRkJUeXhGUVVGRk8wVkJRM0JDTEU5QlFVOHNaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdRMEZEYkVNN08wRkJSVVFzVTBGQlV5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSVHRGUVVONlFpeExRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1JVRkJSVHRKUVVOdVFpeEpRVUZKTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGJrSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUkxFVkJRVVU3VFVGRE0wSXNSMEZCUnl4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU03UzBGRGJFSTdTVUZEUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0SFFVTXhRanRGUVVORUxFOUJRVThzVDBGQlR5eERRVUZETzBOQlEyaENPenRCUVVWRUxGTkJRVk1zUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlR0RlFVTjBRaXhKUVVGSkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wVkJRM2hETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8wVkJRekZDTEU5QlFVOHNSMEZCUnl4RFFVRkRPME5CUTFvN08wRkJSVVFzU1VGQlNTeFRRVUZUTzBWQlExZ3NUMEZCVHl4UFFVRlBMRXRCUVVzc1YwRkJWenRIUVVNM1FpeFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4N1NVRkRlRUlzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4eFFrRkJjVUk3U1VGRGRrTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhyUWtGQmEwSTdTVUZEY0VNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRE96dEJRVVY2UXl4VFFVRlRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTzBWQlF5OUNMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVU3U1VGRFpDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5EUVVGelF5eERRVUZETEVOQlFVTTdSMEZEZWtRN08wVkJSVVFzVDBGQlR5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dERRVU4yUXpzN1FVRkZSQ3hUUVVGVExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVTdSVUZEZGtJc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEyeENMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEhRVU5zUWl4TlFVRk5PMGxCUTB3c1NVRkJTU3hQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzAxQlEzUkNMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUTNwRE8wZEJRMFk3UTBGRFJqczdRVUZGUkN4VFFVRlRMR0ZCUVdFc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTzBWQlEzaERMRTlCUVU4c1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlZTeExRVUZMTEVWQlFVVXNSVUZCUlN4UFFVRlBMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlR0SFFVTjZSeXhEUVVGRE8wTkJRMGc3TzBGQlJVUXNTVUZCU1N4SFFVRkhMRWRCUVVjN1JVRkRVaXhKUVVGSkxFVkJRVVVzU1VGQlNUdEZRVU5XTEU5QlFVOHNSVUZCUlR0SlFVTlFMRXRCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZGQlFWRXNXVUZCV1N4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRk8wbEJRMnhFTEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzVjBGQlZ5eEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZPMGxCUTJoRUxGTkJRVk1zUlVGQlJTeHZRa0ZCYjBJN1IwRkRhRU03UlVGRFJDeExRVUZMTEVWQlFVVTdTVUZEVEN4TFFVRkxMRVZCUVVVc1YwRkJWenRKUVVOc1FpeFJRVUZSTEVWQlFVVXNZMEZCWXp0SlFVTjRRaXhOUVVGTkxFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNSVUZCUlN4UlFVRlJMR0ZCUVdFc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJUdEpRVU53UkN4VFFVRlRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFVkJRVVVzUlVGQlJTeFJRVUZSTEdkQ1FVRm5RaXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTzBkQlF6TkVPME5CUTBZc1EwRkJRenM3T3pzN1FVRkxSaXhKUVVGSkxIRkNRVUZ4UWl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNN08wRkJSV3BFTEZOQlFWTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlR0RlFVTXZRaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJRenRGUVVOd1F5eEpRVUZKTEZOQlFWTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN1JVRkZka01zU1VGQlNTeFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8wbEJRMnBETEZsQlFWa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGRCUTNoRExFMUJRVTA3U1VGRFRDeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wZEJRekZDTzBOQlEwWTdPMEZCUlVRc1UwRkJVeXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRk8wVkJRMnhETEhGQ1FVRnhRaXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZWQlFWVTdTVUZEYmtNc1dVRkJXU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMGxCUTNaR0xFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNhMEpCUVd0Q08wZEJRemxDTEVOQlFVTTdRMEZEU0RzN1FVRkZSQ3hUUVVGVExEQkNRVUV3UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3UlVGRGVFTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUTNoQ0xHOUNRVUZ2UWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dERRVU0xUWpzN1FVRkZSQ3hKUVVGSkxGbEJRVmtzUjBGQlJ5eFRRVUZUTEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1JVRkRhRVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNN1JVRkRka0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1EwRkRjRUlzUTBGQlF6czdRVUZGUml4SlFVRkpMR3RDUVVGclFpeEhRVUZITEVWQlFVVXNUMEZCVHl4RlFVRkZMRVZCUVVVc1dVRkJXU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTTdPMEZCUlRkRUxGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4SFFVRkhMRk5CUVZNc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeFBRVUZQTEVWQlFVVTdSVUZETDBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1YwRkJWeXhGUVVGRk8wbEJRMjVFTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzBkQlF5OUNPMFZCUTBRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UlVGRGRrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzBOQlF6RkVMRU5CUVVNN08wRkJSVVlzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNSVUZCUlR0SlFVTm9SU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMFZCUlhCQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hQUVVGUExFVkJRVVU3U1VGRE5VVXNTVUZCU1N4TlFVRk5MRWxCUVVrc1QwRkJUeXhMUVVGTExFMUJRVTBzUlVGQlJUdE5RVU5vUXl4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVOaU8wbEJRMFFzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRemxFTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGRCUTJRc1EwRkJReXhEUVVGRE8wTkJRMG9zUTBGQlF6czdRVUZGUml4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zUjBGQlJ5eFRRVUZUTEZOQlFWTXNTVUZCU1R0SlFVTnlSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMFZCUlhCQ0xFdEJRVXNzU1VGQlNTeEpRVUZKTEVsQlFVa3NUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSVHRKUVVOb1F5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wZEJRM0pDTzBOQlEwWXNRMEZCUXpzN1FVRkZSaXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhIUVVGSExGbEJRVms3U1VGRGVrTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE96dEZRVVZ3UWl4UFFVRlBMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRXRCUVVzN1NVRkRja01zVlVGQlZTeEhRVUZITEVWQlFVVXNSVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8wZEJRemRFTEVOQlFVTTdRMEZEU0N4RFFVRkRPenRCUVVWR0xFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3haUVVGWkxFTkJRVU1zVTBGQlV5eEZRVUZGTEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU03TzBGQlJYUkZMRWxCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zV1VGQldTeEhRVUZITzBWQlEzcERMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUlVGQlJTeERRVUZETzBOQlEzcENMRU5CUVVNN08wRkJSVVlzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4WlFVRlpMRWRCUVVjc1UwRkJVeXhaUVVGWkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBWQlEzQkZMRWxCUVVrc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSU3hGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNUMEZCVHl4TFFVRkxMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0RlFVTjRSaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBsQlExQXNSVUZCUlN4SFFVRkhMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBsQlF5OUNMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMGRCUXpkQ08wVkJRMFFzVDBGQlR5eEZRVUZGTEVOQlFVTTdRMEZEV0N4RFFVRkRPenRCUVVWR0xGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4SFFVRkhMRk5CUVZNc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNUMEZCVHl4RlFVRkZPMFZCUTNoRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0RFFVTnlSQ3hEUVVGRE96dEJRVVZHTEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zVFVGQlRTeEZRVUZGTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRk8wVkJRelZGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdSVUZEY0VNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN08wVkJSVGxDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSVHM3U1VGRlpDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEhRVU01UkR0RFFVTkdMRU5CUVVNN08wRkJSVVlzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhUUVVGVExFbEJRVWs3UlVGRGRrUXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0RlFVTnVSU3hKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVWQlFVVXNRMEZCUXp0RFFVTjZRaXhEUVVGRE96dEJRVVZHTEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hIUVVGSExGTkJRVk1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRk8wVkJRM2hGTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdSVUZEY0VNc1NVRkJTU3hYUVVGWExFZEJRVWNzVlVGQlZTeEhRVUZITEVWQlFVVTdTVUZETDBJc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1NVRkRiRU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGRCUTJRc1EwRkJRenRGUVVOR0xFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8wTkJRMnBETEVOQlFVTTdPMEZCUlVZc1UwRkJVeXhYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTzBWQlEzcENMRWxCUVVrc1QwRkJUeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eExRVUZMTEZWQlFWVXNSVUZCUlR0SlFVTTFReXhQUVVGUExFbEJRVWtzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGRCUXpsQ0xFMUJRVTA3U1VGRFRDeEpRVUZKTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBsQlF6bERMRWRCUVVjc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGJrUXNUMEZCVHl4SFFVRkhMRU5CUVVNN1IwRkRXanREUVVOR096dEJRVVZFTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWM3UlVGRGRFSXNRMEZCUXp0RlFVTkVMRWxCUVVrN1JVRkRTaXhKUVVGSk8wVkJRMG9zYVVKQlFXbENPMFZCUTJwQ0xHMUNRVUZ0UWp0RlFVTnVRanRGUVVOQkxFdEJRVXNzYVVKQlFXbENMRXRCUVVzc1MwRkJTeXhEUVVGRExFZEJRVWNzYVVKQlFXbENMRWRCUVVjc1NVRkJTU3hEUVVGRE8wVkJRemRFTEV0QlFVc3NiVUpCUVcxQ0xFdEJRVXNzUzBGQlN5eERRVUZETEVkQlFVY3NiVUpCUVcxQ0xFZEJRVWNzUzBGQlN5eERRVUZET3p0RlFVVnNSU3hKUVVGSkxFMUJRVTBzUTBGQlF6dEZRVU5ZTEVsQlFVa3NTVUZCU1N4TFFVRkxMRXRCUVVzc1JVRkJSVHRKUVVOc1FpeE5RVUZOTEVkQlFVYzdUVUZEVUN4bFFVRmxPMDFCUTJZc2FVSkJRV2xDTzAxQlEycENMRmRCUVZjN1RVRkRXQ3hIUVVGSE8wMUJRMGdzU1VGQlNUdE5RVU5LTEUxQlFVMHNSVUZCUlN4RFFVRkRPMGRCUTFvc1RVRkJUU3hKUVVGSkxFbEJRVWtzUzBGQlN5eE5RVUZOTEVWQlFVVTdTVUZETVVJc1RVRkJUU3hIUVVGSE8wMUJRMUFzWTBGQll6dE5RVU5rTEdkQ1FVRm5RanROUVVOb1FpeFpRVUZaTzAxQlExb3NSMEZCUnp0TlFVTklMRTFCUVUwN1RVRkRUaXhQUVVGUExFVkJRVVVzUTBGQlF6dEhRVU5pTEUxQlFVMDdTVUZEVEN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHdERRVUZyUXl4RFFVRkRMRU5CUVVNN1IwRkRja1E3TzBWQlJVUXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dERRVU01UlN4RFFVRkRPenRCUVVWR0xGTkJRVk1zYlVKQlFXMUNPMFZCUXpGQ0xFTkJRVU03UlVGRFJDeEpRVUZKTzBWQlEwb3NSMEZCUnp0RlFVTklMR2xDUVVGcFFqdEZRVU5xUWl4dFFrRkJiVUk3UlVGRGJrSTdSVUZEUVN4SlFVRkpMR0ZCUVdFc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdSVUZETTBJc1NVRkJTU3hsUVVGbExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUXpkQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVOMlFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRFppeEpRVUZKTEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRGFFSXNTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEyeENMRXRCUVVzc2FVSkJRV2xDTEV0QlFVc3NTMEZCU3l4RFFVRkRMRWRCUVVjc2FVSkJRV2xDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMFZCUXpkRUxFdEJRVXNzYlVKQlFXMUNMRXRCUVVzc1MwRkJTeXhEUVVGRExFZEJRVWNzYlVKQlFXMUNMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEZRVVZzUlN4SlFVRkpMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZET3pzN1JVRkhlRUlzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03T3p0RlFVZHNRaXhKUVVGSkxFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRNVUlzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU03UjBGRGRFSTdPenRGUVVkRUxFbEJRVWtzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wbEJRMnhGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzBkQlEzQkNPenRGUVVWRUxFbEJRVWtzU1VGQlNTeEZRVUZGTzBsQlExSXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFVkJRVVVzV1VGQldTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN08wbEJSWFpFTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1JVRkJSVHROUVVOYUxFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmxCUVZrc1IwRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzB0QlEzcEVMRTFCUVUwc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEZRVUZGTzAxQlEyNUNMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZsQlFWa3NSMEZCUnl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8wdEJRek5FT3p0SlFVVkVMRWxCUVVrc2FVSkJRV2xDTEVWQlFVVTdUVUZEY2tJc01FSkJRVEJDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMnhETzBkQlEwWTdPMFZCUlVRc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3h0UWtGQmJVSXNRMEZCUXl4RlFVRkZPMGxCUXk5RExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCVnl4RlFVRkZMRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzVTBGQlV5eEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdSMEZETlVVN1EwRkRSanM3UVVGRlJDeFRRVUZUUXl4UFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8wVkJRMmhDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRMEZETjBJN08wRkJSVVFzVTBGQlV5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RlFVRkZPMFZCUTNSQ08wbEJRMFVzVDBGQlR5eERRVUZETEVWQlFVVXNSVUZCUlN4NVFrRkJlVUlzUTBGQlF6dEpRVU4wUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hGUVVGRkxEQkNRVUV3UWl4RFFVRkRPMGxCUTNaRExFOUJRVThzUTBGQlF5eEZRVUZGTEVWQlFVVXNORUpCUVRSQ0xFTkJRVU03U1VGRGVrTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1JVRkJSU3d3UWtGQk1FSXNRMEZCUXp0SlFVTjJRenREUVVOSU96dEJRVVZFTEZOQlFWTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSVHRGUVVNelFpeEpRVUZKTEUxQlFVMHNSMEZCUjBRc1MwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzBWQlF6RkNPMGxCUTBWRExFOUJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMGxCUTI1Q1FTeFBRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVONlFrRXNUMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhaUVVGWkxFTkJRVU03U1VGRE1VSkJMRTlCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zWlVGQlpTeERRVUZETzBsQlF6ZENRU3hQUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRE8wbEJRemxDTzBOQlEwZzdPMEZCUlVRc1NVRkJTU3hIUVVGSExFZEJRVWM3UlVGRFVpeFJRVUZSTzBsQlEwNHNUMEZCVHl4UlFVRlJMRXRCUVVzc1YwRkJWenRKUVVNdlFpeHJRa0ZCYTBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zWlVGQlpTeERRVUZETEV0QlFVczdSVUZEZEVRc1lVRkJZVHRKUVVOWUxFOUJRVThzVFVGQlRTeExRVUZMTEZkQlFWYzdTMEZETlVJc1kwRkJZeXhKUVVGSkxFMUJRVTA3VDBGRGRFSXNUVUZCVFN4RFFVRkRMR0ZCUVdFc1NVRkJTU3hSUVVGUkxGbEJRVmtzVFVGQlRTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMFZCUTNaRkxHbENRVUZwUWp0SlFVTm1MRTlCUVU4c1UwRkJVeXhMUVVGTExGZEJRVmNzU1VGQlNTeFRRVUZUTEVOQlFVTXNaMEpCUVdkQ08wVkJRMmhGTEZGQlFWRTdTVUZEVGl4UFFVRlBMRk5CUVZNc1MwRkJTeXhYUVVGWE8wbEJRMmhETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGSkxGTkJRVk1zUTBGQlF5eFRRVUZUTEVOQlFVTTdRMEZEYmtRc1EwRkJRenM3UVVGRlJpeEpRVUZKTEdOQlFXTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1JVRkJSVHRGUVVNdlFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8wVkJRM2hDTEVsQlFVa3NaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03TzBWQlJYSkVMRU5CUVVNc1EwRkJReXhqUVVGakxFZEJRVWNzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXp0RlFVTjJReXhEUVVGRExFTkJRVU1zWlVGQlpTeEhRVUZITEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNN1JVRkRla01zUTBGQlF5eERRVUZETEZsQlFWa3NSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRE8wVkJRM0pETEVOQlFVTXNRMEZCUXl4aFFVRmhMRWRCUVVjc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF6czdSVUZGZGtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRk96dEpRVVYyUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlR0TFFVTjZSaXhEUVVGRE8wbEJRMFlzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03UjBGRGRrTTdSVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN08wbEJSWFpETEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNSVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTzB0QlEzcEdMRU5CUVVNN1NVRkRSaXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRIUVVOMlF6czdSVUZGUkR0SlFVTkZMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTzBsQlF6TkNMRU5CUVVNc1EwRkJReXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVOQlFVTXNXVUZCV1R0SlFVTnNSVHRKUVVOQkxFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRE1VSXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zWTBGQll5eEhRVUZITEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF6dEpRVU55UkN4RFFVRkRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eGpRVUZqTEVkQlFVY3NRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVNdlF5eERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRmxCUVZrN1RVRkRPVUlzUTBGQlF6dE5RVU5FUVN4UFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU03UzBGRGVFUXNRMEZCUXp0SlFVTkdMRU5CUVVNc1EwRkJReXhqUVVGakxFZEJRVWRCTEU5QlFVczdUVUZEZEVJc1EwRkJReXhEUVVGRExFTkJRVU1zZDBKQlFYZENMRWRCUVVjc1QwRkJUeXhEUVVGRExGVkJRVlU3VTBGRE4wTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zWlVGQlpTeERRVUZETzFOQlEycERMRU5CUVVNc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXp0TFFVTjBReXhEUVVGRE8wZEJRMGdzVFVGQlRUdEpRVU5NTEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eExRVUZMTEVOQlFVTTdSMEZETlVJN08wVkJSVVE3U1VGRFJTeERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaVHRKUVVNelFpeERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRExHRkJRV0U3U1VGRGNFVTdTVUZEUVN4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUXpGQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1NVRkRlRVFzUTBGQlF5eERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZEYWtRc1EwRkJReXhEUVVGRExHZENRVUZuUWl4SFFVRkhMRmxCUVZrN1RVRkRMMElzUTBGQlF6dE5RVU5FUVN4UFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU03UzBGRE0wUXNRMEZCUXp0SlFVTkdMRU5CUVVNc1EwRkJReXhoUVVGaExFZEJRVWRCTEU5QlFVczdUVUZEY2tJc1owSkJRV2RDTzFOQlEySXNRMEZCUXl4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zWjBKQlFXZENMRU5CUVVNN1UwRkRia01zUTBGQlF5eERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1pVRkJaU3hEUVVGRE8wdEJRM2hETEVOQlFVTTdSMEZEU0N4TlFVRk5PMGxCUTB3c1EwRkJReXhEUVVGRExHZENRVUZuUWl4SFFVRkhMRXRCUVVzc1EwRkJRenRIUVVNMVFqczdSVUZGUkN4SlFVRkpMRU5CUVVNc1EwRkJReXhqUVVGakxFbEJRVWtzUTBGQlF5eERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1pVRkJaU3hGUVVGRk8wbEJRM2hFTEVOQlFVTXNRMEZCUXl4alFVRmpMRWRCUVVjc1EwRkJReXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlN4RFFVRkRPMGRCUTNKRU8wVkJRMFFzU1VGQlNTeERRVUZETEVOQlFVTXNZVUZCWVN4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhGUVVGRk8wbEJRM3BFTEVOQlFVTXNRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU03UjBGRGRFUTdPMFZCUlVRc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXpzN1JVRkZkRUlzU1VGQlNTeERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVU3U1VGRGRFSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEhRVU01UXl4TlFVRk5PMGxCUTB3c1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hEUVVGRExFTkJRVU1zWlVGQlpTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjBRaXhEUVVGRExFTkJRVU1zWTBGQll5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTnlRaXhQUVVGUExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXp0SFFVTjRRanRGUVVORUxFbEJRVWtzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhGUVVGRk8wbEJRM1JDTEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03UjBGRE9VTXNUVUZCVFR0SlFVTk1MRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVRc1EwRkJReXhEUVVGRExHZENRVUZuUWl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOMlFpeERRVUZETEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOd1FpeFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRIUVVOMlFqdERRVU5HTEVOQlFVTTdPMEZCUlVZc1UwRkJVeXhaUVVGWkxFTkJRVU1zUTBGQlF5eEZRVUZGTEZOQlFWTXNSVUZCUlR0RlFVTnNReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVU3U1VGRGFrTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0SFFVTm9SVHRGUVVORUxFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUlVGQlJUdEpRVU5xUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMGRCUTJoRk8wVkJRMFFzVDBGQlR5eFRRVUZUTEVOQlFVTTdRMEZEYkVJN08wRkJSVVFzVTBGQlV5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSVHRGUVVNM1FpeEpRVUZKTEZkQlFWY3NSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdSVUZETVVNc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXpzN1JVRkZja1FzU1VGQlNTeERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZPMGxCUTFnc1YwRkJWeXhEUVVGRExFbEJRVWs3VFVGRFpDeERRVUZETEVOQlFVTXNkMEpCUVhkQ08wMUJRekZDTEU5QlFVOHNRMEZCUXl4VlFVRlZPMDFCUTJ4Q0xFTkJRVU1zUTBGQlF5eGpRVUZqTzAxQlEyaENMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU03UjBGRGJFSXNUVUZCVFR0SlFVTk1MRmRCUVZjc1EwRkJReXhKUVVGSkxFZEJRVWNzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXp0SFFVTjJRenRGUVVORUxFbEJRVWtzUTBGQlF5eERRVUZETEhWQ1FVRjFRaXhGUVVGRk8wbEJRemRDTEZkQlFWY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExHZENRVUZuUWl4SFFVRkhMR2RDUVVGblFpeERRVUZETzBkQlF6VkVMRTFCUVUwN1NVRkRUQ3hYUVVGWExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4aFFVRmhMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdSMEZEZEVRN1JVRkRSQ3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEdOQlFXTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenM3UlVGRmJrTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzWjBKQlFXZENMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0RlFVTnVSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eHpRa0ZCYzBJc1JVRkJSVHRKUVVNMVFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVN1RVRkRXQ3hYUVVGWExFTkJRVU1zUzBGQlN6dFJRVU5tTEVOQlFVTXNRMEZCUXl4WlFVRlpPMU5CUTJJc1EwRkJReXhEUVVGRExIZENRVUYzUWl4SFFVRkhMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU03VVVGRGFrUXNRMEZCUXl4RFFVRkRMR1ZCUVdVN1VVRkRha0lzUTBGQlF5eERRVUZETEc5Q1FVRnZRaXhEUVVGRE8wdEJRekZDTEUxQlFVMDdUVUZEVEN4WFFVRlhMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVkQlFVY3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJRenRMUVVNMVJEdEhRVU5HTEUxQlFVMDdTVUZEVEN4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRFdDeFhRVUZYTEVOQlFVTXNTVUZCU1R0UlFVTmtMRU5CUVVNc1EwRkJReXgzUWtGQmQwSTdVVUZETVVJc1QwRkJUeXhEUVVGRExGVkJRVlU3VVVGRGJFSXNRMEZCUXl4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRE8xRkJRM0JDTEVOQlFVTXNRMEZCUXl4WlFVRlpPMUZCUTJRc1EwRkJReXhEUVVGRExHTkJRV003VVVGRGFFSXNRMEZCUXl4RFFVRkRMRzlDUVVGdlFpeERRVUZETzB0QlF6RkNMRTFCUVUwN1RVRkRUQ3hYUVVGWExFTkJRVU1zU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4alFVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF6dExRVU14UkR0SFFVTkdPMFZCUTBRc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN08wVkJSVzVETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hGUVVGRk8wbEJRMmhDTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZenRKUVVOMFFpeExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU1zWjBKQlFXZENPMGRCUXpsRExFTkJRVU1zUTBGQlF6dEZRVU5JTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hGUVVGRk8wbEJRMmhDTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1lVRkJZVHRKUVVOd1FpeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMR2RDUVVGblFpeEhRVUZITEVOQlFVTXNRMEZCUXl4blFrRkJaMEk3UjBGRGFFUXNRMEZCUXl4RFFVRkRPME5CUTBvN08wRkJSVVFzU1VGQlNTeFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRMRVZCUVVVN1JVRkRNVUlzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJTeFhRVUZYTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRGUVVOMFJpeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zWTBGQll5eEZRVUZGTEZkQlFWY3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJSVHRKUVVOMlJDeEpRVUZKTEZkQlFWYzdUVUZEWWl4RFFVRkRMRU5CUVVNc1MwRkJTenROUVVOUUxFMUJRVTBzUTBGQlF5eFhRVUZYTzAxQlEyeENMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zY1VKQlFYRkNMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU03U1VGREwwTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE96dEpRVVYyUkN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zU1VGQlNTeFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJRenRKUVVOeVJDeGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN08wbEJSV3hDTEVOQlFVTXNRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenRIUVVOeVFpeERRVUZETEVOQlFVTTdPMFZCUlVnc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSU3hYUVVGWExFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0RlFVTjBSaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxGZEJRVmNzUlVGQlJTeFZRVUZWTEVOQlFVTXNSVUZCUlR0SlFVTjJSQ3hKUVVGSkxGbEJRVms3VFVGRFpDeERRVUZETEVOQlFVTXNTMEZCU3p0TlFVTlFMRTFCUVUwc1EwRkJReXhYUVVGWE8wMUJRMnhDTEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkRhRVFzU1VGQlNTeFRRVUZUTEVkQlFVY3NXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJReXhqUVVGakxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPenRKUVVWNlJDeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1NVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXp0SlFVTnlSQ3hqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMGxCUld4Q0xFTkJRVU1zUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXp0SFFVTnlRaXhEUVVGRExFTkJRVU03UTBGRFNpeERRVUZET3p0QlFVVkdMRWxCUVVrc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eEZRVUZGTzBWQlF6RkNMSE5DUVVGelFpeERRVUZETEVOQlFVTXNSVUZCUlR0SlFVTjRRaXhuUWtGQlowSTdTVUZEYUVJc1kwRkJZenRKUVVOa0xFOUJRVTg3U1VGRFVDeFpRVUZaTzBsQlExb3NXVUZCV1R0SlFVTmFMR2xDUVVGcFFqdEpRVU5xUWl4WlFVRlpPMGxCUTFvc1IwRkJSenRKUVVOSUxHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1EwRkJRenRGUVVOMFFpeHpRa0ZCYzBJc1EwRkJReXhEUVVGRExFVkJRVVU3U1VGRGVFSXNhVUpCUVdsQ08wbEJRMnBDTEdWQlFXVTdTVUZEWml4UFFVRlBPMGxCUTFBc1lVRkJZVHRKUVVOaUxGbEJRVms3U1VGRFdpeHJRa0ZCYTBJN1NVRkRiRUlzVjBGQlZ6dEpRVU5ZTEVkQlFVYzdTVUZEU0N4blFrRkJaMElzUlVGQlJTeERRVUZETEVOQlFVTTdRMEZEZGtJc1EwRkJRenM3UVVGRlJpeFRRVUZUTEhOQ1FVRnpRanRGUVVNM1FpeERRVUZETzBWQlEwUXNSMEZCUnp0RlFVTklPMFZCUTBFc1NVRkJTU3hsUVVGbExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUXpkQ0xFbEJRVWtzWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVNelFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRGJrSXNTVUZCU1N4WFFVRlhMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEzcENMRWxCUVVrc1ZVRkJWU3hIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0RlFVTjRRaXhKUVVGSkxHZENRVUZuUWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEZRVU01UWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdSVUZEZGtJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUTJZc1NVRkJTU3hqUVVGakxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPenRGUVVVMVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE96dEZRVVY0UWl4SlFVRkpMR2xDUVVGcFFpeEhRVUZITEVsQlFVa3NRMEZCUXp0RlFVTTNRaXhKUVVGSkxHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVNNVFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN08wVkJSWEJDTEZOQlFWTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTzBsQlF6TkNMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU03VFVGRGFFSXNhVUpCUVdsQ0xFZEJRVWNzVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPMGxCUTJwRkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU40UWl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBsQlJXeENMRU5CUVVNc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF6dEpRVU53UWl4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03UjBGRGNFSTdPMFZCUlVRc1UwRkJVeXhqUVVGakxFZEJRVWM3U1VGRGVFSXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpOQ0xFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRka1FzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExHRkJRV0VzUlVGQlJTeFhRVUZYTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF6dEhRVU5vUlRzN1JVRkZSQ3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hEUVVGRExFVkJRVVVzVjBGQlZ5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZPMGxCUTNCRUxHbENRVUZwUWl4SFFVRkhMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEpRVU4yUXl4clFrRkJhMElzUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRPVUlzVVVGQlVUdE5RVU5PTEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTTdUMEZEY2tNc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTTdPMGxCUlhwRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFVkJRVVVzVjBGQlZ5eEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03U1VGRE4wUXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNSVUZCUlN4VFFVRlRMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03TzBsQlJYcEVMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMGxCUlhCRUxFTkJRVU1zUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUXp0SlFVTndRaXhEUVVGRExFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdSMEZEY0VJc1EwRkJReXhEUVVGRE8wTkJRMG83TzBGQlJVUXNTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFVkJRVVU3UlVGRGVrSXNTVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6czdSVUZGZUVJc1NVRkJTU3hqUVVGakxFZEJRVWNzV1VGQldTeEZRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdSVUZEZUVVc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4WlFVRlpMRVZCUVVVc1QwRkJUeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03TzBWQlJXeElMRk5CUVZNc2IwSkJRVzlDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSVHRKUVVNMVF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVTTVReXhKUVVGSkxFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdUVUZEYUVJc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRSUVVOMlFpeFBRVUZQTEV0QlFVc3NRMEZCUXp0UFFVTmtPMDFCUTBRN1VVRkRSU3hEUVVGRExGTkJRVk1zUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNN1UwRkROMElzVTBGQlV5eEpRVUZKTEVOQlFVTXNRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRExHVkJRV1VzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUTJoRk8xRkJRMEVzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTTdUMEZEY2tNN1MwRkRSanM3U1VGRlJDeEpRVUZKTEZWQlFWVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wbEJRM0JETEVsQlFVa3NUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHROUVVOb1FpeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMR2RDUVVGblFpeEZRVUZGTzFGQlEzWkNMRTlCUVU4c1MwRkJTeXhEUVVGRE8wOUJRMlE3VFVGRFJEdFJRVU5GTEVOQlFVTXNWVUZCVlN4TFFVRkxMRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF6dFRRVU01UWl4VlFVRlZMRWxCUVVrc1EwRkJReXhEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTXNZMEZCWXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGREwwUTdVVUZEUVN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJRenRQUVVOeVF6dExRVU5HTzBsQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1IwRkRZanM3UlVGRlJDeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTEZOQlFWTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJSVHRKUVVOd1JEdE5RVU5GTEVOQlFVTXNRMEZCUXl4RFFVRkRMR3RDUVVGclFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4clFrRkJhMElzUlVGQlJUdE5RVU12UXl4RFFVRkRMRU5CUVVNc1owSkJRV2RDTzAxQlEyeENPMDFCUTBFc1QwRkJUenRMUVVOU096dEpRVVZFTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRVZCUVVVN1RVRkROVU1zVDBGQlR6dExRVU5TT3p0SlFVVkVMRWxCUVVrc1lVRkJZU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTzFGQlEzUkRMRkZCUVZFc1EwRkJReXhoUVVGaE8xRkJRM1JDTEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1lVRkJZU3hEUVVGRE8wbEJRMnhETEVsQlFVa3NZVUZCWVN4RlFVRkZPMDFCUTJwQ0xFbEJRVWtzWVVGQllTeERRVUZETEU5QlFVOHNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRkRU1zWVVGQllTeEhRVUZITEdGQlFXRXNRMEZCUXl4bFFVRmxMRU5CUVVNc1lVRkJZU3hEUVVGRE8wOUJRemRFTEUxQlFVMDdPMUZCUlV3c1QwRkJUeXhoUVVGaExFTkJRVU1zVlVGQlZTeEZRVUZGTzFWQlF5OUNMR0ZCUVdFc1IwRkJSeXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEdGQlFXRXNRMEZCUXp0VFFVTjRSRHRQUVVOR08wMUJRMFFzU1VGQlNTeFZRVUZWTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVN1VVRkROMElzVDBGQlR6dFBRVU5TTzB0QlEwWTdPMGxCUlVRc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEyWXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE96dEpRVVZtTEZGQlFWRXNRMEZCUXl4RFFVRkRMRXRCUVVzN1RVRkRZaXhMUVVGTExFVkJRVVU3VVVGRFRDeEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVN1ZVRkRZaXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRPMU5CUXpGQ0xFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZPMVZCUTI1Q0xFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNN1UwRkROVUlzVFVGQlRUdFZRVU5NTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJRenRUUVVOa08xRkJRMFFzVFVGQlRUdE5RVU5TTEV0QlFVc3NSVUZCUlR0UlFVTk1MRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJUdFZRVU5pTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRE8xTkJRekZDTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRk8xVkJRMjVDTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1pVRkJaU3hEUVVGRE8xTkJRelZDTEUxQlFVMDdWVUZEVEN4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRMkk3VVVGRFJDeE5RVUZOTzAxQlExSXNTMEZCU3l4RlFVRkZPMUZCUTB3c1NVRkJTU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTzFWQlEySXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU03VTBGRGVrSXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3VlVGRGJrSXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU03VTBGRE0wSXNUVUZCVFR0VlFVTk1MRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03VTBGRFlqdFJRVU5FTEUxQlFVMDdUVUZEVWl4TFFVRkxMRVZCUVVVN1VVRkRUQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVTdWVUZEWWl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETzFOQlF6TkNMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTzFWQlEyNUNMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTTdVMEZETjBJc1RVRkJUVHRWUVVOTUxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXp0VFFVTmtPMUZCUTBRc1RVRkJUVHROUVVOU0xFdEJRVXNzUlVGQlJUdFJRVU5NTEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSVHRWUVVOa0xFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlN4RFFVRkRPMU5CUXpWQ0xFMUJRVTA3VlVGRFRDeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1pVRkJaU3hEUVVGRE8xTkJRemRDTzFGQlEwUXNUVUZCVFR0TlFVTlNMRXRCUVVzc1JVRkJSVHRSUVVOTUxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlN4RFFVRkRPMUZCUXpOQ0xFMUJRVTA3VFVGRFVpeExRVUZMTEVWQlFVVTdVVUZEVEN4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zWlVGQlpTeERRVUZETzFGQlF6VkNMRTFCUVUwN1RVRkRVaXhMUVVGTExFVkJRVVU3VVVGRFRDeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJRenRSUVVONlFpeE5RVUZOTzAxQlExSXNTMEZCU3l4RlFVRkZPMUZCUTB3c1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTXhRaXhOUVVGTk8wMUJRMUk3VVVGRFJTeFBRVUZQTzB0QlExWTdPMGxCUlVRc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEdWQlFXVXNTVUZCU1N4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8wMUJRemxETEU5QlFVODdTMEZEVWp0SlFVTkVMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVsQlFVa3NUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHROUVVNNVF5eFBRVUZQTzB0QlExSTdPMGxCUlVRc1QwRkJUeXhEUVVGRExGTkJRVk1zU1VGQlNTeE5RVUZOTEVOQlFVTTdTVUZETlVJc1QwRkJUeXhEUVVGRExGVkJRVlVzU1VGQlNTeE5RVUZOTEVOQlFVTTdTVUZETjBJc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0SlFVVnNRaXhKUVVGSkxHOUNRVUZ2UWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlJUdE5RVU40UXl4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03UzBGRGNFSTdSMEZEUml4RFFVRkRMRU5CUVVNN1EwRkRTaXhEUVVGRE96dEJRVVZHTEVsQlFVa3NTMEZCU3l4SFFVRkhMRk5CUVZNc1EwRkJReXhGUVVGRk8wVkJRM1JDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03TzBWQlJYaENMRk5CUVZNc2IwSkJRVzlDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSVHRKUVVNMVF5eEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJRM0pFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzQkRMRWxCUVVrc1VVRkJVVHROUVVOV0xHZENRVUZuUWl4SFFVRkhMRTlCUVU4c1EwRkJReXhaUVVGWkxFdEJRVXNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXp0SlFVTnVSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWVUZCVlN4TFFVRkxMRU5CUVVNc1EwRkJRenRKUVVOMFF5eEpRVUZKTEU5QlFVODdUVUZEVkN4UFFVRlBMRU5CUVVNc1ZVRkJWU3hIUVVGSExFOUJRVThzUTBGQlF5eFhRVUZYTEV0QlFVc3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJRenM3U1VGRmJrVXNTVUZCU1N4VFFVRlRMRU5CUVVNN096dEpRVWRrTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRk8wMUJRM1pETEZOQlFWTXNSMEZCUnl4TFFVRkxMRWxCUVVrc1VVRkJVU3hEUVVGRE8wdEJReTlDTEUxQlFVMDdUVUZEVEN4VFFVRlRMRWRCUVVjc1RVRkJUU3hKUVVGSkxFOUJRVThzUTBGQlF6dExRVU12UWpzN1NVRkZSQ3hQUVVGUExGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGRCUTNoRU96dEZRVVZFTEZOQlFWTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTzBsQlF6VkNMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEZEVJc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJRenM3U1VGRk0wSXNTVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhYUVVGWExFbEJRVWtzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4RlFVRkZPenROUVVWc1JTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdUVUZEYUVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUXpWQ096dEpRVVZFTEVsQlFVa3NRMEZCUXl4RFFVRkRMRk5CUVZNc1NVRkJTU3hEUVVGRExFTkJRVU1zVTBGQlV5eExRVUZMTEVOQlFVTXNSVUZCUlRzN1RVRkZjRU1zVFVGQlRTeEpRVUZKTEVWQlFVVXNRMEZCUXp0TlFVTmlMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU03UzBGRFpEczdTVUZGUkN4SlFVRkpMRTFCUVUwc1MwRkJTeXhOUVVGTkxFbEJRVWtzVFVGQlRTeExRVUZMTEUxQlFVMHNiVUpCUVcxQ096dE5RVVV6UkN4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8wMUJRMWdzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNN1MwRkRka0k3TzBsQlJVUXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRk96dE5RVVZrTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzB0QlF6TkNPMGxCUTBRc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0SFFVTjZRanM3UlVGRlJDeFRRVUZUTEhWQ1FVRjFRaXhEUVVGRExFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZPenRKUVVWMlJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hQUVVGUExFTkJRVU1zWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZPMDFCUXpGRUxFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPMGxCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1RVRkROMElzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEWkRzN1NVRkZSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTTdPMGxCUlhCQ0xFOUJRVThzVFVGQlRTeEpRVUZKTEUxQlFVMHNTMEZCU3l4UFFVRlBMRVZCUVVVN1RVRkRia01zU1VGQlNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMUZCUTNCRUxFOUJRVThzU1VGQlNTeERRVUZETzA5QlEySTdPMDFCUlVRc1NVRkJTU3hMUVVGTExFZEJRVWRFTEV0QlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenROUVVONFFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zU1VGQlNUdFJRVU53UlN4RlFVRkZPMDlCUTBnc1EwRkJRenM3TzAxQlIwWXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzFGQlEyNURMRWxCUVVrc1dVRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF5eFpRVUZaTEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJRenRSUVVNM1JDeEpRVUZKTEZsQlFWa3NSMEZCUnl4RFFVRkRMRVZCUVVVN1ZVRkRjRUk3V1VGRFJTeEZRVUZGTEUxQlFVMHNRMEZCUXl4VFFVRlRMRXRCUVVzc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEZGtNc1JVRkJSU3hOUVVGTkxFTkJRVU1zVTBGQlV5eExRVUZMTEZsQlFWa3NTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRMnhFTzFsQlEwRXNUMEZCVHl4SlFVRkpMRU5CUVVNN1YwRkRZanRUUVVOR08xRkJRMFFzU1VGQlNTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRMRmRCUVZjc1IwRkJSeXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlF6VkVMRWxCUVVrc1lVRkJZU3hIUVVGSExFTkJRVU1zUlVGQlJUdFZRVU55UWp0WlFVTkZMRVZCUVVVc1RVRkJUU3hEUVVGRExGVkJRVlVzUzBGQlN5eERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVONFF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4VlFVRlZMRXRCUVVzc1lVRkJZU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZEY0VRN1dVRkRRU3hQUVVGUExFbEJRVWtzUTBGQlF6dFhRVU5pTzFOQlEwWTdUMEZEUmpzN1RVRkZSQ3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXp0TFFVTTFRanM3U1VGRlJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0SFFVTmtPenRGUVVWRUxGTkJRVk1zYVVKQlFXbENMRU5CUVVNc1EwRkJReXhGUVVGRk8wbEJRelZDTEVsQlFVa3NSMEZCUnl4SFFVRkhMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXk5Q0xFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOd1FpeEpRVUZKTEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBsQlJYQkNMRWxCUVVrc2RVSkJRWFZDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVTdUVUZEY2tRc1QwRkJUenRMUVVOU096dEpRVVZFTEVsQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVNeFFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNSVUZCUlRzN08wMUJSMmhETEU5QlFVOHNRMEZCUXl4VFFVRlRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRPMDFCUTNCRUxFOUJRVThzUTBGQlF5eFZRVUZWTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETzB0QlEzUkVMRTFCUVUwc1NVRkJTU3hEUVVGRExFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zWjBKQlFXZENMRVZCUVVVN096dE5RVWR3UkN4SlFVRkpMRTFCUVUwc1JVRkJSVHRSUVVOV0xFOUJRVThzUTBGQlF5eFRRVUZUTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETzA5QlEzSkVMRTFCUVUwN1VVRkRUQ3hQUVVGUExFTkJRVU1zVTBGQlV5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF6dFBRVU55UkR0TlFVTkVMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFTkJRVU03UzBGRGRFSXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNSVUZCUlRzN08wMUJSM0JFTEVsQlFVa3NUVUZCVFN4RlFVRkZPMUZCUTFZc1QwRkJUeXhEUVVGRExGVkJRVlVzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03VDBGRGRFUXNUVUZCVFR0UlFVTk1MRTlCUVU4c1EwRkJReXhWUVVGVkxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wOUJRM1JFTzAxQlEwUXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRMUVVOMFFqczdTVUZGUkN4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBsQlJXeENMR0ZCUVdFc1IwRkJSeXhoUVVGaExFbEJRVWtzYjBKQlFXOUNMRU5CUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzUkZMRWxCUVVrc1lVRkJZU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlR0TlFVTXZRaXhEUVVGRExFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdUVUZEY0VJc1EwRkJReXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzB0QlEzQkNPMGRCUTBZN08wVkJSVVFzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4UFFVRlBMRXRCUVVzc1YwRkJWeXhGUVVGRk8wbEJRM3BETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dEhRVU51UkN4TlFVRk5MRWxCUVVrc1QwRkJUeXhOUVVGTkxFTkJRVU1zV1VGQldTeExRVUZMTEZkQlFWY3NSVUZCUlR0SlFVTnlSQ3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1dVRkJXU3hGUVVGRkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNN1IwRkRlRVE3UTBGRFJpeERRVUZET3p0QlFVVkdMRWxCUVVrc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF5eEZRVUZGTzBWQlEzUkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzBsQlEyaEVMRTlCUVU4N1IwRkRVanM3UlVGRlJDeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE96dEZRVVY0UWl4VFFVRlRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBsQlEzSkRMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJRemxETEVsQlFVa3NWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU03U1VGRGNFTXNTVUZCU1N4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhKUVVGSkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEpRVVZzUXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhWUVVGVkxFVkJRVVU3T3p0TlFVY3pRanRSUVVORkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4VFFVRlRMRXRCUVVzc1EwRkJReXhEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlR0VFFVTXZSQ3hOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRMMEk3TzFGQlJVRXNUMEZCVHl4TlFVRk5MRU5CUVVNc1QwRkJUeXhMUVVGTExFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU03VDBGRE0wUTdTMEZEUml4TlFVRk5MRWxCUVVrc1ZVRkJWU3hIUVVGSExGVkJRVlVzUlVGQlJUczdPMDFCUjJ4RE8xRkJRMFVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRlZCUVZVc1MwRkJTeXhEUVVGRExFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNRMEZCUXl4alFVRmpPMU5CUXpsRUxFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NWVUZCVlN4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVOb1F6dFJRVU5CTEU5QlFVOHNTVUZCU1N4RFFVRkRPMDlCUTJJN1MwRkRSanM3U1VGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SFFVTmlPenRGUVVWRUxGTkJRVk1zWTBGQll5eERRVUZETEZkQlFWY3NSVUZCUlN4WFFVRlhMRVZCUVVVN1NVRkRhRVFzVDBGQlR5eERRVUZETEZOQlFWTXNTVUZCU1N4WFFVRlhMRU5CUVVNN1NVRkRha01zVDBGQlR5eERRVUZETEZWQlFWVXNTVUZCU1N4WFFVRlhMRU5CUVVNN08wbEJSV3hETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRIUVVOdVFqczdSVUZGUkN4SlFVRkpMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03UlVGRGNrSXNTVUZCU1N4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE8wVkJRMnhDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRGUVVObUxFbEJRVWtzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1JVRkZkRUlzVTBGQlV5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZPMGxCUTI1Q0xFbEJRVWtzUTBGQlF5eERRVUZETEdGQlFXRXNSVUZCUlR0TlFVTnVRaXhQUVVGUExFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRNMElzVFVGQlRUczdUVUZGVEN4UFFVRlBMRU5CUVVNc1EwRkJRenRMUVVOV08wZEJRMFk3TzBWQlJVUXNVMEZCVXl4WlFVRlpMRU5CUVVNc1EwRkJReXhGUVVGRk8wbEJRM1pDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ5eExRVUZMTEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhMUVVGTExFTkJRVU1zUlVGQlJUdE5RVU12UkN4UFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOa08wbEJRMFFzU1VGQlNTeERRVUZETEVOQlFVTXNZVUZCWVN4SlFVRkpMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0TlFVTnVSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pTzBsQlEwUTdUVUZEUlN4RFFVRkRMRU5CUVVNc1YwRkJWenROUVVOaUxFTkJRVU1zUTBGQlF5eFhRVUZYTEV0QlFVc3NUMEZCVHp0TlFVTjZRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eExRVUZMTEVOQlFVTXNRMEZCUXl4dlFrRkJiMEk3VFVGRGVFTTdUVUZEUVN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVOaU8wbEJRMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdSMEZEWkRzN1JVRkZSQ3hUUVVGVExGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVTdTVUZEY2tJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0TlFVTndRaXhQUVVGUE8wdEJRMUk3TzBsQlJVUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0SlFVVjRRaXhYUVVGWExFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN1NVRkRhRU1zVjBGQlZ5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRE96dEpRVVZvUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXpzN1NVRkZha01zU1VGQlNTeFZRVUZWTEV0QlFVc3NTVUZCU1N4RlFVRkZPMDFCUTNaQ0xHRkJRV0VzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0TFFVTXpRanRIUVVOR096dEZRVVZFTEZOQlFWTXNkVUpCUVhWQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVN1NVRkRka1FzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVU3VFVGRE4wSXNUMEZCVHl4TFFVRkxMRU5CUVVNN1MwRkRaRHM3U1VGRlJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN08wbEJSWEJDTEU5QlFVOHNUVUZCVFN4SlFVRkpMRTFCUVUwc1MwRkJTeXhQUVVGUExFVkJRVVU3VFVGRGJrTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xRkJRM0JFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMDlCUTJJN08wMUJSVVFzU1VGQlNTeExRVUZMTEVkQlFVZEJMRXRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dE5RVU40UWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRk5CUVZNc1JVRkJSU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNTVUZCU1R0UlFVTndSU3hGUVVGRk8wOUJRMGdzUTBGQlF6czdPMDFCUjBZc1NVRkJTU3hSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZPMUZCUTI1RExFbEJRVWtzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4WlFVRlpMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF6dFJRVU0zUkN4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExFVkJRVVU3VlVGRGNFSTdXVUZEUlN4RlFVRkZMRTFCUVUwc1EwRkJReXhUUVVGVExFdEJRVXNzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRka01zUlVGQlJTeE5RVUZOTEVOQlFVTXNVMEZCVXl4TFFVRkxMRmxCUVZrc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzFsQlEyeEVPMWxCUTBFc1QwRkJUeXhKUVVGSkxFTkJRVU03VjBGRFlqdFRRVU5HTzFGQlEwUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1RVRkJUU3hEUVVGRExGVkJRVlVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUXpORUxFbEJRVWtzWVVGQllTeEhRVUZITEVOQlFVTXNSVUZCUlR0VlFVTnlRanRaUVVORkxFVkJRVVVzVFVGQlRTeERRVUZETEZWQlFWVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU40UXl4RlFVRkZMRTFCUVUwc1EwRkJReXhWUVVGVkxFdEJRVXNzWVVGQllTeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRjRVE3V1VGRFFTeFBRVUZQTEVsQlFVa3NRMEZCUXp0WFFVTmlPMU5CUTBZN1QwRkRSanM3VFVGRlJDeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJRenRMUVVNMVFqczdTVUZGUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRIUVVOa096dEZRVVZFTEZOQlFWTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRKUVVOd1FpeEpRVUZKTEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHROUVVOdVFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzAxQlJYaENMRWxCUVVrc1lVRkJZU3hIUVVGSExFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXpzN1RVRkZMMFFzU1VGQlNTeFhRVUZYTEVkQlFVY3NZVUZCWVN4RFFVRkRMRXRCUVVzc1IwRkJSeXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETzAxQlF6RkVMRWxCUVVrc1YwRkJWeXhIUVVGSExHRkJRV0VzUTBGQlF5eExRVUZMTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJRenM3VFVGRk1VUXNTVUZCU1N4MVFrRkJkVUlzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1JVRkJSU3hYUVVGWExFTkJRVU1zUlVGQlJUdFJRVU12UkN4UFFVRlBPMDlCUTFJN08wMUJSVVFzWTBGQll5eERRVUZETEZkQlFWY3NSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenROUVVONlF5eFhRVUZYTEVkQlFVY3NZVUZCWVN4RFFVRkRPenROUVVVMVFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZET3p0TlFVVjJReXhKUVVGSkxFOUJRVThzUjBGQlJ5eFhRVUZYTEVkQlFVY3NVMEZCVXl4RFFVRkRPMDFCUTNSRExFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNSVUZCUlR0UlFVTm1MRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzVjBGQlZ5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTm9ReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEZkQlFWY3NSMEZCUnl4UFFVRlBMRU5CUVVNN1VVRkRhRU1zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXp0UFFVTjZRanM3VFVGRlJDeEpRVUZKTEdGQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVU3VVVGRE0wTXNRMEZCUXl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8wOUJRM0JDTzB0QlEwWTdSMEZEUmp0RlFVTkVMRk5CUVZNc1VVRkJVU3hIUVVGSE8wbEJRMnhDTEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhYUVVGWExFVkJRVVU3VFVGRE1VSXNZVUZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8wMUJRekZDTEZWQlFWVXNSMEZCUnl4WFFVRlhMRU5CUVVNc1YwRkJWenRSUVVOc1F5eEpRVUZKTEVOQlFVTXNRMEZCUXl4aFFVRmhMRVZCUVVVN1ZVRkRia0lzWVVGQllTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMVZCUXpGQ0xFOUJRVTg3VTBGRFVqczdVVUZGUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1ZVRkRlRUlzWVVGQllTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMVZCUXpGQ0xFOUJRVTg3VTBGRFVqczdVVUZGUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFVkJRVVU3VlVGRGVFUXNZVUZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8xVkJRekZDTEU5QlFVODdVMEZEVWpzN1VVRkZSQ3hqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXpzN1VVRkZNME1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNN1VVRkRaaXhMUVVGTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXp0UFFVTm9RaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzB0QlExSTdSMEZEUmpzN1JVRkZSQ3hKUVVGSkxFZEJRVWNzUTBGQlF5eGhRVUZoTEVWQlFVVTdTVUZEY2tJc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNWMEZCVnl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJRemxETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1IwRkROME1zVFVGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJUdEpRVU5vUXl4SlFVRkpMRTFCUVUwc1EwRkJReXhaUVVGWkxFVkJRVVU3VFVGRGRrSXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEdGQlFXRXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenROUVVOcVJDeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzWVVGQllTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPMDFCUTJoRUxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hYUVVGWExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdTMEZET1VNc1RVRkJUU3hKUVVGSkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVWQlFVVTdUVUZEYUVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMR1ZCUVdVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dE5RVU51UkN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCWlN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wMUJRMnhFTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeGhRVUZoTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1MwRkRhRVE3UjBGRFJqdERRVU5HTEVOQlFVTTdPMEZCUlVZc1NVRkJTU3hsUVVGbExFZEJRVWNzV1VGQldTeEZRVUZGTEZGQlFWRTdSVUZETVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEZsQlFWa3NSVUZCUlN4VlFVRlZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF6dEZRVU53UlN4clFrRkJhMElzUlVGQlJTeEpRVUZKTzBWQlEzaENMR3RDUVVGclFpeEZRVUZGTEVsQlFVazdSVUZEZUVJc2EwSkJRV3RDTEVWQlFVVXNTVUZCU1R0RlFVTjRRaXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMFZCUTNSQ0xHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1JVRkRkRUlzWlVGQlpTeEZRVUZGTEV0QlFVczdSVUZEZEVJc1pVRkJaU3hGUVVGRkxFdEJRVXM3UlVGRGRFSXNWMEZCVnl4RlFVRkZMRWxCUVVrN1JVRkRha0lzWjBKQlFXZENMRVZCUVVVc1MwRkJTenRGUVVOMlFpeG5Ra0ZCWjBJc1JVRkJSU3hKUVVGSk8wVkJRM1JDTEZWQlFWVXNSVUZCUlN4RFFVRkRPME5CUTJRc1JVRkJSU3hGUVVGRkxFTkJRVU03TzBGQlJVNHNTVUZCU1N4UlFVRlJMRWRCUVVjN1JVRkRZaXhaUVVGWkxFVkJRVVVzVTBGQlV6dEZRVU4yUWl4WlFVRlpMRVZCUVVVc1UwRkJVenRGUVVOMlFpeFJRVUZSTEVWQlFVVXNVVUZCVVR0RlFVTnNRaXhMUVVGTExFVkJRVVVzUzBGQlN6dEZRVU5hTEV0QlFVc3NSVUZCUlN4TFFVRkxPME5CUTJJc1EwRkJRenM3UVVGRlJpeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExGTkJRVk1zWjBKQlFXZENMRU5CUVVNc1QwRkJUeXhGUVVGRkxGbEJRVmtzUlVGQlJUdEZRVU4wUlN4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU03UlVGRGJFSXNTMEZCU3l4WlFVRlpMRXRCUVVzc1MwRkJTeXhEUVVGRExFZEJRVWNzV1VGQldTeEhRVUZITEVWQlFVVXNRMEZCUXpzN1JVRkZha1FzU1VGQlNTeFBRVUZQTEU5QlFVOHNTMEZCU3l4UlFVRlJMRVZCUVVVN1NVRkRMMElzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UjBGRE0wTTdPMFZCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVN1NVRkRha01zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4M1JFRkJkMFFzUTBGQlF5eERRVUZETzBkQlF6TkZPenRGUVVWRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRPenRGUVVWMlFpeFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMFZCUldoRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NaVUZCWlN4RlFVRkZMRU5CUVVNN1JVRkRiRU1zUzBGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVN1NVRkROVUlzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdSMEZETVVNN08wVkJSVVFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1JVRkRNMElzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1JVRkROVUlzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1JVRkRla0lzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNN08wVkJSVEZDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRmxCUVZrc1JVRkJSU3hQUVVGUExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMFZCUXpORkxFbEJRVWtzU1VGQlNTeEhRVUZITEZsQlFWa3NSVUZCUlN4UFFVRlBMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZET3p0RlFVVTNSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZIUVN4TFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVTBGQlV5eExRVUZMTEV0QlFVc3NRMEZCUXp0RlFVTTVReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1EwRkJReXhaUVVGWk8wbEJRMjVETEVsQlFVa3NhMEpCUVd0Q0xFZEJRVWNzVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXp0SlFVTTFReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEYkVJc1QwRkJUeXhEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjRRaXhOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRhRU1zVDBGQlR5eERRVUZETEZWQlFWVXNSMEZCUnl4clFrRkJhMElzUTBGQlF6dEpRVU40UXl4UFFVRlBMRTFCUVUwc1EwRkJRenRIUVVObUxFZEJRVWNzUTBGQlF6dEZRVU5NTEVsQlFVa3NRMEZCUXl4M1FrRkJkMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ08wMUJRMnBFTEU5QlFVOHNRMEZCUXl4WFFVRlhMRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmM3VFVGRGVrTXNRMEZCUXl4RFFVRkRPMFZCUTA0c1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEZsQlFWa3NSVUZCUlN4RFFVRkRPMFZCUTJoRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NUMEZCVHl4RFFVRkRMR0ZCUVdFc1NVRkJTU3hSUVVGUkxFTkJRVU03TzBWQlJYWkVMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdSVUZEYWtRc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1JVRkRla01zU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVNNVF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdSVUZEYWtRc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wVkJRelZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wVkJRMnBFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wVkJReTlETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSVUZETjBJc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSVUZETlVJc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eEpRVUZKTEVOQlFVTTdSVUZETTBJc1NVRkJTU3hWUVVGVkxFZEJRVWRCTEV0QlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03UlVGRE1VTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEhRVUZITEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBWQlEzaEVMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhGUVVGRk8wbEJRMmhETEVsQlFVa3NRMEZCUXl4MVFrRkJkVUlzUjBGQlJ5eExRVUZMTEVOQlFVTTdTVUZEY2tNc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlIwTXNUMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEhRVU0xUXl4TlFVRk5PMGxCUTB3c1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRIUVVOeVF6dEZRVU5FTEVsQlFVa3NRMEZCUXl4blFrRkJaMEk3U1VGRGJrSkJMRTlCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zWlVGQlpTeERRVUZETEVkQlFVZEJMRTlCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRenM3UlVGRmVrVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRGUVVNdlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ08wbEJRMjVDUVN4UFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eEhRVUZIUVN4UFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzBWQlF5OUVMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UlVGRE1VTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03UlVGRGRrSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03TzBWQlJYWkNMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdSVUZEYWtRc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1JVRkRla01zU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVNNVF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdSVUZEYWtRc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFpRVUZaTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wVkJRelZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wVkJRMnBFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8wVkJReTlETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSVUZETjBJc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVNM1FpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVNeFFpeEpRVUZKTEZWQlFWVXNSMEZCUjBRc1MwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0RlFVTXhReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBWQlEzUkVMRWxCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlR0SlFVTXZRaXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRM0JETEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVkRExFOUJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1IwRkRPVU1zVFVGQlRUdEpRVU5NTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSMEZEY0VNN1JVRkRSQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dEZRVU0xUlN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTzBsQlEyNUNRU3hQUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhRU3hQUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03UlVGRGVrVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRGUVVNdlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ08wbEJRM0JDUVN4UFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZIUVN4UFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBWQlF5OUVMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UlVGRE1VTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU03UlVGRGVFSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03TzBWQlJYWkNMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWM3U1VGRFdDeERRVUZETzAxQlEwTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1NVRkJTU3hEUVVGRE8xVkJRMjVDTEU5QlFVODdWVUZEVUN4UFFVRlBMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNN1dVRkRNMFFzUzBGQlN6dFpRVU5NTEVsQlFVazdTVUZEV2l4RFFVRkRPMDFCUTBNc1QwRkJUeXhEUVVGRExGTkJRVk1zU1VGQlNTeERRVUZETzFWQlEyeENMRTlCUVU4N1ZVRkRVQ3hQUVVGUExFTkJRVU1zVTBGQlV5eEpRVUZKTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1U3V1VGRE5VUXNTMEZCU3p0WlFVTk1MRWxCUVVrN1IwRkRZaXhEUVVGRE96dEZRVVZHTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE96dEZRVVZ3UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4WFFVRlhMRVZCUVVVc1JVRkJSU3hQUVVGUExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6czdSVUZGYWtjc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEZRVU51UkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTTdSVUZEZWtNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1JVRkRja1lzWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPME5CUTNSQ0xFTkJRVU03TzBGQlJVWXNaMEpCUVdkQ0xFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4VFFVRlRMRTFCUVUwc1NVRkJTVHRGUVVOeVJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRKUVVOcVFpeFBRVUZQTzBkQlExSTdPenRGUVVkRUxFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zWjBKQlFXZENPMDFCUTJwRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ6dE5RVU51UkN4RFFVRkRMRU5CUVVNN096dEZRVWRPTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1JVRkRMME1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0RlFVTXZReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENPMGxCUTI1Q1FTeFBRVUZMTEVOQlFVTkVMRXRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXpGRFF5eFBRVUZMTEVOQlFVTkVMRXRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1JVRkRPVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRanRKUVVOd1FrTXNUMEZCU3l4RFFVRkRSQ3hMUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRenRKUVVONlEwTXNUMEZCU3l4RFFVRkRSQ3hMUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96czdSVUZITDBNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEZRVU01UXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE96dEZRVVU1UXl4alFVRmpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03TzBWQlJYSkNMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0RlFVTXZReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN08wVkJSV2hFTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1JVRkRNVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0RFFVTXpReXhEUVVGRE96dEJRVVZHTEdkQ1FVRm5RaXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVkQlFVY3NVMEZCVXl4UlFVRlJMRVZCUVVVc1EwRkJReXhGUVVGRk8wVkJRekZFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wbEJRMnBDTEU5QlFVODdSMEZEVWpzN1JVRkZSQ3hqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdSVUZEY2tJc2FVSkJRV2xDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03UlVGRE5VVXNhVUpCUVdsQ08wbEJRMllzU1VGQlNUdEpRVU5LTEUxQlFVMDdTVUZEVGl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXp0SFFVTTVReXhEUVVGRE96dEZRVVZHTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wVkJRM2hFTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTTdRMEZETDBNc1EwRkJRenM3UVVGRlJpeG5Ra0ZCWjBJc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eEhRVUZITEZOQlFWTXNUMEZCVHl4SlFVRkpPMFZCUTNaRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMGxCUTJwQ0xFOUJRVTg3UjBGRFVqczdSVUZGUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBWQlEzWkNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdSVUZEZUVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0RlFVTjRRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMFZCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN1JVRkROVUlzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPenM3UlVGSGRrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03UlVGRGNFSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03UlVGRGRrSXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03UlVGRGRrSXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU03UlVGRE0wSXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhKUVVGSkxFTkJRVU03TzBWQlJUTkNMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzBOQlEzUkNMRU5CUVVNN08wRkJSVVlzWjBKQlFXZENMRU5CUVVNc1UwRkJVeXhEUVVGRExHVkJRV1VzUjBGQlJ5eFRRVUZUTEdWQlFXVXNTVUZCU1R0RlFVTjJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk03UzBGRE5VTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJRenRMUVVOV0xFMUJRVTBzUTBGQlF5eFZRVUZWTEVsQlFVa3NSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOb1JTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkRaQ3hEUVVGRE96dEJRemQ0UTBZc1NVRkJUVVVzYjBKQlFXOUNReXhsUVVGbFJDeHBRa0ZCZWtNN1FVRkRRU3hKUVVGTlJTeHRRa0ZCYlVKRUxHVkJRV1ZETEdkQ1FVRjRRenRCUVVOQkxFbEJRVTFETEZGQlFWRkRMRk5CUVZORExHRkJRVlFzUTBGQmRVSXNVVUZCZGtJc1EwRkJaRHRCUVVOQkxFbEJRVTFETEdkQ1FVRm5Ra1lzVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhwUWtGQmRrSXNRMEZCZEVJN1FVRkRRU3hKUVVGTlJTeFhRVUZYU0N4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEdGQlFYWkNMRU5CUVdwQ08wRkJRMEVzU1VGQlRVY3NZVUZCWVVvc1UwRkJVME1zWVVGQlZDeERRVUYxUWl4bFFVRjJRaXhEUVVGdVFqdEJRVU5CTEVsQlFVMUpMR3RDUVVGclFrd3NVMEZCVTAwc1owSkJRVlFzUTBGQk1FSXNiMEpCUVRGQ0xFTkJRWGhDTzBGQlEwRXNTVUZCVFVNc2EwSkJRV3RDVUN4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEhGQ1FVRjJRaXhEUVVGNFFqdEJRVU5CTEVsQlFVMVBMR3RDUVVGclFsSXNVMEZCVTAwc1owSkJRVlFzUTBGQk1FSXNiVUpCUVRGQ0xFTkJRWGhDTzBGQlEwRXNTVUZCVFVjc1YwRkJWMVFzVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXh0UWtGQmRrSXNRMEZCYWtJN1FVRkRRU3hKUVVGTlV5eGxRVUZsVml4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEd0Q1FVRjJRaXhEUVVGeVFqczdRVUZGUVN4SlFVRk5WU3hYUVVGWFdDeFRRVUZUVFN4blFrRkJWQ3hEUVVFd1FpeG5Ra0ZCTVVJc1EwRkJha0k3TzBGQlJVRXNVMEZCVTAwc1YwRkJWQ3hIUVVGMVFqdFJRVU5tUXl4VFFVRk9MRU5CUVdkQ1F5eE5RVUZvUWl4RFFVRjFRaXhYUVVGMlFqczdZVUZGVnl4WlFVRk5PMkZCUTA1RUxGTkJRVlFzUTBGQmJVSkRMRTFCUVc1Q0xFTkJRVEJDTEZkQlFURkNPMGRCUkVZc1JVRkZSeXhIUVVaSU8yRkJSMWNzV1VGQlRUdGxRVU5LUkN4VFFVRllMRU5CUVhGQ1F5eE5RVUZ5UWl4RFFVRTBRaXhYUVVFMVFqdEhRVVJHTEVWQlJVY3NSMEZHU0RzN1lVRkpWeXhaUVVGTk8yOUNRVU5ETEVOQlFXaENMRVZCUVcxQ1JDeFRRVUZ1UWl4RFFVRTJRa01zVFVGQk4wSXNRMEZCYjBNc1YwRkJjRU03UjBGRVJpeEZRVVZITEVkQlJrZzdZVUZIVnl4WlFVRk5PMjlDUVVORExFTkJRV2hDTEVWQlFXMUNSQ3hUUVVGdVFpeERRVUUyUWtNc1RVRkJOMElzUTBGQmIwTXNWMEZCY0VNN1IwRkVSaXhGUVVWSExFZEJSa2c3WVVGSFZ5eFpRVUZOTzI5Q1FVTkRSQ3hUUVVGb1FpeERRVUV3UWtNc1RVRkJNVUlzUTBGQmFVTXNWMEZCYWtNN1IwRkVSaXhGUVVWSExFZEJSa2c3TzJ0Q1FVbG5Ra01zVDBGQmFFSXNRMEZCZDBJc1ZVRkJRME1zUlVGQlJDeEZRVUZMUXl4RFFVRk1MRVZCUVZjN1pVRkRkRUlzV1VGQlRUdFRRVU5hU2l4VFFVRklMRU5CUVdGRExFMUJRV0lzUTBGQmIwSXNWMEZCY0VJN1MwRkVSaXhGUVVWSExFMUJRVTFITEVsQlFVa3NSMEZHWWp0SFFVUkdPenRoUVUxWExGbEJRVTA3WVVGRFRrb3NVMEZCVkN4RFFVRnRRa01zVFVGQmJrSXNRMEZCTUVJc1YwRkJNVUk3UjBGRVJpeEZRVVZITEVkQlJrZzdPMkZCU1Zjc1dVRkJUVHRwUWtGRFJrUXNVMEZCWWl4RFFVRjFRa01zVFVGQmRrSXNRMEZCT0VJc1YwRkJPVUk3UjBGRVJpeEZRVVZITEVkQlJrZzdPMDFCU1VsbUxFMUJRVTFqTEZOQlFVNHNRMEZCWjBKTExGRkJRV2hDTEVOQlFYbENMRmRCUVhwQ0xFTkJRVW9zUlVGQk1rTTdjMEpCUTNaQ2FFSXNZVUZCYkVJN1IwRkVSaXhOUVVWUE8zRkNRVU5aUVN4aFFVRnFRanM3T3p0QlFVbEtMRk5CUVZOcFFpeGhRVUZVTEVOQlFYVkNReXhMUVVGMlFpeEZRVUU0UWp0TlFVTjRRa0VzVFVGQlRVTXNUVUZCVGl4TFFVRnBRblJDTEV0QlFYSkNMRVZCUVRSQ096czdPenRCUVVzNVFsa3NVMEZCVTBrc1QwRkJWQ3hEUVVGcFFpeFZRVUZEUXl4RlFVRkVMRVZCUVZFN1MwRkRjRUpOTEdkQ1FVRklMRU5CUVc5Q0xFOUJRWEJDTEVWQlFUWkNMRlZCUVVORExFTkJRVVFzUlVGQlR6dE5RVU5vUTBNc1kwRkJSanM3UjBGRVJqdERRVVJHT3p0QlFVOUJReXhQUVVGUFNDeG5Ra0ZCVUN4RFFVRjNRaXhQUVVGNFFpeEZRVUZwUTBnc1lVRkJha003T3pzN096czdRVUZQUVN4SlFVRk5UeXhaUVVGWk1VSXNVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeHRRa0ZCZGtJc1EwRkJiRUk3UVVGRFFTeEpRVUZOTUVJc1MwRkJTeXhKUVVGSlF5eG5Ra0ZCU2l4RFFVRnhRa1lzVTBGQmNrSXNRMEZCV0RzN1FVRkZRVEZDTEZOQlFWTk5MR2RDUVVGVUxFTkJRVEJDTEdsQ1FVRXhRaXhGUVVFMlExTXNUMEZCTjBNc1EwRkJjVVFzVlVGQlEwTXNSVUZCUkN4RlFVRlJPMHRCUTNoRVRTeG5Ra0ZCU0N4RFFVRnZRaXhQUVVGd1FpeEZRVUUyUWl4VlFVRkRReXhEUVVGRUxFVkJRVTg3VFVGRGFFTkRMR05CUVVZN1IwRkVSanREUVVSR096dEJRVTFCTEVsQlFVMUxMRmxCUVZrM1FpeFRRVUZUUXl4aFFVRlVMRU5CUVhWQ0xHRkJRWFpDTEVOQlFXeENPMEZCUTBFc1NVRkJUVFpDTEc5Q1FVRnZRamxDTEZOQlFWTkRMR0ZCUVZRc1EwRkJkVUlzYzBKQlFYWkNMRU5CUVRGQ08wRkJRMEVzU1VGQlRUaENMR1ZCUVdVdlFpeFRRVUZUVFN4blFrRkJWQ3hEUVVFd1FpeHhRa0ZCTVVJc1EwRkJja0k3TzBGQlJVRXNVMEZCVXpCQ0xHVkJRVlFzUjBGQk1rSTdXVUZEWm01Q0xGTkJRVllzUTBGQmIwSkRMRTFCUVhCQ0xFTkJRVEpDTEZkQlFUTkNPMDFCUTBsbExGVkJRVlZvUWl4VFFVRldMRU5CUVc5Q1N5eFJRVUZ3UWl4RFFVRTJRaXhYUVVFM1FpeERRVUZLTEVWQlFTdERPM05DUVVNelFsa3NhVUpCUVd4Q08wZEJSRVlzVFVGRlR6dHhRa0ZEV1VFc2FVSkJRV3BDT3pzN08wRkJTVW9zVTBGQlUwY3NhVUpCUVZRc1EwRkJNa0ppTEV0QlFUTkNMRVZCUVd0RE8wMUJRelZDUVN4TlFVRk5ReXhOUVVGT0xFdEJRV2xDVVN4VFFVRnlRaXhGUVVGblF6czdPenM3UVVGTGJFTkZMR0ZCUVdGb1FpeFBRVUZpTEVOQlFYRkNMRlZCUVVORExFVkJRVVFzUlVGQlVUdExRVU40UWswc1owSkJRVWdzUTBGQmIwSXNUMEZCY0VJc1JVRkJOa0lzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMDFCUTJoRFF5eGpRVUZHT3p0SFFVUkdPME5CUkVZN08wRkJUMEZETEU5QlFVOUlMR2RDUVVGUUxFTkJRWGRDTEU5QlFYaENMRVZCUVdsRFZ5eHBRa0ZCYWtNN096czdJbjA9In0=
