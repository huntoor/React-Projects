export default function ResetInputBtn({ inputRef }) {
  function handleReset(e) { 
    e.preventDefault();
    inputRef.current.value = '';
  }; 

  return (
    <button onClick={handleReset}>reset input</button>
  )
}