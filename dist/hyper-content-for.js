(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("hyperContentFor", [])
  .value("HYPER_CONTENT_FOR_IDS", { })

  .directive("hyperContent", function () {
    return {
      scope: { "for": "@" },

      restrict: "E",

      transclude: true,

      controller: function ($scope, $transclude, HYPER_CONTENT_FOR_IDS) {
        HYPER_CONTENT_FOR_IDS[$scope["for"]] = $transclude();
      }
    };
  })

  .directive("hyperYield", function (HYPER_CONTENT_FOR_IDS) {
    return {
      scope: { to: "@" },

      restrict: "E",

      link: function (scope, elem) {
        interval = null;

        watchFn = function () { return HYPER_CONTENT_FOR_IDS[scope.to]; };

        scope.$watch(watchFn, function (newValue) {
          elem.empty();
          elem.append(newValue);
        });
      }
    };
  });

},{}]},{},[1]);
