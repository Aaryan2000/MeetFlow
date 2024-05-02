import { Input } from '@/components/ui/input'
import MeetingEventList from './_components/MeetingEventList'

function MeetingType() {
  

  return (
    <div className='p-5'>
      <div>
      <h2 className='font-bold text-2xl'>Meeting Event Type</h2>
      <Input placeholder="Search" className="max-w-xs mt-5"/>
      <hr></hr>
      </div>
      
      <MeetingEventList/>
    </div>
  )
}

export default MeetingType