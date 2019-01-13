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


var container = document.querySelector('.tag-list');
var ps = new PerfectScrollbar(container);
// const ms = new PerfectScrollbar(document.querySelector('.wrapper'));

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL2JvZHktc2Nyb2xsLWxvY2svbGliL2JvZHlTY3JvbGxMb2NrLm1pbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZ2xpZGVqcy9nbGlkZS9kaXN0L2dsaWRlLmVzbS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9kaXN0L3BlcmZlY3Qtc2Nyb2xsYmFyLmVzbS5qcyIsIm1haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJleHBvcnRzXCJdLHQpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpdChleHBvcnRzKTtlbHNle3ZhciBvPXt9O3QobyksZS5ib2R5U2Nyb2xsTG9jaz1vfX0odGhpcyxmdW5jdGlvbihleHBvcnRzKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgdD0wLG89QXJyYXkoZS5sZW5ndGgpO3Q8ZS5sZW5ndGg7dCsrKW9bdF09ZVt0XTtyZXR1cm4gb31yZXR1cm4gQXJyYXkuZnJvbShlKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbD0hMTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT17Z2V0IHBhc3NpdmUoKXtsPSEwfX07d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsZSl9dmFyIGQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSYmL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pLGM9W10sdT0hMSxhPS0xLHM9dm9pZCAwLHY9dm9pZCAwLGY9ZnVuY3Rpb24odCl7cmV0dXJuIGMuc29tZShmdW5jdGlvbihlKXtyZXR1cm4hKCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmV8fCFlLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUodCkpfSl9LG09ZnVuY3Rpb24oZSl7dmFyIHQ9ZXx8d2luZG93LmV2ZW50O3JldHVybiEhZih0LnRhcmdldCl8fCgxPHQudG91Y2hlcy5sZW5ndGh8fCh0LnByZXZlbnREZWZhdWx0JiZ0LnByZXZlbnREZWZhdWx0KCksITEpKX0sbz1mdW5jdGlvbigpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt2b2lkIDAhPT12JiYoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dix2PXZvaWQgMCksdm9pZCAwIT09cyYmKGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c9cyxzPXZvaWQgMCl9KX07ZXhwb3J0cy5kaXNhYmxlQm9keVNjcm9sbD1mdW5jdGlvbihpLGUpe2lmKGQpe2lmKCFpKXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJkaXNhYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGRpc2FibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLlwiKTtpZihpJiYhYy5zb21lKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQ9PT1pfSkpe3ZhciB0PXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbdF0pLGkub250b3VjaHN0YXJ0PWZ1bmN0aW9uKGUpezE9PT1lLnRhcmdldFRvdWNoZXMubGVuZ3RoJiYoYT1lLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSl9LGkub250b3VjaG1vdmU9ZnVuY3Rpb24oZSl7dmFyIHQsbyxuLHI7MT09PWUudGFyZ2V0VG91Y2hlcy5sZW5ndGgmJihvPWkscj0odD1lKS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFktYSwhZih0LnRhcmdldCkmJihvJiYwPT09by5zY3JvbGxUb3AmJjA8cj9tKHQpOihuPW8pJiZuLnNjcm9sbEhlaWdodC1uLnNjcm9sbFRvcDw9bi5jbGllbnRIZWlnaHQmJnI8MD9tKHQpOnQuc3RvcFByb3BhZ2F0aW9uKCkpKX0sdXx8KGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMCl9fWVsc2V7bj1lLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpZih2b2lkIDA9PT12KXt2YXIgZT0hIW4mJiEwPT09bi5yZXNlcnZlU2Nyb2xsQmFyR2FwLHQ9d2luZG93LmlubmVyV2lkdGgtZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO2UmJjA8dCYmKHY9ZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQsZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9dCtcInB4XCIpfXZvaWQgMD09PXMmJihzPWRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3csZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiKX0pO3ZhciBvPXt0YXJnZXRFbGVtZW50Omksb3B0aW9uczplfHx7fX07Yz1bXS5jb25jYXQocihjKSxbb10pfXZhciBufSxleHBvcnRzLmNsZWFyQWxsQm9keVNjcm9sbExvY2tzPWZ1bmN0aW9uKCl7ZD8oYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UudGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQ9bnVsbCxlLnRhcmdldEVsZW1lbnQub250b3VjaG1vdmU9bnVsbH0pLHUmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbSxsP3twYXNzaXZlOiExfTp2b2lkIDApLHU9ITEpLGM9W10sYT0tMSk6KG8oKSxjPVtdKX0sZXhwb3J0cy5lbmFibGVCb2R5U2Nyb2xsPWZ1bmN0aW9uKHQpe2lmKGQpe2lmKCF0KXJldHVybiB2b2lkIGNvbnNvbGUuZXJyb3IoXCJlbmFibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZW5hYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy5cIik7dC5vbnRvdWNoc3RhcnQ9bnVsbCx0Lm9udG91Y2htb3ZlPW51bGwsYz1jLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS50YXJnZXRFbGVtZW50IT09dH0pLHUmJjA9PT1jLmxlbmd0aCYmKGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixtLGw/e3Bhc3NpdmU6ITF9OnZvaWQgMCksdT0hMSl9ZWxzZSAxPT09Yy5sZW5ndGgmJmNbMF0udGFyZ2V0RWxlbWVudD09PXQ/KG8oKSxjPVtdKTpjPWMuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRhcmdldEVsZW1lbnQhPT10fSl9fSk7XG4iLCIvKiFcbiAqIEdsaWRlLmpzIHYzLjIuNFxuICogKGMpIDIwMTMtMjAxOCBKxJlkcnplaiBDaGHFgnViZWsgPGplZHJ6ZWouY2hhbHViZWtAZ21haWwuY29tPiAoaHR0cDovL2plZHJ6ZWpjaGFsdWJlay5jb20vKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIG1vdmVtZW50LlxuICAgKlxuICAgKiBBdmFpbGFibGUgdHlwZXM6XG4gICAqIGBzbGlkZXJgIC0gUmV3aW5kcyBzbGlkZXIgdG8gdGhlIHN0YXJ0L2VuZCB3aGVuIGl0IHJlYWNoZXMgdGhlIGZpcnN0IG9yIGxhc3Qgc2xpZGUuXG4gICAqIGBjYXJvdXNlbGAgLSBDaGFuZ2VzIHNsaWRlcyB3aXRob3V0IHN0YXJ0aW5nIG92ZXIgd2hlbiBpdCByZWFjaGVzIHRoZSBmaXJzdCBvciBsYXN0IHNsaWRlLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgdHlwZTogJ3NsaWRlcicsXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGF0IHNwZWNpZmljIHNsaWRlIG51bWJlciBkZWZpbmVkIHdpdGggemVyby1iYXNlZCBpbmRleC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHN0YXJ0QXQ6IDAsXG5cbiAgLyoqXG4gICAqIEEgbnVtYmVyIG9mIHNsaWRlcyB2aXNpYmxlIG9uIHRoZSBzaW5nbGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBwZXJWaWV3OiAxLFxuXG4gIC8qKlxuICAgKiBGb2N1cyBjdXJyZW50bHkgYWN0aXZlIHNsaWRlIGF0IGEgc3BlY2lmaWVkIHBvc2l0aW9uIGluIHRoZSB0cmFjay5cbiAgICpcbiAgICogQXZhaWxhYmxlIGlucHV0czpcbiAgICogYGNlbnRlcmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgYWx3YXlzIGZvY3VzZWQgYXQgdGhlIGNlbnRlciBvZiBhIHRyYWNrLlxuICAgKiBgMCwxLDIsMy4uLmAgLSBDdXJyZW50IHNsaWRlIHdpbGwgYmUgZm9jdXNlZCBvbiB0aGUgc3BlY2lmaWVkIHplcm8tYmFzZWQgaW5kZXguXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfVxuICAgKi9cbiAgZm9jdXNBdDogMCxcblxuICAvKipcbiAgICogQSBzaXplIG9mIHRoZSBnYXAgYWRkZWQgYmV0d2VlbiBzbGlkZXMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBnYXA6IDEwLFxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2xpZGVzIGFmdGVyIGEgc3BlY2lmaWVkIGludGVydmFsLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYXV0b3BsYXkuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIGF1dG9wbGF5OiBmYWxzZSxcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheSBvbiBtb3VzZW92ZXIgZXZlbnQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgaG92ZXJwYXVzZTogdHJ1ZSxcblxuICAvKipcbiAgICogQWxsb3cgZm9yIGNoYW5naW5nIHNsaWRlcyB3aXRoIGxlZnQgYW5kIHJpZ2h0IGtleWJvYXJkIGFycm93cy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBrZXlib2FyZDogdHJ1ZSxcblxuICAvKipcbiAgICogU3RvcCBydW5uaW5nIGBwZXJWaWV3YCBudW1iZXIgb2Ygc2xpZGVzIGZyb20gdGhlIGVuZC4gVXNlIHRoaXNcbiAgICogb3B0aW9uIGlmIHlvdSBkb24ndCB3YW50IHRvIGhhdmUgYW4gZW1wdHkgc3BhY2UgYWZ0ZXJcbiAgICogYSBzbGlkZXIuIFdvcmtzIG9ubHkgd2l0aCBgc2xpZGVyYCB0eXBlIGFuZCBhXG4gICAqIG5vbi1jZW50ZXJlZCBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBib3VuZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIE1pbmltYWwgc3dpcGUgZGlzdGFuY2UgbmVlZGVkIHRvIGNoYW5nZSB0aGUgc2xpZGUuIFVzZSBgZmFsc2VgIGZvciB0dXJuaW5nIG9mZiBhIHN3aXBpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8Qm9vbGVhbn1cbiAgICovXG4gIHN3aXBlVGhyZXNob2xkOiA4MCxcblxuICAvKipcbiAgICogTWluaW1hbCBtb3VzZSBkcmFnIGRpc3RhbmNlIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHNsaWRlLiBVc2UgYGZhbHNlYCBmb3IgdHVybmluZyBvZmYgYSBkcmFnZ2luZy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgZHJhZ1RocmVzaG9sZDogMTIwLFxuXG4gIC8qKlxuICAgKiBBIG1heGltdW0gbnVtYmVyIG9mIHNsaWRlcyB0byB3aGljaCBtb3ZlbWVudCB3aWxsIGJlIG1hZGUgb24gc3dpcGluZyBvciBkcmFnZ2luZy4gVXNlIGBmYWxzZWAgZm9yIHVubGltaXRlZC5cbiAgICpcbiAgICogQHR5cGUge051bWJlcnxCb29sZWFufVxuICAgKi9cbiAgcGVyVG91Y2g6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBNb3ZpbmcgZGlzdGFuY2UgcmF0aW8gb2YgdGhlIHNsaWRlcyBvbiBhIHN3aXBpbmcgYW5kIGRyYWdnaW5nLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgdG91Y2hSYXRpbzogMC41LFxuXG4gIC8qKlxuICAgKiBBbmdsZSByZXF1aXJlZCB0byBhY3RpdmF0ZSBzbGlkZXMgbW92aW5nIG9uIHN3aXBpbmcgb3IgZHJhZ2dpbmcuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICB0b3VjaEFuZ2xlOiA0NSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBhbmltYXRpb25EdXJhdGlvbjogNDAwLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgbG9vcGluZyB0aGUgYHNsaWRlcmAgdHlwZS4gU2xpZGVyIHdpbGwgcmV3aW5kIHRvIHRoZSBmaXJzdC9sYXN0IHNsaWRlIHdoZW4gaXQncyBhdCB0aGUgc3RhcnQvZW5kLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHJld2luZDogdHJ1ZSxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIHJld2luZGluZyBhbmltYXRpb24gb2YgdGhlIGBzbGlkZXJgIHR5cGUgaW4gbWlsbGlzZWNvbmRzLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgcmV3aW5kRHVyYXRpb246IDgwMCxcblxuICAvKipcbiAgICogRWFzaW5nIGZ1bmN0aW9uIGZvciB0aGUgYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgYW5pbWF0aW9uVGltaW5nRnVuYzogJ2N1YmljLWJlemllciguMTY1LCAuODQwLCAuNDQwLCAxKScsXG5cbiAgLyoqXG4gICAqIFRocm90dGxlIGNvc3RseSBldmVudHMgYXQgbW9zdCBvbmNlIHBlciBldmVyeSB3YWl0IG1pbGxpc2Vjb25kcy5cbiAgICpcbiAgICogQHR5cGUge051bWJlcn1cbiAgICovXG4gIHRocm90dGxlOiAxMCxcblxuICAvKipcbiAgICogTW92aW5nIGRpcmVjdGlvbiBtb2RlLlxuICAgKlxuICAgKiBBdmFpbGFibGUgaW5wdXRzOlxuICAgKiAtICdsdHInIC0gbGVmdCB0byByaWdodCBtb3ZlbWVudCxcbiAgICogLSAncnRsJyAtIHJpZ2h0IHRvIGxlZnQgbW92ZW1lbnQuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBkaXJlY3Rpb246ICdsdHInLFxuXG4gIC8qKlxuICAgKiBUaGUgZGlzdGFuY2UgdmFsdWUgb2YgdGhlIG5leHQgYW5kIHByZXZpb3VzIHZpZXdwb3J0cyB3aGljaFxuICAgKiBoYXZlIHRvIHBlZWsgaW4gdGhlIGN1cnJlbnQgdmlldy4gQWNjZXB0cyBudW1iZXIgYW5kXG4gICAqIHBpeGVscyBhcyBhIHN0cmluZy4gTGVmdCBhbmQgcmlnaHQgcGVla2luZyBjYW4gYmVcbiAgICogc2V0IHVwIHNlcGFyYXRlbHkgd2l0aCBhIGRpcmVjdGlvbnMgb2JqZWN0LlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICogYDEwMGAgLSBQZWVrIDEwMHB4IG9uIHRoZSBib3RoIHNpZGVzLlxuICAgKiB7IGJlZm9yZTogMTAwLCBhZnRlcjogNTAgfWAgLSBQZWVrIDEwMHB4IG9uIHRoZSBsZWZ0IHNpZGUgYW5kIDUwcHggb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ8U3RyaW5nfE9iamVjdH1cbiAgICovXG4gIHBlZWs6IDAsXG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2Ygb3B0aW9ucyBhcHBsaWVkIGF0IHNwZWNpZmllZCBtZWRpYSBicmVha3BvaW50cy5cbiAgICogRm9yIGV4YW1wbGU6IGRpc3BsYXkgdHdvIHNsaWRlcyBwZXIgdmlldyB1bmRlciA4MDBweC5cbiAgICogYHtcbiAgICogICAnODAwcHgnOiB7XG4gICAqICAgICBwZXJWaWV3OiAyXG4gICAqICAgfVxuICAgKiB9YFxuICAgKi9cbiAgYnJlYWtwb2ludHM6IHt9LFxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIGludGVybmFsbHkgdXNlZCBIVE1MIGNsYXNzZXMuXG4gICAqXG4gICAqIEB0b2RvIFJlZmFjdG9yIGBzbGlkZXJgIGFuZCBgY2Fyb3VzZWxgIHByb3BlcnRpZXMgdG8gc2luZ2xlIGB0eXBlOiB7IHNsaWRlcjogJycsIGNhcm91c2VsOiAnJyB9YCBvYmplY3RcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNsYXNzZXM6IHtcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIGx0cjogJ2dsaWRlLS1sdHInLFxuICAgICAgcnRsOiAnZ2xpZGUtLXJ0bCdcbiAgICB9LFxuICAgIHNsaWRlcjogJ2dsaWRlLS1zbGlkZXInLFxuICAgIGNhcm91c2VsOiAnZ2xpZGUtLWNhcm91c2VsJyxcbiAgICBzd2lwZWFibGU6ICdnbGlkZS0tc3dpcGVhYmxlJyxcbiAgICBkcmFnZ2luZzogJ2dsaWRlLS1kcmFnZ2luZycsXG4gICAgY2xvbmVTbGlkZTogJ2dsaWRlX19zbGlkZS0tY2xvbmUnLFxuICAgIGFjdGl2ZU5hdjogJ2dsaWRlX19idWxsZXQtLWFjdGl2ZScsXG4gICAgYWN0aXZlU2xpZGU6ICdnbGlkZV9fc2xpZGUtLWFjdGl2ZScsXG4gICAgZGlzYWJsZWRBcnJvdzogJ2dsaWRlX19hcnJvdy0tZGlzYWJsZWQnXG4gIH1cbn07XG5cbi8qKlxuICogT3V0cHV0cyB3YXJuaW5nIG1lc3NhZ2UgdG8gdGhlIGJvd3NlciBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gbXNnXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICBjb25zb2xlLmVycm9yKFwiW0dsaWRlIHdhcm5dOiBcIiArIG1zZyk7XG59XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIHZhbHVlIGVudGVyZWQgYXMgbnVtYmVyXG4gKiBvciBzdHJpbmcgdG8gaW50ZWdlciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHRvSW50KHZhbHVlKSB7XG4gIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdmFsdWUgZW50ZXJlZCBhcyBudW1iZXJcbiAqIG9yIHN0cmluZyB0byBmbGF0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHsqfSAgIHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpO1xuXG4gIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhdmFsdWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbWl4ZWQtb3BlcmF0b3JzXG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSAgeyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyB1bmRlZmluZWQuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtICB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBzcGVjaWZpZWQgY29sbGVjdGlvbiBvZiBleHRlbnNpb25zLlxuICogRWFjaCBleHRlbnNpb24gcmVjZWl2ZXMgYWNjZXNzIHRvIGluc3RhbmNlIG9mIGdsaWRlIGFuZCByZXN0IG9mIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGdsaWRlXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9uc1xuICpcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1vdW50KGdsaWRlLCBleHRlbnNpb25zLCBldmVudHMpIHtcbiAgdmFyIGNvbXBvbmVudHMgPSB7fTtcblxuICBmb3IgKHZhciBuYW1lIGluIGV4dGVuc2lvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihleHRlbnNpb25zW25hbWVdKSkge1xuICAgICAgY29tcG9uZW50c1tuYW1lXSA9IGV4dGVuc2lvbnNbbmFtZV0oZ2xpZGUsIGNvbXBvbmVudHMsIGV2ZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ0V4dGVuc2lvbiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29tcG9uZW50c1tfbmFtZV0ubW91bnQpKSB7XG4gICAgICBjb21wb25lbnRzW19uYW1lXS5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIERlZmluZXMgZ2V0dGVyIGFuZCBzZXR0ZXIgcHJvcGVydHkgb24gdGhlIHNwZWNpZmllZCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogICAgICAgICBPYmplY3Qgd2hlcmUgcHJvcGVydHkgaGFzIHRvIGJlIGRlZmluZWQuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgICAgICAgIE5hbWUgb2YgdGhlIGRlZmluZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmluaXRpb24gIEdldCBhbmQgc2V0IGRlZmluaXRpb25zIGZvciB0aGUgcHJvcGVydHkuXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5mdW5jdGlvbiBkZWZpbmUob2JqLCBwcm9wLCBkZWZpbml0aW9uKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlZmluaXRpb24pO1xufVxuXG4vKipcbiAqIFNvcnRzIGFwaGFiZXRpY2FsbHkgb2JqZWN0IGtleXMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc29ydEtleXMob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHIsIGspIHtcbiAgICByW2tdID0gb2JqW2tdO1xuXG4gICAgcmV0dXJuIHJba10sIHI7XG4gIH0sIHt9KTtcbn1cblxuLyoqXG4gKiBNZXJnZXMgcGFzc2VkIHNldHRpbmdzIG9iamVjdCB3aXRoIGRlZmF1bHQgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNldHRpbmdzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyhkZWZhdWx0cywgc2V0dGluZ3MpIHtcbiAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMsIHNldHRpbmdzKTtcblxuICAvLyBgT2JqZWN0LmFzc2lnbmAgZG8gbm90IGRlZXBseSBtZXJnZSBvYmplY3RzLCBzbyB3ZVxuICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5IGZvciBldmVyeSBuZXN0ZWQgb2JqZWN0XG4gIC8vIGluIG9wdGlvbnMuIEFsdGhvdWdoIGl0IGRvZXMgbm90IGxvb2sgc21hcnQsXG4gIC8vIGl0J3Mgc21hbGxlciBhbmQgZmFzdGVyIHRoYW4gc29tZSBmYW5jeVxuICAvLyBtZXJnaW5nIGRlZXAtbWVyZ2UgYWxnb3JpdGhtIHNjcmlwdC5cbiAgaWYgKHNldHRpbmdzLmhhc093blByb3BlcnR5KCdjbGFzc2VzJykpIHtcbiAgICBvcHRpb25zLmNsYXNzZXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcywgc2V0dGluZ3MuY2xhc3Nlcyk7XG5cbiAgICBpZiAoc2V0dGluZ3MuY2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSgnZGlyZWN0aW9uJykpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3Nlcy5kaXJlY3Rpb24gPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdHMuY2xhc3Nlcy5kaXJlY3Rpb24sIHNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ2JyZWFrcG9pbnRzJykpIHtcbiAgICBvcHRpb25zLmJyZWFrcG9pbnRzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRzLmJyZWFrcG9pbnRzLCBzZXR0aW5ncy5icmVha3BvaW50cyk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxudmFyIEV2ZW50c0J1cyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50QnVzIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBFdmVudHNCdXMoKSB7XG4gICAgdmFyIGV2ZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRzQnVzKTtcblxuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuaG9wID0gZXZlbnRzLmhhc093blByb3BlcnR5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbGlzdGVuZXIgdG8gdGhlIHNwZWNpZmVkIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuXG4gIGNyZWF0ZUNsYXNzKEV2ZW50c0J1cywgW3tcbiAgICBrZXk6ICdvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMub24oZXZlbnRbaV0sIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZXZlbnQncyBvYmplY3QgaWYgbm90IHlldCBjcmVhdGVkXG4gICAgICBpZiAoIXRoaXMuaG9wLmNhbGwodGhpcy5ldmVudHMsIGV2ZW50KSkge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBoYW5kbGVyIHRvIHF1ZXVlXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChoYW5kbGVyKSAtIDE7XG5cbiAgICAgIC8vIFByb3ZpZGUgaGFuZGxlIGJhY2sgZm9yIHJlbW92YWwgb2YgZXZlbnRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF1baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgcmVnaXN0ZXJlZCBoYW5kbGVycyBmb3Igc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBjb250ZXh0XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2VtaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICBpZiAoaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuZW1pdChldmVudFtpXSwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgZXhpc3QsIG9yIHRoZXJlJ3Mgbm8gaGFuZGxlcnMgaW4gcXVldWUsIGp1c3QgbGVhdmVcbiAgICAgIGlmICghdGhpcy5ob3AuY2FsbCh0aGlzLmV2ZW50cywgZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3ljbGUgdGhyb3VnaCBldmVudHMgcXVldWUsIGZpcmUhXG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtKGNvbnRleHQgfHwge30pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudHNCdXM7XG59KCk7XG5cbnZhciBHbGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0IGdsaWRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzZWxlY3RvclxyXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xyXG4gICAqL1xuICBmdW5jdGlvbiBHbGlkZShzZWxlY3Rvcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBHbGlkZSk7XG5cbiAgICB0aGlzLl9jID0ge307XG4gICAgdGhpcy5fdCA9IFtdO1xuICAgIHRoaXMuX2UgPSBuZXcgRXZlbnRzQnVzKCk7XG5cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLnNldHRpbmdzLnN0YXJ0QXQ7XG4gIH1cblxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBnbGlkZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb25zIENvbGxlY3Rpb24gb2YgZXh0ZW5zaW9ucyB0byBpbml0aWFsaXplLlxyXG4gICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoR2xpZGUsIFt7XG4gICAga2V5OiAnbW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3VudCQkMSgpIHtcbiAgICAgIHZhciBleHRlbnNpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgdGhpcy5fZS5lbWl0KCdtb3VudC5iZWZvcmUnKTtcblxuICAgICAgaWYgKGlzT2JqZWN0KGV4dGVuc2lvbnMpKSB7XG4gICAgICAgIHRoaXMuX2MgPSBtb3VudCh0aGlzLCBleHRlbnNpb25zLCB0aGlzLl9lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBvYmplY3Qgb24gYG1vdW50KClgJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgnbW91bnQuYWZ0ZXInKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBhbiBpbnN0YW5jZSBgdHJhbnNsYXRlYCB0cmFuc2Zvcm1lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICB7QXJyYXl9IHRyYW5zZm9ybWVycyBDb2xsZWN0aW9uIG9mIHRyYW5zZm9ybWVycy5cclxuICAgICAqIEByZXR1cm4ge1ZvaWR9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbXV0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbXV0YXRlKCkge1xuICAgICAgdmFyIHRyYW5zZm9ybWVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgICAgIGlmIChpc0FycmF5KHRyYW5zZm9ybWVycykpIHtcbiAgICAgICAgdGhpcy5fdCA9IHRyYW5zZm9ybWVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oJ1lvdSBuZWVkIHRvIHByb3ZpZGUgYSBhcnJheSBvbiBgbXV0YXRlKClgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBnbGlkZSB3aXRoIHNwZWNpZmllZCBzZXR0aW5ncy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3NcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MgPSBtZXJnZU9wdGlvbnModGhpcy5zZXR0aW5ncywgc2V0dGluZ3MpO1xuXG4gICAgICBpZiAoc2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3N0YXJ0QXQnKSkge1xuICAgICAgICB0aGlzLmluZGV4ID0gc2V0dGluZ3Muc3RhcnRBdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZS5lbWl0KCd1cGRhdGUnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2Ugc2xpZGUgd2l0aCBzcGVjaWZpZWQgcGF0dGVybi4gQSBwYXR0ZXJuIG11c3QgYmUgaW4gdGhlIHNwZWNpYWwgZm9ybWF0OlxyXG4gICAgICogYD5gIC0gTW92ZSBvbmUgZm9yd2FyZFxyXG4gICAgICogYDxgIC0gTW92ZSBvbmUgYmFja3dhcmRcclxuICAgICAqIGA9e2l9YCAtIEdvIHRvIHtpfSB6ZXJvLWJhc2VkIHNsaWRlIChlcS4gJz0xJywgd2lsbCBnbyB0byBzZWNvbmQgc2xpZGUpXHJcbiAgICAgKiBgPj5gIC0gUmV3aW5kcyB0byBlbmQgKGxhc3Qgc2xpZGUpXHJcbiAgICAgKiBgPDxgIC0gUmV3aW5kcyB0byBzdGFydCAoZmlyc3Qgc2xpZGUpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm5cclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ28ocGF0dGVybikge1xuICAgICAgdGhpcy5fYy5SdW4ubWFrZShwYXR0ZXJuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIHRyYWNrIGJ5IHNwZWNpZmllZCBkaXN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlzdGFuY2VcclxuICAgICAqIEByZXR1cm4ge0dsaWRlfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlKGRpc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jLlRyYW5zaXRpb24uZGlzYWJsZSgpO1xuICAgICAgdGhpcy5fYy5Nb3ZlLm1ha2UoZGlzdGFuY2UpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgaW5zdGFuY2UgYW5kIHJldmVydCBhbGwgY2hhbmdlcyBkb25lIGJ5IHRoaXMuX2MuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl9lLmVtaXQoJ2Rlc3Ryb3knKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydCBpbnN0YW5jZSBhdXRvcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW58TnVtYmVyfSBpbnRlcnZhbCBSdW4gYXV0b3BsYXlpbmcgd2l0aCBwYXNzZWQgaW50ZXJ2YWwgcmVnYXJkbGVzcyBvZiBgYXV0b3BsYXlgIHNldHRpbmdzXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHZhciBpbnRlcnZhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmF1dG9wbGF5ID0gaW50ZXJ2YWw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2UuZW1pdCgncGxheScpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFN0b3AgaW5zdGFuY2UgYXV0b3BsYXlpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncGF1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuX2UuZW1pdCgncGF1c2UnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGdsaWRlIGludG8gYSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtHbGlkZX1cclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIFNldHMgZ2xpZGUgaW50byBhIGFjdGl2ZSBzdGF0dXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEFkZHMgY3V1dG9tIGV2ZW50IGxpc3RlbmVyIHdpdGggaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlclxyXG4gICAgICogQHJldHVybiB7R2xpZGV9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlcikge1xuICAgICAgdGhpcy5fZS5vbihldmVudCwgaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIGdsaWRlIGlzIGEgcHJlY2lzZWQgdHlwZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNUeXBlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNUeXBlKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnR5cGUgPT09IG5hbWU7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBjb3JlIG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldHRpbmdzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH1cblxuICAgIC8qKlxyXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgY29yZSBvcHRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge09iamVjdH0gb1xyXG4gICAgICogQHJldHVybiB7Vm9pZH1cclxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShvKSB7XG4gICAgICBpZiAoaXNPYmplY3QobykpIHtcbiAgICAgICAgdGhpcy5fbyA9IG87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdPcHRpb25zIG11c3QgYmUgYW4gYG9iamVjdGAgaW5zdGFuY2UuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGN1cnJlbnQgaW5kZXggb2YgdGhlIHNsaWRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaW5kZXgnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2k7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIGN1cnJlbnQgaW5kZXggYSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKGkpIHtcbiAgICAgIHRoaXMuX2kgPSB0b0ludChpKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdHlwZSBuYW1lIG9mIHRoZSBzbGlkZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiB7U3RyaW5nfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3R5cGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudHlwZTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGlkbGUgc3RhdHVzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Q7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBpZGxlIHN0YXR1cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHN0YXR1cykge1xuICAgICAgdGhpcy5fZCA9ICEhc3RhdHVzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gR2xpZGU7XG59KCk7XG5cbmZ1bmN0aW9uIFJ1biAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgUnVuID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGF1dG9ydW5uaW5nIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdGhpcy5fbyA9IGZhbHNlO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGdsaWRlcyBydW5uaW5nIGJhc2VkIG9uIHRoZSBwYXNzZWQgbW92aW5nIHNjaGVtYS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtb3ZlXG4gICAgICovXG4gICAgbWFrZTogZnVuY3Rpb24gbWFrZShtb3ZlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIEdsaWRlLmRpc2FibGUoKTtcblxuICAgICAgICB0aGlzLm1vdmUgPSBtb3ZlO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4uYmVmb3JlJywgdGhpcy5tb3ZlKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuXG4gICAgICAgIEV2ZW50cy5lbWl0KCdydW4nLCB0aGlzLm1vdmUpO1xuXG4gICAgICAgIENvbXBvbmVudHMuVHJhbnNpdGlvbi5hZnRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzLmlzT2Zmc2V0KCc8JykgfHwgX3RoaXMuaXNPZmZzZXQoJz4nKSkge1xuICAgICAgICAgICAgX3RoaXMuX28gPSBmYWxzZTtcblxuICAgICAgICAgICAgRXZlbnRzLmVtaXQoJ3J1bi5vZmZzZXQnLCBfdGhpcy5tb3ZlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBFdmVudHMuZW1pdCgncnVuLmFmdGVyJywgX3RoaXMubW92ZSk7XG5cbiAgICAgICAgICBHbGlkZS5lbmFibGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyBjdXJyZW50IGluZGV4IGJhc2VkIG9uIGRlZmluZWQgbW92ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2FsY3VsYXRlOiBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gICAgICB2YXIgbW92ZSA9IHRoaXMubW92ZSxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICAgIHZhciBzdGVwcyA9IG1vdmUuc3RlcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gbW92ZS5kaXJlY3Rpb247XG5cblxuICAgICAgdmFyIGNvdW50YWJsZVN0ZXBzID0gaXNOdW1iZXIodG9JbnQoc3RlcHMpKSAmJiB0b0ludChzdGVwcykgIT09IDA7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgIGlmIChzdGVwcyA9PT0gJz4nKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCA9IGxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbmQoKSkge1xuICAgICAgICAgICAgaWYgKCEoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiAhR2xpZGUuc2V0dGluZ3MucmV3aW5kKSkge1xuICAgICAgICAgICAgICB0aGlzLl9vID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBHbGlkZS5pbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uZW5kJywgbW92ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb3VudGFibGVTdGVwcykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggKz0gTWF0aC5taW4obGVuZ3RoIC0gR2xpZGUuaW5kZXgsIC10b0ludChzdGVwcykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBpZiAoc3RlcHMgPT09ICc8Jykge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXggPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0YXJ0KCkpIHtcbiAgICAgICAgICAgIGlmICghKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgIUdsaWRlLnNldHRpbmdzLnJld2luZCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgR2xpZGUuaW5kZXggPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEV2ZW50cy5lbWl0KCdydW4uc3RhcnQnLCBtb3ZlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50YWJsZVN0ZXBzKSB7XG4gICAgICAgICAgICBHbGlkZS5pbmRleCAtPSBNYXRoLm1pbihHbGlkZS5pbmRleCwgdG9JbnQoc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgR2xpZGUuaW5kZXgtLTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnPSc6XG4gICAgICAgICAgR2xpZGUuaW5kZXggPSBzdGVwcztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNTdGFydDogZnVuY3Rpb24gaXNTdGFydCgpIHtcbiAgICAgIHJldHVybiBHbGlkZS5pbmRleCA9PT0gMDtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VuZDogZnVuY3Rpb24gaXNFbmQoKSB7XG4gICAgICByZXR1cm4gR2xpZGUuaW5kZXggPT09IHRoaXMubGVuZ3RoO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB3ZSBhcmUgbWFraW5nIGEgb2Zmc2V0IHJ1bi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzT2Zmc2V0OiBmdW5jdGlvbiBpc09mZnNldChkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLl9vICYmIHRoaXMubW92ZS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFJ1biwgJ21vdmUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX207XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0aGUgbW92ZSBzY2hlbWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9tID0ge1xuICAgICAgICBkaXJlY3Rpb246IHZhbHVlLnN1YnN0cigwLCAxKSxcbiAgICAgICAgc3RlcHM6IHZhbHVlLnN1YnN0cigxKSA/IHZhbHVlLnN1YnN0cigxKSA6IDBcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoUnVuLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIHJ1bm5pbmcgZGlzdGFuY2UgYmFzZWRcbiAgICAgKiBvbiB6ZXJvLWluZGV4aW5nIG51bWJlciBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncztcbiAgICAgIHZhciBsZW5ndGggPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmxlbmd0aDtcblxuICAgICAgLy8gSWYgdGhlIGBib3VuZGAgb3B0aW9uIGlzIGFjaXR2ZSwgYSBtYXhpbXVtIHJ1bm5pbmcgZGlzdGFuY2Ugc2hvdWxkIGJlXG4gICAgICAvLyByZWR1Y2VkIGJ5IGBwZXJWaWV3YCBhbmQgYGZvY3VzQXRgIHNldHRpbmdzLiBSdW5uaW5nIGRpc3RhbmNlXG4gICAgICAvLyBzaG91bGQgZW5kIGJlZm9yZSBjcmVhdGluZyBhbiBlbXB0eSBzcGFjZSBhZnRlciBpbnN0YW5jZS5cblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnc2xpZGVyJykgJiYgc2V0dGluZ3MuZm9jdXNBdCAhPT0gJ2NlbnRlcicgJiYgc2V0dGluZ3MuYm91bmQpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAtIDEgLSAodG9JbnQoc2V0dGluZ3MucGVyVmlldykgLSAxKSArIHRvSW50KHNldHRpbmdzLmZvY3VzQXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGVuZ3RoIC0gMTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShSdW4sICdvZmZzZXQnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyBzdGF0dXMgb2YgdGhlIG9mZnNldHRpbmcgZmxhZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBSdW47XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJlbnQgdGltZS5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkXG4gKiBhdCBtb3N0IG9uY2UgZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmVcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgdGltZW91dCA9IHZvaWQgMCxcbiAgICAgIGNvbnRleHQgPSB2b2lkIDAsXG4gICAgICBhcmdzID0gdm9pZCAwLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogbm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICB2YXIgdGhyb3R0bGVkID0gZnVuY3Rpb24gdGhyb3R0bGVkKCkge1xuICAgIHZhciBhdCA9IG5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBhdDtcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChhdCAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBhdDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBwcmV2aW91cyA9IDA7XG4gICAgdGltZW91dCA9IGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG52YXIgTUFSR0lOX1RZUEUgPSB7XG4gIGx0cjogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gIHJ0bDogWydtYXJnaW5SaWdodCcsICdtYXJnaW5MZWZ0J11cbn07XG5cbmZ1bmN0aW9uIEdhcHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEdhcHMgPSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBnYXBzIGJldHdlZW4gc2xpZGVzLiBGaXJzdCBhbmQgbGFzdFxuICAgICAqIHNsaWRlcyBkbyBub3QgcmVjZWl2ZSBpdCdzIGVkZ2UgbWFyZ2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHNsaWRlcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgc3R5bGUgPSBzbGlkZXNbaV0uc3R5bGU7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBDb21wb25lbnRzLkRpcmVjdGlvbi52YWx1ZTtcblxuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gdGhpcy52YWx1ZSAvIDIgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlW01BUkdJTl9UWVBFW2RpcmVjdGlvbl1bMF1dID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaSAhPT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9IHRoaXMudmFsdWUgLyAyICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZVtNQVJHSU5fVFlQRVtkaXJlY3Rpb25dWzFdXSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBnYXBzIGZyb20gdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IHNsaWRlc1xuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoc2xpZGVzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHNsaWRlc1tpXS5zdHlsZTtcblxuICAgICAgICBzdHlsZS5tYXJnaW5MZWZ0ID0gJyc7XG4gICAgICAgIHN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShHYXBzLCAndmFsdWUnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiB0aGUgZ2FwLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0b0ludChHbGlkZS5zZXR0aW5ncy5nYXApO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEdhcHMsICdncm93Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYWRkaXRpb25hbCBkaW1lbnRpb25zIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gaW5jcmVhc2Ugd2lkdGggb2YgdGhlIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKENvbXBvbmVudHMuU2l6ZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoR2FwcywgJ3JlZHVjdG9yJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgcmVkdWN0aW9uIHZhbHVlIGNhdXNlZCBieSBnYXBzLlxuICAgICAqIFVzZWQgdG8gc3VidHJhY3Qgd2lkdGggb2YgdGhlIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcGVyVmlldyA9IEdsaWRlLnNldHRpbmdzLnBlclZpZXc7XG5cbiAgICAgIHJldHVybiBHYXBzLnZhbHVlICogKHBlclZpZXcgLSAxKSAvIHBlclZpZXc7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogQXBwbHkgY2FsY3VsYXRlZCBnYXBzOlxuICAgKiAtIGFmdGVyIGJ1aWxkaW5nLCBzbyBzbGlkZXMgKGluY2x1ZGluZyBjbG9uZXMpIHdpbGwgcmVjZWl2ZSBwcm9wZXIgbWFyZ2luc1xuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEksIHRvIHJlY2FsY3VsYXRlIGdhcHMgd2l0aCBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYWZ0ZXInLCAndXBkYXRlJ10sIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHYXBzLmFwcGx5KENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSwgMzApKTtcblxuICAvKipcbiAgICogUmVtb3ZlIGdhcHM6XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEdhcHMucmVtb3ZlKENvbXBvbmVudHMuSHRtbC53cmFwcGVyLmNoaWxkcmVuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIEdhcHM7XG59XG5cbi8qKlxuICogRmluZHMgc2libGluZ3Mgbm9kZXMgb2YgdGhlIHBhc3NlZCBub2RlLlxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiBzaWJsaW5ncyhub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHZhciBuID0gbm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIG1hdGNoZWQgPSBbXTtcblxuICAgIGZvciAoOyBuOyBuID0gbi5uZXh0U2libGluZykge1xuICAgICAgaWYgKG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gbm9kZSkge1xuICAgICAgICBtYXRjaGVkLnB1c2gobik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZWQ7XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhc3NlZCBub2RlIGV4aXN0IGFuZCBpcyBhIHZhbGlkIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gZXhpc3Qobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBUUkFDS19TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cInRyYWNrXCJdJztcblxuZnVuY3Rpb24gSHRtbCAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgdmFyIEh0bWwgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXAgc2xpZGVyIEhUTUwgbm9kZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0dsaWRlfSBnbGlkZVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMucm9vdCA9IEdsaWRlLnNlbGVjdG9yO1xuICAgICAgdGhpcy50cmFjayA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFRSQUNLX1NFTEVDVE9SKTtcbiAgICAgIHRoaXMuc2xpZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy53cmFwcGVyLmNoaWxkcmVuKS5maWx0ZXIoZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIHJldHVybiAhc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuY2xvbmVTbGlkZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEh0bWwsICdyb290Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgZ2xpZGUgbWFpbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3I7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSBtYWluIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocikge1xuICAgICAgaWYgKGlzU3RyaW5nKHIpKSB7XG4gICAgICAgIHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXhpc3QocikpIHtcbiAgICAgICAgSHRtbC5fciA9IHI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdSb290IGVsZW1lbnQgbXVzdCBiZSBhIGV4aXN0aW5nIEh0bWwgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd0cmFjaycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIG5vZGUgb2YgdGhlIGdsaWRlIHRyYWNrIHdpdGggc2xpZGVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEh0bWwuX3Q7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBub2RlIG9mIHRoZSBnbGlkZSB0cmFjayB3aXRoIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICBpZiAoZXhpc3QodCkpIHtcbiAgICAgICAgSHRtbC5fdCA9IHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdDb3VsZCBub3QgZmluZCB0cmFjayBlbGVtZW50LiBQbGVhc2UgdXNlICcgKyBUUkFDS19TRUxFQ1RPUiArICcgYXR0cmlidXRlLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKEh0bWwsICd3cmFwcGVyJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgbm9kZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gSHRtbC50cmFjay5jaGlsZHJlblswXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBIdG1sO1xufVxuXG5mdW5jdGlvbiBQZWVrIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBQZWVrID0ge1xuICAgIC8qKlxuICAgICAqIFNldHVwcyBob3cgbXVjaCB0byBwZWVrIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MucGVlaztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFBlZWssICd2YWx1ZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHJldHVybnMge051bWJlcnxPYmplY3R9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gUGVlay5fdjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHZhbHVlIG9mIHRoZSBwZWVrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuYmVmb3JlID0gdG9JbnQodmFsdWUuYmVmb3JlKTtcbiAgICAgICAgdmFsdWUuYWZ0ZXIgPSB0b0ludCh2YWx1ZS5hZnRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRvSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgUGVlay5fdiA9IHZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVmaW5lKFBlZWssICdyZWR1Y3RvcicsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHJlZHVjdGlvbiB2YWx1ZSBjYXVzZWQgYnkgcGVlay5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBQZWVrLnZhbHVlO1xuICAgICAgdmFyIHBlclZpZXcgPSBHbGlkZS5zZXR0aW5ncy5wZXJWaWV3O1xuXG4gICAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5iZWZvcmUgLyBwZXJWaWV3ICsgdmFsdWUuYWZ0ZXIgLyBwZXJWaWV3O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUgKiAyIC8gcGVyVmlldztcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZSBwZWVraW5nIHNpemVzIG9uOlxuICAgKiAtIHdoZW4gcmVzaXppbmcgd2luZG93IHRvIHVwZGF0ZSB0byBwcm9wZXIgcGVyY2VudHNcbiAgICovXG4gIEV2ZW50cy5vbihbJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFBlZWsubW91bnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFBlZWs7XG59XG5cbmZ1bmN0aW9uIE1vdmUgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIE1vdmUgPSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBtb3ZlIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuX28gPSAwO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgYSBtb3ZlbWVudCB2YWx1ZSBiYXNlZCBvbiBwYXNzZWQgb2Zmc2V0IGFuZCBjdXJyZW50bHkgYWN0aXZlIGluZGV4LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBvZmZzZXRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1ha2U6IGZ1bmN0aW9uIG1ha2UoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcblxuICAgICAgRXZlbnRzLmVtaXQoJ21vdmUnLCB7XG4gICAgICAgIG1vdmVtZW50OiB0aGlzLnZhbHVlXG4gICAgICB9KTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ21vdmUuYWZ0ZXInLCB7XG4gICAgICAgICAgbW92ZW1lbnQ6IF90aGlzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlZmluZShNb3ZlLCAnb2Zmc2V0Jywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gb2Zmc2V0IHZhbHVlIHVzZWQgdG8gbW9kaWZ5IGN1cnJlbnQgdHJhbnNsYXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE1vdmUuX287XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBvZmZzZXQgdmFsdWUgdXNlZCB0byBtb2RpZnkgY3VycmVudCB0cmFuc2xhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIE1vdmUuX28gPSAhaXNVbmRlZmluZWQodmFsdWUpID8gdG9JbnQodmFsdWUpIDogMDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShNb3ZlLCAndHJhbnNsYXRlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYSByYXcgbW92ZW1lbnQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoTW92ZSwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgYW4gYWN0dWFsIG1vdmVtZW50IHZhbHVlIGNvcnJlY3RlZCBieSBvZmZzZXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICB2YXIgdHJhbnNsYXRlID0gdGhpcy50cmFuc2xhdGU7XG5cbiAgICAgIGlmIChDb21wb25lbnRzLkRpcmVjdGlvbi5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIG9mZnNldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIG9mZnNldDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBNYWtlIG1vdmVtZW50IHRvIHByb3BlciBzbGlkZSBvbjpcbiAgICogLSBiZWZvcmUgYnVpbGQsIHNvIGdsaWRlIHdpbGwgc3RhcnQgYXQgYHN0YXJ0QXRgIGluZGV4XG4gICAqIC0gb24gZWFjaCBzdGFuZGFyZCBydW4gdG8gbW92ZSB0byBuZXdseSBjYWxjdWxhdGVkIGluZGV4XG4gICAqL1xuICBFdmVudHMub24oWydidWlsZC5iZWZvcmUnLCAncnVuJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBNb3ZlLm1ha2UoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIE1vdmU7XG59XG5cbmZ1bmN0aW9uIFNpemVzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIHZhciBTaXplcyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZGltZW50aW9ucyBvZiBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldHVwU2xpZGVzOiBmdW5jdGlvbiBzZXR1cFNsaWRlcygpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSB0aGlzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHVwcyBkaW1lbnRpb25zIG9mIHNsaWRlcyB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzZXR1cFdyYXBwZXI6IGZ1bmN0aW9uIHNldHVwV3JhcHBlcihkaW1lbnRpb24pIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLndpZHRoID0gdGhpcy53cmFwcGVyU2l6ZSArICdweCc7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhcHBsaWVkIHN0eWxlcyBmcm9tIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH1cblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUud2lkdGggPSAnJztcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKFNpemVzLCAnbGVuZ3RoJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY291bnQgbnVtYmVyIG9mIHRoZSBzbGlkZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50cy5IdG1sLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICB9KTtcblxuICBkZWZpbmUoU2l6ZXMsICd3aWR0aCcsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHdpZHRoIHZhbHVlIG9mIHRoZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRzLkh0bWwucm9vdC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3dyYXBwZXJTaXplJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgc2l6ZSBvZiB0aGUgc2xpZGVzIHdyYXBwZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gU2l6ZXMuc2xpZGVXaWR0aCAqIFNpemVzLmxlbmd0aCArIENvbXBvbmVudHMuR2Fwcy5ncm93ICsgQ29tcG9uZW50cy5DbG9uZXMuZ3JvdztcbiAgICB9XG4gIH0pO1xuXG4gIGRlZmluZShTaXplcywgJ3NsaWRlV2lkdGgnLCB7XG4gICAgLyoqXG4gICAgICogR2V0cyB3aWR0aCB2YWx1ZSBvZiB0aGUgc2luZ2xlIHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFNpemVzLndpZHRoIC8gR2xpZGUuc2V0dGluZ3MucGVyVmlldyAtIENvbXBvbmVudHMuUGVlay5yZWR1Y3RvciAtIENvbXBvbmVudHMuR2Fwcy5yZWR1Y3RvcjtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBjYWxjdWxhdGVkIGdsaWRlJ3MgZGltZW5zaW9uczpcbiAgICogLSBiZWZvcmUgYnVpbGRpbmcsIHNvIG90aGVyIGRpbWVudGlvbnMgKGUuZy4gdHJhbnNsYXRlKSB3aWxsIGJlIGNhbGN1bGF0ZWQgcHJvcGVydGx5XG4gICAqIC0gd2hlbiByZXNpemluZyB3aW5kb3cgdG8gcmVjYWxjdWxhdGUgc2lsZGVzIGRpbWVuc2lvbnNcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJLCB0byBjYWxjdWxhdGUgZGltZW5zaW9ucyBiYXNlZCBvbiBuZXcgb3B0aW9uc1xuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIFNpemVzLnNldHVwU2xpZGVzKCk7XG4gICAgU2l6ZXMuc2V0dXBXcmFwcGVyKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FsY3VsYXRlZCBnbGlkZSdzIGRpbWVuc2lvbnM6XG4gICAqIC0gb24gZGVzdG90aW5nIHRvIGJyaW5nIG1hcmt1cCB0byBpdHMgaW5pdGFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgU2l6ZXMucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBTaXplcztcbn1cblxuZnVuY3Rpb24gQnVpbGQgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIEJ1aWxkID0ge1xuICAgIC8qKlxuICAgICAqIEluaXQgZ2xpZGUgYnVpbGRpbmcuIEFkZHMgY2xhc3Nlcywgc2V0c1xuICAgICAqIGRpbWVuc2lvbnMgYW5kIHNldHVwcyBpbml0aWFsIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICBFdmVudHMuZW1pdCgnYnVpbGQuYmVmb3JlJyk7XG5cbiAgICAgIHRoaXMudHlwZUNsYXNzKCk7XG4gICAgICB0aGlzLmFjdGl2ZUNsYXNzKCk7XG5cbiAgICAgIEV2ZW50cy5lbWl0KCdidWlsZC5hZnRlcicpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYHR5cGVgIGNsYXNzIHRvIHRoZSBnbGlkZSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB0eXBlQ2xhc3M6IGZ1bmN0aW9uIHR5cGVDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlc1tHbGlkZS5zZXR0aW5ncy50eXBlXSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWN0aXZlQ2xhc3M6IGZ1bmN0aW9uIGFjdGl2ZUNsYXNzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuICAgICAgdmFyIHNsaWRlID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGlmIChzbGlkZSkge1xuICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuXG4gICAgICAgIHNpYmxpbmdzKHNsaWRlKS5mb3JFYWNoKGZ1bmN0aW9uIChzaWJsaW5nKSB7XG4gICAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIEhUTUwgY2xhc3NlcyBhcHBsaWVkIGF0IGJ1aWxkaW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzc2VzOiBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBHbGlkZS5zZXR0aW5ncy5jbGFzc2VzO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbR2xpZGUuc2V0dGluZ3MudHlwZV0pO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwuc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXMuYWN0aXZlU2xpZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhciBidWlsZGluZyBjbGFzc2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBjbGFzc2VzIGJlZm9yZSByZW1vdW50aW5nIGNvbXBvbmVudFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEJ1aWxkLnJlbW92ZUNsYXNzZXMoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50OlxuICAgKiAtIG9uIHJlc2l6aW5nIG9mIHRoZSB3aW5kb3cgdG8gY2FsY3VsYXRlIG5ldyBkaW1lbnRpb25zXG4gICAqIC0gb24gdXBkYXRpbmcgc2V0dGluZ3MgdmlhIEFQSVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncmVzaXplJywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQnVpbGQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgc2xpZGU6XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZS5hZnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBCdWlsZC5hY3RpdmVDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gQnVpbGQ7XG59XG5cbmZ1bmN0aW9uIENsb25lcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgQ2xvbmVzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBwYXR0ZXJuIG1hcCBhbmQgY29sbGVjdCBzbGlkZXMgdG8gYmUgY2xvbmVkLlxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcblxuICAgICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSkge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5jb2xsZWN0KCk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdCBjbG9uZXMgd2l0aCBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjb2xsZWN0OiBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgICAgdmFyIGl0ZW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICAgIHZhciBzbGlkZXMgPSBDb21wb25lbnRzLkh0bWwuc2xpZGVzO1xuICAgICAgdmFyIF9HbGlkZSRzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzLFxuICAgICAgICAgIHBlclZpZXcgPSBfR2xpZGUkc2V0dGluZ3MucGVyVmlldyxcbiAgICAgICAgICBjbGFzc2VzID0gX0dsaWRlJHNldHRpbmdzLmNsYXNzZXM7XG5cblxuICAgICAgdmFyIHBlZWtJbmNyZW1lbnRlciA9ICshIUdsaWRlLnNldHRpbmdzLnBlZWs7XG4gICAgICB2YXIgcGFydCA9IHBlclZpZXcgKyBwZWVrSW5jcmVtZW50ZXI7XG4gICAgICB2YXIgc3RhcnQgPSBzbGlkZXMuc2xpY2UoMCwgcGFydCk7XG4gICAgICB2YXIgZW5kID0gc2xpZGVzLnNsaWNlKC1wYXJ0KTtcblxuICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHBlclZpZXcgLyBzbGlkZXMubGVuZ3RoKSk7IHIrKykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNsb25lID0gc3RhcnRbaV0uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgICAgY2xvbmUuY2xhc3NMaXN0LmFkZChjbGFzc2VzLmNsb25lU2xpZGUpO1xuXG4gICAgICAgICAgaXRlbXMucHVzaChjbG9uZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZW5kLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIHZhciBfY2xvbmUgPSBlbmRbX2ldLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICAgIF9jbG9uZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuY2xvbmVTbGlkZSk7XG5cbiAgICAgICAgICBpdGVtcy51bnNoaWZ0KF9jbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBjbG9uZWQgc2xpZGVzIHdpdGggZ2VuZXJhdGVkIHBhdHRlcm4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFwcGVuZDogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIGl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgIHZhciBfQ29tcG9uZW50cyRIdG1sID0gQ29tcG9uZW50cy5IdG1sLFxuICAgICAgICAgIHdyYXBwZXIgPSBfQ29tcG9uZW50cyRIdG1sLndyYXBwZXIsXG4gICAgICAgICAgc2xpZGVzID0gX0NvbXBvbmVudHMkSHRtbC5zbGlkZXM7XG5cblxuICAgICAgdmFyIGhhbGYgPSBNYXRoLmZsb29yKGl0ZW1zLmxlbmd0aCAvIDIpO1xuICAgICAgdmFyIHByZXBlbmQgPSBpdGVtcy5zbGljZSgwLCBoYWxmKS5yZXZlcnNlKCk7XG4gICAgICB2YXIgYXBwZW5kID0gaXRlbXMuc2xpY2UoaGFsZiwgaXRlbXMubGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcHBlbmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcHBlbmRbaV0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBwcmVwZW5kLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUocHJlcGVuZFtfaTJdLCBzbGlkZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaTMgPSAwOyBfaTMgPCBpdGVtcy5sZW5ndGg7IF9pMysrKSB7XG4gICAgICAgIGl0ZW1zW19pM10uc3R5bGUud2lkdGggPSBDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyAncHgnO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgY2xvbmVkIHNsaWRlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIucmVtb3ZlQ2hpbGQoaXRlbXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ2xvbmVzLCAnZ3JvdycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGFkZGl0aW9uYWwgZGltZW50aW9ucyB2YWx1ZSBjYXVzZWQgYnkgY2xvbmVzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIChDb21wb25lbnRzLlNpemVzLnNsaWRlV2lkdGggKyBDb21wb25lbnRzLkdhcHMudmFsdWUpICogQ2xvbmVzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBzbGlkZSdzIGNsb25lczpcbiAgICogLSB3aGlsZSBnbGlkZSdzIHR5cGUgaXMgYGNhcm91c2VsYFxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgQ2xvbmVzLnJlbW92ZSgpO1xuICAgIENsb25lcy5tb3VudCgpO1xuICAgIENsb25lcy5hcHBlbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhZGRpdGlvbmFsIHNsaWRlJ3MgY2xvbmVzOlxuICAgKiAtIHdoaWxlIGdsaWRlJ3MgdHlwZSBpcyBgY2Fyb3VzZWxgXG4gICAqL1xuICBFdmVudHMub24oJ2J1aWxkLmJlZm9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoR2xpZGUuaXNUeXBlKCdjYXJvdXNlbCcpKSB7XG4gICAgICBDbG9uZXMuYXBwZW5kKCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGNsb25lcyBIVE1MRWxlbWVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgSFRNTCB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIENsb25lcy5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIENsb25lcztcbn1cblxudmFyIEV2ZW50c0JpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIEV2ZW50c0JpbmRlciBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIEV2ZW50c0JpbmRlcigpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudHNCaW5kZXIpO1xuXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudHMgbGlzdGVuZXJzIHRvIGFycm93cyBIVE1MIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd8QXJyYXl9IGV2ZW50c1xuICAgKiBAcGFyYW0gIHtFbGVtZW50fFdpbmRvd3xEb2N1bWVudH0gZWxcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNsb3N1cmVcbiAgICogQHBhcmFtICB7Qm9vbGVhbnxPYmplY3R9IGNhcHR1cmVcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhFdmVudHNCaW5kZXIsIFt7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudHMsIGVsLCBjbG9zdXJlKSB7XG4gICAgICB2YXIgY2FwdHVyZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogZmFsc2U7XG5cbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudHNbaV1dID0gY2xvc3VyZTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBldmVudCBsaXN0ZW5lcnMgZnJvbSBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ3xBcnJheX0gZXZlbnRzXG4gICAgICogQHBhcmFtICB7RWxlbWVudHxXaW5kb3d8RG9jdW1lbnR9IGVsXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb2ZmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50cywgZWwpIHtcbiAgICAgIGlmIChpc1N0cmluZyhldmVudHMpKSB7XG4gICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgdGhpcy5saXN0ZW5lcnNbZXZlbnRzW2ldXSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29sbGVjdGVkIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEV2ZW50c0JpbmRlcjtcbn0oKTtcblxuZnVuY3Rpb24gUmVzaXplIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgUmVzaXplID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHdpbmRvdyBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgcmV6c2l6ZWAgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdy5cbiAgICAgKiBJdCdzIGEgY29zdGx5IGV2ZW50LCBzbyB3ZSBhcmUgZGVib3VuY2luZyBpdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIEJpbmRlci5vbigncmVzaXplJywgd2luZG93LCB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV2ZW50cy5lbWl0KCdyZXNpemUnKTtcbiAgICAgIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVW5iaW5kcyBsaXN0ZW5lcnMgZnJvbSB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ3Jlc2l6ZScsIHdpbmRvdyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgYmluZGluZ3MgZnJvbSB3aW5kb3c6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gcmVtb3ZlIGFkZGVkIEV2ZW50TGlzdGVuZXJcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBSZXNpemUudW5iaW5kKCk7XG4gICAgQmluZGVyLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFJlc2l6ZTtcbn1cblxudmFyIFZBTElEX0RJUkVDVElPTlMgPSBbJ2x0cicsICdydGwnXTtcbnZhciBGTElQRURfTU9WRU1FTlRTID0ge1xuICAnPic6ICc8JyxcbiAgJzwnOiAnPicsXG4gICc9JzogJz0nXG59O1xuXG5mdW5jdGlvbiBEaXJlY3Rpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICAvKipcbiAgICAgKiBTZXR1cHMgZ2FwIHZhbHVlIGJhc2VkIG9uIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gR2xpZGUuc2V0dGluZ3MuZGlyZWN0aW9uO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHBhdHRlcm4gYmFzZWQgb24gZGlyZWN0aW9uIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0dGVyblxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZShwYXR0ZXJuKSB7XG4gICAgICB2YXIgdG9rZW4gPSBwYXR0ZXJuLnNsaWNlKDAsIDEpO1xuXG4gICAgICBpZiAodGhpcy5pcygncnRsJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQodG9rZW4pLmpvaW4oRkxJUEVEX01PVkVNRU5UU1t0b2tlbl0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdmFsdWUgb2YgZGlyZWN0aW9uIG1vZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXM6IGZ1bmN0aW9uIGlzKGRpcmVjdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IGRpcmVjdGlvbjtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGRpcmVjdGlvbiBjbGFzcyB0byB0aGUgcm9vdCBIVE1MIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC5yb290LmNsYXNzTGlzdC5hZGQoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5kaXJlY3Rpb25bdGhpcy52YWx1ZV0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGlyZWN0aW9uIGNsYXNzIGZyb20gdGhlIHJvb3QgSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QucmVtb3ZlKEdsaWRlLnNldHRpbmdzLmNsYXNzZXMuZGlyZWN0aW9uW3RoaXMudmFsdWVdKTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKERpcmVjdGlvbiwgJ3ZhbHVlJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gRGlyZWN0aW9uLl92O1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdGhlIGRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChWQUxJRF9ESVJFQ1RJT05TLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgRGlyZWN0aW9uLl92ID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKCdEaXJlY3Rpb24gdmFsdWUgbXVzdCBiZSBgbHRyYCBvciBgcnRsYCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIENsZWFyIGRpcmVjdGlvbiBjbGFzczpcbiAgICogLSBvbiBkZXN0cm95IHRvIGJyaW5nIEhUTUwgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVtb3ZlIGNsYXNzIGJlZm9yZSByZWFwcGxpbmcgYmVsbG93XG4gICAqL1xuICBFdmVudHMub24oWydkZXN0cm95JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLnJlbW92ZUNsYXNzKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdW50IGNvbXBvbmVudDpcbiAgICogLSBvbiB1cGRhdGUgdG8gcmVmbGVjdCBjaGFuZ2VzIGluIGRpcmVjdGlvbiB2YWx1ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgRGlyZWN0aW9uLm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBcHBseSBkaXJlY3Rpb24gY2xhc3M6XG4gICAqIC0gYmVmb3JlIGJ1aWxkaW5nIHRvIGFwcGx5IGNsYXNzIGZvciB0aGUgZmlyc3QgdGltZVxuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlYXBwbHkgZGlyZWN0aW9uIGNsYXNzIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbihbJ2J1aWxkLmJlZm9yZScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIERpcmVjdGlvbi5hZGRDbGFzcygpO1xuICB9KTtcblxuICByZXR1cm4gRGlyZWN0aW9uO1xufVxuXG4vKipcbiAqIFJlZmxlY3RzIHZhbHVlIG9mIGdsaWRlIG1vdmVtZW50LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gR2xpZGVcbiAqIEBwYXJhbSAge09iamVjdH0gQ29tcG9uZW50c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBSdGwgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTmVnYXRlcyB0aGUgcGFzc2VkIHRyYW5zbGF0ZSBpZiBnbGlkZSBpcyBpbiBSVEwgb3B0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgIHJldHVybiAtdHJhbnNsYXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgZ2FwYCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR2FwIChHbGlkZSwgQ29tcG9uZW50cykge1xuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIHBhc3NlZCB0cmFuc2xhdGUgdmFsdWUgd2l0aCBudW1iZXIgaW4gdGhlIGBnYXBgIHNldHRpbmdzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbW9kaWZ5OiBmdW5jdGlvbiBtb2RpZnkodHJhbnNsYXRlKSB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlICsgQ29tcG9uZW50cy5HYXBzLnZhbHVlICogR2xpZGUuaW5kZXg7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCB3aWR0aCBvZiBhZGRpdGlvbmFsIGNsb25lcyB3aWR0aC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gR3JvdyAoR2xpZGUsIENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRvIHRoZSBwYXNzZWQgdHJhbnNsYXRlIHdpZHRoIG9mIHRoZSBoYWxmIG9mIGNsb25lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgcmV0dXJuIHRyYW5zbGF0ZSArIENvbXBvbmVudHMuQ2xvbmVzLmdyb3cgLyAyO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGdsaWRlIG1vdmVtZW50IHdpdGggYSBgcGVla2Agc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIFBlZWtpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGEgYHBlZWtgIHNldHRpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBtb2RpZnk6IGZ1bmN0aW9uIG1vZGlmeSh0cmFuc2xhdGUpIHtcbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5mb2N1c0F0ID49IDApIHtcbiAgICAgICAgdmFyIHBlZWsgPSBDb21wb25lbnRzLlBlZWsudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KHBlZWspKSB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWsuYmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZSAtIHBlZWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgZ2xpZGUgbW92ZW1lbnQgd2l0aCBhIGBmb2N1c0F0YCBzZXR0aW5ncy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IEdsaWRlXG4gKiBAcGFyYW0gIHtPYmplY3R9IENvbXBvbmVudHNcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gRm9jdXNpbmcgKEdsaWRlLCBDb21wb25lbnRzKSB7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgcGFzc2VkIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIGluZGV4IGluIHRoZSBgZm9jdXNBdGAgc2V0dGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gdHJhbnNsYXRlXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIG1vZGlmeTogZnVuY3Rpb24gbW9kaWZ5KHRyYW5zbGF0ZSkge1xuICAgICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICAgIHZhciB3aWR0aCA9IENvbXBvbmVudHMuU2l6ZXMud2lkdGg7XG4gICAgICB2YXIgZm9jdXNBdCA9IEdsaWRlLnNldHRpbmdzLmZvY3VzQXQ7XG4gICAgICB2YXIgc2xpZGVXaWR0aCA9IENvbXBvbmVudHMuU2l6ZXMuc2xpZGVXaWR0aDtcblxuICAgICAgaWYgKGZvY3VzQXQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGUgLSAod2lkdGggLyAyIC0gc2xpZGVXaWR0aCAvIDIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRlIC0gc2xpZGVXaWR0aCAqIGZvY3VzQXQgLSBnYXAgKiBmb2N1c0F0O1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGRpZmZyZW50IHRyYW5zZm9ybWVycyBvbiB0cmFuc2xhdGUgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBHbGlkZVxuICogQHBhcmFtICB7T2JqZWN0fSBDb21wb25lbnRzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG11dGF0b3IgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIE1lcmdlIGluc3RhbmNlIHRyYW5zZm9ybWVycyB3aXRoIGNvbGxlY3Rpb24gb2YgZGVmYXVsdCB0cmFuc2Zvcm1lcnMuXG4gICAqIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIFJ0bCBjb21wb25lbnQgYmUgbGFzdCBvbiB0aGUgbGlzdCxcbiAgICogc28gaXQgcmVmbGVjdHMgYWxsIHByZXZpb3VzIHRyYW5zZm9ybWF0aW9ucy5cbiAgICpcbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIFRSQU5TRk9STUVSUyA9IFtHYXAsIEdyb3csIFBlZWtpbmcsIEZvY3VzaW5nXS5jb25jYXQoR2xpZGUuX3QsIFtSdGxdKTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFBpcGxpbmVzIHRyYW5zbGF0ZSB2YWx1ZSB3aXRoIHJlZ2lzdGVyZWQgdHJhbnNmb3JtZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB0cmFuc2xhdGVcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgbXV0YXRlOiBmdW5jdGlvbiBtdXRhdGUodHJhbnNsYXRlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRSQU5TRk9STUVSUy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHJhbnNmb3JtZXIgPSBUUkFOU0ZPUk1FUlNbaV07XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odHJhbnNmb3JtZXIpICYmIGlzRnVuY3Rpb24odHJhbnNmb3JtZXIoKS5tb2RpZnkpKSB7XG4gICAgICAgICAgdHJhbnNsYXRlID0gdHJhbnNmb3JtZXIoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykubW9kaWZ5KHRyYW5zbGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FybignVHJhbnNmb3JtZXIgc2hvdWxkIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGBtb2RpZnkoKWAgbWV0aG9kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zbGF0ZSAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICB2YXIgVHJhbnNsYXRlID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdmFsdWUgb2YgdHJhbnNsYXRlIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBtdXRhdG9yKEdsaWRlLCBDb21wb25lbnRzKS5tdXRhdGUodmFsdWUpO1xuXG4gICAgICBDb21wb25lbnRzLkh0bWwud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIC0xICogdHJhbnNmb3JtICsgJ3B4LCAwcHgsIDBweCknO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdmFsdWUgb2YgdHJhbnNsYXRlIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IG5ldyB0cmFuc2xhdGUgdmFsdWU6XG4gICAqIC0gb24gbW92ZSB0byByZWZsZWN0IGluZGV4IGNoYW5nZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVmbGVjdCBwb3NzaWJsZSBjaGFuZ2VzIGluIG9wdGlvbnNcbiAgICovXG4gIEV2ZW50cy5vbignbW92ZScsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgdmFyIGdhcCA9IENvbXBvbmVudHMuR2Fwcy52YWx1ZTtcbiAgICB2YXIgbGVuZ3RoID0gQ29tcG9uZW50cy5TaXplcy5sZW5ndGg7XG4gICAgdmFyIHdpZHRoID0gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoO1xuXG4gICAgaWYgKEdsaWRlLmlzVHlwZSgnY2Fyb3VzZWwnKSAmJiBDb21wb25lbnRzLlJ1bi5pc09mZnNldCgnPCcpKSB7XG4gICAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBFdmVudHMuZW1pdCgndHJhbnNsYXRlLmp1bXAnKTtcblxuICAgICAgICBUcmFuc2xhdGUuc2V0KHdpZHRoICogKGxlbmd0aCAtIDEpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCgtd2lkdGggLSBnYXAgKiBsZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChHbGlkZS5pc1R5cGUoJ2Nhcm91c2VsJykgJiYgQ29tcG9uZW50cy5SdW4uaXNPZmZzZXQoJz4nKSkge1xuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmFmdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRXZlbnRzLmVtaXQoJ3RyYW5zbGF0ZS5qdW1wJyk7XG5cbiAgICAgICAgVHJhbnNsYXRlLnNldCgwKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gVHJhbnNsYXRlLnNldCh3aWR0aCAqIGxlbmd0aCArIGdhcCAqIGxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRyYW5zbGF0ZS5zZXQoY29udGV4dC5tb3ZlbWVudCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdHJhbnNsYXRlOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0YWwgc3RhdGVcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2xhdGUucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2xhdGU7XG59XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24gKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEhvbGRzIGluYWN0aXZpdHkgc3RhdHVzIG9mIHRyYW5zaXRpb24uXG4gICAqIFdoZW4gdHJ1ZSB0cmFuc2l0aW9uIGlzIG5vdCBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHZhciBUcmFuc2l0aW9uID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHN0cmluZyBvZiB0aGUgQ1NTIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAgICovXG4gICAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZShwcm9wZXJ0eSkge1xuICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAnICsgdGhpcy5kdXJhdGlvbiArICdtcyAnICsgc2V0dGluZ3MuYW5pbWF0aW9uVGltaW5nRnVuYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgJyAwbXMgJyArIHNldHRpbmdzLmFuaW1hdGlvblRpbWluZ0Z1bmM7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyB2YWx1ZSBvZiB0cmFuc2l0aW9uIG9uIEhUTUwgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nPX0gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgdmFyIHByb3BlcnR5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHJhbnNmb3JtJztcblxuICAgICAgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuY29tcG9zZShwcm9wZXJ0eSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB2YWx1ZSBvZiB0cmFuc2l0aW9uIGZyb20gSFRNTCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGNhbGxiYWNrIGFmdGVyIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKGNhbGxiYWNrKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBlbmFibGU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLnNldCgpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoVHJhbnNpdGlvbiwgJ2R1cmF0aW9uJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYmFzZWRcbiAgICAgKiBvbiBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb24gdHlwZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoR2xpZGUuaXNUeXBlKCdzbGlkZXInKSAmJiBDb21wb25lbnRzLlJ1bi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHNldHRpbmdzLnJld2luZER1cmF0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYW5pbWF0aW9uRHVyYXRpb247XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogU2V0IHRyYW5zaXRpb24gYHN0eWxlYCB2YWx1ZTpcbiAgICogLSBvbiBlYWNoIG1vdmluZywgYmVjYXVzZSBpdCBtYXkgYmUgY2xlYXJlZCBieSBvZmZzZXQgbW92ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24uc2V0KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRyYW5zaXRpb246XG4gICAqIC0gYmVmb3JlIGluaXRpYWwgYnVpbGQgdG8gYXZvaWQgdHJhbnNpdGlvbmluZyBmcm9tIGAwYCB0byBgc3RhcnRBdGAgaW5kZXhcbiAgICogLSB3aGlsZSByZXNpemluZyB3aW5kb3cgYW5kIHJlY2FsY3VsYXRpbmcgZGltZW50aW9uc1xuICAgKiAtIG9uIGp1bXBpbmcgZnJvbSBvZmZzZXQgdHJhbnNpdGlvbiBhdCBzdGFydCBhbmQgZW5kIGVkZ2VzIGluIGBjYXJvdXNlbGAgdHlwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsnYnVpbGQuYmVmb3JlJywgJ3Jlc2l6ZScsICd0cmFuc2xhdGUuanVtcCddLCBmdW5jdGlvbiAoKSB7XG4gICAgVHJhbnNpdGlvbi5kaXNhYmxlKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgdHJhbnNpdGlvbjpcbiAgICogLSBvbiBlYWNoIHJ1bm5pbmcsIGJlY2F1c2UgaXQgbWF5IGJlIGRpc2FibGVkIGJ5IG9mZnNldCBtb3ZlXG4gICAqL1xuICBFdmVudHMub24oJ3J1bicsIGZ1bmN0aW9uICgpIHtcbiAgICBUcmFuc2l0aW9uLmVuYWJsZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRyYW5zaXRpb246XG4gICAqIC0gb24gZGVzdHJveWluZyB0byBicmluZyBtYXJrdXAgdG8gaXRzIGluaXRhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIFRyYW5zaXRpb24ucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufVxuXG4vKipcbiAqIFRlc3QgdmlhIGEgZ2V0dGVyIGluIHRoZSBvcHRpb25zIG9iamVjdCB0byBzZWVcbiAqIGlmIHRoZSBwYXNzaXZlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbiAqL1xuXG52YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBvcHRzKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlJywgbnVsbCwgb3B0cyk7XG59IGNhdGNoIChlKSB7fVxuXG52YXIgc3VwcG9ydHNQYXNzaXZlJDEgPSBzdXBwb3J0c1Bhc3NpdmU7XG5cbnZhciBTVEFSVF9FVkVOVFMgPSBbJ3RvdWNoc3RhcnQnLCAnbW91c2Vkb3duJ107XG52YXIgTU9WRV9FVkVOVFMgPSBbJ3RvdWNobW92ZScsICdtb3VzZW1vdmUnXTtcbnZhciBFTkRfRVZFTlRTID0gWyd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICdtb3VzZXVwJywgJ21vdXNlbGVhdmUnXTtcbnZhciBNT1VTRV9FVkVOVFMgPSBbJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2V1cCcsICdtb3VzZWxlYXZlJ107XG5cbmZ1bmN0aW9uIFN3aXBlIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgc3dpcGVTaW4gPSAwO1xuICB2YXIgc3dpcGVTdGFydFggPSAwO1xuICB2YXIgc3dpcGVTdGFydFkgPSAwO1xuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmFyIG1vdmVhYmxlID0gdHJ1ZTtcbiAgdmFyIGNhcHR1cmUgPSBzdXBwb3J0c1Bhc3NpdmUkMSA/IHsgcGFzc2l2ZTogdHJ1ZSB9IDogZmFsc2U7XG5cbiAgdmFyIFN3aXBlID0ge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHN3aXBlIGJpbmRpbmdzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlc3RhcnRgIGV2ZW50LiBDYWxjdWxhdGVzIGVudHJ5IHBvaW50cyBvZiB0aGUgdXNlcidzIHRhcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gICAgICBpZiAoIWRpc2FibGVkICYmICFHbGlkZS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgICB2YXIgc3dpcGUgPSB0aGlzLnRvdWNoZXMoZXZlbnQpO1xuXG4gICAgICAgIG1vdmVhYmxlID0gdHJ1ZTtcbiAgICAgICAgc3dpcGVTaW4gPSBudWxsO1xuICAgICAgICBzd2lwZVN0YXJ0WCA9IHRvSW50KHN3aXBlLnBhZ2VYKTtcbiAgICAgICAgc3dpcGVTdGFydFkgPSB0b0ludChzd2lwZS5wYWdlWSk7XG5cbiAgICAgICAgdGhpcy5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgICAgIHRoaXMuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLnN0YXJ0Jyk7XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlbW92ZWAgZXZlbnQuIENhbGN1bGF0ZXMgdXNlcidzIHRhcCBhbmdsZSBhbmQgZGlzdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBtb3ZlOiBmdW5jdGlvbiBtb3ZlKGV2ZW50KSB7XG4gICAgICBpZiAoIUdsaWRlLmRpc2FibGVkKSB7XG4gICAgICAgIHZhciBfR2xpZGUkc2V0dGluZ3MgPSBHbGlkZS5zZXR0aW5ncyxcbiAgICAgICAgICAgIHRvdWNoQW5nbGUgPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hBbmdsZSxcbiAgICAgICAgICAgIHRvdWNoUmF0aW8gPSBfR2xpZGUkc2V0dGluZ3MudG91Y2hSYXRpbyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfR2xpZGUkc2V0dGluZ3MuY2xhc3NlcztcblxuXG4gICAgICAgIHZhciBzd2lwZSA9IHRoaXMudG91Y2hlcyhldmVudCk7XG5cbiAgICAgICAgdmFyIHN1YkV4U3ggPSB0b0ludChzd2lwZS5wYWdlWCkgLSBzd2lwZVN0YXJ0WDtcbiAgICAgICAgdmFyIHN1YkV5U3kgPSB0b0ludChzd2lwZS5wYWdlWSkgLSBzd2lwZVN0YXJ0WTtcbiAgICAgICAgdmFyIHBvd0VYID0gTWF0aC5hYnMoc3ViRXhTeCA8PCAyKTtcbiAgICAgICAgdmFyIHBvd0VZID0gTWF0aC5hYnMoc3ViRXlTeSA8PCAyKTtcbiAgICAgICAgdmFyIHN3aXBlSHlwb3RlbnVzZSA9IE1hdGguc3FydChwb3dFWCArIHBvd0VZKTtcbiAgICAgICAgdmFyIHN3aXBlQ2F0aGV0dXMgPSBNYXRoLnNxcnQocG93RVkpO1xuXG4gICAgICAgIHN3aXBlU2luID0gTWF0aC5hc2luKHN3aXBlQ2F0aGV0dXMgLyBzd2lwZUh5cG90ZW51c2UpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSAmJiBzd2lwZVNpbiAqIDE4MCAvIE1hdGguUEkgPCB0b3VjaEFuZ2xlKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLk1vdmUubWFrZShzdWJFeFN4ICogdG9GbG9hdCh0b3VjaFJhdGlvKSk7XG5cbiAgICAgICAgICBDb21wb25lbnRzLkh0bWwucm9vdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMuZHJhZ2dpbmcpO1xuXG4gICAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLm1vdmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb3ZlYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgYHN3aXBlZW5kYCBldmVudC4gRmluaXRpYWxpemVzIHVzZXIncyB0YXAgYW5kIGRlY2lkZXMgYWJvdXQgZ2xpZGUgbW92ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgZW5kOiBmdW5jdGlvbiBlbmQoZXZlbnQpIHtcbiAgICAgIGlmICghR2xpZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgICAgICAgdmFyIHN3aXBlID0gdGhpcy50b3VjaGVzKGV2ZW50KTtcbiAgICAgICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkKGV2ZW50KTtcblxuICAgICAgICB2YXIgc3dpcGVEaXN0YW5jZSA9IHN3aXBlLnBhZ2VYIC0gc3dpcGVTdGFydFg7XG4gICAgICAgIHZhciBzd2lwZURlZyA9IHN3aXBlU2luICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgdmFyIHN0ZXBzID0gTWF0aC5yb3VuZChzd2lwZURpc3RhbmNlIC8gQ29tcG9uZW50cy5TaXplcy5zbGlkZVdpZHRoKTtcblxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgICAgIGlmIChtb3ZlYWJsZSkge1xuICAgICAgICAgIGlmIChzd2lwZURpc3RhbmNlID4gdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgcG9zaXRpdmUgYW5kIGdyZWF0ZXIgdGhhbiB0aHJlc2hvbGQgbW92ZSBiYWNrd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWluKHN0ZXBzLCB0b0ludChzZXR0aW5ncy5wZXJUb3VjaCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50cy5EaXJlY3Rpb24uaXMoJ3J0bCcpKSB7XG4gICAgICAgICAgICAgIHN0ZXBzID0gLXN0ZXBzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBDb21wb25lbnRzLlJ1bi5tYWtlKENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmUoJzwnICsgc3RlcHMpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN3aXBlRGlzdGFuY2UgPCAtdGhyZXNob2xkICYmIHN3aXBlRGVnIDwgc2V0dGluZ3MudG91Y2hBbmdsZSkge1xuICAgICAgICAgICAgLy8gV2hpbGUgc3dpcGUgaXMgbmVnYXRpdmUgYW5kIGxvd2VyIHRoYW4gbmVnYXRpdmUgdGhyZXNob2xkIG1vdmUgZm9yd2FyZC5cbiAgICAgICAgICAgIGlmIChzZXR0aW5ncy5wZXJUb3VjaCkge1xuICAgICAgICAgICAgICBzdGVwcyA9IE1hdGgubWF4KHN0ZXBzLCAtdG9JbnQoc2V0dGluZ3MucGVyVG91Y2gpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKENvbXBvbmVudHMuRGlyZWN0aW9uLmlzKCdydGwnKSkge1xuICAgICAgICAgICAgICBzdGVwcyA9IC1zdGVwcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ29tcG9uZW50cy5SdW4ubWFrZShDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlKCc+JyArIHN0ZXBzKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdoaWxlIHN3aXBlIGRvbid0IHJlYWNoIGRpc3RhbmNlIGFwcGx5IHByZXZpb3VzIHRyYW5zZm9ybS5cbiAgICAgICAgICAgIENvbXBvbmVudHMuTW92ZS5tYWtlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LnJlbW92ZShzZXR0aW5ncy5jbGFzc2VzLmRyYWdnaW5nKTtcblxuICAgICAgICB0aGlzLnVuYmluZFN3aXBlTW92ZSgpO1xuICAgICAgICB0aGlzLnVuYmluZFN3aXBlRW5kKCk7XG5cbiAgICAgICAgRXZlbnRzLmVtaXQoJ3N3aXBlLmVuZCcpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3Mgc3RhcnRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmRTd2lwZVN0YXJ0OiBmdW5jdGlvbiBiaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgQmluZGVyLm9uKFNUQVJUX0VWRU5UU1swXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIF90aGlzLnN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSwgY2FwdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5ncy5kcmFnVGhyZXNob2xkKSB7XG4gICAgICAgIEJpbmRlci5vbihTVEFSVF9FVkVOVFNbMV0sIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpcy5zdGFydChldmVudCk7XG4gICAgICAgIH0sIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBzdGFydGluZyBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kU3dpcGVTdGFydDogZnVuY3Rpb24gdW5iaW5kU3dpcGVTdGFydCgpIHtcbiAgICAgIEJpbmRlci5vZmYoU1RBUlRfRVZFTlRTWzBdLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgICBCaW5kZXIub2ZmKFNUQVJUX0VWRU5UU1sxXSwgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgbW92aW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVNb3ZlOiBmdW5jdGlvbiBiaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIEJpbmRlci5vbihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIHRocm90dGxlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczIubW92ZShldmVudCk7XG4gICAgICB9LCBHbGlkZS5zZXR0aW5ncy50aHJvdHRsZSksIGNhcHR1cmUpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBtb3ZpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlTW92ZTogZnVuY3Rpb24gdW5iaW5kU3dpcGVNb3ZlKCkge1xuICAgICAgQmluZGVyLm9mZihNT1ZFX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIHN3aXBlJ3MgZW5kaW5nIGV2ZW50LlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kU3dpcGVFbmQ6IGZ1bmN0aW9uIGJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBCaW5kZXIub24oRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpczMuZW5kKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgc3dpcGUncyBlbmRpbmcgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHVuYmluZFN3aXBlRW5kOiBmdW5jdGlvbiB1bmJpbmRTd2lwZUVuZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoRU5EX0VWRU5UUywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZXMgZXZlbnQgdG91Y2hlcyBwb2ludHMgYWNjb3J0aW5nIHRvIGRpZmZlcmVudCB0eXBlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIHRvdWNoZXM6IGZ1bmN0aW9uIHRvdWNoZXMoZXZlbnQpIHtcbiAgICAgIGlmIChNT1VTRV9FVkVOVFMuaW5kZXhPZihldmVudC50eXBlKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2V0cyB2YWx1ZSBvZiBtaW5pbXVtIHN3aXBlIGRpc3RhbmNlIHNldHRpbmdzIGJhc2VkIG9uIGV2ZW50IHR5cGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhyZXNob2xkOiBmdW5jdGlvbiB0aHJlc2hvbGQoZXZlbnQpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuXG4gICAgICBpZiAoTU9VU0VfRVZFTlRTLmluZGV4T2YoZXZlbnQudHlwZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3MuZHJhZ1RocmVzaG9sZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldHRpbmdzLnN3aXBlVGhyZXNob2xkO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgc3dpcGUgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzZWxmfVxuICAgICAqL1xuICAgIGVuYWJsZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmVuYWJsZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzd2lwZSBldmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgQ29tcG9uZW50cy5UcmFuc2l0aW9uLmRpc2FibGUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgY29tcG9uZW50IGNsYXNzOlxuICAgKiAtIGFmdGVyIGluaXRpYWwgYnVpbGRpbmdcbiAgICovXG4gIEV2ZW50cy5vbignYnVpbGQuYWZ0ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29tcG9uZW50cy5IdG1sLnJvb3QuY2xhc3NMaXN0LmFkZChHbGlkZS5zZXR0aW5ncy5jbGFzc2VzLnN3aXBlYWJsZSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgc3dpcGluZyBiaW5kaW5nczpcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byByZW1vdmUgYWRkZWQgRXZlbnRMaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBTd2lwZS51bmJpbmRTd2lwZVN0YXJ0KCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVNb3ZlKCk7XG4gICAgU3dpcGUudW5iaW5kU3dpcGVFbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gU3dpcGU7XG59XG5cbmZ1bmN0aW9uIEltYWdlcyAoR2xpZGUsIENvbXBvbmVudHMsIEV2ZW50cykge1xuICAvKipcbiAgICogSW5zdGFuY2Ugb2YgdGhlIGJpbmRlciBmb3IgRE9NIEV2ZW50cy5cbiAgICpcbiAgICogQHR5cGUge0V2ZW50c0JpbmRlcn1cbiAgICovXG4gIHZhciBCaW5kZXIgPSBuZXcgRXZlbnRzQmluZGVyKCk7XG5cbiAgdmFyIEltYWdlcyA9IHtcbiAgICAvKipcbiAgICAgKiBCaW5kcyBsaXN0ZW5lciB0byBnbGlkZSB3cmFwcGVyLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLmJpbmQoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBgZHJhZ3N0YXJ0YCBldmVudCBvbiB3cmFwcGVyIHRvIHByZXZlbnQgZHJhZ2dpbmcgaW1hZ2VzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlciwgdGhpcy5kcmFnc3RhcnQpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgYGRyYWdzdGFydGAgZXZlbnQgb24gd3JhcHBlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdkcmFnc3RhcnQnLCBDb21wb25lbnRzLkh0bWwud3JhcHBlcik7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlci4gUHJldmVudHMgZHJhZ2dpbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGRyYWdzdGFydDogZnVuY3Rpb24gZHJhZ3N0YXJ0KGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGZyb20gaW1hZ2VzOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcsIHRvIHJlbW92ZSBhZGRlZCBFdmVudExpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEltYWdlcy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gSW1hZ2VzO1xufVxuXG5mdW5jdGlvbiBBbmNob3JzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgZGV0YWNoaW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBQcmV2ZW50cyBkZXRhY2hpbmcgb2YgYWxyZWFkeSBkZXRhY2hlZCBhbmNob3JzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICovXG4gIHZhciBkZXRhY2hlZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIb2xkcyBwcmV2ZW50aW5nIHN0YXR1cyBvZiBhbmNob3JzLlxuICAgKiBJZiBgdHJ1ZWAgcmVkaXJlY3Rpb24gYWZ0ZXIgY2xpY2sgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICB2YXIgcHJldmVudGVkID0gZmFsc2U7XG5cbiAgdmFyIEFuY2hvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0dXBzIGEgaW5pdGlhbCBzdGF0ZSBvZiBhbmNob3JzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogSG9sZHMgY29sbGVjdGlvbiBvZiBhbmNob3JzIGVsZW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAdHlwZSB7SFRNTENvbGxlY3Rpb259XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2EgPSBDb21wb25lbnRzLkh0bWwud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cbiAgICAgIHRoaXMuYmluZCgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdjbGljaycsIENvbXBvbmVudHMuSHRtbC53cmFwcGVyLCB0aGlzLmNsaWNrKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBVbmJpbmRzIGV2ZW50cyBhdHRhY2hlZCB0byBhbmNob3JzIGluc2lkZSBhIHRyYWNrLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIEJpbmRlci5vZmYoJ2NsaWNrJywgQ29tcG9uZW50cy5IdG1sLndyYXBwZXIpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIGNsaWNrIGV2ZW50LiBQcmV2ZW50cyBjbGlja3Mgd2hlbiBnbGlkZSBpcyBpbiBgcHJldmVudGAgc3RhdHVzLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBldmVudFxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgY2xpY2s6IGZ1bmN0aW9uIGNsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKHByZXZlbnRlZCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIERldGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnQgaW5zaWRlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7c2VsZn1cbiAgICAgKi9cbiAgICBkZXRhY2g6IGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgIHByZXZlbnRlZCA9IHRydWU7XG5cbiAgICAgIGlmICghZGV0YWNoZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5pdGVtc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWhyZWYnLCB0aGlzLml0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0ucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRhY2hlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuY2hvcnMgY2xpY2sgZXZlbnRzIGluc2lkZSBnbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgICBwcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKGRldGFjaGVkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0QXR0cmlidXRlKCdocmVmJywgdGhpcy5pdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaHJlZicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRldGFjaGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQW5jaG9ycywgJ2l0ZW1zJywge1xuICAgIC8qKlxuICAgICAqIEdldHMgY29sbGVjdGlvbiBvZiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFuY2hvcnMuX2E7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogRGV0YWNoIGFuY2hvcnMgaW5zaWRlIHNsaWRlczpcbiAgICogLSBvbiBzd2lwaW5nLCBzbyB0aGV5IHdvbid0IHJlZGlyZWN0IHRvIGl0cyBgaHJlZmAgYXR0cmlidXRlc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdzd2lwZS5tb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuZGV0YWNoKCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggYW5jaG9ycyBpbnNpZGUgc2xpZGVzOlxuICAgKiAtIGFmdGVyIHN3aXBpbmcgYW5kIHRyYW5zaXRpb25zIGVuZHMsIHNvIHRoZXkgY2FuIHJlZGlyZWN0IGFmdGVyIGNsaWNrIGFnYWluXG4gICAqL1xuICBFdmVudHMub24oJ3N3aXBlLmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBDb21wb25lbnRzLlRyYW5zaXRpb24uYWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgQW5jaG9ycy5hdHRhY2goKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCBhbmNob3JzIGluc2lkZSBzbGlkZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgYW5jaG9ycyB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEFuY2hvcnMuYXR0YWNoKCk7XG4gICAgQW5jaG9ycy51bmJpbmQoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQW5jaG9ycztcbn1cblxudmFyIE5BVl9TRUxFQ1RPUiA9ICdbZGF0YS1nbGlkZS1lbD1cImNvbnRyb2xzW25hdl1cIl0nO1xudmFyIENPTlRST0xTX1NFTEVDVE9SID0gJ1tkYXRhLWdsaWRlLWVsXj1cImNvbnRyb2xzXCJdJztcblxuZnVuY3Rpb24gQ29udHJvbHMgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBDb250cm9scyA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0cyBhcnJvd3MuIEJpbmRzIGV2ZW50cyBsaXN0ZW5lcnNcbiAgICAgKiB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIG1vdW50OiBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQ29sbGVjdGlvbiBvZiBuYXZpZ2F0aW9uIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fbiA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoTkFWX1NFTEVDVE9SKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb2xsZWN0aW9uIG9mIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICAgKlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEB0eXBlIHtIVE1MQ29sbGVjdGlvbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fYyA9IENvbXBvbmVudHMuSHRtbC5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoQ09OVFJPTFNfU0VMRUNUT1IpO1xuXG4gICAgICB0aGlzLmFkZEJpbmRpbmdzKCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhY3RpdmUgY2xhc3MgdG8gY3VycmVudCBzbGlkZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5hZGRDbGFzcyh0aGlzLl9uW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IHNsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmVBY3RpdmU6IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZSgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKHRoaXMuX25baV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgYWN0aXZlIGNsYXNzIG9uIGl0ZW1zIGluc2lkZSBuYXZpZ2F0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGNvbnRyb2xzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoY29udHJvbHMpIHtcbiAgICAgIHZhciBzZXR0aW5ncyA9IEdsaWRlLnNldHRpbmdzO1xuICAgICAgdmFyIGl0ZW0gPSBjb250cm9sc1tHbGlkZS5pbmRleF07XG5cbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5jbGFzc2VzLmFjdGl2ZU5hdik7XG5cbiAgICAgIHNpYmxpbmdzKGl0ZW0pLmZvckVhY2goZnVuY3Rpb24gKHNpYmxpbmcpIHtcbiAgICAgICAgc2libGluZy5jbGFzc0xpc3QucmVtb3ZlKHNldHRpbmdzLmNsYXNzZXMuYWN0aXZlTmF2KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWN0aXZlIGNsYXNzIGZyb20gYWN0aXZlIGNvbnRyb2wuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY29udHJvbHNcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhjb250cm9scykge1xuICAgICAgY29udHJvbHNbR2xpZGUuaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoR2xpZGUuc2V0dGluZ3MuY2xhc3Nlcy5hY3RpdmVOYXYpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMgaGFuZGxlcyB0byB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgYWRkQmluZGluZ3M6IGZ1bmN0aW9uIGFkZEJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuYmluZCh0aGlzLl9jW2ldLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGhhbmRsZXMgZnJvbSB0aGUgZWFjaCBncm91cCBvZiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlQmluZGluZ3M6IGZ1bmN0aW9uIHJlbW92ZUJpbmRpbmdzKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHRoaXMuX2NbaV0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEJpbmRzIGV2ZW50cyB0byBhcnJvd3MgSFRNTCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGVsZW1lbnRzXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIEJpbmRlci5vbihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0sIHRoaXMuY2xpY2spO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZHMgZXZlbnRzIGJpbmRlZCB0byB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoZWxlbWVudHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQmluZGVyLm9mZihbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXSwgZWxlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgYGNsaWNrYCBldmVudCBvbiB0aGUgYXJyb3dzIEhUTUwgZWxlbWVudHMuXG4gICAgICogTW92ZXMgc2xpZGVyIGluIGRyaWVjdGlvbiBwcmVjaXNlZCBpblxuICAgICAqIGBkYXRhLWdsaWRlLWRpcmAgYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBjbGljazogZnVuY3Rpb24gY2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZShldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1nbGlkZS1kaXInKSkpO1xuICAgIH1cbiAgfTtcblxuICBkZWZpbmUoQ29udHJvbHMsICdpdGVtcycsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbGxlY3Rpb24gb2YgdGhlIGNvbnRyb2xzIEhUTUwgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIENvbnRyb2xzLl9jO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN3YXAgYWN0aXZlIGNsYXNzIG9mIGN1cnJlbnQgbmF2aWdhdGlvbiBpdGVtOlxuICAgKiAtIGFmdGVyIG1vdW50aW5nIHRvIHNldCBpdCB0byBpbml0aWFsIGluZGV4XG4gICAqIC0gYWZ0ZXIgZWFjaCBtb3ZlIHRvIHRoZSBuZXcgaW5kZXhcbiAgICovXG4gIEV2ZW50cy5vbihbJ21vdW50LmFmdGVyJywgJ21vdmUuYWZ0ZXInXSwgZnVuY3Rpb24gKCkge1xuICAgIENvbnRyb2xzLnNldEFjdGl2ZSgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3ZlIGJpbmRpbmdzIGFuZCBIVE1MIENsYXNzZXM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQ29udHJvbHMucmVtb3ZlQmluZGluZ3MoKTtcbiAgICBDb250cm9scy5yZW1vdmVBY3RpdmUoKTtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQ29udHJvbHM7XG59XG5cbmZ1bmN0aW9uIEtleWJvYXJkIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICB2YXIgS2V5Ym9hcmQgPSB7XG4gICAgLyoqXG4gICAgICogQmluZHMga2V5Ym9hcmQgZXZlbnRzIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIEFkZHMga2V5Ym9hcmQgcHJlc3MgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgQmluZGVyLm9uKCdrZXl1cCcsIGRvY3VtZW50LCB0aGlzLnByZXNzKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGtleWJvYXJkIHByZXNzIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKCdrZXl1cCcsIGRvY3VtZW50KTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleWJvYXJkJ3MgYXJyb3dzIHByZXNzIGFuZCBtb3ZpbmcgZ2xpZGUgZm93YXJkIGFuZCBiYWNrd2FyZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIHByZXNzOiBmdW5jdGlvbiBwcmVzcyhldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZSgnPCcpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBiaW5kaW5ncyBmcm9tIGtleWJvYXJkOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGFkZGVkIGV2ZW50c1xuICAgKiAtIG9uIHVwZGF0aW5nIHRvIHJlbW92ZSBldmVudHMgYmVmb3JlIHJlbW91bnRpbmdcbiAgICovXG4gIEV2ZW50cy5vbihbJ2Rlc3Ryb3knLCAndXBkYXRlJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBLZXlib2FyZC51bmJpbmQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlbW91bnQgY29tcG9uZW50XG4gICAqIC0gb24gdXBkYXRpbmcgdG8gcmVmbGVjdCBwb3RlbnRpYWwgY2hhbmdlcyBpbiBzZXR0aW5nc1xuICAgKi9cbiAgRXZlbnRzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgS2V5Ym9hcmQubW91bnQoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgdG8gcmVtb3ZlIGxpc3RlbmVyc1xuICAgKi9cbiAgRXZlbnRzLm9uKCdkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIEJpbmRlci5kZXN0cm95KCk7XG4gIH0pO1xuXG4gIHJldHVybiBLZXlib2FyZDtcbn1cblxuZnVuY3Rpb24gQXV0b3BsYXkgKEdsaWRlLCBDb21wb25lbnRzLCBFdmVudHMpIHtcbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBiaW5kZXIgZm9yIERPTSBFdmVudHMuXG4gICAqXG4gICAqIEB0eXBlIHtFdmVudHNCaW5kZXJ9XG4gICAqL1xuICB2YXIgQmluZGVyID0gbmV3IEV2ZW50c0JpbmRlcigpO1xuXG4gIHZhciBBdXRvcGxheSA9IHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBhdXRvcGxheWluZyBhbmQgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBtb3VudDogZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgIGlmIChHbGlkZS5zZXR0aW5ncy5ob3ZlcnBhdXNlKSB7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhdXRvcGxheWluZyBpbiBjb25maWd1cmVkIGludGVydmFsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufE51bWJlcn0gZm9yY2UgUnVuIGF1dG9wbGF5aW5nIHdpdGggcGFzc2VkIGludGVydmFsIHJlZ2FyZGxlc3Mgb2YgYGF1dG9wbGF5YCBzZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge1ZvaWR9XG4gICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKEdsaWRlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLl9pKSkge1xuICAgICAgICAgIHRoaXMuX2kgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgICAgIENvbXBvbmVudHMuUnVuLm1ha2UoJz4nKTtcblxuICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICB9LCB0aGlzLnRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3J1bm5pbmcgb2YgdGhlIGdsaWRlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Vm9pZH1cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5faSA9IGNsZWFySW50ZXJ2YWwodGhpcy5faSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYXV0b3BsYXlpbmcgd2hpbGUgbW91c2UgaXMgb3ZlciBnbGlkZSdzIGFyZWEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgICAqL1xuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgQmluZGVyLm9uKCdtb3VzZW92ZXInLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RvcCgpO1xuICAgICAgfSk7XG5cbiAgICAgIEJpbmRlci5vbignbW91c2VvdXQnLCBDb21wb25lbnRzLkh0bWwucm9vdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFVuYmluZCBtb3VzZW92ZXIgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1ZvaWR9XG4gICAgICovXG4gICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICBCaW5kZXIub2ZmKFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J10sIENvbXBvbmVudHMuSHRtbC5yb290KTtcbiAgICB9XG4gIH07XG5cbiAgZGVmaW5lKEF1dG9wbGF5LCAndGltZScsIHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRpbWUgcGVyaW9kIHZhbHVlIGZvciB0aGUgYXV0b3BsYXkgaW50ZXJ2YWwuIFByaW9yaXRpemVzXG4gICAgICogdGltZXMgaW4gYGRhdGEtZ2xpZGUtYXV0b3BsYXlgIGF0dHJ1YnV0ZXMgb3ZlciBvcHRpb25zLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGF1dG9wbGF5ID0gQ29tcG9uZW50cy5IdG1sLnNsaWRlc1tHbGlkZS5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWdsaWRlLWF1dG9wbGF5Jyk7XG5cbiAgICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgICByZXR1cm4gdG9JbnQoYXV0b3BsYXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9JbnQoR2xpZGUuc2V0dGluZ3MuYXV0b3BsYXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFN0b3AgYXV0b3BsYXlpbmcgYW5kIHVuYmluZCBldmVudHM6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gY2xlYXIgZGVmaW5lZCBpbnRlcnZhbFxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsnZGVzdHJveScsICd1cGRhdGUnXSwgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5LnVuYmluZCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RvcCBhdXRvcGxheWluZzpcbiAgICogLSBiZWZvcmUgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwYXVzaW5nIHZpYSBBUElcbiAgICogLSBvbiBkZXN0cm95aW5nLCB0byBjbGVhciBkZWZpbmVkIGludGVydmFsXG4gICAqIC0gd2hpbGUgc3RhcnRpbmcgYSBzd2lwZVxuICAgKiAtIG9uIHVwZGF0aW5nIHZpYSBBUEkgdG8gcmVzZXQgaW50ZXJ2YWwgdGhhdCBtYXkgY2hhbmdlZFxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmJlZm9yZScsICdwYXVzZScsICdkZXN0cm95JywgJ3N3aXBlLnN0YXJ0JywgJ3VwZGF0ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgQXV0b3BsYXkuc3RvcCgpO1xuICB9KTtcblxuICAvKipcbiAgICogU3RhcnQgYXV0b3BsYXlpbmc6XG4gICAqIC0gYWZ0ZXIgZWFjaCBydW4sIHRvIHJlc3RhcnQgYXV0b3BsYXlpbmdcbiAgICogLSBvbiBwbGF5aW5nIHZpYSBBUElcbiAgICogLSB3aGlsZSBlbmRpbmcgYSBzd2lwZVxuICAgKi9cbiAgRXZlbnRzLm9uKFsncnVuLmFmdGVyJywgJ3BsYXknLCAnc3dpcGUuZW5kJ10sIGZ1bmN0aW9uICgpIHtcbiAgICBBdXRvcGxheS5zdGFydCgpO1xuICB9KTtcblxuICAvKipcbiAgICogUmVtb3VudCBhdXRvcGxheWluZzpcbiAgICogLSBvbiB1cGRhdGluZyB2aWEgQVBJIHRvIHJlc2V0IGludGVydmFsIHRoYXQgbWF5IGNoYW5nZWRcbiAgICovXG4gIEV2ZW50cy5vbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIEF1dG9wbGF5Lm1vdW50KCk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgYmluZGVyOlxuICAgKiAtIG9uIGRlc3Ryb3lpbmcgZ2xpZGUgaW5zdGFuY2UgdG8gY2xlYXJ1cCBsaXN0ZW5lcnNcbiAgICovXG4gIEV2ZW50cy5vbignZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICBCaW5kZXIuZGVzdHJveSgpO1xuICB9KTtcblxuICByZXR1cm4gQXV0b3BsYXk7XG59XG5cbi8qKlxuICogU29ydHMga2V5cyBvZiBicmVha3BvaW50IG9iamVjdCBzbyB0aGV5IHdpbGwgYmUgb3JkZXJlZCBmcm9tIGxvd2VyIHRvIGJpZ2dlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBzb3J0QnJlYWtwb2ludHMocG9pbnRzKSB7XG4gIGlmIChpc09iamVjdChwb2ludHMpKSB7XG4gICAgcmV0dXJuIHNvcnRLZXlzKHBvaW50cyk7XG4gIH0gZWxzZSB7XG4gICAgd2FybignQnJlYWtwb2ludHMgb3B0aW9uIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIEJyZWFrcG9pbnRzIChHbGlkZSwgQ29tcG9uZW50cywgRXZlbnRzKSB7XG4gIC8qKlxuICAgKiBJbnN0YW5jZSBvZiB0aGUgYmluZGVyIGZvciBET00gRXZlbnRzLlxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRzQmluZGVyfVxuICAgKi9cbiAgdmFyIEJpbmRlciA9IG5ldyBFdmVudHNCaW5kZXIoKTtcblxuICAvKipcbiAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHNldHRpbmdzLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIHNldHRpbmdzID0gR2xpZGUuc2V0dGluZ3M7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHJlZmVyZW5jZSB0byBicmVha3BvaW50cyBvYmplY3QgaW4gc2V0dGluZ3MuIFNvcnRzIGJyZWFrcG9pbnRzXG4gICAqIGZyb20gc21hbGxlciB0byBsYXJnZXIuIEl0IGlzIHJlcXVpcmVkIGluIG9yZGVyIHRvIHByb3BlclxuICAgKiBtYXRjaGluZyBjdXJyZW50bHkgYWN0aXZlIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgcG9pbnRzID0gc29ydEJyZWFrcG9pbnRzKHNldHRpbmdzLmJyZWFrcG9pbnRzKTtcblxuICAvKipcbiAgICogQ2FjaGUgaW5pdGlhbCBzZXR0aW5ncyBiZWZvcmUgb3ZlcndyaXR0aW5nLlxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcblxuICB2YXIgQnJlYWtwb2ludHMgPSB7XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBzZXR0aW5ncyBmb3IgY3VycmVjdGx5IG1hdGNoaW5nIG1lZGlhIGJyZWFrcG9pbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcG9pbnRzXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2gocG9pbnRzKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKHZhciBwb2ludCBpbiBwb2ludHMpIHtcbiAgICAgICAgICBpZiAocG9pbnRzLmhhc093blByb3BlcnR5KHBvaW50KSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAnICsgcG9pbnQgKyAncHgpJykubWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gcG9pbnRzW3BvaW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3ZlcndyaXRlIGluc3RhbmNlIHNldHRpbmdzIHdpdGggY3VycmVudGx5IG1hdGNoaW5nIGJyZWFrcG9pbnQgc2V0dGluZ3MuXG4gICAqIFRoaXMgaGFwcGVucyByaWdodCBhZnRlciBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24uXG4gICAqL1xuICBfZXh0ZW5kcyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBnbGlkZSB3aXRoIHNldHRpbmdzIG9mIG1hdGNoZWQgYnJla3BvaW50OlxuICAgKiAtIHdpbmRvdyByZXNpemUgdG8gdXBkYXRlIHNsaWRlclxuICAgKi9cbiAgQmluZGVyLm9uKCdyZXNpemUnLCB3aW5kb3csIHRocm90dGxlKGZ1bmN0aW9uICgpIHtcbiAgICBHbGlkZS5zZXR0aW5ncyA9IG1lcmdlT3B0aW9ucyhzZXR0aW5ncywgQnJlYWtwb2ludHMubWF0Y2gocG9pbnRzKSk7XG4gIH0sIEdsaWRlLnNldHRpbmdzLnRocm90dGxlKSk7XG5cbiAgLyoqXG4gICAqIFJlc29ydCBhbmQgdXBkYXRlIGRlZmF1bHQgc2V0dGluZ3M6XG4gICAqIC0gb24gcmVpbml0IHZpYSBBUEksIHNvIGJyZWFrcG9pbnQgbWF0Y2hpbmcgd2lsbCBiZSBwZXJmb3JtZWQgd2l0aCBvcHRpb25zXG4gICAqL1xuICBFdmVudHMub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwb2ludHMgPSBzb3J0QnJlYWtwb2ludHMocG9pbnRzKTtcblxuICAgIGRlZmF1bHRzID0gX2V4dGVuZHMoe30sIHNldHRpbmdzKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFVuYmluZCByZXNpemUgbGlzdGVuZXI6XG4gICAqIC0gb24gZGVzdHJveWluZywgdG8gYnJpbmcgbWFya3VwIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAqL1xuICBFdmVudHMub24oJ2Rlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgQmluZGVyLm9mZigncmVzaXplJywgd2luZG93KTtcbiAgfSk7XG5cbiAgcmV0dXJuIEJyZWFrcG9pbnRzO1xufVxuXG52YXIgQ09NUE9ORU5UUyA9IHtcbiAgLy8gUmVxdWlyZWRcbiAgSHRtbDogSHRtbCxcbiAgVHJhbnNsYXRlOiBUcmFuc2xhdGUsXG4gIFRyYW5zaXRpb246IFRyYW5zaXRpb24sXG4gIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICBQZWVrOiBQZWVrLFxuICBTaXplczogU2l6ZXMsXG4gIEdhcHM6IEdhcHMsXG4gIE1vdmU6IE1vdmUsXG4gIENsb25lczogQ2xvbmVzLFxuICBSZXNpemU6IFJlc2l6ZSxcbiAgQnVpbGQ6IEJ1aWxkLFxuICBSdW46IFJ1bixcblxuICAvLyBPcHRpb25hbFxuICBTd2lwZTogU3dpcGUsXG4gIEltYWdlczogSW1hZ2VzLFxuICBBbmNob3JzOiBBbmNob3JzLFxuICBDb250cm9sczogQ29udHJvbHMsXG4gIEtleWJvYXJkOiBLZXlib2FyZCxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBCcmVha3BvaW50czogQnJlYWtwb2ludHNcbn07XG5cbnZhciBHbGlkZSQxID0gZnVuY3Rpb24gKF9Db3JlKSB7XG4gIGluaGVyaXRzKEdsaWRlJCQxLCBfQ29yZSk7XG5cbiAgZnVuY3Rpb24gR2xpZGUkJDEoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgR2xpZGUkJDEpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChHbGlkZSQkMS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhHbGlkZSQkMSwgW3tcbiAgICBrZXk6ICdtb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdW50KCkge1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgICByZXR1cm4gZ2V0KEdsaWRlJCQxLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEdsaWRlJCQxLnByb3RvdHlwZSksICdtb3VudCcsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIENPTVBPTkVOVFMsIGV4dGVuc2lvbnMpKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEdsaWRlJCQxO1xufShHbGlkZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsaWRlJDE7XG4iLCIvKiFcbiAqIHBlcmZlY3Qtc2Nyb2xsYmFyIHYxLjQuMFxuICogKGMpIDIwMTggSHl1bmplIEp1blxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIGdldChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXQoZWxlbWVudCwgb2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWwgPSB2YWwgKyBcInB4XCI7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGl2KGNsYXNzTmFtZSkge1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiBkaXY7XG59XG5cbnZhciBlbE1hdGNoZXMgPVxuICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgKEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcik7XG5cbmZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgcXVlcnkpIHtcbiAgaWYgKCFlbE1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgbWF0Y2hpbmcgbWV0aG9kIHN1cHBvcnRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGVsTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHF1ZXJ5KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQucmVtb3ZlKSB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtZW50LmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIG1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKTsgfVxuICApO1xufVxuXG52YXIgY2xzID0ge1xuICBtYWluOiAncHMnLFxuICBlbGVtZW50OiB7XG4gICAgdGh1bWI6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwc19fdGh1bWItXCIgKyB4KTsgfSxcbiAgICByYWlsOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3JhaWwtXCIgKyB4KTsgfSxcbiAgICBjb25zdW1pbmc6ICdwc19fY2hpbGQtLWNvbnN1bWUnLFxuICB9LFxuICBzdGF0ZToge1xuICAgIGZvY3VzOiAncHMtLWZvY3VzJyxcbiAgICBjbGlja2luZzogJ3BzLS1jbGlja2luZycsXG4gICAgYWN0aXZlOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHMtLWFjdGl2ZS1cIiArIHgpOyB9LFxuICAgIHNjcm9sbGluZzogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1zY3JvbGxpbmctXCIgKyB4KTsgfSxcbiAgfSxcbn07XG5cbi8qXG4gKiBIZWxwZXIgbWV0aG9kc1xuICovXG52YXIgc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cbmZ1bmN0aW9uIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpIHtcbiAgdmFyIGNsYXNzTGlzdCA9IGkuZWxlbWVudC5jbGFzc0xpc3Q7XG4gIHZhciBjbGFzc05hbWUgPSBjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpO1xuXG4gIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIGNsZWFyVGltZW91dChzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0pO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHNjcm9sbGluZ0NsYXNzVGltZW91dFt4XSA9IHNldFRpbWVvdXQoXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gaS5pc0FsaXZlICYmIGkuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5zY3JvbGxpbmcoeCkpOyB9LFxuICAgIGkuc2V0dGluZ3Muc2Nyb2xsaW5nVGhyZXNob2xkXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHgpIHtcbiAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeCk7XG4gIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHgpO1xufVxuXG52YXIgRXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gRXZlbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5oYW5kbGVycyA9IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNFbXB0eTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gW107XG4gIH1cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGV2ZW50TmFtZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmICh0YXJnZXQgJiYgaGFuZGxlciAhPT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcyQxLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcyQxLmhhbmRsZXJzKSB7XG4gICAgdGhpcyQxLnVuYmluZChuYW1lKTtcbiAgfVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmlzRW1wdHkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5ldmVyeShcbiAgICBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzJDEuaGFuZGxlcnNba2V5XS5sZW5ndGggPT09IDA7IH1cbiAgKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBFdmVudEVsZW1lbnQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxudmFyIEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIGV2ZW50RWxlbWVudCAoZWxlbWVudCkge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlZSkgeyByZXR1cm4gZWUuZWxlbWVudCA9PT0gZWxlbWVudDsgfSlbMF07XG4gIGlmICghZWUpIHtcbiAgICBlZSA9IG5ldyBFdmVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnB1c2goZWUpO1xuICB9XG4gIHJldHVybiBlZTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KS5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICBlZS51bmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcblxuICBpZiAoZWUuaXNFbXB0eSkge1xuICAgIC8vIHJlbW92ZVxuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5zcGxpY2UodGhpcy5ldmVudEVsZW1lbnRzLmluZGV4T2YoZWUpLCAxKTtcbiAgfVxufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICB0aGlzLmV2ZW50RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS51bmJpbmRBbGwoKTsgfSk7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgb25jZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZWUudW5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xuICAgIGhhbmRsZXIoZXZ0KTtcbiAgfTtcbiAgZWUuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gZXZ0O1xuICB9XG59XG5cbnZhciBwcm9jZXNzU2Nyb2xsRGlmZiA9IGZ1bmN0aW9uKFxuICBpLFxuICBheGlzLFxuICBkaWZmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGZpZWxkcztcbiAgaWYgKGF4aXMgPT09ICd0b3AnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRIZWlnaHQnLFxuICAgICAgJ2NvbnRhaW5lckhlaWdodCcsXG4gICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICd5JyxcbiAgICAgICd1cCcsXG4gICAgICAnZG93bicgXTtcbiAgfSBlbHNlIGlmIChheGlzID09PSAnbGVmdCcpIHtcbiAgICBmaWVsZHMgPSBbXG4gICAgICAnY29udGVudFdpZHRoJyxcbiAgICAgICdjb250YWluZXJXaWR0aCcsXG4gICAgICAnc2Nyb2xsTGVmdCcsXG4gICAgICAneCcsXG4gICAgICAnbGVmdCcsXG4gICAgICAncmlnaHQnIF07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIHByb3BlciBheGlzIHNob3VsZCBiZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYkMShpLCBkaWZmLCBmaWVsZHMsIHVzZVNjcm9sbGluZ0NsYXNzLCBmb3JjZUZpcmVSZWFjaEV2ZW50KTtcbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NTY3JvbGxEaWZmJDEoXG4gIGksXG4gIGRpZmYsXG4gIHJlZixcbiAgdXNlU2Nyb2xsaW5nQ2xhc3MsXG4gIGZvcmNlRmlyZVJlYWNoRXZlbnRcbikge1xuICB2YXIgY29udGVudEhlaWdodCA9IHJlZlswXTtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IHJlZlsxXTtcbiAgdmFyIHNjcm9sbFRvcCA9IHJlZlsyXTtcbiAgdmFyIHkgPSByZWZbM107XG4gIHZhciB1cCA9IHJlZls0XTtcbiAgdmFyIGRvd24gPSByZWZbNV07XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgLy8gcmVzZXQgcmVhY2hcbiAgaS5yZWFjaFt5XSA9IG51bGw7XG5cbiAgLy8gMSBmb3Igc3VicGl4ZWwgcm91bmRpbmdcbiAgaWYgKGVsZW1lbnRbc2Nyb2xsVG9wXSA8IDEpIHtcbiAgICBpLnJlYWNoW3ldID0gJ3N0YXJ0JztcbiAgfVxuXG4gIC8vIDEgZm9yIHN1YnBpeGVsIHJvdW5kaW5nXG4gIGlmIChlbGVtZW50W3Njcm9sbFRvcF0gPiBpW2NvbnRlbnRIZWlnaHRdIC0gaVtjb250YWluZXJIZWlnaHRdIC0gMSkge1xuICAgIGkucmVhY2hbeV0gPSAnZW5kJztcbiAgfVxuXG4gIGlmIChkaWZmKSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIHkpKSk7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyB1cCkpKTtcbiAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgZG93bikpKTtcbiAgICB9XG5cbiAgICBpZiAodXNlU2Nyb2xsaW5nQ2xhc3MpIHtcbiAgICAgIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpLnJlYWNoW3ldICYmIChkaWZmIHx8IGZvcmNlRmlyZVJlYWNoRXZlbnQpKSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLVwiICsgeSArIFwiLXJlYWNoLVwiICsgKGkucmVhY2hbeV0pKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvSW50KHgpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc0VkaXRhYmxlKGVsKSB7XG4gIHJldHVybiAoXG4gICAgbWF0Y2hlcyhlbCwgJ2lucHV0LFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAnc2VsZWN0LFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAndGV4dGFyZWEsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICdidXR0b24sW2NvbnRlbnRlZGl0YWJsZV0nKVxuICApO1xufVxuXG5mdW5jdGlvbiBvdXRlcldpZHRoKGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlcyA9IGdldChlbGVtZW50KTtcbiAgcmV0dXJuIChcbiAgICB0b0ludChzdHlsZXMud2lkdGgpICtcbiAgICB0b0ludChzdHlsZXMucGFkZGluZ0xlZnQpICtcbiAgICB0b0ludChzdHlsZXMucGFkZGluZ1JpZ2h0KSArXG4gICAgdG9JbnQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCkgK1xuICAgIHRvSW50KHN0eWxlcy5ib3JkZXJSaWdodFdpZHRoKVxuICApO1xufVxuXG52YXIgZW52ID0ge1xuICBpc1dlYktpdDpcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ1dlYmtpdEFwcGVhcmFuY2UnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcbiAgc3VwcG9ydHNUb3VjaDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgICAgICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSksXG4gIHN1cHBvcnRzSWVQb2ludGVyOlxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzLFxuICBpc0Nocm9tZTpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC9DaHJvbWUvaS50ZXN0KG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50KSxcbn07XG5cbnZhciB1cGRhdGVHZW9tZXRyeSA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG4gIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG5cbiAgaS5jb250YWluZXJXaWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIGkuY29udGFpbmVySGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgaS5jb250ZW50SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWFJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhclhSYWlsKTtcbiAgfVxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJZUmFpbCkpIHtcbiAgICAvLyBjbGVhbiB1cCBhbmQgYXBwZW5kXG4gICAgcXVlcnlDaGlsZHJlbihlbGVtZW50LCBjbHMuZWxlbWVudC5yYWlsKCd5JykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiByZW1vdmUoZWwpOyB9XG4gICAgKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGkuc2Nyb2xsYmFyWVJhaWwpO1xuICB9XG5cbiAgaWYgKFxuICAgICFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJlxuICAgIGkuY29udGFpbmVyV2lkdGggKyBpLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRXaWR0aFxuICApIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFhXaWR0aCA9IGkuY29udGFpbmVyV2lkdGggLSBpLnJhaWxYTWFyZ2luV2lkdGg7XG4gICAgaS5yYWlsWFJhdGlvID0gaS5jb250YWluZXJXaWR0aCAvIGkucmFpbFhXaWR0aDtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludChpLnJhaWxYV2lkdGggKiBpLmNvbnRhaW5lcldpZHRoIC8gaS5jb250ZW50V2lkdGgpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gdG9JbnQoXG4gICAgICAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpICpcbiAgICAgICAgKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSAvXG4gICAgICAgIChpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChcbiAgICAhaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiZcbiAgICBpLmNvbnRhaW5lckhlaWdodCArIGkuc2V0dGluZ3Muc2Nyb2xsWU1hcmdpbk9mZnNldCA8IGkuY29udGVudEhlaWdodFxuICApIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFlIZWlnaHQgPSBpLmNvbnRhaW5lckhlaWdodCAtIGkucmFpbFlNYXJnaW5IZWlnaHQ7XG4gICAgaS5yYWlsWVJhdGlvID0gaS5jb250YWluZXJIZWlnaHQgLyBpLnJhaWxZSGVpZ2h0O1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludChpLnJhaWxZSGVpZ2h0ICogaS5jb250YWluZXJIZWlnaHQgLyBpLmNvbnRlbnRIZWlnaHQpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSB0b0ludChcbiAgICAgIHJvdW5kZWRTY3JvbGxUb3AgKlxuICAgICAgICAoaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkgL1xuICAgICAgICAoaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpLnNjcm9sbGJhclhMZWZ0ID49IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSB7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoO1xuICB9XG4gIGlmIChpLnNjcm9sbGJhcllUb3AgPj0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkge1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQ7XG4gIH1cblxuICB1cGRhdGVDc3MoZWxlbWVudCwgaSk7XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuYWN0aXZlKCd4JykpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuYWN0aXZlKCd4JykpO1xuICAgIGkuc2Nyb2xsYmFyWFdpZHRoID0gMDtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gMDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAwO1xuICB9XG4gIGlmIChpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmFjdGl2ZSgneScpKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmFjdGl2ZSgneScpKTtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSAwO1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IDA7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRUaHVtYlNpemUoaSwgdGh1bWJTaXplKSB7XG4gIGlmIChpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCkge1xuICAgIHRodW1iU2l6ZSA9IE1hdGgubWF4KHRodW1iU2l6ZSwgaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpO1xuICB9XG4gIGlmIChpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCkge1xuICAgIHRodW1iU2l6ZSA9IE1hdGgubWluKHRodW1iU2l6ZSwgaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpO1xuICB9XG4gIHJldHVybiB0aHVtYlNpemU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbGVtZW50LCBpKSB7XG4gIHZhciB4UmFpbE9mZnNldCA9IHsgd2lkdGg6IGkucmFpbFhXaWR0aCB9O1xuICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gIGlmIChpLmlzUnRsKSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9XG4gICAgICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgICAgaS5jb250YWluZXJXaWR0aCAtXG4gICAgICBpLmNvbnRlbnRXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICB9XG4gIGlmIChpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tKSB7XG4gICAgeFJhaWxPZmZzZXQuYm90dG9tID0gaS5zY3JvbGxiYXJYQm90dG9tIC0gcm91bmRlZFNjcm9sbFRvcDtcbiAgfSBlbHNlIHtcbiAgICB4UmFpbE9mZnNldC50b3AgPSBpLnNjcm9sbGJhclhUb3AgKyByb3VuZGVkU2Nyb2xsVG9wO1xuICB9XG4gIHNldChpLnNjcm9sbGJhclhSYWlsLCB4UmFpbE9mZnNldCk7XG5cbiAgdmFyIHlSYWlsT2Zmc2V0ID0geyB0b3A6IHJvdW5kZWRTY3JvbGxUb3AsIGhlaWdodDogaS5yYWlsWUhlaWdodCB9O1xuICBpZiAoaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0KSB7XG4gICAgaWYgKGkuaXNSdGwpIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID1cbiAgICAgICAgaS5jb250ZW50V2lkdGggLVxuICAgICAgICAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpIC1cbiAgICAgICAgaS5zY3JvbGxiYXJZUmlnaHQgLVxuICAgICAgICBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9IGkuc2Nyb2xsYmFyWVJpZ2h0IC0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaS5pc1J0bCkge1xuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9XG4gICAgICAgIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgICAgaS5jb250YWluZXJXaWR0aCAqIDIgLVxuICAgICAgICBpLmNvbnRlbnRXaWR0aCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWUxlZnQgLVxuICAgICAgICBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID0gaS5zY3JvbGxiYXJZTGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH1cbiAgc2V0KGkuc2Nyb2xsYmFyWVJhaWwsIHlSYWlsT2Zmc2V0KTtcblxuICBzZXQoaS5zY3JvbGxiYXJYLCB7XG4gICAgbGVmdDogaS5zY3JvbGxiYXJYTGVmdCxcbiAgICB3aWR0aDogaS5zY3JvbGxiYXJYV2lkdGggLSBpLnJhaWxCb3JkZXJYV2lkdGgsXG4gIH0pO1xuICBzZXQoaS5zY3JvbGxiYXJZLCB7XG4gICAgdG9wOiBpLnNjcm9sbGJhcllUb3AsXG4gICAgaGVpZ2h0OiBpLnNjcm9sbGJhcllIZWlnaHQgLSBpLnJhaWxCb3JkZXJZV2lkdGgsXG4gIH0pO1xufVxuXG52YXIgY2xpY2tSYWlsID0gZnVuY3Rpb24oaSkge1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZUmFpbCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBvc2l0aW9uVG9wID1cbiAgICAgIGUucGFnZVkgLVxuICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IC1cbiAgICAgIGkuc2Nyb2xsYmFyWVJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvblRvcCA+IGkuc2Nyb2xsYmFyWVRvcCA/IDEgOiAtMTtcblxuICAgIGkuZWxlbWVudC5zY3JvbGxUb3AgKz0gZGlyZWN0aW9uICogaS5jb250YWluZXJIZWlnaHQ7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYUmFpbCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBvc2l0aW9uTGVmdCA9XG4gICAgICBlLnBhZ2VYIC1cbiAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCAtXG4gICAgICBpLnNjcm9sbGJhclhSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uTGVmdCA+IGkuc2Nyb2xsYmFyWExlZnQgPyAxIDogLTE7XG5cbiAgICBpLmVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lcldpZHRoO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59O1xuXG52YXIgZHJhZ1RodW1iID0gZnVuY3Rpb24oaSkge1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVyV2lkdGgnLFxuICAgICdjb250ZW50V2lkdGgnLFxuICAgICdwYWdlWCcsXG4gICAgJ3JhaWxYV2lkdGgnLFxuICAgICdzY3JvbGxiYXJYJyxcbiAgICAnc2Nyb2xsYmFyWFdpZHRoJyxcbiAgICAnc2Nyb2xsTGVmdCcsXG4gICAgJ3gnLFxuICAgICdzY3JvbGxiYXJYUmFpbCcgXSk7XG4gIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoaSwgW1xuICAgICdjb250YWluZXJIZWlnaHQnLFxuICAgICdjb250ZW50SGVpZ2h0JyxcbiAgICAncGFnZVknLFxuICAgICdyYWlsWUhlaWdodCcsXG4gICAgJ3Njcm9sbGJhclknLFxuICAgICdzY3JvbGxiYXJZSGVpZ2h0JyxcbiAgICAnc2Nyb2xsVG9wJyxcbiAgICAneScsXG4gICAgJ3Njcm9sbGJhcllSYWlsJyBdKTtcbn07XG5cbmZ1bmN0aW9uIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoXG4gIGksXG4gIHJlZlxuKSB7XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgcGFnZVkgPSByZWZbMl07XG4gIHZhciByYWlsWUhlaWdodCA9IHJlZlszXTtcbiAgdmFyIHNjcm9sbGJhclkgPSByZWZbNF07XG4gIHZhciBzY3JvbGxiYXJZSGVpZ2h0ID0gcmVmWzVdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzZdO1xuICB2YXIgeSA9IHJlZls3XTtcbiAgdmFyIHNjcm9sbGJhcllSYWlsID0gcmVmWzhdO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIHZhciBzdGFydGluZ1Njcm9sbFRvcCA9IG51bGw7XG4gIHZhciBzdGFydGluZ01vdXNlUGFnZVkgPSBudWxsO1xuICB2YXIgc2Nyb2xsQnkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIGVsZW1lbnRbc2Nyb2xsVG9wXSA9XG4gICAgICBzdGFydGluZ1Njcm9sbFRvcCArIHNjcm9sbEJ5ICogKGVbcGFnZVldIC0gc3RhcnRpbmdNb3VzZVBhZ2VZKTtcbiAgICBhZGRTY3JvbGxpbmdDbGFzcyhpLCB5KTtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeSk7XG4gICAgaVtzY3JvbGxiYXJZUmFpbF0uY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuY2xpY2tpbmcpO1xuICAgIGkuZXZlbnQudW5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgaS5ldmVudC5iaW5kKGlbc2Nyb2xsYmFyWV0sICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHN0YXJ0aW5nU2Nyb2xsVG9wID0gZWxlbWVudFtzY3JvbGxUb3BdO1xuICAgIHN0YXJ0aW5nTW91c2VQYWdlWSA9IGVbcGFnZVldO1xuICAgIHNjcm9sbEJ5ID1cbiAgICAgIChpW2NvbnRlbnRIZWlnaHRdIC0gaVtjb250YWluZXJIZWlnaHRdKSAvXG4gICAgICAoaVtyYWlsWUhlaWdodF0gLSBpW3Njcm9sbGJhcllIZWlnaHRdKTtcblxuICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBpLmV2ZW50Lm9uY2UoaS5vd25lckRvY3VtZW50LCAnbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlbc2Nyb2xsYmFyWVJhaWxdLmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmNsaWNraW5nKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxudmFyIGtleWJvYXJkID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICB2YXIgZWxlbWVudEhvdmVyZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGVsZW1lbnQsICc6aG92ZXInKTsgfTtcbiAgdmFyIHNjcm9sbGJhckZvY3VzZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGkuc2Nyb2xsYmFyWCwgJzpmb2N1cycpIHx8IG1hdGNoZXMoaS5zY3JvbGxiYXJZLCAnOmZvY3VzJyk7IH07XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgaWYgKGRlbHRhWCA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApIHx8XG4gICAgICAgIChzY3JvbGxUb3AgPj0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQgJiYgZGVsdGFZIDwgMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBpZiAoZGVsdGFZID09PSAwKSB7XG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChzY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApIHx8XG4gICAgICAgIChzY3JvbGxMZWZ0ID49IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCAmJiBkZWx0YVggPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoXG4gICAgICAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQgJiYgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgfHxcbiAgICAgIGUuZGVmYXVsdFByZXZlbnRlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZWxlbWVudEhvdmVyZWQoKSAmJiAhc2Nyb2xsYmFyRm9jdXNlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIDogaS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdJRlJBTUUnKSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LmNvbnRlbnREb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ28gZGVlcGVyIGlmIGVsZW1lbnQgaXMgYSB3ZWJjb21wb25lbnRcbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRWRpdGFibGUoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWx0YVggPSAwO1xuICAgIHZhciBkZWx0YVkgPSAwO1xuXG4gICAgc3dpdGNoIChlLndoaWNoKSB7XG4gICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSAtaS5jb250ZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSAtaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAtMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyB1cFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyByaWdodFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250ZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSBpLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWCA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDogLy8gZG93blxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAtMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMyOiAvLyBzcGFjZSBiYXJcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMzOiAvLyBwYWdlIHVwXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzQ6IC8vIHBhZ2UgZG93blxuICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNjogLy8gaG9tZVxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNTogLy8gZW5kXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJiBkZWx0YVggIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmIGRlbHRhWSAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgd2hlZWwgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgaXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCA9PT0gMDtcbiAgICB2YXIgaXNCb3R0b20gPVxuICAgICAgcm91bmRlZFNjcm9sbFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID09PSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB2YXIgaXNMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwO1xuICAgIHZhciBpc1JpZ2h0ID1cbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cbiAgICB2YXIgaGl0c0JvdW5kO1xuXG4gICAgLy8gcGljayBheGlzIHdpdGggcHJpbWFyeSBkaXJlY3Rpb25cbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkpIHtcbiAgICAgIGhpdHNCb3VuZCA9IGlzVG9wIHx8IGlzQm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRzQm91bmQgPSBpc0xlZnQgfHwgaXNSaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0c0JvdW5kID8gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbiA6IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWx0YUZyb21FdmVudChlKSB7XG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgIHZhciBkZWx0YVkgPSAtMSAqIGUuZGVsdGFZO1xuXG4gICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkZWx0YVkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBPUyBYIFNhZmFyaVxuICAgICAgZGVsdGFYID0gLTEgKiBlLndoZWVsRGVsdGFYIC8gNjtcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YVkgLyA2O1xuICAgIH1cblxuICAgIGlmIChlLmRlbHRhTW9kZSAmJiBlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgLy8gRmlyZWZveCBpbiBkZWx0YU1vZGUgMTogTGluZSBzY3JvbGxpbmdcbiAgICAgIGRlbHRhWCAqPSAxMDtcbiAgICAgIGRlbHRhWSAqPSAxMDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFYICE9PSBkZWx0YVggJiYgZGVsdGFZICE9PSBkZWx0YVkgLyogTmFOIGNoZWNrcyAqLykge1xuICAgICAgLy8gSUUgaW4gc29tZSBtb3VzZSBkcml2ZXJzXG4gICAgICBkZWx0YVggPSAwO1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhO1xuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAvLyByZXZlcnNlIGF4aXMgd2l0aCBzaGlmdCBrZXlcbiAgICAgIHJldHVybiBbLWRlbHRhWSwgLWRlbHRhWF07XG4gICAgfVxuICAgIHJldHVybiBbZGVsdGFYLCBkZWx0YVldO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQodGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIC8vIEZJWE1FOiB0aGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgPHNlbGVjdD4gaXNzdWUgaW4gRkYgYW5kIElFICM1NzFcbiAgICBpZiAoIWVudi5pc1dlYktpdCAmJiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdDpmb2N1cycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjdXJzb3IgPSB0YXJnZXQ7XG5cbiAgICB3aGlsZSAoY3Vyc29yICYmIGN1cnNvciAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmVsZW1lbnQuY29uc3VtaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gZ2V0KGN1cnNvcik7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBbc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZXS5qb2luKFxuICAgICAgICAnJ1xuICAgICAgKTtcblxuICAgICAgLy8gaWYgc2Nyb2xsYWJsZVxuICAgICAgaWYgKG92ZXJmbG93Lm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGN1cnNvci5zY3JvbGxIZWlnaHQgLSBjdXJzb3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZIDwgMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGN1cnNvci5zY3JvbGxXaWR0aCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNld2hlZWxIYW5kbGVyKGUpIHtcbiAgICB2YXIgcmVmID0gZ2V0RGVsdGFGcm9tRXZlbnQoZSk7XG4gICAgdmFyIGRlbHRhWCA9IHJlZlswXTtcbiAgICB2YXIgZGVsdGFZID0gcmVmWzFdO1xuXG4gICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGUudGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xuICAgIGlmICghaS5zZXR0aW5ncy51c2VCb3RoV2hlZWxBeGVzKSB7XG4gICAgICAvLyBkZWx0YVggd2lsbCBvbmx5IGJlIHVzZWQgZm9yIGhvcml6b250YWwgc2Nyb2xsaW5nIGFuZCBkZWx0YVkgd2lsbFxuICAgICAgLy8gb25seSBiZSB1c2VkIGZvciB2ZXJ0aWNhbCBzY3JvbGxpbmcgLSB0aGlzIGlzIHRoZSBkZWZhdWx0XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlICYmICFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgIC8vIG9ubHkgdmVydGljYWwgc2Nyb2xsYmFyIGlzIGFjdGl2ZSBhbmQgdXNlQm90aFdoZWVsQXhlcyBvcHRpb24gaXNcbiAgICAgIC8vIGFjdGl2ZSwgc28gbGV0J3Mgc2Nyb2xsIHZlcnRpY2FsIGJhciB1c2luZyBib3RoIG1vdXNlIHdoZWVsIGF4ZXNcbiAgICAgIGlmIChkZWx0YVkpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhclhBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgLy8gdXNlQm90aFdoZWVsQXhlcyBhbmQgb25seSBob3Jpem9udGFsIGJhciBpcyBhY3RpdmUsIHNvIHVzZSBib3RoXG4gICAgICAvLyB3aGVlbCBheGVzIGZvciBob3Jpem9udGFsIGJhclxuICAgICAgaWYgKGRlbHRhWCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgc2hvdWxkUHJldmVudCA9IHNob3VsZFByZXZlbnQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpO1xuICAgIGlmIChzaG91bGRQcmV2ZW50ICYmICFlLmN0cmxLZXkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cub253aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3doZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cub25tb3VzZXdoZWVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2V3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfVxufTtcblxudmFyIHRvdWNoID0gZnVuY3Rpb24oaSkge1xuICBpZiAoIWVudi5zdXBwb3J0c1RvdWNoICYmICFlbnYuc3VwcG9ydHNJZVBvaW50ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciBtYWduaXR1ZGVYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgICB2YXIgbWFnbml0dWRlWSA9IE1hdGguYWJzKGRlbHRhWSk7XG5cbiAgICBpZiAobWFnbml0dWRlWSA+IG1hZ25pdHVkZVgpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgdXAvZG93biB0aGUgcGFnZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChkZWx0YVkgPCAwICYmIHNjcm9sbFRvcCA9PT0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpIHx8XG4gICAgICAgIChkZWx0YVkgPiAwICYmIHNjcm9sbFRvcCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICAvLyBzZXQgcHJldmVudCBmb3IgbW9iaWxlIENocm9tZSByZWZyZXNoXG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSA9PT0gMCAmJiBkZWx0YVkgPiAwICYmIGVudi5pc0Nocm9tZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hZ25pdHVkZVggPiBtYWduaXR1ZGVZKSB7XG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIGxlZnQvcmlnaHQgYWNyb3NzIHRoZSBwYWdlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKGRlbHRhWCA8IDAgJiYgc2Nyb2xsTGVmdCA9PT0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKSB8fFxuICAgICAgICAoZGVsdGFYID4gMCAmJiBzY3JvbGxMZWZ0ID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGlmZmVyZW5jZVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRpZmZlcmVuY2VYO1xuXG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG4gIH1cblxuICB2YXIgc3RhcnRPZmZzZXQgPSB7fTtcbiAgdmFyIHN0YXJ0VGltZSA9IDA7XG4gIHZhciBzcGVlZCA9IHt9O1xuICB2YXIgZWFzaW5nTG9vcCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gZ2V0VG91Y2goZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1heWJlIElFIHBvaW50ZXJcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEhhbmRsZShlKSB7XG4gICAgaWYgKGUucG9pbnRlclR5cGUgJiYgZS5wb2ludGVyVHlwZSA9PT0gJ3BlbicgJiYgZS5idXR0b25zID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGUucG9pbnRlclR5cGUgJiZcbiAgICAgIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiZcbiAgICAgIGUucG9pbnRlclR5cGUgIT09IGUuTVNQT0lOVEVSX1RZUEVfTU9VU0VcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoIXNob3VsZEhhbmRsZShlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgc3RhcnRPZmZzZXQucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICBzdGFydE9mZnNldC5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xuXG4gICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoZWFzaW5nTG9vcCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZCh0YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yID0gdGFyZ2V0O1xuXG4gICAgd2hpbGUgKGN1cnNvciAmJiBjdXJzb3IgIT09IGVsZW1lbnQpIHtcbiAgICAgIGlmIChjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5lbGVtZW50LmNvbnN1bWluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IGdldChjdXJzb3IpO1xuICAgICAgdmFyIG92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV0uam9pbihcbiAgICAgICAgJydcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIHNjcm9sbGFibGVcbiAgICAgIGlmIChvdmVyZmxvdy5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA8IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsTGVmdCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNob3VsZEhhbmRsZShlKSkge1xuICAgICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XG5cbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0geyBwYWdlWDogdG91Y2gucGFnZVgsIHBhZ2VZOiB0b3VjaC5wYWdlWSB9O1xuXG4gICAgICB2YXIgZGlmZmVyZW5jZVggPSBjdXJyZW50T2Zmc2V0LnBhZ2VYIC0gc3RhcnRPZmZzZXQucGFnZVg7XG4gICAgICB2YXIgZGlmZmVyZW5jZVkgPSBjdXJyZW50T2Zmc2V0LnBhZ2VZIC0gc3RhcnRPZmZzZXQucGFnZVk7XG5cbiAgICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChlLnRhcmdldCwgZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSk7XG4gICAgICBzdGFydE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICB2YXIgdGltZUdhcCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgaWYgKHRpbWVHYXAgPiAwKSB7XG4gICAgICAgIHNwZWVkLnggPSBkaWZmZXJlbmNlWCAvIHRpbWVHYXA7XG4gICAgICAgIHNwZWVkLnkgPSBkaWZmZXJlbmNlWSAvIHRpbWVHYXA7XG4gICAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkUHJldmVudChkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG91Y2hFbmQoKSB7XG4gICAgaWYgKGkuc2V0dGluZ3Muc3dpcGVFYXNpbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICBlYXNpbmdMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3BlZWQueCAmJiAhc3BlZWQueSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkLngpIDwgMC4wMSAmJiBNYXRoLmFicyhzcGVlZC55KSA8IDAuMDEpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5VG91Y2hNb3ZlKHNwZWVkLnggKiAzMCwgc3BlZWQueSAqIDMwKTtcblxuICAgICAgICBzcGVlZC54ICo9IDAuODtcbiAgICAgICAgc3BlZWQueSAqPSAwLjg7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVudi5zdXBwb3J0c1RvdWNoKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydCk7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hlbmQnLCB0b3VjaEVuZCk7XG4gIH0gZWxzZSBpZiAoZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XG4gICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcmRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcm1vdmUnLCB0b3VjaE1vdmUpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVydXAnLCB0b3VjaEVuZCk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuTVNQb2ludGVyRXZlbnQpIHtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyRG93bicsIHRvdWNoU3RhcnQpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJNb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyVXAnLCB0b3VjaEVuZCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGVmYXVsdFNldHRpbmdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgaGFuZGxlcnM6IFsnY2xpY2stcmFpbCcsICdkcmFnLXRodW1iJywgJ2tleWJvYXJkJywgJ3doZWVsJywgJ3RvdWNoJ10sXG4gIG1heFNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBzY3JvbGxpbmdUaHJlc2hvbGQ6IDEwMDAsXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ6IDAsXG4gIHNjcm9sbFlNYXJnaW5PZmZzZXQ6IDAsXG4gIHN1cHByZXNzU2Nyb2xsWDogZmFsc2UsXG4gIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXG4gIHN3aXBlRWFzaW5nOiB0cnVlLFxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcbiAgd2hlZWxQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgd2hlZWxTcGVlZDogMSxcbn0pOyB9O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gICdjbGljay1yYWlsJzogY2xpY2tSYWlsLFxuICAnZHJhZy10aHVtYic6IGRyYWdUaHVtYixcbiAga2V5Ym9hcmQ6IGtleWJvYXJkLFxuICB3aGVlbDogd2hlZWwsXG4gIHRvdWNoOiB0b3VjaCxcbn07XG5cbnZhciBQZXJmZWN0U2Nyb2xsYmFyID0gZnVuY3Rpb24gUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB1c2VyU2V0dGluZ3MpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggdXNlclNldHRpbmdzID09PSB2b2lkIDAgKSB1c2VyU2V0dGluZ3MgPSB7fTtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgaXMgc3BlY2lmaWVkIHRvIGluaXRpYWxpemUgUGVyZmVjdFNjcm9sbGJhcicpO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLm1haW4pO1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3MoKTtcbiAgZm9yICh2YXIga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgIHRoaXMkMS5zZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcldpZHRoID0gbnVsbDtcbiAgdGhpcy5jb250YWluZXJIZWlnaHQgPSBudWxsO1xuICB0aGlzLmNvbnRlbnRXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGVudEhlaWdodCA9IG51bGw7XG5cbiAgdmFyIGZvY3VzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5mb2N1cyk7IH07XG4gIHZhciBibHVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5mb2N1cyk7IH07XG5cbiAgdGhpcy5pc1J0bCA9IGdldChlbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnO1xuICB0aGlzLmlzTmVnYXRpdmVTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcmlnaW5hbFNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTE7XG4gICAgcmVzdWx0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IDwgMDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBvcmlnaW5hbFNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSkoKTtcbiAgdGhpcy5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSB0aGlzLmlzTmVnYXRpdmVTY3JvbGxcbiAgICA/IGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoXG4gICAgOiAwO1xuICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50TWFuYWdlcigpO1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG5cbiAgdGhpcy5zY3JvbGxiYXJYUmFpbCA9IGRpdihjbHMuZWxlbWVudC5yYWlsKCd4JykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclggPSBkaXYoY2xzLmVsZW1lbnQudGh1bWIoJ3gnKSk7XG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJYKTtcbiAgdGhpcy5zY3JvbGxiYXJYLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2ZvY3VzJywgZm9jdXMpO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJYLCAnYmx1cicsIGJsdXIpO1xuICB0aGlzLnNjcm9sbGJhclhBY3RpdmUgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhXaWR0aCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWExlZnQgPSBudWxsO1xuICB2YXIgcmFpbFhTdHlsZSA9IGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYQm90dG9tID0gcGFyc2VJbnQocmFpbFhTdHlsZS5ib3R0b20sIDEwKTtcbiAgaWYgKGlzTmFOKHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSkpIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJYVG9wID0gdG9JbnQocmFpbFhTdHlsZS50b3ApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20gPSB0cnVlO1xuICB9XG4gIHRoaXMucmFpbEJvcmRlclhXaWR0aCA9XG4gICAgdG9JbnQocmFpbFhTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICsgdG9JbnQocmFpbFhTdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcbiAgLy8gU2V0IHJhaWwgdG8gZGlzcGxheTpibG9jayB0byBjYWxjdWxhdGUgbWFyZ2luc1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxYTWFyZ2luV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUubWFyZ2luTGVmdCkgKyB0b0ludChyYWlsWFN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHRoaXMucmFpbFhXaWR0aCA9IG51bGw7XG4gIHRoaXMucmFpbFhSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5zY3JvbGxiYXJZUmFpbCA9IGRpdihjbHMuZWxlbWVudC5yYWlsKCd5JykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclkgPSBkaXYoY2xzLmVsZW1lbnQudGh1bWIoJ3knKSk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJZKTtcbiAgdGhpcy5zY3JvbGxiYXJZLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2ZvY3VzJywgZm9jdXMpO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJZLCAnYmx1cicsIGJsdXIpO1xuICB0aGlzLnNjcm9sbGJhcllBY3RpdmUgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllIZWlnaHQgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllUb3AgPSBudWxsO1xuICB2YXIgcmFpbFlTdHlsZSA9IGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZUmlnaHQgPSBwYXJzZUludChyYWlsWVN0eWxlLnJpZ2h0LCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhcllSaWdodCkpIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbGJhcllMZWZ0ID0gdG9JbnQocmFpbFlTdHlsZS5sZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPSB0cnVlO1xuICB9XG4gIHRoaXMuc2Nyb2xsYmFyWU91dGVyV2lkdGggPSB0aGlzLmlzUnRsID8gb3V0ZXJXaWR0aCh0aGlzLnNjcm9sbGJhclkpIDogbnVsbDtcbiAgdGhpcy5yYWlsQm9yZGVyWVdpZHRoID1cbiAgICB0b0ludChyYWlsWVN0eWxlLmJvcmRlclRvcFdpZHRoKSArIHRvSW50KHJhaWxZU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxZTWFyZ2luSGVpZ2h0ID1cbiAgICB0b0ludChyYWlsWVN0eWxlLm1hcmdpblRvcCkgKyB0b0ludChyYWlsWVN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5yYWlsWVJhdGlvID0gbnVsbDtcblxuICB0aGlzLnJlYWNoID0ge1xuICAgIHg6XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbExlZnQgPj0gdGhpcy5jb250ZW50V2lkdGggLSB0aGlzLmNvbnRhaW5lcldpZHRoXG4gICAgICAgICAgPyAnZW5kJ1xuICAgICAgICAgIDogbnVsbCxcbiAgICB5OlxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbFRvcCA+PSB0aGlzLmNvbnRlbnRIZWlnaHQgLSB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgID8gJ2VuZCdcbiAgICAgICAgICA6IG51bGwsXG4gIH07XG5cbiAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcblxuICB0aGlzLnNldHRpbmdzLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXJOYW1lKSB7IHJldHVybiBoYW5kbGVyc1toYW5kbGVyTmFtZV0odGhpcyQxKTsgfSk7XG5cbiAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7IC8vIGZvciBvblNjcm9sbCBvbmx5XG4gIHRoaXMubGFzdFNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7IC8vIGZvciBvblNjcm9sbCBvbmx5XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLmVsZW1lbnQsICdzY3JvbGwnLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gdGhpcyQxLm9uU2Nyb2xsKGUpOyB9KTtcbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJlY2FsY3VhdGUgbmVnYXRpdmUgc2Nyb2xsTGVmdCBhZGp1c3RtZW50XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyB0aGlzLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICA6IDA7XG5cbiAgLy8gUmVjYWxjdWxhdGUgcmFpbCBtYXJnaW5zXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHRoaXMucmFpbFhNYXJnaW5XaWR0aCA9XG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpLm1hcmdpbkxlZnQpICtcbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCkubWFyZ2luUmlnaHQpO1xuICB0aGlzLnJhaWxZTWFyZ2luSGVpZ2h0ID1cbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCkubWFyZ2luVG9wKSArXG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpLm1hcmdpbkJvdHRvbSk7XG5cbiAgLy8gSGlkZSBzY3JvbGxiYXJzIG5vdCB0byBhZmZlY3Qgc2Nyb2xsV2lkdGggYW5kIHNjcm9sbEhlaWdodFxuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcblxuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcblxuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAndG9wJywgMCwgZmFsc2UsIHRydWUpO1xuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAnbGVmdCcsIDAsIGZhbHNlLCB0cnVlKTtcblxuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJycgfSk7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5vblNjcm9sbCA9IGZ1bmN0aW9uIG9uU2Nyb2xsIChlKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICd0b3AnLCB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wIC0gdGhpcy5sYXN0U2Nyb2xsVG9wKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYoXG4gICAgdGhpcyxcbiAgICAnbGVmdCcsXG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgLSB0aGlzLmxhc3RTY3JvbGxMZWZ0XG4gICk7XG5cbiAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gTWF0aC5mbG9vcih0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0O1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZXZlbnQudW5iaW5kQWxsKCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclgpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJZKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMucmVtb3ZlUHNDbGFzc2VzKCk7XG5cbiAgLy8gdW5zZXQgZWxlbWVudHNcbiAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYUmFpbCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBudWxsO1xuXG4gIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUucmVtb3ZlUHNDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlUHNDbGFzc2VzICgpIHtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWVcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFuYW1lLm1hdGNoKC9ecHMoWy1fXS4rfCkkLyk7IH0pXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmZlY3RTY3JvbGxiYXI7XG4iLCJpbXBvcnQgYm9keVNjcm9sbExvY2sgZnJvbSAnYm9keS1zY3JvbGwtbG9jayc7XG5pbXBvcnQgR2xpZGUgZnJvbSAnQGdsaWRlanMvZ2xpZGUnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuXG5jb25zdCBkaXNhYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmRpc2FibGVCb2R5U2Nyb2xsO1xuY29uc3QgZW5hYmxlQm9keVNjcm9sbCA9IGJvZHlTY3JvbGxMb2NrLmVuYWJsZUJvZHlTY3JvbGw7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpO1xuY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltZycpO1xuY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKTtcbmNvbnN0IG1vZGFsVGV4dEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fdGV4dC1ibG9jaycpO1xuY29uc3QgbW9kYWxWYWx1ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX192YWx1ZS10aXRsZScpO1xuY29uc3QgbW9kYWxWYWx1ZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlLWxpc3RfX2l0ZW0nKTtcbmNvbnN0IG1vZGFsQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hZGQtYmxvY2snKTtcbmNvbnN0IG1vZGFsQWRkTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYWRkLWxlZnQnKTtcblxuY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtdHJpZ2dlcicpO1xuXG5mdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxJbWcuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDIwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDIwMCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbW9kYWxUZXh0QmxvY2tzWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCA0MDApO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBtb2RhbFRleHRCbG9ja3NbMV0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0sIDYwMCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsVmFsdWVUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgODAwKTtcbiAgXG4gIG1vZGFsVmFsdWVJdGVtcy5mb3JFYWNoKChlbCwgaSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfSwgODAwICsgaSAqIDEwMCk7XG4gIH0pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsQWRkLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9LCA2MDApO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG1vZGFsQWRkTGVmdC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSwgODAwKTtcblxuICBpZiAobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSkge1xuICAgIGRpc2FibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGVuYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2luZG93T25DbGljayhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgIHRvZ2dsZU1vZGFsKCk7XG4gIH1cbn1cblxudHJpZ2dlcnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVNb2RhbCgpO1xuICB9KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dPbkNsaWNrKTtcblxuLy8gbmV3IEdsaWRlKCcuZ2xpZGUnLCB7XG4vLyAgIHBlclZpZXc6IDEwLFxuLy8gfSkubW91bnQoKTtcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFnLWxpc3QnKTtcbmNvbnN0IHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoY29udGFpbmVyKTtcbi8vIGNvbnN0IG1zID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWctbGlzdF9fbGluaycpLmZvckVhY2goKGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IG1vZGFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1saXN0Jyk7XG5jb25zdCB0YXJnZXRFbGVtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1saXN0X19jb250ZW50Jyk7XG5jb25zdCB0cmlnZ2Vyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtbGlzdC10cmlnZ2VyJyk7XG5cbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsTGlzdCgpIHtcbiAgbW9kYWxMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBpZiAobW9kYWxMaXN0LmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICBkaXNhYmxlQm9keVNjcm9sbCh0YXJnZXRFbGVtZW50TGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgZW5hYmxlQm9keVNjcm9sbCh0YXJnZXRFbGVtZW50TGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2luZG93T25DbGlja0xpc3QoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxMaXN0KSB7XG4gICAgdG9nZ2xlTW9kYWxMaXN0KCk7XG4gIH1cbn1cblxudHJpZ2dlcnNMaXN0LmZvckVhY2goKGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlTW9kYWxMaXN0KCk7XG4gIH0pO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdpbmRvd09uQ2xpY2tMaXN0KTtcblxuXG5cblxuIl0sIm5hbWVzIjpbImRlZmluZSIsInRoaXMiLCJnZXQiLCJ0b0ludCIsImRpc2FibGVCb2R5U2Nyb2xsIiwiYm9keVNjcm9sbExvY2siLCJlbmFibGVCb2R5U2Nyb2xsIiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXRFbGVtZW50IiwibW9kYWxJbWciLCJtb2RhbFRpdGxlIiwibW9kYWxUZXh0QmxvY2tzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsVmFsdWVUaXRsZSIsIm1vZGFsVmFsdWVJdGVtcyIsIm1vZGFsQWRkIiwibW9kYWxBZGRMZWZ0IiwidHJpZ2dlcnMiLCJ0b2dnbGVNb2RhbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZvckVhY2giLCJlbCIsImkiLCJjb250YWlucyIsIndpbmRvd09uQ2xpY2siLCJldmVudCIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3aW5kb3ciLCJjb250YWluZXIiLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCJtb2RhbExpc3QiLCJ0YXJnZXRFbGVtZW50TGlzdCIsInRyaWdnZXJzTGlzdCIsInRvZ2dsZU1vZGFsTGlzdCIsIndpbmRvd09uQ2xpY2tMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFBRSxPQUFPQSxTQUFNLEVBQUVBLFNBQU0sQ0FBQyxHQUFHLENBQUNBLFNBQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQUFBK0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEFBQXNDLENBQUMsQ0FBQ0MsY0FBSSxDQUFDLFNBQVMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0hBQWdILENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMs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QUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDMUU7Ozs7Ozs7O0lBUUQsV0FBVyxFQUFFLFNBQVMsV0FBVyxHQUFHO01BQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDaEM7S0FDRjs7Ozs7Ozs7SUFRRCxjQUFjLEVBQUUsU0FBUyxjQUFjLEdBQUc7TUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNsQztLQUNGOzs7Ozs7Ozs7SUFTRCxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsUUFBUSxFQUFFO01BQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUM3RDtLQUNGOzs7Ozs7Ozs7SUFTRCxNQUFNLEVBQUUsU0FBUyxNQUFNLENBQUMsUUFBUSxFQUFFO01BQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFD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ckIsQ0FBWDs7O0FBR0ExQixTQUFTTSxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNTLE9BQTdDLENBQXFELFVBQUNDLEVBQUQsRUFBUTtLQUN4RE0sZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQ0MsQ0FBRCxFQUFPO01BQ2hDQyxjQUFGO0dBREY7Q0FERjs7QUFNQSxJQUFNSyxZQUFZN0IsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLElBQU02QixvQkFBb0I5QixTQUFTQyxhQUFULENBQXVCLHNCQUF2QixDQUExQjtBQUNBLElBQU04QixlQUFlL0IsU0FBU00sZ0JBQVQsQ0FBMEIscUJBQTFCLENBQXJCOztBQUVBLFNBQVMwQixlQUFULEdBQTJCO1lBQ2ZuQixTQUFWLENBQW9CQyxNQUFwQixDQUEyQixXQUEzQjtNQUNJZSxVQUFVaEIsU0FBVixDQUFvQkssUUFBcEIsQ0FBNkIsV0FBN0IsQ0FBSixFQUErQztzQkFDM0JZLGlCQUFsQjtHQURGLE1BRU87cUJBQ1lBLGlCQUFqQjs7OztBQUlKLFNBQVNHLGlCQUFULENBQTJCYixLQUEzQixFQUFrQztNQUM1QkEsTUFBTUMsTUFBTixLQUFpQlEsU0FBckIsRUFBZ0M7Ozs7O0FBS2xDRSxhQUFhaEIsT0FBYixDQUFxQixVQUFDQyxFQUFELEVBQVE7S0FDeEJNLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUNDLENBQUQsRUFBTztNQUNoQ0MsY0FBRjs7R0FERjtDQURGOztBQU9BQyxPQUFPSCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ1csaUJBQWpDOzs7OyIsInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJanB1ZFd4c0xDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWhjblJsYld0aGJHOWxkaTlYWldKRGIyUnBibWN2ZEdWemRDMXdjbTlxWldOMEwyNXZaR1ZmYlc5a2RXeGxjeTlpYjJSNUxYTmpjbTlzYkMxc2IyTnJMMnhwWWk5aWIyUjVVMk55YjJ4c1RHOWpheTV0YVc0dWFuTWlMQ0l2VlhObGNuTXZZWEowWlcxcllXeHZaWFl2VjJWaVEyOWthVzVuTDNSbGMzUXRjSEp2YW1WamRDOXViMlJsWDIxdlpIVnNaWE12UUdkc2FXUmxhbk12WjJ4cFpHVXZaR2x6ZEM5bmJHbGtaUzVsYzIwdWFuTWlMQ0l2VlhObGNuTXZZWEowWlcxcllXeHZaWFl2VjJWaVEyOWthVzVuTDNSbGMzUXRjSEp2YW1WamRDOXViMlJsWDIxdlpIVnNaWE12Y0dWeVptVmpkQzF6WTNKdmJHeGlZWEl2WkdsemRDOXdaWEptWldOMExYTmpjbTlzYkdKaGNpNWxjMjB1YW5NaUxDSXZWWE5sY25NdllYSjBaVzFyWVd4dlpYWXZWMlZpUTI5a2FXNW5MM1JsYzNRdGNISnZhbVZqZEM5emNtTXZjMk55YVhCMGN5OXRZV2x1TG1weklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaUZtZFc1amRHbHZiaWhsTEhRcGUybG1LRndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUdSbFptbHVaU1ltWkdWbWFXNWxMbUZ0WkNsa1pXWnBibVVvVzF3aVpYaHdiM0owYzF3aVhTeDBLVHRsYkhObElHbG1LRndpZFc1a1pXWnBibVZrWENJaFBYUjVjR1Z2WmlCbGVIQnZjblJ6S1hRb1pYaHdiM0owY3lrN1pXeHpaWHQyWVhJZ2J6MTdmVHQwS0c4cExHVXVZbTlrZVZOamNtOXNiRXh2WTJzOWIzMTlLSFJvYVhNc1puVnVZM1JwYjI0b1pYaHdiM0owY3lsN1hDSjFjMlVnYzNSeWFXTjBYQ0k3Wm5WdVkzUnBiMjRnY2lobEtYdHBaaWhCY25KaGVTNXBjMEZ5Y21GNUtHVXBLWHRtYjNJb2RtRnlJSFE5TUN4dlBVRnljbUY1S0dVdWJHVnVaM1JvS1R0MFBHVXViR1Z1WjNSb08zUXJLeWx2VzNSZFBXVmJkRjA3Y21WMGRYSnVJRzk5Y21WMGRYSnVJRUZ5Y21GNUxtWnliMjBvWlNsOVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNYQ0pmWDJWelRXOWtkV3hsWENJc2UzWmhiSFZsT2lFd2ZTazdkbUZ5SUd3OUlURTdhV1lvWENKMWJtUmxabWx1WldSY0lpRTlkSGx3Wlc5bUlIZHBibVJ2ZHlsN2RtRnlJR1U5ZTJkbGRDQndZWE56YVhabEtDbDdiRDBoTUgxOU8zZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWRHVnpkRkJoYzNOcGRtVmNJaXh1ZFd4c0xHVXBMSGRwYm1SdmR5NXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRndpZEdWemRGQmhjM05wZG1WY0lpeHVkV3hzTEdVcGZYWmhjaUJrUFZ3aWRXNWtaV1pwYm1Wa1hDSWhQWFI1Y0dWdlppQjNhVzVrYjNjbUpuZHBibVJ2ZHk1dVlYWnBaMkYwYjNJbUpuZHBibVJ2ZHk1dVlYWnBaMkYwYjNJdWNHeGhkR1p2Y20wbUppOXBVQ2hoWkh4b2IyNWxmRzlrS1M4dWRHVnpkQ2gzYVc1a2IzY3VibUYyYVdkaGRHOXlMbkJzWVhSbWIzSnRLU3hqUFZ0ZExIVTlJVEVzWVQwdE1TeHpQWFp2YVdRZ01DeDJQWFp2YVdRZ01DeG1QV1oxYm1OMGFXOXVLSFFwZTNKbGRIVnliaUJqTG5OdmJXVW9ablZ1WTNScGIyNG9aU2w3Y21WMGRYSnVJU2doWlM1dmNIUnBiMjV6TG1Gc2JHOTNWRzkxWTJoTmIzWmxmSHdoWlM1dmNIUnBiMjV6TG1Gc2JHOTNWRzkxWTJoTmIzWmxLSFFwS1gwcGZTeHRQV1oxYm1OMGFXOXVLR1VwZTNaaGNpQjBQV1Y4ZkhkcGJtUnZkeTVsZG1WdWREdHlaWFIxY200aElXWW9kQzUwWVhKblpYUXBmSHdvTVR4MExuUnZkV05vWlhNdWJHVnVaM1JvZkh3b2RDNXdjbVYyWlc1MFJHVm1ZWFZzZENZbWRDNXdjbVYyWlc1MFJHVm1ZWFZzZENncExDRXhLU2w5TEc4OVpuVnVZM1JwYjI0b0tYdHpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2w3ZG05cFpDQXdJVDA5ZGlZbUtHUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVXVjR0ZrWkdsdVoxSnBaMmgwUFhZc2RqMTJiMmxrSURBcExIWnZhV1FnTUNFOVBYTW1KaWhrYjJOMWJXVnVkQzVpYjJSNUxuTjBlV3hsTG05MlpYSm1iRzkzUFhNc2N6MTJiMmxrSURBcGZTbDlPMlY0Y0c5eWRITXVaR2x6WVdKc1pVSnZaSGxUWTNKdmJHdzlablZ1WTNScGIyNG9hU3hsS1h0cFppaGtLWHRwWmlnaGFTbHlaWFIxY200Z2RtOXBaQ0JqYjI1emIyeGxMbVZ5Y205eUtGd2laR2x6WVdKc1pVSnZaSGxUWTNKdmJHd2dkVzV6ZFdOalpYTnpablZzSUMwZ2RHRnlaMlYwUld4bGJXVnVkQ0J0ZFhOMElHSmxJSEJ5YjNacFpHVmtJSGRvWlc0Z1kyRnNiR2x1WnlCa2FYTmhZbXhsUW05a2VWTmpjbTlzYkNCdmJpQkpUMU1nWkdWMmFXTmxjeTVjSWlrN2FXWW9hU1ltSVdNdWMyOXRaU2htZFc1amRHbHZiaWhsS1h0eVpYUjFjbTRnWlM1MFlYSm5aWFJGYkdWdFpXNTBQVDA5YVgwcEtYdDJZWElnZEQxN2RHRnlaMlYwUld4bGJXVnVkRHBwTEc5d2RHbHZibk02Wlh4OGUzMTlPMk05VzEwdVkyOXVZMkYwS0hJb1l5a3NXM1JkS1N4cExtOXVkRzkxWTJoemRHRnlkRDFtZFc1amRHbHZiaWhsS1hzeFBUMDlaUzUwWVhKblpYUlViM1ZqYUdWekxteGxibWQwYUNZbUtHRTlaUzUwWVhKblpYUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGa3BmU3hwTG05dWRHOTFZMmh0YjNabFBXWjFibU4wYVc5dUtHVXBlM1poY2lCMExHOHNiaXh5T3pFOVBUMWxMblJoY21kbGRGUnZkV05vWlhNdWJHVnVaM1JvSmlZb2J6MXBMSEk5S0hROVpTa3VkR0Z5WjJWMFZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWkxXRXNJV1lvZEM1MFlYSm5aWFFwSmlZb2J5WW1NRDA5UFc4dWMyTnliMnhzVkc5d0ppWXdQSEkvYlNoMEtUb29iajF2S1NZbWJpNXpZM0p2Ykd4SVpXbG5hSFF0Ymk1elkzSnZiR3hVYjNBOFBXNHVZMnhwWlc1MFNHVnBaMmgwSmlaeVBEQS9iU2gwS1RwMExuTjBiM0JRY205d1lXZGhkR2x2YmlncEtTbDlMSFY4ZkNoa2IyTjFiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0Z3aWRHOTFZMmh0YjNabFhDSXNiU3hzUDN0d1lYTnphWFpsT2lFeGZUcDJiMmxrSURBcExIVTlJVEFwZlgxbGJITmxlMjQ5WlN4elpYUlVhVzFsYjNWMEtHWjFibU4wYVc5dUtDbDdhV1lvZG05cFpDQXdQVDA5ZGlsN2RtRnlJR1U5SVNGdUppWWhNRDA5UFc0dWNtVnpaWEoyWlZOamNtOXNiRUpoY2tkaGNDeDBQWGRwYm1SdmR5NXBibTVsY2xkcFpIUm9MV1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWpiR2xsYm5SWGFXUjBhRHRsSmlZd1BIUW1KaWgyUFdSdlkzVnRaVzUwTG1KdlpIa3VjM1I1YkdVdWNHRmtaR2x1WjFKcFoyaDBMR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1V1Y0dGa1pHbHVaMUpwWjJoMFBYUXJYQ0p3ZUZ3aUtYMTJiMmxrSURBOVBUMXpKaVlvY3oxa2IyTjFiV1Z1ZEM1aWIyUjVMbk4wZVd4bExtOTJaWEptYkc5M0xHUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVXViM1psY21ac2IzYzlYQ0pvYVdSa1pXNWNJaWw5S1R0MllYSWdiejE3ZEdGeVoyVjBSV3hsYldWdWREcHBMRzl3ZEdsdmJuTTZaWHg4ZTMxOU8yTTlXMTB1WTI5dVkyRjBLSElvWXlrc1cyOWRLWDEyWVhJZ2JuMHNaWGh3YjNKMGN5NWpiR1ZoY2tGc2JFSnZaSGxUWTNKdmJHeE1iMk5yY3oxbWRXNWpkR2x2YmlncGUyUS9LR011Wm05eVJXRmphQ2htZFc1amRHbHZiaWhsS1h0bExuUmhjbWRsZEVWc1pXMWxiblF1YjI1MGIzVmphSE4wWVhKMFBXNTFiR3dzWlM1MFlYSm5aWFJGYkdWdFpXNTBMbTl1ZEc5MVkyaHRiM1psUFc1MWJHeDlLU3gxSmlZb1pHOWpkVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaGNJblJ2ZFdOb2JXOTJaVndpTEcwc2JEOTdjR0Z6YzJsMlpUb2hNWDA2ZG05cFpDQXdLU3gxUFNFeEtTeGpQVnRkTEdFOUxURXBPaWh2S0Nrc1l6MWJYU2w5TEdWNGNHOXlkSE11Wlc1aFlteGxRbTlrZVZOamNtOXNiRDFtZFc1amRHbHZiaWgwS1h0cFppaGtLWHRwWmlnaGRDbHlaWFIxY200Z2RtOXBaQ0JqYjI1emIyeGxMbVZ5Y205eUtGd2laVzVoWW14bFFtOWtlVk5qY205c2JDQjFibk4xWTJObGMzTm1kV3dnTFNCMFlYSm5aWFJGYkdWdFpXNTBJRzExYzNRZ1ltVWdjSEp2ZG1sa1pXUWdkMmhsYmlCallXeHNhVzVuSUdWdVlXSnNaVUp2WkhsVFkzSnZiR3dnYjI0Z1NVOVRJR1JsZG1salpYTXVYQ0lwTzNRdWIyNTBiM1ZqYUhOMFlYSjBQVzUxYkd3c2RDNXZiblJ2ZFdOb2JXOTJaVDF1ZFd4c0xHTTlZeTVtYVd4MFpYSW9ablZ1WTNScGIyNG9aU2w3Y21WMGRYSnVJR1V1ZEdGeVoyVjBSV3hsYldWdWRDRTlQWFI5S1N4MUppWXdQVDA5WXk1c1pXNW5kR2dtSmloa2IyTjFiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtGd2lkRzkxWTJodGIzWmxYQ0lzYlN4c1AzdHdZWE56YVhabE9pRXhmVHAyYjJsa0lEQXBMSFU5SVRFcGZXVnNjMlVnTVQwOVBXTXViR1Z1WjNSb0ppWmpXekJkTG5SaGNtZGxkRVZzWlcxbGJuUTlQVDEwUHlodktDa3NZejFiWFNrNll6MWpMbVpwYkhSbGNpaG1kVzVqZEdsdmJpaGxLWHR5WlhSMWNtNGdaUzUwWVhKblpYUkZiR1Z0Wlc1MElUMDlkSDBwZlgwcE8xeHVJaXdpTHlvaFhHNGdLaUJIYkdsa1pTNXFjeUIyTXk0eUxqUmNiaUFxSUNoaktTQXlNREV6TFRJd01UZ2dTc1NaWkhKNlpXb2dRMmhoeFlKMVltVnJJRHhxWldSeWVtVnFMbU5vWVd4MVltVnJRR2R0WVdsc0xtTnZiVDRnS0doMGRIQTZMeTlxWldSeWVtVnFZMmhoYkhWaVpXc3VZMjl0THlsY2JpQXFJRkpsYkdWaGMyVmtJSFZ1WkdWeUlIUm9aU0JOU1ZRZ1RHbGpaVzV6WlM1Y2JpQXFMMXh1WEc1MllYSWdaR1ZtWVhWc2RITWdQU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlVlWEJsSUc5bUlIUm9aU0J0YjNabGJXVnVkQzVjYmlBZ0lDcGNiaUFnSUNvZ1FYWmhhV3hoWW14bElIUjVjR1Z6T2x4dUlDQWdLaUJnYzJ4cFpHVnlZQ0F0SUZKbGQybHVaSE1nYzJ4cFpHVnlJSFJ2SUhSb1pTQnpkR0Z5ZEM5bGJtUWdkMmhsYmlCcGRDQnlaV0ZqYUdWeklIUm9aU0JtYVhKemRDQnZjaUJzWVhOMElITnNhV1JsTGx4dUlDQWdLaUJnWTJGeWIzVnpaV3hnSUMwZ1EyaGhibWRsY3lCemJHbGtaWE1nZDJsMGFHOTFkQ0J6ZEdGeWRHbHVaeUJ2ZG1WeUlIZG9aVzRnYVhRZ2NtVmhZMmhsY3lCMGFHVWdabWx5YzNRZ2IzSWdiR0Z6ZENCemJHbGtaUzVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTFOMGNtbHVaMzFjYmlBZ0lDb3ZYRzRnSUhSNWNHVTZJQ2R6Ykdsa1pYSW5MRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkR0Z5ZENCaGRDQnpjR1ZqYVdacFl5QnpiR2xrWlNCdWRXMWlaWElnWkdWbWFXNWxaQ0IzYVhSb0lIcGxjbTh0WW1GelpXUWdhVzVrWlhndVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdE9kVzFpWlhKOVhHNGdJQ0FxTDF4dUlDQnpkR0Z5ZEVGME9pQXdMRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkJJRzUxYldKbGNpQnZaaUJ6Ykdsa1pYTWdkbWx6YVdKc1pTQnZiaUIwYUdVZ2MybHVaMnhsSUhacFpYZHdiM0owTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDQWdLaTljYmlBZ2NHVnlWbWxsZHpvZ01TeGNibHh1SUNBdktpcGNiaUFnSUNvZ1JtOWpkWE1nWTNWeWNtVnVkR3g1SUdGamRHbDJaU0J6Ykdsa1pTQmhkQ0JoSUhOd1pXTnBabWxsWkNCd2IzTnBkR2x2YmlCcGJpQjBhR1VnZEhKaFkyc3VYRzRnSUNBcVhHNGdJQ0FxSUVGMllXbHNZV0pzWlNCcGJuQjFkSE02WEc0Z0lDQXFJR0JqWlc1MFpYSmdJQzBnUTNWeWNtVnVkQ0J6Ykdsa1pTQjNhV3hzSUdKbElHRnNkMkY1Y3lCbWIyTjFjMlZrSUdGMElIUm9aU0JqWlc1MFpYSWdiMllnWVNCMGNtRmpheTVjYmlBZ0lDb2dZREFzTVN3eUxETXVMaTVnSUMwZ1EzVnljbVZ1ZENCemJHbGtaU0IzYVd4c0lHSmxJR1p2WTNWelpXUWdiMjRnZEdobElITndaV05wWm1sbFpDQjZaWEp2TFdKaGMyVmtJR2x1WkdWNExseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdVM1J5YVc1bmZFNTFiV0psY24xY2JpQWdJQ292WEc0Z0lHWnZZM1Z6UVhRNklEQXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFRWdjMmw2WlNCdlppQjBhR1VnWjJGd0lHRmtaR1ZrSUdKbGRIZGxaVzRnYzJ4cFpHVnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNBZ0tpOWNiaUFnWjJGd09pQXhNQ3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRMmhoYm1kbElITnNhV1JsY3lCaFpuUmxjaUJoSUhOd1pXTnBabWxsWkNCcGJuUmxjblpoYkM0Z1ZYTmxJR0JtWVd4elpXQWdabTl5SUhSMWNtNXBibWNnYjJabUlHRjFkRzl3YkdGNUxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZFSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQmhkWFJ2Y0d4aGVUb2dabUZzYzJVc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZOMGIzQWdZWFYwYjNCc1lYa2diMjRnYlc5MWMyVnZkbVZ5SUdWMlpXNTBMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3UW05dmJHVmhibjFjYmlBZ0lDb3ZYRzRnSUdodmRtVnljR0YxYzJVNklIUnlkV1VzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUZzYkc5M0lHWnZjaUJqYUdGdVoybHVaeUJ6Ykdsa1pYTWdkMmwwYUNCc1pXWjBJR0Z1WkNCeWFXZG9kQ0JyWlhsaWIyRnlaQ0JoY25KdmQzTXVYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRDYjI5c1pXRnVmVnh1SUNBZ0tpOWNiaUFnYTJWNVltOWhjbVE2SUhSeWRXVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBiM0FnY25WdWJtbHVaeUJnY0dWeVZtbGxkMkFnYm5WdFltVnlJRzltSUhOc2FXUmxjeUJtY205dElIUm9aU0JsYm1RdUlGVnpaU0IwYUdselhHNGdJQ0FxSUc5d2RHbHZiaUJwWmlCNWIzVWdaRzl1SjNRZ2QyRnVkQ0IwYnlCb1lYWmxJR0Z1SUdWdGNIUjVJSE53WVdObElHRm1kR1Z5WEc0Z0lDQXFJR0VnYzJ4cFpHVnlMaUJYYjNKcmN5QnZibXg1SUhkcGRHZ2dZSE5zYVdSbGNtQWdkSGx3WlNCaGJtUWdZVnh1SUNBZ0tpQnViMjR0WTJWdWRHVnlaV1FnWUdadlkzVnpRWFJnSUhObGRIUnBibWN1WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0Q2IyOXNaV0Z1ZlZ4dUlDQWdLaTljYmlBZ1ltOTFibVE2SUdaaGJITmxMRnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQk5hVzVwYldGc0lITjNhWEJsSUdScGMzUmhibU5sSUc1bFpXUmxaQ0IwYnlCamFHRnVaMlVnZEdobElITnNhV1JsTGlCVmMyVWdZR1poYkhObFlDQm1iM0lnZEhWeWJtbHVaeUJ2Wm1ZZ1lTQnpkMmx3YVc1bkxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZFSnZiMnhsWVc1OVhHNGdJQ0FxTDF4dUlDQnpkMmx3WlZSb2NtVnphRzlzWkRvZ09EQXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFMXBibWx0WVd3Z2JXOTFjMlVnWkhKaFp5QmthWE4wWVc1alpTQnVaV1ZrWldRZ2RHOGdZMmhoYm1kbElIUm9aU0J6Ykdsa1pTNGdWWE5sSUdCbVlXeHpaV0FnWm05eUlIUjFjbTVwYm1jZ2IyWm1JR0VnWkhKaFoyZHBibWN1WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0T2RXMWlaWEo4UW05dmJHVmhibjFjYmlBZ0lDb3ZYRzRnSUdSeVlXZFVhSEpsYzJodmJHUTZJREV5TUN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUVNCdFlYaHBiWFZ0SUc1MWJXSmxjaUJ2WmlCemJHbGtaWE1nZEc4Z2QyaHBZMmdnYlc5MlpXMWxiblFnZDJsc2JDQmlaU0J0WVdSbElHOXVJSE4zYVhCcGJtY2diM0lnWkhKaFoyZHBibWN1SUZWelpTQmdabUZzYzJWZ0lHWnZjaUIxYm14cGJXbDBaV1F1WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0T2RXMWlaWEo4UW05dmJHVmhibjFjYmlBZ0lDb3ZYRzRnSUhCbGNsUnZkV05vT2lCbVlXeHpaU3hjYmx4dUlDQXZLaXBjYmlBZ0lDb2dUVzkyYVc1bklHUnBjM1JoYm1ObElISmhkR2x2SUc5bUlIUm9aU0J6Ykdsa1pYTWdiMjRnWVNCemQybHdhVzVuSUdGdVpDQmtjbUZuWjJsdVp5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFnSUNvdlhHNGdJSFJ2ZFdOb1VtRjBhVzg2SURBdU5TeGNibHh1SUNBdktpcGNiaUFnSUNvZ1FXNW5iR1VnY21WeGRXbHlaV1FnZEc4Z1lXTjBhWFpoZEdVZ2MyeHBaR1Z6SUcxdmRtbHVaeUJ2YmlCemQybHdhVzVuSUc5eUlHUnlZV2RuYVc1bkxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ0FnS2k5Y2JpQWdkRzkxWTJoQmJtZHNaVG9nTkRVc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVSMWNtRjBhVzl1SUc5bUlIUm9aU0JoYm1sdFlYUnBiMjRnYVc0Z2JXbHNiR2x6WldOdmJtUnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNBZ0tpOWNiaUFnWVc1cGJXRjBhVzl1UkhWeVlYUnBiMjQ2SURRd01DeGNibHh1SUNBdktpcGNiaUFnSUNvZ1FXeHNiM2R6SUd4dmIzQnBibWNnZEdobElHQnpiR2xrWlhKZ0lIUjVjR1V1SUZOc2FXUmxjaUIzYVd4c0lISmxkMmx1WkNCMGJ5QjBhR1VnWm1seWMzUXZiR0Z6ZENCemJHbGtaU0IzYUdWdUlHbDBKM01nWVhRZ2RHaGxJSE4wWVhKMEwyVnVaQzVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTBKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1SUNCeVpYZHBibVE2SUhSeWRXVXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFUjFjbUYwYVc5dUlHOW1JSFJvWlNCeVpYZHBibVJwYm1jZ1lXNXBiV0YwYVc5dUlHOW1JSFJvWlNCZ2MyeHBaR1Z5WUNCMGVYQmxJR2x1SUcxcGJHeHBjMlZqYjI1a2N5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFnSUNvdlhHNGdJSEpsZDJsdVpFUjFjbUYwYVc5dU9pQTRNREFzWEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVZoYzJsdVp5Qm1kVzVqZEdsdmJpQm1iM0lnZEdobElHRnVhVzFoZEdsdmJpNWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMU4wY21sdVozMWNiaUFnSUNvdlhHNGdJR0Z1YVcxaGRHbHZibFJwYldsdVowWjFibU02SUNkamRXSnBZeTFpWlhwcFpYSW9MakUyTlN3Z0xqZzBNQ3dnTGpRME1Dd2dNU2tuTEZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJVYUhKdmRIUnNaU0JqYjNOMGJIa2daWFpsYm5SeklHRjBJRzF2YzNRZ2IyNWpaU0J3WlhJZ1pYWmxjbmtnZDJGcGRDQnRhV3hzYVhObFkyOXVaSE11WEc0Z0lDQXFYRzRnSUNBcUlFQjBlWEJsSUh0T2RXMWlaWEo5WEc0Z0lDQXFMMXh1SUNCMGFISnZkSFJzWlRvZ01UQXNYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFMXZkbWx1WnlCa2FYSmxZM1JwYjI0Z2JXOWtaUzVjYmlBZ0lDcGNiaUFnSUNvZ1FYWmhhV3hoWW14bElHbHVjSFYwY3pwY2JpQWdJQ29nTFNBbmJIUnlKeUF0SUd4bFpuUWdkRzhnY21sbmFIUWdiVzkyWlcxbGJuUXNYRzRnSUNBcUlDMGdKM0owYkNjZ0xTQnlhV2RvZENCMGJ5QnNaV1owSUcxdmRtVnRaVzUwTGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1UzUnlhVzVuZlZ4dUlDQWdLaTljYmlBZ1pHbHlaV04wYVc5dU9pQW5iSFJ5Snl4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVkdobElHUnBjM1JoYm1ObElIWmhiSFZsSUc5bUlIUm9aU0J1WlhoMElHRnVaQ0J3Y21WMmFXOTFjeUIyYVdWM2NHOXlkSE1nZDJocFkyaGNiaUFnSUNvZ2FHRjJaU0IwYnlCd1pXVnJJR2x1SUhSb1pTQmpkWEp5Wlc1MElIWnBaWGN1SUVGalkyVndkSE1nYm5WdFltVnlJR0Z1WkZ4dUlDQWdLaUJ3YVhobGJITWdZWE1nWVNCemRISnBibWN1SUV4bFpuUWdZVzVrSUhKcFoyaDBJSEJsWld0cGJtY2dZMkZ1SUdKbFhHNGdJQ0FxSUhObGRDQjFjQ0J6WlhCaGNtRjBaV3g1SUhkcGRHZ2dZU0JrYVhKbFkzUnBiMjV6SUc5aWFtVmpkQzVjYmlBZ0lDcGNiaUFnSUNvZ1JtOXlJR1Y0WVcxd2JHVTZYRzRnSUNBcUlHQXhNREJnSUMwZ1VHVmxheUF4TURCd2VDQnZiaUIwYUdVZ1ltOTBhQ0J6YVdSbGN5NWNiaUFnSUNvZ2V5QmlaV1p2Y21VNklERXdNQ3dnWVdaMFpYSTZJRFV3SUgxZ0lDMGdVR1ZsYXlBeE1EQndlQ0J2YmlCMGFHVWdiR1ZtZENCemFXUmxJR0Z1WkNBMU1IQjRJRzl1SUhSb1pTQnlhV2RvZENCemFXUmxMbHh1SUNBZ0tseHVJQ0FnS2lCQWRIbHdaU0I3VG5WdFltVnlmRk4wY21sdVozeFBZbXBsWTNSOVhHNGdJQ0FxTDF4dUlDQndaV1ZyT2lBd0xGeHVYRzRnSUM4cUtseHVJQ0FnS2lCRGIyeHNaV04wYVc5dUlHOW1JRzl3ZEdsdmJuTWdZWEJ3YkdsbFpDQmhkQ0J6Y0dWamFXWnBaV1FnYldWa2FXRWdZbkpsWVd0d2IybHVkSE11WEc0Z0lDQXFJRVp2Y2lCbGVHRnRjR3hsT2lCa2FYTndiR0Y1SUhSM2J5QnpiR2xrWlhNZ2NHVnlJSFpwWlhjZ2RXNWtaWElnT0RBd2NIZ3VYRzRnSUNBcUlHQjdYRzRnSUNBcUlDQWdKemd3TUhCNEp6b2dlMXh1SUNBZ0tpQWdJQ0FnY0dWeVZtbGxkem9nTWx4dUlDQWdLaUFnSUgxY2JpQWdJQ29nZldCY2JpQWdJQ292WEc0Z0lHSnlaV0ZyY0c5cGJuUnpPaUI3ZlN4Y2JseHVJQ0F2S2lwY2JpQWdJQ29nUTI5c2JHVmpkR2x2YmlCdlppQnBiblJsY201aGJHeDVJSFZ6WldRZ1NGUk5UQ0JqYkdGemMyVnpMbHh1SUNBZ0tseHVJQ0FnS2lCQWRHOWtieUJTWldaaFkzUnZjaUJnYzJ4cFpHVnlZQ0JoYm1RZ1lHTmhjbTkxYzJWc1lDQndjbTl3WlhKMGFXVnpJSFJ2SUhOcGJtZHNaU0JnZEhsd1pUb2dleUJ6Ykdsa1pYSTZJQ2NuTENCallYSnZkWE5sYkRvZ0p5Y2dmV0FnYjJKcVpXTjBYRzRnSUNBcUlFQjBlWEJsSUh0UFltcGxZM1I5WEc0Z0lDQXFMMXh1SUNCamJHRnpjMlZ6T2lCN1hHNGdJQ0FnWkdseVpXTjBhVzl1T2lCN1hHNGdJQ0FnSUNCc2RISTZJQ2RuYkdsa1pTMHRiSFJ5Snl4Y2JpQWdJQ0FnSUhKMGJEb2dKMmRzYVdSbExTMXlkR3duWEc0Z0lDQWdmU3hjYmlBZ0lDQnpiR2xrWlhJNklDZG5iR2xrWlMwdGMyeHBaR1Z5Snl4Y2JpQWdJQ0JqWVhKdmRYTmxiRG9nSjJkc2FXUmxMUzFqWVhKdmRYTmxiQ2NzWEc0Z0lDQWdjM2RwY0dWaFlteGxPaUFuWjJ4cFpHVXRMWE4zYVhCbFlXSnNaU2NzWEc0Z0lDQWdaSEpoWjJkcGJtYzZJQ2RuYkdsa1pTMHRaSEpoWjJkcGJtY25MRnh1SUNBZ0lHTnNiMjVsVTJ4cFpHVTZJQ2RuYkdsa1pWOWZjMnhwWkdVdExXTnNiMjVsSnl4Y2JpQWdJQ0JoWTNScGRtVk9ZWFk2SUNkbmJHbGtaVjlmWW5Wc2JHVjBMUzFoWTNScGRtVW5MRnh1SUNBZ0lHRmpkR2wyWlZOc2FXUmxPaUFuWjJ4cFpHVmZYM05zYVdSbExTMWhZM1JwZG1VbkxGeHVJQ0FnSUdScGMyRmliR1ZrUVhKeWIzYzZJQ2RuYkdsa1pWOWZZWEp5YjNjdExXUnBjMkZpYkdWa0oxeHVJQ0I5WEc1OU8xeHVYRzR2S2lwY2JpQXFJRTkxZEhCMWRITWdkMkZ5Ym1sdVp5QnRaWE56WVdkbElIUnZJSFJvWlNCaWIzZHpaWElnWTI5dWMyOXNaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdJSHRUZEhKcGJtZDlJRzF6WjF4dUlDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnZDJGeWJpaHRjMmNwSUh0Y2JpQWdZMjl1YzI5c1pTNWxjbkp2Y2loY0lsdEhiR2xrWlNCM1lYSnVYVG9nWENJZ0t5QnRjMmNwTzF4dWZWeHVYRzUyWVhJZ1gzUjVjR1Z2WmlBOUlIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCMGVYQmxiMllnVTNsdFltOXNMbWwwWlhKaGRHOXlJRDA5UFNCY0luTjViV0p2YkZ3aUlEOGdablZ1WTNScGIyNGdLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHOWlhanRjYm4wZ09pQm1kVzVqZEdsdmJpQW9iMkpxS1NCN1hHNGdJSEpsZEhWeWJpQnZZbW9nSmlZZ2RIbHdaVzltSUZONWJXSnZiQ0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lJQ1ltSUc5aWFpNWpiMjV6ZEhKMVkzUnZjaUE5UFQwZ1UzbHRZbTlzSUNZbUlHOWlhaUFoUFQwZ1UzbHRZbTlzTG5CeWIzUnZkSGx3WlNBL0lGd2ljM2x0WW05c1hDSWdPaUIwZVhCbGIyWWdiMkpxTzF4dWZUdGNibHh1ZG1GeUlHTnNZWE56UTJGc2JFTm9aV05ySUQwZ1puVnVZM1JwYjI0Z0tHbHVjM1JoYm1ObExDQkRiMjV6ZEhKMVkzUnZjaWtnZTF4dUlDQnBaaUFvSVNocGJuTjBZVzVqWlNCcGJuTjBZVzVqWlc5bUlFTnZibk4wY25WamRHOXlLU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvWENKRFlXNXViM1FnWTJGc2JDQmhJR05zWVhOeklHRnpJR0VnWm5WdVkzUnBiMjVjSWlrN1hHNGdJSDFjYm4wN1hHNWNiblpoY2lCamNtVmhkR1ZEYkdGemN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdablZ1WTNScGIyNGdaR1ZtYVc1bFVISnZjR1Z5ZEdsbGN5aDBZWEpuWlhRc0lIQnliM0J6S1NCN1hHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCd2NtOXdjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJR1JsYzJOeWFYQjBiM0lnUFNCd2NtOXdjMXRwWFR0Y2JpQWdJQ0FnSUdSbGMyTnlhWEIwYjNJdVpXNTFiV1Z5WVdKc1pTQTlJR1JsYzJOeWFYQjBiM0l1Wlc1MWJXVnlZV0pzWlNCOGZDQm1ZV3h6WlR0Y2JpQWdJQ0FnSUdSbGMyTnlhWEIwYjNJdVkyOXVabWxuZFhKaFlteGxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lHbG1JQ2hjSW5aaGJIVmxYQ0lnYVc0Z1pHVnpZM0pwY0hSdmNpa2daR1Z6WTNKcGNIUnZjaTUzY21sMFlXSnNaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvZEdGeVoyVjBMQ0JrWlhOamNtbHdkRzl5TG10bGVTd2daR1Z6WTNKcGNIUnZjaWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2hEYjI1emRISjFZM1J2Y2l3Z2NISnZkRzlRY205d2N5d2djM1JoZEdsalVISnZjSE1wSUh0Y2JpQWdJQ0JwWmlBb2NISnZkRzlRY205d2N5a2daR1ZtYVc1bFVISnZjR1Z5ZEdsbGN5aERiMjV6ZEhKMVkzUnZjaTV3Y205MGIzUjVjR1VzSUhCeWIzUnZVSEp2Y0hNcE8xeHVJQ0FnSUdsbUlDaHpkR0YwYVdOUWNtOXdjeWtnWkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWhEYjI1emRISjFZM1J2Y2l3Z2MzUmhkR2xqVUhKdmNITXBPMXh1SUNBZ0lISmxkSFZ5YmlCRGIyNXpkSEoxWTNSdmNqdGNiaUFnZlR0Y2JuMG9LVHRjYmx4dWRtRnlJRjlsZUhSbGJtUnpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpQjhmQ0JtZFc1amRHbHZiaUFvZEdGeVoyVjBLU0I3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnZG1GeUlITnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmx4dUlDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnpiM1Z5WTJVcElIdGNiaUFnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYzI5MWNtTmxMQ0JyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJSFJoY21kbGRGdHJaWGxkSUQwZ2MyOTFjbU5sVzJ0bGVWMDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIUmhjbWRsZER0Y2JuMDdYRzVjYm5aaGNpQm5aWFFnUFNCbWRXNWpkR2x2YmlCblpYUW9iMkpxWldOMExDQndjbTl3WlhKMGVTd2djbVZqWldsMlpYSXBJSHRjYmlBZ2FXWWdLRzlpYW1WamRDQTlQVDBnYm5Wc2JDa2diMkpxWldOMElEMGdSblZ1WTNScGIyNHVjSEp2ZEc5MGVYQmxPMXh1SUNCMllYSWdaR1Z6WXlBOUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0lvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3WEc1Y2JpQWdhV1lnS0dSbGMyTWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhaaGNpQndZWEpsYm5RZ1BTQlBZbXBsWTNRdVoyVjBVSEp2ZEc5MGVYQmxUMllvYjJKcVpXTjBLVHRjYmx4dUlDQWdJR2xtSUNod1lYSmxiblFnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIxYm1SbFptbHVaV1E3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCblpYUW9jR0Z5Wlc1MExDQndjbTl3WlhKMGVTd2djbVZqWldsMlpYSXBPMXh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJR2xtSUNoY0luWmhiSFZsWENJZ2FXNGdaR1Z6WXlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJrWlhOakxuWmhiSFZsTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhaaGNpQm5aWFIwWlhJZ1BTQmtaWE5qTG1kbGREdGNibHh1SUNBZ0lHbG1JQ2huWlhSMFpYSWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwZEdWeUxtTmhiR3dvY21WalpXbDJaWElwTzF4dUlDQjlYRzU5TzF4dVhHNTJZWElnYVc1b1pYSnBkSE1nUFNCbWRXNWpkR2x2YmlBb2MzVmlRMnhoYzNNc0lITjFjR1Z5UTJ4aGMzTXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnpkWEJsY2tOc1lYTnpJQ0U5UFNCY0ltWjFibU4wYVc5dVhDSWdKaVlnYzNWd1pYSkRiR0Z6Y3lBaFBUMGdiblZzYkNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSlRkWEJsY2lCbGVIQnlaWE56YVc5dUlHMTFjM1FnWldsMGFHVnlJR0psSUc1MWJHd2diM0lnWVNCbWRXNWpkR2x2Yml3Z2JtOTBJRndpSUNzZ2RIbHdaVzltSUhOMWNHVnlRMnhoYzNNcE8xeHVJQ0I5WEc1Y2JpQWdjM1ZpUTJ4aGMzTXVjSEp2ZEc5MGVYQmxJRDBnVDJKcVpXTjBMbU55WldGMFpTaHpkWEJsY2tOc1lYTnpJQ1ltSUhOMWNHVnlRMnhoYzNNdWNISnZkRzkwZVhCbExDQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSTZJSHRjYmlBZ0lDQWdJSFpoYkhWbE9pQnpkV0pEYkdGemN5eGNiaUFnSUNBZ0lHVnVkVzFsY21GaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ2QzSnBkR0ZpYkdVNklIUnlkV1VzWEc0Z0lDQWdJQ0JqYjI1bWFXZDFjbUZpYkdVNklIUnlkV1ZjYmlBZ0lDQjlYRzRnSUgwcE8xeHVJQ0JwWmlBb2MzVndaWEpEYkdGemN5a2dUMkpxWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltSUQ4Z1QySnFaV04wTG5ObGRGQnliM1J2ZEhsd1pVOW1LSE4xWWtOc1lYTnpMQ0J6ZFhCbGNrTnNZWE56S1NBNklITjFZa05zWVhOekxsOWZjSEp2ZEc5Zlh5QTlJSE4xY0dWeVEyeGhjM003WEc1OU8xeHVYRzUyWVhJZ2NHOXpjMmxpYkdWRGIyNXpkSEoxWTNSdmNsSmxkSFZ5YmlBOUlHWjFibU4wYVc5dUlDaHpaV3htTENCallXeHNLU0I3WEc0Z0lHbG1JQ2doYzJWc1ppa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNaV1psY21WdVkyVkZjbkp2Y2loY0luUm9hWE1nYUdGemJpZDBJR0psWlc0Z2FXNXBkR2xoYkdselpXUWdMU0J6ZFhCbGNpZ3BJR2hoYzI0bmRDQmlaV1Z1SUdOaGJHeGxaRndpS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCallXeHNJQ1ltSUNoMGVYQmxiMllnWTJGc2JDQTlQVDBnWENKdlltcGxZM1JjSWlCOGZDQjBlWEJsYjJZZ1kyRnNiQ0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0EvSUdOaGJHd2dPaUJ6Wld4bU8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCRGIyNTJaWEowY3lCMllXeDFaU0JsYm5SbGNtVmtJR0Z6SUc1MWJXSmxjbHh1SUNvZ2IzSWdjM1J5YVc1bklIUnZJR2x1ZEdWblpYSWdkbUZzZFdVdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhaaGJIVmxYRzRnS2lCQWNtVjBkWEp1Y3lCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUIwYjBsdWRDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdjR0Z5YzJWSmJuUW9kbUZzZFdVcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVOdmJuWmxjblJ6SUhaaGJIVmxJR1Z1ZEdWeVpXUWdZWE1nYm5WdFltVnlYRzRnS2lCdmNpQnpkSEpwYm1jZ2RHOGdabXhoZENCMllXeDFaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdkbUZzZFdWY2JpQXFJRUJ5WlhSMWNtNXpJSHRPZFcxaVpYSjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlIUnZSbXh2WVhRb2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlIQmhjbk5sUm14dllYUW9kbUZzZFdVcE8xeHVmVnh1WEc0dktpcGNiaUFxSUVsdVpHbGpZWFJsY3lCM2FHVjBhR1Z5SUhSb1pTQnpjR1ZqYVdacFpXUWdkbUZzZFdVZ2FYTWdZU0J6ZEhKcGJtY3VYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdLbjBnSUNCMllXeDFaVnh1SUNvZ1FISmxkSFZ5YmlCN1FtOXZiR1ZoYm4xY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVhOVGRISnBibWNvZG1Gc2RXVXBJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjNOMGNtbHVaeWM3WEc1OVhHNWNiaThxS2x4dUlDb2dTVzVrYVdOaGRHVnpJSGRvWlhSb1pYSWdkR2hsSUhOd1pXTnBabWxsWkNCMllXeDFaU0JwY3lCaGJpQnZZbXBsWTNRdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN0tuMGdkbUZzZFdWY2JpQXFJRUJ5WlhSMWNtNGdlMEp2YjJ4bFlXNTlYRzRnS2x4dUlDb2dRSE5sWlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFtRnphR3RsYm1GekwzVnVaR1Z5YzJOdmNtVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTlBZbXBsWTNRb2RtRnNkV1VwSUh0Y2JpQWdkbUZ5SUhSNWNHVWdQU0IwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z0ozVnVaR1ZtYVc1bFpDY2dPaUJmZEhsd1pXOW1LSFpoYkhWbEtUdGNibHh1SUNCeVpYUjFjbTRnZEhsd1pTQTlQVDBnSjJaMWJtTjBhVzl1SnlCOGZDQjBlWEJsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUFoSVhaaGJIVmxPeUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMVzFwZUdWa0xXOXdaWEpoZEc5eWMxeHVmVnh1WEc0dktpcGNiaUFxSUVsdVpHbGpZWFJsY3lCM2FHVjBhR1Z5SUhSb1pTQnpjR1ZqYVdacFpXUWdkbUZzZFdVZ2FYTWdZU0J1ZFcxaVpYSXVYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdLbjBnZG1Gc2RXVmNiaUFxSUVCeVpYUjFjbTRnZTBKdmIyeGxZVzU5WEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VG5WdFltVnlLSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R1ZFcxaVpYSW5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nWVNCbWRXNWpkR2x2Ymk1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUhzcWZTQjJZV3gxWlZ4dUlDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTkdkVzVqZEdsdmJpaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5ablZ1WTNScGIyNG5PMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVaR2xqWVhSbGN5QjNhR1YwYUdWeUlIUm9aU0J6Y0dWamFXWnBaV1FnZG1Gc2RXVWdhWE1nZFc1a1pXWnBibVZrTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZXlwOUlIWmhiSFZsWEc0Z0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMxVnVaR1ZtYVc1bFpDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5kVzVrWldacGJtVmtKenRjYm4xY2JseHVMeW9xWEc0Z0tpQkpibVJwWTJGMFpYTWdkMmhsZEdobGNpQjBhR1VnYzNCbFkybG1hV1ZrSUhaaGJIVmxJR2x6SUdGdUlHRnljbUY1TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZXlwOUlIWmhiSFZsWEc0Z0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwRnljbUY1S0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMllXeDFaUzVqYjI1emRISjFZM1J2Y2lBOVBUMGdRWEp5WVhrN1hHNTlYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxjeUJoYm1RZ2FXNXBkR2xoYkdsNlpYTWdjM0JsWTJsbWFXVmtJR052Ykd4bFkzUnBiMjRnYjJZZ1pYaDBaVzV6YVc5dWN5NWNiaUFxSUVWaFkyZ2daWGgwWlc1emFXOXVJSEpsWTJWcGRtVnpJR0ZqWTJWemN5QjBieUJwYm5OMFlXNWpaU0J2WmlCbmJHbGtaU0JoYm1RZ2NtVnpkQ0J2WmlCamIyMXdiMjVsYm5SekxseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCbmJHbGtaVnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdWNGRHVnVjMmx2Ym5OY2JpQXFYRzRnS2lCQWNtVjBkWEp1Y3lCN1QySnFaV04wZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJ0YjNWdWRDaG5iR2xrWlN3Z1pYaDBaVzV6YVc5dWN5d2daWFpsYm5SektTQjdYRzRnSUhaaGNpQmpiMjF3YjI1bGJuUnpJRDBnZTMwN1hHNWNiaUFnWm05eUlDaDJZWElnYm1GdFpTQnBiaUJsZUhSbGJuTnBiMjV6S1NCN1hHNGdJQ0FnYVdZZ0tHbHpSblZ1WTNScGIyNG9aWGgwWlc1emFXOXVjMXR1WVcxbFhTa3BJSHRjYmlBZ0lDQWdJR052YlhCdmJtVnVkSE5iYm1GdFpWMGdQU0JsZUhSbGJuTnBiMjV6VzI1aGJXVmRLR2RzYVdSbExDQmpiMjF3YjI1bGJuUnpMQ0JsZG1WdWRITXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCM1lYSnVLQ2RGZUhSbGJuTnBiMjRnYlhWemRDQmlaU0JoSUdaMWJtTjBhVzl1SnlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1ptOXlJQ2gyWVhJZ1gyNWhiV1VnYVc0Z1kyOXRjRzl1Wlc1MGN5a2dlMXh1SUNBZ0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0dOdmJYQnZibVZ1ZEhOYlgyNWhiV1ZkTG0xdmRXNTBLU2tnZTF4dUlDQWdJQ0FnWTI5dGNHOXVaVzUwYzF0ZmJtRnRaVjB1Ylc5MWJuUW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMjl0Y0c5dVpXNTBjenRjYm4xY2JseHVMeW9xWEc0Z0tpQkVaV1pwYm1WeklHZGxkSFJsY2lCaGJtUWdjMlYwZEdWeUlIQnliM0JsY25SNUlHOXVJSFJvWlNCemNHVmphV1pwWldRZ2IySnFaV04wTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnYjJKcUlDQWdJQ0FnSUNBZ1QySnFaV04wSUhkb1pYSmxJSEJ5YjNCbGNuUjVJR2hoY3lCMGJ5QmlaU0JrWldacGJtVmtMbHh1SUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZlNCd2NtOXdJQ0FnSUNBZ0lDQk9ZVzFsSUc5bUlIUm9aU0JrWldacGJtVmtJSEJ5YjNCbGNuUjVMbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCa1pXWnBibWwwYVc5dUlDQkhaWFFnWVc1a0lITmxkQ0JrWldacGJtbDBhVzl1Y3lCbWIzSWdkR2hsSUhCeWIzQmxjblI1TGx4dUlDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnWkdWbWFXNWxLRzlpYWl3Z2NISnZjQ3dnWkdWbWFXNXBkR2x2YmlrZ2UxeHVJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2IySnFMQ0J3Y205d0xDQmtaV1pwYm1sMGFXOXVLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQlRiM0owY3lCaGNHaGhZbVYwYVdOaGJHeDVJRzlpYW1WamRDQnJaWGx6TGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTA5aWFtVmpkSDBnYjJKcVhHNGdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlITnZjblJMWlhsektHOWlhaWtnZTF4dUlDQnlaWFIxY200Z1QySnFaV04wTG10bGVYTW9iMkpxS1M1emIzSjBLQ2t1Y21Wa2RXTmxLR1oxYm1OMGFXOXVJQ2h5TENCcktTQjdYRzRnSUNBZ2NsdHJYU0E5SUc5aWFsdHJYVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnlXMnRkTENCeU8xeHVJQ0I5TENCN2ZTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1RXVnlaMlZ6SUhCaGMzTmxaQ0J6WlhSMGFXNW5jeUJ2WW1wbFkzUWdkMmwwYUNCa1pXWmhkV3gwSUc5d2RHbHZibk11WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JrWldaaGRXeDBjMXh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCelpYUjBhVzVuYzF4dUlDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ292WEc1bWRXNWpkR2x2YmlCdFpYSm5aVTl3ZEdsdmJuTW9aR1ZtWVhWc2RITXNJSE5sZEhScGJtZHpLU0I3WEc0Z0lIWmhjaUJ2Y0hScGIyNXpJRDBnWDJWNGRHVnVaSE1vZTMwc0lHUmxabUYxYkhSekxDQnpaWFIwYVc1bmN5azdYRzVjYmlBZ0x5OGdZRTlpYW1WamRDNWhjM05wWjI1Z0lHUnZJRzV2ZENCa1pXVndiSGtnYldWeVoyVWdiMkpxWldOMGN5d2djMjhnZDJWY2JpQWdMeThnYUdGMlpTQjBieUJrYnlCcGRDQnRZVzUxWVd4c2VTQm1iM0lnWlhabGNua2dibVZ6ZEdWa0lHOWlhbVZqZEZ4dUlDQXZMeUJwYmlCdmNIUnBiMjV6TGlCQmJIUm9iM1ZuYUNCcGRDQmtiMlZ6SUc1dmRDQnNiMjlySUhOdFlYSjBMRnh1SUNBdkx5QnBkQ2R6SUhOdFlXeHNaWElnWVc1a0lHWmhjM1JsY2lCMGFHRnVJSE52YldVZ1ptRnVZM2xjYmlBZ0x5OGdiV1Z5WjJsdVp5QmtaV1Z3TFcxbGNtZGxJR0ZzWjI5eWFYUm9iU0J6WTNKcGNIUXVYRzRnSUdsbUlDaHpaWFIwYVc1bmN5NW9ZWE5QZDI1UWNtOXdaWEowZVNnblkyeGhjM05sY3ljcEtTQjdYRzRnSUNBZ2IzQjBhVzl1Y3k1amJHRnpjMlZ6SUQwZ1gyVjRkR1Z1WkhNb2UzMHNJR1JsWm1GMWJIUnpMbU5zWVhOelpYTXNJSE5sZEhScGJtZHpMbU5zWVhOelpYTXBPMXh1WEc0Z0lDQWdhV1lnS0hObGRIUnBibWR6TG1Oc1lYTnpaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29KMlJwY21WamRHbHZiaWNwS1NCN1hHNGdJQ0FnSUNCdmNIUnBiMjV6TG1Oc1lYTnpaWE11WkdseVpXTjBhVzl1SUQwZ1gyVjRkR1Z1WkhNb2UzMHNJR1JsWm1GMWJIUnpMbU5zWVhOelpYTXVaR2x5WldOMGFXOXVMQ0J6WlhSMGFXNW5jeTVqYkdGemMyVnpMbVJwY21WamRHbHZiaWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tITmxkSFJwYm1kekxtaGhjMDkzYmxCeWIzQmxjblI1S0NkaWNtVmhhM0J2YVc1MGN5Y3BLU0I3WEc0Z0lDQWdiM0IwYVc5dWN5NWljbVZoYTNCdmFXNTBjeUE5SUY5bGVIUmxibVJ6S0h0OUxDQmtaV1poZFd4MGN5NWljbVZoYTNCdmFXNTBjeXdnYzJWMGRHbHVaM011WW5KbFlXdHdiMmx1ZEhNcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHOXdkR2x2Ym5NN1hHNTlYRzVjYm5aaGNpQkZkbVZ1ZEhOQ2RYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1emRISjFZM1FnWVNCRmRtVnVkRUoxY3lCcGJuTjBZVzVqWlM1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHVjJaVzUwYzF4dUlDQWdLaTljYmlBZ1puVnVZM1JwYjI0Z1JYWmxiblJ6UW5WektDa2dlMXh1SUNBZ0lIWmhjaUJsZG1WdWRITWdQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTUNBbUppQmhjbWQxYldWdWRITmJNRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklIdDlPMXh1SUNBZ0lHTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRVYyWlc1MGMwSjFjeWs3WEc1Y2JpQWdJQ0IwYUdsekxtVjJaVzUwY3lBOUlHVjJaVzUwY3p0Y2JpQWdJQ0IwYUdsekxtaHZjQ0E5SUdWMlpXNTBjeTVvWVhOUGQyNVFjbTl3WlhKMGVUdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJCWkdSeklHeHBjM1JsYm1WeUlIUnZJSFJvWlNCemNHVmphV1psWkNCbGRtVnVkQzVjYmlBZ0lDcGNiaUFnSUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ4UVhKeVlYbDlJR1YyWlc1MFhHNGdJQ0FxSUVCd1lYSmhiU0I3Um5WdVkzUnBiMjU5SUdoaGJtUnNaWEpjYmlBZ0lDb3ZYRzVjYmx4dUlDQmpjbVZoZEdWRGJHRnpjeWhGZG1WdWRITkNkWE1zSUZ0N1hHNGdJQ0FnYTJWNU9pQW5iMjRuTEZ4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQnZiaWhsZG1WdWRDd2dhR0Z1Wkd4bGNpa2dlMXh1SUNBZ0lDQWdhV1lnS0dselFYSnlZWGtvWlhabGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pYWmxiblF1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtOXVLR1YyWlc1MFcybGRMQ0JvWVc1a2JHVnlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QkRjbVZoZEdVZ2RHaGxJR1YyWlc1MEozTWdiMkpxWldOMElHbG1JRzV2ZENCNVpYUWdZM0psWVhSbFpGeHVJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtaHZjQzVqWVd4c0tIUm9hWE11WlhabGJuUnpMQ0JsZG1WdWRDa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkSUQwZ1cxMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVGa1pDQjBhR1VnYUdGdVpHeGxjaUIwYnlCeGRXVjFaVnh1SUNBZ0lDQWdkbUZ5SUdsdVpHVjRJRDBnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkTG5CMWMyZ29hR0Z1Wkd4bGNpa2dMU0F4TzF4dVhHNGdJQ0FnSUNBdkx5QlFjbTkyYVdSbElHaGhibVJzWlNCaVlXTnJJR1p2Y2lCeVpXMXZkbUZzSUc5bUlHVjJaVzUwWEc0Z0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0J5WlcxdmRtVTZJR1oxYm1OMGFXOXVJSEpsYlc5MlpTZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkVzJsdVpHVjRYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU2RXNXpJSEpsWjJsemRHVnlaV1FnYUdGdVpHeGxjbk1nWm05eUlITndaV05wWm1sbFpDQmxkbVZ1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mRUZ5Y21GNWZTQmxkbVZ1ZEZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VDJKcVpXTjBQWDBnWTI5dWRHVjRkRnh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkbGJXbDBKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z1pXMXBkQ2hsZG1WdWRDd2dZMjl1ZEdWNGRDa2dlMXh1SUNBZ0lDQWdhV1lnS0dselFYSnlZWGtvWlhabGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1pYWmxiblF1YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtVnRhWFFvWlhabGJuUmJhVjBzSUdOdmJuUmxlSFFwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRWxtSUhSb1pTQmxkbVZ1ZENCa2IyVnpiaWQwSUdWNGFYTjBMQ0J2Y2lCMGFHVnlaU2R6SUc1dklHaGhibVJzWlhKeklHbHVJSEYxWlhWbExDQnFkWE4wSUd4bFlYWmxYRzRnSUNBZ0lDQnBaaUFvSVhSb2FYTXVhRzl3TG1OaGJHd29kR2hwY3k1bGRtVnVkSE1zSUdWMlpXNTBLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFTjVZMnhsSUhSb2NtOTFaMmdnWlhabGJuUnpJSEYxWlhWbExDQm1hWEpsSVZ4dUlDQWdJQ0FnZEdocGN5NWxkbVZ1ZEhOYlpYWmxiblJkTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0dsMFpXMHBJSHRjYmlBZ0lDQWdJQ0FnYVhSbGJTaGpiMjUwWlhoMElIeDhJSHQ5S1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdmVjBwTzF4dUlDQnlaWFIxY200Z1JYWmxiblJ6UW5Wek8xeHVmU2dwTzF4dVhHNTJZWElnUjJ4cFpHVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQzhxS2x4eVhHNGdJQ0FxSUVOdmJuTjBjblZqZENCbmJHbGtaUzVjY2x4dUlDQWdLbHh5WEc0Z0lDQXFJRUJ3WVhKaGJTQWdlMU4wY21sdVozMGdjMlZzWldOMGIzSmNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdFBZbXBsWTNSOUlHOXdkR2x2Ym5OY2NseHVJQ0FnS2k5Y2JpQWdablZ1WTNScGIyNGdSMnhwWkdVb2MyVnNaV04wYjNJcElIdGNiaUFnSUNCMllYSWdiM0IwYVc5dWN5QTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4SUNZbUlHRnlaM1Z0Wlc1MGMxc3hYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekZkSURvZ2UzMDdYRzRnSUNBZ1kyeGhjM05EWVd4c1EyaGxZMnNvZEdocGN5d2dSMnhwWkdVcE8xeHVYRzRnSUNBZ2RHaHBjeTVmWXlBOUlIdDlPMXh1SUNBZ0lIUm9hWE11WDNRZ1BTQmJYVHRjYmlBZ0lDQjBhR2x6TGw5bElEMGdibVYzSUVWMlpXNTBjMEoxY3lncE8xeHVYRzRnSUNBZ2RHaHBjeTVrYVhOaFlteGxaQ0E5SUdaaGJITmxPMXh1SUNBZ0lIUm9hWE11YzJWc1pXTjBiM0lnUFNCelpXeGxZM1J2Y2p0Y2JpQWdJQ0IwYUdsekxuTmxkSFJwYm1keklEMGdiV1Z5WjJWUGNIUnBiMjV6S0dSbFptRjFiSFJ6TENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0IwYUdsekxtbHVaR1Y0SUQwZ2RHaHBjeTV6WlhSMGFXNW5jeTV6ZEdGeWRFRjBPMXh1SUNCOVhHNWNiaUFnTHlvcVhISmNiaUFnSUNvZ1NXNXBkR2xoYkdsNlpYTWdaMnhwWkdVdVhISmNiaUFnSUNwY2NseHVJQ0FnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnWlhoMFpXNXphVzl1Y3lCRGIyeHNaV04wYVc5dUlHOW1JR1Y0ZEdWdWMybHZibk1nZEc4Z2FXNXBkR2xoYkdsNlpTNWNjbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdEhiR2xrWlgxY2NseHVJQ0FnS2k5Y2JseHVYRzRnSUdOeVpXRjBaVU5zWVhOektFZHNhV1JsTENCYmUxeHVJQ0FnSUd0bGVUb2dKMjF2ZFc1MEp5eGNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYlc5MWJuUWtKREVvS1NCN1hHNGdJQ0FnSUNCMllYSWdaWGgwWlc1emFXOXVjeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dlMzA3WEc1Y2JpQWdJQ0FnSUhSb2FYTXVYMlV1WlcxcGRDZ25iVzkxYm5RdVltVm1iM0psSnlrN1hHNWNiaUFnSUNBZ0lHbG1JQ2hwYzA5aWFtVmpkQ2hsZUhSbGJuTnBiMjV6S1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5aklEMGdiVzkxYm5Rb2RHaHBjeXdnWlhoMFpXNXphVzl1Y3l3Z2RHaHBjeTVmWlNrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCM1lYSnVLQ2RaYjNVZ2JtVmxaQ0IwYnlCd2NtOTJhV1JsSUdFZ2IySnFaV04wSUc5dUlHQnRiM1Z1ZENncFlDY3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IwYUdsekxsOWxMbVZ0YVhRb0oyMXZkVzUwTG1GbWRHVnlKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dRMjlzYkdWamRITWdZVzRnYVc1emRHRnVZMlVnWUhSeVlXNXpiR0YwWldBZ2RISmhibk5tYjNKdFpYSnpMbHh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0FnZTBGeWNtRjVmU0IwY21GdWMyWnZjbTFsY25NZ1EyOXNiR1ZqZEdsdmJpQnZaaUIwY21GdWMyWnZjbTFsY25NdVhISmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMjExZEdGMFpTY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUcxMWRHRjBaU2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQjBjbUZ1YzJadmNtMWxjbk1nUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01DQW1KaUJoY21kMWJXVnVkSE5iTUYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUdGeVozVnRaVzUwYzFzd1hTQTZJRnRkTzF4dVhHNGdJQ0FnSUNCcFppQW9hWE5CY25KaGVTaDBjbUZ1YzJadmNtMWxjbk1wS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNRZ1BTQjBjbUZ1YzJadmNtMWxjbk03WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IzWVhKdUtDZFpiM1VnYm1WbFpDQjBieUJ3Y205MmFXUmxJR0VnWVhKeVlYa2diMjRnWUcxMWRHRjBaU2dwWUNjcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSUZWd1pHRjBaWE1nWjJ4cFpHVWdkMmwwYUNCemNHVmphV1pwWldRZ2MyVjBkR2x1WjNNdVhISmNiaUFnSUNBZ0tseHlYRzRnSUNBZ0lDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlITmxkSFJwYm1kelhISmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdEhiR2xrWlgxY2NseHVJQ0FnSUNBcUwxeHVYRzRnSUgwc0lIdGNiaUFnSUNCclpYazZJQ2QxY0dSaGRHVW5MRnh1SUNBZ0lIWmhiSFZsT2lCbWRXNWpkR2x2YmlCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnSUNCMllYSWdjMlYwZEdsdVozTWdQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTUNBbUppQmhjbWQxYldWdWRITmJNRjBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN3WFNBNklIdDlPMXh1WEc0Z0lDQWdJQ0IwYUdsekxuTmxkSFJwYm1keklEMGdiV1Z5WjJWUGNIUnBiMjV6S0hSb2FYTXVjMlYwZEdsdVozTXNJSE5sZEhScGJtZHpLVHRjYmx4dUlDQWdJQ0FnYVdZZ0tITmxkSFJwYm1kekxtaGhjMDkzYmxCeWIzQmxjblI1S0NkemRHRnlkRUYwSnlrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJtUmxlQ0E5SUhObGRIUnBibWR6TG5OMFlYSjBRWFE3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhSb2FYTXVYMlV1WlcxcGRDZ25kWEJrWVhSbEp5azdYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1EyaGhibWRsSUhOc2FXUmxJSGRwZEdnZ2MzQmxZMmxtYVdWa0lIQmhkSFJsY200dUlFRWdjR0YwZEdWeWJpQnRkWE4wSUdKbElHbHVJSFJvWlNCemNHVmphV0ZzSUdadmNtMWhkRHBjY2x4dUlDQWdJQ0FxSUdBK1lDQXRJRTF2ZG1VZ2IyNWxJR1p2Y25kaGNtUmNjbHh1SUNBZ0lDQXFJR0E4WUNBdElFMXZkbVVnYjI1bElHSmhZMnQzWVhKa1hISmNiaUFnSUNBZ0tpQmdQWHRwZldBZ0xTQkhieUIwYnlCN2FYMGdlbVZ5YnkxaVlYTmxaQ0J6Ykdsa1pTQW9aWEV1SUNjOU1TY3NJSGRwYkd3Z1oyOGdkRzhnYzJWamIyNWtJSE5zYVdSbEtWeHlYRzRnSUNBZ0lDb2dZRDQrWUNBdElGSmxkMmx1WkhNZ2RHOGdaVzVrSUNoc1lYTjBJSE5zYVdSbEtWeHlYRzRnSUNBZ0lDb2dZRHc4WUNBdElGSmxkMmx1WkhNZ2RHOGdjM1JoY25RZ0tHWnBjbk4wSUhOc2FXUmxLVnh5WEc0Z0lDQWdJQ3BjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J3WVhSMFpYSnVYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkbmJ5Y3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUdkdktIQmhkSFJsY200cElIdGNiaUFnSUNBZ0lIUm9hWE11WDJNdVVuVnVMbTFoYTJVb2NHRjBkR1Z5YmlrN1hHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nVFc5MlpTQjBjbUZqYXlCaWVTQnpjR1ZqYVdacFpXUWdaR2x6ZEdGdVkyVXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJR1JwYzNSaGJtTmxYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRIYkdsa1pYMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkdGIzWmxKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2JXOTJaU2hrYVhOMFlXNWpaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZZeTVVY21GdWMybDBhVzl1TG1ScGMyRmliR1VvS1R0Y2JpQWdJQ0FnSUhSb2FYTXVYMk11VFc5MlpTNXRZV3RsS0dScGMzUmhibU5sS1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJFWlhOMGNtOTVJR2x1YzNSaGJtTmxJR0Z1WkNCeVpYWmxjblFnWVd4c0lHTm9ZVzVuWlhNZ1pHOXVaU0JpZVNCMGFHbHpMbDlqTGx4eVhHNGdJQ0FnSUNwY2NseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwZHNhV1JsZlZ4eVhHNGdJQ0FnSUNvdlhHNWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMlJsYzNSeWIza25MRnh1SUNBZ0lIWmhiSFZsT2lCbWRXNWpkR2x2YmlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmWlM1bGJXbDBLQ2RrWlhOMGNtOTVKeWs3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVM1JoY25RZ2FXNXpkR0Z1WTJVZ1lYVjBiM0JzWVhscGJtY3VYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRDYjI5c1pXRnVmRTUxYldKbGNuMGdhVzUwWlhKMllXd2dVblZ1SUdGMWRHOXdiR0Y1YVc1bklIZHBkR2dnY0dGemMyVmtJR2x1ZEdWeWRtRnNJSEpsWjJGeVpHeGxjM01nYjJZZ1lHRjFkRzl3YkdGNVlDQnpaWFIwYVc1bmMxeHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdSMnhwWkdWOVhISmNiaUFnSUNBZ0tpOWNibHh1SUNCOUxDQjdYRzRnSUNBZ2EyVjVPaUFuY0d4aGVTY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUhCc1lYa29LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2FXNTBaWEoyWVd3Z1BTQmhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNQ0FtSmlCaGNtZDFiV1Z1ZEhOYk1GMGdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHRnlaM1Z0Wlc1MGMxc3dYU0E2SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0JwWmlBb2FXNTBaWEoyWVd3cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUjBhVzVuY3k1aGRYUnZjR3hoZVNBOUlHbHVkR1Z5ZG1Gc08xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQjBhR2x6TGw5bExtVnRhWFFvSjNCc1lYa25LVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQlRkRzl3SUdsdWMzUmhibU5sSUdGMWRHOXdiR0Y1YVc1bkxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjNCaGRYTmxKeXhjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2NHRjFjMlVvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlsTG1WdGFYUW9KM0JoZFhObEp5azdYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1UyVjBjeUJuYkdsa1pTQnBiblJ2SUdFZ2FXUnNaU0J6ZEdGMGRYTXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3UjJ4cFpHVjlYSEpjYmlBZ0lDQWdLaTljYmx4dUlDQjlMQ0I3WEc0Z0lDQWdhMlY1T2lBblpHbHpZV0pzWlNjc1hHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJR1JwYzJGaWJHVW9LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtUnBjMkZpYkdWa0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJUWlhSeklHZHNhV1JsSUdsdWRHOGdZU0JoWTNScGRtVWdjM1JoZEhWekxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJWdVlXSnNaU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHVnVZV0pzWlNncElIdGNiaUFnSUNBZ0lIUm9hWE11WkdsellXSnNaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQkJaR1J6SUdOMWRYUnZiU0JsZG1WdWRDQnNhWE4wWlc1bGNpQjNhWFJvSUdoaGJtUnNaWEl1WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZkVGeWNtRjVmU0JsZG1WdWRGeHlYRzRnSUNBZ0lDb2dRSEJoY21GdElDQjdSblZ1WTNScGIyNTlJR2hoYm1Sc1pYSmNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMGRzYVdSbGZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjI5dUp5eGNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYjI0b1pYWmxiblFzSUdoaGJtUnNaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMlV1YjI0b1pYWmxiblFzSUdoaGJtUnNaWElwTzF4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRU5vWldOcmN5QnBaaUJuYkdsa1pTQnBjeUJoSUhCeVpXTnBjMlZrSUhSNWNHVXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhCaGNtRnRJQ0I3VTNSeWFXNW5mU0J1WVcxbFhISmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJselZIbHdaU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHbHpWSGx3WlNodVlXMWxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1elpYUjBhVzVuY3k1MGVYQmxJRDA5UFNCdVlXMWxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nUjJWMGN5QjJZV3gxWlNCdlppQjBhR1VnWTI5eVpTQnZjSFJwYjI1ekxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkelpYUjBhVzVuY3ljc1hHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFrSkRFb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYnp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlGTmxkSE1nZG1Gc2RXVWdiMllnZEdobElHTnZjbVVnYjNCMGFXOXVjeTVjY2x4dUlDQWdJQ0FxWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUc5Y2NseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEhKY2JpQWdJQ0FnS2k5Y2JpQWdJQ0FzWEc0Z0lDQWdjMlYwT2lCbWRXNWpkR2x2YmlCelpYUWtKREVvYnlrZ2UxeHVJQ0FnSUNBZ2FXWWdLR2x6VDJKcVpXTjBLRzhwS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDI4Z1BTQnZPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkMkZ5YmlnblQzQjBhVzl1Y3lCdGRYTjBJR0psSUdGdUlHQnZZbXBsWTNSZ0lHbHVjM1JoYm1ObExpY3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFLbHh5WEc0Z0lDQWdJQ29nUjJWMGN5QmpkWEp5Wlc1MElHbHVaR1Y0SUc5bUlIUm9aU0J6Ykdsa1pYSXVYSEpjYmlBZ0lDQWdLbHh5WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oybHVaR1Y0Snl4Y2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlHZGxkQ1FrTVNncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ1UyVjBjeUJqZFhKeVpXNTBJR2x1WkdWNElHRWdjMnhwWkdWeUxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNjbHh1SUNBZ0lDQXFMMXh1SUNBZ0lDeGNiaUFnSUNCelpYUTZJR1oxYm1OMGFXOXVJSE5sZENRa01TaHBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxsOXBJRDBnZEc5SmJuUW9hU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCSFpYUnpJSFI1Y0dVZ2JtRnRaU0J2WmlCMGFHVWdjMnhwWkdWeUxseHlYRzRnSUNBZ0lDcGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMU4wY21sdVozMWNjbHh1SUNBZ0lDQXFMMXh1WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkMGVYQmxKeXhjYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDUWtNU2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTmxkSFJwYm1kekxuUjVjR1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCSFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCcFpHeGxJSE4wWVhSMWN5NWNjbHh1SUNBZ0lDQXFYSEpjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh5WEc0Z0lDQWdJQ292WEc1Y2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0oyUnBjMkZpYkdWa0p5eGNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENRa01TZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5a08xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHlYRzRnSUNBZ0lDb2dVMlYwY3lCMllXeDFaU0J2WmlCMGFHVWdhV1JzWlNCemRHRjBkWE11WEhKY2JpQWdJQ0FnS2x4eVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1FtOXZiR1ZoYm4xY2NseHVJQ0FnSUNBcUwxeHVJQ0FnSUN4Y2JpQWdJQ0J6WlhRNklHWjFibU4wYVc5dUlITmxkQ1FrTVNoemRHRjBkWE1wSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMlFnUFNBaElYTjBZWFIxY3p0Y2JpQWdJQ0I5WEc0Z0lIMWRLVHRjYmlBZ2NtVjBkWEp1SUVkc2FXUmxPMXh1ZlNncE8xeHVYRzVtZFc1amRHbHZiaUJTZFc0Z0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnZG1GeUlGSjFiaUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSmJtbDBhV0ZzYVhwbGN5QmhkWFJ2Y25WdWJtbHVaeUJ2WmlCMGFHVWdaMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHMXZkVzUwT2lCbWRXNWpkR2x2YmlCdGIzVnVkQ2dwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMjhnUFNCbVlXeHpaVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCTllXdGxjeUJuYkdsa1pYTWdjblZ1Ym1sdVp5QmlZWE5sWkNCdmJpQjBhR1VnY0dGemMyVmtJRzF2ZG1sdVp5QnpZMmhsYldFdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYlc5MlpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUcxaGEyVTZJR1oxYm1OMGFXOXVJRzFoYTJVb2JXOTJaU2tnZTF4dUlDQWdJQ0FnZG1GeUlGOTBhR2x6SUQwZ2RHaHBjenRjYmx4dUlDQWdJQ0FnYVdZZ0tDRkhiR2xrWlM1a2FYTmhZbXhsWkNrZ2UxeHVJQ0FnSUNBZ0lDQkhiR2xrWlM1a2FYTmhZbXhsS0NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dGIzWmxJRDBnYlc5MlpUdGNibHh1SUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNuVnVMbUpsWm05eVpTY3NJSFJvYVhNdWJXOTJaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVd4amRXeGhkR1VvS1R0Y2JseHVJQ0FnSUNBZ0lDQkZkbVZ1ZEhNdVpXMXBkQ2duY25WdUp5d2dkR2hwY3k1dGIzWmxLVHRjYmx4dUlDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsUnlZVzV6YVhScGIyNHVZV1owWlhJb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGZkR2hwY3k1cGMwOW1abk5sZENnblBDY3BJSHg4SUY5MGFHbHpMbWx6VDJabWMyVjBLQ2MrSnlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUY5MGFHbHpMbDl2SUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRVYyWlc1MGN5NWxiV2wwS0NkeWRXNHViMlptYzJWMEp5d2dYM1JvYVhNdWJXOTJaU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnUlhabGJuUnpMbVZ0YVhRb0ozSjFiaTVoWm5SbGNpY3NJRjkwYUdsekxtMXZkbVVwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdSMnhwWkdVdVpXNWhZbXhsS0NrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOaGJHTjFiR0YwWlhNZ1kzVnljbVZ1ZENCcGJtUmxlQ0JpWVhObFpDQnZiaUJrWldacGJtVmtJRzF2ZG1VdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTmhiR04xYkdGMFpUb2dablZ1WTNScGIyNGdZMkZzWTNWc1lYUmxLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlHMXZkbVVnUFNCMGFHbHpMbTF2ZG1Vc1hHNGdJQ0FnSUNBZ0lDQWdiR1Z1WjNSb0lEMGdkR2hwY3k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0IyWVhJZ2MzUmxjSE1nUFNCdGIzWmxMbk4wWlhCekxGeHVJQ0FnSUNBZ0lDQWdJR1JwY21WamRHbHZiaUE5SUcxdmRtVXVaR2x5WldOMGFXOXVPMXh1WEc1Y2JpQWdJQ0FnSUhaaGNpQmpiM1Z1ZEdGaWJHVlRkR1Z3Y3lBOUlHbHpUblZ0WW1WeUtIUnZTVzUwS0hOMFpYQnpLU2tnSmlZZ2RHOUpiblFvYzNSbGNITXBJQ0U5UFNBd08xeHVYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tHUnBjbVZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0JqWVhObElDYytKenBjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jM1JsY0hNZ1BUMDlJQ2MrSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVhVzVrWlhnZ1BTQnNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxtbHpSVzVrS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hLRWRzYVdSbExtbHpWSGx3WlNnbmMyeHBaR1Z5SnlrZ0ppWWdJVWRzYVdSbExuTmxkSFJwYm1kekxuSmxkMmx1WkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYnlBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVhVzVrWlhnZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRmRtVnVkSE11WlcxcGRDZ25jblZ1TG1WdVpDY3NJRzF2ZG1VcE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWTI5MWJuUmhZbXhsVTNSbGNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJQ3M5SUUxaGRHZ3ViV2x1S0d4bGJtZDBhQ0F0SUVkc2FXUmxMbWx1WkdWNExDQXRkRzlKYm5Rb2MzUmxjSE1wS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnUjJ4cFpHVXVhVzVrWlhnckt6dGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc1Y2JpQWdJQ0FnSUNBZ1kyRnpaU0FuUENjNlhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hOMFpYQnpJRDA5UFNBblBDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdWFYTlRkR0Z5ZENncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JU2hIYkdsa1pTNXBjMVI1Y0dVb0ozTnNhV1JsY2ljcElDWW1JQ0ZIYkdsa1pTNXpaWFIwYVc1bmN5NXlaWGRwYm1RcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDI4Z1BTQjBjblZsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUVkc2FXUmxMbWx1WkdWNElEMGdiR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnbmNuVnVMbk4wWVhKMEp5d2diVzkyWlNrN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hqYjNWdWRHRmliR1ZUZEdWd2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1IyeHBaR1V1YVc1a1pYZ2dMVDBnVFdGMGFDNXRhVzRvUjJ4cFpHVXVhVzVrWlhnc0lIUnZTVzUwS0hOMFpYQnpLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRWRzYVdSbExtbHVaR1Y0TFMwN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKejBuT2x4dUlDQWdJQ0FnSUNBZ0lFZHNhV1JsTG1sdVpHVjRJRDBnYzNSbGNITTdYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJobFkydHpJR2xtSUhkbElHRnlaU0J2YmlCMGFHVWdabWx5YzNRZ2MyeHBaR1V1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRDYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHbHpVM1JoY25RNklHWjFibU4wYVc5dUlHbHpVM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1IyeHBaR1V1YVc1a1pYZ2dQVDA5SURBN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJ0eklHbG1JSGRsSUdGeVpTQnZiaUIwYUdVZ2JHRnpkQ0J6Ykdsa1pTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwSnZiMnhsWVc1OVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYVhORmJtUTZJR1oxYm1OMGFXOXVJR2x6Ulc1a0tDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFZHNhV1JsTG1sdVpHVjRJRDA5UFNCMGFHbHpMbXhsYm1kMGFEdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYUdWamEzTWdhV1lnZDJVZ1lYSmxJRzFoYTJsdVp5QmhJRzltWm5ObGRDQnlkVzR1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdaR2x5WldOMGFXOXVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdRbTl2YkdWaGJuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCcGMwOW1abk5sZERvZ1puVnVZM1JwYjI0Z2FYTlBabVp6WlhRb1pHbHlaV04wYVc5dUtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYnlBbUppQjBhR2x6TG0xdmRtVXVaR2x5WldOMGFXOXVJRDA5UFNCa2FYSmxZM1JwYjI0N1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lHUmxabWx1WlNoU2RXNHNJQ2R0YjNabEp5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJRzF2ZG1VZ2MyTm9aVzFoTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5dE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJRzF2ZG1VZ2MyTm9aVzFoTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnpaWFE2SUdaMWJtTjBhVzl1SUhObGRDaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVmYlNBOUlIdGNiaUFnSUNBZ0lDQWdaR2x5WldOMGFXOXVPaUIyWVd4MVpTNXpkV0p6ZEhJb01Dd2dNU2tzWEc0Z0lDQWdJQ0FnSUhOMFpYQnpPaUIyWVd4MVpTNXpkV0p6ZEhJb01Ta2dQeUIyWVd4MVpTNXpkV0p6ZEhJb01Ta2dPaUF3WEc0Z0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ1pHVm1hVzVsS0ZKMWJpd2dKMnhsYm1kMGFDY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklIWmhiSFZsSUc5bUlIUm9aU0J5ZFc1dWFXNW5JR1JwYzNSaGJtTmxJR0poYzJWa1hHNGdJQ0FnSUNvZ2IyNGdlbVZ5YnkxcGJtUmxlR2x1WnlCdWRXMWlaWElnYjJZZ2MyeHBaR1Z6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhObGRIUnBibWR6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM003WEc0Z0lDQWdJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjeTVzWlc1bmRHZzdYRzVjYmlBZ0lDQWdJQzh2SUVsbUlIUm9aU0JnWW05MWJtUmdJRzl3ZEdsdmJpQnBjeUJoWTJsMGRtVXNJR0VnYldGNGFXMTFiU0J5ZFc1dWFXNW5JR1JwYzNSaGJtTmxJSE5vYjNWc1pDQmlaVnh1SUNBZ0lDQWdMeThnY21Wa2RXTmxaQ0JpZVNCZ2NHVnlWbWxsZDJBZ1lXNWtJR0JtYjJOMWMwRjBZQ0J6WlhSMGFXNW5jeTRnVW5WdWJtbHVaeUJrYVhOMFlXNWpaVnh1SUNBZ0lDQWdMeThnYzJodmRXeGtJR1Z1WkNCaVpXWnZjbVVnWTNKbFlYUnBibWNnWVc0Z1pXMXdkSGtnYzNCaFkyVWdZV1owWlhJZ2FXNXpkR0Z1WTJVdVhHNWNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXBjMVI1Y0dVb0ozTnNhV1JsY2ljcElDWW1JSE5sZEhScGJtZHpMbVp2WTNWelFYUWdJVDA5SUNkalpXNTBaWEluSUNZbUlITmxkSFJwYm1kekxtSnZkVzVrS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCc1pXNW5kR2dnTFNBeElDMGdLSFJ2U1c1MEtITmxkSFJwYm1kekxuQmxjbFpwWlhjcElDMGdNU2tnS3lCMGIwbHVkQ2h6WlhSMGFXNW5jeTVtYjJOMWMwRjBLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJR3hsYm1kMGFDQXRJREU3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCa1pXWnBibVVvVW5WdUxDQW5iMlptYzJWMEp5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2MzUmhkSFZ6SUc5bUlIUm9aU0J2Wm1aelpYUjBhVzVuSUdac1lXY3VYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdENiMjlzWldGdWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMjg3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnVW5WdU8xeHVmVnh1WEc0dktpcGNiaUFxSUZKbGRIVnlibk1nWVNCamRYSnlaVzUwSUhScGJXVXVYRzRnS2x4dUlDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ292WEc1bWRXNWpkR2x2YmlCdWIzY29LU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNibjFjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0c0lIUm9ZWFFzSUhkb1pXNGdhVzUyYjJ0bFpDd2dkMmxzYkNCdmJteDVJR0psSUhSeWFXZG5aWEpsWkZ4dUlDb2dZWFFnYlc5emRDQnZibU5sSUdSMWNtbHVaeUJoSUdkcGRtVnVJSGRwYm1SdmR5QnZaaUIwYVcxbExseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHWjFibU5jYmlBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZlNCM1lXbDBYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkRDE5SUc5d2RHbHZibk5jYmlBcUlFQnlaWFIxY200Z2UwWjFibU4wYVc5dWZWeHVJQ3BjYmlBcUlFQnpaV1VnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJwaGMyaHJaVzVoY3k5MWJtUmxjbk5qYjNKbFhHNGdLaTljYm1aMWJtTjBhVzl1SUhSb2NtOTBkR3hsS0daMWJtTXNJSGRoYVhRc0lHOXdkR2x2Ym5NcElIdGNiaUFnZG1GeUlIUnBiV1Z2ZFhRZ1BTQjJiMmxrSURBc1hHNGdJQ0FnSUNCamIyNTBaWGgwSUQwZ2RtOXBaQ0F3TEZ4dUlDQWdJQ0FnWVhKbmN5QTlJSFp2YVdRZ01DeGNiaUFnSUNBZ0lISmxjM1ZzZENBOUlIWnZhV1FnTUR0Y2JpQWdkbUZ5SUhCeVpYWnBiM1Z6SUQwZ01EdGNiaUFnYVdZZ0tDRnZjSFJwYjI1ektTQnZjSFJwYjI1eklEMGdlMzA3WEc1Y2JpQWdkbUZ5SUd4aGRHVnlJRDBnWm5WdVkzUnBiMjRnYkdGMFpYSW9LU0I3WEc0Z0lDQWdjSEpsZG1sdmRYTWdQU0J2Y0hScGIyNXpMbXhsWVdScGJtY2dQVDA5SUdaaGJITmxJRDhnTUNBNklHNXZkeWdwTzF4dUlDQWdJSFJwYldWdmRYUWdQU0J1ZFd4c08xeHVJQ0FnSUhKbGMzVnNkQ0E5SUdaMWJtTXVZWEJ3Ykhrb1kyOXVkR1Y0ZEN3Z1lYSm5jeWs3WEc0Z0lDQWdhV1lnS0NGMGFXMWxiM1YwS1NCamIyNTBaWGgwSUQwZ1lYSm5jeUE5SUc1MWJHdzdYRzRnSUgwN1hHNWNiaUFnZG1GeUlIUm9jbTkwZEd4bFpDQTlJR1oxYm1OMGFXOXVJSFJvY205MGRHeGxaQ2dwSUh0Y2JpQWdJQ0IyWVhJZ1lYUWdQU0J1YjNjb0tUdGNiaUFnSUNCcFppQW9JWEJ5WlhacGIzVnpJQ1ltSUc5d2RHbHZibk11YkdWaFpHbHVaeUE5UFQwZ1ptRnNjMlVwSUhCeVpYWnBiM1Z6SUQwZ1lYUTdYRzRnSUNBZ2RtRnlJSEpsYldGcGJtbHVaeUE5SUhkaGFYUWdMU0FvWVhRZ0xTQndjbVYyYVc5MWN5azdYRzRnSUNBZ1kyOXVkR1Y0ZENBOUlIUm9hWE03WEc0Z0lDQWdZWEpuY3lBOUlHRnlaM1Z0Wlc1MGN6dGNiaUFnSUNCcFppQW9jbVZ0WVdsdWFXNW5JRHc5SURBZ2ZId2djbVZ0WVdsdWFXNW5JRDRnZDJGcGRDa2dlMXh1SUNBZ0lDQWdhV1lnS0hScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyeGxZWEpVYVcxbGIzVjBLSFJwYldWdmRYUXBPMXh1SUNBZ0lDQWdJQ0IwYVcxbGIzVjBJRDBnYm5Wc2JEdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIQnlaWFpwYjNWeklEMGdZWFE3WEc0Z0lDQWdJQ0J5WlhOMWJIUWdQU0JtZFc1akxtRndjR3g1S0dOdmJuUmxlSFFzSUdGeVozTXBPMXh1SUNBZ0lDQWdhV1lnS0NGMGFXMWxiM1YwS1NCamIyNTBaWGgwSUQwZ1lYSm5jeUE5SUc1MWJHdzdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hkR2x0Wlc5MWRDQW1KaUJ2Y0hScGIyNXpMblJ5WVdsc2FXNW5JQ0U5UFNCbVlXeHpaU2tnZTF4dUlDQWdJQ0FnZEdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRb2JHRjBaWElzSUhKbGJXRnBibWx1WnlrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNGdJSDA3WEc1Y2JpQWdkR2h5YjNSMGJHVmtMbU5oYm1ObGJDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JqYkdWaGNsUnBiV1Z2ZFhRb2RHbHRaVzkxZENrN1hHNGdJQ0FnY0hKbGRtbHZkWE1nUFNBd08xeHVJQ0FnSUhScGJXVnZkWFFnUFNCamIyNTBaWGgwSUQwZ1lYSm5jeUE5SUc1MWJHdzdYRzRnSUgwN1hHNWNiaUFnY21WMGRYSnVJSFJvY205MGRHeGxaRHRjYm4xY2JseHVkbUZ5SUUxQlVrZEpUbDlVV1ZCRklEMGdlMXh1SUNCc2RISTZJRnNuYldGeVoybHVUR1ZtZENjc0lDZHRZWEpuYVc1U2FXZG9kQ2RkTEZ4dUlDQnlkR3c2SUZzbmJXRnlaMmx1VW1sbmFIUW5MQ0FuYldGeVoybHVUR1ZtZENkZFhHNTlPMXh1WEc1bWRXNWpkR2x2YmlCSFlYQnpJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJIWVhCeklEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUZ3Y0d4cFpYTWdaMkZ3Y3lCaVpYUjNaV1Z1SUhOc2FXUmxjeTRnUm1seWMzUWdZVzVrSUd4aGMzUmNiaUFnSUNBZ0tpQnpiR2xrWlhNZ1pHOGdibTkwSUhKbFkyVnBkbVVnYVhRbmN5QmxaR2RsSUcxaGNtZHBibk11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMGhVVFV4RGIyeHNaV04wYVc5dWZTQnpiR2xrWlhOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHRndjR3g1T2lCbWRXNWpkR2x2YmlCaGNIQnNlU2h6Ykdsa1pYTXBJSHRjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQnNaVzRnUFNCemJHbGtaWE11YkdWdVozUm9PeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhOMGVXeGxJRDBnYzJ4cFpHVnpXMmxkTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pHbHlaV04wYVc5dUlEMGdRMjl0Y0c5dVpXNTBjeTVFYVhKbFkzUnBiMjR1ZG1Gc2RXVTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHa2dJVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0J6ZEhsc1pWdE5RVkpIU1U1ZlZGbFFSVnRrYVhKbFkzUnBiMjVkV3pCZFhTQTlJSFJvYVhNdWRtRnNkV1VnTHlBeUlDc2dKM0I0Snp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlZ0TlFWSkhTVTVmVkZsUVJWdGthWEpsWTNScGIyNWRXekJkWFNBOUlDY25PMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2tnSVQwOUlITnNhV1JsY3k1c1pXNW5kR2dnTFNBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYzNSNWJHVmJUVUZTUjBsT1gxUlpVRVZiWkdseVpXTjBhVzl1WFZzeFhWMGdQU0IwYUdsekxuWmhiSFZsSUM4Z01pQXJJQ2R3ZUNjN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdjM1I1YkdWYlRVRlNSMGxPWDFSWlVFVmJaR2x5WldOMGFXOXVYVnN4WFYwZ1BTQW5KenRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ1oyRndjeUJtY205dElIUm9aU0J6Ykdsa1pYTXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2UwaFVUVXhEYjJ4c1pXTjBhVzl1ZlNCemJHbGtaWE5jYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3Vm05cFpIMWNiaUFnSUNBcUwxeHVJQ0FnSUhKbGJXOTJaVG9nWm5WdVkzUnBiMjRnY21WdGIzWmxLSE5zYVdSbGN5a2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBc0lHeGxiaUE5SUhOc2FXUmxjeTVzWlc1bmRHZzdJR2tnUENCc1pXNDdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYzNSNWJHVWdQU0J6Ykdsa1pYTmJhVjB1YzNSNWJHVTdYRzVjYmlBZ0lDQWdJQ0FnYzNSNWJHVXViV0Z5WjJsdVRHVm1kQ0E5SUNjbk8xeHVJQ0FnSUNBZ0lDQnpkSGxzWlM1dFlYSm5hVzVTYVdkb2RDQTlJQ2NuTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNCa1pXWnBibVVvUjJGd2N5d2dKM1poYkhWbEp5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2RtRnNkV1VnYjJZZ2RHaGxJR2RoY0M1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkRzlKYm5Rb1IyeHBaR1V1YzJWMGRHbHVaM011WjJGd0tUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJR1JsWm1sdVpTaEhZWEJ6TENBblozSnZkeWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR0ZrWkdsMGFXOXVZV3dnWkdsdFpXNTBhVzl1Y3lCMllXeDFaU0JqWVhWelpXUWdZbmtnWjJGd2N5NWNiaUFnSUNBZ0tpQlZjMlZrSUhSdklHbHVZM0psWVhObElIZHBaSFJvSUc5bUlIUm9aU0J6Ykdsa1pYTWdkM0poY0hCbGNpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdE9kVzFpWlhKOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQm5aWFFvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnUjJGd2N5NTJZV3gxWlNBcUlDaERiMjF3YjI1bGJuUnpMbE5wZW1WekxteGxibWQwYUNBdElERXBPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnWkdWbWFXNWxLRWRoY0hNc0lDZHlaV1IxWTNSdmNpY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklISmxaSFZqZEdsdmJpQjJZV3gxWlNCallYVnpaV1FnWW5rZ1oyRndjeTVjYmlBZ0lDQWdLaUJWYzJWa0lIUnZJSE4xWW5SeVlXTjBJSGRwWkhSb0lHOW1JSFJvWlNCemJHbGtaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhCbGNsWnBaWGNnUFNCSGJHbGtaUzV6WlhSMGFXNW5jeTV3WlhKV2FXVjNPMXh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdSMkZ3Y3k1MllXeDFaU0FxSUNod1pYSldhV1YzSUMwZ01Ta2dMeUJ3WlhKV2FXVjNPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVGd2NHeDVJR05oYkdOMWJHRjBaV1FnWjJGd2N6cGNiaUFnSUNvZ0xTQmhablJsY2lCaWRXbHNaR2x1Wnl3Z2MyOGdjMnhwWkdWeklDaHBibU5zZFdScGJtY2dZMnh2Ym1WektTQjNhV3hzSUhKbFkyVnBkbVVnY0hKdmNHVnlJRzFoY21kcGJuTmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIyYVdFZ1FWQkpMQ0IwYnlCeVpXTmhiR04xYkdGMFpTQm5ZWEJ6SUhkcGRHZ2dibVYzSUc5d2RHbHZibk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoySjFhV3hrTG1GbWRHVnlKeXdnSjNWd1pHRjBaU2RkTENCMGFISnZkSFJzWlNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1IyRndjeTVoY0hCc2VTaERiMjF3YjI1bGJuUnpMa2gwYld3dWQzSmhjSEJsY2k1amFHbHNaSEpsYmlrN1hHNGdJSDBzSURNd0tTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCbllYQnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jZ2RHOGdZbkpwYm1jZ2JXRnlhM1Z3SUhSdklHbDBjeUJwYm1sMFlXd2djM1JoZEdWY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpZ25aR1Z6ZEhKdmVTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JIWVhCekxuSmxiVzkyWlNoRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTVqYUdsc1pISmxiaWs3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCSFlYQnpPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFWnBibVJ6SUhOcFlteHBibWR6SUc1dlpHVnpJRzltSUhSb1pTQndZWE56WldRZ2JtOWtaUzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdJSHRGYkdWdFpXNTBmU0J1YjJSbFhHNGdLaUJBY21WMGRYSnVJSHRCY25KaGVYMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2MybGliR2x1WjNNb2JtOWtaU2tnZTF4dUlDQnBaaUFvYm05a1pTQW1KaUJ1YjJSbExuQmhjbVZ1ZEU1dlpHVXBJSHRjYmlBZ0lDQjJZWElnYmlBOUlHNXZaR1V1Y0dGeVpXNTBUbTlrWlM1bWFYSnpkRU5vYVd4a08xeHVJQ0FnSUhaaGNpQnRZWFJqYUdWa0lEMGdXMTA3WEc1Y2JpQWdJQ0JtYjNJZ0tEc2dianNnYmlBOUlHNHVibVY0ZEZOcFlteHBibWNwSUh0Y2JpQWdJQ0FnSUdsbUlDaHVMbTV2WkdWVWVYQmxJRDA5UFNBeElDWW1JRzRnSVQwOUlHNXZaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2JXRjBZMmhsWkM1d2RYTm9LRzRwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnRZWFJqYUdWa08xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlGdGRPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFTm9aV05yY3lCcFppQndZWE56WldRZ2JtOWtaU0JsZUdsemRDQmhibVFnYVhNZ1lTQjJZV3hwWkNCbGJHVnRaVzUwTGx4dUlDcGNiaUFxSUVCd1lYSmhiU0FnZTBWc1pXMWxiblI5SUc1dlpHVmNiaUFxSUVCeVpYUjFjbTRnZTBKdmIyeGxZVzU5WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1Y0YVhOMEtHNXZaR1VwSUh0Y2JpQWdhV1lnS0c1dlpHVWdKaVlnYm05a1pTQnBibk4wWVc1alpXOW1JSGRwYm1SdmR5NUlWRTFNUld4bGJXVnVkQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdaaGJITmxPMXh1ZlZ4dVhHNTJZWElnVkZKQlEwdGZVMFZNUlVOVVQxSWdQU0FuVzJSaGRHRXRaMnhwWkdVdFpXdzlYQ0owY21GamExd2lYU2M3WEc1Y2JtWjFibU4wYVc5dUlFaDBiV3dnS0Vkc2FXUmxMQ0JEYjIxd2IyNWxiblJ6S1NCN1hHNGdJSFpoY2lCSWRHMXNJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZObGRIVndJSE5zYVdSbGNpQklWRTFNSUc1dlpHVnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdEhiR2xrWlgwZ1oyeHBaR1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkp2YjNRZ1BTQkhiR2xrWlM1elpXeGxZM1J2Y2p0Y2JpQWdJQ0FnSUhSb2FYTXVkSEpoWTJzZ1BTQjBhR2x6TG5KdmIzUXVjWFZsY25sVFpXeGxZM1J2Y2loVVVrRkRTMTlUUlV4RlExUlBVaWs3WEc0Z0lDQWdJQ0IwYUdsekxuTnNhV1JsY3lBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tIUm9hWE11ZDNKaGNIQmxjaTVqYUdsc1pISmxiaWt1Wm1sc2RHVnlLR1oxYm1OMGFXOXVJQ2h6Ykdsa1pTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdJWE5zYVdSbExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5aEhiR2xrWlM1elpYUjBhVzVuY3k1amJHRnpjMlZ6TG1Oc2IyNWxVMnhwWkdVcE8xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaElkRzFzTENBbmNtOXZkQ2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJRzV2WkdVZ2IyWWdkR2hsSUdkc2FXUmxJRzFoYVc0Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQklkRzFzTGw5eU8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2JtOWtaU0J2WmlCMGFHVWdaMnhwWkdVZ2JXRnBiaUJsYkdWdFpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0hJcElIdGNiaUFnSUNBZ0lHbG1JQ2hwYzFOMGNtbHVaeWh5S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaHlLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tHVjRhWE4wS0hJcEtTQjdYRzRnSUNBZ0lDQWdJRWgwYld3dVgzSWdQU0J5TzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZDJGeWJpZ25VbTl2ZENCbGJHVnRaVzUwSUcxMWMzUWdZbVVnWVNCbGVHbHpkR2x1WnlCSWRHMXNJRzV2WkdVbktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJR1JsWm1sdVpTaElkRzFzTENBbmRISmhZMnNuTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUJ1YjJSbElHOW1JSFJvWlNCbmJHbGtaU0IwY21GamF5QjNhWFJvSUhOc2FXUmxjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCSWRHMXNMbDkwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSE1nYm05a1pTQnZaaUIwYUdVZ1oyeHBaR1VnZEhKaFkyc2dkMmwwYUNCemJHbGtaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MyVjBPaUJtZFc1amRHbHZiaUJ6WlhRb2RDa2dlMXh1SUNBZ0lDQWdhV1lnS0dWNGFYTjBLSFFwS1NCN1hHNGdJQ0FnSUNBZ0lFaDBiV3d1WDNRZ1BTQjBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkMkZ5YmlnblEyOTFiR1FnYm05MElHWnBibVFnZEhKaFkyc2daV3hsYldWdWRDNGdVR3hsWVhObElIVnpaU0FuSUNzZ1ZGSkJRMHRmVTBWTVJVTlVUMUlnS3lBbklHRjBkSEpwWW5WMFpTNG5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hJZEcxc0xDQW5kM0poY0hCbGNpY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklHNXZaR1VnYjJZZ2RHaGxJSE5zYVdSbGN5QjNjbUZ3Y0dWeUxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRWgwYld3dWRISmhZMnN1WTJocGJHUnlaVzViTUYwN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z1NIUnRiRHRjYm4xY2JseHVablZ1WTNScGIyNGdVR1ZsYXlBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0IyWVhJZ1VHVmxheUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVFpYUjFjSE1nYUc5M0lHMTFZMmdnZEc4Z2NHVmxheUJpWVhObFpDQnZiaUJ6WlhSMGFXNW5jeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1MllXeDFaU0E5SUVkc2FXUmxMbk5sZEhScGJtZHpMbkJsWldzN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lHUmxabWx1WlNoUVpXVnJMQ0FuZG1Gc2RXVW5MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QjJZV3gxWlNCdlppQjBhR1VnY0dWbGF5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdE9kVzFpWlhKOFQySnFaV04wZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRkJsWldzdVgzWTdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVTJWMGN5QjJZV3gxWlNCdlppQjBhR1VnY0dWbGF5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1RuVnRZbVZ5ZkU5aWFtVmpkSDBnZG1Gc2RXVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z2MyVjBLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnBaaUFvYVhOUFltcGxZM1FvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxMbUpsWm05eVpTQTlJSFJ2U1c1MEtIWmhiSFZsTG1KbFptOXlaU2s3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxMbUZtZEdWeUlEMGdkRzlKYm5Rb2RtRnNkV1V1WVdaMFpYSXBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVZ1BTQjBiMGx1ZENoMllXeDFaU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUZCbFpXc3VYM1lnUFNCMllXeDFaVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUdSbFptbHVaU2hRWldWckxDQW5jbVZrZFdOMGIzSW5MQ0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUjJWMGN5QnlaV1IxWTNScGIyNGdkbUZzZFdVZ1kyRjFjMlZrSUdKNUlIQmxaV3N1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhaaGJIVmxJRDBnVUdWbGF5NTJZV3gxWlR0Y2JpQWdJQ0FnSUhaaGNpQndaWEpXYVdWM0lEMGdSMnhwWkdVdWMyVjBkR2x1WjNNdWNHVnlWbWxsZHp0Y2JseHVJQ0FnSUNBZ2FXWWdLR2x6VDJKcVpXTjBLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZzZFdVdVltVm1iM0psSUM4Z2NHVnlWbWxsZHlBcklIWmhiSFZsTG1GbWRHVnlJQzhnY0dWeVZtbGxkenRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbElDb2dNaUF2SUhCbGNsWnBaWGM3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVmpZV3hqZFd4aGRHVWdjR1ZsYTJsdVp5QnphWHBsY3lCdmJqcGNiaUFnSUNvZ0xTQjNhR1Z1SUhKbGMybDZhVzVuSUhkcGJtUnZkeUIwYnlCMWNHUmhkR1VnZEc4Z2NISnZjR1Z5SUhCbGNtTmxiblJ6WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b1d5ZHlaWE5wZW1VbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JRWldWckxtMXZkVzUwS0NrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQlFaV1ZyTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJOYjNabElDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUhaaGNpQk5iM1psSUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTnZibk4wY25WamRITWdiVzkyWlNCamIyMXdiMjVsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDl2SUQwZ01EdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEWVd4amRXeGhkR1Z6SUdFZ2JXOTJaVzFsYm5RZ2RtRnNkV1VnWW1GelpXUWdiMjRnY0dGemMyVmtJRzltWm5ObGRDQmhibVFnWTNWeWNtVnVkR3g1SUdGamRHbDJaU0JwYm1SbGVDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2IyWm1jMlYwWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCdFlXdGxPaUJtZFc1amRHbHZiaUJ0WVd0bEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUY5MGFHbHpJRDBnZEdocGN6dGNibHh1SUNBZ0lDQWdkbUZ5SUc5bVpuTmxkQ0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dNRHRjYmx4dUlDQWdJQ0FnZEdocGN5NXZabVp6WlhRZ1BTQnZabVp6WlhRN1hHNWNiaUFnSUNBZ0lFVjJaVzUwY3k1bGJXbDBLQ2R0YjNabEp5d2dlMXh1SUNBZ0lDQWdJQ0J0YjNabGJXVnVkRG9nZEdocGN5NTJZV3gxWlZ4dUlDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVWSEpoYm5OcGRHbHZiaTVoWm5SbGNpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHRiM1psTG1GbWRHVnlKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lHMXZkbVZ0Wlc1ME9pQmZkR2hwY3k1MllXeDFaVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQmtaV1pwYm1Vb1RXOTJaU3dnSjI5bVpuTmxkQ2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR0Z1SUc5bVpuTmxkQ0IyWVd4MVpTQjFjMlZrSUhSdklHMXZaR2xtZVNCamRYSnlaVzUwSUhSeVlXNXpiR0YwWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA5aWFtVmpkSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQk5iM1psTGw5dk8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ1lXNGdiMlptYzJWMElIWmhiSFZsSUhWelpXUWdkRzhnYlc5a2FXWjVJR04xY25KbGJuUWdkSEpoYm5Oc1lYUmxMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUMkpxWldOMGZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhObGREb2dablZ1WTNScGIyNGdjMlYwS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JOYjNabExsOXZJRDBnSVdselZXNWtaV1pwYm1Wa0tIWmhiSFZsS1NBL0lIUnZTVzUwS0haaGJIVmxLU0E2SURBN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1RXOTJaU3dnSjNSeVlXNXpiR0YwWlNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdFZ2NtRjNJRzF2ZG1WdFpXNTBJSFpoYkhWbExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z1oyVjBLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRU52YlhCdmJtVnVkSE11VTJsNlpYTXVjMnhwWkdWWGFXUjBhQ0FxSUVkc2FXUmxMbWx1WkdWNE8xeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdaR1ZtYVc1bEtFMXZkbVVzSUNkMllXeDFaU2NzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR0Z1SUdGamRIVmhiQ0J0YjNabGJXVnVkQ0IyWVd4MVpTQmpiM0p5WldOMFpXUWdZbmtnYjJabWMyVjBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdUblZ0WW1WeWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdaMlYwS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJRzltWm5ObGRDQTlJSFJvYVhNdWIyWm1jMlYwTzF4dUlDQWdJQ0FnZG1GeUlIUnlZVzV6YkdGMFpTQTlJSFJvYVhNdWRISmhibk5zWVhSbE8xeHVYRzRnSUNBZ0lDQnBaaUFvUTI5dGNHOXVaVzUwY3k1RWFYSmxZM1JwYjI0dWFYTW9KM0owYkNjcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVWdLeUJ2Wm1aelpYUTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVWdMU0J2Wm1aelpYUTdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nVFdGclpTQnRiM1psYldWdWRDQjBieUJ3Y205d1pYSWdjMnhwWkdVZ2IyNDZYRzRnSUNBcUlDMGdZbVZtYjNKbElHSjFhV3hrTENCemJ5Qm5iR2xrWlNCM2FXeHNJSE4wWVhKMElHRjBJR0J6ZEdGeWRFRjBZQ0JwYm1SbGVGeHVJQ0FnS2lBdElHOXVJR1ZoWTJnZ2MzUmhibVJoY21RZ2NuVnVJSFJ2SUcxdmRtVWdkRzhnYm1WM2JIa2dZMkZzWTNWc1lYUmxaQ0JwYm1SbGVGeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLRnNuWW5WcGJHUXVZbVZtYjNKbEp5d2dKM0oxYmlkZExDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdUVzkyWlM1dFlXdGxLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCTmIzWmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQlRhWHBsY3lBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0IyWVhJZ1UybDZaWE1nUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1UyVjBkWEJ6SUdScGJXVnVkR2x2Ym5NZ2IyWWdjMnhwWkdWekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnpaWFIxY0ZOc2FXUmxjem9nWm5WdVkzUnBiMjRnYzJWMGRYQlRiR2xrWlhNb0tTQjdYRzRnSUNBZ0lDQjJZWElnYzJ4cFpHVnpJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbk5zYVdSbGN6dGNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6Ykdsa1pYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2MyeHBaR1Z6VzJsZExuTjBlV3hsTG5kcFpIUm9JRDBnZEdocGN5NXpiR2xrWlZkcFpIUm9JQ3NnSjNCNEp6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUWlhSMWNITWdaR2x0Wlc1MGFXOXVjeUJ2WmlCemJHbGtaWE1nZDNKaGNIQmxjaTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYzJWMGRYQlhjbUZ3Y0dWeU9pQm1kVzVqZEdsdmJpQnpaWFIxY0ZkeVlYQndaWElvWkdsdFpXNTBhVzl1S1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTV6ZEhsc1pTNTNhV1IwYUNBOUlIUm9hWE11ZDNKaGNIQmxjbE5wZW1VZ0t5QW5jSGduTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ1lYQndiR2xsWkNCemRIbHNaWE1nWm5KdmJTQklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVVvS1NCN1hHNGdJQ0FnSUNCMllYSWdjMnhwWkdWeklEMGdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuTnNhV1JsY3p0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnpiR2xrWlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnYzJ4cFpHVnpXMmxkTG5OMGVXeGxMbmRwWkhSb0lEMGdKeWM3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMbk4wZVd4bExuZHBaSFJvSUQwZ0p5YzdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaFRhWHBsY3l3Z0oyeGxibWQwYUNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdOdmRXNTBJRzUxYldKbGNpQnZaaUIwYUdVZ2MyeHBaR1Z6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1emJHbGtaWE11YkdWdVozUm9PMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnWkdWbWFXNWxLRk5wZW1WekxDQW5kMmxrZEdnbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCM2FXUjBhQ0IyWVd4MVpTQnZaaUIwYUdVZ1oyeHBaR1V1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRPZFcxaVpYSjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5KdmIzUXViMlptYzJWMFYybGtkR2c3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNCa1pXWnBibVVvVTJsNlpYTXNJQ2QzY21Gd2NHVnlVMmw2WlNjc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUhOcGVtVWdiMllnZEdobElITnNhV1JsY3lCM2NtRndjR1Z5TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlGTnBlbVZ6TG5Oc2FXUmxWMmxrZEdnZ0tpQlRhWHBsY3k1c1pXNW5kR2dnS3lCRGIyMXdiMjVsYm5SekxrZGhjSE11WjNKdmR5QXJJRU52YlhCdmJtVnVkSE11UTJ4dmJtVnpMbWR5YjNjN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQmtaV1pwYm1Vb1UybDZaWE1zSUNkemJHbGtaVmRwWkhSb0p5d2dlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWRsZEhNZ2QybGtkR2dnZG1Gc2RXVWdiMllnZEdobElITnBibWRzWlNCemJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMDUxYldKbGNuMWNiaUFnSUNBZ0tpOWNiaUFnSUNCblpYUTZJR1oxYm1OMGFXOXVJR2RsZENncElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCVGFYcGxjeTUzYVdSMGFDQXZJRWRzYVdSbExuTmxkSFJwYm1kekxuQmxjbFpwWlhjZ0xTQkRiMjF3YjI1bGJuUnpMbEJsWldzdWNtVmtkV04wYjNJZ0xTQkRiMjF3YjI1bGJuUnpMa2RoY0hNdWNtVmtkV04wYjNJN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWEJ3YkhrZ1kyRnNZM1ZzWVhSbFpDQm5iR2xrWlNkeklHUnBiV1Z1YzJsdmJuTTZYRzRnSUNBcUlDMGdZbVZtYjNKbElHSjFhV3hrYVc1bkxDQnpieUJ2ZEdobGNpQmthVzFsYm5ScGIyNXpJQ2hsTG1jdUlIUnlZVzV6YkdGMFpTa2dkMmxzYkNCaVpTQmpZV3hqZFd4aGRHVmtJSEJ5YjNCbGNuUnNlVnh1SUNBZ0tpQXRJSGRvWlc0Z2NtVnphWHBwYm1jZ2QybHVaRzkzSUhSdklISmxZMkZzWTNWc1lYUmxJSE5wYkdSbGN5QmthVzFsYm5OcGIyNXpYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUnBibWNnZG1saElFRlFTU3dnZEc4Z1kyRnNZM1ZzWVhSbElHUnBiV1Z1YzJsdmJuTWdZbUZ6WldRZ2IyNGdibVYzSUc5d2RHbHZibk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoySjFhV3hrTG1KbFptOXlaU2NzSUNkeVpYTnBlbVVuTENBbmRYQmtZWFJsSjEwc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQlRhWHBsY3k1elpYUjFjRk5zYVdSbGN5Z3BPMXh1SUNBZ0lGTnBlbVZ6TG5ObGRIVndWM0poY0hCbGNpZ3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnRiM1psSUdOaGJHTjFiR0YwWldRZ1oyeHBaR1VuY3lCa2FXMWxibk5wYjI1ek9seHVJQ0FnS2lBdElHOXVJR1JsYzNSdmRHbHVaeUIwYnlCaWNtbHVaeUJ0WVhKcmRYQWdkRzhnYVhSeklHbHVhWFJoYkNCemRHRjBaVnh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0Nka1pYTjBjbTk1Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lGTnBlbVZ6TG5KbGJXOTJaU2dwTzF4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z1UybDZaWE03WEc1OVhHNWNibVoxYm1OMGFXOXVJRUoxYVd4a0lDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUhaaGNpQkNkV2xzWkNBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwSUdkc2FXUmxJR0oxYVd4a2FXNW5MaUJCWkdSeklHTnNZWE56WlhNc0lITmxkSE5jYmlBZ0lDQWdLaUJrYVcxbGJuTnBiMjV6SUdGdVpDQnpaWFIxY0hNZ2FXNXBkR2xoYkNCemRHRjBaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYlc5MWJuUTZJR1oxYm1OMGFXOXVJRzF2ZFc1MEtDa2dlMXh1SUNBZ0lDQWdSWFpsYm5SekxtVnRhWFFvSjJKMWFXeGtMbUpsWm05eVpTY3BPMXh1WEc0Z0lDQWdJQ0IwYUdsekxuUjVjR1ZEYkdGemN5Z3BPMXh1SUNBZ0lDQWdkR2hwY3k1aFkzUnBkbVZEYkdGemN5Z3BPMXh1WEc0Z0lDQWdJQ0JGZG1WdWRITXVaVzFwZENnblluVnBiR1F1WVdaMFpYSW5LVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQlpHUnpJR0IwZVhCbFlDQmpiR0Z6Y3lCMGJ5QjBhR1VnWjJ4cFpHVWdaV3hsYldWdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdkSGx3WlVOc1lYTnpPaUJtZFc1amRHbHZiaUIwZVhCbFEyeGhjM01vS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDNWpiR0Z6YzB4cGMzUXVZV1JrS0Vkc2FXUmxMbk5sZEhScGJtZHpMbU5zWVhOelpYTmJSMnhwWkdVdWMyVjBkR2x1WjNNdWRIbHdaVjBwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSE1nWVdOMGFYWmxJR05zWVhOeklIUnZJR04xY25KbGJuUWdjMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHRmpkR2wyWlVOc1lYTnpPaUJtZFc1amRHbHZiaUJoWTNScGRtVkRiR0Z6Y3lncElIdGNiaUFnSUNBZ0lIWmhjaUJqYkdGemMyVnpJRDBnUjJ4cFpHVXVjMlYwZEdsdVozTXVZMnhoYzNObGN6dGNiaUFnSUNBZ0lIWmhjaUJ6Ykdsa1pTQTlJRU52YlhCdmJtVnVkSE11U0hSdGJDNXpiR2xrWlhOYlIyeHBaR1V1YVc1a1pYaGRPMXh1WEc0Z0lDQWdJQ0JwWmlBb2MyeHBaR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MyeHBaR1V1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzJWekxtRmpkR2wyWlZOc2FXUmxLVHRjYmx4dUlDQWdJQ0FnSUNCemFXSnNhVzVuY3loemJHbGtaU2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYzJsaWJHbHVaeWtnZTF4dUlDQWdJQ0FnSUNBZ0lITnBZbXhwYm1jdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJHRnpjMlZ6TG1GamRHbDJaVk5zYVdSbEtUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCSVZFMU1JR05zWVhOelpYTWdZWEJ3YkdsbFpDQmhkQ0JpZFdsc1pHbHVaeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnY21WdGIzWmxRMnhoYzNObGN6b2dablZ1WTNScGIyNGdjbVZ0YjNabFEyeGhjM05sY3lncElIdGNiaUFnSUNBZ0lIWmhjaUJqYkdGemMyVnpJRDBnUjJ4cFpHVXVjMlYwZEdsdVozTXVZMnhoYzNObGN6dGNibHh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hqYkdGemMyVnpXMGRzYVdSbExuTmxkSFJwYm1kekxuUjVjR1ZkS1R0Y2JseHVJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5Oc2FXUmxjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h6YVdKc2FXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hqYkdGemMyVnpMbUZqZEdsMlpWTnNhV1JsS1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRMnhsWVhJZ1luVnBiR1JwYm1jZ1kyeGhjM05sY3pwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUdKeWFXNW5JRWhVVFV3Z2RHOGdhWFJ6SUdsdWFYUnBZV3dnYzNSaGRHVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIwYnlCeVpXMXZkbVVnWTJ4aGMzTmxjeUJpWldadmNtVWdjbVZ0YjNWdWRHbHVaeUJqYjIxd2IyNWxiblJjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoyUmxjM1J5YjNrbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JDZFdsc1pDNXlaVzF2ZG1WRGJHRnpjMlZ6S0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlcxdmRXNTBJR052YlhCdmJtVnVkRHBjYmlBZ0lDb2dMU0J2YmlCeVpYTnBlbWx1WnlCdlppQjBhR1VnZDJsdVpHOTNJSFJ2SUdOaGJHTjFiR0YwWlNCdVpYY2daR2x0Wlc1MGFXOXVjMXh1SUNBZ0tpQXRJRzl1SUhWd1pHRjBhVzVuSUhObGRIUnBibWR6SUhacFlTQkJVRWxjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkozSmxjMmw2WlNjc0lDZDFjR1JoZEdVblhTd2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRUoxYVd4a0xtMXZkVzUwS0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJUZDJGd0lHRmpkR2wyWlNCamJHRnpjeUJ2WmlCamRYSnlaVzUwSUhOc2FXUmxPbHh1SUNBZ0tpQXRJR0ZtZEdWeUlHVmhZMmdnYlc5MlpTQjBieUIwYUdVZ2JtVjNJR2x1WkdWNFhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMjF2ZG1VdVlXWjBaWEluTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1FuVnBiR1F1WVdOMGFYWmxRMnhoYzNNb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRUoxYVd4a08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCRGJHOXVaWE1nS0Vkc2FXUmxMQ0JEYjIxd2IyNWxiblJ6TENCRmRtVnVkSE1wSUh0Y2JpQWdkbUZ5SUVOc2IyNWxjeUE5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGNtVmhkR1VnY0dGMGRHVnliaUJ0WVhBZ1lXNWtJR052Ykd4bFkzUWdjMnhwWkdWeklIUnZJR0psSUdOc2IyNWxaQzVjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWwwWlcxeklEMGdXMTA3WEc1Y2JpQWdJQ0FnSUdsbUlDaEhiR2xrWlM1cGMxUjVjR1VvSjJOaGNtOTFjMlZzSnlrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGRHVnRjeUE5SUhSb2FYTXVZMjlzYkdWamRDZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOdmJHeGxZM1FnWTJ4dmJtVnpJSGRwZEdnZ2NHRjBkR1Z5Ymk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1kyOXNiR1ZqZERvZ1puVnVZM1JwYjI0Z1kyOXNiR1ZqZENncElIdGNiaUFnSUNBZ0lIWmhjaUJwZEdWdGN5QTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF3SUNZbUlHRnlaM1Z0Wlc1MGMxc3dYU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdZWEpuZFcxbGJuUnpXekJkSURvZ1cxMDdYRzRnSUNBZ0lDQjJZWElnYzJ4cFpHVnpJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbk5zYVdSbGN6dGNiaUFnSUNBZ0lIWmhjaUJmUjJ4cFpHVWtjMlYwZEdsdVozTWdQU0JIYkdsa1pTNXpaWFIwYVc1bmN5eGNiaUFnSUNBZ0lDQWdJQ0J3WlhKV2FXVjNJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMbkJsY2xacFpYY3NYRzRnSUNBZ0lDQWdJQ0FnWTJ4aGMzTmxjeUE5SUY5SGJHbGtaU1J6WlhSMGFXNW5jeTVqYkdGemMyVnpPMXh1WEc1Y2JpQWdJQ0FnSUhaaGNpQndaV1ZyU1c1amNtVnRaVzUwWlhJZ1BTQXJJU0ZIYkdsa1pTNXpaWFIwYVc1bmN5NXdaV1ZyTzF4dUlDQWdJQ0FnZG1GeUlIQmhjblFnUFNCd1pYSldhV1YzSUNzZ2NHVmxhMGx1WTNKbGJXVnVkR1Z5TzF4dUlDQWdJQ0FnZG1GeUlITjBZWEowSUQwZ2MyeHBaR1Z6TG5Oc2FXTmxLREFzSUhCaGNuUXBPMXh1SUNBZ0lDQWdkbUZ5SUdWdVpDQTlJSE5zYVdSbGN5NXpiR2xqWlNndGNHRnlkQ2s3WEc1Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUhJZ1BTQXdPeUJ5SUR3Z1RXRjBhQzV0WVhnb01Td2dUV0YwYUM1bWJHOXZjaWh3WlhKV2FXVjNJQzhnYzJ4cFpHVnpMbXhsYm1kMGFDa3BPeUJ5S3lzcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J6ZEdGeWRDNXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqYkc5dVpTQTlJSE4wWVhKMFcybGRMbU5zYjI1bFRtOWtaU2gwY25WbEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUdOc2IyNWxMbU5zWVhOelRHbHpkQzVoWkdRb1kyeGhjM05sY3k1amJHOXVaVk5zYVdSbEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUdsMFpXMXpMbkIxYzJnb1kyeHZibVVwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdYMmtnUFNBd095QmZhU0E4SUdWdVpDNXNaVzVuZEdnN0lGOXBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWDJOc2IyNWxJRDBnWlc1a1cxOXBYUzVqYkc5dVpVNXZaR1VvZEhKMVpTazdYRzVjYmlBZ0lDQWdJQ0FnSUNCZlkyeHZibVV1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzJWekxtTnNiMjVsVTJ4cFpHVXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2FYUmxiWE11ZFc1emFHbG1kQ2hmWTJ4dmJtVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJwZEdWdGN6dGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCY0hCbGJtUWdZMnh2Ym1Wa0lITnNhV1JsY3lCM2FYUm9JR2RsYm1WeVlYUmxaQ0J3WVhSMFpYSnVMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JoY0hCbGJtUTZJR1oxYm1OMGFXOXVJR0Z3Y0dWdVpDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCcGRHVnRjeUE5SUhSb2FYTXVhWFJsYlhNN1hHNGdJQ0FnSUNCMllYSWdYME52YlhCdmJtVnVkSE1rU0hSdGJDQTlJRU52YlhCdmJtVnVkSE11U0hSdGJDeGNiaUFnSUNBZ0lDQWdJQ0IzY21Gd2NHVnlJRDBnWDBOdmJYQnZibVZ1ZEhNa1NIUnRiQzUzY21Gd2NHVnlMRnh1SUNBZ0lDQWdJQ0FnSUhOc2FXUmxjeUE5SUY5RGIyMXdiMjVsYm5SekpFaDBiV3d1YzJ4cFpHVnpPMXh1WEc1Y2JpQWdJQ0FnSUhaaGNpQm9ZV3htSUQwZ1RXRjBhQzVtYkc5dmNpaHBkR1Z0Y3k1c1pXNW5kR2dnTHlBeUtUdGNiaUFnSUNBZ0lIWmhjaUJ3Y21Wd1pXNWtJRDBnYVhSbGJYTXVjMnhwWTJVb01Dd2dhR0ZzWmlrdWNtVjJaWEp6WlNncE8xeHVJQ0FnSUNBZ2RtRnlJR0Z3Y0dWdVpDQTlJR2wwWlcxekxuTnNhV05sS0doaGJHWXNJR2wwWlcxekxteGxibWQwYUNrN1hHNWNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZWEJ3Wlc1a0xteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUhkeVlYQndaWEl1WVhCd1pXNWtRMmhwYkdRb1lYQndaVzVrVzJsZEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdYMmt5SUQwZ01Ec2dYMmt5SUR3Z2NISmxjR1Z1WkM1c1pXNW5kR2c3SUY5cE1pc3JLU0I3WEc0Z0lDQWdJQ0FnSUhkeVlYQndaWEl1YVc1elpYSjBRbVZtYjNKbEtIQnlaWEJsYm1SYlgya3lYU3dnYzJ4cFpHVnpXekJkS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ1gya3pJRDBnTURzZ1gya3pJRHdnYVhSbGJYTXViR1Z1WjNSb095QmZhVE1yS3lrZ2UxeHVJQ0FnSUNBZ0lDQnBkR1Z0YzF0ZmFUTmRMbk4wZVd4bExuZHBaSFJvSUQwZ1EyOXRjRzl1Wlc1MGN5NVRhWHBsY3k1emJHbGtaVmRwWkhSb0lDc2dKM0I0Snp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1VZ1lXeHNJR05zYjI1bFpDQnpiR2xrWlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lISmxiVzkyWlRvZ1puVnVZM1JwYjI0Z2NtVnRiM1psS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2wwWlcxeklEMGdkR2hwY3k1cGRHVnRjenRjYmx4dVhHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHbDBaVzF6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUxuSmxiVzkyWlVOb2FXeGtLR2wwWlcxelcybGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnWkdWbWFXNWxLRU5zYjI1bGN5d2dKMmR5YjNjbkxDQjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSMlYwY3lCaFpHUnBkR2x2Ym1Gc0lHUnBiV1Z1ZEdsdmJuTWdkbUZzZFdVZ1kyRjFjMlZrSUdKNUlHTnNiMjVsY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9RMjl0Y0c5dVpXNTBjeTVUYVhwbGN5NXpiR2xrWlZkcFpIUm9JQ3NnUTI5dGNHOXVaVzUwY3k1SFlYQnpMblpoYkhWbEtTQXFJRU5zYjI1bGN5NXBkR1Z0Y3k1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1FYQndaVzVrSUdGa1pHbDBhVzl1WVd3Z2MyeHBaR1VuY3lCamJHOXVaWE02WEc0Z0lDQXFJQzBnZDJocGJHVWdaMnhwWkdVbmN5QjBlWEJsSUdseklHQmpZWEp2ZFhObGJHQmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduZFhCa1lYUmxKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVOc2IyNWxjeTV5WlcxdmRtVW9LVHRjYmlBZ0lDQkRiRzl1WlhNdWJXOTFiblFvS1R0Y2JpQWdJQ0JEYkc5dVpYTXVZWEJ3Wlc1a0tDazdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCQmNIQmxibVFnWVdSa2FYUnBiMjVoYkNCemJHbGtaU2R6SUdOc2IyNWxjenBjYmlBZ0lDb2dMU0IzYUdsc1pTQm5iR2xrWlNkeklIUjVjR1VnYVhNZ1lHTmhjbTkxYzJWc1lGeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2RpZFdsc1pDNWlaV1p2Y21VbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdhV1lnS0Vkc2FXUmxMbWx6Vkhsd1pTZ25ZMkZ5YjNWelpXd25LU2tnZTF4dUlDQWdJQ0FnUTJ4dmJtVnpMbUZ3Y0dWdVpDZ3BPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGJXOTJaU0JqYkc5dVpYTWdTRlJOVEVWc1pXMWxiblJ6T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY3NJSFJ2SUdKeWFXNW5JRWhVVFV3Z2RHOGdhWFJ6SUdsdWFYUnBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCRGJHOXVaWE11Y21WdGIzWmxLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCRGJHOXVaWE03WEc1OVhHNWNiblpoY2lCRmRtVnVkSE5DYVc1a1pYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJEYjI1emRISjFZM1FnWVNCRmRtVnVkSE5DYVc1a1pYSWdhVzV6ZEdGdVkyVXVYRzRnSUNBcUwxeHVJQ0JtZFc1amRHbHZiaUJGZG1WdWRITkNhVzVrWlhJb0tTQjdYRzRnSUNBZ2RtRnlJR3hwYzNSbGJtVnljeUE5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dlMzA3WEc0Z0lDQWdZMnhoYzNORFlXeHNRMmhsWTJzb2RHaHBjeXdnUlhabGJuUnpRbWx1WkdWeUtUdGNibHh1SUNBZ0lIUm9hWE11YkdsemRHVnVaWEp6SUQwZ2JHbHpkR1Z1WlhKek8xeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRUZrWkhNZ1pYWmxiblJ6SUd4cGMzUmxibVZ5Y3lCMGJ5Qmhjbkp2ZDNNZ1NGUk5UQ0JsYkdWdFpXNTBjeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIQmhjbUZ0SUNCN1UzUnlhVzVuZkVGeWNtRjVmU0JsZG1WdWRITmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN1JXeGxiV1Z1ZEh4WGFXNWtiM2Q4Ukc5amRXMWxiblI5SUdWc1hHNGdJQ0FxSUVCd1lYSmhiU0FnZTBaMWJtTjBhVzl1ZlNCamJHOXpkWEpsWEc0Z0lDQXFJRUJ3WVhKaGJTQWdlMEp2YjJ4bFlXNThUMkpxWldOMGZTQmpZWEIwZFhKbFhHNGdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBcUwxeHVYRzVjYmlBZ1kzSmxZWFJsUTJ4aGMzTW9SWFpsYm5SelFtbHVaR1Z5TENCYmUxeHVJQ0FnSUd0bGVUb2dKMjl1Snl4Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdiMjRvWlhabGJuUnpMQ0JsYkN3Z1kyeHZjM1Z5WlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJR05oY0hSMWNtVWdQU0JoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTXlBbUppQmhjbWQxYldWdWRITmJNMTBnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JR0Z5WjNWdFpXNTBjMXN6WFNBNklHWmhiSE5sTzF4dVhHNGdJQ0FnSUNCcFppQW9hWE5UZEhKcGJtY29aWFpsYm5SektTa2dlMXh1SUNBZ0lDQWdJQ0JsZG1WdWRITWdQU0JiWlhabGJuUnpYVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCbGRtVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25OYlpYWmxiblJ6VzJsZFhTQTlJR05zYjNOMWNtVTdYRzVjYmlBZ0lDQWdJQ0FnWld3dVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkSE5iYVYwc0lIUm9hWE11YkdsemRHVnVaWEp6VzJWMlpXNTBjMXRwWFYwc0lHTmhjSFIxY21VcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGSmxiVzkyWlhNZ1pYWmxiblFnYkdsemRHVnVaWEp6SUdaeWIyMGdZWEp5YjNkeklFaFVUVXdnWld4bGJXVnVkSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdJSHRUZEhKcGJtZDhRWEp5WVhsOUlHVjJaVzUwYzF4dUlDQWdJQ0FxSUVCd1lYSmhiU0FnZTBWc1pXMWxiblI4VjJsdVpHOTNmRVJ2WTNWdFpXNTBmU0JsYkZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzVjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjI5bVppY3NYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUc5bVppaGxkbVZ1ZEhNc0lHVnNLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FYTlRkSEpwYm1jb1pYWmxiblJ6S1NrZ2UxeHVJQ0FnSUNBZ0lDQmxkbVZ1ZEhNZ1BTQmJaWFpsYm5SelhUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JsZG1WdWRITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1pXd3VjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWhsZG1WdWRITmJhVjBzSUhSb2FYTXViR2x6ZEdWdVpYSnpXMlYyWlc1MGMxdHBYVjBzSUdaaGJITmxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJFWlhOMGNtOTVJR052Ykd4bFkzUmxaQ0JzYVhOMFpXNWxjbk11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNibHh1SUNCOUxDQjdYRzRnSUNBZ2EyVjVPaUFuWkdWemRISnZlU2NzWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHUmxjM1J5YjNrb0tTQjdYRzRnSUNBZ0lDQmtaV3hsZEdVZ2RHaHBjeTVzYVhOMFpXNWxjbk03WEc0Z0lDQWdmVnh1SUNCOVhTazdYRzRnSUhKbGRIVnliaUJGZG1WdWRITkNhVzVrWlhJN1hHNTlLQ2s3WEc1Y2JtWjFibU4wYVc5dUlGSmxjMmw2WlNBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ2RtRnlJRkpsYzJsNlpTQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJKYm1sMGFXRnNhWHBsY3lCM2FXNWtiM2NnWW1sdVpHbHVaM011WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVpYVc1a0tDazdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUW1sdVpITWdZSEpsZW5OcGVtVmdJR3hwYzNSbGJtVnlJSFJ2SUhSb1pTQjNhVzVrYjNjdVhHNGdJQ0FnSUNvZ1NYUW5jeUJoSUdOdmMzUnNlU0JsZG1WdWRDd2djMjhnZDJVZ1lYSmxJR1JsWW05MWJtTnBibWNnYVhRdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHSnBibVE2SUdaMWJtTjBhVzl1SUdKcGJtUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMjRvSjNKbGMybDZaU2NzSUhkcGJtUnZkeXdnZEdoeWIzUjBiR1VvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQkZkbVZ1ZEhNdVpXMXBkQ2duY21WemFYcGxKeWs3WEc0Z0lDQWdJQ0I5TENCSGJHbGtaUzV6WlhSMGFXNW5jeTUwYUhKdmRIUnNaU2twTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGVnVZbWx1WkhNZ2JHbHpkR1Z1WlhKeklHWnliMjBnZEdobElIZHBibVJ2ZHk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2RXNWlhVzVrT2lCbWRXNWpkR2x2YmlCMWJtSnBibVFvS1NCN1hHNGdJQ0FnSUNCQ2FXNWtaWEl1YjJabUtDZHlaWE5wZW1VbkxDQjNhVzVrYjNjcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElHSnBibVJwYm1keklHWnliMjBnZDJsdVpHOTNPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJSEpsYlc5MlpTQmhaR1JsWkNCRmRtVnVkRXhwYzNSbGJtVnlYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJSbGMzUnliM2tuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1VtVnphWHBsTG5WdVltbHVaQ2dwTzF4dUlDQWdJRUpwYm1SbGNpNWtaWE4wY205NUtDazdYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJTWlhOcGVtVTdYRzU5WEc1Y2JuWmhjaUJXUVV4SlJGOUVTVkpGUTFSSlQwNVRJRDBnV3lkc2RISW5MQ0FuY25Sc0oxMDdYRzUyWVhJZ1JreEpVRVZFWDAxUFZrVk5SVTVVVXlBOUlIdGNiaUFnSno0bk9pQW5QQ2NzWEc0Z0lDYzhKem9nSno0bkxGeHVJQ0FuUFNjNklDYzlKMXh1ZlR0Y2JseHVablZ1WTNScGIyNGdSR2x5WldOMGFXOXVJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lIWmhjaUJFYVhKbFkzUnBiMjRnUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1UyVjBkWEJ6SUdkaGNDQjJZV3gxWlNCaVlYTmxaQ0J2YmlCelpYUjBhVzVuY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NTJZV3gxWlNBOUlFZHNhV1JsTG5ObGRIUnBibWR6TG1ScGNtVmpkR2x2Ymp0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaWE52YkhabGN5QndZWFIwWlhKdUlHSmhjMlZrSUc5dUlHUnBjbVZqZEdsdmJpQjJZV3gxWlZ4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSEJoZEhSbGNtNWNiaUFnSUNBZ0tpQkFjbVYwZFhKdWN5QjdVM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhKbGMyOXNkbVU2SUdaMWJtTjBhVzl1SUhKbGMyOXNkbVVvY0dGMGRHVnliaWtnZTF4dUlDQWdJQ0FnZG1GeUlIUnZhMlZ1SUQwZ2NHRjBkR1Z5Ymk1emJHbGpaU2d3TENBeEtUdGNibHh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVhWE1vSjNKMGJDY3BLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ3WVhSMFpYSnVMbk53YkdsMEtIUnZhMlZ1S1M1cWIybHVLRVpNU1ZCRlJGOU5UMVpGVFVWT1ZGTmJkRzlyWlc1ZEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIQmhkSFJsY200N1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJ0eklIWmhiSFZsSUc5bUlHUnBjbVZqZEdsdmJpQnRiMlJsTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJR1JwY21WamRHbHZibHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRDYjI5c1pXRnVmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHbHpPaUJtZFc1amRHbHZiaUJwY3loa2FYSmxZM1JwYjI0cElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMblpoYkhWbElEMDlQU0JrYVhKbFkzUnBiMjQ3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FYQndiR2xsY3lCa2FYSmxZM1JwYjI0Z1kyeGhjM01nZEc4Z2RHaGxJSEp2YjNRZ1NGUk5UQ0JsYkdWdFpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JoWkdSRGJHRnpjem9nWm5WdVkzUnBiMjRnWVdSa1EyeGhjM01vS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1Y205dmRDNWpiR0Z6YzB4cGMzUXVZV1JrS0Vkc2FXUmxMbk5sZEhScGJtZHpMbU5zWVhOelpYTXVaR2x5WldOMGFXOXVXM1JvYVhNdWRtRnNkV1ZkS1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklHUnBjbVZqZEdsdmJpQmpiR0Z6Y3lCbWNtOXRJSFJvWlNCeWIyOTBJRWhVVFV3Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psUTJ4aGMzTTZJR1oxYm1OMGFXOXVJSEpsYlc5MlpVTnNZWE56S0NrZ2UxeHVJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5KdmIzUXVZMnhoYzNOTWFYTjBMbkpsYlc5MlpTaEhiR2xrWlM1elpYUjBhVzVuY3k1amJHRnpjMlZ6TG1ScGNtVmpkR2x2Ymx0MGFHbHpMblpoYkhWbFhTazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJR1JsWm1sdVpTaEVhWEpsWTNScGIyNHNJQ2QyWVd4MVpTY3NJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhSeklIWmhiSFZsSUc5bUlIUm9aU0JrYVhKbFkzUnBiMjR1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3VG5WdFltVnlmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnWjJWMEtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFUnBjbVZqZEdsdmJpNWZkanRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVFpYUnpJSFpoYkhWbElHOW1JSFJvWlNCa2FYSmxZM1JwYjI0dVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnZG1Gc2RXVmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZERvZ1puVnVZM1JwYjI0Z2MyVjBLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQnBaaUFvVmtGTVNVUmZSRWxTUlVOVVNVOU9VeTVwYm1SbGVFOW1LSFpoYkhWbEtTQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lFUnBjbVZqZEdsdmJpNWZkaUE5SUhaaGJIVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkMkZ5YmlnblJHbHlaV04wYVc5dUlIWmhiSFZsSUcxMWMzUWdZbVVnWUd4MGNtQWdiM0lnWUhKMGJHQW5LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCRGJHVmhjaUJrYVhKbFkzUnBiMjRnWTJ4aGMzTTZYRzRnSUNBcUlDMGdiMjRnWkdWemRISnZlU0IwYnlCaWNtbHVaeUJJVkUxTUlIUnZJR2wwY3lCcGJtbDBhV0ZzSUhOMFlYUmxYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUmxJSFJ2SUhKbGJXOTJaU0JqYkdGemN5QmlaV1p2Y21VZ2NtVmhjSEJzYVc1bklHSmxiR3h2ZDF4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtGc25aR1Z6ZEhKdmVTY3NJQ2QxY0dSaGRHVW5YU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVScGNtVmpkR2x2Ymk1eVpXMXZkbVZEYkdGemN5Z3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnRiM1Z1ZENCamIyMXdiMjVsYm5RNlhHNGdJQ0FxSUMwZ2IyNGdkWEJrWVhSbElIUnZJSEpsWm14bFkzUWdZMmhoYm1kbGN5QnBiaUJrYVhKbFkzUnBiMjRnZG1Gc2RXVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduZFhCa1lYUmxKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVScGNtVmpkR2x2Ymk1dGIzVnVkQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRWEJ3YkhrZ1pHbHlaV04wYVc5dUlHTnNZWE56T2x4dUlDQWdLaUF0SUdKbFptOXlaU0JpZFdsc1pHbHVaeUIwYnlCaGNIQnNlU0JqYkdGemN5Qm1iM0lnZEdobElHWnBjbk4wSUhScGJXVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIwYnlCeVpXRndjR3g1SUdScGNtVmpkR2x2YmlCamJHRnpjeUIwYUdGMElHMWhlU0JqYUdGdVoyVmtYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvV3lkaWRXbHNaQzVpWldadmNtVW5MQ0FuZFhCa1lYUmxKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCRWFYSmxZM1JwYjI0dVlXUmtRMnhoYzNNb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRVJwY21WamRHbHZianRjYm4xY2JseHVMeW9xWEc0Z0tpQlNaV1pzWldOMGN5QjJZV3gxWlNCdlppQm5iR2xrWlNCdGIzWmxiV1Z1ZEM1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUVkc2FXUmxYRzRnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUVOdmJYQnZibVZ1ZEhOY2JpQXFJRUJ5WlhSMWNtNGdlMDlpYW1WamRIMWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1VuUnNJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFNWxaMkYwWlhNZ2RHaGxJSEJoYzNObFpDQjBjbUZ1YzJ4aGRHVWdhV1lnWjJ4cFpHVWdhWE1nYVc0Z1VsUk1JRzl3ZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2RISmhibk5zWVhSbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2WkdsbWVUb2dablZ1WTNScGIyNGdiVzlrYVdaNUtIUnlZVzV6YkdGMFpTa2dlMXh1SUNBZ0lDQWdhV1lnS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxtbHpLQ2R5ZEd3bktTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdMWFJ5WVc1emJHRjBaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5WVc1emJHRjBaVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nVlhCa1lYUmxjeUJuYkdsa1pTQnRiM1psYldWdWRDQjNhWFJvSUdFZ1lHZGhjR0FnYzJWMGRHbHVaM011WEc0Z0tseHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JIYkdsa1pWeHVJQ29nUUhCaGNtRnRJQ0I3VDJKcVpXTjBmU0JEYjIxd2IyNWxiblJ6WEc0Z0tpQkFjbVYwZFhKdUlIdFBZbXBsWTNSOVhHNGdLaTljYm1aMWJtTjBhVzl1SUVkaGNDQW9SMnhwWkdVc0lFTnZiWEJ2Ym1WdWRITXBJSHRjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCTmIyUnBabWxsY3lCd1lYTnpaV1FnZEhKaGJuTnNZWFJsSUhaaGJIVmxJSGRwZEdnZ2JuVnRZbVZ5SUdsdUlIUm9aU0JnWjJGd1lDQnpaWFIwYVc1bmN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2RISmhibk5zWVhSbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzF2WkdsbWVUb2dablZ1WTNScGIyNGdiVzlrYVdaNUtIUnlZVzV6YkdGMFpTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlZVzV6YkdGMFpTQXJJRU52YlhCdmJtVnVkSE11UjJGd2N5NTJZV3gxWlNBcUlFZHNhV1JsTG1sdVpHVjRPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JuMWNibHh1THlvcVhHNGdLaUJWY0dSaGRHVnpJR2RzYVdSbElHMXZkbVZ0Wlc1MElIZHBkR2dnZDJsa2RHZ2diMllnWVdSa2FYUnBiMjVoYkNCamJHOXVaWE1nZDJsa2RHZ3VYRzRnS2x4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkhiR2xrWlZ4dUlDb2dRSEJoY21GdElDQjdUMkpxWldOMGZTQkRiMjF3YjI1bGJuUnpYRzRnS2lCQWNtVjBkWEp1SUh0UFltcGxZM1I5WEc0Z0tpOWNibVoxYm1OMGFXOXVJRWR5YjNjZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SektTQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUVdSa2N5QjBieUIwYUdVZ2NHRnpjMlZrSUhSeVlXNXpiR0YwWlNCM2FXUjBhQ0J2WmlCMGFHVWdhR0ZzWmlCdlppQmpiRzl1WlhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0T2RXMWlaWEo5SUhSeVlXNXpiR0YwWlZ4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiMlJwWm5rNklHWjFibU4wYVc5dUlHMXZaR2xtZVNoMGNtRnVjMnhoZEdVcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGNtRnVjMnhoZEdVZ0t5QkRiMjF3YjI1bGJuUnpMa05zYjI1bGN5NW5jbTkzSUM4Z01qdGNiaUFnSUNCOVhHNGdJSDA3WEc1OVhHNWNiaThxS2x4dUlDb2dWWEJrWVhSbGN5Qm5iR2xrWlNCdGIzWmxiV1Z1ZENCM2FYUm9JR0VnWUhCbFpXdGdJSE5sZEhScGJtZHpMbHh1SUNwY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdSMnhwWkdWY2JpQXFJRUJ3WVhKaGJTQWdlMDlpYW1WamRIMGdRMjl0Y0c5dVpXNTBjMXh1SUNvZ1FISmxkSFZ5YmlCN1QySnFaV04wZlZ4dUlDb3ZYRzVtZFc1amRHbHZiaUJRWldWcmFXNW5JQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWtnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFMXZaR2xtYVdWeklIQmhjM05sWkNCMGNtRnVjMnhoZEdVZ2RtRnNkV1VnZDJsMGFDQmhJR0J3WldWcllDQnpaWFIwYVc1bkxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUNCN1RuVnRZbVZ5ZlNCMGNtRnVjMnhoZEdWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzlrYVdaNU9pQm1kVzVqZEdsdmJpQnRiMlJwWm5rb2RISmhibk5zWVhSbEtTQjdYRzRnSUNBZ0lDQnBaaUFvUjJ4cFpHVXVjMlYwZEdsdVozTXVabTlqZFhOQmRDQStQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3WldWcklEMGdRMjl0Y0c5dVpXNTBjeTVRWldWckxuWmhiSFZsTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzA5aWFtVmpkQ2h3WldWcktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnTFNCd1pXVnJMbUpsWm05eVpUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwY21GdWMyeGhkR1VnTFNCd1pXVnJPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEpoYm5Oc1lYUmxPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JuMWNibHh1THlvcVhHNGdLaUJWY0dSaGRHVnpJR2RzYVdSbElHMXZkbVZ0Wlc1MElIZHBkR2dnWVNCZ1ptOWpkWE5CZEdBZ2MyVjBkR2x1WjNNdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCSGJHbGtaVnh1SUNvZ1FIQmhjbUZ0SUNCN1QySnFaV04wZlNCRGIyMXdiMjVsYm5SelhHNGdLaUJBY21WMGRYSnVJSHRQWW1wbFkzUjlYRzRnS2k5Y2JtWjFibU4wYVc5dUlFWnZZM1Z6YVc1bklDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5a2dlMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUUxdlpHbG1hV1Z6SUhCaGMzTmxaQ0IwY21GdWMyeGhkR1VnZG1Gc2RXVWdkMmwwYUNCcGJtUmxlQ0JwYmlCMGFHVWdZR1p2WTNWelFYUmdJSE5sZEhScGJtY3VYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdE9kVzFpWlhKOUlIUnlZVzV6YkdGMFpWeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UwNTFiV0psY24xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J0YjJScFpuazZJR1oxYm1OMGFXOXVJRzF2WkdsbWVTaDBjbUZ1YzJ4aGRHVXBJSHRjYmlBZ0lDQWdJSFpoY2lCbllYQWdQU0JEYjIxd2IyNWxiblJ6TGtkaGNITXVkbUZzZFdVN1hHNGdJQ0FnSUNCMllYSWdkMmxrZEdnZ1BTQkRiMjF3YjI1bGJuUnpMbE5wZW1WekxuZHBaSFJvTzF4dUlDQWdJQ0FnZG1GeUlHWnZZM1Z6UVhRZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3k1bWIyTjFjMEYwTzF4dUlDQWdJQ0FnZG1GeUlITnNhV1JsVjJsa2RHZ2dQU0JEYjIxd2IyNWxiblJ6TGxOcGVtVnpMbk5zYVdSbFYybGtkR2c3WEc1Y2JpQWdJQ0FnSUdsbUlDaG1iMk4xYzBGMElEMDlQU0FuWTJWdWRHVnlKeWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKaGJuTnNZWFJsSUMwZ0tIZHBaSFJvSUM4Z01pQXRJSE5zYVdSbFYybGtkR2dnTHlBeUtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlZVzV6YkdGMFpTQXRJSE5zYVdSbFYybGtkR2dnS2lCbWIyTjFjMEYwSUMwZ1oyRndJQ29nWm05amRYTkJkRHRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nUVhCd2JHbGxjeUJrYVdabWNtVnVkQ0IwY21GdWMyWnZjbTFsY25NZ2IyNGdkSEpoYm5Oc1lYUmxJSFpoYkhWbExseHVJQ3BjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ1IyeHBaR1ZjYmlBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ1EyOXRjRzl1Wlc1MGMxeHVJQ29nUUhKbGRIVnliaUI3VDJKcVpXTjBmVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnRkWFJoZEc5eUlDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUM4cUtseHVJQ0FnS2lCTlpYSm5aU0JwYm5OMFlXNWpaU0IwY21GdWMyWnZjbTFsY25NZ2QybDBhQ0JqYjJ4c1pXTjBhVzl1SUc5bUlHUmxabUYxYkhRZ2RISmhibk5tYjNKdFpYSnpMbHh1SUNBZ0tpQkpkQ2R6SUdsdGNHOXlkR0Z1ZENCMGFHRjBJSFJvWlNCU2RHd2dZMjl0Y0c5dVpXNTBJR0psSUd4aGMzUWdiMjRnZEdobElHeHBjM1FzWEc0Z0lDQXFJSE52SUdsMElISmxabXhsWTNSeklHRnNiQ0J3Y21WMmFXOTFjeUIwY21GdWMyWnZjbTFoZEdsdmJuTXVYRzRnSUNBcVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJSFpoY2lCVVVrRk9VMFpQVWsxRlVsTWdQU0JiUjJGd0xDQkhjbTkzTENCUVpXVnJhVzVuTENCR2IyTjFjMmx1WjEwdVkyOXVZMkYwS0Vkc2FXUmxMbDkwTENCYlVuUnNYU2s3WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlFhWEJzYVc1bGN5QjBjbUZ1YzJ4aGRHVWdkbUZzZFdVZ2QybDBhQ0J5WldkcGMzUmxjbVZrSUhSeVlXNXpabTl5YldWeWN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwNTFiV0psY24wZ2RISmhibk5zWVhSbFhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJRzExZEdGMFpUb2dablZ1WTNScGIyNGdiWFYwWVhSbEtIUnlZVzV6YkdGMFpTa2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JVVWtGT1UwWlBVazFGVWxNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlIUnlZVzV6Wm05eWJXVnlJRDBnVkZKQlRsTkdUMUpOUlZKVFcybGRPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBjMFoxYm1OMGFXOXVLSFJ5WVc1elptOXliV1Z5S1NBbUppQnBjMFoxYm1OMGFXOXVLSFJ5WVc1elptOXliV1Z5S0NrdWJXOWthV1o1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJ5WVc1emJHRjBaU0E5SUhSeVlXNXpabTl5YldWeUtFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcExtMXZaR2xtZVNoMGNtRnVjMnhoZEdVcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJSGRoY200b0oxUnlZVzV6Wm05eWJXVnlJSE5vYjNWc1pDQmlaU0JoSUdaMWJtTjBhVzl1SUhSb1lYUWdjbVYwZFhKdWN5QmhiaUJ2WW1wbFkzUWdkMmwwYUNCZ2JXOWthV1o1S0NsZ0lHMWxkR2h2WkNjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQjBjbUZ1YzJ4aGRHVTdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJVY21GdWMyeGhkR1VnS0Vkc2FXUmxMQ0JEYjIxd2IyNWxiblJ6TENCRmRtVnVkSE1wSUh0Y2JpQWdkbUZ5SUZSeVlXNXpiR0YwWlNBOUlIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlRaWFJ6SUhaaGJIVmxJRzltSUhSeVlXNXpiR0YwWlNCdmJpQklWRTFNSUdWc1pXMWxiblF1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdkbUZzZFdWY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRG9nWm5WdVkzUnBiMjRnYzJWMEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCMllYSWdkSEpoYm5ObWIzSnRJRDBnYlhWMFlYUnZjaWhIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeWt1YlhWMFlYUmxLSFpoYkhWbEtUdGNibHh1SUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuZHlZWEJ3WlhJdWMzUjViR1V1ZEhKaGJuTm1iM0p0SUQwZ0ozUnlZVzV6YkdGMFpUTmtLQ2NnS3lBdE1TQXFJSFJ5WVc1elptOXliU0FySUNkd2VDd2dNSEI0TENBd2NIZ3BKenRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pXMXZkbVZ6SUhaaGJIVmxJRzltSUhSeVlXNXpiR0YwWlNCbWNtOXRJRWhVVFV3Z1pXeGxiV1Z1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psT2lCbWRXNWpkR2x2YmlCeVpXMXZkbVVvS1NCN1hHNGdJQ0FnSUNCRGIyMXdiMjVsYm5SekxraDBiV3d1ZDNKaGNIQmxjaTV6ZEhsc1pTNTBjbUZ1YzJadmNtMGdQU0FuSnp0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTmxkQ0J1WlhjZ2RISmhibk5zWVhSbElIWmhiSFZsT2x4dUlDQWdLaUF0SUc5dUlHMXZkbVVnZEc4Z2NtVm1iR1ZqZENCcGJtUmxlQ0JqYUdGdVoyVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIyYVdFZ1FWQkpJSFJ2SUhKbFpteGxZM1FnY0c5emMybGliR1VnWTJoaGJtZGxjeUJwYmlCdmNIUnBiMjV6WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyMXZkbVVuTENCbWRXNWpkR2x2YmlBb1kyOXVkR1Y0ZENrZ2UxeHVJQ0FnSUhaaGNpQm5ZWEFnUFNCRGIyMXdiMjVsYm5SekxrZGhjSE11ZG1Gc2RXVTdYRzRnSUNBZ2RtRnlJR3hsYm1kMGFDQTlJRU52YlhCdmJtVnVkSE11VTJsNlpYTXViR1Z1WjNSb08xeHVJQ0FnSUhaaGNpQjNhV1IwYUNBOUlFTnZiWEJ2Ym1WdWRITXVVMmw2WlhNdWMyeHBaR1ZYYVdSMGFEdGNibHh1SUNBZ0lHbG1JQ2hIYkdsa1pTNXBjMVI1Y0dVb0oyTmhjbTkxYzJWc0p5a2dKaVlnUTI5dGNHOXVaVzUwY3k1U2RXNHVhWE5QWm1aelpYUW9KenduS1NrZ2UxeHVJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NVVjbUZ1YzJsMGFXOXVMbUZtZEdWeUtHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnUlhabGJuUnpMbVZ0YVhRb0ozUnlZVzV6YkdGMFpTNXFkVzF3SnlrN1hHNWNiaUFnSUNBZ0lDQWdWSEpoYm5Oc1lYUmxMbk5sZENoM2FXUjBhQ0FxSUNoc1pXNW5kR2dnTFNBeEtTazdYRzRnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJRlJ5WVc1emJHRjBaUzV6WlhRb0xYZHBaSFJvSUMwZ1oyRndJQ29nYkdWdVozUm9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvUjJ4cFpHVXVhWE5VZVhCbEtDZGpZWEp2ZFhObGJDY3BJQ1ltSUVOdmJYQnZibVZ1ZEhNdVVuVnVMbWx6VDJabWMyVjBLQ2MrSnlrcElIdGNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVWSEpoYm5OcGRHbHZiaTVoWm5SbGNpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZDBjbUZ1YzJ4aGRHVXVhblZ0Y0NjcE8xeHVYRzRnSUNBZ0lDQWdJRlJ5WVc1emJHRjBaUzV6WlhRb01DazdYRzRnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJRlJ5WVc1emJHRjBaUzV6WlhRb2QybGtkR2dnS2lCc1pXNW5kR2dnS3lCbllYQWdLaUJzWlc1bmRHZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCVWNtRnVjMnhoZEdVdWMyVjBLR052Ym5SbGVIUXViVzkyWlcxbGJuUXBPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnRiM1psSUhSeVlXNXpiR0YwWlRwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUdKeWFXNW5JRzFoY210MWNDQjBieUJwZEhNZ2FXNXBkR0ZzSUhOMFlYUmxYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjJSbGMzUnliM2tuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1ZISmhibk5zWVhSbExuSmxiVzkyWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdWSEpoYm5Oc1lYUmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQlVjbUZ1YzJsMGFXOXVJQ2hIYkdsa1pTd2dRMjl0Y0c5dVpXNTBjeXdnUlhabGJuUnpLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQkliMnhrY3lCcGJtRmpkR2wyYVhSNUlITjBZWFIxY3lCdlppQjBjbUZ1YzJsMGFXOXVMbHh1SUNBZ0tpQlhhR1Z1SUhSeWRXVWdkSEpoYm5OcGRHbHZiaUJwY3lCdWIzUWdZWEJ3YkdsbFpDNWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMEp2YjJ4bFlXNTlYRzRnSUNBcUwxeHVJQ0IyWVhJZ1pHbHpZV0pzWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0IyWVhJZ1ZISmhibk5wZEdsdmJpQTlJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYjIxd2IzTmxjeUJ6ZEhKcGJtY2diMllnZEdobElFTlRVeUIwY21GdWMybDBhVzl1TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJSEJ5YjNCbGNuUjVYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdVM1J5YVc1bmZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOdmJYQnZjMlU2SUdaMWJtTjBhVzl1SUdOdmJYQnZjMlVvY0hKdmNHVnlkSGtwSUh0Y2JpQWdJQ0FnSUhaaGNpQnpaWFIwYVc1bmN5QTlJRWRzYVdSbExuTmxkSFJwYm1kek8xeHVYRzRnSUNBZ0lDQnBaaUFvSVdScGMyRmliR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCd2NtOXdaWEowZVNBcklDY2dKeUFySUhSb2FYTXVaSFZ5WVhScGIyNGdLeUFuYlhNZ0p5QXJJSE5sZEhScGJtZHpMbUZ1YVcxaGRHbHZibFJwYldsdVowWjFibU03WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ3Y205d1pYSjBlU0FySUNjZ01HMXpJQ2NnS3lCelpYUjBhVzVuY3k1aGJtbHRZWFJwYjI1VWFXMXBibWRHZFc1ak8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRk5sZEhNZ2RtRnNkV1VnYjJZZ2RISmhibk5wZEdsdmJpQnZiaUJJVkUxTUlHVnNaVzFsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTFOMGNtbHVaejE5SUhCeWIzQmxjblI1WEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCelpYUTZJR1oxYm1OMGFXOXVJSE5sZENncElIdGNiaUFnSUNBZ0lIWmhjaUJ3Y205d1pYSjBlU0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBd0lDWW1JR0Z5WjNWdFpXNTBjMXN3WFNBaFBUMGdkVzVrWldacGJtVmtJRDhnWVhKbmRXMWxiblJ6V3pCZElEb2dKM1J5WVc1elptOXliU2M3WEc1Y2JpQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMbk4wZVd4bExuUnlZVzV6YVhScGIyNGdQU0IwYUdsekxtTnZiWEJ2YzJVb2NISnZjR1Z5ZEhrcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsYlc5MlpYTWdkbUZzZFdVZ2IyWWdkSEpoYm5OcGRHbHZiaUJtY205dElFaFVUVXdnWld4bGJXVnVkQzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnY21WdGIzWmxPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVW9LU0I3WEc0Z0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpNXpkSGxzWlM1MGNtRnVjMmwwYVc5dUlEMGdKeWM3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VuVnVjeUJqWVd4c1ltRmpheUJoWm5SbGNpQmhibWx0WVhScGIyNHVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ0lIdEdkVzVqZEdsdmJuMGdZMkZzYkdKaFkydGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0ZtZEdWeU9pQm1kVzVqZEdsdmJpQmhablJsY2loallXeHNZbUZqYXlrZ2UxeHVJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUdOaGJHeGlZV05yS0NrN1hHNGdJQ0FnSUNCOUxDQjBhR2x6TG1SMWNtRjBhVzl1S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkZibUZpYkdVZ2RISmhibk5wZEdsdmJpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaVzVoWW14bE9pQm1kVzVqZEdsdmJpQmxibUZpYkdVb0tTQjdYRzRnSUNBZ0lDQmthWE5oWW14bFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQjBhR2x6TG5ObGRDZ3BPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVScGMyRmliR1VnZEhKaGJuTnBkR2x2Ymk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1pHbHpZV0pzWlRvZ1puVnVZM1JwYjI0Z1pHbHpZV0pzWlNncElIdGNiaUFnSUNBZ0lHUnBjMkZpYkdWa0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ2RHaHBjeTV6WlhRb0tUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdaR1ZtYVc1bEtGUnlZVzV6YVhScGIyNHNJQ2RrZFhKaGRHbHZiaWNzSUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSFpYUnpJR1IxY21GMGFXOXVJRzltSUhSb1pTQjBjbUZ1YzJsMGFXOXVJR0poYzJWa1hHNGdJQ0FnSUNvZ2IyNGdZM1Z5Y21WdWRHeDVJSEoxYm01cGJtY2dZVzVwYldGMGFXOXVJSFI1Y0dVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0T2RXMWlaWEo5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlCblpYUW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLRWRzYVdSbExtbHpWSGx3WlNnbmMyeHBaR1Z5SnlrZ0ppWWdRMjl0Y0c5dVpXNTBjeTVTZFc0dWIyWm1jMlYwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpYUjBhVzVuY3k1eVpYZHBibVJFZFhKaGRHbHZianRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSE5sZEhScGJtZHpMbUZ1YVcxaGRHbHZia1IxY21GMGFXOXVPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZObGRDQjBjbUZ1YzJsMGFXOXVJR0J6ZEhsc1pXQWdkbUZzZFdVNlhHNGdJQ0FxSUMwZ2IyNGdaV0ZqYUNCdGIzWnBibWNzSUdKbFkyRjFjMlVnYVhRZ2JXRjVJR0psSUdOc1pXRnlaV1FnWW5rZ2IyWm1jMlYwSUcxdmRtVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduYlc5MlpTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JVY21GdWMybDBhVzl1TG5ObGRDZ3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1JHbHpZV0pzWlNCMGNtRnVjMmwwYVc5dU9seHVJQ0FnS2lBdElHSmxabTl5WlNCcGJtbDBhV0ZzSUdKMWFXeGtJSFJ2SUdGMmIybGtJSFJ5WVc1emFYUnBiMjVwYm1jZ1puSnZiU0JnTUdBZ2RHOGdZSE4wWVhKMFFYUmdJR2x1WkdWNFhHNGdJQ0FxSUMwZ2QyaHBiR1VnY21WemFYcHBibWNnZDJsdVpHOTNJR0Z1WkNCeVpXTmhiR04xYkdGMGFXNW5JR1JwYldWdWRHbHZibk5jYmlBZ0lDb2dMU0J2YmlCcWRXMXdhVzVuSUdaeWIyMGdiMlptYzJWMElIUnlZVzV6YVhScGIyNGdZWFFnYzNSaGNuUWdZVzVrSUdWdVpDQmxaR2RsY3lCcGJpQmdZMkZ5YjNWelpXeGdJSFI1Y0dWY2JpQWdJQ292WEc0Z0lFVjJaVzUwY3k1dmJpaGJKMkoxYVd4a0xtSmxabTl5WlNjc0lDZHlaWE5wZW1VbkxDQW5kSEpoYm5Oc1lYUmxMbXAxYlhBblhTd2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRlJ5WVc1emFYUnBiMjR1WkdsellXSnNaU2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSVzVoWW14bElIUnlZVzV6YVhScGIyNDZYRzRnSUNBcUlDMGdiMjRnWldGamFDQnlkVzV1YVc1bkxDQmlaV05oZFhObElHbDBJRzFoZVNCaVpTQmthWE5oWW14bFpDQmllU0J2Wm1aelpYUWdiVzkyWlZ4dUlDQWdLaTljYmlBZ1JYWmxiblJ6TG05dUtDZHlkVzRuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1ZISmhibk5wZEdsdmJpNWxibUZpYkdVb0tUdGNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGJXOTJaU0IwY21GdWMybDBhVzl1T2x4dUlDQWdLaUF0SUc5dUlHUmxjM1J5YjNscGJtY2dkRzhnWW5KcGJtY2diV0Z5YTNWd0lIUnZJR2wwY3lCcGJtbDBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCVWNtRnVjMmwwYVc5dUxuSmxiVzkyWlNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdWSEpoYm5OcGRHbHZianRjYm4xY2JseHVMeW9xWEc0Z0tpQlVaWE4wSUhacFlTQmhJR2RsZEhSbGNpQnBiaUIwYUdVZ2IzQjBhVzl1Y3lCdlltcGxZM1FnZEc4Z2MyVmxYRzRnS2lCcFppQjBhR1VnY0dGemMybDJaU0J3Y205d1pYSjBlU0JwY3lCaFkyTmxjM05sWkM1Y2JpQXFYRzRnS2lCQWMyVmxJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzlYU1VOSEwwVjJaVzUwVEdsemRHVnVaWEpQY0hScGIyNXpMMkpzYjJJdloyZ3RjR0ZuWlhNdlpYaHdiR0ZwYm1WeUxtMWtJMlpsWVhSMWNtVXRaR1YwWldOMGFXOXVYRzRnS2k5Y2JseHVkbUZ5SUhOMWNIQnZjblJ6VUdGemMybDJaU0E5SUdaaGJITmxPMXh1WEc1MGNua2dlMXh1SUNCMllYSWdiM0IwY3lBOUlFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2g3ZlN3Z0ozQmhjM05wZG1VbkxDQjdYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUJuWlhRb0tTQjdYRzRnSUNBZ0lDQnpkWEJ3YjNKMGMxQmhjM05wZG1VZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmlBZ2ZTazdYRzVjYmlBZ2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjNSbGMzUlFZWE56YVhabEp5d2diblZzYkN3Z2IzQjBjeWs3WEc0Z0lIZHBibVJ2ZHk1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtDZDBaWE4wVUdGemMybDJaU2NzSUc1MWJHd3NJRzl3ZEhNcE8xeHVmU0JqWVhSamFDQW9aU2tnZTMxY2JseHVkbUZ5SUhOMWNIQnZjblJ6VUdGemMybDJaU1F4SUQwZ2MzVndjRzl5ZEhOUVlYTnphWFpsTzF4dVhHNTJZWElnVTFSQlVsUmZSVlpGVGxSVElEMGdXeWQwYjNWamFITjBZWEowSnl3Z0oyMXZkWE5sWkc5M2JpZGRPMXh1ZG1GeUlFMVBWa1ZmUlZaRlRsUlRJRDBnV3lkMGIzVmphRzF2ZG1VbkxDQW5iVzkxYzJWdGIzWmxKMTA3WEc1MllYSWdSVTVFWDBWV1JVNVVVeUE5SUZzbmRHOTFZMmhsYm1RbkxDQW5kRzkxWTJoallXNWpaV3duTENBbmJXOTFjMlYxY0Njc0lDZHRiM1Z6Wld4bFlYWmxKMTA3WEc1MllYSWdUVTlWVTBWZlJWWkZUbFJUSUQwZ1d5ZHRiM1Z6WldSdmQyNG5MQ0FuYlc5MWMyVnRiM1psSnl3Z0oyMXZkWE5sZFhBbkxDQW5iVzkxYzJWc1pXRjJaU2RkTzF4dVhHNW1kVzVqZEdsdmJpQlRkMmx3WlNBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ2RtRnlJSE4zYVhCbFUybHVJRDBnTUR0Y2JpQWdkbUZ5SUhOM2FYQmxVM1JoY25SWUlEMGdNRHRjYmlBZ2RtRnlJSE4zYVhCbFUzUmhjblJaSUQwZ01EdGNiaUFnZG1GeUlHUnBjMkZpYkdWa0lEMGdabUZzYzJVN1hHNGdJSFpoY2lCdGIzWmxZV0pzWlNBOUlIUnlkV1U3WEc0Z0lIWmhjaUJqWVhCMGRYSmxJRDBnYzNWd2NHOXlkSE5RWVhOemFYWmxKREVnUHlCN0lIQmhjM05wZG1VNklIUnlkV1VnZlNBNklHWmhiSE5sTzF4dVhHNGdJSFpoY2lCVGQybHdaU0E5SUh0Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSmJtbDBhV0ZzYVhwbGN5QnpkMmx3WlNCaWFXNWthVzVuY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NWlhVzVrVTNkcGNHVlRkR0Z5ZENncE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWhoYm1Sc1pYSWdabTl5SUdCemQybHdaWE4wWVhKMFlDQmxkbVZ1ZEM0Z1EyRnNZM1ZzWVhSbGN5QmxiblJ5ZVNCd2IybHVkSE1nYjJZZ2RHaGxJSFZ6WlhJbmN5QjBZWEF1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITjBZWEowT2lCbWRXNWpkR2x2YmlCemRHRnlkQ2hsZG1WdWRDa2dlMXh1SUNBZ0lDQWdhV1lnS0NGa2FYTmhZbXhsWkNBbUppQWhSMnhwWkdVdVpHbHpZV0pzWldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1a2FYTmhZbXhsS0NrN1hHNWNiaUFnSUNBZ0lDQWdkbUZ5SUhOM2FYQmxJRDBnZEdocGN5NTBiM1ZqYUdWektHVjJaVzUwS1R0Y2JseHVJQ0FnSUNBZ0lDQnRiM1psWVdKc1pTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lITjNhWEJsVTJsdUlEMGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2MzZHBjR1ZUZEdGeWRGZ2dQU0IwYjBsdWRDaHpkMmx3WlM1d1lXZGxXQ2s3WEc0Z0lDQWdJQ0FnSUhOM2FYQmxVM1JoY25SWklEMGdkRzlKYm5Rb2MzZHBjR1V1Y0dGblpWa3BPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkZOM2FYQmxUVzkyWlNncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUlRkMmx3WlVWdVpDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHpkMmx3WlM1emRHRnlkQ2NwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFaGhibVJzWlhJZ1ptOXlJR0J6ZDJsd1pXMXZkbVZnSUdWMlpXNTBMaUJEWVd4amRXeGhkR1Z6SUhWelpYSW5jeUIwWVhBZ1lXNW5iR1VnWVc1a0lHUnBjM1JoYm1ObExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUdWMlpXNTBYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTJaVG9nWm5WdVkzUnBiMjRnYlc5MlpTaGxkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0ZIYkdsa1pTNWthWE5oWW14bFpDa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1gwZHNhV1JsSkhObGRIUnBibWR6SUQwZ1IyeHBaR1V1YzJWMGRHbHVaM01zWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiM1ZqYUVGdVoyeGxJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMblJ2ZFdOb1FXNW5iR1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiM1ZqYUZKaGRHbHZJRDBnWDBkc2FXUmxKSE5sZEhScGJtZHpMblJ2ZFdOb1VtRjBhVzhzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6YzJWeklEMGdYMGRzYVdSbEpITmxkSFJwYm1kekxtTnNZWE56WlhNN1hHNWNibHh1SUNBZ0lDQWdJQ0IyWVhJZ2MzZHBjR1VnUFNCMGFHbHpMblJ2ZFdOb1pYTW9aWFpsYm5RcE8xeHVYRzRnSUNBZ0lDQWdJSFpoY2lCemRXSkZlRk40SUQwZ2RHOUpiblFvYzNkcGNHVXVjR0ZuWlZncElDMGdjM2RwY0dWVGRHRnlkRmc3WEc0Z0lDQWdJQ0FnSUhaaGNpQnpkV0pGZVZONUlEMGdkRzlKYm5Rb2MzZHBjR1V1Y0dGblpWa3BJQzBnYzNkcGNHVlRkR0Z5ZEZrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3YjNkRldDQTlJRTFoZEdndVlXSnpLSE4xWWtWNFUzZ2dQRHdnTWlrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ3YjNkRldTQTlJRTFoZEdndVlXSnpLSE4xWWtWNVUza2dQRHdnTWlrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZDJsd1pVaDVjRzkwWlc1MWMyVWdQU0JOWVhSb0xuTnhjblFvY0c5M1JWZ2dLeUJ3YjNkRldTazdYRzRnSUNBZ0lDQWdJSFpoY2lCemQybHdaVU5oZEdobGRIVnpJRDBnVFdGMGFDNXpjWEowS0hCdmQwVlpLVHRjYmx4dUlDQWdJQ0FnSUNCemQybHdaVk5wYmlBOUlFMWhkR2d1WVhOcGJpaHpkMmx3WlVOaGRHaGxkSFZ6SUM4Z2MzZHBjR1ZJZVhCdmRHVnVkWE5sS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYlc5MlpXRmliR1VnSmlZZ2MzZHBjR1ZUYVc0Z0tpQXhPREFnTHlCTllYUm9MbEJKSUR3Z2RHOTFZMmhCYm1kc1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdWMlpXNTBMbk4wYjNCUWNtOXdZV2RoZEdsdmJpZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ1EyOXRjRzl1Wlc1MGN5NU5iM1psTG0xaGEyVW9jM1ZpUlhoVGVDQXFJSFJ2Um14dllYUW9kRzkxWTJoU1lYUnBieWtwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1F1WTJ4aGMzTk1hWE4wTG1Ga1pDaGpiR0Z6YzJWekxtUnlZV2RuYVc1bktUdGNibHh1SUNBZ0lDQWdJQ0FnSUVWMlpXNTBjeTVsYldsMEtDZHpkMmx3WlM1dGIzWmxKeWs3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JXOTJaV0ZpYkdVZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWhoYm1Sc1pYSWdabTl5SUdCemQybHdaV1Z1WkdBZ1pYWmxiblF1SUVacGJtbDBhV0ZzYVhwbGN5QjFjMlZ5SjNNZ2RHRndJR0Z1WkNCa1pXTnBaR1Z6SUdGaWIzVjBJR2RzYVdSbElHMXZkbVV1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHVnVaRG9nWm5WdVkzUnBiMjRnWlc1a0tHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCcFppQW9JVWRzYVdSbExtUnBjMkZpYkdWa0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCelpYUjBhVzVuY3lBOUlFZHNhV1JsTG5ObGRIUnBibWR6TzF4dVhHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZDJsd1pTQTlJSFJvYVhNdWRHOTFZMmhsY3lobGRtVnVkQ2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQjBhSEpsYzJodmJHUWdQU0IwYUdsekxuUm9jbVZ6YUc5c1pDaGxkbVZ1ZENrN1hHNWNiaUFnSUNBZ0lDQWdkbUZ5SUhOM2FYQmxSR2x6ZEdGdVkyVWdQU0J6ZDJsd1pTNXdZV2RsV0NBdElITjNhWEJsVTNSaGNuUllPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MzZHBjR1ZFWldjZ1BTQnpkMmx3WlZOcGJpQXFJREU0TUNBdklFMWhkR2d1VUVrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZEdWd2N5QTlJRTFoZEdndWNtOTFibVFvYzNkcGNHVkVhWE4wWVc1alpTQXZJRU52YlhCdmJtVnVkSE11VTJsNlpYTXVjMnhwWkdWWGFXUjBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm1GaWJHVW9LVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9iVzkyWldGaWJHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jM2RwY0dWRWFYTjBZVzVqWlNBK0lIUm9jbVZ6YUc5c1pDQW1KaUJ6ZDJsd1pVUmxaeUE4SUhObGRIUnBibWR6TG5SdmRXTm9RVzVuYkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9hV3hsSUhOM2FYQmxJR2x6SUhCdmMybDBhWFpsSUdGdVpDQm5jbVZoZEdWeUlIUm9ZVzRnZEdoeVpYTm9iMnhrSUcxdmRtVWdZbUZqYTNkaGNtUXVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jMlYwZEdsdVozTXVjR1Z5Vkc5MVkyZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JsY0hNZ1BTQk5ZWFJvTG0xcGJpaHpkR1Z3Y3l3Z2RHOUpiblFvYzJWMGRHbHVaM011Y0dWeVZHOTFZMmdwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxtbHpLQ2R5ZEd3bktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3Y3lBOUlDMXpkR1Z3Y3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0c5dVpXNTBjeTVTZFc0dWJXRnJaU2hEYjIxd2IyNWxiblJ6TGtScGNtVmpkR2x2Ymk1eVpYTnZiSFpsS0NjOEp5QXJJSE4wWlhCektTazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoemQybHdaVVJwYzNSaGJtTmxJRHdnTFhSb2NtVnphRzlzWkNBbUppQnpkMmx3WlVSbFp5QThJSE5sZEhScGJtZHpMblJ2ZFdOb1FXNW5iR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZkb2FXeGxJSE4zYVhCbElHbHpJRzVsWjJGMGFYWmxJR0Z1WkNCc2IzZGxjaUIwYUdGdUlHNWxaMkYwYVhabElIUm9jbVZ6YUc5c1pDQnRiM1psSUdadmNuZGhjbVF1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzJWMGRHbHVaM011Y0dWeVZHOTFZMmdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNITWdQU0JOWVhSb0xtMWhlQ2h6ZEdWd2N5d2dMWFJ2U1c1MEtITmxkSFJwYm1kekxuQmxjbFJ2ZFdOb0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaERiMjF3YjI1bGJuUnpMa1JwY21WamRHbHZiaTVwY3lnbmNuUnNKeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNITWdQU0F0YzNSbGNITTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUVOdmJYQnZibVZ1ZEhNdVVuVnVMbTFoYTJVb1EyOXRjRzl1Wlc1MGN5NUVhWEpsWTNScGIyNHVjbVZ6YjJ4MlpTZ25QaWNnS3lCemRHVndjeWtwTzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCWGFHbHNaU0J6ZDJsd1pTQmtiMjRuZENCeVpXRmphQ0JrYVhOMFlXNWpaU0JoY0hCc2VTQndjbVYyYVc5MWN5QjBjbUZ1YzJadmNtMHVYRzRnSUNBZ0lDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxrMXZkbVV1YldGclpTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJRU52YlhCdmJtVnVkSE11U0hSdGJDNXliMjkwTG1Oc1lYTnpUR2x6ZEM1eVpXMXZkbVVvYzJWMGRHbHVaM011WTJ4aGMzTmxjeTVrY21GbloybHVaeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUxYm1KcGJtUlRkMmx3WlUxdmRtVW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTFibUpwYm1SVGQybHdaVVZ1WkNncE8xeHVYRzRnSUNBZ0lDQWdJRVYyWlc1MGN5NWxiV2wwS0NkemQybHdaUzVsYm1RbktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJDYVc1a2N5QnpkMmx3WlNkeklITjBZWEowYVc1bklHVjJaVzUwTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaWFXNWtVM2RwY0dWVGRHRnlkRG9nWm5WdVkzUnBiMjRnWW1sdVpGTjNhWEJsVTNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ1gzUm9hWE1nUFNCMGFHbHpPMXh1WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLSE5sZEhScGJtZHpMbk4zYVhCbFZHaHlaWE5vYjJ4a0tTQjdYRzRnSUNBZ0lDQWdJRUpwYm1SbGNpNXZiaWhUVkVGU1ZGOUZWa1ZPVkZOYk1GMHNJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUxDQm1kVzVqZEdsdmJpQW9aWFpsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0JmZEdocGN5NXpkR0Z5ZENobGRtVnVkQ2s3WEc0Z0lDQWdJQ0FnSUgwc0lHTmhjSFIxY21VcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvYzJWMGRHbHVaM011WkhKaFoxUm9jbVZ6YUc5c1pDa2dlMXh1SUNBZ0lDQWdJQ0JDYVc1a1pYSXViMjRvVTFSQlVsUmZSVlpGVGxSVFd6RmRMQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpd2dablZ1WTNScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWDNSb2FYTXVjM1JoY25Rb1pYWmxiblFwTzF4dUlDQWdJQ0FnSUNCOUxDQmpZWEIwZFhKbEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUnpJSE4zYVhCbEozTWdjM1JoY25ScGJtY2daWFpsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkZOM2FYQmxVM1JoY25RNklHWjFibU4wYVc5dUlIVnVZbWx1WkZOM2FYQmxVM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyWm1LRk5VUVZKVVgwVldSVTVVVTFzd1hTd2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuZHlZWEJ3WlhJcE8xeHVJQ0FnSUNBZ1FtbHVaR1Z5TG05bVppaFRWRUZTVkY5RlZrVk9WRk5iTVYwc0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1M2NtRndjR1Z5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkNhVzVrY3lCemQybHdaU2R6SUcxdmRtbHVaeUJsZG1WdWRDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZbWx1WkZOM2FYQmxUVzkyWlRvZ1puVnVZM1JwYjI0Z1ltbHVaRk4zYVhCbFRXOTJaU2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQmZkR2hwY3pJZ1BTQjBhR2x6TzF4dVhHNGdJQ0FnSUNCQ2FXNWtaWEl1YjI0b1RVOVdSVjlGVmtWT1ZGTXNJRU52YlhCdmJtVnVkSE11U0hSdGJDNTNjbUZ3Y0dWeUxDQjBhSEp2ZEhSc1pTaG1kVzVqZEdsdmJpQW9aWFpsYm5RcElIdGNiaUFnSUNBZ0lDQWdYM1JvYVhNeUxtMXZkbVVvWlhabGJuUXBPMXh1SUNBZ0lDQWdmU3dnUjJ4cFpHVXVjMlYwZEdsdVozTXVkR2h5YjNSMGJHVXBMQ0JqWVhCMGRYSmxLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUhOM2FYQmxKM01nYlc5MmFXNW5JR1YyWlc1MExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQjFibUpwYm1SVGQybHdaVTF2ZG1VNklHWjFibU4wYVc5dUlIVnVZbWx1WkZOM2FYQmxUVzkyWlNncElIdGNiaUFnSUNBZ0lFSnBibVJsY2k1dlptWW9UVTlXUlY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJ6ZDJsd1pTZHpJR1Z1WkdsdVp5QmxkbVZ1ZEM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRk4zYVhCbFJXNWtPaUJtZFc1amRHbHZiaUJpYVc1a1UzZHBjR1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQjJZWElnWDNSb2FYTXpJRDBnZEdocGN6dGNibHh1SUNBZ0lDQWdRbWx1WkdWeUxtOXVLRVZPUkY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlMQ0JtZFc1amRHbHZiaUFvWlhabGJuUXBJSHRjYmlBZ0lDQWdJQ0FnWDNSb2FYTXpMbVZ1WkNobGRtVnVkQ2s3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZibUpwYm1SeklITjNhWEJsSjNNZ1pXNWthVzVuSUdWMlpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IxYm1KcGJtUlRkMmx3WlVWdVpEb2dablZ1WTNScGIyNGdkVzVpYVc1a1UzZHBjR1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQkNhVzVrWlhJdWIyWm1LRVZPUkY5RlZrVk9WRk1zSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCT2IzSnRZV3hwZW1WeklHVjJaVzUwSUhSdmRXTm9aWE1nY0c5cGJuUnpJR0ZqWTI5eWRHbHVaeUIwYnlCa2FXWm1aWEpsYm5RZ2RIbHdaWE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdaWFpsYm5SY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IwYjNWamFHVnpPaUJtZFc1amRHbHZiaUIwYjNWamFHVnpLR1YyWlc1MEtTQjdYRzRnSUNBZ0lDQnBaaUFvVFU5VlUwVmZSVlpGVGxSVExtbHVaR1Y0VDJZb1pYWmxiblF1ZEhsd1pTa2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1pYWmxiblE3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJsZG1WdWRDNTBiM1ZqYUdWeld6QmRJSHg4SUdWMlpXNTBMbU5vWVc1blpXUlViM1ZqYUdWeld6QmRPMXh1SUNBZ0lIMHNYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVkbGRITWdkbUZzZFdVZ2IyWWdiV2x1YVcxMWJTQnpkMmx3WlNCa2FYTjBZVzVqWlNCelpYUjBhVzVuY3lCaVlYTmxaQ0J2YmlCbGRtVnVkQ0IwZVhCbExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1RuVnRZbVZ5ZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFJvY21WemFHOXNaRG9nWm5WdVkzUnBiMjRnZEdoeVpYTm9iMnhrS0dWMlpXNTBLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JseHVJQ0FnSUNBZ2FXWWdLRTFQVlZORlgwVldSVTVVVXk1cGJtUmxlRTltS0dWMlpXNTBMblI1Y0dVcElENGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObGRIUnBibWR6TG1SeVlXZFVhSEpsYzJodmJHUTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQnpaWFIwYVc1bmN5NXpkMmx3WlZSb2NtVnphRzlzWkR0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkZibUZpYkdWeklITjNhWEJsSUdWMlpXNTBMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdjMlZzWm4xY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JsYm1GaWJHVTZJR1oxYm1OMGFXOXVJR1Z1WVdKc1pTZ3BJSHRjYmlBZ0lDQWdJR1JwYzJGaWJHVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJRU52YlhCdmJtVnVkSE11VkhKaGJuTnBkR2x2Ymk1bGJtRmliR1VvS1R0Y2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUkdsellXSnNaWE1nYzNkcGNHVWdaWFpsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0elpXeG1mVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHUnBjMkZpYkdVNklHWjFibU4wYVc5dUlHUnBjMkZpYkdVb0tTQjdYRzRnSUNBZ0lDQmthWE5oWW14bFpDQTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lFTnZiWEJ2Ym1WdWRITXVWSEpoYm5OcGRHbHZiaTVrYVhOaFlteGxLQ2s3WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dRV1JrSUdOdmJYQnZibVZ1ZENCamJHRnpjenBjYmlBZ0lDb2dMU0JoWm5SbGNpQnBibWwwYVdGc0lHSjFhV3hrYVc1blhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMkoxYVd4a0xtRm1kR1Z5Snl3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1eWIyOTBMbU5zWVhOelRHbHpkQzVoWkdRb1IyeHBaR1V1YzJWMGRHbHVaM011WTJ4aGMzTmxjeTV6ZDJsd1pXRmliR1VwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZ0YjNabElITjNhWEJwYm1jZ1ltbHVaR2x1WjNNNlhHNGdJQ0FxSUMwZ2IyNGdaR1Z6ZEhKdmVXbHVaeXdnZEc4Z2NtVnRiM1psSUdGa1pHVmtJRVYyWlc1MFRHbHpkR1Z1WlhKelhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9KMlJsYzNSeWIza25MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnVTNkcGNHVXVkVzVpYVc1a1UzZHBjR1ZUZEdGeWRDZ3BPMXh1SUNBZ0lGTjNhWEJsTG5WdVltbHVaRk4zYVhCbFRXOTJaU2dwTzF4dUlDQWdJRk4zYVhCbExuVnVZbWx1WkZOM2FYQmxSVzVrS0NrN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUZOM2FYQmxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQkpiV0ZuWlhNZ0tFZHNhV1JsTENCRGIyMXdiMjVsYm5SekxDQkZkbVZ1ZEhNcElIdGNiaUFnTHlvcVhHNGdJQ0FxSUVsdWMzUmhibU5sSUc5bUlIUm9aU0JpYVc1a1pYSWdabTl5SUVSUFRTQkZkbVZ1ZEhNdVhHNGdJQ0FxWEc0Z0lDQXFJRUIwZVhCbElIdEZkbVZ1ZEhOQ2FXNWtaWEo5WEc0Z0lDQXFMMXh1SUNCMllYSWdRbWx1WkdWeUlEMGdibVYzSUVWMlpXNTBjMEpwYm1SbGNpZ3BPMXh1WEc0Z0lIWmhjaUJKYldGblpYTWdQU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUW1sdVpITWdiR2x6ZEdWdVpYSWdkRzhnWjJ4cFpHVWdkM0poY0hCbGNpNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdiVzkxYm5RNklHWjFibU4wYVc5dUlHMXZkVzUwS0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVpYVc1a0tDazdYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUW1sdVpITWdZR1J5WVdkemRHRnlkR0FnWlhabGJuUWdiMjRnZDNKaGNIQmxjaUIwYnlCd2NtVjJaVzUwSUdSeVlXZG5hVzVuSUdsdFlXZGxjeTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWW1sdVpEb2dablZ1WTNScGIyNGdZbWx1WkNncElIdGNiaUFnSUNBZ0lFSnBibVJsY2k1dmJpZ25aSEpoWjNOMFlYSjBKeXdnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXNJSFJvYVhNdVpISmhaM04wWVhKMEtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUnpJR0JrY21GbmMzUmhjblJnSUdWMlpXNTBJRzl1SUhkeVlYQndaWEl1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhWdVltbHVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtLQ2tnZTF4dUlDQWdJQ0FnUW1sdVpHVnlMbTltWmlnblpISmhaM04wWVhKMEp5d2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuZHlZWEJ3WlhJcE8xeHVJQ0FnSUgwc1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVYyWlc1MElHaGhibVJzWlhJdUlGQnlaWFpsYm5SeklHUnlZV2RuYVc1bkxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmtjbUZuYzNSaGNuUTZJR1oxYm1OMGFXOXVJR1J5WVdkemRHRnlkQ2hsZG1WdWRDa2dlMXh1SUNBZ0lDQWdaWFpsYm5RdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkyWlNCaWFXNWthVzVuY3lCbWNtOXRJR2x0WVdkbGN6cGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuTENCMGJ5QnlaVzF2ZG1VZ1lXUmtaV1FnUlhabGJuUk1hWE4wWlc1bGNuTmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCSmJXRm5aWE11ZFc1aWFXNWtLQ2s3WEc0Z0lDQWdRbWx1WkdWeUxtUmxjM1J5YjNrb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRWx0WVdkbGN6dGNibjFjYmx4dVpuVnVZM1JwYjI0Z1FXNWphRzl5Y3lBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFaHZiR1J6SUdSbGRHRmphR2x1WnlCemRHRjBkWE1nYjJZZ1lXNWphRzl5Y3k1Y2JpQWdJQ29nVUhKbGRtVnVkSE1nWkdWMFlXTm9hVzVuSUc5bUlHRnNjbVZoWkhrZ1pHVjBZV05vWldRZ1lXNWphRzl5Y3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSEJ5YVhaaGRHVmNiaUFnSUNvZ1FIUjVjR1VnZTBKdmIyeGxZVzU5WEc0Z0lDQXFMMXh1SUNCMllYSWdaR1YwWVdOb1pXUWdQU0JtWVd4elpUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1NHOXNaSE1nY0hKbGRtVnVkR2x1WnlCemRHRjBkWE1nYjJZZ1lXNWphRzl5Y3k1Y2JpQWdJQ29nU1dZZ1lIUnlkV1ZnSUhKbFpHbHlaV04wYVc5dUlHRm1kR1Z5SUdOc2FXTnJJSGRwYkd3Z1ltVWdaR2x6WVdKc1pXUXVYRzRnSUNBcVhHNGdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQXFJRUIwZVhCbElIdENiMjlzWldGdWZWeHVJQ0FnS2k5Y2JpQWdkbUZ5SUhCeVpYWmxiblJsWkNBOUlHWmhiSE5sTzF4dVhHNGdJSFpoY2lCQmJtTm9iM0p6SUQwZ2UxeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSFZ3Y3lCaElHbHVhWFJwWVd3Z2MzUmhkR1VnYjJZZ1lXNWphRzl5Y3lCamIyMXdiMjVsYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1Y3lCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnRiM1Z1ZERvZ1puVnVZM1JwYjI0Z2JXOTFiblFvS1NCN1hHNGdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQXFJRWh2YkdSeklHTnZiR3hsWTNScGIyNGdiMllnWVc1amFHOXljeUJsYkdWdFpXNTBjeTVjYmlBZ0lDQWdJQ0FxWEc0Z0lDQWdJQ0FnS2lCQWNISnBkbUYwWlZ4dUlDQWdJQ0FnSUNvZ1FIUjVjR1VnZTBoVVRVeERiMnhzWldOMGFXOXVmVnh1SUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0IwYUdsekxsOWhJRDBnUTI5dGNHOXVaVzUwY3k1SWRHMXNMbmR5WVhCd1pYSXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25ZU2NwTzF4dVhHNGdJQ0FnSUNCMGFHbHpMbUpwYm1Rb0tUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJDYVc1a2N5QmxkbVZ1ZEhNZ2RHOGdZVzVqYUc5eWN5QnBibk5wWkdVZ1lTQjBjbUZqYXk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduWTJ4cFkyc25MQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VkM0poY0hCbGNpd2dkR2hwY3k1amJHbGpheWs3WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1ZXNWlhVzVrY3lCbGRtVnVkSE1nWVhSMFlXTm9aV1FnZEc4Z1lXNWphRzl5Y3lCcGJuTnBaR1VnWVNCMGNtRmpheTVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnZFc1aWFXNWtPaUJtZFc1amRHbHZiaUIxYm1KcGJtUW9LU0I3WEc0Z0lDQWdJQ0JDYVc1a1pYSXViMlptS0NkamJHbGpheWNzSUVOdmJYQnZibVZ1ZEhNdVNIUnRiQzUzY21Gd2NHVnlLVHRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCSVlXNWtiR1Z5SUdadmNpQmpiR2xqYXlCbGRtVnVkQzRnVUhKbGRtVnVkSE1nWTJ4cFkydHpJSGRvWlc0Z1oyeHBaR1VnYVhNZ2FXNGdZSEJ5WlhabGJuUmdJSE4wWVhSMWN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNBZ2UwOWlhbVZqZEgwZ1pYWmxiblJjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOc2FXTnJPaUJtZFc1amRHbHZiaUJqYkdsamF5aGxkbVZ1ZENrZ2UxeHVJQ0FnSUNBZ1pYWmxiblF1YzNSdmNGQnliM0JoWjJGMGFXOXVLQ2s3WEc1Y2JpQWdJQ0FnSUdsbUlDaHdjbVYyWlc1MFpXUXBJSHRjYmlBZ0lDQWdJQ0FnWlhabGJuUXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJFWlhSaFkyaGxjeUJoYm1Ob2IzSnpJR05zYVdOcklHVjJaVzUwSUdsdWMybGtaU0JuYkdsa1pTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UzTmxiR1o5WEc0Z0lDQWdJQ292WEc0Z0lDQWdaR1YwWVdOb09pQm1kVzVqZEdsdmJpQmtaWFJoWTJnb0tTQjdYRzRnSUNBZ0lDQndjbVYyWlc1MFpXUWdQU0IwY25WbE8xeHVYRzRnSUNBZ0lDQnBaaUFvSVdSbGRHRmphR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dkR2hwY3k1cGRHVnRjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFYUmxiWE5iYVYwdVpISmhaMmRoWW14bElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtbDBaVzF6VzJsZExuTmxkRUYwZEhKcFluVjBaU2duWkdGMFlTMW9jbVZtSnl3Z2RHaHBjeTVwZEdWdGMxdHBYUzVuWlhSQmRIUnlhV0oxZEdVb0oyaHlaV1luS1NrN1hHNWNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtbDBaVzF6VzJsZExuSmxiVzkyWlVGMGRISnBZblYwWlNnbmFISmxaaWNwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdaR1YwWVdOb1pXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQmRIUmhZMmhsY3lCaGJtTm9iM0p6SUdOc2FXTnJJR1YyWlc1MGN5QnBibk5wWkdVZ1oyeHBaR1V1WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHR6Wld4bWZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdGMGRHRmphRG9nWm5WdVkzUnBiMjRnWVhSMFlXTm9LQ2tnZTF4dUlDQWdJQ0FnY0hKbGRtVnVkR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUdsbUlDaGtaWFJoWTJobFpDa2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhSb2FYTXVhWFJsYlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbVJ5WVdkbllXSnNaU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWwwWlcxelcybGRMbk5sZEVGMGRISnBZblYwWlNnbmFISmxaaWNzSUhSb2FYTXVhWFJsYlhOYmFWMHVaMlYwUVhSMGNtbGlkWFJsS0Nka1lYUmhMV2h5WldZbktTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCa1pYUmhZMmhsWkNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdaR1ZtYVc1bEtFRnVZMmh2Y25Nc0lDZHBkR1Z0Y3ljc0lIdGNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkhaWFJ6SUdOdmJHeGxZM1JwYjI0Z2IyWWdkR2hsSUdGeWNtOTNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1NGUk5URVZzWlcxbGJuUmJYWDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQkJibU5vYjNKekxsOWhPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVSbGRHRmphQ0JoYm1Ob2IzSnpJR2x1YzJsa1pTQnpiR2xrWlhNNlhHNGdJQ0FxSUMwZ2IyNGdjM2RwY0dsdVp5d2djMjhnZEdobGVTQjNiMjRuZENCeVpXUnBjbVZqZENCMGJ5QnBkSE1nWUdoeVpXWmdJR0YwZEhKcFluVjBaWE5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnbmMzZHBjR1V1Ylc5MlpTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JCYm1Ob2IzSnpMbVJsZEdGamFDZ3BPMXh1SUNCOUtUdGNibHh1SUNBdktpcGNiaUFnSUNvZ1FYUjBZV05vSUdGdVkyaHZjbk1nYVc1emFXUmxJSE5zYVdSbGN6cGNiaUFnSUNvZ0xTQmhablJsY2lCemQybHdhVzVuSUdGdVpDQjBjbUZ1YzJsMGFXOXVjeUJsYm1SekxDQnpieUIwYUdWNUlHTmhiaUJ5WldScGNtVmpkQ0JoWm5SbGNpQmpiR2xqYXlCaFoyRnBibHh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0NkemQybHdaUzVsYm1RbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdRMjl0Y0c5dVpXNTBjeTVVY21GdWMybDBhVzl1TG1GbWRHVnlLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUVGdVkyaHZjbk11WVhSMFlXTm9LQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZibUpwYm1RZ1lXNWphRzl5Y3lCcGJuTnBaR1VnYzJ4cFpHVnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR0p5YVc1bklHRnVZMmh2Y25NZ2RHOGdhWFJ6SUdsdWFYUnBZV3dnYzNSaGRHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduWkdWemRISnZlU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmJtTm9iM0p6TG1GMGRHRmphQ2dwTzF4dUlDQWdJRUZ1WTJodmNuTXVkVzVpYVc1a0tDazdYRzRnSUNBZ1FtbHVaR1Z5TG1SbGMzUnliM2tvS1R0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlFRnVZMmh2Y25NN1hHNTlYRzVjYm5aaGNpQk9RVlpmVTBWTVJVTlVUMUlnUFNBblcyUmhkR0V0WjJ4cFpHVXRaV3c5WENKamIyNTBjbTlzYzF0dVlYWmRYQ0pkSnp0Y2JuWmhjaUJEVDA1VVVrOU1VMTlUUlV4RlExUlBVaUE5SUNkYlpHRjBZUzFuYkdsa1pTMWxiRjQ5WENKamIyNTBjbTlzYzF3aVhTYzdYRzVjYm1aMWJtTjBhVzl1SUVOdmJuUnliMnh6SUNoSGJHbGtaU3dnUTI5dGNHOXVaVzUwY3l3Z1JYWmxiblJ6S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJKYm5OMFlXNWpaU0J2WmlCMGFHVWdZbWx1WkdWeUlHWnZjaUJFVDAwZ1JYWmxiblJ6TGx4dUlDQWdLbHh1SUNBZ0tpQkFkSGx3WlNCN1JYWmxiblJ6UW1sdVpHVnlmVnh1SUNBZ0tpOWNiaUFnZG1GeUlFSnBibVJsY2lBOUlHNWxkeUJGZG1WdWRITkNhVzVrWlhJb0tUdGNibHh1SUNCMllYSWdRMjl1ZEhKdmJITWdQU0I3WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nU1c1cGRITWdZWEp5YjNkekxpQkNhVzVrY3lCbGRtVnVkSE1nYkdsemRHVnVaWEp6WEc0Z0lDQWdJQ29nZEc4Z2RHaGxJR0Z5Y205M2N5QklWRTFNSUdWc1pXMWxiblJ6TGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCdGIzVnVkRG9nWm5WdVkzUnBiMjRnYlc5MWJuUW9LU0I3WEc0Z0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBcUlFTnZiR3hsWTNScGIyNGdiMllnYm1GMmFXZGhkR2x2YmlCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQWdJQ3BjYmlBZ0lDQWdJQ0FxSUVCd2NtbDJZWFJsWEc0Z0lDQWdJQ0FnS2lCQWRIbHdaU0I3U0ZSTlRFTnZiR3hsWTNScGIyNTlYRzRnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJSFJvYVhNdVgyNGdQU0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VjbTl2ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0U1QlZsOVRSVXhGUTFSUFVpazdYRzVjYmlBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNvZ1EyOXNiR1ZqZEdsdmJpQnZaaUJqYjI1MGNtOXNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBZ0lDcGNiaUFnSUNBZ0lDQXFJRUJ3Y21sMllYUmxYRzRnSUNBZ0lDQWdLaUJBZEhsd1pTQjdTRlJOVEVOdmJHeGxZM1JwYjI1OVhHNGdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lIUm9hWE11WDJNZ1BTQkRiMjF3YjI1bGJuUnpMa2gwYld3dWNtOXZkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLRU5QVGxSU1QweFRYMU5GVEVWRFZFOVNLVHRjYmx4dUlDQWdJQ0FnZEdocGN5NWhaR1JDYVc1a2FXNW5jeWdwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTmxkSE1nWVdOMGFYWmxJR05zWVhOeklIUnZJR04xY25KbGJuUWdjMnhwWkdVdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITmxkRUZqZEdsMlpUb2dablZ1WTNScGIyNGdjMlYwUVdOMGFYWmxLQ2tnZTF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCMGFHbHpMbDl1TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXUmtRMnhoYzNNb2RHaHBjeTVmYmx0cFhTNWphR2xzWkhKbGJpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WdGIzWmxjeUJoWTNScGRtVWdZMnhoYzNNZ2RHOGdZM1Z5Y21WdWRDQnpiR2xrWlM1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVnRiM1psUVdOMGFYWmxPaUJtZFc1amRHbHZiaUJ5WlcxdmRtVkJZM1JwZG1Vb0tTQjdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSFJvYVhNdVgyNHViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV5WlcxdmRtVkRiR0Z6Y3loMGFHbHpMbDl1VzJsZExtTm9hV3hrY21WdUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJVYjJkbmJHVnpJR0ZqZEdsMlpTQmpiR0Z6Y3lCdmJpQnBkR1Z0Y3lCcGJuTnBaR1VnYm1GMmFXZGhkR2x2Ymk1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0FnZTBoVVRVeEZiR1Z0Wlc1MGZTQmpiMjUwY205c2MxeHVJQ0FnSUNBcUlFQnlaWFIxY200Z2UxWnZhV1I5WEc0Z0lDQWdJQ292WEc0Z0lDQWdZV1JrUTJ4aGMzTTZJR1oxYm1OMGFXOXVJR0ZrWkVOc1lYTnpLR052Ym5SeWIyeHpLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MyVjBkR2x1WjNNZ1BTQkhiR2xrWlM1elpYUjBhVzVuY3p0Y2JpQWdJQ0FnSUhaaGNpQnBkR1Z0SUQwZ1kyOXVkSEp2YkhOYlIyeHBaR1V1YVc1a1pYaGRPMXh1WEc0Z0lDQWdJQ0JwZEdWdExtTnNZWE56VEdsemRDNWhaR1FvYzJWMGRHbHVaM011WTJ4aGMzTmxjeTVoWTNScGRtVk9ZWFlwTzF4dVhHNGdJQ0FnSUNCemFXSnNhVzVuY3locGRHVnRLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h6YVdKc2FXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhOcFlteHBibWN1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2h6WlhSMGFXNW5jeTVqYkdGemMyVnpMbUZqZEdsMlpVNWhkaWs3WEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5TEZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlNaVzF2ZG1WeklHRmpkR2wyWlNCamJHRnpjeUJtY205dElHRmpkR2wyWlNCamIyNTBjbTlzTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhCaGNtRnRJQ0I3U0ZSTlRFVnNaVzFsYm5SOUlHTnZiblJ5YjJ4elhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1ZtOXBaSDFjYmlBZ0lDQWdLaTljYmlBZ0lDQnlaVzF2ZG1WRGJHRnpjem9nWm5WdVkzUnBiMjRnY21WdGIzWmxRMnhoYzNNb1kyOXVkSEp2YkhNcElIdGNiaUFnSUNBZ0lHTnZiblJ5YjJ4elcwZHNhV1JsTG1sdVpHVjRYUzVqYkdGemMweHBjM1F1Y21WdGIzWmxLRWRzYVdSbExuTmxkSFJwYm1kekxtTnNZWE56WlhNdVlXTjBhWFpsVG1GMktUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCWkdSeklHaGhibVJzWlhNZ2RHOGdkR2hsSUdWaFkyZ2daM0p2ZFhBZ2IyWWdZMjl1ZEhKdmJITXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJR0ZrWkVKcGJtUnBibWR6T2lCbWRXNWpkR2x2YmlCaFpHUkNhVzVrYVc1bmN5Z3BJSHRjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnZEdocGN5NWZZeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUW9kR2hwY3k1ZlkxdHBYUzVqYUdsc1pISmxiaWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVnRiM1psY3lCb1lXNWtiR1Z6SUdaeWIyMGdkR2hsSUdWaFkyZ2daM0p2ZFhBZ2IyWWdZMjl1ZEhKdmJITXVYRzRnSUNBZ0lDcGNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSEpsYlc5MlpVSnBibVJwYm1kek9pQm1kVzVqZEdsdmJpQnlaVzF2ZG1WQ2FXNWthVzVuY3lncElIdGNiaUFnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dkR2hwY3k1Zll5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMblZ1WW1sdVpDaDBhR2x6TGw5alcybGRMbU5vYVd4a2NtVnVLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQ2FXNWtjeUJsZG1WdWRITWdkRzhnWVhKeWIzZHpJRWhVVFV3Z1pXeGxiV1Z1ZEhNdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBoVVRVeERiMnhzWldOMGFXOXVmU0JsYkdWdFpXNTBjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWW1sdVpEb2dablZ1WTNScGIyNGdZbWx1WkNobGJHVnRaVzUwY3lrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQmxiR1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCQ2FXNWtaWEl1YjI0b1d5ZGpiR2xqYXljc0lDZDBiM1ZqYUhOMFlYSjBKMTBzSUdWc1pXMWxiblJ6VzJsZExDQjBhR2x6TG1Oc2FXTnJLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCVmJtSnBibVJ6SUdWMlpXNTBjeUJpYVc1a1pXUWdkRzhnZEdobElHRnljbTkzY3lCSVZFMU1JR1ZzWlcxbGJuUnpMbHh1SUNBZ0lDQXFYRzRnSUNBZ0lDb2dRSEJoY21GdElIdElWRTFNUTI5c2JHVmpkR2x2Ym4wZ1pXeGxiV1Z1ZEhOY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lIVnVZbWx1WkRvZ1puVnVZM1JwYjI0Z2RXNWlhVzVrS0dWc1pXMWxiblJ6S1NCN1hHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHVnNaVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUVKcGJtUmxjaTV2Wm1Zb1d5ZGpiR2xqYXljc0lDZDBiM1ZqYUhOMFlYSjBKMTBzSUdWc1pXMWxiblJ6VzJsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJJWVc1a2JHVnpJR0JqYkdsamEyQWdaWFpsYm5RZ2IyNGdkR2hsSUdGeWNtOTNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcUlFMXZkbVZ6SUhOc2FXUmxjaUJwYmlCa2NtbGxZM1JwYjI0Z2NISmxZMmx6WldRZ2FXNWNiaUFnSUNBZ0tpQmdaR0YwWVMxbmJHbGtaUzFrYVhKZ0lHRjBkSEpwWW5WMFpTNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCbGRtVnVkRnh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnWTJ4cFkyczZJR1oxYm1OMGFXOXVJR05zYVdOcktHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCbGRtVnVkQzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1WEc0Z0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGxKMWJpNXRZV3RsS0VOdmJYQnZibVZ1ZEhNdVJHbHlaV04wYVc5dUxuSmxjMjlzZG1Vb1pYWmxiblF1WTNWeWNtVnVkRlJoY21kbGRDNW5aWFJCZEhSeWFXSjFkR1VvSjJSaGRHRXRaMnhwWkdVdFpHbHlKeWtwS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ1pHVm1hVzVsS0VOdmJuUnliMnh6TENBbmFYUmxiWE1uTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUJqYjJ4c1pXTjBhVzl1SUc5bUlIUm9aU0JqYjI1MGNtOXNjeUJJVkUxTUlHVnNaVzFsYm5SekxseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FISmxkSFZ5YmlCN1NGUk5URVZzWlcxbGJuUmJYWDFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQkRiMjUwY205c2N5NWZZenRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVGQyRndJR0ZqZEdsMlpTQmpiR0Z6Y3lCdlppQmpkWEp5Wlc1MElHNWhkbWxuWVhScGIyNGdhWFJsYlRwY2JpQWdJQ29nTFNCaFpuUmxjaUJ0YjNWdWRHbHVaeUIwYnlCelpYUWdhWFFnZEc4Z2FXNXBkR2xoYkNCcGJtUmxlRnh1SUNBZ0tpQXRJR0ZtZEdWeUlHVmhZMmdnYlc5MlpTQjBieUIwYUdVZ2JtVjNJR2x1WkdWNFhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9XeWR0YjNWdWRDNWhablJsY2ljc0lDZHRiM1psTG1GbWRHVnlKMTBzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCRGIyNTBjbTlzY3k1elpYUkJZM1JwZG1Vb0tUdGNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbGJXOTJaU0JpYVc1a2FXNW5jeUJoYm1RZ1NGUk5UQ0JEYkdGemMyVnpPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR0p5YVc1bklHMWhjbXQxY0NCMGJ5QnBkSE1nYVc1cGRHbGhiQ0J6ZEdGMFpWeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2RrWlhOMGNtOTVKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVOdmJuUnliMnh6TG5KbGJXOTJaVUpwYm1ScGJtZHpLQ2s3WEc0Z0lDQWdRMjl1ZEhKdmJITXVjbVZ0YjNabFFXTjBhWFpsS0NrN1hHNGdJQ0FnUW1sdVpHVnlMbVJsYzNSeWIza29LVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUVOdmJuUnliMnh6TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJMWlhsaWIyRnlaQ0FvUjJ4cFpHVXNJRU52YlhCdmJtVnVkSE1zSUVWMlpXNTBjeWtnZTF4dUlDQXZLaXBjYmlBZ0lDb2dTVzV6ZEdGdVkyVWdiMllnZEdobElHSnBibVJsY2lCbWIzSWdSRTlOSUVWMlpXNTBjeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTBWMlpXNTBjMEpwYm1SbGNuMWNiaUFnSUNvdlhHNGdJSFpoY2lCQ2FXNWtaWElnUFNCdVpYY2dSWFpsYm5SelFtbHVaR1Z5S0NrN1hHNWNiaUFnZG1GeUlFdGxlV0p2WVhKa0lEMGdlMXh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUpwYm1SeklHdGxlV0p2WVhKa0lHVjJaVzUwY3lCdmJpQmpiMjF3YjI1bGJuUWdiVzkxYm5RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNtVjBkWEp1SUh0V2IybGtmVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHMXZkVzUwT2lCbWRXNWpkR2x2YmlCdGIzVnVkQ2dwSUh0Y2JpQWdJQ0FnSUdsbUlDaEhiR2xrWlM1elpYUjBhVzVuY3k1clpYbGliMkZ5WkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KcGJtUW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCQlpHUnpJR3RsZVdKdllYSmtJSEJ5WlhOeklHVjJaVzUwY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaRG9nWm5WdVkzUnBiMjRnWW1sdVpDZ3BJSHRjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduYTJWNWRYQW5MQ0JrYjJOMWJXVnVkQ3dnZEdocGN5NXdjbVZ6Y3lrN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ0YjNabGN5QnJaWGxpYjJGeVpDQndjbVZ6Y3lCbGRtVnVkSE11WEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLaUJBY21WMGRYSnVJSHRXYjJsa2ZWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhWdVltbHVaRG9nWm5WdVkzUnBiMjRnZFc1aWFXNWtLQ2tnZTF4dUlDQWdJQ0FnUW1sdVpHVnlMbTltWmlnbmEyVjVkWEFuTENCa2IyTjFiV1Z1ZENrN1hHNGdJQ0FnZlN4Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTR0Z1Wkd4bGN5QnJaWGxpYjJGeVpDZHpJR0Z5Y205M2N5QndjbVZ6Y3lCaGJtUWdiVzkyYVc1bklHZHNhV1JsSUdadmQyRnlaQ0JoYm1RZ1ltRmphM2RoY21RdVhHNGdJQ0FnSUNwY2JpQWdJQ0FnS2lCQWNHRnlZVzBnSUh0UFltcGxZM1I5SUdWMlpXNTBYRzRnSUNBZ0lDb2dRSEpsZEhWeWJpQjdWbTlwWkgxY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J3Y21WemN6b2dablZ1WTNScGIyNGdjSEpsYzNNb1pYWmxiblFwSUh0Y2JpQWdJQ0FnSUdsbUlDaGxkbVZ1ZEM1clpYbERiMlJsSUQwOVBTQXpPU2tnZTF4dUlDQWdJQ0FnSUNCRGIyMXdiMjVsYm5SekxsSjFiaTV0WVd0bEtFTnZiWEJ2Ym1WdWRITXVSR2x5WldOMGFXOXVMbkpsYzI5c2RtVW9KejRuS1NrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2hsZG1WdWRDNXJaWGxEYjJSbElEMDlQU0F6TnlrZ2UxeHVJQ0FnSUNBZ0lDQkRiMjF3YjI1bGJuUnpMbEoxYmk1dFlXdGxLRU52YlhCdmJtVnVkSE11UkdseVpXTjBhVzl1TG5KbGMyOXNkbVVvSnp3bktTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlcxdmRtVWdZbWx1WkdsdVozTWdabkp2YlNCclpYbGliMkZ5WkRwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUhKbGJXOTJaU0JoWkdSbFpDQmxkbVZ1ZEhOY2JpQWdJQ29nTFNCdmJpQjFjR1JoZEdsdVp5QjBieUJ5WlcxdmRtVWdaWFpsYm5SeklHSmxabTl5WlNCeVpXMXZkVzUwYVc1blhHNGdJQ0FxTDF4dUlDQkZkbVZ1ZEhNdWIyNG9XeWRrWlhOMGNtOTVKeXdnSjNWd1pHRjBaU2RkTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ1MyVjVZbTloY21RdWRXNWlhVzVrS0NrN1hHNGdJSDBwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlcxdmRXNTBJR052YlhCdmJtVnVkRnh1SUNBZ0tpQXRJRzl1SUhWd1pHRjBhVzVuSUhSdklISmxabXhsWTNRZ2NHOTBaVzUwYVdGc0lHTm9ZVzVuWlhNZ2FXNGdjMlYwZEdsdVozTmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWduZFhCa1lYUmxKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUV0bGVXSnZZWEprTG0xdmRXNTBLQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkVaWE4wY205NUlHSnBibVJsY2pwY2JpQWdJQ29nTFNCdmJpQmtaWE4wY205NWFXNW5JSFJ2SUhKbGJXOTJaU0JzYVhOMFpXNWxjbk5jYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmlnblpHVnpkSEp2ZVNjc0lHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQkNhVzVrWlhJdVpHVnpkSEp2ZVNncE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdTMlY1WW05aGNtUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlFRjFkRzl3YkdGNUlDaEhiR2xrWlN3Z1EyOXRjRzl1Wlc1MGN5d2dSWFpsYm5SektTQjdYRzRnSUM4cUtseHVJQ0FnS2lCSmJuTjBZVzVqWlNCdlppQjBhR1VnWW1sdVpHVnlJR1p2Y2lCRVQwMGdSWFpsYm5SekxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdSWFpsYm5SelFtbHVaR1Z5ZlZ4dUlDQWdLaTljYmlBZ2RtRnlJRUpwYm1SbGNpQTlJRzVsZHlCRmRtVnVkSE5DYVc1a1pYSW9LVHRjYmx4dUlDQjJZWElnUVhWMGIzQnNZWGtnUFNCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1NXNXBkR2xoYkdsNlpYTWdZWFYwYjNCc1lYbHBibWNnWVc1a0lHVjJaVzUwY3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTFadmFXUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXOTFiblE2SUdaMWJtTjBhVzl1SUcxdmRXNTBLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXpkR0Z5ZENncE8xeHVYRzRnSUNBZ0lDQnBaaUFvUjJ4cFpHVXVjMlYwZEdsdVozTXVhRzkyWlhKd1lYVnpaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpwYm1Rb0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUZEdGeWRITWdZWFYwYjNCc1lYbHBibWNnYVc0Z1kyOXVabWxuZFhKbFpDQnBiblJsY25aaGJDNWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQndZWEpoYlNCN1FtOXZiR1ZoYm54T2RXMWlaWEo5SUdadmNtTmxJRkoxYmlCaGRYUnZjR3hoZVdsdVp5QjNhWFJvSUhCaGMzTmxaQ0JwYm5SbGNuWmhiQ0J5WldkaGNtUnNaWE56SUc5bUlHQmhkWFJ2Y0d4aGVXQWdjMlYwZEdsdVozTmNiaUFnSUNBZ0tpQkFjbVYwZFhKdUlIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE4wWVhKME9pQm1kVzVqZEdsdmJpQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lIWmhjaUJmZEdocGN5QTlJSFJvYVhNN1hHNWNiaUFnSUNBZ0lHbG1JQ2hIYkdsa1pTNXpaWFIwYVc1bmN5NWhkWFJ2Y0d4aGVTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FYTlZibVJsWm1sdVpXUW9kR2hwY3k1ZmFTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlwSUQwZ2MyVjBTVzUwWlhKMllXd29ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdYM1JvYVhNdWMzUnZjQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JEYjIxd2IyNWxiblJ6TGxKMWJpNXRZV3RsS0NjK0p5azdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lGOTBhR2x6TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTd2dkR2hwY3k1MGFXMWxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTjBiM0J6SUdGMWRHOXlkVzV1YVc1bklHOW1JSFJvWlNCbmJHbGtaUzVjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNGdlMVp2YVdSOVhHNGdJQ0FnSUNvdlhHNGdJQ0FnYzNSdmNEb2dablZ1WTNScGIyNGdjM1J2Y0NncElIdGNiaUFnSUNBZ0lIUm9hWE11WDJrZ1BTQmpiR1ZoY2tsdWRHVnlkbUZzS0hSb2FYTXVYMmtwTzF4dUlDQWdJSDBzWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlGTjBiM0J6SUdGMWRHOXdiR0Y1YVc1bklIZG9hV3hsSUcxdmRYTmxJR2x6SUc5MlpYSWdaMnhwWkdVbmN5QmhjbVZoTGx4dUlDQWdJQ0FxWEc0Z0lDQWdJQ29nUUhKbGRIVnliaUI3Vm05cFpIMWNiaUFnSUNBZ0tpOWNiaUFnSUNCaWFXNWtPaUJtZFc1amRHbHZiaUJpYVc1a0tDa2dlMXh1SUNBZ0lDQWdkbUZ5SUY5MGFHbHpNaUE5SUhSb2FYTTdYRzVjYmlBZ0lDQWdJRUpwYm1SbGNpNXZiaWduYlc5MWMyVnZkbVZ5Snl3Z1EyOXRjRzl1Wlc1MGN5NUlkRzFzTG5KdmIzUXNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1gzUm9hWE15TG5OMGIzQW9LVHRjYmlBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNCQ2FXNWtaWEl1YjI0b0oyMXZkWE5sYjNWMEp5d2dRMjl0Y0c5dVpXNTBjeTVJZEcxc0xuSnZiM1FzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdYM1JvYVhNeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOUxGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJWYm1KcGJtUWdiVzkxYzJWdmRtVnlJR1YyWlc1MGN5NWNiaUFnSUNBZ0tseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdFdiMmxrZlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSFZ1WW1sdVpEb2dablZ1WTNScGIyNGdkVzVpYVc1a0tDa2dlMXh1SUNBZ0lDQWdRbWx1WkdWeUxtOW1aaWhiSjIxdmRYTmxiM1psY2ljc0lDZHRiM1Z6Wlc5MWRDZGRMQ0JEYjIxd2IyNWxiblJ6TGtoMGJXd3VjbTl2ZENrN1hHNGdJQ0FnZlZ4dUlDQjlPMXh1WEc0Z0lHUmxabWx1WlNoQmRYUnZjR3hoZVN3Z0ozUnBiV1VuTENCN1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBjeUIwYVcxbElIQmxjbWx2WkNCMllXeDFaU0JtYjNJZ2RHaGxJR0YxZEc5d2JHRjVJR2x1ZEdWeWRtRnNMaUJRY21sdmNtbDBhWHBsYzF4dUlDQWdJQ0FxSUhScGJXVnpJR2x1SUdCa1lYUmhMV2RzYVdSbExXRjFkRzl3YkdGNVlDQmhkSFJ5ZFdKMWRHVnpJRzkyWlhJZ2IzQjBhVzl1Y3k1Y2JpQWdJQ0FnS2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTRnZTA1MWJXSmxjbjFjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1SUdkbGRDZ3BJSHRjYmlBZ0lDQWdJSFpoY2lCaGRYUnZjR3hoZVNBOUlFTnZiWEJ2Ym1WdWRITXVTSFJ0YkM1emJHbGtaWE5iUjJ4cFpHVXVhVzVrWlhoZExtZGxkRUYwZEhKcFluVjBaU2duWkdGMFlTMW5iR2xrWlMxaGRYUnZjR3hoZVNjcE8xeHVYRzRnSUNBZ0lDQnBaaUFvWVhWMGIzQnNZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdlNXNTBLR0YxZEc5d2JHRjVLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJSFJ2U1c1MEtFZHNhV1JsTG5ObGRIUnBibWR6TG1GMWRHOXdiR0Y1S1R0Y2JpQWdJQ0I5WEc0Z0lIMHBPMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlRkRzl3SUdGMWRHOXdiR0Y1YVc1bklHRnVaQ0IxYm1KcGJtUWdaWFpsYm5Sek9seHVJQ0FnS2lBdElHOXVJR1JsYzNSeWIzbHBibWNzSUhSdklHTnNaV0Z5SUdSbFptbHVaV1FnYVc1MFpYSjJZV3hjYmlBZ0lDb2dMU0J2YmlCMWNHUmhkR2x1WnlCMmFXRWdRVkJKSUhSdklISmxjMlYwSUdsdWRHVnlkbUZzSUhSb1lYUWdiV0Y1SUdOb1lXNW5aV1JjYmlBZ0lDb3ZYRzRnSUVWMlpXNTBjeTV2YmloYkoyUmxjM1J5YjNrbkxDQW5kWEJrWVhSbEoxMHNJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JCZFhSdmNHeGhlUzUxYm1KcGJtUW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGTjBiM0FnWVhWMGIzQnNZWGxwYm1jNlhHNGdJQ0FxSUMwZ1ltVm1iM0psSUdWaFkyZ2djblZ1TENCMGJ5QnlaWE4wWVhKMElHRjFkRzl3YkdGNWFXNW5YRzRnSUNBcUlDMGdiMjRnY0dGMWMybHVaeUIyYVdFZ1FWQkpYRzRnSUNBcUlDMGdiMjRnWkdWemRISnZlV2x1Wnl3Z2RHOGdZMnhsWVhJZ1pHVm1hVzVsWkNCcGJuUmxjblpoYkZ4dUlDQWdLaUF0SUhkb2FXeGxJSE4wWVhKMGFXNW5JR0VnYzNkcGNHVmNiaUFnSUNvZ0xTQnZiaUIxY0dSaGRHbHVaeUIyYVdFZ1FWQkpJSFJ2SUhKbGMyVjBJR2x1ZEdWeWRtRnNJSFJvWVhRZ2JXRjVJR05vWVc1blpXUmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWhiSjNKMWJpNWlaV1p2Y21VbkxDQW5jR0YxYzJVbkxDQW5aR1Z6ZEhKdmVTY3NJQ2R6ZDJsd1pTNXpkR0Z5ZENjc0lDZDFjR1JoZEdVblhTd2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRUYxZEc5d2JHRjVMbk4wYjNBb0tUdGNiaUFnZlNrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUZOMFlYSjBJR0YxZEc5d2JHRjVhVzVuT2x4dUlDQWdLaUF0SUdGbWRHVnlJR1ZoWTJnZ2NuVnVMQ0IwYnlCeVpYTjBZWEowSUdGMWRHOXdiR0Y1YVc1blhHNGdJQ0FxSUMwZ2IyNGdjR3hoZVdsdVp5QjJhV0VnUVZCSlhHNGdJQ0FxSUMwZ2QyaHBiR1VnWlc1a2FXNW5JR0VnYzNkcGNHVmNiaUFnSUNvdlhHNGdJRVYyWlc1MGN5NXZiaWhiSjNKMWJpNWhablJsY2ljc0lDZHdiR0Y1Snl3Z0ozTjNhWEJsTG1WdVpDZGRMQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUVhWMGIzQnNZWGt1YzNSaGNuUW9LVHRjYmlBZ2ZTazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxiVzkxYm5RZ1lYVjBiM0JzWVhscGJtYzZYRzRnSUNBcUlDMGdiMjRnZFhCa1lYUnBibWNnZG1saElFRlFTU0IwYnlCeVpYTmxkQ0JwYm5SbGNuWmhiQ0IwYUdGMElHMWhlU0JqYUdGdVoyVmtYRzRnSUNBcUwxeHVJQ0JGZG1WdWRITXViMjRvSjNWd1pHRjBaU2NzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCQmRYUnZjR3hoZVM1dGIzVnVkQ2dwTzF4dUlDQjlLVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSR1Z6ZEhKdmVTQmhJR0pwYm1SbGNqcGNiaUFnSUNvZ0xTQnZiaUJrWlhOMGNtOTVhVzVuSUdkc2FXUmxJR2x1YzNSaGJtTmxJSFJ2SUdOc1pXRnlkWEFnYkdsemRHVnVaWEp6WEc0Z0lDQXFMMXh1SUNCRmRtVnVkSE11YjI0b0oyUmxjM1J5YjNrbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdRbWx1WkdWeUxtUmxjM1J5YjNrb0tUdGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJRUYxZEc5d2JHRjVPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGTnZjblJ6SUd0bGVYTWdiMllnWW5KbFlXdHdiMmx1ZENCdlltcGxZM1FnYzI4Z2RHaGxlU0IzYVd4c0lHSmxJRzl5WkdWeVpXUWdabkp2YlNCc2IzZGxjaUIwYnlCaWFXZG5aWEl1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJSEJ2YVc1MGMxeHVJQ29nUUhKbGRIVnlibk1nZTA5aWFtVmpkSDFjYmlBcUwxeHVablZ1WTNScGIyNGdjMjl5ZEVKeVpXRnJjRzlwYm5SektIQnZhVzUwY3lrZ2UxeHVJQ0JwWmlBb2FYTlBZbXBsWTNRb2NHOXBiblJ6S1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6YjNKMFMyVjVjeWh3YjJsdWRITXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSGRoY200b0owSnlaV0ZyY0c5cGJuUnpJRzl3ZEdsdmJpQnRkWE4wSUdKbElHRnVJRzlpYW1WamRDY3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSHQ5TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJDY21WaGEzQnZhVzUwY3lBb1IyeHBaR1VzSUVOdmJYQnZibVZ1ZEhNc0lFVjJaVzUwY3lrZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nU1c1emRHRnVZMlVnYjJZZ2RHaGxJR0pwYm1SbGNpQm1iM0lnUkU5TklFVjJaVzUwY3k1Y2JpQWdJQ3BjYmlBZ0lDb2dRSFI1Y0dVZ2UwVjJaVzUwYzBKcGJtUmxjbjFjYmlBZ0lDb3ZYRzRnSUhaaGNpQkNhVzVrWlhJZ1BTQnVaWGNnUlhabGJuUnpRbWx1WkdWeUtDazdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFaHZiR1J6SUhKbFptVnlaVzVqWlNCMGJ5QnpaWFIwYVc1bmN5NWNiaUFnSUNwY2JpQWdJQ29nUUhSNWNHVWdlMDlpYW1WamRIMWNiaUFnSUNvdlhHNGdJSFpoY2lCelpYUjBhVzVuY3lBOUlFZHNhV1JsTG5ObGRIUnBibWR6TzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJJYjJ4a2N5QnlaV1psY21WdVkyVWdkRzhnWW5KbFlXdHdiMmx1ZEhNZ2IySnFaV04wSUdsdUlITmxkSFJwYm1kekxpQlRiM0owY3lCaWNtVmhhM0J2YVc1MGMxeHVJQ0FnS2lCbWNtOXRJSE50WVd4c1pYSWdkRzhnYkdGeVoyVnlMaUJKZENCcGN5QnlaWEYxYVhKbFpDQnBiaUJ2Y21SbGNpQjBieUJ3Y205d1pYSmNiaUFnSUNvZ2JXRjBZMmhwYm1jZ1kzVnljbVZ1ZEd4NUlHRmpkR2wyWlNCaWNtVmhhM0J2YVc1MElITmxkSFJwYm1kekxseHVJQ0FnS2x4dUlDQWdLaUJBZEhsd1pTQjdUMkpxWldOMGZWeHVJQ0FnS2k5Y2JpQWdkbUZ5SUhCdmFXNTBjeUE5SUhOdmNuUkNjbVZoYTNCdmFXNTBjeWh6WlhSMGFXNW5jeTVpY21WaGEzQnZhVzUwY3lrN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVOaFkyaGxJR2x1YVhScFlXd2djMlYwZEdsdVozTWdZbVZtYjNKbElHOTJaWEozY21sMGRHbHVaeTVjYmlBZ0lDcGNiaUFnSUNvZ1FIUjVjR1VnZTA5aWFtVmpkSDFjYmlBZ0lDb3ZYRzRnSUhaaGNpQmtaV1poZFd4MGN5QTlJRjlsZUhSbGJtUnpLSHQ5TENCelpYUjBhVzVuY3lrN1hHNWNiaUFnZG1GeUlFSnlaV0ZyY0c5cGJuUnpJRDBnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUUxaGRHTm9aWE1nYzJWMGRHbHVaM01nWm05eUlHTjFjbkpsWTNSc2VTQnRZWFJqYUdsdVp5QnRaV1JwWVNCaWNtVmhhM0J2YVc1MExseHVJQ0FnSUNBcVhHNGdJQ0FnSUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhCdmFXNTBjMXh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHRQWW1wbFkzUjlYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JXRjBZMmc2SUdaMWJtTjBhVzl1SUcxaGRHTm9LSEJ2YVc1MGN5a2dlMXh1SUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY3ViV0YwWTJoTlpXUnBZU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaDJZWElnY0c5cGJuUWdhVzRnY0c5cGJuUnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLSEJ2YVc1MGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNod2IybHVkQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoM2FXNWtiM2N1YldGMFkyaE5aV1JwWVNnbktHMWhlQzEzYVdSMGFEb2dKeUFySUhCdmFXNTBJQ3NnSjNCNEtTY3BMbTFoZEdOb1pYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIQnZhVzUwYzF0d2IybHVkRjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCa1pXWmhkV3gwY3p0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFOTJaWEozY21sMFpTQnBibk4wWVc1alpTQnpaWFIwYVc1bmN5QjNhWFJvSUdOMWNuSmxiblJzZVNCdFlYUmphR2x1WnlCaWNtVmhhM0J2YVc1MElITmxkSFJwYm1kekxseHVJQ0FnS2lCVWFHbHpJR2hoY0hCbGJuTWdjbWxuYUhRZ1lXWjBaWElnWTI5dGNHOXVaVzUwSUdsdWFYUnBZV3hwZW1GMGFXOXVMbHh1SUNBZ0tpOWNiaUFnWDJWNGRHVnVaSE1vYzJWMGRHbHVaM01zSUVKeVpXRnJjRzlwYm5SekxtMWhkR05vS0hCdmFXNTBjeWtwTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJWY0dSaGRHVWdaMnhwWkdVZ2QybDBhQ0J6WlhSMGFXNW5jeUJ2WmlCdFlYUmphR1ZrSUdKeVpXdHdiMmx1ZERwY2JpQWdJQ29nTFNCM2FXNWtiM2NnY21WemFYcGxJSFJ2SUhWd1pHRjBaU0J6Ykdsa1pYSmNiaUFnSUNvdlhHNGdJRUpwYm1SbGNpNXZiaWduY21WemFYcGxKeXdnZDJsdVpHOTNMQ0IwYUhKdmRIUnNaU2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnUjJ4cFpHVXVjMlYwZEdsdVozTWdQU0J0WlhKblpVOXdkR2x2Ym5Nb2MyVjBkR2x1WjNNc0lFSnlaV0ZyY0c5cGJuUnpMbTFoZEdOb0tIQnZhVzUwY3lrcE8xeHVJQ0I5TENCSGJHbGtaUzV6WlhSMGFXNW5jeTUwYUhKdmRIUnNaU2twTzF4dVhHNGdJQzhxS2x4dUlDQWdLaUJTWlhOdmNuUWdZVzVrSUhWd1pHRjBaU0JrWldaaGRXeDBJSE5sZEhScGJtZHpPbHh1SUNBZ0tpQXRJRzl1SUhKbGFXNXBkQ0IyYVdFZ1FWQkpMQ0J6YnlCaWNtVmhhM0J2YVc1MElHMWhkR05vYVc1bklIZHBiR3dnWW1VZ2NHVnlabTl5YldWa0lIZHBkR2dnYjNCMGFXOXVjMXh1SUNBZ0tpOWNiaUFnUlhabGJuUnpMbTl1S0NkMWNHUmhkR1VuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2NHOXBiblJ6SUQwZ2MyOXlkRUp5WldGcmNHOXBiblJ6S0hCdmFXNTBjeWs3WEc1Y2JpQWdJQ0JrWldaaGRXeDBjeUE5SUY5bGVIUmxibVJ6S0h0OUxDQnpaWFIwYVc1bmN5azdYRzRnSUgwcE8xeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmJtSnBibVFnY21WemFYcGxJR3hwYzNSbGJtVnlPbHh1SUNBZ0tpQXRJRzl1SUdSbGMzUnliM2xwYm1jc0lIUnZJR0p5YVc1bklHMWhjbXQxY0NCMGJ5QnBkSE1nYVc1cGRHbGhiQ0J6ZEdGMFpWeHVJQ0FnS2k5Y2JpQWdSWFpsYm5SekxtOXVLQ2RrWlhOMGNtOTVKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUVKcGJtUmxjaTV2Wm1Zb0ozSmxjMmw2WlNjc0lIZHBibVJ2ZHlrN1hHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQkNjbVZoYTNCdmFXNTBjenRjYm4xY2JseHVkbUZ5SUVOUFRWQlBUa1ZPVkZNZ1BTQjdYRzRnSUM4dklGSmxjWFZwY21Wa1hHNGdJRWgwYld3NklFaDBiV3dzWEc0Z0lGUnlZVzV6YkdGMFpUb2dWSEpoYm5Oc1lYUmxMRnh1SUNCVWNtRnVjMmwwYVc5dU9pQlVjbUZ1YzJsMGFXOXVMRnh1SUNCRWFYSmxZM1JwYjI0NklFUnBjbVZqZEdsdmJpeGNiaUFnVUdWbGF6b2dVR1ZsYXl4Y2JpQWdVMmw2WlhNNklGTnBlbVZ6TEZ4dUlDQkhZWEJ6T2lCSFlYQnpMRnh1SUNCTmIzWmxPaUJOYjNabExGeHVJQ0JEYkc5dVpYTTZJRU5zYjI1bGN5eGNiaUFnVW1WemFYcGxPaUJTWlhOcGVtVXNYRzRnSUVKMWFXeGtPaUJDZFdsc1pDeGNiaUFnVW5WdU9pQlNkVzRzWEc1Y2JpQWdMeThnVDNCMGFXOXVZV3hjYmlBZ1UzZHBjR1U2SUZOM2FYQmxMRnh1SUNCSmJXRm5aWE02SUVsdFlXZGxjeXhjYmlBZ1FXNWphRzl5Y3pvZ1FXNWphRzl5Y3l4Y2JpQWdRMjl1ZEhKdmJITTZJRU52Ym5SeWIyeHpMRnh1SUNCTFpYbGliMkZ5WkRvZ1MyVjVZbTloY21Rc1hHNGdJRUYxZEc5d2JHRjVPaUJCZFhSdmNHeGhlU3hjYmlBZ1FuSmxZV3R3YjJsdWRITTZJRUp5WldGcmNHOXBiblJ6WEc1OU8xeHVYRzUyWVhJZ1IyeHBaR1VrTVNBOUlHWjFibU4wYVc5dUlDaGZRMjl5WlNrZ2UxeHVJQ0JwYm1obGNtbDBjeWhIYkdsa1pTUWtNU3dnWDBOdmNtVXBPMXh1WEc0Z0lHWjFibU4wYVc5dUlFZHNhV1JsSkNReEtDa2dlMXh1SUNBZ0lHTnNZWE56UTJGc2JFTm9aV05yS0hSb2FYTXNJRWRzYVdSbEpDUXhLVHRjYmlBZ0lDQnlaWFIxY200Z2NHOXpjMmxpYkdWRGIyNXpkSEoxWTNSdmNsSmxkSFZ5YmloMGFHbHpMQ0FvUjJ4cFpHVWtKREV1WDE5d2NtOTBiMTlmSUh4OElFOWlhbVZqZEM1blpYUlFjbTkwYjNSNWNHVlBaaWhIYkdsa1pTUWtNU2twTG1Gd2NHeDVLSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5a3BPMXh1SUNCOVhHNWNiaUFnWTNKbFlYUmxRMnhoYzNNb1IyeHBaR1VrSkRFc0lGdDdYRzRnSUNBZ2EyVjVPaUFuYlc5MWJuUW5MRnh1SUNBZ0lIWmhiSFZsT2lCbWRXNWpkR2x2YmlCdGIzVnVkQ2dwSUh0Y2JpQWdJQ0FnSUhaaGNpQmxlSFJsYm5OcGIyNXpJRDBnWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURBZ0ppWWdZWEpuZFcxbGJuUnpXekJkSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJoY21kMWJXVnVkSE5iTUYwZ09pQjdmVHRjYmx4dUlDQWdJQ0FnY21WMGRYSnVJR2RsZENoSGJHbGtaU1FrTVM1d2NtOTBiM1I1Y0dVdVgxOXdjbTkwYjE5ZklIeDhJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmloSGJHbGtaU1FrTVM1d2NtOTBiM1I1Y0dVcExDQW5iVzkxYm5RbkxDQjBhR2x6S1M1allXeHNLSFJvYVhNc0lGOWxlSFJsYm1SektIdDlMQ0JEVDAxUVQwNUZUbFJUTENCbGVIUmxibk5wYjI1ektTazdYRzRnSUNBZ2ZWeHVJQ0I5WFNrN1hHNGdJSEpsZEhWeWJpQkhiR2xrWlNRa01UdGNibjBvUjJ4cFpHVXBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JIYkdsa1pTUXhPMXh1SWl3aUx5b2hYRzRnS2lCd1pYSm1aV04wTFhOamNtOXNiR0poY2lCMk1TNDBMakJjYmlBcUlDaGpLU0F5TURFNElFaDVkVzVxWlNCS2RXNWNiaUFxSUVCc2FXTmxibk5sSUUxSlZGeHVJQ292WEc1bWRXNWpkR2x2YmlCblpYUW9aV3hsYldWdWRDa2dlMXh1SUNCeVpYUjFjbTRnWjJWMFEyOXRjSFYwWldSVGRIbHNaU2hsYkdWdFpXNTBLVHRjYm4xY2JseHVablZ1WTNScGIyNGdjMlYwS0dWc1pXMWxiblFzSUc5aWFpa2dlMXh1SUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYjJKcUtTQjdYRzRnSUNBZ2RtRnlJSFpoYkNBOUlHOWlhbHRyWlhsZE8xeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RtRnNJRDA5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVJQ0FnSUNBZ2RtRnNJRDBnZG1Gc0lDc2dYQ0p3ZUZ3aU8xeHVJQ0FnSUgxY2JpQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bFcydGxlVjBnUFNCMllXdzdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHVnNaVzFsYm5RN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdScGRpaGpiR0Z6YzA1aGJXVXBJSHRjYmlBZ2RtRnlJR1JwZGlBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh1SUNCa2FYWXVZMnhoYzNOT1lXMWxJRDBnWTJ4aGMzTk9ZVzFsTzF4dUlDQnlaWFIxY200Z1pHbDJPMXh1ZlZ4dVhHNTJZWElnWld4TllYUmphR1Z6SUQxY2JpQWdkSGx3Wlc5bUlFVnNaVzFsYm5RZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbVhHNGdJQ2hGYkdWdFpXNTBMbkJ5YjNSdmRIbHdaUzV0WVhSamFHVnpJSHg4WEc0Z0lDQWdSV3hsYldWdWRDNXdjbTkwYjNSNWNHVXVkMlZpYTJsMFRXRjBZMmhsYzFObGJHVmpkRzl5SUh4OFhHNGdJQ0FnUld4bGJXVnVkQzV3Y205MGIzUjVjR1V1Ylc5NlRXRjBZMmhsYzFObGJHVmpkRzl5SUh4OFhHNGdJQ0FnUld4bGJXVnVkQzV3Y205MGIzUjVjR1V1YlhOTllYUmphR1Z6VTJWc1pXTjBiM0lwTzF4dVhHNW1kVzVqZEdsdmJpQnRZWFJqYUdWektHVnNaVzFsYm5Rc0lIRjFaWEo1S1NCN1hHNGdJR2xtSUNnaFpXeE5ZWFJqYUdWektTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkT2J5QmxiR1Z0Wlc1MElHMWhkR05vYVc1bklHMWxkR2h2WkNCemRYQndiM0owWldRbktUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmxiRTFoZEdOb1pYTXVZMkZzYkNobGJHVnRaVzUwTENCeGRXVnllU2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJSEpsYlc5MlpTaGxiR1Z0Wlc1MEtTQjdYRzRnSUdsbUlDaGxiR1Z0Wlc1MExuSmxiVzkyWlNrZ2UxeHVJQ0FnSUdWc1pXMWxiblF1Y21WdGIzWmxLQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYVdZZ0tHVnNaVzFsYm5RdWNHRnlaVzUwVG05a1pTa2dlMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXdZWEpsYm5ST2IyUmxMbkpsYlc5MlpVTm9hV3hrS0dWc1pXMWxiblFwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCeGRXVnllVU5vYVd4a2NtVnVLR1ZzWlcxbGJuUXNJSE5sYkdWamRHOXlLU0I3WEc0Z0lISmxkSFZ5YmlCQmNuSmhlUzV3Y205MGIzUjVjR1V1Wm1sc2RHVnlMbU5oYkd3b1pXeGxiV1Z1ZEM1amFHbHNaSEpsYml3Z1puVnVZM1JwYjI0Z0tHTm9hV3hrS1NCN0lISmxkSFZ5YmlCdFlYUmphR1Z6S0dOb2FXeGtMQ0J6Wld4bFkzUnZjaWs3SUgxY2JpQWdLVHRjYm4xY2JseHVkbUZ5SUdOc2N5QTlJSHRjYmlBZ2JXRnBiam9nSjNCekp5eGNiaUFnWld4bGJXVnVkRG9nZTF4dUlDQWdJSFJvZFcxaU9pQm1kVzVqZEdsdmJpQW9lQ2tnZXlCeVpYUjFjbTRnS0Z3aWNITmZYM1JvZFcxaUxWd2lJQ3NnZUNrN0lIMHNYRzRnSUNBZ2NtRnBiRG9nWm5WdVkzUnBiMjRnS0hncElIc2djbVYwZFhKdUlDaGNJbkJ6WDE5eVlXbHNMVndpSUNzZ2VDazdJSDBzWEc0Z0lDQWdZMjl1YzNWdGFXNW5PaUFuY0hOZlgyTm9hV3hrTFMxamIyNXpkVzFsSnl4Y2JpQWdmU3hjYmlBZ2MzUmhkR1U2SUh0Y2JpQWdJQ0JtYjJOMWN6b2dKM0J6TFMxbWIyTjFjeWNzWEc0Z0lDQWdZMnhwWTJ0cGJtYzZJQ2R3Y3kwdFkyeHBZMnRwYm1jbkxGeHVJQ0FnSUdGamRHbDJaVG9nWm5WdVkzUnBiMjRnS0hncElIc2djbVYwZFhKdUlDaGNJbkJ6TFMxaFkzUnBkbVV0WENJZ0t5QjRLVHNnZlN4Y2JpQWdJQ0J6WTNKdmJHeHBibWM2SUdaMWJtTjBhVzl1SUNoNEtTQjdJSEpsZEhWeWJpQW9YQ0p3Y3kwdGMyTnliMnhzYVc1bkxWd2lJQ3NnZUNrN0lIMHNYRzRnSUgwc1hHNTlPMXh1WEc0dktseHVJQ29nU0dWc2NHVnlJRzFsZEdodlpITmNiaUFxTDF4dWRtRnlJSE5qY205c2JHbHVaME5zWVhOelZHbHRaVzkxZENBOUlIc2dlRG9nYm5Wc2JDd2dlVG9nYm5Wc2JDQjlPMXh1WEc1bWRXNWpkR2x2YmlCaFpHUlRZM0p2Ykd4cGJtZERiR0Z6Y3locExDQjRLU0I3WEc0Z0lIWmhjaUJqYkdGemMweHBjM1FnUFNCcExtVnNaVzFsYm5RdVkyeGhjM05NYVhOME8xeHVJQ0IyWVhJZ1kyeGhjM05PWVcxbElEMGdZMnh6TG5OMFlYUmxMbk5qY205c2JHbHVaeWg0S1R0Y2JseHVJQ0JwWmlBb1kyeGhjM05NYVhOMExtTnZiblJoYVc1ektHTnNZWE56VG1GdFpTa3BJSHRjYmlBZ0lDQmpiR1ZoY2xScGJXVnZkWFFvYzJOeWIyeHNhVzVuUTJ4aGMzTlVhVzFsYjNWMFczaGRLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYkdGemMweHBjM1F1WVdSa0tHTnNZWE56VG1GdFpTazdYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnY21WdGIzWmxVMk55YjJ4c2FXNW5RMnhoYzNNb2FTd2dlQ2tnZTF4dUlDQnpZM0p2Ykd4cGJtZERiR0Z6YzFScGJXVnZkWFJiZUYwZ1BTQnpaWFJVYVcxbGIzVjBLRnh1SUNBZ0lHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJR2t1YVhOQmJHbDJaU0FtSmlCcExtVnNaVzFsYm5RdVkyeGhjM05NYVhOMExuSmxiVzkyWlNoamJITXVjM1JoZEdVdWMyTnliMnhzYVc1bktIZ3BLVHNnZlN4Y2JpQWdJQ0JwTG5ObGRIUnBibWR6TG5OamNtOXNiR2x1WjFSb2NtVnphRzlzWkZ4dUlDQXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnpaWFJUWTNKdmJHeHBibWREYkdGemMwbHVjM1JoYm5Sc2VTaHBMQ0I0S1NCN1hHNGdJR0ZrWkZOamNtOXNiR2x1WjBOc1lYTnpLR2tzSUhncE8xeHVJQ0J5WlcxdmRtVlRZM0p2Ykd4cGJtZERiR0Z6Y3locExDQjRLVHRjYm4xY2JseHVkbUZ5SUVWMlpXNTBSV3hsYldWdWRDQTlJR1oxYm1OMGFXOXVJRVYyWlc1MFJXeGxiV1Z1ZENobGJHVnRaVzUwS1NCN1hHNGdJSFJvYVhNdVpXeGxiV1Z1ZENBOUlHVnNaVzFsYm5RN1hHNGdJSFJvYVhNdWFHRnVaR3hsY25NZ1BTQjdmVHRjYm4wN1hHNWNiblpoY2lCd2NtOTBiM1I1Y0dWQlkyTmxjM052Y25NZ1BTQjdJR2x6Ulcxd2RIazZJSHNnWTI5dVptbG5kWEpoWW14bE9pQjBjblZsSUgwZ2ZUdGNibHh1UlhabGJuUkZiR1Z0Wlc1MExuQnliM1J2ZEhsd1pTNWlhVzVrSUQwZ1puVnVZM1JwYjI0Z1ltbHVaQ0FvWlhabGJuUk9ZVzFsTENCb1lXNWtiR1Z5S1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnZEdocGN5NW9ZVzVrYkdWeWMxdGxkbVZ1ZEU1aGJXVmRJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lIUm9hWE11YUdGdVpHeGxjbk5iWlhabGJuUk9ZVzFsWFNBOUlGdGRPMXh1SUNCOVhHNGdJSFJvYVhNdWFHRnVaR3hsY25OYlpYWmxiblJPWVcxbFhTNXdkWE5vS0doaGJtUnNaWElwTzF4dUlDQjBhR2x6TG1Wc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhsZG1WdWRFNWhiV1VzSUdoaGJtUnNaWElzSUdaaGJITmxLVHRjYm4wN1hHNWNia1YyWlc1MFJXeGxiV1Z1ZEM1d2NtOTBiM1I1Y0dVdWRXNWlhVzVrSUQwZ1puVnVZM1JwYjI0Z2RXNWlhVzVrSUNobGRtVnVkRTVoYldVc0lIUmhjbWRsZENrZ2UxeHVJQ0FnSUhaaGNpQjBhR2x6SkRFZ1BTQjBhR2x6TzF4dVhHNGdJSFJvYVhNdWFHRnVaR3hsY25OYlpYWmxiblJPWVcxbFhTQTlJSFJvYVhNdWFHRnVaR3hsY25OYlpYWmxiblJPWVcxbFhTNW1hV3gwWlhJb1puVnVZM1JwYjI0Z0tHaGhibVJzWlhJcElIdGNiaUFnSUNCcFppQW9kR0Z5WjJWMElDWW1JR2hoYm1Sc1pYSWdJVDA5SUhSaGNtZGxkQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNa01TNWxiR1Z0Wlc1MExuSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSW9aWFpsYm5ST1lXMWxMQ0JvWVc1a2JHVnlMQ0JtWVd4elpTazdYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNCOUtUdGNibjA3WEc1Y2JrVjJaVzUwUld4bGJXVnVkQzV3Y205MGIzUjVjR1V1ZFc1aWFXNWtRV3hzSUQwZ1puVnVZM1JwYjI0Z2RXNWlhVzVrUVd4c0lDZ3BJSHRjYmlBZ0lDQjJZWElnZEdocGN5UXhJRDBnZEdocGN6dGNibHh1SUNCbWIzSWdLSFpoY2lCdVlXMWxJR2x1SUhSb2FYTWtNUzVvWVc1a2JHVnljeWtnZTF4dUlDQWdJSFJvYVhNa01TNTFibUpwYm1Rb2JtRnRaU2s3WEc0Z0lIMWNibjA3WEc1Y2JuQnliM1J2ZEhsd1pVRmpZMlZ6YzI5eWN5NXBjMFZ0Y0hSNUxtZGxkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMllYSWdkR2hwY3lReElEMGdkR2hwY3p0Y2JseHVJQ0J5WlhSMWNtNGdUMkpxWldOMExtdGxlWE1vZEdocGN5NW9ZVzVrYkdWeWN5a3VaWFpsY25rb1hHNGdJQ0FnWm5WdVkzUnBiMjRnS0d0bGVTa2dleUJ5WlhSMWNtNGdkR2hwY3lReExtaGhibVJzWlhKelcydGxlVjB1YkdWdVozUm9JRDA5UFNBd095QjlYRzRnSUNrN1hHNTlPMXh1WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRHbGxjeWdnUlhabGJuUkZiR1Z0Wlc1MExuQnliM1J2ZEhsd1pTd2djSEp2ZEc5MGVYQmxRV05qWlhOemIzSnpJQ2s3WEc1Y2JuWmhjaUJGZG1WdWRFMWhibUZuWlhJZ1BTQm1kVzVqZEdsdmJpQkZkbVZ1ZEUxaGJtRm5aWElvS1NCN1hHNGdJSFJvYVhNdVpYWmxiblJGYkdWdFpXNTBjeUE5SUZ0ZE8xeHVmVHRjYmx4dVJYWmxiblJOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVsZG1WdWRFVnNaVzFsYm5RZ1BTQm1kVzVqZEdsdmJpQmxkbVZ1ZEVWc1pXMWxiblFnS0dWc1pXMWxiblFwSUh0Y2JpQWdkbUZ5SUdWbElEMGdkR2hwY3k1bGRtVnVkRVZzWlcxbGJuUnpMbVpwYkhSbGNpaG1kVzVqZEdsdmJpQW9aV1VwSUhzZ2NtVjBkWEp1SUdWbExtVnNaVzFsYm5RZ1BUMDlJR1ZzWlcxbGJuUTdJSDBwV3pCZE8xeHVJQ0JwWmlBb0lXVmxLU0I3WEc0Z0lDQWdaV1VnUFNCdVpYY2dSWFpsYm5SRmJHVnRaVzUwS0dWc1pXMWxiblFwTzF4dUlDQWdJSFJvYVhNdVpYWmxiblJGYkdWdFpXNTBjeTV3ZFhOb0tHVmxLVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdaV1U3WEc1OU8xeHVYRzVGZG1WdWRFMWhibUZuWlhJdWNISnZkRzkwZVhCbExtSnBibVFnUFNCbWRXNWpkR2x2YmlCaWFXNWtJQ2hsYkdWdFpXNTBMQ0JsZG1WdWRFNWhiV1VzSUdoaGJtUnNaWElwSUh0Y2JpQWdkR2hwY3k1bGRtVnVkRVZzWlcxbGJuUW9aV3hsYldWdWRDa3VZbWx1WkNobGRtVnVkRTVoYldVc0lHaGhibVJzWlhJcE8xeHVmVHRjYmx4dVJYWmxiblJOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzUxYm1KcGJtUWdQU0JtZFc1amRHbHZiaUIxYm1KcGJtUWdLR1ZzWlcxbGJuUXNJR1YyWlc1MFRtRnRaU3dnYUdGdVpHeGxjaWtnZTF4dUlDQjJZWElnWldVZ1BTQjBhR2x6TG1WMlpXNTBSV3hsYldWdWRDaGxiR1Z0Wlc1MEtUdGNiaUFnWldVdWRXNWlhVzVrS0dWMlpXNTBUbUZ0WlN3Z2FHRnVaR3hsY2lrN1hHNWNiaUFnYVdZZ0tHVmxMbWx6Ulcxd2RIa3BJSHRjYmlBZ0lDQXZMeUJ5WlcxdmRtVmNiaUFnSUNCMGFHbHpMbVYyWlc1MFJXeGxiV1Z1ZEhNdWMzQnNhV05sS0hSb2FYTXVaWFpsYm5SRmJHVnRaVzUwY3k1cGJtUmxlRTltS0dWbEtTd2dNU2s3WEc0Z0lIMWNibjA3WEc1Y2JrVjJaVzUwVFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1ZFc1aWFXNWtRV3hzSUQwZ1puVnVZM1JwYjI0Z2RXNWlhVzVrUVd4c0lDZ3BJSHRjYmlBZ2RHaHBjeTVsZG1WdWRFVnNaVzFsYm5SekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHVXBJSHNnY21WMGRYSnVJR1V1ZFc1aWFXNWtRV3hzS0NrN0lIMHBPMXh1SUNCMGFHbHpMbVYyWlc1MFJXeGxiV1Z1ZEhNZ1BTQmJYVHRjYm4wN1hHNWNia1YyWlc1MFRXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdWIyNWpaU0E5SUdaMWJtTjBhVzl1SUc5dVkyVWdLR1ZzWlcxbGJuUXNJR1YyWlc1MFRtRnRaU3dnYUdGdVpHeGxjaWtnZTF4dUlDQjJZWElnWldVZ1BTQjBhR2x6TG1WMlpXNTBSV3hsYldWdWRDaGxiR1Z0Wlc1MEtUdGNiaUFnZG1GeUlHOXVZMlZJWVc1a2JHVnlJRDBnWm5WdVkzUnBiMjRnS0dWMmRDa2dlMXh1SUNBZ0lHVmxMblZ1WW1sdVpDaGxkbVZ1ZEU1aGJXVXNJRzl1WTJWSVlXNWtiR1Z5S1R0Y2JpQWdJQ0JvWVc1a2JHVnlLR1YyZENrN1hHNGdJSDA3WEc0Z0lHVmxMbUpwYm1Rb1pYWmxiblJPWVcxbExDQnZibU5sU0dGdVpHeGxjaWs3WEc1OU8xeHVYRzVtZFc1amRHbHZiaUJqY21WaGRHVkZkbVZ1ZENodVlXMWxLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0xrTjFjM1J2YlVWMlpXNTBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QkRkWE4wYjIxRmRtVnVkQ2h1WVcxbEtUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjJZWElnWlhaMElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJYWmxiblFvSjBOMWMzUnZiVVYyWlc1MEp5azdYRzRnSUNBZ1pYWjBMbWx1YVhSRGRYTjBiMjFGZG1WdWRDaHVZVzFsTENCbVlXeHpaU3dnWm1Gc2MyVXNJSFZ1WkdWbWFXNWxaQ2s3WEc0Z0lDQWdjbVYwZFhKdUlHVjJkRHRjYmlBZ2ZWeHVmVnh1WEc1MllYSWdjSEp2WTJWemMxTmpjbTlzYkVScFptWWdQU0JtZFc1amRHbHZiaWhjYmlBZ2FTeGNiaUFnWVhocGN5eGNiaUFnWkdsbVppeGNiaUFnZFhObFUyTnliMnhzYVc1blEyeGhjM01zWEc0Z0lHWnZjbU5sUm1seVpWSmxZV05vUlhabGJuUmNiaWtnZTF4dUlDQnBaaUFvSUhWelpWTmpjbTlzYkdsdVowTnNZWE56SUQwOVBTQjJiMmxrSURBZ0tTQjFjMlZUWTNKdmJHeHBibWREYkdGemN5QTlJSFJ5ZFdVN1hHNGdJR2xtSUNnZ1ptOXlZMlZHYVhKbFVtVmhZMmhGZG1WdWRDQTlQVDBnZG05cFpDQXdJQ2tnWm05eVkyVkdhWEpsVW1WaFkyaEZkbVZ1ZENBOUlHWmhiSE5sTzF4dVhHNGdJSFpoY2lCbWFXVnNaSE03WEc0Z0lHbG1JQ2hoZUdseklEMDlQU0FuZEc5d0p5a2dlMXh1SUNBZ0lHWnBaV3hrY3lBOUlGdGNiaUFnSUNBZ0lDZGpiMjUwWlc1MFNHVnBaMmgwSnl4Y2JpQWdJQ0FnSUNkamIyNTBZV2x1WlhKSVpXbG5hSFFuTEZ4dUlDQWdJQ0FnSjNOamNtOXNiRlJ2Y0Njc1hHNGdJQ0FnSUNBbmVTY3NYRzRnSUNBZ0lDQW5kWEFuTEZ4dUlDQWdJQ0FnSjJSdmQyNG5JRjA3WEc0Z0lIMGdaV3h6WlNCcFppQW9ZWGhwY3lBOVBUMGdKMnhsWm5RbktTQjdYRzRnSUNBZ1ptbGxiR1J6SUQwZ1cxeHVJQ0FnSUNBZ0oyTnZiblJsYm5SWGFXUjBhQ2NzWEc0Z0lDQWdJQ0FuWTI5dWRHRnBibVZ5VjJsa2RHZ25MRnh1SUNBZ0lDQWdKM05qY205c2JFeGxablFuTEZ4dUlDQWdJQ0FnSjNnbkxGeHVJQ0FnSUNBZ0oyeGxablFuTEZ4dUlDQWdJQ0FnSjNKcFoyaDBKeUJkTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduUVNCd2NtOXdaWElnWVhocGN5QnphRzkxYkdRZ1ltVWdjSEp2ZG1sa1pXUW5LVHRjYmlBZ2ZWeHVYRzRnSUhCeWIyTmxjM05UWTNKdmJHeEVhV1ptSkRFb2FTd2daR2xtWml3Z1ptbGxiR1J6TENCMWMyVlRZM0p2Ykd4cGJtZERiR0Z6Y3l3Z1ptOXlZMlZHYVhKbFVtVmhZMmhGZG1WdWRDazdYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQndjbTlqWlhOelUyTnliMnhzUkdsbVppUXhLRnh1SUNCcExGeHVJQ0JrYVdabUxGeHVJQ0J5WldZc1hHNGdJSFZ6WlZOamNtOXNiR2x1WjBOc1lYTnpMRnh1SUNCbWIzSmpaVVpwY21WU1pXRmphRVYyWlc1MFhHNHBJSHRjYmlBZ2RtRnlJR052Ym5SbGJuUklaV2xuYUhRZ1BTQnlaV1piTUYwN1hHNGdJSFpoY2lCamIyNTBZV2x1WlhKSVpXbG5hSFFnUFNCeVpXWmJNVjA3WEc0Z0lIWmhjaUJ6WTNKdmJHeFViM0FnUFNCeVpXWmJNbDA3WEc0Z0lIWmhjaUI1SUQwZ2NtVm1Xek5kTzF4dUlDQjJZWElnZFhBZ1BTQnlaV1piTkYwN1hHNGdJSFpoY2lCa2IzZHVJRDBnY21WbVd6VmRPMXh1SUNCcFppQW9JSFZ6WlZOamNtOXNiR2x1WjBOc1lYTnpJRDA5UFNCMmIybGtJREFnS1NCMWMyVlRZM0p2Ykd4cGJtZERiR0Z6Y3lBOUlIUnlkV1U3WEc0Z0lHbG1JQ2dnWm05eVkyVkdhWEpsVW1WaFkyaEZkbVZ1ZENBOVBUMGdkbTlwWkNBd0lDa2dabTl5WTJWR2FYSmxVbVZoWTJoRmRtVnVkQ0E5SUdaaGJITmxPMXh1WEc0Z0lIWmhjaUJsYkdWdFpXNTBJRDBnYVM1bGJHVnRaVzUwTzF4dVhHNGdJQzh2SUhKbGMyVjBJSEpsWVdOb1hHNGdJR2t1Y21WaFkyaGJlVjBnUFNCdWRXeHNPMXh1WEc0Z0lDOHZJREVnWm05eUlITjFZbkJwZUdWc0lISnZkVzVrYVc1blhHNGdJR2xtSUNobGJHVnRaVzUwVzNOamNtOXNiRlJ2Y0YwZ1BDQXhLU0I3WEc0Z0lDQWdhUzV5WldGamFGdDVYU0E5SUNkemRHRnlkQ2M3WEc0Z0lIMWNibHh1SUNBdkx5QXhJR1p2Y2lCemRXSndhWGhsYkNCeWIzVnVaR2x1WjF4dUlDQnBaaUFvWld4bGJXVnVkRnR6WTNKdmJHeFViM0JkSUQ0Z2FWdGpiMjUwWlc1MFNHVnBaMmgwWFNBdElHbGJZMjl1ZEdGcGJtVnlTR1ZwWjJoMFhTQXRJREVwSUh0Y2JpQWdJQ0JwTG5KbFlXTm9XM2xkSUQwZ0oyVnVaQ2M3WEc0Z0lIMWNibHh1SUNCcFppQW9aR2xtWmlrZ2UxeHVJQ0FnSUdWc1pXMWxiblF1WkdsemNHRjBZMmhGZG1WdWRDaGpjbVZoZEdWRmRtVnVkQ2dvWENKd2N5MXpZM0p2Ykd3dFhDSWdLeUI1S1NrcE8xeHVYRzRnSUNBZ2FXWWdLR1JwWm1ZZ1BDQXdLU0I3WEc0Z0lDQWdJQ0JsYkdWdFpXNTBMbVJwYzNCaGRHTm9SWFpsYm5Rb1kzSmxZWFJsUlhabGJuUW9LRndpY0hNdGMyTnliMnhzTFZ3aUlDc2dkWEFwS1NrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoa2FXWm1JRDRnTUNrZ2UxeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1a2FYTndZWFJqYUVWMlpXNTBLR055WldGMFpVVjJaVzUwS0NoY0luQnpMWE5qY205c2JDMWNJaUFySUdSdmQyNHBLU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hWelpWTmpjbTlzYkdsdVowTnNZWE56S1NCN1hHNGdJQ0FnSUNCelpYUlRZM0p2Ykd4cGJtZERiR0Z6YzBsdWMzUmhiblJzZVNocExDQjVLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb2FTNXlaV0ZqYUZ0NVhTQW1KaUFvWkdsbVppQjhmQ0JtYjNKalpVWnBjbVZTWldGamFFVjJaVzUwS1NrZ2UxeHVJQ0FnSUdWc1pXMWxiblF1WkdsemNHRjBZMmhGZG1WdWRDaGpjbVZoZEdWRmRtVnVkQ2dvWENKd2N5MWNJaUFySUhrZ0t5QmNJaTF5WldGamFDMWNJaUFySUNocExuSmxZV05vVzNsZEtTa3BLVHRjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCMGIwbHVkQ2g0S1NCN1hHNGdJSEpsZEhWeWJpQndZWEp6WlVsdWRDaDRMQ0F4TUNrZ2ZId2dNRHRjYm4xY2JseHVablZ1WTNScGIyNGdhWE5GWkdsMFlXSnNaU2hsYkNrZ2UxeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lHMWhkR05vWlhNb1pXd3NJQ2RwYm5CMWRDeGJZMjl1ZEdWdWRHVmthWFJoWW14bFhTY3BJSHg4WEc0Z0lDQWdiV0YwWTJobGN5aGxiQ3dnSjNObGJHVmpkQ3hiWTI5dWRHVnVkR1ZrYVhSaFlteGxYU2NwSUh4OFhHNGdJQ0FnYldGMFkyaGxjeWhsYkN3Z0ozUmxlSFJoY21WaExGdGpiMjUwWlc1MFpXUnBkR0ZpYkdWZEp5a2dmSHhjYmlBZ0lDQnRZWFJqYUdWektHVnNMQ0FuWW5WMGRHOXVMRnRqYjI1MFpXNTBaV1JwZEdGaWJHVmRKeWxjYmlBZ0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2IzVjBaWEpYYVdSMGFDaGxiR1Z0Wlc1MEtTQjdYRzRnSUhaaGNpQnpkSGxzWlhNZ1BTQm5aWFFvWld4bGJXVnVkQ2s3WEc0Z0lISmxkSFZ5YmlBb1hHNGdJQ0FnZEc5SmJuUW9jM1I1YkdWekxuZHBaSFJvS1NBclhHNGdJQ0FnZEc5SmJuUW9jM1I1YkdWekxuQmhaR1JwYm1kTVpXWjBLU0FyWEc0Z0lDQWdkRzlKYm5Rb2MzUjViR1Z6TG5CaFpHUnBibWRTYVdkb2RDa2dLMXh1SUNBZ0lIUnZTVzUwS0hOMGVXeGxjeTVpYjNKa1pYSk1aV1owVjJsa2RHZ3BJQ3RjYmlBZ0lDQjBiMGx1ZENoemRIbHNaWE11WW05eVpHVnlVbWxuYUhSWGFXUjBhQ2xjYmlBZ0tUdGNibjFjYmx4dWRtRnlJR1Z1ZGlBOUlIdGNiaUFnYVhOWFpXSkxhWFE2WEc0Z0lDQWdkSGx3Wlc5bUlHUnZZM1Z0Wlc1MElDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUpseHVJQ0FnSUNkWFpXSnJhWFJCY0hCbFlYSmhibU5sSnlCcGJpQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWMzUjViR1VzWEc0Z0lITjFjSEJ2Y25SelZHOTFZMmc2WEc0Z0lDQWdkSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlaY2JpQWdJQ0FvSjI5dWRHOTFZMmh6ZEdGeWRDY2dhVzRnZDJsdVpHOTNJSHg4WEc0Z0lDQWdJQ0FvZDJsdVpHOTNMa1J2WTNWdFpXNTBWRzkxWTJnZ0ppWWdaRzlqZFcxbGJuUWdhVzV6ZEdGdVkyVnZaaUIzYVc1a2IzY3VSRzlqZFcxbGJuUlViM1ZqYUNrcExGeHVJQ0J6ZFhCd2IzSjBjMGxsVUc5cGJuUmxjanBjYmlBZ0lDQjBlWEJsYjJZZ2JtRjJhV2RoZEc5eUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQnVZWFpwWjJGMGIzSXViWE5OWVhoVWIzVmphRkJ2YVc1MGN5eGNiaUFnYVhORGFISnZiV1U2WEc0Z0lDQWdkSGx3Wlc5bUlHNWhkbWxuWVhSdmNpQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWmNiaUFnSUNBdlEyaHliMjFsTDJrdWRHVnpkQ2h1WVhacFoyRjBiM0lnSmlZZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDa3NYRzU5TzF4dVhHNTJZWElnZFhCa1lYUmxSMlZ2YldWMGNua2dQU0JtZFc1amRHbHZiaWhwS1NCN1hHNGdJSFpoY2lCbGJHVnRaVzUwSUQwZ2FTNWxiR1Z0Wlc1ME8xeHVJQ0IyWVhJZ2NtOTFibVJsWkZOamNtOXNiRlJ2Y0NBOUlFMWhkR2d1Wm14dmIzSW9aV3hsYldWdWRDNXpZM0p2Ykd4VWIzQXBPMXh1WEc0Z0lHa3VZMjl1ZEdGcGJtVnlWMmxrZEdnZ1BTQmxiR1Z0Wlc1MExtTnNhV1Z1ZEZkcFpIUm9PMXh1SUNCcExtTnZiblJoYVc1bGNraGxhV2RvZENBOUlHVnNaVzFsYm5RdVkyeHBaVzUwU0dWcFoyaDBPMXh1SUNCcExtTnZiblJsYm5SWGFXUjBhQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNWMmxrZEdnN1hHNGdJR2t1WTI5dWRHVnVkRWhsYVdkb2RDQTlJR1ZzWlcxbGJuUXVjMk55YjJ4c1NHVnBaMmgwTzF4dVhHNGdJR2xtSUNnaFpXeGxiV1Z1ZEM1amIyNTBZV2x1Y3locExuTmpjbTlzYkdKaGNsaFNZV2xzS1NrZ2UxeHVJQ0FnSUM4dklHTnNaV0Z1SUhWd0lHRnVaQ0JoY0hCbGJtUmNiaUFnSUNCeGRXVnllVU5vYVd4a2NtVnVLR1ZzWlcxbGJuUXNJR05zY3k1bGJHVnRaVzUwTG5KaGFXd29KM2duS1NrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1pXd3BJSHNnY21WMGRYSnVJSEpsYlc5MlpTaGxiQ2s3SUgxY2JpQWdJQ0FwTzF4dUlDQWdJR1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvYVM1elkzSnZiR3hpWVhKWVVtRnBiQ2s3WEc0Z0lIMWNiaUFnYVdZZ0tDRmxiR1Z0Wlc1MExtTnZiblJoYVc1ektHa3VjMk55YjJ4c1ltRnlXVkpoYVd3cEtTQjdYRzRnSUNBZ0x5OGdZMnhsWVc0Z2RYQWdZVzVrSUdGd2NHVnVaRnh1SUNBZ0lIRjFaWEo1UTJocGJHUnlaVzRvWld4bGJXVnVkQ3dnWTJ4ekxtVnNaVzFsYm5RdWNtRnBiQ2duZVNjcEtTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaGxiQ2tnZXlCeVpYUjFjbTRnY21WdGIzWmxLR1ZzS1RzZ2ZWeHVJQ0FnSUNrN1hHNGdJQ0FnWld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNocExuTmpjbTlzYkdKaGNsbFNZV2xzS1R0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hjYmlBZ0lDQWhhUzV6WlhSMGFXNW5jeTV6ZFhCd2NtVnpjMU5qY205c2JGZ2dKaVpjYmlBZ0lDQnBMbU52Ym5SaGFXNWxjbGRwWkhSb0lDc2dhUzV6WlhSMGFXNW5jeTV6WTNKdmJHeFlUV0Z5WjJsdVQyWm1jMlYwSUR3Z2FTNWpiMjUwWlc1MFYybGtkR2hjYmlBZ0tTQjdYRzRnSUNBZ2FTNXpZM0p2Ykd4aVlYSllRV04wYVhabElEMGdkSEoxWlR0Y2JpQWdJQ0JwTG5KaGFXeFlWMmxrZEdnZ1BTQnBMbU52Ym5SaGFXNWxjbGRwWkhSb0lDMGdhUzV5WVdsc1dFMWhjbWRwYmxkcFpIUm9PMXh1SUNBZ0lHa3VjbUZwYkZoU1lYUnBieUE5SUdrdVkyOXVkR0ZwYm1WeVYybGtkR2dnTHlCcExuSmhhV3hZVjJsa2RHZzdYRzRnSUNBZ2FTNXpZM0p2Ykd4aVlYSllWMmxrZEdnZ1BTQm5aWFJVYUhWdFlsTnBlbVVvWEc0Z0lDQWdJQ0JwTEZ4dUlDQWdJQ0FnZEc5SmJuUW9hUzV5WVdsc1dGZHBaSFJvSUNvZ2FTNWpiMjUwWVdsdVpYSlhhV1IwYUNBdklHa3VZMjl1ZEdWdWRGZHBaSFJvS1Z4dUlDQWdJQ2s3WEc0Z0lDQWdhUzV6WTNKdmJHeGlZWEpZVEdWbWRDQTlJSFJ2U1c1MEtGeHVJQ0FnSUNBZ0tHa3VibVZuWVhScGRtVlRZM0p2Ykd4QlpHcDFjM1J0Wlc1MElDc2daV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBLU0FxWEc0Z0lDQWdJQ0FnSUNocExuSmhhV3hZVjJsa2RHZ2dMU0JwTG5OamNtOXNiR0poY2xoWGFXUjBhQ2tnTDF4dUlDQWdJQ0FnSUNBb2FTNWpiMjUwWlc1MFYybGtkR2dnTFNCcExtTnZiblJoYVc1bGNsZHBaSFJvS1Z4dUlDQWdJQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYVM1elkzSnZiR3hpWVhKWVFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lIMWNibHh1SUNCcFppQW9YRzRnSUNBZ0lXa3VjMlYwZEdsdVozTXVjM1Z3Y0hKbGMzTlRZM0p2Ykd4WklDWW1YRzRnSUNBZ2FTNWpiMjUwWVdsdVpYSklaV2xuYUhRZ0t5QnBMbk5sZEhScGJtZHpMbk5qY205c2JGbE5ZWEpuYVc1UFptWnpaWFFnUENCcExtTnZiblJsYm5SSVpXbG5hSFJjYmlBZ0tTQjdYRzRnSUNBZ2FTNXpZM0p2Ykd4aVlYSlpRV04wYVhabElEMGdkSEoxWlR0Y2JpQWdJQ0JwTG5KaGFXeFpTR1ZwWjJoMElEMGdhUzVqYjI1MFlXbHVaWEpJWldsbmFIUWdMU0JwTG5KaGFXeFpUV0Z5WjJsdVNHVnBaMmgwTzF4dUlDQWdJR2t1Y21GcGJGbFNZWFJwYnlBOUlHa3VZMjl1ZEdGcGJtVnlTR1ZwWjJoMElDOGdhUzV5WVdsc1dVaGxhV2RvZER0Y2JpQWdJQ0JwTG5OamNtOXNiR0poY2xsSVpXbG5hSFFnUFNCblpYUlVhSFZ0WWxOcGVtVW9YRzRnSUNBZ0lDQnBMRnh1SUNBZ0lDQWdkRzlKYm5Rb2FTNXlZV2xzV1VobGFXZG9kQ0FxSUdrdVkyOXVkR0ZwYm1WeVNHVnBaMmgwSUM4Z2FTNWpiMjUwWlc1MFNHVnBaMmgwS1Z4dUlDQWdJQ2s3WEc0Z0lDQWdhUzV6WTNKdmJHeGlZWEpaVkc5d0lEMGdkRzlKYm5Rb1hHNGdJQ0FnSUNCeWIzVnVaR1ZrVTJOeWIyeHNWRzl3SUNwY2JpQWdJQ0FnSUNBZ0tHa3VjbUZwYkZsSVpXbG5hSFFnTFNCcExuTmpjbTlzYkdKaGNsbElaV2xuYUhRcElDOWNiaUFnSUNBZ0lDQWdLR2t1WTI5dWRHVnVkRWhsYVdkb2RDQXRJR2t1WTI5dWRHRnBibVZ5U0dWcFoyaDBLVnh1SUNBZ0lDazdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdhUzV6WTNKdmJHeGlZWEpaUVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzRnSUgxY2JseHVJQ0JwWmlBb2FTNXpZM0p2Ykd4aVlYSllUR1ZtZENBK1BTQnBMbkpoYVd4WVYybGtkR2dnTFNCcExuTmpjbTlzYkdKaGNsaFhhV1IwYUNrZ2UxeHVJQ0FnSUdrdWMyTnliMnhzWW1GeVdFeGxablFnUFNCcExuSmhhV3hZVjJsa2RHZ2dMU0JwTG5OamNtOXNiR0poY2xoWGFXUjBhRHRjYmlBZ2ZWeHVJQ0JwWmlBb2FTNXpZM0p2Ykd4aVlYSlpWRzl3SUQ0OUlHa3VjbUZwYkZsSVpXbG5hSFFnTFNCcExuTmpjbTlzYkdKaGNsbElaV2xuYUhRcElIdGNiaUFnSUNCcExuTmpjbTlzYkdKaGNsbFViM0FnUFNCcExuSmhhV3haU0dWcFoyaDBJQzBnYVM1elkzSnZiR3hpWVhKWlNHVnBaMmgwTzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsUTNOektHVnNaVzFsYm5Rc0lHa3BPMXh1WEc0Z0lHbG1JQ2hwTG5OamNtOXNiR0poY2xoQlkzUnBkbVVwSUh0Y2JpQWdJQ0JsYkdWdFpXNTBMbU5zWVhOelRHbHpkQzVoWkdRb1kyeHpMbk4wWVhSbExtRmpkR2wyWlNnbmVDY3BLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JsYkdWdFpXNTBMbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9ZMnh6TG5OMFlYUmxMbUZqZEdsMlpTZ25lQ2NwS1R0Y2JpQWdJQ0JwTG5OamNtOXNiR0poY2xoWGFXUjBhQ0E5SURBN1hHNGdJQ0FnYVM1elkzSnZiR3hpWVhKWVRHVm1kQ0E5SURBN1hHNGdJQ0FnWld4bGJXVnVkQzV6WTNKdmJHeE1aV1owSUQwZ01EdGNiaUFnZlZ4dUlDQnBaaUFvYVM1elkzSnZiR3hpWVhKWlFXTjBhWFpsS1NCN1hHNGdJQ0FnWld4bGJXVnVkQzVqYkdGemMweHBjM1F1WVdSa0tHTnNjeTV6ZEdGMFpTNWhZM1JwZG1Vb0oza25LU2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWld4bGJXVnVkQzVqYkdGemMweHBjM1F1Y21WdGIzWmxLR05zY3k1emRHRjBaUzVoWTNScGRtVW9KM2tuS1NrN1hHNGdJQ0FnYVM1elkzSnZiR3hpWVhKWlNHVnBaMmgwSUQwZ01EdGNiaUFnSUNCcExuTmpjbTlzYkdKaGNsbFViM0FnUFNBd08xeHVJQ0FnSUdWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUQwZ01EdGNiaUFnZlZ4dWZUdGNibHh1Wm5WdVkzUnBiMjRnWjJWMFZHaDFiV0pUYVhwbEtHa3NJSFJvZFcxaVUybDZaU2tnZTF4dUlDQnBaaUFvYVM1elpYUjBhVzVuY3k1dGFXNVRZM0p2Ykd4aVlYSk1aVzVuZEdncElIdGNiaUFnSUNCMGFIVnRZbE5wZW1VZ1BTQk5ZWFJvTG0xaGVDaDBhSFZ0WWxOcGVtVXNJR2t1YzJWMGRHbHVaM011YldsdVUyTnliMnhzWW1GeVRHVnVaM1JvS1R0Y2JpQWdmVnh1SUNCcFppQW9hUzV6WlhSMGFXNW5jeTV0WVhoVFkzSnZiR3hpWVhKTVpXNW5kR2dwSUh0Y2JpQWdJQ0IwYUhWdFlsTnBlbVVnUFNCTllYUm9MbTFwYmloMGFIVnRZbE5wZW1Vc0lHa3VjMlYwZEdsdVozTXViV0Y0VTJOeWIyeHNZbUZ5VEdWdVozUm9LVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkR2gxYldKVGFYcGxPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjFjR1JoZEdWRGMzTW9aV3hsYldWdWRDd2dhU2tnZTF4dUlDQjJZWElnZUZKaGFXeFBabVp6WlhRZ1BTQjdJSGRwWkhSb09pQnBMbkpoYVd4WVYybGtkR2dnZlR0Y2JpQWdkbUZ5SUhKdmRXNWtaV1JUWTNKdmJHeFViM0FnUFNCTllYUm9MbVpzYjI5eUtHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0tUdGNibHh1SUNCcFppQW9hUzVwYzFKMGJDa2dlMXh1SUNBZ0lIaFNZV2xzVDJabWMyVjBMbXhsWm5RZ1BWeHVJQ0FnSUNBZ2FTNXVaV2RoZEdsMlpWTmpjbTlzYkVGa2FuVnpkRzFsYm5RZ0sxeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElDdGNiaUFnSUNBZ0lHa3VZMjl1ZEdGcGJtVnlWMmxrZEdnZ0xWeHVJQ0FnSUNBZ2FTNWpiMjUwWlc1MFYybGtkR2c3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnZUZKaGFXeFBabVp6WlhRdWJHVm1kQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNUR1ZtZER0Y2JpQWdmVnh1SUNCcFppQW9hUzVwYzFOamNtOXNiR0poY2xoVmMybHVaMEp2ZEhSdmJTa2dlMXh1SUNBZ0lIaFNZV2xzVDJabWMyVjBMbUp2ZEhSdmJTQTlJR2t1YzJOeWIyeHNZbUZ5V0VKdmRIUnZiU0F0SUhKdmRXNWtaV1JUWTNKdmJHeFViM0E3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnZUZKaGFXeFBabVp6WlhRdWRHOXdJRDBnYVM1elkzSnZiR3hpWVhKWVZHOXdJQ3NnY205MWJtUmxaRk5qY205c2JGUnZjRHRjYmlBZ2ZWeHVJQ0J6WlhRb2FTNXpZM0p2Ykd4aVlYSllVbUZwYkN3Z2VGSmhhV3hQWm1aelpYUXBPMXh1WEc0Z0lIWmhjaUI1VW1GcGJFOW1abk5sZENBOUlIc2dkRzl3T2lCeWIzVnVaR1ZrVTJOeWIyeHNWRzl3TENCb1pXbG5hSFE2SUdrdWNtRnBiRmxJWldsbmFIUWdmVHRjYmlBZ2FXWWdLR2t1YVhOVFkzSnZiR3hpWVhKWlZYTnBibWRTYVdkb2RDa2dlMXh1SUNBZ0lHbG1JQ2hwTG1selVuUnNLU0I3WEc0Z0lDQWdJQ0I1VW1GcGJFOW1abk5sZEM1eWFXZG9kQ0E5WEc0Z0lDQWdJQ0FnSUdrdVkyOXVkR1Z1ZEZkcFpIUm9JQzFjYmlBZ0lDQWdJQ0FnS0drdWJtVm5ZWFJwZG1WVFkzSnZiR3hCWkdwMWMzUnRaVzUwSUNzZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMEtTQXRYRzRnSUNBZ0lDQWdJR2t1YzJOeWIyeHNZbUZ5V1ZKcFoyaDBJQzFjYmlBZ0lDQWdJQ0FnYVM1elkzSnZiR3hpWVhKWlQzVjBaWEpYYVdSMGFEdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZVZKaGFXeFBabVp6WlhRdWNtbG5hSFFnUFNCcExuTmpjbTlzYkdKaGNsbFNhV2RvZENBdElHVnNaVzFsYm5RdWMyTnliMnhzVEdWbWREdGNiaUFnSUNCOVhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2FXWWdLR2t1YVhOU2RHd3BJSHRjYmlBZ0lDQWdJSGxTWVdsc1QyWm1jMlYwTG14bFpuUWdQVnh1SUNBZ0lDQWdJQ0JwTG01bFoyRjBhWFpsVTJOeWIyeHNRV1JxZFhOMGJXVnVkQ0FyWEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1YzJOeWIyeHNUR1ZtZENBclhHNGdJQ0FnSUNBZ0lHa3VZMjl1ZEdGcGJtVnlWMmxrZEdnZ0tpQXlJQzFjYmlBZ0lDQWdJQ0FnYVM1amIyNTBaVzUwVjJsa2RHZ2dMVnh1SUNBZ0lDQWdJQ0JwTG5OamNtOXNiR0poY2xsTVpXWjBJQzFjYmlBZ0lDQWdJQ0FnYVM1elkzSnZiR3hpWVhKWlQzVjBaWEpYYVdSMGFEdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZVZKaGFXeFBabVp6WlhRdWJHVm1kQ0E5SUdrdWMyTnliMnhzWW1GeVdVeGxablFnS3lCbGJHVnRaVzUwTG5OamNtOXNiRXhsWm5RN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhObGRDaHBMbk5qY205c2JHSmhjbGxTWVdsc0xDQjVVbUZwYkU5bVpuTmxkQ2s3WEc1Y2JpQWdjMlYwS0drdWMyTnliMnhzWW1GeVdDd2dlMXh1SUNBZ0lHeGxablE2SUdrdWMyTnliMnhzWW1GeVdFeGxablFzWEc0Z0lDQWdkMmxrZEdnNklHa3VjMk55YjJ4c1ltRnlXRmRwWkhSb0lDMGdhUzV5WVdsc1FtOXlaR1Z5V0ZkcFpIUm9MRnh1SUNCOUtUdGNiaUFnYzJWMEtHa3VjMk55YjJ4c1ltRnlXU3dnZTF4dUlDQWdJSFJ2Y0RvZ2FTNXpZM0p2Ykd4aVlYSlpWRzl3TEZ4dUlDQWdJR2hsYVdkb2REb2dhUzV6WTNKdmJHeGlZWEpaU0dWcFoyaDBJQzBnYVM1eVlXbHNRbTl5WkdWeVdWZHBaSFJvTEZ4dUlDQjlLVHRjYm4xY2JseHVkbUZ5SUdOc2FXTnJVbUZwYkNBOUlHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ2FTNWxkbVZ1ZEM1aWFXNWtLR2t1YzJOeWIyeHNZbUZ5V1N3Z0oyMXZkWE5sWkc5M2JpY3NJR1oxYm1OMGFXOXVJQ2hsS1NCN0lISmxkSFZ5YmlCbExuTjBiM0JRY205d1lXZGhkR2x2YmlncE95QjlLVHRjYmlBZ2FTNWxkbVZ1ZEM1aWFXNWtLR2t1YzJOeWIyeHNZbUZ5V1ZKaGFXd3NJQ2R0YjNWelpXUnZkMjRuTENCbWRXNWpkR2x2YmlBb1pTa2dlMXh1SUNBZ0lIWmhjaUJ3YjNOcGRHbHZibFJ2Y0NBOVhHNGdJQ0FnSUNCbExuQmhaMlZaSUMxY2JpQWdJQ0FnSUhkcGJtUnZkeTV3WVdkbFdVOW1abk5sZENBdFhHNGdJQ0FnSUNCcExuTmpjbTlzYkdKaGNsbFNZV2xzTG1kbGRFSnZkVzVrYVc1blEyeHBaVzUwVW1WamRDZ3BMblJ2Y0R0Y2JpQWdJQ0IyWVhJZ1pHbHlaV04wYVc5dUlEMGdjRzl6YVhScGIyNVViM0FnUGlCcExuTmpjbTlzYkdKaGNsbFViM0FnUHlBeElEb2dMVEU3WEc1Y2JpQWdJQ0JwTG1Wc1pXMWxiblF1YzJOeWIyeHNWRzl3SUNzOUlHUnBjbVZqZEdsdmJpQXFJR2t1WTI5dWRHRnBibVZ5U0dWcFoyaDBPMXh1SUNBZ0lIVndaR0YwWlVkbGIyMWxkSEo1S0drcE8xeHVYRzRnSUNBZ1pTNXpkRzl3VUhKdmNHRm5ZWFJwYjI0b0tUdGNiaUFnZlNrN1hHNWNiaUFnYVM1bGRtVnVkQzVpYVc1a0tHa3VjMk55YjJ4c1ltRnlXQ3dnSjIxdmRYTmxaRzkzYmljc0lHWjFibU4wYVc5dUlDaGxLU0I3SUhKbGRIVnliaUJsTG5OMGIzQlFjbTl3WVdkaGRHbHZiaWdwT3lCOUtUdGNiaUFnYVM1bGRtVnVkQzVpYVc1a0tHa3VjMk55YjJ4c1ltRnlXRkpoYVd3c0lDZHRiM1Z6WldSdmQyNG5MQ0JtZFc1amRHbHZiaUFvWlNrZ2UxeHVJQ0FnSUhaaGNpQndiM05wZEdsdmJreGxablFnUFZ4dUlDQWdJQ0FnWlM1d1lXZGxXQ0F0WEc0Z0lDQWdJQ0IzYVc1a2IzY3VjR0ZuWlZoUFptWnpaWFFnTFZ4dUlDQWdJQ0FnYVM1elkzSnZiR3hpWVhKWVVtRnBiQzVuWlhSQ2IzVnVaR2x1WjBOc2FXVnVkRkpsWTNRb0tTNXNaV1owTzF4dUlDQWdJSFpoY2lCa2FYSmxZM1JwYjI0Z1BTQndiM05wZEdsdmJreGxablFnUGlCcExuTmpjbTlzYkdKaGNsaE1aV1owSUQ4Z01TQTZJQzB4TzF4dVhHNGdJQ0FnYVM1bGJHVnRaVzUwTG5OamNtOXNiRXhsWm5RZ0t6MGdaR2x5WldOMGFXOXVJQ29nYVM1amIyNTBZV2x1WlhKWGFXUjBhRHRjYmlBZ0lDQjFjR1JoZEdWSFpXOXRaWFJ5ZVNocEtUdGNibHh1SUNBZ0lHVXVjM1J2Y0ZCeWIzQmhaMkYwYVc5dUtDazdYRzRnSUgwcE8xeHVmVHRjYmx4dWRtRnlJR1J5WVdkVWFIVnRZaUE5SUdaMWJtTjBhVzl1S0drcElIdGNiaUFnWW1sdVpFMXZkWE5sVTJOeWIyeHNTR0Z1Wkd4bGNpaHBMQ0JiWEc0Z0lDQWdKMk52Ym5SaGFXNWxjbGRwWkhSb0p5eGNiaUFnSUNBblkyOXVkR1Z1ZEZkcFpIUm9KeXhjYmlBZ0lDQW5jR0ZuWlZnbkxGeHVJQ0FnSUNkeVlXbHNXRmRwWkhSb0p5eGNiaUFnSUNBbmMyTnliMnhzWW1GeVdDY3NYRzRnSUNBZ0ozTmpjbTlzYkdKaGNsaFhhV1IwYUNjc1hHNGdJQ0FnSjNOamNtOXNiRXhsWm5RbkxGeHVJQ0FnSUNkNEp5eGNiaUFnSUNBbmMyTnliMnhzWW1GeVdGSmhhV3duSUYwcE8xeHVJQ0JpYVc1a1RXOTFjMlZUWTNKdmJHeElZVzVrYkdWeUtHa3NJRnRjYmlBZ0lDQW5ZMjl1ZEdGcGJtVnlTR1ZwWjJoMEp5eGNiaUFnSUNBblkyOXVkR1Z1ZEVobGFXZG9kQ2NzWEc0Z0lDQWdKM0JoWjJWWkp5eGNiaUFnSUNBbmNtRnBiRmxJWldsbmFIUW5MRnh1SUNBZ0lDZHpZM0p2Ykd4aVlYSlpKeXhjYmlBZ0lDQW5jMk55YjJ4c1ltRnlXVWhsYVdkb2RDY3NYRzRnSUNBZ0ozTmpjbTlzYkZSdmNDY3NYRzRnSUNBZ0oza25MRnh1SUNBZ0lDZHpZM0p2Ykd4aVlYSlpVbUZwYkNjZ1hTazdYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQmlhVzVrVFc5MWMyVlRZM0p2Ykd4SVlXNWtiR1Z5S0Z4dUlDQnBMRnh1SUNCeVpXWmNiaWtnZTF4dUlDQjJZWElnWTI5dWRHRnBibVZ5U0dWcFoyaDBJRDBnY21WbVd6QmRPMXh1SUNCMllYSWdZMjl1ZEdWdWRFaGxhV2RvZENBOUlISmxabHN4WFR0Y2JpQWdkbUZ5SUhCaFoyVlpJRDBnY21WbVd6SmRPMXh1SUNCMllYSWdjbUZwYkZsSVpXbG5hSFFnUFNCeVpXWmJNMTA3WEc0Z0lIWmhjaUJ6WTNKdmJHeGlZWEpaSUQwZ2NtVm1XelJkTzF4dUlDQjJZWElnYzJOeWIyeHNZbUZ5V1VobGFXZG9kQ0E5SUhKbFpsczFYVHRjYmlBZ2RtRnlJSE5qY205c2JGUnZjQ0E5SUhKbFpsczJYVHRjYmlBZ2RtRnlJSGtnUFNCeVpXWmJOMTA3WEc0Z0lIWmhjaUJ6WTNKdmJHeGlZWEpaVW1GcGJDQTlJSEpsWmxzNFhUdGNibHh1SUNCMllYSWdaV3hsYldWdWRDQTlJR2t1Wld4bGJXVnVkRHRjYmx4dUlDQjJZWElnYzNSaGNuUnBibWRUWTNKdmJHeFViM0FnUFNCdWRXeHNPMXh1SUNCMllYSWdjM1JoY25ScGJtZE5iM1Z6WlZCaFoyVlpJRDBnYm5Wc2JEdGNiaUFnZG1GeUlITmpjbTlzYkVKNUlEMGdiblZzYkR0Y2JseHVJQ0JtZFc1amRHbHZiaUJ0YjNWelpVMXZkbVZJWVc1a2JHVnlLR1VwSUh0Y2JpQWdJQ0JsYkdWdFpXNTBXM05qY205c2JGUnZjRjBnUFZ4dUlDQWdJQ0FnYzNSaGNuUnBibWRUWTNKdmJHeFViM0FnS3lCelkzSnZiR3hDZVNBcUlDaGxXM0JoWjJWWlhTQXRJSE4wWVhKMGFXNW5UVzkxYzJWUVlXZGxXU2s3WEc0Z0lDQWdZV1JrVTJOeWIyeHNhVzVuUTJ4aGMzTW9hU3dnZVNrN1hHNGdJQ0FnZFhCa1lYUmxSMlZ2YldWMGNua29hU2s3WEc1Y2JpQWdJQ0JsTG5OMGIzQlFjbTl3WVdkaGRHbHZiaWdwTzF4dUlDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUcxdmRYTmxWWEJJWVc1a2JHVnlLQ2tnZTF4dUlDQWdJSEpsYlc5MlpWTmpjbTlzYkdsdVowTnNZWE56S0drc0lIa3BPMXh1SUNBZ0lHbGJjMk55YjJ4c1ltRnlXVkpoYVd4ZExtTnNZWE56VEdsemRDNXlaVzF2ZG1Vb1kyeHpMbk4wWVhSbExtTnNhV05yYVc1bktUdGNiaUFnSUNCcExtVjJaVzUwTG5WdVltbHVaQ2hwTG05M2JtVnlSRzlqZFcxbGJuUXNJQ2R0YjNWelpXMXZkbVVuTENCdGIzVnpaVTF2ZG1WSVlXNWtiR1Z5S1R0Y2JpQWdmVnh1WEc0Z0lHa3VaWFpsYm5RdVltbHVaQ2hwVzNOamNtOXNiR0poY2xsZExDQW5iVzkxYzJWa2IzZHVKeXdnWm5WdVkzUnBiMjRnS0dVcElIdGNiaUFnSUNCemRHRnlkR2x1WjFOamNtOXNiRlJ2Y0NBOUlHVnNaVzFsYm5SYmMyTnliMnhzVkc5d1hUdGNiaUFnSUNCemRHRnlkR2x1WjAxdmRYTmxVR0ZuWlZrZ1BTQmxXM0JoWjJWWlhUdGNiaUFnSUNCelkzSnZiR3hDZVNBOVhHNGdJQ0FnSUNBb2FWdGpiMjUwWlc1MFNHVnBaMmgwWFNBdElHbGJZMjl1ZEdGcGJtVnlTR1ZwWjJoMFhTa2dMMXh1SUNBZ0lDQWdLR2xiY21GcGJGbElaV2xuYUhSZElDMGdhVnR6WTNKdmJHeGlZWEpaU0dWcFoyaDBYU2s3WEc1Y2JpQWdJQ0JwTG1WMlpXNTBMbUpwYm1Rb2FTNXZkMjVsY2tSdlkzVnRaVzUwTENBbmJXOTFjMlZ0YjNabEp5d2diVzkxYzJWTmIzWmxTR0Z1Wkd4bGNpazdYRzRnSUNBZ2FTNWxkbVZ1ZEM1dmJtTmxLR2t1YjNkdVpYSkViMk4xYldWdWRDd2dKMjF2ZFhObGRYQW5MQ0J0YjNWelpWVndTR0Z1Wkd4bGNpazdYRzVjYmlBZ0lDQnBXM05qY205c2JHSmhjbGxTWVdsc1hTNWpiR0Z6YzB4cGMzUXVZV1JrS0dOc2N5NXpkR0YwWlM1amJHbGphMmx1WnlrN1hHNWNiaUFnSUNCbExuTjBiM0JRY205d1lXZGhkR2x2YmlncE8xeHVJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdmU2s3WEc1OVhHNWNiblpoY2lCclpYbGliMkZ5WkNBOUlHWjFibU4wYVc5dUtHa3BJSHRjYmlBZ2RtRnlJR1ZzWlcxbGJuUWdQU0JwTG1Wc1pXMWxiblE3WEc1Y2JpQWdkbUZ5SUdWc1pXMWxiblJJYjNabGNtVmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z2JXRjBZMmhsY3lobGJHVnRaVzUwTENBbk9taHZkbVZ5SnlrN0lIMDdYRzRnSUhaaGNpQnpZM0p2Ykd4aVlYSkdiMk4xYzJWa0lEMGdablZ1WTNScGIyNGdLQ2tnZXlCeVpYUjFjbTRnYldGMFkyaGxjeWhwTG5OamNtOXNiR0poY2xnc0lDYzZabTlqZFhNbktTQjhmQ0J0WVhSamFHVnpLR2t1YzJOeWIyeHNZbUZ5V1N3Z0p6cG1iMk4xY3ljcE95QjlPMXh1WEc0Z0lHWjFibU4wYVc5dUlITm9iM1ZzWkZCeVpYWmxiblJFWldaaGRXeDBLR1JsYkhSaFdDd2daR1ZzZEdGWktTQjdYRzRnSUNBZ2RtRnlJSE5qY205c2JGUnZjQ0E5SUUxaGRHZ3VabXh2YjNJb1pXeGxiV1Z1ZEM1elkzSnZiR3hVYjNBcE8xeHVJQ0FnSUdsbUlDaGtaV3gwWVZnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hhUzV6WTNKdmJHeGlZWEpaUVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHbG1JQ2hjYmlBZ0lDQWdJQ0FnS0hOamNtOXNiRlJ2Y0NBOVBUMGdNQ0FtSmlCa1pXeDBZVmtnUGlBd0tTQjhmRnh1SUNBZ0lDQWdJQ0FvYzJOeWIyeHNWRzl3SUQ0OUlHa3VZMjl1ZEdWdWRFaGxhV2RvZENBdElHa3VZMjl1ZEdGcGJtVnlTR1ZwWjJoMElDWW1JR1JsYkhSaFdTQThJREFwWEc0Z0lDQWdJQ0FwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNGcExuTmxkSFJwYm1kekxuZG9aV1ZzVUhKdmNHRm5ZWFJwYjI0N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlITmpjbTlzYkV4bFpuUWdQU0JsYkdWdFpXNTBMbk5qY205c2JFeGxablE3WEc0Z0lDQWdhV1lnS0dSbGJIUmhXU0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdhV1lnS0NGcExuTmpjbTlzYkdKaGNsaEJZM1JwZG1VcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tGeHVJQ0FnSUNBZ0lDQW9jMk55YjJ4c1RHVm1kQ0E5UFQwZ01DQW1KaUJrWld4MFlWZ2dQQ0F3S1NCOGZGeHVJQ0FnSUNBZ0lDQW9jMk55YjJ4c1RHVm1kQ0ErUFNCcExtTnZiblJsYm5SWGFXUjBhQ0F0SUdrdVkyOXVkR0ZwYm1WeVYybGtkR2dnSmlZZ1pHVnNkR0ZZSUQ0Z01DbGNiaUFnSUNBZ0lDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdJV2t1YzJWMGRHbHVaM011ZDJobFpXeFFjbTl3WVdkaGRHbHZianRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUgxY2JseHVJQ0JwTG1WMlpXNTBMbUpwYm1Rb2FTNXZkMjVsY2tSdlkzVnRaVzUwTENBbmEyVjVaRzkzYmljc0lHWjFibU4wYVc5dUlDaGxLU0I3WEc0Z0lDQWdhV1lnS0Z4dUlDQWdJQ0FnS0dVdWFYTkVaV1poZFd4MFVISmxkbVZ1ZEdWa0lDWW1JR1V1YVhORVpXWmhkV3gwVUhKbGRtVnVkR1ZrS0NrcElIeDhYRzRnSUNBZ0lDQmxMbVJsWm1GMWJIUlFjbVYyWlc1MFpXUmNiaUFnSUNBcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb0lXVnNaVzFsYm5SSWIzWmxjbVZrS0NrZ0ppWWdJWE5qY205c2JHSmhja1p2WTNWelpXUW9LU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIWmhjaUJoWTNScGRtVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZV04wYVhabFJXeGxiV1Z1ZEZ4dUlDQWdJQ0FnUHlCa2IyTjFiV1Z1ZEM1aFkzUnBkbVZGYkdWdFpXNTBYRzRnSUNBZ0lDQTZJR2t1YjNkdVpYSkViMk4xYldWdWRDNWhZM1JwZG1WRmJHVnRaVzUwTzF4dUlDQWdJR2xtSUNoaFkzUnBkbVZGYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1lXTjBhWFpsUld4bGJXVnVkQzUwWVdkT1lXMWxJRDA5UFNBblNVWlNRVTFGSnlrZ2UxeHVJQ0FnSUNBZ0lDQmhZM1JwZG1WRmJHVnRaVzUwSUQwZ1lXTjBhWFpsUld4bGJXVnVkQzVqYjI1MFpXNTBSRzlqZFcxbGJuUXVZV04wYVhabFJXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUM4dklHZHZJR1JsWlhCbGNpQnBaaUJsYkdWdFpXNTBJR2x6SUdFZ2QyVmlZMjl0Y0c5dVpXNTBYRzRnSUNBZ0lDQWdJSGRvYVd4bElDaGhZM1JwZG1WRmJHVnRaVzUwTG5Ob1lXUnZkMUp2YjNRcElIdGNiaUFnSUNBZ0lDQWdJQ0JoWTNScGRtVkZiR1Z0Wlc1MElEMGdZV04wYVhabFJXeGxiV1Z1ZEM1emFHRmtiM2RTYjI5MExtRmpkR2wyWlVWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdsbUlDaHBjMFZrYVhSaFlteGxLR0ZqZEdsMlpVVnNaVzFsYm5RcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdaR1ZzZEdGWUlEMGdNRHRjYmlBZ0lDQjJZWElnWkdWc2RHRlpJRDBnTUR0Y2JseHVJQ0FnSUhOM2FYUmphQ0FvWlM1M2FHbGphQ2tnZTF4dUlDQWdJQ0FnWTJGelpTQXpOem9nTHk4Z2JHVm1kRnh1SUNBZ0lDQWdJQ0JwWmlBb1pTNXRaWFJoUzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdWc2RHRllJRDBnTFdrdVkyOXVkR1Z1ZEZkcFpIUm9PMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dVdVlXeDBTMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdaR1ZzZEdGWUlEMGdMV2t1WTI5dWRHRnBibVZ5VjJsa2RHZzdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdWc2RHRllJRDBnTFRNd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ1kyRnpaU0F6T0RvZ0x5OGdkWEJjYmlBZ0lDQWdJQ0FnYVdZZ0tHVXViV1YwWVV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdSbGJIUmhXU0E5SUdrdVkyOXVkR1Z1ZEVobGFXZG9kRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNobExtRnNkRXRsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1JsYkhSaFdTQTlJR2t1WTI5dWRHRnBibVZ5U0dWcFoyaDBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUdSbGJIUmhXU0E5SURNd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ1kyRnpaU0F6T1RvZ0x5OGdjbWxuYUhSY2JpQWdJQ0FnSUNBZ2FXWWdLR1V1YldWMFlVdGxlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHUmxiSFJoV0NBOUlHa3VZMjl1ZEdWdWRGZHBaSFJvTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHVXVZV3gwUzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdWc2RHRllJRDBnYVM1amIyNTBZV2x1WlhKWGFXUjBhRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCa1pXeDBZVmdnUFNBek1EdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lHTmhjMlVnTkRBNklDOHZJR1J2ZDI1Y2JpQWdJQ0FnSUNBZ2FXWWdLR1V1YldWMFlVdGxlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHUmxiSFJoV1NBOUlDMXBMbU52Ym5SbGJuUklaV2xuYUhRN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9aUzVoYkhSTFpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCa1pXeDBZVmtnUFNBdGFTNWpiMjUwWVdsdVpYSklaV2xuYUhRN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdaR1ZzZEdGWklEMGdMVE13TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWTJGelpTQXpNam9nTHk4Z2MzQmhZMlVnWW1GeVhHNGdJQ0FnSUNBZ0lHbG1JQ2hsTG5Ob2FXWjBTMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdaR1ZzZEdGWklEMGdhUzVqYjI1MFlXbHVaWEpJWldsbmFIUTdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnWkdWc2RHRlpJRDBnTFdrdVkyOXVkR0ZwYm1WeVNHVnBaMmgwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWTJGelpTQXpNem9nTHk4Z2NHRm5aU0IxY0Z4dUlDQWdJQ0FnSUNCa1pXeDBZVmtnUFNCcExtTnZiblJoYVc1bGNraGxhV2RvZER0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JqWVhObElETTBPaUF2THlCd1lXZGxJR1J2ZDI1Y2JpQWdJQ0FnSUNBZ1pHVnNkR0ZaSUQwZ0xXa3VZMjl1ZEdGcGJtVnlTR1ZwWjJoME8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUdOaGMyVWdNelk2SUM4dklHaHZiV1ZjYmlBZ0lDQWdJQ0FnWkdWc2RHRlpJRDBnYVM1amIyNTBaVzUwU0dWcFoyaDBPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lHTmhjMlVnTXpVNklDOHZJR1Z1WkZ4dUlDQWdJQ0FnSUNCa1pXeDBZVmtnUFNBdGFTNWpiMjUwWlc1MFNHVnBaMmgwTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hUzV6WlhSMGFXNW5jeTV6ZFhCd2NtVnpjMU5qY205c2JGZ2dKaVlnWkdWc2RHRllJQ0U5UFNBd0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNocExuTmxkSFJwYm1kekxuTjFjSEJ5WlhOelUyTnliMnhzV1NBbUppQmtaV3gwWVZrZ0lUMDlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmxiR1Z0Wlc1MExuTmpjbTlzYkZSdmNDQXRQU0JrWld4MFlWazdYRzRnSUNBZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElDczlJR1JsYkhSaFdEdGNiaUFnSUNCMWNHUmhkR1ZIWlc5dFpYUnllU2hwS1R0Y2JseHVJQ0FnSUdsbUlDaHphRzkxYkdSUWNtVjJaVzUwUkdWbVlYVnNkQ2hrWld4MFlWZ3NJR1JsYkhSaFdTa3BJSHRjYmlBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVmVHRjYmx4dWRtRnlJSGRvWldWc0lEMGdablZ1WTNScGIyNG9hU2tnZTF4dUlDQjJZWElnWld4bGJXVnVkQ0E5SUdrdVpXeGxiV1Z1ZER0Y2JseHVJQ0JtZFc1amRHbHZiaUJ6YUc5MWJHUlFjbVYyWlc1MFJHVm1ZWFZzZENoa1pXeDBZVmdzSUdSbGJIUmhXU2tnZTF4dUlDQWdJSFpoY2lCeWIzVnVaR1ZrVTJOeWIyeHNWRzl3SUQwZ1RXRjBhQzVtYkc5dmNpaGxiR1Z0Wlc1MExuTmpjbTlzYkZSdmNDazdYRzRnSUNBZ2RtRnlJR2x6Vkc5d0lEMGdaV3hsYldWdWRDNXpZM0p2Ykd4VWIzQWdQVDA5SURBN1hHNGdJQ0FnZG1GeUlHbHpRbTkwZEc5dElEMWNiaUFnSUNBZ0lISnZkVzVrWldSVFkzSnZiR3hVYjNBZ0t5QmxiR1Z0Wlc1MExtOW1abk5sZEVobGFXZG9kQ0E5UFQwZ1pXeGxiV1Z1ZEM1elkzSnZiR3hJWldsbmFIUTdYRzRnSUNBZ2RtRnlJR2x6VEdWbWRDQTlJR1ZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kQ0E5UFQwZ01EdGNiaUFnSUNCMllYSWdhWE5TYVdkb2RDQTlYRzRnSUNBZ0lDQmxiR1Z0Wlc1MExuTmpjbTlzYkV4bFpuUWdLeUJsYkdWdFpXNTBMbTltWm5ObGRGZHBaSFJvSUQwOVBTQmxiR1Z0Wlc1MExuTmpjbTlzYkZkcFpIUm9PMXh1WEc0Z0lDQWdkbUZ5SUdocGRITkNiM1Z1WkR0Y2JseHVJQ0FnSUM4dklIQnBZMnNnWVhocGN5QjNhWFJvSUhCeWFXMWhjbmtnWkdseVpXTjBhVzl1WEc0Z0lDQWdhV1lnS0UxaGRHZ3VZV0p6S0dSbGJIUmhXU2tnUGlCTllYUm9MbUZpY3loa1pXeDBZVmdwS1NCN1hHNGdJQ0FnSUNCb2FYUnpRbTkxYm1RZ1BTQnBjMVJ2Y0NCOGZDQnBjMEp2ZEhSdmJUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYUdsMGMwSnZkVzVrSUQwZ2FYTk1aV1owSUh4OElHbHpVbWxuYUhRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR2hwZEhOQ2IzVnVaQ0EvSUNGcExuTmxkSFJwYm1kekxuZG9aV1ZzVUhKdmNHRm5ZWFJwYjI0Z09pQjBjblZsTzF4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z1oyVjBSR1ZzZEdGR2NtOXRSWFpsYm5Rb1pTa2dlMXh1SUNBZ0lIWmhjaUJrWld4MFlWZ2dQU0JsTG1SbGJIUmhXRHRjYmlBZ0lDQjJZWElnWkdWc2RHRlpJRDBnTFRFZ0tpQmxMbVJsYkhSaFdUdGNibHh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdaR1ZzZEdGWUlEMDlQU0FuZFc1a1pXWnBibVZrSnlCOGZDQjBlWEJsYjJZZ1pHVnNkR0ZaSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQ0FnTHk4Z1QxTWdXQ0JUWVdaaGNtbGNiaUFnSUNBZ0lHUmxiSFJoV0NBOUlDMHhJQ29nWlM1M2FHVmxiRVJsYkhSaFdDQXZJRFk3WEc0Z0lDQWdJQ0JrWld4MFlWa2dQU0JsTG5kb1pXVnNSR1ZzZEdGWklDOGdOanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWlM1a1pXeDBZVTF2WkdVZ0ppWWdaUzVrWld4MFlVMXZaR1VnUFQwOUlERXBJSHRjYmlBZ0lDQWdJQzh2SUVacGNtVm1iM2dnYVc0Z1pHVnNkR0ZOYjJSbElERTZJRXhwYm1VZ2MyTnliMnhzYVc1blhHNGdJQ0FnSUNCa1pXeDBZVmdnS2owZ01UQTdYRzRnSUNBZ0lDQmtaV3gwWVZrZ0tqMGdNVEE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0dSbGJIUmhXQ0FoUFQwZ1pHVnNkR0ZZSUNZbUlHUmxiSFJoV1NBaFBUMGdaR1ZzZEdGWklDOHFJRTVoVGlCamFHVmphM01nS2k4cElIdGNiaUFnSUNBZ0lDOHZJRWxGSUdsdUlITnZiV1VnYlc5MWMyVWdaSEpwZG1WeWMxeHVJQ0FnSUNBZ1pHVnNkR0ZZSUQwZ01EdGNiaUFnSUNBZ0lHUmxiSFJoV1NBOUlHVXVkMmhsWld4RVpXeDBZVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWlM1emFHbG1kRXRsZVNrZ2UxeHVJQ0FnSUNBZ0x5OGdjbVYyWlhKelpTQmhlR2x6SUhkcGRHZ2djMmhwWm5RZ2EyVjVYRzRnSUNBZ0lDQnlaWFIxY200Z1d5MWtaV3gwWVZrc0lDMWtaV3gwWVZoZE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdXMlJsYkhSaFdDd2daR1ZzZEdGWlhUdGNiaUFnZlZ4dVhHNGdJR1oxYm1OMGFXOXVJSE5vYjNWc1pFSmxRMjl1YzNWdFpXUkNlVU5vYVd4a0tIUmhjbWRsZEN3Z1pHVnNkR0ZZTENCa1pXeDBZVmtwSUh0Y2JpQWdJQ0F2THlCR1NWaE5SVG9nZEdocGN5QnBjeUJoSUhkdmNtdGhjbTkxYm1RZ1ptOXlJRHh6Wld4bFkzUStJR2x6YzNWbElHbHVJRVpHSUdGdVpDQkpSU0FqTlRjeFhHNGdJQ0FnYVdZZ0tDRmxibll1YVhOWFpXSkxhWFFnSmlZZ1pXeGxiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2R6Wld4bFkzUTZabTlqZFhNbktTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0NGbGJHVnRaVzUwTG1OdmJuUmhhVzV6S0hSaGNtZGxkQ2twSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdZM1Z5YzI5eUlEMGdkR0Z5WjJWME8xeHVYRzRnSUNBZ2QyaHBiR1VnS0dOMWNuTnZjaUFtSmlCamRYSnpiM0lnSVQwOUlHVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lHbG1JQ2hqZFhKemIzSXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLR05zY3k1bGJHVnRaVzUwTG1OdmJuTjFiV2x1WnlrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhaaGNpQnpkSGxzWlNBOUlHZGxkQ2hqZFhKemIzSXBPMXh1SUNBZ0lDQWdkbUZ5SUc5MlpYSm1iRzkzSUQwZ1czTjBlV3hsTG05MlpYSm1iRzkzTENCemRIbHNaUzV2ZG1WeVpteHZkMWdzSUhOMGVXeGxMbTkyWlhKbWJHOTNXVjB1YW05cGJpaGNiaUFnSUNBZ0lDQWdKeWRjYmlBZ0lDQWdJQ2s3WEc1Y2JpQWdJQ0FnSUM4dklHbG1JSE5qY205c2JHRmliR1ZjYmlBZ0lDQWdJR2xtSUNodmRtVnlabXh2ZHk1dFlYUmphQ2d2S0hOamNtOXNiSHhoZFhSdktTOHBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnRZWGhUWTNKdmJHeFViM0FnUFNCamRYSnpiM0l1YzJOeWIyeHNTR1ZwWjJoMElDMGdZM1Z5YzI5eUxtTnNhV1Z1ZEVobGFXZG9kRHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHMWhlRk5qY205c2JGUnZjQ0ErSURBcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FoS0dOMWNuTnZjaTV6WTNKdmJHeFViM0FnUFQwOUlEQWdKaVlnWkdWc2RHRlpJRDRnTUNrZ0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUNFb1kzVnljMjl5TG5OamNtOXNiRlJ2Y0NBOVBUMGdiV0Y0VTJOeWIyeHNWRzl3SUNZbUlHUmxiSFJoV1NBOElEQXBYRzRnSUNBZ0lDQWdJQ0FnS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZG1GeUlHMWhlRk5qY205c2JFeGxablFnUFNCamRYSnpiM0l1YzJOeWIyeHNWMmxrZEdnZ0xTQmpkWEp6YjNJdVkyeHBaVzUwVjJsa2RHZzdYRzRnSUNBZ0lDQWdJR2xtSUNodFlYaFRZM0p2Ykd4TVpXWjBJRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0VvWTNWeWMyOXlMbk5qY205c2JFeGxablFnUFQwOUlEQWdKaVlnWkdWc2RHRllJRHdnTUNrZ0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUNFb1kzVnljMjl5TG5OamNtOXNiRXhsWm5RZ1BUMDlJRzFoZUZOamNtOXNiRXhsWm5RZ0ppWWdaR1ZzZEdGWUlENGdNQ2xjYmlBZ0lDQWdJQ0FnSUNBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamRYSnpiM0lnUFNCamRYSnpiM0l1Y0dGeVpXNTBUbTlrWlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnRiM1Z6Wlhkb1pXVnNTR0Z1Wkd4bGNpaGxLU0I3WEc0Z0lDQWdkbUZ5SUhKbFppQTlJR2RsZEVSbGJIUmhSbkp2YlVWMlpXNTBLR1VwTzF4dUlDQWdJSFpoY2lCa1pXeDBZVmdnUFNCeVpXWmJNRjA3WEc0Z0lDQWdkbUZ5SUdSbGJIUmhXU0E5SUhKbFpsc3hYVHRjYmx4dUlDQWdJR2xtSUNoemFHOTFiR1JDWlVOdmJuTjFiV1ZrUW5sRGFHbHNaQ2hsTG5SaGNtZGxkQ3dnWkdWc2RHRllMQ0JrWld4MFlWa3BLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJSE5vYjNWc1pGQnlaWFpsYm5RZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0JwWmlBb0lXa3VjMlYwZEdsdVozTXVkWE5sUW05MGFGZG9aV1ZzUVhobGN5a2dlMXh1SUNBZ0lDQWdMeThnWkdWc2RHRllJSGRwYkd3Z2IyNXNlU0JpWlNCMWMyVmtJR1p2Y2lCb2IzSnBlbTl1ZEdGc0lITmpjbTlzYkdsdVp5QmhibVFnWkdWc2RHRlpJSGRwYkd4Y2JpQWdJQ0FnSUM4dklHOXViSGtnWW1VZ2RYTmxaQ0JtYjNJZ2RtVnlkR2xqWVd3Z2MyTnliMnhzYVc1bklDMGdkR2hwY3lCcGN5QjBhR1VnWkdWbVlYVnNkRnh1SUNBZ0lDQWdaV3hsYldWdWRDNXpZM0p2Ykd4VWIzQWdMVDBnWkdWc2RHRlpJQ29nYVM1elpYUjBhVzVuY3k1M2FHVmxiRk53WldWa08xeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElDczlJR1JsYkhSaFdDQXFJR2t1YzJWMGRHbHVaM011ZDJobFpXeFRjR1ZsWkR0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0drdWMyTnliMnhzWW1GeVdVRmpkR2wyWlNBbUppQWhhUzV6WTNKdmJHeGlZWEpZUVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0F2THlCdmJteDVJSFpsY25ScFkyRnNJSE5qY205c2JHSmhjaUJwY3lCaFkzUnBkbVVnWVc1a0lIVnpaVUp2ZEdoWGFHVmxiRUY0WlhNZ2IzQjBhVzl1SUdselhHNGdJQ0FnSUNBdkx5QmhZM1JwZG1Vc0lITnZJR3hsZENkeklITmpjbTlzYkNCMlpYSjBhV05oYkNCaVlYSWdkWE5wYm1jZ1ltOTBhQ0J0YjNWelpTQjNhR1ZsYkNCaGVHVnpYRzRnSUNBZ0lDQnBaaUFvWkdWc2RHRlpLU0I3WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUMwOUlHUmxiSFJoV1NBcUlHa3VjMlYwZEdsdVozTXVkMmhsWld4VGNHVmxaRHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdJQ3M5SUdSbGJIUmhXQ0FxSUdrdWMyVjBkR2x1WjNNdWQyaGxaV3hUY0dWbFpEdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lITm9iM1ZzWkZCeVpYWmxiblFnUFNCMGNuVmxPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hUzV6WTNKdmJHeGlZWEpZUVdOMGFYWmxJQ1ltSUNGcExuTmpjbTlzYkdKaGNsbEJZM1JwZG1VcElIdGNiaUFnSUNBZ0lDOHZJSFZ6WlVKdmRHaFhhR1ZsYkVGNFpYTWdZVzVrSUc5dWJIa2dhRzl5YVhwdmJuUmhiQ0JpWVhJZ2FYTWdZV04wYVhabExDQnpieUIxYzJVZ1ltOTBhRnh1SUNBZ0lDQWdMeThnZDJobFpXd2dZWGhsY3lCbWIzSWdhRzl5YVhwdmJuUmhiQ0JpWVhKY2JpQWdJQ0FnSUdsbUlDaGtaV3gwWVZncElIdGNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBJQ3M5SUdSbGJIUmhXQ0FxSUdrdWMyVjBkR2x1WjNNdWQyaGxaV3hUY0dWbFpEdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVEdWbWRDQXRQU0JrWld4MFlWa2dLaUJwTG5ObGRIUnBibWR6TG5kb1pXVnNVM0JsWldRN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCemFHOTFiR1JRY21WMlpXNTBJRDBnZEhKMVpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMWNHUmhkR1ZIWlc5dFpYUnllU2hwS1R0Y2JseHVJQ0FnSUhOb2IzVnNaRkJ5WlhabGJuUWdQU0J6YUc5MWJHUlFjbVYyWlc1MElIeDhJSE5vYjNWc1pGQnlaWFpsYm5SRVpXWmhkV3gwS0dSbGJIUmhXQ3dnWkdWc2RHRlpLVHRjYmlBZ0lDQnBaaUFvYzJodmRXeGtVSEpsZG1WdWRDQW1KaUFoWlM1amRISnNTMlY1S1NCN1hHNGdJQ0FnSUNCbExuTjBiM0JRY205d1lXZGhkR2x2YmlncE8xeHVJQ0FnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0xtOXVkMmhsWld3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnYVM1bGRtVnVkQzVpYVc1a0tHVnNaVzFsYm5Rc0lDZDNhR1ZsYkNjc0lHMXZkWE5sZDJobFpXeElZVzVrYkdWeUtUdGNiaUFnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnZDJsdVpHOTNMbTl1Ylc5MWMyVjNhR1ZsYkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0JwTG1WMlpXNTBMbUpwYm1Rb1pXeGxiV1Z1ZEN3Z0oyMXZkWE5sZDJobFpXd25MQ0J0YjNWelpYZG9aV1ZzU0dGdVpHeGxjaWs3WEc0Z0lIMWNibjA3WEc1Y2JuWmhjaUIwYjNWamFDQTlJR1oxYm1OMGFXOXVLR2twSUh0Y2JpQWdhV1lnS0NGbGJuWXVjM1Z3Y0c5eWRITlViM1ZqYUNBbUppQWhaVzUyTG5OMWNIQnZjblJ6U1dWUWIybHVkR1Z5S1NCN1hHNGdJQ0FnY21WMGRYSnVPMXh1SUNCOVhHNWNiaUFnZG1GeUlHVnNaVzFsYm5RZ1BTQnBMbVZzWlcxbGJuUTdYRzVjYmlBZ1puVnVZM1JwYjI0Z2MyaHZkV3hrVUhKbGRtVnVkQ2hrWld4MFlWZ3NJR1JsYkhSaFdTa2dlMXh1SUNBZ0lIWmhjaUJ6WTNKdmJHeFViM0FnUFNCTllYUm9MbVpzYjI5eUtHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0tUdGNiaUFnSUNCMllYSWdjMk55YjJ4c1RHVm1kQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNUR1ZtZER0Y2JpQWdJQ0IyWVhJZ2JXRm5ibWwwZFdSbFdDQTlJRTFoZEdndVlXSnpLR1JsYkhSaFdDazdYRzRnSUNBZ2RtRnlJRzFoWjI1cGRIVmtaVmtnUFNCTllYUm9MbUZpY3loa1pXeDBZVmtwTzF4dVhHNGdJQ0FnYVdZZ0tHMWhaMjVwZEhWa1pWa2dQaUJ0WVdkdWFYUjFaR1ZZS1NCN1hHNGdJQ0FnSUNBdkx5QjFjMlZ5SUdseklIQmxjbWhoY0hNZ2RISjVhVzVuSUhSdklITjNhWEJsSUhWd0wyUnZkMjRnZEdobElIQmhaMlZjYmx4dUlDQWdJQ0FnYVdZZ0tGeHVJQ0FnSUNBZ0lDQW9aR1ZzZEdGWklEd2dNQ0FtSmlCelkzSnZiR3hVYjNBZ1BUMDlJR2t1WTI5dWRHVnVkRWhsYVdkb2RDQXRJR2t1WTI5dWRHRnBibVZ5U0dWcFoyaDBLU0I4ZkZ4dUlDQWdJQ0FnSUNBb1pHVnNkR0ZaSUQ0Z01DQW1KaUJ6WTNKdmJHeFViM0FnUFQwOUlEQXBYRzRnSUNBZ0lDQXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2MyVjBJSEJ5WlhabGJuUWdabTl5SUcxdlltbHNaU0JEYUhKdmJXVWdjbVZtY21WemFGeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2QybHVaRzkzTG5OamNtOXNiRmtnUFQwOUlEQWdKaVlnWkdWc2RHRlpJRDRnTUNBbUppQmxibll1YVhORGFISnZiV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2h0WVdkdWFYUjFaR1ZZSUQ0Z2JXRm5ibWwwZFdSbFdTa2dlMXh1SUNBZ0lDQWdMeThnZFhObGNpQnBjeUJ3WlhKb1lYQnpJSFJ5ZVdsdVp5QjBieUJ6ZDJsd1pTQnNaV1owTDNKcFoyaDBJR0ZqY205emN5QjBhR1VnY0dGblpWeHVYRzRnSUNBZ0lDQnBaaUFvWEc0Z0lDQWdJQ0FnSUNoa1pXeDBZVmdnUENBd0lDWW1JSE5qY205c2JFeGxablFnUFQwOUlHa3VZMjl1ZEdWdWRGZHBaSFJvSUMwZ2FTNWpiMjUwWVdsdVpYSlhhV1IwYUNrZ2ZIeGNiaUFnSUNBZ0lDQWdLR1JsYkhSaFdDQStJREFnSmlZZ2MyTnliMnhzVEdWbWRDQTlQVDBnTUNsY2JpQWdJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUdGd2NHeDVWRzkxWTJoTmIzWmxLR1JwWm1abGNtVnVZMlZZTENCa2FXWm1aWEpsYm1ObFdTa2dlMXh1SUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lDMDlJR1JwWm1abGNtVnVZMlZaTzF4dUlDQWdJR1ZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kQ0F0UFNCa2FXWm1aWEpsYm1ObFdEdGNibHh1SUNBZ0lIVndaR0YwWlVkbGIyMWxkSEo1S0drcE8xeHVJQ0I5WEc1Y2JpQWdkbUZ5SUhOMFlYSjBUMlptYzJWMElEMGdlMzA3WEc0Z0lIWmhjaUJ6ZEdGeWRGUnBiV1VnUFNBd08xeHVJQ0IyWVhJZ2MzQmxaV1FnUFNCN2ZUdGNiaUFnZG1GeUlHVmhjMmx1WjB4dmIzQWdQU0J1ZFd4c08xeHVYRzRnSUdaMWJtTjBhVzl1SUdkbGRGUnZkV05vS0dVcElIdGNiaUFnSUNCcFppQW9aUzUwWVhKblpYUlViM1ZqYUdWektTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pTNTBZWEpuWlhSVWIzVmphR1Z6V3pCZE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0F2THlCTllYbGlaU0JKUlNCd2IybHVkR1Z5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ6YUc5MWJHUklZVzVrYkdVb1pTa2dlMXh1SUNBZ0lHbG1JQ2hsTG5CdmFXNTBaWEpVZVhCbElDWW1JR1V1Y0c5cGJuUmxjbFI1Y0dVZ1BUMDlJQ2R3Wlc0bklDWW1JR1V1WW5WMGRHOXVjeUE5UFQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvWlM1MFlYSm5aWFJVYjNWamFHVnpJQ1ltSUdVdWRHRnlaMlYwVkc5MVkyaGxjeTVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9YRzRnSUNBZ0lDQmxMbkJ2YVc1MFpYSlVlWEJsSUNZbVhHNGdJQ0FnSUNCbExuQnZhVzUwWlhKVWVYQmxJQ0U5UFNBbmJXOTFjMlVuSUNZbVhHNGdJQ0FnSUNCbExuQnZhVzUwWlhKVWVYQmxJQ0U5UFNCbExrMVRVRTlKVGxSRlVsOVVXVkJGWDAxUFZWTkZYRzRnSUNBZ0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNCOVhHNWNiaUFnWm5WdVkzUnBiMjRnZEc5MVkyaFRkR0Z5ZENobEtTQjdYRzRnSUNBZ2FXWWdLQ0Z6YUc5MWJHUklZVzVrYkdVb1pTa3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdkRzkxWTJnZ1BTQm5aWFJVYjNWamFDaGxLVHRjYmx4dUlDQWdJSE4wWVhKMFQyWm1jMlYwTG5CaFoyVllJRDBnZEc5MVkyZ3VjR0ZuWlZnN1hHNGdJQ0FnYzNSaGNuUlBabVp6WlhRdWNHRm5aVmtnUFNCMGIzVmphQzV3WVdkbFdUdGNibHh1SUNBZ0lITjBZWEowVkdsdFpTQTlJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dVhHNGdJQ0FnYVdZZ0tHVmhjMmx1WjB4dmIzQWdJVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJR05zWldGeVNXNTBaWEoyWVd3b1pXRnphVzVuVEc5dmNDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdjMmh2ZFd4a1FtVkRiMjV6ZFcxbFpFSjVRMmhwYkdRb2RHRnlaMlYwTENCa1pXeDBZVmdzSUdSbGJIUmhXU2tnZTF4dUlDQWdJR2xtSUNnaFpXeGxiV1Z1ZEM1amIyNTBZV2x1Y3loMFlYSm5aWFFwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJR04xY25OdmNpQTlJSFJoY21kbGREdGNibHh1SUNBZ0lIZG9hV3hsSUNoamRYSnpiM0lnSmlZZ1kzVnljMjl5SUNFOVBTQmxiR1Z0Wlc1MEtTQjdYRzRnSUNBZ0lDQnBaaUFvWTNWeWMyOXlMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWhqYkhNdVpXeGxiV1Z1ZEM1amIyNXpkVzFwYm1jcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMllYSWdjM1I1YkdVZ1BTQm5aWFFvWTNWeWMyOXlLVHRjYmlBZ0lDQWdJSFpoY2lCdmRtVnlabXh2ZHlBOUlGdHpkSGxzWlM1dmRtVnlabXh2ZHl3Z2MzUjViR1V1YjNabGNtWnNiM2RZTENCemRIbHNaUzV2ZG1WeVpteHZkMWxkTG1wdmFXNG9YRzRnSUNBZ0lDQWdJQ2NuWEc0Z0lDQWdJQ0FwTzF4dVhHNGdJQ0FnSUNBdkx5QnBaaUJ6WTNKdmJHeGhZbXhsWEc0Z0lDQWdJQ0JwWmlBb2IzWmxjbVpzYjNjdWJXRjBZMmdvTHloelkzSnZiR3g4WVhWMGJ5a3ZLU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiV0Y0VTJOeWIyeHNWRzl3SUQwZ1kzVnljMjl5TG5OamNtOXNiRWhsYVdkb2RDQXRJR04xY25OdmNpNWpiR2xsYm5SSVpXbG5hSFE3WEc0Z0lDQWdJQ0FnSUdsbUlDaHRZWGhUWTNKdmJHeFViM0FnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnSVNoamRYSnpiM0l1YzJOeWIyeHNWRzl3SUQwOVBTQXdJQ1ltSUdSbGJIUmhXU0ErSURBcElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNBaEtHTjFjbk52Y2k1elkzSnZiR3hVYjNBZ1BUMDlJRzFoZUZOamNtOXNiRlJ2Y0NBbUppQmtaV3gwWVZrZ1BDQXdLVnh1SUNBZ0lDQWdJQ0FnSUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhaaGNpQnRZWGhUWTNKdmJHeE1aV1owSUQwZ1kzVnljMjl5TG5OamNtOXNiRXhsWm5RZ0xTQmpkWEp6YjNJdVkyeHBaVzUwVjJsa2RHZzdYRzRnSUNBZ0lDQWdJR2xtSUNodFlYaFRZM0p2Ykd4TVpXWjBJRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0VvWTNWeWMyOXlMbk5qY205c2JFeGxablFnUFQwOUlEQWdKaVlnWkdWc2RHRllJRHdnTUNrZ0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUNFb1kzVnljMjl5TG5OamNtOXNiRXhsWm5RZ1BUMDlJRzFoZUZOamNtOXNiRXhsWm5RZ0ppWWdaR1ZzZEdGWUlENGdNQ2xjYmlBZ0lDQWdJQ0FnSUNBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamRYSnpiM0lnUFNCamRYSnpiM0l1Y0dGeVpXNTBUbTlrWlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQjBiM1ZqYUUxdmRtVW9aU2tnZTF4dUlDQWdJR2xtSUNoemFHOTFiR1JJWVc1a2JHVW9aU2twSUh0Y2JpQWdJQ0FnSUhaaGNpQjBiM1ZqYUNBOUlHZGxkRlJ2ZFdOb0tHVXBPMXh1WEc0Z0lDQWdJQ0IyWVhJZ1kzVnljbVZ1ZEU5bVpuTmxkQ0E5SUhzZ2NHRm5aVmc2SUhSdmRXTm9MbkJoWjJWWUxDQndZV2RsV1RvZ2RHOTFZMmd1Y0dGblpWa2dmVHRjYmx4dUlDQWdJQ0FnZG1GeUlHUnBabVpsY21WdVkyVllJRDBnWTNWeWNtVnVkRTltWm5ObGRDNXdZV2RsV0NBdElITjBZWEowVDJabWMyVjBMbkJoWjJWWU8xeHVJQ0FnSUNBZ2RtRnlJR1JwWm1abGNtVnVZMlZaSUQwZ1kzVnljbVZ1ZEU5bVpuTmxkQzV3WVdkbFdTQXRJSE4wWVhKMFQyWm1jMlYwTG5CaFoyVlpPMXh1WEc0Z0lDQWdJQ0JwWmlBb2MyaHZkV3hrUW1WRGIyNXpkVzFsWkVKNVEyaHBiR1FvWlM1MFlYSm5aWFFzSUdScFptWmxjbVZ1WTJWWUxDQmthV1ptWlhKbGJtTmxXU2twSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCaGNIQnNlVlJ2ZFdOb1RXOTJaU2hrYVdabVpYSmxibU5sV0N3Z1pHbG1abVZ5Wlc1alpWa3BPMXh1SUNBZ0lDQWdjM1JoY25SUFptWnpaWFFnUFNCamRYSnlaVzUwVDJabWMyVjBPMXh1WEc0Z0lDQWdJQ0IyWVhJZ1kzVnljbVZ1ZEZScGJXVWdQU0J1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JseHVJQ0FnSUNBZ2RtRnlJSFJwYldWSFlYQWdQU0JqZFhKeVpXNTBWR2x0WlNBdElITjBZWEowVkdsdFpUdGNiaUFnSUNBZ0lHbG1JQ2gwYVcxbFIyRndJRDRnTUNrZ2UxeHVJQ0FnSUNBZ0lDQnpjR1ZsWkM1NElEMGdaR2xtWm1WeVpXNWpaVmdnTHlCMGFXMWxSMkZ3TzF4dUlDQWdJQ0FnSUNCemNHVmxaQzU1SUQwZ1pHbG1abVZ5Wlc1alpWa2dMeUIwYVcxbFIyRndPMXh1SUNBZ0lDQWdJQ0J6ZEdGeWRGUnBiV1VnUFNCamRYSnlaVzUwVkdsdFpUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hOb2IzVnNaRkJ5WlhabGJuUW9aR2xtWm1WeVpXNWpaVmdzSUdScFptWmxjbVZ1WTJWWktTa2dlMXh1SUNBZ0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNGdJR1oxYm1OMGFXOXVJSFJ2ZFdOb1JXNWtLQ2tnZTF4dUlDQWdJR2xtSUNocExuTmxkSFJwYm1kekxuTjNhWEJsUldGemFXNW5LU0I3WEc0Z0lDQWdJQ0JqYkdWaGNrbHVkR1Z5ZG1Gc0tHVmhjMmx1WjB4dmIzQXBPMXh1SUNBZ0lDQWdaV0Z6YVc1blRHOXZjQ0E5SUhObGRFbHVkR1Z5ZG1Gc0tHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FTNXBjMGx1YVhScFlXeHBlbVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdZMnhsWVhKSmJuUmxjblpoYkNobFlYTnBibWRNYjI5d0tUdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9JWE53WldWa0xuZ2dKaVlnSVhOd1pXVmtMbmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpiR1ZoY2tsdWRHVnlkbUZzS0dWaGMybHVaMHh2YjNBcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaE5ZWFJvTG1GaWN5aHpjR1ZsWkM1NEtTQThJREF1TURFZ0ppWWdUV0YwYUM1aFluTW9jM0JsWldRdWVTa2dQQ0F3TGpBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWTJ4bFlYSkpiblJsY25aaGJDaGxZWE5wYm1kTWIyOXdLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmhjSEJzZVZSdmRXTm9UVzkyWlNoemNHVmxaQzU0SUNvZ016QXNJSE53WldWa0xua2dLaUF6TUNrN1hHNWNiaUFnSUNBZ0lDQWdjM0JsWldRdWVDQXFQU0F3TGpnN1hHNGdJQ0FnSUNBZ0lITndaV1ZrTG5rZ0tqMGdNQzQ0TzF4dUlDQWdJQ0FnZlN3Z01UQXBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNobGJuWXVjM1Z3Y0c5eWRITlViM1ZqYUNrZ2UxeHVJQ0FnSUdrdVpYWmxiblF1WW1sdVpDaGxiR1Z0Wlc1MExDQW5kRzkxWTJoemRHRnlkQ2NzSUhSdmRXTm9VM1JoY25RcE8xeHVJQ0FnSUdrdVpYWmxiblF1WW1sdVpDaGxiR1Z0Wlc1MExDQW5kRzkxWTJodGIzWmxKeXdnZEc5MVkyaE5iM1psS1R0Y2JpQWdJQ0JwTG1WMlpXNTBMbUpwYm1Rb1pXeGxiV1Z1ZEN3Z0ozUnZkV05vWlc1a0p5d2dkRzkxWTJoRmJtUXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHVnVkaTV6ZFhCd2IzSjBjMGxsVUc5cGJuUmxjaWtnZTF4dUlDQWdJR2xtSUNoM2FXNWtiM2N1VUc5cGJuUmxja1YyWlc1MEtTQjdYRzRnSUNBZ0lDQnBMbVYyWlc1MExtSnBibVFvWld4bGJXVnVkQ3dnSjNCdmFXNTBaWEprYjNkdUp5d2dkRzkxWTJoVGRHRnlkQ2s3WEc0Z0lDQWdJQ0JwTG1WMlpXNTBMbUpwYm1Rb1pXeGxiV1Z1ZEN3Z0ozQnZhVzUwWlhKdGIzWmxKeXdnZEc5MVkyaE5iM1psS1R0Y2JpQWdJQ0FnSUdrdVpYWmxiblF1WW1sdVpDaGxiR1Z0Wlc1MExDQW5jRzlwYm5SbGNuVndKeXdnZEc5MVkyaEZibVFwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZDJsdVpHOTNMazFUVUc5cGJuUmxja1YyWlc1MEtTQjdYRzRnSUNBZ0lDQnBMbVYyWlc1MExtSnBibVFvWld4bGJXVnVkQ3dnSjAxVFVHOXBiblJsY2tSdmQyNG5MQ0IwYjNWamFGTjBZWEowS1R0Y2JpQWdJQ0FnSUdrdVpYWmxiblF1WW1sdVpDaGxiR1Z0Wlc1MExDQW5UVk5RYjJsdWRHVnlUVzkyWlNjc0lIUnZkV05vVFc5MlpTazdYRzRnSUNBZ0lDQnBMbVYyWlc1MExtSnBibVFvWld4bGJXVnVkQ3dnSjAxVFVHOXBiblJsY2xWd0p5d2dkRzkxWTJoRmJtUXBPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNibHh1ZG1GeUlHUmxabUYxYkhSVFpYUjBhVzVuY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2g3WEc0Z0lHaGhibVJzWlhKek9pQmJKMk5zYVdOckxYSmhhV3duTENBblpISmhaeTEwYUhWdFlpY3NJQ2RyWlhsaWIyRnlaQ2NzSUNkM2FHVmxiQ2NzSUNkMGIzVmphQ2RkTEZ4dUlDQnRZWGhUWTNKdmJHeGlZWEpNWlc1bmRHZzZJRzUxYkd3c1hHNGdJRzFwYmxOamNtOXNiR0poY2t4bGJtZDBhRG9nYm5Wc2JDeGNiaUFnYzJOeWIyeHNhVzVuVkdoeVpYTm9iMnhrT2lBeE1EQXdMRnh1SUNCelkzSnZiR3hZVFdGeVoybHVUMlptYzJWME9pQXdMRnh1SUNCelkzSnZiR3haVFdGeVoybHVUMlptYzJWME9pQXdMRnh1SUNCemRYQndjbVZ6YzFOamNtOXNiRmc2SUdaaGJITmxMRnh1SUNCemRYQndjbVZ6YzFOamNtOXNiRms2SUdaaGJITmxMRnh1SUNCemQybHdaVVZoYzJsdVp6b2dkSEoxWlN4Y2JpQWdkWE5sUW05MGFGZG9aV1ZzUVhobGN6b2dabUZzYzJVc1hHNGdJSGRvWldWc1VISnZjR0ZuWVhScGIyNDZJSFJ5ZFdVc1hHNGdJSGRvWldWc1UzQmxaV1E2SURFc1hHNTlLVHNnZlR0Y2JseHVkbUZ5SUdoaGJtUnNaWEp6SUQwZ2UxeHVJQ0FuWTJ4cFkyc3RjbUZwYkNjNklHTnNhV05yVW1GcGJDeGNiaUFnSjJSeVlXY3RkR2gxYldJbk9pQmtjbUZuVkdoMWJXSXNYRzRnSUd0bGVXSnZZWEprT2lCclpYbGliMkZ5WkN4Y2JpQWdkMmhsWld3NklIZG9aV1ZzTEZ4dUlDQjBiM1ZqYURvZ2RHOTFZMmdzWEc1OU8xeHVYRzUyWVhJZ1VHVnlabVZqZEZOamNtOXNiR0poY2lBOUlHWjFibU4wYVc5dUlGQmxjbVpsWTNSVFkzSnZiR3hpWVhJb1pXeGxiV1Z1ZEN3Z2RYTmxjbE5sZEhScGJtZHpLU0I3WEc0Z0lIWmhjaUIwYUdsekpERWdQU0IwYUdsek8xeHVJQ0JwWmlBb0lIVnpaWEpUWlhSMGFXNW5jeUE5UFQwZ2RtOXBaQ0F3SUNrZ2RYTmxjbE5sZEhScGJtZHpJRDBnZTMwN1hHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCbGJHVnRaVzUwSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lHVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0dWc1pXMWxiblFwTzF4dUlDQjlYRzVjYmlBZ2FXWWdLQ0ZsYkdWdFpXNTBJSHg4SUNGbGJHVnRaVzUwTG01dlpHVk9ZVzFsS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R1YnlCbGJHVnRaVzUwSUdseklITndaV05wWm1sbFpDQjBieUJwYm1sMGFXRnNhWHBsSUZCbGNtWmxZM1JUWTNKdmJHeGlZWEluS1R0Y2JpQWdmVnh1WEc0Z0lIUm9hWE11Wld4bGJXVnVkQ0E5SUdWc1pXMWxiblE3WEc1Y2JpQWdaV3hsYldWdWRDNWpiR0Z6YzB4cGMzUXVZV1JrS0dOc2N5NXRZV2x1S1R0Y2JseHVJQ0IwYUdsekxuTmxkSFJwYm1keklEMGdaR1ZtWVhWc2RGTmxkSFJwYm1kektDazdYRzRnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUIxYzJWeVUyVjBkR2x1WjNNcElIdGNiaUFnSUNCMGFHbHpKREV1YzJWMGRHbHVaM05iYTJWNVhTQTlJSFZ6WlhKVFpYUjBhVzVuYzF0clpYbGRPMXh1SUNCOVhHNWNiaUFnZEdocGN5NWpiMjUwWVdsdVpYSlhhV1IwYUNBOUlHNTFiR3c3WEc0Z0lIUm9hWE11WTI5dWRHRnBibVZ5U0dWcFoyaDBJRDBnYm5Wc2JEdGNiaUFnZEdocGN5NWpiMjUwWlc1MFYybGtkR2dnUFNCdWRXeHNPMXh1SUNCMGFHbHpMbU52Ym5SbGJuUklaV2xuYUhRZ1BTQnVkV3hzTzF4dVhHNGdJSFpoY2lCbWIyTjFjeUE5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlHVnNaVzFsYm5RdVkyeGhjM05NYVhOMExtRmtaQ2hqYkhNdWMzUmhkR1V1Wm05amRYTXBPeUI5TzF4dUlDQjJZWElnWW14MWNpQTlJR1oxYm1OMGFXOXVJQ2dwSUhzZ2NtVjBkWEp1SUdWc1pXMWxiblF1WTJ4aGMzTk1hWE4wTG5KbGJXOTJaU2hqYkhNdWMzUmhkR1V1Wm05amRYTXBPeUI5TzF4dVhHNGdJSFJvYVhNdWFYTlNkR3dnUFNCblpYUW9aV3hsYldWdWRDa3VaR2x5WldOMGFXOXVJRDA5UFNBbmNuUnNKenRjYmlBZ2RHaHBjeTVwYzA1bFoyRjBhWFpsVTJOeWIyeHNJRDBnS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMllYSWdiM0pwWjJsdVlXeFRZM0p2Ykd4TVpXWjBJRDBnWld4bGJXVnVkQzV6WTNKdmJHeE1aV1owTzF4dUlDQWdJSFpoY2lCeVpYTjFiSFFnUFNCdWRXeHNPMXh1SUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVEdWbWRDQTlJQzB4TzF4dUlDQWdJSEpsYzNWc2RDQTlJR1ZzWlcxbGJuUXVjMk55YjJ4c1RHVm1kQ0E4SURBN1hHNGdJQ0FnWld4bGJXVnVkQzV6WTNKdmJHeE1aV1owSUQwZ2IzSnBaMmx1WVd4VFkzSnZiR3hNWldaME8xeHVJQ0FnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzRnSUgwcEtDazdYRzRnSUhSb2FYTXVibVZuWVhScGRtVlRZM0p2Ykd4QlpHcDFjM1J0Wlc1MElEMGdkR2hwY3k1cGMwNWxaMkYwYVhabFUyTnliMnhzWEc0Z0lDQWdQeUJsYkdWdFpXNTBMbk5qY205c2JGZHBaSFJvSUMwZ1pXeGxiV1Z1ZEM1amJHbGxiblJYYVdSMGFGeHVJQ0FnSURvZ01EdGNiaUFnZEdocGN5NWxkbVZ1ZENBOUlHNWxkeUJGZG1WdWRFMWhibUZuWlhJb0tUdGNiaUFnZEdocGN5NXZkMjVsY2tSdlkzVnRaVzUwSUQwZ1pXeGxiV1Z1ZEM1dmQyNWxja1J2WTNWdFpXNTBJSHg4SUdSdlkzVnRaVzUwTzF4dVhHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdGSmhhV3dnUFNCa2FYWW9ZMnh6TG1Wc1pXMWxiblF1Y21GcGJDZ25lQ2NwS1R0Y2JpQWdaV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwYUdsekxuTmpjbTlzYkdKaGNsaFNZV2xzS1R0Y2JpQWdkR2hwY3k1elkzSnZiR3hpWVhKWUlEMGdaR2wyS0dOc2N5NWxiR1Z0Wlc1MExuUm9kVzFpS0NkNEp5a3BPMXh1SUNCMGFHbHpMbk5qY205c2JHSmhjbGhTWVdsc0xtRndjR1Z1WkVOb2FXeGtLSFJvYVhNdWMyTnliMnhzWW1GeVdDazdYRzRnSUhSb2FYTXVjMk55YjJ4c1ltRnlXQzV6WlhSQmRIUnlhV0oxZEdVb0ozUmhZbWx1WkdWNEp5d2dNQ2s3WEc0Z0lIUm9hWE11WlhabGJuUXVZbWx1WkNoMGFHbHpMbk5qY205c2JHSmhjbGdzSUNkbWIyTjFjeWNzSUdadlkzVnpLVHRjYmlBZ2RHaHBjeTVsZG1WdWRDNWlhVzVrS0hSb2FYTXVjMk55YjJ4c1ltRnlXQ3dnSjJKc2RYSW5MQ0JpYkhWeUtUdGNiaUFnZEdocGN5NXpZM0p2Ykd4aVlYSllRV04wYVhabElEMGdiblZzYkR0Y2JpQWdkR2hwY3k1elkzSnZiR3hpWVhKWVYybGtkR2dnUFNCdWRXeHNPMXh1SUNCMGFHbHpMbk5qY205c2JHSmhjbGhNWldaMElEMGdiblZzYkR0Y2JpQWdkbUZ5SUhKaGFXeFlVM1I1YkdVZ1BTQm5aWFFvZEdocGN5NXpZM0p2Ykd4aVlYSllVbUZwYkNrN1hHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdFSnZkSFJ2YlNBOUlIQmhjbk5sU1c1MEtISmhhV3hZVTNSNWJHVXVZbTkwZEc5dExDQXhNQ2s3WEc0Z0lHbG1JQ2hwYzA1aFRpaDBhR2x6TG5OamNtOXNiR0poY2xoQ2IzUjBiMjBwS1NCN1hHNGdJQ0FnZEdocGN5NXBjMU5qY205c2JHSmhjbGhWYzJsdVowSnZkSFJ2YlNBOUlHWmhiSE5sTzF4dUlDQWdJSFJvYVhNdWMyTnliMnhzWW1GeVdGUnZjQ0E5SUhSdlNXNTBLSEpoYVd4WVUzUjViR1V1ZEc5d0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjBhR2x6TG1selUyTnliMnhzWW1GeVdGVnphVzVuUW05MGRHOXRJRDBnZEhKMVpUdGNiaUFnZlZ4dUlDQjBhR2x6TG5KaGFXeENiM0prWlhKWVYybGtkR2dnUFZ4dUlDQWdJSFJ2U1c1MEtISmhhV3hZVTNSNWJHVXVZbTl5WkdWeVRHVm1kRmRwWkhSb0tTQXJJSFJ2U1c1MEtISmhhV3hZVTNSNWJHVXVZbTl5WkdWeVVtbG5hSFJYYVdSMGFDazdYRzRnSUM4dklGTmxkQ0J5WVdsc0lIUnZJR1JwYzNCc1lYazZZbXh2WTJzZ2RHOGdZMkZzWTNWc1lYUmxJRzFoY21kcGJuTmNiaUFnYzJWMEtIUm9hWE11YzJOeWIyeHNZbUZ5V0ZKaGFXd3NJSHNnWkdsemNHeGhlVG9nSjJKc2IyTnJKeUI5S1R0Y2JpQWdkR2hwY3k1eVlXbHNXRTFoY21kcGJsZHBaSFJvSUQxY2JpQWdJQ0IwYjBsdWRDaHlZV2xzV0ZOMGVXeGxMbTFoY21kcGJreGxablFwSUNzZ2RHOUpiblFvY21GcGJGaFRkSGxzWlM1dFlYSm5hVzVTYVdkb2RDazdYRzRnSUhObGRDaDBhR2x6TG5OamNtOXNiR0poY2xoU1lXbHNMQ0I3SUdScGMzQnNZWGs2SUNjbklIMHBPMXh1SUNCMGFHbHpMbkpoYVd4WVYybGtkR2dnUFNCdWRXeHNPMXh1SUNCMGFHbHpMbkpoYVd4WVVtRjBhVzhnUFNCdWRXeHNPMXh1WEc0Z0lIUm9hWE11YzJOeWIyeHNZbUZ5V1ZKaGFXd2dQU0JrYVhZb1kyeHpMbVZzWlcxbGJuUXVjbUZwYkNnbmVTY3BLVHRjYmlBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaDBhR2x6TG5OamNtOXNiR0poY2xsU1lXbHNLVHRjYmlBZ2RHaHBjeTV6WTNKdmJHeGlZWEpaSUQwZ1pHbDJLR05zY3k1bGJHVnRaVzUwTG5Sb2RXMWlLQ2Q1SnlrcE8xeHVJQ0IwYUdsekxuTmpjbTlzYkdKaGNsbFNZV2xzTG1Gd2NHVnVaRU5vYVd4a0tIUm9hWE11YzJOeWIyeHNZbUZ5V1NrN1hHNGdJSFJvYVhNdWMyTnliMnhzWW1GeVdTNXpaWFJCZEhSeWFXSjFkR1VvSjNSaFltbHVaR1Y0Snl3Z01DazdYRzRnSUhSb2FYTXVaWFpsYm5RdVltbHVaQ2gwYUdsekxuTmpjbTlzYkdKaGNsa3NJQ2RtYjJOMWN5Y3NJR1p2WTNWektUdGNiaUFnZEdocGN5NWxkbVZ1ZEM1aWFXNWtLSFJvYVhNdWMyTnliMnhzWW1GeVdTd2dKMkpzZFhJbkxDQmliSFZ5S1R0Y2JpQWdkR2hwY3k1elkzSnZiR3hpWVhKWlFXTjBhWFpsSUQwZ2JuVnNiRHRjYmlBZ2RHaHBjeTV6WTNKdmJHeGlZWEpaU0dWcFoyaDBJRDBnYm5Wc2JEdGNiaUFnZEdocGN5NXpZM0p2Ykd4aVlYSlpWRzl3SUQwZ2JuVnNiRHRjYmlBZ2RtRnlJSEpoYVd4WlUzUjViR1VnUFNCblpYUW9kR2hwY3k1elkzSnZiR3hpWVhKWlVtRnBiQ2s3WEc0Z0lIUm9hWE11YzJOeWIyeHNZbUZ5V1ZKcFoyaDBJRDBnY0dGeWMyVkpiblFvY21GcGJGbFRkSGxzWlM1eWFXZG9kQ3dnTVRBcE8xeHVJQ0JwWmlBb2FYTk9ZVTRvZEdocGN5NXpZM0p2Ykd4aVlYSlpVbWxuYUhRcEtTQjdYRzRnSUNBZ2RHaHBjeTVwYzFOamNtOXNiR0poY2xsVmMybHVaMUpwWjJoMElEMGdabUZzYzJVN1hHNGdJQ0FnZEdocGN5NXpZM0p2Ykd4aVlYSlpUR1ZtZENBOUlIUnZTVzUwS0hKaGFXeFpVM1I1YkdVdWJHVm1kQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnZEdocGN5NXBjMU5qY205c2JHSmhjbGxWYzJsdVoxSnBaMmgwSUQwZ2RISjFaVHRjYmlBZ2ZWeHVJQ0IwYUdsekxuTmpjbTlzYkdKaGNsbFBkWFJsY2xkcFpIUm9JRDBnZEdocGN5NXBjMUowYkNBL0lHOTFkR1Z5VjJsa2RHZ29kR2hwY3k1elkzSnZiR3hpWVhKWktTQTZJRzUxYkd3N1hHNGdJSFJvYVhNdWNtRnBiRUp2Y21SbGNsbFhhV1IwYUNBOVhHNGdJQ0FnZEc5SmJuUW9jbUZwYkZsVGRIbHNaUzVpYjNKa1pYSlViM0JYYVdSMGFDa2dLeUIwYjBsdWRDaHlZV2xzV1ZOMGVXeGxMbUp2Y21SbGNrSnZkSFJ2YlZkcFpIUm9LVHRjYmlBZ2MyVjBLSFJvYVhNdWMyTnliMnhzWW1GeVdWSmhhV3dzSUhzZ1pHbHpjR3hoZVRvZ0oySnNiMk5ySnlCOUtUdGNiaUFnZEdocGN5NXlZV2xzV1UxaGNtZHBia2hsYVdkb2RDQTlYRzRnSUNBZ2RHOUpiblFvY21GcGJGbFRkSGxzWlM1dFlYSm5hVzVVYjNBcElDc2dkRzlKYm5Rb2NtRnBiRmxUZEhsc1pTNXRZWEpuYVc1Q2IzUjBiMjBwTzF4dUlDQnpaWFFvZEdocGN5NXpZM0p2Ykd4aVlYSlpVbUZwYkN3Z2V5QmthWE53YkdGNU9pQW5KeUI5S1R0Y2JpQWdkR2hwY3k1eVlXbHNXVWhsYVdkb2RDQTlJRzUxYkd3N1hHNGdJSFJvYVhNdWNtRnBiRmxTWVhScGJ5QTlJRzUxYkd3N1hHNWNiaUFnZEdocGN5NXlaV0ZqYUNBOUlIdGNiaUFnSUNCNE9seHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElEdzlJREJjYmlBZ0lDQWdJQ0FnUHlBbmMzUmhjblFuWEc0Z0lDQWdJQ0FnSURvZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElENDlJSFJvYVhNdVkyOXVkR1Z1ZEZkcFpIUm9JQzBnZEdocGN5NWpiMjUwWVdsdVpYSlhhV1IwYUZ4dUlDQWdJQ0FnSUNBZ0lEOGdKMlZ1WkNkY2JpQWdJQ0FnSUNBZ0lDQTZJRzUxYkd3c1hHNGdJQ0FnZVRwY2JpQWdJQ0FnSUdWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUR3OUlEQmNiaUFnSUNBZ0lDQWdQeUFuYzNSaGNuUW5YRzRnSUNBZ0lDQWdJRG9nWld4bGJXVnVkQzV6WTNKdmJHeFViM0FnUGowZ2RHaHBjeTVqYjI1MFpXNTBTR1ZwWjJoMElDMGdkR2hwY3k1amIyNTBZV2x1WlhKSVpXbG5hSFJjYmlBZ0lDQWdJQ0FnSUNBL0lDZGxibVFuWEc0Z0lDQWdJQ0FnSUNBZ09pQnVkV3hzTEZ4dUlDQjlPMXh1WEc0Z0lIUm9hWE11YVhOQmJHbDJaU0E5SUhSeWRXVTdYRzVjYmlBZ2RHaHBjeTV6WlhSMGFXNW5jeTVvWVc1a2JHVnljeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hvWVc1a2JHVnlUbUZ0WlNrZ2V5QnlaWFIxY200Z2FHRnVaR3hsY25OYmFHRnVaR3hsY2s1aGJXVmRLSFJvYVhNa01TazdJSDBwTzF4dVhHNGdJSFJvYVhNdWJHRnpkRk5qY205c2JGUnZjQ0E5SUUxaGRHZ3VabXh2YjNJb1pXeGxiV1Z1ZEM1elkzSnZiR3hVYjNBcE95QXZMeUJtYjNJZ2IyNVRZM0p2Ykd3Z2IyNXNlVnh1SUNCMGFHbHpMbXhoYzNSVFkzSnZiR3hNWldaMElEMGdaV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBPeUF2THlCbWIzSWdiMjVUWTNKdmJHd2diMjVzZVZ4dUlDQjBhR2x6TG1WMlpXNTBMbUpwYm1Rb2RHaHBjeTVsYkdWdFpXNTBMQ0FuYzJOeWIyeHNKeXdnWm5WdVkzUnBiMjRnS0dVcElIc2djbVYwZFhKdUlIUm9hWE1rTVM1dmJsTmpjbTlzYkNobEtUc2dmU2s3WEc0Z0lIVndaR0YwWlVkbGIyMWxkSEo1S0hSb2FYTXBPMXh1ZlR0Y2JseHVVR1Z5Wm1WamRGTmpjbTlzYkdKaGNpNXdjbTkwYjNSNWNHVXVkWEJrWVhSbElEMGdablZ1WTNScGIyNGdkWEJrWVhSbElDZ3BJSHRjYmlBZ2FXWWdLQ0YwYUdsekxtbHpRV3hwZG1VcElIdGNiaUFnSUNCeVpYUjFjbTQ3WEc0Z0lIMWNibHh1SUNBdkx5QlNaV05oYkdOMVlYUmxJRzVsWjJGMGFYWmxJSE5qY205c2JFeGxablFnWVdScWRYTjBiV1Z1ZEZ4dUlDQjBhR2x6TG01bFoyRjBhWFpsVTJOeWIyeHNRV1JxZFhOMGJXVnVkQ0E5SUhSb2FYTXVhWE5PWldkaGRHbDJaVk5qY205c2JGeHVJQ0FnSUQ4Z2RHaHBjeTVsYkdWdFpXNTBMbk5qY205c2JGZHBaSFJvSUMwZ2RHaHBjeTVsYkdWdFpXNTBMbU5zYVdWdWRGZHBaSFJvWEc0Z0lDQWdPaUF3TzF4dVhHNGdJQzh2SUZKbFkyRnNZM1ZzWVhSbElISmhhV3dnYldGeVoybHVjMXh1SUNCelpYUW9kR2hwY3k1elkzSnZiR3hpWVhKWVVtRnBiQ3dnZXlCa2FYTndiR0Y1T2lBbllteHZZMnNuSUgwcE8xeHVJQ0J6WlhRb2RHaHBjeTV6WTNKdmJHeGlZWEpaVW1GcGJDd2dleUJrYVhOd2JHRjVPaUFuWW14dlkyc25JSDBwTzF4dUlDQjBhR2x6TG5KaGFXeFlUV0Z5WjJsdVYybGtkR2dnUFZ4dUlDQWdJSFJ2U1c1MEtHZGxkQ2gwYUdsekxuTmpjbTlzYkdKaGNsaFNZV2xzS1M1dFlYSm5hVzVNWldaMEtTQXJYRzRnSUNBZ2RHOUpiblFvWjJWMEtIUm9hWE11YzJOeWIyeHNZbUZ5V0ZKaGFXd3BMbTFoY21kcGJsSnBaMmgwS1R0Y2JpQWdkR2hwY3k1eVlXbHNXVTFoY21kcGJraGxhV2RvZENBOVhHNGdJQ0FnZEc5SmJuUW9aMlYwS0hSb2FYTXVjMk55YjJ4c1ltRnlXVkpoYVd3cExtMWhjbWRwYmxSdmNDa2dLMXh1SUNBZ0lIUnZTVzUwS0dkbGRDaDBhR2x6TG5OamNtOXNiR0poY2xsU1lXbHNLUzV0WVhKbmFXNUNiM1IwYjIwcE8xeHVYRzRnSUM4dklFaHBaR1VnYzJOeWIyeHNZbUZ5Y3lCdWIzUWdkRzhnWVdabVpXTjBJSE5qY205c2JGZHBaSFJvSUdGdVpDQnpZM0p2Ykd4SVpXbG5hSFJjYmlBZ2MyVjBLSFJvYVhNdWMyTnliMnhzWW1GeVdGSmhhV3dzSUhzZ1pHbHpjR3hoZVRvZ0oyNXZibVVuSUgwcE8xeHVJQ0J6WlhRb2RHaHBjeTV6WTNKdmJHeGlZWEpaVW1GcGJDd2dleUJrYVhOd2JHRjVPaUFuYm05dVpTY2dmU2s3WEc1Y2JpQWdkWEJrWVhSbFIyVnZiV1YwY25rb2RHaHBjeWs3WEc1Y2JpQWdjSEp2WTJWemMxTmpjbTlzYkVScFptWW9kR2hwY3l3Z0ozUnZjQ2NzSURBc0lHWmhiSE5sTENCMGNuVmxLVHRjYmlBZ2NISnZZMlZ6YzFOamNtOXNiRVJwWm1Zb2RHaHBjeXdnSjJ4bFpuUW5MQ0F3TENCbVlXeHpaU3dnZEhKMVpTazdYRzVjYmlBZ2MyVjBLSFJvYVhNdWMyTnliMnhzWW1GeVdGSmhhV3dzSUhzZ1pHbHpjR3hoZVRvZ0p5Y2dmU2s3WEc0Z0lITmxkQ2gwYUdsekxuTmpjbTlzYkdKaGNsbFNZV2xzTENCN0lHUnBjM0JzWVhrNklDY25JSDBwTzF4dWZUdGNibHh1VUdWeVptVmpkRk5qY205c2JHSmhjaTV3Y205MGIzUjVjR1V1YjI1VFkzSnZiR3dnUFNCbWRXNWpkR2x2YmlCdmJsTmpjbTlzYkNBb1pTa2dlMXh1SUNCcFppQW9JWFJvYVhNdWFYTkJiR2wyWlNrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaVWRsYjIxbGRISjVLSFJvYVhNcE8xeHVJQ0J3Y205alpYTnpVMk55YjJ4c1JHbG1aaWgwYUdsekxDQW5kRzl3Snl3Z2RHaHBjeTVsYkdWdFpXNTBMbk5qY205c2JGUnZjQ0F0SUhSb2FYTXViR0Z6ZEZOamNtOXNiRlJ2Y0NrN1hHNGdJSEJ5YjJObGMzTlRZM0p2Ykd4RWFXWm1LRnh1SUNBZ0lIUm9hWE1zWEc0Z0lDQWdKMnhsWm5RbkxGeHVJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXpZM0p2Ykd4TVpXWjBJQzBnZEdocGN5NXNZWE4wVTJOeWIyeHNUR1ZtZEZ4dUlDQXBPMXh1WEc0Z0lIUm9hWE11YkdGemRGTmpjbTlzYkZSdmNDQTlJRTFoZEdndVpteHZiM0lvZEdocGN5NWxiR1Z0Wlc1MExuTmpjbTlzYkZSdmNDazdYRzRnSUhSb2FYTXViR0Z6ZEZOamNtOXNiRXhsWm5RZ1BTQjBhR2x6TG1Wc1pXMWxiblF1YzJOeWIyeHNUR1ZtZER0Y2JuMDdYRzVjYmxCbGNtWmxZM1JUWTNKdmJHeGlZWEl1Y0hKdmRHOTBlWEJsTG1SbGMzUnliM2tnUFNCbWRXNWpkR2x2YmlCa1pYTjBjbTk1SUNncElIdGNiaUFnYVdZZ0tDRjBhR2x6TG1selFXeHBkbVVwSUh0Y2JpQWdJQ0J5WlhSMWNtNDdYRzRnSUgxY2JseHVJQ0IwYUdsekxtVjJaVzUwTG5WdVltbHVaRUZzYkNncE8xeHVJQ0J5WlcxdmRtVW9kR2hwY3k1elkzSnZiR3hpWVhKWUtUdGNiaUFnY21WdGIzWmxLSFJvYVhNdWMyTnliMnhzWW1GeVdTazdYRzRnSUhKbGJXOTJaU2gwYUdsekxuTmpjbTlzYkdKaGNsaFNZV2xzS1R0Y2JpQWdjbVZ0YjNabEtIUm9hWE11YzJOeWIyeHNZbUZ5V1ZKaGFXd3BPMXh1SUNCMGFHbHpMbkpsYlc5MlpWQnpRMnhoYzNObGN5Z3BPMXh1WEc0Z0lDOHZJSFZ1YzJWMElHVnNaVzFsYm5SelhHNGdJSFJvYVhNdVpXeGxiV1Z1ZENBOUlHNTFiR3c3WEc0Z0lIUm9hWE11YzJOeWIyeHNZbUZ5V0NBOUlHNTFiR3c3WEc0Z0lIUm9hWE11YzJOeWIyeHNZbUZ5V1NBOUlHNTFiR3c3WEc0Z0lIUm9hWE11YzJOeWIyeHNZbUZ5V0ZKaGFXd2dQU0J1ZFd4c08xeHVJQ0IwYUdsekxuTmpjbTlzYkdKaGNsbFNZV2xzSUQwZ2JuVnNiRHRjYmx4dUlDQjBhR2x6TG1selFXeHBkbVVnUFNCbVlXeHpaVHRjYm4wN1hHNWNibEJsY21abFkzUlRZM0p2Ykd4aVlYSXVjSEp2ZEc5MGVYQmxMbkpsYlc5MlpWQnpRMnhoYzNObGN5QTlJR1oxYm1OMGFXOXVJSEpsYlc5MlpWQnpRMnhoYzNObGN5QW9LU0I3WEc0Z0lIUm9hWE11Wld4bGJXVnVkQzVqYkdGemMwNWhiV1VnUFNCMGFHbHpMbVZzWlcxbGJuUXVZMnhoYzNOT1lXMWxYRzRnSUNBZ0xuTndiR2wwS0NjZ0p5bGNiaUFnSUNBdVptbHNkR1Z5S0daMWJtTjBhVzl1SUNodVlXMWxLU0I3SUhKbGRIVnliaUFoYm1GdFpTNXRZWFJqYUNndlhuQnpLRnN0WDEwdUszd3BKQzhwT3lCOUtWeHVJQ0FnSUM1cWIybHVLQ2NnSnlrN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JRWlhKbVpXTjBVMk55YjJ4c1ltRnlPMXh1SWl3aWFXMXdiM0owSUdKdlpIbFRZM0p2Ykd4TWIyTnJJR1p5YjIwZ0oySnZaSGt0YzJOeWIyeHNMV3h2WTJzbk8xeHVhVzF3YjNKMElFZHNhV1JsSUdaeWIyMGdKMEJuYkdsa1pXcHpMMmRzYVdSbEp6dGNibWx0Y0c5eWRDQlFaWEptWldOMFUyTnliMnhzWW1GeUlHWnliMjBnSjNCbGNtWmxZM1F0YzJOeWIyeHNZbUZ5Snp0Y2JseHVZMjl1YzNRZ1pHbHpZV0pzWlVKdlpIbFRZM0p2Ykd3Z1BTQmliMlI1VTJOeWIyeHNURzlqYXk1a2FYTmhZbXhsUW05a2VWTmpjbTlzYkR0Y2JtTnZibk4wSUdWdVlXSnNaVUp2WkhsVFkzSnZiR3dnUFNCaWIyUjVVMk55YjJ4c1RHOWpheTVsYm1GaWJHVkNiMlI1VTJOeWIyeHNPMXh1WTI5dWMzUWdiVzlrWVd3Z1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWJXOWtZV3duS1R0Y2JtTnZibk4wSUhSaGNtZGxkRVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViVzlrWVd4ZlgyTnZiblJsYm5RbktUdGNibU52Ym5OMElHMXZaR0ZzU1cxbklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkxtMXZaR0ZzWDE5cGJXY25LVHRjYm1OdmJuTjBJRzF2WkdGc1ZHbDBiR1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Ylc5a1lXeGZYM1JwZEd4bEp5azdYRzVqYjI1emRDQnRiMlJoYkZSbGVIUkNiRzlqYTNNZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tDY3ViVzlrWVd4ZlgzUmxlSFF0WW14dlkyc25LVHRjYm1OdmJuTjBJRzF2WkdGc1ZtRnNkV1ZVYVhSc1pTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXRiMlJoYkY5ZmRtRnNkV1V0ZEdsMGJHVW5LVHRjYm1OdmJuTjBJRzF2WkdGc1ZtRnNkV1ZKZEdWdGN5QTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29KeTUyWVd4MVpTMXNhWE4wWDE5cGRHVnRKeWs3WEc1amIyNXpkQ0J0YjJSaGJFRmtaQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeTV0YjJSaGJGOWZZV1JrTFdKc2IyTnJKeWs3WEc1amIyNXpkQ0J0YjJSaGJFRmtaRXhsWm5RZ1BTQmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjdWJXOWtZV3hmWDJGa1pDMXNaV1owSnlrN1hHNWNibU52Ym5OMElIUnlhV2RuWlhKeklEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDZ25MbTF2WkdGc0xYUnlhV2RuWlhJbktUdGNibHh1Wm5WdVkzUnBiMjRnZEc5bloyeGxUVzlrWVd3b0tTQjdYRzRnSUcxdlpHRnNMbU5zWVhOelRHbHpkQzUwYjJkbmJHVW9KMmx6TFdGamRHbDJaU2NwTzF4dVhHNGdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lHMXZaR0ZzU1cxbkxtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCOUxDQXlNREFwTzF4dUlDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNiaUFnSUNCdGIyUmhiRlJwZEd4bExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCOUxDQXlNREFwTzF4dVhHNGdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lHMXZaR0ZzVkdWNGRFSnNiMk5yYzFzd1hTNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHBjeTFoWTNScGRtVW5LVHRjYmlBZ2ZTd2dOREF3S1R0Y2JpQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQjdYRzRnSUNBZ2JXOWtZV3hVWlhoMFFteHZZMnR6V3pGZExtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNCOUxDQTJNREFwTzF4dUlDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNiaUFnSUNCdGIyUmhiRlpoYkhWbFZHbDBiR1V1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYVhNdFlXTjBhWFpsSnlrN1hHNGdJSDBzSURnd01DazdYRzRnSUZ4dUlDQnRiMlJoYkZaaGJIVmxTWFJsYlhNdVptOXlSV0ZqYUNnb1pXd3NJR2twSUQwK0lIdGNiaUFnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUh0Y2JpQWdJQ0FnSUdWc0xtTnNZWE56VEdsemRDNTBiMmRuYkdVb0oybHpMV0ZqZEdsMlpTY3BPMXh1SUNBZ0lIMHNJRGd3TUNBcklHa2dLaUF4TURBcE8xeHVJQ0I5S1R0Y2JseHVJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjYmlBZ0lDQnRiMlJoYkVGa1pDNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHBjeTFoWTNScGRtVW5LVHRjYmlBZ2ZTd2dOakF3S1R0Y2JseHVJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjYmlBZ0lDQnRiMlJoYkVGa1pFeGxablF1WTJ4aGMzTk1hWE4wTG5SdloyZHNaU2duYVhNdFlXTjBhWFpsSnlrN1hHNGdJSDBzSURnd01DazdYRzVjYmlBZ2FXWWdLRzF2WkdGc0xtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5Z25hWE10WVdOMGFYWmxKeWtwSUh0Y2JpQWdJQ0JrYVhOaFlteGxRbTlrZVZOamNtOXNiQ2gwWVhKblpYUkZiR1Z0Wlc1MEtUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmxibUZpYkdWQ2IyUjVVMk55YjJ4c0tIUmhjbWRsZEVWc1pXMWxiblFwTzF4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlIZHBibVJ2ZDA5dVEyeHBZMnNvWlhabGJuUXBJSHRjYmlBZ2FXWWdLR1YyWlc1MExuUmhjbWRsZENBOVBUMGdiVzlrWVd3cElIdGNiaUFnSUNCMGIyZG5iR1ZOYjJSaGJDZ3BPMXh1SUNCOVhHNTlYRzVjYm5SeWFXZG5aWEp6TG1admNrVmhZMmdvS0dWc0tTQTlQaUI3WEc0Z0lHVnNMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dLR1VwSUQwK0lIdGNiaUFnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnZEc5bloyeGxUVzlrWVd3b0tUdGNiaUFnZlNrN1hHNTlLVHRjYmx4dWQybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnZDJsdVpHOTNUMjVEYkdsamF5azdYRzVjYmk4dklHNWxkeUJIYkdsa1pTZ25MbWRzYVdSbEp5d2dlMXh1THk4Z0lDQndaWEpXYVdWM09pQXhNQ3hjYmk4dklIMHBMbTF2ZFc1MEtDazdYRzVjYmx4dVkyOXVjM1FnWTI5dWRHRnBibVZ5SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduTG5SaFp5MXNhWE4wSnlrN1hHNWpiMjV6ZENCd2N5QTlJRzVsZHlCUVpYSm1aV04wVTJOeWIyeHNZbUZ5S0dOdmJuUmhhVzVsY2lrN1hHNHZMeUJqYjI1emRDQnRjeUE5SUc1bGR5QlFaWEptWldOMFUyTnliMnhzWW1GeUtHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnk1M2NtRndjR1Z5SnlrcE8xeHVYRzVrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLQ2N1ZEdGbkxXeHBjM1JmWDJ4cGJtc25LUzVtYjNKRllXTm9LQ2hsYkNrZ1BUNGdlMXh1SUNCbGJDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZGpiR2xqYXljc0lDaGxLU0E5UGlCN1hHNGdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dUlDQjlLVHRjYm4wcE8xeHVYRzVqYjI1emRDQnRiMlJoYkV4cGMzUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY3ViVzlrWVd3dGJHbHpkQ2NwTzF4dVkyOXVjM1FnZEdGeVoyVjBSV3hsYldWdWRFeHBjM1FnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2N1Ylc5a1lXd3RiR2x6ZEY5ZlkyOXVkR1Z1ZENjcE8xeHVZMjl1YzNRZ2RISnBaMmRsY25OTWFYTjBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2duTG0xdlpHRnNMV3hwYzNRdGRISnBaMmRsY2ljcE8xeHVYRzVtZFc1amRHbHZiaUIwYjJkbmJHVk5iMlJoYkV4cGMzUW9LU0I3WEc0Z0lHMXZaR0ZzVEdsemRDNWpiR0Z6YzB4cGMzUXVkRzluWjJ4bEtDZHBjeTFoWTNScGRtVW5LVHRjYmlBZ2FXWWdLRzF2WkdGc1RHbHpkQzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vSjJsekxXRmpkR2wyWlNjcEtTQjdYRzRnSUNBZ1pHbHpZV0pzWlVKdlpIbFRZM0p2Ykd3b2RHRnlaMlYwUld4bGJXVnVkRXhwYzNRcE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHVnVZV0pzWlVKdlpIbFRZM0p2Ykd3b2RHRnlaMlYwUld4bGJXVnVkRXhwYzNRcE8xeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJSGRwYm1SdmQwOXVRMnhwWTJ0TWFYTjBLR1YyWlc1MEtTQjdYRzRnSUdsbUlDaGxkbVZ1ZEM1MFlYSm5aWFFnUFQwOUlHMXZaR0ZzVEdsemRDa2dlMXh1SUNBZ0lIUnZaMmRzWlUxdlpHRnNUR2x6ZENncE8xeHVJQ0I5WEc1OVhHNWNiblJ5YVdkblpYSnpUR2x6ZEM1bWIzSkZZV05vS0NobGJDa2dQVDRnZTF4dUlDQmxiQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJQ2hsS1NBOVBpQjdYRzRnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVJQ0FnSUhSdloyZHNaVTF2WkdGc1RHbHpkQ2dwTzF4dUlDQjlLVHRjYm4wcE8xeHVYRzUzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQjNhVzVrYjNkUGJrTnNhV05yVEdsemRDazdYRzVjYmx4dVhHNWNiaUpkTENKdVlXMWxjeUk2V3lKa1pXWnBibVVpTENKMGFHbHpJaXdpWjJWMElpd2lkRzlKYm5RaUxDSmthWE5oWW14bFFtOWtlVk5qY205c2JDSXNJbUp2WkhsVFkzSnZiR3hNYjJOcklpd2laVzVoWW14bFFtOWtlVk5qY205c2JDSXNJbTF2WkdGc0lpd2laRzlqZFcxbGJuUWlMQ0p4ZFdWeWVWTmxiR1ZqZEc5eUlpd2lkR0Z5WjJWMFJXeGxiV1Z1ZENJc0ltMXZaR0ZzU1cxbklpd2liVzlrWVd4VWFYUnNaU0lzSW0xdlpHRnNWR1Y0ZEVKc2IyTnJjeUlzSW5GMVpYSjVVMlZzWldOMGIzSkJiR3dpTENKdGIyUmhiRlpoYkhWbFZHbDBiR1VpTENKdGIyUmhiRlpoYkhWbFNYUmxiWE1pTENKdGIyUmhiRUZrWkNJc0ltMXZaR0ZzUVdSa1RHVm1kQ0lzSW5SeWFXZG5aWEp6SWl3aWRHOW5aMnhsVFc5a1lXd2lMQ0pqYkdGemMweHBjM1FpTENKMGIyZG5iR1VpTENKbWIzSkZZV05vSWl3aVpXd2lMQ0pwSWl3aVkyOXVkR0ZwYm5NaUxDSjNhVzVrYjNkUGJrTnNhV05ySWl3aVpYWmxiblFpTENKMFlYSm5aWFFpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVpTSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2lkMmx1Wkc5M0lpd2lZMjl1ZEdGcGJtVnlJaXdpY0hNaUxDSlFaWEptWldOMFUyTnliMnhzWW1GeUlpd2liVzlrWVd4TWFYTjBJaXdpZEdGeVoyVjBSV3hsYldWdWRFeHBjM1FpTENKMGNtbG5aMlZ5YzB4cGMzUWlMQ0owYjJkbmJHVk5iMlJoYkV4cGMzUWlMQ0ozYVc1a2IzZFBia05zYVdOclRHbHpkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3p0QlFVRkJMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4VlFVRlZMRVZCUVVVc1QwRkJUMEVzVTBGQlRTeEZRVUZGUVN4VFFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRFFTeFRRVUZOTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVGQlFTdENMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEJRVUZ6UXl4RFFVRkRMRU5CUVVORExHTkJRVWtzUTBGQlF5eFRRVUZUTEU5QlFVOHNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVjBGQlZ5eEZRVUZGTEU5QlFVOHNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEU5QlFVOHNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVU1zUTBGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUzBGQlN5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2RJUVVGblNDeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVNc1EwRkJReXhKUVVGSkxFVkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4MVFrRkJkVUlzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFTkJRVU1zUzBGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4TFFVRkxMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zT0VkQlFUaEhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlF5eEZRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPenM3T3p0QlEwRjRla1k3T3pzN096dEJRVTFCTEVsQlFVa3NVVUZCVVN4SFFVRkhPenM3T3pzN096czdPMFZCVldJc1NVRkJTU3hGUVVGRkxGRkJRVkU3T3pzN096czdSVUZQWkN4UFFVRlBMRVZCUVVVc1EwRkJRenM3T3pzN096dEZRVTlXTEU5QlFVOHNSVUZCUlN4RFFVRkRPenM3T3pzN096czdPenRGUVZkV0xFOUJRVThzUlVGQlJTeERRVUZET3pzN096czdPMFZCVDFZc1IwRkJSeXhGUVVGRkxFVkJRVVU3T3pzN096czdSVUZQVUN4UlFVRlJMRVZCUVVVc1MwRkJTenM3T3pzN096dEZRVTltTEZWQlFWVXNSVUZCUlN4SlFVRkpPenM3T3pzN08wVkJUMmhDTEZGQlFWRXNSVUZCUlN4SlFVRkpPenM3T3pzN096czdPMFZCVldRc1MwRkJTeXhGUVVGRkxFdEJRVXM3T3pzN096czdSVUZQV2l4alFVRmpMRVZCUVVVc1JVRkJSVHM3T3pzN096dEZRVTlzUWl4aFFVRmhMRVZCUVVVc1IwRkJSenM3T3pzN096dEZRVTlzUWl4UlFVRlJMRVZCUVVVc1MwRkJTenM3T3pzN096dEZRVTltTEZWQlFWVXNSVUZCUlN4SFFVRkhPenM3T3pzN08wVkJUMllzVlVGQlZTeEZRVUZGTEVWQlFVVTdPenM3T3pzN1JVRlBaQ3hwUWtGQmFVSXNSVUZCUlN4SFFVRkhPenM3T3pzN08wVkJUM1JDTEUxQlFVMHNSVUZCUlN4SlFVRkpPenM3T3pzN08wVkJUMW9zWTBGQll5eEZRVUZGTEVkQlFVYzdPenM3T3pzN1JVRlBia0lzYlVKQlFXMUNMRVZCUVVVc2JVTkJRVzFET3pzN096czdPMFZCVDNoRUxGRkJRVkVzUlVGQlJTeEZRVUZGT3pzN096czdPenM3T3p0RlFWZGFMRk5CUVZNc1JVRkJSU3hMUVVGTE96czdPenM3T3pzN096czdPenRGUVdOb1FpeEpRVUZKTEVWQlFVVXNRMEZCUXpzN096czdPenM3T3pzN1JVRlhVQ3hYUVVGWExFVkJRVVVzUlVGQlJUczdPenM3T3pzN1JVRlJaaXhQUVVGUExFVkJRVVU3U1VGRFVDeFRRVUZUTEVWQlFVVTdUVUZEVkN4SFFVRkhMRVZCUVVVc1dVRkJXVHROUVVOcVFpeEhRVUZITEVWQlFVVXNXVUZCV1R0TFFVTnNRanRKUVVORUxFMUJRVTBzUlVGQlJTeGxRVUZsTzBsQlEzWkNMRkZCUVZFc1JVRkJSU3hwUWtGQmFVSTdTVUZETTBJc1UwRkJVeXhGUVVGRkxHdENRVUZyUWp0SlFVTTNRaXhSUVVGUkxFVkJRVVVzYVVKQlFXbENPMGxCUXpOQ0xGVkJRVlVzUlVGQlJTeHhRa0ZCY1VJN1NVRkRha01zVTBGQlV5eEZRVUZGTEhWQ1FVRjFRanRKUVVOc1F5eFhRVUZYTEVWQlFVVXNjMEpCUVhOQ08wbEJRMjVETEdGQlFXRXNSVUZCUlN4M1FrRkJkMEk3UjBGRGVFTTdRMEZEUml4RFFVRkRPenM3T3pzN096dEJRVkZHTEZOQlFWTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSVHRGUVVOcVFpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRPME5CUTNaRE96dEJRVVZFTEVsQlFVa3NUMEZCVHl4SFFVRkhMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4UlFVRlJMRXRCUVVzc1VVRkJVU3hIUVVGSExGVkJRVlVzUjBGQlJ5eEZRVUZGTzBWQlEycEhMRTlCUVU4c1QwRkJUeXhIUVVGSExFTkJRVU03UTBGRGJrSXNSMEZCUnl4VlFVRlZMRWRCUVVjc1JVRkJSVHRGUVVOcVFpeFBRVUZQTEVkQlFVY3NTVUZCU1N4UFFVRlBMRTFCUVUwc1MwRkJTeXhWUVVGVkxFbEJRVWtzUjBGQlJ5eERRVUZETEZkQlFWY3NTMEZCU3l4TlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFMUJRVTBzUTBGQlF5eFRRVUZUTEVkQlFVY3NVVUZCVVN4SFFVRkhMRTlCUVU4c1IwRkJSeXhEUVVGRE8wTkJRemxJTEVOQlFVTTdPMEZCUlVZc1NVRkJTU3hqUVVGakxFZEJRVWNzVlVGQlZTeFJRVUZSTEVWQlFVVXNWMEZCVnl4RlFVRkZPMFZCUTNCRUxFbEJRVWtzUlVGQlJTeFJRVUZSTEZsQlFWa3NWMEZCVnl4RFFVRkRMRVZCUVVVN1NVRkRkRU1zVFVGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXl4dFEwRkJiVU1zUTBGQlF5eERRVUZETzBkQlF6RkVPME5CUTBZc1EwRkJRenM3UVVGRlJpeEpRVUZKTEZkQlFWY3NSMEZCUnl4WlFVRlpPMFZCUXpWQ0xGTkJRVk1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJUdEpRVU4yUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdE5RVU55UXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdUVUZETVVJc1ZVRkJWU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNWVUZCVlN4SlFVRkpMRXRCUVVzc1EwRkJRenROUVVOMlJDeFZRVUZWTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenROUVVNdlFpeEpRVUZKTEU5QlFVOHNTVUZCU1N4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdUVUZEZEVRc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVWQlFVVXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dExRVU16UkR0SFFVTkdPenRGUVVWRUxFOUJRVThzVlVGQlZTeFhRVUZYTEVWQlFVVXNWVUZCVlN4RlFVRkZMRmRCUVZjc1JVRkJSVHRKUVVOeVJDeEpRVUZKTEZWQlFWVXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wbEJRM0JGTEVsQlFVa3NWMEZCVnl4RlFVRkZMR2RDUVVGblFpeERRVUZETEZkQlFWY3NSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRKUVVNMVJDeFBRVUZQTEZkQlFWY3NRMEZCUXp0SFFVTndRaXhEUVVGRE8wTkJRMGdzUlVGQlJTeERRVUZET3p0QlFVVktMRWxCUVVrc1VVRkJVU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVsQlFVa3NWVUZCVlN4TlFVRk5MRVZCUVVVN1JVRkRhRVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1NVRkRla01zU1VGQlNTeE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE96dEpRVVV4UWl4TFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJUdE5RVU4wUWl4SlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3VVVGRGNrUXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UFFVTXpRanRMUVVOR08wZEJRMFk3TzBWQlJVUXNUMEZCVHl4TlFVRk5MRU5CUVVNN1EwRkRaaXhEUVVGRE96dEJRVVZHTEVsQlFVa3NSMEZCUnl4SFFVRkhMRk5CUVZNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVN4RlFVRkZPMFZCUTJwRUxFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NSVUZCUlN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dEZRVU5xUkN4SlFVRkpMRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zZDBKQlFYZENMRU5CUVVNc1RVRkJUU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZET3p0RlFVVTNSQ3hKUVVGSkxFbEJRVWtzUzBGQlN5eFRRVUZUTEVWQlFVVTdTVUZEZEVJc1NVRkJTU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenM3U1VGRk0wTXNTVUZCU1N4TlFVRk5MRXRCUVVzc1NVRkJTU3hGUVVGRk8wMUJRMjVDTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUTJ4Q0xFMUJRVTA3VFVGRFRDeFBRVUZQTEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzB0QlEzaERPMGRCUTBZc1RVRkJUU3hKUVVGSkxFOUJRVThzU1VGQlNTeEpRVUZKTEVWQlFVVTdTVUZETVVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzBkQlEyNUNMRTFCUVUwN1NVRkRUQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPenRKUVVWMFFpeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN1RVRkRlRUlzVDBGQlR5eFRRVUZUTEVOQlFVTTdTMEZEYkVJN08wbEJSVVFzVDBGQlR5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wZEJRemxDTzBOQlEwWXNRMEZCUXpzN1FVRkZSaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFZRVUZWTEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVN1JVRkROME1zU1VGQlNTeFBRVUZQTEZWQlFWVXNTMEZCU3l4VlFVRlZMRWxCUVVrc1ZVRkJWU3hMUVVGTExFbEJRVWtzUlVGQlJUdEpRVU16UkN4TlFVRk5MRWxCUVVrc1UwRkJVeXhEUVVGRExEQkVRVUV3UkN4SFFVRkhMRTlCUVU4c1ZVRkJWU3hEUVVGRExFTkJRVU03UjBGRGNrYzdPMFZCUlVRc1VVRkJVU3hEUVVGRExGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1NVRkJTU3hWUVVGVkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBsQlEzSkZMRmRCUVZjc1JVRkJSVHROUVVOWUxFdEJRVXNzUlVGQlJTeFJRVUZSTzAxQlEyWXNWVUZCVlN4RlFVRkZMRXRCUVVzN1RVRkRha0lzVVVGQlVTeEZRVUZGTEVsQlFVazdUVUZEWkN4WlFVRlpMRVZCUVVVc1NVRkJTVHRMUVVOdVFqdEhRVU5HTEVOQlFVTXNRMEZCUXp0RlFVTklMRWxCUVVrc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVkQlFVY3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlZTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRk5CUVZNc1IwRkJSeXhWUVVGVkxFTkJRVU03UTBGRGRrZ3NRMEZCUXpzN1FVRkZSaXhKUVVGSkxIbENRVUY1UWl4SFFVRkhMRlZCUVZVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJUdEZRVU53UkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRk8wbEJRMVFzVFVGQlRTeEpRVUZKTEdOQlFXTXNRMEZCUXl3eVJFRkJNa1FzUTBGQlF5eERRVUZETzBkQlEzWkdPenRGUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEU5QlFVOHNTVUZCU1N4TFFVRkxMRkZCUVZFc1NVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN5eFZRVUZWTEVOQlFVTXNSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wTkJRM1pHTEVOQlFVTTdPenM3T3pzN096dEJRVk5HTEZOQlFWTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSVHRGUVVOd1FpeFBRVUZQTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenREUVVONFFqczdPenM3T3pzN08wRkJVMFFzVTBGQlV5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZPMFZCUTNSQ0xFOUJRVThzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPME5CUXpGQ096czdPenM3T3p0QlFWRkVMRk5CUVZNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJUdEZRVU4yUWl4UFFVRlBMRTlCUVU4c1MwRkJTeXhMUVVGTExGRkJRVkVzUTBGQlF6dERRVU5zUXpzN096czdPenM3T3p0QlFWVkVMRk5CUVZNc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJUdEZRVU4yUWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhQUVVGUExFdEJRVXNzUzBGQlN5eFhRVUZYTEVkQlFVY3NWMEZCVnl4SFFVRkhMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdSVUZGZGtVc1QwRkJUeXhKUVVGSkxFdEJRVXNzVlVGQlZTeEpRVUZKTEVsQlFVa3NTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF6dERRVU0xUkRzN096czdPenM3UVVGUlJDeFRRVUZUTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVN1JVRkRka0lzVDBGQlR5eFBRVUZQTEV0QlFVc3NTMEZCU3l4UlFVRlJMRU5CUVVNN1EwRkRiRU03T3pzN096czdPMEZCVVVRc1UwRkJVeXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBWQlEzcENMRTlCUVU4c1QwRkJUeXhMUVVGTExFdEJRVXNzVlVGQlZTeERRVUZETzBOQlEzQkRPenM3T3pzN096dEJRVkZFTEZOQlFWTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSVHRGUVVNeFFpeFBRVUZQTEU5QlFVOHNTMEZCU3l4TFFVRkxMRmRCUVZjc1EwRkJRenREUVVOeVF6czdPenM3T3pzN1FVRlJSQ3hUUVVGVExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVTdSVUZEZEVJc1QwRkJUeXhMUVVGTExFTkJRVU1zVjBGQlZ5eExRVUZMTEV0QlFVc3NRMEZCUXp0RFFVTndRenM3T3pzN096czdPenM3UVVGWFJDeFRRVUZUTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUdEZRVU40UXl4SlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBWQlJYQkNMRXRCUVVzc1NVRkJTU3hKUVVGSkxFbEJRVWtzVlVGQlZTeEZRVUZGTzBsQlF6TkNMRWxCUVVrc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZPMDFCUTJoRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRMUVVOb1JTeE5RVUZOTzAxQlEwd3NTVUZCU1N4RFFVRkRMRGhDUVVFNFFpeERRVUZETEVOQlFVTTdTMEZEZEVNN1IwRkRSanM3UlVGRlJDeExRVUZMTEVsQlFVa3NTMEZCU3l4SlFVRkpMRlZCUVZVc1JVRkJSVHRKUVVNMVFpeEpRVUZKTEZWQlFWVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdUVUZEZGtNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMHRCUXpOQ08wZEJRMFk3TzBWQlJVUXNUMEZCVHl4VlFVRlZMRU5CUVVNN1EwRkRia0k3T3pzN096czdPenM3UVVGVlJDeFRRVUZUTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxGVkJRVlVzUlVGQlJUdEZRVU55UXl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNN1EwRkRPVU03T3pzN096czdPMEZCVVVRc1UwRkJVeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTzBWQlEzSkNMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZPMGxCUTNCRUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBsQlJXUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBkQlEyaENMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UTBGRFVqczdPenM3T3pzN08wRkJVMFFzVTBGQlV5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSVHRGUVVONFF5eEpRVUZKTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXpzN096czdPenRGUVU4dlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3U1VGRGRFTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZET3p0SlFVVnVSU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8wMUJRMmhFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eEZRVUZGTEVWQlFVVXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRMUVVOc1J6dEhRVU5HT3p0RlFVVkVMRWxCUVVrc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0SlFVTXhReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEhRVUZITEZGQlFWRXNRMEZCUXl4RlFVRkZMRVZCUVVVc1VVRkJVU3hEUVVGRExGZEJRVmNzUlVGQlJTeFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1IwRkRhRVk3TzBWQlJVUXNUMEZCVHl4UFFVRlBMRU5CUVVNN1EwRkRhRUk3TzBGQlJVUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1dVRkJXVHM3T3pzN08wVkJUVEZDTEZOQlFWTXNVMEZCVXl4SFFVRkhPMGxCUTI1Q0xFbEJRVWtzVFVGQlRTeEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTndSaXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRPenRKUVVWb1F5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVOeVFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU03UjBGRGJFTTdPenM3T3pzN096czdSVUZWUkN4WFFVRlhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03U1VGRGRFSXNSMEZCUnl4RlFVRkZMRWxCUVVrN1NVRkRWQ3hMUVVGTExFVkJRVVVzVTBGQlV5eEZRVUZGTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSVHROUVVOcVF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOc1FpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRWUVVOeVF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0VFFVTTFRanRQUVVOR096czdUVUZIUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU4wUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0UFFVTjZRanM3TzAxQlIwUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3pzN1RVRkhha1FzVDBGQlR6dFJRVU5NTEUxQlFVMHNSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenRWUVVONFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYkVNN1QwRkRSaXhEUVVGRE8wdEJRMGc3T3pzN096czdPenRIUVZOR0xFVkJRVVU3U1VGRFJDeEhRVUZITEVWQlFVVXNUVUZCVFR0SlFVTllMRXRCUVVzc1JVRkJSU3hUUVVGVExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZPMDFCUTI1RExFbEJRVWtzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTJ4Q0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMVZCUTNKRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFOQlF6bENPMDlCUTBZN096dE5RVWRFTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM1JETEU5QlFVODdUMEZEVWpzN08wMUJSMFFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEpRVUZKTEVWQlFVVTdVVUZEZWtNc1NVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXp0UFFVTnlRaXhEUVVGRExFTkJRVU03UzBGRFNqdEhRVU5HTEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUTBvc1QwRkJUeXhUUVVGVExFTkJRVU03UTBGRGJFSXNSVUZCUlN4RFFVRkRPenRCUVVWS0xFbEJRVWtzUzBGQlN5eEhRVUZITEZsQlFWazdPenM3T3pzN1JVRlBkRUlzVTBGQlV5eExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMGxCUTNaQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTnlSaXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPenRKUVVVMVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVOaUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlN4RFFVRkRPenRKUVVVeFFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVOMFFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenRKUVVONlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRmxCUVZrc1EwRkJReXhSUVVGUkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEYUVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenRIUVVOd1F6czdPenM3T3pzN096dEZRVlZFTEZkQlFWY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRKUVVOc1FpeEhRVUZITEVWQlFVVXNUMEZCVHp0SlFVTmFMRXRCUVVzc1JVRkJSU3hUUVVGVExGRkJRVkVzUjBGQlJ6dE5RVU42UWl4SlFVRkpMRlZCUVZVc1IwRkJSeXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03TzAxQlJYaEdMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPenROUVVVM1FpeEpRVUZKTEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSVHRSUVVONFFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRQUVVNMVF5eE5RVUZOTzFGQlEwd3NTVUZCU1N4RFFVRkRMREpEUVVFeVF5eERRVUZETEVOQlFVTTdUMEZEYmtRN08wMUJSVVFzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03TzAxQlJUVkNMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMkk3T3pzN096czdPenRIUVZOR0xFVkJRVVU3U1VGRFJDeEhRVUZITEVWQlFVVXNVVUZCVVR0SlFVTmlMRXRCUVVzc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU4yUWl4SlFVRkpMRmxCUVZrc1IwRkJSeXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03TzAxQlJURkdMRWxCUVVrc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEZRVUZGTzFGQlEzcENMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzV1VGQldTeERRVUZETzA5QlEzaENMRTFCUVUwN1VVRkRUQ3hKUVVGSkxFTkJRVU1zTWtOQlFUSkRMRU5CUVVNc1EwRkJRenRQUVVOdVJEczdUVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRMUVVOaU96czdPenM3T3pzN1IwRlRSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEZGQlFWRTdTVUZEWWl4TFFVRkxMRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VFVGRGRrSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE96dE5RVVYwUml4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRE96dE5RVVYwUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVVUZEZEVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPMDlCUXk5Q096dE5RVVZFTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZET3p0TlFVVjJRaXhQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pT3pzN096czdPenM3T3pzN096dEhRV05HTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1NVRkJTVHRKUVVOVUxFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVN1RVRkRNVUlzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZET3p0TlFVVXhRaXhQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pT3pzN096czdPenM3UjBGVFJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRTFCUVUwN1NVRkRXQ3hMUVVGTExFVkJRVVVzVTBGQlV5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMDFCUXpkQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wMUJRemRDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXpzN1RVRkZOVUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRk5CUVZNN1NVRkRaQ3hMUVVGTExFVkJRVVVzVTBGQlV5eFBRVUZQTEVkQlFVYzdUVUZEZUVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN08wMUJSWGhDTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN096czdPenM3T3p0SFFWTkdMRVZCUVVVN1NVRkRSQ3hIUVVGSExFVkJRVVVzVFVGQlRUdEpRVU5ZTEV0QlFVc3NSVUZCUlN4VFFVRlRMRWxCUVVrc1IwRkJSenROUVVOeVFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wMUJSWHBHTEVsQlFVa3NVVUZCVVN4RlFVRkZPMUZCUTFvc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRPMDlCUTI1RE96dE5RVVZFTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZET3p0TlFVVnlRaXhQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pT3pzN096czdPenRIUVZGR0xFVkJRVVU3U1VGRFJDeEhRVUZITEVWQlFVVXNUMEZCVHp0SlFVTmFMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXpzN1RVRkZkRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWWpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRk5CUVZNN1NVRkRaQ3hMUVVGTExFVkJRVVVzVTBGQlV5eFBRVUZQTEVkQlFVYzdUVUZEZUVJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMDFCUlhKQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdPenM3T3pzN08wZEJVVVlzUlVGQlJUdEpRVU5FTEVkQlFVY3NSVUZCUlN4UlFVRlJPMGxCUTJJc1MwRkJTeXhGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzWkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZET3p0TlFVVjBRaXhQUVVGUExFbEJRVWtzUTBGQlF6dExRVU5pT3pzN096czdPenM3TzBkQlZVWXNSVUZCUlR0SlFVTkVMRWRCUVVjc1JVRkJSU3hKUVVGSk8wbEJRMVFzUzBGQlN5eEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVU3VFVGRGFrTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPenROUVVVelFpeFBRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTmlPenM3T3pzN096czdSMEZUUml4RlFVRkZPMGxCUTBRc1IwRkJSeXhGUVVGRkxGRkJRVkU3U1VGRFlpeExRVUZMTEVWQlFVVXNVMEZCVXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRk8wMUJRek5DTEU5QlFVOHNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETzB0QlEzQkRPenM3T3pzN096dEhRVkZHTEVWQlFVVTdTVUZEUkN4SFFVRkhMRVZCUVVVc1ZVRkJWVHRKUVVObUxFZEJRVWNzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTnlRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTTdTMEZEYUVJN096czdPenM3T3p0SlFWTkVMRWRCUVVjc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVTdUVUZEZEVJc1NVRkJTU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdVVUZEWml4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFBRVU5pTEUxQlFVMDdVVUZEVEN4SlFVRkpMRU5CUVVNc2RVTkJRWFZETEVOQlFVTXNRMEZCUXp0UFFVTXZRenRMUVVOR096czdPenM3T3p0SFFWRkdMRVZCUVVVN1NVRkRSQ3hIUVVGSExFVkJRVVVzVDBGQlR6dEpRVU5hTEVkQlFVY3NSVUZCUlN4VFFVRlRMRTFCUVUwc1IwRkJSenROUVVOeVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1MwRkRhRUk3T3pzN096czdPMGxCVVVRc1IwRkJSeXhGUVVGRkxGTkJRVk1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlR0TlFVTjBRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOd1FqczdPenM3T3pzN1IwRlJSaXhGUVVGRk8wbEJRMFFzUjBGQlJ5eEZRVUZGTEUxQlFVMDdTVUZEV0N4SFFVRkhMRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VFVGRGNrSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF6dExRVU16UWpzN096czdPenM3UjBGUlJpeEZRVUZGTzBsQlEwUXNSMEZCUnl4RlFVRkZMRlZCUVZVN1NVRkRaaXhIUVVGSExFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEY2tJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETzB0QlEyaENPenM3T3pzN096dEpRVkZFTEVkQlFVY3NSVUZCUlN4VFFVRlRMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVU3VFVGRE0wSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETzB0QlEzQkNPMGRCUTBZc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRFNpeFBRVUZQTEV0QlFVc3NRMEZCUXp0RFFVTmtMRVZCUVVVc1EwRkJRenM3UVVGRlNpeFRRVUZUTEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUdEZRVU4yUXl4SlFVRkpMRWRCUVVjc1IwRkJSenM3T3pzN08wbEJUVklzUzBGQlN5eEZRVUZGTEZOQlFWTXNTMEZCU3l4SFFVRkhPMDFCUTNSQ0xFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMHRCUTJwQ096czdPenM3T3p0SlFWRkVMRWxCUVVrc1JVRkJSU3hUUVVGVExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdUVUZEZUVJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZET3p0TlFVVnFRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTnVRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdPMUZCUldoQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPenRSUVVWcVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdPMUZCUlhKRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXpzN1VVRkZha0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3p0UlFVVTVRaXhWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpPMVZCUTNSRExFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpsRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRaUVVWcVFpeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdWMEZEZGtNN08xVkJSVVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3p0VlFVVnlReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdVMEZEYUVJc1EwRkJReXhEUVVGRE8wOUJRMG83UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hUUVVGVExFVkJRVVVzVTBGQlV5eFRRVUZUTEVkQlFVYzdUVUZET1VJc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVazdWVUZEYUVJc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdUVUZEZWtJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVczdWVUZEYkVJc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdPenROUVVjdlFpeEpRVUZKTEdOQlFXTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdUVUZGYkVVc1VVRkJVU3hUUVVGVE8xRkJRMllzUzBGQlN5eEhRVUZITzFWQlEwNHNTVUZCU1N4TFFVRkxMRXRCUVVzc1IwRkJSeXhGUVVGRk8xbEJRMnBDTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRE8xZEJRM1JDTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGRrSXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzJOQlEzWkVMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZET3p0alFVVm1MRXRCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEycENPenRaUVVWRUxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xZEJRemxDTEUxQlFVMHNTVUZCU1N4alFVRmpMRVZCUVVVN1dVRkRla0lzUzBGQlN5eERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdWMEZET1VRc1RVRkJUVHRaUVVOTUxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WFFVTm1PMVZCUTBRc1RVRkJUVHM3VVVGRlVpeExRVUZMTEVkQlFVYzdWVUZEVGl4SlFVRkpMRXRCUVVzc1MwRkJTeXhIUVVGSExFVkJRVVU3V1VGRGFrSXNTMEZCU3l4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU03VjBGRGFrSXNUVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU42UWl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVTdZMEZEZGtRc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMk5CUldZc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTTdZVUZEZEVJN08xbEJSVVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03VjBGRGFFTXNUVUZCVFN4SlFVRkpMR05CUVdNc1JVRkJSVHRaUVVONlFpeExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFhRVU53UkN4TlFVRk5PMWxCUTB3c1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFkQlEyWTdWVUZEUkN4TlFVRk5PenRSUVVWU0xFdEJRVXNzUjBGQlJ6dFZRVU5PTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8xVkJRM0JDTEUxQlFVMDdUMEZEVkR0TFFVTkdPenM3T3pzN096dEpRVkZFTEU5QlFVOHNSVUZCUlN4VFFVRlRMRTlCUVU4c1IwRkJSenROUVVNeFFpeFBRVUZQTEV0QlFVc3NRMEZCUXl4TFFVRkxMRXRCUVVzc1EwRkJReXhEUVVGRE8wdEJRekZDT3pzN096czdPenRKUVZGRUxFdEJRVXNzUlVGQlJTeFRRVUZUTEV0QlFVc3NSMEZCUnp0TlFVTjBRaXhQUVVGUExFdEJRVXNzUTBGQlF5eExRVUZMTEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRMUVVOd1F6czdPenM3T3pzN08wbEJVMFFzVVVGQlVTeEZRVUZGTEZOQlFWTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1JVRkJSVHROUVVOeVF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEV0QlFVc3NVMEZCVXl4RFFVRkRPMHRCUTNKRU8wZEJRMFlzUTBGQlF6czdSVUZGUml4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJUczdPenM3TzBsQlRXeENMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU03UzBGRGFFSTdPenM3T3pzN08wbEJVVVFzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSVHROUVVOMlFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhPMUZCUTFJc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVNM1FpeExRVUZMTEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU03VDBGRE4wTXNRMEZCUXp0TFFVTklPMGRCUTBZc1EwRkJReXhEUVVGRE96dEZRVVZJTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1VVRkJVU3hGUVVGRk96czdPenM3TzBsQlQzQkNMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dE5RVU5zUWl4SlFVRkpMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETzAxQlF6bENMRWxCUVVrc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJRenM3T3pzN08wMUJUVE5ETEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4TFFVRkxMRkZCUVZFc1NVRkJTU3hSUVVGUkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFGQlF6ZEZMRTlCUVU4c1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VDBGRE4wVTdPMDFCUlVRc1QwRkJUeXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEyNUNPMGRCUTBZc1EwRkJReXhEUVVGRE96dEZRVVZJTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1VVRkJVU3hGUVVGRk96czdPenM3U1VGTmNFSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOb1FqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExFZEJRVWNzUTBGQlF6dERRVU5hT3pzN096czdPMEZCVDBRc1UwRkJVeXhIUVVGSExFZEJRVWM3UlVGRFlpeFBRVUZQTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UTBGRE4wSTdPenM3T3pzN096czdPenM3UVVGaFJDeFRRVUZUTEZGQlFWRXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJUdEZRVU55UXl4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03VFVGRGFFSXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJRenROUVVOb1FpeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRPMDFCUTJJc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETzBWQlEzQkNMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6dEZRVU5xUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUjBGQlJ5eEZRVUZGTEVOQlFVTTdPMFZCUlROQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEZOQlFWTXNTMEZCU3l4SFFVRkhPMGxCUXpOQ0xGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYWtRc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU5tTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnVReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wZEJRM0pETEVOQlFVTTdPMFZCUlVZc1NVRkJTU3hUUVVGVExFZEJRVWNzVTBGQlV5eFRRVUZUTEVkQlFVYzdTVUZEYmtNc1NVRkJTU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEWml4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEV0QlFVc3NTMEZCU3l4RlFVRkZMRkZCUVZFc1IwRkJSeXhGUVVGRkxFTkJRVU03U1VGRE1VUXNTVUZCU1N4VFFVRlRMRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTjJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEyWXNTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJRenRKUVVOcVFpeEpRVUZKTEZOQlFWTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1UwRkJVeXhIUVVGSExFbEJRVWtzUlVGQlJUdE5RVU4wUXl4SlFVRkpMRTlCUVU4c1JVRkJSVHRSUVVOWUxGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0UlFVTjBRaXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzA5QlEyaENPMDFCUTBRc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6dE5RVU5rTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TlFVTnVReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wdEJRM0pETEUxQlFVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVVVGQlVTeExRVUZMTEV0QlFVc3NSVUZCUlR0TlFVTnFSQ3hQUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRMUVVONFF6dEpRVU5FTEU5QlFVOHNUVUZCVFN4RFFVRkRPMGRCUTJZc1EwRkJRenM3UlVGRlJpeFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMRmxCUVZrN1NVRkROMElzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNSQ0xGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEWWl4UFFVRlBMRWRCUVVjc1QwRkJUeXhIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSMEZEYWtNc1EwRkJRenM3UlVGRlJpeFBRVUZQTEZOQlFWTXNRMEZCUXp0RFFVTnNRanM3UVVGRlJDeEpRVUZKTEZkQlFWY3NSMEZCUnp0RlFVTm9RaXhIUVVGSExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNZVUZCWVN4RFFVRkRPMFZCUTJ4RExFZEJRVWNzUlVGQlJTeERRVUZETEdGQlFXRXNSVUZCUlN4WlFVRlpMRU5CUVVNN1EwRkRia01zUTBGQlF6czdRVUZGUml4VFFVRlRMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlR0RlFVTjRReXhKUVVGSkxFbEJRVWtzUjBGQlJ6czdPenM3T3pzN1NVRlJWQ3hMUVVGTExFVkJRVVVzVTBGQlV5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZPMDFCUXpWQ0xFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSMEZCUnl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VVVGRGFrUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTTFRaXhKUVVGSkxGTkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJRenM3VVVGRk0wTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xVkJRMWdzUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVU14UkN4TlFVRk5PMVZCUTB3c1MwRkJTeXhEUVVGRExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU4yUXpzN1VVRkZSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRWUVVNelFpeExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzFOQlF6RkVMRTFCUVUwN1ZVRkRUQ3hMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEzWkRPMDlCUTBZN1MwRkRSanM3T3pzN096czdPMGxCVTBRc1RVRkJUU3hGUVVGRkxGTkJRVk1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlR0TlFVTTVRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRMnBFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTTdPMUZCUlRWQ0xFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NSVUZCUlN4RFFVRkRPMUZCUTNSQ0xFdEJRVXNzUTBGQlF5eFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMDlCUTNoQ08wdEJRMFk3UjBGRFJpeERRVUZET3p0RlFVVkdMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGT3pzN096czdTVUZOY0VJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRiRU03UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3pzN1NVRlBia0lzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPMDFCUTJ4Q0xFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTnVSRHRIUVVOR0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVlVzUlVGQlJUczdPenM3T3p0SlFVOTJRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN08wMUJSWEpETEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMHRCUXpkRE8wZEJRMFlzUTBGQlF5eERRVUZET3pzN096czdPMFZCVDBnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEdGQlFXRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zV1VGQldUdEpRVU40UkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wZEJRemxETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVklzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1dVRkJXVHRKUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMGRCUXk5RExFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRWxCUVVrc1EwRkJRenREUVVOaU96czdPenM3T3p0QlFWRkVMRk5CUVZNc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJUdEZRVU4wUWl4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTzBsQlF6TkNMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUTI1RExFbEJRVWtzVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXpzN1NVRkZha0lzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVU3VFVGRE0wSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJVU3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4RlFVRkZPMUZCUTJ4RExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1QwRkRha0k3UzBGRFJqczdTVUZGUkN4UFFVRlBMRTlCUVU4c1EwRkJRenRIUVVOb1FqczdSVUZGUkN4UFFVRlBMRVZCUVVVc1EwRkJRenREUVVOWU96czdPenM3T3p0QlFWRkVMRk5CUVZNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJUdEZRVU51UWl4SlFVRkpMRWxCUVVrc1NVRkJTU3hKUVVGSkxGbEJRVmtzVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlR0SlFVTTVReXhQUVVGUExFbEJRVWtzUTBGQlF6dEhRVU5pT3p0RlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8wTkJRMlE3TzBGQlJVUXNTVUZCU1N4alFVRmpMRWRCUVVjc2VVSkJRWGxDTEVOQlFVTTdPMEZCUlM5RExGTkJRVk1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVN1JVRkRhRU1zU1VGQlNTeEpRVUZKTEVkQlFVYzdPenM3T3p0SlFVMVVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6dE5RVU4wUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdUVUZETTBJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dE5RVU55UkN4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFdEJRVXNzUlVGQlJUdFJRVU4wUml4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdUMEZEY2tVc1EwRkJReXhEUVVGRE8wdEJRMG83UjBGRFJpeERRVUZET3p0RlFVVkdMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdTVUZOYmtJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dExRVU5vUWpzN096czdPenM3U1VGUlJDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8wMUJRMjVDTEVsQlFVa3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRMllzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VDBGREwwSTdPMDFCUlVRc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdVVUZEV2l4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFBRVU5pTEUxQlFVMDdVVUZEVEN4SlFVRkpMRU5CUVVNc01rTkJRVEpETEVOQlFVTXNRMEZCUXp0UFFVTnVSRHRMUVVOR08wZEJRMFlzUTBGQlF5eERRVUZET3p0RlFVVklMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGT3pzN096czdTVUZOY0VJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF6dExRVU5vUWpzN096czdPenM3U1VGUlJDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8wMUJRMjVDTEVsQlFVa3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRMW9zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1QwRkRZaXhOUVVGTk8xRkJRMHdzU1VGQlNTeERRVUZETERKRFFVRXlReXhIUVVGSExHTkJRV01zUjBGQlJ5eGhRVUZoTEVOQlFVTXNRMEZCUXp0UFFVTndSanRMUVVOR08wZEJRMFlzUTBGQlF5eERRVUZET3p0RlFVVklMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVTBGQlV5eEZRVUZGT3pzN096czdTVUZOZEVJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRMMEk3UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhKUVVGSkxFTkJRVU03UTBGRFlqczdRVUZGUkN4VFFVRlRMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlR0RlFVTjRReXhKUVVGSkxFbEJRVWtzUjBGQlJ6czdPenM3TzBsQlRWUXNTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTTdTMEZEYkVNN1IwRkRSaXhEUVVGRE96dEZRVVZHTEUxQlFVMHNRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRk96czdPenM3U1VGTmNFSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOb1FqczdPenM3T3pzN08wbEJVMFFzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSVHROUVVOMlFpeEpRVUZKTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVOdVFpeExRVUZMTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdVVUZEYmtNc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wOUJRMnhETEUxQlFVMDdVVUZEVEN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzA5QlEzUkNPenROUVVWRUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPMHRCUTJwQ08wZEJRMFlzUTBGQlF5eERRVUZET3p0RlFVVklMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGT3pzN096czdTVUZOZGtJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdUVUZEZGtJc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN08wMUJSWEpETEVsQlFVa3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRMjVDTEU5QlFVOHNTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNN1QwRkRka1E3TzAxQlJVUXNUMEZCVHl4TFFVRkxMRWRCUVVjc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dExRVU0xUWp0SFFVTkdMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlJTeFpRVUZaTzBsQlF6RkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dEhRVU5rTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExFbEJRVWtzUTBGQlF6dERRVU5pT3p0QlFVVkVMRk5CUVZNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPMFZCUTNoRExFbEJRVWtzU1VGQlNTeEhRVUZIT3pzN096czdTVUZOVkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFZEJRVWM3VFVGRGRFSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRFlqczdPenM3T3pzN08wbEJVMFFzU1VGQlNTeEZRVUZGTEZOQlFWTXNTVUZCU1N4SFFVRkhPMDFCUTNCQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXpzN1RVRkZha0lzU1VGQlNTeE5RVUZOTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenROUVVWdVJpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRenM3VFVGRmNrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3VVVGRGJFSXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTE8wOUJRM0pDTEVOQlFVTXNRMEZCUXpzN1RVRkZTQ3hWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpPMUZCUTNSRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMVZCUTNoQ0xGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNTMEZCU3p0VFFVTjBRaXhEUVVGRExFTkJRVU03VDBGRFNpeERRVUZETEVOQlFVTTdTMEZEU2p0SFFVTkdMRU5CUVVNN08wVkJSVVlzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVN096czdPenRKUVUxeVFpeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1RVRkRiRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPMHRCUTJoQ096czdPenM3T3p0SlFWRkVMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVTdUVUZEZGtJc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUTJ4RU8wZEJRMFlzUTBGQlF5eERRVUZET3p0RlFVVklMRTFCUVUwc1EwRkJReXhKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGT3pzN096czdTVUZOZUVJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVOc1JEdEhRVU5HTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlRzN096czdPMGxCVFhCQ0xFZEJRVWNzUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0TlFVTnNRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMDFCUTNwQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN08wMUJSUzlDTEVsQlFVa3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdVVUZEYkVNc1QwRkJUeXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETzA5QlF6TkNPenROUVVWRUxFOUJRVThzVTBGQlV5eEhRVUZITEUxQlFVMHNRMEZCUXp0TFFVTXpRanRIUVVOR0xFTkJRVU1zUTBGQlF6czdPenM3T3p0RlFVOUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVc1dVRkJXVHRKUVVNM1F5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1IwRkRZaXhEUVVGRExFTkJRVU03TzBWQlJVZ3NUMEZCVHl4SlFVRkpMRU5CUVVNN1EwRkRZanM3UVVGRlJDeFRRVUZUTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUdEZRVU42UXl4SlFVRkpMRXRCUVVzc1IwRkJSenM3T3pzN08wbEJUVllzVjBGQlZ5eEZRVUZGTEZOQlFWTXNWMEZCVnl4SFFVRkhPMDFCUTJ4RExFbEJRVWtzVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE96dE5RVVZ3UXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU4wUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF6dFBRVU5vUkR0TFFVTkdPenM3T3pzN096dEpRVkZFTEZsQlFWa3NSVUZCUlN4VFFVRlRMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVU3VFVGRE4wTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF6dExRVU12UkRzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzU1VGQlNTeE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03TzAxQlJYQkRMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEzUkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRQUVVNMVFqczdUVUZGUkN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVNeFF6dEhRVU5HTEVOQlFVTTdPMFZCUlVZc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVTdPenM3T3p0SlFVMTBRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN1MwRkRkRU03UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenM3T3p0SlFVMXlRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1MwRkRla003UjBGRFJpeERRVUZETEVOQlFVTTdPMFZCUlVnc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeGhRVUZoTEVWQlFVVTdPenM3T3p0SlFVMHpRaXhIUVVGSExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdUVUZEYkVJc1QwRkJUeXhMUVVGTExFTkJRVU1zVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03UzBGRGVFWTdSMEZEUml4RFFVRkRMRU5CUVVNN08wVkJSVWdzVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4WlFVRlpMRVZCUVVVN096czdPenRKUVUweFFpeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1RVRkRiRUlzVDBGQlR5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMHRCUTI1SE8wZEJRMFlzUTBGQlF5eERRVUZET3pzN096czdPenRGUVZGSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4alFVRmpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZETVVRc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBsQlEzQkNMRXRCUVVzc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF6dEhRVU4wUWl4RFFVRkRMRU5CUVVNN096czdPenRGUVUxSUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRmxCUVZrN1NVRkRMMElzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMGRCUTJoQ0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4UFFVRlBMRXRCUVVzc1EwRkJRenREUVVOa096dEJRVVZFTEZOQlFWTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGTzBWQlEzcERMRWxCUVVrc1MwRkJTeXhIUVVGSE96czdPenM3TzBsQlQxWXNTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03TzAxQlJUVkNMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dE5RVU5xUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03TzAxQlJXNUNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdTMEZETlVJN096czdPenM3TzBsQlVVUXNVMEZCVXl4RlFVRkZMRk5CUVZNc1UwRkJVeXhIUVVGSE8wMUJRemxDTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMnBHT3pzN096czdPenRKUVZGRUxGZEJRVmNzUlVGQlJTeFRRVUZUTEZkQlFWY3NSMEZCUnp0TlFVTnNReXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenROUVVOeVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wMUJSV2hFTEVsQlFVa3NTMEZCU3l4RlFVRkZPMUZCUTFRc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE96dFJRVVY2UXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNUMEZCVHl4RlFVRkZPMVZCUTNwRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFRRVU12UXl4RFFVRkRMRU5CUVVNN1QwRkRTanRMUVVOR096czdPenM3T3p0SlFWRkVMR0ZCUVdFc1JVRkJSU3hUUVVGVExHRkJRV0VzUjBGQlJ6dE5RVU4wUXl4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXpzN1RVRkZja01zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZET3p0TlFVVndSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hQUVVGUExFVkJRVVU3VVVGRGFFUXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMDlCUXk5RExFTkJRVU1zUTBGQlF6dExRVU5LTzBkQlEwWXNRMEZCUXpzN096czdPenRGUVU5R0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzV1VGQldUdEpRVU16UXl4TFFVRkxMRU5CUVVNc1lVRkJZU3hGUVVGRkxFTkJRVU03UjBGRGRrSXNRMEZCUXl4RFFVRkRPenM3T3pzN08wVkJUMGdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zUlVGQlJTeFpRVUZaTzBsQlF6RkRMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dEhRVU5tTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNXVUZCV1R0SlFVTnNReXhMUVVGTExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdSMEZEY2tJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNTMEZCU3l4RFFVRkRPME5CUTJRN08wRkJSVVFzVTBGQlV5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVU3UlVGRE1VTXNTVUZCU1N4TlFVRk5MRWRCUVVjN096czdTVUZKV0N4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFZEJRVWM3VFVGRGRFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU03TzAxQlJXaENMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNSVUZCUlR0UlFVTTFRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRQUVVNM1FqdExRVU5HT3pzN096czdPenRKUVZGRUxFOUJRVThzUlVGQlJTeFRRVUZUTEU5QlFVOHNSMEZCUnp0TlFVTXhRaXhKUVVGSkxFdEJRVXNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdUVUZEYmtZc1NVRkJTU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1RVRkRjRU1zU1VGQlNTeGxRVUZsTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFN1ZVRkRhRU1zVDBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXl4UFFVRlBPMVZCUTJwRExFOUJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTXNUMEZCVHl4RFFVRkRPenM3VFVGSGRFTXNTVUZCU1N4bFFVRmxMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1RVRkROME1zU1VGQlNTeEpRVUZKTEVkQlFVY3NUMEZCVHl4SFFVRkhMR1ZCUVdVc1EwRkJRenROUVVOeVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0TlFVTnNReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03TzAxQlJUbENMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRSUVVONlJTeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRWUVVOeVF5eEpRVUZKTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPenRWUVVWeVF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdPMVZCUlhoRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1UwRkRia0k3TzFGQlJVUXNTMEZCU3l4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3VlVGRGRFTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenM3VlVGRmNrTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPenRWUVVWNlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM1pDTzA5QlEwWTdPMDFCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRFpEczdPenM3T3pzN1NVRlJSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZUVJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TlFVTjJRaXhKUVVGSkxHZENRVUZuUWl4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSk8xVkJRMnhETEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eFBRVUZQTzFWQlEyeERMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4TlFVRk5MRU5CUVVNN096dE5RVWR5UXl4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VFVGRGVFTXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03VFVGRE4wTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dE5RVVUzUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU4wUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMDlCUTJoRE96dE5RVVZFTEV0QlFVc3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xRkJRemRETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wOUJReTlET3p0TlFVVkVMRXRCUVVzc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTzFGQlF6TkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXp0UFFVTTNSRHRMUVVOR096czdPenM3T3p0SlFWRkVMRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU40UWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZET3pzN1RVRkhka0lzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1VVRkRja01zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMDlCUXk5RE8wdEJRMFk3UjBGRFJpeERRVUZET3p0RlFVVkdMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdTVUZOY2tJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJRenRMUVVOd1JqdEhRVU5HTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNXVUZCV1R0SlFVTTVRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEYUVJc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBsQlEyWXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wZEJRMnBDTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eGpRVUZqTEVWQlFVVXNXVUZCV1R0SlFVTndReXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1RVRkROVUlzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMHRCUTJwQ08wZEJRMFlzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeFpRVUZaTzBsQlF5OUNMRTFCUVUwc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEhRVU5xUWl4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eE5RVUZOTEVOQlFVTTdRMEZEWmpzN1FVRkZSQ3hKUVVGSkxGbEJRVmtzUjBGQlJ5eFpRVUZaT3pzN08wVkJTVGRDTEZOQlFWTXNXVUZCV1N4SFFVRkhPMGxCUTNSQ0xFbEJRVWtzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVTjJSaXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEZsQlFWa3NRMEZCUXl4RFFVRkRPenRKUVVWdVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJRenRIUVVNMVFqczdPenM3T3pzN096czdPenRGUVdGRUxGZEJRVmNzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTjZRaXhIUVVGSExFVkJRVVVzU1VGQlNUdEpRVU5VTEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlR0TlFVTjBReXhKUVVGSkxFOUJRVThzUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTU3hUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdPMDFCUlhoR0xFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZPMUZCUTNCQ0xFMUJRVTBzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMDlCUTI1Q096dE5RVVZFTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRM1JETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPenRSUVVWd1F5eEZRVUZGTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03VDBGRGNFVTdTMEZEUmpzN096czdPenM3T3p0SFFWVkdMRVZCUVVVN1NVRkRSQ3hIUVVGSExFVkJRVVVzUzBGQlN6dEpRVU5XTEV0QlFVc3NSVUZCUlN4VFFVRlRMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeEZRVUZGTzAxQlF6bENMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFGQlEzQkNMRTFCUVUwc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzA5QlEyNUNPenROUVVWRUxFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMUZCUTNSRExFVkJRVVVzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRQUVVOeVJUdExRVU5HT3pzN096czdPenRIUVZGR0xFVkJRVVU3U1VGRFJDeEhRVUZITEVWQlFVVXNVMEZCVXp0SlFVTmtMRXRCUVVzc1JVRkJSU3hUUVVGVExFOUJRVThzUjBGQlJ6dE5RVU40UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03UzBGRGRrSTdSMEZEUml4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVOS0xFOUJRVThzV1VGQldTeERRVUZETzBOQlEzSkNMRVZCUVVVc1EwRkJRenM3UVVGRlNpeFRRVUZUTEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFMUJRVTBzUlVGQlJUczdPenM3TzBWQlRURkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzV1VGQldTeEZRVUZGTEVOQlFVTTdPMFZCUldoRExFbEJRVWtzVFVGQlRTeEhRVUZIT3pzN08wbEJTVmdzUzBGQlN5eEZRVUZGTEZOQlFWTXNTMEZCU3l4SFFVRkhPMDFCUTNSQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0TFFVTmlPenM3T3pzN096czdTVUZUUkN4SlFVRkpMRVZCUVVVc1UwRkJVeXhKUVVGSkxFZEJRVWM3VFVGRGNFSXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeEZRVUZGTEZGQlFWRXNRMEZCUXl4WlFVRlpPMUZCUXk5RExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1QwRkRka0lzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03UzBGRE9VSTdPenM3T3pzN08wbEJVVVFzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNoQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wdEJRemxDTzBkQlEwWXNRMEZCUXpzN096czdPMFZCVFVZc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNXVUZCV1R0SlFVTXZRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEYUVJc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBkQlEyeENMRU5CUVVNc1EwRkJRenM3UlVGRlNDeFBRVUZQTEUxQlFVMHNRMEZCUXp0RFFVTm1PenRCUVVWRUxFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEZEVNc1NVRkJTU3huUWtGQlowSXNSMEZCUnp0RlFVTnlRaXhIUVVGSExFVkJRVVVzUjBGQlJ6dEZRVU5TTEVkQlFVY3NSVUZCUlN4SFFVRkhPMFZCUTFJc1IwRkJSeXhGUVVGRkxFZEJRVWM3UTBGRFZDeERRVUZET3p0QlFVVkdMRk5CUVZNc1UwRkJVeXhGUVVGRkxFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4RlFVRkZPMFZCUXpkRExFbEJRVWtzVTBGQlV5eEhRVUZIT3pzN096czdTVUZOWkN4TFFVRkxMRVZCUVVVc1UwRkJVeXhMUVVGTExFZEJRVWM3VFVGRGRFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNRMEZCUXp0TFFVTjJRenM3T3pzN096czdPMGxCVTBRc1QwRkJUeXhGUVVGRkxGTkJRVk1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlR0TlFVTnFReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6czdUVUZGYUVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTJ4Q0xFOUJRVThzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFBRVU16UkRzN1RVRkZSQ3hQUVVGUExFOUJRVThzUTBGQlF6dExRVU5vUWpzN096czdPenM3TzBsQlUwUXNSVUZCUlN4RlFVRkZMRk5CUVZNc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU42UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFdEJRVXNzVTBGQlV5eERRVUZETzB0QlEycERPenM3T3pzN096dEpRVkZFTEZGQlFWRXNSVUZCUlN4VFFVRlRMRkZCUVZFc1IwRkJSenROUVVNMVFpeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOc1JqczdPenM3T3pzN1NVRlJSQ3hYUVVGWExFVkJRVVVzVTBGQlV5eFhRVUZYTEVkQlFVYzdUVUZEYkVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEY2tZN1IwRkRSaXhEUVVGRE96dEZRVVZHTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1QwRkJUeXhGUVVGRk96czdPenM3U1VGTmVrSXNSMEZCUnl4RlFVRkZMRk5CUVZNc1IwRkJSeXhIUVVGSE8wMUJRMnhDTEU5QlFVOHNVMEZCVXl4RFFVRkRMRVZCUVVVc1EwRkJRenRMUVVOeVFqczdPenM3T3pzN08wbEJVMFFzUjBGQlJ5eEZRVUZGTEZOQlFWTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSVHROUVVOMlFpeEpRVUZKTEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSVHRSUVVONFF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRenRQUVVOMFFpeE5RVUZOTzFGQlEwd3NTVUZCU1N4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVTTdUMEZEYUVRN1MwRkRSanRIUVVOR0xFTkJRVU1zUTBGQlF6czdPenM3T3p0RlFVOUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1dVRkJXVHRKUVVNelF5eFRRVUZUTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1IwRkRla0lzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGRkJRVkVzUlVGQlJTeFpRVUZaTzBsQlF6bENMRk5CUVZNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dEhRVU51UWl4RFFVRkRMRU5CUVVNN096czdPenM3UlVGUFNDeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZEYUVRc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETzBkQlEzUkNMRU5CUVVNc1EwRkJRenM3UlVGRlNDeFBRVUZQTEZOQlFWTXNRMEZCUXp0RFFVTnNRanM3T3pzN096czdPMEZCVTBRc1UwRkJVeXhIUVVGSExFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlR0RlFVTXZRaXhQUVVGUE96czdPenM3TzBsQlQwd3NUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU5xUXl4SlFVRkpMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTJ4RExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTTdUMEZEYmtJN08wMUJSVVFzVDBGQlR5eFRRVUZUTEVOQlFVTTdTMEZEYkVJN1IwRkRSaXhEUVVGRE8wTkJRMGc3T3pzN096czdPenRCUVZORUxGTkJRVk1zUjBGQlJ5eEZRVUZGTEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVN1JVRkRMMElzVDBGQlR6czdPenM3T3p0SlFVOU1MRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVTdUVUZEYWtNc1QwRkJUeXhUUVVGVExFZEJRVWNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF6dExRVU40UkR0SFFVTkdMRU5CUVVNN1EwRkRTRHM3T3pzN096czdPMEZCVTBRc1UwRkJVeXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlR0RlFVTm9ReXhQUVVGUE96czdPenM3TzBsQlQwd3NUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJUdE5RVU5xUXl4UFFVRlBMRk5CUVZNc1IwRkJSeXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRMME03UjBGRFJpeERRVUZETzBOQlEwZzdPenM3T3pzN096dEJRVk5FTEZOQlFWTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVU3UlVGRGJrTXNUMEZCVHpzN096czdPenRKUVU5TUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVN1RVRkRha01zU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFVkJRVVU3VVVGREwwSXNTVUZCU1N4SlFVRkpMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdPMUZCUldwRExFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMVZCUTJ4Q0xFOUJRVThzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkRhRU03TzFGQlJVUXNUMEZCVHl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wOUJRM3BDT3p0TlFVVkVMRTlCUVU4c1UwRkJVeXhEUVVGRE8wdEJRMnhDTzBkQlEwWXNRMEZCUXp0RFFVTklPenM3T3pzN096czdRVUZUUkN4VFFVRlRMRkZCUVZFc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTzBWQlEzQkRMRTlCUVU4N096czdPenM3U1VGUFRDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRk8wMUJRMnBETEVsQlFVa3NSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzAxQlEyaERMRWxCUVVrc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRPMDFCUTI1RExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8wMUJRM0pETEVsQlFVa3NWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZET3p0TlFVVTNReXhKUVVGSkxFOUJRVThzUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEZUVJc1QwRkJUeXhUUVVGVExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSMEZCUnl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VDBGRGFrUTdPMDFCUlVRc1QwRkJUeXhUUVVGVExFZEJRVWNzVlVGQlZTeEhRVUZITEU5QlFVOHNSMEZCUnl4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRE8wdEJRM3BFTzBkQlEwWXNRMEZCUXp0RFFVTklPenM3T3pzN096czdRVUZUUkN4VFFVRlRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPenM3UlVGUk0wTXNTVUZCU1N4WlFVRlpMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03TzBWQlJURkZMRTlCUVU4N096czdPenM3U1VGUFRDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRk8wMUJRMnBETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xRkJRelZETEVsQlFVa3NWMEZCVnl4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdVVUZGYkVNc1NVRkJTU3hWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NWVUZCVlN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTzFWQlF5OUVMRk5CUVZNc1IwRkJSeXhYUVVGWExFTkJRVU1zUzBGQlN5eEZRVUZGTEZWQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVMEZEZEVVc1RVRkJUVHRWUVVOTUxFbEJRVWtzUTBGQlF5eG5Sa0ZCWjBZc1EwRkJReXhEUVVGRE8xTkJRM2hHTzA5QlEwWTdPMDFCUlVRc1QwRkJUeXhUUVVGVExFTkJRVU03UzBGRGJFSTdSMEZEUml4RFFVRkRPME5CUTBnN08wRkJSVVFzVTBGQlV5eFRRVUZUTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVU3UlVGRE4wTXNTVUZCU1N4VFFVRlRMRWRCUVVjN096czdPenM3U1VGUFpDeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRk8wMUJRM1pDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE96dE5RVVY2UkN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4SFFVRkhMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVkQlFVY3NaVUZCWlN4RFFVRkRPMHRCUXpkR096czdPenM3T3p0SlFWRkVMRTFCUVUwc1JVRkJSU3hUUVVGVExFMUJRVTBzUjBGQlJ6dE5RVU40UWl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVNNVF6dEhRVU5HTEVOQlFVTTdPenM3T3pzN1JVRlBSaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRlZMRTlCUVU4c1JVRkJSVHRKUVVOdVF5eEpRVUZKTEVkQlFVY3NSMEZCUnl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dEpRVU5vUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTnlReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJRenM3U1VGRmVFTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzAxQlF6VkVMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWazdVVUZEZEVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE96dFJRVVU1UWl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVOeVF5eERRVUZETEVOQlFVTTdPMDFCUlVnc1QwRkJUeXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU0zUXpzN1NVRkZSQ3hKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1RVRkROVVFzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXVHRSUVVOMFF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTTdPMUZCUlRsQ0xGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1QwRkRiRUlzUTBGQlF5eERRVUZET3p0TlFVVklMRTlCUVU4c1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU55UkRzN1NVRkZSQ3hQUVVGUExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wZEJRM2hETEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNXVUZCV1R0SlFVTXZRaXhUUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdSMEZEY0VJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNVMEZCVXl4RFFVRkRPME5CUTJ4Q096dEJRVVZFTEZOQlFWTXNWVUZCVlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVFVGQlRTeEZRVUZGT3pzN096czdPMFZCVHpsRExFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXpzN1JVRkZja0lzU1VGQlNTeFZRVUZWTEVkQlFVYzdPenM3T3pzN1NVRlBaaXhQUVVGUExFVkJRVVVzVTBGQlV5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZPMDFCUTJ4RExFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNN08wMUJSVGxDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRZaXhQUVVGUExGRkJRVkVzUjBGQlJ5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhEUVVGRE8wOUJRemxGT3p0TlFVVkVMRTlCUVU4c1VVRkJVU3hIUVVGSExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU03UzBGRE1VUTdPenM3T3pzN096dEpRVk5FTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeEpRVUZKTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1UwRkJVeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNN08wMUJSUzlHTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dExRVU51UlRzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTMEZETDBNN096czdPenM3T3p0SlFWTkVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVTdUVUZET1VJc1ZVRkJWU3hEUVVGRExGbEJRVms3VVVGRGNrSXNVVUZCVVN4RlFVRkZMRU5CUVVNN1QwRkRXaXhGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0TFFVTnVRanM3T3pzN096czdTVUZSUkN4TlFVRk5MRVZCUVVVc1UwRkJVeXhOUVVGTkxFZEJRVWM3VFVGRGVFSXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenM3VFVGRmFrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wdEJRMW83T3pzN096czdPMGxCVVVRc1QwRkJUeXhGUVVGRkxGTkJRVk1zVDBGQlR5eEhRVUZITzAxQlF6RkNMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03TzAxQlJXaENMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU5hTzBkQlEwWXNRMEZCUXpzN1JVRkZSaXhOUVVGTkxFTkJRVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlRzN096czdPenRKUVU4M1FpeEhRVUZITEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1RVRkRiRUlzU1VGQlNTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJRenM3VFVGRk9VSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRk8xRkJRMjVFTEU5QlFVOHNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJRenRQUVVOb1F6czdUVUZGUkN4UFFVRlBMRkZCUVZFc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0TFFVTnVRenRIUVVOR0xFTkJRVU1zUTBGQlF6czdPenM3TzBWQlRVZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzV1VGQldUdEpRVU0xUWl4VlFVRlZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UjBGRGJFSXNRMEZCUXl4RFFVRkRPenM3T3pzN096dEZRVkZJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzVVVGQlVTeEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFVkJRVVVzV1VGQldUdEpRVU5zUlN4VlFVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03UjBGRGRFSXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEV0QlFVc3NSVUZCUlN4WlFVRlpPMGxCUXpOQ0xGVkJRVlVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SFFVTnlRaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wZEJRM0pDTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExGVkJRVlVzUTBGQlF6dERRVU51UWpzN096czdPenM3TzBGQlUwUXNTVUZCU1N4bFFVRmxMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVUxUWl4SlFVRkpPMFZCUTBZc1NVRkJTU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1UwRkJVeXhGUVVGRk8wbEJRemxETEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMHRCUTNoQ08wZEJRMFlzUTBGQlF5eERRVUZET3p0RlFVVklMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4aFFVRmhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBWQlEyNUVMRTFCUVUwc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4aFFVRmhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBOQlEzWkVMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUlVGQlJUczdRVUZGWkN4SlFVRkpMR2xDUVVGcFFpeEhRVUZITEdWQlFXVXNRMEZCUXpzN1FVRkZlRU1zU1VGQlNTeFpRVUZaTEVkQlFVY3NRMEZCUXl4WlFVRlpMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03UVVGREwwTXNTVUZCU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhYUVVGWExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdRVUZETjBNc1NVRkJTU3hWUVVGVkxFZEJRVWNzUTBGQlF5eFZRVUZWTEVWQlFVVXNZVUZCWVN4RlFVRkZMRk5CUVZNc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dEJRVU4wUlN4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeFhRVUZYTEVWQlFVVXNVMEZCVXl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRE96dEJRVVYyUlN4VFFVRlRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPMFZCVFhwRExFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NXVUZCV1N4RlFVRkZMRU5CUVVNN08wVkJSV2hETEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRGUVVOcVFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1JVRkRjRUlzU1VGQlNTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRPMFZCUTNCQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXp0RlFVTnlRaXhKUVVGSkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSVUZEY0VJc1NVRkJTU3hQUVVGUExFZEJRVWNzYVVKQlFXbENMRWRCUVVjc1JVRkJSU3hQUVVGUExFVkJRVVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRGUVVVMVJDeEpRVUZKTEV0QlFVc3NSMEZCUnpzN096czdPMGxCVFZZc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dExRVU4yUWpzN096czdPenM3TzBsQlUwUXNTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJUdE5RVU16UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTm9ReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdPMUZCUldZc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3VVVGRmFFTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVOb1FpeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTJoQ0xGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJRMnBETEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0UlFVVnFReXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZET3p0UlFVVndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMDlCUXpWQ08wdEJRMFk3T3pzN096czdPMGxCVVVRc1NVRkJTU3hGUVVGRkxGTkJRVk1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0TlFVTjZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTnVRaXhKUVVGSkxHVkJRV1VzUjBGQlJ5eExRVUZMTEVOQlFVTXNVVUZCVVR0WlFVTm9ReXhWUVVGVkxFZEJRVWNzWlVGQlpTeERRVUZETEZWQlFWVTdXVUZEZGtNc1ZVRkJWU3hIUVVGSExHVkJRV1VzUTBGQlF5eFZRVUZWTzFsQlEzWkRMRTlCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU1zVDBGQlR5eERRVUZET3pzN1VVRkhkRU1zU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdVVUZGYUVNc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU03VVVGREwwTXNTVUZCU1N4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4WFFVRlhMRU5CUVVNN1VVRkRMME1zU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYmtNc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJrTXNTVUZCU1N4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNN1VVRkRMME1zU1VGQlNTeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdVVUZGY2tNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMR1ZCUVdVc1EwRkJReXhEUVVGRE96dFJRVVYwUkN4SlFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1ZVRkJWU3hGUVVGRk8xVkJRM0pFTEV0QlFVc3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRenM3VlVGRmVFSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE96dFZRVVZ3UkN4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdWVUZGY2tRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0VFFVTXpRaXhOUVVGTk8xVkJRMHdzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXpzN1ZVRkZha0lzVDBGQlR5eExRVUZMTEVOQlFVTTdVMEZEWkR0UFFVTkdPMHRCUTBZN096czdPenM3T3p0SlFWTkVMRWRCUVVjc1JVRkJSU3hUUVVGVExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVTdUVUZEZGtJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVTdVVUZEYmtJc1NVRkJTU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXpzN1VVRkZPVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4SlFVRkpMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenRSUVVWMFF5eEpRVUZKTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUTBGQlF6dFJRVU01UXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNN1VVRkRlRU1zU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenM3VVVGRmNFVXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE96dFJRVVZrTEVsQlFVa3NVVUZCVVN4RlFVRkZPMVZCUTFvc1NVRkJTU3hoUVVGaExFZEJRVWNzVTBGQlV5eEpRVUZKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hGUVVGRk96dFpRVVV2UkN4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVU3WTBGRGNrSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU51UkRzN1dVRkZSQ3hKUVVGSkxGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8yTkJRMnhETEV0QlFVc3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJRenRoUVVOb1FqczdXVUZGUkN4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0WFFVTm9SU3hOUVVGTkxFbEJRVWtzWVVGQllTeEhRVUZITEVOQlFVTXNVMEZCVXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zVlVGQlZTeEZRVUZGT3p0WlFVVjJSU3hKUVVGSkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVTdZMEZEY2tJc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTNCRU96dFpRVVZFTEVsQlFVa3NWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdZMEZEYkVNc1MwRkJTeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETzJGQlEyaENPenRaUVVWRUxGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8xZEJRMmhGTEUxQlFVMDdPMWxCUlV3c1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0WFFVTjRRanRUUVVOR096dFJRVVZFTEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdVVUZGYWtVc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETzFGQlEzWkNMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6czdVVUZGZEVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UFFVTXhRanRMUVVOR096czdPenM3T3p0SlFWRkVMR05CUVdNc1JVRkJSU3hUUVVGVExHTkJRV01zUjBGQlJ6dE5RVU40UXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03TzAxQlJXcENMRWxCUVVrc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdPMDFCUlRsQ0xFbEJRVWtzVVVGQlVTeERRVUZETEdOQlFXTXNSVUZCUlR0UlFVTXpRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRlZMRXRCUVVzc1JVRkJSVHRWUVVOdVJTeExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xTkJRM0JDTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1QwRkRZanM3VFVGRlJDeEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRVZCUVVVN1VVRkRNVUlzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hMUVVGTExFVkJRVVU3VlVGRGJrVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFRRVU53UWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wOUJRMkk3UzBGRFJqczdPenM3T3pzN1NVRlJSQ3huUWtGQlowSXNSVUZCUlN4VFFVRlRMR2RDUVVGblFpeEhRVUZITzAxQlF6VkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdUVUZEY2tRc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0TFFVTjBSRHM3T3pzN096czdTVUZSUkN4aFFVRmhMRVZCUVVVc1UwRkJVeXhoUVVGaExFZEJRVWM3VFVGRGRFTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE96dE5RVVZzUWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zVlVGQlZTeExRVUZMTEVWQlFVVTdVVUZEZUVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0UFFVTndRaXhGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UzBGRGRrTTdPenM3T3pzN08wbEJVVVFzWlVGQlpTeEZRVUZGTEZOQlFWTXNaVUZCWlN4SFFVRkhPMDFCUXpGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTMEZEYkVRN096czdPenM3TzBsQlVVUXNXVUZCV1N4RlFVRkZMRk5CUVZNc1dVRkJXU3hIUVVGSE8wMUJRM0JETEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenM3VFVGRmJFSXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hMUVVGTExFVkJRVVU3VVVGRE9VUXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFBRVU51UWl4RFFVRkRMRU5CUVVNN1MwRkRTanM3T3pzN096czdTVUZSUkN4alFVRmpMRVZCUVVVc1UwRkJVeXhqUVVGakxFZEJRVWM3VFVGRGVFTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFVkJRVVVzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRMUVVOcVJEczdPenM3T3pzN1NVRlJSQ3hQUVVGUExFVkJRVVVzVTBGQlV5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZPMDFCUXk5Q0xFbEJRVWtzV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdVVUZEZWtNc1QwRkJUeXhMUVVGTExFTkJRVU03VDBGRFpEczdUVUZGUkN4UFFVRlBMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU53UkRzN096czdPenM3U1VGUlJDeFRRVUZUTEVWQlFVVXNVMEZCVXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRk8wMUJRMjVETEVsQlFVa3NVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03TzAxQlJUbENMRWxCUVVrc1dVRkJXU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3VVVGRGVrTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRE8wOUJReTlDT3p0TlFVVkVMRTlCUVU4c1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF6dExRVU5vUXpzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXpzN1RVRkZha0lzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenM3VFVGRkwwSXNUMEZCVHl4SlFVRkpMRU5CUVVNN1MwRkRZanM3T3pzN096czdTVUZSUkN4UFFVRlBMRVZCUVVVc1UwRkJVeXhQUVVGUExFZEJRVWM3VFVGRE1VSXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenM3VFVGRmFFSXNWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6czdUVUZGYUVNc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqdEhRVU5HTEVOQlFVTTdPenM3T3p0RlFVMUdMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeEZRVUZGTEZsQlFWazdTVUZEYmtNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRIUVVOMFJTeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZsQlFWazdTVUZETDBJc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1NVRkRla0lzUzBGQlN5eERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMGxCUTNoQ0xFdEJRVXNzUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0SlFVTjJRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdSMEZEYkVJc1EwRkJReXhEUVVGRE96dEZRVVZJTEU5QlFVOHNTMEZCU3l4RFFVRkRPME5CUTJRN08wRkJSVVFzVTBGQlV5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVU3T3pzN096dEZRVTB4UXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxGbEJRVmtzUlVGQlJTeERRVUZET3p0RlFVVm9ReXhKUVVGSkxFMUJRVTBzUjBGQlJ6czdPenM3TzBsQlRWZ3NTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRMUVVOaU96czdPenM3T3p0SlFWRkVMRWxCUVVrc1JVRkJSU3hUUVVGVExFbEJRVWtzUjBGQlJ6dE5RVU53UWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdTMEZEYWtVN096czdPenM3TzBsQlVVUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hIUVVGSE8wMUJRM2hDTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1MwRkRiRVE3T3pzN096czdPMGxCVVVRc1UwRkJVeXhGUVVGRkxGTkJRVk1zVTBGQlV5eERRVUZETEV0QlFVc3NSVUZCUlR0TlFVTnVReXhMUVVGTExFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdTMEZEZUVJN1IwRkRSaXhEUVVGRE96czdPenM3UlVGTlJpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3haUVVGWk8wbEJReTlDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRKUVVOb1FpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1IwRkRiRUlzUTBGQlF5eERRVUZET3p0RlFVVklMRTlCUVU4c1RVRkJUU3hEUVVGRE8wTkJRMlk3TzBGQlJVUXNVMEZCVXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVTdPenM3T3p0RlFVMHpReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEZsQlFWa3NSVUZCUlN4RFFVRkRPenM3T3pzN096czdSVUZUYUVNc1NVRkJTU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZET3pzN096czdPenM3UlVGVGNrSXNTVUZCU1N4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEZRVVYwUWl4SlFVRkpMRTlCUVU4c1IwRkJSenM3T3pzN08wbEJUVm9zUzBGQlN5eEZRVUZGTEZOQlFWTXNTMEZCU3l4SFFVRkhPenM3T3pzN08wMUJUM1JDTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMDFCUlhoRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0TFFVTmlPenM3T3pzN096dEpRVkZFTEVsQlFVa3NSVUZCUlN4VFFVRlRMRWxCUVVrc1IwRkJSenROUVVOd1FpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UzBGRGVrUTdPenM3T3pzN08wbEJVVVFzVFVGQlRTeEZRVUZGTEZOQlFWTXNUVUZCVFN4SFFVRkhPMDFCUTNoQ0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTMEZET1VNN096czdPenM3T3p0SlFWTkVMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdUVUZETTBJc1MwRkJTeXhEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZET3p0TlFVVjRRaXhKUVVGSkxGTkJRVk1zUlVGQlJUdFJRVU5pTEV0QlFVc3NRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRQUVVONFFqdExRVU5HT3pzN096czdPenRKUVZGRUxFMUJRVTBzUlVGQlJTeFRRVUZUTEUxQlFVMHNSMEZCUnp0TlFVTjRRaXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZET3p0TlFVVnFRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFGQlEySXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFWQlF6RkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenM3VlVGRmFFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03TzFWQlJUVkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8xTkJRM1pET3p0UlFVVkVMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03VDBGRGFrSTdPMDFCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqczdPenM3T3pzN1NVRlJSQ3hOUVVGTkxFVkJRVVVzVTBGQlV5eE5RVUZOTEVkQlFVYzdUVUZEZUVJc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6czdUVUZGYkVJc1NVRkJTU3hSUVVGUkxFVkJRVVU3VVVGRFdpeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VlVGRE1VTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRPenRWUVVVdlFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVNM1JUczdVVUZGUkN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8wOUJRMnhDT3p0TlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMkk3UjBGRFJpeERRVUZET3p0RlFVVkdMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGT3pzN096czdTVUZOZGtJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRTlCUVU4c1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF6dExRVU51UWp0SFFVTkdMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1dVRkJXVHRKUVVOc1F5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNN1IwRkRiRUlzUTBGQlF5eERRVUZET3pzN096czdSVUZOU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExGZEJRVmNzUlVGQlJTeFpRVUZaTzBsQlEycERMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWazdUVUZEZEVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzB0QlEyeENMRU5CUVVNc1EwRkJRenRIUVVOS0xFTkJRVU1zUTBGQlF6czdPenM3TzBWQlRVZ3NUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhUUVVGVExFVkJRVVVzV1VGQldUdEpRVU12UWl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03U1VGRGFrSXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wbEJRMnBDTEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRIUVVOc1FpeERRVUZETEVOQlFVTTdPMFZCUlVnc1QwRkJUeXhQUVVGUExFTkJRVU03UTBGRGFFSTdPMEZCUlVRc1NVRkJTU3haUVVGWkxFZEJRVWNzYVVOQlFXbERMRU5CUVVNN1FVRkRja1FzU1VGQlNTeHBRa0ZCYVVJc1IwRkJSeXcyUWtGQk5rSXNRMEZCUXpzN1FVRkZkRVFzVTBGQlV5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVU3T3pzN096dEZRVTAxUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxGbEJRVmtzUlVGQlJTeERRVUZET3p0RlFVVm9ReXhKUVVGSkxGRkJRVkVzUjBGQlJ6czdPenM3T3p0SlFVOWlMRXRCUVVzc1JVRkJSU3hUUVVGVExFdEJRVXNzUjBGQlJ6czdPenM3T3p0TlFVOTBRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE96czdPenM3T3p0TlFWRTVSQ3hKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVOQlFVTTdPMDFCUlc1RkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0TFFVTndRanM3T3pzN096czdTVUZSUkN4VFFVRlRMRVZCUVVVc1UwRkJVeXhUUVVGVExFZEJRVWM3VFVGRE9VSXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFBRVU53UXp0TFFVTkdPenM3T3pzN096dEpRVkZFTEZsQlFWa3NSVUZCUlN4VFFVRlRMRmxCUVZrc1IwRkJSenROUVVOd1F5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3VVVGRGRrTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wOUJRM1pETzB0QlEwWTdPenM3T3pzN096dEpRVk5FTEZGQlFWRXNSVUZCUlN4VFFVRlRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVU3VFVGRGNFTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF6dE5RVU01UWl4SlFVRkpMRWxCUVVrc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenROUVVWcVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRPenROUVVVdlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzVDBGQlR5eEZRVUZGTzFGQlEzaERMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VDBGRGRFUXNRMEZCUXl4RFFVRkRPMHRCUTBvN096czdPenM3T3p0SlFWTkVMRmRCUVZjc1JVRkJSU3hUUVVGVExGZEJRVmNzUTBGQlF5eFJRVUZSTEVWQlFVVTdUVUZETVVNc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wdEJRekZGT3pzN096czdPenRKUVZGRUxGZEJRVmNzUlVGQlJTeFRRVUZUTEZkQlFWY3NSMEZCUnp0TlFVTnNReXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1VVRkRka01zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMDlCUTJoRE8wdEJRMFk3T3pzN096czdPMGxCVVVRc1kwRkJZeXhGUVVGRkxGTkJRVk1zWTBGQll5eEhRVUZITzAxQlEzaERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTjJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdUMEZEYkVNN1MwRkRSanM3T3pzN096czdPMGxCVTBRc1NVRkJTU3hGUVVGRkxGTkJRVk1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0TlFVTTFRaXhMUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVTjRReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRmxCUVZrc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VDBGRE4wUTdTMEZEUmpzN096czdPenM3TzBsQlUwUXNUVUZCVFN4RlFVRkZMRk5CUVZNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJUdE5RVU5vUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVU40UXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEZsQlFWa3NRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzA5QlEyeEVPMHRCUTBZN096czdPenM3T3pzN08wbEJWMFFzUzBGQlN5eEZRVUZGTEZOQlFWTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSVHROUVVNelFpeExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN08wMUJSWFpDTEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhoUVVGaExFTkJRVU1zV1VGQldTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEzWkhPMGRCUTBZc1EwRkJRenM3UlVGRlJpeE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSVHM3T3pzN08wbEJUWGhDTEVkQlFVY3NSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenROUVVOc1FpeFBRVUZQTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNN1MwRkRjRUk3UjBGRFJpeERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBTQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNZVUZCWVN4RlFVRkZMRmxCUVZrc1EwRkJReXhGUVVGRkxGbEJRVms3U1VGRGJrUXNVVUZCVVN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8wZEJRM1JDTEVOQlFVTXNRMEZCUXpzN096czdPMFZCVFVnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNXVUZCV1R0SlFVTXZRaXhSUVVGUkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdTVUZETVVJc1VVRkJVU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETzBsQlEzaENMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEhRVU5zUWl4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eFJRVUZSTEVOQlFVTTdRMEZEYWtJN08wRkJSVVFzVTBGQlV5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hOUVVGTkxFVkJRVVU3T3pzN096dEZRVTAxUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSkxGbEJRVmtzUlVGQlJTeERRVUZET3p0RlFVVm9ReXhKUVVGSkxGRkJRVkVzUjBGQlJ6czdPenM3TzBsQlRXSXNTMEZCU3l4RlFVRkZMRk5CUVZNc1MwRkJTeXhIUVVGSE8wMUJRM1JDTEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVU3VVVGRE0wSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wOUJRMkk3UzBGRFJqczdPenM3T3pzN1NVRlJSQ3hKUVVGSkxFVkJRVVVzVTBGQlV5eEpRVUZKTEVkQlFVYzdUVUZEY0VJc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU14UXpzN096czdPenM3U1VGUlJDeE5RVUZOTEVWQlFVVXNVMEZCVXl4TlFVRk5MRWRCUVVjN1RVRkRlRUlzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03UzBGREwwSTdPenM3T3pzN096dEpRVk5FTEV0QlFVc3NSVUZCUlN4VFFVRlRMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVU3VFVGRE0wSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhMUVVGTExFVkJRVVVzUlVGQlJUdFJRVU40UWl4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzA5QlEzaEVPenROUVVWRUxFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNTMEZCU3l4RlFVRkZMRVZCUVVVN1VVRkRlRUlzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRQUVVONFJEdExRVU5HTzBkQlEwWXNRMEZCUXpzN096czdPenRGUVU5R0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFVkJRVVVzV1VGQldUdEpRVU16UXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03UjBGRGJrSXNRMEZCUXl4RFFVRkRPenM3T3pzN1JVRk5TQ3hOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpPMGxCUXpsQ0xGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0SFFVTnNRaXhEUVVGRExFTkJRVU03T3pzN096dEZRVTFJTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxGbEJRVms3U1VGREwwSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wZEJRMnhDTEVOQlFVTXNRMEZCUXpzN1JVRkZTQ3hQUVVGUExGRkJRVkVzUTBGQlF6dERRVU5xUWpzN1FVRkZSQ3hUUVVGVExGRkJRVkVzUlVGQlJTeExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1JVRkJSVHM3T3pzN08wVkJUVFZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1dVRkJXU3hGUVVGRkxFTkJRVU03TzBWQlJXaERMRWxCUVVrc1VVRkJVU3hIUVVGSE96czdPenM3U1VGTllpeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRWRCUVVjN1RVRkRkRUlzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPenROUVVWaUxFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVVVN1VVRkROMElzU1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMDlCUTJJN1MwRkRSanM3T3pzN096czdPMGxCVTBRc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eEhRVUZITzAxQlEzUkNMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6czdUVUZGYWtJc1NVRkJTU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlR0UlFVTXpRaXhKUVVGSkxGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1ZVRkRlRUlzU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4WFFVRlhMRU5CUVVNc1dVRkJXVHRaUVVOb1F5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN08xbEJSV0lzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzFsQlJYcENMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFhRVU5tTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRMlk3VDBGRFJqdExRVU5HT3pzN096czdPenRKUVZGRUxFbEJRVWtzUlVGQlJTeFRRVUZUTEVsQlFVa3NSMEZCUnp0TlFVTndRaXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UzBGRGJFTTdPenM3T3pzN08wbEJVVVFzU1VGQlNTeEZRVUZGTEZOQlFWTXNTVUZCU1N4SFFVRkhPMDFCUTNCQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1RVRkZiRUlzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRlhMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNXVUZCV1R0UlFVTjJSQ3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdUMEZEWml4RFFVRkRMRU5CUVVNN08wMUJSVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNXVUZCV1R0UlFVTjBSQ3hOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdUMEZEYUVJc1EwRkJReXhEUVVGRE8wdEJRMG83T3pzN096czdPMGxCVVVRc1RVRkJUU3hGUVVGRkxGTkJRVk1zVFVGQlRTeEhRVUZITzAxQlEzaENMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNWVUZCVlN4RFFVRkRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0TFFVTTNSRHRIUVVOR0xFTkJRVU03TzBWQlJVWXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJSU3hOUVVGTkxFVkJRVVU3T3pzN096czdTVUZQZGtJc1IwRkJSeXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzAxQlEyeENMRWxCUVVrc1VVRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF6czdUVUZGZGtZc1NVRkJTU3hSUVVGUkxFVkJRVVU3VVVGRFdpeFBRVUZQTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRQUVVONFFqczdUVUZGUkN4UFFVRlBMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMHRCUTNaRE8wZEJRMFlzUTBGQlF5eERRVUZET3pzN096czdPMFZCVDBnc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1JVRkJSU3haUVVGWk8wbEJRek5ETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRIUVVOdVFpeERRVUZETEVOQlFVTTdPenM3T3pzN096czdSVUZWU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zV1VGQldTeEZRVUZGTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1lVRkJZU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEZRVUZGTEZsQlFWazdTVUZEYWtZc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBkQlEycENMRU5CUVVNc1EwRkJRenM3T3pzN096czdSVUZSU0N4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEUxQlFVMHNSVUZCUlN4WFFVRlhMRU5CUVVNc1JVRkJSU3haUVVGWk8wbEJRM2hFTEZGQlFWRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRIUVVOc1FpeERRVUZETEVOQlFVTTdPenM3T3p0RlFVMUlMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZsQlFWazdTVUZET1VJc1VVRkJVU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzBkQlEyeENMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1dVRkJXVHRKUVVNdlFpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1IwRkRiRUlzUTBGQlF5eERRVUZET3p0RlFVVklMRTlCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMnBDT3pzN096czdPenRCUVZGRUxGTkJRVk1zWlVGQlpTeERRVUZETEUxQlFVMHNSVUZCUlR0RlFVTXZRaXhKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0SlFVTndRaXhQUVVGUExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SFFVTjZRaXhOUVVGTk8wbEJRMHdzU1VGQlNTeERRVUZETEhORFFVRnpReXhEUVVGRExFTkJRVU03UjBGRE9VTTdPMFZCUlVRc1QwRkJUeXhGUVVGRkxFTkJRVU03UTBGRFdEczdRVUZGUkN4VFFVRlRMRmRCUVZjc1JVRkJSU3hMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlRzN096czdPMFZCVFM5RExFbEJRVWtzVFVGQlRTeEhRVUZITEVsQlFVa3NXVUZCV1N4RlFVRkZMRU5CUVVNN096czdPenM3UlVGUGFFTXNTVUZCU1N4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF6czdPenM3T3pzN08wVkJVemxDTEVsQlFVa3NUVUZCVFN4SFFVRkhMR1ZCUVdVc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdPenM3T3pzN1JVRlBia1FzU1VGQlNTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6czdSVUZGZEVNc1NVRkJTU3hYUVVGWExFZEJRVWM3T3pzN096czdTVUZQYUVJc1MwRkJTeXhGUVVGRkxGTkJRVk1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0TlFVTTFRaXhKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEZWQlFWVXNTMEZCU3l4WFFVRlhMRVZCUVVVN1VVRkROVU1zUzBGQlN5eEpRVUZKTEV0QlFVc3NTVUZCU1N4TlFVRk5MRVZCUVVVN1ZVRkRlRUlzU1VGQlNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRMmhETEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhqUVVGakxFZEJRVWNzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSVHRqUVVNM1JDeFBRVUZQTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRoUVVOMFFqdFhRVU5HTzFOQlEwWTdUMEZEUmpzN1RVRkZSQ3hQUVVGUExGRkJRVkVzUTBGQlF6dExRVU5xUWp0SFFVTkdMRU5CUVVNN096czdPenRGUVUxR0xGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZET3pzN096czdSVUZOT1VNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFJRVUZSTEVWQlFVVXNUVUZCVFN4RlFVRkZMRkZCUVZFc1EwRkJReXhaUVVGWk8wbEJReTlETEV0QlFVc3NRMEZCUXl4UlFVRlJMRWRCUVVjc1dVRkJXU3hEUVVGRExGRkJRVkVzUlVGQlJTeFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03UjBGRGNFVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdPenM3T3p0RlFVMDNRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpPMGxCUXpsQ0xFMUJRVTBzUjBGQlJ5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN08wbEJSV3BETEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzBkQlEyNURMRU5CUVVNc1EwRkJRenM3T3pzN08wVkJUVWdzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1dVRkJXVHRKUVVNdlFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEhRVU01UWl4RFFVRkRMRU5CUVVNN08wVkJSVWdzVDBGQlR5eFhRVUZYTEVOQlFVTTdRMEZEY0VJN08wRkJSVVFzU1VGQlNTeFZRVUZWTEVkQlFVYzdPMFZCUldZc1NVRkJTU3hGUVVGRkxFbEJRVWs3UlVGRFZpeFRRVUZUTEVWQlFVVXNVMEZCVXp0RlFVTndRaXhWUVVGVkxFVkJRVVVzVlVGQlZUdEZRVU4wUWl4VFFVRlRMRVZCUVVVc1UwRkJVenRGUVVOd1FpeEpRVUZKTEVWQlFVVXNTVUZCU1R0RlFVTldMRXRCUVVzc1JVRkJSU3hMUVVGTE8wVkJRMW9zU1VGQlNTeEZRVUZGTEVsQlFVazdSVUZEVml4SlFVRkpMRVZCUVVVc1NVRkJTVHRGUVVOV0xFMUJRVTBzUlVGQlJTeE5RVUZOTzBWQlEyUXNUVUZCVFN4RlFVRkZMRTFCUVUwN1JVRkRaQ3hMUVVGTExFVkJRVVVzUzBGQlN6dEZRVU5hTEVkQlFVY3NSVUZCUlN4SFFVRkhPenM3UlVGSFVpeExRVUZMTEVWQlFVVXNTMEZCU3p0RlFVTmFMRTFCUVUwc1JVRkJSU3hOUVVGTk8wVkJRMlFzVDBGQlR5eEZRVUZGTEU5QlFVODdSVUZEYUVJc1VVRkJVU3hGUVVGRkxGRkJRVkU3UlVGRGJFSXNVVUZCVVN4RlFVRkZMRkZCUVZFN1JVRkRiRUlzVVVGQlVTeEZRVUZGTEZGQlFWRTdSVUZEYkVJc1YwRkJWeXhGUVVGRkxGZEJRVmM3UTBGRGVrSXNRMEZCUXpzN1FVRkZSaXhKUVVGSkxFOUJRVThzUjBGQlJ5eFZRVUZWTEV0QlFVc3NSVUZCUlR0RlFVTTNRaXhSUVVGUkxFTkJRVU1zVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPenRGUVVVeFFpeFRRVUZUTEZGQlFWRXNSMEZCUnp0SlFVTnNRaXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMGxCUXk5Q0xFOUJRVThzZVVKQlFYbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFWTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF6dEhRVU40U0RzN1JVRkZSQ3hYUVVGWExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZEY2tJc1IwRkJSeXhGUVVGRkxFOUJRVTg3U1VGRFdpeExRVUZMTEVWQlFVVXNVMEZCVXl4TFFVRkxMRWRCUVVjN1RVRkRkRUlzU1VGQlNTeFZRVUZWTEVkQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPenROUVVWNFJpeFBRVUZQTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1UwRkJVeXhEUVVGRExGTkJRVk1zU1VGQlNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEzWktPMGRCUTBZc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRFNpeFBRVUZQTEZGQlFWRXNRMEZCUXp0RFFVTnFRaXhEUVVGRExFdEJRVXNzUTBGQlF6czdRVU5vYTBoU096czdPenRCUVV0QkxGTkJRVk5ETEV0QlFVY3NRMEZCUXl4UFFVRlBMRVZCUVVVN1JVRkRjRUlzVDBGQlR5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dERRVU5zUXpzN1FVRkZSQ3hUUVVGVExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZPMFZCUTNwQ0xFdEJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4RlFVRkZPMGxCUTI1Q0xFbEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOdVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHROUVVNelFpeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJRenRMUVVOc1FqdEpRVU5FTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzBkQlF6RkNPMFZCUTBRc1QwRkJUeXhQUVVGUExFTkJRVU03UTBGRGFFSTdPMEZCUlVRc1UwRkJVeXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTzBWQlEzUkNMRWxCUVVrc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1JVRkRlRU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1JVRkRNVUlzVDBGQlR5eEhRVUZITEVOQlFVTTdRMEZEV2pzN1FVRkZSQ3hKUVVGSkxGTkJRVk03UlVGRFdDeFBRVUZQTEU5QlFVOHNTMEZCU3l4WFFVRlhPMGRCUXpkQ0xFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHp0SlFVTjRRaXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEhGQ1FVRnhRanRKUVVOMlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMR3RDUVVGclFqdEpRVU53UXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUVVNN08wRkJSWHBETEZOQlFWTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVU3UlVGREwwSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRKUVVOa0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjME5CUVhORExFTkJRVU1zUTBGQlF6dEhRVU42UkRzN1JVRkZSQ3hQUVVGUExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wTkJRM1pET3p0QlFVVkVMRk5CUVZNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJUdEZRVU4yUWl4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRGJFSXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8wZEJRMnhDTEUxQlFVMDdTVUZEVEN4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3VFVGRGRFSXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTMEZEZWtNN1IwRkRSanREUVVOR096dEJRVVZFTEZOQlFWTXNZVUZCWVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVU3UlVGRGVFTXNUMEZCVHl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hWUVVGVkxFdEJRVXNzUlVGQlJTeEZRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eEZRVUZGTzBkQlEzcEhMRU5CUVVNN1EwRkRTRHM3UVVGRlJDeEpRVUZKTEVkQlFVY3NSMEZCUnp0RlFVTlNMRWxCUVVrc1JVRkJSU3hKUVVGSk8wVkJRMVlzVDBGQlR5eEZRVUZGTzBsQlExQXNTMEZCU3l4RlFVRkZMRlZCUVZVc1EwRkJReXhGUVVGRkxFVkJRVVVzVVVGQlVTeFpRVUZaTEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVN1NVRkRiRVFzU1VGQlNTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1VVRkJVU3hYUVVGWExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVTdTVUZEYUVRc1UwRkJVeXhGUVVGRkxHOUNRVUZ2UWp0SFFVTm9RenRGUVVORUxFdEJRVXNzUlVGQlJUdEpRVU5NTEV0QlFVc3NSVUZCUlN4WFFVRlhPMGxCUTJ4Q0xGRkJRVkVzUlVGQlJTeGpRVUZqTzBsQlEzaENMRTFCUVUwc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZGQlFWRXNZVUZCWVN4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRk8wbEJRM0JFTEZOQlFWTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1JVRkJSU3hGUVVGRkxGRkJRVkVzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVU3UjBGRE0wUTdRMEZEUml4RFFVRkRPenM3T3p0QlFVdEdMRWxCUVVrc2NVSkJRWEZDTEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXpzN1FVRkZha1FzVTBGQlV5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTzBWQlF5OUNMRWxCUVVrc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRPMFZCUTNCRExFbEJRVWtzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0RlFVVjJReXhKUVVGSkxGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1NVRkRha01zV1VGQldTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdSMEZEZUVNc1RVRkJUVHRKUVVOTUxGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1IwRkRNVUk3UTBGRFJqczdRVUZGUkN4VFFVRlRMRzlDUVVGdlFpeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1JVRkRiRU1zY1VKQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzVlVGQlZUdEpRVU51UXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdTVUZEZGtZc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJN1IwRkRPVUlzUTBGQlF6dERRVU5JT3p0QlFVVkVMRk5CUVZNc01FSkJRVEJDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSVHRGUVVONFF5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdSVUZEZUVJc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRelZDT3p0QlFVVkVMRWxCUVVrc1dVRkJXU3hIUVVGSExGTkJRVk1zV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlR0RlFVTm9SQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXp0RlFVTjJRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXp0RFFVTndRaXhEUVVGRE96dEJRVVZHTEVsQlFVa3NhMEpCUVd0Q0xFZEJRVWNzUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4WlFVRlpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF6czdRVUZGTjBRc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVkQlFVY3NVMEZCVXl4SlFVRkpMRVZCUVVVc1UwRkJVeXhGUVVGRkxFOUJRVThzUlVGQlJUdEZRVU12UkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4WFFVRlhMRVZCUVVVN1NVRkRia1FzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UjBGREwwSTdSVUZEUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRGUVVOMlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU03UTBGRE1VUXNRMEZCUXpzN1FVRkZSaXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4VFFVRlRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeEZRVUZGTzBsQlEyaEZMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6czdSVUZGY0VJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRTlCUVU4c1JVRkJSVHRKUVVNMVJTeEpRVUZKTEUxQlFVMHNTVUZCU1N4UFFVRlBMRXRCUVVzc1RVRkJUU3hGUVVGRk8wMUJRMmhETEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN1NVRkRSQ3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExGTkJRVk1zUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRPVVFzVDBGQlR5eExRVUZMTEVOQlFVTTdSMEZEWkN4RFFVRkRMRU5CUVVNN1EwRkRTaXhEUVVGRE96dEJRVVZHTEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1UwRkJVeXhIUVVGSExGTkJRVk1zVTBGQlV5eEpRVUZKTzBsQlEzSkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6czdSVUZGY0VJc1MwRkJTeXhKUVVGSkxFbEJRVWtzU1VGQlNTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZPMGxCUTJoRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1IwRkRja0k3UTBGRFJpeERRVUZET3p0QlFVVkdMR3RDUVVGclFpeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRWRCUVVjc1dVRkJXVHRKUVVONlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNN08wVkJSWEJDTEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNTMEZCU3p0SlFVTnlReXhWUVVGVkxFZEJRVWNzUlVGQlJTeEZRVUZGTEU5QlFVOHNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1IwRkROMFFzUTBGQlF6dERRVU5JTEVOQlFVTTdPMEZCUlVZc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRmxCUVZrc1EwRkJReXhUUVVGVExFVkJRVVVzYTBKQlFXdENMRVZCUVVVc1EwRkJRenM3UVVGRmRFVXNTVUZCU1N4WlFVRlpMRWRCUVVjc1UwRkJVeXhaUVVGWkxFZEJRVWM3UlVGRGVrTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhGUVVGRkxFTkJRVU03UTBGRGVrSXNRMEZCUXpzN1FVRkZSaXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NSMEZCUnl4VFFVRlRMRmxCUVZrc1JVRkJSU3hQUVVGUExFVkJRVVU3UlVGRGNFVXNTVUZCU1N4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eFBRVUZQTEV0QlFVc3NUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEzaEdMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVU3U1VGRFVDeEZRVUZGTEVkQlFVY3NTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGREwwSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdSMEZETjBJN1JVRkRSQ3hQUVVGUExFVkJRVVVzUTBGQlF6dERRVU5ZTEVOQlFVTTdPMEZCUlVZc1dVRkJXU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVkQlFVY3NVMEZCVXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRkxGTkJRVk1zUlVGQlJTeFBRVUZQTEVWQlFVVTdSVUZEZUVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzBOQlEzSkVMRU5CUVVNN08wRkJSVVlzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVN1JVRkROVVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEZRVU53UXl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXpzN1JVRkZPVUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZPenRKUVVWa0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wZEJRemxFTzBOQlEwWXNRMEZCUXpzN1FVRkZSaXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVUZETEZOQlFWTXNSMEZCUnl4VFFVRlRMRk5CUVZNc1NVRkJTVHRGUVVOMlJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBWQlEyNUZMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUlVGQlJTeERRVUZETzBOQlEzcENMRU5CUVVNN08wRkJSVVlzV1VGQldTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRWRCUVVjc1UwRkJVeXhKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZOQlFWTXNSVUZCUlN4UFFVRlBMRVZCUVVVN1JVRkRlRVVzU1VGQlNTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEZRVU53UXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhWUVVGVkxFZEJRVWNzUlVGQlJUdEpRVU12UWl4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXp0SlFVTnNReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdSMEZEWkN4RFFVRkRPMFZCUTBZc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1EwRkRha01zUTBGQlF6czdRVUZGUml4VFFVRlRMRmRCUVZjc1EwRkJReXhKUVVGSkxFVkJRVVU3UlVGRGVrSXNTVUZCU1N4UFFVRlBMRTFCUVUwc1EwRkJReXhYUVVGWExFdEJRVXNzVlVGQlZTeEZRVUZGTzBsQlF6VkRMRTlCUVU4c1NVRkJTU3hYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdSMEZET1VJc1RVRkJUVHRKUVVOTUxFbEJRVWtzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03U1VGRE9VTXNSMEZCUnl4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVOdVJDeFBRVUZQTEVkQlFVY3NRMEZCUXp0SFFVTmFPME5CUTBZN08wRkJSVVFzU1VGQlNTeHBRa0ZCYVVJc1IwRkJSenRGUVVOMFFpeERRVUZETzBWQlEwUXNTVUZCU1R0RlFVTktMRWxCUVVrN1JVRkRTaXhwUWtGQmFVSTdSVUZEYWtJc2JVSkJRVzFDTzBWQlEyNUNPMFZCUTBFc1MwRkJTeXhwUWtGQmFVSXNTMEZCU3l4TFFVRkxMRU5CUVVNc1IwRkJSeXhwUWtGQmFVSXNSMEZCUnl4SlFVRkpMRU5CUVVNN1JVRkROMFFzUzBGQlN5eHRRa0ZCYlVJc1MwRkJTeXhMUVVGTExFTkJRVU1zUjBGQlJ5eHRRa0ZCYlVJc1IwRkJSeXhMUVVGTExFTkJRVU03TzBWQlJXeEZMRWxCUVVrc1RVRkJUU3hEUVVGRE8wVkJRMWdzU1VGQlNTeEpRVUZKTEV0QlFVc3NTMEZCU3l4RlFVRkZPMGxCUTJ4Q0xFMUJRVTBzUjBGQlJ6dE5RVU5RTEdWQlFXVTdUVUZEWml4cFFrRkJhVUk3VFVGRGFrSXNWMEZCVnp0TlFVTllMRWRCUVVjN1RVRkRTQ3hKUVVGSk8wMUJRMG9zVFVGQlRTeEZRVUZGTEVOQlFVTTdSMEZEV2l4TlFVRk5MRWxCUVVrc1NVRkJTU3hMUVVGTExFMUJRVTBzUlVGQlJUdEpRVU14UWl4TlFVRk5MRWRCUVVjN1RVRkRVQ3hqUVVGak8wMUJRMlFzWjBKQlFXZENPMDFCUTJoQ0xGbEJRVms3VFVGRFdpeEhRVUZITzAxQlEwZ3NUVUZCVFR0TlFVTk9MRTlCUVU4c1JVRkJSU3hEUVVGRE8wZEJRMklzVFVGQlRUdEpRVU5NTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwTkJRV3RETEVOQlFVTXNRMEZCUXp0SFFVTnlSRHM3UlVGRlJDeHRRa0ZCYlVJc1EwRkJReXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNSVUZCUlN4cFFrRkJhVUlzUlVGQlJTeHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8wTkJRemxGTEVOQlFVTTdPMEZCUlVZc1UwRkJVeXh0UWtGQmJVSTdSVUZETVVJc1EwRkJRenRGUVVORUxFbEJRVWs3UlVGRFNpeEhRVUZITzBWQlEwZ3NhVUpCUVdsQ08wVkJRMnBDTEcxQ1FVRnRRanRGUVVOdVFqdEZRVU5CTEVsQlFVa3NZVUZCWVN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEZRVU16UWl4SlFVRkpMR1ZCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdSVUZETjBJc1NVRkJTU3hUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUTNaQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVObUxFbEJRVWtzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVOb1FpeEpRVUZKTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRGJFSXNTMEZCU3l4cFFrRkJhVUlzUzBGQlN5eExRVUZMTEVOQlFVTXNSMEZCUnl4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSVUZETjBRc1MwRkJTeXh0UWtGQmJVSXNTMEZCU3l4TFFVRkxMRU5CUVVNc1IwRkJSeXh0UWtGQmJVSXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wVkJSV3hGTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03T3p0RlFVZDRRaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenM3TzBWQlIyeENMRWxCUVVrc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0SlFVTXhRaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRIUVVOMFFqczdPMFZCUjBRc1NVRkJTU3hQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1NVRkRiRVVzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UjBGRGNFSTdPMFZCUlVRc1NVRkJTU3hKUVVGSkxFVkJRVVU3U1VGRFVpeFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmRCUVZjc1JVRkJSU3haUVVGWkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXpzN1NVRkZka1FzU1VGQlNTeEpRVUZKTEVkQlFVY3NRMEZCUXl4RlFVRkZPMDFCUTFvc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNXVUZCV1N4SFFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UzBGRGVrUXNUVUZCVFN4SlFVRkpMRWxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVU3VFVGRGJrSXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJReXhYUVVGWExFVkJRVVVzV1VGQldTeEhRVUZITEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1MwRkRNMFE3TzBsQlJVUXNTVUZCU1N4cFFrRkJhVUlzUlVGQlJUdE5RVU55UWl3d1FrRkJNRUlzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRiRU03UjBGRFJqczdSVUZGUkN4SlFVRkpMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NTVUZCU1N4SlFVRkpMRzFDUVVGdFFpeERRVUZETEVWQlFVVTdTVUZETDBNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eFhRVUZYTEVWQlFVVXNTMEZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhUUVVGVExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEhRVU0xUlR0RFFVTkdPenRCUVVWRUxGTkJRVk5ETEU5QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1JVRkRhRUlzVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dERRVU0zUWpzN1FVRkZSQ3hUUVVGVExGVkJRVlVzUTBGQlF5eEZRVUZGTEVWQlFVVTdSVUZEZEVJN1NVRkRSU3hQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEhsQ1FVRjVRaXhEUVVGRE8wbEJRM1JETEU5QlFVOHNRMEZCUXl4RlFVRkZMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdTVUZEZGtNc1QwRkJUeXhEUVVGRExFVkJRVVVzUlVGQlJTdzBRa0ZCTkVJc1EwRkJRenRKUVVONlF5eFBRVUZQTEVOQlFVTXNSVUZCUlN4RlFVRkZMREJDUVVFd1FpeERRVUZETzBsQlEzWkRPME5CUTBnN08wRkJSVVFzVTBGQlV5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZPMFZCUXpOQ0xFbEJRVWtzVFVGQlRTeEhRVUZIUkN4TFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UlVGRE1VSTdTVUZEUlVNc1QwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdTVUZEYmtKQkxFOUJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUTNwQ1FTeFBRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1EwRkJRenRKUVVNeFFrRXNUMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhsUVVGbExFTkJRVU03U1VGRE4wSkJMRTlCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNN1NVRkRPVUk3UTBGRFNEczdRVUZGUkN4SlFVRkpMRWRCUVVjc1IwRkJSenRGUVVOU0xGRkJRVkU3U1VGRFRpeFBRVUZQTEZGQlFWRXNTMEZCU3l4WFFVRlhPMGxCUXk5Q0xHdENRVUZyUWl4SlFVRkpMRkZCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zUzBGQlN6dEZRVU4wUkN4aFFVRmhPMGxCUTFnc1QwRkJUeXhOUVVGTkxFdEJRVXNzVjBGQlZ6dExRVU0xUWl4alFVRmpMRWxCUVVrc1RVRkJUVHRQUVVOMFFpeE5RVUZOTEVOQlFVTXNZVUZCWVN4SlFVRkpMRkZCUVZFc1dVRkJXU3hOUVVGTkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdSVUZEZGtVc2FVSkJRV2xDTzBsQlEyWXNUMEZCVHl4VFFVRlRMRXRCUVVzc1YwRkJWeXhKUVVGSkxGTkJRVk1zUTBGQlF5eG5Ra0ZCWjBJN1JVRkRhRVVzVVVGQlVUdEpRVU5PTEU5QlFVOHNVMEZCVXl4TFFVRkxMRmRCUVZjN1NVRkRhRU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWxCUVVrc1UwRkJVeXhEUVVGRExGTkJRVk1zUTBGQlF6dERRVU51UkN4RFFVRkRPenRCUVVWR0xFbEJRVWtzWTBGQll5eEhRVUZITEZOQlFWTXNRMEZCUXl4RlFVRkZPMFZCUXk5Q0xFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1JVRkRlRUlzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenM3UlVGRmNrUXNRMEZCUXl4RFFVRkRMR05CUVdNc1IwRkJSeXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETzBWQlEzWkRMRU5CUVVNc1EwRkJReXhsUVVGbExFZEJRVWNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXp0RlFVTjZReXhEUVVGRExFTkJRVU1zV1VGQldTeEhRVUZITEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNN1JVRkRja01zUTBGQlF5eERRVUZETEdGQlFXRXNSMEZCUnl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRE96dEZRVVYyUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNZMEZCWXl4RFFVRkRMRVZCUVVVN08wbEJSWFpETEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNSVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTzB0QlEzcEdMRU5CUVVNN1NVRkRSaXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRIUVVOMlF6dEZRVU5FTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlRzN1NVRkZka01zWVVGQllTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeEZRVUZGTEU5QlFVOHNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVU3UzBGRGVrWXNRMEZCUXp0SlFVTkdMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMGRCUTNaRE96dEZRVVZFTzBsQlEwVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1U3U1VGRE0wSXNRMEZCUXl4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFTkJRVU1zUTBGQlF5eFpRVUZaTzBsQlEyeEZPMGxCUTBFc1EwRkJReXhEUVVGRExHZENRVUZuUWl4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVNeFFpeERRVUZETEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRE8wbEJRM0pFTEVOQlFVTXNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUXk5RExFTkJRVU1zUTBGQlF5eGxRVUZsTEVkQlFVY3NXVUZCV1R0TlFVTTVRaXhEUVVGRE8wMUJRMFJCTEU5QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eGpRVUZqTEVkQlFVY3NRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJRenRMUVVONFJDeERRVUZETzBsQlEwWXNRMEZCUXl4RFFVRkRMR05CUVdNc1IwRkJSMEVzVDBGQlN6dE5RVU4wUWl4RFFVRkRMRU5CUVVNc1EwRkJReXgzUWtGQmQwSXNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWVHRUUVVNM1F5eERRVUZETEVOQlFVTXNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhsUVVGbExFTkJRVU03VTBGRGFrTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETzB0QlEzUkRMRU5CUVVNN1IwRkRTQ3hOUVVGTk8wbEJRMHdzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExFdEJRVXNzUTBGQlF6dEhRVU0xUWpzN1JVRkZSRHRKUVVORkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4bFFVRmxPMGxCUXpOQ0xFTkJRVU1zUTBGQlF5eGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXh0UWtGQmJVSXNSMEZCUnl4RFFVRkRMRU5CUVVNc1lVRkJZVHRKUVVOd1JUdEpRVU5CTEVOQlFVTXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZETVVJc1EwRkJReXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0SlFVTjRSQ3hEUVVGRExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4bFFVRmxMRWRCUVVjc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU5xUkN4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NXVUZCV1R0TlFVTXZRaXhEUVVGRE8wMUJRMFJCTEU5QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJRenRMUVVNelJDeERRVUZETzBsQlEwWXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1IwRkJSMEVzVDBGQlN6dE5RVU55UWl4blFrRkJaMEk3VTBGRFlpeERRVUZETEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXp0VFFVTnVReXhEUVVGRExFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXl4bFFVRmxMRU5CUVVNN1MwRkRlRU1zUTBGQlF6dEhRVU5JTEUxQlFVMDdTVUZEVEN4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGRCUXpWQ096dEZRVVZFTEVsQlFVa3NRMEZCUXl4RFFVRkRMR05CUVdNc1NVRkJTU3hEUVVGRExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4bFFVRmxMRVZCUVVVN1NVRkRlRVFzUTBGQlF5eERRVUZETEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTTdSMEZEY2tRN1JVRkRSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eGhRVUZoTEVsQlFVa3NRMEZCUXl4RFFVRkRMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zWjBKQlFXZENMRVZCUVVVN1NVRkRla1FzUTBGQlF5eERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJRenRIUVVOMFJEczdSVUZGUkN4VFFVRlRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZET3p0RlFVVjBRaXhKUVVGSkxFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRKUVVOMFFpeFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8wZEJRemxETEUxQlFVMDdTVUZEVEN4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEyaEVMRU5CUVVNc1EwRkJReXhsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzUkNMRU5CUVVNc1EwRkJReXhqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETzBsQlEzSkNMRTlCUVU4c1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF5eERRVUZETzBkQlEzaENPMFZCUTBRc1NVRkJTU3hEUVVGRExFTkJRVU1zWjBKQlFXZENMRVZCUVVVN1NVRkRkRUlzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRenRIUVVNNVF5eE5RVUZOTzBsQlEwd3NUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5vUkN4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNaQ0xFTkJRVU1zUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNCQ0xFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGRCUTNaQ08wTkJRMFlzUTBGQlF6czdRVUZGUml4VFFVRlRMRmxCUVZrc1EwRkJReXhEUVVGRExFVkJRVVVzVTBGQlV5eEZRVUZGTzBWQlEyeERMRWxCUVVrc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHRKUVVOcVF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzBkQlEyaEZPMFZCUTBRc1NVRkJTU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhGUVVGRk8wbEJRMnBETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTTdSMEZEYUVVN1JVRkRSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dERRVU5zUWpzN1FVRkZSQ3hUUVVGVExGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZPMFZCUXpkQ0xFbEJRVWtzVjBGQlZ5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dEZRVU14UXl4SlFVRkpMR2RDUVVGblFpeEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZET3p0RlFVVnlSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVTdTVUZEV0N4WFFVRlhMRU5CUVVNc1NVRkJTVHROUVVOa0xFTkJRVU1zUTBGQlF5eDNRa0ZCZDBJN1RVRkRNVUlzVDBGQlR5eERRVUZETEZWQlFWVTdUVUZEYkVJc1EwRkJReXhEUVVGRExHTkJRV003VFVGRGFFSXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJRenRIUVVOc1FpeE5RVUZOTzBsQlEwd3NWMEZCVnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETzBkQlEzWkRPMFZCUTBRc1NVRkJTU3hEUVVGRExFTkJRVU1zZFVKQlFYVkNMRVZCUVVVN1NVRkROMElzVjBGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03UjBGRE5VUXNUVUZCVFR0SlFVTk1MRmRCUVZjc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEdGQlFXRXNSMEZCUnl4blFrRkJaMElzUTBGQlF6dEhRVU4wUkR0RlFVTkVMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zWTBGQll5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPenRGUVVWdVF5eEpRVUZKTEZkQlFWY3NSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzBWQlEyNUZMRWxCUVVrc1EwRkJReXhEUVVGRExITkNRVUZ6UWl4RlFVRkZPMGxCUXpWQ0xFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlR0TlFVTllMRmRCUVZjc1EwRkJReXhMUVVGTE8xRkJRMllzUTBGQlF5eERRVUZETEZsQlFWazdVMEZEWWl4RFFVRkRMRU5CUVVNc2QwSkJRWGRDTEVkQlFVY3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJRenRSUVVOcVJDeERRVUZETEVOQlFVTXNaVUZCWlR0UlFVTnFRaXhEUVVGRExFTkJRVU1zYjBKQlFXOUNMRU5CUVVNN1MwRkRNVUlzVFVGQlRUdE5RVU5NTEZkQlFWY3NRMEZCUXl4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExHVkJRV1VzUjBGQlJ5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRPMHRCUXpWRU8wZEJRMFlzVFVGQlRUdEpRVU5NTEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSVHROUVVOWUxGZEJRVmNzUTBGQlF5eEpRVUZKTzFGQlEyUXNRMEZCUXl4RFFVRkRMSGRDUVVGM1FqdFJRVU14UWl4UFFVRlBMRU5CUVVNc1ZVRkJWVHRSUVVOc1FpeERRVUZETEVOQlFVTXNZMEZCWXl4SFFVRkhMRU5CUVVNN1VVRkRjRUlzUTBGQlF5eERRVUZETEZsQlFWazdVVUZEWkN4RFFVRkRMRU5CUVVNc1kwRkJZenRSUVVOb1FpeERRVUZETEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03UzBGRE1VSXNUVUZCVFR0TlFVTk1MRmRCUVZjc1EwRkJReXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEdOQlFXTXNSMEZCUnl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wdEJRekZFTzBkQlEwWTdSVUZEUkN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExHTkJRV01zUlVGQlJTeFhRVUZYTEVOQlFVTXNRMEZCUXpzN1JVRkZia01zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRVZCUVVVN1NVRkRhRUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4alFVRmpPMGxCUTNSQ0xFdEJRVXNzUlVGQlJTeERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRU5CUVVNc1EwRkJReXhuUWtGQlowSTdSMEZET1VNc1EwRkJReXhEUVVGRE8wVkJRMGdzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRVZCUVVVN1NVRkRhRUlzUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4aFFVRmhPMGxCUTNCQ0xFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzUTBGQlF5eERRVUZETEdkQ1FVRm5RanRIUVVOb1JDeERRVUZETEVOQlFVTTdRMEZEU2pzN1FVRkZSQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNSVUZCUlR0RlFVTXhRaXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hGUVVGRkxGZEJRVmNzUlVGQlJTeFZRVUZWTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMFZCUTNSR0xFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzVjBGQlZ5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZPMGxCUTNaRUxFbEJRVWtzVjBGQlZ6dE5RVU5pTEVOQlFVTXNRMEZCUXl4TFFVRkxPMDFCUTFBc1RVRkJUU3hEUVVGRExGZEJRVmM3VFVGRGJFSXNRMEZCUXl4RFFVRkRMR05CUVdNc1EwRkJReXh4UWtGQmNVSXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVNdlF5eEpRVUZKTEZOQlFWTXNSMEZCUnl4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN08wbEJSWFpFTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhKUVVGSkxGTkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTXNaVUZCWlN4RFFVRkRPMGxCUTNKRUxHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN1NVRkZiRUlzUTBGQlF5eERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMGRCUTNKQ0xFTkJRVU1zUTBGQlF6czdSVUZGU0N4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNWVUZCVlN4RlFVRkZMRmRCUVZjc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBWQlEzUkdMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRVZCUVVVc1YwRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eEZRVUZGTzBsQlEzWkVMRWxCUVVrc1dVRkJXVHROUVVOa0xFTkJRVU1zUTBGQlF5eExRVUZMTzAxQlExQXNUVUZCVFN4RFFVRkRMRmRCUVZjN1RVRkRiRUlzUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXp0SlFVTm9SQ3hKUVVGSkxGTkJRVk1zUjBGQlJ5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdPMGxCUlhwRUxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4SlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETzBsQlEzSkVMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdTVUZGYkVJc1EwRkJReXhEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETzBkQlEzSkNMRU5CUVVNc1EwRkJRenREUVVOS0xFTkJRVU03TzBGQlJVWXNTVUZCU1N4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRExFVkJRVVU3UlVGRE1VSXNjMEpCUVhOQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTzBsQlEzaENMR2RDUVVGblFqdEpRVU5vUWl4alFVRmpPMGxCUTJRc1QwRkJUenRKUVVOUUxGbEJRVms3U1VGRFdpeFpRVUZaTzBsQlExb3NhVUpCUVdsQ08wbEJRMnBDTEZsQlFWazdTVUZEV2l4SFFVRkhPMGxCUTBnc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4RFFVRkRPMFZCUTNSQ0xITkNRVUZ6UWl4RFFVRkRMRU5CUVVNc1JVRkJSVHRKUVVONFFpeHBRa0ZCYVVJN1NVRkRha0lzWlVGQlpUdEpRVU5tTEU5QlFVODdTVUZEVUN4aFFVRmhPMGxCUTJJc1dVRkJXVHRKUVVOYUxHdENRVUZyUWp0SlFVTnNRaXhYUVVGWE8wbEJRMWdzUjBGQlJ6dEpRVU5JTEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU1zUTBGQlF6dERRVU4yUWl4RFFVRkRPenRCUVVWR0xGTkJRVk1zYzBKQlFYTkNPMFZCUXpkQ0xFTkJRVU03UlVGRFJDeEhRVUZITzBWQlEwZzdSVUZEUVN4SlFVRkpMR1ZCUVdVc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdSVUZETjBJc1NVRkJTU3hoUVVGaExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUXpOQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRGUVVOdVFpeEpRVUZKTEZkQlFWY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UlVGRGVrSXNTVUZCU1N4VlFVRlZMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBWQlEzaENMRWxCUVVrc1owSkJRV2RDTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wVkJRemxDTEVsQlFVa3NVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEZRVU4yUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdSVUZEWml4SlFVRkpMR05CUVdNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMFZCUlRWQ0xFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN08wVkJSWGhDTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWNzU1VGQlNTeERRVUZETzBWQlF6ZENMRWxCUVVrc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMFZCUXpsQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1JVRkZjRUlzVTBGQlV5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFVkJRVVU3U1VGRE0wSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJRenROUVVOb1FpeHBRa0ZCYVVJc1IwRkJSeXhSUVVGUkxFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMR3RDUVVGclFpeERRVUZETEVOQlFVTTdTVUZEYWtVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hDTEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3U1VGRmJFSXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRE8wbEJRM0JDTEVOQlFVTXNRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRIUVVOd1FqczdSVUZGUkN4VFFVRlRMR05CUVdNc1IwRkJSenRKUVVONFFpeHZRa0ZCYjBJc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETTBJc1EwRkJReXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0SlFVTjJSQ3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1lVRkJZU3hGUVVGRkxGZEJRVmNzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wZEJRMmhGT3p0RlFVVkVMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzVlVGQlZTeERRVUZETEVWQlFVVTdTVUZEY0VRc2FVSkJRV2xDTEVkQlFVY3NUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wbEJRM1pETEd0Q1FVRnJRaXhIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0SlFVTTVRaXhSUVVGUk8wMUJRMDRzUTBGQlF5eERRVUZETEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExHVkJRV1VzUTBGQlF6dFBRVU55UXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF6czdTVUZGZWtNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hYUVVGWExFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1EwRkJRenRKUVVNM1JDeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTEZOQlFWTXNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJRenM3U1VGRmVrUXNRMEZCUXl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdTVUZGY0VRc1EwRkJReXhEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZETzBsQlEzQkNMRU5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dEhRVU53UWl4RFFVRkRMRU5CUVVNN1EwRkRTanM3UVVGRlJDeEpRVUZKTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1JVRkJSVHRGUVVONlFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE96dEZRVVY0UWl4SlFVRkpMR05CUVdNc1IwRkJSeXhaUVVGWkxFVkJRVVVzVDBGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEZRVU40UlN4SlFVRkpMR2RDUVVGblFpeEhRVUZITEZsQlFWa3NSVUZCUlN4UFFVRlBMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTEZGQlFWRXNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenM3UlVGRmJFZ3NVMEZCVXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZPMGxCUXpWRExFbEJRVWtzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzBsQlF6bERMRWxCUVVrc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdE5RVU5vUWl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RlFVRkZPMUZCUTNaQ0xFOUJRVThzUzBGQlN5eERRVUZETzA5QlEyUTdUVUZEUkR0UlFVTkZMRU5CUVVNc1UwRkJVeXhMUVVGTExFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXp0VFFVTTNRaXhUUVVGVExFbEJRVWtzUTBGQlF5eERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1pVRkJaU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEYUVVN1VVRkRRU3hQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUTBGQlF6dFBRVU55UXp0TFFVTkdPenRKUVVWRUxFbEJRVWtzVlVGQlZTeEhRVUZITEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNN1NVRkRjRU1zU1VGQlNTeE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMDFCUTJoQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVU3VVVGRGRrSXNUMEZCVHl4TFFVRkxMRU5CUVVNN1QwRkRaRHROUVVORU8xRkJRMFVzUTBGQlF5eFZRVUZWTEV0QlFVc3NRMEZCUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRE8xTkJRemxDTEZWQlFWVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eGpRVUZqTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVNdlJEdFJRVU5CTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZuUWl4RFFVRkRPMDlCUTNKRE8wdEJRMFk3U1VGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SFFVTmlPenRGUVVWRUxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFVkJRVVVzVTBGQlV5eEZRVUZGTEZWQlFWVXNRMEZCUXl4RlFVRkZPMGxCUTNCRU8wMUJRMFVzUTBGQlF5eERRVUZETEVOQlFVTXNhMEpCUVd0Q0xFbEJRVWtzUTBGQlF5eERRVUZETEd0Q1FVRnJRaXhGUVVGRk8wMUJReTlETEVOQlFVTXNRMEZCUXl4blFrRkJaMEk3VFVGRGJFSTdUVUZEUVN4UFFVRlBPMHRCUTFJN08wbEJSVVFzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNSVUZCUlR0TlFVTTFReXhQUVVGUE8wdEJRMUk3TzBsQlJVUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0U3VVVGRGRFTXNVVUZCVVN4RFFVRkRMR0ZCUVdFN1VVRkRkRUlzUTBGQlF5eERRVUZETEdGQlFXRXNRMEZCUXl4aFFVRmhMRU5CUVVNN1NVRkRiRU1zU1VGQlNTeGhRVUZoTEVWQlFVVTdUVUZEYWtJc1NVRkJTU3hoUVVGaExFTkJRVU1zVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTjBReXhoUVVGaExFZEJRVWNzWVVGQllTeERRVUZETEdWQlFXVXNRMEZCUXl4aFFVRmhMRU5CUVVNN1QwRkROMFFzVFVGQlRUczdVVUZGVEN4UFFVRlBMR0ZCUVdFc1EwRkJReXhWUVVGVkxFVkJRVVU3VlVGREwwSXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQllTeERRVUZETzFOQlEzaEVPMDlCUTBZN1RVRkRSQ3hKUVVGSkxGVkJRVlVzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlR0UlFVTTNRaXhQUVVGUE8wOUJRMUk3UzBGRFJqczdTVUZGUkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRFppeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN08wbEJSV1lzVVVGQlVTeERRVUZETEVOQlFVTXNTMEZCU3p0TlFVTmlMRXRCUVVzc1JVRkJSVHRSUVVOTUxFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlR0VlFVTmlMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZaTEVOQlFVTTdVMEZETVVJc1RVRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdWVUZEYmtJc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEdOQlFXTXNRMEZCUXp0VFFVTTFRaXhOUVVGTk8xVkJRMHdzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRPMU5CUTJRN1VVRkRSQ3hOUVVGTk8wMUJRMUlzUzBGQlN5eEZRVUZGTzFGQlEwd3NTVUZCU1N4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRk8xVkJRMklzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4aFFVRmhMRU5CUVVNN1UwRkRNVUlzVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN1ZVRkRia0lzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4bFFVRmxMRU5CUVVNN1UwRkROVUlzVFVGQlRUdFZRVU5NTEUxQlFVMHNSMEZCUnl4RlFVRkZMRU5CUVVNN1UwRkRZanRSUVVORUxFMUJRVTA3VFVGRFVpeExRVUZMTEVWQlFVVTdVVUZEVEN4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVU3VlVGRFlpeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJRenRUUVVONlFpeE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRWUVVOdVFpeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMR05CUVdNc1EwRkJRenRUUVVNelFpeE5RVUZOTzFWQlEwd3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOaU8xRkJRMFFzVFVGQlRUdE5RVU5TTEV0QlFVc3NSVUZCUlR0UlFVTk1MRWxCUVVrc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJUdFZRVU5pTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU03VTBGRE0wSXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3VlVGRGJrSXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExHVkJRV1VzUTBGQlF6dFRRVU0zUWl4TlFVRk5PMVZCUTB3c1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETzFOQlEyUTdVVUZEUkN4TlFVRk5PMDFCUTFJc1MwRkJTeXhGUVVGRk8xRkJRMHdzU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZPMVZCUTJRc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTTdVMEZETlVJc1RVRkJUVHRWUVVOTUxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4bFFVRmxMRU5CUVVNN1UwRkROMEk3VVVGRFJDeE5RVUZOTzAxQlExSXNTMEZCU3l4RlFVRkZPMUZCUTB3c1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZETTBJc1RVRkJUVHROUVVOU0xFdEJRVXNzUlVGQlJUdFJRVU5NTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhsUVVGbExFTkJRVU03VVVGRE5VSXNUVUZCVFR0TlFVTlNMRXRCUVVzc1JVRkJSVHRSUVVOTUxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNZVUZCWVN4RFFVRkRPMUZCUTNwQ0xFMUJRVTA3VFVGRFVpeExRVUZMTEVWQlFVVTdVVUZEVEN4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zWVVGQllTeERRVUZETzFGQlF6RkNMRTFCUVUwN1RVRkRVanRSUVVORkxFOUJRVTg3UzBGRFZqczdTVUZGUkN4SlFVRkpMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zWlVGQlpTeEpRVUZKTEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1RVRkRPVU1zVDBGQlR6dExRVU5TTzBsQlEwUXNTVUZCU1N4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExHVkJRV1VzU1VGQlNTeE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMDFCUXpsRExFOUJRVTg3UzBGRFVqczdTVUZGUkN4UFFVRlBMRU5CUVVNc1UwRkJVeXhKUVVGSkxFMUJRVTBzUTBGQlF6dEpRVU0xUWl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFMUJRVTBzUTBGQlF6dEpRVU0zUWl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBsQlJXeENMRWxCUVVrc2IwSkJRVzlDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGRk8wMUJRM2hETEVOQlFVTXNRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenRMUVVOd1FqdEhRVU5HTEVOQlFVTXNRMEZCUXp0RFFVTktMRU5CUVVNN08wRkJSVVlzU1VGQlNTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRMRVZCUVVVN1JVRkRkRUlzU1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenM3UlVGRmVFSXNVMEZCVXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNUVUZCVFN4RlFVRkZPMGxCUXpWRExFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRja1FzU1VGQlNTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRk5CUVZNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGNFTXNTVUZCU1N4UlFVRlJPMDFCUTFZc1owSkJRV2RDTEVkQlFVY3NUMEZCVHl4RFFVRkRMRmxCUVZrc1MwRkJTeXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETzBsQlEyNUZMRWxCUVVrc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEV0QlFVc3NRMEZCUXl4RFFVRkRPMGxCUTNSRExFbEJRVWtzVDBGQlR6dE5RVU5VTEU5QlFVOHNRMEZCUXl4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRExGZEJRVmNzUzBGQlN5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPenRKUVVWdVJTeEpRVUZKTEZOQlFWTXNRMEZCUXpzN08wbEJSMlFzU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVN1RVRkRka01zVTBGQlV5eEhRVUZITEV0QlFVc3NTVUZCU1N4UlFVRlJMRU5CUVVNN1MwRkRMMElzVFVGQlRUdE5RVU5NTEZOQlFWTXNSMEZCUnl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRE8wdEJReTlDT3p0SlFVVkVMRTlCUVU4c1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdSMEZEZUVRN08wVkJSVVFzVTBGQlV5eHBRa0ZCYVVJc1EwRkJReXhEUVVGRExFVkJRVVU3U1VGRE5VSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF6dEpRVU4wUWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRPenRKUVVVelFpeEpRVUZKTEU5QlFVOHNUVUZCVFN4TFFVRkxMRmRCUVZjc1NVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFhRVUZYTEVWQlFVVTdPMDFCUld4RkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF6dE5RVU5vUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZETlVJN08wbEJSVVFzU1VGQlNTeERRVUZETEVOQlFVTXNVMEZCVXl4SlFVRkpMRU5CUVVNc1EwRkJReXhUUVVGVExFdEJRVXNzUTBGQlF5eEZRVUZGT3p0TlFVVndReXhOUVVGTkxFbEJRVWtzUlVGQlJTeERRVUZETzAxQlEySXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJRenRMUVVOa096dEpRVVZFTEVsQlFVa3NUVUZCVFN4TFFVRkxMRTFCUVUwc1NVRkJTU3hOUVVGTkxFdEJRVXNzVFVGQlRTeHRRa0ZCYlVJN08wMUJSVE5FTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1RVRkRXQ3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXp0TFFVTjJRanM3U1VGRlJDeEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVN08wMUJSV1FzVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UzBGRE0wSTdTVUZEUkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBkQlEzcENPenRGUVVWRUxGTkJRVk1zZFVKQlFYVkNMRU5CUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVTdPMGxCUlhaRUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4SlFVRkpMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVWQlFVVTdUVUZETVVRc1QwRkJUeXhKUVVGSkxFTkJRVU03UzBGRFlqczdTVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0TlFVTTNRaXhQUVVGUExFdEJRVXNzUTBGQlF6dExRVU5rT3p0SlFVVkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6czdTVUZGY0VJc1QwRkJUeXhOUVVGTkxFbEJRVWtzVFVGQlRTeExRVUZMTEU5QlFVOHNSVUZCUlR0TlFVTnVReXhKUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVVUZEY0VRc1QwRkJUeXhKUVVGSkxFTkJRVU03VDBGRFlqczdUVUZGUkN4SlFVRkpMRXRCUVVzc1IwRkJSMFFzUzBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMDFCUTNoQ0xFbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhKUVVGSk8xRkJRM0JGTEVWQlFVVTdUMEZEU0N4RFFVRkRPenM3VFVGSFJpeEpRVUZKTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1pVRkJaU3hEUVVGRExFVkJRVVU3VVVGRGJrTXNTVUZCU1N4WlFVRlpMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRPMUZCUXpkRUxFbEJRVWtzV1VGQldTeEhRVUZITEVOQlFVTXNSVUZCUlR0VlFVTndRanRaUVVORkxFVkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU4yUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhUUVVGVExFdEJRVXNzV1VGQldTeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkRiRVE3V1VGRFFTeFBRVUZQTEVsQlFVa3NRMEZCUXp0WFFVTmlPMU5CUTBZN1VVRkRSQ3hKUVVGSkxHRkJRV0VzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE5VUXNTVUZCU1N4aFFVRmhMRWRCUVVjc1EwRkJReXhGUVVGRk8xVkJRM0pDTzFsQlEwVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1ZVRkJWU3hMUVVGTExFTkJRVU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMWxCUTNoRExFVkJRVVVzVFVGQlRTeERRVUZETEZWQlFWVXNTMEZCU3l4aFFVRmhMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU53UkR0WlFVTkJMRTlCUVU4c1NVRkJTU3hEUVVGRE8xZEJRMkk3VTBGRFJqdFBRVU5HT3p0TlFVVkVMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETzB0QlF6VkNPenRKUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETzBkQlEyUTdPMFZCUlVRc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRVZCUVVVN1NVRkROVUlzU1VGQlNTeEhRVUZITEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETDBJc1NVRkJTU3hOUVVGTkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNCQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3U1VGRmNFSXNTVUZCU1N4MVFrRkJkVUlzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlJUdE5RVU55UkN4UFFVRlBPMHRCUTFJN08wbEJSVVFzU1VGQlNTeGhRVUZoTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUXpGQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMR2RDUVVGblFpeEZRVUZGT3pzN1RVRkhhRU1zVDBGQlR5eERRVUZETEZOQlFWTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTTdUVUZEY0VRc1QwRkJUeXhEUVVGRExGVkJRVlVzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03UzBGRGRFUXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNSVUZCUlRzN08wMUJSM0JFTEVsQlFVa3NUVUZCVFN4RlFVRkZPMUZCUTFZc1QwRkJUeXhEUVVGRExGTkJRVk1zU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU03VDBGRGNrUXNUVUZCVFR0UlFVTk1MRTlCUVU4c1EwRkJReXhUUVVGVExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wOUJRM0pFTzAxQlEwUXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJRenRMUVVOMFFpeE5RVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMR2RDUVVGblFpeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMR2RDUVVGblFpeEZRVUZGT3pzN1RVRkhjRVFzU1VGQlNTeE5RVUZOTEVWQlFVVTdVVUZEVml4UFFVRlBMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJRenRQUVVOMFJDeE5RVUZOTzFGQlEwd3NUMEZCVHl4RFFVRkRMRlZCUVZVc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNN1QwRkRkRVE3VFVGRFJDeGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMHRCUTNSQ096dEpRVVZFTEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3U1VGRmJFSXNZVUZCWVN4SFFVRkhMR0ZCUVdFc1NVRkJTU3h2UWtGQmIwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRGRFVXNTVUZCU1N4aFFVRmhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTzAxQlF5OUNMRU5CUVVNc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF6dE5RVU53UWl4RFFVRkRMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03UzBGRGNFSTdSMEZEUmpzN1JVRkZSQ3hKUVVGSkxFOUJRVThzVFVGQlRTeERRVUZETEU5QlFVOHNTMEZCU3l4WFFVRlhMRVZCUVVVN1NVRkRla01zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhEUVVGRE8wZEJRMjVFTEUxQlFVMHNTVUZCU1N4UFFVRlBMRTFCUVUwc1EwRkJReXhaUVVGWkxFdEJRVXNzVjBGQlZ5eEZRVUZGTzBsQlEzSkVMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4WlFVRlpMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0SFFVTjRSRHREUVVOR0xFTkJRVU03TzBGQlJVWXNTVUZCU1N4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRExFVkJRVVU3UlVGRGRFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhoUVVGaExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVU3U1VGRGFFUXNUMEZCVHp0SFFVTlNPenRGUVVWRUxFbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN08wVkJSWGhDTEZOQlFWTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVU3U1VGRGNrTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRPVU1zU1VGQlNTeFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJRenRKUVVOd1F5eEpRVUZKTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEyeERMRWxCUVVrc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN08wbEJSV3hETEVsQlFVa3NWVUZCVlN4SFFVRkhMRlZCUVZVc1JVRkJSVHM3TzAxQlJ6TkNPMUZCUTBVc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEpRVUZKTEZOQlFWTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTzFOQlF5OUVMRTFCUVUwc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCUXp0UlFVTXZRanM3VVVGRlFTeFBRVUZQTEUxQlFVMHNRMEZCUXl4UFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJRenRQUVVNelJEdExRVU5HTEUxQlFVMHNTVUZCU1N4VlFVRlZMRWRCUVVjc1ZVRkJWU3hGUVVGRk96czdUVUZIYkVNN1VVRkRSU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVsQlFVa3NWVUZCVlN4TFFVRkxMRU5CUVVNc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEdOQlFXTTdVMEZET1VRc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeFZRVUZWTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUTJoRE8xRkJRMEVzVDBGQlR5eEpRVUZKTEVOQlFVTTdUMEZEWWp0TFFVTkdPenRKUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETzBkQlEySTdPMFZCUlVRc1UwRkJVeXhqUVVGakxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NSVUZCUlR0SlFVTm9SQ3hQUVVGUExFTkJRVU1zVTBGQlV5eEpRVUZKTEZkQlFWY3NRMEZCUXp0SlFVTnFReXhQUVVGUExFTkJRVU1zVlVGQlZTeEpRVUZKTEZkQlFWY3NRMEZCUXpzN1NVRkZiRU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGRCUTI1Q096dEZRVVZFTEVsQlFVa3NWMEZCVnl4SFFVRkhMRVZCUVVVc1EwRkJRenRGUVVOeVFpeEpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1JVRkRiRUlzU1VGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMFZCUTJZc1NVRkJTU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZET3p0RlFVVjBRaXhUUVVGVExGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVTdTVUZEYmtJc1NVRkJTU3hEUVVGRExFTkJRVU1zWVVGQllTeEZRVUZGTzAxQlEyNUNMRTlCUVU4c1EwRkJReXhEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0TFFVTXpRaXhOUVVGTk96dE5RVVZNTEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUTFZN1IwRkRSanM3UlVGRlJDeFRRVUZUTEZsQlFWa3NRMEZCUXl4RFFVRkRMRVZCUVVVN1NVRkRka0lzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJReXhYUVVGWExFdEJRVXNzUzBGQlN5eEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRXRCUVVzc1EwRkJReXhGUVVGRk8wMUJReTlFTEU5QlFVOHNTMEZCU3l4RFFVRkRPMHRCUTJRN1NVRkRSQ3hKUVVGSkxFTkJRVU1zUTBGQlF5eGhRVUZoTEVsQlFVa3NRMEZCUXl4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzAxQlEyNUVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMkk3U1VGRFJEdE5RVU5GTEVOQlFVTXNRMEZCUXl4WFFVRlhPMDFCUTJJc1EwRkJReXhEUVVGRExGZEJRVmNzUzBGQlN5eFBRVUZQTzAxQlEzcENMRU5CUVVNc1EwRkJReXhYUVVGWExFdEJRVXNzUTBGQlF5eERRVUZETEc5Q1FVRnZRanROUVVONFF6dE5RVU5CTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN1NVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dEhRVU5rT3p0RlFVVkVMRk5CUVZNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUlVGQlJUdEpRVU55UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTzAxQlEzQkNMRTlCUVU4N1MwRkRVanM3U1VGRlJDeEpRVUZKTEV0QlFVc3NSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBsQlJYaENMRmRCUVZjc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTm9ReXhYUVVGWExFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNN08wbEJSV2hETEZOQlFWTXNSMEZCUnl4SlFVRkpMRWxCUVVrc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZET3p0SlFVVnFReXhKUVVGSkxGVkJRVlVzUzBGQlN5eEpRVUZKTEVWQlFVVTdUVUZEZGtJc1lVRkJZU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzB0QlF6TkNPMGRCUTBZN08wVkJSVVFzVTBGQlV5eDFRa0ZCZFVJc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeEZRVUZGTEUxQlFVMHNSVUZCUlR0SlFVTjJSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHROUVVNM1FpeFBRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTmtPenRKUVVWRUxFbEJRVWtzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXpzN1NVRkZjRUlzVDBGQlR5eE5RVUZOTEVsQlFVa3NUVUZCVFN4TFFVRkxMRTlCUVU4c1JVRkJSVHROUVVOdVF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRVZCUVVVN1VVRkRjRVFzVDBGQlR5eEpRVUZKTEVOQlFVTTdUMEZEWWpzN1RVRkZSQ3hKUVVGSkxFdEJRVXNzUjBGQlIwRXNTMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wMUJRM2hDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eEpRVUZKTzFGQlEzQkZMRVZCUVVVN1QwRkRTQ3hEUVVGRE96czdUVUZIUml4SlFVRkpMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEVWQlFVVTdVVUZEYmtNc1NVRkJTU3haUVVGWkxFZEJRVWNzVFVGQlRTeERRVUZETEZsQlFWa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRE8xRkJRemRFTEVsQlFVa3NXVUZCV1N4SFFVRkhMRU5CUVVNc1JVRkJSVHRWUVVOd1FqdFpRVU5GTEVWQlFVVXNUVUZCVFN4RFFVRkRMRk5CUVZNc1MwRkJTeXhEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eFRRVUZUTEV0QlFVc3NXVUZCV1N4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03V1VGRGJFUTdXVUZEUVN4UFFVRlBMRWxCUVVrc1EwRkJRenRYUVVOaU8xTkJRMFk3VVVGRFJDeEpRVUZKTEdGQlFXRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETTBRc1NVRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eEZRVUZGTzFWQlEzSkNPMWxCUTBVc1JVRkJSU3hOUVVGTkxFTkJRVU1zVlVGQlZTeExRVUZMTEVOQlFVTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8xbEJRM2hETEVWQlFVVXNUVUZCVFN4RFFVRkRMRlZCUVZVc1MwRkJTeXhoUVVGaExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTndSRHRaUVVOQkxFOUJRVThzU1VGQlNTeERRVUZETzFkQlEySTdVMEZEUmp0UFFVTkdPenROUVVWRUxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRPMHRCUXpWQ096dEpRVVZFTEU5QlFVOHNTMEZCU3l4RFFVRkRPMGRCUTJRN08wVkJSVVFzVTBGQlV5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZPMGxCUTNCQ0xFbEJRVWtzV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMDFCUTI1Q0xFbEJRVWtzUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3VFVGRmVFSXNTVUZCU1N4aFFVRmhMRWRCUVVjc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZET3p0TlFVVXZSQ3hKUVVGSkxGZEJRVmNzUjBGQlJ5eGhRVUZoTEVOQlFVTXNTMEZCU3l4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU03VFVGRE1VUXNTVUZCU1N4WFFVRlhMRWRCUVVjc1lVRkJZU3hEUVVGRExFdEJRVXNzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRPenROUVVVeFJDeEpRVUZKTEhWQ1FVRjFRaXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNWMEZCVnl4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGRk8xRkJReTlFTEU5QlFVODdUMEZEVWpzN1RVRkZSQ3hqUVVGakxFTkJRVU1zVjBGQlZ5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPMDFCUTNwRExGZEJRVmNzUjBGQlJ5eGhRVUZoTEVOQlFVTTdPMDFCUlRWQ0xFbEJRVWtzVjBGQlZ5eEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03TzAxQlJYWkRMRWxCUVVrc1QwRkJUeXhIUVVGSExGZEJRVmNzUjBGQlJ5eFRRVUZUTEVOQlFVTTdUVUZEZEVNc1NVRkJTU3hQUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTzFGQlEyWXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhYUVVGWExFZEJRVWNzVDBGQlR5eERRVUZETzFGQlEyaERMRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVWNzVjBGQlZ5eEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVTm9ReXhUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETzA5QlEzcENPenROUVVWRUxFbEJRVWtzWVVGQllTeERRVUZETEZkQlFWY3NSVUZCUlN4WFFVRlhMRU5CUVVNc1JVRkJSVHRSUVVNelF5eERRVUZETEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVNN1QwRkRjRUk3UzBGRFJqdEhRVU5HTzBWQlEwUXNVMEZCVXl4UlFVRlJMRWRCUVVjN1NVRkRiRUlzU1VGQlNTeERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSVHROUVVNeFFpeGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1RVRkRNVUlzVlVGQlZTeEhRVUZITEZkQlFWY3NRMEZCUXl4WFFVRlhPMUZCUTJ4RExFbEJRVWtzUTBGQlF5eERRVUZETEdGQlFXRXNSVUZCUlR0VlFVTnVRaXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdWVUZETVVJc1QwRkJUenRUUVVOU096dFJRVVZFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0VlFVTjRRaXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdWVUZETVVJc1QwRkJUenRUUVVOU096dFJRVVZFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1JVRkJSVHRWUVVONFJDeGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1ZVRkRNVUlzVDBGQlR6dFRRVU5TT3p0UlFVVkVMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZET3p0UlFVVXpReXhMUVVGTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXp0UlFVTm1MRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETzA5QlEyaENMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UzBGRFVqdEhRVU5HT3p0RlFVVkVMRWxCUVVrc1IwRkJSeXhEUVVGRExHRkJRV0VzUlVGQlJUdEpRVU55UWl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNXVUZCV1N4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wbEJRMmhFTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFhRVUZYTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRPVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0SFFVTTNReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEdsQ1FVRnBRaXhGUVVGRk8wbEJRMmhETEVsQlFVa3NUVUZCVFN4RFFVRkRMRmxCUVZrc1JVRkJSVHROUVVOMlFpeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzWVVGQllTeEZRVUZGTEZWQlFWVXNRMEZCUXl4RFFVRkRPMDFCUTJwRUxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hoUVVGaExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTTdUVUZEYUVRc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRmRCUVZjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dExRVU01UXl4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExHTkJRV01zUlVGQlJUdE5RVU5vUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNaVUZCWlN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wMUJRMjVFTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeGxRVUZsTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1RVRkRiRVFzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxHRkJRV0VzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0TFFVTm9SRHRIUVVOR08wTkJRMFlzUTBGQlF6czdRVUZGUml4SlFVRkpMR1ZCUVdVc1IwRkJSeXhaUVVGWkxFVkJRVVVzVVVGQlVUdEZRVU14UXl4UlFVRlJMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzV1VGQldTeEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8wVkJRM0JGTEd0Q1FVRnJRaXhGUVVGRkxFbEJRVWs3UlVGRGVFSXNhMEpCUVd0Q0xFVkJRVVVzU1VGQlNUdEZRVU40UWl4clFrRkJhMElzUlVGQlJTeEpRVUZKTzBWQlEzaENMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTTdSVUZEZEVJc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXp0RlFVTjBRaXhsUVVGbExFVkJRVVVzUzBGQlN6dEZRVU4wUWl4bFFVRmxMRVZCUVVVc1MwRkJTenRGUVVOMFFpeFhRVUZYTEVWQlFVVXNTVUZCU1R0RlFVTnFRaXhuUWtGQlowSXNSVUZCUlN4TFFVRkxPMFZCUTNaQ0xHZENRVUZuUWl4RlFVRkZMRWxCUVVrN1JVRkRkRUlzVlVGQlZTeEZRVUZGTEVOQlFVTTdRMEZEWkN4RlFVRkZMRVZCUVVVc1EwRkJRenM3UVVGRlRpeEpRVUZKTEZGQlFWRXNSMEZCUnp0RlFVTmlMRmxCUVZrc1JVRkJSU3hUUVVGVE8wVkJRM1pDTEZsQlFWa3NSVUZCUlN4VFFVRlRPMFZCUTNaQ0xGRkJRVkVzUlVGQlJTeFJRVUZSTzBWQlEyeENMRXRCUVVzc1JVRkJSU3hMUVVGTE8wVkJRMW9zUzBGQlN5eEZRVUZGTEV0QlFVczdRMEZEWWl4RFFVRkRPenRCUVVWR0xFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1UwRkJVeXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1dVRkJXU3hGUVVGRk8wVkJRM1JGTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVOc1FpeExRVUZMTEZsQlFWa3NTMEZCU3l4TFFVRkxMRU5CUVVNc1IwRkJSeXhaUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZET3p0RlFVVnFSQ3hKUVVGSkxFOUJRVThzVDBGQlR5eExRVUZMTEZGQlFWRXNSVUZCUlR0SlFVTXZRaXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRIUVVNelF6czdSVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlR0SlFVTnFReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhkRVFVRjNSQ3hEUVVGRExFTkJRVU03UjBGRE0wVTdPMFZCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdPMFZCUlhaQ0xFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6czdSVUZGYUVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eGxRVUZsTEVWQlFVVXNRMEZCUXp0RlFVTnNReXhMUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZsQlFWa3NSVUZCUlR0SlFVTTFRaXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEhRVU14UXpzN1JVRkZSQ3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEVsQlFVa3NRMEZCUXp0RlFVTXpRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXp0RlFVTTFRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0RlFVTjZRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXpzN1JVRkZNVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NXVUZCV1N4RlFVRkZMRTlCUVU4c1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdSVUZETTBVc1NVRkJTU3hKUVVGSkxFZEJRVWNzV1VGQldTeEZRVUZGTEU5QlFVOHNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03TzBWQlJUZEZMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWRCTEV0QlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhUUVVGVExFdEJRVXNzUzBGQlN5eERRVUZETzBWQlF6bERMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4RFFVRkRMRmxCUVZrN1NVRkRia01zU1VGQlNTeHJRa0ZCYTBJc1IwRkJSeXhQUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETzBsQlF6VkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU5zUWl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEzaENMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTm9ReXhQUVVGUExFTkJRVU1zVlVGQlZTeEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8wbEJRM2hETEU5QlFVOHNUVUZCVFN4RFFVRkRPMGRCUTJZc1IwRkJSeXhEUVVGRE8wVkJRMHdzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhIUVVGSExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJN1RVRkRha1FzVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1YwRkJWenROUVVONlF5eERRVUZETEVOQlFVTTdSVUZEVGl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzV1VGQldTeEZRVUZGTEVOQlFVTTdSVUZEYUVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eFBRVUZQTEVOQlFVTXNZVUZCWVN4SlFVRkpMRkZCUVZFc1EwRkJRenM3UlVGRmRrUXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEZRVU5xUkN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0RlFVTjZReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUXpsRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEZRVU5xUkN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1JVRkROVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1JVRkRha1FzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1JVRkRMME1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhIUVVGSExFbEJRVWtzUTBGQlF6dEZRVU0zUWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF6dEZRVU0xUWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFbEJRVWtzUTBGQlF6dEZRVU16UWl4SlFVRkpMRlZCUVZVc1IwRkJSMEVzUzBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRGUVVNeFF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UlVGRGVFUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRVZCUVVVN1NVRkRhRU1zU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVU55UXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSFF5eFBRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wZEJRelZETEUxQlFVMDdTVUZEVEN4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGRCUTNKRE8wVkJRMFFzU1VGQlNTeERRVUZETEdkQ1FVRm5RanRKUVVOdVFrRXNUMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhsUVVGbExFTkJRVU1zUjBGQlIwRXNUMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRPenRGUVVWNlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMFZCUXk5RExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJN1NVRkRia0pCTEU5QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWRCTEU5QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03UlVGREwwUXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRGUVVNeFF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVOMlFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenM3UlVGRmRrSXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dEZRVU5xUkN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0RlFVTjZReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMFZCUXpsRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEZRVU5xUkN4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1JVRkROVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN1JVRkRha1FzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1JVRkRMME1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhIUVVGSExFbEJRVWtzUTBGQlF6dEZRVU0zUWl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRPMFZCUXpkQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1N4RFFVRkRPMFZCUXpGQ0xFbEJRVWtzVlVGQlZTeEhRVUZIUkN4TFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETzBWQlF6RkRMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03UlVGRGRFUXNTVUZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEZRVUZGTzBsQlF5OUNMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4TFFVRkxMRU5CUVVNN1NVRkRjRU1zU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUjBNc1QwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SFFVTTVReXhOUVVGTk8wbEJRMHdzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhIUVVGSExFbEJRVWtzUTBGQlF6dEhRVU53UXp0RlFVTkVMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wVkJRelZGTEVsQlFVa3NRMEZCUXl4blFrRkJaMEk3U1VGRGJrSkJMRTlCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVZEJMRTlCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRGUVVONlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR05CUVdNc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMFZCUXk5RExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJN1NVRkRjRUpCTEU5QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWRCTEU5QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03UlVGREwwUXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRGUVVNeFF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVONFFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenM3UlVGRmRrSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSenRKUVVOWUxFTkJRVU03VFVGRFF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4SlFVRkpMRU5CUVVNN1ZVRkRia0lzVDBGQlR6dFZRVU5RTEU5QlFVOHNRMEZCUXl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXp0WlFVTXpSQ3hMUVVGTE8xbEJRMHdzU1VGQlNUdEpRVU5hTEVOQlFVTTdUVUZEUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhKUVVGSkxFTkJRVU03VlVGRGJFSXNUMEZCVHp0VlFVTlFMRTlCUVU4c1EwRkJReXhUUVVGVExFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaVHRaUVVNMVJDeExRVUZMTzFsQlEwd3NTVUZCU1R0SFFVTmlMRU5CUVVNN08wVkJSVVlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN08wVkJSWEJDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEZkQlFWY3NSVUZCUlN4RlFVRkZMRTlCUVU4c1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEZRVVZxUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8wVkJRMjVFTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF6dEZRVU42UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0RlFVTnlSaXhqUVVGakxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRMEZEZEVJc1EwRkJRenM3UVVGRlJpeG5Ra0ZCWjBJc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFWTXNUVUZCVFN4SlFVRkpPMFZCUTNKRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMGxCUTJwQ0xFOUJRVTg3UjBGRFVqczdPMFZCUjBRc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4SFFVRkhMRWxCUVVrc1EwRkJReXhuUWtGQlowSTdUVUZEYWtRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWE8wMUJRMjVFTEVOQlFVTXNRMEZCUXpzN08wVkJSMDRzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0RlFVTXZReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzBWQlF5OURMRWxCUVVrc1EwRkJReXhuUWtGQlowSTdTVUZEYmtKQkxFOUJRVXNzUTBGQlEwUXNTMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVTTdTVUZETVVORExFOUJRVXNzUTBGQlEwUXNTMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0RlFVTTVReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENPMGxCUTNCQ1F5eFBRVUZMTEVOQlFVTkVMRXRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkRPMGxCUTNwRFF5eFBRVUZMTEVOQlFVTkVMRXRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN096dEZRVWN2UXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRE8wVkJRemxETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVNN08wVkJSVGxETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenM3UlVGRmNrSXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBWQlF5OURMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXpzN1JVRkZhRVFzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0RlFVTXhReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBOQlF6TkRMRU5CUVVNN08wRkJSVVlzWjBKQlFXZENMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUjBGQlJ5eFRRVUZUTEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVN1JVRkRNVVFzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1NVRkRha0lzVDBGQlR6dEhRVU5TT3p0RlFVVkVMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEZRVU55UWl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJRenRGUVVNMVJTeHBRa0ZCYVVJN1NVRkRaaXhKUVVGSk8wbEJRMG9zVFVGQlRUdEpRVU5PTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTzBkQlF6bERMRU5CUVVNN08wVkJSVVlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1JVRkRlRVFzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF6dERRVU12UXl4RFFVRkRPenRCUVVWR0xHZENRVUZuUWl4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFZEJRVWNzVTBGQlV5eFBRVUZQTEVsQlFVazdSVUZEZGtRc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdTVUZEYWtJc1QwRkJUenRIUVVOU096dEZRVVZFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03UlVGRGRrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEZRVU40UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzBWQlEzaENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdSVUZETlVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0RlFVTTFRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdPenRGUVVkMlFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVOd1FpeEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVOMlFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVOMlFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJRenRGUVVNelFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrc1EwRkJRenM3UlVGRk0wSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03UTBGRGRFSXNRMEZCUXpzN1FVRkZSaXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRU5CUVVNc1pVRkJaU3hIUVVGSExGTkJRVk1zWlVGQlpTeEpRVUZKTzBWQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenRMUVVNMVF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRPMHRCUTFZc1RVRkJUU3hEUVVGRExGVkJRVlVzU1VGQlNTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMHRCUTJoRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0RFFVTmtMRU5CUVVNN08wRkROM2hEUml4SlFVRk5SU3h2UWtGQmIwSkRMR1ZCUVdWRUxHbENRVUY2UXp0QlFVTkJMRWxCUVUxRkxHMUNRVUZ0UWtRc1pVRkJaVU1zWjBKQlFYaERPMEZCUTBFc1NVRkJUVU1zVVVGQlVVTXNVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeFJRVUYyUWl4RFFVRmtPMEZCUTBFc1NVRkJUVU1zWjBKQlFXZENSaXhUUVVGVFF5eGhRVUZVTEVOQlFYVkNMR2xDUVVGMlFpeERRVUYwUWp0QlFVTkJMRWxCUVUxRkxGZEJRVmRJTEZOQlFWTkRMR0ZCUVZRc1EwRkJkVUlzWVVGQmRrSXNRMEZCYWtJN1FVRkRRU3hKUVVGTlJ5eGhRVUZoU2l4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEdWQlFYWkNMRU5CUVc1Q08wRkJRMEVzU1VGQlRVa3NhMEpCUVd0Q1RDeFRRVUZUVFN4blFrRkJWQ3hEUVVFd1FpeHZRa0ZCTVVJc1EwRkJlRUk3UVVGRFFTeEpRVUZOUXl4clFrRkJhMEpRTEZOQlFWTkRMR0ZCUVZRc1EwRkJkVUlzY1VKQlFYWkNMRU5CUVhoQ08wRkJRMEVzU1VGQlRVOHNhMEpCUVd0Q1VpeFRRVUZUVFN4blFrRkJWQ3hEUVVFd1FpeHRRa0ZCTVVJc1EwRkJlRUk3UVVGRFFTeEpRVUZOUnl4WFFVRlhWQ3hUUVVGVFF5eGhRVUZVTEVOQlFYVkNMRzFDUVVGMlFpeERRVUZxUWp0QlFVTkJMRWxCUVUxVExHVkJRV1ZXTEZOQlFWTkRMR0ZCUVZRc1EwRkJkVUlzYTBKQlFYWkNMRU5CUVhKQ096dEJRVVZCTEVsQlFVMVZMRmRCUVZkWUxGTkJRVk5OTEdkQ1FVRlVMRU5CUVRCQ0xHZENRVUV4UWl4RFFVRnFRanM3UVVGRlFTeFRRVUZUVFN4WFFVRlVMRWRCUVhWQ08xRkJRMlpETEZOQlFVNHNRMEZCWjBKRExFMUJRV2hDTEVOQlFYVkNMRmRCUVhaQ096dGhRVVZYTEZsQlFVMDdZVUZEVGtRc1UwRkJWQ3hEUVVGdFFrTXNUVUZCYmtJc1EwRkJNRUlzVjBGQk1VSTdSMEZFUml4RlFVVkhMRWRCUmtnN1lVRkhWeXhaUVVGTk8yVkJRMHBFTEZOQlFWZ3NRMEZCY1VKRExFMUJRWEpDTEVOQlFUUkNMRmRCUVRWQ08wZEJSRVlzUlVGRlJ5eEhRVVpJT3p0aFFVbFhMRmxCUVUwN2IwSkJRME1zUTBGQmFFSXNSVUZCYlVKRUxGTkJRVzVDTEVOQlFUWkNReXhOUVVFM1FpeERRVUZ2UXl4WFFVRndRenRIUVVSR0xFVkJSVWNzUjBGR1NEdGhRVWRYTEZsQlFVMDdiMEpCUTBNc1EwRkJhRUlzUlVGQmJVSkVMRk5CUVc1Q0xFTkJRVFpDUXl4TlFVRTNRaXhEUVVGdlF5eFhRVUZ3UXp0SFFVUkdMRVZCUlVjc1IwRkdTRHRoUVVkWExGbEJRVTA3YjBKQlEwTkVMRk5CUVdoQ0xFTkJRVEJDUXl4TlFVRXhRaXhEUVVGcFF5eFhRVUZxUXp0SFFVUkdMRVZCUlVjc1IwRkdTRHM3YTBKQlNXZENReXhQUVVGb1FpeERRVUYzUWl4VlFVRkRReXhGUVVGRUxFVkJRVXRETEVOQlFVd3NSVUZCVnp0bFFVTjBRaXhaUVVGTk8xTkJRMXBLTEZOQlFVZ3NRMEZCWVVNc1RVRkJZaXhEUVVGdlFpeFhRVUZ3UWp0TFFVUkdMRVZCUlVjc1RVRkJUVWNzU1VGQlNTeEhRVVppTzBkQlJFWTdPMkZCVFZjc1dVRkJUVHRoUVVOT1NpeFRRVUZVTEVOQlFXMUNReXhOUVVGdVFpeERRVUV3UWl4WFFVRXhRanRIUVVSR0xFVkJSVWNzUjBGR1NEczdZVUZKVnl4WlFVRk5PMmxDUVVOR1JDeFRRVUZpTEVOQlFYVkNReXhOUVVGMlFpeERRVUU0UWl4WFFVRTVRanRIUVVSR0xFVkJSVWNzUjBGR1NEczdUVUZKU1dZc1RVRkJUV01zVTBGQlRpeERRVUZuUWtzc1VVRkJhRUlzUTBGQmVVSXNWMEZCZWtJc1EwRkJTaXhGUVVFeVF6dHpRa0ZEZGtKb1FpeGhRVUZzUWp0SFFVUkdMRTFCUlU4N2NVSkJRMWxCTEdGQlFXcENPenM3TzBGQlNVb3NVMEZCVTJsQ0xHRkJRVlFzUTBGQmRVSkRMRXRCUVhaQ0xFVkJRVGhDTzAxQlEzaENRU3hOUVVGTlF5eE5RVUZPTEV0QlFXbENkRUlzUzBGQmNrSXNSVUZCTkVJN096czdPMEZCU3psQ1dTeFRRVUZUU1N4UFFVRlVMRU5CUVdsQ0xGVkJRVU5ETEVWQlFVUXNSVUZCVVR0TFFVTndRazBzWjBKQlFVZ3NRMEZCYjBJc1QwRkJjRUlzUlVGQk5rSXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wMUJRMmhEUXl4alFVRkdPenRIUVVSR08wTkJSRVk3TzBGQlQwRkRMRTlCUVU5SUxHZENRVUZRTEVOQlFYZENMRTlCUVhoQ0xFVkJRV2xEU0N4aFFVRnFRenM3T3pzN096dEJRVTlCTEVsQlFVMVBMRmxCUVZreFFpeFRRVUZUUXl4aFFVRlVMRU5CUVhWQ0xGZEJRWFpDTEVOQlFXeENPMEZCUTBFc1NVRkJUVEJDTEV0QlFVc3NTVUZCU1VNc1owSkJRVW9zUTBGQmNVSkdMRk5CUVhKQ0xFTkJRVmc3T3p0QlFVZEJNVUlzVTBGQlUwMHNaMEpCUVZRc1EwRkJNRUlzYVVKQlFURkNMRVZCUVRaRFV5eFBRVUUzUXl4RFFVRnhSQ3hWUVVGRFF5eEZRVUZFTEVWQlFWRTdTMEZEZUVSTkxHZENRVUZJTEVOQlFXOUNMRTlCUVhCQ0xFVkJRVFpDTEZWQlFVTkRMRU5CUVVRc1JVRkJUenROUVVOb1EwTXNZMEZCUmp0SFFVUkdPME5CUkVZN08wRkJUVUVzU1VGQlRVc3NXVUZCV1RkQ0xGTkJRVk5ETEdGQlFWUXNRMEZCZFVJc1lVRkJka0lzUTBGQmJFSTdRVUZEUVN4SlFVRk5Oa0lzYjBKQlFXOUNPVUlzVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXh6UWtGQmRrSXNRMEZCTVVJN1FVRkRRU3hKUVVGTk9FSXNaVUZCWlM5Q0xGTkJRVk5OTEdkQ1FVRlVMRU5CUVRCQ0xIRkNRVUV4UWl4RFFVRnlRanM3UVVGRlFTeFRRVUZUTUVJc1pVRkJWQ3hIUVVFeVFqdFpRVU5tYmtJc1UwRkJWaXhEUVVGdlFrTXNUVUZCY0VJc1EwRkJNa0lzVjBGQk0wSTdUVUZEU1dVc1ZVRkJWV2hDTEZOQlFWWXNRMEZCYjBKTExGRkJRWEJDTEVOQlFUWkNMRmRCUVRkQ0xFTkJRVW9zUlVGQkswTTdjMEpCUXpOQ1dTeHBRa0ZCYkVJN1IwRkVSaXhOUVVWUE8zRkNRVU5aUVN4cFFrRkJha0k3T3pzN1FVRkpTaXhUUVVGVFJ5eHBRa0ZCVkN4RFFVRXlRbUlzUzBGQk0wSXNSVUZCYTBNN1RVRkROVUpCTEUxQlFVMURMRTFCUVU0c1MwRkJhVUpSTEZOQlFYSkNMRVZCUVdkRE96czdPenRCUVV0c1EwVXNZVUZCWVdoQ0xFOUJRV0lzUTBGQmNVSXNWVUZCUTBNc1JVRkJSQ3hGUVVGUk8wdEJRM2hDVFN4blFrRkJTQ3hEUVVGdlFpeFBRVUZ3UWl4RlFVRTJRaXhWUVVGRFF5eERRVUZFTEVWQlFVODdUVUZEYUVORExHTkJRVVk3TzBkQlJFWTdRMEZFUmpzN1FVRlBRVU1zVDBGQlQwZ3NaMEpCUVZBc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVOWExHbENRVUZxUXpzN096c2lmUT09In0=
