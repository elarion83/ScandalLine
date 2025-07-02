var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return { hasError: true, error: error };
    };
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        console.error('Erreur capturée par ErrorBoundary:', error, errorInfo);
    };
    ErrorBoundary.prototype.render = function () {
        var _this = this;
        if (this.state.hasError) {
            return (React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4" },
                React.createElement("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full" },
                    React.createElement("div", { className: "text-center" },
                        React.createElement("div", { className: "text-red-500 text-4xl mb-4" }, "\uD83D\uDEA8"),
                        React.createElement("h1", { className: "text-xl font-bold text-gray-900 dark:text-white mb-4" }, "Oups ! Une erreur s'est produite"),
                        React.createElement("p", { className: "text-gray-600 dark:text-gray-300 mb-6" }, "L'application a rencontr\u00E9 un probl\u00E8me. Cela peut \u00EAtre d\u00FB \u00E0 :"),
                        React.createElement("div", { className: "text-left space-y-3 mb-6" },
                            React.createElement("div", { className: "flex items-start gap-3" },
                                React.createElement("span", { className: "text-blue-500 text-lg" }, "\uD83C\uDF10"),
                                React.createElement("div", null,
                                    React.createElement("p", { className: "font-medium text-gray-900 dark:text-white" }, "Probl\u00E8me de connexion"),
                                    React.createElement("p", { className: "text-sm text-gray-500 dark:text-gray-400" }, "V\u00E9rifiez votre connexion internet"))),
                            React.createElement("div", { className: "flex items-start gap-3" },
                                React.createElement("span", { className: "text-blue-500 text-lg" }, "\uD83D\uDD04"),
                                React.createElement("div", null,
                                    React.createElement("p", { className: "font-medium text-gray-900 dark:text-white" }, "Cache du navigateur"),
                                    React.createElement("p", { className: "text-sm text-gray-500 dark:text-gray-400" }, "Essayez de vider le cache et recharger")))),
                        React.createElement("div", { className: "space-y-3" },
                            React.createElement("button", { onClick: function () { return window.location.reload(); }, className: "w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors" }, "Recharger la page"),
                            React.createElement("button", { onClick: function () { return _this.setState({ hasError: false }); }, className: "w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" }, "R\u00E9essayer"))))));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(Component));
export default ErrorBoundary;
