export interface PodcastEpisode {
  id: string
  title: string
  description: string
  date: string
  pubDate: string
  audioUrl: string | null
  duration: string | null
  image: string | null
  link: string | null
}

export interface PodcastInfo {
  title: string
  description: string
  image: string | null
  link: string
}

export function usePodcastFeed() {
  return useFetch<{ podcast: PodcastInfo; episodes: PodcastEpisode[] }>('/api/podcast')
}
