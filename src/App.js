import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyle from '~/GlobalStyle'
import publicRouters from './routes'
import images from './assets/images'

function App() {
    return (
        <GlobalStyle>
            <div className="App">
                <div className="background-img">
                    <img className="app-bg" src={images.logoFullBottom} alt="" />
                </div>
                <BrowserRouter>
                    <Routes>
                        {publicRouters.map((routes, index) => {
                            const Page = routes.component
                            const Layout = routes.layout
                            return (
                                <Route
                                    key={index}
                                    path={routes.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                ></Route>
                            )
                        })}
                    </Routes>
                </BrowserRouter>
            </div>
        </GlobalStyle>
    )
}

export default App
