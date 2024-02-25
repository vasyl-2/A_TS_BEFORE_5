"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Role = exports.MyClass = exports.MyDecorator = exports.Injectable = exports.DependencyInjection = exports.MyDependency = exports.MyService = void 0;
var my_service_1 = require("./reflect-metada/dependency-injection/my-service");
Object.defineProperty(exports, "MyService", { enumerable: true, get: function () { return my_service_1.MyService; } });
var my_dependency_1 = require("./reflect-metada/dependency-injection/my-dependency");
Object.defineProperty(exports, "MyDependency", { enumerable: true, get: function () { return my_dependency_1.MyDependency; } });
var dependency_injection_1 = require("./reflect-metada/dependency-injection/dependency-injection");
Object.defineProperty(exports, "DependencyInjection", { enumerable: true, get: function () { return dependency_injection_1.DependencyInjection; } });
var injectable_decorator_1 = require("./reflect-metada/dependency-injection/injectable-decorator");
Object.defineProperty(exports, "Injectable", { enumerable: true, get: function () { return injectable_decorator_1.Injectable; } });
var first_1 = require("./reflect-metada/first");
Object.defineProperty(exports, "MyDecorator", { enumerable: true, get: function () { return first_1.MyDecorator; } });
Object.defineProperty(exports, "MyClass", { enumerable: true, get: function () { return first_1.MyClass; } });
var second_1 = require("./reflect-metada/second");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return second_1.Role; } });
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return second_1.User; } });
//# sourceMappingURL=index.js.map