export default function handler(req, res) {
  const repos = ["OAuth_API", "AnotherRepo", "CoolProject"];
  const randomRepo = repos[Math.floor(Math.random() * repos.length)];

  const imageUrl = `https://github-readme-stats.vercel.app/api/pin/?username=luismisanve&repo=${randomRepo}&theme=github_dark_dimmed&border_color=ffffff&border_radius=9`;

  res.redirect(imageUrl);
}
