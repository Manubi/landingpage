import Document, {
  Head,
  Main,
  NextScript
} from 'next/document'
import {
  ServerStyleSheet
} from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({
      renderPage
    }) {
      const sheet = new ServerStyleSheet()
      const page = renderPage(App => props => sheet.collectStyles( < App { ...props
          }
          />))
          const styleTags = sheet.getStyleElement()
          return { ...page,
            styleTags
          }
        }

        render() {
          return ( <
            html >
            <
            Head >
            <
            title > POMFRIT - Food and Events Community < /title> {
              this.props.styleTags
            } <
            meta name = 'viewport'
            content = 'initial-scale=1.0, width=device-width' / >
            <
            link href = "https://fonts.googleapis.com/css?family=Alfa+Slab+One|Open+Sans"
            rel = "stylesheet" / >
            <
            link rel = "shortcut icon"
            type = "image/x-icon"
            href = "../static/favicon.ico" / >
            <
            /Head> <
            body >
            <
            Main / >
            <
            NextScript / >
            <
            /body> <
            /html>
          )
        }
      }