import { LaunchApp, detector, ua, isAndroid, isIos, supportLink, inWexin, inWeibo, copy } from '../src/index';
import './index.less';
console.log('detector,', detector);

function addHandler(element, type, handler) {
    if (!element) return;
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler);
    } else {
        element['on' + type] = handler;
    }
}

const linkOpen = document.getElementsByClassName('j_open')[0];
const linkDown = document.getElementsByClassName('j_down')[0];

// Haokan
let schemeConfig = {
    protocol: 'baiduhaokan',
    index: { path: 'home/index' },
    // my
    author: { path: 'author/details/' },
};
const haokanConfig = {
    inApp: false,
    appVersion: '4.9.5.10',
    pkgName: 'com.baidu.haokan',
    deeplink: {
        scheme: {
            android: schemeConfig,
            ios: schemeConfig
        },
        link: {
            index: { url: 'http://hku.baidu.com/h5/share/homeindex' },
            video: { url: 'http://hku.baidu.com/h5/share/detail' },
            miniVideo: { url: 'http://hku.baidu.com/h5/share/minidetail' },
            author: { url: 'http://hku.baidu.com/h5/share/detailauthor' },
            webview: { url: 'http://hku.baidu.com/h5/share/webview' }
        },
        yyb: {
            url: 'http://a.app.qq.com/o/simple.jsp',
            param: {
                pkgname: 'com.baidu.haokan',
                ckey: ''
            }
        },
    },
    pkgs: {
        android: 'https://downpack.baidu.com/baidutieba_AndroidPhone_v8.8.8.6(8.8.8.6)_1020584c.apk',
        ios: 'https://itunes.apple.com/cn/app/id1322948417?mt=8',
        yyb: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.haokan&ckey=CK1374101624513',
        store: {
            // other: {
            //     reg: '',
            //     scheme: '',
            //     id: ''
            // },
        }
    },
    useUniversalLink: true,
    useAppLink: supportLink,
    autodemotion: true,
    useYingyongbao: inWexin && isAndroid,
    useGuideMethod: inWeibo,
    // guideMethod: () => {
    //     alert('出去玩');
    // },
    timeout: 2000,
    landPage: 'http://haokan.baidu.com/download'
};
const lanchHaokan = new LaunchApp(haokanConfig);

addHandler(linkOpen, 'click', function () {
    lanchHaokan.open({
        // useGuideMethod: true,
        useYingyongbao: true,//inWexin && isAndroid,
        launchType: {
            ios: inWexin ? 'store' : 'link',
            android: inWexin ? 'store' : 'scheme',
        },
        page: 'author',
        param: {
            url_key: '4215764431860909454',
            target: 'https%3A%2F%2Fbaijiahao.baidu.com%2Fu%3Fapp_id%3D1611116910625404%26fr%3Dbjhvideo',
        },
        // scheme:'',
        // url:'http://hku.baidu.com/h5/share/detailauthor?url_key=1611116910625404&target=https%3A%2F%2Fbaijiahao.baidu.com%2Fu%3Fapp_id%3D1611116910625404%26fr%3Dbjhvideo',
        // guideMethod: () => {
        //     alert('出去玩opt');
        // },
        timeout: 200,
        clipboardTxt: '#baiduhaokan://webview/?url_key=https%3a%2f%2feopa.baidu.com%2fpage%2fauthorizeIndex-AcHzJLpa%3fproductid%3d1%26gtype%3d1%26idfrom%3dinside-baiduappbanner&pd=yq&tab=guide&tag=guide&source=yq-0-yq#',
        pkgs: {
            android: 'https://sv.bdstatic.com/static/haokanapk/apk/baiduhaokan1021176d.apk',
            ios: 'https://itunes.apple.com/cn/app/id1322948417?mt=8',
            yyb: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.tieba&ckey=CK1374101624513'
        }
    }, (s, d, url) => {
        console.log('callbackout', s, d, url);
        s != 1 && copy(url);
        return 0;
    });

});

addHandler(linkDown, 'click', function () {
    lanchHaokan.download();
})
