import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Login/firebase.init';
import { useSignOut } from 'react-firebase-hooks/auth';

const Header = () => {
    // const [user, setUser] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Navbar className="container mx-auto" fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    NYM PHOTOGRAPHY
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {user ? (
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                alt="User settings"
                                img={user?.photoURL || undefined}
                                rounded={true}
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user.email}
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            onClick={async () => {
                                const success = await signOut();
                                if (success) {
                                    alert('You are sign out');
                                }
                            }}
                        >
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                ) : (
                    <Link to="/signin">
                        <Button pill={true} className="px-5" color="light">
                            Login
                        </Button>
                    </Link>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/home">Home</Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/services">Services</Navbar.Link>
                <Navbar.Link href="/pricing">Pricing</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
