/// <reference path="../typings/browser.d.ts" />
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
}
declare module LayoutPageModule {
    interface IPageController {
        addControl(control: any): any;
    }
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
}
declare module LayoutPageModule {
    interface IPageSliderController {
        close(): any;
    }
}
declare module LayoutPageModule {
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