export function onRequest(context) {
  return new Response(
    JSON.stringify({
      message: `hello from Pages! Branch: ${context.CF_PAGES_BRANCH}`,
      abVersion: context.CF_PAGES_BRANCH === "main" ? "A" : "B",
    })
  );
}
