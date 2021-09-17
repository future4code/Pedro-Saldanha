import React from "react"
import Bio from "../../components/Bio/Bio"
import Footer from "../../components/Footer/Footer"
import SideNavBar from "../../components/SideNavBar/SideNavBar"
import { PageContainer, PageContentContainer } from "../../constants/styled"

const HomePage = () => {
    return (
        <PageContainer>
            <PageContentContainer>
                <SideNavBar />
                <Bio />
            </PageContentContainer>
            <Footer />
        </PageContainer>
    )
}

export default HomePage