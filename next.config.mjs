/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	redirects() {
		return [
			{
				source: "/",
				destination: "/properties",
				permanent: true,
			},
		]
	},
}

export default nextConfig
