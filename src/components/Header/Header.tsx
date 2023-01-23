import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Login/firebase.init';
import { useSignOut } from 'react-firebase-hooks/auth';
import Logo from '../../asset/logo/logo.png';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const [signOut] = useSignOut(auth);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Navbar className="container mx-auto" fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <img src={Logo} className="mr-3 h-6 sm:h-12" alt="Logo" />
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
                        <Link to="/dashboard">
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                        </Link>
                        <Dropdown.Item>My Orders</Dropdown.Item>
                        <Dropdown.Item>Profile</Dropdown.Item>
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
