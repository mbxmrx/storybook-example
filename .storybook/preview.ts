import type { Preview } from "@storybook/react";
import "happo-plugin-storybook/register";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
