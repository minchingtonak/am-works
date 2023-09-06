export default async function sitemap() {
  const routes = ['', '/about', '/experience', 'projects', '/tech'].map(
    (route) => ({
      url: `https://aw.works${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
