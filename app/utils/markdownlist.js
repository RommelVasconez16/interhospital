export default function normalizeMarkdownLists(md) {
  return md.replace(/([^\n])\n- /g, "$1\n\n- ");
}
