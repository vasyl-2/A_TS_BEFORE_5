import { MyService } from "./my-service";

export class DependencyInjection {
    // static get<T>(target: any): T {
    static get<T>(target: any): T {
        const isInjectable = Reflect.getMetadata("injectable", target);
        console.log('GET____METADATA____________1', isInjectable)
        if (!isInjectable) {
            // throw new Error("Target is not injectable");
            console.log('GET____METADATA____________2', isInjectable)

        }

        const dependencies = Reflect.getMetadata("design:paramtypes", target) || [];
        console.log('DEPENDENCIES__________________', dependencies);
        const instances = dependencies.map((dep: any) => DependencyInjection.get(dep));
        console.log('instances__________________', instances);
        return new target(...instances);
    }
}

const myService = DependencyInjection.get<MyService>(MyService);
myService.doSomething(); // "MyDependency is doing something"
