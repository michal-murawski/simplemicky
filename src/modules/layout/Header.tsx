import {useTheme} from 'next-themes';

const Header = () => {
    const {systemTheme, theme, setTheme} = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    console.log(theme)

    return (
        <header>
            <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <a
                            href="/src/pages"
                            className="flex items-center text-gray-900 dark:text-white"
                        >
                            <svg
                                className="h-6 w-6 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            <span className="font-semibold text-lg tracking-tight">
                                Simplemickey.com
                            </span>
                        </a>
                    </div>
                    {/*<button*/}
                    {/*    onClick={() =>*/}
                    {/*        currentTheme == 'dark'*/}
                    {/*            ? setTheme('light')*/}
                    {/*            : setTheme('dark')*/}
                    {/*    }*/}
                    {/*    type="button"*/}
                    {/*    className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"*/}
                    {/*>*/}
                    {/*    {currentTheme == 'dark' ? (*/}
                    {/*        <svg*/}
                    {/*            id="theme-toggle-dark-icon"*/}
                    {/*            className="hidden h-5 w-5"*/}
                    {/*            fill="currentColor"*/}
                    {/*            viewBox="0 0 20 20"*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        >*/}
                    {/*            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>*/}
                    {/*        </svg>*/}
                    {/*    ) : (*/}
                    {/*        <svg*/}
                    {/*            id="theme-toggle-light-icon"*/}
                    {/*            className="hidden h-5 w-5"*/}
                    {/*            fill="currentColor"*/}
                    {/*            viewBox="0 0 20 20"*/}
                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                    {/*        >*/}
                    {/*            <path*/}
                    {/*                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"*/}
                    {/*                fillRule="evenodd"*/}
                    {/*                clipRule="evenodd"*/}
                    {/*            ></path>*/}
                    {/*        </svg>*/}
                    {/*    )}*/}
                    {/*</button>*/}
                </div>
            </nav>
        </header>
    );
};

export {Header};
