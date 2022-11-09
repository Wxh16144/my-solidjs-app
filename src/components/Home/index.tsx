import { Show } from "solid-js";

interface HomeProps {
  isLoggedIn: boolean;
  firstName: string;
}

function Home(props: HomeProps) {
  return (
    <Show
      when={props.isLoggedIn}
      fallback={
        <div>Welcome to the application. Please sign in to continue.</div>
      }
    >
      <div>Welcome back, {props.firstName}!</div>
    </Show>
  );
}

export default Home