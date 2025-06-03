export default function handler(req, res) {
  const repos = ["OAuth_API", "RandomReposStat", "MouseDummy", "MouseDummy", "NetworkCheckerDaemon", "ShieldBadgeGenerator", "WineMenu", "ClamAVMenu", "PerformanceTrackerScript", "GGUF-to-PyTorchTensor", "GeminiPostSQL", "The_WinForms_of_Isaac", "GeminiPostSQL_ChatBot", "GeminiPostSQL_API", "WinFormsZOrderViewer", "FirebaseMessagingNotification", "CSharpPHP_API", "AutoUSBTetherScript", "JavaShopManagement", "AutoUpdaterAndroid", "MLP-Trainer-Examples", "TransformersNERTrainer", "UpgradeLinuxPackagesScript", "JavaCollectionMethods"];
  const randomRepo = repos[Math.floor(Math.random() * repos.length)];

  // Add a cache-busting timestamp
  const timestamp = Date.now();

  const imageUrl = `https://github-readme-stats.vercel.app/api/pin/?username=luismisanve&repo=${randomRepo}&theme=github_dark_dimmed&border_color=ffffff&border_radius=9&cb=${timestamp}`;

  res.setHeader('Cache-Control', 'no-store');

  res.redirect(imageUrl);
}
