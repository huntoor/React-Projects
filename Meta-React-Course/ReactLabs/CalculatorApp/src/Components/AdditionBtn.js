export default function AdditionBtn({ setResult, inputRef }) {
  function handlePlus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  return (
    <button onClick={handlePlus}>add</button>
  )
}