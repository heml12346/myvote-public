module.exports = {
    mode: "development",
    entry: './src/Participant.js',
    module: {
        rules: [//These are the loaders
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.js$/, loader: 'babel-loader', exclude: /pulse_editor/ },
			{test: /\.jsx$/, loader: 'babel-loader', exclude: /pulse_editor/ },

            {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
           }
        ]
    },
    output: {
        filename: 'participant_bundle.js',
        path: __dirname + '/public',
        publicPath: '/public'
    },
    watch: true,
	watchOptions: {
		ignored: ['files/**/*.js', 'node_modules', "pulse-editor"],
		//poll: 1000 // Check for changes every second
	},
}