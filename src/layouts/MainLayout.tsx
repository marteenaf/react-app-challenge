import LogoutButton from "../components/LogoutButton/LogoutButton";
type MainLayoutProps = {
    pageTitle?: string,
    children: string | JSX.Element | JSX.Element[]
}
function MainLayout({ pageTitle, children }: MainLayoutProps) {
    return (<>
        <div style={{
            // right: '0.5rem',
            // top: '0.5rem'
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0rem 1rem',
            boxShadow: '0px 2px 2px var(--border)',
            background: 'var(--surface)'

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