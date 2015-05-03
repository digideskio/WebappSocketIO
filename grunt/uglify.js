module.exports = {
	options: {
		mangle: {
			except: ['jQuery']
		}
	},
	generated: {
		files: [
        {
          dest: 'dist/js/app.js',
          src: [ '.tmp/concat/js/app.js' ]
        },
        {
          dest: 'dist/js/appx.js',
          src: [ '.tmp/concat/js/appx.js' ]
        }
      ]
	}
}