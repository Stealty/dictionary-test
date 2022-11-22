export default function removeBar(text: string) {
  if (text) return text.replaceAll('/', '');
}
