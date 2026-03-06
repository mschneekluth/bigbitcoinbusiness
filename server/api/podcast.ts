import { XMLParser } from 'fast-xml-parser'

const RSS_FEED_URL = 'https://letscast.fm/podcasts/big-bitcoin-business-b411321a/feed'

export default defineEventHandler(async () => {
  const xmlData = await $fetch<string>(RSS_FEED_URL)

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    isArray: (name) => name === 'item',
  })

  const result = parser.parse(xmlData)
  const channel = result.rss.channel
  const items: any[] = channel.item ?? []

  const episodes = items.map((item: any, index: number) => ({
    id: typeof item.guid === 'object' ? (item.guid['#text'] ?? `ep-${index}`) : String(item.guid ?? `ep-${index}`),
    title: item.title ?? '',
    description: item.description ?? item['itunes:summary'] ?? '',
    date: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : '',
    pubDate: item.pubDate ?? '',
    audioUrl: item.enclosure?.['@_url'] ?? null,
    duration: item['itunes:duration'] ?? null,
    image: item['itunes:image']?.['@_href'] ?? channel['itunes:image']?.['@_href'] ?? null,
    link: item.link ?? null,
  }))

  return {
    podcast: {
      title: channel.title,
      description: channel.description,
      image: channel['itunes:image']?.['@_href'] ?? null,
      link: channel.link,
    },
    episodes,
  }
})
