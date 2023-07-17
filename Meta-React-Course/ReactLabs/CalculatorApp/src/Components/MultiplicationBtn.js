export default function MultiplicationBtn({ setResult, inputRef }) {
  function handleTimes(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  return (
    <button onClick={handleTimes}>multiply</button>
  )
}