const MiniCssExtratPlugin = require('mini-css-extract-plugin');
let mode = "development";
let target = "web";

if(process.env === "production"){
    mode = "production",
    target =  "browserslist"
}

module.exports = {
    mode:mode,
    target:target,
    module:{
      rules:[
        {
            test: /\.s?css$/i,
            use:[MiniCssExtratPlugin.loader ,"css-loader", "postcss-loader", "sass-loader"]
        },  
        {
          test: /\.js$/,
          exclude:/node_modules/,
          use:{
              loader:'babel-loader'
          }

        }
      ]
    },
    plugins:[new MiniCssExtratPlugin()],
    devtool:"source-map",
    devServer:{
        contentBase: './dist',
        hot:true
    }
};