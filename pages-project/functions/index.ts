export function onRequest(context) {
  return new Response(
    JSON.stringify({
      message: `hello from Pages! Branch: ${context.env.CF_PAGES_BRANCH}`,
      abVersion: context.env.CF_PAGES_BRANCH === "main" ? "A" : "B",
    })
  );
}
