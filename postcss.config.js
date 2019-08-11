module.exports = {
  // 此处使用postcss的插件
  plugins: [
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: 200,
      propWhiteList: [],
    }),
    require('postcss-custom-properties'),
    require('precss'),
    require('postcss-sprites'),
  ]
}; 