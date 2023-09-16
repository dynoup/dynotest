const path = require('path');

const babelOptions = {
  presets: [['@babel/preset-env', { targets: 'defaults' }]],
  plugins: ['@babel/plugin-proposal-class-properties'], // 정적 class 속성 변환
};

module.exports = {
  entry: './src/main.ts', // entry 파일 설정
  devtool: 'inline-source-map',
  output: {
    // 아웃풋 파일 설정
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // target: ['web', 'es5'],
  mode: 'development', // 번들링 mode 설정
  module: {
    // 모듈 설정
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
