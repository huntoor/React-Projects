export default function ResetResultBtn({ setResult }) {
  function handleReset(e) {
    e.preventDefault();
    setResult(0);
  };

  return (
    <button onClick={handleReset}>reset result</button>
  )
}