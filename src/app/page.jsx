import Board from '@/components/Board';
import Keyboard from '@/components/Keyboard';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <nav className="text-center">
        <h1 className="text-3xl font-bold underline decoration-4 underline-offset-8">
          Wordle Game
        </h1>
      </nav>
      <Board />
      <Keyboard />
    </div>
  );
}
