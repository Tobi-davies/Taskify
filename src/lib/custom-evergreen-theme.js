import { ThemeProvider, defaultTheme } from "evergreen-ui";

const customTheme = {
  ...defaultTheme,
  fontFamilies: {
    ...defaultTheme.fontFamilies,
    ui: "Kumbh Sans, sans-serif",
    display: "Kumbh Sans, sans-serif",
  },
};

function CustomEvergreenTheme(props) {
  return <ThemeProvider value={customTheme} {...props} />;
}

export default CustomEvergreenTheme;
