import { Card, Checkbox, Label } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoLogIn } from 'react-icons/io5';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

type Inputs = {
    email: string;
    password: string;
};

const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const [signInWithEmailAndPassword, user, error] =
        useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    if (error) {
        toast.error('The email address or password is incorrect', {
            position: 'top-center',
            autoClose: 1500,
            hideProgressBar: false,
        });
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className="max-w-xl my-10 container mx-auto px-2">
            <Card>
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@gmail.com"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Required!</span>{' '}
                                Please enter valid email.
                            </p>
                        )}
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password1"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your password
                        </label>
                        <input
                            placeholder="********"
                            type="password"
                            id="password1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('password', { required: true })}
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">Required!</span>{' '}
                                Please enter valid password.
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <Link className="underline" to="/forget">
                            Forget password
                        </Link>
                    </div>
                    <div className="">
                        <button className="bg-cyan-400 text-white duration-500 hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                            <IoLogIn className="mr-2" />
                            Login
                        </button>
                    </div>
                </form>
                <div className="flex justify-center mt-4 gap-4">
                    Do not have an account?{' '}
                    <Link className="underline" to="/signup">
                        Create account
                    </Link>
                </div>
                <div className="mt-4">
                    <p className="text-center">Or</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <FacebookLogin />
                        <GoogleLogin />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Signin;
