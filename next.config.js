/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
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
	reactStrictMode: false,
	trailingSlash: true,
	images: {
		loader: "akamai",
		path: "/",
	},
};

module.exports = nextConfig;
