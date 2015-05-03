module.exports = {
    dist: {
        files: [
            {expand: true, flatten: true, src: ['app/css/*'], dest: 'dist/css', filter: 'isFile'},
            {expand: true, flatten: true, src: ['app/images/*'], dest: 'dist/images', filter: 'isFile'},
            {expand: true, flatten: true, src: ['app/fonts/*'], dest: 'dist/fonts', filter: 'isFile'},
            {expand: true, flatten: true, src: ['app/js/custom.js'], dest: 'dist/js', filter: 'isFile'},
            {expand: true, flatten: true, src: ['app/index.html'], dest: 'dist/', filter: 'isFile'},
            {expand: true, flatten: true, src: ['app/php/*'], dest: 'dist/php', filter: 'isFile'}
        ]
    }
}