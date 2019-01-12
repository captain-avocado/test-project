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

var y = 0;

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
    y = window.scrollY;
    document.querySelector('.wrapper').style.top = '-' + y + 'px';
    document.querySelector('.wrapper').style.position = 'fixed';
    disableBodyScroll(targetElement);
  } else {
    document.querySelector('.wrapper').style.top = '';
    document.querySelector('.wrapper').style.position = '';
    window.scrollTo(0, y);
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
  perView: 10
}).mount();

document.querySelectorAll('.tag-list__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL2JvZHktc2Nyb2xsLWxvY2svbGliL2JvZHlTY3JvbGxMb2NrLm1pbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZ2xpZGVqcy9nbGlkZS9kaXN0L2dsaWRlLmVzbS5qcyIsIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJleHBvcnRzXCJdLHQpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpdChleHBvcnRzKTtlbHNle3ZhciBvPXt9O3QobyksZS5ib2R5U2Nyb2xsTG9jaz1vfX0odGhpcyxmdW5jdGlvbihleHBvcnRzKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLG89QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKW9bdF09ZVt0XTtyZXR1cm4gb31yZXR1cm4gQXJyYXkuZnJvbShlKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD0hMTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT17Z2V0IHBhc3NpdmUoKXtsPSEwfX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSl9dmFyIGQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSYmL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pLGM9W10sdT0hMSxhPS0xLHM9dm9pZCAwLHY9dm9pZCAwLGY9ZnVuY3Rpb24odCl7cmV0dXJuIGMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4hKCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmV8fCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUodCkpfSl9LG09ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8d2luZG93LmV2ZW50O3JldHVybiEhZih0LnRhcmdldCl8fCgxPHQudG91Y2hlcy5sZW5ndGh8fCh0LnByZXZlbnREZWZhdWx0JiZ0LnByZXZlbnREZWZhdWx0KCksITEpKX0sbz1mdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2b2lkIDAhPT12JiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dix2PXZvaWQgMCksdm9pZCAwIT09cyYmKGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9cyxzPXZvaWQgMCl9KX07ZXhwb3J0cy5kaXNhYmxlQm9keVNjcm9sbD1mdW5jdGlvbihpLGUpe2lmKGQpe2lmKCFpKXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJkaXNhYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGRpc2FibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLlwiKTtpZihpJiYhYy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQ9PT1pfSkpe3ZhciB0PXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbdF0pLGkub250b3VjaHN0YXJ0PWZ1bmN0aW9uKGUpezE9PT1lLnRhcmdldFRvdWNoZXMubGVuZ3RoJiYoYT1lLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSl9LGkub250b3VjaG1vdmU9ZnVuY3Rpb24oZSl7dmFyIHQsbyxuLHI7MT09PWUudGFyZ2V0VG91Y2hlcy5sZW5ndGgmJihvPWkscj0odD1lKS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFktYSwhZih0LnRhcmdldCkmJihvJiYwPT09by5zY3JvbGxUb3AmJjA8cj9tKHQpOihuPW8pJiZuLnNjcm9sbEhlaWdodC1uLnNjcm9sbFRvcDw9bi5jbGllbnRIZWlnaHQmJnI8MD9tKHQpOnQuc3RvcFByb3BhZ2F0aW9uKCkpKX0sdXx8KGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMCl9fWVsc2V7bj1lLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT12KXt2YXIgZT0hIW4mJiEwPT09bi5yZXNlcnZlU2Nyb2xsQmFyR2FwLHQ9d2luZG93LmlubmVyV2lkdGgtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO2UmJjA8dCYmKHY9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQsZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dCtcInB4XCIpfXZvaWQgMD09PXMmJihzPWRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3csZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiKX0pO3ZhciBvPXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbb10pfXZhciBufSxleHBvcnRzLmNsZWFyQWxsQm9keVNjcm9sbExvY2tzPWZ1bmN0aW9uKCl7ZD8oYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UudGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQ9bnVsbCxlLnRhcmdldEVsZW1lbnQub250b3VjaG1vdmU9bnVsbH0pLHUmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbSxsP3twYXNzaXZlOiExfTp2b2lkIDApLHU9ITEpLGM9W10sYT0tMSk6KG8oKSxjPVtdKX0sZXhwb3J0cy5lbmFibGVCb2R5U2Nyb2xsPWZ1bmN0aW9uKHQpe2lmKGQpe2lmKCF0KXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJlbmFibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZW5hYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy5cIik7dC5vbnRvdWNoc3RhcnQ9bnVsbCx0Lm9udG91Y2htb3ZlPW51bGwsYz1jLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS50YXJnZXRFbGVtZW50IT09dH0pLHUmJjA9PT1jLmxlbmd0aCYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMSl9ZWxzZSAxPT09Yy5sZW5ndGgmJmNbMF0udGFyZ2V0RWxlbWVudD09PXQ/KG8oKSxjPVtdKTpjPWMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQhPT10fSl9fSk7XG4iLCIvKiFcbiAqIEdsaWRlLmpzIHYzLjIuNFxuICogKGMpIDIwMTMtMjAxOCBKxJlkcnplaiBDaGHFgnViZWsgPGplZHJ6ZWouY2hhbHViZWtAZ21haWwuY29tPiAoaHR0cDovL2plZHJ6ZWpjaGFsdWJlay5jb20vKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIG1vdmVtZW50LlxuICAgKlxuICAgKiBBdmFpbGFibGUgdHlwZXM6XG4gICAqIGBzbGlkZXJgIC0gUmV3aW5kcyBzbGlkZXIgdG8gdGhlIHN0YXJ0L2VuZCB3aGVuIGl0IHJlYWNoZXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAqIGBjYXJvdXNlbGAgLSBDaGFuZ2VzIHNsaWRlcyB3aXRob3V0IHN0YXJ0aW5nIG92ZXIgd2hlbiBpdCByZWFjaGVzIHRoZSBmaXJzdCBvciBsYXN0IHNsaWRlLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdHlwZTogJ3NsaWRlcicsXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGF0IHNwZWNpZmljIHNsaWRlIG51bWJlciBkZWZpbmVkIHdpdGggemVyby1iYXNlZCBpbmRleC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHN0YXJ0QXQ6IDAsXG5cbiAgLyoqXG4gICAqIEEgbnVtYmVyIG9mIHNsaWRlcyB2aXNpYmxlIG9uIHRoZSBzaW5nbGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwZXJWaWV3OiAxLFxuXG4gIC8qKlxuICAgKiBGb2N1cyBjdXJyZW50bHkgYWN0aXZlIHNsaWRlIGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoZSB0cmFjay5cbiAgICpcbiAgICogQXZhaWxhYmxlIGlucHV0czpcbiAgICogYGNlbnRlcmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgYWx3YXlzIGZvY3VzZWQgYXQgdGhlIGNlbnRlciBvZiBhIHRyYWNrLlxuICAgKiBgMCwxLDIsMy4uLmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgZm9jdXNlZCBvbiB0aGUgc3BlY2lmaWVkIHplcm8tYmFzZWQgaW5kZXguXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfVxuICAgKi9cbiAgZm9jdXNBdDogMCxcblxuICAvKipcbiAgICogQSBzaXplIG9mIHRoZSBnYXAgYWRkZWQgYmV0d2VlbiBzbGlkZXMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnYXA6IDEwLFxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2xpZGVzIGFmdGVyIGEgc3BlY2lmaWVkIGludGVydmFsLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYXV0b3BsYXkuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheSBvbiBtb3VzZW92ZXIgZXZlbnQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgaG92ZXJwYXVzZTogdHJ1ZSxcblxuICAvKipcbiAgICogQWxsb3cgZm9yIGNoYW5naW5nIHNsaWRlcyB3aXRoIGxlZnQgYW5kIHJpZ2h0IGtleWJvYXJkIGFycm93cy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBrZXlib2FyZDogdHJ1ZSxcblxuICAvKipcbiAgICogU3RvcCBydW5uaW5nIGBwZXJWaWV3YCBudW1iZXIgb2Ygc2xpZGVzIGZyb20gdGhlIGVuZC4gVXNlIHRoaXNcbiAgICogb3B0aW9uIGlmIHlvdSBkb24ndCB3YW50IHRvIGhhdmUgYW4gZW1wdHkgc3BhY2UgYWZ0ZXJcbiAgICogYSBzbGlkZXIuIFdvcmtzIG9ubHkgd2l0aCBgc2xpZGVyYCB0eXBlIGFuZCBhXG4gICAqIG5vbi1jZW50ZXJlZCBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBib3VuZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIE1pbmltYWwgc3dpcGUgZGlzdGFuY2UgbmVlZGVkIHRvIGNoYW5nZSB0aGUgc2xpZGUuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhIHN3aXBpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIHN3aXBlVGhyZXNob2xkOiA4MCxcblxuICAvKipcbiAgICogTWluaW1hbCBtb3VzZSBkcmFnIGRpc3RhbmNlIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHNsaWRlLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYSBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgZHJhZ1RocmVzaG9sZDogMTIwLFxuXG4gIC8qKlxuICAgKiBBIG1heGltdW0gbnVtYmVyIG9mIHNsaWRlcyB0byB3aGljaCBtb3ZlbWVudCB3aWxsIGJlIG1hZGUgb24gc3dpcGluZyBvciBkcmFnZ2luZy4gVXNlIGBmYWxzZWAgZm9yIHVubGltaXRlZC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgcGVyVG91Y2g6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBNb3ZpbmcgZGlzdGFuY2UgcmF0aW8gb2YgdGhlIHNsaWRlcyBvbiBhIHN3aXBpbmcgYW5kIGRyYWdnaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgdG91Y2hSYXRpbzogMC41LFxuXG4gIC8qKlxuICAgKiBBbmdsZSByZXF1aXJlZCB0byBhY3RpdmF0ZSBzbGlkZXMgbW92aW5nIG9uIHN3aXBpbmcgb3IgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICB0b3VjaEFuZ2xlOiA0NSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBhbmltYXRpb25EdXJhdGlvbjogNDAwLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgbG9vcGluZyB0aGUgYHNsaWRlcmAgdHlwZS4gU2xpZGVyIHdpbGwgcmV3aW5kIHRvIHRoZSBmaXJzdC9sYXN0IHNsaWRlIHdoZW4gaXQncyBhdCB0aGUgc3RhcnQvZW5kLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHJld2luZDogdHJ1ZSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIHJld2luZGluZyBhbmltYXRpb24gb2YgdGhlIGBzbGlkZXJgIHR5cGUgaW4gbWlsbGlzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgcmV3aW5kRHVyYXRpb246IDgwMCxcblxuICAvKipcbiAgICogRWFzaW5nIGZ1bmN0aW9uIGZvciB0aGUgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2N1YmljLWJlemllciguMTY1LCAuODQwLCAuNDQwLCAxKScsXG5cbiAgLyoqXG4gICAqIFRocm90dGxlIGNvc3RseSBldmVudHMgYXQgbW9zdCBvbmNlIHBlciBldmVyeSB3YWl0IG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRocm90dGxlOiAxMCxcblxuICAvKipcbiAgICogTW92aW5nIGRpcmVjdGlvbiBtb2RlLlxuICAgKlxuICAgKiBBdmFpbGFibGUgaW5wdXRzOlxuICAgKiAtICdsdHInIC0gbGVmdCB0byByaWdodCBtb3ZlbWVudCxcbiAgICogLSAncnRsJyAtIHJpZ2h0IHRvIGxlZnQgbW92ZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBkaXJlY3Rpb246ICdsdHInLFxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdmFsdWUgb2YgdGhlIG5leHQgYW5kIHByZXZpb3VzIHZpZXdwb3J0cyB3aGljaFxuICAgKiBoYXZlIHRvIHBlZWsgaW4gdGhlIGN1cnJlbnQgdmlldy4gQWNjZXB0cyBudW1iZXIgYW5kXG4gICAqIHBpeGVscyBhcyBhIHN0cmluZy4gTGVmdCBhbmQgcmlnaHQgcGVla2luZyBjYW4gYmVcbiAgICogc2V0IHVwIHNlcGFyYXRlbHkgd2l0aCBhIGRpcmVjdGlvbnMgb2JqZWN0LlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogYDEwMGAgLSBQZWVrIDEwMHB4IG9uIHRoZSBib3RoIHNpZGVzLlxuICAgKiB7IGJlZm9yZTogMTAwLCBhZnRlcjogNTAgfWAgLSBQZWVrIDEwMHB4IG9uIHRoZSBsZWZ0IHNpZGUgYW5kIDUwcHggb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH1cbiAgICovXG4gIHBlZWs6IDAsXG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2Ygb3B0aW9ucyBhcHBsaWVkIGF0IHNwZWNpZmllZCBtZWRpYSBicmVha3BvaW50cy5cbiAgICogRm9yIGV4YW1wbGU6IGRpc3BsYXkgdHdvIHNsaWRlcyBwZXIgdmlldyB1bmRlciA4MDBweC5cbiAgICogYHtcbiAgICogICAnODAwcHgnOiB7XG4gICAqICAgICBwZXJWaWV3OiAyXG4gICAqICAgfVxuICAgKiB9YFxuICAgKi9cbiAgYnJlYWtwb2ludHM6IHt9LFxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGludGVybmFsbHkgdXNlZCBIVE1MIGNsYXNzZXMuXG4gICAqXG4gICAqIEB0b2RvIFJlZmFjdG9yIGBzbGlkZXJgIGFuZCBgY2Fyb3VzZWxgIHByb3BlcnRpZXMgdG8gc2luZ2xlIGB0eXBlOiB7IHNsaWRlcjogJycsIGNhcm91c2VsOiAnJyB9YCBvYmplY3RcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNsYXNzZXM6IHtcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIGx0cjogJ2dsaWRlLS1sdHInLFxuICAgICAgcnRsOiAnZ2xpZGUtLXJ0bCdcbiAgICB9LFxuICAgIHNsaWRlcjogJ2dsaWRlLS1zbGlkZXInLFxuICAgIGNhcm91c2VsOiAnZ2xpZGUtLWNhcm91c2VsJyxcbiAgICBzd2lwZWFibGU6ICdnbGlkZS0tc3dpcGVhYmxlJyxcbiAgICBkcmFnZ2luZzogJ2dsaWRlLS1kcmFnZ2luZycsXG4gICAgY2xvbmVTbGlkZTogJ2dsaWRlX19zbGlkZS0tY2xvbmUnLFxuICAgIGFjdGl2ZU5hdjogJ2dsaWRlX19idWxsZXQtLWFjdGl2ZScsXG4gICAgYWN0aXZlU2xpZGU6ICdnbGlkZV9fc2xpZGUtLWFjdGl2ZScsXG4gICAgZGlzYWJsZWRBcnJvdzogJ2dsaWRlX19hcnJvdy0tZGlzYWJsZWQnXG4gIH1cbn07XG5cbi8qKlxuICogT3V0cHV0cyB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGJvd3NlciBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICBjb25zb2xlLmVycm9yKFwiW0dsaWRlIHdhcm5dOiBcIiArIG1zZyk7XG59XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHZhbHVlIGVudGVyZWQgYXMgbnVtYmVyXG4gKiBvciBzdHJpbmcgdG8gaW50ZWdlciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHRvSW50KHZhbHVlKSB7XG4gIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdmFsdWUgZW50ZXJlZCBhcyBudW1iZXJcbiAqIG9yIHN0cmluZyB0byBmbGF0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHsqfSAgIHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuXG4gIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBzcGVjaWZpZWQgY29sbGVjdGlvbiBvZiBleHRlbnNpb25zLlxuICogRWFjaCBleHRlbnNpb24gcmVjZWl2ZXMgYWNjZXNzIHRvIGluc3RhbmNlIG9mIGdsaWRlIGFuZCByZXN0IG9mIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGdsaWRlXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9uc1xuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1vdW50KGdsaWRlLCBleHRlbnNpb25zLCBldmVudHMpIHtcbiAgdmFyIGNvbXBvbmVudHMgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIGV4dGVuc2lvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihleHRlbnNpb25zW25hbWVdKSkge1xuICAgICAgY29tcG9uZW50c1tuYW1lXSA9IGV4dGVuc2lvbnNbbmFtZV0oZ2xpZGUsIGNvbXBvbmVudHMsIGV2ZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ0V4dGVuc2lvbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29tcG9uZW50c1tfbmFtZV0ubW91bnQpKSB7XG4gICAgICBjb21wb25lbnRzW19uYW1lXS5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIERlZmluZXMgZ2V0dGVyIGFuZCBzZXR0ZXIgcHJvcGVydHkgb24gdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgICAgICBPYmplY3Qgd2hlcmUgcHJvcGVydHkgaGFzIHRvIGJlIGRlZmluZWQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgICAgICAgIE5hbWUgb2YgdGhlIGRlZmluZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmluaXRpb24gIEdldCBhbmQgc2V0IGRlZmluaXRpb25zIGZvciB0aGUgcHJvcGVydHkuXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiBkZWZpbmUob2JqLCBwcm9wLCBkZWZpbml0aW9uKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlZmluaXRpb24pO1xufVxuXG4vKipcbiAqIFNvcnRzIGFwaGFiZXRpY2FsbHkgb2JqZWN0IGtleXMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc29ydEtleXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGspIHtcbiAgICByW2tdID0gb2JqW2tdO1xuXG4gICAgcmV0dXJuIHJba10sIHI7XG4gIH0sIHt9KTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgcGFzc2VkIHNldHRpbmdzIG9iamVjdCB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNldHRpbmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhkZWZhdWx0cywgc2V0dGluZ3MpIHtcbiAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcblxuICAvLyBgT2JqZWN0LmFzc2lnbmAgZG8gbm90IGRlZXBseSBtZXJnZSBvYmplY3RzLCBzbyB3ZVxuICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5IGZvciBldmVyeSBuZXN0ZWQgb2JqZWN0XG4gIC8vIGluIG9wdGlvbnMuIEFsdGhvdWdoIGl0IGRvZXMgbm90IGxvb2sgc21hcnQsXG4gIC8vIGl0J3Mgc21hbGxlciBhbmQgZmFzdGVyIHRoYW4gc29tZSBmYW5jeVxuICAvLyBtZXJnaW5nIGRlZXAtbWVyZ2UgYWxnb3JpdGhtIHNjcmlwdC5cbiAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KCdjbGFzc2VzJykpIHtcbiAgICBvcHRpb25zLmNsYXNzZXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcywgc2V0dGluZ3MuY2xhc3Nlcyk7XG5cbiAgICBpZiAoc2V0dGluZ3MuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSgnZGlyZWN0aW9uJykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5kaXJlY3Rpb24gPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcy5kaXJlY3Rpb24sIHNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ2JyZWFrcG9pbnRzJykpIHtcbiAgICBvcHRpb25zLmJyZWFrcG9pbnRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRzLmJyZWFrcG9pbnRzLCBzZXR0aW5ncy5icmVha3BvaW50cyk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxudmFyIEV2ZW50c0J1cyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50QnVzIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudHNCdXMoKSB7XG4gICAgdmFyIGV2ZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRzQnVzKTtcblxuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuaG9wID0gZXZlbnRzLmhhc093blByb3BlcnR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbGlzdGVuZXIgdG8gdGhlIHNwZWNpZmVkIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuXG4gIGNyZWF0ZUNsYXNzKEV2ZW50c0J1cywgW3tcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMub24oZXZlbnRbaV0sIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZXZlbnQncyBvYmplY3QgaWYgbm90IHlldCBjcmVhdGVkXG4gICAgICBpZiAoIXRoaXMuaG9wLmNhbGwodGhpcy5ldmVudHMsIGV2ZW50KSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBoYW5kbGVyIHRvIHF1ZXVlXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChoYW5kbGVyKSAtIDE7XG5cbiAgICAgIC8vIFByb3ZpZGUgaGFuZGxlIGJhY2sgZm9yIHJlbW92YWwgb2YgZXZlbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF1baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3Igc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBjb250ZXh0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2VtaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZW1pdChldmVudFtpXSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgZXhpc3QsIG9yIHRoZXJlJ3Mgbm8gaGFuZGxlcnMgaW4gcXVldWUsIGp1c3QgbGVhdmVcbiAgICAgIGlmICghdGhpcy5ob3AuY2FsbCh0aGlzLmV2ZW50cywgZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3ljbGUgdGhyb3VnaCBldmVudHMgcXVldWUsIGZpcmUhXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtKGNvbnRleHQgfHwge30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudHNCdXM7XG59KCk7XG5cbnZhciBHbGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0IGdsaWRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzZWxlY3RvclxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xyXG4gICAqL1xuICBmdW5jdGlvbiBHbGlkZShzZWxlY3Rvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBHbGlkZSk7XG5cbiAgICB0aGlzLl9jID0ge307XG4gICAgdGhpcy5fdCA9IFtdO1xuICAgIHRoaXMuX2UgPSBuZXcgRXZlbnRzQnVzKCk7XG5cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLnNldHRpbmdzLnN0YXJ0QXQ7XG4gIH1cblxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBnbGlkZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIENvbGxlY3Rpb24gb2YgZXh0ZW5zaW9ucyB0byBpbml0aWFsaXplLlxyXG4gICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoR2xpZGUsIFt7XG4gICAga2V5OiAnbW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudCQkMSgpIHtcbiAgICAgIHZhciBleHRlbnNpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdGhpcy5fZS5lbWl0KCdtb3VudC5iZWZvcmUnKTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGV4dGVuc2lvbnMpKSB7XG4gICAgICAgIHRoaXMuX2MgPSBtb3VudCh0aGlzLCBleHRlbnNpb25zLCB0aGlzLl9lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBvYmplY3Qgb24gYG1vdW50KClgJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgnbW91bnQuYWZ0ZXInKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBhbiBpbnN0YW5jZSBgdHJhbnNsYXRlYCB0cmFuc2Zvcm1lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7QXJyYXl9IHRyYW5zZm9ybWVycyBDb2xsZWN0aW9uIG9mIHRyYW5zZm9ybWVycy5cclxuICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbXV0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbXV0YXRlKCkge1xuICAgICAgdmFyIHRyYW5zZm9ybWVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgICAgIGlmIChpc0FycmF5KHRyYW5zZm9ybWVycykpIHtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zZm9ybWVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBhcnJheSBvbiBgbXV0YXRlKClgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBnbGlkZSB3aXRoIHNwZWNpZmllZCBzZXR0aW5ncy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3NcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnModGhpcy5zZXR0aW5ncywgc2V0dGluZ3MpO1xuXG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3N0YXJ0QXQnKSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gc2V0dGluZ3Muc3RhcnRBdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCd1cGRhdGUnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugc2xpZGUgd2l0aCBzcGVjaWZpZWQgcGF0dGVybi4gQSBwYXR0ZXJuIG11c3QgYmUgaW4gdGhlIHNwZWNpYWwgZm9ybWF0OlxyXG4gICAgICogYD5gIC0gTW92ZSBvbmUgZm9yd2FyZFxyXG4gICAgICogYDxgIC0gTW92ZSBvbmUgYmFja3dhcmRcclxuICAgICAqIGA9e2l9YCAtIEdvIHRvIHtpfSB6ZXJvLWJhc2VkIHNsaWRlIChlcS4gJz0xJywgd2lsbCBnbyB0byBzZWNvbmQgc2xpZGUpXHJcbiAgICAgKiBgPj5gIC0gUmV3aW5kcyB0byBlbmQgKGxhc3Qgc2xpZGUpXHJcbiAgICAgKiBgPDxgIC0gUmV3aW5kcyB0byBzdGFydCAoZmlyc3Qgc2xpZGUpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm5cclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ28ocGF0dGVybikge1xuICAgICAgdGhpcy5fYy5SdW4ubWFrZShwYXR0ZXJuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRyYWNrIGJ5IHNwZWNpZmllZCBkaXN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlzdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlKGRpc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jLlRyYW5zaXRpb24uZGlzYWJsZSgpO1xuICAgICAgdGhpcy5fYy5Nb3ZlLm1ha2UoZGlzdGFuY2UpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgaW5zdGFuY2UgYW5kIHJldmVydCBhbGwgY2hhbmdlcyBkb25lIGJ5IHRoaXMuX2MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9lLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBpbnN0YW5jZSBhdXRvcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBpbnRlcnZhbCBSdW4gYXV0b3BsYXlpbmcgd2l0aCBwYXNzZWQgaW50ZXJ2YWwgcmVnYXJkbGVzcyBvZiBgYXV0b3BsYXlgIHNldHRpbmdzXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHZhciBpbnRlcnZhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmF1dG9wbGF5ID0gaW50ZXJ2YWw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgncGxheScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFN0b3AgaW5zdGFuY2UgYXV0b3BsYXlpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncGF1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuX2UuZW1pdCgncGF1c2UnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGdsaWRlIGludG8gYSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHMgZ2xpZGUgaW50byBhIGFjdGl2ZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEFkZHMgY3V1dG9tIGV2ZW50IGxpc3RlbmVyIHdpdGggaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlcikge1xuICAgICAgdGhpcy5fZS5vbihldmVudCwgaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGdsaWRlIGlzIGEgcHJlY2lzZWQgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNUeXBlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNUeXBlKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnR5cGUgPT09IG5hbWU7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBjb3JlIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldHRpbmdzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgY29yZSBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb1xyXG4gICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShvKSB7XG4gICAgICBpZiAoaXNPYmplY3QobykpIHtcbiAgICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdPcHRpb25zIG11c3QgYmUgYW4gYG9iamVjdGAgaW5zdGFuY2UuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGN1cnJlbnQgaW5kZXggb2YgdGhlIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaW5kZXgnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGN1cnJlbnQgaW5kZXggYSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKGkpIHtcbiAgICAgIHRoaXMuX2kgPSB0b0ludChpKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdHlwZSBuYW1lIG9mIHRoZSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3R5cGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudHlwZTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGlkbGUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Q7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHN0YXR1cykge1xuICAgICAgdGhpcy5fZCA9ICEhc3RhdHVzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gR2xpZGU7XG59KCk7XG5cbmZ1bmN0aW9uIFJ1biAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgUnVuID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGF1dG9ydW5uaW5nIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5fbyA9IGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGdsaWRlcyBydW5uaW5nIGJhc2VkIG9uIHRoZSBwYXNzZWQgbW92aW5nIHNjaGVtYS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb3ZlXG4gICAgICovXG4gICAgbWFrZTogZnVuY3Rpb24gbWFrZShtb3ZlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIEdsaWRlLmRpc2FibGUoKTtcblxuICAgICAgICB0aGlzLm1vdmUgPSBtb3ZlO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4uYmVmb3JlJywgdGhpcy5tb3ZlKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4nLCB0aGlzLm1vdmUpO1xuXG4gICAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5hZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmlzT2Zmc2V0KCc8JykgfHwgX3RoaXMuaXNPZmZzZXQoJz4nKSkge1xuICAgICAgICAgICAgX3RoaXMuX28gPSBmYWxzZTtcblxuICAgICAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5vZmZzZXQnLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLmFmdGVyJywgX3RoaXMubW92ZSk7XG5cbiAgICAgICAgICBHbGlkZS5lbmFibGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBjdXJyZW50IGluZGV4IGJhc2VkIG9uIGRlZmluZWQgbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlOiBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgICB2YXIgbW92ZSA9IHRoaXMubW92ZSxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBzdGVwcyA9IG1vdmUuc3RlcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gbW92ZS5kaXJlY3Rpb247XG5cblxuICAgICAgdmFyIGNvdW50YWJsZVN0ZXBzID0gaXNOdW1iZXIodG9JbnQoc3RlcHMpKSAmJiB0b0ludChzdGVwcykgIT09IDA7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChzdGVwcyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCA9IGxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmQoKSkge1xuICAgICAgICAgICAgaWYgKCEoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiAhR2xpZGUuc2V0dGluZ3MucmV3aW5kKSkge1xuICAgICAgICAgICAgICB0aGlzLl9vID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBHbGlkZS5pbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uZW5kJywgbW92ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb3VudGFibGVTdGVwcykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggKz0gTWF0aC5taW4obGVuZ3RoIC0gR2xpZGUuaW5kZXgsIC10b0ludChzdGVwcykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBpZiAoc3RlcHMgPT09ICc8Jykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0YXJ0KCkpIHtcbiAgICAgICAgICAgIGlmICghKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgIUdsaWRlLnNldHRpbmdzLnJld2luZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgR2xpZGUuaW5kZXggPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uc3RhcnQnLCBtb3ZlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50YWJsZVN0ZXBzKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCAtPSBNYXRoLm1pbihHbGlkZS5pbmRleCwgdG9JbnQoc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXgtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgR2xpZGUuaW5kZXggPSBzdGVwcztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTdGFydDogZnVuY3Rpb24gaXNTdGFydCgpIHtcbiAgICAgIHJldHVybiBHbGlkZS5pbmRleCA9PT0gMDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VuZDogZnVuY3Rpb24gaXNFbmQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaW5kZXggPT09IHRoaXMubGVuZ3RoO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB3ZSBhcmUgbWFraW5nIGEgb2Zmc2V0IHJ1bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzT2Zmc2V0OiBmdW5jdGlvbiBpc09mZnNldChkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLl9vICYmIHRoaXMubW92ZS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFJ1biwgJ21vdmUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX207XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9tID0ge1xuICAgICAgICBkaXJlY3Rpb246IHZhbHVlLnN1YnN0cigwLCAxKSxcbiAgICAgICAgc3RlcHM6IHZhbHVlLnN1YnN0cigxKSA/IHZhbHVlLnN1YnN0cigxKSA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoUnVuLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIHJ1bm5pbmcgZGlzdGFuY2UgYmFzZWRcbiAgICAgKiBvbiB6ZXJvLWluZGV4aW5nIG51bWJlciBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgICAgIHZhciBsZW5ndGggPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmxlbmd0aDtcblxuICAgICAgLy8gSWYgdGhlIGBib3VuZGAgb3B0aW9uIGlzIGFjaXR2ZSwgYSBtYXhpbXVtIHJ1bm5pbmcgZGlzdGFuY2Ugc2hvdWxkIGJlXG4gICAgICAvLyByZWR1Y2VkIGJ5IGBwZXJWaWV3YCBhbmQgYGZvY3VzQXRgIHNldHRpbmdzLiBSdW5uaW5nIGRpc3RhbmNlXG4gICAgICAvLyBzaG91bGQgZW5kIGJlZm9yZSBjcmVhdGluZyBhbiBlbXB0eSBzcGFjZSBhZnRlciBpbnN0YW5jZS5cblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgc2V0dGluZ3MuZm9jdXNBdCAhPT0gJ2NlbnRlcicgJiYgc2V0dGluZ3MuYm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAtIDEgLSAodG9JbnQoc2V0dGluZ3MucGVyVmlldykgLSAxKSArIHRvSW50KHNldHRpbmdzLmZvY3VzQXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShSdW4sICdvZmZzZXQnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBzdGF0dXMgb2YgdGhlIG9mZnNldHRpbmcgZmxhZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBSdW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJlbnQgdGltZS5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkXG4gKiBhdCBtb3N0IG9uY2UgZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCA9IHZvaWQgMCxcbiAgICAgIGNvbnRleHQgPSB2b2lkIDAsXG4gICAgICBhcmdzID0gdm9pZCAwLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKCkge1xuICAgIHZhciBhdCA9IG5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBhdDtcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChhdCAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBhdDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBwcmV2aW91cyA9IDA7XG4gICAgdGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG52YXIgTUFSR0lOX1RZUEUgPSB7XG4gIGx0cjogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIHJ0bDogWydtYXJnaW5SaWdodCcsICdtYXJnaW5MZWZ0J11cbn07XG5cbmZ1bmN0aW9uIEdhcHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEdhcHMgPSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBnYXBzIGJldHdlZW4gc2xpZGVzLiBGaXJzdCBhbmQgbGFzdFxuICAgICAqIHNsaWRlcyBkbyBub3QgcmVjZWl2ZSBpdCdzIGVkZ2UgbWFyZ2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc3R5bGUgPSBzbGlkZXNbaV0uc3R5bGU7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBDb21wb25lbnRzLkRpcmVjdGlvbi52YWx1ZTtcblxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gdGhpcy52YWx1ZSAvIDIgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSAhPT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9IHRoaXMudmFsdWUgLyAyICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBnYXBzIGZyb20gdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHNsaWRlc1tpXS5zdHlsZTtcblxuICAgICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShHYXBzLCAndmFsdWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgZ2FwLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0b0ludChHbGlkZS5zZXR0aW5ncy5nYXApO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEdhcHMsICdncm93Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYWRkaXRpb25hbCBkaW1lbnRpb25zIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gaW5jcmVhc2Ugd2lkdGggb2YgdGhlIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKENvbXBvbmVudHMuU2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoR2FwcywgJ3JlZHVjdG9yJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgcmVkdWN0aW9uIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gc3VidHJhY3Qgd2lkdGggb2YgdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcGVyVmlldyA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG5cbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKHBlclZpZXcgLSAxKSAvIHBlclZpZXc7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQXBwbHkgY2FsY3VsYXRlZCBnYXBzOlxuICAgKiAtIGFmdGVyIGJ1aWxkaW5nLCBzbyBzbGlkZXMgKGluY2x1ZGluZyBjbG9uZXMpIHdpbGwgcmVjZWl2ZSBwcm9wZXIgbWFyZ2luc1xuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEksIHRvIHJlY2FsY3VsYXRlIGdhcHMgd2l0aCBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYWZ0ZXInLCAndXBkYXRlJ10sIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHYXBzLmFwcGx5KENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSwgMzApKTtcblxuICAvKipcbiAgICogUmVtb3ZlIGdhcHM6XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEdhcHMucmVtb3ZlKENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEdhcHM7XG59XG5cbi8qKlxuICogRmluZHMgc2libGluZ3Mgbm9kZXMgb2YgdGhlIHBhc3NlZCBub2RlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBzaWJsaW5ncyhub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHZhciBuID0gbm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIG1hdGNoZWQgPSBbXTtcblxuICAgIGZvciAoOyBuOyBuID0gbi5uZXh0U2libGluZykge1xuICAgICAgaWYgKG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gbm9kZSkge1xuICAgICAgICBtYXRjaGVkLnB1c2gobik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZWQ7XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhc3NlZCBub2RlIGV4aXN0IGFuZCBpcyBhIHZhbGlkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZXhpc3Qobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBUUkFDS19TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cInRyYWNrXCJdJztcblxuZnVuY3Rpb24gSHRtbCAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgdmFyIEh0bWwgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXAgc2xpZGVyIEhUTUwgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0dsaWRlfSBnbGlkZVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMucm9vdCA9IEdsaWRlLnNlbGVjdG9yO1xuICAgICAgdGhpcy50cmFjayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFRSQUNLX1NFTEVDVE9SKTtcbiAgICAgIHRoaXMuc2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy53cmFwcGVyLmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiAhc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuY2xvbmVTbGlkZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEh0bWwsICdyb290Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgZ2xpZGUgbWFpbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3I7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSBtYWluIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocikge1xuICAgICAgaWYgKGlzU3RyaW5nKHIpKSB7XG4gICAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3QocikpIHtcbiAgICAgICAgSHRtbC5fciA9IHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdSb290IGVsZW1lbnQgbXVzdCBiZSBhIGV4aXN0aW5nIEh0bWwgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd0cmFjaycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG5vZGUgb2YgdGhlIGdsaWRlIHRyYWNrIHdpdGggc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3Q7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSB0cmFjayB3aXRoIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICBpZiAoZXhpc3QodCkpIHtcbiAgICAgICAgSHRtbC5fdCA9IHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdDb3VsZCBub3QgZmluZCB0cmFjayBlbGVtZW50LiBQbGVhc2UgdXNlICcgKyBUUkFDS19TRUxFQ1RPUiArICcgYXR0cmlidXRlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd3cmFwcGVyJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC50cmFjay5jaGlsZHJlblswXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBIdG1sO1xufVxuXG5mdW5jdGlvbiBQZWVrIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBQZWVrID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBob3cgbXVjaCB0byBwZWVrIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MucGVlaztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFBlZWssICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcnxPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gUGVlay5fdjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuYmVmb3JlID0gdG9JbnQodmFsdWUuYmVmb3JlKTtcbiAgICAgICAgdmFsdWUuYWZ0ZXIgPSB0b0ludCh2YWx1ZS5hZnRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgUGVlay5fdiA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKFBlZWssICdyZWR1Y3RvcicsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHJlZHVjdGlvbiB2YWx1ZSBjYXVzZWQgYnkgcGVlay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBQZWVrLnZhbHVlO1xuICAgICAgdmFyIHBlclZpZXcgPSBHbGlkZS5zZXR0aW5ncy5wZXJWaWV3O1xuXG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5iZWZvcmUgLyBwZXJWaWV3ICsgdmFsdWUuYWZ0ZXIgLyBwZXJWaWV3O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUgKiAyIC8gcGVyVmlldztcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZSBwZWVraW5nIHNpemVzIG9uOlxuICAgKiAtIHdoZW4gcmVzaXppbmcgd2luZG93IHRvIHVwZGF0ZSB0byBwcm9wZXIgcGVyY2VudHNcbiAgICovXG4gIEV2ZW50cy5vbihbJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFBlZWsubW91bnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFBlZWs7XG59XG5cbmZ1bmN0aW9uIE1vdmUgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIE1vdmUgPSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBtb3ZlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuX28gPSAwO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYSBtb3ZlbWVudCB2YWx1ZSBiYXNlZCBvbiBwYXNzZWQgb2Zmc2V0IGFuZCBjdXJyZW50bHkgYWN0aXZlIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uIG1ha2UoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgICAgRXZlbnRzLmVtaXQoJ21vdmUnLCB7XG4gICAgICAgIG1vdmVtZW50OiB0aGlzLnZhbHVlXG4gICAgICB9KTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ21vdmUuYWZ0ZXInLCB7XG4gICAgICAgICAgbW92ZW1lbnQ6IF90aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShNb3ZlLCAnb2Zmc2V0Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gb2Zmc2V0IHZhbHVlIHVzZWQgdG8gbW9kaWZ5IGN1cnJlbnQgdHJhbnNsYXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE1vdmUuX287XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBvZmZzZXQgdmFsdWUgdXNlZCB0byBtb2RpZnkgY3VycmVudCB0cmFuc2xhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIE1vdmUuX28gPSAhaXNVbmRlZmluZWQodmFsdWUpID8gdG9JbnQodmFsdWUpIDogMDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShNb3ZlLCAndHJhbnNsYXRlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYSByYXcgbW92ZW1lbnQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoTW92ZSwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gYWN0dWFsIG1vdmVtZW50IHZhbHVlIGNvcnJlY3RlZCBieSBvZmZzZXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICB2YXIgdHJhbnNsYXRlID0gdGhpcy50cmFuc2xhdGU7XG5cbiAgICAgIGlmIChDb21wb25lbnRzLkRpcmVjdGlvbi5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIG9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIG9mZnNldDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBNYWtlIG1vdmVtZW50IHRvIHByb3BlciBzbGlkZSBvbjpcbiAgICogLSBiZWZvcmUgYnVpbGQsIHNvIGdsaWRlIHdpbGwgc3RhcnQgYXQgYHN0YXJ0QXRgIGluZGV4XG4gICAqIC0gb24gZWFjaCBzdGFuZGFyZCBydW4gdG8gbW92ZSB0byBuZXdseSBjYWxjdWxhdGVkIGluZGV4XG4gICAqL1xuICBFdmVudHMub24oWydidWlsZC5iZWZvcmUnLCAncnVuJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBNb3ZlLm1ha2UoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIE1vdmU7XG59XG5cbmZ1bmN0aW9uIFNpemVzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBTaXplcyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZGltZW50aW9ucyBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldHVwU2xpZGVzOiBmdW5jdGlvbiBzZXR1cFNsaWRlcygpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSB0aGlzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHVwcyBkaW1lbnRpb25zIG9mIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXR1cFdyYXBwZXI6IGZ1bmN0aW9uIHNldHVwV3JhcHBlcihkaW1lbnRpb24pIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53cmFwcGVyU2l6ZSArICdweCc7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhcHBsaWVkIHN0eWxlcyBmcm9tIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH1cblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUud2lkdGggPSAnJztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFNpemVzLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY291bnQgbnVtYmVyIG9mIHRoZSBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5IdG1sLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoU2l6ZXMsICd3aWR0aCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdpZHRoIHZhbHVlIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRzLkh0bWwucm9vdC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3dyYXBwZXJTaXplJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgc2l6ZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gU2l6ZXMuc2xpZGVXaWR0aCAqIFNpemVzLmxlbmd0aCArIENvbXBvbmVudHMuR2Fwcy5ncm93ICsgQ29tcG9uZW50cy5DbG9uZXMuZ3JvdztcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3NsaWRlV2lkdGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aWR0aCB2YWx1ZSBvZiB0aGUgc2luZ2xlIHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFNpemVzLndpZHRoIC8gR2xpZGUuc2V0dGluZ3MucGVyVmlldyAtIENvbXBvbmVudHMuUGVlay5yZWR1Y3RvciAtIENvbXBvbmVudHMuR2Fwcy5yZWR1Y3RvcjtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBjYWxjdWxhdGVkIGdsaWRlJ3MgZGltZW5zaW9uczpcbiAgICogLSBiZWZvcmUgYnVpbGRpbmcsIHNvIG90aGVyIGRpbWVudGlvbnMgKGUuZy4gdHJhbnNsYXRlKSB3aWxsIGJlIGNhbGN1bGF0ZWQgcHJvcGVydGx5XG4gICAqIC0gd2hlbiByZXNpemluZyB3aW5kb3cgdG8gcmVjYWxjdWxhdGUgc2lsZGVzIGRpbWVuc2lvbnNcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJLCB0byBjYWxjdWxhdGUgZGltZW5zaW9ucyBiYXNlZCBvbiBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFNpemVzLnNldHVwU2xpZGVzKCk7XG4gICAgU2l6ZXMuc2V0dXBXcmFwcGVyKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FsY3VsYXRlZCBnbGlkZSdzIGRpbWVuc2lvbnM6XG4gICAqIC0gb24gZGVzdG90aW5nIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgU2l6ZXMucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBTaXplcztcbn1cblxuZnVuY3Rpb24gQnVpbGQgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEJ1aWxkID0ge1xuICAgIC8qKlxuICAgICAqIEluaXQgZ2xpZGUgYnVpbGRpbmcuIEFkZHMgY2xhc3Nlcywgc2V0c1xuICAgICAqIGRpbWVuc2lvbnMgYW5kIHNldHVwcyBpbml0aWFsIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFdmVudHMuZW1pdCgnYnVpbGQuYmVmb3JlJyk7XG5cbiAgICAgIHRoaXMudHlwZUNsYXNzKCk7XG4gICAgICB0aGlzLmFjdGl2ZUNsYXNzKCk7XG5cbiAgICAgIEV2ZW50cy5lbWl0KCdidWlsZC5hZnRlcicpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYHR5cGVgIGNsYXNzIHRvIHRoZSBnbGlkZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQ2xhc3M6IGZ1bmN0aW9uIHR5cGVDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlc1tHbGlkZS5zZXR0aW5ncy50eXBlXSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6IGZ1bmN0aW9uIGFjdGl2ZUNsYXNzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuICAgICAgdmFyIHNsaWRlID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuXG4gICAgICAgIHNpYmxpbmdzKHNsaWRlKS5mb3JFYWNoKGZ1bmN0aW9uIChzaWJsaW5nKSB7XG4gICAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIEhUTUwgY2xhc3NlcyBhcHBsaWVkIGF0IGJ1aWxkaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzc2VzOiBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbR2xpZGUuc2V0dGluZ3MudHlwZV0pO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBidWlsZGluZyBjbGFzc2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBjbGFzc2VzIGJlZm9yZSByZW1vdW50aW5nIGNvbXBvbmVudFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEJ1aWxkLnJlbW92ZUNsYXNzZXMoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50OlxuICAgKiAtIG9uIHJlc2l6aW5nIG9mIHRoZSB3aW5kb3cgdG8gY2FsY3VsYXRlIG5ldyBkaW1lbnRpb25zXG4gICAqIC0gb24gdXBkYXRpbmcgc2V0dGluZ3MgdmlhIEFQSVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQnVpbGQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgc2xpZGU6XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZS5hZnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBCdWlsZC5hY3RpdmVDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gQnVpbGQ7XG59XG5cbmZ1bmN0aW9uIENsb25lcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgQ2xvbmVzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXR0ZXJuIG1hcCBhbmQgY29sbGVjdCBzbGlkZXMgdG8gYmUgY2xvbmVkLlxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb2xsZWN0KCk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdCBjbG9uZXMgd2l0aCBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjb2xsZWN0OiBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgICAgdmFyIGl0ZW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuICAgICAgdmFyIF9HbGlkZSRzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzLFxuICAgICAgICAgIHBlclZpZXcgPSBfR2xpZGUkc2V0dGluZ3MucGVyVmlldyxcbiAgICAgICAgICBjbGFzc2VzID0gX0dsaWRlJHNldHRpbmdzLmNsYXNzZXM7XG5cblxuICAgICAgdmFyIHBlZWtJbmNyZW1lbnRlciA9ICshIUdsaWRlLnNldHRpbmdzLnBlZWs7XG4gICAgICB2YXIgcGFydCA9IHBlclZpZXcgKyBwZWVrSW5jcmVtZW50ZXI7XG4gICAgICB2YXIgc3RhcnQgPSBzbGlkZXMuc2xpY2UoMCwgcGFydCk7XG4gICAgICB2YXIgZW5kID0gc2xpZGVzLnNsaWNlKC1wYXJ0KTtcblxuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBlclZpZXcgLyBzbGlkZXMubGVuZ3RoKSk7IHIrKykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNsb25lID0gc3RhcnRbaV0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLmNsb25lU2xpZGUpO1xuXG4gICAgICAgICAgaXRlbXMucHVzaChjbG9uZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZW5kLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIHZhciBfY2xvbmUgPSBlbmRbX2ldLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgIF9jbG9uZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuY2xvbmVTbGlkZSk7XG5cbiAgICAgICAgICBpdGVtcy51bnNoaWZ0KF9jbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjbG9uZWQgc2xpZGVzIHdpdGggZ2VuZXJhdGVkIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIHZhciBfQ29tcG9uZW50cyRIdG1sID0gQ29tcG9uZW50cy5IdG1sLFxuICAgICAgICAgIHdyYXBwZXIgPSBfQ29tcG9uZW50cyRIdG1sLndyYXBwZXIsXG4gICAgICAgICAgc2xpZGVzID0gX0NvbXBvbmVudHMkSHRtbC5zbGlkZXM7XG5cblxuICAgICAgdmFyIGhhbGYgPSBNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpO1xuICAgICAgdmFyIHByZXBlbmQgPSBpdGVtcy5zbGljZSgwLCBoYWxmKS5yZXZlcnNlKCk7XG4gICAgICB2YXIgYXBwZW5kID0gaXRlbXMuc2xpY2UoaGFsZiwgaXRlbXMubGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcHBlbmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcHBlbmRbaV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBwcmVwZW5kLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUocHJlcGVuZFtfaTJdLCBzbGlkZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBpdGVtcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICAgIGl0ZW1zW19pM10uc3R5bGUud2lkdGggPSBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY2xvbmVkIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIucmVtb3ZlQ2hpbGQoaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ2xvbmVzLCAnZ3JvdycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFkZGl0aW9uYWwgZGltZW50aW9ucyB2YWx1ZSBjYXVzZWQgYnkgY2xvbmVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyBDb21wb25lbnRzLkdhcHMudmFsdWUpICogQ2xvbmVzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBzbGlkZSdzIGNsb25lczpcbiAgICogLSB3aGlsZSBnbGlkZSdzIHR5cGUgaXMgYGNhcm91c2VsYFxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ2xvbmVzLnJlbW92ZSgpO1xuICAgIENsb25lcy5tb3VudCgpO1xuICAgIENsb25lcy5hcHBlbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhZGRpdGlvbmFsIHNsaWRlJ3MgY2xvbmVzOlxuICAgKiAtIHdoaWxlIGdsaWRlJ3MgdHlwZSBpcyBgY2Fyb3VzZWxgXG4gICAqL1xuICBFdmVudHMub24oJ2J1aWxkLmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoR2xpZGUuaXNUeXBlKCdjYXJvdXNlbCcpKSB7XG4gICAgICBDbG9uZXMuYXBwZW5kKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGNsb25lcyBIVE1MRWxlbWVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENsb25lcy5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIENsb25lcztcbn1cblxudmFyIEV2ZW50c0JpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50c0JpbmRlciBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50c0JpbmRlcigpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHNCaW5kZXIpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudHMgbGlzdGVuZXJzIHRvIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50c1xuICAgKiBAcGFyYW0gIHtFbGVtZW50fFdpbmRvd3xEb2N1bWVudH0gZWxcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNsb3N1cmVcbiAgICogQHBhcmFtICB7Qm9vbGVhbnxPYmplY3R9IGNhcHR1cmVcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhFdmVudHNCaW5kZXIsIFt7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudHMsIGVsLCBjbG9zdXJlKSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudHNbaV1dID0gY2xvc3VyZTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRzXG4gICAgICogQHBhcmFtICB7RWxlbWVudHxXaW5kb3d8RG9jdW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb2ZmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWwpIHtcbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29sbGVjdGVkIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50c0JpbmRlcjtcbn0oKTtcblxuZnVuY3Rpb24gUmVzaXplIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgUmVzaXplID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHdpbmRvdyBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgcmV6c2l6ZWAgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdy5cbiAgICAgKiBJdCdzIGEgY29zdGx5IGV2ZW50LCBzbyB3ZSBhcmUgZGVib3VuY2luZyBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbigncmVzaXplJywgd2luZG93LCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdyZXNpemUnKTtcbiAgICAgIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBsaXN0ZW5lcnMgZnJvbSB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSB3aW5kb3c6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBSZXNpemUudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFJlc2l6ZTtcbn1cblxudmFyIFZBTElEX0RJUkVDVElPTlMgPSBbJ2x0cicsICdydGwnXTtcbnZhciBGTElQRURfTU9WRU1FTlRTID0ge1xuICAnPic6ICc8JyxcbiAgJzwnOiAnPicsXG4gICc9JzogJz0nXG59O1xuXG5mdW5jdGlvbiBEaXJlY3Rpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZ2FwIHZhbHVlIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MuZGlyZWN0aW9uO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHBhdHRlcm4gYmFzZWQgb24gZGlyZWN0aW9uIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZShwYXR0ZXJuKSB7XG4gICAgICB2YXIgdG9rZW4gPSBwYXR0ZXJuLnNsaWNlKDAsIDEpO1xuXG4gICAgICBpZiAodGhpcy5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQodG9rZW4pLmpvaW4oRkxJUEVEX01PVkVNRU5UU1t0b2tlbl0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdmFsdWUgb2YgZGlyZWN0aW9uIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IGRpcmVjdGlvbjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGRpcmVjdGlvbiBjbGFzcyB0byB0aGUgcm9vdCBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb25bdGhpcy52YWx1ZV0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGlyZWN0aW9uIGNsYXNzIGZyb20gdGhlIHJvb3QgSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uW3RoaXMudmFsdWVdKTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKERpcmVjdGlvbiwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uLl92O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChWQUxJRF9ESVJFQ1RJT05TLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgRGlyZWN0aW9uLl92ID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdEaXJlY3Rpb24gdmFsdWUgbXVzdCBiZSBgbHRyYCBvciBgcnRsYCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENsZWFyIGRpcmVjdGlvbiBjbGFzczpcbiAgICogLSBvbiBkZXN0cm95IHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVtb3ZlIGNsYXNzIGJlZm9yZSByZWFwcGxpbmcgYmVsbG93XG4gICAqL1xuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLnJlbW92ZUNsYXNzKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVmbGVjdCBjaGFuZ2VzIGluIGRpcmVjdGlvbiB2YWx1ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBkaXJlY3Rpb24gY2xhc3M6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nIHRvIGFwcGx5IGNsYXNzIGZvciB0aGUgZmlyc3QgdGltZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlYXBwbHkgZGlyZWN0aW9uIGNsYXNzIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIERpcmVjdGlvbi5hZGRDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gRGlyZWN0aW9uO1xufVxuXG4vKipcbiAqIFJlZmxlY3RzIHZhbHVlIG9mIGdsaWRlIG1vdmVtZW50LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBSdGwgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyB0aGUgcGFzc2VkIHRyYW5zbGF0ZSBpZiBnbGlkZSBpcyBpbiBSVEwgb3B0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgIHJldHVybiAtdHJhbnNsYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgZ2FwYCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR2FwIChHbGlkZSwgQ29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIHBhc3NlZCB0cmFuc2xhdGUgdmFsdWUgd2l0aCBudW1iZXIgaW4gdGhlIGBnYXBgIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlICsgQ29tcG9uZW50cy5HYXBzLnZhbHVlICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCB3aWR0aCBvZiBhZGRpdGlvbmFsIGNsb25lcyB3aWR0aC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR3JvdyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRvIHRoZSBwYXNzZWQgdHJhbnNsYXRlIHdpZHRoIG9mIHRoZSBoYWxmIG9mIGNsb25lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3cgLyAyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgcGVla2Agc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFBlZWtpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGEgYHBlZWtgIHNldHRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5mb2N1c0F0ID49IDApIHtcbiAgICAgICAgdmFyIHBlZWsgPSBDb21wb25lbnRzLlBlZWsudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHBlZWspKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWsuYmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCBhIGBmb2N1c0F0YCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gRm9jdXNpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGluZGV4IGluIHRoZSBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICAgIHZhciB3aWR0aCA9IENvbXBvbmVudHMuU2l6ZXMud2lkdGg7XG4gICAgICB2YXIgZm9jdXNBdCA9IEdsaWRlLnNldHRpbmdzLmZvY3VzQXQ7XG4gICAgICB2YXIgc2xpZGVXaWR0aCA9IENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aDtcblxuICAgICAgaWYgKGZvY3VzQXQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUgLSAod2lkdGggLyAyIC0gc2xpZGVXaWR0aCAvIDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gc2xpZGVXaWR0aCAqIGZvY3VzQXQgLSBnYXAgKiBmb2N1c0F0O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRpZmZyZW50IHRyYW5zZm9ybWVycyBvbiB0cmFuc2xhdGUgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG11dGF0b3IgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIE1lcmdlIGluc3RhbmNlIHRyYW5zZm9ybWVycyB3aXRoIGNvbGxlY3Rpb24gb2YgZGVmYXVsdCB0cmFuc2Zvcm1lcnMuXG4gICAqIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIFJ0bCBjb21wb25lbnQgYmUgbGFzdCBvbiB0aGUgbGlzdCxcbiAgICogc28gaXQgcmVmbGVjdHMgYWxsIHByZXZpb3VzIHRyYW5zZm9ybWF0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIFRSQU5TRk9STUVSUyA9IFtHYXAsIEdyb3csIFBlZWtpbmcsIEZvY3VzaW5nXS5jb25jYXQoR2xpZGUuX3QsIFtSdGxdKTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFBpcGxpbmVzIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIHJlZ2lzdGVyZWQgdHJhbnNmb3JtZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUodHJhbnNsYXRlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRSQU5TRk9STUVSUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJhbnNmb3JtZXIgPSBUUkFOU0ZPUk1FUlNbaV07XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odHJhbnNmb3JtZXIpICYmIGlzRnVuY3Rpb24odHJhbnNmb3JtZXIoKS5tb2RpZnkpKSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gdHJhbnNmb3JtZXIoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykubW9kaWZ5KHRyYW5zbGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybignVHJhbnNmb3JtZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBtb2RpZnkoKWAgbWV0aG9kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zbGF0ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgVHJhbnNsYXRlID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdHJhbnNsYXRlIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBtdXRhdG9yKEdsaWRlLCBDb21wb25lbnRzKS5tdXRhdGUodmFsdWUpO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIC0xICogdHJhbnNmb3JtICsgJ3B4LCAwcHgsIDBweCknO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdmFsdWUgb2YgdHJhbnNsYXRlIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IG5ldyB0cmFuc2xhdGUgdmFsdWU6XG4gICAqIC0gb24gbW92ZSB0byByZWZsZWN0IGluZGV4IGNoYW5nZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVmbGVjdCBwb3NzaWJsZSBjaGFuZ2VzIGluIG9wdGlvbnNcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZScsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICB2YXIgbGVuZ3RoID0gQ29tcG9uZW50cy5TaXplcy5sZW5ndGg7XG4gICAgdmFyIHdpZHRoID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoO1xuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSAmJiBDb21wb25lbnRzLlJ1bi5pc09mZnNldCgnPCcpKSB7XG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHMuZW1pdCgndHJhbnNsYXRlLmp1bXAnKTtcblxuICAgICAgICBUcmFuc2xhdGUuc2V0KHdpZHRoICogKGxlbmd0aCAtIDEpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCgtd2lkdGggLSBnYXAgKiBsZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykgJiYgQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJz4nKSkge1xuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3RyYW5zbGF0ZS5qdW1wJyk7XG5cbiAgICAgICAgVHJhbnNsYXRlLnNldCgwKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCh3aWR0aCAqIGxlbmd0aCArIGdhcCAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRyYW5zbGF0ZS5zZXQoY29udGV4dC5tb3ZlbWVudCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhbnNsYXRlOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2xhdGUucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEhvbGRzIGluYWN0aXZpdHkgc3RhdHVzIG9mIHRyYW5zaXRpb24uXG4gICAqIFdoZW4gdHJ1ZSB0cmFuc2l0aW9uIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHZhciBUcmFuc2l0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHN0cmluZyBvZiB0aGUgQ1NTIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZShwcm9wZXJ0eSkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAnICsgdGhpcy5kdXJhdGlvbiArICdtcyAnICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltaW5nRnVuYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAwbXMgJyArIHNldHRpbmdzLmFuaW1hdGlvblRpbWluZ0Z1bmM7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0cmFuc2l0aW9uIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nPX0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdmFyIHByb3BlcnR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuY29tcG9zZShwcm9wZXJ0eSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB2YWx1ZSBvZiB0cmFuc2l0aW9uIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIGFmdGVyIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKGNhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNldCgpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoVHJhbnNpdGlvbiwgJ2R1cmF0aW9uJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYmFzZWRcbiAgICAgKiBvbiBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBDb21wb25lbnRzLlJ1bi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJld2luZER1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogU2V0IHRyYW5zaXRpb24gYHN0eWxlYCB2YWx1ZTpcbiAgICogLSBvbiBlYWNoIG1vdmluZywgYmVjYXVzZSBpdCBtYXkgYmUgY2xlYXJlZCBieSBvZmZzZXQgbW92ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24uc2V0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRyYW5zaXRpb246XG4gICAqIC0gYmVmb3JlIGluaXRpYWwgYnVpbGQgdG8gYXZvaWQgdHJhbnNpdGlvbmluZyBmcm9tIGAwYCB0byBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSB3aGlsZSByZXNpemluZyB3aW5kb3cgYW5kIHJlY2FsY3VsYXRpbmcgZGltZW50aW9uc1xuICAgKiAtIG9uIGp1bXBpbmcgZnJvbSBvZmZzZXQgdHJhbnNpdGlvbiBhdCBzdGFydCBhbmQgZW5kIGVkZ2VzIGluIGBjYXJvdXNlbGAgdHlwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd0cmFuc2xhdGUuanVtcCddLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdHJhbnNpdGlvbjpcbiAgICogLSBvbiBlYWNoIHJ1bm5pbmcsIGJlY2F1c2UgaXQgbWF5IGJlIGRpc2FibGVkIGJ5IG9mZnNldCBtb3ZlXG4gICAqL1xuICBFdmVudHMub24oJ3J1bicsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2l0aW9uLmVuYWJsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRyYW5zaXRpb246XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufVxuXG4vKipcbiAqIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWVcbiAqIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAqL1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlJDEgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbnZhciBTVEFSVF9FVkVOVFMgPSBbJ3RvdWNoc3RhcnQnLCAnbW91c2Vkb3duJ107XG52YXIgTU9WRV9FVkVOVFMgPSBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXTtcbnZhciBFTkRfRVZFTlRTID0gWyd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdtb3VzZXVwJywgJ21vdXNlbGVhdmUnXTtcbnZhciBNT1VTRV9FVkVOVFMgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdtb3VzZWxlYXZlJ107XG5cbmZ1bmN0aW9uIFN3aXBlIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgc3dpcGVTaW4gPSAwO1xuICB2YXIgc3dpcGVTdGFydFggPSAwO1xuICB2YXIgc3dpcGVTdGFydFkgPSAwO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIG1vdmVhYmxlID0gdHJ1ZTtcbiAgdmFyIGNhcHR1cmUgPSBzdXBwb3J0c1Bhc3NpdmUkMSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgdmFyIFN3aXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHN3aXBlIGJpbmRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlc3RhcnRgIGV2ZW50LiBDYWxjdWxhdGVzIGVudHJ5IHBvaW50cyBvZiB0aGUgdXNlcidzIHRhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmICFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuXG4gICAgICAgIG1vdmVhYmxlID0gdHJ1ZTtcbiAgICAgICAgc3dpcGVTaW4gPSBudWxsO1xuICAgICAgICBzd2lwZVN0YXJ0WCA9IHRvSW50KHN3aXBlLnBhZ2VYKTtcbiAgICAgICAgc3dpcGVTdGFydFkgPSB0b0ludChzd2lwZS5wYWdlWSk7XG5cbiAgICAgICAgdGhpcy5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgICAgIHRoaXMuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLnN0YXJ0Jyk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlbW92ZWAgZXZlbnQuIENhbGN1bGF0ZXMgdXNlcidzIHRhcCBhbmdsZSBhbmQgZGlzdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIHRvdWNoQW5nbGUgPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hBbmdsZSxcbiAgICAgICAgICAgIHRvdWNoUmF0aW8gPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hSYXRpbyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfR2xpZGUkc2V0dGluZ3MuY2xhc3NlcztcblxuXG4gICAgICAgIHZhciBzd2lwZSA9IHRoaXMudG91Y2hlcyhldmVudCk7XG5cbiAgICAgICAgdmFyIHN1YkV4U3ggPSB0b0ludChzd2lwZS5wYWdlWCkgLSBzd2lwZVN0YXJ0WDtcbiAgICAgICAgdmFyIHN1YkV5U3kgPSB0b0ludChzd2lwZS5wYWdlWSkgLSBzd2lwZVN0YXJ0WTtcbiAgICAgICAgdmFyIHBvd0VYID0gTWF0aC5hYnMoc3ViRXhTeCA8PCAyKTtcbiAgICAgICAgdmFyIHBvd0VZID0gTWF0aC5hYnMoc3ViRXlTeSA8PCAyKTtcbiAgICAgICAgdmFyIHN3aXBlSHlwb3RlbnVzZSA9IE1hdGguc3FydChwb3dFWCArIHBvd0VZKTtcbiAgICAgICAgdmFyIHN3aXBlQ2F0aGV0dXMgPSBNYXRoLnNxcnQocG93RVkpO1xuXG4gICAgICAgIHN3aXBlU2luID0gTWF0aC5hc2luKHN3aXBlQ2F0aGV0dXMgLyBzd2lwZUh5cG90ZW51c2UpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSAmJiBzd2lwZVNpbiAqIDE4MCAvIE1hdGguUEkgPCB0b3VjaEFuZ2xlKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLk1vdmUubWFrZShzdWJFeFN4ICogdG9GbG9hdCh0b3VjaFJhdGlvKSk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuZHJhZ2dpbmcpO1xuXG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLm1vdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlZW5kYCBldmVudC4gRmluaXRpYWxpemVzIHVzZXIncyB0YXAgYW5kIGRlY2lkZXMgYWJvdXQgZ2xpZGUgbW92ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZW5kOiBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkKGV2ZW50KTtcblxuICAgICAgICB2YXIgc3dpcGVEaXN0YW5jZSA9IHN3aXBlLnBhZ2VYIC0gc3dpcGVTdGFydFg7XG4gICAgICAgIHZhciBzd2lwZURlZyA9IHN3aXBlU2luICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgdmFyIHN0ZXBzID0gTWF0aC5yb3VuZChzd2lwZURpc3RhbmNlIC8gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoKTtcblxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSkge1xuICAgICAgICAgIGlmIChzd2lwZURpc3RhbmNlID4gdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgcG9zaXRpdmUgYW5kIGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQgbW92ZSBiYWNrd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWluKHN0ZXBzLCB0b0ludChzZXR0aW5ncy5wZXJUb3VjaCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgICAgICAgIHN0ZXBzID0gLXN0ZXBzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoJzwnICsgc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlRGlzdGFuY2UgPCAtdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgbmVnYXRpdmUgYW5kIGxvd2VyIHRoYW4gbmVnYXRpdmUgdGhyZXNob2xkIG1vdmUgZm9yd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWF4KHN0ZXBzLCAtdG9JbnQoc2V0dGluZ3MucGVyVG91Y2gpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKENvbXBvbmVudHMuRGlyZWN0aW9uLmlzKCdydGwnKSkge1xuICAgICAgICAgICAgICBzdGVwcyA9IC1zdGVwcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZShDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlKCc+JyArIHN0ZXBzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdoaWxlIHN3aXBlIGRvbid0IHJlYWNoIGRpc3RhbmNlIGFwcGx5IHByZXZpb3VzIHRyYW5zZm9ybS5cbiAgICAgICAgICAgIENvbXBvbmVudHMuTW92ZS5tYWtlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5jbGFzc2VzLmRyYWdnaW5nKTtcblxuICAgICAgICB0aGlzLnVuYmluZFN3aXBlTW92ZSgpO1xuICAgICAgICB0aGlzLnVuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLmVuZCcpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3Mgc3RhcnRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmRTd2lwZVN0YXJ0OiBmdW5jdGlvbiBiaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgQmluZGVyLm9uKFNUQVJUX0VWRU5UU1swXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIF90aGlzLnN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSwgY2FwdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5kcmFnVGhyZXNob2xkKSB7XG4gICAgICAgIEJpbmRlci5vbihTVEFSVF9FVkVOVFNbMV0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpcy5zdGFydChldmVudCk7XG4gICAgICAgIH0sIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBzdGFydGluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kU3dpcGVTdGFydDogZnVuY3Rpb24gdW5iaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIEJpbmRlci5vZmYoU1RBUlRfRVZFTlRTWzBdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgICBCaW5kZXIub2ZmKFNUQVJUX0VWRU5UU1sxXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgbW92aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVNb3ZlOiBmdW5jdGlvbiBiaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIEJpbmRlci5vbihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIHRocm90dGxlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczIubW92ZShldmVudCk7XG4gICAgICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSksIGNhcHR1cmUpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBtb3ZpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlTW92ZTogZnVuY3Rpb24gdW5iaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgQmluZGVyLm9mZihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgZW5kaW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVFbmQ6IGZ1bmN0aW9uIGJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMuZW5kKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBlbmRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlRW5kOiBmdW5jdGlvbiB1bmJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZXMgZXZlbnQgdG91Y2hlcyBwb2ludHMgYWNjb3J0aW5nIHRvIGRpZmZlcmVudCB0eXBlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIHRvdWNoZXM6IGZ1bmN0aW9uIHRvdWNoZXMoZXZlbnQpIHtcbiAgICAgIGlmIChNT1VTRV9FVkVOVFMuaW5kZXhPZihldmVudC50eXBlKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiBtaW5pbXVtIHN3aXBlIGRpc3RhbmNlIHNldHRpbmdzIGJhc2VkIG9uIGV2ZW50IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhyZXNob2xkOiBmdW5jdGlvbiB0aHJlc2hvbGQoZXZlbnQpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoTU9VU0VfRVZFTlRTLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuZHJhZ1RocmVzaG9sZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldHRpbmdzLnN3aXBlVGhyZXNob2xkO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgc3dpcGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmVuYWJsZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzd2lwZSBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmRpc2FibGUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgY29tcG9uZW50IGNsYXNzOlxuICAgKiAtIGFmdGVyIGluaXRpYWwgYnVpbGRpbmdcbiAgICovXG4gIEV2ZW50cy5vbignYnVpbGQuYWZ0ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LmFkZChHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLnN3aXBlYWJsZSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgc3dpcGluZyBiaW5kaW5nczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byByZW1vdmUgYWRkZWQgRXZlbnRMaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBTd2lwZS51bmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVFbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gU3dpcGU7XG59XG5cbmZ1bmN0aW9uIEltYWdlcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG5cbiAgdmFyIEltYWdlcyA9IHtcbiAgICAvKipcbiAgICAgKiBCaW5kcyBsaXN0ZW5lciB0byBnbGlkZSB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgZHJhZ3N0YXJ0YCBldmVudCBvbiB3cmFwcGVyIHRvIHByZXZlbnQgZHJhZ2dpbmcgaW1hZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgdGhpcy5kcmFnc3RhcnQpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgYGRyYWdzdGFydGAgZXZlbnQgb24gd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlci4gUHJldmVudHMgZHJhZ2dpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGRyYWdzdGFydDogZnVuY3Rpb24gZHJhZ3N0YXJ0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGZyb20gaW1hZ2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIHJlbW92ZSBhZGRlZCBFdmVudExpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEltYWdlcy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gSW1hZ2VzO1xufVxuXG5mdW5jdGlvbiBBbmNob3JzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgZGV0YWNoaW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBQcmV2ZW50cyBkZXRhY2hpbmcgb2YgYWxyZWFkeSBkZXRhY2hlZCBhbmNob3JzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkZXRhY2hlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIb2xkcyBwcmV2ZW50aW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBJZiBgdHJ1ZWAgcmVkaXJlY3Rpb24gYWZ0ZXIgY2xpY2sgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICB2YXIgcHJldmVudGVkID0gZmFsc2U7XG5cbiAgdmFyIEFuY2hvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGEgaW5pdGlhbCBzdGF0ZSBvZiBhbmNob3JzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogSG9sZHMgY29sbGVjdGlvbiBvZiBhbmNob3JzIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2EgPSBDb21wb25lbnRzLkh0bWwud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cbiAgICAgIHRoaXMuYmluZCgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdjbGljaycsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aGlzLmNsaWNrKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGV2ZW50cyBhdHRhY2hlZCB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ2NsaWNrJywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGNsaWNrIGV2ZW50LiBQcmV2ZW50cyBjbGlja3Mgd2hlbiBnbGlkZSBpcyBpbiBgcHJldmVudGAgc3RhdHVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKHByZXZlbnRlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnQgaW5zaWRlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBkZXRhY2g6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIHByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgIGlmICghZGV0YWNoZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5pdGVtc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLCB0aGlzLml0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0ucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRhY2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnRzIGluc2lkZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgICBwcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGRldGFjaGVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5pdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGFjaGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQW5jaG9ycywgJ2l0ZW1zJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY29sbGVjdGlvbiBvZiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFuY2hvcnMuX2E7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogRGV0YWNoIGFuY2hvcnMgaW5zaWRlIHNsaWRlczpcbiAgICogLSBvbiBzd2lwaW5nLCBzbyB0aGV5IHdvbid0IHJlZGlyZWN0IHRvIGl0cyBgaHJlZmAgYXR0cmlidXRlc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdzd2lwZS5tb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuZGV0YWNoKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggYW5jaG9ycyBpbnNpZGUgc2xpZGVzOlxuICAgKiAtIGFmdGVyIHN3aXBpbmcgYW5kIHRyYW5zaXRpb25zIGVuZHMsIHNvIHRoZXkgY2FuIHJlZGlyZWN0IGFmdGVyIGNsaWNrIGFnYWluXG4gICAqL1xuICBFdmVudHMub24oJ3N3aXBlLmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgQW5jaG9ycy5hdHRhY2goKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbmNob3JzIGluc2lkZSBzbGlkZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgYW5jaG9ycyB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuYXR0YWNoKCk7XG4gICAgQW5jaG9ycy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQW5jaG9ycztcbn1cblxudmFyIE5BVl9TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cImNvbnRyb2xzW25hdl1cIl0nO1xudmFyIENPTlRST0xTX1NFTEVDVE9SID0gJ1tkYXRhLWdsaWRlLWVsXj1cImNvbnRyb2xzXCJdJztcblxuZnVuY3Rpb24gQ29udHJvbHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBDb250cm9scyA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0cyBhcnJvd3MuIEJpbmRzIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgKiB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29sbGVjdGlvbiBvZiBuYXZpZ2F0aW9uIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fbiA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoTkFWX1NFTEVDVE9SKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb2xsZWN0aW9uIG9mIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fYyA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoQ09OVFJPTFNfU0VMRUNUT1IpO1xuXG4gICAgICB0aGlzLmFkZEJpbmRpbmdzKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyh0aGlzLl9uW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmU6IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKHRoaXMuX25baV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgYWN0aXZlIGNsYXNzIG9uIGl0ZW1zIGluc2lkZSBuYXZpZ2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRyb2xzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoY29udHJvbHMpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuICAgICAgdmFyIGl0ZW0gPSBjb250cm9sc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5jbGFzc2VzLmFjdGl2ZU5hdik7XG5cbiAgICAgIHNpYmxpbmdzKGl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmNsYXNzZXMuYWN0aXZlTmF2KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWN0aXZlIGNsYXNzIGZyb20gYWN0aXZlIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udHJvbHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhjb250cm9scykge1xuICAgICAgY29udHJvbHNbR2xpZGUuaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5hY3RpdmVOYXYpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgaGFuZGxlcyB0byB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQmluZGluZ3M6IGZ1bmN0aW9uIGFkZEJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYmluZCh0aGlzLl9jW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGhhbmRsZXMgZnJvbSB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQmluZGluZ3M6IGZ1bmN0aW9uIHJlbW92ZUJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHRoaXMuX2NbaV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEJpbmRlci5vbihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0sIHRoaXMuY2xpY2spO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgZXZlbnRzIGJpbmRlZCB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoZWxlbWVudHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQmluZGVyLm9mZihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYGNsaWNrYCBldmVudCBvbiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICogTW92ZXMgc2xpZGVyIGluIGRyaWVjdGlvbiBwcmVjaXNlZCBpblxuICAgICAqIGBkYXRhLWdsaWRlLWRpcmAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nbGlkZS1kaXInKSkpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ29udHJvbHMsICdpdGVtcycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbGxlY3Rpb24gb2YgdGhlIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIENvbnRyb2xzLl9jO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgbmF2aWdhdGlvbiBpdGVtOlxuICAgKiAtIGFmdGVyIG1vdW50aW5nIHRvIHNldCBpdCB0byBpbml0aWFsIGluZGV4XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbihbJ21vdW50LmFmdGVyJywgJ21vdmUuYWZ0ZXInXSwgZnVuY3Rpb24gKCkge1xuICAgIENvbnRyb2xzLnNldEFjdGl2ZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGFuZCBIVE1MIENsYXNzZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29udHJvbHMucmVtb3ZlQmluZGluZ3MoKTtcbiAgICBDb250cm9scy5yZW1vdmVBY3RpdmUoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQ29udHJvbHM7XG59XG5cbmZ1bmN0aW9uIEtleWJvYXJkIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgS2V5Ym9hcmQgPSB7XG4gICAgLyoqXG4gICAgICogQmluZHMga2V5Ym9hcmQgZXZlbnRzIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMga2V5Ym9hcmQgcHJlc3MgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdrZXl1cCcsIGRvY3VtZW50LCB0aGlzLnByZXNzKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGtleWJvYXJkIHByZXNzIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdrZXl1cCcsIGRvY3VtZW50KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleWJvYXJkJ3MgYXJyb3dzIHByZXNzIGFuZCBtb3ZpbmcgZ2xpZGUgZm93YXJkIGFuZCBiYWNrd2FyZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHByZXNzOiBmdW5jdGlvbiBwcmVzcyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPCcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBmcm9tIGtleWJvYXJkOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGFkZGVkIGV2ZW50c1xuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBldmVudHMgYmVmb3JlIHJlbW91bnRpbmdcbiAgICovXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBLZXlib2FyZC51bmJpbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50XG4gICAqIC0gb24gdXBkYXRpbmcgdG8gcmVmbGVjdCBwb3RlbnRpYWwgY2hhbmdlcyBpbiBzZXR0aW5nc1xuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgS2V5Ym9hcmQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEJpbmRlci5kZXN0cm95KCk7XG4gIH0pO1xuXG4gIHJldHVybiBLZXlib2FyZDtcbn1cblxuZnVuY3Rpb24gQXV0b3BsYXkgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBBdXRvcGxheSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhdXRvcGxheWluZyBhbmQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5ob3ZlcnBhdXNlKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhdXRvcGxheWluZyBpbiBjb25maWd1cmVkIGludGVydmFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gZm9yY2UgUnVuIGF1dG9wbGF5aW5nIHdpdGggcGFzc2VkIGludGVydmFsIHJlZ2FyZGxlc3Mgb2YgYGF1dG9wbGF5YCBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLl9pKSkge1xuICAgICAgICAgIHRoaXMuX2kgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoJz4nKTtcblxuICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICB9LCB0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3J1bm5pbmcgb2YgdGhlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5faSA9IGNsZWFySW50ZXJ2YWwodGhpcy5faSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3BsYXlpbmcgd2hpbGUgbW91c2UgaXMgb3ZlciBnbGlkZSdzIGFyZWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgQmluZGVyLm9uKCdtb3VzZW92ZXInLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RvcCgpO1xuICAgICAgfSk7XG5cbiAgICAgIEJpbmRlci5vbignbW91c2VvdXQnLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZCBtb3VzZW92ZXIgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J10sIENvbXBvbmVudHMuSHRtbC5yb290KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEF1dG9wbGF5LCAndGltZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRpbWUgcGVyaW9kIHZhbHVlIGZvciB0aGUgYXV0b3BsYXkgaW50ZXJ2YWwuIFByaW9yaXRpemVzXG4gICAgICogdGltZXMgaW4gYGRhdGEtZ2xpZGUtYXV0b3BsYXlgIGF0dHJ1YnV0ZXMgb3ZlciBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGF1dG9wbGF5ID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWdsaWRlLWF1dG9wbGF5Jyk7XG5cbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICByZXR1cm4gdG9JbnQoYXV0b3BsYXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9JbnQoR2xpZGUuc2V0dGluZ3MuYXV0b3BsYXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN0b3AgYXV0b3BsYXlpbmcgYW5kIHVuYmluZCBldmVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gY2xlYXIgZGVmaW5lZCBpbnRlcnZhbFxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnVuYmluZCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheWluZzpcbiAgICogLSBiZWZvcmUgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwYXVzaW5nIHZpYSBBUElcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBjbGVhciBkZWZpbmVkIGludGVydmFsXG4gICAqIC0gd2hpbGUgc3RhcnRpbmcgYSBzd2lwZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmJlZm9yZScsICdwYXVzZScsICdkZXN0cm95JywgJ3N3aXBlLnN0YXJ0JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuc3RvcCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RhcnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gYWZ0ZXIgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwbGF5aW5nIHZpYSBBUElcbiAgICogLSB3aGlsZSBlbmRpbmcgYSBzd2lwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmFmdGVyJywgJ3BsYXknLCAnc3dpcGUuZW5kJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5zdGFydCgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3VudCBhdXRvcGxheWluZzpcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5Lm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgZ2xpZGUgaW5zdGFuY2UgdG8gY2xlYXJ1cCBsaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQXV0b3BsYXk7XG59XG5cbi8qKlxuICogU29ydHMga2V5cyBvZiBicmVha3BvaW50IG9iamVjdCBzbyB0aGV5IHdpbGwgYmUgb3JkZXJlZCBmcm9tIGxvd2VyIHRvIGJpZ2dlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzb3J0QnJlYWtwb2ludHMocG9pbnRzKSB7XG4gIGlmIChpc09iamVjdChwb2ludHMpKSB7XG4gICAgcmV0dXJuIHNvcnRLZXlzKHBvaW50cyk7XG4gIH0gZWxzZSB7XG4gICAgd2FybignQnJlYWtwb2ludHMgb3B0aW9uIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIEJyZWFrcG9pbnRzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHNldHRpbmdzLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHJlZmVyZW5jZSB0byBicmVha3BvaW50cyBvYmplY3QgaW4gc2V0dGluZ3MuIFNvcnRzIGJyZWFrcG9pbnRzXG4gICAqIGZyb20gc21hbGxlciB0byBsYXJnZXIuIEl0IGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHByb3BlclxuICAgKiBtYXRjaGluZyBjdXJyZW50bHkgYWN0aXZlIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzKHNldHRpbmdzLmJyZWFrcG9pbnRzKTtcblxuICAvKipcbiAgICogQ2FjaGUgaW5pdGlhbCBzZXR0aW5ncyBiZWZvcmUgb3ZlcndyaXR0aW5nLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcblxuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBzZXR0aW5ncyBmb3IgY3VycmVjdGx5IG1hdGNoaW5nIG1lZGlhIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocG9pbnRzKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKHZhciBwb2ludCBpbiBwb2ludHMpIHtcbiAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KHBvaW50KSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAnICsgcG9pbnQgKyAncHgpJykubWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gcG9pbnRzW3BvaW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3ZlcndyaXRlIGluc3RhbmNlIHNldHRpbmdzIHdpdGggY3VycmVudGx5IG1hdGNoaW5nIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqIFRoaXMgaGFwcGVucyByaWdodCBhZnRlciBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICBfZXh0ZW5kcyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBnbGlkZSB3aXRoIHNldHRpbmdzIG9mIG1hdGNoZWQgYnJla3BvaW50OlxuICAgKiAtIHdpbmRvdyByZXNpemUgdG8gdXBkYXRlIHNsaWRlclxuICAgKi9cbiAgQmluZGVyLm9uKCdyZXNpemUnLCB3aW5kb3csIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHbGlkZS5zZXR0aW5ncyA9IG1lcmdlT3B0aW9ucyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG4gIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG5cbiAgLyoqXG4gICAqIFJlc29ydCBhbmQgdXBkYXRlIGRlZmF1bHQgc2V0dGluZ3M6XG4gICAqIC0gb24gcmVpbml0IHZpYSBBUEksIHNvIGJyZWFrcG9pbnQgbWF0Y2hpbmcgd2lsbCBiZSBwZXJmb3JtZWQgd2l0aCBvcHRpb25zXG4gICAqL1xuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwb2ludHMgPSBzb3J0QnJlYWtwb2ludHMocG9pbnRzKTtcblxuICAgIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCByZXNpemUgbGlzdGVuZXI6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQmluZGVyLm9mZigncmVzaXplJywgd2luZG93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufVxuXG52YXIgQ09NUE9ORU5UUyA9IHtcbiAgLy8gUmVxdWlyZWRcbiAgSHRtbDogSHRtbCxcbiAgVHJhbnNsYXRlOiBUcmFuc2xhdGUsXG4gIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICBQZWVrOiBQZWVrLFxuICBTaXplczogU2l6ZXMsXG4gIEdhcHM6IEdhcHMsXG4gIE1vdmU6IE1vdmUsXG4gIENsb25lczogQ2xvbmVzLFxuICBSZXNpemU6IFJlc2l6ZSxcbiAgQnVpbGQ6IEJ1aWxkLFxuICBSdW46IFJ1bixcblxuICAvLyBPcHRpb25hbFxuICBTd2lwZTogU3dpcGUsXG4gIEltYWdlczogSW1hZ2VzLFxuICBBbmNob3JzOiBBbmNob3JzLFxuICBDb250cm9sczogQ29udHJvbHMsXG4gIEtleWJvYXJkOiBLZXlib2FyZCxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBCcmVha3BvaW50czogQnJlYWtwb2ludHNcbn07XG5cbnZhciBHbGlkZSQxID0gZnVuY3Rpb24gKF9Db3JlKSB7XG4gIGluaGVyaXRzKEdsaWRlJCQxLCBfQ29yZSk7XG5cbiAgZnVuY3Rpb24gR2xpZGUkJDEoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xpZGUkJDEpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHbGlkZSQkMS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhHbGlkZSQkMSwgW3tcbiAgICBrZXk6ICdtb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICByZXR1cm4gZ2V0KEdsaWRlJCQxLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxLnByb3RvdHlwZSksICdtb3VudCcsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIENPTVBPTkVOVFMsIGV4dGVuc2lvbnMpKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEdsaWRlJCQxO1xufShHbGlkZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsaWRlJDE7XG4iLCJpbXBvcnQgYm9keVNjcm9sbExvY2sgZnJvbSAnYm9keS1zY3JvbGwtbG9jayc7XG5pbXBvcnQgR2xpZGUgZnJvbSAnQGdsaWRlanMvZ2xpZGUnO1xuXG5jb25zdCBkaXNhYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmRpc2FibGVCb2R5U2Nyb2xsO1xuY29uc3QgZW5hYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmVuYWJsZUJvZHlTY3JvbGw7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpO1xuY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltZycpO1xuY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKTtcbmNvbnN0IG1vZGFsVGV4dEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fdGV4dC1ibG9jaycpO1xuY29uc3QgbW9kYWxWYWx1ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX192YWx1ZS10aXRsZScpO1xuY29uc3QgbW9kYWxWYWx1ZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlLWxpc3RfX2l0ZW0nKTtcbmNvbnN0IG1vZGFsQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hZGQtYmxvY2snKTtcbmNvbnN0IG1vZGFsQWRkTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYWRkLWxlZnQnKTtcblxuY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdHJpZ2dlcicpO1xuXG5sZXQgeSA9IDA7XG5cbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbEltZy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgMjAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgMjAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbFRleHRCbG9ja3NbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDQwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsVGV4dEJsb2Nrc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgNjAwKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxWYWx1ZVRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCA4MDApO1xuICBcbiAgbW9kYWxWYWx1ZUl0ZW1zLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9LCA4MDAgKyBpICogMTAwKTtcbiAgfSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxBZGQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDYwMCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxBZGRMZWZ0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCA4MDApO1xuXG4gIGlmIChtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykuc3R5bGUudG9wID0gJy0nICsgeSArICdweCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgZGlzYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKS5zdHlsZS50b3AgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHkpO1xuICAgIGVuYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHRvZ2dsZU1vZGFsKCk7XG4gIH1cbn1cblxudHJpZ2dlcnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVNb2RhbCgpO1xuICB9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKTtcblxubmV3IEdsaWRlKCcuZ2xpZGUnLCB7XG4gIHBlclZpZXc6IDEwLFxufSkubW91bnQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhZy1saXN0X19saW5rJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59KTtcblxuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwidGhpcyIsImRpc2FibGVCb2R5U2Nyb2xsIiwiYm9keVNjcm9sbExvY2siLCJlbmFibGVCb2R5U2Nyb2xsIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXRFbGVtZW50IiwibW9kYWxJbWciLCJtb2RhbFRpdGxlIiwibW9kYWxUZXh0QmxvY2tzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsVmFsdWVUaXRsZSIsIm1vZGFsVmFsdWVJdGVtcyIsIm1vZGFsQWRkIiwibW9kYWxBZGRMZWZ0IiwidHJpZ2dlcnMiLCJ5IiwidG9nZ2xlTW9kYWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmb3JFYWNoIiwiZWwiLCJpIiwiY29udGFpbnMiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic3R5bGUiLCJ0b3AiLCJwb3NpdGlvbiIsInNjcm9sbFRvIiwid2luZG93T25DbGljayIsImV2ZW50IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkdsaWRlIiwibW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU9BLFNBQU0sRUFBRUEsU0FBTSxDQUFDLEdBQUcsQ0FBQ0EsU0FBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxBQUErQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQUFBc0MsQ0FBQyxDQUFDQyxjQUFJLENBQUMsU0FBUyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQyxnSEFBZ0gsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLDhHQUE4RyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FB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QUFDQyxFQUFELEVBQVE7S0FDeERZLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUNDLENBQUQsRUFBTztNQUNoQ0MsY0FBRjtHQURGO0NBREY7Ozs7IiwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqcHVkV3hzTENKemIzVnlZMlZ6SWpwYklpOVZjMlZ5Y3k5aGNuUmxiV3RoYkc5bGRpOVhaV0pEYjJScGJtY3ZkR1Z6ZEMxd2NtOXFaV04wTDI1dlpHVmZiVzlrZFd4bGN5OWliMlI1TFhOamNtOXNiQzFzYjJOckwyeHBZaTlpYjJSNVUyTnliMnhzVEc5amF5NXRhVzR1YW5NaUxDSXZWWE5sY25NdllYSjBaVzFyWVd4dlpYWXZWMlZpUTI5a2FXNW5MM1JsYzNRdGNISnZhbVZqZEM5dWIyUmxYMjF2WkhWc1pYTXZRR2RzYVdSbGFuTXZaMnhwWkdVdlpHbHpkQzluYkdsa1pTNWxjMjB1YW5NaUxDSXZWWE5sY25NdllYSjBaVzFyWVd4dlpYWXZWMlZpUTI5a2FXNW5MM1JsYzNRdGNISnZhbVZqZEM5emNtTXZjMk55YVhCMGN5OXRZV2x1TG1weklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaUZtZFc1amRHbHZiaWhsTEhRcGUybG1LRndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUdSbFptbHVaU1ltWkdWbWFXNWxMbUZ0WkNsa1pXWnBibVVvVzF3aVpYaHdiM0owYzF3aVhTeDBLVHRsYkhObElHbG1LRndpZFc1a1pXWnBibVZrWENJaFBYUjVjR1Z2WmlCbGVIQnZjblJ6S1hRb1pYaHdiM0owY3lrN1pXeHpaWHQyWVhJZ2J6MTdmVHQwS0c4cExHVXVZbTlrZVZOamNtOXNiRXh2WTJzOWIzMTlLSFJvYVhNc1puVnVZM1JwYjI0b1pYaHdiM0owY3lsN1hDSjFjMlVnYzNSeWFXTjBYQ0k3Wm5WdVkzUnBiMjRnY2lobEtYdHBaaWhCY25KaGVTNXBjMEZ5Y21GNUtHVXBLWHRtYjNJb2RtRnlJSFE5TUN4dlBVRnljbUY1S0dVdWJHVnVaM1JvS1R0MFBHVXViR1Z1WjNSb08zUXJLeWx2VzNSZFBXVmJkRjA3Y21WMGRYSnVJRzk5Y21WMGRYSnVJRUZ5Y21GNUxtWnliMjBvWlNsOVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNYQ0pmWDJWelRXOWtkV3hsWENJc2UzWmhiSFZsT2lFd2ZTazdkbUZ5SUd3OUlURTdhV1lvWENKMWJtUmxabWx1WldSY0lpRTlkSGx3Wlc5bUlIZHBibVJ2ZHlsN2RtRnlJR1U5ZTJkbGRDQndZWE56YVhabEtDbDdiRDBoTUgxOU8zZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWRHVnpkRkJoYzNOcGRtVmNJaXh1ZFd4c0xHVXBMSGRwYm1SdmR5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRndpZEdWemRGQmhjM05wZG1WY0lpeHVkV3hzTEdVcGZYWmhjaUJrUFZ3aWRXNWtaV1pwYm1Wa1hDSWhQWFI1Y0dWdlppQjNhVzVrYjNjbUpuZHBibVJ2ZHk1dVlYWnBaMkYwYjNJbUpuZHBibVJ2ZHk1dVlYWnBaMkYwYjNJdWNHeGhkR1p2Y20wbUppOXBVQ2hoWkh4b2IyNWxmRzlrS1M4dWRHVnpkQ2gzYVc1a2IzY3VibUYyYVdkaGRHOXlMbkJzWVhSbWIzSnRLU3hqUFZ0ZExIVTlJVEVzWVQwdE1TeHpQWFp2YVdRZ01DeDJQWFp2YVdRZ01DeG1QV1oxYm1OMGFXOXVLSFFwZTNKbGRIVnliaUJqTG5OdmJXVW9ablZ1WTNScGIyNG9aU2w3Y21WMGRYSnVJU2doWlM1dmNIUnBiMjV6TG1Gc2JHOTNWRzkxWTJoTmIzWmxmSHdoWlM1dmNIUnBiMjV6TG1Gc2JHOTNWRzkxWTJoTmIzWmxLSFFwS1gwcGZTeHRQV1oxYm1OMGFXOXVLR1VwZTNaaGNpQjBQV1Y4ZkhkcGJtUnZkeTVsZG1WdWREdHlaWFIxY200aElXWW9kQzUwWVhKblpYUXBmSHdvTVR4MExuUnZkV05vWlhNdWJHVnVaM1JvZkh3b2RDNXdjbVYyWlc1MFJHVm1ZWFZzZENZbWRDNXdjbVYyWlc1MFJHVm1ZWFZzZENncExDRXhLU2w5TEc4OVpuVnVZM1JwYjI0b0tYdHpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2w3ZG05cFpDQXdJVDA5ZGlZbUtHUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVXVjR0ZrWkdsdVoxSnBaMmgwUFhZc2RqMTJiMmxrSURBcExIWnZhV1FnTUNFOVBYTW1KaWhrYjJOMWJXVnVkQzVpYjJSNUxuTjBlV3hsTG05MlpYSm1iRzkzUFhNc2N6MTJiMmxrSURBcGZTbDlPMlY0Y0c5eWRITXVaR2x6WVdKc1pVSnZaSGxUWTNKdmJHdzlablZ1WTNScGIyNG9hU3hsS1h0cFppaGtLWHRwWmlnaGFTbHlaWFIxY200Z2RtOXBaQ0JqYjI1emIyeGxMbVZ5Y205eUtGd2laR2x6WVdKc1pVSnZaSGxUWTNKdmJHd2dkVzV6ZFdOalpYTnpablZzSUMwZ2RHRnlaMlYwUld4bGJXVnVkQ0J0ZFhOMElHSmxJSEJ5YjNacFpHVmtJSGRvWlc0Z1kyRnNiR2x1WnlCa2FYTmhZbXhsUW05a2VWTmpjbTlzYkNCdmJpQkpUMU1nWkdWMmFXTmxjeTVjSWlrN2FXWW9hU1ltSVdNdWMyOXRaU2htZFc1amRHbHZiaWhsS1h0eVpYUjFjbTRnWlM1MFlYSm5aWFJGYkdWdFpXNTBQVDA5YVgwcEtYdDJZWElnZEQxN2RHRnlaMlYwUld4bGJXVnVkRHBwTEc5d2RHbHZibk02Wlh4OGUzMTlPMk05VzEwdVkyOXVZMkYwS0hJb1l5a3NXM1JkS1N4cExtOXVkRzkxWTJoemRHRnlkRDFtZFc1amRHbHZiaWhsS1hzeFBUMDlaUzUwWVhKblpYUlViM1ZqYUdWekxteGxibWQwYUNZbUtHRTlaUzUwWVhKblpYUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGa3BmU3hwTG05dWRHOTFZMmh0YjNabFBXWjFibU4wYVc5dUtHVXBlM1poY2lCMExHOHNiaXh5T3pFOVBUMWxMblJoY21kbGRGUnZkV05vWlhNdWJHVnVaM1JvSmlZb2J6MXBMSEk5S0hROVpTa3VkR0Z5WjJWMFZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWkxXRXNJV1lvZEM1MFlYSm5aWFFwSmlZb2J5WW1NRDA5UFc4dWMyTnliMnhzVkc5d0ppWXdQSEkvYlNoMEtUb29iajF2S1NZbWJpNXpZM0p2Ykd4SVpXbG5hSFF0Ymk1elkzSnZiR3hVYjNBOFBXNHVZMnhwWlc1MFNHVnBaMmgwSmlaeVBEQS9iU2gwS1RwMExuTjBiM0JRY205d1lXZGhkR2x2YmlncEtTbDlMSFY4ZkNoa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWRHOTFZMmh0YjNabFhDSXNiU3hzUDN0d1lYTnphWFpsT2lFeGZUcDJiMmxrSURBcExIVTlJVEFwZlgxbGJITmxlMjQ5WlN4elpYUlVhVzFsYjNWMEtHWjFibU4wYVc5dUtDbDdhV1lvZG05cFpDQXdQVDA5ZGlsN2RtRnlJR1U5SVNGdUppWWhNRDA5UFc0dWNtVnpaWEoyWlZOamNtOXNiRUpoY2tkaGNDeDBQWGRwYm1SdmR5NXBibTVsY2xkcFpIUm9MV1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWpiR2xsYm5SWGFXUjBhRHRsSmlZd1BIUW1KaWgyUFdSdlkzVnRaVzUwTG1KdlpIa3VjM1I1YkdVdWNHRmtaR2x1WjFKcFoyaDBMR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1V1Y0dGa1pHbHVaMUpwWjJoMFBYUXJYQ0p3ZUZ3aUtYMTJiMmxrSURBOVBUMXpKaVlvY3oxa2IyTjFiV1Z1ZEM1aWIyUjVMbk4wZVd4bExtOTJaWEptYkc5M0xHUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVXViM1psY21ac2IzYzlYQ0pvYVdSa1pXNWNJaWw5S1R0MllYSWdiejE3ZEdGeVoyVjBSV3hsYldWdWREcHBMRzl3ZEdsdmJuTTZaWHg4ZTMxOU8yTTlXMTB1WTI5dVkyRjBLSElvWXlrc1cyOWRLWDEyWVhJZ2JuMHNaWGh3YjNKMGN5NWpiR1ZoY2tGc2JFSnZaSGxUWTNKdmJHeE1iMk5yY3oxbWRXNWpkR2x2YmlncGUyUS9LR011Wm05eVJXRmphQ2htZFc1amRHbHZiaWhsS1h0bExuUmhjbWRsZEVWc1pXMWxiblF1YjI1MGIzVmphSE4wWVhKMFBXNTFiR3dzWlM1MFlYSm5aWFJGYkdWdFpXNTBMbTl1ZEc5MVkyaHRiM1psUFc1MWJHeDlLU3gxSmlZb1pHOWpkVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaGNJblJ2ZFdOb2JXOTJaVndpTEcwc2JEOTdjR0Z6YzJsMlpUb2hNWDA2ZG05cFpDQXdLU3gxUFNFeEtTeGpQVnRkTEdFOUxURXBPaWh2S0Nrc1l6MWJYU2w5TEdWNGNHOXlkSE11Wlc1aFlteGxRbTlrZVZOamNtOXNiRDFtZFc1amRHbHZiaWgwS1h0cFppaGtLWHRwWmlnaGRDbHlaWFIxY200Z2RtOXBaQ0JqYjI1emIyeGxMbVZ5Y205eUtGd2laVzVoWW14bFFtOWtlVk5qY205c2JDQjFibk4xWTJObGMzTm1kV3dnTFNCMFlYSm5aWFJGYkdWdFpXNTBJRzExYzNRZ1ltVWdjSEp2ZG1sa1pXUWdkMmhsYmlCallXeHNhVzVuSUdWdVlXSnNaVUp2WkhsVFkzSnZiR3dnYjI0Z1NVOVRJR1JsZG1salpYTXVYQ0lwTzNRdWIyNTBiM1ZqYUhOMFlYSjBQVzUxYkd3c2RDNXZiblJ2ZFdOb2JXOTJaVDF1ZFd4c0xHTTlZeTVtYVd4MFpYSW9ablZ1WTNScGIyNG9aU2w3Y21WMGRYSnVJR1V1ZEdGeVoyVjBSV3hsYldWdWRDRTlQWFI5S1N4MUppWXdQVDA5WXk1c1pXNW5kR2dtSmloa2IyTjFiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtGd2lkRzkxWTJodGIzWmxYQ0lzYlN4c1AzdHdZWE56YVhabE9pRXhmVHAyYjJsa0lEQXBMSFU5SVRFcGZXVnNjMlVnTVQwOVBXTXViR1Z1WjNSb0ppWmpXekJkTG5SaGNtZGxkRVZzWlcxbGJuUTlQVDEwUHlodktDa3NZejFiWFNrNll6MWpMbVpwYkhSbGNpaG1kVzVqZEdsdmJpaGxLWHR5WlhSMWNtNGdaUzUwWVhKblpYUkZiR1Z0Wlc1MElUMDlkSDBwZlgwcE8xeHVJaXdpTHlvaFhHNGdLaUJIYkdsa1pTNXFjeUIyTXk0eUxqUmNiaUFxSUNoaktTQXlNREV6TFRJd01UZ2dTc1NaWkhKNlpXb2dRMmhoeFlKMVltVnJJRHhxWldSeWVtVnFMbU5vWVd4MVltVnJRR2R0WVdsc0xtTnZiVDRnS0doMGRIQTZMeTlxWldSeWVtVnFZMmhoYkhWaVpXc3VZMjl0THlsY2JpQXFJRkpsYkdWaGMyVmtJSFZ1WkdWeUlIUm9aU0JOU1ZRZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1MllYSWdaR1ZtWVhWc2RITWdQU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlVlWEJsSUc5bUlIUm9aU0J0YjNabGJXVnVkQzVjYmlBZ0lDcGNiaUFnSUNvZ1FYWmhhV3hoWW14bElIUjVjR1Z6T2x4dUlDQWdLaUJnYzJ4cFpHVnlZQ0F0SUZKbGQybHVaSE1nYzJ4cFpHVnlJSFJ2SUhSb1pTQnpkR0Z5ZEM5bGJtUWdkMmhsYmlCcGRDQnlaV0ZqYUdWeklIUm9aU0JtYVhKemRDQnZjaUJzWVhOMElITnNhV1JsTGx4dUlDQWdLaUJnWTJGeWIzVnpaV3hnSUMwZ1EyaGhibWRsY3lCemJHbGtaWE1nZDJsMGFHOTFkQ0J6ZEdGeWRHbHVaeUJ2ZG1WeUlIZG9aVzRnYVhRZ2NtVmhZMmhsY3lCMGFHVWdabWx5YzNRZ2IzSWdiR0Z6ZENCemJHbGtaUzVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTFOMGNtbHVaMzFjYmlBZ0lDb3ZYRzRnSUhSNWNHVTZJQ2R6Ykdsa1pYSW5MRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkR0Z5ZENCaGRDQnpjR1ZqYVdacFl5QnpiR2xrWlNCdWRXMWlaWElnWkdWbWFXNWxaQ0IzYVhSb0lIcGxjbTh0WW1GelpXUWdhVzVrWlhndVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOVhHNGdJQ0FxTDF4dUlDQnpkR0Z5ZEVGME9pQXdMRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkJJRzUxYldKbGNpQnZaaUJ6Ykdsa1pYTWdkbWx6YVdKc1pTQnZiaUIwYUdVZ2MybHVaMnhsSUhacFpYZHdiM0owTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ2NHVnlWbWxsZHpvZ01TeGNibHh1SUNBdktpcGNiaUFnSUNvZ1JtOWpkWE1nWTNWeWNtVnVkR3g1SUdGamRHbDJaU0J6Ykdsa1pTQmhkQ0JoSUhOd1pXTnBabWxsWkNCd2IzTnBkR2x2YmlCcGJpQjBhR1VnZEhKaFkyc3VYRzRnSUNBcVhHNGdJQ0FxSUVGMllXbHNZV0pzWlNCcGJuQjFkSE02WEc0Z0lDQXFJR0JqWlc1MFpYSmdJQzBnUTNWeWNtVnVkQ0J6Ykdsa1pTQjNhV3hzSUdKbElHRnNkMkY1Y3lCbWIyTjFjMlZrSUdGMElIUm9aU0JqWlc1MFpYSWdiMllnWVNCMGNtRmpheTVjYmlBZ0lDb2dZREFzTVN3eUxETXVMaTVnSUMwZ1EzVnljbVZ1ZENCemJHbGtaU0IzYVd4c0lHSmxJR1p2WTNWelpXUWdiMjRnZEdobElITndaV05wWm1sbFpDQjZaWEp2TFdKaGMyVmtJR2x1WkdWNExseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdVM1J5YVc1bmZFNTFiV0psY24xY2JpQWdJQ292WEc0Z0lHWnZZM1Z6UVhRNklEQXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFRWdjMmw2WlNCdlppQjBhR1VnWjJGd0lHRmtaR1ZrSUdKbGRIZGxaVzRnYzJ4cFpHVnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNBZ0tpOWNiaUFnWjJGd09pQXhNQ3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRMmhoYm1kbElITnNhV1JsY3lCaFpuUmxjaUJoSUhOd1pXTnBabWxsWkNCcGJuUmxjblpoYkM0Z1ZYTmxJR0JtWVd4elpXQWdabTl5SUhSMWNtNXBibWNnYjJabUlHRjFkRzl3YkdGNUxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZFSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQmhkWFJ2Y0d4aGVUb2dabUZzYzJVc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZOMGIzQWdZWFYwYjNCc1lYa2diMjRnYlc5MWMyVnZkbVZ5SUdWMlpXNTBMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3UW05dmJHVmhibjFjYmlBZ0lDb3ZYRzRnSUdodmRtVnljR0YxYzJVNklIUnlkV1VzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUZzYkc5M0lHWnZjaUJqYUdGdVoybHVaeUJ6Ykdsa1pYTWdkMmwwYUNCc1pXWjBJR0Z1WkNCeWFXZG9kQ0JyWlhsaWIyRnlaQ0JoY25KdmQzTXVYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRDYjI5c1pXRnVmVnh1SUNBZ0tpOWNiaUFnYTJWNVltOWhjbVE2SUhSeWRXVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBiM0FnY25WdWJtbHVaeUJnY0dWeVZtbGxkMkFnYm5WdFltVnlJRzltSUhOc2FXUmxjeUJtY205dElIUm9aU0JsYm1RdUlGVnpaU0IwYUdselhHNGdJQ0FxSUc5d2RHbHZiaUJwWmlCNWIzVWdaRzl1SjNRZ2QyRnVkQ0IwYnlCb1lYWmxJR0Z1SUdWdGNIUjVJSE53WVdObElHRm1kR1Z5WEc0Z0lDQXFJR0VnYzJ4cFpHVnlMaUJYYjNKcmN5QnZibXg1SUhkcGRHZ2dZSE5zYVdSbGNtQWdkSGx3WlNCaGJtUWdZVnh1SUNBZ0tpQnViMjR0WTJWdWRHVnlaV1FnWUdadlkzVnpRWFJnSUhObGRIUnBibWN1WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdLaTljYmlBZ1ltOTFibVE2SUdaaGJITmxMRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQk5hVzVwYldGc0lITjNhWEJsSUdScGMzUmhibU5sSUc1bFpXUmxaQ0IwYnlCamFHRnVaMlVnZEdobElITnNhV1JsTGlCVmMyVWdZR1poYkhObFlDQm1iM0lnZEhWeWJtbHVaeUJ2Wm1ZZ1lTQnpkMmx3YVc1bkxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZFSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQnpkMmx3WlZSb2NtVnphRzlzWkRvZ09EQXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFMXBibWx0WVd3Z2JXOTFjMlVnWkhKaFp5QmthWE4wWVc1alpTQnVaV1ZrWldRZ2RHOGdZMmhoYm1kbElIUm9aU0J6Ykdsa1pTNGdWWE5sSUdCbVlXeHpaV0FnWm05eUlIUjFjbTVwYm1jZ2IyWm1JR0VnWkhKaFoyZHBibWN1WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0T2RXMWlaWEo4UW05dmJHVmhibjFjYmlBZ0lDb3ZYRzRnSUdSeVlXZFVhSEpsYzJodmJHUTZJREV5TUN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVNCdFlYaHBiWFZ0SUc1MWJXSmxjaUJ2WmlCemJHbGtaWE1nZEc4Z2QyaHBZMmdnYlc5MlpXMWxiblFnZDJsc2JDQmlaU0J0WVdSbElHOXVJSE4zYVhCcGJtY2diM0lnWkhKaFoyZHBibWN1SUZWelpTQmdabUZzYzJWZ0lHWnZjaUIxYm14cGJXbDBaV1F1WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0T2RXMWlaWEo4UW05dmJHVmhibjFjYmlBZ0lDb3ZYRzRnSUhCbGNsUnZkV05vT2lCbVlXeHpaU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dUVzkyYVc1bklHUnBjM1JoYm1ObElISmhkR2x2SUc5bUlIUm9aU0J6Ykdsa1pYTWdiMjRnWVNCemQybHdhVzVuSUdGdVpDQmtjbUZuWjJsdVp5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFnSUNvdlhHNGdJSFJ2ZFdOb1VtRjBhVzg2SURBdU5TeGNibHh1SUNBdktpcGNiaUFnSUNvZ1FXNW5iR1VnY21WeGRXbHlaV1FnZEc4Z1lXTjBhWFpoZEdVZ2MyeHBaR1Z6SUcxdmRtbHVaeUJ2YmlCemQybHdhVzVuSUc5eUlHUnlZV2RuYVc1bkxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ0FnS2k5Y2JpQWdkRzkxWTJoQmJtZHNaVG9nTkRVc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVSMWNtRjBhVzl1SUc5bUlIUm9aU0JoYm1sdFlYUnBiMjRnYVc0Z2JXbHNiR2x6WldOdmJtUnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNBZ0tpOWNiaUFnWVc1cGJXRjBhVzl1UkhWeVlYUnBiMjQ2SURRd01DeGNibHh1SUNBdktpcGNiaUFnSUNvZ1FXeHNiM2R6SUd4dmIzQnBibWNnZEdobElHQnpiR2xrWlhKZ0lIUjVjR1V1SUZOc2FXUmxjaUIzYVd4c0lISmxkMmx1WkNCMGJ5QjBhR1VnWm1seWMzUXZiR0Z6ZENCemJHbGtaU0IzYUdWdUlHbDBKM01nWVhRZ2RHaGxJSE4wWVhKMEwyVnVaQzVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTBKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1SUNCeVpYZHBibVE2SUhSeWRXVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFUjFjbUYwYVc5dUlHOW1JSFJvWlNCeVpYZHBibVJwYm1jZ1lXNXBiV0YwYVc5dUlHOW1JSFJvWlNCZ2MyeHBaR1Z5WUNCMGVYQmxJR2x1SUcxcGJHeHBjMlZqYjI1a2N5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFnSUNvdlhHNGdJSEpsZDJsdVpFUjFjbUYwYVc5dU9pQTRNREFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVZoYzJsdVp5Qm1kVzVqZEdsdmJpQm1iM0lnZEdobElHRnVhVzFoZEdsdmJpNWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMU4wY21sdVozMWNiaUFnSUNvdlhHNGdJR0Z1YVcxaGRHbHZibFJwYldsdVowWjFibU02SUNkamRXSnBZeTFpWlhwcFpYSW9MakUyTlN3Z0xqZzBNQ3dnTGpRME1Dd2dNU2tuTEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJVYUhKdmRIUnNaU0JqYjNOMGJIa2daWFpsYm5SeklHRjBJRzF2YzNRZ2IyNWpaU0J3WlhJZ1pYWmxjbmtnZDJGcGRDQnRhV3hzYVhObFkyOXVaSE11WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0T2RXMWlaWEo5WEc0Z0lDQXFMMXh1SUNCMGFISnZkSFJzWlRvZ01UQXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFMXZkbWx1WnlCa2FYSmxZM1JwYjI0Z2JXOWtaUzVjYmlBZ0lDcGNiaUFnSUNvZ1FYWmhhV3hoWW14bElHbHVjSFYwY3pwY2JpQWdJQ29nTFNBbmJIUnlKeUF0SUd4bFpuUWdkRzhnY21sbmFIUWdiVzkyWlcxbGJuUXNYRzRnSUNBcUlDMGdKM0owYkNjZ0xTQnlhV2RvZENCMGJ5QnNaV1owSUcxdmRtVnRaVzUwTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1UzUnlhVzVuZlZ4dUlDQWdLaTljYmlBZ1pHbHlaV04wYVc5dU9pQW5iSFJ5Snl4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVkdobElHUnBjM1JoYm1ObElIWmhiSFZsSUc5bUlIUm9aU0J1WlhoMElHRnVaQ0J3Y21WMmFXOTFjeUIyYVdWM2NHOXlkSE1nZDJocFkyaGNiaUFnSUNvZ2FHRjJaU0IwYnlCd1pXVnJJR2x1SUhSb1pTQmpkWEp5Wlc1MElIWnBaWGN1SUVGalkyVndkSE1nYm5WdFltVnlJR0Z1WkZ4dUlDQWdLaUJ3YVhobGJITWdZWE1nWVNCemRISnBibWN1SUV4bFpuUWdZVzVrSUhKcFoyaDBJSEJsWld0cGJtY2dZMkZ1SUdKbFhHNGdJQ0FxSUhObGRDQjFjQ0J6WlhCaGNtRjBaV3g1SUhkcGRHZ2dZU0JrYVhKbFkzUnBiMjV6SUc5aWFtVmpkQzVjYmlBZ0lDcGNiaUFnSUNvZ1JtOXlJR1Y0WVcxd2JHVTZYRzRnSUNBcUlHQXhNREJnSUMwZ1VHVmxheUF4TURCd2VDQnZiaUIwYUdVZ1ltOTBhQ0J6YVdSbGN5NWNiaUFnSUNvZ2V5QmlaV1p2Y21VNklERXdNQ3dnWVdaMFpYSTZJRFV3SUgxZ0lDMGdVR1ZsYXlBeE1EQndlQ0J2YmlCMGFHVWdiR1ZtZENCemFXUmxJR0Z1WkNBMU1IQjRJRzl1SUhSb1pTQnlhV2RvZENCemFXUmxMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmRk4wY21sdVozeFBZbXBsWTNSOVhHNGdJQ0FxTDF4dUlDQndaV1ZyT2lBd0xGeHVYRzRnSUM4cUtseHVJQ0FnS2lCRGIyeHNaV04wYVc5dUlHOW1JRzl3ZEdsdmJuTWdZWEJ3YkdsbFpDQmhkQ0J6Y0dWamFXWnBaV1FnYldWa2FXRWdZbkpsWVd0d2IybHVkSE11WEc0Z0lDQXFJRVp2Y2lCbGVHRnRjR3hsT2lCa2FYTndiR0Y1SUhSM2J5QnpiR2xrWlhNZ2NHVnlJSFpwWlhjZ2RXNWtaWElnT0RBd2NIZ3VYRzRnSUNBcUlHQjdYRzRnSUNBcUlDQWdKemd3TUhCNEp6b2dlMXh1SUNBZ0tpQWdJQ0FnY0dWeVZtbGxkem9nTWx4dUlDQWdLaUFnSUgxY2JpQWdJQ29nZldCY2JpQWdJQ292WEc0Z0lHSnlaV0ZyY0c5cGJuUnpPaUI3ZlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUTI5c2JHVmpkR2x2YmlCdlppQnBiblJsY201aGJHeDVJSFZ6WldRZ1NGUk5UQ0JqYkdGemMyVnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRHOWtieUJTWldaaFkzUnZjaUJnYzJ4cFpHVnlZQ0JoYm1RZ1lHTmhjbTkxYzJWc1lDQndjbTl3WlhKMGFXVnpJSFJ2SUhOcGJtZHNaU0JnZEhsd1pUb2dleUJ6Ykdsa1pYSTZJQ2NuTENCallYSnZkWE5sYkRvZ0p5Y2dmV0FnYjJKcVpXTjBYRzRnSUNBcUlFQjBlWEJsSUh0UFltcGxZM1I5WEc0Z0lDQXFMMXh1SUNCamJHRnpjMlZ6T2lCN1hHNGdJQ0FnWkdseVpXTjBhVzl1T2lCN1hHNGdJQ0FnSUNCc2RISTZJQ2RuYkdsa1pTMHRiSFJ5Snl4Y2JpQWdJQ0FnSUhKMGJEb2dKMmRzYVdSbExTMXlkR3duWEc0Z0lDQWdmU3hjYmlBZ0lDQnpiR2xrWlhJNklDZG5iR2xrWlMwdGMyeHBaR1Z5Snl4Y2JpQWdJQ0JqWVhKdmRYTmxiRG9nSjJkc2FXUmxMUzFqWVhKdmRYTmxiQ2NzWEc0Z0lDQWdjM2RwY0dWaFlteGxPaUFuWjJ4cFpHVXRMWE4zYVhCbFlXSnNaU2NzWEc0Z0lDQWdaSEpoWjJkcGJtYzZJQ2RuYkdsa1pTMHRaSEpoWjJkcGJtY25MRnh1SUNBZ0lHTnNiMjVsVTJ4cFpHVTZJQ2RuYkdsa1pWOWZjMnhwWkdVdExXTnNiMjVsSnl4Y2JpQWdJQ0JoWTNScGRtVk9ZWFk2SUNkbmJHbGtaVjlmWW5Wc2JHVjBMUzFoWTNScGRtVW5MRnh1SUNBZ0lHRmpkR2wyWlZOc2FXUmxPaUFuWjJ4cFpHVmZYM05zYVdSbExTMWhZM1JwZG1VbkxGeHVJQ0FnSUdScGMyRmliR1ZrUVhKeWIzYzZJQ2RuYkdsa1pWOWZZWEp5YjNjdExXUnBjMkZpYkdWa0oxeHVJQ0I5WEc1OU8xeHVYRzR2S2lwY2JpQXFJRTkxZEhCMWRITWdkMkZ5Ym1sdVp5QnRaWE56WVdkbElIUnZJSFJvWlNCaWIzZHpaWElnWTI5dWMyOXNaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdJSHRUZEhKcGJtZDlJRzF6WjF4dUlDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnZDJGeWJpaHRjMmNwSUh0Y2JpQWdZMjl1YzI5c1pTNWxjbkp2Y2loY0lsdEhiR2xrWlNCM1lYSnVYVG9nWENJZ0t5QnRjMmNwTzF4dWZWeHVYRzUyWVhJZ1gzUjVjR1Z2WmlBOUlIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCMGVYQmxiMllnVTNsdFltOXNMbWwwWlhKaGRHOXlJRDA5UFNCY0luTjViV0p2YkZ3aUlEOGdablZ1WTNScGIyNGdLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHOWlhanRjYm4wZ09pQm1kVzVqZEdsdmJpQW9iMkpxS1NCN1hHNGdJSEpsZEhWeWJpQnZZbW9nSmlZZ2RIbHdaVzltSUZONWJXSnZiQ0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lJQ1ltSUc5aWFpNWpiMjV6ZEhKMVkzUnZjaUE5UFQwZ1UzbHRZbTlzSUNZbUlHOWlhaUFoUFQwZ1UzbHRZbTlzTG5CeWIzUnZkSGx3WlNBL0lGd2ljM2x0WW05c1hDSWdPaUIwZVhCbGIyWWdiMkpxTzF4dWZUdGNibHh1ZG1GeUlHTnNZWE56UTJGc2JFTm9aV05ySUQwZ1puVnVZM1JwYjI0Z0tHbHVjM1JoYm1ObExDQkRiMjV6ZEhKMVkzUnZjaWtnZTF4dUlDQnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWENKRFlXNXViM1FnWTJGc2JDQmhJR05zWVhOeklHRnpJR0VnWm5WdVkzUnBiMjVjSWlrN1hHNGdJSDFjYm4wN1hHNWNiblpoY2lCamNtVmhkR1ZEYkdGemN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdablZ1WTNScGIyNGdaR1ZtYVc1bFVISnZjR1Z5ZEdsbGN5aDBZWEpuWlhRc0lIQnliM0J6S1NCN1hHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCd2NtOXdjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJR1JsYzJOeWFYQjBiM0lnUFNCd2NtOXdjMXRwWFR0Y2JpQWdJQ0FnSUdSbGMyTnlhWEIwYjNJdVpXNTFiV1Z5WVdKc1pTQTlJR1JsYzJOeWFYQjBiM0l1Wlc1MWJXVnlZV0pzWlNCOGZDQm1ZV3h6WlR0Y2JpQWdJQ0FnSUdSbGMyTnlhWEIwYjNJdVkyOXVabWxuZFhKaFlteGxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lHbG1JQ2hjSW5aaGJIVmxYQ0lnYVc0Z1pHVnpZM0pwY0hSdmNpa2daR1Z6WTNKcGNIUnZjaTUzY21sMFlXSnNaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvZEdGeVoyVjBMQ0JrWlhOamNtbHdkRzl5TG10bGVTd2daR1Z6WTNKcGNIUnZjaWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2hEYjI1emRISjFZM1J2Y2l3Z2NISnZkRzlRY205d2N5d2djM1JoZEdsalVISnZjSE1wSUh0Y2JpQWdJQ0JwWmlBb2NISnZkRzlRY205d2N5a2daR1ZtYVc1bFVISnZjR1Z5ZEdsbGN5aERiMjV6ZEhKMVkzUnZjaTV3Y205MGIzUjVjR1VzSUhCeWIzUnZVSEp2Y0hNcE8xeHVJQ0FnSUdsbUlDaHpkR0YwYVdOUWNtOXdjeWtnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWhEYjI1emRISjFZM1J2Y2l3Z2MzUmhkR2xqVUhKdmNITXBPMXh1SUNBZ0lISmxkSFZ5YmlCRGIyNXpkSEoxWTNSdmNqdGNiaUFnZlR0Y2JuMG9LVHRjYmx4dWRtRnlJRjlsZUhSbGJtUnpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpQjhmQ0JtZFc1amRHbHZiaUFvZEdGeVoyVjBLU0I3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnZG1GeUlITnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnpiM1Z5WTJVcElIdGNiaUFnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYzI5MWNtTmxMQ0JyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJSFJoY21kbGRGdHJaWGxkSUQwZ2MyOTFjbU5sVzJ0bGVWMDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIUmhjbWRsZER0Y2JuMDdYRzVjYm5aaGNpQm5aWFFnUFNCbWRXNWpkR2x2YmlCblpYUW9iMkpxWldOMExDQndjbTl3WlhKMGVTd2djbVZqWldsMlpYSXBJSHRjYmlBZ2FXWWdLRzlpYW1WamRDQTlQVDBnYm5Wc2JDa2diMkpxWldOMElEMGdSblZ1WTNScGIyNHVjSEp2ZEc5MGVYQmxPMXh1SUNCMllYSWdaR1Z6WXlBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0lvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3WEc1Y2JpQWdhV1lnS0dSbGMyTWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhaaGNpQndZWEpsYm5RZ1BTQlBZbXBsWTNRdVoyVjBVSEp2ZEc5MGVYQmxUMllvYjJKcVpXTjBLVHRjYmx4dUlDQWdJR2xtSUNod1lYSmxiblFnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIxYm1SbFptbHVaV1E3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCblpYUW9jR0Z5Wlc1MExDQndjbTl3WlhKMGVTd2djbVZqWldsMlpYSXBPMXh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJR2xtSUNoY0luWmhiSFZsWENJZ2FXNGdaR1Z6WXlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJrWlhOakxuWmhiSFZsTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhaaGNpQm5aWFIwWlhJZ1BTQmtaWE5qTG1kbGREdGNibHh1SUNBZ0lHbG1JQ2huWlhSMFpYSWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwZEdWeUxtTmhiR3dvY21WalpXbDJaWElwTzF4dUlDQjlYRzU5TzF4dVhHNTJZWElnYVc1b1pYSnBkSE1nUFNCbWRXNWpkR2x2YmlBb2MzVmlRMnhoYzNNc0lITjFjR1Z5UTJ4aGMzTXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnpkWEJsY2tOc1lYTnpJQ0U5UFNCY0ltWjFibU4wYVc5dVhDSWdKaVlnYzNWd1pYSkRiR0Z6Y3lBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSlRkWEJsY2lCbGVIQnlaWE56YVc5dUlHMTFjM1FnWldsMGFHVnlJR0psSUc1MWJHd2diM0lnWVNCbWRXNWpkR2x2Yml3Z2JtOTBJRndpSUNzZ2RIbHdaVzltSUhOMWNHVnlRMnhoYzNNcE8xeHVJQ0I5WEc1Y2JpQWdjM1ZpUTJ4aGMzTXVjSEp2ZEc5MGVYQmxJRDBnVDJKcVpXTjBMbU55WldGMFpTaHpkWEJsY2tOc1lYTnpJQ1ltSUhOMWNHVnlRMnhoYzNNdWNISnZkRzkwZVhCbExDQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSTZJSHRjYmlBZ0lDQWdJSFpoYkhWbE9pQnpkV0pEYkdGemN5eGNiaUFnSUNBZ0lHVnVkVzFsY21GaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ2QzSnBkR0ZpYkdVNklIUnlkV1VzWEc0Z0lDQWdJQ0JqYjI1bWFXZDFjbUZpYkdVNklIUnlkV1ZjYmlBZ0lDQjlYRzRnSUgwcE8xeHVJQ0JwWmlBb2MzVndaWEpEYkdGemN5a2dUMkpxWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltSUQ4Z1QySnFaV04wTG5ObGRGQnliM1J2ZEhsd1pVOW1LSE4xWWtOc1lYTnpMQ0J6ZFhCbGNrTnNZWE56S1NBNklITjFZa05zWVhOekxsOWZjSEp2ZEc5Zlh5QTlJSE4xY0dWeVEyeGhjM003WEc1OU8xeHVYRzUyWVhJZ2NHOXpjMmxpYkdWRGIyNXpkSEoxWTNSdmNsSmxkSFZ5YmlBOUlHWjFibU4wYVc5dUlDaHpaV3htTENCallXeHNLU0I3WEc0Z0lHbG1JQ2doYzJWc1ppa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNaV1psY21WdVkyVkZjbkp2Y2loY0luUm9hWE1nYUdGemJpZDBJR0psWlc0Z2FXNXBkR2xoYkdselpXUWdMU0J6ZFhCbGNpZ3BJR2hoYzI0bmRDQmlaV1Z1SUdOaGJHeGxaRndpS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCallXeHNJQ1ltSUNoMGVYQmxiMllnWTJGc2JDQTlQVDBnWENKdlltcGxZM1JjSWlCOGZDQjBlWEJsYjJZZ1kyRnNiQ0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0EvSUdOaGJHd2dPaUJ6Wld4bU8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCRGIyNTJaWEowY3lCMllXeDFaU0JsYm5SbGNtVmtJR0Z6SUc1MWJXSmxjbHh1SUNvZ2IzSWdjM1J5YVc1bklIUnZJR2x1ZEdWblpYSWdkbUZzZFdVdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhaaGJIVmxYRzRnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUIwYjBsdWRDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdjR0Z5YzJWSmJuUW9kbUZzZFdVcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVOdmJuWmxjblJ6SUhaaGJIVmxJR1Z1ZEdWeVpXUWdZWE1nYm5WdFltVnlYRzRnS2lCdmNpQnpkSEpwYm1jZ2RHOGdabXhoZENCMllXeDFaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdkbUZzZFdWY2JpQXFJRUJ5WlhSMWNtNXpJSHRPZFcxaVpYSjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlIUnZSbXh2WVhRb2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlIQmhjbk5sUm14dllYUW9kbUZzZFdVcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVsdVpHbGpZWFJsY3lCM2FHVjBhR1Z5SUhSb1pTQnpjR1ZqYVdacFpXUWdkbUZzZFdVZ2FYTWdZU0J6ZEhKcGJtY3VYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdLbjBnSUNCMllXeDFaVnh1SUNvZ1FISmxkSFZ5YmlCN1FtOXZiR1ZoYm4xY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOVGRISnBibWNvZG1Gc2RXVXBJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjNOMGNtbHVaeWM3WEc1OVhHNWNiaThxS2x4dUlDb2dTVzVrYVdOaGRHVnpJSGRvWlhSb1pYSWdkR2hsSUhOd1pXTnBabWxsWkNCMllXeDFaU0JwY3lCaGJpQnZZbXBsWTNRdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN0tuMGdkbUZzZFdWY2JpQXFJRUJ5WlhSMWNtNGdlMEp2YjJ4bFlXNTlYRzRnS2x4dUlDb2dRSE5sWlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFtRnphR3RsYm1GekwzVnVaR1Z5YzJOdmNtVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlBZbXBsWTNRb2RtRnNkV1VwSUh0Y2JpQWdkbUZ5SUhSNWNHVWdQU0IwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z0ozVnVaR1ZtYVc1bFpDY2dPaUJmZEhsd1pXOW1LSFpoYkhWbEtUdGNibHh1SUNCeVpYUjFjbTRnZEhsd1pTQTlQVDBnSjJaMWJtTjBhVzl1SnlCOGZDQjBlWEJsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUFoSVhaaGJIVmxPeUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMVzFwZUdWa0xXOXdaWEpoZEc5eWMxeHVmVnh1WEc0dktpcGNiaUFxSUVsdVpHbGpZWFJsY3lCM2FHVjBhR1Z5SUhSb1pTQnpjR1ZqYVdacFpXUWdkbUZzZFdVZ2FYTWdZU0J1ZFcxaVpYSXVYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdLbjBnZG1Gc2RXVmNiaUFxSUVCeVpYUjFjbTRnZTBKdmIyeGxZVzU5WEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VG5WdFltVnlLSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R1ZFcxaVpYSW5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nWVNCbWRXNWpkR2x2Ymk1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUhzcWZTQjJZV3gxWlZ4dUlDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkdkVzVqZEdsdmJpaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5ablZ1WTNScGIyNG5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nZFc1a1pXWnBibVZrTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZXlwOUlIWmhiSFZsWEc0Z0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMxVnVaR1ZtYVc1bFpDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5kVzVrWldacGJtVmtKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkpibVJwWTJGMFpYTWdkMmhsZEdobGNpQjBhR1VnYzNCbFkybG1hV1ZrSUhaaGJIVmxJR2x6SUdGdUlHRnljbUY1TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZXlwOUlIWmhiSFZsWEc0Z0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwRnljbUY1S0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMllXeDFaUzVqYjI1emRISjFZM1J2Y2lBOVBUMGdRWEp5WVhrN1hHNTlYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxjeUJoYm1RZ2FXNXBkR2xoYkdsNlpYTWdjM0JsWTJsbWFXVmtJR052Ykd4bFkzUnBiMjRnYjJZZ1pYaDBaVzV6YVc5dWN5NWNiaUFxSUVWaFkyZ2daWGgwWlc1emFXOXVJSEpsWTJWcGRtVnpJR0ZqWTJWemN5QjBieUJwYm5OMFlXNWpaU0J2WmlCbmJHbGtaU0JoYm1RZ2NtVnpkQ0J2WmlCamIyMXdiMjVsYm5SekxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCbmJHbGtaVnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdWNGRHVnVjMmx2Ym5OY2JpQXFYRzRnS2lCQWNtVjBkWEp1Y3lCN1QySnFaV04wZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJ0YjNWdWRDaG5iR2xrWlN3Z1pYaDBaVzV6YVc5dWN5d2daWFpsYm5SektTQjdYRzRnSUhaaGNpQmpiMjF3YjI1bGJuUnpJRDBnZTMwN1hHNWNiaUFnWm05eUlDaDJZWElnYm1GdFpTQnBiaUJsZUhSbGJuTnBiMjV6S1NCN1hHNGdJQ0FnYVdZZ0tHbHpSblZ1WTNScGIyNG9aWGgwWlc1emFXOXVjMXR1WVcxbFhTa3BJSHRjYmlBZ0lDQWdJR052YlhCdmJtVnVkSE5iYm1GdFpWMGdQU0JsZUhSbGJuTnBiMjV6VzI1aGJXVmRLR2RzYVdSbExDQmpiMjF3YjI1bGJuUnpMQ0JsZG1WdWRITXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCM1lYSnVLQ2RGZUhSbGJuTnBiMjRnYlhWemRDQmlaU0JoSUdaMWJtTjBhVzl1SnlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1ptOXlJQ2gyWVhJZ1gyNWhiV1VnYVc0Z1kyOXRjRzl1Wlc1MGN5a2dlMXh1SUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0dOdmJYQnZibVZ1ZEhOYlgyNWhiV1ZkTG0xdmRXNTBLU2tnZTF4dUlDQWdJQ0FnWTI5dGNHOXVaVzUwYzF0ZmJtRnRaVjB1Ylc5MWJuUW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMjl0Y0c5dVpXNTBjenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaV1pwYm1WeklHZGxkSFJsY2lCaGJtUWdjMlYwZEdWeUlIQnliM0JsY25SNUlHOXVJSFJvWlNCemNHVmphV1pwWldRZ2IySnFaV04wTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnYjJKcUlDQWdJQ0FnSUNBZ1QySnFaV04wSUhkb1pYSmxJSEJ5YjNCbGNuUjVJR2hoY3lCMGJ5QmlaU0JrWldacGJtVmtMbHh1SUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZlNCd2NtOXdJQ0FnSUNBZ0lDQk9ZVzFsSUc5bUlIUm9aU0JrWldacGJtVmtJSEJ5YjNCbGNuUjVMbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCa1pXWnBibWwwYVc5dUlDQkhaWFFnWVc1a0lITmxkQ0JrWldacGJtbDBhVzl1Y3lCbWIzSWdkR2hsSUhCeWIzQmxjblI1TGx4dUlDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnWkdWbWFXNWxLRzlpYWl3Z2NISnZjQ3dnWkdWbWFXNXBkR2x2YmlrZ2UxeHVJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2IySnFMQ0J3Y205d0xDQmtaV1pwYm1sMGFXOXVLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQlRiM0owY3lCaGNHaGhZbVYwYVdOaGJHeDVJRzlpYW1WamRDQnJaWGx6TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnYjJKcVhHNGdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlITnZjblJMWlhsektHOWlhaWtnZTF4dUlDQnlaWFIxY200Z1QySnFaV04wTG10bGVYTW9iMkpxS1M1emIzSjBLQ2t1Y21Wa2RXTmxLR1oxYm1OMGFXOXVJQ2h5TENCcktTQjdYRzRnSUNBZ2NsdHJYU0E5SUc5aWFsdHJYVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnlXMnRkTENCeU8xeHVJQ0I5TENCN2ZTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1RXVnlaMlZ6SUhCaGMzTmxaQ0J6WlhSMGFXNW5jeUJ2WW1wbFkzUWdkMmwwYUNCa1pXWmhkV3gwSUc5d2RHbHZibk11WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JrWldaaGRXeDBjMXh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCelpYUjBhVzVuYzF4dUlDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ292WEc1bWRXNWpkR2x2YmlCdFpYSm5aVTl3ZEdsdmJuTW9aR1ZtWVhWc2RITXNJSE5sZEhScGJtZHpLU0I3WEc0Z0lIWmhjaUJ2Y0hScGIyNXpJRDBnWDJWNGRHVnVaSE1vZTMwc0lHUmxabUYxYkhSekxDQnpaWFIwYVc1bmN5azdYRzVjYmlBZ0x5OGdZRTlpYW1WamRDNWhjM05wWjI1Z0lHUnZJRzV2ZENCa1pXVndiSGtnYldWeVoyVWdiMkpxWldOMGN5d2djMjhnZDJWY2JpQWdMeThnYUdGMlpTQjBieUJrYnlCcGRDQnRZVzUxWVd4c2VTQm1iM0lnWlhabGNua2dibVZ6ZEdWa0lHOWlhbVZqZEZ4dUlDQXZMeUJwYmlCdmNIUnBiMjV6TGlCQmJIUm9iM1ZuYUNCcGRDQmtiMlZ6SUc1dmRDQnNiMjlySUhOdFlYSjBMRnh1SUNBdkx5QnBkQ2R6SUhOdFlXeHNaWElnWVc1a0lHWmhjM1JsY2lCMGFHRnVJSE52YldVZ1ptRnVZM2xjYmlBZ0x5OGdiV1Z5WjJsdVp5QmtaV1Z3TFcxbGNtZGxJR0ZzWjI5eWFYUm9iU0J6WTNKcGNIUXVYRzRnSUdsbUlDaHpaWFIwYVc1bmN5NW9ZWE5QZDI1UWNtOXdaWEowZVNnblkyeGhjM05sY3ljcEtTQjdYRzRnSUNBZ2IzQjBhVzl1Y3k1amJHRnpjMlZ6SUQwZ1gyVjRkR1Z1WkhNb2UzMHNJR1JsWm1GMWJIUnpMbU5zWVhOelpYTXNJSE5sZEhScGJtZHpMbU5zWVhOelpYTXBPMXh1WEc0Z0lDQWdhV1lnS0hObGRIUnBibWR6TG1Oc1lYTnpaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29KMlJwY21WamRHbHZiaWNwS1NCN1hHNGdJQ0FnSUNCdmNIUnBiMjV6TG1Oc1lYTnpaWE11WkdseVpXTjBhVzl1SUQwZ1gyVjRkR1Z1WkhNb2UzMHNJR1JsWm1GMWJIUnpMbU5zWVhOelpYTXVaR2x5WldOMGFXOXVMQ0J6WlhSMGFXNW5jeTVqYkdGemMyVnpMbVJwY21WamRHbHZiaWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tITmxkSFJwYm1kekxtaGhjMDkzYmxCeWIzQmxjblI1S0NkaWNtVmhhM0J2YVc1MGN5Y3BLU0I3WEc0Z0lDQWdiM0IwYVc5dWN5NWljbVZoYTNCdmFXNTBjeUE5SUY5bGVIUmxibVJ6S0h0OUxDQmtaV1poZFd4MGN5NWljbVZoYTNCdmFXNTBjeXdnYzJWMGRHbHVaM011WW5KbFlXdHdiMmx1ZEhNcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHOXdkR2x2Ym5NN1hHNTlYRzVjYm5aaGNpQkZkbVZ1ZEhOQ2RYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1emRISjFZM1FnWVNCRmRtVnVkRUoxY3lCcGJuTjBZVzVqWlM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHVjJaVzUwYzF4dUlDQWdLaTljYmlBZ1puVnVZM1JwYjI0Z1JYWmxiblJ6UW5WektDa2dlMXh1SUNBZ0lIWmhjaUJsZG1WdWRITWdQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTUNBbUppQmhjbWQxYldWdWRITmJNRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklIdDlPMXh1SUNBZ0lHTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRVYyWlc1MGMwSjFjeWs3WEc1Y2JpQWdJQ0IwYUdsekxtVjJaVzUwY3lBOUlHVjJaVzUwY3p0Y2JpQWdJQ0IwYUdsekxtaHZjQ0E5SUdWMlpXNTBjeTVvWVhOUGQyNVFjbTl3WlhKMGVUdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJCWkdSeklHeHBjM1JsYm1WeUlIUnZJSFJvWlNCemNHVmphV1psWkNCbGRtVnVkQzVjYmlBZ0lDcGNiaUFnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ4UVhKeVlYbDlJR1YyWlc1MFhHNGdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdoaGJtUnNaWEpjYmlBZ0lDb3ZYRzVjYmx4dUlDQmpjbVZoZEdWRGJHRnpjeWhGZG1WdWRITkNkWE1zSUZ0N1hHNGdJQ0FnYTJWNU9pQW5iMjRuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQnZiaWhsZG1WdWRDd2dhR0Z1Wkd4bGNpa2dlMXh1SUNBZ0lDQWdhV1lnS0dselFYSnlZWGtvWlhabGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pYWmxiblF1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtOXVLR1YyWlc1MFcybGRMQ0JvWVc1a2JHVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QkRjbVZoZEdVZ2RHaGxJR1YyWlc1MEozTWdiMkpxWldOMElHbG1JRzV2ZENCNVpYUWdZM0psWVhSbFpGeHVJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtaHZjQzVqWVd4c0tIUm9hWE11WlhabGJuUnpMQ0JsZG1WdWRDa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkSUQwZ1cxMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVGa1pDQjBhR1VnYUdGdVpHeGxjaUIwYnlCeGRXVjFaVnh1SUNBZ0lDQWdkbUZ5SUdsdVpHVjRJRDBnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkTG5CMWMyZ29hR0Z1Wkd4bGNpa2dMU0F4TzF4dVhHNGdJQ0FnSUNBdkx5QlFjbTkyYVdSbElHaGhibVJzWlNCaVlXTnJJR1p2Y2lCeVpXMXZkbUZzSUc5bUlHVjJaVzUwWEc0Z0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0J5WlcxdmRtVTZJR1oxYm1OMGFXOXVJSEpsYlc5MlpTZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkVzJsdVpHVjRYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU2RXNXpJSEpsWjJsemRHVnlaV1FnYUdGdVpHeGxjbk1nWm05eUlITndaV05wWm1sbFpDQmxkbVZ1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mRUZ5Y21GNWZTQmxkbVZ1ZEZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VDJKcVpXTjBQWDBnWTI5dWRHVjRkRnh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkbGJXbDBKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z1pXMXBkQ2hsZG1WdWRDd2dZMjl1ZEdWNGRDa2dlMXh1SUNBZ0lDQWdhV1lnS0dselFYSnlZWGtvWlhabGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pYWmxiblF1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtVnRhWFFvWlhabGJuUmJhVjBzSUdOdmJuUmxlSFFwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRWxtSUhSb1pTQmxkbVZ1ZENCa2IyVnpiaWQwSUdWNGFYTjBMQ0J2Y2lCMGFHVnlaU2R6SUc1dklHaGhibVJzWlhKeklHbHVJSEYxWlhWbExDQnFkWE4wSUd4bFlYWmxYRzRnSUNBZ0lDQnBaaUFvSVhSb2FYTXVhRzl3TG1OaGJHd29kR2hwY3k1bGRtVnVkSE1zSUdWMlpXNTBLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFTjVZMnhsSUhSb2NtOTFaMmdnWlhabGJuUnpJSEYxWlhWbExDQm1hWEpsSVZ4dUlDQWdJQ0FnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0dsMFpXMHBJSHRjYmlBZ0lDQWdJQ0FnYVhSbGJTaGpiMjUwWlhoMElIeDhJSHQ5S1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdmVjBwTzF4dUlDQnlaWFIxY200Z1JYWmxiblJ6UW5Wek8xeHVmU2dwTzF4dVhHNTJZWElnUjJ4cFpHVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQzhxS2x4eVhHNGdJQ0FxSUVOdmJuTjBjblZqZENCbmJHbGtaUzVjY2x4dUlDQWdLbHh5WEc0Z0lDQXFJRUJ3WVhKaGJTQWdlMU4wY21sdVozMGdjMlZzWldOMGIzSmNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlHOXdkR2x2Ym5OY2NseHVJQ0FnS2k5Y2JpQWdablZ1WTNScGIyNGdSMnhwWkdVb2MyVnNaV04wYjNJcElIdGNiaUFnSUNCMllYSWdiM0IwYVc5dWN5QTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4SUNZbUlHRnlaM1Z0Wlc1MGMxc3hYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekZkSURvZ2UzMDdYRzRnSUNBZ1kyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dSMnhwWkdVcE8xeHVYRzRnSUNBZ2RHaHBjeTVmWXlBOUlIdDlPMXh1SUNBZ0lIUm9hWE11WDNRZ1BTQmJYVHRjYmlBZ0lDQjBhR2x6TGw5bElEMGdibVYzSUVWMlpXNTBjMEoxY3lncE8xeHVYRzRnSUNBZ2RHaHBjeTVrYVhOaFlteGxaQ0E5SUdaaGJITmxPMXh1SUNBZ0lIUm9hWE11YzJWc1pXTjBiM0lnUFNCelpXeGxZM1J2Y2p0Y2JpQWdJQ0IwYUdsekxuTmxkSFJwYm1keklEMGdiV1Z5WjJWUGNIUnBiMjV6S0dSbFptRjFiSFJ6TENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0IwYUdsekxtbHVaR1Y0SUQwZ2RHaHBjeTV6WlhSMGFXNW5jeTV6ZEdGeWRFRjBPMXh1SUNCOVhHNWNiaUFnTHlvcVhISmNiaUFnSUNvZ1NXNXBkR2xoYkdsNlpYTWdaMnhwWkdVdVhISmNiaUFnSUNwY2NseHVJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhoMFpXNXphVzl1Y3lCRGIyeHNaV04wYVc5dUlHOW1JR1Y0ZEdWdWMybHZibk1nZEc4Z2FXNXBkR2xoYkdsNlpTNWNjbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdEhiR2xrWlgxY2NseHVJQ0FnS2k5Y2JseHVYRzRnSUdOeVpXRjBaVU5zWVhOektFZHNhV1JsTENCYmUxeHVJQ0FnSUd0bGVUb2dKMjF2ZFc1MEp5eGNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYlc5MWJuUWtKREVvS1NCN1hHNGdJQ0FnSUNCMllYSWdaWGgwWlc1emFXOXVjeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dlMzA3WEc1Y2JpQWdJQ0FnSUhSb2FYTXVYMlV1WlcxcGRDZ25iVzkxYm5RdVltVm1iM0psSnlrN1hHNWNiaUFnSUNBZ0lHbG1JQ2hwYzA5aWFtVmpkQ2hsZUhSbGJuTnBiMjV6S1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5aklEMGdiVzkxYm5Rb2RHaHBjeXdnWlhoMFpXNXphVzl1Y3l3Z2RHaHBjeTVmWlNrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCM1lYSnVLQ2RaYjNVZ2JtVmxaQ0IwYnlCd2NtOTJhV1JsSUdFZ2IySnFaV04wSUc5dUlHQnRiM1Z1ZENncFlDY3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IwYUdsekxsOWxMbVZ0YVhRb0oyMXZkVzUwTG1GbWRHVnlKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dRMjlzYkdWamRITWdZVzRnYVc1emRHRnVZMlVnWUhSeVlXNXpiR0YwWldBZ2RISmhibk5tYjNKdFpYSnpMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0FnZTBGeWNtRjVmU0IwY21GdWMyWnZjbTFsY25NZ1EyOXNiR1ZqZEdsdmJpQnZaaUIwY21GdWMyWnZjbTFsY25NdVhISmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMjExZEdGMFpTY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUcxMWRHRjBaU2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQjBjbUZ1YzJadmNtMWxjbk1nUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01DQW1KaUJoY21kMWJXVnVkSE5iTUYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJRnRkTzF4dVhHNGdJQ0FnSUNCcFppQW9hWE5CY25KaGVTaDBjbUZ1YzJadmNtMWxjbk1wS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNRZ1BTQjBjbUZ1YzJadmNtMWxjbk03WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IzWVhKdUtDZFpiM1VnYm1WbFpDQjBieUJ3Y205MmFXUmxJR0VnWVhKeVlYa2diMjRnWUcxMWRHRjBaU2dwWUNjcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSUZWd1pHRjBaWE1nWjJ4cFpHVWdkMmwwYUNCemNHVmphV1pwWldRZ2MyVjBkR2x1WjNNdVhISmNiaUFnSUNBZ0tseHlYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlITmxkSFJwYm1kelhISmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdEhiR2xrWlgxY2NseHVJQ0FnSUNBcUwxeHVYRzRnSUgwc0lIdGNiaUFnSUNCclpYazZJQ2QxY0dSaGRHVW5MRnh1SUNBZ0lIWmhiSFZsT2lCbWRXNWpkR2x2YmlCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTUNBbUppQmhjbWQxYldWdWRITmJNRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklIdDlPMXh1WEc0Z0lDQWdJQ0IwYUdsekxuTmxkSFJwYm1keklEMGdiV1Z5WjJWUGNIUnBiMjV6S0hSb2FYTXVjMlYwZEdsdVozTXNJSE5sZEhScGJtZHpLVHRjYmx4dUlDQWdJQ0FnYVdZZ0tITmxkSFJwYm1kekxtaGhjMDkzYmxCeWIzQmxjblI1S0NkemRHRnlkRUYwSnlrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJtUmxlQ0E5SUhObGRIUnBibWR6TG5OMFlYSjBRWFE3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhSb2FYTXVYMlV1WlcxcGRDZ25kWEJrWVhSbEp5azdYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1EyaGhibWRsSUhOc2FXUmxJSGRwZEdnZ2MzQmxZMmxtYVdWa0lIQmhkSFJsY200dUlFRWdjR0YwZEdWeWJpQnRkWE4wSUdKbElHbHVJSFJvWlNCemNHVmphV0ZzSUdadmNtMWhkRHBjY2x4dUlDQWdJQ0FxSUdBK1lDQXRJRTF2ZG1VZ2IyNWxJR1p2Y25kaGNtUmNjbHh1SUNBZ0lDQXFJR0E4WUNBdElFMXZkbVVnYjI1bElHSmhZMnQzWVhKa1hISmNiaUFnSUNBZ0tpQmdQWHRwZldBZ0xTQkhieUIwYnlCN2FYMGdlbVZ5YnkxaVlYTmxaQ0J6Ykdsa1pTQW9aWEV1SUNjOU1TY3NJSGRwYkd3Z1oyOGdkRzhnYzJWamIyNWtJSE5zYVdSbEtWeHlYRzRnSUNBZ0lDb2dZRDQrWUNBdElGSmxkMmx1WkhNZ2RHOGdaVzVrSUNoc1lYTjBJSE5zYVdSbEtWeHlYRzRnSUNBZ0lDb2dZRHc4WUNBdElGSmxkMmx1WkhNZ2RHOGdjM1JoY25RZ0tHWnBjbk4wSUhOc2FXUmxLVnh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J3WVhSMFpYSnVYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkbmJ5Y3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUdkdktIQmhkSFJsY200cElIdGNiaUFnSUNBZ0lIUm9hWE11WDJNdVVuVnVMbTFoYTJVb2NHRjBkR1Z5YmlrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nVFc5MlpTQjBjbUZqYXlCaWVTQnpjR1ZqYVdacFpXUWdaR2x6ZEdGdVkyVXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJR1JwYzNSaGJtTmxYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkdGIzWmxKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2JXOTJaU2hrYVhOMFlXNWpaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZZeTVVY21GdWMybDBhVzl1TG1ScGMyRmliR1VvS1R0Y2JpQWdJQ0FnSUhSb2FYTXVYMk11VFc5MlpTNXRZV3RsS0dScGMzUmhibU5sS1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJFWlhOMGNtOTVJR2x1YzNSaGJtTmxJR0Z1WkNCeVpYWmxjblFnWVd4c0lHTm9ZVzVuWlhNZ1pHOXVaU0JpZVNCMGFHbHpMbDlqTGx4eVhHNGdJQ0FnSUNwY2NseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwZHNhV1JsZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMlJsYzNSeWIza25MRnh1SUNBZ0lIWmhiSFZsT2lCbWRXNWpkR2x2YmlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmWlM1bGJXbDBLQ2RrWlhOMGNtOTVKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVM1JoY25RZ2FXNXpkR0Z1WTJVZ1lYVjBiM0JzWVhscGJtY3VYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRDYjI5c1pXRnVmRTUxYldKbGNuMGdhVzUwWlhKMllXd2dVblZ1SUdGMWRHOXdiR0Y1YVc1bklIZHBkR2dnY0dGemMyVmtJR2x1ZEdWeWRtRnNJSEpsWjJGeVpHeGxjM01nYjJZZ1lHRjFkRzl3YkdGNVlDQnpaWFIwYVc1bmMxeHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdSMnhwWkdWOVhISmNiaUFnSUNBZ0tpOWNibHh1SUNCOUxDQjdYRzRnSUNBZ2EyVjVPaUFuY0d4aGVTY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUhCc1lYa29LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2FXNTBaWEoyWVd3Z1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNQ0FtSmlCaGNtZDFiV1Z1ZEhOYk1GMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3dYU0E2SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0JwWmlBb2FXNTBaWEoyWVd3cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUjBhVzVuY3k1aGRYUnZjR3hoZVNBOUlHbHVkR1Z5ZG1Gc08xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQjBhR2x6TGw5bExtVnRhWFFvSjNCc1lYa25LVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQlRkRzl3SUdsdWMzUmhibU5sSUdGMWRHOXdiR0Y1YVc1bkxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjNCaGRYTmxKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2NHRjFjMlVvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlsTG1WdGFYUW9KM0JoZFhObEp5azdYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1UyVjBjeUJuYkdsa1pTQnBiblJ2SUdFZ2FXUnNaU0J6ZEdGMGRYTXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3UjJ4cFpHVjlYSEpjYmlBZ0lDQWdLaTljYmx4dUlDQjlMQ0I3WEc0Z0lDQWdhMlY1T2lBblpHbHpZV0pzWlNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR1JwYzJGaWJHVW9LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnBjMkZpYkdWa0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJUWlhSeklHZHNhV1JsSUdsdWRHOGdZU0JoWTNScGRtVWdjM1JoZEhWekxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJWdVlXSnNaU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHVnVZV0pzWlNncElIdGNiaUFnSUNBZ0lIUm9hWE11WkdsellXSnNaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQkJaR1J6SUdOMWRYUnZiU0JsZG1WdWRDQnNhWE4wWlc1bGNpQjNhWFJvSUdoaGJtUnNaWEl1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZkVGeWNtRjVmU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElDQjdSblZ1WTNScGIyNTlJR2hoYm1Sc1pYSmNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjI5dUp5eGNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYjI0b1pYWmxiblFzSUdoaGJtUnNaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMlV1YjI0b1pYWmxiblFzSUdoaGJtUnNaWElwTzF4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRU5vWldOcmN5QnBaaUJuYkdsa1pTQnBjeUJoSUhCeVpXTnBjMlZrSUhSNWNHVXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJQ0I3VTNSeWFXNW5mU0J1WVcxbFhISmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJselZIbHdaU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHbHpWSGx3WlNodVlXMWxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1elpYUjBhVzVuY3k1MGVYQmxJRDA5UFNCdVlXMWxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nUjJWMGN5QjJZV3gxWlNCdlppQjBhR1VnWTI5eVpTQnZjSFJwYjI1ekxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkelpYUjBhVzVuY3ljc1hHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFrSkRFb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYnp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlGTmxkSE1nZG1Gc2RXVWdiMllnZEdobElHTnZjbVVnYjNCMGFXOXVjeTVjY2x4dUlDQWdJQ0FxWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUc5Y2NseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEhKY2JpQWdJQ0FnS2k5Y2JpQWdJQ0FzWEc0Z0lDQWdjMlYwT2lCbWRXNWpkR2x2YmlCelpYUWtKREVvYnlrZ2UxeHVJQ0FnSUNBZ2FXWWdLR2x6VDJKcVpXTjBLRzhwS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDI4Z1BTQnZPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkMkZ5YmlnblQzQjBhVzl1Y3lCdGRYTjBJR0psSUdGdUlHQnZZbXBsWTNSZ0lHbHVjM1JoYm1ObExpY3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nUjJWMGN5QmpkWEp5Wlc1MElHbHVaR1Y0SUc5bUlIUm9aU0J6Ykdsa1pYSXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oybHVaR1Y0Snl4Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ1FrTVNncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1UyVjBjeUJqZFhKeVpXNTBJR2x1WkdWNElHRWdjMnhwWkdWeUxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNjbHh1SUNBZ0lDQXFMMXh1SUNBZ0lDeGNiaUFnSUNCelpYUTZJR1oxYm1OMGFXOXVJSE5sZENRa01TaHBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxsOXBJRDBnZEc5SmJuUW9hU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCSFpYUnpJSFI1Y0dVZ2JtRnRaU0J2WmlCMGFHVWdjMnhwWkdWeUxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMU4wY21sdVozMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkMGVYQmxKeXhjYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDUWtNU2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTmxkSFJwYm1kekxuUjVjR1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCSFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCcFpHeGxJSE4wWVhSMWN5NWNjbHh1SUNBZ0lDQXFYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyUnBjMkZpYkdWa0p5eGNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENRa01TZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5a08xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVMlYwY3lCMllXeDFaU0J2WmlCMGFHVWdhV1JzWlNCemRHRjBkWE11WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FtOXZiR1ZoYm4xY2NseHVJQ0FnSUNBcUwxeHVJQ0FnSUN4Y2JpQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlITmxkQ1FrTVNoemRHRjBkWE1wSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMlFnUFNBaElYTjBZWFIxY3p0Y2JpQWdJQ0I5WEc0Z0lIMWRLVHRjYmlBZ2NtVjBkWEp1SUVkc2FXUmxPMXh1ZlNncE8xeHVYRzVtZFc1amRHbHZiaUJTZFc0Z0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnZG1GeUlGSjFiaUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSmJtbDBhV0ZzYVhwbGN5QmhkWFJ2Y25WdWJtbHVaeUJ2WmlCMGFHVWdaMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHMXZkVzUwT2lCbWRXNWpkR2x2YmlCdGIzVnVkQ2dwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMjhnUFNCbVlXeHpaVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCTllXdGxjeUJuYkdsa1pYTWdjblZ1Ym1sdVp5QmlZWE5sWkNCdmJpQjBhR1VnY0dGemMyVmtJRzF2ZG1sdVp5QnpZMmhsYldFdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYlc5MlpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxaGEyVTZJR1oxYm1OMGFXOXVJRzFoYTJVb2JXOTJaU2tnZTF4dUlDQWdJQ0FnZG1GeUlGOTBhR2x6SUQwZ2RHaHBjenRjYmx4dUlDQWdJQ0FnYVdZZ0tDRkhiR2xrWlM1a2FYTmhZbXhsWkNrZ2UxeHVJQ0FnSUNBZ0lDQkhiR2xrWlM1a2FYTmhZbXhsS0NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dGIzWmxJRDBnYlc5MlpUdGNibHh1SUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNuVnVMbUpsWm05eVpTY3NJSFJvYVhNdWJXOTJaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVd4amRXeGhkR1VvS1R0Y2JseHVJQ0FnSUNBZ0lDQkZkbVZ1ZEhNdVpXMXBkQ2duY25WdUp5d2dkR2hwY3k1dGIzWmxLVHRjYmx4dUlDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsUnlZVzV6YVhScGIyNHVZV1owWlhJb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGZkR2hwY3k1cGMwOW1abk5sZENnblBDY3BJSHg4SUY5MGFHbHpMbWx6VDJabWMyVjBLQ2MrSnlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUY5MGFHbHpMbDl2SUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRVYyWlc1MGN5NWxiV2wwS0NkeWRXNHViMlptYzJWMEp5d2dYM1JvYVhNdWJXOTJaU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnUlhabGJuUnpMbVZ0YVhRb0ozSjFiaTVoWm5SbGNpY3NJRjkwYUdsekxtMXZkbVVwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdSMnhwWkdVdVpXNWhZbXhsS0NrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOaGJHTjFiR0YwWlhNZ1kzVnljbVZ1ZENCcGJtUmxlQ0JpWVhObFpDQnZiaUJrWldacGJtVmtJRzF2ZG1VdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTmhiR04xYkdGMFpUb2dablZ1WTNScGIyNGdZMkZzWTNWc1lYUmxLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlHMXZkbVVnUFNCMGFHbHpMbTF2ZG1Vc1hHNGdJQ0FnSUNBZ0lDQWdiR1Z1WjNSb0lEMGdkR2hwY3k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0IyWVhJZ2MzUmxjSE1nUFNCdGIzWmxMbk4wWlhCekxGeHVJQ0FnSUNBZ0lDQWdJR1JwY21WamRHbHZiaUE5SUcxdmRtVXVaR2x5WldOMGFXOXVPMXh1WEc1Y2JpQWdJQ0FnSUhaaGNpQmpiM1Z1ZEdGaWJHVlRkR1Z3Y3lBOUlHbHpUblZ0WW1WeUtIUnZTVzUwS0hOMFpYQnpLU2tnSmlZZ2RHOUpiblFvYzNSbGNITXBJQ0U5UFNBd08xeHVYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tHUnBjbVZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0JqWVhObElDYytKenBjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jM1JsY0hNZ1BUMDlJQ2MrSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVhVzVrWlhnZ1BTQnNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxtbHpSVzVrS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hLRWRzYVdSbExtbHpWSGx3WlNnbmMyeHBaR1Z5SnlrZ0ppWWdJVWRzYVdSbExuTmxkSFJwYm1kekxuSmxkMmx1WkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVhVzVrWlhnZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25jblZ1TG1WdVpDY3NJRzF2ZG1VcE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWTI5MWJuUmhZbXhsVTNSbGNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJQ3M5SUUxaGRHZ3ViV2x1S0d4bGJtZDBhQ0F0SUVkc2FXUmxMbWx1WkdWNExDQXRkRzlKYm5Rb2MzUmxjSE1wS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVhVzVrWlhnckt6dGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc1Y2JpQWdJQ0FnSUNBZ1kyRnpaU0FuUENjNlhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hOMFpYQnpJRDA5UFNBblBDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdWFYTlRkR0Z5ZENncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JU2hIYkdsa1pTNXBjMVI1Y0dVb0ozTnNhV1JsY2ljcElDWW1JQ0ZIYkdsa1pTNXpaWFIwYVc1bmN5NXlaWGRwYm1RcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDI4Z1BTQjBjblZsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUVkc2FXUmxMbWx1WkdWNElEMGdiR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNuVnVMbk4wWVhKMEp5d2diVzkyWlNrN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hqYjNWdWRHRmliR1ZUZEdWd2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ2dMVDBnVFdGMGFDNXRhVzRvUjJ4cFpHVXVhVzVrWlhnc0lIUnZTVzUwS0hOMFpYQnpLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0TFMwN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKejBuT2x4dUlDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJRDBnYzNSbGNITTdYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJobFkydHpJR2xtSUhkbElHRnlaU0J2YmlCMGFHVWdabWx5YzNRZ2MyeHBaR1V1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHbHpVM1JoY25RNklHWjFibU4wYVc5dUlHbHpVM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1IyeHBaR1V1YVc1a1pYZ2dQVDA5SURBN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJ0eklHbG1JSGRsSUdGeVpTQnZiaUIwYUdVZ2JHRnpkQ0J6Ykdsa1pTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwSnZiMnhsWVc1OVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYVhORmJtUTZJR1oxYm1OMGFXOXVJR2x6Ulc1a0tDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFZHNhV1JsTG1sdVpHVjRJRDA5UFNCMGFHbHpMbXhsYm1kMGFEdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYUdWamEzTWdhV1lnZDJVZ1lYSmxJRzFoYTJsdVp5QmhJRzltWm5ObGRDQnlkVzR1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdaR2x5WldOMGFXOXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCcGMwOW1abk5sZERvZ1puVnVZM1JwYjI0Z2FYTlBabVp6WlhRb1pHbHlaV04wYVc5dUtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYnlBbUppQjBhR2x6TG0xdmRtVXVaR2x5WldOMGFXOXVJRDA5UFNCa2FYSmxZM1JwYjI0N1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lHUmxabWx1WlNoU2RXNHNJQ2R0YjNabEp5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJRzF2ZG1VZ2MyTm9aVzFoTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5dE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJRzF2ZG1VZ2MyTm9aVzFoTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUhObGRDaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYlNBOUlIdGNiaUFnSUNBZ0lDQWdaR2x5WldOMGFXOXVPaUIyWVd4MVpTNXpkV0p6ZEhJb01Dd2dNU2tzWEc0Z0lDQWdJQ0FnSUhOMFpYQnpPaUIyWVd4MVpTNXpkV0p6ZEhJb01Ta2dQeUIyWVd4MVpTNXpkV0p6ZEhJb01Ta2dPaUF3WEc0Z0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ1pHVm1hVzVsS0ZKMWJpd2dKMnhsYm1kMGFDY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklIWmhiSFZsSUc5bUlIUm9aU0J5ZFc1dWFXNW5JR1JwYzNSaGJtTmxJR0poYzJWa1hHNGdJQ0FnSUNvZ2IyNGdlbVZ5YnkxcGJtUmxlR2x1WnlCdWRXMWlaWElnYjJZZ2MyeHBaR1Z6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhObGRIUnBibWR6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM003WEc0Z0lDQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjeTVzWlc1bmRHZzdYRzVjYmlBZ0lDQWdJQzh2SUVsbUlIUm9aU0JnWW05MWJtUmdJRzl3ZEdsdmJpQnBjeUJoWTJsMGRtVXNJR0VnYldGNGFXMTFiU0J5ZFc1dWFXNW5JR1JwYzNSaGJtTmxJSE5vYjNWc1pDQmlaVnh1SUNBZ0lDQWdMeThnY21Wa2RXTmxaQ0JpZVNCZ2NHVnlWbWxsZDJBZ1lXNWtJR0JtYjJOMWMwRjBZQ0J6WlhSMGFXNW5jeTRnVW5WdWJtbHVaeUJrYVhOMFlXNWpaVnh1SUNBZ0lDQWdMeThnYzJodmRXeGtJR1Z1WkNCaVpXWnZjbVVnWTNKbFlYUnBibWNnWVc0Z1pXMXdkSGtnYzNCaFkyVWdZV1owWlhJZ2FXNXpkR0Z1WTJVdVhHNWNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXBjMVI1Y0dVb0ozTnNhV1JsY2ljcElDWW1JSE5sZEhScGJtZHpMbVp2WTNWelFYUWdJVDA5SUNkalpXNTBaWEluSUNZbUlITmxkSFJwYm1kekxtSnZkVzVrS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCc1pXNW5kR2dnTFNBeElDMGdLSFJ2U1c1MEtITmxkSFJwYm1kekxuQmxjbFpwWlhjcElDMGdNU2tnS3lCMGIwbHVkQ2h6WlhSMGFXNW5jeTVtYjJOMWMwRjBLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJR3hsYm1kMGFDQXRJREU3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCa1pXWnBibVVvVW5WdUxDQW5iMlptYzJWMEp5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2MzUmhkSFZ6SUc5bUlIUm9aU0J2Wm1aelpYUjBhVzVuSUdac1lXY3VYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMjg3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnVW5WdU8xeHVmVnh1WEc0dktpcGNiaUFxSUZKbGRIVnlibk1nWVNCamRYSnlaVzUwSUhScGJXVXVYRzRnS2x4dUlDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCdWIzY29LU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNibjFjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0c0lIUm9ZWFFzSUhkb1pXNGdhVzUyYjJ0bFpDd2dkMmxzYkNCdmJteDVJR0psSUhSeWFXZG5aWEpsWkZ4dUlDb2dZWFFnYlc5emRDQnZibU5sSUdSMWNtbHVaeUJoSUdkcGRtVnVJSGRwYm1SdmR5QnZaaUIwYVcxbExseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHWjFibU5jYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCM1lXbDBYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkRDE5SUc5d2RHbHZibk5jYmlBcUlFQnlaWFIxY200Z2UwWjFibU4wYVc5dWZWeHVJQ3BjYmlBcUlFQnpaV1VnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJwaGMyaHJaVzVoY3k5MWJtUmxjbk5qYjNKbFhHNGdLaTljYm1aMWJtTjBhVzl1SUhSb2NtOTBkR3hsS0daMWJtTXNJSGRoYVhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnZG1GeUlIUnBiV1Z2ZFhRZ1BTQjJiMmxrSURBc1hHNGdJQ0FnSUNCamIyNTBaWGgwSUQwZ2RtOXBaQ0F3TEZ4dUlDQWdJQ0FnWVhKbmN5QTlJSFp2YVdRZ01DeGNiaUFnSUNBZ0lISmxjM1ZzZENBOUlIWnZhV1FnTUR0Y2JpQWdkbUZ5SUhCeVpYWnBiM1Z6SUQwZ01EdGNiaUFnYVdZZ0tDRnZjSFJwYjI1ektTQnZjSFJwYjI1eklEMGdlMzA3WEc1Y2JpQWdkbUZ5SUd4aGRHVnlJRDBnWm5WdVkzUnBiMjRnYkdGMFpYSW9LU0I3WEc0Z0lDQWdjSEpsZG1sdmRYTWdQU0J2Y0hScGIyNXpMbXhsWVdScGJtY2dQVDA5SUdaaGJITmxJRDhnTUNBNklHNXZkeWdwTzF4dUlDQWdJSFJwYldWdmRYUWdQU0J1ZFd4c08xeHVJQ0FnSUhKbGMzVnNkQ0E5SUdaMWJtTXVZWEJ3Ykhrb1kyOXVkR1Y0ZEN3Z1lYSm5jeWs3WEc0Z0lDQWdhV1lnS0NGMGFXMWxiM1YwS1NCamIyNTBaWGgwSUQwZ1lYSm5jeUE5SUc1MWJHdzdYRzRnSUgwN1hHNWNiaUFnZG1GeUlIUm9jbTkwZEd4bFpDQTlJR1oxYm1OMGFXOXVJSFJvY205MGRHeGxaQ2dwSUh0Y2JpQWdJQ0IyWVhJZ1lYUWdQU0J1YjNjb0tUdGNiaUFnSUNCcFppQW9JWEJ5WlhacGIzVnpJQ1ltSUc5d2RHbHZibk11YkdWaFpHbHVaeUE5UFQwZ1ptRnNjMlVwSUhCeVpYWnBiM1Z6SUQwZ1lYUTdYRzRnSUNBZ2RtRnlJSEpsYldGcGJtbHVaeUE5SUhkaGFYUWdMU0FvWVhRZ0xTQndjbVYyYVc5MWN5azdYRzRnSUNBZ1kyOXVkR1Y0ZENBOUlIUm9hWE03WEc0Z0lDQWdZWEpuY3lBOUlHRnlaM1Z0Wlc1MGN6dGNiaUFnSUNCcFppQW9jbVZ0WVdsdWFXNW5JRHc5SURBZ2ZId2djbVZ0WVdsdWFXNW5JRDRnZDJGcGRDa2dlMXh1SUNBZ0lDQWdhV1lnS0hScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyeGxZWEpVYVcxbGIzVjBLSFJwYldWdmRYUXBPMXh1SUNBZ0lDQWdJQ0IwYVcxbGIzVjBJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIQnlaWFpwYjNWeklEMGdZWFE3WEc0Z0lDQWdJQ0J5WlhOMWJIUWdQU0JtZFc1akxtRndjR3g1S0dOdmJuUmxlSFFzSUdGeVozTXBPMXh1SUNBZ0lDQWdhV1lnS0NGMGFXMWxiM1YwS1NCamIyNTBaWGgwSUQwZ1lYSm5jeUE5SUc1MWJHdzdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hkR2x0Wlc5MWRDQW1KaUJ2Y0hScGIyNXpMblJ5WVdsc2FXNW5JQ0U5UFNCbVlXeHpaU2tnZTF4dUlDQWdJQ0FnZEdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRb2JHRjBaWElzSUhKbGJXRnBibWx1WnlrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJSDA3WEc1Y2JpQWdkR2h5YjNSMGJHVmtMbU5oYm1ObGJDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JqYkdWaGNsUnBiV1Z2ZFhRb2RHbHRaVzkxZENrN1hHNGdJQ0FnY0hKbGRtbHZkWE1nUFNBd08xeHVJQ0FnSUhScGJXVnZkWFFnUFNCamIyNTBaWGgwSUQwZ1lYSm5jeUE5SUc1MWJHdzdYRzRnSUgwN1hHNWNiaUFnY21WMGRYSnVJSFJvY205MGRHeGxaRHRjYm4xY2JseHVkbUZ5SUUxQlVrZEpUbDlVV1ZCRklEMGdlMXh1SUNCc2RISTZJRnNuYldGeVoybHVUR1ZtZENjc0lDZHRZWEpuYVc1U2FXZG9kQ2RkTEZ4dUlDQnlkR3c2SUZzbmJXRnlaMmx1VW1sbmFIUW5MQ0FuYldGeVoybHVUR1ZtZENkZFhHNTlPMXh1WEc1bWRXNWpkR2x2YmlCSFlYQnpJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJIWVhCeklEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUZ3Y0d4cFpYTWdaMkZ3Y3lCaVpYUjNaV1Z1SUhOc2FXUmxjeTRnUm1seWMzUWdZVzVrSUd4aGMzUmNiaUFnSUNBZ0tpQnpiR2xrWlhNZ1pHOGdibTkwSUhKbFkyVnBkbVVnYVhRbmN5QmxaR2RsSUcxaGNtZHBibk11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMGhVVFV4RGIyeHNaV04wYVc5dWZTQnpiR2xrWlhOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHRndjR3g1T2lCbWRXNWpkR2x2YmlCaGNIQnNlU2h6Ykdsa1pYTXBJSHRjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQnNaVzRnUFNCemJHbGtaWE11YkdWdVozUm9PeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhOMGVXeGxJRDBnYzJ4cFpHVnpXMmxkTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pHbHlaV04wYVc5dUlEMGdRMjl0Y0c5dVpXNTBjeTVFYVhKbFkzUnBiMjR1ZG1Gc2RXVTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHa2dJVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0J6ZEhsc1pWdE5RVkpIU1U1ZlZGbFFSVnRrYVhKbFkzUnBiMjVkV3pCZFhTQTlJSFJvYVhNdWRtRnNkV1VnTHlBeUlDc2dKM0I0Snp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlZ0TlFWSkhTVTVmVkZsUVJWdGthWEpsWTNScGIyNWRXekJkWFNBOUlDY25PMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2tnSVQwOUlITnNhV1JsY3k1c1pXNW5kR2dnTFNBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYzNSNWJHVmJUVUZTUjBsT1gxUlpVRVZiWkdseVpXTjBhVzl1WFZzeFhWMGdQU0IwYUdsekxuWmhiSFZsSUM4Z01pQXJJQ2R3ZUNjN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdjM1I1YkdWYlRVRlNSMGxPWDFSWlVFVmJaR2x5WldOMGFXOXVYVnN4WFYwZ1BTQW5KenRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ1oyRndjeUJtY205dElIUm9aU0J6Ykdsa1pYTXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwaFVUVXhEYjJ4c1pXTjBhVzl1ZlNCemJHbGtaWE5jYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3Vm05cFpIMWNiaUFnSUNBcUwxeHVJQ0FnSUhKbGJXOTJaVG9nWm5WdVkzUnBiMjRnY21WdGIzWmxLSE5zYVdSbGN5a2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBc0lHeGxiaUE5SUhOc2FXUmxjeTVzWlc1bmRHZzdJR2tnUENCc1pXNDdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYzNSNWJHVWdQU0J6Ykdsa1pYTmJhVjB1YzNSNWJHVTdYRzVjYmlBZ0lDQWdJQ0FnYzNSNWJHVXViV0Z5WjJsdVRHVm1kQ0E5SUNjbk8xeHVJQ0FnSUNBZ0lDQnpkSGxzWlM1dFlYSm5hVzVTYVdkb2RDQTlJQ2NuTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNCa1pXWnBibVVvUjJGd2N5d2dKM1poYkhWbEp5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJR2RoY0M1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkRzlKYm5Rb1IyeHBaR1V1YzJWMGRHbHVaM011WjJGd0tUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJR1JsWm1sdVpTaEhZWEJ6TENBblozSnZkeWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR0ZrWkdsMGFXOXVZV3dnWkdsdFpXNTBhVzl1Y3lCMllXeDFaU0JqWVhWelpXUWdZbmtnWjJGd2N5NWNiaUFnSUNBZ0tpQlZjMlZrSUhSdklHbHVZM0psWVhObElIZHBaSFJvSUc5bUlIUm9aU0J6Ykdsa1pYTWdkM0poY0hCbGNpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnUjJGd2N5NTJZV3gxWlNBcUlDaERiMjF3YjI1bGJuUnpMbE5wZW1WekxteGxibWQwYUNBdElERXBPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnWkdWbWFXNWxLRWRoY0hNc0lDZHlaV1IxWTNSdmNpY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklISmxaSFZqZEdsdmJpQjJZV3gxWlNCallYVnpaV1FnWW5rZ1oyRndjeTVjYmlBZ0lDQWdLaUJWYzJWa0lIUnZJSE4xWW5SeVlXTjBJSGRwWkhSb0lHOW1JSFJvWlNCemJHbGtaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhCbGNsWnBaWGNnUFNCSGJHbGtaUzV6WlhSMGFXNW5jeTV3WlhKV2FXVjNPMXh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdSMkZ3Y3k1MllXeDFaU0FxSUNod1pYSldhV1YzSUMwZ01Ta2dMeUJ3WlhKV2FXVjNPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGd2NHeDVJR05oYkdOMWJHRjBaV1FnWjJGd2N6cGNiaUFnSUNvZ0xTQmhablJsY2lCaWRXbHNaR2x1Wnl3Z2MyOGdjMnhwWkdWeklDaHBibU5zZFdScGJtY2dZMnh2Ym1WektTQjNhV3hzSUhKbFkyVnBkbVVnY0hKdmNHVnlJRzFoY21kcGJuTmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIyYVdFZ1FWQkpMQ0IwYnlCeVpXTmhiR04xYkdGMFpTQm5ZWEJ6SUhkcGRHZ2dibVYzSUc5d2RHbHZibk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoySjFhV3hrTG1GbWRHVnlKeXdnSjNWd1pHRjBaU2RkTENCMGFISnZkSFJzWlNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1IyRndjeTVoY0hCc2VTaERiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1amFHbHNaSEpsYmlrN1hHNGdJSDBzSURNd0tTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCbllYQnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jZ2RHOGdZbkpwYm1jZ2JXRnlhM1Z3SUhSdklHbDBjeUJwYm1sMFlXd2djM1JoZEdWY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpZ25aR1Z6ZEhKdmVTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JIWVhCekxuSmxiVzkyWlNoRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTVqYUdsc1pISmxiaWs3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCSFlYQnpPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFWnBibVJ6SUhOcFlteHBibWR6SUc1dlpHVnpJRzltSUhSb1pTQndZWE56WldRZ2JtOWtaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdJSHRGYkdWdFpXNTBmU0J1YjJSbFhHNGdLaUJBY21WMGRYSnVJSHRCY25KaGVYMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2MybGliR2x1WjNNb2JtOWtaU2tnZTF4dUlDQnBaaUFvYm05a1pTQW1KaUJ1YjJSbExuQmhjbVZ1ZEU1dlpHVXBJSHRjYmlBZ0lDQjJZWElnYmlBOUlHNXZaR1V1Y0dGeVpXNTBUbTlrWlM1bWFYSnpkRU5vYVd4a08xeHVJQ0FnSUhaaGNpQnRZWFJqYUdWa0lEMGdXMTA3WEc1Y2JpQWdJQ0JtYjNJZ0tEc2dianNnYmlBOUlHNHVibVY0ZEZOcFlteHBibWNwSUh0Y2JpQWdJQ0FnSUdsbUlDaHVMbTV2WkdWVWVYQmxJRDA5UFNBeElDWW1JRzRnSVQwOUlHNXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2JXRjBZMmhsWkM1d2RYTm9LRzRwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnRZWFJqYUdWa08xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlGdGRPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFTm9aV05yY3lCcFppQndZWE56WldRZ2JtOWtaU0JsZUdsemRDQmhibVFnYVhNZ1lTQjJZV3hwWkNCbGJHVnRaVzUwTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTBWc1pXMWxiblI5SUc1dlpHVmNiaUFxSUVCeVpYUjFjbTRnZTBKdmIyeGxZVzU5WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1Y0YVhOMEtHNXZaR1VwSUh0Y2JpQWdhV1lnS0c1dlpHVWdKaVlnYm05a1pTQnBibk4wWVc1alpXOW1JSGRwYm1SdmR5NUlWRTFNUld4bGJXVnVkQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdaaGJITmxPMXh1ZlZ4dVhHNTJZWElnVkZKQlEwdGZVMFZNUlVOVVQxSWdQU0FuVzJSaGRHRXRaMnhwWkdVdFpXdzlYQ0owY21GamExd2lYU2M3WEc1Y2JtWjFibU4wYVc5dUlFaDBiV3dnS0Vkc2FXUmxMQ0JEYjIxd2IyNWxiblJ6S1NCN1hHNGdJSFpoY2lCSWRHMXNJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRIVndJSE5zYVdSbGNpQklWRTFNSUc1dlpHVnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdEhiR2xrWlgwZ1oyeHBaR1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkp2YjNRZ1BTQkhiR2xrWlM1elpXeGxZM1J2Y2p0Y2JpQWdJQ0FnSUhSb2FYTXVkSEpoWTJzZ1BTQjBhR2x6TG5KdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2loVVVrRkRTMTlUUlV4RlExUlBVaWs3WEc0Z0lDQWdJQ0IwYUdsekxuTnNhV1JsY3lBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tIUm9hWE11ZDNKaGNIQmxjaTVqYUdsc1pISmxiaWt1Wm1sc2RHVnlLR1oxYm1OMGFXOXVJQ2h6Ykdsa1pTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdJWE5zYVdSbExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5aEhiR2xrWlM1elpYUjBhVzVuY3k1amJHRnpjMlZ6TG1Oc2IyNWxVMnhwWkdVcE8xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaElkRzFzTENBbmNtOXZkQ2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJRzV2WkdVZ2IyWWdkR2hsSUdkc2FXUmxJRzFoYVc0Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQklkRzFzTGw5eU8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2JtOWtaU0J2WmlCMGFHVWdaMnhwWkdVZ2JXRnBiaUJsYkdWdFpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0hJcElIdGNiaUFnSUNBZ0lHbG1JQ2hwYzFOMGNtbHVaeWh5S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaHlLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tHVjRhWE4wS0hJcEtTQjdYRzRnSUNBZ0lDQWdJRWgwYld3dVgzSWdQU0J5TzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25VbTl2ZENCbGJHVnRaVzUwSUcxMWMzUWdZbVVnWVNCbGVHbHpkR2x1WnlCSWRHMXNJRzV2WkdVbktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJR1JsWm1sdVpTaElkRzFzTENBbmRISmhZMnNuTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUJ1YjJSbElHOW1JSFJvWlNCbmJHbGtaU0IwY21GamF5QjNhWFJvSUhOc2FXUmxjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCSWRHMXNMbDkwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSE1nYm05a1pTQnZaaUIwYUdVZ1oyeHBaR1VnZEhKaFkyc2dkMmwwYUNCemJHbGtaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MyVjBPaUJtZFc1amRHbHZiaUJ6WlhRb2RDa2dlMXh1SUNBZ0lDQWdhV1lnS0dWNGFYTjBLSFFwS1NCN1hHNGdJQ0FnSUNBZ0lFaDBiV3d1WDNRZ1BTQjBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkMkZ5YmlnblEyOTFiR1FnYm05MElHWnBibVFnZEhKaFkyc2daV3hsYldWdWRDNGdVR3hsWVhObElIVnpaU0FuSUNzZ1ZGSkJRMHRmVTBWTVJVTlVUMUlnS3lBbklHRjBkSEpwWW5WMFpTNG5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hJZEcxc0xDQW5kM0poY0hCbGNpY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHNXZaR1VnYjJZZ2RHaGxJSE5zYVdSbGN5QjNjbUZ3Y0dWeUxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRWgwYld3dWRISmhZMnN1WTJocGJHUnlaVzViTUYwN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z1NIUnRiRHRjYm4xY2JseHVablZ1WTNScGIyNGdVR1ZsYXlBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0IyWVhJZ1VHVmxheUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVFpYUjFjSE1nYUc5M0lHMTFZMmdnZEc4Z2NHVmxheUJpWVhObFpDQnZiaUJ6WlhSMGFXNW5jeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1MllXeDFaU0E5SUVkc2FXUmxMbk5sZEhScGJtZHpMbkJsWldzN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lHUmxabWx1WlNoUVpXVnJMQ0FuZG1Gc2RXVW5MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QjJZV3gxWlNCdlppQjBhR1VnY0dWbGF5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdE9kVzFpWlhKOFQySnFaV04wZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRkJsWldzdVgzWTdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVTJWMGN5QjJZV3gxWlNCdlppQjBhR1VnY0dWbGF5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZkU5aWFtVmpkSDBnZG1Gc2RXVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z2MyVjBLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnBaaUFvYVhOUFltcGxZM1FvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxMbUpsWm05eVpTQTlJSFJ2U1c1MEtIWmhiSFZsTG1KbFptOXlaU2s3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxMbUZtZEdWeUlEMGdkRzlKYm5Rb2RtRnNkV1V1WVdaMFpYSXBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVZ1BTQjBiMGx1ZENoMllXeDFaU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUZCbFpXc3VYM1lnUFNCMllXeDFaVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hRWldWckxDQW5jbVZrZFdOMGIzSW5MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QnlaV1IxWTNScGIyNGdkbUZzZFdVZ1kyRjFjMlZrSUdKNUlIQmxaV3N1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhaaGJIVmxJRDBnVUdWbGF5NTJZV3gxWlR0Y2JpQWdJQ0FnSUhaaGNpQndaWEpXYVdWM0lEMGdSMnhwWkdVdWMyVjBkR2x1WjNNdWNHVnlWbWxsZHp0Y2JseHVJQ0FnSUNBZ2FXWWdLR2x6VDJKcVpXTjBLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZzZFdVdVltVm1iM0psSUM4Z2NHVnlWbWxsZHlBcklIWmhiSFZsTG1GbWRHVnlJQzhnY0dWeVZtbGxkenRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbElDb2dNaUF2SUhCbGNsWnBaWGM3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVmpZV3hqZFd4aGRHVWdjR1ZsYTJsdVp5QnphWHBsY3lCdmJqcGNiaUFnSUNvZ0xTQjNhR1Z1SUhKbGMybDZhVzVuSUhkcGJtUnZkeUIwYnlCMWNHUmhkR1VnZEc4Z2NISnZjR1Z5SUhCbGNtTmxiblJ6WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b1d5ZHlaWE5wZW1VbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JRWldWckxtMXZkVzUwS0NrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQlFaV1ZyTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJOYjNabElDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUhaaGNpQk5iM1psSUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTnZibk4wY25WamRITWdiVzkyWlNCamIyMXdiMjVsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDl2SUQwZ01EdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEWVd4amRXeGhkR1Z6SUdFZ2JXOTJaVzFsYm5RZ2RtRnNkV1VnWW1GelpXUWdiMjRnY0dGemMyVmtJRzltWm5ObGRDQmhibVFnWTNWeWNtVnVkR3g1SUdGamRHbDJaU0JwYm1SbGVDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2IyWm1jMlYwWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCdFlXdGxPaUJtZFc1amRHbHZiaUJ0WVd0bEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUY5MGFHbHpJRDBnZEdocGN6dGNibHh1SUNBZ0lDQWdkbUZ5SUc5bVpuTmxkQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dNRHRjYmx4dUlDQWdJQ0FnZEdocGN5NXZabVp6WlhRZ1BTQnZabVp6WlhRN1hHNWNiaUFnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R0YjNabEp5d2dlMXh1SUNBZ0lDQWdJQ0J0YjNabGJXVnVkRG9nZEdocGN5NTJZV3gxWlZ4dUlDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVWSEpoYm5OcGRHbHZiaTVoWm5SbGNpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHRiM1psTG1GbWRHVnlKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lHMXZkbVZ0Wlc1ME9pQmZkR2hwY3k1MllXeDFaVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQmtaV1pwYm1Vb1RXOTJaU3dnSjI5bVpuTmxkQ2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR0Z1SUc5bVpuTmxkQ0IyWVd4MVpTQjFjMlZrSUhSdklHMXZaR2xtZVNCamRYSnlaVzUwSUhSeVlXNXpiR0YwWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQk5iM1psTGw5dk8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ1lXNGdiMlptYzJWMElIWmhiSFZsSUhWelpXUWdkRzhnYlc5a2FXWjVJR04xY25KbGJuUWdkSEpoYm5Oc1lYUmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JOYjNabExsOXZJRDBnSVdselZXNWtaV1pwYm1Wa0tIWmhiSFZsS1NBL0lIUnZTVzUwS0haaGJIVmxLU0E2SURBN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1RXOTJaU3dnSjNSeVlXNXpiR0YwWlNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdFZ2NtRjNJRzF2ZG1WdFpXNTBJSFpoYkhWbExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRU52YlhCdmJtVnVkSE11VTJsNlpYTXVjMnhwWkdWWGFXUjBhQ0FxSUVkc2FXUmxMbWx1WkdWNE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdaR1ZtYVc1bEtFMXZkbVVzSUNkMllXeDFaU2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR0Z1SUdGamRIVmhiQ0J0YjNabGJXVnVkQ0IyWVd4MVpTQmpiM0p5WldOMFpXUWdZbmtnYjJabWMyVjBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJRzltWm5ObGRDQTlJSFJvYVhNdWIyWm1jMlYwTzF4dUlDQWdJQ0FnZG1GeUlIUnlZVzV6YkdGMFpTQTlJSFJvYVhNdWRISmhibk5zWVhSbE8xeHVYRzRnSUNBZ0lDQnBaaUFvUTI5dGNHOXVaVzUwY3k1RWFYSmxZM1JwYjI0dWFYTW9KM0owYkNjcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVWdLeUJ2Wm1aelpYUTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVWdMU0J2Wm1aelpYUTdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVFdGclpTQnRiM1psYldWdWRDQjBieUJ3Y205d1pYSWdjMnhwWkdVZ2IyNDZYRzRnSUNBcUlDMGdZbVZtYjNKbElHSjFhV3hrTENCemJ5Qm5iR2xrWlNCM2FXeHNJSE4wWVhKMElHRjBJR0J6ZEdGeWRFRjBZQ0JwYm1SbGVGeHVJQ0FnS2lBdElHOXVJR1ZoWTJnZ2MzUmhibVJoY21RZ2NuVnVJSFJ2SUcxdmRtVWdkRzhnYm1WM2JIa2dZMkZzWTNWc1lYUmxaQ0JwYm1SbGVGeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLRnNuWW5WcGJHUXVZbVZtYjNKbEp5d2dKM0oxYmlkZExDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdUVzkyWlM1dFlXdGxLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCTmIzWmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQlRhWHBsY3lBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0IyWVhJZ1UybDZaWE1nUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1UyVjBkWEJ6SUdScGJXVnVkR2x2Ym5NZ2IyWWdjMnhwWkdWekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnpaWFIxY0ZOc2FXUmxjem9nWm5WdVkzUnBiMjRnYzJWMGRYQlRiR2xrWlhNb0tTQjdYRzRnSUNBZ0lDQjJZWElnYzJ4cFpHVnpJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbk5zYVdSbGN6dGNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6Ykdsa1pYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2MyeHBaR1Z6VzJsZExuTjBlV3hsTG5kcFpIUm9JRDBnZEdocGN5NXpiR2xrWlZkcFpIUm9JQ3NnSjNCNEp6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUWlhSMWNITWdaR2x0Wlc1MGFXOXVjeUJ2WmlCemJHbGtaWE1nZDNKaGNIQmxjaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYzJWMGRYQlhjbUZ3Y0dWeU9pQm1kVzVqZEdsdmJpQnpaWFIxY0ZkeVlYQndaWElvWkdsdFpXNTBhVzl1S1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTV6ZEhsc1pTNTNhV1IwYUNBOUlIUm9hWE11ZDNKaGNIQmxjbE5wZW1VZ0t5QW5jSGduTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ1lYQndiR2xsWkNCemRIbHNaWE1nWm5KdmJTQklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVVvS1NCN1hHNGdJQ0FnSUNCMllYSWdjMnhwWkdWeklEMGdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuTnNhV1JsY3p0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnpiR2xrWlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnYzJ4cFpHVnpXMmxkTG5OMGVXeGxMbmRwWkhSb0lEMGdKeWM3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMbk4wZVd4bExuZHBaSFJvSUQwZ0p5YzdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaFRhWHBsY3l3Z0oyeGxibWQwYUNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdOdmRXNTBJRzUxYldKbGNpQnZaaUIwYUdVZ2MyeHBaR1Z6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1emJHbGtaWE11YkdWdVozUm9PMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnWkdWbWFXNWxLRk5wZW1WekxDQW5kMmxrZEdnbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCM2FXUjBhQ0IyWVd4MVpTQnZaaUIwYUdVZ1oyeHBaR1V1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRPZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5KdmIzUXViMlptYzJWMFYybGtkR2c3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCa1pXWnBibVVvVTJsNlpYTXNJQ2QzY21Gd2NHVnlVMmw2WlNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUhOcGVtVWdiMllnZEdobElITnNhV1JsY3lCM2NtRndjR1Z5TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlGTnBlbVZ6TG5Oc2FXUmxWMmxrZEdnZ0tpQlRhWHBsY3k1c1pXNW5kR2dnS3lCRGIyMXdiMjVsYm5SekxrZGhjSE11WjNKdmR5QXJJRU52YlhCdmJtVnVkSE11UTJ4dmJtVnpMbWR5YjNjN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1UybDZaWE1zSUNkemJHbGtaVmRwWkhSb0p5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2QybGtkR2dnZG1Gc2RXVWdiMllnZEdobElITnBibWRzWlNCemJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDUxYldKbGNuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCVGFYcGxjeTUzYVdSMGFDQXZJRWRzYVdSbExuTmxkSFJwYm1kekxuQmxjbFpwWlhjZ0xTQkRiMjF3YjI1bGJuUnpMbEJsWldzdWNtVmtkV04wYjNJZ0xTQkRiMjF3YjI1bGJuUnpMa2RoY0hNdWNtVmtkV04wYjNJN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWEJ3YkhrZ1kyRnNZM1ZzWVhSbFpDQm5iR2xrWlNkeklHUnBiV1Z1YzJsdmJuTTZYRzRnSUNBcUlDMGdZbVZtYjNKbElHSjFhV3hrYVc1bkxDQnpieUJ2ZEdobGNpQmthVzFsYm5ScGIyNXpJQ2hsTG1jdUlIUnlZVzV6YkdGMFpTa2dkMmxzYkNCaVpTQmpZV3hqZFd4aGRHVmtJSEJ5YjNCbGNuUnNlVnh1SUNBZ0tpQXRJSGRvWlc0Z2NtVnphWHBwYm1jZ2QybHVaRzkzSUhSdklISmxZMkZzWTNWc1lYUmxJSE5wYkdSbGN5QmthVzFsYm5OcGIyNXpYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUnBibWNnZG1saElFRlFTU3dnZEc4Z1kyRnNZM1ZzWVhSbElHUnBiV1Z1YzJsdmJuTWdZbUZ6WldRZ2IyNGdibVYzSUc5d2RHbHZibk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoySjFhV3hrTG1KbFptOXlaU2NzSUNkeVpYTnBlbVVuTENBbmRYQmtZWFJsSjEwc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQlRhWHBsY3k1elpYUjFjRk5zYVdSbGN5Z3BPMXh1SUNBZ0lGTnBlbVZ6TG5ObGRIVndWM0poY0hCbGNpZ3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnRiM1psSUdOaGJHTjFiR0YwWldRZ1oyeHBaR1VuY3lCa2FXMWxibk5wYjI1ek9seHVJQ0FnS2lBdElHOXVJR1JsYzNSdmRHbHVaeUIwYnlCaWNtbHVaeUJ0WVhKcmRYQWdkRzhnYVhSeklHbHVhWFJoYkNCemRHRjBaVnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0Nka1pYTjBjbTk1Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lGTnBlbVZ6TG5KbGJXOTJaU2dwTzF4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z1UybDZaWE03WEc1OVhHNWNibVoxYm1OMGFXOXVJRUoxYVd4a0lDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUhaaGNpQkNkV2xzWkNBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwSUdkc2FXUmxJR0oxYVd4a2FXNW5MaUJCWkdSeklHTnNZWE56WlhNc0lITmxkSE5jYmlBZ0lDQWdLaUJrYVcxbGJuTnBiMjV6SUdGdVpDQnpaWFIxY0hNZ2FXNXBkR2xoYkNCemRHRjBaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdSWFpsYm5SekxtVnRhWFFvSjJKMWFXeGtMbUpsWm05eVpTY3BPMXh1WEc0Z0lDQWdJQ0IwYUdsekxuUjVjR1ZEYkdGemN5Z3BPMXh1SUNBZ0lDQWdkR2hwY3k1aFkzUnBkbVZEYkdGemN5Z3BPMXh1WEc0Z0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnblluVnBiR1F1WVdaMFpYSW5LVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQlpHUnpJR0IwZVhCbFlDQmpiR0Z6Y3lCMGJ5QjBhR1VnWjJ4cFpHVWdaV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdkSGx3WlVOc1lYTnpPaUJtZFc1amRHbHZiaUIwZVhCbFEyeGhjM01vS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDNWpiR0Z6YzB4cGMzUXVZV1JrS0Vkc2FXUmxMbk5sZEhScGJtZHpMbU5zWVhOelpYTmJSMnhwWkdVdWMyVjBkR2x1WjNNdWRIbHdaVjBwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSE1nWVdOMGFYWmxJR05zWVhOeklIUnZJR04xY25KbGJuUWdjMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHRmpkR2wyWlVOc1lYTnpPaUJtZFc1amRHbHZiaUJoWTNScGRtVkRiR0Z6Y3lncElIdGNiaUFnSUNBZ0lIWmhjaUJqYkdGemMyVnpJRDBnUjJ4cFpHVXVjMlYwZEdsdVozTXVZMnhoYzNObGN6dGNiaUFnSUNBZ0lIWmhjaUJ6Ykdsa1pTQTlJRU52YlhCdmJtVnVkSE11U0hSdGJDNXpiR2xrWlhOYlIyeHBaR1V1YVc1a1pYaGRPMXh1WEc0Z0lDQWdJQ0JwWmlBb2MyeHBaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MyeHBaR1V1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzJWekxtRmpkR2wyWlZOc2FXUmxLVHRjYmx4dUlDQWdJQ0FnSUNCemFXSnNhVzVuY3loemJHbGtaU2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYzJsaWJHbHVaeWtnZTF4dUlDQWdJQ0FnSUNBZ0lITnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJHRnpjMlZ6TG1GamRHbDJaVk5zYVdSbEtUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCSVZFMU1JR05zWVhOelpYTWdZWEJ3YkdsbFpDQmhkQ0JpZFdsc1pHbHVaeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnY21WdGIzWmxRMnhoYzNObGN6b2dablZ1WTNScGIyNGdjbVZ0YjNabFEyeGhjM05sY3lncElIdGNiaUFnSUNBZ0lIWmhjaUJqYkdGemMyVnpJRDBnUjJ4cFpHVXVjMlYwZEdsdVozTXVZMnhoYzNObGN6dGNibHh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hqYkdGemMyVnpXMGRzYVdSbExuTmxkSFJwYm1kekxuUjVjR1ZkS1R0Y2JseHVJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h6YVdKc2FXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hqYkdGemMyVnpMbUZqZEdsMlpWTnNhV1JsS1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRMnhsWVhJZ1luVnBiR1JwYm1jZ1kyeGhjM05sY3pwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUdKeWFXNW5JRWhVVFV3Z2RHOGdhWFJ6SUdsdWFYUnBZV3dnYzNSaGRHVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIwYnlCeVpXMXZkbVVnWTJ4aGMzTmxjeUJpWldadmNtVWdjbVZ0YjNWdWRHbHVaeUJqYjIxd2IyNWxiblJjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoyUmxjM1J5YjNrbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JDZFdsc1pDNXlaVzF2ZG1WRGJHRnpjMlZ6S0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlcxdmRXNTBJR052YlhCdmJtVnVkRHBjYmlBZ0lDb2dMU0J2YmlCeVpYTnBlbWx1WnlCdlppQjBhR1VnZDJsdVpHOTNJSFJ2SUdOaGJHTjFiR0YwWlNCdVpYY2daR2x0Wlc1MGFXOXVjMXh1SUNBZ0tpQXRJRzl1SUhWd1pHRjBhVzVuSUhObGRIUnBibWR6SUhacFlTQkJVRWxjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkozSmxjMmw2WlNjc0lDZDFjR1JoZEdVblhTd2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRUoxYVd4a0xtMXZkVzUwS0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJUZDJGd0lHRmpkR2wyWlNCamJHRnpjeUJ2WmlCamRYSnlaVzUwSUhOc2FXUmxPbHh1SUNBZ0tpQXRJR0ZtZEdWeUlHVmhZMmdnYlc5MlpTQjBieUIwYUdVZ2JtVjNJR2x1WkdWNFhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMjF2ZG1VdVlXWjBaWEluTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1FuVnBiR1F1WVdOMGFYWmxRMnhoYzNNb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRUoxYVd4a08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCRGJHOXVaWE1nS0Vkc2FXUmxMQ0JEYjIxd2IyNWxiblJ6TENCRmRtVnVkSE1wSUh0Y2JpQWdkbUZ5SUVOc2IyNWxjeUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGNtVmhkR1VnY0dGMGRHVnliaUJ0WVhBZ1lXNWtJR052Ykd4bFkzUWdjMnhwWkdWeklIUnZJR0psSUdOc2IyNWxaQzVjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWwwWlcxeklEMGdXMTA3WEc1Y2JpQWdJQ0FnSUdsbUlDaEhiR2xrWlM1cGMxUjVjR1VvSjJOaGNtOTFjMlZzSnlrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGRHVnRjeUE5SUhSb2FYTXVZMjlzYkdWamRDZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOdmJHeGxZM1FnWTJ4dmJtVnpJSGRwZEdnZ2NHRjBkR1Z5Ymk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1kyOXNiR1ZqZERvZ1puVnVZM1JwYjI0Z1kyOXNiR1ZqZENncElIdGNiaUFnSUNBZ0lIWmhjaUJwZEdWdGN5QTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF3SUNZbUlHRnlaM1Z0Wlc1MGMxc3dYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekJkSURvZ1cxMDdYRzRnSUNBZ0lDQjJZWElnYzJ4cFpHVnpJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbk5zYVdSbGN6dGNiaUFnSUNBZ0lIWmhjaUJmUjJ4cFpHVWtjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN5eGNiaUFnSUNBZ0lDQWdJQ0J3WlhKV2FXVjNJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMbkJsY2xacFpYY3NYRzRnSUNBZ0lDQWdJQ0FnWTJ4aGMzTmxjeUE5SUY5SGJHbGtaU1J6WlhSMGFXNW5jeTVqYkdGemMyVnpPMXh1WEc1Y2JpQWdJQ0FnSUhaaGNpQndaV1ZyU1c1amNtVnRaVzUwWlhJZ1BTQXJJU0ZIYkdsa1pTNXpaWFIwYVc1bmN5NXdaV1ZyTzF4dUlDQWdJQ0FnZG1GeUlIQmhjblFnUFNCd1pYSldhV1YzSUNzZ2NHVmxhMGx1WTNKbGJXVnVkR1Z5TzF4dUlDQWdJQ0FnZG1GeUlITjBZWEowSUQwZ2MyeHBaR1Z6TG5Oc2FXTmxLREFzSUhCaGNuUXBPMXh1SUNBZ0lDQWdkbUZ5SUdWdVpDQTlJSE5zYVdSbGN5NXpiR2xqWlNndGNHRnlkQ2s3WEc1Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUhJZ1BTQXdPeUJ5SUR3Z1RXRjBhQzV0WVhnb01Td2dUV0YwYUM1bWJHOXZjaWh3WlhKV2FXVjNJQzhnYzJ4cFpHVnpMbXhsYm1kMGFDa3BPeUJ5S3lzcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6ZEdGeWRDNXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqYkc5dVpTQTlJSE4wWVhKMFcybGRMbU5zYjI1bFRtOWtaU2gwY25WbEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUdOc2IyNWxMbU5zWVhOelRHbHpkQzVoWkdRb1kyeGhjM05sY3k1amJHOXVaVk5zYVdSbEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUdsMFpXMXpMbkIxYzJnb1kyeHZibVVwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdYMmtnUFNBd095QmZhU0E4SUdWdVpDNXNaVzVuZEdnN0lGOXBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWDJOc2IyNWxJRDBnWlc1a1cxOXBYUzVqYkc5dVpVNXZaR1VvZEhKMVpTazdYRzVjYmlBZ0lDQWdJQ0FnSUNCZlkyeHZibVV1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzJWekxtTnNiMjVsVTJ4cFpHVXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2FYUmxiWE11ZFc1emFHbG1kQ2hmWTJ4dmJtVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJwZEdWdGN6dGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCY0hCbGJtUWdZMnh2Ym1Wa0lITnNhV1JsY3lCM2FYUm9JR2RsYm1WeVlYUmxaQ0J3WVhSMFpYSnVMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JoY0hCbGJtUTZJR1oxYm1OMGFXOXVJR0Z3Y0dWdVpDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCcGRHVnRjeUE5SUhSb2FYTXVhWFJsYlhNN1hHNGdJQ0FnSUNCMllYSWdYME52YlhCdmJtVnVkSE1rU0hSdGJDQTlJRU52YlhCdmJtVnVkSE11U0hSdGJDeGNiaUFnSUNBZ0lDQWdJQ0IzY21Gd2NHVnlJRDBnWDBOdmJYQnZibVZ1ZEhNa1NIUnRiQzUzY21Gd2NHVnlMRnh1SUNBZ0lDQWdJQ0FnSUhOc2FXUmxjeUE5SUY5RGIyMXdiMjVsYm5SekpFaDBiV3d1YzJ4cFpHVnpPMXh1WEc1Y2JpQWdJQ0FnSUhaaGNpQm9ZV3htSUQwZ1RXRjBhQzVtYkc5dmNpaHBkR1Z0Y3k1c1pXNW5kR2dnTHlBeUtUdGNiaUFnSUNBZ0lIWmhjaUJ3Y21Wd1pXNWtJRDBnYVhSbGJYTXVjMnhwWTJVb01Dd2dhR0ZzWmlrdWNtVjJaWEp6WlNncE8xeHVJQ0FnSUNBZ2RtRnlJR0Z3Y0dWdVpDQTlJR2wwWlcxekxuTnNhV05sS0doaGJHWXNJR2wwWlcxekxteGxibWQwYUNrN1hHNWNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZWEJ3Wlc1a0xteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUhkeVlYQndaWEl1WVhCd1pXNWtRMmhwYkdRb1lYQndaVzVrVzJsZEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdYMmt5SUQwZ01Ec2dYMmt5SUR3Z2NISmxjR1Z1WkM1c1pXNW5kR2c3SUY5cE1pc3JLU0I3WEc0Z0lDQWdJQ0FnSUhkeVlYQndaWEl1YVc1elpYSjBRbVZtYjNKbEtIQnlaWEJsYm1SYlgya3lYU3dnYzJ4cFpHVnpXekJkS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gya3pJRDBnTURzZ1gya3pJRHdnYVhSbGJYTXViR1Z1WjNSb095QmZhVE1yS3lrZ2UxeHVJQ0FnSUNBZ0lDQnBkR1Z0YzF0ZmFUTmRMbk4wZVd4bExuZHBaSFJvSUQwZ1EyOXRjRzl1Wlc1MGN5NVRhWHBsY3k1emJHbGtaVmRwWkhSb0lDc2dKM0I0Snp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1VZ1lXeHNJR05zYjI1bFpDQnpiR2xrWlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lISmxiVzkyWlRvZ1puVnVZM1JwYjI0Z2NtVnRiM1psS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2wwWlcxeklEMGdkR2hwY3k1cGRHVnRjenRjYmx4dVhHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHbDBaVzF6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUxuSmxiVzkyWlVOb2FXeGtLR2wwWlcxelcybGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnWkdWbWFXNWxLRU5zYjI1bGN5d2dKMmR5YjNjbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCaFpHUnBkR2x2Ym1Gc0lHUnBiV1Z1ZEdsdmJuTWdkbUZzZFdVZ1kyRjFjMlZrSUdKNUlHTnNiMjVsY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9RMjl0Y0c5dVpXNTBjeTVUYVhwbGN5NXpiR2xrWlZkcFpIUm9JQ3NnUTI5dGNHOXVaVzUwY3k1SFlYQnpMblpoYkhWbEtTQXFJRU5zYjI1bGN5NXBkR1Z0Y3k1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1FYQndaVzVrSUdGa1pHbDBhVzl1WVd3Z2MyeHBaR1VuY3lCamJHOXVaWE02WEc0Z0lDQXFJQzBnZDJocGJHVWdaMnhwWkdVbmN5QjBlWEJsSUdseklHQmpZWEp2ZFhObGJHQmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduZFhCa1lYUmxKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVOc2IyNWxjeTV5WlcxdmRtVW9LVHRjYmlBZ0lDQkRiRzl1WlhNdWJXOTFiblFvS1R0Y2JpQWdJQ0JEYkc5dVpYTXVZWEJ3Wlc1a0tDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCQmNIQmxibVFnWVdSa2FYUnBiMjVoYkNCemJHbGtaU2R6SUdOc2IyNWxjenBjYmlBZ0lDb2dMU0IzYUdsc1pTQm5iR2xrWlNkeklIUjVjR1VnYVhNZ1lHTmhjbTkxYzJWc1lGeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2RpZFdsc1pDNWlaV1p2Y21VbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdhV1lnS0Vkc2FXUmxMbWx6Vkhsd1pTZ25ZMkZ5YjNWelpXd25LU2tnZTF4dUlDQWdJQ0FnUTJ4dmJtVnpMbUZ3Y0dWdVpDZ3BPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGJXOTJaU0JqYkc5dVpYTWdTRlJOVEVWc1pXMWxiblJ6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JRWhVVFV3Z2RHOGdhWFJ6SUdsdWFYUnBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCRGJHOXVaWE11Y21WdGIzWmxLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCRGJHOXVaWE03WEc1OVhHNWNiblpoY2lCRmRtVnVkSE5DYVc1a1pYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1emRISjFZM1FnWVNCRmRtVnVkSE5DYVc1a1pYSWdhVzV6ZEdGdVkyVXVYRzRnSUNBcUwxeHVJQ0JtZFc1amRHbHZiaUJGZG1WdWRITkNhVzVrWlhJb0tTQjdYRzRnSUNBZ2RtRnlJR3hwYzNSbGJtVnljeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dlMzA3WEc0Z0lDQWdZMnhoYzNORFlXeHNRMmhsWTJzb2RHaHBjeXdnUlhabGJuUnpRbWx1WkdWeUtUdGNibHh1SUNBZ0lIUm9hWE11YkdsemRHVnVaWEp6SUQwZ2JHbHpkR1Z1WlhKek8xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUZrWkhNZ1pYWmxiblJ6SUd4cGMzUmxibVZ5Y3lCMGJ5Qmhjbkp2ZDNNZ1NGUk5UQ0JsYkdWdFpXNTBjeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZkVGeWNtRjVmU0JsZG1WdWRITmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN1JXeGxiV1Z1ZEh4WGFXNWtiM2Q4Ukc5amRXMWxiblI5SUdWc1hHNGdJQ0FxSUVCd1lYSmhiU0FnZTBaMWJtTjBhVzl1ZlNCamJHOXpkWEpsWEc0Z0lDQXFJRUJ3WVhKaGJTQWdlMEp2YjJ4bFlXNThUMkpxWldOMGZTQmpZWEIwZFhKbFhHNGdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBcUwxeHVYRzVjYmlBZ1kzSmxZWFJsUTJ4aGMzTW9SWFpsYm5SelFtbHVaR1Z5TENCYmUxeHVJQ0FnSUd0bGVUb2dKMjl1Snl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdiMjRvWlhabGJuUnpMQ0JsYkN3Z1kyeHZjM1Z5WlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJR05oY0hSMWNtVWdQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTXlBbUppQmhjbWQxYldWdWRITmJNMTBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN6WFNBNklHWmhiSE5sTzF4dVhHNGdJQ0FnSUNCcFppQW9hWE5UZEhKcGJtY29aWFpsYm5SektTa2dlMXh1SUNBZ0lDQWdJQ0JsZG1WdWRITWdQU0JiWlhabGJuUnpYVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCbGRtVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25OYlpYWmxiblJ6VzJsZFhTQTlJR05zYjNOMWNtVTdYRzVjYmlBZ0lDQWdJQ0FnWld3dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkSE5iYVYwc0lIUm9hWE11YkdsemRHVnVaWEp6VzJWMlpXNTBjMXRwWFYwc0lHTmhjSFIxY21VcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ1pYWmxiblFnYkdsemRHVnVaWEp6SUdaeWIyMGdZWEp5YjNkeklFaFVUVXdnWld4bGJXVnVkSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdJSHRUZEhKcGJtZDhRWEp5WVhsOUlHVjJaVzUwYzF4dUlDQWdJQ0FxSUVCd1lYSmhiU0FnZTBWc1pXMWxiblI4VjJsdVpHOTNmRVJ2WTNWdFpXNTBmU0JsYkZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjI5bVppY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUc5bVppaGxkbVZ1ZEhNc0lHVnNLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FYTlRkSEpwYm1jb1pYWmxiblJ6S1NrZ2UxeHVJQ0FnSUNBZ0lDQmxkbVZ1ZEhNZ1BTQmJaWFpsYm5SelhUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JsZG1WdWRITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1pXd3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWhsZG1WdWRITmJhVjBzSUhSb2FYTXViR2x6ZEdWdVpYSnpXMlYyWlc1MGMxdHBYVjBzSUdaaGJITmxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJFWlhOMGNtOTVJR052Ykd4bFkzUmxaQ0JzYVhOMFpXNWxjbk11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNibHh1SUNCOUxDQjdYRzRnSUNBZ2EyVjVPaUFuWkdWemRISnZlU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHUmxjM1J5YjNrb0tTQjdYRzRnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVzYVhOMFpXNWxjbk03WEc0Z0lDQWdmVnh1SUNCOVhTazdYRzRnSUhKbGRIVnliaUJGZG1WdWRITkNhVzVrWlhJN1hHNTlLQ2s3WEc1Y2JtWjFibU4wYVc5dUlGSmxjMmw2WlNBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ2RtRnlJRkpsYzJsNlpTQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJKYm1sMGFXRnNhWHBsY3lCM2FXNWtiM2NnWW1sdVpHbHVaM011WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVpYVc1a0tDazdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUW1sdVpITWdZSEpsZW5OcGVtVmdJR3hwYzNSbGJtVnlJSFJ2SUhSb1pTQjNhVzVrYjNjdVhHNGdJQ0FnSUNvZ1NYUW5jeUJoSUdOdmMzUnNlU0JsZG1WdWRDd2djMjhnZDJVZ1lYSmxJR1JsWW05MWJtTnBibWNnYVhRdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHSnBibVE2SUdaMWJtTjBhVzl1SUdKcGJtUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMjRvSjNKbGMybDZaU2NzSUhkcGJtUnZkeXdnZEdoeWIzUjBiR1VvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQkZkbVZ1ZEhNdVpXMXBkQ2duY21WemFYcGxKeWs3WEc0Z0lDQWdJQ0I5TENCSGJHbGtaUzV6WlhSMGFXNW5jeTUwYUhKdmRIUnNaU2twTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGVnVZbWx1WkhNZ2JHbHpkR1Z1WlhKeklHWnliMjBnZEdobElIZHBibVJ2ZHk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2RXNWlhVzVrT2lCbWRXNWpkR2x2YmlCMWJtSnBibVFvS1NCN1hHNGdJQ0FnSUNCQ2FXNWtaWEl1YjJabUtDZHlaWE5wZW1VbkxDQjNhVzVrYjNjcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElHSnBibVJwYm1keklHWnliMjBnZDJsdVpHOTNPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJSEpsYlc5MlpTQmhaR1JsWkNCRmRtVnVkRXhwYzNSbGJtVnlYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJSbGMzUnliM2tuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1VtVnphWHBsTG5WdVltbHVaQ2dwTzF4dUlDQWdJRUpwYm1SbGNpNWtaWE4wY205NUtDazdYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJTWlhOcGVtVTdYRzU5WEc1Y2JuWmhjaUJXUVV4SlJGOUVTVkpGUTFSSlQwNVRJRDBnV3lkc2RISW5MQ0FuY25Sc0oxMDdYRzUyWVhJZ1JreEpVRVZFWDAxUFZrVk5SVTVVVXlBOUlIdGNiaUFnSno0bk9pQW5QQ2NzWEc0Z0lDYzhKem9nSno0bkxGeHVJQ0FuUFNjNklDYzlKMXh1ZlR0Y2JseHVablZ1WTNScGIyNGdSR2x5WldOMGFXOXVJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJFYVhKbFkzUnBiMjRnUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1UyVjBkWEJ6SUdkaGNDQjJZV3gxWlNCaVlYTmxaQ0J2YmlCelpYUjBhVzVuY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NTJZV3gxWlNBOUlFZHNhV1JsTG5ObGRIUnBibWR6TG1ScGNtVmpkR2x2Ymp0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWE52YkhabGN5QndZWFIwWlhKdUlHSmhjMlZrSUc5dUlHUnBjbVZqZEdsdmJpQjJZV3gxWlZ4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSEJoZEhSbGNtNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdVM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhKbGMyOXNkbVU2SUdaMWJtTjBhVzl1SUhKbGMyOXNkbVVvY0dGMGRHVnliaWtnZTF4dUlDQWdJQ0FnZG1GeUlIUnZhMlZ1SUQwZ2NHRjBkR1Z5Ymk1emJHbGpaU2d3TENBeEtUdGNibHh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVhWE1vSjNKMGJDY3BLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ3WVhSMFpYSnVMbk53YkdsMEtIUnZhMlZ1S1M1cWIybHVLRVpNU1ZCRlJGOU5UMVpGVFVWT1ZGTmJkRzlyWlc1ZEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIQmhkSFJsY200N1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJ0eklIWmhiSFZsSUc5bUlHUnBjbVZqZEdsdmJpQnRiMlJsTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJR1JwY21WamRHbHZibHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRDYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHbHpPaUJtZFc1amRHbHZiaUJwY3loa2FYSmxZM1JwYjI0cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMblpoYkhWbElEMDlQU0JrYVhKbFkzUnBiMjQ3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FYQndiR2xsY3lCa2FYSmxZM1JwYjI0Z1kyeGhjM01nZEc4Z2RHaGxJSEp2YjNRZ1NGUk5UQ0JsYkdWdFpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JoWkdSRGJHRnpjem9nWm5WdVkzUnBiMjRnWVdSa1EyeGhjM01vS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDNWpiR0Z6YzB4cGMzUXVZV1JrS0Vkc2FXUmxMbk5sZEhScGJtZHpMbU5zWVhOelpYTXVaR2x5WldOMGFXOXVXM1JvYVhNdWRtRnNkV1ZkS1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklHUnBjbVZqZEdsdmJpQmpiR0Z6Y3lCbWNtOXRJSFJvWlNCeWIyOTBJRWhVVFV3Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psUTJ4aGMzTTZJR1oxYm1OMGFXOXVJSEpsYlc5MlpVTnNZWE56S0NrZ2UxeHVJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5KdmIzUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaEhiR2xrWlM1elpYUjBhVzVuY3k1amJHRnpjMlZ6TG1ScGNtVmpkR2x2Ymx0MGFHbHpMblpoYkhWbFhTazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaEVhWEpsWTNScGIyNHNJQ2QyWVd4MVpTY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklIWmhiSFZsSUc5bUlIUm9aU0JrYVhKbFkzUnBiMjR1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFUnBjbVZqZEdsdmJpNWZkanRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCa2FYSmxZM1JwYjI0dVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnZG1Gc2RXVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z2MyVjBLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnBaaUFvVmtGTVNVUmZSRWxTUlVOVVNVOU9VeTVwYm1SbGVFOW1LSFpoYkhWbEtTQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lFUnBjbVZqZEdsdmJpNWZkaUE5SUhaaGJIVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkMkZ5YmlnblJHbHlaV04wYVc5dUlIWmhiSFZsSUcxMWMzUWdZbVVnWUd4MGNtQWdiM0lnWUhKMGJHQW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCRGJHVmhjaUJrYVhKbFkzUnBiMjRnWTJ4aGMzTTZYRzRnSUNBcUlDMGdiMjRnWkdWemRISnZlU0IwYnlCaWNtbHVaeUJJVkUxTUlIUnZJR2wwY3lCcGJtbDBhV0ZzSUhOMFlYUmxYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUmxJSFJ2SUhKbGJXOTJaU0JqYkdGemN5QmlaV1p2Y21VZ2NtVmhjSEJzYVc1bklHSmxiR3h2ZDF4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtGc25aR1Z6ZEhKdmVTY3NJQ2QxY0dSaGRHVW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVScGNtVmpkR2x2Ymk1eVpXMXZkbVZEYkdGemN5Z3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnRiM1Z1ZENCamIyMXdiMjVsYm5RNlhHNGdJQ0FxSUMwZ2IyNGdkWEJrWVhSbElIUnZJSEpsWm14bFkzUWdZMmhoYm1kbGN5QnBiaUJrYVhKbFkzUnBiMjRnZG1Gc2RXVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduZFhCa1lYUmxKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVScGNtVmpkR2x2Ymk1dGIzVnVkQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWEJ3YkhrZ1pHbHlaV04wYVc5dUlHTnNZWE56T2x4dUlDQWdLaUF0SUdKbFptOXlaU0JpZFdsc1pHbHVaeUIwYnlCaGNIQnNlU0JqYkdGemN5Qm1iM0lnZEdobElHWnBjbk4wSUhScGJXVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIwYnlCeVpXRndjR3g1SUdScGNtVmpkR2x2YmlCamJHRnpjeUIwYUdGMElHMWhlU0JqYUdGdVoyVmtYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvV3lkaWRXbHNaQzVpWldadmNtVW5MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCRWFYSmxZM1JwYjI0dVlXUmtRMnhoYzNNb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRVJwY21WamRHbHZianRjYm4xY2JseHVMeW9xWEc0Z0tpQlNaV1pzWldOMGN5QjJZV3gxWlNCdlppQm5iR2xrWlNCdGIzWmxiV1Z1ZEM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUVkc2FXUmxYRzRnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUVOdmJYQnZibVZ1ZEhOY2JpQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1VuUnNJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFNWxaMkYwWlhNZ2RHaGxJSEJoYzNObFpDQjBjbUZ1YzJ4aGRHVWdhV1lnWjJ4cFpHVWdhWE1nYVc0Z1VsUk1JRzl3ZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2RISmhibk5zWVhSbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2WkdsbWVUb2dablZ1WTNScGIyNGdiVzlrYVdaNUtIUnlZVzV6YkdGMFpTa2dlMXh1SUNBZ0lDQWdhV1lnS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxtbHpLQ2R5ZEd3bktTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMWFJ5WVc1emJHRjBaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5WVc1emJHRjBaVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nVlhCa1lYUmxjeUJuYkdsa1pTQnRiM1psYldWdWRDQjNhWFJvSUdFZ1lHZGhjR0FnYzJWMGRHbHVaM011WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JIYkdsa1pWeHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JEYjIxd2IyNWxiblJ6WEc0Z0tpQkFjbVYwZFhKdUlIdFBZbXBsWTNSOVhHNGdLaTljYm1aMWJtTjBhVzl1SUVkaGNDQW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXBJSHRjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCTmIyUnBabWxsY3lCd1lYTnpaV1FnZEhKaGJuTnNZWFJsSUhaaGJIVmxJSGRwZEdnZ2JuVnRZbVZ5SUdsdUlIUm9aU0JnWjJGd1lDQnpaWFIwYVc1bmN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2RISmhibk5zWVhSbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2WkdsbWVUb2dablZ1WTNScGIyNGdiVzlrYVdaNUtIUnlZVzV6YkdGMFpTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlZVzV6YkdGMFpTQXJJRU52YlhCdmJtVnVkSE11UjJGd2N5NTJZV3gxWlNBcUlFZHNhV1JsTG1sdVpHVjRPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JuMWNibHh1THlvcVhHNGdLaUJWY0dSaGRHVnpJR2RzYVdSbElHMXZkbVZ0Wlc1MElIZHBkR2dnZDJsa2RHZ2diMllnWVdSa2FYUnBiMjVoYkNCamJHOXVaWE1nZDJsa2RHZ3VYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkhiR2xrWlZ4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkRiMjF3YjI1bGJuUnpYRzRnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0tpOWNibVoxYm1OMGFXOXVJRWR5YjNjZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SektTQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUVdSa2N5QjBieUIwYUdVZ2NHRnpjMlZrSUhSeVlXNXpiR0YwWlNCM2FXUjBhQ0J2WmlCMGFHVWdhR0ZzWmlCdlppQmpiRzl1WlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0T2RXMWlaWEo5SUhSeVlXNXpiR0YwWlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiMlJwWm5rNklHWjFibU4wYVc5dUlHMXZaR2xtZVNoMGNtRnVjMnhoZEdVcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGNtRnVjMnhoZEdVZ0t5QkRiMjF3YjI1bGJuUnpMa05zYjI1bGN5NW5jbTkzSUM4Z01qdGNiaUFnSUNCOVhHNGdJSDA3WEc1OVhHNWNiaThxS2x4dUlDb2dWWEJrWVhSbGN5Qm5iR2xrWlNCdGIzWmxiV1Z1ZENCM2FYUm9JR0VnWUhCbFpXdGdJSE5sZEhScGJtZHpMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdSMnhwWkdWY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdRMjl0Y0c5dVpXNTBjMXh1SUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJRWldWcmFXNW5JQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFMXZaR2xtYVdWeklIQmhjM05sWkNCMGNtRnVjMnhoZEdVZ2RtRnNkV1VnZDJsMGFDQmhJR0J3WldWcllDQnpaWFIwYVc1bkxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1RuVnRZbVZ5ZlNCMGNtRnVjMnhoZEdWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzlrYVdaNU9pQm1kVzVqZEdsdmJpQnRiMlJwWm5rb2RISmhibk5zWVhSbEtTQjdYRzRnSUNBZ0lDQnBaaUFvUjJ4cFpHVXVjMlYwZEdsdVozTXVabTlqZFhOQmRDQStQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3WldWcklEMGdRMjl0Y0c5dVpXNTBjeTVRWldWckxuWmhiSFZsTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzA5aWFtVmpkQ2h3WldWcktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnTFNCd1pXVnJMbUpsWm05eVpUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnTFNCd1pXVnJPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEpoYm5Oc1lYUmxPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JuMWNibHh1THlvcVhHNGdLaUJWY0dSaGRHVnpJR2RzYVdSbElHMXZkbVZ0Wlc1MElIZHBkR2dnWVNCZ1ptOWpkWE5CZEdBZ2MyVjBkR2x1WjNNdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCSGJHbGtaVnh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCRGIyMXdiMjVsYm5SelhHNGdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlFWnZZM1Z6YVc1bklDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5a2dlMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUUxdlpHbG1hV1Z6SUhCaGMzTmxaQ0IwY21GdWMyeGhkR1VnZG1Gc2RXVWdkMmwwYUNCcGJtUmxlQ0JwYmlCMGFHVWdZR1p2WTNWelFYUmdJSE5sZEhScGJtY3VYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdE9kVzFpWlhKOUlIUnlZVzV6YkdGMFpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjJScFpuazZJR1oxYm1OMGFXOXVJRzF2WkdsbWVTaDBjbUZ1YzJ4aGRHVXBJSHRjYmlBZ0lDQWdJSFpoY2lCbllYQWdQU0JEYjIxd2IyNWxiblJ6TGtkaGNITXVkbUZzZFdVN1hHNGdJQ0FnSUNCMllYSWdkMmxrZEdnZ1BTQkRiMjF3YjI1bGJuUnpMbE5wZW1WekxuZHBaSFJvTzF4dUlDQWdJQ0FnZG1GeUlHWnZZM1Z6UVhRZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3k1bWIyTjFjMEYwTzF4dUlDQWdJQ0FnZG1GeUlITnNhV1JsVjJsa2RHZ2dQU0JEYjIxd2IyNWxiblJ6TGxOcGVtVnpMbk5zYVdSbFYybGtkR2c3WEc1Y2JpQWdJQ0FnSUdsbUlDaG1iMk4xYzBGMElEMDlQU0FuWTJWdWRHVnlKeWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKaGJuTnNZWFJsSUMwZ0tIZHBaSFJvSUM4Z01pQXRJSE5zYVdSbFYybGtkR2dnTHlBeUtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlZVzV6YkdGMFpTQXRJSE5zYVdSbFYybGtkR2dnS2lCbWIyTjFjMEYwSUMwZ1oyRndJQ29nWm05amRYTkJkRHRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nUVhCd2JHbGxjeUJrYVdabWNtVnVkQ0IwY21GdWMyWnZjbTFsY25NZ2IyNGdkSEpoYm5Oc1lYUmxJSFpoYkhWbExseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ1IyeHBaR1ZjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ1EyOXRjRzl1Wlc1MGMxeHVJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnRkWFJoZEc5eUlDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUM4cUtseHVJQ0FnS2lCTlpYSm5aU0JwYm5OMFlXNWpaU0IwY21GdWMyWnZjbTFsY25NZ2QybDBhQ0JqYjJ4c1pXTjBhVzl1SUc5bUlHUmxabUYxYkhRZ2RISmhibk5tYjNKdFpYSnpMbHh1SUNBZ0tpQkpkQ2R6SUdsdGNHOXlkR0Z1ZENCMGFHRjBJSFJvWlNCU2RHd2dZMjl0Y0c5dVpXNTBJR0psSUd4aGMzUWdiMjRnZEdobElHeHBjM1FzWEc0Z0lDQXFJSE52SUdsMElISmxabXhsWTNSeklHRnNiQ0J3Y21WMmFXOTFjeUIwY21GdWMyWnZjbTFoZEdsdmJuTXVYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJSFpoY2lCVVVrRk9VMFpQVWsxRlVsTWdQU0JiUjJGd0xDQkhjbTkzTENCUVpXVnJhVzVuTENCR2IyTjFjMmx1WjEwdVkyOXVZMkYwS0Vkc2FXUmxMbDkwTENCYlVuUnNYU2s3WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlFhWEJzYVc1bGN5QjBjbUZ1YzJ4aGRHVWdkbUZzZFdVZ2QybDBhQ0J5WldkcGMzUmxjbVZrSUhSeVlXNXpabTl5YldWeWN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2RISmhibk5zWVhSbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzExZEdGMFpUb2dablZ1WTNScGIyNGdiWFYwWVhSbEtIUnlZVzV6YkdGMFpTa2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JVVWtGT1UwWlBVazFGVWxNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlIUnlZVzV6Wm05eWJXVnlJRDBnVkZKQlRsTkdUMUpOUlZKVFcybGRPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBjMFoxYm1OMGFXOXVLSFJ5WVc1elptOXliV1Z5S1NBbUppQnBjMFoxYm1OMGFXOXVLSFJ5WVc1elptOXliV1Z5S0NrdWJXOWthV1o1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJ5WVc1emJHRjBaU0E5SUhSeVlXNXpabTl5YldWeUtFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcExtMXZaR2xtZVNoMGNtRnVjMnhoZEdVcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJSGRoY200b0oxUnlZVzV6Wm05eWJXVnlJSE5vYjNWc1pDQmlaU0JoSUdaMWJtTjBhVzl1SUhSb1lYUWdjbVYwZFhKdWN5QmhiaUJ2WW1wbFkzUWdkMmwwYUNCZ2JXOWthV1o1S0NsZ0lHMWxkR2h2WkNjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVTdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJVY21GdWMyeGhkR1VnS0Vkc2FXUmxMQ0JEYjIxd2IyNWxiblJ6TENCRmRtVnVkSE1wSUh0Y2JpQWdkbUZ5SUZSeVlXNXpiR0YwWlNBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFJ6SUhaaGJIVmxJRzltSUhSeVlXNXpiR0YwWlNCdmJpQklWRTFNSUdWc1pXMWxiblF1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdkbUZzZFdWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnYzJWMEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCMllYSWdkSEpoYm5ObWIzSnRJRDBnYlhWMFlYUnZjaWhIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWt1YlhWMFlYUmxLSFpoYkhWbEtUdGNibHh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuZHlZWEJ3WlhJdWMzUjViR1V1ZEhKaGJuTm1iM0p0SUQwZ0ozUnlZVzV6YkdGMFpUTmtLQ2NnS3lBdE1TQXFJSFJ5WVc1elptOXliU0FySUNkd2VDd2dNSEI0TENBd2NIZ3BKenRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pXMXZkbVZ6SUhaaGJIVmxJRzltSUhSeVlXNXpiR0YwWlNCbWNtOXRJRWhVVFV3Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVVvS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTV6ZEhsc1pTNTBjbUZ1YzJadmNtMGdQU0FuSnp0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTmxkQ0J1WlhjZ2RISmhibk5zWVhSbElIWmhiSFZsT2x4dUlDQWdLaUF0SUc5dUlHMXZkbVVnZEc4Z2NtVm1iR1ZqZENCcGJtUmxlQ0JqYUdGdVoyVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIyYVdFZ1FWQkpJSFJ2SUhKbFpteGxZM1FnY0c5emMybGliR1VnWTJoaGJtZGxjeUJwYmlCdmNIUnBiMjV6WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyMXZkbVVuTENCbWRXNWpkR2x2YmlBb1kyOXVkR1Y0ZENrZ2UxeHVJQ0FnSUhaaGNpQm5ZWEFnUFNCRGIyMXdiMjVsYm5SekxrZGhjSE11ZG1Gc2RXVTdYRzRnSUNBZ2RtRnlJR3hsYm1kMGFDQTlJRU52YlhCdmJtVnVkSE11VTJsNlpYTXViR1Z1WjNSb08xeHVJQ0FnSUhaaGNpQjNhV1IwYUNBOUlFTnZiWEJ2Ym1WdWRITXVVMmw2WlhNdWMyeHBaR1ZYYVdSMGFEdGNibHh1SUNBZ0lHbG1JQ2hIYkdsa1pTNXBjMVI1Y0dVb0oyTmhjbTkxYzJWc0p5a2dKaVlnUTI5dGNHOXVaVzUwY3k1U2RXNHVhWE5QWm1aelpYUW9KenduS1NrZ2UxeHVJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NVVjbUZ1YzJsMGFXOXVMbUZtZEdWeUtHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnUlhabGJuUnpMbVZ0YVhRb0ozUnlZVzV6YkdGMFpTNXFkVzF3SnlrN1hHNWNiaUFnSUNBZ0lDQWdWSEpoYm5Oc1lYUmxMbk5sZENoM2FXUjBhQ0FxSUNoc1pXNW5kR2dnTFNBeEtTazdYRzRnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJRlJ5WVc1emJHRjBaUzV6WlhRb0xYZHBaSFJvSUMwZ1oyRndJQ29nYkdWdVozUm9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvUjJ4cFpHVXVhWE5VZVhCbEtDZGpZWEp2ZFhObGJDY3BJQ1ltSUVOdmJYQnZibVZ1ZEhNdVVuVnVMbWx6VDJabWMyVjBLQ2MrSnlrcElIdGNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVWSEpoYm5OcGRHbHZiaTVoWm5SbGNpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZDBjbUZ1YzJ4aGRHVXVhblZ0Y0NjcE8xeHVYRzRnSUNBZ0lDQWdJRlJ5WVc1emJHRjBaUzV6WlhRb01DazdYRzRnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJRlJ5WVc1emJHRjBaUzV6WlhRb2QybGtkR2dnS2lCc1pXNW5kR2dnS3lCbllYQWdLaUJzWlc1bmRHZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCVWNtRnVjMnhoZEdVdWMyVjBLR052Ym5SbGVIUXViVzkyWlcxbGJuUXBPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnRiM1psSUhSeVlXNXpiR0YwWlRwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUdKeWFXNW5JRzFoY210MWNDQjBieUJwZEhNZ2FXNXBkR0ZzSUhOMFlYUmxYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJSbGMzUnliM2tuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1ZISmhibk5zWVhSbExuSmxiVzkyWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdWSEpoYm5Oc1lYUmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQlVjbUZ1YzJsMGFXOXVJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQkliMnhrY3lCcGJtRmpkR2wyYVhSNUlITjBZWFIxY3lCdlppQjBjbUZ1YzJsMGFXOXVMbHh1SUNBZ0tpQlhhR1Z1SUhSeWRXVWdkSEpoYm5OcGRHbHZiaUJwY3lCdWIzUWdZWEJ3YkdsbFpDNWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMEp2YjJ4bFlXNTlYRzRnSUNBcUwxeHVJQ0IyWVhJZ1pHbHpZV0pzWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0IyWVhJZ1ZISmhibk5wZEdsdmJpQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYjIxd2IzTmxjeUJ6ZEhKcGJtY2diMllnZEdobElFTlRVeUIwY21GdWMybDBhVzl1TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSEJ5YjNCbGNuUjVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdVM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOdmJYQnZjMlU2SUdaMWJtTjBhVzl1SUdOdmJYQnZjMlVvY0hKdmNHVnlkSGtwSUh0Y2JpQWdJQ0FnSUhaaGNpQnpaWFIwYVc1bmN5QTlJRWRzYVdSbExuTmxkSFJwYm1kek8xeHVYRzRnSUNBZ0lDQnBaaUFvSVdScGMyRmliR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCd2NtOXdaWEowZVNBcklDY2dKeUFySUhSb2FYTXVaSFZ5WVhScGIyNGdLeUFuYlhNZ0p5QXJJSE5sZEhScGJtZHpMbUZ1YVcxaGRHbHZibFJwYldsdVowWjFibU03WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ3Y205d1pYSjBlU0FySUNjZ01HMXpJQ2NnS3lCelpYUjBhVzVuY3k1aGJtbHRZWFJwYjI1VWFXMXBibWRHZFc1ak8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2RtRnNkV1VnYjJZZ2RISmhibk5wZEdsdmJpQnZiaUJJVkUxTUlHVnNaVzFsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaejE5SUhCeWIzQmxjblI1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCelpYUTZJR1oxYm1OMGFXOXVJSE5sZENncElIdGNiaUFnSUNBZ0lIWmhjaUJ3Y205d1pYSjBlU0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dKM1J5WVc1elptOXliU2M3WEc1Y2JpQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMbk4wZVd4bExuUnlZVzV6YVhScGIyNGdQU0IwYUdsekxtTnZiWEJ2YzJVb2NISnZjR1Z5ZEhrcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdkbUZzZFdVZ2IyWWdkSEpoYm5OcGRHbHZiaUJtY205dElFaFVUVXdnWld4bGJXVnVkQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnY21WdGIzWmxPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVW9LU0I3WEc0Z0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpNXpkSGxzWlM1MGNtRnVjMmwwYVc5dUlEMGdKeWM3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VuVnVjeUJqWVd4c1ltRmpheUJoWm5SbGNpQmhibWx0WVhScGIyNHVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkydGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0ZtZEdWeU9pQm1kVzVqZEdsdmJpQmhablJsY2loallXeHNZbUZqYXlrZ2UxeHVJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUdOaGJHeGlZV05yS0NrN1hHNGdJQ0FnSUNCOUxDQjBhR2x6TG1SMWNtRjBhVzl1S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkZibUZpYkdVZ2RISmhibk5wZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaVzVoWW14bE9pQm1kVzVqZEdsdmJpQmxibUZpYkdVb0tTQjdYRzRnSUNBZ0lDQmthWE5oWW14bFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQjBhR2x6TG5ObGRDZ3BPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVScGMyRmliR1VnZEhKaGJuTnBkR2x2Ymk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1pHbHpZV0pzWlRvZ1puVnVZM1JwYjI0Z1pHbHpZV0pzWlNncElIdGNiaUFnSUNBZ0lHUnBjMkZpYkdWa0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ2RHaHBjeTV6WlhRb0tUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdaR1ZtYVc1bEtGUnlZVzV6YVhScGIyNHNJQ2RrZFhKaGRHbHZiaWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR1IxY21GMGFXOXVJRzltSUhSb1pTQjBjbUZ1YzJsMGFXOXVJR0poYzJWa1hHNGdJQ0FnSUNvZ2IyNGdZM1Z5Y21WdWRHeDVJSEoxYm01cGJtY2dZVzVwYldGMGFXOXVJSFI1Y0dVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLRWRzYVdSbExtbHpWSGx3WlNnbmMyeHBaR1Z5SnlrZ0ppWWdRMjl0Y0c5dVpXNTBjeTVTZFc0dWIyWm1jMlYwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpYUjBhVzVuY3k1eVpYZHBibVJFZFhKaGRHbHZianRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSE5sZEhScGJtZHpMbUZ1YVcxaGRHbHZia1IxY21GMGFXOXVPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZObGRDQjBjbUZ1YzJsMGFXOXVJR0J6ZEhsc1pXQWdkbUZzZFdVNlhHNGdJQ0FxSUMwZ2IyNGdaV0ZqYUNCdGIzWnBibWNzSUdKbFkyRjFjMlVnYVhRZ2JXRjVJR0psSUdOc1pXRnlaV1FnWW5rZ2IyWm1jMlYwSUcxdmRtVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduYlc5MlpTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JVY21GdWMybDBhVzl1TG5ObGRDZ3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1JHbHpZV0pzWlNCMGNtRnVjMmwwYVc5dU9seHVJQ0FnS2lBdElHSmxabTl5WlNCcGJtbDBhV0ZzSUdKMWFXeGtJSFJ2SUdGMmIybGtJSFJ5WVc1emFYUnBiMjVwYm1jZ1puSnZiU0JnTUdBZ2RHOGdZSE4wWVhKMFFYUmdJR2x1WkdWNFhHNGdJQ0FxSUMwZ2QyaHBiR1VnY21WemFYcHBibWNnZDJsdVpHOTNJR0Z1WkNCeVpXTmhiR04xYkdGMGFXNW5JR1JwYldWdWRHbHZibk5jYmlBZ0lDb2dMU0J2YmlCcWRXMXdhVzVuSUdaeWIyMGdiMlptYzJWMElIUnlZVzV6YVhScGIyNGdZWFFnYzNSaGNuUWdZVzVrSUdWdVpDQmxaR2RsY3lCcGJpQmdZMkZ5YjNWelpXeGdJSFI1Y0dWY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMkoxYVd4a0xtSmxabTl5WlNjc0lDZHlaWE5wZW1VbkxDQW5kSEpoYm5Oc1lYUmxMbXAxYlhBblhTd2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRlJ5WVc1emFYUnBiMjR1WkdsellXSnNaU2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSVzVoWW14bElIUnlZVzV6YVhScGIyNDZYRzRnSUNBcUlDMGdiMjRnWldGamFDQnlkVzV1YVc1bkxDQmlaV05oZFhObElHbDBJRzFoZVNCaVpTQmthWE5oWW14bFpDQmllU0J2Wm1aelpYUWdiVzkyWlZ4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZHlkVzRuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1ZISmhibk5wZEdsdmJpNWxibUZpYkdVb0tUdGNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGJXOTJaU0IwY21GdWMybDBhVzl1T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY2dkRzhnWW5KcGJtY2diV0Z5YTNWd0lIUnZJR2wwY3lCcGJtbDBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCVWNtRnVjMmwwYVc5dUxuSmxiVzkyWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdWSEpoYm5OcGRHbHZianRjYm4xY2JseHVMeW9xWEc0Z0tpQlVaWE4wSUhacFlTQmhJR2RsZEhSbGNpQnBiaUIwYUdVZ2IzQjBhVzl1Y3lCdlltcGxZM1FnZEc4Z2MyVmxYRzRnS2lCcFppQjBhR1VnY0dGemMybDJaU0J3Y205d1pYSjBlU0JwY3lCaFkyTmxjM05sWkM1Y2JpQXFYRzRnS2lCQWMyVmxJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzlYU1VOSEwwVjJaVzUwVEdsemRHVnVaWEpQY0hScGIyNXpMMkpzYjJJdloyZ3RjR0ZuWlhNdlpYaHdiR0ZwYm1WeUxtMWtJMlpsWVhSMWNtVXRaR1YwWldOMGFXOXVYRzRnS2k5Y2JseHVkbUZ5SUhOMWNIQnZjblJ6VUdGemMybDJaU0E5SUdaaGJITmxPMXh1WEc1MGNua2dlMXh1SUNCMllYSWdiM0IwY3lBOUlFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2g3ZlN3Z0ozQmhjM05wZG1VbkxDQjdYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRb0tTQjdYRzRnSUNBZ0lDQnpkWEJ3YjNKMGMxQmhjM05wZG1VZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjNSbGMzUlFZWE56YVhabEp5d2diblZzYkN3Z2IzQjBjeWs3WEc0Z0lIZHBibVJ2ZHk1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtDZDBaWE4wVUdGemMybDJaU2NzSUc1MWJHd3NJRzl3ZEhNcE8xeHVmU0JqWVhSamFDQW9aU2tnZTMxY2JseHVkbUZ5SUhOMWNIQnZjblJ6VUdGemMybDJaU1F4SUQwZ2MzVndjRzl5ZEhOUVlYTnphWFpsTzF4dVhHNTJZWElnVTFSQlVsUmZSVlpGVGxSVElEMGdXeWQwYjNWamFITjBZWEowSnl3Z0oyMXZkWE5sWkc5M2JpZGRPMXh1ZG1GeUlFMVBWa1ZmUlZaRlRsUlRJRDBnV3lkMGIzVmphRzF2ZG1VbkxDQW5iVzkxYzJWdGIzWmxKMTA3WEc1MllYSWdSVTVFWDBWV1JVNVVVeUE5SUZzbmRHOTFZMmhsYm1RbkxDQW5kRzkxWTJoallXNWpaV3duTENBbmJXOTFjMlYxY0Njc0lDZHRiM1Z6Wld4bFlYWmxKMTA3WEc1MllYSWdUVTlWVTBWZlJWWkZUbFJUSUQwZ1d5ZHRiM1Z6WldSdmQyNG5MQ0FuYlc5MWMyVnRiM1psSnl3Z0oyMXZkWE5sZFhBbkxDQW5iVzkxYzJWc1pXRjJaU2RkTzF4dVhHNW1kVzVqZEdsdmJpQlRkMmx3WlNBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ2RtRnlJSE4zYVhCbFUybHVJRDBnTUR0Y2JpQWdkbUZ5SUhOM2FYQmxVM1JoY25SWUlEMGdNRHRjYmlBZ2RtRnlJSE4zYVhCbFUzUmhjblJaSUQwZ01EdGNiaUFnZG1GeUlHUnBjMkZpYkdWa0lEMGdabUZzYzJVN1hHNGdJSFpoY2lCdGIzWmxZV0pzWlNBOUlIUnlkV1U3WEc0Z0lIWmhjaUJqWVhCMGRYSmxJRDBnYzNWd2NHOXlkSE5RWVhOemFYWmxKREVnUHlCN0lIQmhjM05wZG1VNklIUnlkV1VnZlNBNklHWmhiSE5sTzF4dVhHNGdJSFpoY2lCVGQybHdaU0E5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSmJtbDBhV0ZzYVhwbGN5QnpkMmx3WlNCaWFXNWthVzVuY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NWlhVzVrVTNkcGNHVlRkR0Z5ZENncE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWhoYm1Sc1pYSWdabTl5SUdCemQybHdaWE4wWVhKMFlDQmxkbVZ1ZEM0Z1EyRnNZM1ZzWVhSbGN5QmxiblJ5ZVNCd2IybHVkSE1nYjJZZ2RHaGxJSFZ6WlhJbmN5QjBZWEF1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITjBZWEowT2lCbWRXNWpkR2x2YmlCemRHRnlkQ2hsZG1WdWRDa2dlMXh1SUNBZ0lDQWdhV1lnS0NGa2FYTmhZbXhsWkNBbUppQWhSMnhwWkdVdVpHbHpZV0pzWldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1a2FYTmhZbXhsS0NrN1hHNWNiaUFnSUNBZ0lDQWdkbUZ5SUhOM2FYQmxJRDBnZEdocGN5NTBiM1ZqYUdWektHVjJaVzUwS1R0Y2JseHVJQ0FnSUNBZ0lDQnRiM1psWVdKc1pTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lITjNhWEJsVTJsdUlEMGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2MzZHBjR1ZUZEdGeWRGZ2dQU0IwYjBsdWRDaHpkMmx3WlM1d1lXZGxXQ2s3WEc0Z0lDQWdJQ0FnSUhOM2FYQmxVM1JoY25SWklEMGdkRzlKYm5Rb2MzZHBjR1V1Y0dGblpWa3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkZOM2FYQmxUVzkyWlNncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUlRkMmx3WlVWdVpDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHpkMmx3WlM1emRHRnlkQ2NwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFaGhibVJzWlhJZ1ptOXlJR0J6ZDJsd1pXMXZkbVZnSUdWMlpXNTBMaUJEWVd4amRXeGhkR1Z6SUhWelpYSW5jeUIwWVhBZ1lXNW5iR1VnWVc1a0lHUnBjM1JoYm1ObExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdWMlpXNTBYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTJaVG9nWm5WdVkzUnBiMjRnYlc5MlpTaGxkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0ZIYkdsa1pTNWthWE5oWW14bFpDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1gwZHNhV1JsSkhObGRIUnBibWR6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM01zWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiM1ZqYUVGdVoyeGxJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMblJ2ZFdOb1FXNW5iR1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiM1ZqYUZKaGRHbHZJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMblJ2ZFdOb1VtRjBhVzhzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6YzJWeklEMGdYMGRzYVdSbEpITmxkSFJwYm1kekxtTnNZWE56WlhNN1hHNWNibHh1SUNBZ0lDQWdJQ0IyWVhJZ2MzZHBjR1VnUFNCMGFHbHpMblJ2ZFdOb1pYTW9aWFpsYm5RcE8xeHVYRzRnSUNBZ0lDQWdJSFpoY2lCemRXSkZlRk40SUQwZ2RHOUpiblFvYzNkcGNHVXVjR0ZuWlZncElDMGdjM2RwY0dWVGRHRnlkRmc3WEc0Z0lDQWdJQ0FnSUhaaGNpQnpkV0pGZVZONUlEMGdkRzlKYm5Rb2MzZHBjR1V1Y0dGblpWa3BJQzBnYzNkcGNHVlRkR0Z5ZEZrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3YjNkRldDQTlJRTFoZEdndVlXSnpLSE4xWWtWNFUzZ2dQRHdnTWlrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3YjNkRldTQTlJRTFoZEdndVlXSnpLSE4xWWtWNVUza2dQRHdnTWlrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZDJsd1pVaDVjRzkwWlc1MWMyVWdQU0JOWVhSb0xuTnhjblFvY0c5M1JWZ2dLeUJ3YjNkRldTazdYRzRnSUNBZ0lDQWdJSFpoY2lCemQybHdaVU5oZEdobGRIVnpJRDBnVFdGMGFDNXpjWEowS0hCdmQwVlpLVHRjYmx4dUlDQWdJQ0FnSUNCemQybHdaVk5wYmlBOUlFMWhkR2d1WVhOcGJpaHpkMmx3WlVOaGRHaGxkSFZ6SUM4Z2MzZHBjR1ZJZVhCdmRHVnVkWE5sS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYlc5MlpXRmliR1VnSmlZZ2MzZHBjR1ZUYVc0Z0tpQXhPREFnTHlCTllYUm9MbEJKSUR3Z2RHOTFZMmhCYm1kc1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdWMlpXNTBMbk4wYjNCUWNtOXdZV2RoZEdsdmJpZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NU5iM1psTG0xaGEyVW9jM1ZpUlhoVGVDQXFJSFJ2Um14dllYUW9kRzkxWTJoU1lYUnBieWtwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzJWekxtUnlZV2RuYVc1bktUdGNibHh1SUNBZ0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHpkMmx3WlM1dGIzWmxKeWs3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JXOTJaV0ZpYkdVZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWhoYm1Sc1pYSWdabTl5SUdCemQybHdaV1Z1WkdBZ1pYWmxiblF1SUVacGJtbDBhV0ZzYVhwbGN5QjFjMlZ5SjNNZ2RHRndJR0Z1WkNCa1pXTnBaR1Z6SUdGaWIzVjBJR2RzYVdSbElHMXZkbVV1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHVnVaRG9nWm5WdVkzUnBiMjRnWlc1a0tHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCcFppQW9JVWRzYVdSbExtUnBjMkZpYkdWa0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCelpYUjBhVzVuY3lBOUlFZHNhV1JsTG5ObGRIUnBibWR6TzF4dVhHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZDJsd1pTQTlJSFJvYVhNdWRHOTFZMmhsY3lobGRtVnVkQ2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQjBhSEpsYzJodmJHUWdQU0IwYUdsekxuUm9jbVZ6YUc5c1pDaGxkbVZ1ZENrN1hHNWNiaUFnSUNBZ0lDQWdkbUZ5SUhOM2FYQmxSR2x6ZEdGdVkyVWdQU0J6ZDJsd1pTNXdZV2RsV0NBdElITjNhWEJsVTNSaGNuUllPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MzZHBjR1ZFWldjZ1BTQnpkMmx3WlZOcGJpQXFJREU0TUNBdklFMWhkR2d1VUVrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZEdWd2N5QTlJRTFoZEdndWNtOTFibVFvYzNkcGNHVkVhWE4wWVc1alpTQXZJRU52YlhCdmJtVnVkSE11VTJsNlpYTXVjMnhwWkdWWGFXUjBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1GaWJHVW9LVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9iVzkyWldGaWJHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jM2RwY0dWRWFYTjBZVzVqWlNBK0lIUm9jbVZ6YUc5c1pDQW1KaUJ6ZDJsd1pVUmxaeUE4SUhObGRIUnBibWR6TG5SdmRXTm9RVzVuYkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9hV3hsSUhOM2FYQmxJR2x6SUhCdmMybDBhWFpsSUdGdVpDQm5jbVZoZEdWeUlIUm9ZVzRnZEdoeVpYTm9iMnhrSUcxdmRtVWdZbUZqYTNkaGNtUXVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jMlYwZEdsdVozTXVjR1Z5Vkc5MVkyZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JsY0hNZ1BTQk5ZWFJvTG0xcGJpaHpkR1Z3Y3l3Z2RHOUpiblFvYzJWMGRHbHVaM011Y0dWeVZHOTFZMmdwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxtbHpLQ2R5ZEd3bktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3Y3lBOUlDMXpkR1Z3Y3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVTZFc0dWJXRnJaU2hEYjIxd2IyNWxiblJ6TGtScGNtVmpkR2x2Ymk1eVpYTnZiSFpsS0NjOEp5QXJJSE4wWlhCektTazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoemQybHdaVVJwYzNSaGJtTmxJRHdnTFhSb2NtVnphRzlzWkNBbUppQnpkMmx3WlVSbFp5QThJSE5sZEhScGJtZHpMblJ2ZFdOb1FXNW5iR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb2FXeGxJSE4zYVhCbElHbHpJRzVsWjJGMGFYWmxJR0Z1WkNCc2IzZGxjaUIwYUdGdUlHNWxaMkYwYVhabElIUm9jbVZ6YUc5c1pDQnRiM1psSUdadmNuZGhjbVF1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzJWMGRHbHVaM011Y0dWeVZHOTFZMmdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNITWdQU0JOWVhSb0xtMWhlQ2h6ZEdWd2N5d2dMWFJ2U1c1MEtITmxkSFJwYm1kekxuQmxjbFJ2ZFdOb0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaERiMjF3YjI1bGJuUnpMa1JwY21WamRHbHZiaTVwY3lnbmNuUnNKeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNITWdQU0F0YzNSbGNITTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVVuVnVMbTFoYTJVb1EyOXRjRzl1Wlc1MGN5NUVhWEpsWTNScGIyNHVjbVZ6YjJ4MlpTZ25QaWNnS3lCemRHVndjeWtwTzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCWGFHbHNaU0J6ZDJsd1pTQmtiMjRuZENCeVpXRmphQ0JrYVhOMFlXNWpaU0JoY0hCc2VTQndjbVYyYVc5MWN5QjBjbUZ1YzJadmNtMHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxrMXZkbVV1YldGclpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJRU52YlhCdmJtVnVkSE11U0hSdGJDNXliMjkwTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvYzJWMGRHbHVaM011WTJ4aGMzTmxjeTVrY21GbloybHVaeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUxYm1KcGJtUlRkMmx3WlUxdmRtVW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTFibUpwYm1SVGQybHdaVVZ1WkNncE8xeHVYRzRnSUNBZ0lDQWdJRVYyWlc1MGN5NWxiV2wwS0NkemQybHdaUzVsYm1RbktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJDYVc1a2N5QnpkMmx3WlNkeklITjBZWEowYVc1bklHVjJaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaWFXNWtVM2RwY0dWVGRHRnlkRG9nWm5WdVkzUnBiMjRnWW1sdVpGTjNhWEJsVTNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ1gzUm9hWE1nUFNCMGFHbHpPMXh1WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLSE5sZEhScGJtZHpMbk4zYVhCbFZHaHlaWE5vYjJ4a0tTQjdYRzRnSUNBZ0lDQWdJRUpwYm1SbGNpNXZiaWhUVkVGU1ZGOUZWa1ZPVkZOYk1GMHNJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUxDQm1kVzVqZEdsdmJpQW9aWFpsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0JmZEdocGN5NXpkR0Z5ZENobGRtVnVkQ2s3WEc0Z0lDQWdJQ0FnSUgwc0lHTmhjSFIxY21VcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvYzJWMGRHbHVaM011WkhKaFoxUm9jbVZ6YUc5c1pDa2dlMXh1SUNBZ0lDQWdJQ0JDYVc1a1pYSXViMjRvVTFSQlVsUmZSVlpGVGxSVFd6RmRMQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpd2dablZ1WTNScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWDNSb2FYTXVjM1JoY25Rb1pYWmxiblFwTzF4dUlDQWdJQ0FnSUNCOUxDQmpZWEIwZFhKbEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUnpJSE4zYVhCbEozTWdjM1JoY25ScGJtY2daWFpsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkZOM2FYQmxVM1JoY25RNklHWjFibU4wYVc5dUlIVnVZbWx1WkZOM2FYQmxVM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyWm1LRk5VUVZKVVgwVldSVTVVVTFzd1hTd2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuZHlZWEJ3WlhJcE8xeHVJQ0FnSUNBZ1FtbHVaR1Z5TG05bVppaFRWRUZTVkY5RlZrVk9WRk5iTVYwc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkNhVzVrY3lCemQybHdaU2R6SUcxdmRtbHVaeUJsZG1WdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkZOM2FYQmxUVzkyWlRvZ1puVnVZM1JwYjI0Z1ltbHVaRk4zYVhCbFRXOTJaU2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQmZkR2hwY3pJZ1BTQjBhR2x6TzF4dVhHNGdJQ0FnSUNCQ2FXNWtaWEl1YjI0b1RVOVdSVjlGVmtWT1ZGTXNJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUxDQjBhSEp2ZEhSc1pTaG1kVzVqZEdsdmJpQW9aWFpsYm5RcElIdGNiaUFnSUNBZ0lDQWdYM1JvYVhNeUxtMXZkbVVvWlhabGJuUXBPMXh1SUNBZ0lDQWdmU3dnUjJ4cFpHVXVjMlYwZEdsdVozTXVkR2h5YjNSMGJHVXBMQ0JqWVhCMGRYSmxLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUhOM2FYQmxKM01nYlc5MmFXNW5JR1YyWlc1MExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQjFibUpwYm1SVGQybHdaVTF2ZG1VNklHWjFibU4wYVc5dUlIVnVZbWx1WkZOM2FYQmxUVzkyWlNncElIdGNiaUFnSUNBZ0lFSnBibVJsY2k1dlptWW9UVTlXUlY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJ6ZDJsd1pTZHpJR1Z1WkdsdVp5QmxkbVZ1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRk4zYVhCbFJXNWtPaUJtZFc1amRHbHZiaUJpYVc1a1UzZHBjR1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQjJZWElnWDNSb2FYTXpJRDBnZEdocGN6dGNibHh1SUNBZ0lDQWdRbWx1WkdWeUxtOXVLRVZPUkY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMQ0JtZFc1amRHbHZiaUFvWlhabGJuUXBJSHRjYmlBZ0lDQWdJQ0FnWDNSb2FYTXpMbVZ1WkNobGRtVnVkQ2s3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZibUpwYm1SeklITjNhWEJsSjNNZ1pXNWthVzVuSUdWMlpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IxYm1KcGJtUlRkMmx3WlVWdVpEb2dablZ1WTNScGIyNGdkVzVpYVc1a1UzZHBjR1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyWm1LRVZPUkY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCT2IzSnRZV3hwZW1WeklHVjJaVzUwSUhSdmRXTm9aWE1nY0c5cGJuUnpJR0ZqWTI5eWRHbHVaeUIwYnlCa2FXWm1aWEpsYm5RZ2RIbHdaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IwYjNWamFHVnpPaUJtZFc1amRHbHZiaUIwYjNWamFHVnpLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQnBaaUFvVFU5VlUwVmZSVlpGVGxSVExtbHVaR1Y0VDJZb1pYWmxiblF1ZEhsd1pTa2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1pYWmxiblE3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJsZG1WdWRDNTBiM1ZqYUdWeld6QmRJSHg4SUdWMlpXNTBMbU5vWVc1blpXUlViM1ZqYUdWeld6QmRPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkbUZzZFdVZ2IyWWdiV2x1YVcxMWJTQnpkMmx3WlNCa2FYTjBZVzVqWlNCelpYUjBhVzVuY3lCaVlYTmxaQ0J2YmlCbGRtVnVkQ0IwZVhCbExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFJvY21WemFHOXNaRG9nWm5WdVkzUnBiMjRnZEdoeVpYTm9iMnhrS0dWMlpXNTBLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLRTFQVlZORlgwVldSVTVVVXk1cGJtUmxlRTltS0dWMlpXNTBMblI1Y0dVcElENGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObGRIUnBibWR6TG1SeVlXZFVhSEpsYzJodmJHUTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQnpaWFIwYVc1bmN5NXpkMmx3WlZSb2NtVnphRzlzWkR0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkZibUZpYkdWeklITjNhWEJsSUdWMlpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdjMlZzWm4xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JsYm1GaWJHVTZJR1oxYm1OMGFXOXVJR1Z1WVdKc1pTZ3BJSHRjYmlBZ0lDQWdJR1JwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1bGJtRmliR1VvS1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUkdsellXSnNaWE1nYzNkcGNHVWdaWFpsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0elpXeG1mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHUnBjMkZpYkdVNklHWjFibU4wYVc5dUlHUnBjMkZpYkdVb0tTQjdYRzRnSUNBZ0lDQmthWE5oWW14bFpDQTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVWSEpoYm5OcGRHbHZiaTVrYVhOaFlteGxLQ2s3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRV1JrSUdOdmJYQnZibVZ1ZENCamJHRnpjenBjYmlBZ0lDb2dMU0JoWm5SbGNpQnBibWwwYVdGc0lHSjFhV3hrYVc1blhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMkoxYVd4a0xtRm1kR1Z5Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1eWIyOTBMbU5zWVhOelRHbHpkQzVoWkdRb1IyeHBaR1V1YzJWMGRHbHVaM011WTJ4aGMzTmxjeTV6ZDJsd1pXRmliR1VwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElITjNhWEJwYm1jZ1ltbHVaR2x1WjNNNlhHNGdJQ0FxSUMwZ2IyNGdaR1Z6ZEhKdmVXbHVaeXdnZEc4Z2NtVnRiM1psSUdGa1pHVmtJRVYyWlc1MFRHbHpkR1Z1WlhKelhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMlJsYzNSeWIza25MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnVTNkcGNHVXVkVzVpYVc1a1UzZHBjR1ZUZEdGeWRDZ3BPMXh1SUNBZ0lGTjNhWEJsTG5WdVltbHVaRk4zYVhCbFRXOTJaU2dwTzF4dUlDQWdJRk4zYVhCbExuVnVZbWx1WkZOM2FYQmxSVzVrS0NrN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUZOM2FYQmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQkpiV0ZuWlhNZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnTHlvcVhHNGdJQ0FxSUVsdWMzUmhibU5sSUc5bUlIUm9aU0JpYVc1a1pYSWdabTl5SUVSUFRTQkZkbVZ1ZEhNdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdEZkbVZ1ZEhOQ2FXNWtaWEo5WEc0Z0lDQXFMMXh1SUNCMllYSWdRbWx1WkdWeUlEMGdibVYzSUVWMlpXNTBjMEpwYm1SbGNpZ3BPMXh1WEc0Z0lIWmhjaUJKYldGblpYTWdQU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUW1sdVpITWdiR2x6ZEdWdVpYSWdkRzhnWjJ4cFpHVWdkM0poY0hCbGNpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVpYVc1a0tDazdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUW1sdVpITWdZR1J5WVdkemRHRnlkR0FnWlhabGJuUWdiMjRnZDNKaGNIQmxjaUIwYnlCd2NtVjJaVzUwSUdSeVlXZG5hVzVuSUdsdFlXZGxjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWW1sdVpEb2dablZ1WTNScGIyNGdZbWx1WkNncElIdGNiaUFnSUNBZ0lFSnBibVJsY2k1dmJpZ25aSEpoWjNOMFlYSjBKeXdnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXNJSFJvYVhNdVpISmhaM04wWVhKMEtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUnpJR0JrY21GbmMzUmhjblJnSUdWMlpXNTBJRzl1SUhkeVlYQndaWEl1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhWdVltbHVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtLQ2tnZTF4dUlDQWdJQ0FnUW1sdVpHVnlMbTltWmlnblpISmhaM04wWVhKMEp5d2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuZHlZWEJ3WlhJcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVYyWlc1MElHaGhibVJzWlhJdUlGQnlaWFpsYm5SeklHUnlZV2RuYVc1bkxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmtjbUZuYzNSaGNuUTZJR1oxYm1OMGFXOXVJR1J5WVdkemRHRnlkQ2hsZG1WdWRDa2dlMXh1SUNBZ0lDQWdaWFpsYm5RdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCaWFXNWthVzVuY3lCbWNtOXRJR2x0WVdkbGN6cGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuTENCMGJ5QnlaVzF2ZG1VZ1lXUmtaV1FnUlhabGJuUk1hWE4wWlc1bGNuTmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCSmJXRm5aWE11ZFc1aWFXNWtLQ2s3WEc0Z0lDQWdRbWx1WkdWeUxtUmxjM1J5YjNrb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRWx0WVdkbGN6dGNibjFjYmx4dVpuVnVZM1JwYjI0Z1FXNWphRzl5Y3lBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFaHZiR1J6SUdSbGRHRmphR2x1WnlCemRHRjBkWE1nYjJZZ1lXNWphRzl5Y3k1Y2JpQWdJQ29nVUhKbGRtVnVkSE1nWkdWMFlXTm9hVzVuSUc5bUlHRnNjbVZoWkhrZ1pHVjBZV05vWldRZ1lXNWphRzl5Y3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJ5YVhaaGRHVmNiaUFnSUNvZ1FIUjVjR1VnZTBKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1SUNCMllYSWdaR1YwWVdOb1pXUWdQU0JtWVd4elpUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1NHOXNaSE1nY0hKbGRtVnVkR2x1WnlCemRHRjBkWE1nYjJZZ1lXNWphRzl5Y3k1Y2JpQWdJQ29nU1dZZ1lIUnlkV1ZnSUhKbFpHbHlaV04wYVc5dUlHRm1kR1Z5SUdOc2FXTnJJSGRwYkd3Z1ltVWdaR2x6WVdKc1pXUXVYRzRnSUNBcVhHNGdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQXFJRUIwZVhCbElIdENiMjlzWldGdWZWeHVJQ0FnS2k5Y2JpQWdkbUZ5SUhCeVpYWmxiblJsWkNBOUlHWmhiSE5sTzF4dVhHNGdJSFpoY2lCQmJtTm9iM0p6SUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSFZ3Y3lCaElHbHVhWFJwWVd3Z2MzUmhkR1VnYjJZZ1lXNWphRzl5Y3lCamIyMXdiMjVsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQXFJRWh2YkdSeklHTnZiR3hsWTNScGIyNGdiMllnWVc1amFHOXljeUJsYkdWdFpXNTBjeTVjYmlBZ0lDQWdJQ0FxWEc0Z0lDQWdJQ0FnS2lCQWNISnBkbUYwWlZ4dUlDQWdJQ0FnSUNvZ1FIUjVjR1VnZTBoVVRVeERiMnhzWldOMGFXOXVmVnh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0IwYUdsekxsOWhJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25ZU2NwTzF4dVhHNGdJQ0FnSUNCMGFHbHpMbUpwYm1Rb0tUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJDYVc1a2N5QmxkbVZ1ZEhNZ2RHOGdZVzVqYUc5eWN5QnBibk5wWkdVZ1lTQjBjbUZqYXk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduWTJ4cFkyc25MQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpd2dkR2hwY3k1amJHbGpheWs3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1ZXNWlhVzVrY3lCbGRtVnVkSE1nWVhSMFlXTm9aV1FnZEc4Z1lXNWphRzl5Y3lCcGJuTnBaR1VnWVNCMGNtRmpheTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnZFc1aWFXNWtPaUJtZFc1amRHbHZiaUIxYm1KcGJtUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMlptS0NkamJHbGpheWNzSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSVlXNWtiR1Z5SUdadmNpQmpiR2xqYXlCbGRtVnVkQzRnVUhKbGRtVnVkSE1nWTJ4cFkydHpJSGRvWlc0Z1oyeHBaR1VnYVhNZ2FXNGdZSEJ5WlhabGJuUmdJSE4wWVhSMWN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ1pYWmxiblJjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOc2FXTnJPaUJtZFc1amRHbHZiaUJqYkdsamF5aGxkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ1pYWmxiblF1YzNSdmNGQnliM0JoWjJGMGFXOXVLQ2s3WEc1Y2JpQWdJQ0FnSUdsbUlDaHdjbVYyWlc1MFpXUXBJSHRjYmlBZ0lDQWdJQ0FnWlhabGJuUXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJFWlhSaFkyaGxjeUJoYm1Ob2IzSnpJR05zYVdOcklHVjJaVzUwSUdsdWMybGtaU0JuYkdsa1pTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzTmxiR1o5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaR1YwWVdOb09pQm1kVzVqZEdsdmJpQmtaWFJoWTJnb0tTQjdYRzRnSUNBZ0lDQndjbVYyWlc1MFpXUWdQU0IwY25WbE8xeHVYRzRnSUNBZ0lDQnBaaUFvSVdSbGRHRmphR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dkR2hwY3k1cGRHVnRjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFYUmxiWE5iYVYwdVpISmhaMmRoWW14bElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtbDBaVzF6VzJsZExuTmxkRUYwZEhKcFluVjBaU2duWkdGMFlTMW9jbVZtSnl3Z2RHaHBjeTVwZEdWdGMxdHBYUzVuWlhSQmRIUnlhV0oxZEdVb0oyaHlaV1luS1NrN1hHNWNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtbDBaVzF6VzJsZExuSmxiVzkyWlVGMGRISnBZblYwWlNnbmFISmxaaWNwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdaR1YwWVdOb1pXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQmRIUmhZMmhsY3lCaGJtTm9iM0p6SUdOc2FXTnJJR1YyWlc1MGN5QnBibk5wWkdVZ1oyeHBaR1V1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR6Wld4bWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdGMGRHRmphRG9nWm5WdVkzUnBiMjRnWVhSMFlXTm9LQ2tnZTF4dUlDQWdJQ0FnY0hKbGRtVnVkR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUdsbUlDaGtaWFJoWTJobFpDa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhSb2FYTXVhWFJsYlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbVJ5WVdkbllXSnNaU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbk5sZEVGMGRISnBZblYwWlNnbmFISmxaaWNzSUhSb2FYTXVhWFJsYlhOYmFWMHVaMlYwUVhSMGNtbGlkWFJsS0Nka1lYUmhMV2h5WldZbktTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCa1pYUmhZMmhsWkNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdaR1ZtYVc1bEtFRnVZMmh2Y25Nc0lDZHBkR1Z0Y3ljc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdOdmJHeGxZM1JwYjI0Z2IyWWdkR2hsSUdGeWNtOTNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1NGUk5URVZzWlcxbGJuUmJYWDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQkJibU5vYjNKekxsOWhPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVSbGRHRmphQ0JoYm1Ob2IzSnpJR2x1YzJsa1pTQnpiR2xrWlhNNlhHNGdJQ0FxSUMwZ2IyNGdjM2RwY0dsdVp5d2djMjhnZEdobGVTQjNiMjRuZENCeVpXUnBjbVZqZENCMGJ5QnBkSE1nWUdoeVpXWmdJR0YwZEhKcFluVjBaWE5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmMzZHBjR1V1Ylc5MlpTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JCYm1Ob2IzSnpMbVJsZEdGamFDZ3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1FYUjBZV05vSUdGdVkyaHZjbk1nYVc1emFXUmxJSE5zYVdSbGN6cGNiaUFnSUNvZ0xTQmhablJsY2lCemQybHdhVzVuSUdGdVpDQjBjbUZ1YzJsMGFXOXVjeUJsYm1SekxDQnpieUIwYUdWNUlHTmhiaUJ5WldScGNtVmpkQ0JoWm5SbGNpQmpiR2xqYXlCaFoyRnBibHh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0NkemQybHdaUzVsYm1RbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdRMjl0Y0c5dVpXNTBjeTVVY21GdWMybDBhVzl1TG1GbWRHVnlLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUVGdVkyaHZjbk11WVhSMFlXTm9LQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ1lXNWphRzl5Y3lCcGJuTnBaR1VnYzJ4cFpHVnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR0p5YVc1bklHRnVZMmh2Y25NZ2RHOGdhWFJ6SUdsdWFYUnBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmJtTm9iM0p6TG1GMGRHRmphQ2dwTzF4dUlDQWdJRUZ1WTJodmNuTXVkVzVpYVc1a0tDazdYRzRnSUNBZ1FtbHVaR1Z5TG1SbGMzUnliM2tvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlFRnVZMmh2Y25NN1hHNTlYRzVjYm5aaGNpQk9RVlpmVTBWTVJVTlVUMUlnUFNBblcyUmhkR0V0WjJ4cFpHVXRaV3c5WENKamIyNTBjbTlzYzF0dVlYWmRYQ0pkSnp0Y2JuWmhjaUJEVDA1VVVrOU1VMTlUUlV4RlExUlBVaUE5SUNkYlpHRjBZUzFuYkdsa1pTMWxiRjQ5WENKamIyNTBjbTlzYzF3aVhTYzdYRzVjYm1aMWJtTjBhVzl1SUVOdmJuUnliMnh6SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJKYm5OMFlXNWpaU0J2WmlCMGFHVWdZbWx1WkdWeUlHWnZjaUJFVDAwZ1JYWmxiblJ6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1JYWmxiblJ6UW1sdVpHVnlmVnh1SUNBZ0tpOWNiaUFnZG1GeUlFSnBibVJsY2lBOUlHNWxkeUJGZG1WdWRITkNhVzVrWlhJb0tUdGNibHh1SUNCMllYSWdRMjl1ZEhKdmJITWdQU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nU1c1cGRITWdZWEp5YjNkekxpQkNhVzVrY3lCbGRtVnVkSE1nYkdsemRHVnVaWEp6WEc0Z0lDQWdJQ29nZEc4Z2RHaGxJR0Z5Y205M2N5QklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCdGIzVnVkRG9nWm5WdVkzUnBiMjRnYlc5MWJuUW9LU0I3WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlFTnZiR3hsWTNScGIyNGdiMllnYm1GMmFXZGhkR2x2YmlCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQWdJQ3BjYmlBZ0lDQWdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQWdJQ0FnS2lCQWRIbHdaU0I3U0ZSTlRFTnZiR3hsWTNScGIyNTlYRzRnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJSFJvYVhNdVgyNGdQU0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0U1QlZsOVRSVXhGUTFSUFVpazdYRzVjYmlBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNvZ1EyOXNiR1ZqZEdsdmJpQnZaaUJqYjI1MGNtOXNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBZ0lDcGNiaUFnSUNBZ0lDQXFJRUJ3Y21sMllYUmxYRzRnSUNBZ0lDQWdLaUJBZEhsd1pTQjdTRlJOVEVOdmJHeGxZM1JwYjI1OVhHNGdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lIUm9hWE11WDJNZ1BTQkRiMjF3YjI1bGJuUnpMa2gwYld3dWNtOXZkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLRU5QVGxSU1QweFRYMU5GVEVWRFZFOVNLVHRjYmx4dUlDQWdJQ0FnZEdocGN5NWhaR1JDYVc1a2FXNW5jeWdwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSE1nWVdOMGFYWmxJR05zWVhOeklIUnZJR04xY25KbGJuUWdjMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRUZqZEdsMlpUb2dablZ1WTNScGIyNGdjMlYwUVdOMGFYWmxLQ2tnZTF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCMGFHbHpMbDl1TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXUmtRMnhoYzNNb2RHaHBjeTVmYmx0cFhTNWphR2xzWkhKbGJpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WdGIzWmxjeUJoWTNScGRtVWdZMnhoYzNNZ2RHOGdZM1Z5Y21WdWRDQnpiR2xrWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psUVdOMGFYWmxPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVkJZM1JwZG1Vb0tTQjdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSFJvYVhNdVgyNHViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV5WlcxdmRtVkRiR0Z6Y3loMGFHbHpMbDl1VzJsZExtTm9hV3hrY21WdUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJVYjJkbmJHVnpJR0ZqZEdsMlpTQmpiR0Z6Y3lCdmJpQnBkR1Z0Y3lCcGJuTnBaR1VnYm1GMmFXZGhkR2x2Ymk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0FnZTBoVVRVeEZiR1Z0Wlc1MGZTQmpiMjUwY205c2MxeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZV1JrUTJ4aGMzTTZJR1oxYm1OMGFXOXVJR0ZrWkVOc1lYTnpLR052Ym5SeWIyeHpLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JpQWdJQ0FnSUhaaGNpQnBkR1Z0SUQwZ1kyOXVkSEp2YkhOYlIyeHBaR1V1YVc1a1pYaGRPMXh1WEc0Z0lDQWdJQ0JwZEdWdExtTnNZWE56VEdsemRDNWhaR1FvYzJWMGRHbHVaM011WTJ4aGMzTmxjeTVoWTNScGRtVk9ZWFlwTzF4dVhHNGdJQ0FnSUNCemFXSnNhVzVuY3locGRHVnRLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h6YVdKc2FXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2h6WlhSMGFXNW5jeTVqYkdGemMyVnpMbUZqZEdsMlpVNWhkaWs3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklHRmpkR2wyWlNCamJHRnpjeUJtY205dElHRmpkR2wyWlNCamIyNTBjbTlzTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJQ0I3U0ZSTlRFVnNaVzFsYm5SOUlHTnZiblJ5YjJ4elhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnlaVzF2ZG1WRGJHRnpjem9nWm5WdVkzUnBiMjRnY21WdGIzWmxRMnhoYzNNb1kyOXVkSEp2YkhNcElIdGNiaUFnSUNBZ0lHTnZiblJ5YjJ4elcwZHNhV1JsTG1sdVpHVjRYUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLRWRzYVdSbExuTmxkSFJwYm1kekxtTnNZWE56WlhNdVlXTjBhWFpsVG1GMktUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCWkdSeklHaGhibVJzWlhNZ2RHOGdkR2hsSUdWaFkyZ2daM0p2ZFhBZ2IyWWdZMjl1ZEhKdmJITXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0ZrWkVKcGJtUnBibWR6T2lCbWRXNWpkR2x2YmlCaFpHUkNhVzVrYVc1bmN5Z3BJSHRjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnZEdocGN5NWZZeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUW9kR2hwY3k1ZlkxdHBYUzVqYUdsc1pISmxiaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCb1lXNWtiR1Z6SUdaeWIyMGdkR2hsSUdWaFkyZ2daM0p2ZFhBZ2IyWWdZMjl1ZEhKdmJITXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSEpsYlc5MlpVSnBibVJwYm1kek9pQm1kVzVqZEdsdmJpQnlaVzF2ZG1WQ2FXNWthVzVuY3lncElIdGNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dkR2hwY3k1Zll5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMblZ1WW1sdVpDaDBhR2x6TGw5alcybGRMbU5vYVd4a2NtVnVLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJsZG1WdWRITWdkRzhnWVhKeWIzZHpJRWhVVFV3Z1pXeGxiV1Z1ZEhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBoVVRVeERiMnhzWldOMGFXOXVmU0JsYkdWdFpXNTBjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWW1sdVpEb2dablZ1WTNScGIyNGdZbWx1WkNobGJHVnRaVzUwY3lrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQmxiR1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCQ2FXNWtaWEl1YjI0b1d5ZGpiR2xqYXljc0lDZDBiM1ZqYUhOMFlYSjBKMTBzSUdWc1pXMWxiblJ6VzJsZExDQjBhR2x6TG1Oc2FXTnJLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUdWMlpXNTBjeUJpYVc1a1pXUWdkRzhnZEdobElHRnljbTkzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdElWRTFNUTI5c2JHVmpkR2x2Ym4wZ1pXeGxiV1Z1ZEhOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkRvZ1puVnVZM1JwYjI0Z2RXNWlhVzVrS0dWc1pXMWxiblJ6S1NCN1hHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHVnNaVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUVKcGJtUmxjaTV2Wm1Zb1d5ZGpiR2xqYXljc0lDZDBiM1ZqYUhOMFlYSjBKMTBzSUdWc1pXMWxiblJ6VzJsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJJWVc1a2JHVnpJR0JqYkdsamEyQWdaWFpsYm5RZ2IyNGdkR2hsSUdGeWNtOTNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcUlFMXZkbVZ6SUhOc2FXUmxjaUJwYmlCa2NtbGxZM1JwYjI0Z2NISmxZMmx6WldRZ2FXNWNiaUFnSUNBZ0tpQmdaR0YwWVMxbmJHbGtaUzFrYVhKZ0lHRjBkSEpwWW5WMFpTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCbGRtVnVkRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWTJ4cFkyczZJR1oxYm1OMGFXOXVJR05zYVdOcktHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCbGRtVnVkQzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1WEc0Z0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGxKMWJpNXRZV3RsS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxuSmxjMjlzZG1Vb1pYWmxiblF1WTNWeWNtVnVkRlJoY21kbGRDNW5aWFJCZEhSeWFXSjFkR1VvSjJSaGRHRXRaMnhwWkdVdFpHbHlKeWtwS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ1pHVm1hVzVsS0VOdmJuUnliMnh6TENBbmFYUmxiWE1uTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUJqYjJ4c1pXTjBhVzl1SUc5bUlIUm9aU0JqYjI1MGNtOXNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1NGUk5URVZzWlcxbGJuUmJYWDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQkRiMjUwY205c2N5NWZZenRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVGQyRndJR0ZqZEdsMlpTQmpiR0Z6Y3lCdlppQmpkWEp5Wlc1MElHNWhkbWxuWVhScGIyNGdhWFJsYlRwY2JpQWdJQ29nTFNCaFpuUmxjaUJ0YjNWdWRHbHVaeUIwYnlCelpYUWdhWFFnZEc4Z2FXNXBkR2xoYkNCcGJtUmxlRnh1SUNBZ0tpQXRJR0ZtZEdWeUlHVmhZMmdnYlc5MlpTQjBieUIwYUdVZ2JtVjNJR2x1WkdWNFhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9XeWR0YjNWdWRDNWhablJsY2ljc0lDZHRiM1psTG1GbWRHVnlKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCRGIyNTBjbTlzY3k1elpYUkJZM1JwZG1Vb0tUdGNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGJXOTJaU0JpYVc1a2FXNW5jeUJoYm1RZ1NGUk5UQ0JEYkdGemMyVnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR0p5YVc1bklHMWhjbXQxY0NCMGJ5QnBkSE1nYVc1cGRHbGhiQ0J6ZEdGMFpWeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2RrWlhOMGNtOTVKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVOdmJuUnliMnh6TG5KbGJXOTJaVUpwYm1ScGJtZHpLQ2s3WEc0Z0lDQWdRMjl1ZEhKdmJITXVjbVZ0YjNabFFXTjBhWFpsS0NrN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVOdmJuUnliMnh6TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJMWlhsaWIyRnlaQ0FvUjJ4cFpHVXNJRU52YlhCdmJtVnVkSE1zSUVWMlpXNTBjeWtnZTF4dUlDQXZLaXBjYmlBZ0lDb2dTVzV6ZEdGdVkyVWdiMllnZEdobElHSnBibVJsY2lCbWIzSWdSRTlOSUVWMlpXNTBjeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTBWMlpXNTBjMEpwYm1SbGNuMWNiaUFnSUNvdlhHNGdJSFpoY2lCQ2FXNWtaWElnUFNCdVpYY2dSWFpsYm5SelFtbHVaR1Z5S0NrN1hHNWNiaUFnZG1GeUlFdGxlV0p2WVhKa0lEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUpwYm1SeklHdGxlV0p2WVhKa0lHVjJaVzUwY3lCdmJpQmpiMjF3YjI1bGJuUWdiVzkxYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHMXZkVzUwT2lCbWRXNWpkR2x2YmlCdGIzVnVkQ2dwSUh0Y2JpQWdJQ0FnSUdsbUlDaEhiR2xrWlM1elpYUjBhVzVuY3k1clpYbGliMkZ5WkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQlpHUnpJR3RsZVdKdllYSmtJSEJ5WlhOeklHVjJaVzUwY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduYTJWNWRYQW5MQ0JrYjJOMWJXVnVkQ3dnZEdocGN5NXdjbVZ6Y3lrN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5QnJaWGxpYjJGeVpDQndjbVZ6Y3lCbGRtVnVkSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhWdVltbHVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtLQ2tnZTF4dUlDQWdJQ0FnUW1sdVpHVnlMbTltWmlnbmEyVjVkWEFuTENCa2IyTjFiV1Z1ZENrN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTR0Z1Wkd4bGN5QnJaWGxpYjJGeVpDZHpJR0Z5Y205M2N5QndjbVZ6Y3lCaGJtUWdiVzkyYVc1bklHZHNhV1JsSUdadmQyRnlaQ0JoYm1RZ1ltRmphM2RoY21RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUdWMlpXNTBYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J3Y21WemN6b2dablZ1WTNScGIyNGdjSEpsYzNNb1pYWmxiblFwSUh0Y2JpQWdJQ0FnSUdsbUlDaGxkbVZ1ZEM1clpYbERiMlJsSUQwOVBTQXpPU2tnZTF4dUlDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsSjFiaTV0WVd0bEtFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbkpsYzI5c2RtVW9KejRuS1NrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2hsZG1WdWRDNXJaWGxEYjJSbElEMDlQU0F6TnlrZ2UxeHVJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMbEoxYmk1dFlXdGxLRU52YlhCdmJtVnVkSE11UkdseVpXTjBhVzl1TG5KbGMyOXNkbVVvSnp3bktTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlcxdmRtVWdZbWx1WkdsdVozTWdabkp2YlNCclpYbGliMkZ5WkRwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUhKbGJXOTJaU0JoWkdSbFpDQmxkbVZ1ZEhOY2JpQWdJQ29nTFNCdmJpQjFjR1JoZEdsdVp5QjBieUJ5WlcxdmRtVWdaWFpsYm5SeklHSmxabTl5WlNCeVpXMXZkVzUwYVc1blhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9XeWRrWlhOMGNtOTVKeXdnSjNWd1pHRjBaU2RkTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1MyVjVZbTloY21RdWRXNWlhVzVrS0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlcxdmRXNTBJR052YlhCdmJtVnVkRnh1SUNBZ0tpQXRJRzl1SUhWd1pHRjBhVzVuSUhSdklISmxabXhsWTNRZ2NHOTBaVzUwYVdGc0lHTm9ZVzVuWlhNZ2FXNGdjMlYwZEdsdVozTmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduZFhCa1lYUmxKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUV0bGVXSnZZWEprTG0xdmRXNTBLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkVaWE4wY205NUlHSnBibVJsY2pwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUhKbGJXOTJaU0JzYVhOMFpXNWxjbk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkNhVzVrWlhJdVpHVnpkSEp2ZVNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdTMlY1WW05aGNtUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlFRjFkRzl3YkdGNUlDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUM4cUtseHVJQ0FnS2lCSmJuTjBZVzVqWlNCdlppQjBhR1VnWW1sdVpHVnlJR1p2Y2lCRVQwMGdSWFpsYm5SekxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdSWFpsYm5SelFtbHVaR1Z5ZlZ4dUlDQWdLaTljYmlBZ2RtRnlJRUpwYm1SbGNpQTlJRzVsZHlCRmRtVnVkSE5DYVc1a1pYSW9LVHRjYmx4dUlDQjJZWElnUVhWMGIzQnNZWGtnUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1NXNXBkR2xoYkdsNlpYTWdZWFYwYjNCc1lYbHBibWNnWVc1a0lHVjJaVzUwY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXpkR0Z5ZENncE8xeHVYRzRnSUNBZ0lDQnBaaUFvUjJ4cFpHVXVjMlYwZEdsdVozTXVhRzkyWlhKd1lYVnpaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpwYm1Rb0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUZEdGeWRITWdZWFYwYjNCc1lYbHBibWNnYVc0Z1kyOXVabWxuZFhKbFpDQnBiblJsY25aaGJDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1FtOXZiR1ZoYm54T2RXMWlaWEo5SUdadmNtTmxJRkoxYmlCaGRYUnZjR3hoZVdsdVp5QjNhWFJvSUhCaGMzTmxaQ0JwYm5SbGNuWmhiQ0J5WldkaGNtUnNaWE56SUc5bUlHQmhkWFJ2Y0d4aGVXQWdjMlYwZEdsdVozTmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE4wWVhKME9pQm1kVzVqZEdsdmJpQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lIWmhjaUJmZEdocGN5QTlJSFJvYVhNN1hHNWNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXpaWFIwYVc1bmN5NWhkWFJ2Y0d4aGVTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FYTlZibVJsWm1sdVpXUW9kR2hwY3k1ZmFTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlwSUQwZ2MyVjBTVzUwWlhKMllXd29ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdYM1JvYVhNdWMzUnZjQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGxKMWJpNXRZV3RsS0NjK0p5azdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lGOTBhR2x6TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTd2dkR2hwY3k1MGFXMWxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTjBiM0J6SUdGMWRHOXlkVzV1YVc1bklHOW1JSFJvWlNCbmJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYzNSdmNEb2dablZ1WTNScGIyNGdjM1J2Y0NncElIdGNiaUFnSUNBZ0lIUm9hWE11WDJrZ1BTQmpiR1ZoY2tsdWRHVnlkbUZzS0hSb2FYTXVYMmtwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTjBiM0J6SUdGMWRHOXdiR0Y1YVc1bklIZG9hV3hsSUcxdmRYTmxJR2x6SUc5MlpYSWdaMnhwWkdVbmN5QmhjbVZoTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaWFXNWtPaUJtZFc1amRHbHZiaUJpYVc1a0tDa2dlMXh1SUNBZ0lDQWdkbUZ5SUY5MGFHbHpNaUE5SUhSb2FYTTdYRzVjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduYlc5MWMyVnZkbVZ5Snl3Z1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5KdmIzUXNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1gzUm9hWE15TG5OMGIzQW9LVHRjYmlBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNCQ2FXNWtaWEl1YjI0b0oyMXZkWE5sYjNWMEp5d2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1FzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdYM1JvYVhNeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUWdiVzkxYzJWdmRtVnlJR1YyWlc1MGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFZ1WW1sdVpEb2dablZ1WTNScGIyNGdkVzVpYVc1a0tDa2dlMXh1SUNBZ0lDQWdRbWx1WkdWeUxtOW1aaWhiSjIxdmRYTmxiM1psY2ljc0lDZHRiM1Z6Wlc5MWRDZGRMQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VjbTl2ZENrN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lHUmxabWx1WlNoQmRYUnZjR3hoZVN3Z0ozUnBiV1VuTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUIwYVcxbElIQmxjbWx2WkNCMllXeDFaU0JtYjNJZ2RHaGxJR0YxZEc5d2JHRjVJR2x1ZEdWeWRtRnNMaUJRY21sdmNtbDBhWHBsYzF4dUlDQWdJQ0FxSUhScGJXVnpJR2x1SUdCa1lYUmhMV2RzYVdSbExXRjFkRzl3YkdGNVlDQmhkSFJ5ZFdKMWRHVnpJRzkyWlhJZ2IzQjBhVzl1Y3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCaGRYUnZjR3hoZVNBOUlFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1emJHbGtaWE5iUjJ4cFpHVXVhVzVrWlhoZExtZGxkRUYwZEhKcFluVjBaU2duWkdGMFlTMW5iR2xrWlMxaGRYUnZjR3hoZVNjcE8xeHVYRzRnSUNBZ0lDQnBaaUFvWVhWMGIzQnNZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdlNXNTBLR0YxZEc5d2JHRjVLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJ2U1c1MEtFZHNhV1JsTG5ObGRIUnBibWR6TG1GMWRHOXdiR0Y1S1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkRzl3SUdGMWRHOXdiR0Y1YVc1bklHRnVaQ0IxYm1KcGJtUWdaWFpsYm5Sek9seHVJQ0FnS2lBdElHOXVJR1JsYzNSeWIzbHBibWNzSUhSdklHTnNaV0Z5SUdSbFptbHVaV1FnYVc1MFpYSjJZV3hjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKSUhSdklISmxjMlYwSUdsdWRHVnlkbUZzSUhSb1lYUWdiV0Y1SUdOb1lXNW5aV1JjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoyUmxjM1J5YjNrbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JCZFhSdmNHeGhlUzUxYm1KcGJtUW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBiM0FnWVhWMGIzQnNZWGxwYm1jNlhHNGdJQ0FxSUMwZ1ltVm1iM0psSUdWaFkyZ2djblZ1TENCMGJ5QnlaWE4wWVhKMElHRjFkRzl3YkdGNWFXNW5YRzRnSUNBcUlDMGdiMjRnY0dGMWMybHVaeUIyYVdFZ1FWQkpYRzRnSUNBcUlDMGdiMjRnWkdWemRISnZlV2x1Wnl3Z2RHOGdZMnhsWVhJZ1pHVm1hVzVsWkNCcGJuUmxjblpoYkZ4dUlDQWdLaUF0SUhkb2FXeGxJSE4wWVhKMGFXNW5JR0VnYzNkcGNHVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIyYVdFZ1FWQkpJSFJ2SUhKbGMyVjBJR2x1ZEdWeWRtRnNJSFJvWVhRZ2JXRjVJR05vWVc1blpXUmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWhiSjNKMWJpNWlaV1p2Y21VbkxDQW5jR0YxYzJVbkxDQW5aR1Z6ZEhKdmVTY3NJQ2R6ZDJsd1pTNXpkR0Z5ZENjc0lDZDFjR1JoZEdVblhTd2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRUYxZEc5d2JHRjVMbk4wYjNBb0tUdGNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZOMFlYSjBJR0YxZEc5d2JHRjVhVzVuT2x4dUlDQWdLaUF0SUdGbWRHVnlJR1ZoWTJnZ2NuVnVMQ0IwYnlCeVpYTjBZWEowSUdGMWRHOXdiR0Y1YVc1blhHNGdJQ0FxSUMwZ2IyNGdjR3hoZVdsdVp5QjJhV0VnUVZCSlhHNGdJQ0FxSUMwZ2QyaHBiR1VnWlc1a2FXNW5JR0VnYzNkcGNHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWhiSjNKMWJpNWhablJsY2ljc0lDZHdiR0Y1Snl3Z0ozTjNhWEJsTG1WdVpDZGRMQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUVhWMGIzQnNZWGt1YzNSaGNuUW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkxYm5RZ1lYVjBiM0JzWVhscGJtYzZYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUnBibWNnZG1saElFRlFTU0IwYnlCeVpYTmxkQ0JwYm5SbGNuWmhiQ0IwYUdGMElHMWhlU0JqYUdGdVoyVmtYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjNWd1pHRjBaU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmRYUnZjR3hoZVM1dGIzVnVkQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSR1Z6ZEhKdmVTQmhJR0pwYm1SbGNqcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUdkc2FXUmxJR2x1YzNSaGJtTmxJSFJ2SUdOc1pXRnlkWEFnYkdsemRHVnVaWEp6WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyUmxjM1J5YjNrbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdRbWx1WkdWeUxtUmxjM1J5YjNrb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRUYxZEc5d2JHRjVPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGTnZjblJ6SUd0bGVYTWdiMllnWW5KbFlXdHdiMmx1ZENCdlltcGxZM1FnYzI4Z2RHaGxlU0IzYVd4c0lHSmxJRzl5WkdWeVpXUWdabkp2YlNCc2IzZGxjaUIwYnlCaWFXZG5aWEl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSEJ2YVc1MGMxeHVJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDFjYmlBcUwxeHVablZ1WTNScGIyNGdjMjl5ZEVKeVpXRnJjRzlwYm5SektIQnZhVzUwY3lrZ2UxeHVJQ0JwWmlBb2FYTlBZbXBsWTNRb2NHOXBiblJ6S1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6YjNKMFMyVjVjeWh3YjJsdWRITXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSGRoY200b0owSnlaV0ZyY0c5cGJuUnpJRzl3ZEdsdmJpQnRkWE4wSUdKbElHRnVJRzlpYW1WamRDY3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSHQ5TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJDY21WaGEzQnZhVzUwY3lBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFaHZiR1J6SUhKbFptVnlaVzVqWlNCMGJ5QnpaWFIwYVc1bmN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMDlpYW1WamRIMWNiaUFnSUNvdlhHNGdJSFpoY2lCelpYUjBhVzVuY3lBOUlFZHNhV1JsTG5ObGRIUnBibWR6TzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJJYjJ4a2N5QnlaV1psY21WdVkyVWdkRzhnWW5KbFlXdHdiMmx1ZEhNZ2IySnFaV04wSUdsdUlITmxkSFJwYm1kekxpQlRiM0owY3lCaWNtVmhhM0J2YVc1MGMxeHVJQ0FnS2lCbWNtOXRJSE50WVd4c1pYSWdkRzhnYkdGeVoyVnlMaUJKZENCcGN5QnlaWEYxYVhKbFpDQnBiaUJ2Y21SbGNpQjBieUJ3Y205d1pYSmNiaUFnSUNvZ2JXRjBZMmhwYm1jZ1kzVnljbVZ1ZEd4NUlHRmpkR2wyWlNCaWNtVmhhM0J2YVc1MElITmxkSFJwYm1kekxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUMkpxWldOMGZWeHVJQ0FnS2k5Y2JpQWdkbUZ5SUhCdmFXNTBjeUE5SUhOdmNuUkNjbVZoYTNCdmFXNTBjeWh6WlhSMGFXNW5jeTVpY21WaGEzQnZhVzUwY3lrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVOaFkyaGxJR2x1YVhScFlXd2djMlYwZEdsdVozTWdZbVZtYjNKbElHOTJaWEozY21sMGRHbHVaeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA5aWFtVmpkSDFjYmlBZ0lDb3ZYRzRnSUhaaGNpQmtaV1poZFd4MGN5QTlJRjlsZUhSbGJtUnpLSHQ5TENCelpYUjBhVzVuY3lrN1hHNWNiaUFnZG1GeUlFSnlaV0ZyY0c5cGJuUnpJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUUxaGRHTm9aWE1nYzJWMGRHbHVaM01nWm05eUlHTjFjbkpsWTNSc2VTQnRZWFJqYUdsdVp5QnRaV1JwWVNCaWNtVmhhM0J2YVc1MExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhCdmFXNTBjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRQWW1wbFkzUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXRjBZMmc2SUdaMWJtTjBhVzl1SUcxaGRHTm9LSEJ2YVc1MGN5a2dlMXh1SUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY3ViV0YwWTJoTlpXUnBZU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnY0c5cGJuUWdhVzRnY0c5cGJuUnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLSEJ2YVc1MGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNod2IybHVkQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoM2FXNWtiM2N1YldGMFkyaE5aV1JwWVNnbktHMWhlQzEzYVdSMGFEb2dKeUFySUhCdmFXNTBJQ3NnSjNCNEtTY3BMbTFoZEdOb1pYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIQnZhVzUwYzF0d2IybHVkRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCa1pXWmhkV3gwY3p0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFOTJaWEozY21sMFpTQnBibk4wWVc1alpTQnpaWFIwYVc1bmN5QjNhWFJvSUdOMWNuSmxiblJzZVNCdFlYUmphR2x1WnlCaWNtVmhhM0J2YVc1MElITmxkSFJwYm1kekxseHVJQ0FnS2lCVWFHbHpJR2hoY0hCbGJuTWdjbWxuYUhRZ1lXWjBaWElnWTI5dGNHOXVaVzUwSUdsdWFYUnBZV3hwZW1GMGFXOXVMbHh1SUNBZ0tpOWNiaUFnWDJWNGRHVnVaSE1vYzJWMGRHbHVaM01zSUVKeVpXRnJjRzlwYm5SekxtMWhkR05vS0hCdmFXNTBjeWtwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJWY0dSaGRHVWdaMnhwWkdVZ2QybDBhQ0J6WlhSMGFXNW5jeUJ2WmlCdFlYUmphR1ZrSUdKeVpXdHdiMmx1ZERwY2JpQWdJQ29nTFNCM2FXNWtiM2NnY21WemFYcGxJSFJ2SUhWd1pHRjBaU0J6Ykdsa1pYSmNiaUFnSUNvdlhHNGdJRUpwYm1SbGNpNXZiaWduY21WemFYcGxKeXdnZDJsdVpHOTNMQ0IwYUhKdmRIUnNaU2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUjJ4cFpHVXVjMlYwZEdsdVozTWdQU0J0WlhKblpVOXdkR2x2Ym5Nb2MyVjBkR2x1WjNNc0lFSnlaV0ZyY0c5cGJuUnpMbTFoZEdOb0tIQnZhVzUwY3lrcE8xeHVJQ0I5TENCSGJHbGtaUzV6WlhSMGFXNW5jeTUwYUhKdmRIUnNaU2twTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlhOdmNuUWdZVzVrSUhWd1pHRjBaU0JrWldaaGRXeDBJSE5sZEhScGJtZHpPbHh1SUNBZ0tpQXRJRzl1SUhKbGFXNXBkQ0IyYVdFZ1FWQkpMQ0J6YnlCaWNtVmhhM0J2YVc1MElHMWhkR05vYVc1bklIZHBiR3dnWW1VZ2NHVnlabTl5YldWa0lIZHBkR2dnYjNCMGFXOXVjMXh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0NkMWNHUmhkR1VuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2NHOXBiblJ6SUQwZ2MyOXlkRUp5WldGcmNHOXBiblJ6S0hCdmFXNTBjeWs3WEc1Y2JpQWdJQ0JrWldaaGRXeDBjeUE5SUY5bGVIUmxibVJ6S0h0OUxDQnpaWFIwYVc1bmN5azdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmJtSnBibVFnY21WemFYcGxJR3hwYzNSbGJtVnlPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR0p5YVc1bklHMWhjbXQxY0NCMGJ5QnBkSE1nYVc1cGRHbGhiQ0J6ZEdGMFpWeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2RrWlhOMGNtOTVKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVKcGJtUmxjaTV2Wm1Zb0ozSmxjMmw2WlNjc0lIZHBibVJ2ZHlrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQkNjbVZoYTNCdmFXNTBjenRjYm4xY2JseHVkbUZ5SUVOUFRWQlBUa1ZPVkZNZ1BTQjdYRzRnSUM4dklGSmxjWFZwY21Wa1hHNGdJRWgwYld3NklFaDBiV3dzWEc0Z0lGUnlZVzV6YkdGMFpUb2dWSEpoYm5Oc1lYUmxMRnh1SUNCVWNtRnVjMmwwYVc5dU9pQlVjbUZ1YzJsMGFXOXVMRnh1SUNCRWFYSmxZM1JwYjI0NklFUnBjbVZqZEdsdmJpeGNiaUFnVUdWbGF6b2dVR1ZsYXl4Y2JpQWdVMmw2WlhNNklGTnBlbVZ6TEZ4dUlDQkhZWEJ6T2lCSFlYQnpMRnh1SUNCTmIzWmxPaUJOYjNabExGeHVJQ0JEYkc5dVpYTTZJRU5zYjI1bGN5eGNiaUFnVW1WemFYcGxPaUJTWlhOcGVtVXNYRzRnSUVKMWFXeGtPaUJDZFdsc1pDeGNiaUFnVW5WdU9pQlNkVzRzWEc1Y2JpQWdMeThnVDNCMGFXOXVZV3hjYmlBZ1UzZHBjR1U2SUZOM2FYQmxMRnh1SUNCSmJXRm5aWE02SUVsdFlXZGxjeXhjYmlBZ1FXNWphRzl5Y3pvZ1FXNWphRzl5Y3l4Y2JpQWdRMjl1ZEhKdmJITTZJRU52Ym5SeWIyeHpMRnh1SUNCTFpYbGliMkZ5WkRvZ1MyVjVZbTloY21Rc1hHNGdJRUYxZEc5d2JHRjVPaUJCZFhSdmNHeGhlU3hjYmlBZ1FuSmxZV3R3YjJsdWRITTZJRUp5WldGcmNHOXBiblJ6WEc1OU8xeHVYRzUyWVhJZ1IyeHBaR1VrTVNBOUlHWjFibU4wYVc5dUlDaGZRMjl5WlNrZ2UxeHVJQ0JwYm1obGNtbDBjeWhIYkdsa1pTUWtNU3dnWDBOdmNtVXBPMXh1WEc0Z0lHWjFibU4wYVc5dUlFZHNhV1JsSkNReEtDa2dlMXh1SUNBZ0lHTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRWRzYVdSbEpDUXhLVHRjYmlBZ0lDQnlaWFIxY200Z2NHOXpjMmxpYkdWRGIyNXpkSEoxWTNSdmNsSmxkSFZ5YmloMGFHbHpMQ0FvUjJ4cFpHVWtKREV1WDE5d2NtOTBiMTlmSUh4OElFOWlhbVZqZEM1blpYUlFjbTkwYjNSNWNHVlBaaWhIYkdsa1pTUWtNU2twTG1Gd2NHeDVLSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5a3BPMXh1SUNCOVhHNWNiaUFnWTNKbFlYUmxRMnhoYzNNb1IyeHBaR1VrSkRFc0lGdDdYRzRnSUNBZ2EyVjVPaUFuYlc5MWJuUW5MRnh1SUNBZ0lIWmhiSFZsT2lCbWRXNWpkR2x2YmlCdGIzVnVkQ2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQmxlSFJsYm5OcGIyNXpJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURBZ0ppWWdZWEpuZFcxbGJuUnpXekJkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTUYwZ09pQjdmVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJR2RsZENoSGJHbGtaU1FrTVM1d2NtOTBiM1I1Y0dVdVgxOXdjbTkwYjE5ZklIeDhJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmloSGJHbGtaU1FrTVM1d2NtOTBiM1I1Y0dVcExDQW5iVzkxYm5RbkxDQjBhR2x6S1M1allXeHNLSFJvYVhNc0lGOWxlSFJsYm1SektIdDlMQ0JEVDAxUVQwNUZUbFJUTENCbGVIUmxibk5wYjI1ektTazdYRzRnSUNBZ2ZWeHVJQ0I5WFNrN1hHNGdJSEpsZEhWeWJpQkhiR2xrWlNRa01UdGNibjBvUjJ4cFpHVXBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JIYkdsa1pTUXhPMXh1SWl3aWFXMXdiM0owSUdKdlpIbFRZM0p2Ykd4TWIyTnJJR1p5YjIwZ0oySnZaSGt0YzJOeWIyeHNMV3h2WTJzbk8xeHVhVzF3YjNKMElFZHNhV1JsSUdaeWIyMGdKMEJuYkdsa1pXcHpMMmRzYVdSbEp6dGNibHh1WTI5dWMzUWdaR2x6WVdKc1pVSnZaSGxUWTNKdmJHd2dQU0JpYjJSNVUyTnliMnhzVEc5amF5NWthWE5oWW14bFFtOWtlVk5qY205c2JEdGNibU52Ym5OMElHVnVZV0pzWlVKdlpIbFRZM0p2Ykd3Z1BTQmliMlI1VTJOeWIyeHNURzlqYXk1bGJtRmliR1ZDYjJSNVUyTnliMnhzTzF4dVkyOXVjM1FnYlc5a1lXd2dQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViVzlrWVd3bktUdGNibU52Ym5OMElIUmhjbWRsZEVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Ylc5a1lXeGZYMk52Ym5SbGJuUW5LVHRjYm1OdmJuTjBJRzF2WkdGc1NXMW5JRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25MbTF2WkdGc1gxOXBiV2NuS1R0Y2JtTnZibk4wSUcxdlpHRnNWR2wwYkdVZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWJXOWtZV3hmWDNScGRHeGxKeWs3WEc1amIyNXpkQ0J0YjJSaGJGUmxlSFJDYkc5amEzTWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1Ylc5a1lXeGZYM1JsZUhRdFlteHZZMnNuS1R0Y2JtTnZibk4wSUcxdlpHRnNWbUZzZFdWVWFYUnNaU0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV0YjJSaGJGOWZkbUZzZFdVdGRHbDBiR1VuS1R0Y2JtTnZibk4wSUcxdlpHRnNWbUZzZFdWSmRHVnRjeUE5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSnk1MllXeDFaUzFzYVhOMFgxOXBkR1Z0SnlrN1hHNWpiMjV6ZENCdGIyUmhiRUZrWkNBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1dGIyUmhiRjlmWVdSa0xXSnNiMk5ySnlrN1hHNWpiMjV6ZENCdGIyUmhiRUZrWkV4bFpuUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViVzlrWVd4ZlgyRmtaQzFzWldaMEp5azdYRzVjYm1OdmJuTjBJSFJ5YVdkblpYSnpJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG0xdlpHRnNMWFJ5YVdkblpYSW5LVHRjYmx4dWJHVjBJSGtnUFNBd08xeHVYRzVtZFc1amRHbHZiaUIwYjJkbmJHVk5iMlJoYkNncElIdGNiaUFnYlc5a1lXd3VZMnhoYzNOTWFYTjBMblJ2WjJkc1pTZ25hWE10WVdOMGFYWmxKeWs3WEc1Y2JpQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdYRzRnSUNBZ2JXOWtZV3hKYldjdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmFYTXRZV04wYVhabEp5azdYRzRnSUgwc0lESXdNQ2s3WEc0Z0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUcxdlpHRnNWR2wwYkdVdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmFYTXRZV04wYVhabEp5azdYRzRnSUgwc0lESXdNQ2s3WEc1Y2JpQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdYRzRnSUNBZ2JXOWtZV3hVWlhoMFFteHZZMnR6V3pCZExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCOUxDQTBNREFwTzF4dUlDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNiaUFnSUNCdGIyUmhiRlJsZUhSQ2JHOWphM05iTVYwdVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmFYTXRZV04wYVhabEp5azdYRzRnSUgwc0lEWXdNQ2s3WEc0Z0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUcxdlpHRnNWbUZzZFdWVWFYUnNaUzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdmU3dnT0RBd0tUdGNiaUFnWEc0Z0lHMXZaR0ZzVm1Gc2RXVkpkR1Z0Y3k1bWIzSkZZV05vS0NobGJDd2dhU2tnUFQ0Z2UxeHVJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnWld3dVkyeGhjM05NYVhOMExuUnZaMmRzWlNnbmFYTXRZV04wYVhabEp5azdYRzRnSUNBZ2ZTd2dPREF3SUNzZ2FTQXFJREV3TUNrN1hHNGdJSDBwTzF4dVhHNGdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lHMXZaR0ZzUVdSa0xtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCOUxDQTJNREFwTzF4dVhHNGdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lHMXZaR0ZzUVdSa1RHVm1kQzVqYkdGemMweHBjM1F1ZEc5bloyeGxLQ2RwY3kxaFkzUnBkbVVuS1R0Y2JpQWdmU3dnT0RBd0tUdGNibHh1SUNCcFppQW9iVzlrWVd3dVkyeGhjM05NYVhOMExtTnZiblJoYVc1ektDZHBjeTFoWTNScGRtVW5LU2tnZTF4dUlDQWdJSGtnUFNCM2FXNWtiM2N1YzJOeWIyeHNXVHRjYmlBZ0lDQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWQzSmhjSEJsY2ljcExuTjBlV3hsTG5SdmNDQTlJQ2N0SnlBcklIa2dLeUFuY0hnbk8xeHVJQ0FnSUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTUzY21Gd2NHVnlKeWt1YzNSNWJHVXVjRzl6YVhScGIyNGdQU0FuWm1sNFpXUW5PMXh1SUNBZ0lHUnBjMkZpYkdWQ2IyUjVVMk55YjJ4c0tIUmhjbWRsZEVWc1pXMWxiblFwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTUzY21Gd2NHVnlKeWt1YzNSNWJHVXVkRzl3SUQwZ0p5YzdYRzRnSUNBZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5keVlYQndaWEluS1M1emRIbHNaUzV3YjNOcGRHbHZiaUE5SUNjbk8xeHVJQ0FnSUhkcGJtUnZkeTV6WTNKdmJHeFVieWd3TENCNUtUdGNiaUFnSUNCbGJtRmliR1ZDYjJSNVUyTnliMnhzS0hSaGNtZGxkRVZzWlcxbGJuUXBPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUhkcGJtUnZkMDl1UTJ4cFkyc29aWFpsYm5RcElIdGNiaUFnYVdZZ0tHVjJaVzUwTG5SaGNtZGxkQ0E5UFQwZ2JXOWtZV3dwSUh0Y2JpQWdJQ0IwYjJkbmJHVk5iMlJoYkNncE8xeHVJQ0I5WEc1OVhHNWNiblJ5YVdkblpYSnpMbVp2Y2tWaFkyZ29LR1ZzS1NBOVBpQjdYRzRnSUdWc0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2JpQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdkRzluWjJ4bFRXOWtZV3dvS1R0Y2JpQWdmU2s3WEc1OUtUdGNibHh1ZDJsdVpHOTNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dkMmx1Wkc5M1QyNURiR2xqYXlrN1hHNWNibTVsZHlCSGJHbGtaU2duTG1kc2FXUmxKeXdnZTF4dUlDQndaWEpXYVdWM09pQXhNQ3hjYm4wcExtMXZkVzUwS0NrN1hHNWNibVJ2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUwWVdjdGJHbHpkRjlmYkdsdWF5Y3BMbVp2Y2tWaFkyZ29LR1ZzS1NBOVBpQjdYRzRnSUdWc0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oyTnNhV05ySnl3Z0tHVXBJRDArSUh0Y2JpQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lIMHBPMXh1ZlNrN1hHNWNibHh1SWwwc0ltNWhiV1Z6SWpwYkltUmxabWx1WlNJc0luUm9hWE1pTENKa2FYTmhZbXhsUW05a2VWTmpjbTlzYkNJc0ltSnZaSGxUWTNKdmJHeE1iMk5ySWl3aVpXNWhZbXhsUW05a2VWTmpjbTlzYkNJc0ltMXZaR0ZzSWl3aVpHOWpkVzFsYm5RaUxDSnhkV1Z5ZVZObGJHVmpkRzl5SWl3aWRHRnlaMlYwUld4bGJXVnVkQ0lzSW0xdlpHRnNTVzFuSWl3aWJXOWtZV3hVYVhSc1pTSXNJbTF2WkdGc1ZHVjRkRUpzYjJOcmN5SXNJbkYxWlhKNVUyVnNaV04wYjNKQmJHd2lMQ0p0YjJSaGJGWmhiSFZsVkdsMGJHVWlMQ0p0YjJSaGJGWmhiSFZsU1hSbGJYTWlMQ0p0YjJSaGJFRmtaQ0lzSW0xdlpHRnNRV1JrVEdWbWRDSXNJblJ5YVdkblpYSnpJaXdpZVNJc0luUnZaMmRzWlUxdlpHRnNJaXdpWTJ4aGMzTk1hWE4wSWl3aWRHOW5aMnhsSWl3aVptOXlSV0ZqYUNJc0ltVnNJaXdpYVNJc0ltTnZiblJoYVc1eklpd2lkMmx1Wkc5M0lpd2ljMk55YjJ4c1dTSXNJbk4wZVd4bElpd2lkRzl3SWl3aWNHOXphWFJwYjI0aUxDSnpZM0p2Ykd4VWJ5SXNJbmRwYm1SdmQwOXVRMnhwWTJzaUxDSmxkbVZ1ZENJc0luUmhjbWRsZENJc0ltRmtaRVYyWlc1MFRHbHpkR1Z1WlhJaUxDSmxJaXdpY0hKbGRtVnVkRVJsWm1GMWJIUWlMQ0pIYkdsa1pTSXNJbTF2ZFc1MElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPMEZCUVVFc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRlZCUVZVc1JVRkJSU3hQUVVGUFFTeFRRVUZOTEVWQlFVVkJMRk5CUVUwc1EwRkJReXhIUVVGSExFTkJRVU5CTEZOQlFVMHNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRVUZCSzBJc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVGQlFYTkRMRU5CUVVNc1EwRkJRME1zWTBGQlNTeERRVUZETEZOQlFWTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVWQlFVVXNUMEZCVHl4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNUMEZCVHl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlF5eERRVUZETEVWQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eExRVUZMTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1owaEJRV2RJTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExHRkJRV0VzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJReXhGUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMR2RDUVVGblFpeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJReXhEUVVGRExFbEJRVWtzUlVGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMSFZDUVVGMVFpeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRXRCUVVzc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5dzRSMEZCT0Vjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZETEVWQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN096czdPMEZEUVhoNlJqczdPenM3TzBGQlRVRXNTVUZCU1N4UlFVRlJMRWRCUVVjN096czdPenM3T3pzN1JVRlZZaXhKUVVGSkxFVkJRVVVzVVVGQlVUczdPenM3T3p0RlFVOWtMRTlCUVU4c1JVRkJSU3hEUVVGRE96czdPenM3TzBWQlQxWXNUMEZCVHl4RlFVRkZMRU5CUVVNN096czdPenM3T3pzN08wVkJWMVlzVDBGQlR5eEZRVUZGTEVOQlFVTTdPenM3T3pzN1JVRlBWaXhIUVVGSExFVkJRVVVzUlVGQlJUczdPenM3T3p0RlFVOVFMRkZCUVZFc1JVRkJSU3hMUVVGTE96czdPenM3TzBWQlQyWXNWVUZCVlN4RlFVRkZMRWxCUVVrN096czdPenM3UlVGUGFFSXNVVUZCVVN4RlFVRkZMRWxCUVVrN096czdPenM3T3pzN1JVRlZaQ3hMUVVGTExFVkJRVVVzUzBGQlN6czdPenM3T3p0RlFVOWFMR05CUVdNc1JVRkJSU3hGUVVGRk96czdPenM3TzBWQlQyeENMR0ZCUVdFc1JVRkJSU3hIUVVGSE96czdPenM3TzBWQlQyeENMRkZCUVZFc1JVRkJSU3hMUVVGTE96czdPenM3TzBWQlQyWXNWVUZCVlN4RlFVRkZMRWRCUVVjN096czdPenM3UlVGUFppeFZRVUZWTEVWQlFVVXNSVUZCUlRzN096czdPenRGUVU5a0xHbENRVUZwUWl4RlFVRkZMRWRCUVVjN096czdPenM3UlVGUGRFSXNUVUZCVFN4RlFVRkZMRWxCUVVrN096czdPenM3UlVGUFdpeGpRVUZqTEVWQlFVVXNSMEZCUnpzN096czdPenRGUVU5dVFpeHRRa0ZCYlVJc1JVRkJSU3h0UTBGQmJVTTdPenM3T3pzN1JVRlBlRVFzVVVGQlVTeEZRVUZGTEVWQlFVVTdPenM3T3pzN096czdPMFZCVjFvc1UwRkJVeXhGUVVGRkxFdEJRVXM3T3pzN096czdPenM3T3pzN08wVkJZMmhDTEVsQlFVa3NSVUZCUlN4RFFVRkRPenM3T3pzN096czdPenRGUVZkUUxGZEJRVmNzUlVGQlJTeEZRVUZGT3pzN096czdPenRGUVZGbUxFOUJRVThzUlVGQlJUdEpRVU5RTEZOQlFWTXNSVUZCUlR0TlFVTlVMRWRCUVVjc1JVRkJSU3haUVVGWk8wMUJRMnBDTEVkQlFVY3NSVUZCUlN4WlFVRlpPMHRCUTJ4Q08wbEJRMFFzVFVGQlRTeEZRVUZGTEdWQlFXVTdTVUZEZGtJc1VVRkJVU3hGUVVGRkxHbENRVUZwUWp0SlFVTXpRaXhUUVVGVExFVkJRVVVzYTBKQlFXdENPMGxCUXpkQ0xGRkJRVkVzUlVGQlJTeHBRa0ZCYVVJN1NVRkRNMElzVlVGQlZTeEZRVUZGTEhGQ1FVRnhRanRKUVVOcVF5eFRRVUZUTEVWQlFVVXNkVUpCUVhWQ08wbEJRMnhETEZkQlFWY3NSVUZCUlN4elFrRkJjMEk3U1VGRGJrTXNZVUZCWVN4RlFVRkZMSGRDUVVGM1FqdEhRVU40UXp0RFFVTkdMRU5CUVVNN096czdPenM3TzBGQlVVWXNVMEZCVXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRk8wVkJRMnBDTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkRka003TzBGQlJVUXNTVUZCU1N4UFFVRlBMRWRCUVVjc1QwRkJUeXhOUVVGTkxFdEJRVXNzVlVGQlZTeEpRVUZKTEU5QlFVOHNUVUZCVFN4RFFVRkRMRkZCUVZFc1MwRkJTeXhSUVVGUkxFZEJRVWNzVlVGQlZTeEhRVUZITEVWQlFVVTdSVUZEYWtjc1QwRkJUeXhQUVVGUExFZEJRVWNzUTBGQlF6dERRVU51UWl4SFFVRkhMRlZCUVZVc1IwRkJSeXhGUVVGRk8wVkJRMnBDTEU5QlFVOHNSMEZCUnl4SlFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4TFFVRkxMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzVFVGQlRTeERRVUZETEZOQlFWTXNSMEZCUnl4UlFVRlJMRWRCUVVjc1QwRkJUeXhIUVVGSExFTkJRVU03UTBGRE9VZ3NRMEZCUXpzN1FVRkZSaXhKUVVGSkxHTkJRV01zUjBGQlJ5eFZRVUZWTEZGQlFWRXNSVUZCUlN4WFFVRlhMRVZCUVVVN1JVRkRjRVFzU1VGQlNTeEZRVUZGTEZGQlFWRXNXVUZCV1N4WFFVRlhMRU5CUVVNc1JVRkJSVHRKUVVOMFF5eE5RVUZOTEVsQlFVa3NVMEZCVXl4RFFVRkRMRzFEUVVGdFF5eERRVUZETEVOQlFVTTdSMEZETVVRN1EwRkRSaXhEUVVGRE96dEJRVVZHTEVsQlFVa3NWMEZCVnl4SFFVRkhMRmxCUVZrN1JVRkROVUlzVTBGQlV5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eEZRVUZGTzBsQlEzWkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzAxQlEzSkRMRWxCUVVrc1ZVRkJWU3hIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TlFVTXhRaXhWUVVGVkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXl4VlFVRlZMRWxCUVVrc1MwRkJTeXhEUVVGRE8wMUJRM1pFTEZWQlFWVXNRMEZCUXl4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wMUJReTlDTEVsQlFVa3NUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXp0TlFVTjBSQ3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzB0QlF6TkVPMGRCUTBZN08wVkJSVVFzVDBGQlR5eFZRVUZWTEZkQlFWY3NSVUZCUlN4VlFVRlZMRVZCUVVVc1YwRkJWeXhGUVVGRk8wbEJRM0pFTEVsQlFVa3NWVUZCVlN4RlFVRkZMR2RDUVVGblFpeERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03U1VGRGNFVXNTVUZCU1N4WFFVRlhMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNWMEZCVnl4RlFVRkZMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRelZFTEU5QlFVOHNWMEZCVnl4RFFVRkRPMGRCUTNCQ0xFTkJRVU03UTBGRFNDeEZRVUZGTEVOQlFVTTdPMEZCUlVvc1NVRkJTU3hSUVVGUkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNTVUZCU1N4VlFVRlZMRTFCUVUwc1JVRkJSVHRGUVVOb1JDeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRKUVVONlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBsQlJURkNMRXRCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzVFVGQlRTeEZRVUZGTzAxQlEzUkNMRWxCUVVrc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eGpRVUZqTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdFJRVU55UkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMDlCUXpOQ08wdEJRMFk3UjBGRFJqczdSVUZGUkN4UFFVRlBMRTFCUVUwc1EwRkJRenREUVVObUxFTkJRVU03TzBGQlJVWXNTVUZCU1N4SFFVRkhMRWRCUVVjc1UwRkJVeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UlFVRlJMRVZCUVVVN1JVRkRha1FzU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RlFVRkZMRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zVTBGQlV5eERRVUZETzBWQlEycEVMRWxCUVVrc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdPMFZCUlRkRUxFbEJRVWtzU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0SlFVTjBRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEpRVVV6UXl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFVkJRVVU3VFVGRGJrSXNUMEZCVHl4VFFVRlRMRU5CUVVNN1MwRkRiRUlzVFVGQlRUdE5RVU5NTEU5QlFVOHNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdTMEZEZUVNN1IwRkRSaXhOUVVGTkxFbEJRVWtzVDBGQlR5eEpRVUZKTEVsQlFVa3NSVUZCUlR0SlFVTXhRaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdSMEZEYmtJc1RVRkJUVHRKUVVOTUxFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN08wbEJSWFJDTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHROUVVONFFpeFBRVUZQTEZOQlFWTXNRMEZCUXp0TFFVTnNRanM3U1VGRlJDeFBRVUZQTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UjBGRE9VSTdRMEZEUml4RFFVRkRPenRCUVVWR0xFbEJRVWtzVVVGQlVTeEhRVUZITEZWQlFWVXNVVUZCVVN4RlFVRkZMRlZCUVZVc1JVRkJSVHRGUVVNM1F5eEpRVUZKTEU5QlFVOHNWVUZCVlN4TFFVRkxMRlZCUVZVc1NVRkJTU3hWUVVGVkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBsQlF6TkVMRTFCUVUwc1NVRkJTU3hUUVVGVExFTkJRVU1zTUVSQlFUQkVMRWRCUVVjc1QwRkJUeXhWUVVGVkxFTkJRVU1zUTBGQlF6dEhRVU55UnpzN1JVRkZSQ3hSUVVGUkxFTkJRVU1zVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hKUVVGSkxGVkJRVlVzUTBGQlF5eFRRVUZUTEVWQlFVVTdTVUZEY2tVc1YwRkJWeXhGUVVGRk8wMUJRMWdzUzBGQlN5eEZRVUZGTEZGQlFWRTdUVUZEWml4VlFVRlZMRVZCUVVVc1MwRkJTenROUVVOcVFpeFJRVUZSTEVWQlFVVXNTVUZCU1R0TlFVTmtMRmxCUVZrc1JVRkJSU3hKUVVGSk8wdEJRMjVDTzBkQlEwWXNRMEZCUXl4RFFVRkRPMFZCUTBnc1NVRkJTU3hWUVVGVkxFVkJRVVVzVFVGQlRTeERRVUZETEdOQlFXTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUlVGQlJTeFZRVUZWTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1UwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlF6dERRVU4yU0N4RFFVRkRPenRCUVVWR0xFbEJRVWtzZVVKQlFYbENMRWRCUVVjc1ZVRkJWU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTzBWQlEzQkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVU3U1VGRFZDeE5RVUZOTEVsQlFVa3NZMEZCWXl4RFFVRkRMREpFUVVFeVJDeERRVUZETEVOQlFVTTdSMEZEZGtZN08wVkJSVVFzVDBGQlR5eEpRVUZKTEV0QlFVc3NUMEZCVHl4SlFVRkpMRXRCUVVzc1VVRkJVU3hKUVVGSkxFOUJRVThzU1VGQlNTeExRVUZMTEZWQlFWVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03UTBGRGRrWXNRMEZCUXpzN096czdPenM3TzBGQlUwWXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRk8wVkJRM0JDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wTkJRM2hDT3pzN096czdPenM3UVVGVFJDeFRRVUZUTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVN1JVRkRkRUlzVDBGQlR5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1EwRkRNVUk3T3pzN096czdPMEZCVVVRc1UwRkJVeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBWQlEzWkNMRTlCUVU4c1QwRkJUeXhMUVVGTExFdEJRVXNzVVVGQlVTeERRVUZETzBOQlEyeERPenM3T3pzN096czdPMEZCVlVRc1UwRkJVeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBWQlEzWkNMRWxCUVVrc1NVRkJTU3hIUVVGSExFOUJRVThzUzBGQlN5eExRVUZMTEZkQlFWY3NSMEZCUnl4WFFVRlhMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0RlFVVjJSU3hQUVVGUExFbEJRVWtzUzBGQlN5eFZRVUZWTEVsQlFVa3NTVUZCU1N4TFFVRkxMRkZCUVZFc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETzBOQlF6VkVPenM3T3pzN096dEJRVkZFTEZOQlFWTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSVHRGUVVOMlFpeFBRVUZQTEU5QlFVOHNTMEZCU3l4TFFVRkxMRkZCUVZFc1EwRkJRenREUVVOc1F6czdPenM3T3pzN1FVRlJSQ3hUUVVGVExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVTdSVUZEZWtJc1QwRkJUeXhQUVVGUExFdEJRVXNzUzBGQlN5eFZRVUZWTEVOQlFVTTdRMEZEY0VNN096czdPenM3TzBGQlVVUXNVMEZCVXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRk8wVkJRekZDTEU5QlFVOHNUMEZCVHl4TFFVRkxMRXRCUVVzc1YwRkJWeXhEUVVGRE8wTkJRM0pET3pzN096czdPenRCUVZGRUxGTkJRVk1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlR0RlFVTjBRaXhQUVVGUExFdEJRVXNzUTBGQlF5eFhRVUZYTEV0QlFVc3NTMEZCU3l4RFFVRkRPME5CUTNCRE96czdPenM3T3pzN096dEJRVmRFTEZOQlFWTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlEzaERMRWxCUVVrc1ZVRkJWU3hIUVVGSExFVkJRVVVzUTBGQlF6czdSVUZGY0VJc1MwRkJTeXhKUVVGSkxFbEJRVWtzU1VGQlNTeFZRVUZWTEVWQlFVVTdTVUZETTBJc1NVRkJTU3hWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1RVRkRhRU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wdEJRMmhGTEUxQlFVMDdUVUZEVEN4SlFVRkpMRU5CUVVNc09FSkJRVGhDTEVOQlFVTXNRMEZCUXp0TFFVTjBRenRIUVVOR096dEZRVVZFTEV0QlFVc3NTVUZCU1N4TFFVRkxMRWxCUVVrc1ZVRkJWU3hGUVVGRk8wbEJRelZDTEVsQlFVa3NWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0TlFVTjJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1MwRkRNMEk3UjBGRFJqczdSVUZGUkN4UFFVRlBMRlZCUVZVc1EwRkJRenREUVVOdVFqczdPenM3T3pzN096dEJRVlZFTEZOQlFWTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGTzBWQlEzSkRMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenREUVVNNVF6czdPenM3T3pzN1FVRlJSQ3hUUVVGVExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVTdSVUZEY2tJc1QwRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1NVRkRjRVFzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdTVUZGWkN4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdSMEZEYUVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dERRVU5TT3pzN096czdPenM3UVVGVFJDeFRRVUZUTEZsQlFWa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hGUVVGRk8wVkJRM2hETEVsQlFVa3NUMEZCVHl4SFFVRkhMRkZCUVZFc1EwRkJReXhGUVVGRkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPenM3T3pzN08wVkJUeTlETEVsQlFVa3NVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdEpRVU4wUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eEZRVUZGTEVWQlFVVXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdPMGxCUlc1RkxFbEJRVWtzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3VFVGRGFFUXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wdEJRMnhITzBkQlEwWTdPMFZCUlVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEdGQlFXRXNRMEZCUXl4RlFVRkZPMGxCUXpGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRIUVVOb1JqczdSVUZGUkN4UFFVRlBMRTlCUVU4c1EwRkJRenREUVVOb1FqczdRVUZGUkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhaUVVGWk96czdPenM3UlVGTk1VSXNVMEZCVXl4VFFVRlRMRWRCUVVjN1NVRkRia0lzU1VGQlNTeE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTNCR0xHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN08wbEJSV2hETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJRM0pDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF6dEhRVU5zUXpzN096czdPenM3T3p0RlFWVkVMRmRCUVZjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dEpRVU4wUWl4SFFVRkhMRVZCUVVVc1NVRkJTVHRKUVVOVUxFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRk8wMUJRMnBETEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRMnhDTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xVkJRM0pETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMU5CUXpWQ08wOUJRMFk3T3p0TlFVZEVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlEzUkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMDlCUTNwQ096czdUVUZIUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPenROUVVkcVJDeFBRVUZQTzFGQlEwd3NUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8xVkJRM2hDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnNRenRQUVVOR0xFTkJRVU03UzBGRFNEczdPenM3T3pzN08wZEJVMFlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4TlFVRk5PMGxCUTFnc1MwRkJTeXhGUVVGRkxGTkJRVk1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBMRVZCUVVVN1RVRkRia01zU1VGQlNTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRiRUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1ZVRkRja01zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdVMEZET1VJN1QwRkRSanM3TzAxQlIwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGRGRFTXNUMEZCVHp0UFFVTlNPenM3VFVGSFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVsQlFVa3NSVUZCUlR0UlFVTjZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMDlCUTNKQ0xFTkJRVU1zUTBGQlF6dExRVU5LTzBkQlEwWXNRMEZCUXl4RFFVRkRMRU5CUVVNN1JVRkRTaXhQUVVGUExGTkJRVk1zUTBGQlF6dERRVU5zUWl4RlFVRkZMRU5CUVVNN08wRkJSVW9zU1VGQlNTeExRVUZMTEVkQlFVY3NXVUZCV1RzN096czdPenRGUVU5MFFpeFRRVUZUTEV0QlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1NVRkRka0lzU1VGQlNTeFBRVUZQTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTNKR0xHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wbEJSVFZDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1JVRkJSU3hEUVVGRE8wbEJRMklzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1NVRkRZaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVsQlFVa3NVMEZCVXl4RlFVRkZMRU5CUVVNN08wbEJSVEZDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRM1JDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTm9SQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8wZEJRM0JET3pzN096czdPenM3TzBWQlZVUXNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wbEJRMnhDTEVkQlFVY3NSVUZCUlN4UFFVRlBPMGxCUTFvc1MwRkJTeXhGUVVGRkxGTkJRVk1zVVVGQlVTeEhRVUZITzAxQlEzcENMRWxCUVVrc1ZVRkJWU3hIUVVGSExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6czdUVUZGZUVZc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNN08wMUJSVGRDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhGUVVGRk8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wOUJRelZETEUxQlFVMDdVVUZEVEN4SlFVRkpMRU5CUVVNc01rTkJRVEpETEVOQlFVTXNRMEZCUXp0UFFVTnVSRHM3VFVGRlJDeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6czdUVUZGTlVJc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqczdPenM3T3pzN08wZEJVMFlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4UlFVRlJPMGxCUTJJc1MwRkJTeXhGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzWkNMRWxCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6czdUVUZGTVVZc1NVRkJTU3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVWQlFVVTdVVUZEZWtJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eFpRVUZaTEVOQlFVTTdUMEZEZUVJc1RVRkJUVHRSUVVOTUxFbEJRVWtzUTBGQlF5d3lRMEZCTWtNc1EwRkJReXhEUVVGRE8wOUJRMjVFT3p0TlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMkk3T3pzN096czdPenRIUVZOR0xFVkJRVVU3U1VGRFJDeEhRVUZITEVWQlFVVXNVVUZCVVR0SlFVTmlMRXRCUVVzc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU4yUWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03TzAxQlJYUkdMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03TzAxQlJYUkVMRWxCUVVrc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0UlFVTjBReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN1QwRkRMMEk3TzAxQlJVUXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMDFCUlhaQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPenM3T3pzN096czdPenM3TzBkQlkwWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hKUVVGSk8wbEJRMVFzUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSVHROUVVNeFFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdPMDFCUlRGQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPenM3T3pzN096dEhRVk5HTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1RVRkJUVHRKUVVOWUxFdEJRVXNzUlVGQlJTeFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1RVRkROMElzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VFVGRE4wSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPenROUVVVMVFpeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTmlPenM3T3pzN096dEhRVkZHTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1UwRkJVenRKUVVOa0xFdEJRVXNzUlVGQlJTeFRRVUZUTEU5QlFVOHNSMEZCUnp0TlFVTjRRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenM3VFVGRmVFSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1MwRkRZanM3T3pzN096czdPMGRCVTBZc1JVRkJSVHRKUVVORUxFZEJRVWNzUlVGQlJTeE5RVUZOTzBsQlExZ3NTMEZCU3l4RlFVRkZMRk5CUVZNc1NVRkJTU3hIUVVGSE8wMUJRM0pDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenM3VFVGRmVrWXNTVUZCU1N4UlFVRlJMRVZCUVVVN1VVRkRXaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNN1QwRkRia003TzAxQlJVUXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdPMDFCUlhKQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPenM3T3pzN08wZEJVVVlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4UFFVRlBPMGxCUTFvc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPenROUVVWMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTmlPenM3T3pzN096dEhRVkZHTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1UwRkJVenRKUVVOa0xFdEJRVXNzUlVGQlJTeFRRVUZUTEU5QlFVOHNSMEZCUnp0TlFVTjRRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1RVRkZja0lzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRkZCUVZFN1NVRkRZaXhMUVVGTExFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZGtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMDFCUlhSQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPenM3T3pzN096czdSMEZWUml4RlFVRkZPMGxCUTBRc1IwRkJSeXhGUVVGRkxFbEJRVWs3U1VGRFZDeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFOUJRVThzUlVGQlJUdE5RVU5xUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN08wMUJSVE5DTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN096czdPenM3T3p0SFFWTkdMRVZCUVVVN1NVRkRSQ3hIUVVGSExFVkJRVVVzVVVGQlVUdEpRVU5pTEV0QlFVc3NSVUZCUlN4VFFVRlRMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVU3VFVGRE0wSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eEpRVUZKTEVOQlFVTTdTMEZEY0VNN096czdPenM3TzBkQlVVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hWUVVGVk8wbEJRMllzUjBGQlJ5eEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNKQ0xFOUJRVThzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXp0TFFVTm9RanM3T3pzN096czdPMGxCVTBRc1IwRkJSeXhGUVVGRkxGTkJRVk1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlR0TlFVTjBRaXhKUVVGSkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0UlFVTm1MRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzA5QlEySXNUVUZCVFR0UlFVTk1MRWxCUVVrc1EwRkJReXgxUTBGQmRVTXNRMEZCUXl4RFFVRkRPMDlCUXk5RE8wdEJRMFk3T3pzN096czdPMGRCVVVZc1JVRkJSVHRKUVVORUxFZEJRVWNzUlVGQlJTeFBRVUZQTzBsQlExb3NSMEZCUnl4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM0pDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOb1FqczdPenM3T3pzN1NVRlJSQ3hIUVVGSExFVkJRVVVzVTBGQlV5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZPMDFCUTNSQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRM0JDT3pzN096czdPenRIUVZGR0xFVkJRVVU3U1VGRFJDeEhRVUZITEVWQlFVVXNUVUZCVFR0SlFVTllMRWRCUVVjc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU55UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzB0QlF6TkNPenM3T3pzN096dEhRVkZHTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1ZVRkJWVHRKUVVObUxFZEJRVWNzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTnlRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYUVJN096czdPenM3TzBsQlVVUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJUdE5RVU16UWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTTdTMEZEY0VJN1IwRkRSaXhEUVVGRExFTkJRVU1zUTBGQlF6dEZRVU5LTEU5QlFVOHNTMEZCU3l4RFFVRkRPME5CUTJRc1JVRkJSU3hEUVVGRE96dEJRVVZLTEZOQlFWTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlEzWkRMRWxCUVVrc1IwRkJSeXhIUVVGSE96czdPenM3U1VGTlVpeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRWRCUVVjN1RVRkRkRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRha0k3T3pzN096czdPMGxCVVVRc1NVRkJTU3hGUVVGRkxGTkJRVk1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlR0TlFVTjRRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMDFCUldwQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1Q0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXpzN1VVRkZhRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNN08xRkJSV3BDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXpzN1VVRkZja01zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPenRSUVVWcVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMUZCUlRsQ0xGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrN1ZVRkRkRU1zU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRPVU1zUzBGQlN5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN08xbEJSV3BDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WFFVTjJRenM3VlVGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMVZCUlhKRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0VFFVTm9RaXhEUVVGRExFTkJRVU03VDBGRFNqdExRVU5HT3pzN096czdPenRKUVZGRUxGTkJRVk1zUlVGQlJTeFRRVUZUTEZOQlFWTXNSMEZCUnp0TlFVTTVRaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1R0VlFVTm9RaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0TlFVTjZRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3p0VlFVTnNRaXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXpzN08wMUJSeTlDTEVsQlFVa3NZMEZCWXl4SFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0TlFVVnNSU3hSUVVGUkxGTkJRVk03VVVGRFppeExRVUZMTEVkQlFVYzdWVUZEVGl4SlFVRkpMRXRCUVVzc1MwRkJTeXhIUVVGSExFVkJRVVU3V1VGRGFrSXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU03VjBGRGRFSXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJUdFpRVU4yUWl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdZMEZEZGtRc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMk5CUldZc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEYWtJN08xbEJSVVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VjBGRE9VSXNUVUZCVFN4SlFVRkpMR05CUVdNc1JVRkJSVHRaUVVONlFpeExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WFFVTTVSQ3hOUVVGTk8xbEJRMHdzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMWRCUTJZN1ZVRkRSQ3hOUVVGTk96dFJRVVZTTEV0QlFVc3NSMEZCUnp0VlFVTk9MRWxCUVVrc1MwRkJTeXhMUVVGTExFZEJRVWNzUlVGQlJUdFpRVU5xUWl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF6dFhRVU5xUWl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzFsQlEzcENMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0alFVTjJSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1kwRkZaaXhMUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXp0aFFVTjBRanM3V1VGRlJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFhRVU5vUXl4TlFVRk5MRWxCUVVrc1kwRkJZeXhGUVVGRk8xbEJRM3BDTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzFkQlEzQkVMRTFCUVUwN1dVRkRUQ3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdWMEZEWmp0VlFVTkVMRTFCUVUwN08xRkJSVklzUzBGQlN5eEhRVUZITzFWQlEwNHNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03VlVGRGNFSXNUVUZCVFR0UFFVTlVPMHRCUTBZN096czdPenM3TzBsQlVVUXNUMEZCVHl4RlFVRkZMRk5CUVZNc1QwRkJUeXhIUVVGSE8wMUJRekZDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRXRCUVVzc1MwRkJTeXhEUVVGRExFTkJRVU03UzBGRE1VSTdPenM3T3pzN08wbEJVVVFzUzBGQlN5eEZRVUZGTEZOQlFWTXNTMEZCU3l4SFFVRkhPMDFCUTNSQ0xFOUJRVThzUzBGQlN5eERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wdEJRM0JET3pzN096czdPenM3U1VGVFJDeFJRVUZSTEVWQlFVVXNVMEZCVXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhGUVVGRk8wMUJRM0pETEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNTMEZCU3l4VFFVRlRMRU5CUVVNN1MwRkRja1E3UjBGRFJpeERRVUZET3p0RlFVVkdMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdTVUZOYkVJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dExRVU5vUWpzN096czdPenM3U1VGUlJDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8wMUJRM1pDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjN1VVRkRVaXhUUVVGVExFVkJRVVVzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRemRDTEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF6dFBRVU0zUXl4RFFVRkRPMHRCUTBnN1IwRkRSaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hSUVVGUkxFVkJRVVU3T3pzN096czdTVUZQY0VJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdUVUZET1VJc1NVRkJTU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE96czdPenM3VFVGTk0wTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRXRCUVVzc1VVRkJVU3hKUVVGSkxGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVTdVVUZETjBVc1QwRkJUeXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFBRVU0zUlRzN1RVRkZSQ3hQUVVGUExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZEYmtJN1IwRkRSaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hSUVVGUkxFVkJRVVU3T3pzN096dEpRVTF3UWl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8wdEJRMmhDTzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzUjBGQlJ5eERRVUZETzBOQlExbzdPenM3T3pzN1FVRlBSQ3hUUVVGVExFZEJRVWNzUjBGQlJ6dEZRVU5pTEU5QlFVOHNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dERRVU0zUWpzN096czdPenM3T3pzN096dEJRV0ZFTEZOQlFWTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBWQlEzSkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6dE5RVU5vUWl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRE8wMUJRMmhDTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNN1RVRkRZaXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTTdSVUZEY0VJc1NVRkJTU3hSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzBWQlEycENMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXpzN1JVRkZNMElzU1VGQlNTeExRVUZMTEVkQlFVY3NVMEZCVXl4TFFVRkxMRWRCUVVjN1NVRkRNMElzVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBMRXRCUVVzc1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTnFSQ3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEyWXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTI1RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03UjBGRGNrTXNRMEZCUXpzN1JVRkZSaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eFRRVUZUTEZOQlFWTXNSMEZCUnp0SlFVTnVReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTm1MRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNTMEZCU3l4TFFVRkxMRVZCUVVVc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6dEpRVU14UkN4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUTNaRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEWml4SlFVRkpMRWRCUVVjc1UwRkJVeXhEUVVGRE8wbEJRMnBDTEVsQlFVa3NVMEZCVXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hUUVVGVExFZEJRVWNzU1VGQlNTeEZRVUZGTzAxQlEzUkRMRWxCUVVrc1QwRkJUeXhGUVVGRk8xRkJRMWdzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMUZCUTNSQ0xFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdUMEZEYUVJN1RVRkRSQ3hSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzAxQlEyUXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMDFCUTI1RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03UzBGRGNrTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eFJRVUZSTEV0QlFVc3NTMEZCU3l4RlFVRkZPMDFCUTJwRUxFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRE8wdEJRM2hETzBsQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1IwRkRaaXhEUVVGRE96dEZRVVZHTEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1dVRkJXVHRKUVVNM1FpeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRkRUlzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTmlMRTlCUVU4c1IwRkJSeXhQUVVGUExFZEJRVWNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0SFFVTnFReXhEUVVGRE96dEZRVVZHTEU5QlFVOHNVMEZCVXl4RFFVRkRPME5CUTJ4Q096dEJRVVZFTEVsQlFVa3NWMEZCVnl4SFFVRkhPMFZCUTJoQ0xFZEJRVWNzUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4aFFVRmhMRU5CUVVNN1JVRkRiRU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNZVUZCWVN4RlFVRkZMRmxCUVZrc1EwRkJRenREUVVOdVF5eERRVUZET3p0QlFVVkdMRk5CUVZNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPMFZCUTNoRExFbEJRVWtzU1VGQlNTeEhRVUZIT3pzN096czdPenRKUVZGVUxFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1RVRkROVUlzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU5xUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpWQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRE96dFJRVVV6UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VlVGRFdDeExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzFOQlF6RkVMRTFCUVUwN1ZVRkRUQ3hMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEzWkRPenRSUVVWRUxFbEJRVWtzUTBGQlF5eExRVUZMTEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xVkJRek5DTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZETVVRc1RVRkJUVHRWUVVOTUxFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEZGtNN1QwRkRSanRMUVVOR096czdPenM3T3pzN1NVRlRSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZPMDFCUXpsQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VVVGRGFrUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXpzN1VVRkZOVUlzUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRkRUlzUzBGQlN5eERRVUZETEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1QwRkRlRUk3UzBGRFJqdEhRVU5HTEVOQlFVTTdPMFZCUlVZc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenM3T3p0SlFVMXdRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVOc1F6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPenRKUVU5dVFpeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1RVRkRiRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMHRCUTI1RU8wZEJRMFlzUTBGQlF5eERRVUZET3p0RlFVVklMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGT3pzN096czdPMGxCVDNaQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenM3VFVGRmNrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhKUVVGSkxFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1MwRkROME03UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBTQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eFpRVUZaTzBsQlEzaEVMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UjBGRE9VTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE96czdPenM3UlVGTlVpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3haUVVGWk8wbEJReTlDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1IwRkRMME1zUTBGQlF5eERRVUZET3p0RlFVVklMRTlCUVU4c1NVRkJTU3hEUVVGRE8wTkJRMkk3T3pzN096czdPMEZCVVVRc1UwRkJVeXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTzBWQlEzUkNMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVTdTVUZETTBJc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNN1NVRkRia01zU1VGQlNTeFBRVUZQTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRKUVVWcVFpeFBRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJUdE5RVU16UWl4SlFVRkpMRU5CUVVNc1EwRkJReXhSUVVGUkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRVZCUVVVN1VVRkRiRU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVOcVFqdExRVU5HT3p0SlFVVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wZEJRMmhDT3p0RlFVVkVMRTlCUVU4c1JVRkJSU3hEUVVGRE8wTkJRMWc3T3pzN096czdPMEZCVVVRc1UwRkJVeXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzBWQlEyNUNMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzV1VGQldTeE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZPMGxCUXpsRExFOUJRVThzU1VGQlNTeERRVUZETzBkQlEySTdPMFZCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03UTBGRFpEczdRVUZGUkN4SlFVRkpMR05CUVdNc1IwRkJSeXg1UWtGQmVVSXNRMEZCUXpzN1FVRkZMME1zVTBGQlV5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSVHRGUVVOb1F5eEpRVUZKTEVsQlFVa3NSMEZCUnpzN096czdPMGxCVFZRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXp0TlFVTXpRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzAxQlEzSkVMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUzBGQlN5eEZRVUZGTzFGQlEzUkdMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UFFVTnlSU3hEUVVGRExFTkJRVU03UzBGRFNqdEhRVU5HTEVOQlFVTTdPMFZCUlVZc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3p0SlFVMXVRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzB0QlEyaENPenM3T3pzN096dEpRVkZFTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3VFVGRGJrSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRFppeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFBRVU12UWpzN1RVRkZSQ3hKUVVGSkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlR0UlFVTmFMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzA5QlEySXNUVUZCVFR0UlFVTk1MRWxCUVVrc1EwRkJReXd5UTBGQk1rTXNRMEZCUXl4RFFVRkRPMDlCUTI1RU8wdEJRMFk3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenM3T3p0SlFVMXdRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzB0QlEyaENPenM3T3pzN096dEpRVkZFTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3VFVGRGJrSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRFdpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRQUVVOaUxFMUJRVTA3VVVGRFRDeEpRVUZKTEVOQlFVTXNNa05CUVRKRExFZEJRVWNzWTBGQll5eEhRVUZITEdGQlFXRXNRMEZCUXl4RFFVRkRPMDlCUTNCR08wdEJRMFk3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVTdPenM3T3p0SlFVMTBRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVNdlFqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExFbEJRVWtzUTBGQlF6dERRVU5pT3p0QlFVVkVMRk5CUVZNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPMFZCUTNoRExFbEJRVWtzU1VGQlNTeEhRVUZIT3pzN096czdTVUZOVkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFZEJRVWM3VFVGRGRFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0TFFVTnNRenRIUVVOR0xFTkJRVU03TzBWQlJVWXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFVkJRVVU3T3pzN096dEpRVTF3UWl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE8wdEJRMmhDT3pzN096czdPenM3U1VGVFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8wMUJRM1pDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRMjVDTEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0UlFVTnVReXhMUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VDBGRGJFTXNUVUZCVFR0UlFVTk1MRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdUMEZEZEVJN08wMUJSVVFzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1MwRkRha0k3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFZRVUZWTEVWQlFVVTdPenM3T3p0SlFVMTJRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TlFVTjJRaXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenM3VFVGRmNrTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3VVVGRGJrSXNUMEZCVHl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJRenRQUVVOMlJEczdUVUZGUkN4UFFVRlBMRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZETzB0QlF6VkNPMGRCUTBZc1EwRkJReXhEUVVGRE96czdPenM3UlVGTlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZETVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBkQlEyUXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzU1VGQlNTeERRVUZETzBOQlEySTdPMEZCUlVRc1UwRkJVeXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN1JVRkRlRU1zU1VGQlNTeEpRVUZKTEVkQlFVYzdPenM3T3p0SlFVMVVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dExRVU5pT3pzN096czdPenM3U1VGVFJDeEpRVUZKTEVWQlFVVXNVMEZCVXl4SlFVRkpMRWRCUVVjN1RVRkRjRUlzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRPenROUVVWcVFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wMUJSVzVHTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRE96dE5RVVZ5UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFJRVU5zUWl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXM3VDBGRGNrSXNRMEZCUXl4RFFVRkRPenROUVVWSUxGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrN1VVRkRkRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVN1ZVRkRlRUlzVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4TFFVRkxPMU5CUTNSQ0xFTkJRVU1zUTBGQlF6dFBRVU5LTEVOQlFVTXNRMEZCUXp0TFFVTktPMGRCUTBZc1EwRkJRenM3UlVGRlJpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRkZCUVZFc1JVRkJSVHM3T3pzN08wbEJUWEpDTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1MwRkRhRUk3T3pzN096czdPMGxCVVVRc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlR0TlFVTjJRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRiRVE3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeFhRVUZYTEVWQlFVVTdPenM3T3p0SlFVMTRRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRE8wdEJRMnhFTzBkQlEwWXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZPenM3T3pzN1NVRk5jRUlzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1RVRkRla0lzU1VGQlNTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRenM3VFVGRkwwSXNTVUZCU1N4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0UlFVTnNReXhQUVVGUExGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdUMEZETTBJN08wMUJSVVFzVDBGQlR5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRPMHRCUXpOQ08wZEJRMFlzUTBGQlF5eERRVUZET3pzN096czdPMFZCVDBnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEdOQlFXTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSU3haUVVGWk8wbEJRemRETEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRIUVVOaUxFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96dEJRVVZFTEZOQlFWTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlEzcERMRWxCUVVrc1MwRkJTeXhIUVVGSE96czdPenM3U1VGTlZpeFhRVUZYTEVWQlFVVXNVMEZCVXl4WFFVRlhMRWRCUVVjN1RVRkRiRU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03TzAxQlJYQkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEzUkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETzA5QlEyaEVPMHRCUTBZN096czdPenM3TzBsQlVVUXNXVUZCV1N4RlFVRkZMRk5CUVZNc1dVRkJXU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU0zUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETzB0QlF5OUVPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6czdUVUZGY0VNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZEVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wOUJRelZDT3p0TlFVVkVMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wdEJRekZETzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlRzN096czdPMGxCVFhSQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenRMUVVOMFF6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhKQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRMUVVONlF6dEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEdGQlFXRXNSVUZCUlRzN096czdPMGxCVFROQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhQUVVGUExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dExRVU40Ump0SFFVTkdMRU5CUVVNc1EwRkJRenM3UlVGRlNDeE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRmxCUVZrc1JVRkJSVHM3T3pzN08wbEJUVEZDTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeFBRVUZQTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN1MwRkRia2M3UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN08wVkJVVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMR05CUVdNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNXVUZCV1R0SlFVTXhSQ3hMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdTVUZEY0VJc1MwRkJTeXhEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzBkQlEzUkNMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1dVRkJXVHRKUVVNdlFpeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1IwRkRhRUlzUTBGQlF5eERRVUZET3p0RlFVVklMRTlCUVU4c1MwRkJTeXhEUVVGRE8wTkJRMlE3TzBGQlJVUXNVMEZCVXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdSVUZEZWtNc1NVRkJTU3hMUVVGTExFZEJRVWM3T3pzN096czdTVUZQVml4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFZEJRVWM3VFVGRGRFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6czdUVUZGTlVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzAxQlEycENMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6czdUVUZGYmtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0TFFVTTFRanM3T3pzN096czdTVUZSUkN4VFFVRlRMRVZCUVVVc1UwRkJVeXhUUVVGVExFZEJRVWM3VFVGRE9VSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRGFrWTdPenM3T3pzN08wbEJVVVFzVjBGQlZ5eEZRVUZGTEZOQlFWTXNWMEZCVnl4SFFVRkhPMDFCUTJ4RExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8wMUJRM0pETEVsQlFVa3NTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3VFVGRmFFUXNTVUZCU1N4TFFVRkxMRVZCUVVVN1VVRkRWQ3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03TzFGQlJYcERMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4UFFVRlBMRVZCUVVVN1ZVRkRla01zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFOQlF5OURMRU5CUVVNc1EwRkJRenRQUVVOS08wdEJRMFk3T3pzN096czdPMGxCVVVRc1lVRkJZU3hGUVVGRkxGTkJRVk1zWVVGQllTeEhRVUZITzAxQlEzUkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPenROUVVWeVF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdPMDFCUlhCRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFOUJRVThzUlVGQlJUdFJRVU5vUkN4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1QwRkRMME1zUTBGQlF5eERRVUZETzB0QlEwbzdSMEZEUml4RFFVRkRPenM3T3pzN08wVkJUMFlzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlJTeFpRVUZaTzBsQlF6TkRMRXRCUVVzc1EwRkJReXhoUVVGaExFVkJRVVVzUTBGQlF6dEhRVU4yUWl4RFFVRkRMRU5CUVVNN096czdPenM3UlVGUFNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZETVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBkQlEyWXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4WlFVRlpPMGxCUTJ4RExFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SFFVTnlRaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRaRHM3UVVGRlJDeFRRVUZUTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUdEZRVU14UXl4SlFVRkpMRTFCUVUwc1IwRkJSenM3T3p0SlFVbFlMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6czdUVUZGYUVJc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RlFVRkZPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wOUJRemRDTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzVDBGQlR5eEZRVUZGTEZOQlFWTXNUMEZCVHl4SFFVRkhPMDFCUXpGQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0TlFVTnVSaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenROUVVOd1F5eEpRVUZKTEdWQlFXVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVVHRWUVVOb1F5eFBRVUZQTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTlCUVU4N1ZVRkRha01zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXl4UFFVRlBMRU5CUVVNN096dE5RVWQwUXl4SlFVRkpMR1ZCUVdVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJRenROUVVNM1F5eEpRVUZKTEVsQlFVa3NSMEZCUnl4UFFVRlBMRWRCUVVjc1pVRkJaU3hEUVVGRE8wMUJRM0pETEVsQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMDFCUTJ4RExFbEJRVWtzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czdUVUZGT1VJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRM3BGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xVkJRM0pETEVsQlFVa3NTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN08xVkJSWEpETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXpzN1ZVRkZlRU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRUUVVOdVFqczdVVUZGUkN4TFFVRkxMRWxCUVVrc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJUdFZRVU4wUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE96dFZRVVZ5UXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN08xVkJSWHBETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGRrSTdUMEZEUmpzN1RVRkZSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dExRVU5rT3pzN096czdPenRKUVZGRUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTjRRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMDFCUTNaQ0xFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWs3VlVGRGJFTXNUMEZCVHl4SFFVRkhMR2RDUVVGblFpeERRVUZETEU5QlFVODdWVUZEYkVNc1RVRkJUU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1EwRkJRenM3TzAxQlIzSkRMRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dE5RVU40UXl4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dE5RVU0zUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03TzAxQlJUZERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEzUkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1QwRkRhRU03TzAxQlJVUXNTMEZCU3l4SlFVRkpMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3VVVGRE4wTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VDBGREwwTTdPMDFCUlVRc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdVVUZETTBNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMDlCUXpkRU8wdEJRMFk3T3pzN096czdPMGxCVVVRc1RVRkJUU3hGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzaENMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdPenROUVVkMlFpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVOeVF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1QwRkRMME03UzBGRFJqdEhRVU5HTEVOQlFVTTdPMFZCUlVZc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3p0SlFVMXlRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRE8wdEJRM0JHTzBkQlEwWXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpPMGxCUXpsQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SlFVTm9RaXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEWml4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03UjBGRGFrSXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEdOQlFXTXNSVUZCUlN4WlFVRlpPMGxCUTNCRExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHROUVVNMVFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1MwRkRha0k3UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZsQlFWazdTVUZETDBJc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzBkQlEycENMRU5CUVVNc1EwRkJRenM3UlVGRlNDeFBRVUZQTEUxQlFVMHNRMEZCUXp0RFFVTm1PenRCUVVWRUxFbEJRVWtzV1VGQldTeEhRVUZITEZsQlFWazdPenM3UlVGSk4wSXNVMEZCVXl4WlFVRlpMRWRCUVVjN1NVRkRkRUlzU1VGQlNTeFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTNaR0xHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNXVUZCV1N4RFFVRkRMRU5CUVVNN08wbEJSVzVETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRE8wZEJRelZDT3pzN096czdPenM3T3pzN08wVkJZVVFzVjBGQlZ5eERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRPMGxCUTNwQ0xFZEJRVWNzUlVGQlJTeEpRVUZKTzBsQlExUXNTMEZCU3l4RlFVRkZMRk5CUVZNc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZPMDFCUTNSRExFbEJRVWtzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXpzN1RVRkZlRVlzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1VVRkRjRUlzVFVGQlRTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1QwRkRia0k3TzAxQlJVUXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VVVGRGRFTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN08xRkJSWEJETEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dFBRVU53UlR0TFFVTkdPenM3T3pzN096czdPMGRCVlVZc1JVRkJSVHRKUVVORUxFZEJRVWNzUlVGQlJTeExRVUZMTzBsQlExWXNTMEZCU3l4RlFVRkZMRk5CUVZNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVWQlFVVTdUVUZET1VJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdVVUZEY0VJc1RVRkJUU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdUMEZEYmtJN08wMUJSVVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1VVRkRkRU1zUlVGQlJTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wOUJRM0pGTzB0QlEwWTdPenM3T3pzN08wZEJVVVlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4VFFVRlRPMGxCUTJRc1MwRkJTeXhGUVVGRkxGTkJRVk1zVDBGQlR5eEhRVUZITzAxQlEzaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF6dExRVU4yUWp0SFFVTkdMRU5CUVVNc1EwRkJReXhEUVVGRE8wVkJRMG9zVDBGQlR5eFpRVUZaTEVOQlFVTTdRMEZEY2tJc1JVRkJSU3hEUVVGRE96dEJRVVZLTEZOQlFWTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdSVUZOTVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXpzN1JVRkZhRU1zU1VGQlNTeE5RVUZOTEVkQlFVYzdPenM3U1VGSldDeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRWRCUVVjN1RVRkRkRUlzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMHRCUTJJN096czdPenM3T3p0SlFWTkVMRWxCUVVrc1JVRkJSU3hUUVVGVExFbEJRVWtzUjBGQlJ6dE5RVU53UWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeE5RVUZOTEVWQlFVVXNVVUZCVVN4RFFVRkRMRmxCUVZrN1VVRkRMME1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRQUVVOMlFpeEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dExRVU01UWpzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03UzBGRE9VSTdSMEZEUml4RFFVRkRPenM3T3pzN1JVRk5SaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZOQlFWTXNSVUZCUlN4WlFVRlpPMGxCUXk5Q0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SlFVTm9RaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdSMEZEYkVJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNUVUZCVFN4RFFVRkRPME5CUTJZN08wRkJSVVFzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTjBReXhKUVVGSkxHZENRVUZuUWl4SFFVRkhPMFZCUTNKQ0xFZEJRVWNzUlVGQlJTeEhRVUZITzBWQlExSXNSMEZCUnl4RlFVRkZMRWRCUVVjN1JVRkRVaXhIUVVGSExFVkJRVVVzUjBGQlJ6dERRVU5VTEVOQlFVTTdPMEZCUlVZc1UwRkJVeXhUUVVGVExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRVZCUVVVN1JVRkROME1zU1VGQlNTeFRRVUZUTEVkQlFVYzdPenM3T3p0SlFVMWtMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRPMHRCUTNaRE96czdPenM3T3pzN1NVRlRSQ3hQUVVGUExFVkJRVVVzVTBGQlV5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZPMDFCUTJwRExFbEJRVWtzUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZET3p0TlFVVm9ReXhKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRiRUlzVDBGQlR5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzA5QlF6TkVPenROUVVWRUxFOUJRVThzVDBGQlR5eERRVUZETzB0QlEyaENPenM3T3pzN096czdTVUZUUkN4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTzAxQlEzcENMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUzBGQlN5eFRRVUZUTEVOQlFVTTdTMEZEYWtNN096czdPenM3TzBsQlVVUXNVVUZCVVN4RlFVRkZMRk5CUVZNc1VVRkJVU3hIUVVGSE8wMUJRelZDTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMnhHT3pzN096czdPenRKUVZGRUxGZEJRVmNzUlVGQlJTeFRRVUZUTEZkQlFWY3NSMEZCUnp0TlFVTnNReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTnlSanRIUVVOR0xFTkJRVU03TzBWQlJVWXNUVUZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSU3hQUVVGUExFVkJRVVU3T3pzN096dEpRVTE2UWl4SFFVRkhMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3VFVGRGJFSXNUMEZCVHl4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wdEJRM0pDT3pzN096czdPenM3U1VGVFJDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8wMUJRM1pDTEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRM2hETEZOQlFWTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1MwRkJTeXhEUVVGRE8wOUJRM1JDTEUxQlFVMDdVVUZEVEN4SlFVRkpMRU5CUVVNc2QwTkJRWGRETEVOQlFVTXNRMEZCUXp0UFFVTm9SRHRMUVVOR08wZEJRMFlzUTBGQlF5eERRVUZET3pzN096czdPMFZCVDBnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJSU3haUVVGWk8wbEJRek5ETEZOQlFWTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRIUVVONlFpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZsQlFWazdTVUZET1VJc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBkQlEyNUNMRU5CUVVNc1EwRkJRenM3T3pzN096dEZRVTlJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNXVUZCV1R0SlFVTm9SQ3hUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdSMEZEZEVJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNVMEZCVXl4RFFVRkRPME5CUTJ4Q096czdPenM3T3pzN1FVRlRSQ3hUUVVGVExFZEJRVWNzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZPMFZCUXk5Q0xFOUJRVTg3T3pzN096czdTVUZQVEN4TlFVRk5MRVZCUVVVc1UwRkJVeXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTzAxQlEycERMRWxCUVVrc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRiRU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXp0UFFVTnVRanM3VFVGRlJDeFBRVUZQTEZOQlFWTXNRMEZCUXp0TFFVTnNRanRIUVVOR0xFTkJRVU03UTBGRFNEczdPenM3T3pzN08wRkJVMFFzVTBGQlV5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSVHRGUVVNdlFpeFBRVUZQT3pzN096czdPMGxCVDB3c1RVRkJUU3hGUVVGRkxGTkJRVk1zVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlR0TlFVTnFReXhQUVVGUExGTkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETzB0QlEzaEVPMGRCUTBZc1EwRkJRenREUVVOSU96czdPenM3T3pzN1FVRlRSQ3hUUVVGVExFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZPMFZCUTJoRExFOUJRVTg3T3pzN096czdTVUZQVEN4TlFVRk5MRVZCUVVVc1UwRkJVeXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTzAxQlEycERMRTlCUVU4c1UwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVNdlF6dEhRVU5HTEVOQlFVTTdRMEZEU0RzN096czdPenM3TzBGQlUwUXNVMEZCVXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJUdEZRVU51UXl4UFFVRlBPenM3T3pzN08wbEJUMHdzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSVHROUVVOcVF5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUlVGQlJUdFJRVU12UWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXpzN1VVRkZha01zU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVN1ZVRkRiRUlzVDBGQlR5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRUUVVOb1F6czdVVUZGUkN4UFFVRlBMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03VDBGRGVrSTdPMDFCUlVRc1QwRkJUeXhUUVVGVExFTkJRVU03UzBGRGJFSTdSMEZEUml4RFFVRkRPME5CUTBnN096czdPenM3T3p0QlFWTkVMRk5CUVZNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVTdSVUZEY0VNc1QwRkJUenM3T3pzN096dEpRVTlNTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVU3VFVGRGFrTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdUVUZEYUVNc1NVRkJTU3hMUVVGTExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN1RVRkRia01zU1VGQlNTeFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03VFVGRGNrTXNTVUZCU1N4VlFVRlZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVOQlFVTTdPMDFCUlRkRExFbEJRVWtzVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTjRRaXhQUVVGUExGTkJRVk1zU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFBRVU5xUkRzN1RVRkZSQ3hQUVVGUExGTkJRVk1zUjBGQlJ5eFZRVUZWTEVkQlFVY3NUMEZCVHl4SFFVRkhMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU03UzBGRGVrUTdSMEZEUml4RFFVRkRPME5CUTBnN096czdPenM3T3p0QlFWTkVMRk5CUVZNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3T3pzN096dEZRVkV6UXl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6czdSVUZGTVVVc1QwRkJUenM3T3pzN096dEpRVTlNTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVU3VFVGRGFrTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VVVGRE5VTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0UlFVVnNReXhKUVVGSkxGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdWVUZETDBRc1UwRkJVeXhIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0VFFVTjBSU3hOUVVGTk8xVkJRMHdzU1VGQlNTeERRVUZETEdkR1FVRm5SaXhEUVVGRExFTkJRVU03VTBGRGVFWTdUMEZEUmpzN1RVRkZSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dExRVU5zUWp0SFFVTkdMRU5CUVVNN1EwRkRTRHM3UVVGRlJDeFRRVUZUTEZOQlFWTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUdEZRVU0zUXl4SlFVRkpMRk5CUVZNc1IwRkJSenM3T3pzN096dEpRVTlrTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGRrSXNTVUZCU1N4VFFVRlRMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzAxQlJYcEVMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEZOQlFWTXNSMEZCUnl4bFFVRmxMRU5CUVVNN1MwRkROMFk3T3pzN096czdPMGxCVVVRc1RVRkJUU3hGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzaENMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wdEJRemxETzBkQlEwWXNRMEZCUXpzN096czdPenRGUVU5R0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1QwRkJUeXhGUVVGRk8wbEJRMjVETEVsQlFVa3NSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBsQlEyaERMRWxCUVVrc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUTNKRExFbEJRVWtzUzBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRE96dEpRVVY0UXl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdUVUZETlVRc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1R0UlFVTjBReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU03TzFGQlJUbENMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRM0pETEVOQlFVTXNRMEZCUXpzN1RVRkZTQ3hQUVVGUExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzB0QlF6ZERPenRKUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHROUVVNMVJDeFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWk8xRkJRM1JETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXpzN1VVRkZPVUlzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVOc1FpeERRVUZETEVOQlFVTTdPMDFCUlVnc1QwRkJUeXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzB0QlEzSkVPenRKUVVWRUxFOUJRVThzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UjBGRGVFTXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZOQlFWTXNSVUZCUlN4WlFVRlpPMGxCUXk5Q0xGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SFFVTndRaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4VFFVRlRMRU5CUVVNN1EwRkRiRUk3TzBGQlJVUXNVMEZCVXl4VlFVRlZMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3pzN1JVRlBPVU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRGUVVWeVFpeEpRVUZKTEZWQlFWVXNSMEZCUnpzN096czdPenRKUVU5bUxFOUJRVThzUlVGQlJTeFRRVUZUTEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVN1RVRkRiRU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJRenM3VFVGRk9VSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRSUVVOaUxFOUJRVThzVVVGQlVTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03VDBGRE9VVTdPMDFCUlVRc1QwRkJUeXhSUVVGUkxFZEJRVWNzVDBGQlR5eEhRVUZITEZGQlFWRXNRMEZCUXl4dFFrRkJiVUlzUTBGQlF6dExRVU14UkRzN096czdPenM3TzBsQlUwUXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJRenM3VFVGRkwwWXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzB0QlEyNUZPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTXZRenM3T3pzN096czdPMGxCVTBRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlR0TlFVTTVRaXhWUVVGVkxFTkJRVU1zV1VGQldUdFJRVU55UWl4UlFVRlJMRVZCUVVVc1EwRkJRenRQUVVOYUxFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMHRCUTI1Q096czdPenM3T3p0SlFWRkVMRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU40UWl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE96dE5RVVZxUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRFdqczdPenM3T3pzN1NVRlJSQ3hQUVVGUExFVkJRVVVzVTBGQlV5eFBRVUZQTEVkQlFVYzdUVUZETVVJc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6czdUVUZGYUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzB0QlExbzdSMEZEUml4RFFVRkRPenRGUVVWR0xFMUJRVTBzUTBGQlF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZPenM3T3pzN08wbEJUemRDTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeEpRVUZKTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRE96dE5RVVU1UWl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVU3VVVGRGJrUXNUMEZCVHl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRE8wOUJRMmhET3p0TlFVVkVMRTlCUVU4c1VVRkJVU3hEUVVGRExHbENRVUZwUWl4RFFVRkRPMHRCUTI1RE8wZEJRMFlzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeFpRVUZaTzBsQlF6VkNMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEhRVU5zUWl4RFFVRkRMRU5CUVVNN096czdPenM3TzBWQlVVZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExHTkJRV01zUlVGQlJTeFJRVUZSTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUlVGQlJTeFpRVUZaTzBsQlEyeEZMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEhRVU4wUWl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRmxCUVZrN1NVRkRNMElzVlVGQlZTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGRCUTNKQ0xFTkJRVU1zUTBGQlF6czdPenM3TzBWQlRVZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhUUVVGVExFVkJRVVVzV1VGQldUdEpRVU12UWl4VlFVRlZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03UjBGRGNrSXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzVlVGQlZTeERRVUZETzBOQlEyNUNPenM3T3pzN096czdRVUZUUkN4SlFVRkpMR1ZCUVdVc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJUVkNMRWxCUVVrN1JVRkRSaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hUUVVGVExFVkJRVVU3U1VGRE9VTXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1MwRkRlRUk3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdSVUZEYmtRc1RVRkJUU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTTdRMEZEZGtRc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGT3p0QlFVVmtMRWxCUVVrc2FVSkJRV2xDTEVkQlFVY3NaVUZCWlN4RFFVRkRPenRCUVVWNFF5eEpRVUZKTEZsQlFWa3NSMEZCUnl4RFFVRkRMRmxCUVZrc1JVRkJSU3hYUVVGWExFTkJRVU1zUTBGQlF6dEJRVU12UXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0QlFVTTNReXhKUVVGSkxGVkJRVlVzUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4aFFVRmhMRVZCUVVVc1UwRkJVeXhGUVVGRkxGbEJRVmtzUTBGQlF5eERRVUZETzBGQlEzUkZMRWxCUVVrc1dVRkJXU3hIUVVGSExFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NSVUZCUlN4VFFVRlRMRVZCUVVVc1dVRkJXU3hEUVVGRExFTkJRVU03TzBGQlJYWkZMRk5CUVZNc1MwRkJTeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3T3pzN1JVRk5la01zU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVc1EwRkJRenM3UlVGRmFFTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wVkJRMnBDTEVsQlFVa3NWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJRenRGUVVOd1FpeEpRVUZKTEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1JVRkRjRUlzU1VGQlNTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPMFZCUTNKQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXp0RlFVTndRaXhKUVVGSkxFOUJRVThzUjBGQlJ5eHBRa0ZCYVVJc1IwRkJSeXhGUVVGRkxFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wVkJSVFZFTEVsQlFVa3NTMEZCU3l4SFFVRkhPenM3T3pzN1NVRk5WaXhMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdUVUZEZEVJc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzB0QlEzWkNPenM3T3pzN096czdTVUZUUkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTzAxQlF6TkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTJoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXpzN1VVRkZaaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE96dFJRVVZvUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE8xRkJRMmhDTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRhRUlzVjBGQlZ5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRGFrTXNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMUZCUldwRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0UlFVTnlRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdPMUZCUlhCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1QwRkROVUk3UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hKUVVGSkxFVkJRVVVzVTBGQlV5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUTNwQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1Q0xFbEJRVWtzWlVGQlpTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJPMWxCUTJoRExGVkJRVlVzUjBGQlJ5eGxRVUZsTEVOQlFVTXNWVUZCVlR0WlFVTjJReXhWUVVGVkxFZEJRVWNzWlVGQlpTeERRVUZETEZWQlFWVTdXVUZEZGtNc1QwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTTdPenRSUVVkMFF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0UlFVVm9ReXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExGZEJRVmNzUTBGQlF6dFJRVU12UXl4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJRenRSUVVNdlF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnVReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU51UXl4SlFVRkpMR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJRenRSUVVNdlF5eEpRVUZKTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0UlFVVnlReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1pVRkJaU3hEUVVGRExFTkJRVU03TzFGQlJYUkVMRWxCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhWUVVGVkxFVkJRVVU3VlVGRGNrUXNTMEZCU3l4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRE96dFZRVVY0UWl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU03TzFWQlJYQkVMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZET3p0VlFVVnlSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMU5CUXpOQ0xFMUJRVTA3VlVGRFRDeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRWUVVWcVFpeFBRVUZQTEV0QlFVc3NRMEZCUXp0VFFVTmtPMDlCUTBZN1MwRkRSanM3T3pzN096czdPMGxCVTBRc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlR0TlFVTjJRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTnVRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPenRSUVVVNVFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlEyaERMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08xRkJSWFJETEVsQlFVa3NZVUZCWVN4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETzFGQlF6bERMRWxCUVVrc1VVRkJVU3hIUVVGSExGRkJRVkVzUjBGQlJ5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVONFF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE96dFJRVVZ3UlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03TzFGQlJXUXNTVUZCU1N4UlFVRlJMRVZCUVVVN1ZVRkRXaXhKUVVGSkxHRkJRV0VzUjBGQlJ5eFRRVUZUTEVsQlFVa3NVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhWUVVGVkxFVkJRVVU3TzFsQlJTOUVMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJUdGpRVU55UWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyNUVPenRaUVVWRUxFbEJRVWtzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3WTBGRGJFTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8yRkJRMmhDT3p0WlFVVkVMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWRCUTJoRkxFMUJRVTBzU1VGQlNTeGhRVUZoTEVkQlFVY3NRMEZCUXl4VFFVRlRMRWxCUVVrc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFVVTdPMWxCUlhaRkxFbEJRVWtzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlR0alFVTnlRaXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRjRVE3TzFsQlJVUXNTVUZCU1N4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0alFVTnNReXhMUVVGTExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTTdZVUZEYUVJN08xbEJSVVFzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VjBGRGFFVXNUVUZCVFRzN1dVRkZUQ3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMWRCUTNoQ08xTkJRMFk3TzFGQlJVUXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZET3p0UlFVVnFSU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeERRVUZET3p0UlFVVjBRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMDlCUXpGQ08wdEJRMFk3T3pzN096czdPMGxCVVVRc1kwRkJZeXhGUVVGRkxGTkJRVk1zWTBGQll5eEhRVUZITzAxQlEzaERMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6czdUVUZGYWtJc1NVRkJTU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXpzN1RVRkZPVUlzU1VGQlNTeFJRVUZSTEVOQlFVTXNZMEZCWXl4RlFVRkZPMUZCUXpOQ0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1MwRkJTeXhGUVVGRk8xVkJRMjVGTEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGNFSXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenRQUVVOaU96dE5RVVZFTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1JVRkJSVHRSUVVNeFFpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFdEJRVXNzUlVGQlJUdFZRVU51UlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFOQlEzQkNMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VDBGRFlqdExRVU5HT3pzN096czdPenRKUVZGRUxHZENRVUZuUWl4RlFVRkZMRk5CUVZNc1owSkJRV2RDTEVkQlFVYzdUVUZETlVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0TlFVTnlSQ3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUTNSRU96czdPenM3T3p0SlFWRkVMR0ZCUVdFc1JVRkJSU3hUUVVGVExHRkJRV0VzUjBGQlJ6dE5RVU4wUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU03TzAxQlJXeENMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGRkJRVkVzUTBGQlF5eFZRVUZWTEV0QlFVc3NSVUZCUlR0UlFVTjRSU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMDlCUTNCQ0xFVkJRVVVzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dExRVU4yUXpzN096czdPenM3U1VGUlJDeGxRVUZsTEVWQlFVVXNVMEZCVXl4bFFVRmxMRWRCUVVjN1RVRkRNVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0TFFVTnNSRHM3T3pzN096czdTVUZSUkN4WlFVRlpMRVZCUVVVc1UwRkJVeXhaUVVGWkxFZEJRVWM3VFVGRGNFTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE96dE5RVVZzUWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFdEJRVXNzUlVGQlJUdFJRVU01UkN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzA5QlEyNUNMRU5CUVVNc1EwRkJRenRMUVVOS096czdPenM3T3p0SlFWRkVMR05CUVdNc1JVRkJSU3hUUVVGVExHTkJRV01zUjBGQlJ6dE5RVU40UXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wdEJRMnBFT3pzN096czdPenRKUVZGRUxFOUJRVThzUlVGQlJTeFRRVUZUTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVN1RVRkRMMElzU1VGQlNTeFpRVUZaTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlR0UlFVTjZReXhQUVVGUExFdEJRVXNzUTBGQlF6dFBRVU5rT3p0TlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEzQkVPenM3T3pzN096dEpRVkZFTEZOQlFWTXNSVUZCUlN4VFFVRlRMRk5CUVZNc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRGJrTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF6czdUVUZGT1VJc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU42UXl4UFFVRlBMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU03VDBGREwwSTdPMDFCUlVRc1QwRkJUeXhSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETzB0QlEyaERPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRPenROUVVWcVFpeFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE96dE5RVVV2UWl4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVOaU96czdPenM3T3p0SlFWRkVMRTlCUVU4c1JVRkJSU3hUUVVGVExFOUJRVThzUjBGQlJ6dE5RVU14UWl4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRE96dE5RVVZvUWl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZET3p0TlFVVm9ReXhQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pTzBkQlEwWXNRMEZCUXpzN096czdPMFZCVFVZc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eGhRVUZoTEVWQlFVVXNXVUZCV1R0SlFVTnVReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wZEJRM1JGTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNXVUZCV1R0SlFVTXZRaXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJRenRKUVVONlFpeExRVUZMTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1NVRkRlRUlzUzBGQlN5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMGxCUTNaQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SFFVTnNRaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRaRHM3UVVGRlJDeFRRVUZUTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUczdPenM3TzBWQlRURkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzV1VGQldTeEZRVUZGTEVOQlFVTTdPMFZCUldoRExFbEJRVWtzVFVGQlRTeEhRVUZIT3pzN096czdTVUZOV0N4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFZEJRVWM3VFVGRGRFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wdEJRMkk3T3pzN096czdPMGxCVVVRc1NVRkJTU3hGUVVGRkxGTkJRVk1zU1VGQlNTeEhRVUZITzAxQlEzQkNMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0TFFVTnFSVHM3T3pzN096czdTVUZSUkN4TlFVRk5MRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VFVGRGVFSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRMUVVOc1JEczdPenM3T3pzN1NVRlJSQ3hUUVVGVExFVkJRVVVzVTBGQlV5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUTI1RExFdEJRVXNzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0TFFVTjRRanRIUVVOR0xFTkJRVU03T3pzN096dEZRVTFHTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wbEJRMmhDTEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRIUVVOc1FpeERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhOUVVGTkxFTkJRVU03UTBGRFpqczdRVUZGUkN4VFFVRlRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPMFZCVFRORExFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NXVUZCV1N4RlFVRkZMRU5CUVVNN096czdPenM3T3p0RlFWTm9ReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdPenM3T3pzN096dEZRVk55UWl4SlFVRkpMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBWQlJYUkNMRWxCUVVrc1QwRkJUeXhIUVVGSE96czdPenM3U1VGTldpeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRWRCUVVjN096czdPenM3VFVGUGRFSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1RVRkZlRVFzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMHRCUTJJN096czdPenM3TzBsQlVVUXNTVUZCU1N4RlFVRkZMRk5CUVZNc1NVRkJTU3hIUVVGSE8wMUJRM0JDTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU42UkRzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0TFFVTTVRenM3T3pzN096czdPMGxCVTBRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlR0TlFVTXpRaXhMUVVGTExFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdPMDFCUlhoQ0xFbEJRVWtzVTBGQlV5eEZRVUZGTzFGQlEySXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8wOUJRM2hDTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNoQ0xGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMDFCUldwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdVVUZEWWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdWVUZETVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE96dFZRVVZvUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6czdWVUZGTlVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03VTBGRGRrTTdPMUZCUlVRc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dFBRVU5xUWpzN1RVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pT3pzN096czdPenRKUVZGRUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTjRRaXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZET3p0TlFVVnNRaXhKUVVGSkxGRkJRVkVzUlVGQlJUdFJRVU5hTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFZRVU14UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN08xVkJSUzlDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRemRGT3p0UlFVVkVMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03VDBGRGJFSTdPMDFCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqdEhRVU5HTEVOQlFVTTdPMFZCUlVZc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenM3T3p0SlFVMTJRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETzB0QlEyNUNPMGRCUTBZc1EwRkJReXhEUVVGRE96czdPenM3UlVGTlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3haUVVGWk8wbEJRMnhETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRIUVVOc1FpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZsQlFWazdTVUZEYWtNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1R0TlFVTjBReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTMEZEYkVJc1EwRkJReXhEUVVGRE8wZEJRMG9zUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeFpRVUZaTzBsQlF5OUNMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEpRVU5xUWl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03U1VGRGFrSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExFOUJRVThzUTBGQlF6dERRVU5vUWpzN1FVRkZSQ3hKUVVGSkxGbEJRVmtzUjBGQlJ5eHBRMEZCYVVNc1EwRkJRenRCUVVOeVJDeEpRVUZKTEdsQ1FVRnBRaXhIUVVGSExEWkNRVUUyUWl4RFFVRkRPenRCUVVWMFJDeFRRVUZUTEZGQlFWRXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUczdPenM3TzBWQlRUVkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzV1VGQldTeEZRVUZGTEVOQlFVTTdPMFZCUldoRExFbEJRVWtzVVVGQlVTeEhRVUZIT3pzN096czdPMGxCVDJJc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZIT3pzN096czdPMDFCVDNSQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03T3pzN096czdPMDFCVVRsRUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXpzN1RVRkZia1VzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMHRCUTNCQ096czdPenM3T3p0SlFWRkVMRk5CUVZNc1JVRkJSU3hUUVVGVExGTkJRVk1zUjBGQlJ6dE5RVU01UWl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdVVUZEZGtNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzA5QlEzQkRPMHRCUTBZN096czdPenM3TzBsQlVVUXNXVUZCV1N4RlFVRkZMRk5CUVZNc1dVRkJXU3hIUVVGSE8wMUJRM0JETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU4yUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VDBGRGRrTTdTMEZEUmpzN096czdPenM3TzBsQlUwUXNVVUZCVVN4RlFVRkZMRk5CUVZNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJUdE5RVU53UXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETzAxQlF6bENMRWxCUVVrc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wMUJSV3BETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN08wMUJSUzlETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeFBRVUZQTEVWQlFVVTdVVUZEZUVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFBRVU4wUkN4RFFVRkRMRU5CUVVNN1MwRkRTanM3T3pzN096czdPMGxCVTBRc1YwRkJWeXhGUVVGRkxGTkJRVk1zVjBGQlZ5eERRVUZETEZGQlFWRXNSVUZCUlR0TlFVTXhReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03UzBGRE1VVTdPenM3T3pzN08wbEJVVVFzVjBGQlZ5eEZRVUZGTEZOQlFWTXNWMEZCVnl4SFFVRkhPMDFCUTJ4RExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVOMlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1QwRkRhRU03UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hqUVVGakxFVkJRVVVzVTBGQlV5eGpRVUZqTEVkQlFVYzdUVUZEZUVNc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMUZCUTNaRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UFFVTnNRenRMUVVOR096czdPenM3T3pzN1NVRlRSQ3hKUVVGSkxFVkJRVVVzVTBGQlV5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMDFCUXpWQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMUZCUTNoRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1dVRkJXU3hEUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFBRVU0zUkR0TFFVTkdPenM3T3pzN096czdTVUZUUkN4TlFVRk5MRVZCUVVVc1UwRkJVeXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTzAxQlEyaERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEzaERMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNXVUZCV1N4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdUMEZEYkVRN1MwRkRSanM3T3pzN096czdPenM3U1VGWFJDeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRk8wMUJRek5DTEV0QlFVc3NRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenM3VFVGRmRrSXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEZGtjN1IwRkRSaXhEUVVGRE96dEZRVVZHTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRk96czdPenM3U1VGTmVFSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOd1FqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPenRGUVU5SUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhMRVZCUVVVc1dVRkJXU3hEUVVGRExFVkJRVVVzV1VGQldUdEpRVU51UkN4UlFVRlJMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03UjBGRGRFSXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZOQlFWTXNSVUZCUlN4WlFVRlpPMGxCUXk5Q0xGRkJRVkVzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0SlFVTXhRaXhSUVVGUkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZUVJc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBkQlEyeENMRU5CUVVNc1EwRkJRenM3UlVGRlNDeFBRVUZQTEZGQlFWRXNRMEZCUXp0RFFVTnFRanM3UVVGRlJDeFRRVUZUTEZGQlFWRXNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUczdPenM3TzBWQlRUVkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzV1VGQldTeEZRVUZGTEVOQlFVTTdPMFZCUldoRExFbEJRVWtzVVVGQlVTeEhRVUZIT3pzN096czdTVUZOWWl4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFZEJRVWM3VFVGRGRFSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUlVGQlJUdFJRVU16UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VDBGRFlqdExRVU5HT3pzN096czdPenRKUVZGRUxFbEJRVWtzUlVGQlJTeFRRVUZUTEVsQlFVa3NSMEZCUnp0TlFVTndRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzB0QlF6RkRPenM3T3pzN096dEpRVkZFTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVONFFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dExRVU12UWpzN096czdPenM3TzBsQlUwUXNTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJUdE5RVU16UWl4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFdEJRVXNzUlVGQlJTeEZRVUZGTzFGQlEzaENMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdUMEZEZUVRN08wMUJSVVFzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4TFFVRkxMRVZCUVVVc1JVRkJSVHRSUVVONFFpeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJRM2hFTzB0QlEwWTdSMEZEUml4RFFVRkRPenM3T3pzN08wVkJUMFlzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlJTeFpRVUZaTzBsQlF6TkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEhRVU51UWl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmxCUVZrN1NVRkRPVUlzVVVGQlVTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMGRCUTJ4Q0xFTkJRVU1zUTBGQlF6czdPenM3TzBWQlRVZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhUUVVGVExFVkJRVVVzV1VGQldUdEpRVU12UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UjBGRGJFSXNRMEZCUXl4RFFVRkRPenRGUVVWSUxFOUJRVThzVVVGQlVTeERRVUZETzBOQlEycENPenRCUVVWRUxGTkJRVk1zVVVGQlVTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hGUVVGRk96czdPenM3UlVGTk5VTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3haUVVGWkxFVkJRVVVzUTBGQlF6czdSVUZGYUVNc1NVRkJTU3hSUVVGUkxFZEJRVWM3T3pzN096dEpRVTFpTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenROUVVOMFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN08wMUJSV0lzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJSVHRSUVVNM1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1QwRkRZanRMUVVOR096czdPenM3T3pzN1NVRlRSQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVkQlFVYzdUVUZEZEVJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZET3p0TlFVVnFRaXhKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUXpOQ0xFbEJRVWtzVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRWUVVONFFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRmRCUVZjc1EwRkJReXhaUVVGWk8xbEJRMmhETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenM3V1VGRllpeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czdXVUZGZWtJc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFkQlEyWXNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRFpqdFBRVU5HTzB0QlEwWTdPenM3T3pzN08wbEJVVVFzU1VGQlNTeEZRVUZGTEZOQlFWTXNTVUZCU1N4SFFVRkhPMDFCUTNCQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dExRVU5zUXpzN096czdPenM3U1VGUlJDeEpRVUZKTEVWQlFVVXNVMEZCVXl4SlFVRkpMRWRCUVVjN1RVRkRjRUlzU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPenROUVVWc1FpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4WlFVRlpPMUZCUTNaRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UFFVTm1MRU5CUVVNc1EwRkJRenM3VFVGRlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4WlFVRlpPMUZCUTNSRUxFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UFFVTm9RaXhEUVVGRExFTkJRVU03UzBGRFNqczdPenM3T3pzN1NVRlJSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZUVJc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUXpkRU8wZEJRMFlzUTBGQlF6czdSVUZGUml4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUlVGQlJUczdPenM3T3p0SlFVOTJRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1NVRkJTU3hSUVVGUkxFZEJRVWNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZsQlFWa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eERRVUZET3p0TlFVVjJSaXhKUVVGSkxGRkJRVkVzUlVGQlJUdFJRVU5hTEU5QlFVOHNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wOUJRM2hDT3p0TlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1MwRkRka003UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBTQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGRkxGbEJRVms3U1VGRE0wTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wZEJRMjVDTEVOQlFVTXNRMEZCUXpzN096czdPenM3T3p0RlFWVklMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RlFVRkZMRk5CUVZNc1JVRkJSU3hoUVVGaExFVkJRVVVzVVVGQlVTeERRVUZETEVWQlFVVXNXVUZCV1R0SlFVTnFSaXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdSMEZEYWtJc1EwRkJReXhEUVVGRE96czdPenM3T3p0RlFWRklMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNUVUZCVFN4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRkxGbEJRVms3U1VGRGVFUXNVVUZCVVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNXVUZCV1R0SlFVTTVRaXhSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdSMEZEYkVJc1EwRkJReXhEUVVGRE96czdPenM3UlVGTlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3haUVVGWk8wbEJReTlDTEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRIUVVOc1FpeERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhSUVVGUkxFTkJRVU03UTBGRGFrSTdPenM3T3pzN08wRkJVVVFzVTBGQlV5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RlFVRkZPMFZCUXk5Q0xFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMGxCUTNCQ0xFOUJRVThzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGRCUTNwQ0xFMUJRVTA3U1VGRFRDeEpRVUZKTEVOQlFVTXNjME5CUVhORExFTkJRVU1zUTBGQlF6dEhRVU01UXpzN1JVRkZSQ3hQUVVGUExFVkJRVVVzUTBGQlF6dERRVU5ZT3p0QlFVVkVMRk5CUVZNc1YwRkJWeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPenM3T3pzN1JVRk5MME1zU1VGQlNTeE5RVUZOTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVc1EwRkJRenM3T3pzN096dEZRVTlvUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZET3pzN096czdPenM3UlVGVE9VSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1pVRkJaU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXpzN096czdPenRGUVU5dVJDeEpRVUZKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZET3p0RlFVVjBReXhKUVVGSkxGZEJRVmNzUjBGQlJ6czdPenM3T3p0SlFVOW9RaXhMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZPMDFCUXpWQ0xFbEJRVWtzVDBGQlR5eE5RVUZOTEVOQlFVTXNWVUZCVlN4TFFVRkxMRmRCUVZjc1JVRkJSVHRSUVVNMVF5eExRVUZMTEVsQlFVa3NTMEZCU3l4SlFVRkpMRTFCUVUwc1JVRkJSVHRWUVVONFFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGFFTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExHTkJRV01zUjBGQlJ5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRk8yTkJRemRFTEU5QlFVOHNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRM1JDTzFkQlEwWTdVMEZEUmp0UFFVTkdPenROUVVWRUxFOUJRVThzVVVGQlVTeERRVUZETzB0QlEycENPMGRCUTBZc1EwRkJRenM3T3pzN08wVkJUVVlzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdPenM3T3p0RlFVMDVReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4TlFVRk5MRVZCUVVVc1VVRkJVU3hEUVVGRExGbEJRVms3U1VGREwwTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF6dEhRVU53UlN4RlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFRkQ0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZMRmxCUVZrN1NVRkRPVUlzVFVGQlRTeEhRVUZITEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenM3U1VGRmFrTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTTdSMEZEYmtNc1EwRkJReXhEUVVGRE96czdPenM3UlVGTlNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3haUVVGWk8wbEJReTlDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBkQlF6bENMRU5CUVVNc1EwRkJRenM3UlVGRlNDeFBRVUZQTEZkQlFWY3NRMEZCUXp0RFFVTndRanM3UVVGRlJDeEpRVUZKTEZWQlFWVXNSMEZCUnpzN1JVRkZaaXhKUVVGSkxFVkJRVVVzU1VGQlNUdEZRVU5XTEZOQlFWTXNSVUZCUlN4VFFVRlRPMFZCUTNCQ0xGVkJRVlVzUlVGQlJTeFZRVUZWTzBWQlEzUkNMRk5CUVZNc1JVRkJSU3hUUVVGVE8wVkJRM0JDTEVsQlFVa3NSVUZCUlN4SlFVRkpPMFZCUTFZc1MwRkJTeXhGUVVGRkxFdEJRVXM3UlVGRFdpeEpRVUZKTEVWQlFVVXNTVUZCU1R0RlFVTldMRWxCUVVrc1JVRkJSU3hKUVVGSk8wVkJRMVlzVFVGQlRTeEZRVUZGTEUxQlFVMDdSVUZEWkN4TlFVRk5MRVZCUVVVc1RVRkJUVHRGUVVOa0xFdEJRVXNzUlVGQlJTeExRVUZMTzBWQlExb3NSMEZCUnl4RlFVRkZMRWRCUVVjN096dEZRVWRTTEV0QlFVc3NSVUZCUlN4TFFVRkxPMFZCUTFvc1RVRkJUU3hGUVVGRkxFMUJRVTA3UlVGRFpDeFBRVUZQTEVWQlFVVXNUMEZCVHp0RlFVTm9RaXhSUVVGUkxFVkJRVVVzVVVGQlVUdEZRVU5zUWl4UlFVRlJMRVZCUVVVc1VVRkJVVHRGUVVOc1FpeFJRVUZSTEVWQlFVVXNVVUZCVVR0RlFVTnNRaXhYUVVGWExFVkJRVVVzVjBGQlZ6dERRVU42UWl4RFFVRkRPenRCUVVWR0xFbEJRVWtzVDBGQlR5eEhRVUZITEZWQlFWVXNTMEZCU3l4RlFVRkZPMFZCUXpkQ0xGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wVkJSVEZDTEZOQlFWTXNVVUZCVVN4SFFVRkhPMGxCUTJ4Q0xHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRMMElzVDBGQlR5eDVRa0ZCZVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4SlFVRkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETzBkQlEzaElPenRGUVVWRUxGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTnlRaXhIUVVGSExFVkJRVVVzVDBGQlR6dEpRVU5hTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1IwRkJSenROUVVOMFFpeEpRVUZKTEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN08wMUJSWGhHTEU5QlFVOHNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zVTBGQlV5eEpRVUZKTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEZGtvN1IwRkRSaXhEUVVGRExFTkJRVU1zUTBGQlF6dEZRVU5LTEU5QlFVOHNVVUZCVVN4RFFVRkRPME5CUTJwQ0xFTkJRVU1zUzBGQlN5eERRVUZET3p0QlF6ZHFTRklzU1VGQlRVTXNiMEpCUVc5Q1F5eGxRVUZsUkN4cFFrRkJla003UVVGRFFTeEpRVUZOUlN4dFFrRkJiVUpFTEdWQlFXVkRMR2RDUVVGNFF6dEJRVU5CTEVsQlFVMURMRkZCUVZGRExGTkJRVk5ETEdGQlFWUXNRMEZCZFVJc1VVRkJka0lzUTBGQlpEdEJRVU5CTEVsQlFVMURMR2RDUVVGblFrWXNVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeHBRa0ZCZGtJc1EwRkJkRUk3UVVGRFFTeEpRVUZOUlN4WFFVRlhTQ3hUUVVGVFF5eGhRVUZVTEVOQlFYVkNMR0ZCUVhaQ0xFTkJRV3BDTzBGQlEwRXNTVUZCVFVjc1lVRkJZVW9zVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhsUVVGMlFpeERRVUZ1UWp0QlFVTkJMRWxCUVUxSkxHdENRVUZyUWt3c1UwRkJVMDBzWjBKQlFWUXNRMEZCTUVJc2IwSkJRVEZDTEVOQlFYaENPMEZCUTBFc1NVRkJUVU1zYTBKQlFXdENVQ3hUUVVGVFF5eGhRVUZVTEVOQlFYVkNMSEZDUVVGMlFpeERRVUY0UWp0QlFVTkJMRWxCUVUxUExHdENRVUZyUWxJc1UwRkJVMDBzWjBKQlFWUXNRMEZCTUVJc2JVSkJRVEZDTEVOQlFYaENPMEZCUTBFc1NVRkJUVWNzVjBGQlYxUXNVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeHRRa0ZCZGtJc1EwRkJha0k3UVVGRFFTeEpRVUZOVXl4bFFVRmxWaXhUUVVGVFF5eGhRVUZVTEVOQlFYVkNMR3RDUVVGMlFpeERRVUZ5UWpzN1FVRkZRU3hKUVVGTlZTeFhRVUZYV0N4VFFVRlRUU3huUWtGQlZDeERRVUV3UWl4blFrRkJNVUlzUTBGQmFrSTdPMEZCUlVFc1NVRkJTVTBzU1VGQlNTeERRVUZTT3p0QlFVVkJMRk5CUVZORExGZEJRVlFzUjBGQmRVSTdVVUZEWmtNc1UwRkJUaXhEUVVGblFrTXNUVUZCYUVJc1EwRkJkVUlzVjBGQmRrSTdPMkZCUlZjc1dVRkJUVHRoUVVOT1JDeFRRVUZVTEVOQlFXMUNReXhOUVVGdVFpeERRVUV3UWl4WFFVRXhRanRIUVVSR0xFVkJSVWNzUjBGR1NEdGhRVWRYTEZsQlFVMDdaVUZEU2tRc1UwRkJXQ3hEUVVGeFFrTXNUVUZCY2tJc1EwRkJORUlzVjBGQk5VSTdSMEZFUml4RlFVVkhMRWRCUmtnN08yRkJTVmNzV1VGQlRUdHZRa0ZEUXl4RFFVRm9RaXhGUVVGdFFrUXNVMEZCYmtJc1EwRkJOa0pETEUxQlFUZENMRU5CUVc5RExGZEJRWEJETzBkQlJFWXNSVUZGUnl4SFFVWklPMkZCUjFjc1dVRkJUVHR2UWtGRFF5eERRVUZvUWl4RlFVRnRRa1FzVTBGQmJrSXNRMEZCTmtKRExFMUJRVGRDTEVOQlFXOURMRmRCUVhCRE8wZEJSRVlzUlVGRlJ5eEhRVVpJTzJGQlIxY3NXVUZCVFR0dlFrRkRRMFFzVTBGQmFFSXNRMEZCTUVKRExFMUJRVEZDTEVOQlFXbERMRmRCUVdwRE8wZEJSRVlzUlVGRlJ5eEhRVVpJT3p0clFrRkpaMEpETEU5QlFXaENMRU5CUVhkQ0xGVkJRVU5ETEVWQlFVUXNSVUZCUzBNc1EwRkJUQ3hGUVVGWE8yVkJRM1JDTEZsQlFVMDdVMEZEV2tvc1UwRkJTQ3hEUVVGaFF5eE5RVUZpTEVOQlFXOUNMRmRCUVhCQ08wdEJSRVlzUlVGRlJ5eE5RVUZOUnl4SlFVRkpMRWRCUm1JN1IwRkVSanM3WVVGTlZ5eFpRVUZOTzJGQlEwNUtMRk5CUVZRc1EwRkJiVUpETEUxQlFXNUNMRU5CUVRCQ0xGZEJRVEZDTzBkQlJFWXNSVUZGUnl4SFFVWklPenRoUVVsWExGbEJRVTA3YVVKQlEwWkVMRk5CUVdJc1EwRkJkVUpETEUxQlFYWkNMRU5CUVRoQ0xGZEJRVGxDTzBkQlJFWXNSVUZGUnl4SFFVWklPenROUVVsSmFFSXNUVUZCVFdVc1UwRkJUaXhEUVVGblFrc3NVVUZCYUVJc1EwRkJlVUlzVjBGQmVrSXNRMEZCU2l4RlFVRXlRenRSUVVOeVEwTXNUMEZCVDBNc1QwRkJXRHRoUVVOVGNFSXNZVUZCVkN4RFFVRjFRaXhWUVVGMlFpeEZRVUZ0UTNGQ0xFdEJRVzVETEVOQlFYbERReXhIUVVGNlF5eEhRVUVyUXl4TlFVRk5XQ3hEUVVGT0xFZEJRVlVzU1VGQmVrUTdZVUZEVTFnc1lVRkJWQ3hEUVVGMVFpeFZRVUYyUWl4RlFVRnRRM0ZDTEV0QlFXNURMRU5CUVhsRFJTeFJRVUY2UXl4SFFVRnZSQ3hQUVVGd1JEdHpRa0ZEYTBKMFFpeGhRVUZzUWp0SFFVcEdMRTFCUzA4N1lVRkRTVVFzWVVGQlZDeERRVUYxUWl4VlFVRjJRaXhGUVVGdFEzRkNMRXRCUVc1RExFTkJRWGxEUXl4SFFVRjZReXhIUVVFclF5eEZRVUV2UXp0aFFVTlRkRUlzWVVGQlZDeERRVUYxUWl4VlFVRjJRaXhGUVVGdFEzRkNMRXRCUVc1RExFTkJRWGxEUlN4UlFVRjZReXhIUVVGdlJDeEZRVUZ3UkR0WFFVTlBReXhSUVVGUUxFTkJRV2RDTEVOQlFXaENMRVZCUVcxQ1lpeERRVUZ1UWp0eFFrRkRhVUpXTEdGQlFXcENPenM3TzBGQlNVb3NVMEZCVTNkQ0xHRkJRVlFzUTBGQmRVSkRMRXRCUVhaQ0xFVkJRVGhDTzAxQlEzaENRU3hOUVVGTlF5eE5RVUZPTEV0QlFXbENOMElzUzBGQmNrSXNSVUZCTkVJN096czdPMEZCU3psQ1dTeFRRVUZUU3l4UFFVRlVMRU5CUVdsQ0xGVkJRVU5ETEVWQlFVUXNSVUZCVVR0TFFVTndRbGtzWjBKQlFVZ3NRMEZCYjBJc1QwRkJjRUlzUlVGQk5rSXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wMUJRMmhEUXl4alFVRkdPenRIUVVSR08wTkJSRVk3TzBGQlQwRllMRTlCUVU5VExHZENRVUZRTEVOQlFYZENMRTlCUVhoQ0xFVkJRV2xEU0N4aFFVRnFRenM3UVVGRlFTeEpRVUZKVFN4UFFVRktMRU5CUVZVc1VVRkJWaXhGUVVGdlFqdFhRVU5VTzBOQlJGZ3NSVUZGUjBNc1MwRkdTRHM3UVVGSlFXcERMRk5CUVZOTkxHZENRVUZVTEVOQlFUQkNMR2xDUVVFeFFpeEZRVUUyUTFVc1QwRkJOME1zUTBGQmNVUXNWVUZCUTBNc1JVRkJSQ3hGUVVGUk8wdEJRM2hFV1N4blFrRkJTQ3hEUVVGdlFpeFBRVUZ3UWl4RlFVRTJRaXhWUVVGRFF5eERRVUZFTEVWQlFVODdUVUZEYUVORExHTkJRVVk3UjBGRVJqdERRVVJHT3pzN095SjkifQ==
