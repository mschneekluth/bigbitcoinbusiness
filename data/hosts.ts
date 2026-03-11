export interface Host {
  id: string
  name: string
  title: string
  bio: string
  image: string
  socials: {
    twitter?: string
    linkedin?: string
    website?: string
    instagram?: string
  }
}

export const hosts: Host[] = [
  {
    id: 'alexander-mayer',
    name: 'Alexander Mayer',
    title: '',
    bio: 'Alexander beschäftigt sich seit 2017 intensiv mit Bitcoin und dem Krypto-Sektor. Mit seiner Erfahrung als Investor und Unternehmer bringt er praktisches Know-how aus der Welt der digitalen Assets mit. Er ist bekannt für seine analytische Herangehensweise und seinen Blick auf die Marktmechanismen hinter den großen Bewegungen.',
    image: '/images/hosts/alexander-mayer.jpg',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/alexander-mayer-a18149155/',
      website: 'https://www.decentralist.de/',
    },
  },
  {
    id: 'robert-steinadler',
    name: 'Robert Steinadler',
    title: '',
    bio: 'Robert ist seit 2013 im Krypto-Markt aktiv – angefangen beim GPU-Mining bis hin zu seiner Rolle als CEO der Aritri Media UG und Herausgeber des Bitcoin-Kurier. Als einer der bekanntesten deutschsprachigen Krypto-Journalisten bringt er tiefes Fachwissen rund um Wallet-Technologien, Private Keys und Cold Storage mit. Im Podcast liefert er die journalistische Einordnung, die komplexe Marktentwicklungen verständlich macht.',
    image: '/images/hosts/robert-steinadler.jpg',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/robert-steinadler-b8169665/',
      website: 'https://bitcoin-kurier.de/',
    },
  },
    {
    id: 'marco-schneekluth',
    name: 'Marco Schneekluth',
    title: '',
    bio: 'Marco ist seit 2014 im Bitcoin-Bereich aktiv und Gründer von kryptokenner.de. Sein akademischer Hintergrund – darunter eine Abschlussarbeit über „The Blockchain: A Comparison between Bitcoin and Ethereum" – trifft auf praktische Erfahrung in Hardware-Wallet-Sicherheit und Bitcoin-Verwahrung. Im Podcast sorgt er dafür, dass technische Zusammenhänge klar und ohne Substanzverlust erklärt werden.',
    image: '/images/hosts/marco-schneekluth.jpg',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/marco-schneekluth-03446313b/',
      website: 'https://kryptokenner.de/',
    },
  },
]
