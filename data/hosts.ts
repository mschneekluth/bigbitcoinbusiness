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
    title: 'Krypto-Investor & Unternehmer',
    bio: 'Alexander beschäftigt sich seit 2017 intensiv mit Bitcoin und dem Krypto-Sektor. Mit seiner Erfahrung als Investor und Unternehmer bringt er praktisches Know-how aus der Welt der digitalen Assets mit. Er ist bekannt für seine analytische Herangehensweise und seinen Blick auf die Marktmechanismen hinter den großen Bewegungen.',
    image: '/images/hosts/alexander-mayer.jpg',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
    },
  },
  {
    id: 'robert-steinadler',
    name: 'Robert Steinadler',
    title: 'Krypto-Journalist & Analyst',
    bio: 'Robert ist einer der bekanntesten deutschsprachigen Krypto-Journalisten und Analysten. Er verfolgt die Entwicklungen in der Branche seit Jahren hautnah und verfügt über ein weitreichendes Netzwerk in der internationalen Krypto-Community. Seine Stärke liegt in der Einordnung aktueller Ereignisse in den großen Kontext.',
    image: '/images/hosts/robert-steinadler.jpg',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
    },
  },
    {
    id: 'marco-schneekluth',
    name: 'Marco Schneekluth',
    title: 'Blockchain-Entwickler & Berater',
    bio: 'Marco vereint technisches Tiefenwissen mit unternehmerischer Perspektive. Als Blockchain-Entwickler und Berater kennt er die Technologie hinter den großen Projekten aus erster Hand. Im Podcast sorgt er dafür, dass komplexe Konzepte verständlich erklärt werden – ohne dabei an Substanz zu verlieren.',
    image: '/images/hosts/marco.jpeg',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
    },
  },
]
