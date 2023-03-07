import Link from "next/link"
import Container from "../shared/Container"

function Navbar(){
    return (
        <header className="fixed w-full z-10">
            <Container>
                <nav className="w-full flex justify-between text-white">
                    <div>
                        <h1>TM</h1>
                    </div>
                    <div>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/champions">
                            Champions
                        </Link>
                    </div>                  
                </nav>
            </Container></header>
        
    )
}

export default Navbar