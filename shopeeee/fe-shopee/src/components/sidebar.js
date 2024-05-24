export function Sidebar () {
    return (
        <div className="main-sidebar sidebar-dark-primary">
        <a href="http://localhost:3000/" className="brand-link">
            <img src="../../images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image image-circle elevation-3"/>
                <span className="brand-text fw-light">Base Admin</span>
        </a>
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image"><img className="img-circle elevation-2" alt="User"/></div>
                    <div className="info"><a className="nav-link" href="/profile"></a></div>
                </div>
                <nav className="mt-2 sidebar-menu">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li className="nav-item menu-open menu-is-opening">
                            <a href="http://localhost:3000/" className="nav-link active">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" className="nav-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z">
                                    </path>
                                </svg>
                                <p>
                                    Quản lý Users
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="right" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z">
                                        </path>
                                    </svg>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a className="nav-link" href="/users">
                                        <svg
                                            stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 512 512" className="nav-icon" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                        </svg>
                                        <p>Danh sách Users</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/users/create">
                                        <svg
                                            stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 512 512" className="nav-icon" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path>
                                        </svg>
                                        <p>Thêm mới User</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}