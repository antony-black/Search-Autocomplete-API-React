export default function Refresh({handleRefresh}) {
  return(
    <div className="refresh-container">
      <button onClick={handleRefresh} >REFRESH</button>
    </div>
  )
}