
# Github user search

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- Have the correct color scheme chosen for them based on their computer preferences.
- Persist theme with localStorage

The GitHub users API endpoint is `https://api.github.com/users/:username`. So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.

```css
body {
  background-color: var(--bg);

  --primary: #0079ff;

  --txt-high-contrast: #2b3442;
  --txt-mid-contrast: #4b6a9b;
  --txt-low-contrast: #697c9a;

  --bg: #f6f8ff;
  --bg-secondary: #fefefe;

  --theme-switch-btn-hover: #222731;

  --error: #f74646;
}

body.dark-theme {
  background-color: var(--bg);

  --primary: #0079ff;

  --txt-high-contrast: #fff;
  --txt-mid-contrast: #ffff;
  --txt-low-contrast: #fff;

  --bg: #141d2f;
  --bg-secondary: #1e2a47;

  --theme-switch-btn-hover: #90a4d4;

  --error: #f74646;
}
```