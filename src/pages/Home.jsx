import { Link } from 'react-router-dom';
import CreateTournamentForm from '../components/TournamentForm/CreateTournamentForm';

export default function Home() {
  return (
    <div>
      <h1>Management Turnamen</h1>
      <CreateTournamentForm />
      <Link to="/tournaments">Lihat Turnamen</Link>
    </div>
  );
}
