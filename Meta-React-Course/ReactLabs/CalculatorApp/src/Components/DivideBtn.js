export default function DivideBtn({ setResult, inputRef }) {
  function handleDivide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  return (
    <button onClick={handleDivide}>divide</button>
  )
}