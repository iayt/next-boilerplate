import Link from 'next/link'

const Header = () => (
    <>
        <header>
            Header Area
            <nav>
            <Link href="/">
                <a>Main</a>
            </Link> | 
            <Link href="/home">
                <a>Home</a>
            </Link> | 
            <Link href="/form">
                <a>Form</a>
            </Link>
            </nav>
        </header>
    </>
)


export default Header