import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'
import { ClerkProvider, SignedIn, UserButton } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div className='rootLayout'>
                <header className='header'>
                    <Link to="/" className='logo' >
                        <img src="/logo_t.png" alt="" />
                    </Link>
                    <div className='user'>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </ClerkProvider>
    )
}

export default RootLayout