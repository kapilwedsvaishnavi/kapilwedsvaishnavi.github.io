import { strings } from "../helper/strings"

const Footer = () => {

    const Footer = strings.footer
    return (
        <footer className="bg-green-500">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-7 me-3" alt="FlowBite Logo" /> */}
                            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">{Footer.heading}</span>
                        </a>
                    </div>
                </div>
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-body sm:text-center">© 2026 <a href="" className="hover:underline">Shubhamangal™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer