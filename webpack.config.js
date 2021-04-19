let mode = "development";

if(process.env === "production"){
    mode = "production";
}

module.exports = {
    mode:mode,
    module:{
      rules:[
        {
          test: /\.js$/,
          exclude:/node_modules/,
          use:{
              loader:'babel-loader'
          }

        }
      ]
    },
    devtool:"source-map",
    devServer:{
        contentBase: './dist'
    }
};