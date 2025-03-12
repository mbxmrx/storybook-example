import happoPluginStorybook from "happo-plugin-storybook";
import { RemoteBrowserTarget } from "happo.io";

export default {
  plugins: [happoPluginStorybook({})],
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  targets: {
    "chrome-large": new RemoteBrowserTarget("chrome", {
      viewport: "1024x768",
      prefersReducedMotion: true,
      freezeAnimations: "last-frame",
    }),
  },
};
