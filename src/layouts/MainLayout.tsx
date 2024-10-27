import LogoutButton from "../components/LogoutButton/LogoutButton";

type MainLayoutProps = {
    pageTitle?: string,
    children: string | JSX.Element | JSX.Element[]
}

/**
 * Layout component to act as the main app layout.
 * Includes a title and a logout button to return to the login page
 * @param {MainLayoutProps} props title and slot for nesting pages 
 * @returns {JSX.Element}
 */
function MainLayout({ pageTitle, children }: MainLayoutProps) {
    return (<>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0rem 1rem',
            boxShadow: '0px 2px 2px var(--border)',
            background: 'var(--surface)',
            position: 'sticky',
            width: '100%',
            boxSizing: 'border-box',
            top: '0px'

        }}>
            <h3>{pageTitle}</h3>
            <LogoutButton />
        </div>
        <div>
            {children}
        </div>
    </>)
}

export default MainLayout;