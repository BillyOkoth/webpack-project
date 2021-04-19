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
    output:{
      assetModuleFilename: "images/[hash][ext][query]"
      },
    module:{
      rules:[
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type:"asset"
      },
        {
            test: /\.s?css$/i,
            use:[MiniCssExtratPlugin.loader ,"css-loader", "postcss-loader", "sass-loader"]
        },  
        {
          test: /\.jsx?$/,
          exclude:/node_modules/,
          use:{
              loader:'babel-loader'
          }

        }
      ]
    },
  
    resolve:{
      extensions:[".js", ".jsx"]
    },
    plugins:[new MiniCssExtratPlugin()],
    devtool:"source-map",
    devServer:{
        contentBase: './dist',
        hot:true
    }
};