module.exports = {
    env: {
        presets: ['@babel/preset-react', ['@babel/preset-env', { targets: {node: "current"}}], '@babel/preset-typescript']
   }
  };