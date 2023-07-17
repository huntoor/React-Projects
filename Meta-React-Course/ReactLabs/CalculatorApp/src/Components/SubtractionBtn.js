export default function SubtractionBtn({ setResult, inputRef }) {
  function handleMinus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };


  return (
    <button onClick={handleMinus}>subtract</button>
  )
}