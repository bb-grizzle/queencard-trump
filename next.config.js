module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						svgoConfig: {
							plugins: [
								{
									name: "removeViewBox",
									active: false,
								},
							],
						},
					},
				},
			],
		});

		return config;
	},
	images: {
		domains: ["images.unsplash.com"],
	},
};
