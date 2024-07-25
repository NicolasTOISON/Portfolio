module.exports = {
  display: {
    notifications: true,
    offendingContent: true,
    rulesSummary: false,
    shortStats: true,
    verbose: false,
  },
  rules: [
    {
      message: "You’ve got leftover conflict markers",
      regex: /^[<>|=]{4,}/m,
    },
    {
      message: "Discontinued because something should not be committed!",
      regex: /do not commit/i,
    },
    {
      message: "You have unfinished devs",
      nonBlocking: true,
      regex: /(?:FIXME|TODO)/,
    },
    {
      message: "You’ve got leftover forced `true` conditions",
      regex: /if\s+\(?(?:.*\|\|\s*)?true\)?/,
    },
    // JS specific
    {
      filter: /\.js$/,
      message: "🤔 Hum! Did you forget to remove some logs?",
      nonBlocking: true,
      regex: /^\s*console\.log/,
    },
  ],
};
