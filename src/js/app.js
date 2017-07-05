//配置文件

requirejs.config({
    baseUrl: './js',

    paths: {
        'jquery': 'lib/jquery-3.2.1.min'
    }
});

requirejs(['app/index']);