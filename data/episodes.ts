export interface Episode {
  id: string
  title: string
  description: string
  date: string
  youtubeId?: string
  audioUrl?: string | null
  duration?: string | null
  image?: string | null
  link?: string | null
  spotifyUrl?: string
  thumbnail?: string
  tags?: string[]
}

export const episodes: Episode[] = [
  {
    id: 'ep-001',
    title: 'Bitcoin auf dem Weg zu $200.000 – Was steckt dahinter?',
    description: 'In dieser Episode analysieren wir die aktuellen Marktbewegungen und diskutieren, welche Faktoren den Bitcoin-Kurs antreiben. Institutional Adoption, ETFs und Makroökonomie – alles auf dem Tisch.',
    date: '2025-02-15',
    youtubeId: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/',
    tags: ['Bitcoin', 'Marktanalyse', 'ETF'],
  },
  {
    id: 'ep-002',
    title: 'MiCA & Co: Die EU-Regulierung und was sie für uns bedeutet',
    description: 'Die Markets in Crypto-Assets Regulation ist in Kraft. Wir besprechen, was das konkret für Investoren, Unternehmen und die gesamte Krypto-Branche in Europa bedeutet.',
    date: '2025-02-01',
    youtubeId: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/',
    tags: ['Regulierung', 'MiCA', 'Europa'],
  },
  {
    id: 'ep-003',
    title: 'DeFi 2.0: Ist dezentrale Finanzwirtschaft wirklich bereit für den Mainstream?',
    description: 'DeFi verspricht Bankdienstleistungen ohne Banken. Aber wo stehen wir wirklich? Wir beleuchten die Chancen und Risiken und fragen: Wann kommt der Durchbruch?',
    date: '2025-01-18',
    youtubeId: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/',
    tags: ['DeFi', 'Web3', 'Blockchain'],
  },
  {
    id: 'ep-004',
    title: 'NFTs – Hype vorbei oder stiller Aufstieg?',
    description: 'Nach dem großen Hype ist es ruhig geworden um NFTs. Doch unter der Oberfläche entwickeln sich spannende Anwendungsfälle. Was bleibt, was geht?',
    date: '2025-01-05',
    youtubeId: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/',
    tags: ['NFT', 'Web3', 'Kunst'],
  },
  {
    id: 'ep-005',
    title: 'Krypto-Steuern 2025: Der große Überblick für Deutschland',
    description: 'Steuerzeit! Was müssen Krypto-Anleger in Deutschland beachten? Wir sprechen über aktuelle Regelungen, Fallen und Tipps für die Steuererklärung.',
    date: '2024-12-20',
    youtubeId: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/',
    tags: ['Steuern', 'Deutschland', 'Recht'],
  },
  {
    id: 'ep-006',
    title: 'Ethereum vs. Solana: Der Plattformkrieg um die Zukunft',
    description: 'Zwei Riesen, eine Bühne. Ethereum und Solana kämpfen um Entwickler, Nutzer und Kapital. Wer hat die besseren Argumente – und warum muss es überhaupt einen Sieger geben?',
    date: '2024-12-06',
    youtubeId: 'dQw4w9WgXcQ',
    spotifyUrl: 'https://open.spotify.com/show/',
    tags: ['Ethereum', 'Solana', 'Layer1'],
  },
]
