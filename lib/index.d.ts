import 'core-js/fn/object/assign';
export declare class LaunchApp {
    static defaultConfig: any;
    static openChannel: {
        scheme: {
            preOpen(opt: any): any;
            open: (url: string) => void;
        };
        yingyongbao: {
            preOpen: (opt: any) => any;
            open: (url: string) => void;
        };
        weixin: {
            open: () => void;
        };
        univerlink: {
            preOpen: (opt: any) => any;
            open: (url: string) => void;
        };
    };
    static openStatus: {
        FAILED: number;
        SUCCESS: number;
        UNKNOW: number;
    };
    private configs;
    private openMethod;
    private options;
    private callback;
    constructor(opt: any);
    /**
     * set default config
     * @param obj 
     * @param property
     * @param defaultValue
     */
    setDefaultProperty(obj: any, property: string, defaultValue: any): void;
    getOpenMethod(): {
        preOpen(opt: any): any;
        open: (url: string) => void;
    } | {
        open: () => void;
    };
    /**
     * launch app
     * @param {page:'index',url:'http://tieba.baidu.com/p/2013',param:{},paramMap:{},pkgs:{ios:'',android:''}} opt
     * @param {*} callback
     */
    open(opt?: any, callback?: (status: number, detector: any) => boolean): void;
    /**
     * down package
     */
    down(): void;
    /**
     * map param（for different platform use different names）
     * @param {*} param
     * @param {*} paramMap
     */
    paramMapProcess(param: any, paramMap: any): any;
    /**
     * generating URL parameters
     * @param {*} obj
     */
    stringtifyParams(obj: any): string;
    /**
     * generating URL
     * @param {*} conf
     */
    getUrlFromConf(conf: any): string;
    callend(status: number): boolean;
    /**
     * determine whether or not open successfully
     */
    setTimeEvent(): void;
}
