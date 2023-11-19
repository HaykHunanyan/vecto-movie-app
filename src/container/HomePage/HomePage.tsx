import React from 'react'
import MainMenu from '../../components/organisms/MainMenu'
import Dashboard from '../../components/organisms/Dashboard'

const HomePage: React.FC = () => {
    return (
        <div className='homepage_content'>
            <MainMenu />
            <Dashboard />
        </div>
    )
}

export default HomePage