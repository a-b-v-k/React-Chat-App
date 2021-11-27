 import { ChatEngine } from 'react-chat-engine';
 import './App.css';
 import ChatFeed from './components/ChatFeed';
 import LoginForm from './components/LoginForm';

 const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

     return (
         <ChatEngine
            height="100vh"
            projectID="17f8f1b2-4c3f-4072-8c22-e1f5031b6406"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            //to be improved
            //renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
     );
 }

 export default App;