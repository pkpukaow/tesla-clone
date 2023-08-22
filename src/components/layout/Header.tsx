import { Button } from "@components/Button"
import { HelpCircle, Globe, UserCircle2 } from "lucide-react"
import teslaLogo from "@assets/tesla.svg"
import { useMediaQuery } from "@hooks/useMediaQuery"

const Header = () => {

    const lg = useMediaQuery('(min-width: 768px)')

    return (
        <header className="fixed flex items-center justify-between w-screen px-6 py-4 text-white sm:px-16">
            <div>
                <Button variant="textWhite" size="base">
                    <img className="w-24 text-white" src={teslaLogo} alt="logo-header" />
                </Button>
            </div>
            {!lg && <Button variant="navMenuBtn" size="base">Menu</Button>}
            {lg &&
                <>
                    <div className="flex items-center justify-around gap-4 text-white">
                        <Button variant="textWhite" size="base">Vehicles</Button>
                        <Button variant="textWhite" size="base">Energy</Button>
                        <Button variant="textWhite" size="base">Charging</Button>
                        <Button variant="textWhite" size="base">Discover</Button>
                        <Button variant="textWhite" size="base">Shop</Button>
                    </div>
                    <div className="flex items-center justify-around gap-4 text-white">
                        <Button variant="textWhite" size="base"><HelpCircle /></Button>
                        <Button variant="textWhite" size="base"><Globe /></Button>
                        <Button variant="textWhite" size="base"><UserCircle2 /></Button>
                    </div>

                </>
            }
        </header>
    )
}

export default Header