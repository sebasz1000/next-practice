import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Layout({ children }) {
    const router = useRouter()

    return (
        <>
            <header>
                <h1>MySite</h1>
                <nav className='header-nav'>
                    <ul>
                        <li>
                            <Link className={router.pathname === '/' ? 'active' : ''}
                                href='/' >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={router.pathname === '/about' ? 'active' : ''}
                                href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className={router === '/blog' ? 'active' : ''}
                                href='/blog'>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>FOOTER</footer>
        </>
    )
}