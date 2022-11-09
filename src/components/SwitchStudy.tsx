import { createSignal, Match, Setter, Switch } from "solid-js";


interface Props {
  vote: Setter<number>
}

function VueVote(props: Props) {
  return <button type="button" onClick={() => props.vote(v => v + 1)}>votes</button>
}

function SolidVote(props: Props) {
  return <button type="button" onClick={() => props.vote(v => v + 1)}>votes</button>
}


function SwitchStudy() {
  const [vueVotes, setVueVotes] = createSignal(0);
  const [solidVotes, setSolidVotes] = createSignal(0)

  return (
    <>
      <p>vue:{vueVotes()}</p>
      <p>solid:{solidVotes()}</p>
      <Switch fallback={`equal`}>
        <Match when={solidVotes() > vueVotes()}>
          <h1>Solid has more votes</h1>
        </Match>
        <Match when={solidVotes() < vueVotes()}>
          <h1>Vue has more votes</h1>
        </Match>
      </Switch>
      <footer>
        <VueVote vote={setVueVotes} />
        <SolidVote vote={setSolidVotes} />
      </footer>
    </>
  )
}

export default SwitchStudy
