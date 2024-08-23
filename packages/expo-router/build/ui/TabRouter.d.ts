import { CommonNavigationAction, ParamListBase, Router, TabActionType as RNTabActionType, TabNavigationState, TabRouterOptions as RNTabRouterOptions } from '@react-navigation/native';
import { TriggerMap } from './common';
export type ExpoTabRouterOptions = RNTabRouterOptions & {
    triggerMap: TriggerMap;
};
export type ExpoTabActionType = RNTabActionType | CommonNavigationAction | {
    type: 'SWITCH_TABS';
    payload: {
        name: string;
        reset?: boolean;
    };
    source?: string;
    target?: string;
};
export declare function ExpoTabRouter({ triggerMap, ...options }: ExpoTabRouterOptions): Router<TabNavigationState<ParamListBase>, RNTabActionType | {
    type: "GO_BACK";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
        path?: string | undefined;
        merge?: boolean | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
        path?: string | undefined;
        merge?: boolean | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "RESET";
    payload: (Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            path?: string | undefined;
        }> & Readonly<{
            params?: Readonly<object | undefined>;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | import("@react-navigation/native").PartialState<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            path?: string | undefined;
        }> & Readonly<{
            params?: Readonly<object | undefined>;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>> | (Omit<Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            path?: string | undefined;
        }> & Readonly<{
            params?: Readonly<object | undefined>;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }>, "routes"> & {
        routes: Omit<import("@react-navigation/native").Route<string>, "key">[];
    })) | undefined;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SWITCH_TABS";
    payload: {
        name: string;
        reset?: boolean | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
}>;
//# sourceMappingURL=TabRouter.d.ts.map