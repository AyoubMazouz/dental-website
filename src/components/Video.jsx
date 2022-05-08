
export default function Video({ url }) {
  return <iframe className="aspect-video w-full rounded-xl" frameborder="0" scrolling="no" type="text/html" src={url}></iframe>
}
