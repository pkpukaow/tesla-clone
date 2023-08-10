
const Header = () => {
    return (
        <header className="fixed flex items-center justify-between w-screen px-6 py-4 sm:px-16">
            <div>TESLA</div>
            <div className="flex items-center justify-around gap-4">
                <div>Vehicles</div>
                <div>Energy</div>
                <div>Charging</div>
                <div>Discover</div>
                <div>Shop</div>
            </div>
            <div className="flex items-center justify-around gap-2">
                <div>?</div>
                <div>lang</div>
                <div>avatar</div>
            </div>
        </header>
    )
}

export default Header