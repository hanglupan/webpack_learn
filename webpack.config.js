const path=require('path');//导入webpack.config.js的文件路径
const HtmlWebpackPlugin=require('html-webpack-plugin');
const TerserPlugin=require('terser-webpack-plugin');
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports={
    mode:'development',//开发者模式，方便调试
    devtool:'inline-source-map',//方便看打包后的代码
    entry:'./src/index.js',//入口文件
    output:{//配置打包后的文件名
        //filename:'[name].[contenthash].js',//[name]会替换成之前的main文件名，contenthash会hash计算
        filename:'dist.js',
        path:path.resolve(__dirname,'dist')//文件路径  path.resolve()接受多个参数，设置多级目录
    },
    resolve:{
        alias:{
            untils:path.resolve(__dirname,'src/untils'),//别名：路径
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'博客list',//标题
        }),
        new BundleAnalyzerPlugin(),
    ],
    optimization:{
        minimize:true,//是否要压缩
        minimizer:[new TerserPlugin()],//用什么工具来压缩
    },
    devServer:{
        static:'./dist',//指定dist目录
    },
    module:{//什么样的扩展名配置什么样的loader
        rules:[{
            test:/\.css$/i,//匹配以css的后缀名 i忽略大小写
            use:['style-loader','css-loader'],
        },{
            test:/\.(png|svg|jpg|jpeg|gif)$/i,//匹配以这些格式为后缀名的 忽略大小写
            type:'asset/resource',//内置属性
        },{
            test:/\.js$/,//匹配js文件
            exclude:/node_modules/,//排除掉node_modules，表示不会转义这个文件夹下的代码
            use:{
                loader:'babel-loader',
                options:{//给loader传递一些配置
                    presets:['@babel/preset-env']
                }
            }
        }
    ]
    }
};