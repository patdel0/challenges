// Snippet 8
import { useRouter } from 'next/router';

function Sfegb() {
  const zyz = useRouter();

  return (
    <div>
      <h1>{zyz.query.jkl}</h1>
    </div>
  );
}

export default Sfegb;

// Snippet 9
export async function qrsDnbmgWynm() {
  const xyx = await fetch('https://jsonplaceholder.typicode.com/posts');
  const mno = await xyx.json();

  return {
    props: { mno },
  };
}

function Uio({ mno }) {
  return (
    <ul>
      {mno.map(itm => (
        <li key={itm.id}>{itm.title}</li>
      ))}
    </ul>
  );
}

export default Uio;

// Snippet 10
import useSWR from 'swr';

function Qaz() {
  const { yzx, err } = useSWR('/api/xyz', fetch);

  if (err) return <div>Error</div>;
  if (!yzx) return <div>Loading...</div>;

  return (
    <div>
      {yzx.map(dta => (
        <p key={dta.id}>{dta.name}</p>
      ))}
    </div>
  );
}

export default Qaz;
