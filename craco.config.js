/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = {
  devServer: {
    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.get('/coin/list', function (req, res) {
        res.json({
          success: true,
          desc: null,
          data: [
            {
              id: 1,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Active'
            },
            {
              id: 2,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Terminated'
            },
            {
              id: 3,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Terminated'
            },
            {
              id: 4,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Suspended'
            },
            {
              id: 5,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Active'
            },
            {
              id: 6,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Terminated'
            },
            {
              id: 7,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Suspended'
            },
            {
              id: 8,
              name: 'BLA',
              icon: '',
              price: '$ 3,412,025.12',
              endDate: '08/Sept/2022 16:00',
              status: 'Terminated'
            }
          ]
        })
      })
    }
  },
  webpack: {
    alias: {
      src: path.resolve('./src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule() {
          return {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]_[hash:base64:6]'
                  }
                }
              },
              { loader: 'less-loader' },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: path.resolve(__dirname, 'src/styles/variable.less')
                }
              }
            ]
          }
        }
      }
    }
  ],
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
}
