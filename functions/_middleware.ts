export async function onRequest(context) {
  try {
    // Route to the B version of the site 50% of the time. Only do this on the main branch
    // because any other branch would be a preview and we don't want to recursively fetch to
    // to the preview version of the site.
    const shouldBTest =
      Math.random() < 0.5 && context.env.CF_PAGES_BRANCH === "main";
    if (shouldBTest) {
      const url = new URL(context.request.url)
      url.hostname = 'beta.pages-ab-test.pages.dev'
      return fetch(url.toString(), context.request)
    }
    return await context.next();
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
}
