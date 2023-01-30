import Link from 'next/link';
import { BsInstagram, BsFacebook, BsGithub, BsYoutube, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer className='bg-teal-900'>
            <ul className='flex items-center mx-auto justify-between max-w-sm h-40 text-4xl text-teal-50'>
                <li className='hover:text-teal-300 transition-all cursor-pointer'>
                    <Link href="https://www.instagram.com/kinossian.music/">
                        <BsInstagram />
                    </Link>
                </li>
                <li className='hover:text-teal-300 transition-all cursor-pointer'>
                    <Link href="https://www.facebook.com/JeffKinossian/">
                        <BsFacebook />
                    </Link>
                </li>
                <li className='hover:text-teal-300 transition-all cursor-pointer'>
                    <Link href="https://github.com/Kinossian">
                        <BsGithub />
                    </Link>
                </li>
                <li className='hover:text-teal-300 transition-all cursor-pointer'>
                    <Link href="https://www.youtube.com/@kinossianmusic630">
                        <BsYoutube />
                    </Link>
                </li>
                <li className='hover:text-teal-300 transition-all cursor-pointer'>
                    <Link href="https://www.linkedin.com/in/jefferson-kinossian-645199119/">
                        <BsLinkedin />
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;