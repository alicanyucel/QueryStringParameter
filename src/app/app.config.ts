import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";
export const appConfig: ApplicationConfig = {
    providers: [provideRouter([
        {
            path: "product",
            loadComponent: () => import("./component/product/product.component").then(c => c.ProductComponent)
        }
    ], withComponentInputBinding())]
};
