import Link from 'next/link'
import Heading from '../components/typography/Heading'

export default function FourOhFour() {
  return <>
    <Heading size="1" title="404 - Page Not Found" />
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}