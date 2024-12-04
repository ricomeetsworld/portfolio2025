interface ISocialSoup {
  imagePath: string
  username: string
  href: string
  platform: string
  invert?: boolean
}

export const socialSoup: ISocialSoup[] = [
  {
    imagePath: '/x.svg',
    platform: 'X',
    username: '@ricomeetsworld',
    href: 'https://x.com/ricomeetsworld',
    invert: true
  },
  {
    imagePath: '/linkedin.svg',
    platform: 'LinkedIn',
    username: '/enrictrillo',
    href: 'https://linkedin.com/in/enrictrillo'
  },
  {
    imagePath: '/youtube.svg',
    platform: 'YouTube',
    username: '@ricomeetsworld',
    href: 'https://youtube.com/@ricomeetsworld'
  },
  {
    imagePath: '/github.svg',
    platform: 'GitHub',
    username: '@ricomeetsworld',
    href: 'https://github.com/ricomeetsworld',
    invert: true
  },
  {
    imagePath: '/bsky.svg',
    platform: 'BlueSky',
    username: '@ricomeetsworld',
    href: 'https://bsky.app/profile/ricomeetsworld.bsky.social'
  },
]