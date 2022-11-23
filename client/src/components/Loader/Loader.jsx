import { PulseBubbleLoader } from "react-loaders-kit"
import './Loader.css'

export default function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 1,
    colors: ["#c59154", "#eadac0" , "#f3ece4" ],
  };
  return (
    <div className='loader'>
      <PulseBubbleLoader {...loaderProps} />
      <h2>Baby Steps</h2>
    </div>
  )
}

