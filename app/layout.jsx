import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'Promptvault',
  description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'> 
        <body>
          {/* NOTE: ENTIRE APPLICATION IS WRAPPED INSIDE GLOBAL PROVIDERS (REDUX STORE , THEME PROVIDER , NEXT AUTH PROVIDER , E.T.C )  */}
          <Provider>
            <div className='main'>
               <div className='gradient' />
            </div>
            <main className="app">
              <Nav/>
              {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout
