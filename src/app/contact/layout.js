"use client"
import Link from "next/link";
import "./layout.css";
import { usePathname } from "next/navigation";

const Layout = (props) => {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div>
            {pathname !== "/contact/teacherclass" ? (
                <>
                    <h1 className="heading">layout page</h1>
                    <ul className="main">
                        <li>
                            <Link href="/contact">go to the main page</Link>
                        </li>
                        <li>
                            <Link href="/contact/studentclass">go to the studentclass page</Link>
                        </li>
                        <li>
                            <Link href="/contact/teacherclass">go to the teacherclass page</Link>
                        </li>
                    </ul>
                    {props.children}
                </>
            ) : <Link href="/contact">go to the home page</Link>}
        </div>
    );
};

export default Layout;
