/// <reference path="../node_modules/angular-typescript-module/dist/angular-typescript-module.d.ts" />
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
    interface ILayoutPageController {
        showNav(): any;
        hideNav(): any;
        toggleNav(): any;
    }
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
    interface IPageSliderController {
        isVisible: any;
        withOverlay: any;
        close(): any;
    }
}
declare module LayoutPageModule {
    interface IPageOverlay {
    }
    interface IPageController {
        addControl(control: any): any;
        showOverlay(overlay: IPageOverlay): any;
        hideOverlay(overlay: IPageOverlay): any;
    }
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
    interface ITabController {
        title: string;
        name: string;
        icon: string;
    }
}
declare module LayoutPageModule {
    interface ITabsController {
        addTab(tab: ITabController): any;
        selectTabByName(name: string): any;
        selectTabByIndex(idx: number): any;
        selectNextTab(): any;
        selectPreviousTab(): any;
    }
}
