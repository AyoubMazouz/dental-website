
export default function Video({ url }) {
  return <iframe className="aspect-video w-full" frameborder="0" scrolling="no" type="text/html" src={url}></iframe>
}
