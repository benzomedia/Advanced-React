/**
 * Created by oreuveni
 * Date: 14/11/2018
 * Time: 9:12
 */
import App, { Container } from 'next/app'
import Page from '../components/Page'

class MyApp extends App {
    render () {
        const {Component} = this.props
        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }
}

export default MyApp
