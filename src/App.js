import Circle from './Component/Circle';
import Main from './Component/Main';
import TeamMembers from './Component/TeamMembers';
import EditForm from './Component/Task/EditForm';

function App() {
  return (
    <main>
      <TeamMembers />
      <Main />
      <Circle />
      <EditForm />
    </main>
  );
}

export default App;
