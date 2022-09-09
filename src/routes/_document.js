import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getIntialProps(ctx){
        const initialProps = await Document.getIntialProps(ctx)
        return {...initialProps}
    }


render() {
    return(
        <Html>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" 
                integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossorigin="anonymous"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}

export default MyDocument